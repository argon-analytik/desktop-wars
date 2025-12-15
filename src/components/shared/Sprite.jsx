import { React, useState } from '../../lib/react.js';

const spriteAvailabilityCache = new Map();

export default function Sprite({
  src,
  alt = '',
  width,
  height = width,
  style,
  pixelated = true,
  fallback = null,
  ...imgProps
}) {
  const [canRender, setCanRender] = useState(() => {
    if (!src) return false;
    return spriteAvailabilityCache.get(src) !== false;
  });

  if (!src || !canRender) return fallback;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      draggable={false}
      onError={() => {
        spriteAvailabilityCache.set(src, false);
        setCanRender(false);
      }}
      style={{
        imageRendering: pixelated ? 'pixelated' : undefined,
        ...style,
      }}
      {...imgProps}
    />
  );
}

