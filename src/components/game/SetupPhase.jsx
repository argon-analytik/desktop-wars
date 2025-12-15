import { React, useState } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import { GRID_SIZE, MENUBAR_HEIGHT, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../game/constants.js';
import Button from '../ui/Button.jsx';
import Window from '../ui/Window.jsx';
import Sprite from '../shared/Sprite.jsx';
import SpriteSheet from '../shared/SpriteSheet.jsx';
import Deployable from './Deployable.jsx';
import FolderWall from './FolderWall.jsx';
import SystemFolder from './SystemFolder.jsx';

export default function SetupPhase({
  setupTimer,
  folderWalls,
  setFolderWalls,
  deployables,
  setDeployables,
  onStart,
  mousePos,
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const iconSize = 18;

  const items = [
    {
      type: 'folder',
      name: 'Folder Wall',
      count: 8 - folderWalls.length,
      icon: (
        <SpriteSheet
          src={SPRITES.folderWall}
          width={iconSize}
          height={iconSize}
          frameWidth={32}
          frameHeight={32}
          columns={4}
          rows={1}
          marginX={16}
          marginY={16}
          spacingX={32}
          frameIndex={0}
          fallback={<span style={{ fontSize: 18 }}>📁</span>}
        />
      ),
      desc: 'Blocks enemies',
    },
    {
      type: 'watchdog',
      name: 'Watchdog',
      count: 1 - deployables.filter((d) => d.type === 'watchdog').length,
      icon: (
        <SpriteSheet
          src={SPRITES.deployableWatchdog}
          width={iconSize}
          height={iconSize}
          frameWidth={44}
          frameHeight={44}
          columns={4}
          rows={2}
          marginX={10}
          marginY={10}
          spacingX={20}
          spacingY={20}
          frameIndex={7}
          fallback={<span style={{ fontSize: 18 }}>🐕</span>}
        />
      ),
      desc: 'Auto-turret',
    },
    {
      type: 'sticky',
      name: 'Floppy Disk',
      count: 2 - deployables.filter((d) => d.type === 'sticky').length,
      icon: (
        <Sprite
          src={SPRITES.deployableSticky}
          width={iconSize}
          height={iconSize}
          style={{ width: iconSize, height: iconSize }}
          fallback={<span style={{ fontSize: 18 }}>📝</span>}
        />
      ),
      desc: 'Decoy target',
    },
  ];

  const handlePlace = (x, y) => {
    if (!selectedItem) return;
    if (y < MENUBAR_HEIGHT + 30) return;

    const gridX = Math.round(x / GRID_SIZE) * GRID_SIZE - 12;
    const gridY = Math.round(y / GRID_SIZE) * GRID_SIZE - 12;

    if (Math.abs(gridX + 12 - 320) < 50 && Math.abs(gridY + 12 - 280) < 50) return;

    const spotTaken = [...folderWalls, ...deployables].some(
      (item) => Math.abs(item.x - gridX) < 24 && Math.abs(item.y - gridY) < 24
    );
    if (spotTaken) return;

    if (selectedItem === 'folder' && folderWalls.length < 8) {
      setFolderWalls((prev) => [...prev, { id: Math.random(), x: gridX, y: gridY, hp: 4 }]);
      return;
    }
    if (selectedItem === 'watchdog' && deployables.filter((d) => d.type === 'watchdog').length < 1) {
      setDeployables((prev) => [
        ...prev,
        { id: Math.random(), type: 'watchdog', x: gridX, y: gridY, aimDir: 7 },
      ]);
      return;
    }
    if (selectedItem === 'sticky' && deployables.filter((d) => d.type === 'sticky').length < 2) {
      setDeployables((prev) => [...prev, { id: Math.random(), type: 'sticky', x: gridX, y: gridY }]);
    }
  };

  const previewX = Math.round(mousePos.x / GRID_SIZE) * GRID_SIZE - 12;
  const previewY = Math.round(mousePos.y / GRID_SIZE) * GRID_SIZE - 12;

  return (
    <>
      <div
        onClick={(e) => {
          if (!selectedItem) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const scaleX = SCREEN_WIDTH / rect.width;
          const scaleY = SCREEN_HEIGHT / rect.height;
          handlePlace((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
        }}
        style={{
          position: 'absolute',
          inset: 0,
          top: MENUBAR_HEIGHT,
          cursor: selectedItem ? 'crosshair' : 'default',
        }}
      >
        {selectedItem && mousePos.y > MENUBAR_HEIGHT + 30 && (
          <div
            style={{
              position: 'absolute',
              left: previewX,
              top: previewY,
              width: 24,
              height: 24,
              border: '2px dashed #4a4',
              background: 'rgba(74, 164, 74, 0.3)',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>

      <SystemFolder x={320} y={280} hp={100} />

      {folderWalls.map((wall) => (
        <FolderWall key={wall.id} {...wall} />
      ))}
        {deployables.map((d) => (
          <Deployable key={d.id} {...d} />
        ))}

      <Window title="Tower Defense Setup" width={244} x={16} y={40}>
        <div style={{ fontSize: 6, marginBottom: 10, color: '#666' }}>Click item → Click on desktop to place</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {items.map((item) => (
            <div
              key={item.type}
              onClick={() => item.count > 0 && setSelectedItem(item.type)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: 6,
                background: selectedItem === item.type ? '#bef' : item.count > 0 ? '#fff' : '#eee',
                border: `2px solid ${selectedItem === item.type ? '#48a' : '#aaa'}`,
                borderRadius: 4,
                cursor: item.count > 0 ? 'pointer' : 'not-allowed',
                opacity: item.count > 0 ? 1 : 0.5,
              }}
            >
              <span style={{ width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 7, fontWeight: 'bold' }}>{item.name}</div>
                <div style={{ fontSize: 5, color: '#888' }}>
                  {item.desc} (×{item.count})
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, textAlign: 'center' }}>
          <div
            style={{
              fontSize: 12,
              marginBottom: 10,
              color: '#e55',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>⏱</span>
            <span>{setupTimer}s</span>
          </div>
          <Button variant="primary" onClick={onStart}>
            Start Wave ▶
          </Button>
        </div>
      </Window>
    </>
  );
}
