import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import Sprite from '../shared/Sprite.jsx';

export default function Clutter({ x, y }) {
  const spriteSize = 18;
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
        fontSize: 18,
        opacity: 0.85,
        pointerEvents: 'none',
        animation: 'wobble 2s infinite',
      }}
    >
      <Sprite
        src={SPRITES.clutter}
        width={spriteSize}
        height={spriteSize}
        style={{ width: spriteSize, height: spriteSize }}
        fallback="📄"
      />
    </div>
  );
}
