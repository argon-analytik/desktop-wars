import { MENUBAR_HEIGHT, SCREEN_HEIGHT, SCREEN_WIDTH } from './constants.js';

export const createInitialPlayer = () => ({
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
  powerUpTimer: 0,
});

