import { React } from '../../lib/react.js';

function Svg({ size = 16, viewBox = '0 0 64 64', children, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      style={{ display: 'block', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function CpuIcon({ size = 16, hot = false, style }) {
  const core0 = hot ? '#ffb45a' : '#ffe27a';
  const core1 = hot ? '#ff4d4d' : '#f2c94c';
  const glow = hot ? '#ff9a3c' : '#ffd35a';
  const bodyGradId = hot ? 'cpuBodyHot' : 'cpuBodyCool';
  const coreGradId = hot ? 'cpuCoreHot' : 'cpuCoreCool';
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="cpuPinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f5f7fb" />
          <stop offset="1" stopColor="#aab3c5" />
        </linearGradient>
        <linearGradient id={bodyGradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b4256" />
          <stop offset="1" stopColor="#1a2133" />
        </linearGradient>
        <linearGradient id={coreGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={core0} />
          <stop offset="1" stopColor={core1} />
        </linearGradient>
        <filter id="cpuGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Pins */}
      {Array.from({ length: 5 }).map((_, i) => (
        <g key={i}>
          <rect x={11 + i * 9} y={6} width={6} height={10} rx={2} fill="url(#cpuPinGrad)" stroke="#0b1020" strokeWidth="1.5" opacity="0.95" />
          <rect x={11 + i * 9} y={48} width={6} height={10} rx={2} fill="url(#cpuPinGrad)" stroke="#0b1020" strokeWidth="1.5" opacity="0.95" />
          <rect x={6} y={11 + i * 9} width={10} height={6} rx={2} fill="url(#cpuPinGrad)" stroke="#0b1020" strokeWidth="1.5" opacity="0.95" />
          <rect x={48} y={11 + i * 9} width={10} height={6} rx={2} fill="url(#cpuPinGrad)" stroke="#0b1020" strokeWidth="1.5" opacity="0.95" />
        </g>
      ))}

      {/* Body */}
      <rect x="16" y="16" width="32" height="32" rx="7" fill={`url(#${bodyGradId})`} stroke="#0b1020" strokeWidth="4" />

      {/* Die */}
      <rect
        x="22"
        y="22"
        width="20"
        height="20"
        rx="5"
        fill={`url(#${coreGradId})`}
        stroke="#0b1020"
        strokeWidth="3"
        filter={hot ? 'url(#cpuGlow)' : undefined}
      />
      <path d="M26 28 H38 M26 32 H38 M26 36 H38" stroke="rgba(11,16,32,0.35)" strokeWidth="2" strokeLinecap="round" />

      {/* Bolt */}
      <path
        d="M32 24 L28 32 L34 32 L30 40"
        fill="none"
        stroke={glow}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {hot && (
        <>
          <path d="M20 18 C22 14, 26 14, 28 18" fill="none" stroke={glow} strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <path d="M36 18 C38 14, 42 14, 44 18" fill="none" stroke={glow} strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        </>
      )}
    </Svg>
  );
}

export function RamIcon({ size = 16, high = false, style }) {
  const chip = high ? '#ff4d4d' : '#67d6ff';
  const boardGradId = high ? 'ramBoardHot' : 'ramBoardCool';
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id={boardGradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b4256" />
          <stop offset="1" stopColor="#1a2133" />
        </linearGradient>
        <linearGradient id="ramChipGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={chip} stopOpacity="0.95" />
          <stop offset="1" stopColor="#0b1020" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      <rect x="10" y="20" width="44" height="24" rx="5" fill={`url(#${boardGradId})`} stroke="#0b1020" strokeWidth="4" />

      {/* Chips */}
      <rect x="15" y="26" width="10" height="12" rx="2" fill="url(#ramChipGrad)" stroke="#0b1020" strokeWidth="2" />
      <rect x="27" y="26" width="10" height="12" rx="2" fill="url(#ramChipGrad)" stroke="#0b1020" strokeWidth="2" opacity="0.9" />
      <rect x="39" y="26" width="10" height="12" rx="2" fill="url(#ramChipGrad)" stroke="#0b1020" strokeWidth="2" opacity="0.8" />

      {/* Notch + label */}
      <rect x="28" y="41.5" width="8" height="3.5" rx="1.2" fill="#0b1020" opacity="0.65" />
      <rect x="15" y="22.8" width="34" height="2.2" rx="1.1" fill="rgba(255,255,255,0.14)" />

      {/* Contacts */}
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x={15 + i * 5.2} y={46} width={3.8} height={6} rx={1} fill="#f2c94c" opacity="0.95" />
      ))}
    </Svg>
  );
}

export function RegiMiteIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="regiBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2e5d6" />
          <stop offset="1" stopColor="#d9c7b2" />
        </linearGradient>
        <linearGradient id="regiShell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cdb89f" />
          <stop offset="1" stopColor="#a98f72" />
        </linearGradient>
      </defs>

      <rect x="12" y="18" width="40" height="28" rx="8" fill="url(#regiBody)" stroke="#0b1020" strokeWidth="4" />
      <rect x="16" y="20" width="32" height="12" rx="6" fill="url(#regiShell)" stroke="rgba(11,16,32,0.35)" strokeWidth="2" opacity="0.95" />

      {/* Eyes */}
      <circle cx="26" cy="33" r="4.2" fill="#f4f4f4" stroke="#0b1020" strokeWidth="2" />
      <circle cx="38" cy="33" r="4.2" fill="#f4f4f4" stroke="#0b1020" strokeWidth="2" />
      <circle cx="26.5" cy="33.2" r="1.9" fill="#0b1020" />
      <circle cx="38.5" cy="33.2" r="1.9" fill="#0b1020" />
      <circle cx="25.2" cy="31.8" r="1" fill="rgba(255,255,255,0.7)" />
      <circle cx="37.2" cy="31.8" r="1" fill="rgba(255,255,255,0.7)" />

      {/* Mouth */}
      <path d="M28 40 Q32 43 36 40" fill="none" stroke="rgba(11,16,32,0.55)" strokeWidth="2.4" strokeLinecap="round" />

      {/* Legs */}
      <rect x="18" y="44" width="4" height="10" rx="2" fill="#6a4b00" />
      <rect x="28" y="46" width="4" height="8" rx="2" fill="#6a4b00" />
      <rect x="36" y="46" width="4" height="8" rx="2" fill="#6a4b00" />
      <rect x="46" y="44" width="4" height="10" rx="2" fill="#6a4b00" />
    </Svg>
  );
}

