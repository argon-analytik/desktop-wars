import React, { useState, useEffect, useRef, useCallback } from 'react';

const SCREEN_WIDTH = 640;
const SCREEN_HEIGHT = 480;
const MENUBAR_HEIGHT = 16;
const GRID_SIZE = 16;

const GAME_STATES = {
  MENU: 'menu',
  SETUP: 'setup',
  PLAYING: 'playing',
  PAUSED: 'paused',
  INTERMISSION: 'intermission',
  GAMEOVER: 'gameover',
  WIN: 'win'
};

const createInitialPlayer = () => ({
  x: SCREEN_WIDTH / 2,
  y: SCREEN_HEIGHT / 2 + MENUBAR_HEIGHT,
  hp: 5,
  maxHp: 5,
  empCharge: 100,
  dashEnergy: 100,
  cpuHeat: 0,
  ramPressure: 0,
  isDashing: false,
  isHit: false,
  invincible: 0,
  upgrades: [],
  powerUp: null,
  powerUpTimer: 0
});

// Button Component
function Button({ onClick, children, disabled = false, variant = 'default' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '6px 16px',
        fontSize: 8,
        fontFamily: '"Press Start 2P", monospace',
        background: variant === 'primary' 
          ? 'linear-gradient(180deg, #5a5 0%, #494 100%)'
          : 'linear-gradient(180deg, #eee 0%, #ccc 100%)',
        border: '2px solid',
        borderColor: variant === 'primary' ? '#373 #252 #252 #373' : '#aaa #777 #777 #aaa',
        borderRadius: 4,
        cursor: disabled ? 'not-allowed' : 'pointer',
        color: variant === 'primary' ? '#fff' : '#333',
        opacity: disabled ? 0.5 : 1
      }}
    >
      {children}
    </button>
  );
}

// Window Component
function Window({ title, width = 300, children, x, y }) {
  return (
    <div style={{
      position: x !== undefined ? 'absolute' : 'relative',
      left: x, top: y, width,
      background: '#f4f4f4',
      border: '2px solid #444',
      borderRadius: 6,
      boxShadow: '6px 6px 0 rgba(0,0,0,0.25)',
      overflow: 'hidden'
    }}>
      <div style={{
        height: 18,
        background: 'linear-gradient(90deg, #6678 0%, #889a 50%, #6678 100%)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 6px',
        gap: 6
      }}>
        <div style={{ width: 10, height: 10, background: '#e55', border: '1px solid #b33', borderRadius: 2 }} />
        <span style={{ fontSize: 8, color: '#fff', fontWeight: 'bold' }}>{title}</span>
      </div>
      <div style={{ padding: 10 }}>{children}</div>
    </div>
  );
}

