# Assets

Lege deine eigenen Sprites unter `assets/sprites/` ab und passe bei Bedarf die Pfade in `src/assets/manifest.js` an.

- Empfohlen: Pixel-Art in PNG (mit Transparenz)
- Rendering ist standardmäßig `image-rendering: pixelated`
- Fehlende Sprites fallen automatisch auf die eingebauten Vektor-Defaults (SVG) zurück
- Standard-Rendering: WebGL/3D (Three.js); Welt-Sprites sind optional
- Sprites werden vor allem für UI-Icons und den DOM-Fallback-Renderer genutzt

Spezial:

- `assets/svg/crt-monitor.svg` wird als Overlay benutzt (transparentes “Loch” = Spielfläche); Position/Größe in `src/assets/layout.js`.
- `assets/sprites/fighter-a.png` wird im DOM-Fallback als Cursor/Spieler-Sprite benutzt (siehe `src/assets/manifest.js`).

## Dateinamen (müssen exakt so heißen)

- `crt-monitor.svg` (im Ordner `assets/svg/`; Loch/Screen wird via `src/assets/layout.js` positioniert)
- `wallpaper.png` (empfohlen 640×480)
- `fighter-a.png` (64×64)
- `system-folder.png`
- `folder-wall.png` (Spritesheet 4×1; 256×64; Content ist zentriert im 64×64-Zellenraster und wird ingame auf „64px look“ hochskaliert)
- `trash.png`
- `clutter.png`
- `enemy-regi-mite.png` (kann Spritesheet sein; aktuell 4×4)
- `enemy-popup-gremlin.png`
- `enemy-spy-dot.png`
- `pickup-apple.png`
- `pickup-coolant.png`
- `powerup-rapid.png`
- `powerup-triple.png`
- `powerup-giant.png`
- `deployable-watchdog.png` (Spritesheet 4×1; 256×64; wird beim Schießen animiert und je nach Schussrichtung gespiegelt)
- `deployable-sticky.png`
