import { React, useEffect, useLayoutEffect, useRef } from '../../lib/react.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../game/constants.js';
import { createDesktop3DRenderer } from '../../renderer/desktop3d.js';

export default function ThreeScreen({ state, onInitFailed }) {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const preserveDrawingBuffer = typeof navigator !== 'undefined' && !!navigator.webdriver;

    let r = null;
    try {
      r = createDesktop3DRenderer({
        canvas,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        preserveDrawingBuffer,
      });
    } catch (err) {
      // Fall back to the existing DOM rendering if WebGL is not available.
      // eslint-disable-next-line no-console
      console.error('WebGL init failed', err);
      onInitFailed?.(err);
      return;
    }

    rendererRef.current = r;
    return () => {
      if (!rendererRef.current) return;
      try {
        rendererRef.current.dispose();
      } catch {}
      rendererRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const r = rendererRef.current;
    if (!r) return;
    r.render(state);
  });

  return (
    <canvas
      ref={canvasRef}
      width={SCREEN_WIDTH}
      height={SCREEN_HEIGHT}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}