export default function DesktopWars() {
  const [gameState, setGameState] = useState(GAME_STATES.MENU);
  const [player, setPlayer] = useState(createInitialPlayer);
  const [enemies, setEnemies] = useState([]);
  const [projectiles, setProjectiles] = useState([]);
  const [pickups, setPickups] = useState([]);
  const [folderWalls, setFolderWalls] = useState([]);
  const [deployables, setDeployables] = useState([]);
  const [clutter, setClutter] = useState([]);
  const [popups, setPopups] = useState([]);
  const [mousePos, setMousePos] = useState({ x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 });
  const [keys, setKeys] = useState({});
  const [wave, setWave] = useState(0);
  const [waveTimer, setWaveTimer] = useState(90); // Seconds until next wave
  const [totalTime, setTotalTime] = useState(0); // Total elapsed time
  const [setupTimer, setSetupTimer] = useState(25);
  const [systemFolderHP, setSystemFolderHP] = useState(100);
  const [score, setScore] = useState(0);
  const [privacyScore, setPrivacyScore] = useState(100);
  const [seed, setSeed] = useState('');
  const [isShooting, setIsShooting] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [empExplosion, setEmpExplosion] = useState(null);
  
  const gameRef = useRef(null);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const shootCooldownRef = useRef(0);
  const spawnTimerRef = useRef(0);
  const popupTimerRef = useRef(10000);

  // Generate seed
  useEffect(() => {
    setSeed(Math.random().toString(36).substring(2, 10).toUpperCase());
  }, []);

  // Popup handler
  const handlePopupChoice = useCallback((popup, choice) => {
    let correct = false;
    if (popup.type === 'firewall') correct = (choice === 'deny');
    else if (popup.type === 'fake-update') correct = (choice === 'later');
    else if (popup.type === 'security-update') correct = (choice === 'accept');
    
    if (correct) {
      setPrivacyScore(prev => Math.min(100, prev + 8));
      setPlayer(prev => ({ ...prev, ramPressure: Math.max(0, prev.ramPressure - 8) }));
      setScore(s => s + 25);
    } else {
      setPlayer(prev => ({ ...prev, hp: prev.hp - 1 }));
    }
    setPopups([]);
  }, []);

  // Input handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      setKeys(prev => ({ ...prev, [key]: true }));
      
      if (e.code === 'Space') {
        e.preventDefault();
        setGameState(prev => {
          if (prev === GAME_STATES.PLAYING) return GAME_STATES.PAUSED;
          if (prev === GAME_STATES.PAUSED) return GAME_STATES.PLAYING;
          return prev;
        });
      }
      if (e.key === 'F1') {
        e.preventDefault();
        setShowHelp(prev => !prev);
      }
      
      // Q/E for popup choices - respects swapped buttons!
      if (key === 'q' || key === 'e') {
        setPopups(currentPopups => {
          if (currentPopups.length > 0) {
            const popup = currentPopups[0];
            let choice;
            
            // When swapped, Q and E are reversed!
            const effectiveKey = popup.swapped ? (key === 'q' ? 'e' : 'q') : key;
            
            if (effectiveKey === 'q') {
              // Q = Left button (safe when not swapped)
              if (popup.type === 'firewall') choice = 'deny';
              else if (popup.type === 'fake-update') choice = 'later';
              else if (popup.type === 'security-update') choice = 'accept';
            } else {
              // E = Right button (risky when not swapped)
              if (popup.type === 'firewall') choice = 'allow';
              else if (popup.type === 'fake-update') choice = 'install';
              else if (popup.type === 'security-update') choice = 'reject';
            }
            
            // Determine if correct
            let correct = false;
            if (popup.type === 'firewall') correct = (choice === 'deny');
            else if (popup.type === 'fake-update') correct = (choice === 'later');
            else if (popup.type === 'security-update') correct = (choice === 'accept');
            
            if (correct) {
              setPrivacyScore(prev => Math.min(100, prev + 8));
              setPlayer(prev => ({ ...prev, ramPressure: Math.max(0, prev.ramPressure - 8) }));
              setScore(s => s + 25);
            } else {
              setPlayer(prev => ({ ...prev, hp: prev.hp - 1 }));
            }
            
            return []; // Close popup
          }
          return currentPopups;
        });
      }
    };
    
    const handleKeyUp = (e) => {
      setKeys(prev => ({ ...prev, [e.key.toLowerCase()]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!gameRef.current) return;
    const rect = gameRef.current.getBoundingClientRect();
    const scaleX = SCREEN_WIDTH / rect.width;
    const scaleY = SCREEN_HEIGHT / rect.height;
    setMousePos({
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    });
  }, []);

  const triggerEMP = useCallback(() => {
    setPlayer(prev => ({ ...prev, empCharge: 0 }));
    setEnemies(prev => prev.map(e => ({ ...e, stunned: 120 })));
    setEmpExplosion({ x: player.x, y: player.y });
    setTimeout(() => setEmpExplosion(null), 600);
  }, [player.x, player.y]);

  // Main game loop
  useEffect(() => {
    if (gameState !== GAME_STATES.PLAYING) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const gameLoop = (timestamp) => {
      const deltaTime = Math.min(timestamp - lastTimeRef.current, 50);
      lastTimeRef.current = timestamp;

      // Update player
      setPlayer(prev => {
        // Check for RAM upgrade
        const hasRamUpgrade = prev.upgrades.includes('ram');
        
        // RAM pressure slows you down SIGNIFICANTLY!
        // RAM upgrade reduces slowdown effect by 50%
        const baseSpeed = 3.5;
        const slowdownFactor = hasRamUpgrade ? 0.004 : 0.008; // Half slowdown with upgrade
        const ramSlowdown = 1 - (prev.ramPressure * slowdownFactor);
        const speed = baseSpeed * Math.max(0.2, ramSlowdown);
        
        let newX = prev.x;
        let newY = prev.y;
        let isDashing = false;
        let newDashEnergy = prev.dashEnergy;
        
        if (keys['w'] || keys['arrowup']) newY -= speed;
        if (keys['s'] || keys['arrowdown']) newY += speed;
        if (keys['a'] || keys['arrowleft']) newX -= speed;
        if (keys['d'] || keys['arrowright']) newX += speed;
        
        if (keys['shift'] && prev.dashEnergy > 20) {
          const dx = mousePos.x - prev.x;
          const dy = mousePos.y - prev.y;
          const len = Math.sqrt(dx*dx + dy*dy) || 1;
          newX += (dx/len) * 10;
          newY += (dy/len) * 10;
          isDashing = true;
          newDashEnergy -= 1.5;
        } else {
          newDashEnergy = Math.min(100, prev.dashEnergy + 0.2);
        }
        
        newX = Math.max(16, Math.min(SCREEN_WIDTH - 16, newX));
        newY = Math.max(MENUBAR_HEIGHT + 16, Math.min(SCREEN_HEIGHT - 16, newY));
        
        let newPowerUp = prev.powerUp;
        let newPowerUpTimer = prev.powerUpTimer;
        if (prev.powerUp && prev.powerUpTimer > 0) {
          newPowerUpTimer--;
          if (newPowerUpTimer <= 0) {
            newPowerUp = null;
          }
        }
        
        return {
          ...prev,
          x: newX, y: newY,
          isDashing,
          dashEnergy: newDashEnergy,
          empCharge: Math.min(100, prev.empCharge + 0.15),
          cpuHeat: Math.max(0, prev.cpuHeat - 0.04), // Slower natural cooling
          invincible: Math.max(0, prev.invincible - 1),
          isHit: prev.invincible > 50,
          powerUp: newPowerUp,
          powerUpTimer: newPowerUpTimer
        };
      });

      // Shooting - CPU heat affects fire rate, overheating blocks shooting!
      shootCooldownRef.current -= deltaTime;
      const isOverheated = player.cpuHeat >= 90;
      
      // Check for hardware upgrades
      const hasFanUpgrade = player.upgrades.includes('fan');
      
      if (isShooting && shootCooldownRef.current <= 0 && popups.length === 0 && player.powerUp !== 'giant' && !isOverheated) {
        const dx = mousePos.x - player.x;
        const dy = mousePos.y - player.y;
        const len = Math.sqrt(dx*dx + dy*dy) || 1;
        const dirX = dx / len;
        const dirY = dy / len;
        const speed = 8;
        const angle = Math.atan2(dy, dx);
        
        // Spawn projectile from cursor tip (offset 14px in aim direction)
        const tipOffset = 14;
        const spawnX = player.x + dirX * tipOffset;
        const spawnY = player.y + dirY * tipOffset;
        
        // Determine shot pattern
        const isTriple = player.powerUp === 'triple';
        
        if (isTriple) {
          // Triple shot power-up: 3 projectiles
          const spread = 0.2;
          setProjectiles(prev => [
            ...prev,
            { x: spawnX, y: spawnY, vx: dirX * speed, vy: dirY * speed, id: Math.random() },
            { x: spawnX, y: spawnY, vx: Math.cos(angle - spread) * speed, vy: Math.sin(angle - spread) * speed, id: Math.random() },
            { x: spawnX, y: spawnY, vx: Math.cos(angle + spread) * speed, vy: Math.sin(angle + spread) * speed, id: Math.random() }
          ]);
        } else {
          // Single shot
          setProjectiles(prev => [...prev, { x: spawnX, y: spawnY, vx: dirX * speed, vy: dirY * speed, id: Math.random() }]);
        }
        
        // Fire rate affected by CPU heat (slower when hot)
        let baseFireRate = player.powerUp === 'rapid' ? 60 : 180;
        const heatPenalty = player.cpuHeat * 1.5; // Much slower at high heat
        shootCooldownRef.current = baseFireRate + heatPenalty;
        
        // Shooting increases CPU heat
        // Fan upgrade reduces heat buildup by 50%
        let heatIncrease = player.powerUp === 'rapid' ? 4 : 6;
        if (hasFanUpgrade) heatIncrease *= 0.5; // 50% less heat with fan!
        setPlayer(prev => ({ ...prev, cpuHeat: Math.min(100, prev.cpuHeat + heatIncrease) }));
      }

      // Update projectiles
      setProjectiles(prev => prev
        .map(p => ({ ...p, x: p.x + p.vx, y: p.y + p.vy }))
        .filter(p => p.x > -10 && p.x < SCREEN_WIDTH + 10 && p.y > MENUBAR_HEIGHT && p.y < SCREEN_HEIGHT + 10)
      );

      // Update enemies
      setEnemies(prev => prev.map(enemy => {
        if (enemy.stunned > 0) return { ...enemy, stunned: enemy.stunned - 1 };
        
        let targetX = 320, targetY = 280;
        
        // Spy-dots chase player
        if (enemy.type === 'spy-dot') {
          targetX = player.x;
          targetY = player.y;
        }
        
        // Popup-gremlins bounce around crazily
        if (enemy.type === 'popup-gremlin') {
          const bounceTimer = (enemy.bounceTimer || 0) + 1;
          let bounceAngle = enemy.bounceAngle || 0;
          
          // Change direction randomly every ~40-80 frames
          if (bounceTimer > 40 + Math.random() * 40) {
            bounceAngle = Math.random() * Math.PI * 2;
            return {
              ...enemy,
              x: enemy.x + Math.cos(bounceAngle) * enemy.speed * 2,
              y: enemy.y + Math.sin(bounceAngle) * enemy.speed * 2,
              bounceAngle,
              bounceTimer: 0,
              frame: (enemy.frame + 0.15) % 4
            };
          }
          
          // Move in current bounce direction, but also drift toward system folder
          const driftX = (320 - enemy.x) * 0.003;
          const driftY = (280 - enemy.y) * 0.003;
          let newX = enemy.x + Math.cos(bounceAngle) * enemy.speed + driftX;
          let newY = enemy.y + Math.sin(bounceAngle) * enemy.speed + driftY;
          
          // Bounce off walls
          if (newX < 10 || newX > SCREEN_WIDTH - 10) bounceAngle = Math.PI - bounceAngle;
          if (newY < MENUBAR_HEIGHT + 10 || newY > SCREEN_HEIGHT - 10) bounceAngle = -bounceAngle;
          
          newX = Math.max(10, Math.min(SCREEN_WIDTH - 10, newX));
          newY = Math.max(MENUBAR_HEIGHT + 10, Math.min(SCREEN_HEIGHT - 10, newY));
          
          return {
            ...enemy,
            x: newX,
            y: newY,
            bounceAngle,
            bounceTimer,
            frame: (enemy.frame + 0.15) % 4,
            isHit: false
          };
        }
        
        // Check for sticky note decoys - enemies prioritize them
        const stickyNotes = deployables.filter(d => d.type === 'sticky');
        if (stickyNotes.length > 0 && enemy.type !== 'spy-dot') {
          const nearest = stickyNotes.reduce((closest, note) => {
            const dist = Math.sqrt((enemy.x - note.x)**2 + (enemy.y - note.y)**2);
            return dist < closest.dist ? { note, dist } : closest;
          }, { note: null, dist: Infinity });
          
          if (nearest.dist < 150) {
            targetX = nearest.note.x + 12;
            targetY = nearest.note.y + 12;
          }
        }
        
        const dx = targetX - enemy.x;
        const dy = targetY - enemy.y;
        const len = Math.sqrt(dx*dx + dy*dy) || 1;
        
        let newX = enemy.x + (dx/len) * enemy.speed;
        let newY = enemy.y + (dy/len) * enemy.speed;
        
        // Collision with folder walls
        for (const wall of folderWalls) {
          if (wall.hp <= 0) continue;
          const wallDist = Math.sqrt((newX - wall.x - 12)**2 + (newY - wall.y - 12)**2);
          if (wallDist < enemy.size / 2 + 12) {
            // Blocked by wall - damage it slightly
            setFolderWalls(walls => walls.map(w => 
              w.id === wall.id ? { ...w, hp: w.hp - 0.01 } : w
            ));
            newX = enemy.x;
            newY = enemy.y;
            break;
          }
        }
        
        return {
          ...enemy,
          x: newX,
          y: newY,
          frame: (enemy.frame + 0.08) % 4,
          isHit: false
        };
      }));
      
      // Watchdog auto-turret
      const watchdog = deployables.find(d => d.type === 'watchdog');
      if (watchdog && enemies.length > 0) {
        // Find nearest enemy
        let nearestEnemy = null;
        let nearestDist = 200; // Range
        for (const enemy of enemies) {
          const dist = Math.sqrt((enemy.x - watchdog.x - 12)**2 + (enemy.y - watchdog.y - 12)**2);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearestEnemy = enemy;
          }
        }
        
        // Shoot at nearest enemy (every ~30 frames)
        if (nearestEnemy && Math.random() < 0.03) {
          const dx = nearestEnemy.x - watchdog.x - 12;
          const dy = nearestEnemy.y - watchdog.y - 12;
          const len = Math.sqrt(dx*dx + dy*dy) || 1;
          setProjectiles(prev => [...prev, {
            x: watchdog.x + 12,
            y: watchdog.y + 12,
            vx: (dx/len) * 6,
            vy: (dy/len) * 6,
            id: Math.random(),
            fromWatchdog: true
          }]);
        }
      }

      // Projectile hits
      setProjectiles(prev => {
        const remaining = [];
        for (const proj of prev) {
          let hit = false;
          setEnemies(enemies => enemies.map(enemy => {
            if (hit) return enemy;
            const dist = Math.sqrt((proj.x - enemy.x)**2 + (proj.y - enemy.y)**2);
            if (dist < enemy.size / 2 + 5) {
              hit = true;
              const newHp = enemy.hp - 1;
              if (newHp <= 0) {
                // Drop item
                const rand = Math.random();
                let dropType = null;
                if (rand < 0.20) dropType = 'apple';
                else if (rand < 0.28) dropType = 'coolant';
                else if (rand < 0.36) dropType = 'powerup-rapid';
                else if (rand < 0.44) dropType = 'powerup-triple';
                else if (rand < 0.50) dropType = 'powerup-giant';
                
                if (dropType) {
                  setPickups(p => [...p, { x: enemy.x, y: enemy.y, type: dropType, id: Math.random() }]);
                }
                
                // Drop clutter (junk files) - 70% chance
                if (Math.random() < 0.7) {
                  setClutter(c => [...c, { 
                    x: enemy.x + (Math.random() - 0.5) * 30, 
                    y: enemy.y + (Math.random() - 0.5) * 30, 
                    id: Math.random() 
                  }]);
                  // Clutter increases RAM pressure A LOT
                  setPlayer(p => ({ ...p, ramPressure: Math.min(100, p.ramPressure + 8) }));
                }
                
                setScore(s => s + 10);
                return null;
              }
              return { ...enemy, hp: newHp, isHit: true };
            }
            return enemy;
          }).filter(Boolean));
          if (!hit) remaining.push(proj);
        }
        return remaining;
      });

      // Player collision with enemies
      if (player.invincible <= 0) {
        const collisionRadius = player.powerUp === 'giant' ? 24 : 10;
        for (const enemy of enemies) {
          if (enemy.stunned > 0) continue;
          const dist = Math.sqrt((enemy.x - player.x)**2 + (enemy.y - player.y)**2);
          if (dist < enemy.size / 2 + collisionRadius) {
            if (player.powerUp === 'giant') {
              setEnemies(prev => prev.map(e => {
                if (e.id === enemy.id) {
                  if (e.hp <= 3) {
                    setScore(s => s + 10);
                    return null;
                  }
                  return { ...e, hp: e.hp - 3, stunned: 30 };
                }
                return e;
              }).filter(Boolean));
            } else if (!player.isDashing) {
              setPlayer(prev => ({ ...prev, hp: prev.hp - 1, invincible: 60, isHit: true }));
              break;
            }
          }
        }
      }

      // System folder damage
      for (const enemy of enemies) {
        if (enemy.stunned > 0) continue;
        const dist = Math.sqrt((enemy.x - 320)**2 + (enemy.y - 280)**2);
        if (dist < 35) {
          setSystemFolderHP(prev => Math.max(0, prev - 0.05));
        }
      }

      // Pickup collection
      setPickups(prev => prev.filter(pickup => {
        const dist = Math.sqrt((pickup.x - player.x)**2 + (pickup.y - player.y)**2);
        if (dist < 20) {
          if (pickup.type === 'apple') setPlayer(p => ({ ...p, hp: Math.min(p.maxHp, p.hp + 1) }));
          else if (pickup.type === 'coolant') setPlayer(p => ({ ...p, cpuHeat: Math.max(0, p.cpuHeat - 60) }));
          else if (pickup.type === 'powerup-rapid') setPlayer(p => ({ ...p, powerUp: 'rapid', powerUpTimer: 480 }));
          else if (pickup.type === 'powerup-triple') setPlayer(p => ({ ...p, powerUp: 'triple', powerUpTimer: 480 }));
          else if (pickup.type === 'powerup-giant') setPlayer(p => ({ ...p, powerUp: 'giant', powerUpTimer: 360 }));
          return false;
        }
        return true;
      }));

      // Spawn enemies - gradual difficulty based on wave and time
      spawnTimerRef.current -= deltaTime;
      if (spawnTimerRef.current <= 0) {
        // Wave 1: Slow, only basic enemies
        // Wave 2: Medium, add gremlins
        // Wave 3: Fast, all enemy types
        
        const spawnRates = { 1: 3500, 2: 2800, 3: 2200 };
        const waveTimeBonus = Math.min((90 - waveTimer) * 15, 800); // Gets faster within each wave
        spawnTimerRef.current = Math.max(1200, (spawnRates[wave] || 3000) - waveTimeBonus);
        
        // Choose spawn side: 0 = left, 1 = right, 2 = bottom
        const side = Math.floor(Math.random() * 3);
        let spawnX, spawnY;
        
        if (side === 0) {
          spawnX = -15;
          spawnY = MENUBAR_HEIGHT + 50 + Math.random() * (SCREEN_HEIGHT - MENUBAR_HEIGHT - 100);
        } else if (side === 1) {
          spawnX = SCREEN_WIDTH + 15;
          spawnY = MENUBAR_HEIGHT + 50 + Math.random() * (SCREEN_HEIGHT - MENUBAR_HEIGHT - 100);
        } else {
          spawnX = 50 + Math.random() * (SCREEN_WIDTH - 100);
          spawnY = SCREEN_HEIGHT + 15;
        }
        
        // Always spawn basic regi-mite
        const enemySpeed = 0.5 + (wave * 0.15) + Math.random() * 0.2;
        setEnemies(prev => [...prev, {
          id: Math.random(),
          type: 'regi-mite',
          x: spawnX,
          y: spawnY,
          hp: wave >= 3 ? 3 : 2,
          size: 20,
          speed: enemySpeed,
          frame: 0,
          stunned: 0
        }]);
        
        // Wave 2+: Add popup-gremlins (crazy bouncy enemies)
        if (wave >= 2 && Math.random() < 0.25) {
          const gSide = Math.floor(Math.random() * 3);
          let gX, gY;
          if (gSide === 0) { gX = -15; gY = MENUBAR_HEIGHT + 80 + Math.random() * 200; }
          else if (gSide === 1) { gX = SCREEN_WIDTH + 15; gY = MENUBAR_HEIGHT + 80 + Math.random() * 200; }
          else { gX = 80 + Math.random() * (SCREEN_WIDTH - 160); gY = SCREEN_HEIGHT + 15; }
          
          setEnemies(prev => [...prev, {
            id: Math.random(),
            type: 'popup-gremlin',
            x: gX,
            y: gY,
            hp: 1.5,
            size: 18,
            speed: 1.3 + Math.random() * 0.5,
            frame: Math.random() * 4,
            stunned: 0,
            bounceAngle: Math.random() * Math.PI * 2,
            bounceTimer: 0
          }]);
        }
        
        // Wave 2+: Add spy-dots (less common)
        if (wave >= 2 && Math.random() < 0.15) {
          const sSide = Math.floor(Math.random() * 3);
          let sX, sY;
          if (sSide === 0) { sX = -10; sY = MENUBAR_HEIGHT + 50 + Math.random() * 300; }
          else if (sSide === 1) { sX = SCREEN_WIDTH + 10; sY = MENUBAR_HEIGHT + 50 + Math.random() * 300; }
          else { sX = 50 + Math.random() * (SCREEN_WIDTH - 100); sY = SCREEN_HEIGHT + 10; }
          
          setEnemies(prev => [...prev, {
            id: Math.random(),
            type: 'spy-dot',
            x: sX,
            y: sY,
            hp: 0.5,
            size: 6,
            speed: 0.35,
            frame: 0,
            stunned: 0
          }]);
        }
        
        // Wave 3: Extra enemies spawn
        if (wave === 3 && Math.random() < 0.3) {
          const eSide = Math.floor(Math.random() * 3);
          let eX, eY;
          if (eSide === 0) { eX = -15; eY = MENUBAR_HEIGHT + 100 + Math.random() * 200; }
          else if (eSide === 1) { eX = SCREEN_WIDTH + 15; eY = MENUBAR_HEIGHT + 100 + Math.random() * 200; }
          else { eX = 100 + Math.random() * (SCREEN_WIDTH - 200); eY = SCREEN_HEIGHT + 15; }
          
          setEnemies(prev => [...prev, {
            id: Math.random(),
            type: Math.random() < 0.5 ? 'regi-mite' : 'popup-gremlin',
            x: eX,
            y: eY,
            hp: Math.random() < 0.5 ? 2 : 1.5,
            size: Math.random() < 0.5 ? 20 : 18,
            speed: 0.8 + Math.random() * 0.4,
            frame: 0,
            stunned: 0,
            bounceAngle: Math.random() * Math.PI * 2,
            bounceTimer: 0
          }]);
        }
      }

      // Popup spawning - starts in wave 1, increases over time
      popupTimerRef.current -= deltaTime;
      if (popupTimerRef.current <= 0 && popups.length === 0 && wave >= 1) {
        // Longer delays at start, shorter as waves progress
        const baseDelay = { 1: 18000, 2: 14000, 3: 10000 }[wave] || 15000;
        const waveProgress = (90 - waveTimer) / 90; // 0 to 1 within wave
        popupTimerRef.current = baseDelay * (1 - waveProgress * 0.3);
        
        // Popup chance increases with waves
        const popupChance = { 1: 0.4, 2: 0.55, 3: 0.7 }[wave] || 0.5;
        
        if (Math.random() < popupChance) {
          const rand = Math.random();
          let popupType = rand < 0.4 ? 'firewall' : rand < 0.7 ? 'fake-update' : 'security-update';
          
          // Swap chance increases with wave: Wave 1 = 15%, Wave 2 = 40%, Wave 3 = 65%
          const swapChance = { 1: 0.15, 2: 0.40, 3: 0.65 }[wave] || 0.3;
          
          setPopups([{
            id: Math.random(),
            type: popupType,
            x: 80 + Math.random() * 360,
            y: 50 + Math.random() * 250,
            swapped: Math.random() < swapChance,
            isLegit: popupType === 'security-update'
          }]);
        }
      }

      // Wave timer - counts down, triggers next wave
      setWaveTimer(prev => {
        const newTime = prev - deltaTime / 1000;
        if (newTime <= 0) {
          if (wave === 1) {
            setWave(2);
            return 90; // Reset for wave 2
          } else if (wave === 2) {
            setGameState(GAME_STATES.INTERMISSION);
            return 90;
          } else if (wave === 3) {
            setGameState(GAME_STATES.WIN);
            return 0;
          }
        }
        return Math.max(0, newTime);
      });
      
      // Track total time
      setTotalTime(prev => prev + deltaTime / 1000);

      // Game over check
      if (player.hp <= 0 || systemFolderHP <= 0) {
        setGameState(GAME_STATES.GAMEOVER);
        return;
      }

      animFrameRef.current = requestAnimationFrame(gameLoop);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(gameLoop);
    
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [gameState, keys, isShooting, mousePos, wave, player, enemies, popups, systemFolderHP, folderWalls, deployables, waveTimer, clutter]);

  // Setup timer
  useEffect(() => {
    if (gameState !== GAME_STATES.SETUP) return;
    const interval = setInterval(() => {
      setSetupTimer(prev => {
        if (prev <= 1) {
          setGameState(GAME_STATES.PLAYING);
          setWave(1);
          return 25;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState]);

  const startGame = useCallback(() => {
    setPlayer(createInitialPlayer());
    setEnemies([]);
    setProjectiles([]);
    setPickups([]);
    setClutter([]);
    setPopups([]);
    setFolderWalls([]);
    setDeployables([]);
    setWave(0);
    setWaveTimer(90); // 90 seconds per wave
    setTotalTime(0);
    setSetupTimer(25);
    setSystemFolderHP(100);
    setScore(0);
    setPrivacyScore(100);
    setIsShooting(false);
    setEmpExplosion(null);
    shootCooldownRef.current = 0;
    spawnTimerRef.current = 3000;
    popupTimerRef.current = 15000;
    setSeed(Math.random().toString(36).substring(2, 10).toUpperCase());
    setTimeout(() => setGameState(GAME_STATES.SETUP), 50);
  }, []);

  const continueFromIntermission = useCallback((upgrade) => {
    setPlayer(prev => ({ ...prev, upgrades: [...prev.upgrades, upgrade] }));
    setWave(3);
    setWaveTimer(90); // Reset timer for wave 3
    setTimeout(() => setGameState(GAME_STATES.PLAYING), 100);
  }, []);

  // Render
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#1a1a2e',
      fontFamily: '"Press Start 2P", monospace',
      gap: 16
    }}>
      {/* Top Section: Left Panel + Monitor + Right Panel */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        
        {/* LEFT PANEL - Controls & Enemies */}
        <div style={{
          width: 180,
          background: 'linear-gradient(180deg, #2a2a3c 0%, #1a1a2a 100%)',
          borderRadius: 12,
          padding: 14,
          color: '#ccc',
          fontSize: 7,
          lineHeight: 1.9,
          boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
        }}>
          <div style={{ fontSize: 11, color: '#fff', marginBottom: 14, textAlign: 'center' }}>
            🖱️ DESKTOP WARS
          </div>
          
          <div style={{ fontSize: 9, color: '#8af', marginBottom: 8 }}>CONTROLS</div>
          <div style={{ marginBottom: 14 }}>
            <div>WASD - Move</div>
            <div>Mouse - Aim</div>
            <div>Click - Shoot</div>
            <div>Right - EMP</div>
            <div>Shift - Dash</div>
            <div>Q/E - Popups</div>
          </div>
          
          <div style={{ fontSize: 9, color: '#fa0', marginBottom: 8 }}>ENEMIES</div>
          <div style={{ lineHeight: 2.4 }}>
            <div><span style={{ fontSize: 14 }}>📦</span> Regi-Mite</div>
            <div><span style={{ fontSize: 14 }}>🤪</span> Gremlin</div>
            <div><span style={{ fontSize: 14 }}>🔴</span> Spy-Dot</div>
          </div>
        </div>
        
        {/* CRT Monitor */}
        <div style={{
          width: 800,
          height: 580,
          background: 'linear-gradient(145deg, #4a4a5c 0%, #2a2a3c 100%)',
          borderRadius: 28,
          padding: '12px 20px 16px',
          boxShadow: '0 25px 80px rgba(0,0,0,0.6)'
        }}>
          <div style={{ textAlign: 'center', color: '#777', fontSize: 7, letterSpacing: 6, marginBottom: 6 }}>
            PIXELVISION
          </div>
        
        <div style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          margin: '0 auto',
          background: '#000',
          borderRadius: 12,
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div
            ref={gameRef}
            onMouseMove={handleMouseMove}
            onMouseDown={(e) => { e.preventDefault(); if (e.button === 0) setIsShooting(true); if (e.button === 2 && player.empCharge >= 100) triggerEMP(); }}
            onMouseUp={(e) => { if (e.button === 0) setIsShooting(false); }}
            onMouseLeave={() => setIsShooting(false)}
            onContextMenu={(e) => e.preventDefault()}
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT,
              position: 'relative',
              cursor: gameState === GAME_STATES.PLAYING ? 'none' : 'default'
            }}
          >
            {/* Desktop Background */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #d4c4a8 0%, #bfad84 100%)' }} />
            
            {/* Menu Bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: MENUBAR_HEIGHT,
              background: 'linear-gradient(180deg, #f0f0f0 0%, #d8d8d8 100%)',
              borderBottom: '1px solid #999',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0 6px', fontSize: 7, zIndex: 100
            }}>
              <div style={{ display: 'flex', gap: 10 }}>
                <span style={{ fontWeight: 'bold' }}>Desk</span>
                <span>File</span>
                <span>Security</span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} style={{ width: 3, height: 2 + i * 2, background: player.hp >= i ? '#222' : '#bbb', borderRadius: 1 }} />
                  ))}
                </div>
                <div style={{
                  width: 12, height: 12, borderRadius: '50%',
                  background: player.empCharge >= 100 ? '#4a90d9' : '#999',
                  boxShadow: player.empCharge >= 100 ? '0 0 6px #4af' : 'none'
                }} />
                {/* CPU Heat indicator bar */}
                <div style={{
                  width: 24, height: 8,
                  background: '#ddd',
                  borderRadius: 2,
                  border: '1px solid #888',
                  overflow: 'hidden'
                }} title={`CPU: ${Math.floor(player.cpuHeat)}%`}>
                  <div style={{
                    width: `${player.cpuHeat}%`,
                    height: '100%',
                    background: player.cpuHeat >= 90 ? '#f00' : player.cpuHeat > 60 ? '#f80' : '#fa0',
                    animation: player.cpuHeat >= 90 ? 'blink 0.2s infinite' : 'none'
                  }} />
                </div>
                {/* RAM pressure indicator bar */}
                <div style={{
                  width: 24, height: 8,
                  background: '#ddd',
                  borderRadius: 2,
                  border: '1px solid #888',
                  overflow: 'hidden'
                }} title={`RAM: ${Math.floor(player.ramPressure)}%`}>
                  <div style={{
                    width: `${player.ramPressure}%`,
                    height: '100%',
                    background: player.ramPressure > 70 ? '#e55' : player.ramPressure > 40 ? '#ea5' : '#5a5'
                  }} />
                </div>
                {player.powerUp && (
                  <span style={{
                    padding: '1px 4px', borderRadius: 2,
                    background: player.powerUp === 'rapid' ? '#f80' : player.powerUp === 'triple' ? '#08f' : '#fa0',
                    color: '#fff', fontSize: 5
                  }}>
                    {player.powerUp.toUpperCase()}
                  </span>
                )}
                {/* Hardware upgrade indicator */}
                {player.upgrades.length > 0 && (
                  <span style={{
                    padding: '1px 4px', borderRadius: 2,
                    background: player.upgrades.includes('ram') ? '#0a0' : '#08f',
                    color: '#fff', fontSize: 5,
                    border: '1px solid #fff'
                  }}>
                    {player.upgrades.includes('ram') ? '🧠' : '🌀'}
                  </span>
                )}
                {/* Overheat warning */}
                {player.cpuHeat >= 90 && (
                  <span style={{
                    padding: '1px 4px', borderRadius: 2,
                    background: '#f00',
                    color: '#fff', fontSize: 5,
                    animation: 'blink 0.3s infinite'
                  }}>
                    🔥OVERHEAT!
                  </span>
                )}
                {/* RAM warning */}
                {player.ramPressure >= 60 && (
                  <span style={{
                    padding: '1px 4px', borderRadius: 2,
                    background: player.ramPressure >= 80 ? '#a00' : '#a50',
                    color: '#fff', fontSize: 5,
                    animation: player.ramPressure >= 80 ? 'blink 0.5s infinite' : 'none'
                  }}>
                    {player.ramPressure >= 80 ? '🐌SLOW!' : '📊RAM!'}
                  </span>
                )}
                {/* Clock showing time until next wave */}
                <div style={{ 
                  fontFamily: 'monospace', fontSize: 8,
                  background: '#222', color: '#0f0',
                  padding: '1px 6px', borderRadius: 3,
                  border: '1px solid #444'
                }}>
                  {wave > 0 ? (
                    <>
                      <span style={{ color: '#888' }}>W{wave}</span>
                      {' '}
                      <span style={{ color: waveTimer <= 10 ? '#f55' : '#0f0' }}>
                        {String(Math.floor(waveTimer / 60)).padStart(2, '0')}:{String(Math.floor(waveTimer % 60)).padStart(2, '0')}
                      </span>
                    </>
                  ) : (
                    <span style={{ color: '#888' }}>--:--</span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Game States */}
            {gameState === GAME_STATES.MENU && (
              <div style={{ position: 'absolute', inset: 0, top: MENUBAR_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Window title="Desktop Wars" width={380}>
                  <div style={{ textAlign: 'center' }}>
                    {/* Cursor SVG */}
                    <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                      <svg width="48" height="48" viewBox="0 0 28 28">
                        <polygon 
                          points="14,3 4,20 14,15 24,20" 
                          fill="#fff" 
                          stroke="#111" 
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h1 style={{ fontSize: 14, marginBottom: 6 }}>SYSTEM INTEGRITY</h1>
                    <p style={{ fontSize: 6, color: '#666', marginBottom: 20 }}>Defend your desktop against malware!</p>
                    <div style={{ marginBottom: 20 }}>
                      <Button variant="primary" onClick={startGame}>START GAME</Button>
                    </div>
                    <div style={{ fontSize: 6, color: '#888', lineHeight: 1.8 }}>
                      <p><b>WASD</b> - Move | <b>Mouse</b> - Aim | <b>Click</b> - Shoot</p>
                      <p><b>Right Click</b> - EMP | <b>Shift</b> - Dash</p>
                      <p><b>Q/E</b> - Popup buttons <span style={{ color: '#fa0' }}>(watch for swaps!)</span></p>
                    </div>
                  </div>
                </Window>
              </div>
            )}
            
            {gameState === GAME_STATES.SETUP && (
              <SetupPhase 
                setupTimer={setupTimer}
                folderWalls={folderWalls}
                setFolderWalls={setFolderWalls}
                deployables={deployables}
                setDeployables={setDeployables}
                onStart={() => { setGameState(GAME_STATES.PLAYING); setWave(1); }}
                mousePos={mousePos}
              />
            )}
            
            {(gameState === GAME_STATES.PLAYING || gameState === GAME_STATES.PAUSED) && (
              <>
                <SystemFolder x={320} y={280} hp={systemFolderHP} />
                
                {/* Trash can in corner */}
                <Trash x={580} y={420} clutter={clutter} setClutter={setClutter} setPlayer={setPlayer} />
                
                {/* Clutter on desktop */}
                {clutter.map(c => <Clutter key={c.id} {...c} />)}
                
                {/* Folder Walls */}
                {folderWalls.filter(w => w.hp > 0).map(wall => <FolderWall key={wall.id} {...wall} />)}
                
                {/* Deployables */}
                {deployables.map(d => <Deployable key={d.id} {...d} />)}
                
                {/* EMP Explosion */}
                {empExplosion && <EMPExplosion x={empExplosion.x} y={empExplosion.y} />}
                
                {/* Pickups */}
                {pickups.map(p => <Pickup key={p.id} {...p} />)}
                
                {/* Enemies */}
                {enemies.map(e => <Enemy key={e.id} {...e} />)}
                
                {/* Projectiles */}
                {projectiles.map(p => (
                  <div key={p.id} style={{
                    position: 'absolute',
                    left: p.x - 4, top: p.y - 4,
                    width: 8, height: 8,
                    background: 'radial-gradient(circle, #ff8 0%, #aa4 100%)',
                    borderRadius: '50%',
                    boxShadow: '0 0 6px #ff8',
                    pointerEvents: 'none'
                  }} />
                ))}
                
                {/* Player */}
                <PlayerCursor {...player} mousePos={mousePos} />
                
                {/* Popups */}
                {popups.map(popup => <PopupWindow key={popup.id} popup={popup} onChoice={handlePopupChoice} />)}
                
                {gameState === GAME_STATES.PAUSED && (
                  <div style={{
                    position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 500
                  }}>
                    <Window title="⏸ PAUSED" width={220}>
                      <div style={{ textAlign: 'center', padding: 12 }}>
                        <p style={{ fontSize: 7, marginBottom: 16 }}>Press SPACE to continue</p>
                        <Button onClick={() => setGameState(GAME_STATES.MENU)}>Quit to Menu</Button>
                      </div>
                    </Window>
                  </div>
                )}
              </>
            )}
            
            {gameState === GAME_STATES.INTERMISSION && (
              <div style={{
                position: 'absolute', inset: 0, top: MENUBAR_HEIGHT, background: 'rgba(0,0,0,0.6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200
              }}>
                <Window title="🎖️ Wave 2 Complete!" width={340}>
                  <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <p style={{ fontSize: 8, color: '#666' }}>Choose a hardware upgrade for Wave 3:</p>
                  </div>
                  <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                    <div onClick={() => continueFromIntermission('ram')} style={{
                      width: 120, padding: 14, background: '#fff', border: '3px solid #0a0',
                      borderRadius: 8, cursor: 'pointer', textAlign: 'center',
                      transition: 'transform 0.1s',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{ fontSize: 32, marginBottom: 8 }}>🧠</div>
                      <div style={{ fontSize: 8, fontWeight: 'bold', color: '#080' }}>RAM Upgrade</div>
                      <div style={{ fontSize: 6, color: '#888', marginTop: 4 }}>50% less slowdown from clutter</div>
                    </div>
                    <div onClick={() => continueFromIntermission('fan')} style={{
                      width: 120, padding: 14, background: '#fff', border: '3px solid #08f',
                      borderRadius: 8, cursor: 'pointer', textAlign: 'center',
                      transition: 'transform 0.1s',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{ fontSize: 32, marginBottom: 8 }}>🌀</div>
                      <div style={{ fontSize: 8, fontWeight: 'bold', color: '#06c' }}>Cooling Fan</div>
                      <div style={{ fontSize: 6, color: '#888', marginTop: 4 }}>50% less CPU heat buildup</div>
                    </div>
                  </div>
                </Window>
              </div>
            )}
            
            {gameState === GAME_STATES.GAMEOVER && (
              <div style={{
                position: 'absolute', inset: 0, top: MENUBAR_HEIGHT, background: 'rgba(80,0,0,0.85)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 300
              }}>
                <Window title="⚠️ GAME OVER" width={300}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 36, marginBottom: 10 }}>💀</div>
                    <h2 style={{ fontSize: 12, color: '#d44', marginBottom: 10 }}>SYSTEM FAILURE</h2>
                    <div style={{ background: '#222', color: '#0f0', padding: 12, borderRadius: 4, marginBottom: 20 }}>
                      <div>SCORE: {score}</div>
                    </div>
                    <Button variant="primary" onClick={startGame}>RESTART</Button>
                  </div>
                </Window>
              </div>
            )}
            
            {gameState === GAME_STATES.WIN && (
              <div style={{
                position: 'absolute', inset: 0, top: MENUBAR_HEIGHT, background: 'rgba(0,80,0,0.7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 300
              }}>
                <Window title="✓ YOU WIN!" width={300}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 36, marginBottom: 10 }}>🏆</div>
                    <div style={{ background: '#f8f8f8', padding: 14, borderRadius: 6, marginBottom: 16 }}>
                      <div style={{ fontSize: 9 }}>Score: <span style={{ color: '#4a4', fontWeight: 'bold' }}>{score}</span></div>
                    </div>
                    <Button variant="primary" onClick={startGame}>Play Again</Button>
                  </div>
                </Window>
              </div>
            )}
            
            {/* Help Overlay */}
            {showHelp && (
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 500
              }}>
                <Window title="📖 Help" width={350}>
                  <div style={{ fontSize: 7, lineHeight: 1.8 }}>
                    <p><b>WASD</b> - Move cursor</p>
                    <p><b>Mouse</b> - Aim crosshair</p>
                    <p><b>Left Click</b> - Shoot</p>
                    <p><b>Right Click</b> - EMP (stuns all)</p>
                    <p><b>Shift</b> - Dash</p>
                    <p style={{ color: '#4a4' }}><b>Q</b> - Safe popup choice</p>
                    <p style={{ color: '#a44' }}><b>E</b> - Risky popup choice</p>
                    <div style={{ marginTop: 10, borderTop: '1px solid #ccc', paddingTop: 10 }}>
                      <p><b>Power-ups:</b></p>
                      <p>⚡ Rapid Fire | ✦ Triple Shot | 🛡️ Giant Mode</p>
                    </div>
                  </div>
                  <div style={{ marginTop: 14, textAlign: 'center' }}>
                    <Button onClick={() => setShowHelp(false)}>Close (F1)</Button>
                  </div>
                </Window>
              </div>
            )}
            
            {/* CRT Effects */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
              pointerEvents: 'none', zIndex: 80
            }} />
          </div>
        </div>
        
        {/* CRT Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 10 }}>
          {['PWR', 'PAUSE', 'HELP', 'RESET'].map(label => (
            <div key={label} onClick={() => {
              if (label === 'PWR') setGameState(GAME_STATES.MENU);
              if (label === 'PAUSE' && gameState === GAME_STATES.PLAYING) setGameState(GAME_STATES.PAUSED);
              if (label === 'HELP') setShowHelp(true);
              if (label === 'RESET') startGame();
            }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
              <div style={{
                width: 28, height: 28,
                background: 'linear-gradient(180deg, #5a5a6c 0%, #2a2a3c 100%)',
                border: '2px solid #222', borderRadius: 5,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <div style={{ width: 5, height: 5, background: label === 'PWR' ? '#4a4' : '#888', borderRadius: '50%' }} />
              </div>
              <span style={{ fontSize: 6, color: '#666' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* RIGHT PANEL - Power-Ups & Items */}
      <div style={{
        width: 180,
        background: 'linear-gradient(180deg, #2a2a3c 0%, #1a1a2a 100%)',
        borderRadius: 12,
        padding: 14,
        color: '#ccc',
        fontSize: 7,
        lineHeight: 1.9,
        boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
      }}>
        <div style={{ fontSize: 9, color: '#5f5', marginBottom: 10 }}>POWER-UPS</div>
        <div style={{ lineHeight: 2.4, marginBottom: 14 }}>
          <div><span style={{ fontSize: 14 }}>🍎</span> Heals HP</div>
          <div><span style={{ fontSize: 14 }}>❄️</span> Cools CPU</div>
          <div><span style={{ fontSize: 14 }}>🔥</span> Rapid Fire</div>
          <div><span style={{ fontSize: 14 }}>🔱</span> Triple Shot</div>
          <div><span style={{ fontSize: 14 }}>🛡️</span> Giant Mode</div>
        </div>
        
        <div style={{ fontSize: 9, color: '#8af', marginBottom: 10 }}>DEPLOYABLES</div>
        <div style={{ lineHeight: 2.4 }}>
          <div><span style={{ fontSize: 14 }}>📁</span> Wall</div>
          <div><span style={{ fontSize: 14 }}>🐕</span> Watchdog</div>
          <div><span style={{ fontSize: 14 }}>📝</span> Decoy</div>
        </div>
      </div>
      
      </div>{/* End of top flex row */}
      
      {/* BOTTOM PANEL - Resources & Dark Patterns */}
      <div style={{
        display: 'flex',
        gap: 30,
        background: 'linear-gradient(180deg, #2a2a3c 0%, #1a1a2a 100%)',
        borderRadius: 12,
        padding: '12px 24px',
        color: '#ccc',
        fontSize: 8,
        boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
      }}>
        {/* Mission */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: '#8af', marginBottom: 8 }}>MISSION</div>
          <div style={{ fontSize: 7, lineHeight: 1.8 }}>
            Defend your desktop! Protect the <span style={{ color: '#fa0' }}>System Folder</span> in the center from malware.
          </div>
        </div>
        
        {/* Resources */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: '#f55', marginBottom: 8 }}>RESOURCES</div>
          <div style={{ fontSize: 7, lineHeight: 2 }}>
            <div><span style={{ fontSize: 12 }}>🔥</span> <span style={{ color: '#faa' }}>CPU</span> - Overheats when shooting → ❄️ helps</div>
            <div><span style={{ fontSize: 12 }}>📊</span> <span style={{ color: '#ffa' }}>RAM</span> - Clutter slows you down → 🗑️ empty</div>
          </div>
        </div>
        
        {/* Dark Patterns */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: '#f8f', marginBottom: 8 }}>DARK PATTERNS</div>
          <div style={{ fontSize: 7, lineHeight: 2 }}>
            <div><span style={{ fontSize: 12 }}>🛡️</span> Firewall → <span style={{ color: '#5f5' }}>Deny</span> is correct</div>
            <div><span style={{ fontSize: 12 }}>📦</span> Fake Update → <span style={{ color: '#5f5' }}>Later</span> is correct</div>
            <div><span style={{ fontSize: 12 }}>🔒</span> Security → <span style={{ color: '#5f5' }}>Install</span> is correct</div>
            <div style={{ color: '#fa0', marginTop: 4 }}>⚠️ Q/E buttons get swapped!</div>
          </div>
        </div>
      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        @keyframes wobble { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
      `}</style>
    </div>
  );
}

// Player Component
function PlayerCursor({ x, y, hp, isDashing, isHit, empCharge, invincible, mousePos, powerUp, cpuHeat, ramPressure }) {
  const angle = Math.atan2(mousePos.y - y, mousePos.x - x);
  const angleDeg = angle * 180 / Math.PI;
  const isGiant = powerUp === 'giant';
  const cursorSize = isGiant ? 48 : 28;
  const isOverheated = cpuHeat >= 90;
  const isSlowed = ramPressure >= 60;
  
  // Visual effects based on status
  let cursorFilter = 'none';
  let cursorColor = '#fff';
  
  if (isHit) {
    cursorFilter = 'brightness(2.5)';
  } else if (isGiant) {
    cursorFilter = 'drop-shadow(0 0 8px #ff0)';
    cursorColor = '#ffd700';
  } else if (isOverheated) {
    cursorFilter = 'drop-shadow(0 0 6px #f00)';
    cursorColor = '#ff6666';
  } else if (isSlowed) {
    cursorFilter = 'drop-shadow(0 0 4px #0af)';
    cursorColor = '#aaddff';
  }
  
  if (hp <= 2) cursorColor = '#fcc';
  
  return (
    <>
      {/* Crosshair */}
      <div style={{
        position: 'absolute',
        left: mousePos.x - 14, top: mousePos.y - 14,
        width: 28, height: 28,
        pointerEvents: 'none', zIndex: 60
      }}>
        <svg width="28" height="28" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="11" fill="none" stroke={isOverheated ? 'rgba(255,100,100,0.7)' : 'rgba(255,255,255,0.5)'} strokeWidth="2" />
          <circle cx="14" cy="14" r="4" fill="none" stroke={isOverheated ? 'rgba(255,100,100,0.8)' : 'rgba(255,255,255,0.7)'} strokeWidth="2" />
          <line x1="14" y1="0" x2="14" y2="7" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <line x1="14" y1="21" x2="14" y2="28" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <line x1="0" y1="14" x2="7" y2="14" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <line x1="21" y1="14" x2="28" y2="14" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <circle cx="14" cy="14" r="2" fill={isOverheated ? '#f00' : '#f44'} />
        </svg>
      </div>
      
      {/* Aim line */}
      <svg style={{ position: 'absolute', left: 0, top: 0, width: SCREEN_WIDTH, height: SCREEN_HEIGHT, pointerEvents: 'none', zIndex: 45 }}>
        <line x1={x} y1={y} x2={mousePos.x} y2={mousePos.y} stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="6,4" />
      </svg>
      
      {/* Cursor - chevron arrow shape, pointed front and back */}
      <div style={{
        position: 'absolute',
        left: x - cursorSize/2, top: y - cursorSize/2,
        width: cursorSize, height: cursorSize,
        transform: `rotate(${angleDeg + 90}deg)`,
        transformOrigin: 'center center',
        filter: cursorFilter,
        opacity: invincible > 0 ? (Math.floor(invincible / 4) % 2 ? 0.4 : 1) : 1,
        zIndex: 50, pointerEvents: 'none'
      }}>
        <svg width={cursorSize} height={cursorSize} viewBox="0 0 28 28">
          {/* Chevron arrow - less sharp back angle */}
          <polygon 
            points="14,3 4,20 14,15 24,20" 
            fill={cursorColor} 
            stroke="#111" 
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      {/* EMP indicator - centered around cursor */}
      {empCharge >= 100 && (
        <div style={{
          position: 'absolute',
          left: x - cursorSize/2 - 6, top: y - cursorSize/2 - 6,
          width: cursorSize + 12, height: cursorSize + 12,
          border: '3px solid #4af', borderRadius: '50%',
          animation: 'pulse 1s infinite',
          pointerEvents: 'none', zIndex: 49
        }} />
      )}
      
      {/* Power-up label - centered above cursor */}
      {powerUp && (
        <div style={{
          position: 'absolute',
          left: x - 24, top: y - cursorSize/2 - 18,
          fontSize: 8, color: '#fff',
          background: powerUp === 'rapid' ? '#f80' : powerUp === 'triple' ? '#08f' : '#ff0',
          padding: '2px 6px', borderRadius: 4,
          fontWeight: 'bold', pointerEvents: 'none', zIndex: 55,
          whiteSpace: 'nowrap'
        }}>
          {powerUp === 'rapid' ? '🔥RAPID' : powerUp === 'triple' ? '🔱TRIPLE' : '🛡️GIANT'}
        </div>
      )}
    </>
  );
}

// Enemy Component
function Enemy({ type, x, y, size, stunned, isHit, frame }) {
  const style = {
    position: 'absolute',
    left: x - size/2, top: y - size/2,
    width: size, height: size,
    opacity: stunned > 0 ? 0.5 : 1,
    filter: isHit ? 'brightness(2)' : 'none',
    pointerEvents: 'none'
  };
  
  if (type === 'regi-mite') {
    return (
      <div style={style}>
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 100%)',
          border: '2px solid #888', borderRadius: 3
        }}>
          <div style={{ height: 5, background: '#889', borderRadius: '2px 2px 0 0' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 3, marginTop: 3 }}>
            <div style={{ width: 4, height: 4, background: '#333', borderRadius: '50%' }} />
            <div style={{ width: 4, height: 4, background: '#333', borderRadius: '50%' }} />
          </div>
        </div>
      </div>
    );
  }
  
  if (type === 'popup-gremlin') {
    // Bouncy, crazy enemy - like an annoying popup ad
    const bounce = Math.sin(frame * 3) * 4;
    const wobble = Math.sin(frame * 5) * 8;
    return (
      <div style={{
        ...style,
        transform: `translateY(${bounce}px) rotate(${wobble}deg) scale(${1 + Math.sin(frame * 4) * 0.15})`
      }}>
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(180deg, #ffe0e0 0%, #ffb0b0 100%)',
          border: '2px solid #d66', borderRadius: 3,
          boxShadow: '0 0 8px rgba(255,100,100,0.5)'
        }}>
          {/* Crazy eyes */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 3 }}>
            <div style={{ 
              width: 5, height: 5, background: '#800', borderRadius: '50%',
              transform: `rotate(${frame * 20}deg)`
            }} />
            <div style={{ 
              width: 5, height: 5, background: '#800', borderRadius: '50%',
              transform: `rotate(${-frame * 20}deg)`
            }} />
          </div>
          {/* Big grinning mouth */}
          <div style={{ 
            width: 10, height: 5, margin: '2px auto', 
            background: '#800', borderRadius: '0 0 6px 6px'
          }} />
        </div>
      </div>
    );
  }
  
  if (type === 'spy-dot') {
    return (
      <div style={{ ...style, animation: 'blink 0.4s infinite' }}>
        <div style={{
          width: '100%', height: '100%',
          background: '#f00', borderRadius: '50%',
          boxShadow: '0 0 6px #f00'
        }} />
      </div>
    );
  }
  
  return null;
}

// System Folder Component
function SystemFolder({ x, y, hp }) {
  return (
    <div style={{ position: 'absolute', left: x - 24, top: y - 24, width: 48, height: 48, pointerEvents: 'none' }}>
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect x="4" y="8" width="40" height="36" rx="3" fill="#4a7c9c" stroke="#2a5c7c" strokeWidth="2" />
        <rect x="4" y="8" width="16" height="6" fill="#5a9cbc" />
        <rect x="18" y="22" width="12" height="10" rx="2" fill="#ffd700" stroke="#aa8800" strokeWidth="1" />
      </svg>
      <div style={{
        position: 'absolute', bottom: -10, left: 4, width: 40, height: 5,
        background: '#333', borderRadius: 2, overflow: 'hidden'
      }}>
        <div style={{ width: `${hp}%`, height: '100%', background: hp > 50 ? '#4a4' : '#e44' }} />
      </div>
    </div>
  );
}

// Pickup Component
function Pickup({ x, y, type }) {
  const config = {
    apple: { emoji: '🍎' },
    coolant: { emoji: '❄️' },
    'powerup-rapid': { emoji: '🔥', glow: '#ff0' },
    'powerup-triple': { emoji: '🔱', glow: '#4af' },
    'powerup-giant': { emoji: '🛡️', glow: '#fa0' }
  };
  const c = config[type] || config.apple;
  const isPowerUp = type && type.startsWith('powerup');
  
  return (
    <div style={{
      position: 'absolute',
      left: x - 14, top: y - 14,
      width: 28, height: 28,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 22, // Consistent size for all
      animation: isPowerUp ? 'pulse 0.6s infinite' : 'wobble 0.8s infinite',
      filter: c.glow ? `drop-shadow(0 0 10px ${c.glow})` : 'none',
      pointerEvents: 'none'
    }}>
      {c.emoji}
    </div>
  );
}

// EMP Explosion Component
function EMPExplosion({ x, y }) {
  const [frame, setFrame] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => setFrame(f => f + 1), 30);
    return () => clearInterval(interval);
  }, []);
  
  const progress = Math.min(1, frame / 15);
  const radius = progress * 200;
  const opacity = 1 - progress;
  
  if (progress >= 1) return null;
  
  return (
    <div style={{
      position: 'absolute',
      left: x - radius, top: y - radius,
      width: radius * 2, height: radius * 2,
      pointerEvents: 'none', zIndex: 200
    }}>
      <svg width={radius * 2} height={radius * 2}>
        <circle cx={radius} cy={radius} r={radius * 0.9} fill="none" stroke={`rgba(74, 144, 255, ${opacity})`} strokeWidth={6} />
        <circle cx={radius} cy={radius} r={radius * 0.5} fill="none" stroke={`rgba(100, 200, 255, ${opacity * 0.7})`} strokeWidth={3} />
        <circle cx={radius} cy={radius} r={20 * (1 - progress)} fill={`rgba(255, 255, 255, ${opacity})`} />
      </svg>
    </div>
  );
}

// Trash Component - click to empty clutter and reduce RAM pressure
function Trash({ x, y, clutter, setClutter, setPlayer }) {
  const [eating, setEating] = useState(false);
  
  const handleClick = () => {
    if (clutter.length > 0) {
      setEating(true);
      // Each piece of clutter removed reduces RAM pressure
      setPlayer(prev => ({ ...prev, ramPressure: Math.max(0, prev.ramPressure - clutter.length * 8) }));
      setClutter([]);
      setTimeout(() => setEating(false), 300);
    }
  };
  
  return (
    <div 
      onClick={handleClick} 
      style={{
        position: 'absolute', 
        left: x, top: y, 
        width: 32, height: 36,
        cursor: clutter.length > 0 ? 'pointer' : 'default',
        transform: eating ? 'scale(1.2)' : 'scale(1)',
        transition: 'transform 0.15s',
        zIndex: 30
      }}
    >
      <svg width="32" height="36" viewBox="0 0 32 36">
        {/* Trash can body */}
        <path d="M6 10 L8 32 L24 32 L26 10 Z" fill="#888" stroke="#555" strokeWidth="1" />
        {/* Lid */}
        <rect x="4" y="6" width="24" height="4" rx="1" fill="#999" stroke="#555" strokeWidth="1" />
        {/* Handle */}
        <rect x="12" y="3" width="8" height="4" rx="1" fill="#777" stroke="#555" strokeWidth="0.5" />
        {/* Lines on trash */}
        <line x1="11" y1="14" x2="11" y2="28" stroke="#666" strokeWidth="1" />
        <line x1="16" y1="14" x2="16" y2="28" stroke="#666" strokeWidth="1" />
        <line x1="21" y1="14" x2="21" y2="28" stroke="#666" strokeWidth="1" />
      </svg>
      {/* Clutter count badge */}
      {clutter.length > 0 && (
        <div style={{
          position: 'absolute', top: -6, right: -6,
          width: 18, height: 18, 
          background: '#e55',
          borderRadius: '50%', 
          display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: 8, color: '#fff', fontWeight: 'bold',
          border: '2px solid #fff',
          animation: 'pulse 1s infinite'
        }}>
          {clutter.length}
        </div>
      )}
    </div>
  );
}

// Clutter Component - junk left by enemies
function Clutter({ x, y }) {
  return (
    <div style={{
      position: 'absolute', 
      left: x - 14, top: y - 14,
      width: 28, height: 28, 
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 18, // Slightly smaller for clutter
      opacity: 0.85, 
      pointerEvents: 'none',
      animation: 'wobble 2s infinite'
    }}>
      📄
    </div>
  );
}

// Popup Component
function PopupWindow({ popup, onChoice }) {
  const [countdown, setCountdown] = useState(100);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          onChoice(popup, popup.isLegit ? 'reject' : 'accept');
          return 100;
        }
        return prev - 0.8;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [popup, onChoice]);
  
  const swapped = popup.swapped;
  let title, warning, warningColor;
  
  if (popup.type === 'firewall') {
    title = '🛡️ Connection Request';
    warning = '⚠️ Unknown signature!';
    warningColor = '#d44';
  } else if (popup.type === 'security-update') {
    title = '🔒 Security Patch';
    warning = '✓ Verified - INSTALL!';
    warningColor = '#484';
  } else {
    title = '📦 Update Available';
    warning = '⚠️ Checksum mismatch!';
    warningColor = '#d44';
  }
  
  const getButtons = () => {
    if (popup.type === 'firewall') {
      return swapped 
        ? [{ l: '[Q] Deny', a: 'deny', v: 'default' }, { l: '[E] Allow', a: 'allow', v: 'primary' }]
        : [{ l: '[E] Allow', a: 'allow', v: 'default' }, { l: '[Q] Deny', a: 'deny', v: 'primary' }];
    } else if (popup.type === 'security-update') {
      return swapped
        ? [{ l: '[E] Skip', a: 'reject', v: 'primary' }, { l: '[Q] Install', a: 'accept', v: 'default' }]
        : [{ l: '[Q] Install', a: 'accept', v: 'primary' }, { l: '[E] Skip', a: 'reject', v: 'default' }];
    } else {
      return swapped
        ? [{ l: '[Q] Later', a: 'later', v: 'default' }, { l: '[E] Install', a: 'install', v: 'primary' }]
        : [{ l: '[E] Install', a: 'install', v: 'default' }, { l: '[Q] Later', a: 'later', v: 'primary' }];
    }
  };
  
  const btns = getButtons();
  
  return (
    <div style={{ position: 'absolute', left: popup.x, top: popup.y, zIndex: 400 }}>
      <Window title={title} width={260}>
        <p style={{ fontSize: 7, marginBottom: 8 }}>
          {popup.type === 'firewall' ? 'Unknown process requests access.' : 
           popup.type === 'security-update' ? 'Critical security update.' : 'System update available.'}
        </p>
        <p style={{ fontSize: 7, color: warningColor, marginBottom: 10, fontWeight: popup.isLegit ? 'bold' : 'normal' }}>{warning}</p>
        
        <div style={{ width: '100%', height: 6, background: '#ddd', borderRadius: 3, marginBottom: 14 }}>
          <div style={{ width: `${countdown}%`, height: '100%', background: countdown > 30 ? '#5a5' : '#d55', borderRadius: 3 }} />
        </div>
        
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <Button variant={btns[0].v} onClick={() => onChoice(popup, btns[0].a)}>{btns[0].l}</Button>
          <Button variant={btns[1].v} onClick={() => onChoice(popup, btns[1].a)}>{btns[1].l}</Button>
        </div>
      </Window>
    </div>
  );
}

// Setup Phase Component - Tower Defense Placement
function SetupPhase({ setupTimer, folderWalls, setFolderWalls, deployables, setDeployables, onStart, mousePos }) {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const items = [
    { type: 'folder', name: 'Folder Wall', count: 8 - folderWalls.length, icon: '📁', desc: 'Blocks enemies' },
    { type: 'watchdog', name: 'Watchdog', count: 1 - deployables.filter(d => d.type === 'watchdog').length, icon: '🐕', desc: 'Auto-turret' },
    { type: 'sticky', name: 'Sticky Note', count: 2 - deployables.filter(d => d.type === 'sticky').length, icon: '📝', desc: 'Decoy target' }
  ];

  const handlePlace = (x, y) => {
    if (!selectedItem) return;
    if (y < MENUBAR_HEIGHT + 30) return;
    
    // Center the item on the cursor position (items are ~24px)
    const gridX = Math.round(x / GRID_SIZE) * GRID_SIZE - 12;
    const gridY = Math.round(y / GRID_SIZE) * GRID_SIZE - 12;
    
    // Don't place on system folder (320, 280 is center)
    if (Math.abs(gridX + 12 - 320) < 50 && Math.abs(gridY + 12 - 280) < 50) return;
    
    // Check if spot is taken
    const spotTaken = [...folderWalls, ...deployables].some(
      item => Math.abs(item.x - gridX) < 24 && Math.abs(item.y - gridY) < 24
    );
    if (spotTaken) return;
    
    if (selectedItem === 'folder' && folderWalls.length < 8) {
      setFolderWalls(prev => [...prev, { id: Math.random(), x: gridX, y: gridY, hp: 4 }]);
    } else if (selectedItem === 'watchdog' && deployables.filter(d => d.type === 'watchdog').length < 1) {
      setDeployables(prev => [...prev, { id: Math.random(), type: 'watchdog', x: gridX, y: gridY }]);
    } else if (selectedItem === 'sticky' && deployables.filter(d => d.type === 'sticky').length < 2) {
      setDeployables(prev => [...prev, { id: Math.random(), type: 'sticky', x: gridX, y: gridY }]);
    }
  };
  
  // Preview position - centered on snapped grid position
  const previewX = Math.round(mousePos.x / GRID_SIZE) * GRID_SIZE - 12;
  const previewY = Math.round(mousePos.y / GRID_SIZE) * GRID_SIZE - 12;

  return (
    <>
      {/* Clickable area for placement */}
      <div 
        onClick={(e) => {
          if (selectedItem) {
            const rect = e.currentTarget.getBoundingClientRect();
            const scaleX = SCREEN_WIDTH / rect.width;
            const scaleY = SCREEN_HEIGHT / rect.height;
            handlePlace(
              (e.clientX - rect.left) * scaleX,
              (e.clientY - rect.top) * scaleY
            );
          }
        }}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          top: MENUBAR_HEIGHT, 
          cursor: selectedItem ? 'crosshair' : 'default' 
        }}
      >
        {/* Grid preview on hover - centered with cursor */}
        {selectedItem && mousePos.y > MENUBAR_HEIGHT + 30 && (
          <div style={{
            position: 'absolute',
            left: previewX,
            top: previewY,
            width: 24, height: 24,
            border: '2px dashed #4a4',
            background: 'rgba(74, 164, 74, 0.3)',
            pointerEvents: 'none'
          }} />
        )}
      </div>
      
      {/* System Folder */}
      <SystemFolder x={320} y={280} hp={100} />
      
      {/* Placed items */}
      {folderWalls.map(wall => <FolderWall key={wall.id} {...wall} />)}
      {deployables.map(d => <Deployable key={d.id} {...d} />)}
      
      {/* Control Panel */}
      <Window title="📦 Tower Defense Setup" width={200} x={16} y={40}>
        <div style={{ fontSize: 6, marginBottom: 10, color: '#666' }}>
          Click item → Click on desktop to place
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {items.map(item => (
            <div
              key={item.type}
              onClick={() => item.count > 0 && setSelectedItem(item.type)}
              style={{
                display: 'flex', 
                alignItems: 'center', 
                gap: 8, 
                padding: 6,
                background: selectedItem === item.type ? '#bef' : item.count > 0 ? '#fff' : '#eee',
                border: `2px solid ${selectedItem === item.type ? '#48a' : '#aaa'}`,
                borderRadius: 4,
                cursor: item.count > 0 ? 'pointer' : 'not-allowed',
                opacity: item.count > 0 ? 1 : 0.5
              }}
            >
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 7, fontWeight: 'bold' }}>{item.name}</div>
                <div style={{ fontSize: 5, color: '#888' }}>{item.desc} (×{item.count})</div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: 14, textAlign: 'center' }}>
          <div style={{ fontSize: 12, marginBottom: 10, color: '#e55' }}>⏱ {setupTimer}s</div>
          <Button variant="primary" onClick={onStart}>Start Wave ▶</Button>
        </div>
      </Window>
    </>
  );
}

// Folder Wall Component
function FolderWall({ x, y, hp }) {
  const damage = hp > 3 ? 0 : hp > 2 ? 1 : hp > 1 ? 2 : 3;
  
  return (
    <div style={{ position: 'absolute', left: x, top: y, width: 24, height: 24, pointerEvents: 'none' }}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="17" rx="2" fill="#d4a456" stroke="#a07030" strokeWidth="1" />
        <rect x="2" y="5" width="9" height="4" fill="#e8bc6a" stroke="#a07030" strokeWidth="0.5" />
        {damage >= 1 && <line x1="8" y1="10" x2="18" y2="20" stroke="#804020" strokeWidth="1" />}
        {damage >= 2 && <line x1="4" y1="14" x2="12" y2="20" stroke="#804020" strokeWidth="0.5" />}
        {damage >= 3 && <line x1="14" y1="8" x2="20" y2="16" stroke="#804020" strokeWidth="0.5" />}
      </svg>
      {/* HP bar */}
      <div style={{
        position: 'absolute', bottom: -4, left: 2, width: 20, height: 3,
        background: '#333', borderRadius: 1
      }}>
        <div style={{ width: `${(hp / 4) * 100}%`, height: '100%', background: hp > 2 ? '#4a4' : '#e44', borderRadius: 1 }} />
      </div>
    </div>
  );
}

// Deployable Component (Watchdog & Sticky Note)
function Deployable({ type, x, y }) {
  return (
    <div style={{ 
      position: 'absolute', 
      left: x, top: y, 
      width: 28, height: 28, 
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 22, // Consistent with other emojis
      pointerEvents: 'none'
    }}>
      {type === 'watchdog' && <span style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>🐕</span>}
      {type === 'sticky' && <span style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>📝</span>}
    </div>
  );
}
