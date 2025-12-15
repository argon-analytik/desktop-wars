import { React, useEffect, useMemo, useState } from '../../lib/react.js';

const spriteSheetAvailabilityCache = new Map();

function inferAxis({ extra, gaps }) {
  if (!Number.isFinite(extra) || extra <= 0 || gaps <= 0) return { margin: 0, spacing: 0 };
  const maxSpacing = Math.min(32, Math.floor(extra / gaps));
  for (let spacing = 0; spacing <= maxSpacing; spacing += 1) {
    const remaining = extra - gaps * spacing;
    if (remaining < 0) break;
    if (remaining % 2 === 0) return { margin: remaining / 2, spacing };
  }
  return { margin: 0, spacing: 0 };
}

export default function SpriteSheet({
  src,
  width,
  height = width,
  frameWidth,
  frameHeight = frameWidth,
  columns,
  rows,
  frameIndex = 0,
  marginX = 0,
  marginY = 0,
  spacingX = 0,
  spacingY = 0,
  pixelated = true,
  style,
  fallback = null,
  alt = '',
}) {
  const [canRender, setCanRender] = useState(() => {
    if (!src) return false;
    return spriteSheetAvailabilityCache.get(src) !== false;
  });
  const [naturalSize, setNaturalSize] = useState(null);

  useEffect(() => {
    if (!src) return;
    if (spriteSheetAvailabilityCache.get(src) === false) {
      setCanRender(false);
      return;
    }

    let canceled = false;
    const img = new Image();
    img.onload = () => {
      if (canceled) return;
      spriteSheetAvailabilityCache.set(src, true);
      setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
      setCanRender(true);
    };
    img.onerror = () => {
      if (canceled) return;
      spriteSheetAvailabilityCache.set(src, false);
      setCanRender(false);
    };
    img.src = src;

    return () => {
      canceled = true;
    };
  }, [src]);

  const safeColumns = Math.max(1, columns ?? 1);
  const safeRows = Math.max(1, rows ?? 1);
  const safeFrameWidth = Math.max(1, frameWidth ?? 1);
  const safeFrameHeight = Math.max(1, frameHeight ?? 1);

  const baseSheetWidth = safeColumns * safeFrameWidth;
  const baseSheetHeight = safeRows * safeFrameHeight;

  const inferredX = useMemo(() => {
    if (marginX !== 0 || spacingX !== 0) return null;
    if (!naturalSize) return null;
    const gaps = safeColumns - 1;
    const extra = naturalSize.width - baseSheetWidth;
    const inferred = inferAxis({ extra, gaps });
    const derived = baseSheetWidth + gaps * inferred.spacing + inferred.margin * 2;
    if (derived !== naturalSize.width) return null;
    return inferred;
  }, [naturalSize, safeColumns, baseSheetWidth, marginX, spacingX]);

  const inferredY = useMemo(() => {
    if (marginY !== 0 || spacingY !== 0) return null;
    if (!naturalSize) return null;
    const gaps = safeRows - 1;
    const extra = naturalSize.height - baseSheetHeight;
    const inferred = inferAxis({ extra, gaps });
    const derived = baseSheetHeight + gaps * inferred.spacing + inferred.margin * 2;
    if (derived !== naturalSize.height) return null;
    return inferred;
  }, [naturalSize, safeRows, baseSheetHeight, marginY, spacingY]);

  const effectiveMarginX = inferredX ? inferredX.margin : marginX;
  const effectiveSpacingX = inferredX ? inferredX.spacing : spacingX;
  const effectiveMarginY = inferredY ? inferredY.margin : marginY;
  const effectiveSpacingY = inferredY ? inferredY.spacing : spacingY;

  const resolvedSheetSize = useMemo(() => {
    if (naturalSize) return naturalSize;
    return {
      width: baseSheetWidth + (safeColumns - 1) * effectiveSpacingX + effectiveMarginX * 2,
      height: baseSheetHeight + (safeRows - 1) * effectiveSpacingY + effectiveMarginY * 2,
    };
  }, [
    naturalSize,
    safeColumns,
    safeRows,
    baseSheetWidth,
    baseSheetHeight,
    effectiveSpacingX,
    effectiveSpacingY,
    effectiveMarginX,
    effectiveMarginY,
  ]);

  const clampedFrameIndex = Math.max(0, Math.floor(frameIndex));
  const col = clampedFrameIndex % safeColumns;
  const row = Math.floor(clampedFrameIndex / safeColumns) % safeRows;

  const scaleX = width / safeFrameWidth;
  const scaleY = height / safeFrameHeight;
  const offsetX = effectiveMarginX + col * (safeFrameWidth + effectiveSpacingX);
  const offsetY = effectiveMarginY + row * (safeFrameHeight + effectiveSpacingY);

  if (!src || !canRender) return fallback;

  return (
    <div
      aria-label={alt}
      style={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        ...style,
      }}
    >
      <img
        src={src}
        alt=""
        draggable={false}
        style={{
          position: 'absolute',
          left: -offsetX * scaleX,
          top: -offsetY * scaleY,
          width: resolvedSheetSize.width * scaleX,
          height: resolvedSheetSize.height * scaleY,
          imageRendering: pixelated ? 'pixelated' : undefined,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
