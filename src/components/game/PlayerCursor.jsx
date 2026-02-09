import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../game/constants.js';
import Sprite from '../shared/Sprite.jsx';

export default function PlayerCursor({
  x,
  y,
  hp,
  isHit,
  empCharge,
  invincible,
  mousePos,
  powerUp,
  cpuHeat,
  ramPressure,
}) {
  const angle = Math.atan2(mousePos.y - y, mousePos.x - x);
  const angleDeg = (angle * 180) / Math.PI;
  const isGiant = powerUp === 'giant';
  const cursorSize = isGiant ? 48 : 32;
  const isOverheated = cpuHeat >= 90;
  const isSlowed = ramPressure >= 60;

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
      <div
        style={{
          position: 'absolute',
          left: mousePos.x - 14,
          top: mousePos.y - 14,
          width: 28,
          height: 28,
          pointerEvents: 'none',
          zIndex: 60,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <circle
            cx="14"
            cy="14"
            r="11"
            fill="none"
            stroke={isOverheated ? 'rgba(255,100,100,0.7)' : 'rgba(255,255,255,0.5)'}
            strokeWidth="2"
          />
          <circle
            cx="14"
            cy="14"
            r="4"
            fill="none"
            stroke={isOverheated ? 'rgba(255,100,100,0.8)' : 'rgba(255,255,255,0.7)'}
            strokeWidth="2"
          />
          <line x1="14" y1="0" x2="14" y2="7" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <line x1="14" y1="21" x2="14" y2="28" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <line x1="0" y1="14" x2="7" y2="14" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <line x1="21" y1="14" x2="28" y2="14" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
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
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          strokeDasharray="6,4"
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          left: x - cursorSize / 2,
          top: y - cursorSize / 2,
          width: cursorSize,
          height: cursorSize,
          transform: `rotate(${angleDeg + 90}deg)`,
          transformOrigin: 'center center',
          filter: cursorFilter,
          opacity: invincible > 0 ? (Math.floor(invincible / 4) % 2 ? 0.4 : 1) : 1,
          zIndex: 50,
          pointerEvents: 'none',
        }}
      >
        <Sprite
          src={SPRITES.cursor}
          width={cursorSize}
          height={cursorSize}
          style={{ width: cursorSize, height: cursorSize }}
          fallback={
            <svg width={cursorSize} height={cursorSize} viewBox="0 0 28 28">
              <polygon
                points="14,3 4,20 14,15 24,20"
                fill={cursorColor}
                stroke="#111"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>

      {empCharge >= 100 && (
        <div
          style={{
            position: 'absolute',
            left: Math.round(x - cursorSize / 2 - 6),
            top: Math.round(y - cursorSize / 2 - 6),
            width: cursorSize + 12,
            height: cursorSize + 12,
            border: '3px solid #4af',
            borderRadius: '50%',
            animation: 'pulse 1s infinite',
            pointerEvents: 'none',
            zIndex: 49,
            boxSizing: 'border-box',
          }}
        />
      )}

      {powerUp && (
        <div
          style={{
            position: 'absolute',
            left: x - 24,
            top: y - cursorSize / 2 - 18,
            fontSize: 8,
            color: '#fff',
            background: powerUp === 'rapid' ? '#f80' : powerUp === 'triple' ? '#08f' : '#ff0',
            padding: '2px 6px',
            borderRadius: 4,
            fontWeight: 'bold',
            pointerEvents: 'none',
            zIndex: 55,
            whiteSpace: 'nowrap',
          }}
        >
          {powerUp === 'rapid' ? 'RAPID' : powerUp === 'triple' ? 'TRIPLE' : 'GIANT'}
        </div>
      )}
    </>
  );
}
