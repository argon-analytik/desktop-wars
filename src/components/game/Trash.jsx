import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import Sprite from '../shared/Sprite.jsx';

export default function Trash({ x, y, clutter, showIcon = true }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 32,
        height: 36,
        zIndex: 30,
      }}
    >
      {showIcon && (
        <Sprite
          src={SPRITES.trash}
          width={32}
          height={36}
          style={{ width: 32, height: 36 }}
          fallback={
            <svg width="32" height="36" viewBox="0 0 32 36">
              <path d="M6 10 L8 32 L24 32 L26 10 Z" fill="#888" stroke="#555" strokeWidth="1" />
              <rect x="4" y="6" width="24" height="4" rx="1" fill="#999" stroke="#555" strokeWidth="1" />
              <rect x="12" y="3" width="8" height="4" rx="1" fill="#777" stroke="#555" strokeWidth="0.5" />
              <line x1="11" y1="14" x2="11" y2="28" stroke="#666" strokeWidth="1" />
              <line x1="16" y1="14" x2="16" y2="28" stroke="#666" strokeWidth="1" />
              <line x1="21" y1="14" x2="21" y2="28" stroke="#666" strokeWidth="1" />
            </svg>
          }
        />
      )}

      {clutter.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: -6,
            right: -6,
            width: 18,
            height: 18,
            background: '#e55',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 8,
            color: '#fff',
            fontWeight: 'bold',
            border: '2px solid #fff',
            animation: 'pulse 1s infinite',
          }}
        >
          {clutter.length}
        </div>
      )}
    </div>
  );
}
