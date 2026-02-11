import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import Sprite from '../shared/Sprite.jsx';
import { AppleIcon, CoolantIcon, PowerGiantIcon, PowerRapidIcon, PowerTripleIcon } from '../ui/GameIcons.jsx';

function PickupFallback({ type, size }) {
  if (type === 'apple') return <AppleIcon size={size} />;
  if (type === 'coolant') return <CoolantIcon size={size} />;
  if (type === 'powerup-rapid') return <PowerRapidIcon size={size} />;
  if (type === 'powerup-triple') return <PowerTripleIcon size={size} />;
  if (type === 'powerup-giant') return <PowerGiantIcon size={size} />;
  return <AppleIcon size={size} />;
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
