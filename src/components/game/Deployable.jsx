import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import Sprite from '../shared/Sprite.jsx';
import SpriteSheet from '../shared/SpriteSheet.jsx';

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
                fallback={<span style={{ filter: spriteFilter }}>🐕</span>}
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
          fallback={<span style={{ filter: spriteFilter }}>📝</span>}
        />
      )}
    </div>
  );
}
