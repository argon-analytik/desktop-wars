import { React, useCallback, useEffect, useRef, useState } from './lib/react.js';
import { CRT_MONITOR_LAYOUT } from './assets/layout.js';
import { SPRITES } from './assets/manifest.js';
import Button from './components/ui/Button.jsx';
import Window from './components/ui/Window.jsx';
import Sprite from './components/shared/Sprite.jsx';
import SpriteSheet from './components/shared/SpriteSheet.jsx';
import Clutter from './components/game/Clutter.jsx';
import Deployable from './components/game/Deployable.jsx';
import EMPExplosion from './components/game/EMPExplosion.jsx';
import Enemy from './components/game/Enemy.jsx';
import FolderWall from './components/game/FolderWall.jsx';
import Pickup from './components/game/Pickup.jsx';
import PlayerCursor from './components/game/PlayerCursor.jsx';
import PopupWindow from './components/game/PopupWindow.jsx';
import SetupPhase from './components/game/SetupPhase.jsx';
import SystemFolder from './components/game/SystemFolder.jsx';
import Trash from './components/game/Trash.jsx';
import { GAME_STATES, GRID_SIZE, MENUBAR_HEIGHT, SCREEN_HEIGHT, SCREEN_WIDTH } from './game/constants.js';
import { createInitialPlayer } from './game/initialState.js';

function wrapAngleRadians(angle) {
  let next = angle;
  while (next < -Math.PI) next += Math.PI * 2;
  while (next > Math.PI) next -= Math.PI * 2;
  return next;
}

