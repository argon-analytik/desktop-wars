import { React } from '../../lib/react.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../game/constants.js';

export default function AimOverlay({ x, y, empCharge, invincible, mousePos, powerUp, cpuHeat, ramPressure, isHit }) {
  const isOverheated = cpuHeat >= 90;
  const isSlowed = ramPressure >= 60;
  const isGiant = powerUp === 'giant';

  const crosshairColor = isOverheated ? 'rgba(255,100,100,0.8)' : 'rgba(255,255,255,0.7)';
  const crosshairOuter = isOverheated ? 'rgba(255,100,100,0.7)' : 'rgba(255,255,255,0.5)';

  let tagBg = null;
  if (powerUp === 'rapid') tagBg = '#f80';
  else if (powerUp === 'triple') tagBg = '#08f';
  else if (powerUp === 'giant') tagBg = '#fa0';

  let playerRing = 'none';
  if (isHit) playerRing = 'brightness(2.0)';
  else if (isGiant) playerRing = 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.7))';
  else if (isOverheated) playerRing = 'drop-shadow(0 0 8px rgba(255, 80, 80, 0.65))';
  else if (isSlowed) playerRing = 'drop-shadow(0 0 6px rgba(70, 160, 255, 0.6))';

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: mousePos.x - 14,
          top: mousePos.y - 14,
          width: 28,
          height: 28,
          pointerEvents: 'none',
          zIndex: 60,
          filter: playerRing,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="11" fill="none" stroke={crosshairOuter} strokeWidth="2" />
          <circle cx="14" cy="14" r="4" fill="none" stroke={crosshairColor} strokeWidth="2" />
          <line x1="14" y1="0" x2="14" y2="7" stroke={crosshairColor} strokeWidth="2" />
          <line x1="14" y1="21" x2="14" y2="28" stroke={crosshairColor} strokeWidth="2" />
          <line x1="0" y1="14" x2="7" y2="14" stroke={crosshairColor} strokeWidth="2" />
          <line x1="21" y1="14" x2="28" y2="14" stroke={crosshairColor} strokeWidth="2" />
          <circle cx="14" cy="14" r="2" fill={isOverheated ? '#f00' : '#f44'} />
        </svg>
      </div>

      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          pointerEvents: 'none',
          zIndex: 45,
        }}
      >
        <line
          x1={x}
          y1={y}
          x2={mousePos.x}
          y2={mousePos.y}
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1"
          strokeDasharray="6,4"
        />
      </svg>

      {empCharge >= 100 && (
        <div
          style={{
            position: 'absolute',
            left: Math.round(x - 16 - 8),
            top: Math.round(y - 16 - 8),
            width: 48,
            height: 48,
            border: '3px solid rgba(100, 200, 255, 0.9)',
            borderRadius: '50%',
            animation: 'pulse 1s infinite',
            pointerEvents: 'none',
            zIndex: 49,
            boxSizing: 'border-box',
            filter: 'drop-shadow(0 0 10px rgba(100,200,255,0.35))',
          }}
        />
      )}

      {powerUp && (
        <div
          style={{
            position: 'absolute',
            left: x - 24,
            top: y - 16 - 18,
            fontSize: 8,
            color: '#fff',
            background: tagBg,
            padding: '2px 6px',
            borderRadius: 4,
            fontWeight: 'bold',
            pointerEvents: 'none',
            zIndex: 55,
            whiteSpace: 'nowrap',
            boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
          }}
        >
          {powerUp === 'rapid' ? 'RAPID' : powerUp === 'triple' ? 'TRIPLE' : 'GIANT'}
        </div>
      )}

      {invincible > 0 && (
        <div
          style={{
            position: 'absolute',
            left: x - 20,
            top: y - 20,
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.12)',
            pointerEvents: 'none',
            zIndex: 44,
          }}
        />
      )}
    </>
  );
}

