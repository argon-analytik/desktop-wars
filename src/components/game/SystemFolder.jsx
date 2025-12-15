import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import Sprite from '../shared/Sprite.jsx';

export default function SystemFolder({ x, y, hp }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: x - 24,
        top: y - 24,
        width: 48,
        height: 48,
        pointerEvents: 'none',
      }}
    >
      <Sprite
        src={SPRITES.systemFolder}
        width={48}
        height={48}
        style={{ width: 48, height: 48 }}
        fallback={
          <svg width="48" height="48" viewBox="0 0 48 48">
            <rect x="4" y="8" width="40" height="36" rx="3" fill="#4a7c9c" stroke="#2a5c7c" strokeWidth="2" />
            <rect x="4" y="8" width="16" height="6" fill="#5a9cbc" />
            <rect x="18" y="22" width="12" height="10" rx="2" fill="#ffd700" stroke="#aa8800" strokeWidth="1" />
          </svg>
        }
      />
      <div
        style={{
          position: 'absolute',
          bottom: -10,
          left: 4,
          width: 40,
          height: 5,
          background: '#333',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <div style={{ width: `${hp}%`, height: '100%', background: hp > 50 ? '#4a4' : '#e44' }} />
      </div>
    </div>
  );
}