export function GremlinIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="gremlinBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff94a0" />
          <stop offset="1" stopColor="#ff3b5f" />
        </linearGradient>
        <radialGradient id="gremlinCore" cx="50%" cy="40%" r="60%">
          <stop offset="0" stopColor="#ffd1f0" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ff1f8b" stopOpacity="0.95" />
        </radialGradient>
      </defs>

      {/* Spiky poly */}
      <path
        d="M32 10 L44 18 L54 32 L44 46 L32 54 L20 46 L10 32 L20 18 Z"
        fill="url(#gremlinBody)"
        stroke="#0b1020"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="6.5" fill="url(#gremlinCore)" stroke="#0b1020" strokeWidth="3" />

      {/* "Popup" window overlay to make the type readable */}
      <rect x="20" y="26" width="24" height="16" rx="3" fill="rgba(255,255,255,0.85)" stroke="#0b1020" strokeWidth="2.5" />
      <rect x="20" y="26" width="24" height="4.5" rx="2.2" fill="rgba(11,16,32,0.18)" />
      <circle cx="23" cy="28.3" r="1.3" fill="#ff4d4d" stroke="#0b1020" strokeWidth="1" />
      <path d="M24.5 34 H39.5 M24.5 38 H35.5" stroke="rgba(11,16,32,0.5)" strokeWidth="2" strokeLinecap="round" />

      {/* Corner spikes */}
      <path
        d="M18 20 L14 16 M46 20 L50 16 M18 44 L14 48 M46 44 L50 48"
        stroke="#2a0010"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function SpyDotIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <radialGradient id="spyBody" cx="45%" cy="35%" r="70%">
          <stop offset="0" stopColor="#ff9a9a" />
          <stop offset="0.5" stopColor="#ff3b3b" />
          <stop offset="1" stopColor="#b30000" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="18" fill="url(#spyBody)" stroke="#0b1020" strokeWidth="4" />
      <circle cx="32" cy="32" r="12" fill="none" stroke="#ff1f1f" strokeWidth="4" opacity="0.85" />
      <circle cx="32" cy="32" r="5.5" fill="#2a0010" />
      <circle cx="30" cy="30" r="2" fill="#f4f4f4" opacity="0.75" />
      <path d="M20 22 C24 18, 40 18, 44 22" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}

