export const React = globalThis.React;

if (!React) {
  throw new Error(
    'React wurde nicht gefunden. Stelle sicher, dass `react.production.min.js` vor `build/app.js` geladen wird.'
  );
}

export const { useCallback, useEffect, useMemo, useRef, useState } = React;
