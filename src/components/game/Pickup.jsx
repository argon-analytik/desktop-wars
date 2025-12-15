import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import Sprite from '../shared/Sprite.jsx';

export default function Pickup({ x, y, type }) {
  const config = {
    apple: { emoji: '🍎' },
    coolant: { emoji: '❄️' },
    'powerup-rapid': { emoji: '🔥', glow: '#ff0' },
    'powerup-triple': { emoji: '🔱', glow: '#4af' },
    'powerup-giant': { emoji: '🛡️', glow: '#fa0' },
  };
  const c = config[type] || config.apple;
  const isPowerUp = type && type.startsWith('powerup');
  const spriteSrc =
    type === 'apple'
      ? SPRITES.pickupApple
      : type === 'coolant'
        ? SPRITES.pickupCoolant
        : type === 'powerup-rapid'
          ? SPRITES.powerupRapid
          : type === 'powerup-triple'
            ? SPRITES.powerupTriple
            : type === 'powerup-giant'
              ? SPRITES.powerupGiant
              : null;
  const spriteSize = 22;

  return (
    <div
      style={{
        position: 'absolute',
        left: x - 14,
        top: y - 14,
        width: 28,
        height: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        animation: isPowerUp ? 'pulse 0.6s infinite' : 'wobble 0.8s infinite',
        filter: c.glow ? `drop-shadow(0 0 10px ${c.glow})` : 'none',
        pointerEvents: 'none',
      }}
    >
      <Sprite src={spriteSrc} width={spriteSize} height={spriteSize} style={{ width: spriteSize, height: spriteSize }} fallback={c.emoji} />
    </div>
  );
}