export function AppleIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <radialGradient id="appleBody" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#ffb3b3" />
          <stop offset="0.5" stopColor="#e04444" />
          <stop offset="1" stopColor="#8a0f0f" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="36" r="18" fill="url(#appleBody)" stroke="#0b1020" strokeWidth="4" />
      <rect x="30" y="12" width="4" height="12" rx="2" fill="#6a4b00" />
      <path d="M34 18 C44 12, 48 22, 40 26 C36 28, 34 24, 34 18 Z" fill="#4bbf5a" stroke="#0b1020" strokeWidth="2" strokeLinejoin="round" />

      {/* Heal plus badge */}
      <rect x="29" y="32" width="6" height="16" rx="2" fill="#f4f4f4" stroke="#0b1020" strokeWidth="2" />
      <rect x="24" y="37" width="16" height="6" rx="2" fill="#f4f4f4" stroke="#0b1020" strokeWidth="2" />
      <circle cx="26" cy="30" r="3" fill="#ffd6d6" opacity="0.65" />
    </Svg>
  );
}

export function CoolantIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="coolantBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bff0ff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#2aa7ff" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <rect x="22" y="10" width="20" height="10" rx="3" fill="#e6e8ed" stroke="#0b1020" strokeWidth="3" />
      <rect x="18" y="18" width="28" height="34" rx="8" fill="url(#coolantBody)" stroke="#0b1020" strokeWidth="4" />
      <path d="M32 24 V46 M22 35 H42 M26 28 L38 42 M38 28 L26 42" stroke="#c7f3ff" strokeWidth="3.5" strokeLinecap="round" opacity="0.95" />
      <rect x="20" y="22" width="24" height="2.4" rx="1.2" fill="rgba(255,255,255,0.22)" />
    </Svg>
  );
}

export function PowerRapidIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="rapidBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd35a" />
          <stop offset="1" stopColor="#ff6b00" />
        </linearGradient>
      </defs>
      <rect x="18" y="22" width="28" height="20" rx="10" fill="url(#rapidBody)" stroke="#0b1020" strokeWidth="4" />
      <rect x="20" y="26" width="6" height="12" rx="3" fill="#2a2f3c" opacity="0.9" />
      <rect x="38" y="26" width="6" height="12" rx="3" fill="#2a2f3c" opacity="0.9" />
      <path d="M26 18 L18 22 L26 26 Z" fill="#ff9a3c" stroke="#0b1020" strokeWidth="3" strokeLinejoin="round" />
      <path d="M38 18 L46 22 L38 26 Z" fill="#ff9a3c" stroke="#0b1020" strokeWidth="3" strokeLinejoin="round" />
      {/* Speed lines */}
      <path d="M14 30 H18 M12 36 H18" stroke="rgba(255,255,255,0.65)" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}

export function PowerTripleIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="tripleBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9cc8ff" />
          <stop offset="1" stopColor="#1a62ff" />
        </linearGradient>
      </defs>
      <rect x="18" y="24" width="28" height="18" rx="5" fill="url(#tripleBody)" stroke="#0b1020" strokeWidth="4" />
      <rect x="18" y="16" width="10" height="12" rx="5" fill="url(#tripleBody)" stroke="#0b1020" strokeWidth="3" />
      <rect x="36" y="16" width="10" height="12" rx="5" fill="url(#tripleBody)" stroke="#0b1020" strokeWidth="3" />
      <rect x="27" y="10" width="10" height="14" rx="5" fill="url(#tripleBody)" stroke="#0b1020" strokeWidth="3" />
      {/* Barrel holes */}
      <circle cx="23" cy="20" r="1.6" fill="#0b1020" opacity="0.8" />
      <circle cx="32" cy="16" r="1.6" fill="#0b1020" opacity="0.8" />
      <circle cx="41" cy="20" r="1.6" fill="#0b1020" opacity="0.8" />
    </Svg>
  );
}

export function PowerGiantIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="giantShield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff0a8" />
          <stop offset="1" stopColor="#f2c94c" />
        </linearGradient>
      </defs>
      <path d="M32 10 C44 16, 52 20, 52 30 C52 46, 40 54, 32 58 C24 54, 12 46, 12 30 C12 20, 20 16, 32 10 Z" fill="url(#giantShield)" stroke="#0b1020" strokeWidth="4" />
      <path d="M22 18 L26 12 L32 18 L38 12 L42 18" fill="none" stroke="#6a4b00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 22 L34 28 L40 28 L35 32 L37 38 L32 34 L27 38 L29 32 L24 28 L30 28 Z" fill="rgba(255,255,255,0.25)" />
    </Svg>
  );
}

