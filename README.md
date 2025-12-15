#
 🖱️ Desktop Wars: System Integrity

A retro-styled twin-stick shooter with tower defense elements, built with React. Defend your desktop against malware while managing CPU heat and RAM pressure!
!
[
Genre
](
https://img.shields.io/badge/Genre-Twin--Stick%20Shooter-blue
)

!
[
Framework
](
https://img.shields.io/badge/Framework-React-61dafb
)

!
[
Style
](
https://img.shields.io/badge/Style-Pixel%20Art-green
)

##
 🎮 Gameplay

Protect the 
**
System Folder
**
 in the center of your desktop from waves of malware. The game features a nostalgic CRT monitor frame and pixel-art aesthetics.
###
 Features

-
 
**
Twin-stick shooter mechanics
**
 with mouse aiming
-
 
**
Tower defense setup phase
**
 before each wave
-
 
**
Resource management
**
 (CPU heat & RAM pressure)
-
 
**
Dark pattern popups
**
 that test your attention
-
 
**
Hardware upgrades
**
 between waves
-
 
**
3 enemy types
**
 with unique behaviors
-
 
**
5 power-ups
**
 to collect
-
 
**
Retro CRT monitor aesthetic
**

##
 🕹️ Controls

|
 Key 
|
 Action 
|

|
-----
|
--------
|

|
 
`WASD`
 
|
 Move 
|

|
 
`Mouse`
 
|
 Aim 
|

|
 
`Left Click`
 
|
 Shoot 
|

|
 
`Right Click`
 
|
 EMP blast (when charged) 
|

|
 
`Shift`
 
|
 Dash 
|

|
 
`Q`
 / 
`E`
 
|
 Answer popup dialogs 
|


##
 👾 Enemies

|
 Enemy 
|
 Behavior 
|

|
-------
|
----------
|

|
 📦 
**
Regi-Mite
**
 
|
 Standard enemy, targets System Folder 
|

|
 🤪 
**
Popup-Gremlin
**
 
|
 Fast & erratic, bounces randomly 
|

|
 🔴 
**
Spy-Dot
**
 
|
 Small tracker, always chases player 
|


##
 ⚡ Power-Ups

|
 Item 
|
 Effect 
|

|
------
|
--------
|

|
 🍎 Apple 
|
 Heals 1 HP 
|

|
 ❄️ Coolant 
|
 Cools CPU by 60% 
|

|
 🔥 Rapid Fire 
|
 Faster shooting (temporary) 
|

|
 🔱 Triple Shot 
|
 3 projectiles per shot (temporary) 
|

|
 🛡️ Giant Mode 
|
 Invincible, destroys enemies on contact (can't shoot!) 
|


##
 📊 Resource Management

###
 CPU Heat 🔥

-
 Shooting increases heat
-
 At 90%+ you 
**
cannot shoot
**
 (overheated!)
-
 Cools down slowly over time
-
 Collect ❄️ Coolant for instant cooling
###
 RAM Pressure 📊

-
 Enemy drops (clutter) increase RAM
-
 High RAM = 
**
slower movement
**
 (up to 80%)
-
 Click 🗑️ Trash Can to empty clutter
##
 🏗️ Setup Phase

Before Wave 1, place your defenses (25 seconds):
|
 Item 
|
 Count 
|
 Effect 
|

|
------
|
-------
|
--------
|

|
 📁 Folder Wall 
|
 8 
|
 Blocks enemy movement 
|

|
 🐕 Watchdog 
|
 1 
|
 Auto-turret 
|

|
 📝 Sticky Note 
|
 2 
|
 Decoy, attracts enemies 
|


##
 🎭 Dark Pattern Popups

Answer popups with 
`Q`
 (left) or 
`E`
 (right):
|
 Popup Type 
|
 Correct Answer 
|

|
------------
|
----------------
|

|
 🛡️ Firewall Request 
|
 Deny 
|

|
 📦 Fake Update 
|
 Later 
|

|
 🔒 Security Patch 
|
 Install 
|


⚠️ 
**
Warning:
**
 Buttons get swapped more often in later waves!
##
 🔧 Hardware Upgrades

After Wave 2, choose one permanent upgrade:
|
 Upgrade 
|
 Effect 
|

|
---------
|
--------
|

|
 🧠 RAM Upgrade 
|
 50% less slowdown from clutter 
|

|
 🌀 Cooling Fan 
|
 50% less CPU heat buildup 
|


##
 🌊 Waves

|
 Wave 
|
 Enemies 
|
 Difficulty 
|

|
------
|
---------
|
------------
|

|
 Wave 1 
|
 Regi-Mites only 
|
 Easy, 15% popup swap 
|

|
 Wave 2 
|
 +Gremlins, +Spy-Dots 
|
 Medium, 40% popup swap 
|

|
 Wave 3 
|
 All enemies, stronger 
|
 Hard, 65% popup swap 
|


##
 🚀 Getting Started

###
 Prerequisites

-
 Node.js 16+ 
-
 npm or yarn
###
 Installation

```
bash

# Clone the repository

git
 clone https://github.com/yourusername/desktop-wars.git
cd
 desktop-wars
# Install dependencies

npm
 
install

# Start development server

npm
 start

```

###
 Running as React Component

The game is a single React component. Import it into your project:
```
jsx

import
 
DesktopWars
 
from
 
'./desktop-wars-clean'
;

function
 
App
(
)
 
{

  
return
 
;

}

```

###
 Dependencies

-
 React 18+
-
 No additional dependencies required (pure React with inline styles)
##
 🏗️ Project Structure

```

desktop-wars/
├── desktop-wars-clean.jsx   # Main game component
├── README.md                 # This file
└── package.json             # Project configuration

```

##
 🎨 Technical Details

-
 
**
Pure React
**
 - No game engine, just React state and requestAnimationFrame
-
 
**
Inline styles
**
 - No CSS files needed
-
 
**
Single file
**
 - Entire game in one component (~1900 lines)
-
 
**
Emoji-based assets
**
 - No external images required
-
 
**
Google Fonts
**
 - "Press Start 2P" for retro text
##
 💡 Strategy Tips

1.
 Don't spam shoot – manage your CPU heat!
2.
 Empty the trash regularly – clutter will slow you down
3.
 Read popups carefully – buttons swap positions!
4.
 Place walls strategically to funnel enemies
5.
 Use sticky notes as decoys
6.
 Save EMP for emergencies
7.
 Collect coolant for sustained firefights
##
 🏆 Win Condition

Survive all 3 waves (90 seconds each) with your System Folder intact!
**
Game Over
**
 if:
-
 Your HP reaches 0
-
 System Folder HP reaches 0
##
 📝 License

MIT License - feel free to use, modify, and distribute.
##
 🙏 Acknowledgments

-
 Inspired by classic twin-stick shooters and desktop defender games
-
 Retro CRT aesthetic inspired by 90s computing
-
 "Press Start 2P" font by CodeMan38
