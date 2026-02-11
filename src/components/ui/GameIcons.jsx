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
  const core = hot ? '#ff4d4d' : '#f2c94c';
  const glow = hot ? '#ff9a3c' : '#ffd35a';
  return (
    <Svg size={size} style={style}>
      {/* pins */}
      {Array.from({ length: 4 }).map((_, i) => (
        <g key={i}>
          <rect x={12 + i * 10} y={6} width={6} height={10} rx={2} fill="#aab3c5" opacity="0.9" />
          <rect x={12 + i * 10} y={48} width={6} height={10} rx={2} fill="#aab3c5" opacity="0.9" />
          <rect x={6} y={12 + i * 10} width={10} height={6} rx={2} fill="#aab3c5" opacity="0.9" />
          <rect x={48} y={12 + i * 10} width={10} height={6} rx={2} fill="#aab3c5" opacity="0.9" />
        </g>
      ))}
      <rect x="16" y="16" width="32" height="32" rx="6" fill="#2a2f3c" stroke="#0b1020" strokeWidth="4" />
      <rect x="22" y="22" width="20" height="20" rx="5" fill={core} stroke="#0b1020" strokeWidth="3" />
      <path d="M32 24 L28 32 L34 32 L30 40" fill="none" stroke={glow} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function RamIcon({ size = 16, high = false, style }) {
  const fill = high ? '#ff4d4d' : '#67d6ff';
  return (
    <Svg size={size} style={style}>
      <rect x="10" y="20" width="44" height="24" rx="5" fill="#2a2f3c" stroke="#0b1020" strokeWidth="4" />
      <rect x="16" y="26" width="10" height="12" rx="2" fill={fill} opacity="0.9" />
      <rect x="28" y="26" width="10" height="12" rx="2" fill={fill} opacity="0.75" />
      <rect x="40" y="26" width="8" height="12" rx="2" fill={fill} opacity="0.6" />
      {/* notch + contacts */}
      <rect x="28" y="42" width="8" height="3" rx="1" fill="#0b1020" opacity="0.7" />
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x={16 + i * 6} y={46} width={4} height={6} rx={1} fill="#f2c94c" opacity="0.9" />
      ))}
    </Svg>
  );
}

export function RegiMiteIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <rect x="12" y="18" width="40" height="28" rx="7" fill="#e9d9c6" stroke="#0b1020" strokeWidth="4" />
      <rect x="16" y="20" width="32" height="12" rx="6" fill="#d7c2aa" opacity="0.9" />
      <circle cx="26" cy="32" r="4" fill="#f4f4f4" stroke="#0b1020" strokeWidth="2" />
      <circle cx="38" cy="32" r="4" fill="#f4f4f4" stroke="#0b1020" strokeWidth="2" />
      <circle cx="26" cy="32" r="2" fill="#0b1020" />
      <circle cx="38" cy="32" r="2" fill="#0b1020" />
      {/* legs */}
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
      <path
        d="M32 10 L44 18 L54 32 L44 46 L32 54 L20 46 L10 32 L20 18 Z"
        fill="#ff6b7a"
        stroke="#0b1020"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="6" fill="#ff4da6" stroke="#0b1020" strokeWidth="3" />
      <path d="M18 20 L14 16 M46 20 L50 16 M18 44 L14 48 M46 44 L50 48" stroke="#2a0010" strokeWidth="4" strokeLinecap="round" />
    </Svg>
  );
}

export function SpyDotIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <circle cx="32" cy="32" r="18" fill="#ff3b3b" stroke="#0b1020" strokeWidth="4" />
      <circle cx="32" cy="32" r="12" fill="none" stroke="#ff1f1f" strokeWidth="4" opacity="0.85" />
      <circle cx="32" cy="32" r="5" fill="#2a0010" />
      <circle cx="30" cy="30" r="2" fill="#f4f4f4" opacity="0.7" />
    </Svg>
  );
}

export function AppleIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <circle cx="32" cy="36" r="18" fill="#e04444" stroke="#0b1020" strokeWidth="4" />
      <rect x="30" y="12" width="4" height="12" rx="2" fill="#6a4b00" />
      <path d="M34 18 C44 12, 48 22, 40 26 C36 28, 34 24, 34 18 Z" fill="#4bbf5a" stroke="#0b1020" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="26" cy="30" r="3" fill="#ffd6d6" opacity="0.7" />
    </Svg>
  );
}

