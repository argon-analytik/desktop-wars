# Desktop Wars: System Integrity

A retro-styled **twin-stick shooter with tower defense elements**, built in **pure React**.  
Defend your desktop against waves of malware while managing **CPU heat** and **RAM pressure**.

![Genre](https://img.shields.io/badge/Genre-Twin--Stick%20Shooter-blue)
![Framework](https://img.shields.io/badge/Framework-React-61dafb)
![Style](https://img.shields.io/badge/Style-Clean%20Retro-green)

---

## Gameplay

Protect the **System Folder** in the center of your desktop from relentless malware attacks.  
The game is presented inside a **CRT monitor frame** with a clean retro UI and a WebGL-rendered 3D desktop.

### Features

- **Twin-stick shooter mechanics** with mouse aiming
- **Tower defense setup phase** before each wave
- **Resource management** via CPU heat and RAM pressure
- **Dark-pattern popups** that deliberately try to trick you
- **Permanent hardware upgrades** between waves
- **3 enemy types** with distinct behaviors
- **5 collectible power-ups**
- **CRT monitor aesthetic**

---

## Controls

| Key | Action |
|---|---|
| `WASD` / Arrow Keys | Move |
| `Mouse` | Aim |
| `Left Click` | Shoot |
| `Right Click` | EMP blast (when charged) |
| `Shift` | Dash |
| `Q / E` | Answer popup dialogs |
| `Space` | Pause / Resume |
| `Enter` | Start game (MENU), start wave (SETUP), restart (WIN/GAMEOVER) |
| `F` | Toggle fullscreen |

---

## Enemies

| Enemy | Behavior |
|---|---|
| **Regi-Mite** | Standard enemy (3 hits), targets the System Folder |
| **Popup-Gremlin** | Fast and erratic (2 hits), bounces randomly |
| **Spy-Dot** | Small tracker (5 hits), relentlessly chases the player |

---

## Power-Ups

| Item | Effect |
|---|---|
| Apple | Heals 1 HP |
| Coolant | Instantly cools CPU by 60% |
| Rapid Fire | Temporarily increases fire rate |
| Triple Shot | Temporarily fires three projectiles per shot |
| Giant Mode | Temporary invincibility, destroys enemies on contact. You cannot shoot during this mode. |

---

## Resource Management

### CPU Heat

- Shooting increases CPU heat
- At **90%+ heat**, you **cannot shoot** due to overheating
- Heat dissipates slowly over time
- Collect **Coolant** for instant relief

### RAM Pressure

- Enemy drops and clutter increase RAM usage
- High RAM causes **movement slowdown** of up to 80%
- Shoot the **Trash** to clear clutter (1 shot per clutter)

---

## Setup Phase

Before Wave 1, you have **25 seconds** to prepare your defenses:

| Item | Count | Effect |
|---|---:|---|
| Folder Wall | 8 | Blocks enemy movement |
| Watchdog | 1 | Automated turret |
| Floppy Disk | 2 | Decoy that attracts enemies |

---

## Dark Pattern Popups

Respond using `Q` (left) or `E` (right):

| Popup Type | Correct Answer |
|---|---|
| Firewall Request | Deny |
| Fake Update | Later |
| Security Patch | Install |

**Warning:** Button positions are swapped more frequently in later waves.

---

## Hardware Upgrades

After Wave 2, choose **one permanent upgrade**:

| Upgrade | Effect |
|---|---|
| RAM Upgrade | 50% less slowdown from clutter |
| Cooling Fan | 50% reduced CPU heat buildup |

---

## Waves

| Wave | Enemies | Difficulty |
|---:|---|---|
| 1 | Regi-Mites only | Easy, 15% popup swap rate |
| 2 | +Gremlins, +Spy-Dots | Medium, 40% popup swap rate |
| 3 | All enemies, stronger variants | Hard, 65% popup swap rate |

---

## Getting Started

### Play (Desktop Browser)

Open `index.html` (double click) and play.

### Rendering

- Default: WebGL 3D renderer (Three.js) inside the CRT screen.
- Fallback: DOM/sprite renderer when WebGL is unavailable.
- Debug: add `?renderer=dom` to force the DOM renderer.

### Automation Hooks (Testing)

For deterministic automation (e.g., Playwright), the game exposes:

- `window.render_game_to_text(): string` returns a concise JSON snapshot of the current state.
- `window.advanceTime(ms: number): Promise<void>` advances the simulation deterministically (used in webdriver mode).

---

## Sprites / Assets

- Put your images into `assets/sprites/`
- Adjust paths in `src/assets/manifest.js` if you want different filenames
- Missing sprites fall back to built-in vector icons (and the WebGL renderer does not require world sprites)

---

## Usage as a React Component

The game is exposed as a React component:

```jsx
import DesktopWars from './src/DesktopWars.jsx';

function App() {
  return <DesktopWars />;
}

export default App;
```

---

## Dependencies

- Runtime: React 18 UMD + ReactDOM 18 UMD (loaded in `index.html`)
- Build: `esbuild` (to generate `build/app.js`)
- Renderer: `three` (WebGL 3D)

---

## Project Structure

```text
desktop-wars/
├── index.html
├── assets/
│   ├── sprites/
│   └── svg/
├── build/
│   └── app.js              # bundled output (browser)
├── src/
│   ├── DesktopWars.jsx     # main component
│   └── ...
├── desktop-wars-clean.jsx  # re-export for compatibility
├── package.json
└── scripts/
    └── build.mjs
```

---

## Technical Details

- **Pure React** game loop with `requestAnimationFrame` (disabled in webdriver mode; stepping happens via `advanceTime`)
- **Inline styles**, no CSS framework
- Optional **sprite override** via `assets/sprites/` + `src/assets/manifest.js` (primarily for the DOM fallback renderer)
- Font: “Press Start 2P” (loaded in `index.html`)

---

## Strategy Tips

1. Avoid spamming shots. CPU heat is your primary limiter
2. Shoot the trash to clear clutter and stay mobile
3. Read popups carefully. Button positions are deceptive
4. Use walls to funnel enemies into kill zones
5. Deploy floppy disks as effective decoys
6. Save EMP blasts for emergencies
7. Collect coolant early to maintain sustained fire

---

## Build

If you change files under `src/`, regenerate the browser bundle:

```bash
npm install
npm run build
```

---

## Win Condition

Survive all **3 waves**, each lasting **90 seconds**, while keeping your **System Folder intact**.

**Game Over** if:

- Your HP reaches 0
- The System Folder is destroyed

---

## License

MIT License. Free to use, modify, and distribute.

---

## Acknowledgments

- Inspired by classic twin-stick shooters and desktop defender games
- CRT monitor aesthetic inspired by 1990s computing
- “Press Start 2P” font by CodeMan38
