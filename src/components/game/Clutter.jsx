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
        fallback={
          <svg width={spriteSize} height={spriteSize} viewBox="0 0 18 18">
            <path d="M4 2h7l3 3v11H4z" fill="#f3f6ff" stroke="#6b778c" strokeWidth="1" />
            <path d="M11 2v4h4" fill="none" stroke="#6b778c" strokeWidth="1" />
            <line x1="6" y1="8" x2="13" y2="8" stroke="#6b778c" strokeWidth="1" />
            <line x1="6" y1="11" x2="13" y2="11" stroke="#6b778c" strokeWidth="1" />
          </svg>
        }
      />
    </div>
  );
}