// 0..7 mapping (per sprite sheet):
// Row 0: south, se, east, ne
// Row 1: north, nw, west, sw
function quantizeWatchdogDir(dx, dy) {
  const angle = Math.atan2(dy, dx);
  const step = Math.PI / 4;
  const deltaFromSouth = wrapAngleRadians(angle - Math.PI / 2);
  let dir = Math.round(-deltaFromSouth / step) % 8;
  if (dir < 0) dir += 8;
  return dir;
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
          const baseFrame = Number.isFinite(enemy.frame) ? enemy.frame : 0;
          const nextFrame = (baseFrame + deltaTime * 0.012) % 16;
          
          // Change direction randomly every ~40-80 frames
          if (bounceTimer > 40 + Math.random() * 40) {
            bounceAngle = Math.random() * Math.PI * 2;
            return {
              ...enemy,
              x: enemy.x + Math.cos(bounceAngle) * enemy.speed * 2,
              y: enemy.y + Math.sin(bounceAngle) * enemy.speed * 2,
              bounceAngle,
              bounceTimer: 0,
              frame: nextFrame
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
            frame: nextFrame,
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
        
        const baseFrame = Number.isFinite(enemy.frame) ? enemy.frame : 0;
        let nextFrame = baseFrame;
        if (enemy.type === 'regi-mite') nextFrame = (baseFrame + deltaTime * 0.02) % 16;
        if (enemy.type === 'spy-dot') nextFrame = (baseFrame + deltaTime * 0.03) % 16;

        return {
          ...enemy,
          x: newX,
          y: newY,
          frame: nextFrame,
          isHit: false
        };
      }));

      // Watchdog auto-turret (aim + shoot)
      const watchdog = deployables.find((d) => d.type === 'watchdog');
      if (watchdog) {
        let nearestEnemy = null;
        let nearestDist = 200; // Range
        for (const enemy of enemies) {
          const dist = Math.sqrt((enemy.x - watchdog.x - 12) ** 2 + (enemy.y - watchdog.y - 12) ** 2);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearestEnemy = enemy;
          }
        }

        if (nearestEnemy) {
          const dx = nearestEnemy.x - watchdog.x - 12;
          const dy = nearestEnemy.y - watchdog.y - 12;
          const aimDir = quantizeWatchdogDir(dx, dy);

          setDeployables((prev) => {
            let changed = false;
            const next = prev.map((d) => {
              if (d.id !== watchdog.id) return d;
              const currentAimDir = Number.isFinite(d.aimDir) ? d.aimDir : 7;
              if (currentAimDir === aimDir) return d;
              changed = true;
              return { ...d, aimDir };
            });
            return changed ? next : prev;
          });

          // Shoot at nearest enemy (every ~30 frames)
          if (Math.random() < 0.03) {
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            setProjectiles((prev) => [
              ...prev,
              {
                x: watchdog.x + 12,
                y: watchdog.y + 12,
                vx: (dx / len) * 6,
                vy: (dy / len) * 6,
                id: Math.random(),
                fromWatchdog: true,
              },
            ]);
          }
        } else {
          // Idle facing: south-west (matches sprite sheet index 7)
          const idleDir = 7;
          setDeployables((prev) => {
            let changed = false;
            const next = prev.map((d) => {
              if (d.id !== watchdog.id) return d;
              const currentAimDir = Number.isFinite(d.aimDir) ? d.aimDir : idleDir;
              if (currentAimDir === idleDir) return d;
              changed = true;
              return { ...d, aimDir: idleDir };
            });
            return changed ? next : prev;
          });
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
        
        const regiSize = 64;
        if (side === 0) {
          spawnX = -regiSize / 2;
          spawnY = MENUBAR_HEIGHT + regiSize / 2 + Math.random() * (SCREEN_HEIGHT - MENUBAR_HEIGHT - regiSize);
        } else if (side === 1) {
          spawnX = SCREEN_WIDTH + regiSize / 2;
          spawnY = MENUBAR_HEIGHT + regiSize / 2 + Math.random() * (SCREEN_HEIGHT - MENUBAR_HEIGHT - regiSize);
        } else {
          spawnX = regiSize / 2 + Math.random() * (SCREEN_WIDTH - regiSize);
          spawnY = SCREEN_HEIGHT + regiSize / 2;
        }
        
        // Always spawn basic regi-mite
        const enemySpeed = 0.5 + (wave * 0.15) + Math.random() * 0.2;
        setEnemies(prev => [...prev, {
          id: Math.random(),
          type: 'regi-mite',
          x: spawnX,
          y: spawnY,
          hp: wave >= 3 ? 3 : 2,
          size: 64,
          flipX: side === 0,
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
            size: 36,
            speed: 1.3 + Math.random() * 0.5,
            frame: Math.random() * 16,
            stunned: 0,
            bounceAngle: Math.random() * Math.PI * 2,
            bounceTimer: 0
          }]);
        }
        
        // Wave 2+: Add spy-dots (less common)
        if (wave >= 2 && Math.random() < 0.15) {
          const spySize = 64;
          const sSide = Math.floor(Math.random() * 3);
          let sX, sY;
          if (sSide === 0) { sX = -spySize / 2; sY = MENUBAR_HEIGHT + spySize / 2 + Math.random() * (SCREEN_HEIGHT - MENUBAR_HEIGHT - spySize); }
          else if (sSide === 1) { sX = SCREEN_WIDTH + spySize / 2; sY = MENUBAR_HEIGHT + spySize / 2 + Math.random() * (SCREEN_HEIGHT - MENUBAR_HEIGHT - spySize); }
          else { sX = spySize / 2 + Math.random() * (SCREEN_WIDTH - spySize); sY = SCREEN_HEIGHT + spySize / 2; }
          
          setEnemies(prev => [...prev, {
            id: Math.random(),
            type: 'spy-dot',
            x: sX,
            y: sY,
            hp: 0.5,
            size: spySize,
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
          
          const extraType = Math.random() < 0.5 ? 'regi-mite' : 'popup-gremlin';
          setEnemies(prev => [...prev, {
            id: Math.random(),
            type: extraType,
            x: eX,
            y: eY,
            hp: extraType === 'regi-mite' ? 2 : 1.5,
            size: extraType === 'regi-mite' ? 64 : 36,
            flipX: eSide === 0,
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

  const VIEW_SCALE = 1.15;
  const SCREEN_CORNER_RADIUS = 28;
  const monitorWidth = CRT_MONITOR_LAYOUT.width * VIEW_SCALE;
  const monitorHeight = CRT_MONITOR_LAYOUT.height * VIEW_SCALE;
  const screenLeft = CRT_MONITOR_LAYOUT.screen.x * VIEW_SCALE;
  const screenTop = CRT_MONITOR_LAYOUT.screen.y * VIEW_SCALE;
  const screenWidth = SCREEN_WIDTH * VIEW_SCALE;
  const screenHeight = SCREEN_HEIGHT * VIEW_SCALE;
  const screenBorderRadius = SCREEN_CORNER_RADIUS * VIEW_SCALE;

  // Render
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      background: '#1a1a2e',
      fontFamily: '"Press Start 2P", monospace',
      gap: 16,
      padding: 16,
      boxSizing: 'border-box'
    }}>
      <div style={{ textAlign: 'center', marginTop: 8, marginBottom: 10 }}>
        <div style={{ fontSize: 22, letterSpacing: 2, color: '#fff' }}>DESKTOP WARS</div>
        <div style={{ fontSize: 9, marginTop: 6, color: '#8af', opacity: 0.95 }}>SYSTEM INTEGRITY</div>
      </div>

      {/* Top Section: Monitor */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          {/* CRT Monitor */}
          <div
            style={{
              width: monitorWidth,
              height: monitorHeight,
              position: 'relative',
              filter: 'drop-shadow(0 25px 80px rgba(0,0,0,0.6))',
            }}
          >
            {/* Screen */}
            <div
              style={{
                position: 'absolute',
                left: screenLeft,
                top: screenTop,
                width: screenWidth,
                height: screenHeight,
                overflow: 'hidden',
                borderRadius: screenBorderRadius,
                background: '#000',
                zIndex: 5,
              }}
            >
              <div
                ref={gameRef}
                onMouseMove={handleMouseMove}
                onMouseDown={(e) => {
                  e.preventDefault();
                  if (e.button === 0) setIsShooting(true);
                  if (e.button === 2 && player.empCharge >= 100) triggerEMP();
                }}
                onMouseUp={(e) => {
                  if (e.button === 0) setIsShooting(false);
                }}
                onMouseLeave={() => setIsShooting(false)}
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  width: SCREEN_WIDTH,
                  height: SCREEN_HEIGHT,
                  position: 'relative',
                  transform: `scale(${VIEW_SCALE})`,
                  transformOrigin: 'top left',
                  cursor: gameState === GAME_STATES.PLAYING ? 'none' : 'default',
                }}
              >
	            {/* Desktop Background */}
	            <Sprite
	              src={SPRITES.wallpaper}
	              alt="Wallpaper"
	              width={SCREEN_WIDTH}
	              height={SCREEN_HEIGHT}
	              style={{
	                position: 'absolute',
	                inset: 0,
	                width: '100%',
	                height: '100%',
	                objectFit: 'cover',
	              }}
	              fallback={
	                <div
	                  style={{
	                    position: 'absolute',
	                    inset: 0,
	                    background: 'linear-gradient(180deg, #d4c4a8 0%, #bfad84 100%)',
	                  }}
	                />
	              }
	            />
            
            {/* Menu Bar */}
	            <div style={{
	              position: 'absolute', top: 0, left: 0, right: 0, height: MENUBAR_HEIGHT,
	              background: 'linear-gradient(180deg, #f0f0f0 0%, #d8d8d8 100%)',
	              borderBottom: '1px solid #999',
	              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
	              padding: '0 22px', fontSize: 8, zIndex: 100,
	              color: '#111'
	            }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setGameState((prev) => {
                      if (prev === GAME_STATES.PLAYING) return GAME_STATES.PAUSED;
                      if (prev === GAME_STATES.PAUSED) return GAME_STATES.PLAYING;
                      return prev;
                    });
                  }}
                  style={{
                    fontWeight: 'bold',
                    cursor:
                      gameState === GAME_STATES.PLAYING || gameState === GAME_STATES.PAUSED ? 'pointer' : 'default',
                    opacity: gameState === GAME_STATES.PLAYING || gameState === GAME_STATES.PAUSED ? 1 : 0.55,
                    padding: '2px 4px',
                    borderRadius: 3,
                    userSelect: 'none',
                  }}
                >
                  Pause
                </span>
                <span
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowHelp(true);
                  }}
                  style={{
                    cursor: 'pointer',
                    opacity: 0.95,
                    padding: '2px 4px',
                    borderRadius: 3,
                    userSelect: 'none',
                  }}
                >
                  Help
                </span>
                <span
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    startGame();
                  }}
                  style={{
                    cursor: 'pointer',
                    opacity: 0.95,
                    padding: '2px 4px',
                    borderRadius: 3,
                    userSelect: 'none',
                  }}
                >
                  Reset
                </span>
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
	                    {/* Cursor Sprite */}
	                    <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center', animation: 'idleBob 2.8s ease-in-out infinite' }}>
	                      <Sprite
	                        src={SPRITES.cursor}
	                        alt="Cursor"
	                        width={48}
                        height={48}
                        style={{ width: 48, height: 48 }}
                        fallback={
                          <svg width="48" height="48" viewBox="0 0 28 28">
                            <polygon
                              points="14,3 4,20 14,15 24,20"
                              fill="#fff"
                              stroke="#111"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                          </svg>
                        }
                      />
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
                    <Window title="PAUSED" width={220}>
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
                <Window title="Wave 2 Complete!" width={340}>
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
                <Window title="YOU WIN!" width={300}>
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

            {/* Monitor bezel info */}
            <div
              style={{
                position: 'absolute',
                left: screenLeft + screenWidth + 52,
                top: screenTop + 10,
                width: Math.max(0, monitorWidth - (screenLeft + screenWidth) - 68),
                height: screenHeight - 20,
                padding: 12,
                boxSizing: 'border-box',
                color: '#fff',
                fontSize: 7,
                lineHeight: 1.8,
                background: 'transparent',
                border: 'none',
                zIndex: 30,
                overflow: 'hidden',
                pointerEvents: 'none',
                textShadow: '0 2px 10px rgba(0,0,0,0.9)',
              }}
            >
              <div style={{ fontSize: 9, marginBottom: 10, color: '#8af' }}>CONTROLS</div>
              <div style={{ marginBottom: 12 }}>
                <div>WASD - Move</div>
                <div>Mouse - Aim</div>
                <div>Click - Shoot</div>
                <div>Right - EMP</div>
                <div>Shift - Dash</div>
                <div>Q/E - Popups</div>
                <div>Space - Pause</div>
              </div>

              <div style={{ fontSize: 9, marginBottom: 8, color: '#fa0' }}>ENEMIES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12, lineHeight: 1.9 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <SpriteSheet
                    src={SPRITES.enemyRegiMite}
                    width={22}
                    height={22}
                    frameWidth={32}
                    frameHeight={32}
                    columns={4}
                    rows={4}
                    marginX={16}
                    marginY={16}
                    spacingX={32}
                    spacingY={32}
                    frameIndex={0}
                    fallback={<span style={{ fontSize: 14 }}>📦</span>}
                  />
                  <span>Regi-Mite</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <SpriteSheet
                    src={SPRITES.enemyPopupGremlin}
                    width={22}
                    height={22}
                    frameWidth={32}
                    frameHeight={32}
                    columns={4}
                    rows={4}
                    marginX={16}
                    marginY={16}
                    spacingX={32}
                    spacingY={32}
                    frameIndex={0}
                    fallback={<span style={{ fontSize: 14 }}>🤪</span>}
                  />
                  <span>Gremlin</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <SpriteSheet
                    src={SPRITES.enemySpyDot}
                    width={22}
                    height={22}
                    frameWidth={32}
                    frameHeight={32}
                    columns={4}
                    rows={4}
                    marginX={16}
                    marginY={16}
                    spacingX={32}
                    spacingY={32}
                    frameIndex={0}
                    fallback={<span style={{ fontSize: 14 }}>🔴</span>}
                  />
                  <span>Spy-Dot</span>
                </div>
              </div>

              <div style={{ fontSize: 9, marginBottom: 8, color: '#5f5' }}>POWER-UPS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12, lineHeight: 1.9 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sprite
                    src={SPRITES.pickupApple}
                    width={14}
                    height={14}
                    style={{ width: 14, height: 14 }}
                    fallback={<span style={{ fontSize: 14 }}>🍎</span>}
                  />
                  <span>Heal</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sprite
                    src={SPRITES.pickupCoolant}
                    width={14}
                    height={14}
                    style={{ width: 14, height: 14 }}
                    fallback={<span style={{ fontSize: 14 }}>❄️</span>}
                  />
                  <span>Coolant</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sprite
                    src={SPRITES.powerupRapid}
                    width={14}
                    height={14}
                    style={{ width: 14, height: 14 }}
                    fallback={<span style={{ fontSize: 14 }}>🔥</span>}
                  />
                  <span>Rapid</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sprite
                    src={SPRITES.powerupTriple}
                    width={14}
                    height={14}
                    style={{ width: 14, height: 14 }}
                    fallback={<span style={{ fontSize: 14 }}>🔱</span>}
                  />
                  <span>Triple</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sprite
                    src={SPRITES.powerupGiant}
                    width={14}
                    height={14}
                    style={{ width: 14, height: 14 }}
                    fallback={<span style={{ fontSize: 14 }}>🛡️</span>}
                  />
                  <span>Giant</span>
                </div>
              </div>

              <div style={{ fontSize: 9, marginBottom: 8, color: '#8af' }}>DEPLOYABLES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, lineHeight: 1.9 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <SpriteSheet
                    src={SPRITES.folderWall}
                    width={14}
                    height={14}
                    frameWidth={32}
                    frameHeight={32}
                    columns={4}
                    rows={1}
                    marginX={16}
                    marginY={16}
                    spacingX={32}
                    frameIndex={0}
                    fallback={<span style={{ fontSize: 14 }}>📁</span>}
                  />
                  <span>Wall</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <SpriteSheet
                    src={SPRITES.deployableWatchdog}
                    width={28}
                    height={28}
                    frameWidth={44}
                    frameHeight={44}
                    columns={4}
                    rows={2}
                    marginX={10}
                    marginY={10}
                    spacingX={20}
                    spacingY={20}
                    frameIndex={7}
                    fallback={<span style={{ fontSize: 14 }}>🐕</span>}
                  />
                  <span>Watchdog</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sprite
                    src={SPRITES.deployableSticky}
                    width={14}
                    height={14}
                    style={{ width: 14, height: 14 }}
                    fallback={<span style={{ fontSize: 14 }}>📝</span>}
                  />
                  <span>Floppy Disk</span>
                </div>
              </div>
            </div>

            {/* Monitor overlay (transparent hole) */}
            <Sprite
              src={SPRITES.crtMonitor}
              alt="CRT Monitor"
              width={CRT_MONITOR_LAYOUT.width}
              height={CRT_MONITOR_LAYOUT.height}
              pixelated={false}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 20,
              }}
            />
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
	        @keyframes idleBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
	      `}</style>
    </div>
  );
}
