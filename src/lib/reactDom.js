export const ReactDOM = globalThis.ReactDOM;

if (!ReactDOM) {
  throw new Error(
    'ReactDOM wurde nicht gefunden. Stelle sicher, dass `react-dom.production.min.js` vor `build/app.js` geladen wird.'
  );
}

