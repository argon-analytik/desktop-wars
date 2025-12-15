# 🖱️ Desktop Wars: System Integrity

A retro-styled **twin-stick shooter with tower defense elements**, built in **pure React**.  
Defend your desktop against waves of malware while managing **CPU heat** and **RAM pressure**.

![Genre](https://img.shields.io/badge/Genre-Twin--Stick%20Shooter-blue)
![Framework](https://img.shields.io/badge/Framework-React-61dafb)
![Style](https://img.shields.io/badge/Style-Pixel%20Art-green)

---

## 🎮 Gameplay

Protect the **System Folder** in the center of your desktop from relentless malware attacks.  
The game is presented inside a nostalgic **CRT monitor frame** with bold, comic-style **pixel art**.

### Features

- **Twin-stick shooter mechanics** with mouse aiming  
- **Tower defense setup phase** before each wave  
- **Resource management** via CPU heat and RAM pressure  
- **Dark-pattern popups** that deliberately try to trick you  
- **Permanent hardware upgrades** between waves  
- **3 enemy types** with distinct behaviors  
- **5 collectible power-ups**  
- **Retro CRT monitor aesthetic**

---

## 🕹️ Controls

| Key        | Action                          |
|------------|---------------------------------|
| `WASD`     | Move                            |
| `Mouse`    | Aim                             |
| `Left Click` | Shoot                         |
| `Right Click` | EMP blast (when charged)    |
| `Shift`    | Dash                            |
| `Q / E`    | Answer popup dialogs            |

---

## 👾 Enemies

| Enemy            | Behavior                                      |
|------------------|-----------------------------------------------|
| 📦 **Regi-Mite** | Standard enemy, targets the System Folder     |
| 🤪 **Popup-Gremlin** | Fast and erratic, bounces randomly       |
| 🔴 **Spy-Dot**   | Small tracker, relentlessly chases the player |

---

## ⚡ Power-Ups

| Item          | Effect                                                     |
|---------------|------------------------------------------------------------|
| 🍎 Apple      | Heals 1 HP                                                  |
| ❄️ Coolant   | Instantly cools CPU by 60%                                  |
| 🔥 Rapid Fire | Temporarily increases fire rate                             |
| 🔱 Triple Shot| Temporarily fires three projectiles per shot               |
| 🛡️ Giant Mode | Temporary invincibility, destroys enemies on contact. You cannot shoot during this mode |

---

## 📊 Resource Management

### CPU Heat 🔥

- Shooting increases CPU heat  
- At **90%+ heat**, you **cannot shoot** due to overheating  
- Heat dissipates slowly over time  
- Collect ❄️ **Coolant** for instant relief  

### RAM Pressure 📊

- Enemy drops and clutter increase RAM usage  
- High RAM causes **movement slowdown** of up to 80%  
- Click the 🗑️ **Trash Can** to clear clutter  

---

## 🏗️ Setup Phase

Before Wave 1, you have **25 seconds** to prepare your defenses:

| Item          | Count | Effect                              |
|---------------|-------|-------------------------------------|
| 📁 Folder Wall| 8     | Blocks enemy movement               |
| 🐕 Watchdog  | 1     | Automated turret                    |
| 📝 Sticky Note| 2     | Decoy that attracts enemies         |

---

## 🎭 Dark Pattern Popups

Respond using `Q` (left) or `E` (right):

| Popup Type          | Correct Answer |
|---------------------|----------------|
| 🛡️ Firewall Request| Deny           |
| 📦 Fake Update     | Later          |
| 🔒 Security Patch  | Install        |

**Warning:** Button positions are swapped more frequently in later waves.

---

## 🔧 Hardware Upgrades

After Wave 2, choose **one permanent upgrade**:

| Upgrade          | Effect                                  |
|------------------|------------------------------------------|
| 🧠 RAM Upgrade   | 50% less slowdown from clutter            |
| 🌀 Cooling Fan  | 50% reduced CPU heat buildup              |

---

## 🌊 Waves

| Wave   | Enemies                         | Difficulty                    |
|--------|---------------------------------|--------------------------------|
| Wave 1 | Regi-Mites only                 | Easy, 15% popup swap rate      |
| Wave 2 | +Gremlins, +Spy-Dots            | Medium, 40% popup swap rate    |
| Wave 3 | All enemies, stronger variants  | Hard, 65% popup swap rate      |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or newer  
- npm or yarn  

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/desktop-wars.git
cd desktop-wars

# Install dependencies
npm install

# Start development server
npm start
```

---

## 🧩 Usage as a React Component

The game is implemented as a **single React component**:

```jsx
import DesktopWars from './desktop-wars-clean';

function App() {
  return <DesktopWars />;
}

export default App;
```

---

## 📦 Dependencies

- React 18 or newer  
- No additional libraries. The game uses pure React with inline styles  

---

## 🏗️ Project Structure

```text
desktop-wars/
├── desktop-wars-clean.jsx   # Main game component
├── README.md               # Documentation
└── package.json            # Project configuration
```

---

## 🎨 Technical Details

- **Pure React** with `requestAnimationFrame`, no external game engine  
- **Inline styles only**, no CSS files required  
- **Single-file architecture**, roughly 1900 lines of code  
- **Emoji-based assets**, no external images needed  
- **Google Font**: “Press Start 2P” for authentic retro typography  

---

## 💡 Strategy Tips

1. Avoid spamming shots. CPU heat is your primary limiter  
2. Empty the trash frequently to stay mobile  
3. Read popups carefully. Button positions are deceptive  
4. Use walls to funnel enemies into kill zones  
5. Deploy sticky notes as effective decoys  
6. Save EMP blasts for emergencies  
7. Collect coolant early to maintain sustained fire  

---

## 🏆 Win Condition

Survive all **3 waves**, each lasting **90 seconds**, while keeping your **System Folder intact**.

**Game Over** if:

- Your HP reaches 0  
- The System Folder is destroyed  

---

## 📝 License

MIT License. Free to use, modify, and distribute.

---

## 🙏 Acknowledgments

- Inspired by classic twin-stick shooters and desktop defender games  
- CRT monitor aesthetic inspired by 1990s computing  
- “Press Start 2P” font by CodeMan38
