import { React, useCallback, useEffect, useRef, useState } from './lib/react.js';
import { ReactDOM } from './lib/reactDom.js';
import { CRT_MONITOR_LAYOUT } from './assets/layout.js';
import { SPRITES } from './assets/manifest.js';
import Button from './components/ui/Button.jsx';
import {
  AppleIcon,
  CoolantIcon,
  CpuIcon,
  FloppyDiskIcon,
  FolderWallIcon,
  GremlinIcon,
  PowerGiantIcon,
  PowerRapidIcon,
  PowerTripleIcon,
  RamIcon,
  RegiMiteIcon,
  SpyDotIcon,
  WatchdogIcon,
} from './components/ui/GameIcons.jsx';
import Window from './components/ui/Window.jsx';
import Sprite from './components/shared/Sprite.jsx';
import AimOverlay from './components/game/AimOverlay.jsx';
import Clutter from './components/game/Clutter.jsx';
import Deployable from './components/game/Deployable.jsx';
import Enemy from './components/game/Enemy.jsx';
import FolderWall from './components/game/FolderWall.jsx';
import Pickup from './components/game/Pickup.jsx';
import PlayerCursor from './components/game/PlayerCursor.jsx';
import PopupWindow from './components/game/PopupWindow.jsx';
import SetupPhase from './components/game/SetupPhase.jsx';
import SystemFolder from './components/game/SystemFolder.jsx';
import Trash from './components/game/Trash.jsx';
import ThreeScreen from './components/game/ThreeScreen.jsx';
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
  const fullscreenRef = useRef(null);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const shootCooldownRef = useRef(0);
  const spawnTimerRef = useRef(0);
  const popupTimerRef = useRef(10000);
  const setupAccumRef = useRef(0);
  const aimRef = useRef({ x: 1, y: 0, angle: 0 });
  const systemFolderDamageRef = useRef(0);

  const isWebdriver = typeof navigator !== 'undefined' && !!navigator.webdriver;
  const [useWebGL, setUseWebGL] = useState(() => {
    if (typeof window === 'undefined') return true;
    const raw = new URLSearchParams(window.location.search).get('renderer');
    if (!raw) return true;
    const v = String(raw).toLowerCase();
    if (v === 'dom' || v === '2d') return false;
    if (v === 'webgl' || v === '3d') return true;
    return true;
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewport, setViewport] = useState(() => ({
    w: typeof window !== 'undefined' ? window.innerWidth : 1024,
    h: typeof window !== 'undefined' ? window.innerHeight : 768,
  }));

  const stateRef = useRef(null);
  stateRef.current = {
    gameState,
    player,
    enemies,
    projectiles,
    pickups,
    folderWalls,
    deployables,
    clutter,
    popups,
    mousePos,
    keys,
    wave,
    waveTimer,
    totalTime,
    setupTimer,
    systemFolderHP,
    score,
    privacyScore,
    isShooting,
    showHelp,
    empExplosion,
  };

  // Generate seed
  useEffect(() => {
    setSeed(Math.random().toString(36).substring(2, 10).toUpperCase());
  }, []);

  useEffect(() => {
    const onResize = () => {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
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

  const toggleFullscreen = useCallback(() => {
    const el = fullscreenRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      el.requestFullscreen?.();
    }
  }, []);

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
    setupAccumRef.current = 0;
    setSystemFolderHP(100);
    setScore(0);
    setPrivacyScore(100);
    setIsShooting(false);
    setEmpExplosion(null);
    shootCooldownRef.current = 0;
    spawnTimerRef.current = 3000;
    popupTimerRef.current = 15000;
    setSeed(Math.random().toString(36).substring(2, 10).toUpperCase());
    setGameState(GAME_STATES.SETUP);
  }, []);

  const continueFromIntermission = useCallback((upgrade) => {
    setPlayer(prev => ({ ...prev, upgrades: [...prev.upgrades, upgrade] }));
    setWave(3);
    setWaveTimer(90); // Reset timer for wave 3
    setGameState(GAME_STATES.PLAYING);
  }, []);

  // Input handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      setKeys(prev => ({ ...prev, [key]: true }));

      if (key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      }

      if (key === 'enter') {
        e.preventDefault();
        const gs = stateRef.current?.gameState;
        if (gs === GAME_STATES.MENU) {
          startGame();
        } else if (gs === GAME_STATES.SETUP) {
          setGameState(GAME_STATES.PLAYING);
          setWave(1);
        } else if (gs === GAME_STATES.GAMEOVER || gs === GAME_STATES.WIN) {
          startGame();
        }
      }
      
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
  }, [startGame, toggleFullscreen]);

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
    const snap = stateRef.current;
    const px = snap?.player?.x ?? SCREEN_WIDTH / 2;
    const py = snap?.player?.y ?? SCREEN_HEIGHT / 2;
    const t0 = Number.isFinite(snap?.totalTime) ? snap.totalTime : 0;

    setPlayer((prev) => ({ ...prev, empCharge: 0 }));
    setEnemies((prev) => prev.map((e) => ({ ...e, stunned: 120 })));
    setEmpExplosion({ x: px, y: py, t0 });
  }, []);

  const tick = useCallback((deltaTime) => {
    const snap = stateRef.current;
    if (!snap) return;

    const dt = Math.max(0, Math.min(50, deltaTime));
    const gs = snap.gameState;

    // Deterministic popup countdown (works under webdriver stepping).
    if (snap.popups.length > 0) {
      const decayPerMs = 0.016;
      setPopups((prev) => {
        if (prev.length === 0) return prev;
        const p = prev[0];
        const c = Number.isFinite(p.countdown) ? p.countdown : 100;
        const next = c - dt * decayPerMs;
        if (next <= 0) {
          setPlayer((pl) => ({ ...pl, hp: pl.hp - 1 }));
          return [];
        }
        return [{ ...p, countdown: next }];
      });
    }

    if (gs === GAME_STATES.SETUP) {
      setupAccumRef.current += dt;
      const dec = Math.floor(setupAccumRef.current / 1000);
      if (dec > 0) {
        setupAccumRef.current -= dec * 1000;
        setSetupTimer((prev) => {
          const next = prev - dec;
          if (next <= 0) {
            setGameState(GAME_STATES.PLAYING);
            setWave(1);
            return 25;
          }
          return next;
        });
      }
      return;
    }

    if (gs !== GAME_STATES.PLAYING) return;

    const keysSnap = snap.keys || {};
    const mouseSnap = snap.mousePos || { x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT / 2 };
    const playerSnap = snap.player;
    const enemiesSnap = snap.enemies;
	    const popupsSnap = snap.popups;
	    const folderWallsSnap = snap.folderWalls;
	    const deployablesSnap = snap.deployables;
	    const clutterSnap = snap.clutter || [];
	    const waveSnap = snap.wave;
	    const waveTimerSnap = snap.waveTimer;
	    const systemFolderHPSnap = snap.systemFolderHP;
	    const isShootingSnap = snap.isShooting;

    // Stable aim direction so the cursor doesn't jitter when the mouse is near the player center.
    const aimDx = mouseSnap.x - playerSnap.x;
    const aimDy = mouseSnap.y - playerSnap.y;
    const aimDistSq = aimDx * aimDx + aimDy * aimDy;
    const AIM_DEADZONE_PX = 10;
    if (aimDistSq > AIM_DEADZONE_PX * AIM_DEADZONE_PX) {
      const len = Math.sqrt(aimDistSq) || 1;
      aimRef.current.x = aimDx / len;
      aimRef.current.y = aimDy / len;
      aimRef.current.angle = Math.atan2(aimDy, aimDx);
    }
    const aimDirX = aimRef.current.x;
    const aimDirY = aimRef.current.y;
    const aimAngle = aimRef.current.angle;

    shootCooldownRef.current -= dt;
    const isOverheated = playerSnap.cpuHeat >= 90;
    const hasFanUpgrade = playerSnap.upgrades.includes('fan');

    setPlayer((prev) => {
      const hasRamUpgrade = prev.upgrades.includes('ram');
      const baseSpeed = 3.5;
      const slowdownFactor = hasRamUpgrade ? 0.004 : 0.008;
      const ramSlowdown = 1 - prev.ramPressure * slowdownFactor;
      const speed = baseSpeed * Math.max(0.2, ramSlowdown);

      let newX = prev.x;
      let newY = prev.y;
      let isDashing = false;
      let newDashEnergy = prev.dashEnergy;

      if (keysSnap['w'] || keysSnap['arrowup']) newY -= speed;
      if (keysSnap['s'] || keysSnap['arrowdown']) newY += speed;
      if (keysSnap['a'] || keysSnap['arrowleft']) newX -= speed;
      if (keysSnap['d'] || keysSnap['arrowright']) newX += speed;

      if (keysSnap['shift'] && prev.dashEnergy > 20) {
        newX += aimDirX * 10;
        newY += aimDirY * 10;
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
        newPowerUpTimer -= 1;
        if (newPowerUpTimer <= 0) newPowerUp = null;
      }

      return {
        ...prev,
        x: newX,
        y: newY,
        isDashing,
        dashEnergy: newDashEnergy,
        empCharge: Math.min(100, prev.empCharge + 0.15),
        cpuHeat: Math.max(0, prev.cpuHeat - 0.04),
        invincible: Math.max(0, prev.invincible - 1),
        isHit: prev.invincible > 50,
        powerUp: newPowerUp,
        powerUpTimer: newPowerUpTimer,
      };
    });

    if (
      isShootingSnap &&
      shootCooldownRef.current <= 0 &&
      popupsSnap.length === 0 &&
      playerSnap.powerUp !== 'giant' &&
      !isOverheated
    ) {
      const dirX = aimDirX;
      const dirY = aimDirY;
      const speed = 8;
      const angle = aimAngle;

      const tipOffset = 14;
      const spawnX = playerSnap.x + dirX * tipOffset;
      const spawnY = playerSnap.y + dirY * tipOffset;

      const isTriple = playerSnap.powerUp === 'triple';
      if (isTriple) {
        const spread = 0.2;
        setProjectiles((prev) => [
          ...prev,
          { x: spawnX, y: spawnY, vx: dirX * speed, vy: dirY * speed, id: Math.random() },
          { x: spawnX, y: spawnY, vx: Math.cos(angle - spread) * speed, vy: Math.sin(angle - spread) * speed, id: Math.random() },
          { x: spawnX, y: spawnY, vx: Math.cos(angle + spread) * speed, vy: Math.sin(angle + spread) * speed, id: Math.random() },
        ]);
      } else {
        setProjectiles((prev) => [...prev, { x: spawnX, y: spawnY, vx: dirX * speed, vy: dirY * speed, id: Math.random() }]);
      }

      const baseFireRate = playerSnap.powerUp === 'rapid' ? 60 : 180;
      const heatPenalty = playerSnap.cpuHeat * 1.5;
      shootCooldownRef.current = baseFireRate + heatPenalty;

      let heatIncrease = playerSnap.powerUp === 'rapid' ? 4 : 6;
      if (hasFanUpgrade) heatIncrease *= 0.5;
      setPlayer((prev) => ({ ...prev, cpuHeat: Math.min(100, prev.cpuHeat + heatIncrease) }));
    }

    setProjectiles((prev) => {
      const next = [];
      for (const p of prev) {
        const nx = p.x + p.vx;
        const ny = p.y + p.vy;
        const inBounds = nx > -10 && nx < SCREEN_WIDTH + 10 && ny > MENUBAR_HEIGHT && ny < SCREEN_HEIGHT + 10;
        if (inBounds) {
          next.push({ ...p, x: nx, y: ny });
        } else if (!p.fromWatchdog) {
          setScore((s) => s - 1);
        }
      }
      return next;
    });

    setEnemies((prev) =>
      prev.map((enemy) => {
        if (enemy.stunned > 0) return { ...enemy, stunned: enemy.stunned - 1 };

        let targetX = 320;
        let targetY = 280;

        if (enemy.type === 'spy-dot') {
          targetX = playerSnap.x;
          targetY = playerSnap.y;
        }

        if (enemy.type === 'popup-gremlin') {
          const bounceTimer = (enemy.bounceTimer || 0) + 1;
          let bounceAngle = enemy.bounceAngle || 0;
          const baseFrame = Number.isFinite(enemy.frame) ? enemy.frame : 0;
          const nextFrame = (baseFrame + dt * 0.012) % 16;

          if (bounceTimer > 40 + Math.random() * 40) {
            bounceAngle = Math.random() * Math.PI * 2;
            return {
              ...enemy,
              x: enemy.x + Math.cos(bounceAngle) * enemy.speed * 2,
              y: enemy.y + Math.sin(bounceAngle) * enemy.speed * 2,
              bounceAngle,
              bounceTimer: 0,
              frame: nextFrame,
            };
          }

          const driftX = (320 - enemy.x) * 0.003;
          const driftY = (280 - enemy.y) * 0.003;
          let newX = enemy.x + Math.cos(bounceAngle) * enemy.speed + driftX;
          let newY = enemy.y + Math.sin(bounceAngle) * enemy.speed + driftY;

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
            isHit: false,
          };
        }

        const stickyNotes = deployablesSnap.filter((d) => d.type === 'sticky');
        if (stickyNotes.length > 0 && enemy.type !== 'spy-dot') {
          const nearest = stickyNotes.reduce(
            (closest, note) => {
              const dist = Math.sqrt((enemy.x - note.x) ** 2 + (enemy.y - note.y) ** 2);
              return dist < closest.dist ? { note, dist } : closest;
            },
            { note: null, dist: Infinity }
          );

          if (nearest.dist < 150) {
            targetX = nearest.note.x + 12;
            targetY = nearest.note.y + 12;
          }
        }

        const dx = targetX - enemy.x;
        const dy = targetY - enemy.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;

        let newX = enemy.x + (dx / len) * enemy.speed;
        let newY = enemy.y + (dy / len) * enemy.speed;

        for (const wall of folderWallsSnap) {
          if (wall.hp <= 0) continue;
          const wallDist = Math.sqrt((newX - wall.x - 12) ** 2 + (newY - wall.y - 12) ** 2);
          if (wallDist < enemy.size / 2 + 12) {
            setFolderWalls((walls) => walls.map((w) => (w.id === wall.id ? { ...w, hp: w.hp - 0.01 } : w)));
            newX = enemy.x;
            newY = enemy.y;
            break;
          }
        }

        const baseFrame = Number.isFinite(enemy.frame) ? enemy.frame : 0;
        let nextFrame = baseFrame;
        if (enemy.type === 'regi-mite') nextFrame = (baseFrame + dt * 0.02) % 16;
        if (enemy.type === 'spy-dot') nextFrame = (baseFrame + dt * 0.03) % 16;

        return { ...enemy, x: newX, y: newY, frame: nextFrame, isHit: false };
      })
    );

    const watchdog = deployablesSnap.find((d) => d.type === 'watchdog');
    if (watchdog) {
      let nearestEnemy = null;
      let nearestDist = 200;
      for (const enemy of enemiesSnap) {
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

        if (Math.random() < 0.03) {
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          setProjectiles((prev) => [
            ...prev,
            { x: watchdog.x + 12, y: watchdog.y + 12, vx: (dx / len) * 6, vy: (dy / len) * 6, id: Math.random(), fromWatchdog: true },
          ]);
        }
      } else {
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

    setProjectiles((prev) => {
      const remaining = [];
      let trashUnitsRemaining = clutterSnap.length;
      const trashX = 580 + 16;
      const trashY = 420 + 18;
      for (const proj of prev) {
        let hit = false;
        setEnemies((enemiesNow) =>
          enemiesNow
            .map((enemy) => {
              if (hit) return enemy;
              const dist = Math.sqrt((proj.x - enemy.x) ** 2 + (proj.y - enemy.y) ** 2);
              if (dist < enemy.size / 2 + 5) {
                hit = true;
                const newHp = enemy.hp - 1;
                if (newHp <= 0) {
                  const rand = Math.random();
                  let dropType = null;
                  if (rand < 0.2) dropType = 'apple';
                  else if (rand < 0.28) dropType = 'coolant';
                  else if (rand < 0.36) dropType = 'powerup-rapid';
                  else if (rand < 0.44) dropType = 'powerup-triple';
                  else if (rand < 0.5) dropType = 'powerup-giant';

                  if (dropType) setPickups((p) => [...p, { x: enemy.x, y: enemy.y, type: dropType, id: Math.random() }]);

                  if (Math.random() < 0.7) {
                    setClutter((c) => [
                      ...c,
                      { x: enemy.x + (Math.random() - 0.5) * 30, y: enemy.y + (Math.random() - 0.5) * 30, id: Math.random() },
                    ]);
                    setPlayer((p) => ({ ...p, ramPressure: Math.min(100, p.ramPressure + 8) }));
                  }

                  setScore((s) => s + 10);
                  return null;
                }
                return { ...enemy, hp: newHp, isHit: true };
              }
              return enemy;
            })
            .filter(Boolean)
        );
        if (!hit) {
          const distToTrash = Math.sqrt((proj.x - trashX) ** 2 + (proj.y - trashY) ** 2);
          if (distToTrash < 18) {
            hit = true;
            if (trashUnitsRemaining > 0) {
              trashUnitsRemaining -= 1;
              setClutter((c) => (c.length > 0 ? c.slice(0, -1) : c));
              setPlayer((p) => ({ ...p, ramPressure: Math.max(0, p.ramPressure - 8) }));
            }
          }
        }
        if (!hit) remaining.push(proj);
      }
      return remaining;
    });

    if (playerSnap.invincible <= 0) {
      const collisionRadius = playerSnap.powerUp === 'giant' ? 24 : 10;
      for (const enemy of enemiesSnap) {
        if (enemy.stunned > 0) continue;
        const dist = Math.sqrt((enemy.x - playerSnap.x) ** 2 + (enemy.y - playerSnap.y) ** 2);
        if (dist < enemy.size / 2 + collisionRadius) {
          if (playerSnap.powerUp === 'giant') {
            setEnemies((prev) =>
              prev
                .map((e) => {
                  if (e.id !== enemy.id) return e;
                  setScore((s) => s + 10);
                  return null;
                })
                .filter(Boolean)
            );
          } else if (!playerSnap.isDashing) {
            setPlayer((prev) => ({ ...prev, hp: prev.hp - 1, invincible: 60, isHit: true }));
            setScore((s) => s - 5);
            break;
          }
        }
      }
    }

    let folderDamage = 0;
    for (const enemy of enemiesSnap) {
      if (enemy.stunned > 0) continue;
      const dist = Math.sqrt((enemy.x - 320) ** 2 + (enemy.y - 280) ** 2);
      if (dist < 35) folderDamage += 0.05;
    }
    if (folderDamage > 0) {
      setSystemFolderHP((prev) => Math.max(0, prev - folderDamage));
      systemFolderDamageRef.current += folderDamage;
      if (systemFolderDamageRef.current >= 1) {
        const whole = Math.floor(systemFolderDamageRef.current);
        systemFolderDamageRef.current -= whole;
        setScore((s) => s - whole);
      }
    }

    setPickups((prev) =>
      prev.filter((pickup) => {
        const dist = Math.sqrt((pickup.x - playerSnap.x) ** 2 + (pickup.y - playerSnap.y) ** 2);
        if (dist < 20) {
          if (pickup.type === 'apple') setPlayer((p) => ({ ...p, hp: Math.min(p.maxHp, p.hp + 1) }));
          else if (pickup.type === 'coolant') setPlayer((p) => ({ ...p, cpuHeat: Math.max(0, p.cpuHeat - 60) }));
          else if (pickup.type === 'powerup-rapid') setPlayer((p) => ({ ...p, powerUp: 'rapid', powerUpTimer: 480 }));
          else if (pickup.type === 'powerup-triple') setPlayer((p) => ({ ...p, powerUp: 'triple', powerUpTimer: 480 }));
          else if (pickup.type === 'powerup-giant') setPlayer((p) => ({ ...p, powerUp: 'giant', powerUpTimer: 360 }));
          return false;
        }
        return true;
      })
    );

    spawnTimerRef.current -= dt;
    if (spawnTimerRef.current <= 0) {
      const spawnRates = { 1: 3500, 2: 2800, 3: 2200 };
      const waveTimeBonus = Math.min((90 - waveTimerSnap) * 15, 800);
      spawnTimerRef.current = Math.max(1200, (spawnRates[waveSnap] || 3000) - waveTimeBonus);

      const side = Math.floor(Math.random() * 3);
      let spawnX;
      let spawnY;

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

      const enemySpeed = 0.5 + waveSnap * 0.15 + Math.random() * 0.2;
      setEnemies((prev) => [
        ...prev,
        { id: Math.random(), type: 'regi-mite', x: spawnX, y: spawnY, hp: 3, maxHp: 3, size: 64, flipX: side === 0, speed: enemySpeed, frame: 0, stunned: 0 },
      ]);

	      if (waveSnap >= 2 && Math.random() < 0.25) {
	        const gSide = Math.floor(Math.random() * 3);
	        let gX;
	        let gY;
        if (gSide === 0) { gX = -15; gY = MENUBAR_HEIGHT + 80 + Math.random() * 200; }
        else if (gSide === 1) { gX = SCREEN_WIDTH + 15; gY = MENUBAR_HEIGHT + 80 + Math.random() * 200; }
        else { gX = 80 + Math.random() * (SCREEN_WIDTH - 160); gY = SCREEN_HEIGHT + 15; }

	        setEnemies((prev) => [
	          ...prev,
	          { id: Math.random(), type: 'popup-gremlin', x: gX, y: gY, hp: 2, maxHp: 2, size: 36, speed: 2.0 + Math.random() * 0.9, frame: Math.random() * 16, stunned: 0, bounceAngle: Math.random() * Math.PI * 2, bounceTimer: 0 },
	        ]);
	      }

	      if (waveSnap >= 2 && Math.random() < 0.15) {
	        const spySize = 40;
	        const sSide = Math.floor(Math.random() * 3);
	        let sX;
	        let sY;
        if (sSide === 0) { sX = -spySize / 2; sY = MENUBAR_HEIGHT + spySize / 2 + Math.random() * (SCREEN_HEIGHT - MENUBAR_HEIGHT - spySize); }
        else if (sSide === 1) { sX = SCREEN_WIDTH + spySize / 2; sY = MENUBAR_HEIGHT + spySize / 2 + Math.random() * (SCREEN_HEIGHT - MENUBAR_HEIGHT - spySize); }
        else { sX = spySize / 2 + Math.random() * (SCREEN_WIDTH - spySize); sY = SCREEN_HEIGHT + spySize / 2; }

	        setEnemies((prev) => [...prev, { id: Math.random(), type: 'spy-dot', x: sX, y: sY, hp: 5, maxHp: 5, size: spySize, speed: 0.42, frame: 0, stunned: 0 }]);
	      }

      if (waveSnap === 3 && Math.random() < 0.3) {
        const eSide = Math.floor(Math.random() * 3);
        let eX;
        let eY;
        if (eSide === 0) { eX = -15; eY = MENUBAR_HEIGHT + 100 + Math.random() * 200; }
        else if (eSide === 1) { eX = SCREEN_WIDTH + 15; eY = MENUBAR_HEIGHT + 100 + Math.random() * 200; }
        else { eX = 100 + Math.random() * (SCREEN_WIDTH - 200); eY = SCREEN_HEIGHT + 15; }

        const extraType = Math.random() < 0.5 ? 'regi-mite' : 'popup-gremlin';
	        setEnemies((prev) => [
	          ...prev,
	          {
	            id: Math.random(),
	            type: extraType,
            x: eX,
            y: eY,
            hp: extraType === 'regi-mite' ? 3 : 2,
            maxHp: extraType === 'regi-mite' ? 3 : 2,
	            size: extraType === 'regi-mite' ? 64 : 36,
	            flipX: eSide === 0,
	            speed: extraType === 'popup-gremlin' ? 2.2 + Math.random() * 0.9 : 0.8 + Math.random() * 0.4,
	            frame: 0,
	            stunned: 0,
	            bounceAngle: Math.random() * Math.PI * 2,
	            bounceTimer: 0,
          },
        ]);
      }
    }

    popupTimerRef.current -= dt;
    if (popupTimerRef.current <= 0 && popupsSnap.length === 0 && waveSnap >= 1) {
      const baseDelay = { 1: 18000, 2: 14000, 3: 10000 }[waveSnap] || 15000;
      const waveProgress = (90 - waveTimerSnap) / 90;
      popupTimerRef.current = baseDelay * (1 - waveProgress * 0.3);

      const popupChance = { 1: 0.4, 2: 0.55, 3: 0.7 }[waveSnap] || 0.5;
      if (Math.random() < popupChance) {
        const rand = Math.random();
        const popupType = rand < 0.4 ? 'firewall' : rand < 0.7 ? 'fake-update' : 'security-update';
        const swapChance = { 1: 0.15, 2: 0.4, 3: 0.65 }[waveSnap] || 0.3;

        setPopups([
          { id: Math.random(), type: popupType, x: 80 + Math.random() * 360, y: 50 + Math.random() * 250, swapped: Math.random() < swapChance, isLegit: popupType === 'security-update', countdown: 100 },
        ]);
      }
    }

    setWaveTimer((prev) => {
      const newTime = prev - dt / 1000;
      if (newTime <= 0) {
        const deployableCount = folderWallsSnap.length + deployablesSnap.length;
        const deployableBonus = Math.max(0, (11 - deployableCount) * 10);
        if (deployableBonus > 0) setScore((s) => s + deployableBonus);
        if (waveSnap === 1) {
          setWave(2);
          return 90;
        }
        if (waveSnap === 2) {
          setGameState(GAME_STATES.INTERMISSION);
          return 90;
        }
        if (waveSnap === 3) {
          setGameState(GAME_STATES.WIN);
          return 0;
        }
      }
      return Math.max(0, newTime);
    });

    setTotalTime((prev) => prev + dt / 1000);

    setEmpExplosion((prev) => {
      if (!prev || !Number.isFinite(prev.t0)) return prev;
      const age = snap.totalTime + dt / 1000 - prev.t0;
      return age > 0.6 ? null : prev;
    });

    if (playerSnap.hp <= 0 || systemFolderHPSnap <= 0) {
      setGameState(GAME_STATES.GAMEOVER);
    }
  }, []);

  useEffect(() => {
    if (isWebdriver) return;
    if (gameState !== GAME_STATES.PLAYING && gameState !== GAME_STATES.SETUP) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
      return;
    }

    let cancelled = false;
    const loop = (timestamp) => {
      if (cancelled) return;
      const dt = Math.min(timestamp - lastTimeRef.current, 50);
      lastTimeRef.current = timestamp;
      tick(dt);
      animFrameRef.current = requestAnimationFrame(loop);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      cancelled = true;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    };
  }, [gameState, isWebdriver, tick]);

  useEffect(() => {
	    window.render_game_to_text = () => {
	      const s = stateRef.current;
	      if (!s) return null;
      const payload = {
        mode: s.gameState,
        coords: { origin: 'top-left', x: 'right', y: 'down', units: 'px' },
        wave: s.wave,
        wave_timer_s: Number.isFinite(s.waveTimer) ? s.waveTimer : 0,
        score: s.score,
        system_folder_hp: s.systemFolderHP,
        player: {
          x: s.player.x,
          y: s.player.y,
          hp: s.player.hp,
          cpu_heat: s.player.cpuHeat,
          ram_pressure: s.player.ramPressure,
          emp: s.player.empCharge,
          power_up: s.player.powerUp,
        },
	        enemies: s.enemies.map((e) => ({ id: e.id, type: e.type, x: e.x, y: e.y, hp: e.hp, max_hp: e.maxHp, stunned: e.stunned, size: e.size })),
	        pickups: s.pickups.map((p) => ({ id: p.id, type: p.type, x: p.x, y: p.y })),
	        projectiles: s.projectiles.map((p) => ({ id: p.id, x: p.x, y: p.y, from_watchdog: !!p.fromWatchdog })),
	        folder_walls: s.folderWalls.map((w) => ({ id: w.id, x: w.x, y: w.y, hp: w.hp })),
	        deployables: s.deployables.map((d) => ({ id: d.id, type: d.type, x: d.x, y: d.y, aim_dir: d.aimDir })),
	        popups: s.popups.map((p) => ({ id: p.id, type: p.type, swapped: p.swapped, countdown: p.countdown })),
	        clutter_count: s.clutter.length,
	      };
	      return JSON.stringify(payload);
	    };

    window.advanceTime = async (ms) => {
      const frameMs = 1000 / 60;
      const steps = Math.max(1, Math.round(ms / frameMs));
      for (let i = 0; i < steps; i += 1) {
        ReactDOM.flushSync(() => tick(frameMs));
      }
    };

    return () => {
      delete window.render_game_to_text;
      delete window.advanceTime;
    };
  }, [tick]);

  // Playwright+SwiftShader has shown partial canvas updates when the WebGL canvas is under a CSS
  // transform. Keep scale at 1 during webdriver runs so automation captures are reliable.
  const BASE_VIEW_SCALE = isWebdriver ? 1 : 1.15;
  const fitScale = Math.min(
    (viewport.w * 0.96) / CRT_MONITOR_LAYOUT.width,
    (viewport.h * 0.96) / CRT_MONITOR_LAYOUT.height
  );
  const VIEW_SCALE = isFullscreen ? Math.max(1, Math.min(2.25, fitScale)) : BASE_VIEW_SCALE;
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
	          {/* CRT Monitor (fullscreen target) */}
	          <div
	            ref={fullscreenRef}
	            style={
	              isFullscreen
	                ? {
	                    width: '100vw',
	                    height: '100vh',
	                    display: 'flex',
	                    alignItems: 'center',
	                    justifyContent: 'center',
	                    background: 'radial-gradient(1000px 700px at 50% 30%, rgba(120,150,255,0.18), rgba(0,0,0,0))',
	                    padding: 18,
	                    boxSizing: 'border-box',
	                  }
	                : undefined
	            }
	          >
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
                {useWebGL ? (
                  <ThreeScreen
                    state={{
                      mode: gameState,
                      totalTime,
                      player,
                      enemies,
                      pickups,
                      folderWalls,
                      deployables,
                      clutter,
                      projectiles,
                      systemFolderHP,
                      empExplosion,
                      mousePos,
                      trash: { x: 580, y: 420 },
                    }}
                    onInitFailed={() => setUseWebGL(false)}
                  />
                ) : (
                  <Sprite
                    src={SPRITES.wallpaper}
                    width={SCREEN_WIDTH}
                    height={SCREEN_HEIGHT}
                    pixelated={false}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    fallback={
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, #233257 0%, #121826 55%, #0b1020 100%)',
                        }}
                      />
                    }
                  />
                )}

                {/* DOM fallback renderer when WebGL is disabled/unavailable. */}
                {!useWebGL && (gameState === GAME_STATES.SETUP || gameState === GAME_STATES.PLAYING || gameState === GAME_STATES.PAUSED) && (
                  <>
                    <SystemFolder x={320} y={280} hp={systemFolderHP} />

                    {folderWalls.map((wall) => (
                      <FolderWall key={wall.id} {...wall} />
                    ))}

                    {deployables.map((d) => (
                      <Deployable key={d.id} {...d} />
                    ))}

                    {(gameState === GAME_STATES.PLAYING || gameState === GAME_STATES.PAUSED) && (
                      <>
                        {clutter.map((c) => (
                          <Clutter key={c.id} {...c} />
                        ))}

                        {pickups.map((p) => (
                          <Pickup key={p.id} {...p} />
                        ))}

                        {enemies.map((e) => (
                          <Enemy key={e.id} {...e} />
                        ))}

                        {projectiles.map((p) => (
                          <div
                            key={p.id}
                            style={{
                              position: 'absolute',
                              left: p.x - 4,
                              top: p.y - 4,
                              width: 8,
                              height: 8,
                              background: p.fromWatchdog ? '#bff' : '#fff2a8',
                              borderRadius: '50%',
                              boxShadow: p.fromWatchdog ? '0 0 8px rgba(120,220,255,0.8)' : '0 0 6px rgba(255,210,90,0.7)',
                              pointerEvents: 'none',
                              zIndex: 35,
                            }}
                          />
                        ))}

                        <Trash x={580} y={420} clutter={clutter} />

                        <PlayerCursor {...player} mousePos={mousePos} />
                      </>
                    )}
                  </>
                )}
            
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
	                {/* CPU Heat indicator (chip + segmented bar) */}
	                <div
	                  title={`CPU Heat: ${Math.floor(player.cpuHeat)}%`}
	                  style={{ display: 'flex', alignItems: 'center', gap: 4 }}
	                >
	                  <CpuIcon size={14} hot={player.cpuHeat >= 90} />
	                  <div
	                    style={{
	                      width: 42,
	                      height: 10,
	                      background: 'linear-gradient(180deg, #f4f4f4 0%, #d7d7d7 100%)',
	                      position: 'relative',
	                      borderRadius: 3,
	                      border: '1px solid #666',
	                      overflow: 'hidden',
	                      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)',
	                    }}
	                  >
	                    <div
	                      style={{
	                        width: `${player.cpuHeat}%`,
	                        height: '100%',
	                        background:
	                          player.cpuHeat >= 90
	                            ? 'linear-gradient(90deg, #ff9a3c 0%, #ff4d4d 60%, #ff4d4d 100%)'
	                            : player.cpuHeat > 60
	                              ? 'linear-gradient(90deg, #ffd35a 0%, #ff9a3c 90%)'
	                              : 'linear-gradient(90deg, #ffd35a 0%, #f2c94c 100%)',
	                        boxShadow: player.cpuHeat >= 90 ? '0 0 8px rgba(255,77,77,0.55)' : 'none',
	                        animation: player.cpuHeat >= 90 ? 'blink 0.2s infinite' : 'none',
	                      }}
	                    />
	                    <div
	                      style={{
	                        position: 'absolute',
	                        inset: 0,
	                        backgroundImage:
	                          'repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 7px)',
	                        opacity: 0.35,
	                        pointerEvents: 'none',
	                      }}
	                    />
	                  </div>
	                </div>
	                {/* RAM pressure indicator (stick + segmented bar) */}
	                <div
	                  title={`RAM Pressure: ${Math.floor(player.ramPressure)}%`}
	                  style={{ display: 'flex', alignItems: 'center', gap: 4 }}
	                >
	                  <RamIcon size={14} high={player.ramPressure >= 80} />
	                  <div
	                    style={{
	                      width: 42,
	                      height: 10,
	                      background: 'linear-gradient(180deg, #f4f4f4 0%, #d7d7d7 100%)',
	                      position: 'relative',
	                      borderRadius: 3,
	                      border: '1px solid #666',
	                      overflow: 'hidden',
	                      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)',
	                    }}
	                  >
	                    <div
	                      style={{
	                        width: `${player.ramPressure}%`,
	                        height: '100%',
	                        background:
	                          player.ramPressure > 70
	                            ? 'linear-gradient(90deg, #ffd35a 0%, #ff4d4d 80%, #ff4d4d 100%)'
	                            : player.ramPressure > 40
	                              ? 'linear-gradient(90deg, #67d6ff 0%, #ffd35a 90%)'
	                              : 'linear-gradient(90deg, #67d6ff 0%, #4bbf5a 100%)',
	                        boxShadow: player.ramPressure >= 80 ? '0 0 8px rgba(255,77,77,0.45)' : 'none',
	                      }}
	                    />
	                    <div
	                      style={{
	                        position: 'absolute',
	                        inset: 0,
	                        backgroundImage:
	                          'repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 7px)',
	                        opacity: 0.35,
	                        pointerEvents: 'none',
	                      }}
	                    />
	                  </div>
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
	                    {player.upgrades.includes('ram') ? 'RAM' : 'FAN'}
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
	                    OVERHEAT
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
	                    {player.ramPressure >= 80 ? 'SLOW' : 'RAM'}
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
		                    <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center', animation: 'idleBob 2.8s ease-in-out infinite' }}>
		                      <svg width="48" height="48" viewBox="0 0 28 28" aria-label="Cursor">
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
                {useWebGL && (
                  <>
                    <SystemFolder x={320} y={280} hp={systemFolderHP} showIcon={false} />

                    {/* Trash: DOM hitbox + badge only (icon is 3D) */}
                    <Trash x={580} y={420} clutter={clutter} showIcon={false} />

                    <AimOverlay {...player} mousePos={mousePos} />
                  </>
                )}

                {popups.map((popup) => (
                  <PopupWindow key={popup.id} popup={popup} onChoice={handlePopupChoice} />
                ))}
                
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
	                      <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
	                        <svg width="40" height="40" viewBox="0 0 64 64" aria-label="RAM Upgrade">
	                          <rect x="14" y="18" width="36" height="28" rx="6" fill="#2a2f3c" stroke="#0a0" strokeWidth="4" />
	                          <rect x="20" y="24" width="24" height="6" rx="3" fill="#0a0" opacity="0.7" />
	                          <rect x="20" y="34" width="18" height="6" rx="3" fill="#0a0" opacity="0.55" />
	                          <g fill="#0a0" opacity="0.9">
	                            <rect x="10" y="22" width="4" height="6" rx="2" />
	                            <rect x="10" y="32" width="4" height="6" rx="2" />
	                            <rect x="50" y="22" width="4" height="6" rx="2" />
	                            <rect x="50" y="32" width="4" height="6" rx="2" />
	                          </g>
	                        </svg>
	                      </div>
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
	                      <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
	                        <svg width="40" height="40" viewBox="0 0 64 64" aria-label="Cooling Fan">
	                          <circle cx="32" cy="32" r="22" fill="#2a2f3c" stroke="#08f" strokeWidth="4" />
	                          <circle cx="32" cy="32" r="5" fill="#08f" />
	                          <path d="M32 10 C38 12, 42 18, 40 24 C38 29, 34 28, 32 26 Z" fill="#08f" opacity="0.75" />
	                          <path d="M54 32 C52 38, 46 42, 40 40 C35 38, 36 34, 38 32 Z" fill="#08f" opacity="0.75" />
	                          <path d="M32 54 C26 52, 22 46, 24 40 C26 35, 30 36, 32 38 Z" fill="#08f" opacity="0.75" />
	                          <path d="M10 32 C12 26, 18 22, 24 24 C29 26, 28 30, 26 32 Z" fill="#08f" opacity="0.75" />
	                        </svg>
	                      </div>
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
	                <Window title="GAME OVER" width={300}>
	                  <div style={{ textAlign: 'center' }}>
	                    <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'center' }}>
	                      <svg width="42" height="42" viewBox="0 0 64 64" aria-label="Game Over">
	                        <path d="M32 6 L60 56 H4 Z" fill="#d44" stroke="#2a2a2a" strokeWidth="4" />
	                        <rect x="29" y="22" width="6" height="18" rx="3" fill="#1a1a1a" />
	                        <rect x="29" y="44" width="6" height="6" rx="3" fill="#1a1a1a" />
	                      </svg>
	                    </div>
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
	                    <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'center' }}>
	                      <svg width="42" height="42" viewBox="0 0 64 64" aria-label="Victory">
	                        <path
	                          d="M32 6 L39 22 L56 24 L43 36 L47 54 L32 44 L17 54 L21 36 L8 24 L25 22 Z"
	                          fill="#f2c94c"
	                          stroke="#2a2a2a"
	                          strokeWidth="4"
	                          strokeLinejoin="round"
	                        />
	                      </svg>
	                    </div>
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
	                <Window title="Help" width={350}>
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
	                      <p>Rapid Fire | Triple Shot | Giant Mode</p>
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
	                <div>WASD / Arrows - Move</div>
	                <div>Mouse - Aim</div>
	                <div>Click - Shoot</div>
	                <div>Right Click - EMP</div>
	                <div>Shift - Dash</div>
	                <div>Q/E - Popups</div>
	                <div>Space - Pause</div>
	                <div>F - Fullscreen</div>
	              </div>

		              <div style={{ fontSize: 9, marginBottom: 8, color: '#fa0' }}>ENEMIES</div>
		              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12, lineHeight: 1.9 }}>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <RegiMiteIcon size={16} />
		                  </span>
		                  <span>Regi-Mite</span>
		                </div>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <GremlinIcon size={16} />
		                  </span>
		                  <span>Gremlin</span>
		                </div>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <SpyDotIcon size={16} />
		                  </span>
		                  <span>Spy-Dot</span>
		                </div>
		              </div>

		              <div style={{ fontSize: 9, marginBottom: 8, color: '#5f5' }}>POWER-UPS</div>
		              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12, lineHeight: 1.9 }}>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <AppleIcon size={16} />
		                  </span>
		                  <span>Heal</span>
		                </div>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <CoolantIcon size={16} />
		                  </span>
		                  <span>Coolant</span>
		                </div>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <PowerRapidIcon size={16} />
		                  </span>
		                  <span>Rapid</span>
		                </div>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <PowerTripleIcon size={16} />
		                  </span>
		                  <span>Triple</span>
		                </div>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <PowerGiantIcon size={16} />
		                  </span>
		                  <span>Giant</span>
		                </div>
		              </div>

		              <div style={{ fontSize: 9, marginBottom: 8, color: '#8af' }}>DEPLOYABLES</div>
		              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, lineHeight: 1.9 }}>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <FolderWallIcon size={16} />
		                  </span>
		                  <span>Wall</span>
		                </div>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <WatchdogIcon size={16} />
		                  </span>
		                  <span>Watchdog</span>
		                </div>
		                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		                  <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))' }}>
		                    <FloppyDiskIcon size={16} />
		                  </span>
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
	            <div><span style={{ color: '#faa' }}>CPU</span> - Overheats when shooting; Coolant helps</div>
	            <div><span style={{ color: '#ffa' }}>RAM</span> - Clutter slows you down; shoot Trash to clear</div>
	          </div>
	        </div>
        
        {/* Dark Patterns */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: '#f8f', marginBottom: 8 }}>DARK PATTERNS</div>
          <div style={{ fontSize: 7, lineHeight: 2 }}>
            <div>Firewall - <span style={{ color: '#5f5' }}>Deny</span> is correct</div>
            <div>Fake Update - <span style={{ color: '#5f5' }}>Later</span> is correct</div>
            <div>Security Patch - <span style={{ color: '#5f5' }}>Install</span> is correct</div>
            <div style={{ color: '#fa0', marginTop: 4 }}>Warning: Q/E buttons can swap.</div>
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
