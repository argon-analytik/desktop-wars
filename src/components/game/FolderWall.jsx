import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import Sprite from '../shared/Sprite.jsx';
import SpriteSheet from '../shared/SpriteSheet.jsx';

export default function FolderWall({ x, y, hp }) {
  const damage = hp > 3 ? 0 : hp > 2 ? 1 : hp > 1 ? 2 : 3;

  return (
    <div style={{ position: 'absolute', left: x, top: y, width: 24, height: 24, pointerEvents: 'none' }}>
      <SpriteSheet
        src={SPRITES.folderWall}
        width={24}
        height={24}
        frameWidth={32}
        frameHeight={32}
        columns={4}
        rows={1}
        marginX={16}
        marginY={16}
        spacingX={32}
        frameIndex={damage}
        fallback={
          <Sprite
            src={SPRITES.folderWall}
            width={24}
            height={24}
            style={{ width: 24, height: 24 }}
            fallback={
              <svg width="24" height="24" viewBox="0 0 24 24">
                <rect x="2" y="5" width="20" height="17" rx="2" fill="#d4a456" stroke="#a07030" strokeWidth="1" />
                <rect x="2" y="5" width="9" height="4" fill="#e8bc6a" stroke="#a07030" strokeWidth="0.5" />
                {damage >= 1 && <line x1="8" y1="10" x2="18" y2="20" stroke="#804020" strokeWidth="1" />}
                {damage >= 2 && <line x1="4" y1="14" x2="12" y2="20" stroke="#804020" strokeWidth="0.5" />}
                {damage >= 3 && <line x1="14" y1="8" x2="20" y2="16" stroke="#804020" strokeWidth="0.5" />}
              </svg>
            }
          />
        }
      />
      <div style={{ position: 'absolute', bottom: -4, left: 2, width: 20, height: 3, background: '#333', borderRadius: 1 }}>
        <div
          style={{
            width: `${(hp / 4) * 100}%`,
            height: '100%',
            background: hp > 2 ? '#4a4' : '#e44',
            borderRadius: 1,
          }}
        />
      </div>
    </div>
  );
}
