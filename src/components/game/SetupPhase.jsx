import { React, useState } from '../../lib/react.js';
import { GRID_SIZE, MENUBAR_HEIGHT, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../game/constants.js';
import Button from '../ui/Button.jsx';
import Window from '../ui/Window.jsx';

function FolderIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <path d="M8 18h18l6 6h24v26H8z" fill="#d4a456" stroke="#6a4b00" strokeWidth="4" />
      <path d="M8 18h20l4 4H8z" fill="#e8bc6a" opacity="0.8" />
    </svg>
  );
}

function WatchdogIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="18" fill="#f2c94c" stroke="#2a2f3c" strokeWidth="4" />
      <rect x="28" y="10" width="8" height="18" rx="3" fill="#2a2f3c" />
      <circle cx="32" cy="34" r="6" fill="#2a2f3c" />
    </svg>
  );
}

function DiskIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <rect x="14" y="12" width="36" height="40" rx="6" fill="#f7f0a6" stroke="#6b5b2d" strokeWidth="4" />
      <rect x="22" y="18" width="20" height="10" rx="2" fill="#2a2f3c" opacity="0.35" />
      <rect x="22" y="34" width="20" height="12" rx="2" fill="#fff" opacity="0.55" />
    </svg>
  );
}

function TimerIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="34" r="22" fill="#f8f8f8" stroke="#a33" strokeWidth="4" />
      <rect x="26" y="6" width="12" height="10" rx="3" fill="#a33" />
      <line x1="32" y1="34" x2="32" y2="20" stroke="#a33" strokeWidth="4" strokeLinecap="round" />
      <line x1="32" y1="34" x2="44" y2="40" stroke="#a33" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

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
      icon: <FolderIcon size={iconSize} />,
	      desc: 'Blocks enemies',
	    },
    {
      type: 'watchdog',
      name: 'Watchdog',
      count: 1 - deployables.filter((d) => d.type === 'watchdog').length,
      icon: <WatchdogIcon size={iconSize} />,
	      desc: 'Auto-turret',
	    },
    {
      type: 'sticky',
      name: 'Floppy Disk',
      count: 2 - deployables.filter((d) => d.type === 'sticky').length,
      icon: <DiskIcon size={iconSize} />,
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

      <Window title="Tower Defense Setup" width={244} x={16} y={40}>
        <div style={{ fontSize: 6, marginBottom: 10, color: '#666' }}>Click item, then click on desktop to place</div>

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
	            <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
	              <TimerIcon size={16} />
	            </span>
	            <span>{setupTimer}s</span>
	          </div>
	          <Button variant="primary" onClick={onStart}>
	            Start Wave
	          </Button>
	        </div>
	      </Window>
    </>
  );
}
