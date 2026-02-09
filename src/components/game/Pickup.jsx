import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import Sprite from '../shared/Sprite.jsx';

function PickupFallback({ type, size }) {
  if (type === 'apple') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64">
        <circle cx="32" cy="36" r="18" fill="#e04444" stroke="#6b1e1e" strokeWidth="4" />
        <rect x="30" y="10" width="4" height="12" rx="2" fill="#6b1e1e" />
        <path d="M34 16 C42 12, 46 18, 40 22 C36 24, 34 20, 34 16 Z" fill="#4bbf5a" />
      </svg>
    );
  }
  if (type === 'coolant') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64">
        <rect x="16" y="16" width="32" height="32" rx="6" fill="#67d6ff" opacity="0.75" stroke="#1f5d7a" strokeWidth="4" />
        <path d="M32 12v40M12 32h40M18 18l28 28M46 18L18 46" stroke="#1f5d7a" strokeWidth="3" opacity="0.6" />
      </svg>
    );
  }
  if (type === 'powerup-rapid') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64">
        <path d="M36 8 C26 18, 44 26, 26 38 C16 44, 20 56, 32 56 C46 56, 52 44, 48 34 C44 24, 42 18, 36 8 Z" fill="#ff9a3c" stroke="#7a3a00" strokeWidth="4" />
      </svg>
    );
  }
  if (type === 'powerup-triple') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64">
        <path d="M32 10 L14 52 L32 44 L50 52 Z" fill="#3c8bff" stroke="#0b2f7a" strokeWidth="4" />
        <path d="M32 16 L20 46 L32 40 L44 46 Z" fill="#a8d1ff" opacity="0.6" />
      </svg>
    );
  }
  if (type === 'powerup-giant') {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64">
        <path d="M32 10 C44 16, 52 20, 52 30 C52 46, 40 54, 32 58 C24 54, 12 46, 12 30 C12 20, 20 16, 32 10 Z" fill="#f2c94c" stroke="#6a4b00" strokeWidth="4" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="16" fill="#fff2a8" stroke="#7a6a2b" strokeWidth="4" />
    </svg>
  );
}

export default function Pickup({ x, y, type }) {
  const config = {
    apple: {},
    coolant: {},
    'powerup-rapid': { glow: '#ff0' },
    'powerup-triple': { glow: '#4af' },
    'powerup-giant': { glow: '#fa0' },
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
      <Sprite
        src={spriteSrc}
        width={spriteSize}
        height={spriteSize}
        style={{ width: spriteSize, height: spriteSize }}
        fallback={<PickupFallback type={type} size={spriteSize} />}
      />
    </div>
  );
}