export function FolderWallIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="wallBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0c67a" />
          <stop offset="1" stopColor="#c48a2a" />
        </linearGradient>
      </defs>
      {/* Wall block */}
      <rect x="12" y="22" width="40" height="28" rx="6" fill="url(#wallBody)" stroke="#0b1020" strokeWidth="4" />
      {/* Folder tab */}
      <rect x="16" y="18" width="22" height="10" rx="5" fill="#e8bc6a" stroke="#0b1020" strokeWidth="3" />
      {/* Lock */}
      <rect x="38" y="34" width="10" height="10" rx="2.5" fill="#f2c94c" stroke="#0b1020" strokeWidth="3" />
      <rect x="41" y="30" width="4" height="6" rx="2" fill="#6a4b00" opacity="0.9" />
      {/* Scuffs */}
      <path d="M18 44 L26 36 L32 42 L40 34" stroke="rgba(11,16,32,0.45)" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}

export function WatchdogIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="dogBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6f7fb" />
          <stop offset="1" stopColor="#aab3c5" />
        </linearGradient>
      </defs>
      {/* Base */}
      <ellipse cx="30" cy="40" rx="16" ry="12" fill="url(#dogBase)" stroke="#0b1020" strokeWidth="4" />
      {/* Legs */}
      <path d="M18 44 L14 52 M28 46 L24 54 M36 46 L40 54 M46 44 L50 52" stroke="#0b1020" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
      {/* Head */}
      <rect x="18" y="22" width="24" height="14" rx="6" fill="#f2c94c" stroke="#0b1020" strokeWidth="4" />
      {/* Barrel */}
      <rect x="38" y="26" width="16" height="6" rx="3" fill="#2a2f3c" stroke="#0b1020" strokeWidth="3" />
      {/* Eye lens */}
      <circle cx="28" cy="29" r="3.2" fill="#c7f3ff" stroke="#0b1020" strokeWidth="2" />
      <circle cx="27.2" cy="28.2" r="1.1" fill="#ffffff" opacity="0.7" />
    </Svg>
  );
}

export function FloppyDiskIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="floppyBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#525b73" />
          <stop offset="1" stopColor="#2a2f3c" />
        </linearGradient>
        <linearGradient id="floppyLabel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#d3d7e1" />
        </linearGradient>
      </defs>
      <path
        d="M20 12 H46 L50 16 V52 H14 V16 Z"
        fill="url(#floppyBody)"
        stroke="#0b1020"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <rect x="18" y="16" width="28" height="16" rx="4" fill="url(#floppyLabel)" stroke="#0b1020" strokeWidth="3" />
      {/* Label lines */}
      <path d="M22 22 H40 M22 26 H34" stroke="rgba(11,16,32,0.45)" strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="36" width="28" height="10" rx="3" fill="#aab3c5" stroke="#0b1020" strokeWidth="3" />
      <rect x="26" y="39.5" width="12" height="6.5" rx="2" fill="#0b1020" opacity="0.85" />
      <rect x="42" y="40" width="5" height="5" rx="1" fill="#f2c94c" stroke="#0b1020" strokeWidth="1.5" />
      <rect x="44" y="12" width="6" height="6" fill="rgba(255,255,255,0.14)" />
    </Svg>
  );
}

export function TimerIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <defs>
        <linearGradient id="timerFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#d9dee8" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="34" r="22" fill="url(#timerFace)" stroke="#0b1020" strokeWidth="4" />
      <rect x="26" y="6" width="12" height="10" rx="3" fill="#ff4d4d" stroke="#0b1020" strokeWidth="3" />
      <line x1="32" y1="34" x2="32" y2="20" stroke="#ff4d4d" strokeWidth="4" strokeLinecap="round" />
      <line x1="32" y1="34" x2="44" y2="40" stroke="#ff4d4d" strokeWidth="4" strokeLinecap="round" />
      <circle cx="32" cy="34" r="2.5" fill="#0b1020" opacity="0.65" />
    </Svg>
  );
}

