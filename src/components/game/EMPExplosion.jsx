import { React, useEffect, useState } from '../../lib/react.js';

export default function EMPExplosion({ x, y }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setFrame((f) => f + 1), 30);
    return () => clearInterval(interval);
  }, []);

  const progress = Math.min(1, frame / 15);
  const radius = progress * 200;
  const opacity = 1 - progress;

  if (progress >= 1) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: x - radius,
        top: y - radius,
        width: radius * 2,
        height: radius * 2,
        pointerEvents: 'none',
        zIndex: 200,
      }}
    >
      <svg width={radius * 2} height={radius * 2}>
        <circle
          cx={radius}
          cy={radius}
          r={radius * 0.9}
          fill="none"
          stroke={`rgba(74, 144, 255, ${opacity})`}
          strokeWidth={6}
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius * 0.5}
          fill="none"
          stroke={`rgba(100, 200, 255, ${opacity * 0.7})`}
          strokeWidth={3}
        />
        <circle cx={radius} cy={radius} r={20 * (1 - progress)} fill={`rgba(255, 255, 255, ${opacity})`} />
      </svg>
    </div>
  );
}

