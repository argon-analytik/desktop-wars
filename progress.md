Original prompt: Koenntest du das Game optisch aufpolieren und technisch leicht verbessern. Ich wuerde statt Sprites gerne eher dreidimensionale Elemente nehmen. Das ganze soll moderner und etwas poppiger werden. Aber vom Prinzip her und so, sollte es so bleiben wie es ist. Einfach wie ein viel verbessertes Remake und bitte keine Piktogramm-Zeichen verwenden!

2026-02-09
- Start: Plan zur Umstellung auf WebGL/Three.js (Clean Retro, echtes 3D) + technische Verbesserungen (deterministische advanceTime/render_game_to_text, Fullscreen).
- Ziel: Keine Piktogramm-Zeichen mehr im gesamten Repo (inkl. README und build/app.js).

TODO
- [x] Three.js als Dependency hinzufuegen und Build stabil halten.
- [x] WebGL Renderer (Orthographic, pooled meshes) implementieren.
- [x] DesktopWars: World-Rendering von DOM auf WebGL umstellen; UI Overlays behalten.
- [x] Game Loop refactor: stabiler tick(), kein Effect-Neustart pro Frame; webdriver advanceTime support.
- [x] Popups/Setup Timer deterministisch machen (keine setInterval Abhaengigkeit fuer Tests).
- [x] Repo-weiter Unicode-Piktogramm-Purge (README/assets/README, src, build/app.js), dann rebuild.
- [x] Playwright Actions laufen lassen und Screenshots/State/Errors checken.

Notizen
- DOM-Fallback/Debug: `?renderer=dom` erzwingt den DOM-Renderer.
- Webdriver/Tests: RAF ist deaktiviert; Fortschritt laeuft ueber `window.advanceTime(ms)` + `ReactDOM.flushSync`.
- SwiftShader/Automation: Orthographic-Kamera ist y-down im Pixelraum (0..width/0..height) und bleibt bei (0,0,1000), damit Canvas-Captures nicht nur in einem Quadranten auftauchen.
- Cleanup: Temporaere WebGL-Debug-Instrumentierung wurde entfernt; Automation-Rendering bleibt bewusst simpel fuer reproduzierbare Screenshots.

2026-02-11
- Gameplay: Regi-Mite auf 3 Treffer, Spy-Dot auf 5 Treffer (kleiner), Gremlin etwas schneller. Giant: Kontakt-Kill bleibt aktiv.
- Trash: Clutter wird per Schuss auf den Papierkorb abgebaut (1 Projektil pro Clutter-Eintrag).
- Scoring: Fehl-Schuss = -1, Treffer auf Spieler = -5, System-Folder-Schaden zieht pro 1 HP -1 ab; Bonus am Wellenende fuer wenig Deployables.
- Rendering: Enemy-HP-Segment-Bars (WebGL) hinzugefuegt; Gegner/Pickups/Deployables groesser/lesbarer skaliert.
- Deployables: "Floppy Disk" als echtes Disk-Model (statt flacher Sticky-Note) im WebGL-Renderer.
- Pickups/Powerups: Modelle detaillierter (Coolant-Canister + Snowflake, Rapid mit Fins/Stripes, Triple als 3-Barrel-Cluster, Giant mit Crown).
- UI: CPU/RAM Anzeige in der Menueleiste als Chip/Stick + segmentierte Meter; rechte Sidebar-Icons durch detaillierte SVGs ersetzt (matcht In-Game Look).
- Docs: README an neue Trash-Mechanik + Deployable-Name angepasst.