export function CoolantIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <rect x="22" y="10" width="20" height="10" rx="3" fill="#e6e8ed" stroke="#0b1020" strokeWidth="3" />
      <rect x="18" y="18" width="28" height="34" rx="8" fill="#67d6ff" opacity="0.8" stroke="#0b1020" strokeWidth="4" />
      <path d="M32 24 V46 M22 35 H42 M26 28 L38 42 M38 28 L26 42" stroke="#c7f3ff" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
    </Svg>
  );
}

export function PowerRapidIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <rect x="18" y="22" width="28" height="20" rx="10" fill="#ff9a3c" stroke="#0b1020" strokeWidth="4" />
      <rect x="20" y="26" width="6" height="12" rx="3" fill="#2a2f3c" opacity="0.9" />
      <rect x="38" y="26" width="6" height="12" rx="3" fill="#2a2f3c" opacity="0.9" />
      <path d="M26 18 L18 22 L26 26 Z" fill="#ff9a3c" stroke="#0b1020" strokeWidth="3" strokeLinejoin="round" />
      <path d="M38 18 L46 22 L38 26 Z" fill="#ff9a3c" stroke="#0b1020" strokeWidth="3" strokeLinejoin="round" />
    </Svg>
  );
}

export function PowerTripleIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <rect x="18" y="24" width="28" height="18" rx="5" fill="#3c8bff" stroke="#0b1020" strokeWidth="4" />
      <rect x="18" y="16" width="10" height="12" rx="5" fill="#3c8bff" stroke="#0b1020" strokeWidth="3" />
      <rect x="36" y="16" width="10" height="12" rx="5" fill="#3c8bff" stroke="#0b1020" strokeWidth="3" />
      <rect x="27" y="10" width="10" height="14" rx="5" fill="#3c8bff" stroke="#0b1020" strokeWidth="3" />
    </Svg>
  );
}

export function PowerGiantIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <path d="M32 10 C44 16, 52 20, 52 30 C52 46, 40 54, 32 58 C24 54, 12 46, 12 30 C12 20, 20 16, 32 10 Z" fill="#f2c94c" stroke="#0b1020" strokeWidth="4" />
      <path d="M22 18 L26 12 L32 18 L38 12 L42 18" fill="none" stroke="#6a4b00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function FolderWallIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <path d="M12 22h16l6 6h18v22H12z" fill="#d4a456" stroke="#0b1020" strokeWidth="4" strokeLinejoin="round" />
      <path d="M12 22h18l4 4H12z" fill="#e8bc6a" opacity="0.9" />
      <path d="M18 44 L26 36 L32 42 L40 34" stroke="#6a4b00" strokeWidth="3" opacity="0.65" strokeLinecap="round" />
    </Svg>
  );
}

export function WatchdogIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <circle cx="32" cy="38" r="16" fill="#e6e8ed" stroke="#0b1020" strokeWidth="4" />
      <rect x="20" y="20" width="24" height="14" rx="5" fill="#f2c94c" stroke="#0b1020" strokeWidth="4" />
      <rect x="38" y="26" width="16" height="6" rx="3" fill="#2a2f3c" stroke="#0b1020" strokeWidth="3" />
      <circle cx="28" cy="27" r="3" fill="#2a2f3c" />
    </Svg>
  );
}

export function FloppyDiskIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <rect x="14" y="12" width="36" height="40" rx="6" fill="#2a2f3c" stroke="#0b1020" strokeWidth="4" />
      <rect x="18" y="16" width="28" height="16" rx="4" fill="#e6e8ed" stroke="#0b1020" strokeWidth="3" />
      <rect x="18" y="36" width="28" height="10" rx="3" fill="#aab3c5" stroke="#0b1020" strokeWidth="3" />
      <rect x="26" y="40" width="12" height="6" rx="2" fill="#0b1020" opacity="0.85" />
      <rect x="42" y="40" width="5" height="5" rx="1" fill="#f2c94c" />
    </Svg>
  );
}

export function TimerIcon({ size = 16, style }) {
  return (
    <Svg size={size} style={style}>
      <circle cx="32" cy="34" r="22" fill="#f8f8f8" stroke="#0b1020" strokeWidth="4" />
      <rect x="26" y="6" width="12" height="10" rx="3" fill="#ff4d4d" stroke="#0b1020" strokeWidth="3" />
      <line x1="32" y1="34" x2="32" y2="20" stroke="#ff4d4d" strokeWidth="4" strokeLinecap="round" />
      <line x1="32" y1="34" x2="44" y2="40" stroke="#ff4d4d" strokeWidth="4" strokeLinecap="round" />
    </Svg>
  );
}
