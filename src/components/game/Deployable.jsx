import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import Sprite from '../shared/Sprite.jsx';
import SpriteSheet from '../shared/SpriteSheet.jsx';

function WatchdogFallback({ size, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" style={style}>
      <circle cx="32" cy="32" r="18" fill="#f2c94c" stroke="#2a2f3c" strokeWidth="4" />
      <rect x="28" y="10" width="8" height="18" rx="3" fill="#2a2f3c" />
      <circle cx="32" cy="34" r="6" fill="#2a2f3c" />
    </svg>
  );
}

function StickyFallback({ size, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" style={style}>
      <rect x="12" y="10" width="40" height="44" rx="6" fill="#f7f0a6" stroke="#6b5b2d" strokeWidth="4" />
      <rect x="18" y="18" width="28" height="6" rx="3" fill="#6b5b2d" opacity="0.5" />
      <rect x="18" y="30" width="28" height="6" rx="3" fill="#6b5b2d" opacity="0.4" />
    </svg>
  );
}

export default function Deployable({ type, x, y, aimDir = 7 }) {
  const spriteSrc = type === 'watchdog' ? SPRITES.deployableWatchdog : type === 'sticky' ? SPRITES.deployableSticky : null;
  const containerSize = type === 'watchdog' ? 64 : 24;
  const spriteSize = type === 'watchdog' ? 64 : 22;
  const spriteFilter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))';
  const safeAimDir = Number.isFinite(aimDir) ? Math.max(0, Math.min(7, Math.floor(aimDir))) : 0;

  return (
    <div
      style={{
        position: 'absolute',
        left: x + 12 - containerSize / 2,
        top: y + 12 - containerSize / 2,
        width: containerSize,
        height: containerSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        pointerEvents: 'none',
      }}
    >
      {type === 'watchdog' && (
        <div
          style={{
            width: spriteSize,
            height: spriteSize,
            filter: spriteFilter,
          }}
        >
          <SpriteSheet
            src={spriteSrc}
            width={spriteSize}
            height={spriteSize}
            frameWidth={44}
            frameHeight={44}
            columns={4}
            rows={2}
            marginX={10}
            marginY={10}
            spacingX={20}
            spacingY={20}
            frameIndex={safeAimDir}
            fallback={
              <Sprite
                src={spriteSrc}
                width={spriteSize}
                height={spriteSize}
                style={{ width: spriteSize, height: spriteSize }}
                fallback={<WatchdogFallback size={spriteSize} style={{ filter: spriteFilter }} />}
              />
            }
          />
        </div>
      )}
      {type === 'sticky' && (
        <Sprite
          src={spriteSrc}
          width={spriteSize}
          height={spriteSize}
          style={{ width: spriteSize, height: spriteSize, filter: spriteFilter }}
          fallback={<StickyFallback size={spriteSize} style={{ filter: spriteFilter }} />}
        />
      )}
    </div>
  );
}
