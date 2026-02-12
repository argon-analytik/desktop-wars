(()=>{var h=globalThis.React;if(!h)throw new Error("React wurde nicht gefunden. Stelle sicher, dass `react.production.min.js` vor `build/app.js` geladen wird.");var{useCallback:Yi,useEffect:ri,useLayoutEffect:Lh,useMemo:Ao,useRef:An,useState:Tt}=h;var wr=globalThis.ReactDOM;if(!wr)throw new Error("ReactDOM wurde nicht gefunden. Stelle sicher, dass `react-dom.production.min.js` vor `build/app.js` geladen wird.");var Ri={width:976,height:734,screen:{x:87,y:90,width:640,height:480}};var Ot={cursor:"assets/sprites/fighter-a.png",crtMonitor:"assets/svg/crt-monitor.svg",wallpaper:"assets/sprites/wallpaper.png",systemFolder:"assets/sprites/system-folder.png",folderWall:"assets/sprites/folder-wall.png",trash:"assets/sprites/trash.png",clutter:"assets/sprites/clutter.png",enemyRegiMite:"assets/sprites/enemy-regi-mite.png",enemyPopupGremlin:"assets/sprites/enemy-popup-gremlin.png",enemySpyDot:"assets/sprites/enemy-spy-dot.png",pickupApple:"assets/sprites/pickup-apple.png",pickupCoolant:"assets/sprites/pickup-coolant.png",powerupRapid:"assets/sprites/powerup-rapid.png",powerupTriple:"assets/sprites/powerup-triple.png",powerupGiant:"assets/sprites/powerup-giant.png",deployableWatchdog:"assets/sprites/deployable-watchdog.png",deployableSticky:"assets/sprites/deployable-sticky.png"};function Wn({onClick:i,children:e,disabled:t=!1,variant:n="default"}){return h.createElement("button",{onClick:i,disabled:t,style:{padding:"6px 16px",fontSize:8,fontFamily:'"Press Start 2P", monospace',background:n==="primary"?"linear-gradient(180deg, #5a5 0%, #494 100%)":"linear-gradient(180deg, #eee 0%, #ccc 100%)",border:"2px solid",borderColor:n==="primary"?"#373 #252 #252 #373":"#aaa #777 #777 #aaa",borderRadius:4,cursor:t?"not-allowed":"pointer",color:n==="primary"?"#fff":"#333",opacity:t?.5:1}},e)}function Dn({size:i=16,viewBox:e="0 0 64 64",children:t,style:n}){return h.createElement("svg",{width:i,height:i,viewBox:e,style:{display:"block",...n},xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},t)}function Uh({size:i=16,hot:e=!1,style:t}){let n=e?"#ffb45a":"#ffe27a",s=e?"#ff4d4d":"#f2c94c",r=e?"#ff9a3c":"#ffd35a",o=e?"cpuBodyHot":"cpuBodyCool",a=e?"cpuCoreHot":"cpuCoreCool";return h.createElement(Dn,{size:i,style:t},h.createElement("defs",null,h.createElement("linearGradient",{id:"cpuPinGrad",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#f5f7fb"}),h.createElement("stop",{offset:"1",stopColor:"#aab3c5"})),h.createElement("linearGradient",{id:o,x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#3b4256"}),h.createElement("stop",{offset:"1",stopColor:"#1a2133"})),h.createElement("linearGradient",{id:a,x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:n}),h.createElement("stop",{offset:"1",stopColor:s})),h.createElement("filter",{id:"cpuGlow",x:"-30%",y:"-30%",width:"160%",height:"160%"},h.createElement("feGaussianBlur",{stdDeviation:"2.1",result:"blur"}),h.createElement("feMerge",null,h.createElement("feMergeNode",{in:"blur"}),h.createElement("feMergeNode",{in:"SourceGraphic"})))),Array.from({length:5}).map((l,c)=>h.createElement("g",{key:c},h.createElement("rect",{x:11+c*9,y:6,width:6,height:10,rx:2,fill:"url(#cpuPinGrad)",stroke:"#0b1020",strokeWidth:"1.5",opacity:"0.95"}),h.createElement("rect",{x:11+c*9,y:48,width:6,height:10,rx:2,fill:"url(#cpuPinGrad)",stroke:"#0b1020",strokeWidth:"1.5",opacity:"0.95"}),h.createElement("rect",{x:6,y:11+c*9,width:10,height:6,rx:2,fill:"url(#cpuPinGrad)",stroke:"#0b1020",strokeWidth:"1.5",opacity:"0.95"}),h.createElement("rect",{x:48,y:11+c*9,width:10,height:6,rx:2,fill:"url(#cpuPinGrad)",stroke:"#0b1020",strokeWidth:"1.5",opacity:"0.95"}))),h.createElement("rect",{x:"16",y:"16",width:"32",height:"32",rx:"7",fill:`url(#${o})`,stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"22",y:"22",width:"20",height:"20",rx:"5",fill:`url(#${a})`,stroke:"#0b1020",strokeWidth:"3",filter:e?"url(#cpuGlow)":void 0}),h.createElement("path",{d:"M26 28 H38 M26 32 H38 M26 36 H38",stroke:"rgba(11,16,32,0.35)",strokeWidth:"2",strokeLinecap:"round"}),h.createElement("path",{d:"M32 24 L28 32 L34 32 L30 40",fill:"none",stroke:r,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),e&&h.createElement(h.Fragment,null,h.createElement("path",{d:"M20 18 C22 14, 26 14, 28 18",fill:"none",stroke:r,strokeWidth:"3",strokeLinecap:"round",opacity:"0.9"}),h.createElement("path",{d:"M36 18 C38 14, 42 14, 44 18",fill:"none",stroke:r,strokeWidth:"3",strokeLinecap:"round",opacity:"0.9"})))}function Nh({size:i=16,high:e=!1,style:t}){let n=e?"#ff4d4d":"#67d6ff",s=e?"ramBoardHot":"ramBoardCool";return h.createElement(Dn,{size:i,style:t},h.createElement("defs",null,h.createElement("linearGradient",{id:s,x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#3b4256"}),h.createElement("stop",{offset:"1",stopColor:"#1a2133"})),h.createElement("linearGradient",{id:"ramChipGrad",x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:n,stopOpacity:"0.95"}),h.createElement("stop",{offset:"1",stopColor:"#0b1020",stopOpacity:"0.25"}))),h.createElement("rect",{x:"10",y:"20",width:"44",height:"24",rx:"5",fill:`url(#${s})`,stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"15",y:"26",width:"10",height:"12",rx:"2",fill:"url(#ramChipGrad)",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("rect",{x:"27",y:"26",width:"10",height:"12",rx:"2",fill:"url(#ramChipGrad)",stroke:"#0b1020",strokeWidth:"2",opacity:"0.9"}),h.createElement("rect",{x:"39",y:"26",width:"10",height:"12",rx:"2",fill:"url(#ramChipGrad)",stroke:"#0b1020",strokeWidth:"2",opacity:"0.8"}),h.createElement("rect",{x:"28",y:"41.5",width:"8",height:"3.5",rx:"1.2",fill:"#0b1020",opacity:"0.65"}),h.createElement("rect",{x:"15",y:"22.8",width:"34",height:"2.2",rx:"1.1",fill:"rgba(255,255,255,0.14)"}),Array.from({length:7}).map((r,o)=>h.createElement("rect",{key:o,x:15+o*5.2,y:46,width:3.8,height:6,rx:1,fill:"#f2c94c",opacity:"0.95"})))}function Fh({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"regiBody",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#f2e5d6"}),h.createElement("stop",{offset:"1",stopColor:"#d9c7b2"})),h.createElement("linearGradient",{id:"regiShell",x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#cdb89f"}),h.createElement("stop",{offset:"1",stopColor:"#a98f72"}))),h.createElement("rect",{x:"12",y:"18",width:"40",height:"28",rx:"8",fill:"url(#regiBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"16",y:"20",width:"32",height:"12",rx:"6",fill:"url(#regiShell)",stroke:"rgba(11,16,32,0.35)",strokeWidth:"2",opacity:"0.95"}),h.createElement("circle",{cx:"26",cy:"33",r:"4.2",fill:"#f4f4f4",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("circle",{cx:"38",cy:"33",r:"4.2",fill:"#f4f4f4",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("circle",{cx:"26.5",cy:"33.2",r:"1.9",fill:"#0b1020"}),h.createElement("circle",{cx:"38.5",cy:"33.2",r:"1.9",fill:"#0b1020"}),h.createElement("circle",{cx:"25.2",cy:"31.8",r:"1",fill:"rgba(255,255,255,0.7)"}),h.createElement("circle",{cx:"37.2",cy:"31.8",r:"1",fill:"rgba(255,255,255,0.7)"}),h.createElement("path",{d:"M28 40 Q32 43 36 40",fill:"none",stroke:"rgba(11,16,32,0.55)",strokeWidth:"2.4",strokeLinecap:"round"}),h.createElement("rect",{x:"18",y:"44",width:"4",height:"10",rx:"2",fill:"#6a4b00"}),h.createElement("rect",{x:"28",y:"46",width:"4",height:"8",rx:"2",fill:"#6a4b00"}),h.createElement("rect",{x:"36",y:"46",width:"4",height:"8",rx:"2",fill:"#6a4b00"}),h.createElement("rect",{x:"46",y:"44",width:"4",height:"10",rx:"2",fill:"#6a4b00"}))}function Oh({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"gremlinBody",x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#ff94a0"}),h.createElement("stop",{offset:"1",stopColor:"#ff3b5f"})),h.createElement("radialGradient",{id:"gremlinCore",cx:"50%",cy:"40%",r:"60%"},h.createElement("stop",{offset:"0",stopColor:"#ffd1f0",stopOpacity:"0.95"}),h.createElement("stop",{offset:"1",stopColor:"#ff1f8b",stopOpacity:"0.95"}))),h.createElement("path",{d:"M32 10 L44 18 L54 32 L44 46 L32 54 L20 46 L10 32 L20 18 Z",fill:"url(#gremlinBody)",stroke:"#0b1020",strokeWidth:"4",strokeLinejoin:"round"}),h.createElement("circle",{cx:"32",cy:"32",r:"6.5",fill:"url(#gremlinCore)",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"20",y:"26",width:"24",height:"16",rx:"3",fill:"rgba(255,255,255,0.85)",stroke:"#0b1020",strokeWidth:"2.5"}),h.createElement("rect",{x:"20",y:"26",width:"24",height:"4.5",rx:"2.2",fill:"rgba(11,16,32,0.18)"}),h.createElement("circle",{cx:"23",cy:"28.3",r:"1.3",fill:"#ff4d4d",stroke:"#0b1020",strokeWidth:"1"}),h.createElement("path",{d:"M24.5 34 H39.5 M24.5 38 H35.5",stroke:"rgba(11,16,32,0.5)",strokeWidth:"2",strokeLinecap:"round"}),h.createElement("path",{d:"M18 20 L14 16 M46 20 L50 16 M18 44 L14 48 M46 44 L50 48",stroke:"#2a0010",strokeWidth:"4",strokeLinecap:"round"}))}function Bh({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("radialGradient",{id:"spyBody",cx:"45%",cy:"35%",r:"70%"},h.createElement("stop",{offset:"0",stopColor:"#ff9a9a"}),h.createElement("stop",{offset:"0.5",stopColor:"#ff3b3b"}),h.createElement("stop",{offset:"1",stopColor:"#b30000"}))),h.createElement("circle",{cx:"32",cy:"32",r:"18",fill:"url(#spyBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("circle",{cx:"32",cy:"32",r:"12",fill:"none",stroke:"#ff1f1f",strokeWidth:"4",opacity:"0.85"}),h.createElement("circle",{cx:"32",cy:"32",r:"5.5",fill:"#2a0010"}),h.createElement("circle",{cx:"30",cy:"30",r:"2",fill:"#f4f4f4",opacity:"0.75"}),h.createElement("path",{d:"M20 22 C24 18, 40 18, 44 22",fill:"none",stroke:"rgba(255,255,255,0.18)",strokeWidth:"3",strokeLinecap:"round"}))}function Er({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("radialGradient",{id:"appleBody",cx:"40%",cy:"35%",r:"70%"},h.createElement("stop",{offset:"0",stopColor:"#ffb3b3"}),h.createElement("stop",{offset:"0.5",stopColor:"#e04444"}),h.createElement("stop",{offset:"1",stopColor:"#8a0f0f"}))),h.createElement("circle",{cx:"32",cy:"36",r:"18",fill:"url(#appleBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"30",y:"12",width:"4",height:"12",rx:"2",fill:"#6a4b00"}),h.createElement("path",{d:"M34 18 C44 12, 48 22, 40 26 C36 28, 34 24, 34 18 Z",fill:"#4bbf5a",stroke:"#0b1020",strokeWidth:"2",strokeLinejoin:"round"}),h.createElement("rect",{x:"29",y:"32",width:"6",height:"16",rx:"2",fill:"#f4f4f4",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("rect",{x:"24",y:"37",width:"16",height:"6",rx:"2",fill:"#f4f4f4",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("circle",{cx:"26",cy:"30",r:"3",fill:"#ffd6d6",opacity:"0.65"}))}function Co({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"coolantBody",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#bff0ff",stopOpacity:"0.95"}),h.createElement("stop",{offset:"1",stopColor:"#2aa7ff",stopOpacity:"0.8"}))),h.createElement("rect",{x:"22",y:"10",width:"20",height:"10",rx:"3",fill:"#e6e8ed",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"18",y:"18",width:"28",height:"34",rx:"8",fill:"url(#coolantBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("path",{d:"M32 24 V46 M22 35 H42 M26 28 L38 42 M38 28 L26 42",stroke:"#c7f3ff",strokeWidth:"3.5",strokeLinecap:"round",opacity:"0.95"}),h.createElement("rect",{x:"20",y:"22",width:"24",height:"2.4",rx:"1.2",fill:"rgba(255,255,255,0.22)"}))}function Io({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"rapidBody",x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#ffd35a"}),h.createElement("stop",{offset:"1",stopColor:"#ff6b00"}))),h.createElement("rect",{x:"18",y:"22",width:"28",height:"20",rx:"10",fill:"url(#rapidBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"20",y:"26",width:"6",height:"12",rx:"3",fill:"#2a2f3c",opacity:"0.9"}),h.createElement("rect",{x:"38",y:"26",width:"6",height:"12",rx:"3",fill:"#2a2f3c",opacity:"0.9"}),h.createElement("path",{d:"M26 18 L18 22 L26 26 Z",fill:"#ff9a3c",stroke:"#0b1020",strokeWidth:"3",strokeLinejoin:"round"}),h.createElement("path",{d:"M38 18 L46 22 L38 26 Z",fill:"#ff9a3c",stroke:"#0b1020",strokeWidth:"3",strokeLinejoin:"round"}),h.createElement("path",{d:"M14 30 H18 M12 36 H18",stroke:"rgba(255,255,255,0.65)",strokeWidth:"3",strokeLinecap:"round"}))}function Ro({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"tripleBody",x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#9cc8ff"}),h.createElement("stop",{offset:"1",stopColor:"#1a62ff"}))),h.createElement("rect",{x:"18",y:"24",width:"28",height:"18",rx:"5",fill:"url(#tripleBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"18",y:"16",width:"10",height:"12",rx:"5",fill:"url(#tripleBody)",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"36",y:"16",width:"10",height:"12",rx:"5",fill:"url(#tripleBody)",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"27",y:"10",width:"10",height:"14",rx:"5",fill:"url(#tripleBody)",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("circle",{cx:"23",cy:"20",r:"1.6",fill:"#0b1020",opacity:"0.8"}),h.createElement("circle",{cx:"32",cy:"16",r:"1.6",fill:"#0b1020",opacity:"0.8"}),h.createElement("circle",{cx:"41",cy:"20",r:"1.6",fill:"#0b1020",opacity:"0.8"}))}function Po({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"giantShield",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#fff0a8"}),h.createElement("stop",{offset:"1",stopColor:"#f2c94c"}))),h.createElement("path",{d:"M32 10 C44 16, 52 20, 52 30 C52 46, 40 54, 32 58 C24 54, 12 46, 12 30 C12 20, 20 16, 32 10 Z",fill:"url(#giantShield)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("path",{d:"M22 18 L26 12 L32 18 L38 12 L42 18",fill:"none",stroke:"#6a4b00",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("path",{d:"M32 22 L34 28 L40 28 L35 32 L37 38 L32 34 L27 38 L29 32 L24 28 L30 28 Z",fill:"rgba(255,255,255,0.25)"}))}function Do({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"wallBody",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#f0c67a"}),h.createElement("stop",{offset:"1",stopColor:"#c48a2a"}))),h.createElement("rect",{x:"12",y:"22",width:"40",height:"28",rx:"6",fill:"url(#wallBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"16",y:"18",width:"22",height:"10",rx:"5",fill:"#e8bc6a",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"38",y:"34",width:"10",height:"10",rx:"2.5",fill:"#f2c94c",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"41",y:"30",width:"4",height:"6",rx:"2",fill:"#6a4b00",opacity:"0.9"}),h.createElement("path",{d:"M18 44 L26 36 L32 42 L40 34",stroke:"rgba(11,16,32,0.45)",strokeWidth:"3",strokeLinecap:"round"}))}function Bs({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"dogBase",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#f6f7fb"}),h.createElement("stop",{offset:"1",stopColor:"#aab3c5"}))),h.createElement("ellipse",{cx:"30",cy:"40",rx:"16",ry:"12",fill:"url(#dogBase)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("path",{d:"M18 44 L14 52 M28 46 L24 54 M36 46 L40 54 M46 44 L50 52",stroke:"#0b1020",strokeWidth:"4",strokeLinecap:"round",opacity:"0.85"}),h.createElement("rect",{x:"18",y:"22",width:"24",height:"14",rx:"6",fill:"#f2c94c",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"38",y:"26",width:"16",height:"6",rx:"3",fill:"#2a2f3c",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("circle",{cx:"28",cy:"29",r:"3.2",fill:"#c7f3ff",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("circle",{cx:"27.2",cy:"28.2",r:"1.1",fill:"#ffffff",opacity:"0.7"}))}function ks({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"floppyBody",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#525b73"}),h.createElement("stop",{offset:"1",stopColor:"#2a2f3c"})),h.createElement("linearGradient",{id:"floppyLabel",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#ffffff"}),h.createElement("stop",{offset:"1",stopColor:"#d3d7e1"}))),h.createElement("path",{d:"M20 12 H46 L50 16 V52 H14 V16 Z",fill:"url(#floppyBody)",stroke:"#0b1020",strokeWidth:"4",strokeLinejoin:"round"}),h.createElement("rect",{x:"18",y:"16",width:"28",height:"16",rx:"4",fill:"url(#floppyLabel)",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("path",{d:"M22 22 H40 M22 26 H34",stroke:"rgba(11,16,32,0.45)",strokeWidth:"2",strokeLinecap:"round"}),h.createElement("rect",{x:"18",y:"36",width:"28",height:"10",rx:"3",fill:"#aab3c5",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"26",y:"39.5",width:"12",height:"6.5",rx:"2",fill:"#0b1020",opacity:"0.85"}),h.createElement("rect",{x:"42",y:"40",width:"5",height:"5",rx:"1",fill:"#f2c94c",stroke:"#0b1020",strokeWidth:"1.5"}),h.createElement("rect",{x:"44",y:"12",width:"6",height:"6",fill:"rgba(255,255,255,0.14)"}))}function kh({size:i=16,style:e}){return h.createElement(Dn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"timerFace",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#ffffff"}),h.createElement("stop",{offset:"1",stopColor:"#d9dee8"}))),h.createElement("circle",{cx:"32",cy:"34",r:"22",fill:"url(#timerFace)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"26",y:"6",width:"12",height:"10",rx:"3",fill:"#ff4d4d",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("line",{x1:"32",y1:"34",x2:"32",y2:"20",stroke:"#ff4d4d",strokeWidth:"4",strokeLinecap:"round"}),h.createElement("line",{x1:"32",y1:"34",x2:"44",y2:"40",stroke:"#ff4d4d",strokeWidth:"4",strokeLinecap:"round"}),h.createElement("circle",{cx:"32",cy:"34",r:"2.5",fill:"#0b1020",opacity:"0.65"}))}function Xn({title:i,width:e=300,children:t,x:n,y:s}){return h.createElement("div",{style:{position:n!==void 0?"absolute":"relative",left:n,top:s,width:e,background:"#f4f4f4",color:"#111",border:"2px solid #444",borderRadius:6,boxShadow:"6px 6px 0 rgba(0,0,0,0.25)",overflow:"hidden"}},h.createElement("div",{style:{height:18,background:"linear-gradient(180deg, #f0f0f0 0%, #d2d2d2 100%)",display:"flex",alignItems:"center",padding:"0 6px",gap:6}},h.createElement("div",{style:{width:10,height:10,background:"#e55",border:"1px solid #b33",borderRadius:2}}),h.createElement("span",{style:{fontSize:8,color:"#111",fontWeight:"bold"}},i)),h.createElement("div",{style:{padding:10}},t))}var zh=new Map;function Vt({src:i,alt:e="",width:t,height:n=t,style:s,pixelated:r=!0,fallback:o=null,...a}){let[l,c]=Tt(()=>i?zh.get(i)!==!1:!1);return!i||!l?o:h.createElement("img",{src:i,alt:e,width:t,height:n,draggable:!1,onError:()=>{zh.set(i,!1),c(!1)},style:{imageRendering:r?"pixelated":void 0,...s},...a})}var pt={MENU:"menu",SETUP:"setup",PLAYING:"playing",PAUSED:"paused",INTERMISSION:"intermission",GAMEOVER:"gameover",WIN:"win"};function Zl({x:i,y:e,empCharge:t,invincible:n,mousePos:s,powerUp:r,cpuHeat:o,ramPressure:a,isHit:l}){let c=o>=90,d=a>=60,f=r==="giant",p=c?"rgba(255,100,100,0.8)":"rgba(255,255,255,0.7)",m=c?"rgba(255,100,100,0.7)":"rgba(255,255,255,0.5)",x=null;r==="rapid"?x="#f80":r==="triple"?x="#08f":r==="giant"&&(x="#fa0");let y="none";return l?y="brightness(2.0)":f?y="drop-shadow(0 0 10px rgba(255, 215, 0, 0.7))":c?y="drop-shadow(0 0 8px rgba(255, 80, 80, 0.65))":d&&(y="drop-shadow(0 0 6px rgba(70, 160, 255, 0.6))"),h.createElement(h.Fragment,null,h.createElement("div",{style:{position:"absolute",left:s.x-14,top:s.y-14,width:28,height:28,pointerEvents:"none",zIndex:60,filter:y}},h.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28"},h.createElement("circle",{cx:"14",cy:"14",r:"11",fill:"none",stroke:m,strokeWidth:"2"}),h.createElement("circle",{cx:"14",cy:"14",r:"4",fill:"none",stroke:p,strokeWidth:"2"}),h.createElement("line",{x1:"14",y1:"0",x2:"14",y2:"7",stroke:p,strokeWidth:"2"}),h.createElement("line",{x1:"14",y1:"21",x2:"14",y2:"28",stroke:p,strokeWidth:"2"}),h.createElement("line",{x1:"0",y1:"14",x2:"7",y2:"14",stroke:p,strokeWidth:"2"}),h.createElement("line",{x1:"21",y1:"14",x2:"28",y2:"14",stroke:p,strokeWidth:"2"}),h.createElement("circle",{cx:"14",cy:"14",r:"2",fill:c?"#f00":"#f44"}))),h.createElement("svg",{style:{position:"absolute",left:0,top:0,width:640,height:480,pointerEvents:"none",zIndex:45}},h.createElement("line",{x1:i,y1:e,x2:s.x,y2:s.y,stroke:"rgba(255,255,255,0.10)",strokeWidth:"1",strokeDasharray:"6,4"})),t>=100&&h.createElement("div",{style:{position:"absolute",left:Math.round(i-16-8),top:Math.round(e-16-8),width:48,height:48,border:"3px solid rgba(100, 200, 255, 0.9)",borderRadius:"50%",animation:"pulse 1s infinite",pointerEvents:"none",zIndex:49,boxSizing:"border-box",filter:"drop-shadow(0 0 10px rgba(100,200,255,0.35))"}}),r&&h.createElement("div",{style:{position:"absolute",left:i-24,top:e-16-18,fontSize:8,color:"#fff",background:x,padding:"2px 6px",borderRadius:4,fontWeight:"bold",pointerEvents:"none",zIndex:55,whiteSpace:"nowrap",boxShadow:"0 6px 18px rgba(0,0,0,0.35)"}},r==="rapid"?"RAPID":r==="triple"?"TRIPLE":"GIANT"),n>0&&h.createElement("div",{style:{position:"absolute",left:i-20,top:e-20,width:40,height:40,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.12)",pointerEvents:"none",zIndex:44}}))}function Jl({x:i,y:e}){return h.createElement("div",{style:{position:"absolute",left:i-14,top:e-14,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,opacity:.85,pointerEvents:"none",animation:"wobble 2s infinite"}},h.createElement(Vt,{src:Ot.clutter,width:18,height:18,style:{width:18,height:18},fallback:h.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18"},h.createElement("path",{d:"M4 2h7l3 3v11H4z",fill:"#f3f6ff",stroke:"#6b778c",strokeWidth:"1"}),h.createElement("path",{d:"M11 2v4h4",fill:"none",stroke:"#6b778c",strokeWidth:"1"}),h.createElement("line",{x1:"6",y1:"8",x2:"13",y2:"8",stroke:"#6b778c",strokeWidth:"1"}),h.createElement("line",{x1:"6",y1:"11",x2:"13",y2:"11",stroke:"#6b778c",strokeWidth:"1"}))}))}var Lo=new Map;function Hh({extra:i,gaps:e}){if(!Number.isFinite(i)||i<=0||e<=0)return{margin:0,spacing:0};let t=Math.min(32,Math.floor(i/e));for(let n=0;n<=t;n+=1){let s=i-e*n;if(s<0)break;if(s%2===0)return{margin:s/2,spacing:n}}return{margin:0,spacing:0}}function Pi({src:i,width:e,height:t=e,frameWidth:n,frameHeight:s=n,columns:r,rows:o,frameIndex:a=0,marginX:l=0,marginY:c=0,spacingX:d=0,spacingY:f=0,pixelated:p=!0,style:m,fallback:x=null,alt:y=""}){let[g,u]=Tt(()=>i?Lo.get(i)!==!1:!1),[E,S]=Tt(null);ri(()=>{if(!i)return;if(Lo.get(i)===!1){u(!1);return}let ft=!1,st=new Image;return st.onload=()=>{ft||(Lo.set(i,!0),S({width:st.naturalWidth,height:st.naturalHeight}),u(!0))},st.onerror=()=>{ft||(Lo.set(i,!1),u(!1))},st.src=i,()=>{ft=!0}},[i]);let v=Math.max(1,r!=null?r:1),A=Math.max(1,o!=null?o:1),C=Math.max(1,n!=null?n:1),L=Math.max(1,s!=null?s:1),U=v*C,b=A*L,M=Ao(()=>{if(l!==0||d!==0||!E)return null;let ft=v-1,st=E.width-U,K=Hh({extra:st,gaps:ft});return U+ft*K.spacing+K.margin*2!==E.width?null:K},[E,v,U,l,d]),D=Ao(()=>{if(c!==0||f!==0||!E)return null;let ft=A-1,st=E.height-b,K=Hh({extra:st,gaps:ft});return b+ft*K.spacing+K.margin*2!==E.height?null:K},[E,A,b,c,f]),k=M?M.margin:l,G=M?M.spacing:d,W=D?D.margin:c,J=D?D.spacing:f,X=Ao(()=>E||{width:U+(v-1)*G+k*2,height:b+(A-1)*J+W*2},[E,v,A,U,b,G,J,k,W]),oe=Math.max(0,Math.floor(a)),Z=oe%v,Se=Math.floor(oe/v)%A,De=e/C,Oe=t/L,ot=k+Z*(C+G),mt=W+Se*(L+J);return!i||!g?x:h.createElement("div",{"aria-label":y,style:{position:"relative",width:e,height:t,overflow:"hidden",...m}},h.createElement("img",{src:i,alt:"",draggable:!1,style:{position:"absolute",left:-ot*De,top:-mt*Oe,width:X.width*De,height:X.height*Oe,imageRendering:p?"pixelated":void 0,userSelect:"none",pointerEvents:"none"}}))}function $l({type:i,x:e,y:t,aimDir:n=7}){let s=i==="watchdog"?Ot.deployableWatchdog:i==="sticky"?Ot.deployableSticky:null,r=i==="watchdog"?64:24,o=i==="watchdog"?64:22,a="drop-shadow(0 2px 4px rgba(0,0,0,0.4))",l=Number.isFinite(n)?Math.max(0,Math.min(7,Math.floor(n))):0;return h.createElement("div",{style:{position:"absolute",left:e+12-r/2,top:t+12-r/2,width:r,height:r,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,pointerEvents:"none"}},i==="watchdog"&&h.createElement("div",{style:{width:o,height:o,filter:a}},h.createElement(Pi,{src:s,width:o,height:o,frameWidth:44,frameHeight:44,columns:4,rows:2,marginX:10,marginY:10,spacingX:20,spacingY:20,frameIndex:l,fallback:h.createElement(Vt,{src:s,width:o,height:o,style:{width:o,height:o},fallback:h.createElement(Bs,{size:o,style:{filter:a}})})})),i==="sticky"&&h.createElement(Vt,{src:s,width:o,height:o,style:{width:o,height:o,filter:a},fallback:h.createElement(ks,{size:o,style:{filter:a}})}))}function Kl({type:i,x:e,y:t,size:n,stunned:s,isHit:r,frame:o,flipX:a=!1,hp:l,maxHp:c}){let d=i==="regi-mite"?Ot.enemyRegiMite:i==="popup-gremlin"?Ot.enemyPopupGremlin:i==="spy-dot"?Ot.enemySpyDot:null,f={position:"absolute",left:e-n/2,top:t-n/2,width:n,height:n,opacity:s>0?.5:1,filter:r?"brightness(2)":"none",pointerEvents:"none"},p=Number.isFinite(c)?Math.max(1,Math.min(8,Math.round(c))):0,m=Number.isFinite(l)?Math.max(0,Math.min(p,Math.round(l))):0,x=p>1,y=i==="regi-mite"?"#ffd35a":i==="popup-gremlin"?"#ff4da6":"#ff3b3b";if(i==="regi-mite"){let g=Number.isFinite(o)?o:0,u=Math.floor(g)%16;return h.createElement("div",{style:f},x&&h.createElement("div",{style:{position:"absolute",left:"50%",top:-8,transform:"translateX(-50%)",display:"flex",gap:2,padding:2,background:"rgba(11,16,32,0.55)",borderRadius:3,border:"1px solid rgba(255,255,255,0.18)"}},Array.from({length:p}).map((E,S)=>h.createElement("div",{key:S,style:{width:6,height:4,borderRadius:2,background:S<m?y:"#0b1020",opacity:S<m?.95:.25}}))),h.createElement("div",{style:{width:n,height:n,transform:a?"scaleX(-1)":void 0,transformOrigin:"center"}},h.createElement(Pi,{src:d,width:n,height:n,frameWidth:32,frameHeight:32,columns:4,rows:4,marginX:16,marginY:16,spacingX:32,spacingY:32,frameIndex:u,fallback:h.createElement(Vt,{src:d,width:n,height:n,style:{width:n,height:n},fallback:h.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 100%)",border:"2px solid #888",borderRadius:3}},h.createElement("div",{style:{height:5,background:"#889",borderRadius:"2px 2px 0 0"}}),h.createElement("div",{style:{display:"flex",justifyContent:"center",gap:3,marginTop:3}},h.createElement("div",{style:{width:4,height:4,background:"#333",borderRadius:"50%"}}),h.createElement("div",{style:{width:4,height:4,background:"#333",borderRadius:"50%"}})))})})))}if(i==="popup-gremlin"){let g=Number.isFinite(o)?o:0,u=Math.sin(g*3)*4,E=Math.sin(g*5)*8,S=Math.floor(g)%16;return h.createElement("div",{style:{...f,transform:`translateY(${u}px) rotate(${E}deg) scale(${1+Math.sin(g*4)*.15})`}},x&&h.createElement("div",{style:{position:"absolute",left:"50%",top:-8,transform:"translateX(-50%)",display:"flex",gap:2,padding:2,background:"rgba(11,16,32,0.55)",borderRadius:3,border:"1px solid rgba(255,255,255,0.18)"}},Array.from({length:p}).map((v,A)=>h.createElement("div",{key:A,style:{width:6,height:4,borderRadius:2,background:A<m?y:"#0b1020",opacity:A<m?.95:.25}}))),h.createElement(Pi,{src:d,width:n,height:n,frameWidth:32,frameHeight:32,columns:4,rows:4,marginX:16,marginY:16,spacingX:32,spacingY:32,frameIndex:S,fallback:h.createElement(Vt,{src:d,width:n,height:n,style:{width:n,height:n},fallback:h.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(180deg, #ffe0e0 0%, #ffb0b0 100%)",border:"2px solid #d66",borderRadius:3,boxShadow:"0 0 8px rgba(255,100,100,0.5)"}},h.createElement("div",{style:{display:"flex",justifyContent:"center",gap:4,marginTop:3}},h.createElement("div",{style:{width:5,height:5,background:"#800",borderRadius:"50%",transform:`rotate(${g*20}deg)`}}),h.createElement("div",{style:{width:5,height:5,background:"#800",borderRadius:"50%",transform:`rotate(${-g*20}deg)`}})),h.createElement("div",{style:{width:10,height:5,margin:"2px auto",background:"#800",borderRadius:"0 0 6px 6px"}}))})}))}if(i==="spy-dot"){let g=Number.isFinite(o)?o:0,u=Math.floor(g)%16;return h.createElement("div",{style:{...f,animation:"blink 0.7s infinite"}},x&&h.createElement("div",{style:{position:"absolute",left:"50%",top:-8,transform:"translateX(-50%)",display:"flex",gap:2,padding:2,background:"rgba(11,16,32,0.55)",borderRadius:3,border:"1px solid rgba(255,255,255,0.18)"}},Array.from({length:p}).map((E,S)=>h.createElement("div",{key:S,style:{width:6,height:4,borderRadius:2,background:S<m?y:"#0b1020",opacity:S<m?.95:.25}}))),h.createElement(Pi,{src:d,width:n,height:n,frameWidth:32,frameHeight:32,columns:4,rows:4,marginX:16,marginY:16,spacingX:32,spacingY:32,frameIndex:u,fallback:h.createElement(Vt,{src:d,width:n,height:n,style:{width:n,height:n},fallback:h.createElement("div",{style:{width:"100%",height:"100%",background:"#f00",borderRadius:"50%",boxShadow:"0 0 6px #f00"}})})}))}return null}function jl({x:i,y:e,hp:t}){let n=t>3?0:t>2?1:t>1?2:3;return h.createElement("div",{style:{position:"absolute",left:i,top:e,width:24,height:24,pointerEvents:"none"}},h.createElement(Pi,{src:Ot.folderWall,width:24,height:24,frameWidth:32,frameHeight:32,columns:4,rows:1,marginX:16,marginY:16,spacingX:32,frameIndex:n,fallback:h.createElement(Vt,{src:Ot.folderWall,width:24,height:24,style:{width:24,height:24},fallback:h.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},h.createElement("rect",{x:"2",y:"5",width:"20",height:"17",rx:"2",fill:"#d4a456",stroke:"#a07030",strokeWidth:"1"}),h.createElement("rect",{x:"2",y:"5",width:"9",height:"4",fill:"#e8bc6a",stroke:"#a07030",strokeWidth:"0.5"}),n>=1&&h.createElement("line",{x1:"8",y1:"10",x2:"18",y2:"20",stroke:"#804020",strokeWidth:"1"}),n>=2&&h.createElement("line",{x1:"4",y1:"14",x2:"12",y2:"20",stroke:"#804020",strokeWidth:"0.5"}),n>=3&&h.createElement("line",{x1:"14",y1:"8",x2:"20",y2:"16",stroke:"#804020",strokeWidth:"0.5"}))})}),h.createElement("div",{style:{position:"absolute",bottom:-4,left:2,width:20,height:3,background:"#333",borderRadius:1}},h.createElement("div",{style:{width:`${t/4*100}%`,height:"100%",background:t>2?"#4a4":"#e44",borderRadius:1}})))}function ef({type:i,size:e}){return i==="apple"?h.createElement(Er,{size:e}):i==="coolant"?h.createElement(Co,{size:e}):i==="powerup-rapid"?h.createElement(Io,{size:e}):i==="powerup-triple"?h.createElement(Ro,{size:e}):i==="powerup-giant"?h.createElement(Po,{size:e}):h.createElement(Er,{size:e})}function Ql({x:i,y:e,type:t}){let n={apple:{},coolant:{},"powerup-rapid":{glow:"#ff0"},"powerup-triple":{glow:"#4af"},"powerup-giant":{glow:"#fa0"}},s=n[t]||n.apple,r=t&&t.startsWith("powerup"),o=t==="apple"?Ot.pickupApple:t==="coolant"?Ot.pickupCoolant:t==="powerup-rapid"?Ot.powerupRapid:t==="powerup-triple"?Ot.powerupTriple:t==="powerup-giant"?Ot.powerupGiant:null,a=22;return h.createElement("div",{style:{position:"absolute",left:i-14,top:e-14,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,animation:r?"pulse 0.6s infinite":"wobble 0.8s infinite",filter:s.glow?`drop-shadow(0 0 10px ${s.glow})`:"none",pointerEvents:"none"}},h.createElement(Vt,{src:o,width:a,height:a,style:{width:a,height:a},fallback:h.createElement(ef,{type:t,size:a})}))}function ec({x:i,y:e,hp:t,isHit:n,empCharge:s,invincible:r,mousePos:o,powerUp:a,cpuHeat:l,ramPressure:c}){let f=Math.atan2(o.y-e,o.x-i)*180/Math.PI,p=a==="giant",m=p?48:32,x=l>=90,y=c>=60,g="none",u="#fff";return n?g="brightness(2.5)":p?(g="drop-shadow(0 0 8px #ff0)",u="#ffd700"):x?(g="drop-shadow(0 0 6px #f00)",u="#ff6666"):y&&(g="drop-shadow(0 0 4px #0af)",u="#aaddff"),t<=2&&(u="#fcc"),h.createElement(h.Fragment,null,h.createElement("div",{style:{position:"absolute",left:o.x-14,top:o.y-14,width:28,height:28,pointerEvents:"none",zIndex:60}},h.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28"},h.createElement("circle",{cx:"14",cy:"14",r:"11",fill:"none",stroke:x?"rgba(255,100,100,0.7)":"rgba(255,255,255,0.5)",strokeWidth:"2"}),h.createElement("circle",{cx:"14",cy:"14",r:"4",fill:"none",stroke:x?"rgba(255,100,100,0.8)":"rgba(255,255,255,0.7)",strokeWidth:"2"}),h.createElement("line",{x1:"14",y1:"0",x2:"14",y2:"7",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),h.createElement("line",{x1:"14",y1:"21",x2:"14",y2:"28",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),h.createElement("line",{x1:"0",y1:"14",x2:"7",y2:"14",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),h.createElement("line",{x1:"21",y1:"14",x2:"28",y2:"14",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),h.createElement("circle",{cx:"14",cy:"14",r:"2",fill:x?"#f00":"#f44"}))),h.createElement("svg",{style:{position:"absolute",left:0,top:0,width:640,height:480,pointerEvents:"none",zIndex:45}},h.createElement("line",{x1:i,y1:e,x2:o.x,y2:o.y,stroke:"rgba(255,255,255,0.12)",strokeWidth:"1",strokeDasharray:"6,4"})),h.createElement("div",{style:{position:"absolute",left:i-m/2,top:e-m/2,width:m,height:m,transform:`rotate(${f+90}deg)`,transformOrigin:"center center",filter:g,opacity:r>0&&Math.floor(r/4)%2?.4:1,zIndex:50,pointerEvents:"none"}},h.createElement(Vt,{src:Ot.cursor,width:m,height:m,style:{width:m,height:m},fallback:h.createElement("svg",{width:m,height:m,viewBox:"0 0 28 28"},h.createElement("polygon",{points:"14,3 4,20 14,15 24,20",fill:u,stroke:"#111",strokeWidth:"1.5",strokeLinejoin:"round"}))})),s>=100&&h.createElement("div",{style:{position:"absolute",left:Math.round(i-m/2-6),top:Math.round(e-m/2-6),width:m+12,height:m+12,border:"3px solid #4af",borderRadius:"50%",animation:"pulse 1s infinite",pointerEvents:"none",zIndex:49,boxSizing:"border-box"}}),a&&h.createElement("div",{style:{position:"absolute",left:i-24,top:e-m/2-18,fontSize:8,color:"#fff",background:a==="rapid"?"#f80":a==="triple"?"#08f":"#ff0",padding:"2px 6px",borderRadius:4,fontWeight:"bold",pointerEvents:"none",zIndex:55,whiteSpace:"nowrap"}},a==="rapid"?"RAPID":a==="triple"?"TRIPLE":"GIANT"))}function tc({popup:i,onChoice:e}){let t=Number.isFinite(i==null?void 0:i.countdown)?i.countdown:100,n=i.swapped,s,r,o;i.type==="firewall"?(s="Connection Request",r="Unknown signature!",o="#d44"):i.type==="security-update"?(s="Security Patch",r="VERIFIED - INSTALL!",o="#484"):(s="Update Available",r="Checksum mismatch!",o="#d44");let l=i.type==="firewall"?n?[{l:"[Q] Deny",a:"deny",v:"default"},{l:"[E] Allow",a:"allow",v:"primary"}]:[{l:"[E] Allow",a:"allow",v:"default"},{l:"[Q] Deny",a:"deny",v:"primary"}]:i.type==="security-update"?n?[{l:"[E] Skip",a:"reject",v:"primary"},{l:"[Q] Install",a:"accept",v:"default"}]:[{l:"[Q] Install",a:"accept",v:"primary"},{l:"[E] Skip",a:"reject",v:"default"}]:n?[{l:"[Q] Later",a:"later",v:"default"},{l:"[E] Install",a:"install",v:"primary"}]:[{l:"[E] Install",a:"install",v:"default"},{l:"[Q] Later",a:"later",v:"primary"}];return h.createElement("div",{style:{position:"absolute",left:i.x,top:i.y,zIndex:400}},h.createElement(Xn,{title:s,width:260},h.createElement("p",{style:{fontSize:7,marginBottom:8}},i.type==="firewall"?"Unknown process requests access.":i.type==="security-update"?"Critical security update.":"System update available."),h.createElement("p",{style:{fontSize:7,color:o,marginBottom:10,fontWeight:i.isLegit?"bold":"normal"}},r),h.createElement("div",{style:{width:"100%",height:6,background:"#ddd",borderRadius:3,marginBottom:14}},h.createElement("div",{style:{width:`${t}%`,height:"100%",background:t>30?"#5a5":"#d55",borderRadius:3}})),h.createElement("div",{style:{display:"flex",gap:10,justifyContent:"center"}},h.createElement(Wn,{variant:l[0].v,onClick:()=>e(i,l[0].a)},l[0].l),h.createElement(Wn,{variant:l[1].v,onClick:()=>e(i,l[1].a)},l[1].l))))}function nc({setupTimer:i,folderWalls:e,setFolderWalls:t,deployables:n,setDeployables:s,onStart:r,mousePos:o}){let[a,l]=Tt(null),c=18,d=[{type:"folder",name:"Folder Wall",count:8-e.length,icon:h.createElement(Do,{size:c}),desc:"Blocks enemies"},{type:"watchdog",name:"Watchdog",count:1-n.filter(x=>x.type==="watchdog").length,icon:h.createElement(Bs,{size:c}),desc:"Auto-turret"},{type:"sticky",name:"Floppy Disk",count:2-n.filter(x=>x.type==="sticky").length,icon:h.createElement(ks,{size:c}),desc:"Decoy target"}],f=(x,y)=>{if(!a||y<50)return;let g=Math.round(x/16)*16-12,u=Math.round(y/16)*16-12;if(!(Math.abs(g+12-320)<50&&Math.abs(u+12-280)<50||[...e,...n].some(S=>Math.abs(S.x-g)<24&&Math.abs(S.y-u)<24))){if(a==="folder"&&e.length<8){t(S=>[...S,{id:Math.random(),x:g,y:u,hp:4}]);return}if(a==="watchdog"&&n.filter(S=>S.type==="watchdog").length<1){s(S=>[...S,{id:Math.random(),type:"watchdog",x:g,y:u,aimDir:7}]);return}a==="sticky"&&n.filter(S=>S.type==="sticky").length<2&&s(S=>[...S,{id:Math.random(),type:"sticky",x:g,y:u}])}},p=Math.round(o.x/16)*16-12,m=Math.round(o.y/16)*16-12;return h.createElement(h.Fragment,null,h.createElement("div",{onClick:x=>{if(!a)return;let y=x.currentTarget.getBoundingClientRect(),g=640/y.width,u=480/y.height;f((x.clientX-y.left)*g,(x.clientY-y.top)*u)},style:{position:"absolute",inset:0,top:20,cursor:a?"crosshair":"default"}},a&&o.y>50&&h.createElement("div",{style:{position:"absolute",left:p,top:m,width:24,height:24,border:"2px dashed #4a4",background:"rgba(74, 164, 74, 0.3)",pointerEvents:"none"}})),h.createElement(Xn,{title:"Tower Defense Setup",width:244,x:16,y:40},h.createElement("div",{style:{fontSize:6,marginBottom:10,color:"#666"}},"Click item, then click on desktop to place"),h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6}},d.map(x=>h.createElement("div",{key:x.type,onClick:()=>x.count>0&&l(x.type),style:{display:"flex",alignItems:"center",gap:8,padding:6,background:a===x.type?"#bef":x.count>0?"#fff":"#eee",border:`2px solid ${a===x.type?"#48a":"#aaa"}`,borderRadius:4,cursor:x.count>0?"pointer":"not-allowed",opacity:x.count>0?1:.5}},h.createElement("span",{style:{width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center"}},x.icon),h.createElement("div",{style:{flex:1}},h.createElement("div",{style:{fontSize:7,fontWeight:"bold"}},x.name),h.createElement("div",{style:{fontSize:5,color:"#888"}},x.desc," (\xD7",x.count,")"))))),h.createElement("div",{style:{marginTop:14,textAlign:"center"}},h.createElement("div",{style:{fontSize:12,marginBottom:10,color:"#e55",display:"flex",alignItems:"center",justifyContent:"center",gap:6}},h.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center"}},h.createElement(kh,{size:16})),h.createElement("span",null,i,"s")),h.createElement(Wn,{variant:"primary",onClick:r},"Start Wave"))))}function Uo({x:i,y:e,hp:t,showIcon:n=!0}){return h.createElement("div",{style:{position:"absolute",left:i-24,top:e-24,width:48,height:48,pointerEvents:"none"}},n&&h.createElement(Vt,{src:Ot.systemFolder,width:48,height:48,style:{width:48,height:48},fallback:h.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},h.createElement("rect",{x:"4",y:"8",width:"40",height:"36",rx:"3",fill:"#4a7c9c",stroke:"#2a5c7c",strokeWidth:"2"}),h.createElement("rect",{x:"4",y:"8",width:"16",height:"6",fill:"#5a9cbc"}),h.createElement("rect",{x:"18",y:"22",width:"12",height:"10",rx:"2",fill:"#ffd700",stroke:"#aa8800",strokeWidth:"1"}))}),h.createElement("div",{style:{position:"absolute",bottom:-10,left:4,width:40,height:5,background:"#333",borderRadius:2,overflow:"hidden"}},h.createElement("div",{style:{width:`${t}%`,height:"100%",background:t>50?"#4a4":"#e44"}})))}function No({x:i,y:e,clutter:t,showIcon:n=!0}){return h.createElement("div",{style:{position:"absolute",left:i,top:e,width:32,height:36,zIndex:30}},n&&h.createElement(Vt,{src:Ot.trash,width:32,height:36,style:{width:32,height:36},fallback:h.createElement("svg",{width:"32",height:"36",viewBox:"0 0 32 36"},h.createElement("path",{d:"M6 10 L8 32 L24 32 L26 10 Z",fill:"#888",stroke:"#555",strokeWidth:"1"}),h.createElement("rect",{x:"4",y:"6",width:"24",height:"4",rx:"1",fill:"#999",stroke:"#555",strokeWidth:"1"}),h.createElement("rect",{x:"12",y:"3",width:"8",height:"4",rx:"1",fill:"#777",stroke:"#555",strokeWidth:"0.5"}),h.createElement("line",{x1:"11",y1:"14",x2:"11",y2:"28",stroke:"#666",strokeWidth:"1"}),h.createElement("line",{x1:"16",y1:"14",x2:"16",y2:"28",stroke:"#666",strokeWidth:"1"}),h.createElement("line",{x1:"21",y1:"14",x2:"21",y2:"28",stroke:"#666",strokeWidth:"1"}))}),t.length>0&&h.createElement("div",{style:{position:"absolute",top:-6,right:-6,width:18,height:18,background:"#e55",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"#fff",fontWeight:"bold",border:"2px solid #fff",animation:"pulse 1s infinite"}},t.length))}var Ba="180";var md=0,Vc=1,gd=2;var Wc=1,ka=2,Si=3,Bi=0,xn=1,In=2,Hi=0,ms=1,Zn=2,Xc=3,qc=4,xd=5,ns=100,yd=101,_d=102,vd=103,Md=104,Sd=200,bd=201,wd=202,Ed=203,oa=204,aa=205,Td=206,Ad=207,Cd=208,Id=209,Rd=210,Pd=211,Dd=212,Ld=213,Ud=214,za=0,Ha=1,Ga=2,gs=3,Va=4,Wa=5,Xa=6,qa=7,Yc=0,Nd=1,Fd=2,Gi=0,Od=1,Bd=2,kd=3,Ya=4,zd=5,Hd=6,Gd=7;var Zc=300,Ts=301,As=302,Za=303,Ja=304,po=306,la=1e3,Cn=1001,ca=1002,Yn=1003,Vd=1004;var mo=1005;var hi=1006,$a=1007;var os=1008;var fi=1009,Jc=1010,$c=1011,dr=1012,Ka=1013,as=1014,bi=1015,ur=1016,ja=1017,Qa=1018,fr=1020,Kc=35902,jc=35899,Qc=1021,eh=1022,Jn=1023,Qs=1026,pr=1027,th=1028,el=1029,nh=1030,tl=1031;var nl=1033,go=33776,xo=33777,yo=33778,_o=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,ll=37492,cl=37496,hl=37808,dl=37809,ul=37810,fl=37811,pl=37812,ml=37813,gl=37814,xl=37815,yl=37816,_l=37817,vl=37818,Ml=37819,Sl=37820,bl=37821,wl=36492,El=36494,Tl=36495,Al=36283,Cl=36284,Il=36285,Rl=36286;var Nr=2300,ha=2301,ra=2302,Pc=2400,Dc=2401,Lc=2402;var Wd=3200,Xd=3201;var ih=0,qd=1,Vi="",Sn="srgb",xs="srgb-linear",Fr="linear",Lt="srgb";var fs=7680;var Uc=519,Yd=512,Zd=513,Jd=514,sh=515,$d=516,Kd=517,jd=518,Qd=519,Nc=35044;var rh="300 es",ci=2e3,Or=2001;var ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ic=Math.PI/180,da=180/Math.PI;function mr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function tf(i,e){return(i%e+e)%e}function sc(i,e,t){return(1-t)*i+t*e}function Tr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3],p=r[o+0],m=r[o+1],x=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=y;return}if(f!==y||l!==p||c!==m||d!==x){let g=1-a,u=l*p+c*m+d*x+f*y,E=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){let A=Math.sqrt(S),C=Math.atan2(A,u*E);g=Math.sin(g*C)/A,a=Math.sin(a*C)/A}let v=a*E;if(l=l*g+p*v,c=c*g+m*v,d=d*g+x*v,f=f*g+y*v,g===1-a){let A=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=A,c*=A,d*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[o],p=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+d*f+l*m-c*p,e[t+1]=l*x+d*p+c*f-a*m,e[t+2]=c*x+d*m+a*p-l*f,e[t+3]=d*x-a*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),f=a(r/2),p=l(n/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*d*f+c*m*x,this._y=c*m*f-p*d*x,this._z=c*d*x+p*m*f,this._w=c*d*f-p*m*x;break;case"YXZ":this._x=p*d*f+c*m*x,this._y=c*m*f-p*d*x,this._z=c*d*x-p*m*f,this._w=c*d*f+p*m*x;break;case"ZXY":this._x=p*d*f-c*m*x,this._y=c*m*f+p*d*x,this._z=c*d*x+p*m*f,this._w=c*d*f-p*m*x;break;case"ZYX":this._x=p*d*f-c*m*x,this._y=c*m*f+p*d*x,this._z=c*d*x-p*m*f,this._w=c*d*f+p*m*x;break;case"YZX":this._x=p*d*f+c*m*x,this._y=c*m*f+p*d*x,this._z=c*d*x-p*m*f,this._w=c*d*f-p*m*x;break;case"XZY":this._x=p*d*f-c*m*x,this._y=c*m*f-p*d*x,this._z=c*d*x+p*m*f,this._w=c*d*f+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],f=t[10],p=n+a+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-t)*d)/c,p=Math.sin(t*d)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*d,this.y=n+l*d+a*c-r*f,this.z=s+l*f+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rc.copy(this).projectOnVector(e),this.sub(rc)}reflect(e){return this.sub(rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rc=new F,Gh=new zi,yt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],p=n[2],m=n[5],x=n[8],y=s[0],g=s[3],u=s[6],E=s[1],S=s[4],v=s[7],A=s[2],C=s[5],L=s[8];return r[0]=o*y+a*E+l*A,r[3]=o*g+a*S+l*C,r[6]=o*u+a*v+l*L,r[1]=c*y+d*E+f*A,r[4]=c*g+d*S+f*C,r[7]=c*u+d*v+f*L,r[2]=p*y+m*E+x*A,r[5]=p*g+m*S+x*C,r[8]=p*u+m*v+x*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,p=a*l-d*r,m=c*r-o*l,x=t*f+n*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=f*y,e[1]=(s*c-d*n)*y,e[2]=(a*n-s*o)*y,e[3]=p*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oc.makeScale(e,t)),this}rotate(e){return this.premultiply(oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oc=new yt;function oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eu(){let i=Br("canvas");return i.style.display="block",i}var Vh={};function er(i){i in Vh||(Vh[i]=!0,console.warn(i))}function tu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wh=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nf(){let i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}var At=nf();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zs,ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=Br("canvas")),zs.width=e.width,zs.height=e.height;let s=zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sf=0,tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ac(s[o].image)):r.push(ac(s[o]))}else r=ac(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ac(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rf=0,lc=new F,Nn=class i extends ki{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=hi,o=os,a=Jn,l=fi,c=i.DEFAULT_ANISOTROPY,d=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=mr(),this.name="",this.source=new tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lc).x}get height(){return this.source.getSize(lc).y}get depth(){return this.source.getSize(lc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case la:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case la:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Zc;Nn.DEFAULT_ANISOTROPY=1;var qt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],x=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+y)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(m+1)/2,A=(u+1)/2,C=(d+p)/4,L=(f+y)/4,U=(x+g)/4;return S>v&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=L/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=U/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=L/r,s=U/r),this.set(n,s,r,t),this}let E=Math.sqrt((g-x)*(g-x)+(f-y)*(f-y)+(p-d)*(p-d));return Math.abs(E)<.001&&(E=1),this.x=(g-x)/E,this.y=(f-y)/E,this.z=(p-d)/E,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fa=class extends ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Nn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new tr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},kr=class extends Nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends Nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var is=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Oo.subVectors(this.max,Ar),Hs.subVectors(e.a,Ar),Gs.subVectors(e.b,Ar),Vs.subVectors(e.c,Ar),Ji.subVectors(Gs,Hs),$i.subVectors(Vs,Gs),cs.subVectors(Hs,Vs);let t=[0,-Ji.z,Ji.y,0,-$i.z,$i.y,0,-cs.z,cs.y,Ji.z,0,-Ji.x,$i.z,0,-$i.x,cs.z,0,-cs.x,-Ji.y,Ji.x,0,-$i.y,$i.x,0,-cs.y,cs.x,0];return!cc(t,Hs,Gs,Vs,Oo)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,Hs,Gs,Vs,Oo))?!1:(Bo.crossVectors(Ji,$i),t=[Bo.x,Bo.y,Bo.z],cc(t,Hs,Gs,Vs,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new F,new F,new F,new F,new F,new F,new F,new F],oi=new F,Fo=new is,Hs=new F,Gs=new F,Vs=new F,Ji=new F,$i=new F,cs=new F,Ar=new F,Oo=new F,Bo=new F,hs=new F;function cc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hs.fromArray(i,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),d=n.dot(hs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var of=new is,Cr=new F,hc=new F,ys=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):of.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(hc)),this.expandByPoint(Cr.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Li=new F,dc=new F,ko=new F,Ki=new F,uc=new F,zo=new F,fc=new F,zr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){dc.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(dc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ko),a=Ki.dot(this.direction),l=-Ki.dot(ko),c=Ki.lengthSq(),d=Math.abs(1-o*o),f,p,m,x;if(d>0)if(f=o*l-a,p=o*a-l,x=r*d,f>=0)if(p>=-x)if(p<=x){let y=1/d;f*=y,p*=y,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dc).addScaledVector(ko,p),m}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),d>=0?(r=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,s,r){uc.subVectors(t,e),zo.subVectors(n,e),fc.crossVectors(uc,zo);let o=this.direction.dot(fc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let l=a*this.direction.dot(zo.crossVectors(Ki,zo));if(l<0)return null;let c=a*this.direction.dot(uc.cross(Ki));if(c<0||l+c>o)return null;let d=-a*Ki.dot(fc);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class i{constructor(e,t,n,s,r,o,a,l,c,d,f,p,m,x,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,f,p,m,x,y,g)}set(e,t,n,s,r,o,a,l,c,d,f,p,m,x,y,g){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=m,u[7]=x,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*d,m=o*f,x=a*d,y=a*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=p-y*c,t[9]=-a*l,t[2]=y-p*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*d,m=l*f,x=c*d,y=c*f;t[0]=p+y*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=m*a-x,t[6]=y+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*d,m=l*f,x=c*d,y=c*f;t[0]=p-y*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*d,t[9]=y-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*d,m=o*f,x=a*d,y=a*f;t[0]=l*d,t[4]=x*c-m,t[8]=p*c+y,t[1]=l*f,t[5]=y*c+p,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,x=a*l,y=a*c;t[0]=l*d,t[4]=y-p*f,t[8]=x*f+m,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*f+x,t[10]=p-y*f}else if(e.order==="XZY"){let p=o*l,m=o*c,x=a*l,y=a*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=p*f+y,t[5]=o*d,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*d,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(af,e,lf)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),ji.crossVectors(n,On),ji.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ji.crossVectors(n,On)),ji.normalize(),Ho.crossVectors(On,ji),s[0]=ji.x,s[4]=Ho.x,s[8]=On.x,s[1]=ji.y,s[5]=Ho.y,s[9]=On.y,s[2]=ji.z,s[6]=Ho.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],p=n[9],m=n[13],x=n[2],y=n[6],g=n[10],u=n[14],E=n[3],S=n[7],v=n[11],A=n[15],C=s[0],L=s[4],U=s[8],b=s[12],M=s[1],D=s[5],k=s[9],G=s[13],W=s[2],J=s[6],X=s[10],oe=s[14],Z=s[3],Se=s[7],De=s[11],Oe=s[15];return r[0]=o*C+a*M+l*W+c*Z,r[4]=o*L+a*D+l*J+c*Se,r[8]=o*U+a*k+l*X+c*De,r[12]=o*b+a*G+l*oe+c*Oe,r[1]=d*C+f*M+p*W+m*Z,r[5]=d*L+f*D+p*J+m*Se,r[9]=d*U+f*k+p*X+m*De,r[13]=d*b+f*G+p*oe+m*Oe,r[2]=x*C+y*M+g*W+u*Z,r[6]=x*L+y*D+g*J+u*Se,r[10]=x*U+y*k+g*X+u*De,r[14]=x*b+y*G+g*oe+u*Oe,r[3]=E*C+S*M+v*W+A*Z,r[7]=E*L+S*D+v*J+A*Se,r[11]=E*U+S*k+v*X+A*De,r[15]=E*b+S*G+v*oe+A*Oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],m=e[14],x=e[3],y=e[7],g=e[11],u=e[15];return x*(+r*l*f-s*c*f-r*a*p+n*c*p+s*a*m-n*l*m)+y*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*d-r*l*d)+g*(+t*c*f-t*a*m-r*o*f+n*o*m+r*a*d-n*c*d)+u*(-s*a*d-t*l*f+t*a*p+s*o*f-n*o*p+n*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],m=e[11],x=e[12],y=e[13],g=e[14],u=e[15],E=f*g*c-y*p*c+y*l*m-a*g*m-f*l*u+a*p*u,S=x*p*c-d*g*c-x*l*m+o*g*m+d*l*u-o*p*u,v=d*y*c-x*f*c+x*a*m-o*y*m-d*a*u+o*f*u,A=x*f*l-d*y*l-x*a*p+o*y*p+d*a*g-o*f*g,C=t*E+n*S+s*v+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=E*L,e[1]=(y*p*r-f*g*r-y*s*m+n*g*m+f*s*u-n*p*u)*L,e[2]=(a*g*r-y*l*r+y*s*c-n*g*c-a*s*u+n*l*u)*L,e[3]=(f*l*r-a*p*r-f*s*c+n*p*c+a*s*m-n*l*m)*L,e[4]=S*L,e[5]=(d*g*r-x*p*r+x*s*m-t*g*m-d*s*u+t*p*u)*L,e[6]=(x*l*r-o*g*r-x*s*c+t*g*c+o*s*u-t*l*u)*L,e[7]=(o*p*r-d*l*r+d*s*c-t*p*c-o*s*m+t*l*m)*L,e[8]=v*L,e[9]=(x*f*r-d*y*r-x*n*m+t*y*m+d*n*u-t*f*u)*L,e[10]=(o*y*r-x*a*r+x*n*c-t*y*c-o*n*u+t*a*u)*L,e[11]=(d*a*r-o*f*r-d*n*c+t*f*c+o*n*m-t*a*m)*L,e[12]=A*L,e[13]=(d*y*s-x*f*s+x*n*p-t*y*p-d*n*g+t*f*g)*L,e[14]=(x*a*s-o*y*s-x*n*l+t*y*l+o*n*g-t*a*g)*L,e[15]=(o*f*s-d*a*s+d*n*l-t*f*l-o*n*p+t*a*p)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,f=a+a,p=r*c,m=r*d,x=r*f,y=o*d,g=o*f,u=a*f,E=l*c,S=l*d,v=l*f,A=n.x,C=n.y,L=n.z;return s[0]=(1-(y+u))*A,s[1]=(m+v)*A,s[2]=(x-S)*A,s[3]=0,s[4]=(m-v)*C,s[5]=(1-(p+u))*C,s[6]=(g+E)*C,s[7]=0,s[8]=(x+S)*L,s[9]=(g-E)*L,s[10]=(1-(p+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ws.set(s[0],s[1],s[2]).length(),o=Ws.set(s[4],s[5],s[6]).length(),a=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);let c=1/r,d=1/o,f=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=d,ai.elements[5]*=d,ai.elements[6]*=d,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,t.setFromRotationMatrix(ai),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ci,l=!1){let c=this.elements,d=2*r/(t-e),f=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s),x,y;if(l)x=r/(o-r),y=o*r/(o-r);else if(a===ci)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Or)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ci,l=!1){let c=this.elements,d=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s),x,y;if(l)x=1/(o-r),y=o/(o-r);else if(a===ci)x=-2/(o-r),y=-(o+r)/(o-r);else if(a===Or)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ws=new F,ai=new Xt,af=new F(0,0,0),lf=new F(1,1,1),ji=new F,Ho=new F,On=new F,qh=new Xt,Yh=new zi,di=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cf=0,Zh=new F,Xs=new zi,Ui=new Xt,Go=new F,Ir=new F,hf=new F,df=new zi,Jh=new F(1,0,0),$h=new F(0,1,0),Kh=new F(0,0,1),jh={type:"added"},uf={type:"removed"},qs={type:"childadded",child:null},pc={type:"childremoved",child:null},rn=class i extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new di,n=new zi,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new yt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Ir,Go,this.up):Ui.lookAt(Go,Ir,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uf),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};rn.DEFAULT_UP=new F(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new F,Ni=new F,mc=new F,Fi=new F,Ys=new F,Zs=new F,Qh=new F,gc=new F,xc=new F,yc=new F,_c=new qt,vc=new qt,Mc=new qt,ts=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){li.subVectors(s,t),Ni.subVectors(n,t),mc.subVectors(e,t);let o=li.dot(li),a=li.dot(Ni),l=li.dot(mc),c=Ni.dot(Ni),d=Ni.dot(mc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*l-a*d)*p,x=(o*d-a*l)*p;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return _c.setScalar(0),vc.setScalar(0),Mc.setScalar(0),_c.fromBufferAttribute(e,t),vc.fromBufferAttribute(e,n),Mc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(_c,r.x),o.addScaledVector(vc,r.y),o.addScaledVector(Mc,r.z),o}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),Ni.subVectors(e,t),li.cross(Ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ys.subVectors(s,n),Zs.subVectors(r,n),gc.subVectors(e,n);let l=Ys.dot(gc),c=Zs.dot(gc);if(l<=0&&c<=0)return t.copy(n);xc.subVectors(e,s);let d=Ys.dot(xc),f=Zs.dot(xc);if(d>=0&&f<=d)return t.copy(s);let p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Ys,o);yc.subVectors(e,r);let m=Ys.dot(yc),x=Zs.dot(yc);if(x>=0&&m<=x)return t.copy(r);let y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Zs,a);let g=d*x-m*f;if(g<=0&&f-d>=0&&m-x>=0)return Qh.subVectors(r,s),a=(f-d)/(f-d+(m-x)),t.copy(s).addScaledVector(Qh,a);let u=1/(g+y+p);return o=y*u,a=p*u,t.copy(n).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function Sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ut=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=tf(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Sc(o,r,e+1/3),this.g=Sc(o,r,e),this.b=Sc(o,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){let n=nu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return At.workingToColorSpace(Mn.copy(this),e),Math.round(vt(Mn.r*255,0,255))*65536+Math.round(vt(Mn.g*255,0,255))*256+Math.round(vt(Mn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Sn){At.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Vo);let n=sc(Qi.h,Vo.h,t),s=sc(Qi.s,Vo.s,t),r=sc(Qi.l,Vo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new ut;ut.NAMES=nu;var ff=0,vi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=ms,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=aa,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==aa&&(n.blendDst=this.blendDst),this.blendEquation!==ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},dn=class extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tn=new F,Wo=new Pe,pf=0,bn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nc,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),n=Ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),n=Ln(n,this.array),s=Ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),n=Ln(n,this.array),s=Ln(s,this.array),r=Ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}};var Gr=class extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vr=class extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}},mf=0,qn=new Xt,bc=new rn,Js=new F,Bn=new is,Rr=new is,hn=new F,un=class i extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oh(e)?Vr:Gr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Bn.min,Rr.min),Bn.expandByPoint(hn),hn.addVectors(Bn.max,Rr.max),Bn.expandByPoint(hn)):(Bn.expandByPoint(Rr.min),Bn.expandByPoint(Rr.max))}Bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)hn.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(e,c),hn.add(Js)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new F,l[U]=new F;let c=new F,d=new F,f=new F,p=new Pe,m=new Pe,x=new Pe,y=new F,g=new F;function u(U,b,M){c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,b),x.fromBufferAttribute(r,M),d.sub(c),f.sub(c),m.sub(p),x.sub(p);let D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(D),a[U].add(y),a[b].add(y),a[M].add(y),l[U].add(g),l[b].add(g),l[M].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,b=E.length;U<b;++U){let M=E[U],D=M.start,k=M.count;for(let G=D,W=D+k;G<W;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let S=new F,v=new F,A=new F,C=new F;function L(U){A.fromBufferAttribute(s,U),C.copy(A);let b=a[U];S.copy(b),S.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(C,b);let D=v.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,D)}for(let U=0,b=E.length;U<b;++U){let M=E[U],D=M.start,k=M.count;for(let G=D,W=D+k;G<W;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,d=new F,f=new F;if(e)for(let p=0,m=e.count;p<m;p+=3){let x=e.getX(p+0),y=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,f=a.normalized,p=new c.constructor(l.length*d),m=0,x=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*d;for(let u=0;u<d;u++)p[x++]=c[m++]}return new bn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,f=c.length;d<f;d++){let p=c[d],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],f=r[c];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ed=new Xt,ds=new zr,Xo=new ys,td=new F,qo=new F,Yo=new F,Zo=new F,wc=new F,Jo=new F,nd=new F,$o=new F,Me=class extends rn{constructor(e=new un,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],f=r[l];d!==0&&(wc.fromBufferAttribute(f,e),o?Jo.addScaledVector(wc,d):Jo.addScaledVector(wc.sub(t),d))}t.add(Jo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(Xo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Xo,td)===null||ds.origin.distanceToSquared(td)>(e.far-e.near)**2))&&(ed.copy(r).invert(),ds.copy(e.ray).applyMatrix4(ed),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){let g=p[x],u=o[g.materialIndex],E=Math.max(g.start,m.start),S=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let v=E,A=S;v<A;v+=3){let C=a.getX(v),L=a.getX(v+1),U=a.getX(v+2);s=Ko(this,u,e,n,c,d,f,C,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=x,u=y;g<u;g+=3){let E=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);s=Ko(this,o,e,n,c,d,f,E,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=p.length;x<y;x++){let g=p[x],u=o[g.materialIndex],E=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let v=E,A=S;v<A;v+=3){let C=v,L=v+1,U=v+2;s=Ko(this,u,e,n,c,d,f,C,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=x,u=y;g<u;g+=3){let E=g,S=g+1,v=g+2;s=Ko(this,o,e,n,c,d,f,E,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function gf(i,e,t,n,s,r,o,a){let l;if(e.side===xn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Bi,a),l===null)return null;$o.copy(a),$o.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($o);return c<t.near||c>t.far?null:{distance:c,point:$o.clone(),object:i}}function Ko(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,qo),i.getVertexPosition(l,Yo),i.getVertexPosition(c,Zo);let d=gf(i,e,t,n,qo,Yo,Zo,nd);if(d){let f=new F;ts.getBarycoord(nd,qo,Yo,Zo,f),s&&(d.uv=ts.getInterpolatedAttribute(s,a,l,c,f,new Pe)),r&&(d.uv1=ts.getInterpolatedAttribute(r,a,l,c,f,new Pe)),o&&(d.normal=ts.getInterpolatedAttribute(o,a,l,c,f,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new F,materialIndex:0};ts.getNormal(qo,Yo,Zo,p.normal),d.face=p,d.barycoord=f}return d}var gn=class i extends un{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],f=[],p=0,m=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(f,2));function x(y,g,u,E,S,v,A,C,L,U,b){let M=v/L,D=A/U,k=v/2,G=A/2,W=C/2,J=L+1,X=U+1,oe=0,Z=0,Se=new F;for(let De=0;De<X;De++){let Oe=De*D-G;for(let ot=0;ot<J;ot++){let mt=ot*M-k;Se[y]=mt*E,Se[g]=Oe*S,Se[u]=W,c.push(Se.x,Se.y,Se.z),Se[y]=0,Se[g]=0,Se[u]=C>0?1:-1,d.push(Se.x,Se.y,Se.z),f.push(ot/L),f.push(1-De/U),oe+=1}}for(let De=0;De<U;De++)for(let Oe=0;Oe<L;Oe++){let ot=p+Oe+J*De,mt=p+Oe+J*(De+1),ft=p+(Oe+1)+J*(De+1),st=p+(Oe+1)+J*De;l.push(ot,mt,st),l.push(mt,ft,st),Z+=6}a.addGroup(m,Z,b),m+=Z,p+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function En(i){let e={};for(let t=0;t<i.length;t++){let n=Cs(i[t]);for(let s in n)e[s]=n[s]}return e}function xf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var iu={clone:Cs,merge:En},yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wr=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},es=new F,id=new Pe,sd=new Pe,Un=class extends Wr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,id,sd),t.subVectors(sd,id)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ic*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$s=-90,Ks=1,ma=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un($s,Ks,e,t);s.layers=this.layers,this.add(s);let r=new Un($s,Ks,e,t);r.layers=this.layers,this.add(r);let o=new Un($s,Ks,e,t);o.layers=this.layers,this.add(o);let a=new Un($s,Ks,e,t);a.layers=this.layers,this.add(a);let l=new Un($s,Ks,e,t);l.layers=this.layers,this.add(l);let c=new Un($s,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(f,p,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Xr=class extends Nn{constructor(e=[],t=Ts,n,s,r,o,a,l,c,d){super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gn(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Hi});r.uniforms.tEquirect.value=t;let o=new Me(s,r),a=t.minFilter;return t.minFilter===os&&(t.minFilter=hi),new ma(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},sn=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vf={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var qr=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ec=new F,Mf=new F,Sf=new yt,yi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ec.subVectors(n,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ec),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Sf.getNormalMatrix(e),s=this.coplanarPoint(Ec).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new ys,bf=new Pe(.5,.5),jo=new F,ir=class{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],f=r[5],p=r[6],m=r[7],x=r[8],y=r[9],g=r[10],u=r[11],E=r[12],S=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,m-d,u-x,A-E).normalize(),s[1].setComponents(c+o,m+d,u+x,A+E).normalize(),s[2].setComponents(c+a,m+f,u+y,A+S).normalize(),s[3].setComponents(c-a,m-f,u-y,A-S).normalize(),n)s[4].setComponents(l,p,g,v).normalize(),s[5].setComponents(c-l,m-p,u-g,A-v).normalize();else if(s[4].setComponents(c-l,m-p,u-g,A-v).normalize(),t===ci)s[5].setComponents(c+l,m+p,u+g,A+v).normalize();else if(t===Or)s[5].setComponents(l,p,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=bf.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(jo.x=s.normal.x>0?e.max.x:e.min.x,jo.y=s.normal.y>0?e.max.y:e.min.y,jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sr=class extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xa=new F,ya=new F,rd=new Xt,Pr=new zr,Qo=new ys,Tc=new F,od=new F,_a=class extends rn{constructor(e=new un,t=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xa.fromBufferAttribute(t,s-1),ya.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xa.distanceTo(ya);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;rd.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){let m=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let y=m,g=x-1;y<g;y+=c){let u=d.getX(y),E=d.getX(y+1),S=ea(this,e,Pr,l,u,E,y);S&&t.push(S)}if(this.isLineLoop){let y=d.getX(x-1),g=d.getX(m),u=ea(this,e,Pr,l,y,g,x-1);u&&t.push(u)}}else{let m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let y=m,g=x-1;y<g;y+=c){let u=ea(this,e,Pr,l,y,y+1,y);u&&t.push(u)}if(this.isLineLoop){let y=ea(this,e,Pr,l,x-1,m,x-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ea(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(xa.fromBufferAttribute(a,s),ya.fromBufferAttribute(a,r),t.distanceSqToSegment(xa,ya,Tc,od)>n)return;Tc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Tc);if(!(c<e.near||c>e.far))return{distance:c,point:od.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ad=new F,ld=new F,Yr=class extends _a{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ad.fromBufferAttribute(t,s),ld.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ad.distanceTo(ld);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _s=class extends Nn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zr=class extends Nn{constructor(e,t,n=as,s,r,o,a=Yn,l=Yn,c,d=Qs,f=1){if(d!==Qs&&d!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jr=class extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rr=class i extends un{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],d=t/2,f=Math.PI/2*e,p=t,m=2*f+p,x=n*2+r,y=s+1,g=new F,u=new F;for(let E=0;E<=x;E++){let S=0,v=0,A=0,C=0;if(E<=n){let b=E/n,M=b*Math.PI/2;v=-d-e*Math.cos(M),A=e*Math.sin(M),C=-e*Math.cos(M),S=b*f}else if(E<=n+r){let b=(E-n)/r;v=-d+b*t,A=e,C=0,S=f+b*p}else{let b=(E-n-r)/n,M=b*Math.PI/2;v=d+e*Math.sin(M),A=e*Math.cos(M),C=e*Math.sin(M),S=f+p+b*f}let L=Math.max(0,Math.min(1,S/m)),U=0;E===0?U=.5/s:E===x&&(U=-.5/s);for(let b=0;b<=s;b++){let M=b/s,D=M*Math.PI*2,k=Math.sin(D),G=Math.cos(D);u.x=-A*G,u.y=v,u.z=A*k,a.push(u.x,u.y,u.z),g.set(-A*G,C,A*k),g.normalize(),l.push(g.x,g.y,g.z),c.push(M+U,L)}if(E>0){let b=(E-1)*y;for(let M=0;M<s;M++){let D=b+M,k=b+M+1,G=E*y+M,W=E*y+M+1;o.push(D,k,G),o.push(k,W,G)}}}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var fn=class i extends un{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],p=[],m=[],x=0,y=[],g=n/2,u=0;E(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new Ct(f,3)),this.setAttribute("normal",new Ct(p,3)),this.setAttribute("uv",new Ct(m,2));function E(){let v=new F,A=new F,C=0,L=(t-e)/n;for(let U=0;U<=r;U++){let b=[],M=U/r,D=M*(t-e)+e;for(let k=0;k<=s;k++){let G=k/s,W=G*l+a,J=Math.sin(W),X=Math.cos(W);A.x=D*J,A.y=-M*n+g,A.z=D*X,f.push(A.x,A.y,A.z),v.set(J,L,X).normalize(),p.push(v.x,v.y,v.z),m.push(G,1-M),b.push(x++)}y.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){let M=y[b][U],D=y[b+1][U],k=y[b+1][U+1],G=y[b][U+1];(e>0||b!==0)&&(d.push(M,D,G),C+=3),(t>0||b!==r-1)&&(d.push(D,k,G),C+=3)}c.addGroup(u,C,0),u+=C}function S(v){let A=x,C=new Pe,L=new F,U=0,b=v===!0?e:t,M=v===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*M,0),p.push(0,M,0),m.push(.5,.5),x++;let D=x;for(let k=0;k<=s;k++){let W=k/s*l+a,J=Math.cos(W),X=Math.sin(W);L.x=b*X,L.y=g*M,L.z=b*J,f.push(L.x,L.y,L.z),p.push(0,M,0),C.x=J*.5+.5,C.y=X*.5*M+.5,m.push(C.x,C.y),x++}for(let k=0;k<s;k++){let G=A+k,W=D+k;v===!0?d.push(W,W+1,G):d.push(W+1,W,G),U+=3}c.addGroup(u,U,v===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$r=class i extends fn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kr=class i extends un{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),d(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let S=new F,v=new F,A=new F;for(let C=0;C<t.length;C+=3)m(t[C+0],S),m(t[C+1],v),m(t[C+2],A),l(S,v,A,E)}function l(E,S,v,A){let C=A+1,L=[];for(let U=0;U<=C;U++){L[U]=[];let b=E.clone().lerp(v,U/C),M=S.clone().lerp(v,U/C),D=C-U;for(let k=0;k<=D;k++)k===0&&U===C?L[U][k]=b:L[U][k]=b.clone().lerp(M,k/D)}for(let U=0;U<C;U++)for(let b=0;b<2*(C-U)-1;b++){let M=Math.floor(b/2);b%2===0?(p(L[U][M+1]),p(L[U+1][M]),p(L[U][M])):(p(L[U][M+1]),p(L[U+1][M+1]),p(L[U+1][M]))}}function c(E){let S=new F;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(E),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function d(){let E=new F;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];let v=g(E)/2/Math.PI+.5,A=u(E)/Math.PI+.5;o.push(v,1-A)}x(),f()}function f(){for(let E=0;E<o.length;E+=6){let S=o[E+0],v=o[E+2],A=o[E+4],C=Math.max(S,v,A),L=Math.min(S,v,A);C>.9&&L<.1&&(S<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function p(E){r.push(E.x,E.y,E.z)}function m(E,S){let v=E*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function x(){let E=new F,S=new F,v=new F,A=new F,C=new Pe,L=new Pe,U=new Pe;for(let b=0,M=0;b<r.length;b+=9,M+=6){E.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),C.set(o[M+0],o[M+1]),L.set(o[M+2],o[M+3]),U.set(o[M+4],o[M+5]),A.copy(E).add(S).add(v).divideScalar(3);let D=g(A);y(C,M+0,E,D),y(L,M+2,S,D),y(U,M+4,v,D)}}function y(E,S,v,A){A<0&&E.x===1&&(o[S]=E.x-1),v.x===0&&v.z===0&&(o[S]=A/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let d=n[s],p=n[s+1]-d,m=(o-d)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Pe:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],o=[],a=new F,l=new Xt;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(vt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(vt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},or=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*d-m*f+this.aX,c=p*f+m*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},va=class extends or{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,f){let p=(o-r)/c-(a-r)/(c+d)+(a-o)/d,m=(a-o)/d-(l-o)/(d+f)+(l-a)/f;p*=d,m*=d,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ta=new F,Ac=new lh,Cc=new lh,Ic=new lh,Ma=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(ta.subVectors(s[0],s[1]).add(s[0]),c=ta);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=ta),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),m),y=Math.pow(f.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(d),m);y<1e-4&&(y=1),x<1e-4&&(x=y),g<1e-4&&(g=y),Ac.initNonuniformCatmullRom(c.x,f.x,p.x,d.x,x,y,g),Cc.initNonuniformCatmullRom(c.y,f.y,p.y,d.y,x,y,g),Ic.initNonuniformCatmullRom(c.z,f.z,p.z,d.z,x,y,g)}else this.curveType==="catmullrom"&&(Ac.initCatmullRom(c.x,f.x,p.x,d.x,this.tension),Cc.initCatmullRom(c.y,f.y,p.y,d.y,this.tension),Ic.initCatmullRom(c.z,f.z,p.z,d.z,this.tension));return n.set(Ac.calc(l),Cc.calc(l),Ic.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function wf(i,e){let t=1-i;return t*t*e}function Ef(i,e){return 2*(1-i)*i*e}function Tf(i,e){return i*i*e}function Lr(i,e,t,n){return wf(i,e)+Ef(i,t)+Tf(i,n)}function Af(i,e){let t=1-i;return t*t*t*e}function Cf(i,e){let t=1-i;return 3*t*t*i*e}function If(i,e){return 3*(1-i)*i*i*e}function Rf(i,e){return i*i*i*e}function Ur(i,e,t,n,s){return Af(i,e)+Cf(i,t)+If(i,n)+Rf(i,s)}var jr=class extends kn{constructor(e=new Pe,t=new Pe,n=new Pe,s=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Pe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,s.x,r.x,o.x,a.x),Ur(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sa=class extends kn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,s.x,r.x,o.x,a.x),Ur(e,s.y,r.y,o.y,a.y),Ur(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qr=class extends kn{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends kn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends kn{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(e,s.x,r.x,o.x),Lr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends kn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(e,s.x,r.x,o.x),Lr(e,s.y,r.y,o.y),Lr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(cd(a,l.x,c.x,d.x,f.x),cd(a,l.y,c.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Pe().fromArray(s))}return this}},Fc=Object.freeze({__proto__:null,ArcCurve:va,CatmullRomCurve3:Ma,CubicBezierCurve:jr,CubicBezierCurve3:Sa,EllipseCurve:or,LineCurve:Qr,LineCurve3:ba,QuadraticBezierCurve:eo,QuadraticBezierCurve3:wa,SplineCurve:to}),Ea=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Fc[s.type]().fromJSON(s))}return this}},no=class extends Ea{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qr(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new eo(this.currentPoint.clone(),new Pe(e,t),new Pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new jr(this.currentPoint.clone(),new Pe(e,t),new Pe(n,s),new Pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new to(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new or(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vs=class extends no{constructor(e){super(e),this.uuid=mr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new no().fromJSON(s))}return this}};function Pf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=su(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ff(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let d=-1/0,f=-1/0;for(let p=t;p<s;p+=t){let m=i[p],x=i[p+1];m<a&&(a=m),x<l&&(l=x),m>d&&(d=m),x>f&&(f=x)}c=Math.max(d-a,f-l),c=c!==0?32767/c:0}return io(r,o,t,a,l,c,0),o}function su(i,e,t,n,s){let r;if(s===Yf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=hd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=hd(o/n|0,i[o],i[o+1],r);return r&&ar(r,r.next)&&(ro(r),r=r.next),r}function Ms(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ar(t,t.next)||Wt(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function io(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Hf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Lf(i,n,s,r):Df(i)){e.push(l.i,i.i,c.i),ro(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Uf(Ms(i),e),io(i,e,t,n,s,r,2)):o===2&&Nf(i,e,t,n,s,r):io(Ms(i),e,t,n,s,r,1);break}}}function Df(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(s,r,o),f=Math.min(a,l,c),p=Math.max(s,r,o),m=Math.max(a,l,c),x=n.next;for(;x!==e;){if(x.x>=d&&x.x<=p&&x.y>=f&&x.y<=m&&Dr(s,a,r,l,o,c,x.x,x.y)&&Wt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Lf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,d=s.y,f=r.y,p=o.y,m=Math.min(a,l,c),x=Math.min(d,f,p),y=Math.max(a,l,c),g=Math.max(d,f,p),u=Oc(m,x,e,t,n),E=Oc(y,g,e,t,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=u&&v&&v.z<=E;){if(S.x>=m&&S.x<=y&&S.y>=x&&S.y<=g&&S!==s&&S!==o&&Dr(a,d,l,f,c,p,S.x,S.y)&&Wt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=m&&v.x<=y&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&Dr(a,d,l,f,c,p,v.x,v.y)&&Wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=u;){if(S.x>=m&&S.x<=y&&S.y>=x&&S.y<=g&&S!==s&&S!==o&&Dr(a,d,l,f,c,p,S.x,S.y)&&Wt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=E;){if(v.x>=m&&v.x<=y&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&Dr(a,d,l,f,c,p,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Uf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ar(n,s)&&ou(n,t,t.next,s)&&so(n,s)&&so(s,n)&&(e.push(n.i,t.i,s.i),ro(t),ro(t.next),t=i=s),t=t.next}while(t!==i);return Ms(t)}function Nf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wf(o,a)){let l=au(o,a);o=Ms(o,o.next),l=Ms(l,l.next),io(o,e,t,n,s,r,0),io(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ff(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=su(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Vf(c))}s.sort(Of);for(let r=0;r<s.length;r++)t=Bf(s[r],t);return t}function Of(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Bf(i,e){let t=kf(i,e);if(!t)return e;let n=au(t,i);return Ms(n,n.next),Ms(t,t.next)}function kf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(ar(i,t))return t;do{if(ar(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ru(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);so(t,i)&&(f<d||f===d&&(t.x>o.x||t.x===o.x&&zf(o,t)))&&(o=t,d=f)}t=t.next}while(t!==a);return o}function zf(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function Hf(i,e,t,n){let s=i;do s.z===0&&(s.z=Oc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gf(s)}function Gf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Oc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Vf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ru(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Dr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&ru(i,e,t,n,s,r,o,a)}function Wf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Xf(i,e)&&(so(i,e)&&so(e,i)&&qf(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||ar(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ar(i,e){return i.x===e.x&&i.y===e.y}function ou(i,e,t,n){let s=ia(Wt(i,e,t)),r=ia(Wt(i,e,n)),o=ia(Wt(t,n,i)),a=ia(Wt(t,n,e));return!!(s!==r&&o!==a||s===0&&na(i,t,e)||r===0&&na(i,n,e)||o===0&&na(t,i,n)||a===0&&na(t,e,n))}function na(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ia(i){return i>0?1:i<0?-1:0}function Xf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ou(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function so(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function qf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function au(i,e){let t=Bc(i.i,i.x,i.y),n=Bc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hd(i,e,t,n){let s=Bc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var kc=class{static triangulate(e,t,n=2){return Pf(e,t,n)}},ps=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];dd(e),ud(n,e);let o=e.length;t.forEach(dd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ud(n,t[l]);let a=kc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function dd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ud(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var lr=class i extends un{constructor(e=new vs([new Pe(.5,.5),new Pe(-.5,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ct(s,3)),this.setAttribute("uv",new Ct(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Zf,S,v=!1,A,C,L,U;u&&(S=u.getSpacedPoints(d),v=!0,p=!1,A=u.computeFrenetFrames(d,!1),C=new F,L=new F,U=new F),p||(g=0,m=0,x=0,y=0);let b=a.extractPoints(c),M=b.shape,D=b.holes;if(!ps.isClockWise(M)){M=M.reverse();for(let le=0,ie=D.length;le<ie;le++){let Q=D[le];ps.isClockWise(Q)&&(D[le]=Q.reverse())}}function G(le){let Q=10000000000000001e-36,ee=le[0];for(let be=1;be<=le.length;be++){let fe=be%le.length,Ee=le[fe],at=Ee.x-ee.x,nt=Ee.y-ee.y,T=at*at+nt*nt,_=Math.max(Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(ee.x),Math.abs(ee.y)),z=Q*_*_;if(T<=z){le.splice(fe,1),be--;continue}ee=Ee}}G(M),D.forEach(G);let W=D.length,J=M;for(let le=0;le<W;le++){let ie=D[le];M=M.concat(ie)}function X(le,ie,Q){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(ie,Q)}let oe=M.length;function Z(le,ie,Q){let ee,be,fe,Ee=le.x-ie.x,at=le.y-ie.y,nt=Q.x-le.x,T=Q.y-le.y,_=Ee*Ee+at*at,z=Ee*T-at*nt;if(Math.abs(z)>Number.EPSILON){let q=Math.sqrt(_),he=Math.sqrt(nt*nt+T*T),Y=ie.x-at/q,Ge=ie.y+Ee/q,_e=Q.x-T/he,Ve=Q.y+nt/he,ze=((_e-Y)*T-(Ve-Ge)*nt)/(Ee*T-at*nt);ee=Y+Ee*ze-le.x,be=Ge+at*ze-le.y;let me=ee*ee+be*be;if(me<=2)return new Pe(ee,be);fe=Math.sqrt(me/2)}else{let q=!1;Ee>Number.EPSILON?nt>Number.EPSILON&&(q=!0):Ee<-Number.EPSILON?nt<-Number.EPSILON&&(q=!0):Math.sign(at)===Math.sign(T)&&(q=!0),q?(ee=-at,be=Ee,fe=Math.sqrt(_)):(ee=Ee,be=at,fe=Math.sqrt(_/2))}return new Pe(ee/fe,be/fe)}let Se=[];for(let le=0,ie=J.length,Q=ie-1,ee=le+1;le<ie;le++,Q++,ee++)Q===ie&&(Q=0),ee===ie&&(ee=0),Se[le]=Z(J[le],J[Q],J[ee]);let De=[],Oe,ot=Se.concat();for(let le=0,ie=W;le<ie;le++){let Q=D[le];Oe=[];for(let ee=0,be=Q.length,fe=be-1,Ee=ee+1;ee<be;ee++,fe++,Ee++)fe===be&&(fe=0),Ee===be&&(Ee=0),Oe[ee]=Z(Q[ee],Q[fe],Q[Ee]);De.push(Oe),ot=ot.concat(Oe)}let mt;if(g===0)mt=ps.triangulateShape(J,D);else{let le=[],ie=[];for(let Q=0;Q<g;Q++){let ee=Q/g,be=m*Math.cos(ee*Math.PI/2),fe=x*Math.sin(ee*Math.PI/2)+y;for(let Ee=0,at=J.length;Ee<at;Ee++){let nt=X(J[Ee],Se[Ee],fe);Ye(nt.x,nt.y,-be),ee===0&&le.push(nt)}for(let Ee=0,at=W;Ee<at;Ee++){let nt=D[Ee];Oe=De[Ee];let T=[];for(let _=0,z=nt.length;_<z;_++){let q=X(nt[_],Oe[_],fe);Ye(q.x,q.y,-be),ee===0&&T.push(q)}ee===0&&ie.push(T)}}mt=ps.triangulateShape(le,ie)}let ft=mt.length,st=x+y;for(let le=0;le<oe;le++){let ie=p?X(M[le],ot[le],st):M[le];v?(L.copy(A.normals[0]).multiplyScalar(ie.x),C.copy(A.binormals[0]).multiplyScalar(ie.y),U.copy(S[0]).add(L).add(C),Ye(U.x,U.y,U.z)):Ye(ie.x,ie.y,0)}for(let le=1;le<=d;le++)for(let ie=0;ie<oe;ie++){let Q=p?X(M[ie],ot[ie],st):M[ie];v?(L.copy(A.normals[le]).multiplyScalar(Q.x),C.copy(A.binormals[le]).multiplyScalar(Q.y),U.copy(S[le]).add(L).add(C),Ye(U.x,U.y,U.z)):Ye(Q.x,Q.y,f/d*le)}for(let le=g-1;le>=0;le--){let ie=le/g,Q=m*Math.cos(ie*Math.PI/2),ee=x*Math.sin(ie*Math.PI/2)+y;for(let be=0,fe=J.length;be<fe;be++){let Ee=X(J[be],Se[be],ee);Ye(Ee.x,Ee.y,f+Q)}for(let be=0,fe=D.length;be<fe;be++){let Ee=D[be];Oe=De[be];for(let at=0,nt=Ee.length;at<nt;at++){let T=X(Ee[at],Oe[at],ee);v?Ye(T.x,T.y+S[d-1].y,S[d-1].x+Q):Ye(T.x,T.y,f+Q)}}}K(),ae();function K(){let le=s.length/3;if(p){let ie=0,Q=oe*ie;for(let ee=0;ee<ft;ee++){let be=mt[ee];Fe(be[2]+Q,be[1]+Q,be[0]+Q)}ie=d+g*2,Q=oe*ie;for(let ee=0;ee<ft;ee++){let be=mt[ee];Fe(be[0]+Q,be[1]+Q,be[2]+Q)}}else{for(let ie=0;ie<ft;ie++){let Q=mt[ie];Fe(Q[2],Q[1],Q[0])}for(let ie=0;ie<ft;ie++){let Q=mt[ie];Fe(Q[0]+oe*d,Q[1]+oe*d,Q[2]+oe*d)}}n.addGroup(le,s.length/3-le,0)}function ae(){let le=s.length/3,ie=0;Be(J,ie),ie+=J.length;for(let Q=0,ee=D.length;Q<ee;Q++){let be=D[Q];Be(be,ie),ie+=be.length}n.addGroup(le,s.length/3-le,1)}function Be(le,ie){let Q=le.length;for(;--Q>=0;){let ee=Q,be=Q-1;be<0&&(be=le.length-1);for(let fe=0,Ee=d+g*2;fe<Ee;fe++){let at=oe*fe,nt=oe*(fe+1),T=ie+ee+at,_=ie+be+at,z=ie+be+nt,q=ie+ee+nt;gt(T,_,z,q)}}}function Ye(le,ie,Q){l.push(le),l.push(ie),l.push(Q)}function Fe(le,ie,Q){bt(le),bt(ie),bt(Q);let ee=s.length/3,be=E.generateTopUV(n,s,ee-3,ee-2,ee-1);P(be[0]),P(be[1]),P(be[2])}function gt(le,ie,Q,ee){bt(le),bt(ie),bt(ee),bt(ie),bt(Q),bt(ee);let be=s.length/3,fe=E.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);P(fe[0]),P(fe[1]),P(fe[3]),P(fe[1]),P(fe[2]),P(fe[3])}function bt(le){s.push(l[le*3+0]),s.push(l[le*3+1]),s.push(l[le*3+2])}function P(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Jf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fc[s.type]().fromJSON(s)),new i(n,e.options)}},Zf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new Pe(r,o),new Pe(a,l),new Pe(c,d)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],f=e[n*3+2],p=e[s*3],m=e[s*3+1],x=e[s*3+2],y=e[r*3],g=e[r*3+1],u=e[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new Pe(o,1-l),new Pe(c,1-f),new Pe(p,1-x),new Pe(y,1-u)]:[new Pe(a,1-l),new Pe(d,1-f),new Pe(m,1-x),new Pe(g,1-u)]}};function Jf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var oo=class i extends Kr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Mi=class i extends un{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,f=e/a,p=t/l,m=[],x=[],y=[],g=[];for(let u=0;u<d;u++){let E=u*p-o;for(let S=0;S<c;S++){let v=S*f-r;x.push(v,-E,0),y.push(0,0,1),g.push(S/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){let S=E+c*u,v=E+c*(u+1),A=E+1+c*(u+1),C=E+1+c*u;m.push(S,v,C),m.push(v,A,C)}this.setIndex(m),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ao=class i extends un{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],d=[],f=e,p=(t-e)/s,m=new F,x=new Pe;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let u=r+g/n*o;m.x=f*Math.cos(u),m.y=f*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,d.push(x.x,x.y)}f+=p}for(let y=0;y<s;y++){let g=y*(n+1);for(let u=0;u<n;u++){let E=u+g,S=E,v=E+n+1,A=E+n+2,C=E+1;a.push(S,v,C),a.push(v,A,C)}}this.setIndex(a),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var wn=class i extends un{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],f=new F,p=new F,m=[],x=[],y=[],g=[];for(let u=0;u<=n;u++){let E=[],S=u/n,v=0;u===0&&o===0?v=.5/t:u===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){let C=A/t;f.x=-e*Math.cos(s+C*r)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+S*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),g.push(C+v,1-S),E.push(c++)}d.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){let S=d[u][E+1],v=d[u][E],A=d[u+1][E],C=d[u+1][E+1];(u!==0||o>0)&&m.push(S,v,C),(u!==n-1||l<Math.PI)&&m.push(v,A,C)}this.setIndex(m),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(y,3)),this.setAttribute("uv",new Ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},lo=class i extends Kr{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ss=class i extends un{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],d=new F,f=new F,p=new F;for(let m=0;m<=n;m++)for(let x=0;x<=s;x++){let y=x/s*r,g=m/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=s;x++){let y=(s+1)*m+x-1,g=(s+1)*(m-1)+x-1,u=(s+1)*(m-1)+x,E=(s+1)*m+x;o.push(y,g,E),o.push(g,u,E)}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var co=class extends vi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ut(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var it=class extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bs=class extends it{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ta=class extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Aa=class extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $f(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ws=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ca=class extends ws{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dc:r=e,a=2*t-n;break;case Lc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dc:o=e,l=2*n-t;break;case Lc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),y=x*x,g=y*x,u=-p*g+2*p*y-p*x,E=(1+p)*g+(-1.5-2*p)*y+(-.5+p)*x+1,S=(-1-m)*g+(1.5+m)*y+.5*x,v=m*g-m*y;for(let A=0;A!==a;++A)r[A]=u*o[d+A]+E*o[c+A]+S*o[l+A]+v*o[f+A];return r}},Ia=class extends ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(s-t),f=1-d;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*d;return r}},Ra=class extends ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ca(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case ha:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$f(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,p=f-n,m=f+n;for(let x=0;x!==n;++x){let y=t[f+x];if(y!==t[p+x]||y!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,p=o*n;for(let m=0;m!==n;++m)t[p+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=ha;var ss=class extends zn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Nr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Pa.prototype.ValueTypeName="color";var Da=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Da.prototype.ValueTypeName="number";var La=class extends ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)zi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ho=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new La(this.times,this.values,this.getValueSize(),e)}};ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends zn{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Nr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends zn{constructor(e,t,n,s){super(e,t,n,s)}};Ua.prototype.ValueTypeName="vector";var Na=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){let f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},lu=new Na,Fa=class{constructor(e){this.manager=e!==void 0?e:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},uo=class extends cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rc=new Xt,fd=new F,pd=new F,zc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(fd),pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pd),t.updateMatrixWorld(),Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Es=class extends Wr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hc=class extends zc{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Hc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fo=class extends cr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Oa=class extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ch="\\[\\]\\.:\\/",Kf=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",jf="[^"+ch.replace("\\.","")+"]",Qf=/((?:WC+[\/:])*)/.source.replace("WC",hh),ep=/(WCOD+)?/.source.replace("WCOD",jf),tp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),ip=new RegExp("^"+Qf+ep+tp+np+"$"),sp=["material","materials","bones","map"],Gc=class{constructor(e,t,n){let s=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kf,"")}static parseTrackName(e){let t=ip.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=Gc;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e_=new Float32Array(1);function dh(i,e,t,n){let s=rp(n);switch(t){case Qc:return i*e;case th:return i*e/s.components*s.byteLength;case el:return i*e/s.components*s.byteLength;case nh:return i*e*2/s.components*s.byteLength;case tl:return i*e*2/s.components*s.byteLength;case eh:return i*e*3/s.components*s.byteLength;case Jn:return i*e*4/s.components*s.byteLength;case nl:return i*e*4/s.components*s.byteLength;case go:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:case ol:return Math.max(i,16)*Math.max(e,8)/4;case il:case rl:return Math.max(i,8)*Math.max(e,8)/2;case al:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wl:case El:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Al:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Il:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rp(i){switch(i){case fi:case Jc:return{byteLength:1,components:1};case dr:case $c:case ur:return{byteLength:2,components:1};case ja:case Qa:return{byteLength:2,components:4};case as:case Ka:case bi:return{byteLength:4,components:1};case Kc:case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);function Du(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function op(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let d=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,d);else{f.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<f.length;m++){let x=f[p],y=f[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++p,f[p]=y)}f.length=p+1;for(let m=0,x=f.length;m<x;m++){let y=f[m];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Im=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:ap,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:hp,alphatest_fragment:dp,alphatest_pars_fragment:up,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:xp,beginnormal_vertex:yp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ep,color_fragment:Tp,color_pars_fragment:Ap,color_pars_vertex:Cp,color_vertex:Ip,common:Rp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Up,emissivemap_fragment:Np,emissivemap_pars_fragment:Fp,colorspace_fragment:Op,colorspace_pars_fragment:Bp,envmap_fragment:kp,envmap_common_pars_fragment:zp,envmap_pars_fragment:Hp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:qp,fog_pars_fragment:Yp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Kp,lights_pars_begin:jp,lights_toon_fragment:em,lights_toon_pars_fragment:tm,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:sm,lights_physical_pars_fragment:rm,lights_fragment_begin:om,lights_fragment_maps:am,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:um,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:ym,morphinstance_vertex:_m,morphcolor_vertex:vm,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:bm,normal_fragment_begin:wm,normal_fragment_maps:Em,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:Cm,normalmap_pars_fragment:Im,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Lm,opaque_fragment:Um,packing:Nm,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:km,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:$m,specularmap_pars_fragment:Km,tonemapping_fragment:jm,tonemapping_pars_fragment:Qm,transmission_fragment:eg,transmission_pars_fragment:tg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:sg,worldpos_vertex:rg,background_vert:og,background_frag:ag,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:hg,cube_frag:dg,depth_vert:ug,depth_frag:fg,distanceRGBA_vert:pg,distanceRGBA_frag:mg,equirect_vert:gg,equirect_frag:xg,linedashed_vert:yg,linedashed_frag:_g,meshbasic_vert:vg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:bg,meshmatcap_vert:wg,meshmatcap_frag:Eg,meshnormal_vert:Tg,meshnormal_frag:Ag,meshphong_vert:Cg,meshphong_frag:Ig,meshphysical_vert:Rg,meshphysical_frag:Pg,meshtoon_vert:Dg,meshtoon_frag:Lg,points_vert:Ug,points_frag:Ng,shadow_vert:Fg,shadow_frag:Og,sprite_vert:Bg,sprite_frag:kg},Ne={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},wi={basic:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ut(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:En([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:En([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ut(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:En([Ne.points,Ne.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:En([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:En([Ne.common,Ne.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:En([Ne.sprite,Ne.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:En([Ne.common,Ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:En([Ne.lights,Ne.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};wi.physical={uniforms:En([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var Pl={r:0,b:0,g:0},Is=new di,zg=new Xt;function Hg(i,e,t,n,s,r,o){let a=new ut(0),l=r===!0?0:1,c,d,f=null,p=0,m=null;function x(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function y(S){let v=!1,A=x(S);A===null?u(a,l):A&&A.isColor&&(u(A,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,v){let A=x(v);A&&(A.isCubeTexture||A.mapping===po)?(d===void 0&&(d=new Me(new gn(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Cs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Is.copy(v.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(Is)),d.material.toneMapped=At.getTransfer(A.colorSpace)!==Lt,(f!==A||p!==A.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=A,p=A.version,m=i.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Me(new Mi(2,2),new ui({name:"BackgroundMaterial",uniforms:Cs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=At.getTransfer(A.colorSpace)!==Lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||p!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=A,p=A.version,m=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,v){S.getRGB(Pl,ah(i)),n.buffers.color.setClear(Pl.r,Pl.g,Pl.b,v,o)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(a,l)},render:y,addToRenderList:g,dispose:E}}function Gg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(M,D,k,G,W){let J=!1,X=f(G,k,D);r!==X&&(r=X,c(r.object)),J=m(M,G,k,W),J&&x(M,G,k,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(M,D,k,G),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function f(M,D,k){let G=k.wireframe===!0,W=n[M.id];W===void 0&&(W={},n[M.id]=W);let J=W[D.id];J===void 0&&(J={},W[D.id]=J);let X=J[G];return X===void 0&&(X=p(l()),J[G]=X),X}function p(M){let D=[],k=[],G=[];for(let W=0;W<t;W++)D[W]=0,k[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:G,object:M,attributes:{},index:null}}function m(M,D,k,G){let W=r.attributes,J=D.attributes,X=0,oe=k.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let De=W[Z],Oe=J[Z];if(Oe===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Oe=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Oe=M.instanceColor)),De===void 0||De.attribute!==Oe||Oe&&De.data!==Oe.data)return!0;X++}return r.attributesNum!==X||r.index!==G}function x(M,D,k,G){let W={},J=D.attributes,X=0,oe=k.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let De=J[Z];De===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(De=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(De=M.instanceColor));let Oe={};Oe.attribute=De,De&&De.data&&(Oe.data=De.data),W[Z]=Oe,X++}r.attributes=W,r.attributesNum=X,r.index=G}function y(){let M=r.newAttributes;for(let D=0,k=M.length;D<k;D++)M[D]=0}function g(M){u(M,0)}function u(M,D){let k=r.newAttributes,G=r.enabledAttributes,W=r.attributeDivisors;k[M]=1,G[M]===0&&(i.enableVertexAttribArray(M),G[M]=1),W[M]!==D&&(i.vertexAttribDivisor(M,D),W[M]=D)}function E(){let M=r.newAttributes,D=r.enabledAttributes;for(let k=0,G=D.length;k<G;k++)D[k]!==M[k]&&(i.disableVertexAttribArray(k),D[k]=0)}function S(M,D,k,G,W,J,X){X===!0?i.vertexAttribIPointer(M,D,k,W,J):i.vertexAttribPointer(M,D,k,G,W,J)}function v(M,D,k,G){y();let W=G.attributes,J=k.getAttributes(),X=D.defaultAttributeValues;for(let oe in J){let Z=J[oe];if(Z.location>=0){let Se=W[oe];if(Se===void 0&&(oe==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),oe==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),Se!==void 0){let De=Se.normalized,Oe=Se.itemSize,ot=e.get(Se);if(ot===void 0)continue;let mt=ot.buffer,ft=ot.type,st=ot.bytesPerElement,K=ft===i.INT||ft===i.UNSIGNED_INT||Se.gpuType===Ka;if(Se.isInterleavedBufferAttribute){let ae=Se.data,Be=ae.stride,Ye=Se.offset;if(ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Z.locationSize;Fe++)u(Z.location+Fe,ae.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<Z.locationSize;Fe++)g(Z.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Fe=0;Fe<Z.locationSize;Fe++)S(Z.location+Fe,Oe/Z.locationSize,ft,De,Be*st,(Ye+Oe/Z.locationSize*Fe)*st,K)}else{if(Se.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)u(Z.location+ae,Se.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ae=0;ae<Z.locationSize;ae++)g(Z.location+ae);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let ae=0;ae<Z.locationSize;ae++)S(Z.location+ae,Oe/Z.locationSize,ft,De,Oe*st,Oe/Z.locationSize*ae*st,K)}}else if(X!==void 0){let De=X[oe];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv(Z.location,De);break;case 3:i.vertexAttrib3fv(Z.location,De);break;case 4:i.vertexAttrib4fv(Z.location,De);break;default:i.vertexAttrib1fv(Z.location,De)}}}}E()}function A(){U();for(let M in n){let D=n[M];for(let k in D){let G=D[k];for(let W in G)d(G[W].object),delete G[W];delete D[k]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let D=n[M.id];for(let k in D){let G=D[k];for(let W in G)d(G[W].object),delete G[W];delete D[k]}delete n[M.id]}function L(M){for(let D in n){let k=n[D];if(k[M.id]===void 0)continue;let G=k[M.id];for(let W in G)d(G[W].object),delete G[W];delete k[M.id]}}function U(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:g,disableUnusedAttributes:E}}function Vg(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),t.update(d,n,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let m=0;for(let x=0;x<f;x++)m+=d[x];t.update(m,n,1)}function l(c,d,f,p){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],d[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,f);let x=0;for(let y=0;y<f;y++)x+=d[y]*p[y];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Jn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let U=L===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==fi&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==bi&&!U)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function Xg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new yi,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,m){let x=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!g)r?d(null):c();else{let E=r?0:n,S=E*4,v=u.clippingState||null;l.value=v,v=d(x,p,S,m);for(let A=0;A!==S;++A)v[A]=t[A];u.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,p,m,x){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,x!==!0||g===null){let u=m+y*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<u)&&(g=new Float32Array(u));for(let S=0,v=m;S!==y;++S,v+=4)o.copy(f[S]).applyMatrix4(E,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function qg(i){let e=new WeakMap;function t(o,a){return a===Za?o.mapping=Ts:a===Ja&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Za||a===Ja)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ga(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var xr=4,cu=[.125,.215,.35,.446,.526,.582],Ds=20,uh=new Es,hu=new ut,fh=null,ph=0,mh=0,gh=!1,Ps=(1+Math.sqrt(5))/2,gr=1/Ps,du=[new F(-Ps,gr,0),new F(Ps,gr,0),new F(-gr,0,Ps),new F(gr,0,Ps),new F(0,Ps,-gr),new F(0,Ps,gr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Yg=new F,Ul=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Yg}=r;fh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,ph,mh),this._renderer.xr.enabled=gh,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:ur,format:Jn,colorSpace:xs,depthBuffer:!1},s=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Jg(r,e,t)}return s}_compileMaterial(e){let t=new Me(this._lodPlanes[0],e);this._renderer.compile(t,uh)}_sceneToCubeUV(e,t,n,s,r){let l=new Un(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(hu),f.toneMapping=Gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let y=new dn({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new Me(new gn,y),u=!1,E=e.background;E?E.isColor&&(y.color.copy(E),e.background=null,u=!0):(y.color.copy(hu),u=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[S]));let A=this._cubeSize;Dl(s,v*A,S>2?A:0,A,A),f.setRenderTarget(s),u&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ts||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Dl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,uh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=du[(s-r-1)%du.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,f=new Me(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ds-1),y=r/x,g=isFinite(r)?1+Math.floor(d*y):Ds;g>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);let u=[],E=0;for(let L=0;L<Ds;++L){let U=L/y,b=Math.exp(-U*U/2);u.push(b),L===0?E+=b:L<g&&(E+=2*b)}for(let L=0;L<u.length;L++)u[L]=u[L]/E;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:S}=this;p.dTheta.value=x,p.mipInt.value=S-n;let v=this._sizeLods[s],A=3*v*(s>S-xr?s-S+xr:0),C=4*(this._cubeSize-v);Dl(t,A,C,3*v,2*v),l.setRenderTarget(t),l.render(f,uh)}};function Zg(i){let e=[],t=[],n=[],s=i,r=i-xr+1+cu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-xr?l=cu[o-i+xr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,x=6,y=3,g=2,u=1,E=new Float32Array(y*x*m),S=new Float32Array(g*x*m),v=new Float32Array(u*x*m);for(let C=0;C<m;C++){let L=C%3*2/3-1,U=C>2?0:-1,b=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];E.set(b,y*x*C),S.set(p,g*x*C);let M=[C,C,C,C,C,C];v.set(M,u*x*C)}let A=new un;A.setAttribute("position",new bn(E,y)),A.setAttribute("uv",new bn(S,g)),A.setAttribute("faceIndex",new bn(v,u)),e.push(A),s>xr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(i,e,t){let n=new _i(i,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jg(i,e,t){let n=new Float32Array(Ds),s=new F(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function fu(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function pu(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $g(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Za||l===Ja,d=l===Ts||l===As;if(c||d){let f=e.get(a),p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Ul(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let m=a.image;return c&&m&&m.height>0||d&&m&&s(m)?(t===null&&(t=new Ul(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Kg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jg(i,e,t,n){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let m in p)e.update(p[m],i.ARRAY_BUFFER)}function c(f){let p=[],m=f.index,x=f.attributes.position,y=0;if(m!==null){let E=m.array;y=m.version;for(let S=0,v=E.length;S<v;S+=3){let A=E[S+0],C=E[S+1],L=E[S+2];p.push(A,C,C,L,L,A)}}else if(x!==void 0){let E=x.array;y=x.version;for(let S=0,v=E.length/3-1;S<v;S+=3){let A=S+0,C=S+1,L=S+2;p.push(A,C,C,L,L,A)}}else return;let g=new(oh(p)?Vr:Gr)(p,1);g.version=y;let u=r.get(f);u&&e.remove(u),r.set(f,g)}function d(f){let p=r.get(f);if(p){let m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Qg(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function c(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*o,x),t.update(m,n,x))}function d(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let g=0;for(let u=0;u<x;u++)g+=m[u];t.update(g,n,1)}function f(p,m,x,y){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<p.length;u++)c(p[u]/o,m[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,y,0,x);let u=0;for(let E=0;E<x;E++)u+=m[E]*y[E];t.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function e0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function t0(i,e,t){let n=new WeakMap,s=new qt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,p=n.get(a);if(p===void 0||p.count!==f){let b=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;m===!0&&(S=1),x===!0&&(S=2),y===!0&&(S=3);let v=a.attributes.position.count*S,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*A*4*f),L=new kr(C,v,A,f);L.type=bi,L.needsUpdate=!0;let U=S*4;for(let M=0;M<f;M++){let D=g[M],k=u[M],G=E[M],W=v*A*4*M;for(let J=0;J<D.count;J++){let X=J*U;m===!0&&(s.fromBufferAttribute(D,J),C[W+X+0]=s.x,C[W+X+1]=s.y,C[W+X+2]=s.z,C[W+X+3]=0),x===!0&&(s.fromBufferAttribute(k,J),C[W+X+4]=s.x,C[W+X+5]=s.y,C[W+X+6]=s.z,C[W+X+7]=0),y===!0&&(s.fromBufferAttribute(G,J),C[W+X+8]=s.x,C[W+X+9]=s.y,C[W+X+10]=s.z,C[W+X+11]=G.itemSize===4?s.w:1)}}p={count:f,texture:L,size:new Pe(v,A)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function n0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Lu=new Nn,mu=new Zr(1,1),Uu=new kr,Nu=new pa,Fu=new Xr,gu=[],xu=[],yu=new Float32Array(16),_u=new Float32Array(9),vu=new Float32Array(4);function _r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fl(i,e){let t=xu[e];t===void 0&&(t=new Int32Array(e),xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function r0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function o0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function a0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),an(t,n)}}function l0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;_u.set(n),i.uniformMatrix3fv(this.addr,!1,_u),an(t,n)}}function c0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;yu.set(n),i.uniformMatrix4fv(this.addr,!1,yu),an(t,n)}}function h0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function f0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function p0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function y0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mu.compareFunction=sh,r=mu):r=Lu,t.setTexture2D(e||r,s)}function _0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nu,s)}function v0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fu,s)}function M0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uu,s)}function S0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return d0;case 35668:case 35672:return u0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return M0}}function b0(i,e){i.uniform1fv(this.addr,e)}function w0(i,e){let t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function E0(i,e){let t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function T0(i,e){let t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function A0(i,e){let t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function C0(i,e){let t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function I0(i,e){let t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function R0(i,e){i.uniform1iv(this.addr,e)}function P0(i,e){i.uniform2iv(this.addr,e)}function D0(i,e){i.uniform3iv(this.addr,e)}function L0(i,e){i.uniform4iv(this.addr,e)}function U0(i,e){i.uniform1uiv(this.addr,e)}function N0(i,e){i.uniform2uiv(this.addr,e)}function F0(i,e){i.uniform3uiv(this.addr,e)}function O0(i,e){i.uniform4uiv(this.addr,e)}function B0(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Lu,r[o])}function k0(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Nu,r[o])}function z0(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fu,r[o])}function H0(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uu,r[o])}function G0(i){switch(i){case 5126:return b0;case 35664:return w0;case 35665:return E0;case 35666:return T0;case 35674:return A0;case 35675:return C0;case 35676:return I0;case 5124:case 35670:return R0;case 35667:case 35671:return P0;case 35668:case 35672:return D0;case 35669:case 35673:return L0;case 5125:return U0;case 36294:return N0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}var yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=S0(t.type)}},_h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G0(t.type)}},vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},xh=/(\w+)(\])?(\[|\.)?/g;function Mu(i,e){i.seq.push(e),i.map[e.id]=e}function V0(i,e,t){let n=i.name,s=n.length;for(xh.lastIndex=0;;){let r=xh.exec(n),o=xh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mu(t,c===void 0?new yh(a,i,e):new _h(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new vh(a),Mu(t,f)),t=f}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);V0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Su(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var W0=37297,X0=0;function q0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var bu=new yt;function Y0(i){At._getMatrix(bu,At.workingColorSpace,i);let e=`mat3( ${bu.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case Fr:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+q0(i.getShaderSource(e),a)}else return r}function Z0(i,e){let t=Y0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J0(i,e){let t;switch(e){case Od:t="Linear";break;case Bd:t="Reinhard";break;case kd:t="Cineon";break;case Ya:t="ACESFilmic";break;case Hd:t="AgX";break;case Gd:t="Neutral";break;case zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ll=new F;function $0(){At.getLuminanceCoefficients(Ll);let i=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function j0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function vo(i){return i!==""}function Eu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(ex,nx)}var tx=new Map;function nx(i,e){let t=_t[e];if(t===void 0){let n=tx.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mh(t)}var ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(i){return i.replace(ix,sx)}function sx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ka?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function ox(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ax(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function lx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yc:e="ENVMAP_BLENDING_MULTIPLY";break;case Nd:e="ENVMAP_BLENDING_MIX";break;case Fd:e="ENVMAP_BLENDING_ADD";break}return e}function cx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=rx(t),c=ox(t),d=ax(t),f=lx(t),p=cx(t),m=K0(t),x=j0(r),y=s.createProgram(),g,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(vo).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(vo).join(`
`),u.length>0&&(u+=`
`)):(g=[Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),u=[Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Gi?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),$0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),o=Mh(o),o=Eu(o,t),o=Tu(o,t),a=Mh(a),a=Eu(a,t),a=Tu(a,t),o=Au(o),a=Au(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=E+g+o,v=E+u+a,A=Su(s,s.VERTEX_SHADER,S),C=Su(s,s.FRAGMENT_SHADER,v);s.attachShader(y,A),s.attachShader(y,C),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(D){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(C)||"",J=k.trim(),X=G.trim(),oe=W.trim(),Z=!0,Se=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,C);else{let De=wu(s,A,"vertex"),Oe=wu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+J+`
`+De+`
`+Oe)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(X===""||oe==="")&&(Se=!1);Se&&(D.diagnostics={runnable:Z,programLog:J,vertexShader:{log:X,prefix:g},fragmentShader:{log:oe,prefix:u}})}s.deleteShader(A),s.deleteShader(C),U=new yr(s,y),b=Q0(s,y)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,W0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=C,this}var dx=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bh(e),t.set(e,n)),n}},bh=class{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}};function ux(i,e,t,n,s,r,o){let a=new Hr,l=new Sh,c=new Set,d=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,D,k,G){let W=k.fog,J=G.geometry,X=b.isMeshStandardMaterial?k.environment:null,oe=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),Z=oe&&oe.mapping===po?oe.image.height:null,Se=x[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let De=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Oe=De!==void 0?De.length:0,ot=0;J.morphAttributes.position!==void 0&&(ot=1),J.morphAttributes.normal!==void 0&&(ot=2),J.morphAttributes.color!==void 0&&(ot=3);let mt,ft,st,K;if(Se){let lt=wi[Se];mt=lt.vertexShader,ft=lt.fragmentShader}else mt=b.vertexShader,ft=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),K=l.getFragmentShaderID(b);let ae=i.getRenderTarget(),Be=i.state.buffers.depth.getReversed(),Ye=G.isInstancedMesh===!0,Fe=G.isBatchedMesh===!0,gt=!!b.map,bt=!!b.matcap,P=!!oe,le=!!b.aoMap,ie=!!b.lightMap,Q=!!b.bumpMap,ee=!!b.normalMap,be=!!b.displacementMap,fe=!!b.emissiveMap,Ee=!!b.metalnessMap,at=!!b.roughnessMap,nt=b.anisotropy>0,T=b.clearcoat>0,_=b.dispersion>0,z=b.iridescence>0,q=b.sheen>0,he=b.transmission>0,Y=nt&&!!b.anisotropyMap,Ge=T&&!!b.clearcoatMap,_e=T&&!!b.clearcoatNormalMap,Ve=T&&!!b.clearcoatRoughnessMap,ze=z&&!!b.iridescenceMap,me=z&&!!b.iridescenceThicknessMap,Ue=q&&!!b.sheenColorMap,Je=q&&!!b.sheenRoughnessMap,qe=!!b.specularMap,Re=!!b.specularColorMap,dt=!!b.specularIntensityMap,N=he&&!!b.transmissionMap,xe=he&&!!b.thicknessMap,we=!!b.gradientMap,ke=!!b.alphaMap,ge=b.alphaTest>0,R=!!b.alphaHash,se=!!b.extensions,ne=Gi;b.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ne=i.toneMapping);let Ze={shaderID:Se,shaderType:b.type,shaderName:b.name,vertexShader:mt,fragmentShader:ft,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Fe,batchingColor:Fe&&G._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&G.instanceColor!==null,instancingMorph:Ye&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:xs,alphaToCoverage:!!b.alphaToCoverage,map:gt,matcap:bt,envMap:P,envMapMode:P&&oe.mapping,envMapCubeUVHeight:Z,aoMap:le,lightMap:ie,bumpMap:Q,normalMap:ee,displacementMap:p&&be,emissiveMap:fe,normalMapObjectSpace:ee&&b.normalMapType===qd,normalMapTangentSpace:ee&&b.normalMapType===ih,metalnessMap:Ee,roughnessMap:at,anisotropy:nt,anisotropyMap:Y,clearcoat:T,clearcoatMap:Ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ve,dispersion:_,iridescence:z,iridescenceMap:ze,iridescenceThicknessMap:me,sheen:q,sheenColorMap:Ue,sheenRoughnessMap:Je,specularMap:qe,specularColorMap:Re,specularIntensityMap:dt,transmission:he,transmissionMap:N,thicknessMap:xe,gradientMap:we,opaque:b.transparent===!1&&b.blending===ms&&b.alphaToCoverage===!1,alphaMap:ke,alphaTest:ge,alphaHash:R,combine:b.combine,mapUv:gt&&y(b.map.channel),aoMapUv:le&&y(b.aoMap.channel),lightMapUv:ie&&y(b.lightMap.channel),bumpMapUv:Q&&y(b.bumpMap.channel),normalMapUv:ee&&y(b.normalMap.channel),displacementMapUv:be&&y(b.displacementMap.channel),emissiveMapUv:fe&&y(b.emissiveMap.channel),metalnessMapUv:Ee&&y(b.metalnessMap.channel),roughnessMapUv:at&&y(b.roughnessMap.channel),anisotropyMapUv:Y&&y(b.anisotropyMap.channel),clearcoatMapUv:Ge&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Je&&y(b.sheenRoughnessMap.channel),specularMapUv:qe&&y(b.specularMap.channel),specularColorMapUv:Re&&y(b.specularColorMap.channel),specularIntensityMapUv:dt&&y(b.specularIntensityMap.channel),transmissionMapUv:N&&y(b.transmissionMap.channel),thicknessMapUv:xe&&y(b.thicknessMap.channel),alphaMapUv:ke&&y(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ee||nt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(gt||ke),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Be,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:gt&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Lt,decodeVideoTextureEmissive:fe&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===In,flipSided:b.side===xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:se&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&b.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function u(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(E(M,b),S(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=x[b.type],D;if(M){let k=wi[M];D=iu.clone(k.uniforms)}else D=b.uniforms;return D}function A(b,M){let D;for(let k=0,G=d.length;k<G;k++){let W=d[k];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new hx(i,M,b,r),d.push(D)),D}function C(b){if(--b.usedTimes===0){let M=d.indexOf(b);d[M]=d[d.length-1],d.pop(),b.destroy()}}function L(b){l.remove(b)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:L,programs:d,dispose:U}}function fx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function px(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,p,m,x,y,g){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:x,renderOrder:f.renderOrder,z:y,group:g},i[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=y,u.group=g),e++,u}function a(f,p,m,x,y,g){let u=o(f,p,m,x,y,g);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(f,p,m,x,y,g){let u=o(f,p,m,x,y,g);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,p){t.length>1&&t.sort(f||px),n.length>1&&n.sort(p||Iu),s.length>1&&s.sort(p||Iu)}function d(){for(let f=e,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function mx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ru,i.set(n,[o])):s>=r.length?(o=new Ru,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function gx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ut};break;case"SpotLight":t={position:new F,direction:new F,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function xx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yx=0;function _x(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vx(i){let e=new gx,t=xx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Xt,o=new Xt;function a(c){let d=0,f=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,x=0,y=0,g=0,u=0,E=0,S=0,v=0,A=0,C=0,L=0;c.sort(_x);for(let b=0,M=c.length;b<M;b++){let D=c[b],k=D.color,G=D.intensity,W=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=k.r*G,f+=k.g*G,p+=k.b*G;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],G);L++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let oe=D.shadow,Z=t.get(D);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=D.shadow.matrix,E++}n.directional[m]=X,m++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(k).multiplyScalar(G),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[y]=X;let oe=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,oe.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[y]=oe.matrix,D.castShadow){let Z=t.get(D);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=J,v++}y++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(k).multiplyScalar(G),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=X,g++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let oe=D.shadow,Z=t.get(D);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,Z.shadowCameraNear=oe.camera.near,Z.shadowCameraFar=oe.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=J,n.pointShadowMatrix[x]=D.shadow.matrix,S++}n.point[x]=X,x++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(G),X.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[u]=X,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;let U=n.hash;(U.directionalLength!==m||U.pointLength!==x||U.spotLength!==y||U.rectAreaLength!==g||U.hemiLength!==u||U.numDirectionalShadows!==E||U.numPointShadows!==S||U.numSpotShadows!==v||U.numSpotMaps!==A||U.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=g,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,U.directionalLength=m,U.pointLength=x,U.spotLength=y,U.rectAreaLength=g,U.hemiLength=u,U.numDirectionalShadows=E,U.numPointShadows=S,U.numSpotShadows=v,U.numSpotMaps=A,U.numLightProbes=L,n.version=yx++)}function l(c,d){let f=0,p=0,m=0,x=0,y=0,g=d.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){let S=c[u];if(S.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(S.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(S.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),p++}else if(S.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function Pu(i){let e=new vx(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Mx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Pu(i),e.set(s,[a])):r>=o.length?(a=new Pu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wx(i,e,t){let n=new ir,s=new Pe,r=new Pe,o=new qt,a=new Ta({depthPacking:Xd}),l=new Aa,c={},d=t.maxTextureSize,f={[Bi]:xn,[xn]:Bi,[In]:In},p=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Sx,fragmentShader:bx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let x=new un;x.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Me(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let u=this.type;this.render=function(C,L,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Hi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let G=u!==Si&&this.type===Si,W=u===Si&&this.type!==Si;for(let J=0,X=C.length;J<X;J++){let oe=C[J],Z=oe.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Se=Z.getFrameExtents();if(s.multiply(Se),r.copy(Z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Se.x),s.x=r.x*Se.x,Z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Se.y),s.y=r.y*Se.y,Z.mapSize.y=r.y)),Z.map===null||G===!0||W===!0){let Oe=this.type!==Si?{minFilter:Yn,magFilter:Yn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new _i(s.x,s.y,Oe),Z.map.texture.name=oe.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let De=Z.getViewportCount();for(let Oe=0;Oe<De;Oe++){let ot=Z.getViewport(Oe);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),k.viewport(o),Z.updateMatrices(oe,Oe),n=Z.getFrustum(),v(L,U,Z.camera,oe,this.type)}Z.isPointLightShadow!==!0&&this.type===Si&&E(Z,U),Z.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,D)};function E(C,L){let U=e.update(y);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _i(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,U,p,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,U,m,y,null)}function S(C,L,U,b){let M=null,D=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=M.uuid,G=L.uuid,W=c[k];W===void 0&&(W={},c[k]=W);let J=W[G];J===void 0&&(J=M.clone(),W[G]=J,L.addEventListener("dispose",A)),M=J}if(M.visible=L.visible,M.wireframe=L.wireframe,b===Si?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:f[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=U}return M}function v(C,L,U,b,M){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Si)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let G=e.update(C),W=C.material;if(Array.isArray(W)){let J=G.groups;for(let X=0,oe=J.length;X<oe;X++){let Z=J[X],Se=W[Z.materialIndex];if(Se&&Se.visible){let De=S(C,Se,b,M);C.onBeforeShadow(i,C,L,U,G,De,Z),i.renderBufferDirect(U,null,G,De,C,Z),C.onAfterShadow(i,C,L,U,G,De,Z)}}}else if(W.visible){let J=S(C,W,b,M);C.onBeforeShadow(i,C,L,U,G,J,null),i.renderBufferDirect(U,null,G,J,C,null),C.onAfterShadow(i,C,L,U,G,J,null)}}let k=C.children;for(let G=0,W=k.length;G<W;G++)v(k[G],L,U,b,M)}function A(C){C.target.removeEventListener("dispose",A);for(let U in c){let b=c[U],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Ex={[za]:Ha,[Ga]:Xa,[Va]:qa,[gs]:Wa,[Ha]:za,[Xa]:Ga,[qa]:Va,[Wa]:gs};function Tx(i,e){function t(){let N=!1,xe=new qt,we=null,ke=new qt(0,0,0,0);return{setMask:function(ge){we!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),we=ge)},setLocked:function(ge){N=ge},setClear:function(ge,R,se,ne,Ze){Ze===!0&&(ge*=ne,R*=ne,se*=ne),xe.set(ge,R,se,ne),ke.equals(xe)===!1&&(i.clearColor(ge,R,se,ne),ke.copy(xe))},reset:function(){N=!1,we=null,ke.set(-1,0,0,0)}}}function n(){let N=!1,xe=!1,we=null,ke=null,ge=null;return{setReversed:function(R){if(xe!==R){let se=e.get("EXT_clip_control");R?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),xe=R;let ne=ge;ge=null,this.setClear(ne)}},getReversed:function(){return xe},setTest:function(R){R?ae(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(R){we!==R&&!N&&(i.depthMask(R),we=R)},setFunc:function(R){if(xe&&(R=Ex[R]),ke!==R){switch(R){case za:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=R}},setLocked:function(R){N=R},setClear:function(R){ge!==R&&(xe&&(R=1-R),i.clearDepth(R),ge=R)},reset:function(){N=!1,we=null,ke=null,ge=null,xe=!1}}}function s(){let N=!1,xe=null,we=null,ke=null,ge=null,R=null,se=null,ne=null,Ze=null;return{setTest:function(lt){N||(lt?ae(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(lt){xe!==lt&&!N&&(i.stencilMask(lt),xe=lt)},setFunc:function(lt,St,rt){(we!==lt||ke!==St||ge!==rt)&&(i.stencilFunc(lt,St,rt),we=lt,ke=St,ge=rt)},setOp:function(lt,St,rt){(R!==lt||se!==St||ne!==rt)&&(i.stencilOp(lt,St,rt),R=lt,se=St,ne=rt)},setLocked:function(lt){N=lt},setClear:function(lt){Ze!==lt&&(i.clearStencil(lt),Ze=lt)},reset:function(){N=!1,xe=null,we=null,ke=null,ge=null,R=null,se=null,ne=null,Ze=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,d={},f={},p=new WeakMap,m=[],x=null,y=!1,g=null,u=null,E=null,S=null,v=null,A=null,C=null,L=new ut(0,0,0),U=0,b=!1,M=null,D=null,k=null,G=null,W=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,oe=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=oe>=2);let Se=null,De={},Oe=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),mt=new qt().fromArray(Oe),ft=new qt().fromArray(ot);function st(N,xe,we,ke){let ge=new Uint8Array(4),R=i.createTexture();i.bindTexture(N,R),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<we;se++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(xe+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return R}let K={};K[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(gs),Q(!1),ee(Vc),ae(i.CULL_FACE),le(Hi);function ae(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function Be(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Ye(N,xe){return f[N]!==xe?(i.bindFramebuffer(N,xe),f[N]=xe,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xe),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Fe(N,xe){let we=m,ke=!1;if(N){we=p.get(xe),we===void 0&&(we=[],p.set(xe,we));let ge=N.textures;if(we.length!==ge.length||we[0]!==i.COLOR_ATTACHMENT0){for(let R=0,se=ge.length;R<se;R++)we[R]=i.COLOR_ATTACHMENT0+R;we.length=ge.length,ke=!0}}else we[0]!==i.BACK&&(we[0]=i.BACK,ke=!0);ke&&i.drawBuffers(we)}function gt(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let bt={[ns]:i.FUNC_ADD,[yd]:i.FUNC_SUBTRACT,[_d]:i.FUNC_REVERSE_SUBTRACT};bt[vd]=i.MIN,bt[Md]=i.MAX;let P={[Sd]:i.ZERO,[bd]:i.ONE,[wd]:i.SRC_COLOR,[oa]:i.SRC_ALPHA,[Rd]:i.SRC_ALPHA_SATURATE,[Cd]:i.DST_COLOR,[Td]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[aa]:i.ONE_MINUS_SRC_ALPHA,[Id]:i.ONE_MINUS_DST_COLOR,[Ad]:i.ONE_MINUS_DST_ALPHA,[Pd]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Ud]:i.ONE_MINUS_CONSTANT_ALPHA};function le(N,xe,we,ke,ge,R,se,ne,Ze,lt){if(N===Hi){y===!0&&(Be(i.BLEND),y=!1);return}if(y===!1&&(ae(i.BLEND),y=!0),N!==xd){if(N!==g||lt!==b){if((u!==ns||v!==ns)&&(i.blendEquation(i.FUNC_ADD),u=ns,v=ns),lt)switch(N){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zn:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,S=null,A=null,C=null,L.set(0,0,0),U=0,g=N,b=lt}return}ge=ge||xe,R=R||we,se=se||ke,(xe!==u||ge!==v)&&(i.blendEquationSeparate(bt[xe],bt[ge]),u=xe,v=ge),(we!==E||ke!==S||R!==A||se!==C)&&(i.blendFuncSeparate(P[we],P[ke],P[R],P[se]),E=we,S=ke,A=R,C=se),(ne.equals(L)===!1||Ze!==U)&&(i.blendColor(ne.r,ne.g,ne.b,Ze),L.copy(ne),U=Ze),g=N,b=!1}function ie(N,xe){N.side===In?Be(i.CULL_FACE):ae(i.CULL_FACE);let we=N.side===xn;xe&&(we=!we),Q(we),N.blending===ms&&N.transparent===!1?le(Hi):le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ke=N.stencilWrite;a.setTest(ke),ke&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function ee(N){N!==md?(ae(i.CULL_FACE),N!==D&&(N===Vc?i.cullFace(i.BACK):N===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),D=N}function be(N){N!==k&&(X&&i.lineWidth(N),k=N)}function fe(N,xe,we){N?(ae(i.POLYGON_OFFSET_FILL),(G!==xe||W!==we)&&(i.polygonOffset(xe,we),G=xe,W=we)):Be(i.POLYGON_OFFSET_FILL)}function Ee(N){N?ae(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function at(N){N===void 0&&(N=i.TEXTURE0+J-1),Se!==N&&(i.activeTexture(N),Se=N)}function nt(N,xe,we){we===void 0&&(Se===null?we=i.TEXTURE0+J-1:we=Se);let ke=De[we];ke===void 0&&(ke={type:void 0,texture:void 0},De[we]=ke),(ke.type!==N||ke.texture!==xe)&&(Se!==we&&(i.activeTexture(we),Se=we),i.bindTexture(N,xe||K[N]),ke.type=N,ke.texture=xe)}function T(){let N=De[Se];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){mt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),mt.copy(N))}function Je(N){ft.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ft.copy(N))}function qe(N,xe){let we=c.get(xe);we===void 0&&(we=new WeakMap,c.set(xe,we));let ke=we.get(N);ke===void 0&&(ke=i.getUniformBlockIndex(xe,N.name),we.set(N,ke))}function Re(N,xe){let ke=c.get(xe).get(N);l.get(xe)!==ke&&(i.uniformBlockBinding(xe,ke,N.__bindingPointIndex),l.set(xe,ke))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Se=null,De={},f={},p=new WeakMap,m=[],x=null,y=!1,g=null,u=null,E=null,S=null,v=null,A=null,C=null,L=new ut(0,0,0),U=0,b=!1,M=null,D=null,k=null,G=null,W=null,mt.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Be,bindFramebuffer:Ye,drawBuffers:Fe,useProgram:gt,setBlending:le,setMaterial:ie,setFlipSided:Q,setCullFace:ee,setLineWidth:be,setPolygonOffset:fe,setScissorTest:Ee,activeTexture:at,bindTexture:nt,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:ze,texImage3D:me,updateUBOMapping:qe,uniformBlockBinding:Re,texStorage2D:_e,texStorage3D:Ve,texSubImage2D:q,texSubImage3D:he,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ge,scissor:Ue,viewport:Je,reset:dt}}function Ax(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,d=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function x(T,_){return m?new OffscreenCanvas(T,_):Br("canvas")}function y(T,_,z){let q=1,he=nt(T);if((he.width>z||he.height>z)&&(q=z/Math.max(he.width,he.height)),q<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let Y=Math.floor(q*he.width),Ge=Math.floor(q*he.height);f===void 0&&(f=x(Y,Ge));let _e=_?x(Y,Ge):f;return _e.width=Y,_e.height=Ge,_e.getContext("2d").drawImage(T,0,0,Y,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Y+"x"+Ge+")."),_e}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),T;return T}function g(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,_,z,q,he=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),_===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let Ge=he?Fr:At.getTransfer(q);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Ge===Lt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(T,_){let z;return T?_===null||_===as||_===fr?z=i.DEPTH24_STENCIL8:_===bi?z=i.DEPTH32F_STENCIL8:_===dr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===as||_===fr?z=i.DEPTH_COMPONENT24:_===bi?z=i.DEPTH_COMPONENT32F:_===dr&&(z=i.DEPTH_COMPONENT16),z}function A(T,_){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Yn&&T.minFilter!==hi?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){let _=T.target;_.removeEventListener("dispose",C),U(_),_.isVideoTexture&&d.delete(_)}function L(T){let _=T.target;_.removeEventListener("dispose",L),M(_)}function U(T){let _=n.get(T);if(_.__webglInit===void 0)return;let z=T.source,q=p.get(z);if(q){let he=q[_.__cacheKey];he.usedTimes--,he.usedTimes===0&&b(T),Object.keys(q).length===0&&p.delete(z)}n.remove(T)}function b(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let z=T.source,q=p.get(z);delete q[_.__cacheKey],o.memory.textures--}function M(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let he=0;he<_.__webglFramebuffer[q].length;he++)i.deleteFramebuffer(_.__webglFramebuffer[q][he]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=T.textures;for(let q=0,he=z.length;q<he;q++){let Y=n.get(z[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(T)}let D=0;function k(){D=0}function G(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function W(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function J(T,_){let z=n.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function X(T,_){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){K(z,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function oe(T,_){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){K(z,T,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function Z(T,_){let z=n.get(T);if(T.version>0&&z.__version!==T.version){ae(z,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let Se={[la]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},De={[Yn]:i.NEAREST,[Vd]:i.NEAREST_MIPMAP_NEAREST,[mo]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[os]:i.LINEAR_MIPMAP_LINEAR},Oe={[Yd]:i.NEVER,[Qd]:i.ALWAYS,[Zd]:i.LESS,[sh]:i.LEQUAL,[Jd]:i.EQUAL,[jd]:i.GEQUAL,[$d]:i.GREATER,[Kd]:i.NOTEQUAL};function ot(T,_){if(_.type===bi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===hi||_.magFilter===$a||_.magFilter===mo||_.magFilter===os||_.minFilter===hi||_.minFilter===$a||_.minFilter===mo||_.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Se[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Se[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Se[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,De[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,De[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Oe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yn||_.minFilter!==mo&&_.minFilter!==os||_.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function mt(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));let q=_.source,he=p.get(q);he===void 0&&(he={},p.set(q,he));let Y=W(_);if(Y!==T.__cacheKey){he[Y]===void 0&&(he[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),he[Y].usedTimes++;let Ge=he[T.__cacheKey];Ge!==void 0&&(he[T.__cacheKey].usedTimes--,Ge.usedTimes===0&&b(_)),T.__cacheKey=Y,T.__webglTexture=he[Y].texture}return z}function ft(T,_,z){return Math.floor(Math.floor(T/z)/_)}function st(T,_,z,q){let Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,q,_.data);else{Y.sort((me,Ue)=>me.start-Ue.start);let Ge=0;for(let me=1;me<Y.length;me++){let Ue=Y[Ge],Je=Y[me],qe=Ue.start+Ue.count,Re=ft(Je.start,_.width,4),dt=ft(Ue.start,_.width,4);Je.start<=qe+1&&Re===dt&&ft(Je.start+Je.count-1,_.width,4)===Re?Ue.count=Math.max(Ue.count,Je.start+Je.count-Ue.start):(++Ge,Y[Ge]=Je)}Y.length=Ge+1;let _e=i.getParameter(i.UNPACK_ROW_LENGTH),Ve=i.getParameter(i.UNPACK_SKIP_PIXELS),ze=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let me=0,Ue=Y.length;me<Ue;me++){let Je=Y[me],qe=Math.floor(Je.start/4),Re=Math.ceil(Je.count/4),dt=qe%_.width,N=Math.floor(qe/_.width),xe=Re,we=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,dt,N,xe,we,z,q,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,ze)}}function K(T,_,z){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);let he=mt(T,_),Y=_.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+z);let Ge=n.get(Y);if(Y.version!==Ge.__version||he===!0){t.activeTexture(i.TEXTURE0+z);let _e=At.getPrimaries(At.workingColorSpace),Ve=_.colorSpace===Vi?null:At.getPrimaries(_.colorSpace),ze=_.colorSpace===Vi||_e===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let me=y(_.image,!1,s.maxTextureSize);me=at(_,me);let Ue=r.convert(_.format,_.colorSpace),Je=r.convert(_.type),qe=S(_.internalFormat,Ue,Je,_.colorSpace,_.isVideoTexture);ot(q,_);let Re,dt=_.mipmaps,N=_.isVideoTexture!==!0,xe=Ge.__version===void 0||he===!0,we=Y.dataReady,ke=A(_,me);if(_.isDepthTexture)qe=v(_.format===pr,_.type),xe&&(N?t.texStorage2D(i.TEXTURE_2D,1,qe,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,qe,me.width,me.height,0,Ue,Je,null));else if(_.isDataTexture)if(dt.length>0){N&&xe&&t.texStorage2D(i.TEXTURE_2D,ke,qe,dt[0].width,dt[0].height);for(let ge=0,R=dt.length;ge<R;ge++)Re=dt[ge],N?we&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,Ue,Je,Re.data):t.texImage2D(i.TEXTURE_2D,ge,qe,Re.width,Re.height,0,Ue,Je,Re.data);_.generateMipmaps=!1}else N?(xe&&t.texStorage2D(i.TEXTURE_2D,ke,qe,me.width,me.height),we&&st(_,me,Ue,Je)):t.texImage2D(i.TEXTURE_2D,0,qe,me.width,me.height,0,Ue,Je,me.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,qe,dt[0].width,dt[0].height,me.depth);for(let ge=0,R=dt.length;ge<R;ge++)if(Re=dt[ge],_.format!==Jn)if(Ue!==null)if(N){if(we)if(_.layerUpdates.size>0){let se=dh(Re.width,Re.height,_.format,_.type);for(let ne of _.layerUpdates){let Ze=Re.data.subarray(ne*se/Re.data.BYTES_PER_ELEMENT,(ne+1)*se/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,ne,Re.width,Re.height,1,Ue,Ze)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,me.depth,Ue,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,qe,Re.width,Re.height,me.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,me.depth,Ue,Je,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,qe,Re.width,Re.height,me.depth,0,Ue,Je,Re.data)}else{N&&xe&&t.texStorage2D(i.TEXTURE_2D,ke,qe,dt[0].width,dt[0].height);for(let ge=0,R=dt.length;ge<R;ge++)Re=dt[ge],_.format!==Jn?Ue!==null?N?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,Ue,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,qe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?we&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,Ue,Je,Re.data):t.texImage2D(i.TEXTURE_2D,ge,qe,Re.width,Re.height,0,Ue,Je,Re.data)}else if(_.isDataArrayTexture)if(N){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,qe,me.width,me.height,me.depth),we)if(_.layerUpdates.size>0){let ge=dh(me.width,me.height,_.format,_.type);for(let R of _.layerUpdates){let se=me.data.subarray(R*ge/me.data.BYTES_PER_ELEMENT,(R+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,R,me.width,me.height,1,Ue,Je,se)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ue,Je,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,me.width,me.height,me.depth,0,Ue,Je,me.data);else if(_.isData3DTexture)N?(xe&&t.texStorage3D(i.TEXTURE_3D,ke,qe,me.width,me.height,me.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ue,Je,me.data)):t.texImage3D(i.TEXTURE_3D,0,qe,me.width,me.height,me.depth,0,Ue,Je,me.data);else if(_.isFramebufferTexture){if(xe)if(N)t.texStorage2D(i.TEXTURE_2D,ke,qe,me.width,me.height);else{let ge=me.width,R=me.height;for(let se=0;se<ke;se++)t.texImage2D(i.TEXTURE_2D,se,qe,ge,R,0,Ue,Je,null),ge>>=1,R>>=1}}else if(dt.length>0){if(N&&xe){let ge=nt(dt[0]);t.texStorage2D(i.TEXTURE_2D,ke,qe,ge.width,ge.height)}for(let ge=0,R=dt.length;ge<R;ge++)Re=dt[ge],N?we&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ue,Je,Re):t.texImage2D(i.TEXTURE_2D,ge,qe,Ue,Je,Re);_.generateMipmaps=!1}else if(N){if(xe){let ge=nt(me);t.texStorage2D(i.TEXTURE_2D,ke,qe,ge.width,ge.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,Je,me)}else t.texImage2D(i.TEXTURE_2D,0,qe,Ue,Je,me);g(_)&&u(q),Ge.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ae(T,_,z){if(_.image.length!==6)return;let q=mt(T,_),he=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let Y=n.get(he);if(he.version!==Y.__version||q===!0){t.activeTexture(i.TEXTURE0+z);let Ge=At.getPrimaries(At.workingColorSpace),_e=_.colorSpace===Vi?null:At.getPrimaries(_.colorSpace),Ve=_.colorSpace===Vi||Ge===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ze=_.isCompressedTexture||_.image[0].isCompressedTexture,me=_.image[0]&&_.image[0].isDataTexture,Ue=[];for(let R=0;R<6;R++)!ze&&!me?Ue[R]=y(_.image[R],!0,s.maxCubemapSize):Ue[R]=me?_.image[R].image:_.image[R],Ue[R]=at(_,Ue[R]);let Je=Ue[0],qe=r.convert(_.format,_.colorSpace),Re=r.convert(_.type),dt=S(_.internalFormat,qe,Re,_.colorSpace),N=_.isVideoTexture!==!0,xe=Y.__version===void 0||q===!0,we=he.dataReady,ke=A(_,Je);ot(i.TEXTURE_CUBE_MAP,_);let ge;if(ze){N&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,dt,Je.width,Je.height);for(let R=0;R<6;R++){ge=Ue[R].mipmaps;for(let se=0;se<ge.length;se++){let ne=ge[se];_.format!==Jn?qe!==null?N?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,se,0,0,ne.width,ne.height,qe,ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,se,dt,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,se,0,0,ne.width,ne.height,qe,Re,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,se,dt,ne.width,ne.height,0,qe,Re,ne.data)}}}else{if(ge=_.mipmaps,N&&xe){ge.length>0&&ke++;let R=nt(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,dt,R.width,R.height)}for(let R=0;R<6;R++)if(me){N?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Ue[R].width,Ue[R].height,qe,Re,Ue[R].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,dt,Ue[R].width,Ue[R].height,0,qe,Re,Ue[R].data);for(let se=0;se<ge.length;se++){let Ze=ge[se].image[R].image;N?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,se+1,0,0,Ze.width,Ze.height,qe,Re,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,se+1,dt,Ze.width,Ze.height,0,qe,Re,Ze.data)}}else{N?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,qe,Re,Ue[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,dt,qe,Re,Ue[R]);for(let se=0;se<ge.length;se++){let ne=ge[se];N?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,se+1,0,0,qe,Re,ne.image[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,se+1,dt,qe,Re,ne.image[R])}}}g(_)&&u(i.TEXTURE_CUBE_MAP),Y.__version=he.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Be(T,_,z,q,he,Y){let Ge=r.convert(z.format,z.colorSpace),_e=r.convert(z.type),Ve=S(z.internalFormat,Ge,_e,z.colorSpace),ze=n.get(_),me=n.get(z);if(me.__renderTarget=_,!ze.__hasExternalTextures){let Ue=Math.max(1,_.width>>Y),Je=Math.max(1,_.height>>Y);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,Y,Ve,Ue,Je,_.depth,0,Ge,_e,null):t.texImage2D(he,Y,Ve,Ue,Je,0,Ge,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),fe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,he,me.__webglTexture,0,be(_)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,he,me.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(T,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let q=_.depthTexture,he=q&&q.isDepthTexture?q.type:null,Y=v(_.stencilBuffer,he),Ge=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=be(_);fe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,Y,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,T)}else{let q=_.textures;for(let he=0;he<q.length;he++){let Y=q[he],Ge=r.convert(Y.format,Y.colorSpace),_e=r.convert(Y.type),Ve=S(Y.internalFormat,Ge,_e,Y.colorSpace),ze=be(_);z&&fe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ve,_.width,_.height):fe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,Ve,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);let he=q.__webglTexture,Y=be(_);if(_.depthTexture.format===Qs)fe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(_.depthTexture.format===pr)fe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function gt(T){let _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let he=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",he)};q.addEventListener("dispose",he),_.__depthDisposeCallback=he}_.__boundDepthTexture=q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let q=T.texture.mipmaps;q&&q.length>0?Fe(_.__webglFramebuffer[0],T):Fe(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),Ye(_.__webglDepthbuffer[q],T,!1);else{let he=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Y)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ye(_.__webglDepthbuffer,T,!1);else{let he=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(T,_,z){let q=n.get(T);_!==void 0&&Be(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&gt(T)}function P(T){let _=T.texture,z=n.get(T),q=n.get(_);T.addEventListener("dispose",L);let he=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Ge=he.length>1;if(Ge||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[_e]=[];for(let Ve=0;Ve<_.mipmaps.length;Ve++)z.__webglFramebuffer[_e][Ve]=i.createFramebuffer()}else z.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let _e=0;_e<_.mipmaps.length;_e++)z.__webglFramebuffer[_e]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let _e=0,Ve=he.length;_e<Ve;_e++){let ze=n.get(he[_e]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&fe(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _e=0;_e<he.length;_e++){let Ve=he[_e];z.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[_e]);let ze=r.convert(Ve.format,Ve.colorSpace),me=r.convert(Ve.type),Ue=S(Ve.internalFormat,ze,me,Ve.colorSpace,T.isXRRenderTarget===!0),Je=be(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,z.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ot(i.TEXTURE_CUBE_MAP,_);for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ve=0;Ve<_.mipmaps.length;Ve++)Be(z.__webglFramebuffer[_e][Ve],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve);else Be(z.__webglFramebuffer[_e],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let _e=0,Ve=he.length;_e<Ve;_e++){let ze=he[_e],me=n.get(ze),Ue=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,me.__webglTexture),ot(Ue,ze),Be(z.__webglFramebuffer,T,ze,i.COLOR_ATTACHMENT0+_e,Ue,0),g(ze)&&u(Ue)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_e=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,q.__webglTexture),ot(_e,_),_.mipmaps&&_.mipmaps.length>0)for(let Ve=0;Ve<_.mipmaps.length;Ve++)Be(z.__webglFramebuffer[Ve],T,_,i.COLOR_ATTACHMENT0,_e,Ve);else Be(z.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,_e,0);g(_)&&u(_e),t.unbindTexture()}T.depthBuffer&&gt(T)}function le(T){let _=T.textures;for(let z=0,q=_.length;z<q;z++){let he=_[z];if(g(he)){let Y=E(T),Ge=n.get(he).__webglTexture;t.bindTexture(Y,Ge),u(Y),t.unbindTexture()}}}let ie=[],Q=[];function ee(T){if(T.samples>0){if(fe(T)===!1){let _=T.textures,z=T.width,q=T.height,he=i.COLOR_BUFFER_BIT,Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(T),_e=_.length>1;if(_e)for(let ze=0;ze<_.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);let Ve=T.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ze=0;ze<_.length;ze++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);let me=n.get(_[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,he,i.NEAREST),l===!0&&(ie.length=0,Q.length=0,ie.push(i.COLOR_ATTACHMENT0+ze),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ie.push(Y),Q.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let ze=0;ze<_.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);let me=n.get(_[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function be(T){return Math.min(s.maxSamples,T.samples)}function fe(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ee(T){let _=o.render.frame;d.get(T)!==_&&(d.set(T,_),T.update())}function at(T,_){let z=T.colorSpace,q=T.format,he=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==xs&&z!==Vi&&(At.getTransfer(z)===Lt?(q!==Jn||he!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function nt(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=oe,this.setTextureCube=Z,this.rebindTextures=bt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=fe}function Cx(i,e){function t(n,s=Vi){let r,o=At.getTransfer(s);if(n===fi)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jc)return i.BYTE;if(n===$c)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===eh)return i.RGB;if(n===Jn)return i.RGBA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===pr)return i.DEPTH_STENCIL;if(n===th)return i.RED;if(n===el)return i.RED_INTEGER;if(n===nh)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===go||n===xo||n===yo||n===_o)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===ll||n===cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===ll)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hl||n===dl||n===ul||n===fl||n===pl||n===ml||n===gl||n===xl||n===yl||n===_l||n===vl||n===Ml||n===Sl||n===bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ml)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_l)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ml)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===El||n===Tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wl)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Al||n===Cl||n===Il||n===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ui({vertexShader:Ix,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Me(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends ki{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,p=null,m=null,x=null,y=typeof XRWebGLBinding!="undefined",g=new wh,u={},E=t.getContextAttributes(),S=null,v=null,A=[],C=[],L=new Pe,U=null,b=new Un;b.viewport=new qt;let M=new Un;M.viewport=new qt;let D=[b,M],k=new Oa,G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=A[K];return ae===void 0&&(ae=new nr,A[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=A[K];return ae===void 0&&(ae=new nr,A[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=A[K];return ae===void 0&&(ae=new nr,A[K]=ae),ae.getHandSpace()};function J(K){let ae=C.indexOf(K.inputSource);if(ae===-1)return;let Be=A[ae];Be!==void 0&&(Be.update(K.inputSource,K.frame,c||o),Be.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",oe);for(let K=0;K<A.length;K++){let ae=C[K];ae!==null&&(C[K]=null,A[K].disconnect(ae))}G=null,W=null,g.reset();for(let K in u)delete u[K];e.setRenderTarget(S),m=null,p=null,f=null,s=null,v=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",X),s.addEventListener("inputsourceschange",oe),E.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Be=null,Ye=null,Fe=null;E.depth&&(Fe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Be=E.stencil?pr:Qs,Ye=E.stencil?fr:as);let gt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(gt),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new _i(p.textureWidth,p.textureHeight,{format:Jn,type:fi,depthTexture:new Zr(p.textureWidth,p.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Be),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let Be={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Be),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new _i(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(K){for(let ae=0;ae<K.removed.length;ae++){let Be=K.removed[ae],Ye=C.indexOf(Be);Ye>=0&&(C[Ye]=null,A[Ye].disconnect(Be))}for(let ae=0;ae<K.added.length;ae++){let Be=K.added[ae],Ye=C.indexOf(Be);if(Ye===-1){for(let gt=0;gt<A.length;gt++)if(gt>=C.length){C.push(Be),Ye=gt;break}else if(C[gt]===null){C[gt]=Be,Ye=gt;break}if(Ye===-1)break}let Fe=A[Ye];Fe&&Fe.connect(Be)}}let Z=new F,Se=new F;function De(K,ae,Be){Z.setFromMatrixPosition(ae.matrixWorld),Se.setFromMatrixPosition(Be.matrixWorld);let Ye=Z.distanceTo(Se),Fe=ae.projectionMatrix.elements,gt=Be.projectionMatrix.elements,bt=Fe[14]/(Fe[10]-1),P=Fe[14]/(Fe[10]+1),le=(Fe[9]+1)/Fe[5],ie=(Fe[9]-1)/Fe[5],Q=(Fe[8]-1)/Fe[0],ee=(gt[8]+1)/gt[0],be=bt*Q,fe=bt*ee,Ee=Ye/(-Q+ee),at=Ee*-Q;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(at),K.translateZ(Ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Fe[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let nt=bt+Ee,T=P+Ee,_=be-at,z=fe+(Ye-at),q=le*P/T*nt,he=ie*P/T*nt;K.projectionMatrix.makePerspective(_,z,q,he,nt,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Oe(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ae=K.near,Be=K.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(Be=g.depthFar)),k.near=M.near=b.near=ae,k.far=M.far=b.far=Be,(G!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),G=k.near,W=k.far),k.layers.mask=K.layers.mask|6,b.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;let Ye=K.parent,Fe=k.cameras;Oe(k,Ye);for(let gt=0;gt<Fe.length;gt++)Oe(Fe[gt],Ye);Fe.length===2?De(k,b,M):k.projectionMatrix.copy(b.projectionMatrix),ot(K,k,Ye)};function ot(K,ae,Be){Be===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(Be.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=da*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(K){return u[K]};let mt=null;function ft(K,ae){if(d=ae.getViewerPose(c||o),x=ae,d!==null){let Be=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ye=!1;Be.length!==k.cameras.length&&(k.cameras.length=0,Ye=!0);for(let P=0;P<Be.length;P++){let le=Be[P],ie=null;if(m!==null)ie=m.getViewport(le);else{let ee=f.getViewSubImage(p,le);ie=ee.viewport,P===0&&(e.setRenderTargetTextures(v,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(v))}let Q=D[P];Q===void 0&&(Q=new Un,Q.layers.enable(P),Q.viewport=new qt,D[P]=Q),Q.matrix.fromArray(le.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(le.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ie.x,ie.y,ie.width,ie.height),P===0&&(k.matrix.copy(Q.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ye===!0&&k.cameras.push(Q)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let P=f.getDepthInformation(Be[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(Fe&&Fe.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let P=0;P<Be.length;P++){let le=Be[P].camera;if(le){let ie=u[le];ie||(ie=new Jr,u[le]=ie);let Q=f.getCameraImage(le);ie.sourceTexture=Q}}}}for(let Be=0;Be<A.length;Be++){let Ye=C[Be],Fe=A[Be];Ye!==null&&Fe!==void 0&&Fe.update(Ye,ae,c||o)}mt&&mt(K,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),x=null}let st=new Du;st.setAnimationLoop(ft),this.setAnimationLoop=function(K){mt=K},this.dispose=function(){}}},Rs=new di,Px=new Xt;function Dx(i,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,ah(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,E,S,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),f(g,u)):u.isMeshPhongMaterial?(r(g,u),d(g,u)):u.isMeshStandardMaterial?(r(g,u),p(g,u),u.isMeshPhysicalMaterial&&m(g,u,v)):u.isMeshMatcapMaterial?(r(g,u),x(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),y(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,E,S):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===xn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===xn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let E=e.get(u),S=E.envMap,v=E.envMapRotation;S&&(g.envMap.value=S,Rs.copy(v),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),g.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(Rs)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,E,S){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*E,g.scale.value=S*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,E){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){let E=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lx(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let v=S.program;n.uniformBlockBinding(E,v)}function c(E,S){let v=s[E.id];v===void 0&&(x(E),v=d(E),s[E.id]=v,E.addEventListener("dispose",g));let A=S.program;n.updateUBOMapping(E,A);let C=e.render.frame;r[E.id]!==C&&(p(E),r[E.id]=C)}function d(E){let S=f();E.__bindingPointIndex=S;let v=i.createBuffer(),A=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){let S=s[E.id],v=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,L=v.length;C<L;C++){let U=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,M=U.length;b<M;b++){let D=U[b];if(m(D,C,b,A)===!0){let k=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],W=0;for(let J=0;J<G.length;J++){let X=G[J],oe=y(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,k+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,S,v,A){let C=E.value,L=S+"_"+v;if(A[L]===void 0)return typeof C=="number"||typeof C=="boolean"?A[L]=C:A[L]=C.clone(),!0;{let U=A[L];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return A[L]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function x(E){let S=E.uniforms,v=0,A=16;for(let L=0,U=S.length;L<U;L++){let b=Array.isArray(S[L])?S[L]:[S[L]];for(let M=0,D=b.length;M<D;M++){let k=b[M],G=Array.isArray(k.value)?k.value:[k.value];for(let W=0,J=G.length;W<J;W++){let X=G[W],oe=y(X),Z=v%A,Se=Z%oe.boundary,De=Z+Se;v+=Se,De!==0&&A-De<oe.storage&&(v+=A-De),k.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=oe.storage}}}let C=v%A;return C>0&&(v+=A-C),E.__size=v,E.__cache={},this}function y(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function g(E){let S=E.target;S.removeEventListener("dispose",g);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Nl=class{constructor(e={}){let{canvas:t=eu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=new Uint32Array(4),y=new Int32Array(4),g=null,u=null,E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=Sn;let C=0,L=0,U=null,b=-1,M=null,D=new qt,k=new qt,G=null,W=new ut(0),J=0,X=t.width,oe=t.height,Z=1,Se=null,De=null,Oe=new qt(0,0,X,oe),ot=new qt(0,0,X,oe),mt=!1,ft=new ir,st=!1,K=!1,ae=new Xt,Be=new F,Ye=new qt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function bt(){return U===null?Z:1}let P=n;function le(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ge,!1),P===null){let O="webgl2";if(P=le(O,w),P===null)throw le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ie,Q,ee,be,fe,Ee,at,nt,T,_,z,q,he,Y,Ge,_e,Ve,ze,me,Ue,Je,qe,Re,dt;function N(){ie=new Kg(P),ie.init(),qe=new Cx(P,ie),Q=new Wg(P,ie,e,qe),ee=new Tx(P,ie),Q.reversedDepthBuffer&&p&&ee.buffers.depth.setReversed(!0),be=new e0(P),fe=new fx,Ee=new Ax(P,ie,ee,fe,Q,qe,be),at=new qg(v),nt=new $g(v),T=new op(P),Re=new Gg(P,T),_=new jg(P,T,be,Re),z=new n0(P,_,T,be),me=new t0(P,Q,Ee),_e=new Xg(fe),q=new ux(v,at,nt,ie,Q,Re,_e),he=new Dx(v,fe),Y=new mx,Ge=new Mx(ie),ze=new Hg(v,at,nt,ee,z,m,l),Ve=new wx(v,z,Q),dt=new Lx(P,be,Q,ee),Ue=new Vg(P,ie,be),Je=new Qg(P,ie,be),be.programs=q.programs,v.capabilities=Q,v.extensions=ie,v.properties=fe,v.renderLists=Y,v.shadowMap=Ve,v.state=ee,v.info=be}N();let xe=new Eh(v,P);this.xr=xe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(X,oe,!1))},this.getSize=function(w){return w.set(X,oe)},this.setSize=function(w,O,H=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,oe=O,t.width=Math.floor(w*Z),t.height=Math.floor(O*Z),H===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*Z,oe*Z).floor()},this.setDrawingBufferSize=function(w,O,H){X=w,oe=O,Z=H,t.width=Math.floor(w*H),t.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Oe)},this.setViewport=function(w,O,H,V){w.isVector4?Oe.set(w.x,w.y,w.z,w.w):Oe.set(w,O,H,V),ee.viewport(D.copy(Oe).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(ot)},this.setScissor=function(w,O,H,V){w.isVector4?ot.set(w.x,w.y,w.z,w.w):ot.set(w,O,H,V),ee.scissor(k.copy(ot).multiplyScalar(Z).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(w){ee.setScissorTest(mt=w)},this.setOpaqueSort=function(w){Se=w},this.setTransparentSort=function(w){De=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,H=!0){let V=0;if(w){let I=!1;if(U!==null){let B=U.texture.format;I=B===nl||B===tl||B===el}if(I){let B=U.texture.type,$=B===fi||B===as||B===dr||B===fr||B===ja||B===Qa,j=ze.getClearColor(),de=ze.getClearAlpha(),pe=j.r,ve=j.g,Te=j.b;$?(x[0]=pe,x[1]=ve,x[2]=Te,x[3]=de,P.clearBufferuiv(P.COLOR,0,x)):(y[0]=pe,y[1]=ve,y[2]=Te,y[3]=de,P.clearBufferiv(P.COLOR,0,y))}else V|=P.COLOR_BUFFER_BIT}O&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ze.dispose(),Y.dispose(),Ge.dispose(),fe.dispose(),at.dispose(),nt.dispose(),z.dispose(),Re.dispose(),dt.dispose(),q.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",rt),xe.removeEventListener("sessionend",Yt),ln.stop()};function we(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=be.autoReset,O=Ve.enabled,H=Ve.autoUpdate,V=Ve.needsUpdate,I=Ve.type;N(),be.autoReset=w,Ve.enabled=O,Ve.autoUpdate=H,Ve.needsUpdate=V,Ve.type=I}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function R(w){let O=w.target;O.removeEventListener("dispose",R),se(O)}function se(w){ne(w),fe.remove(w)}function ne(w){let O=fe.get(w).programs;O!==void 0&&(O.forEach(function(H){q.releaseProgram(H)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,V,I,B){O===null&&(O=Fe);let $=I.isMesh&&I.matrixWorld.determinant()<0,j=Kn(w,O,H,V,I);ee.setMaterial(V,$);let de=H.index,pe=1;if(V.wireframe===!0){if(de=_.getWireframeAttribute(H),de===void 0)return;pe=2}let ve=H.drawRange,Te=H.attributes.position,ye=ve.start*pe,$e=(ve.start+ve.count)*pe;B!==null&&(ye=Math.max(ye,B.start*pe),$e=Math.min($e,(B.start+B.count)*pe)),de!==null?(ye=Math.max(ye,0),$e=Math.min($e,de.count)):Te!=null&&(ye=Math.max(ye,0),$e=Math.min($e,Te.count));let et=$e-ye;if(et<0||et===1/0)return;Re.setup(I,V,j,H,de);let tt,Qe=Ue;if(de!==null&&(tt=T.get(de),Qe=Je,Qe.setIndex(tt)),I.isMesh)V.wireframe===!0?(ee.setLineWidth(V.wireframeLinewidth*bt()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(I.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),ee.setLineWidth(Ce*bt()),I.isLineSegments?Qe.setMode(P.LINES):I.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else I.isPoints?Qe.setMode(P.POINTS):I.isSprite&&Qe.setMode(P.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))Qe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Ce=I._multiDrawStarts,wt=I._multiDrawCounts,ct=I._multiDrawCount,nn=de?T.get(de).bytesPerElement:1,Hn=fe.get(V).currentProgram.getUniforms();for(let Ht=0;Ht<ct;Ht++)Hn.setValue(P,"_gl_DrawID",Ht),Qe.render(Ce[Ht]/nn,wt[Ht])}else if(I.isInstancedMesh)Qe.renderInstances(ye,et,I.count);else if(H.isInstancedBufferGeometry){let Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,wt=Math.min(H.instanceCount,Ce);Qe.renderInstances(ye,et,wt)}else Qe.render(ye,et)};function Ze(w,O,H){w.transparent===!0&&w.side===In&&w.forceSinglePass===!1?(w.side=xn,w.needsUpdate=!0,$n(w,O,H),w.side=Bi,w.needsUpdate=!0,$n(w,O,H),w.side=In):$n(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),u=Ge.get(H),u.init(O),S.push(u),H.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),w!==H&&w.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();let V=new Set;return w.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let B=I.material;if(B)if(Array.isArray(B))for(let $=0;$<B.length;$++){let j=B[$];Ze(j,H,I),V.add(j)}else Ze(B,H,I),V.add(B)}),u=S.pop(),V},this.compileAsync=function(w,O,H=null){let V=this.compile(w,O,H);return new Promise(I=>{function B(){if(V.forEach(function($){fe.get($).currentProgram.isReady()&&V.delete($)}),V.size===0){I(w);return}setTimeout(B,10)}ie.get("KHR_parallel_shader_compile")!==null?B():setTimeout(B,10)})};let lt=null;function St(w){lt&&lt(w)}function rt(){ln.stop()}function Yt(){ln.start()}let ln=new Du;ln.setAnimationLoop(St),typeof self!="undefined"&&ln.setContext(self),this.setAnimationLoop=function(w){lt=w,xe.setAnimationLoop(w),w===null?ln.stop():ln.start()},xe.addEventListener("sessionstart",rt),xe.addEventListener("sessionend",Yt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(O),O=xe.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,U),u=Ge.get(w,S.length),u.init(O),S.push(u),ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ft.setFromProjectionMatrix(ae,ci,O.reversedDepth),K=this.localClippingEnabled,st=_e.init(this.clippingPlanes,K),g=Y.get(w,E.length),g.init(),E.push(g),xe.enabled===!0&&xe.isPresenting===!0){let B=v.xr.getDepthSensingMesh();B!==null&&$t(B,O,-1/0,v.sortObjects)}$t(w,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Se,De),gt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,gt&&ze.addToRenderList(g,w),this.info.render.frame++,st===!0&&_e.beginShadows();let H=u.state.shadowsArray;Ve.render(H,w,O),st===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,I=g.transmissive;if(u.setupLights(),O.isArrayCamera){let B=O.cameras;if(I.length>0)for(let $=0,j=B.length;$<j;$++){let de=B[$];Ei(V,I,w,de)}gt&&ze.render(w);for(let $=0,j=B.length;$<j;$++){let de=B[$];Kt(g,w,de,de.viewport)}}else I.length>0&&Ei(V,I,w,O),gt&&ze.render(w),Kt(g,w,O);U!==null&&L===0&&(Ee.updateMultisampleRenderTarget(U),Ee.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(v,w,O),Re.resetDefaultState(),b=-1,M=null,S.pop(),S.length>0?(u=S[S.length-1],st===!0&&_e.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function $t(w,O,H,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ft.intersectsSprite(w)){V&&Ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);let $=z.update(w),j=w.material;j.visible&&g.push(w,$,j,H,Ye.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ft.intersectsObject(w))){let $=z.update(w),j=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ye.copy(w.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Ye.copy($.boundingSphere.center)),Ye.applyMatrix4(w.matrixWorld).applyMatrix4(ae)),Array.isArray(j)){let de=$.groups;for(let pe=0,ve=de.length;pe<ve;pe++){let Te=de[pe],ye=j[Te.materialIndex];ye&&ye.visible&&g.push(w,$,ye,H,Ye.z,Te)}}else j.visible&&g.push(w,$,j,H,Ye.z,null)}}let B=w.children;for(let $=0,j=B.length;$<j;$++)$t(B[$],O,H,V)}function Kt(w,O,H,V){let I=w.opaque,B=w.transmissive,$=w.transparent;u.setupLightsView(H),st===!0&&_e.setGlobalState(v.clippingPlanes,H),V&&ee.viewport(D.copy(V)),I.length>0&&Zt(I,O,H),B.length>0&&Zt(B,O,H),$.length>0&&Zt($,O,H),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ei(w,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new _i(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?ur:fi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));let B=u.state.transmissionRenderTarget[V.id],$=V.viewport||D;B.setSize($.z*v.transmissionResolutionScale,$.w*v.transmissionResolutionScale);let j=v.getRenderTarget(),de=v.getActiveCubeFace(),pe=v.getActiveMipmapLevel();v.setRenderTarget(B),v.getClearColor(W),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),gt&&ze.render(H);let ve=v.toneMapping;v.toneMapping=Gi;let Te=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),st===!0&&_e.setGlobalState(v.clippingPlanes,V),Zt(w,H,V),Ee.updateMultisampleRenderTarget(B),Ee.updateRenderTargetMipmap(B),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let $e=0,et=O.length;$e<et;$e++){let tt=O[$e],Qe=tt.object,Ce=tt.geometry,wt=tt.material,ct=tt.group;if(wt.side===In&&Qe.layers.test(V.layers)){let nn=wt.side;wt.side=xn,wt.needsUpdate=!0,Rn(Qe,H,V,Ce,wt,ct),wt.side=nn,wt.needsUpdate=!0,ye=!0}}ye===!0&&(Ee.updateMultisampleRenderTarget(B),Ee.updateRenderTargetMipmap(B))}v.setRenderTarget(j,de,pe),v.setClearColor(W,J),Te!==void 0&&(V.viewport=Te),v.toneMapping=ve}function Zt(w,O,H){let V=O.isScene===!0?O.overrideMaterial:null;for(let I=0,B=w.length;I<B;I++){let $=w[I],j=$.object,de=$.geometry,pe=$.group,ve=$.material;ve.allowOverride===!0&&V!==null&&(ve=V),j.layers.test(H.layers)&&Rn(j,O,H,de,ve,pe)}}function Rn(w,O,H,V,I,B){w.onBeforeRender(v,O,H,V,I,B),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),I.onBeforeRender(v,O,H,V,w,B),I.transparent===!0&&I.side===In&&I.forceSinglePass===!1?(I.side=xn,I.needsUpdate=!0,v.renderBufferDirect(H,O,V,I,w,B),I.side=Bi,I.needsUpdate=!0,v.renderBufferDirect(H,O,V,I,w,B),I.side=In):v.renderBufferDirect(H,O,V,I,w,B),w.onAfterRender(v,O,H,V,I,B)}function $n(w,O,H){O.isScene!==!0&&(O=Fe);let V=fe.get(w),I=u.state.lights,B=u.state.shadowsArray,$=I.state.version,j=q.getParameters(w,I.state,B,O,H),de=q.getProgramCacheKey(j),pe=V.programs;V.environment=w.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(w.isMeshStandardMaterial?nt:at).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,pe===void 0&&(w.addEventListener("dispose",R),pe=new Map,V.programs=pe);let ve=pe.get(de);if(ve!==void 0){if(V.currentProgram===ve&&V.lightsStateVersion===$)return Pn(w,j),ve}else j.uniforms=q.getUniforms(w),w.onBeforeCompile(j,v),ve=q.acquireProgram(j,de),pe.set(de,ve),V.uniforms=j.uniforms;let Te=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Te.clippingPlanes=_e.uniform),Pn(w,j),V.needsLights=Ai(w),V.lightsStateVersion=$,V.needsLights&&(Te.ambientLightColor.value=I.state.ambient,Te.lightProbe.value=I.state.probe,Te.directionalLights.value=I.state.directional,Te.directionalLightShadows.value=I.state.directionalShadow,Te.spotLights.value=I.state.spot,Te.spotLightShadows.value=I.state.spotShadow,Te.rectAreaLights.value=I.state.rectArea,Te.ltc_1.value=I.state.rectAreaLTC1,Te.ltc_2.value=I.state.rectAreaLTC2,Te.pointLights.value=I.state.point,Te.pointLightShadows.value=I.state.pointShadow,Te.hemisphereLights.value=I.state.hemi,Te.directionalShadowMap.value=I.state.directionalShadowMap,Te.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Te.spotShadowMap.value=I.state.spotShadowMap,Te.spotLightMatrix.value=I.state.spotLightMatrix,Te.spotLightMap.value=I.state.spotLightMap,Te.pointShadowMap.value=I.state.pointShadowMap,Te.pointShadowMatrix.value=I.state.pointShadowMatrix),V.currentProgram=ve,V.uniformsList=null,ve}function Fn(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=yr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Pn(w,O){let H=fe.get(w);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Kn(w,O,H,V,I){O.isScene!==!0&&(O=Fe),Ee.resetTextureUnits();let B=O.fog,$=V.isMeshStandardMaterial?O.environment:null,j=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:xs,de=(V.isMeshStandardMaterial?nt:at).get(V.envMap||$),pe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ve=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!H.morphAttributes.position,ye=!!H.morphAttributes.normal,$e=!!H.morphAttributes.color,et=Gi;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(et=v.toneMapping);let tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=tt!==void 0?tt.length:0,Ce=fe.get(V),wt=u.state.lights;if(st===!0&&(K===!0||w!==M)){let jt=w===M&&V.id===b;_e.setState(V,w,jt)}let ct=!1;V.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==wt.state.version||Ce.outputColorSpace!==j||I.isBatchedMesh&&Ce.batching===!1||!I.isBatchedMesh&&Ce.batching===!0||I.isBatchedMesh&&Ce.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ce.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ce.instancing===!1||!I.isInstancedMesh&&Ce.instancing===!0||I.isSkinnedMesh&&Ce.skinning===!1||!I.isSkinnedMesh&&Ce.skinning===!0||I.isInstancedMesh&&Ce.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ce.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ce.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ce.instancingMorph===!1&&I.morphTexture!==null||Ce.envMap!==de||V.fog===!0&&Ce.fog!==B||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==_e.numPlanes||Ce.numIntersection!==_e.numIntersection)||Ce.vertexAlphas!==pe||Ce.vertexTangents!==ve||Ce.morphTargets!==Te||Ce.morphNormals!==ye||Ce.morphColors!==$e||Ce.toneMapping!==et||Ce.morphTargetsCount!==Qe)&&(ct=!0):(ct=!0,Ce.__version=V.version);let nn=Ce.currentProgram;ct===!0&&(nn=$n(V,O,I));let Hn=!1,Ht=!1,Tn=!1,Nt=nn.getUniforms(),yn=Ce.uniforms;if(ee.useProgram(nn.program)&&(Hn=!0,Ht=!0,Tn=!0),V.id!==b&&(b=V.id,Ht=!0),Hn||M!==w){ee.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Nt.setValue(P,"projectionMatrix",w.projectionMatrix),Nt.setValue(P,"viewMatrix",w.matrixWorldInverse);let cn=Nt.map.cameraPosition;cn!==void 0&&cn.setValue(P,Be.setFromMatrixPosition(w.matrixWorld)),Q.logarithmicDepthBuffer&&Nt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Nt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ht=!0,Tn=!0)}if(I.isSkinnedMesh){Nt.setOptional(P,I,"bindMatrix"),Nt.setOptional(P,I,"bindMatrixInverse");let jt=I.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Nt.setValue(P,"boneTexture",jt.boneTexture,Ee))}I.isBatchedMesh&&(Nt.setOptional(P,I,"batchingTexture"),Nt.setValue(P,"batchingTexture",I._matricesTexture,Ee),Nt.setOptional(P,I,"batchingIdTexture"),Nt.setValue(P,"batchingIdTexture",I._indirectTexture,Ee),Nt.setOptional(P,I,"batchingColorTexture"),I._colorsTexture!==null&&Nt.setValue(P,"batchingColorTexture",I._colorsTexture,Ee));let _n=H.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&me.update(I,H,nn),(Ht||Ce.receiveShadow!==I.receiveShadow)&&(Ce.receiveShadow=I.receiveShadow,Nt.setValue(P,"receiveShadow",I.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(yn.envMap.value=de,yn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(yn.envMapIntensity.value=O.environmentIntensity),Ht&&(Nt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&Ti(yn,Tn),B&&V.fog===!0&&he.refreshFogUniforms(yn,B),he.refreshMaterialUniforms(yn,V,Z,oe,u.state.transmissionRenderTarget[w.id]),yr.upload(P,Fn(Ce),yn,Ee)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(yr.upload(P,Fn(Ce),yn,Ee),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Nt.setValue(P,"center",I.center),Nt.setValue(P,"modelViewMatrix",I.modelViewMatrix),Nt.setValue(P,"normalMatrix",I.normalMatrix),Nt.setValue(P,"modelMatrix",I.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let jt=V.uniformsGroups;for(let cn=0,ls=jt.length;cn<ls;cn++){let gi=jt[cn];dt.update(gi,nn),dt.bind(gi,nn)}}return nn}function Ti(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Ai(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,O,H){let V=fe.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),fe.get(w.texture).__webglTexture=O,fe.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let H=fe.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};let pi=P.createFramebuffer();this.setRenderTarget=function(w,O=0,H=0){U=w,C=O,L=H;let V=!0,I=null,B=!1,$=!1;if(w){let de=fe.get(w);if(de.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(de.__webglFramebuffer===void 0)Ee.setupRenderTarget(w);else if(de.__hasExternalTextures)Ee.rebindTextures(w,fe.get(w.texture).__webglTexture,fe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Te=w.depthTexture;if(de.__boundDepthTexture!==Te){if(Te!==null&&fe.has(Te)&&(w.width!==Te.image.width||w.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(w)}}let pe=w.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&($=!0);let ve=fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ve[O])?I=ve[O][H]:I=ve[O],B=!0):w.samples>0&&Ee.useMultisampledRTT(w)===!1?I=fe.get(w).__webglMultisampledFramebuffer:Array.isArray(ve)?I=ve[H]:I=ve,D.copy(w.viewport),k.copy(w.scissor),G=w.scissorTest}else D.copy(Oe).multiplyScalar(Z).floor(),k.copy(ot).multiplyScalar(Z).floor(),G=mt;if(H!==0&&(I=pi),ee.bindFramebuffer(P.FRAMEBUFFER,I)&&V&&ee.drawBuffers(w,I),ee.viewport(D),ee.scissor(k),ee.setScissorTest(G),B){let de=fe.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,H)}else if($){let de=O;for(let pe=0;pe<w.textures.length;pe++){let ve=fe.get(w.textures[pe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+pe,ve.__webglTexture,H,de)}}else if(w!==null&&H!==0){let de=fe.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,H)}b=-1},this.readRenderTargetPixels=function(w,O,H,V,I,B,$,j=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$!==void 0&&(de=de[$]),de){ee.bindFramebuffer(P.FRAMEBUFFER,de);try{let pe=w.textures[j],ve=pe.format,Te=pe.type;if(!Q.textureFormatReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&H>=0&&H<=w.height-I&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+j),P.readPixels(O,H,V,I,qe.convert(ve),qe.convert(Te),B))}finally{let pe=U!==null?fe.get(U).__webglFramebuffer:null;ee.bindFramebuffer(P.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(w,O,H,V,I,B,$,j=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$!==void 0&&(de=de[$]),de)if(O>=0&&O<=w.width-V&&H>=0&&H<=w.height-I){ee.bindFramebuffer(P.FRAMEBUFFER,de);let pe=w.textures[j],ve=pe.format,Te=pe.type;if(!Q.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.bufferData(P.PIXEL_PACK_BUFFER,B.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+j),P.readPixels(O,H,V,I,qe.convert(ve),qe.convert(Te),0);let $e=U!==null?fe.get(U).__webglFramebuffer:null;ee.bindFramebuffer(P.FRAMEBUFFER,$e);let et=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await tu(P,et,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,B),P.deleteBuffer(ye),P.deleteSync(et),B}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,H=0){let V=Math.pow(2,-H),I=Math.floor(w.image.width*V),B=Math.floor(w.image.height*V),$=O!==null?O.x:0,j=O!==null?O.y:0;Ee.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,$,j,I,B),ee.unbindTexture()};let mi=P.createFramebuffer(),Xi=P.createFramebuffer();this.copyTextureToTexture=function(w,O,H=null,V=null,I=0,B=null){B===null&&(I!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),B=I,I=0):B=0);let $,j,de,pe,ve,Te,ye,$e,et,tt=w.isCompressedTexture?w.mipmaps[B]:w.image;if(H!==null)$=H.max.x-H.min.x,j=H.max.y-H.min.y,de=H.isBox3?H.max.z-H.min.z:1,pe=H.min.x,ve=H.min.y,Te=H.isBox3?H.min.z:0;else{let _n=Math.pow(2,-I);$=Math.floor(tt.width*_n),j=Math.floor(tt.height*_n),w.isDataArrayTexture?de=tt.depth:w.isData3DTexture?de=Math.floor(tt.depth*_n):de=1,pe=0,ve=0,Te=0}V!==null?(ye=V.x,$e=V.y,et=V.z):(ye=0,$e=0,et=0);let Qe=qe.convert(O.format),Ce=qe.convert(O.type),wt;O.isData3DTexture?(Ee.setTexture3D(O,0),wt=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ee.setTexture2DArray(O,0),wt=P.TEXTURE_2D_ARRAY):(Ee.setTexture2D(O,0),wt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let ct=P.getParameter(P.UNPACK_ROW_LENGTH),nn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Hn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ht=P.getParameter(P.UNPACK_SKIP_ROWS),Tn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,ve),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);let Nt=w.isDataArrayTexture||w.isData3DTexture,yn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let _n=fe.get(w),jt=fe.get(O),cn=fe.get(_n.__renderTarget),ls=fe.get(jt.__renderTarget);ee.bindFramebuffer(P.READ_FRAMEBUFFER,cn.__webglFramebuffer),ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,ls.__webglFramebuffer);for(let gi=0;gi<de;gi++)Nt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(w).__webglTexture,I,Te+gi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(O).__webglTexture,B,et+gi)),P.blitFramebuffer(pe,ve,$,j,ye,$e,$,j,P.DEPTH_BUFFER_BIT,P.NEAREST);ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(I!==0||w.isRenderTargetTexture||fe.has(w)){let _n=fe.get(w),jt=fe.get(O);ee.bindFramebuffer(P.READ_FRAMEBUFFER,mi),ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xi);for(let cn=0;cn<de;cn++)Nt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_n.__webglTexture,I,Te+cn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_n.__webglTexture,I),yn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,jt.__webglTexture,B,et+cn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,jt.__webglTexture,B),I!==0?P.blitFramebuffer(pe,ve,$,j,ye,$e,$,j,P.COLOR_BUFFER_BIT,P.NEAREST):yn?P.copyTexSubImage3D(wt,B,ye,$e,et+cn,pe,ve,$,j):P.copyTexSubImage2D(wt,B,ye,$e,pe,ve,$,j);ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else yn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(wt,B,ye,$e,et,$,j,de,Qe,Ce,tt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(wt,B,ye,$e,et,$,j,de,Qe,tt.data):P.texSubImage3D(wt,B,ye,$e,et,$,j,de,Qe,Ce,tt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,ye,$e,$,j,Qe,Ce,tt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,ye,$e,tt.width,tt.height,Qe,tt.data):P.texSubImage2D(P.TEXTURE_2D,B,ye,$e,$,j,Qe,Ce,tt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ct),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,nn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Hn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ht),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Tn),B===0&&O.generateMipmaps&&P.generateMipmap(wt),ee.unbindTexture()},this.initRenderTarget=function(w){fe.get(w).__webglFramebuffer===void 0&&Ee.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ee.setTextureCube(w,0):w.isData3DTexture?Ee.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ee.setTexture2DArray(w,0):Ee.setTexture2D(w,0),ee.unbindTexture()},this.resetState=function(){C=0,L=0,U=null,ee.reset(),Re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};function Nx(i){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):0}function Fx(){let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d",{willReadFrequently:!0});if(!e)return null;let t=e.createLinearGradient(0,0,0,i.height);t.addColorStop(0,"#2b3f6f"),t.addColorStop(.55,"#17244a"),t.addColorStop(1,"#0d1326"),e.fillStyle=t,e.fillRect(0,0,i.width,i.height),e.save(),e.globalAlpha=.09,e.strokeStyle="#ffffff",e.lineWidth=1;let n=16;for(let l=0;l<=i.height;l+=n)e.beginPath(),e.moveTo(0,l+.5),e.lineTo(i.width,l+.5),e.stroke();for(let l=0;l<=i.width;l+=n)e.beginPath(),e.moveTo(l+.5,0),e.lineTo(l+.5,i.height),e.stroke();e.restore();let s=e.createRadialGradient(i.width*.55,i.height*.45,i.width*.08,i.width*.55,i.height*.45,i.width*.85);s.addColorStop(0,"rgba(255, 255, 255, 0.06)"),s.addColorStop(1,"rgba(0, 0, 0, 0.35)"),e.fillStyle=s,e.fillRect(0,0,i.width,i.height);let r=e.getImageData(0,0,i.width,i.height),o=r.data;for(let l=0;l<o.length;l+=4){let c=(Math.random()-.5)*18;o[l+0]=Math.max(0,Math.min(255,o[l+0]+c)),o[l+1]=Math.max(0,Math.min(255,o[l+1]+c)),o[l+2]=Math.max(0,Math.min(255,o[l+2]+c))}e.putImageData(r,0,0);let a=new _s(i);return"colorSpace"in a&&(a.colorSpace=Sn),a.wrapS=Cn,a.wrapT=Cn,a.repeat.set(1,1),a.anisotropy=4,a}function Ox(i=128){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d");if(!t)return null;let n=i*.08,s=i*.5,r=t.createRadialGradient(i/2,i/2,n,i/2,i/2,s);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.35,"rgba(255,255,255,0.55)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,i,i);let o=new _s(e);return o.wrapS=Cn,o.wrapT=Cn,o.anisotropy=1,o}function Bx(i=64,e=8){let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d");if(!n)return null;let s=n.createLinearGradient(0,0,i,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.15,"rgba(255,255,255,0.9)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,i,e),n.globalCompositeOperation="destination-in";let r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(0,0,i,e);let o=new _s(t);return o.wrapS=Cn,o.wrapT=Cn,o.anisotropy=1,o}function kx(i,e,t){let n=i/2,s=e/2,r=Math.max(0,Math.min(Math.min(n,s),t)),o=-n,a=-s,l=n,c=s,d=new vs;return d.moveTo(o+r,a),d.lineTo(l-r,a),d.quadraticCurveTo(l,a,l,a+r),d.lineTo(l,c-r),d.quadraticCurveTo(l,c,l-r,c),d.lineTo(o+r,c),d.quadraticCurveTo(o,c,o,c-r),d.lineTo(o,a+r),d.quadraticCurveTo(o,a,o+r,a),d}function pn(i,e,t,n){let s=kx(i,e,n),r=new lr(s,{depth:t,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:Math.min(2,n*.45),bevelThickness:Math.min(2,n*.45)});return r.translate(0,0,-t/2),r}function Wi(i,e,t){var n;e&&(i.remove(e),(n=e.traverse)==null||n.call(e,s=>{var o;if(!s.isMesh)return;let r=Array.isArray(s.material)?s.material:[s.material];for(let a of r)!a||t.has(a)||(o=a.dispose)==null||o.call(a)}))}function He(i){return new ut(i)}function Ou({canvas:i,width:e,height:t,preserveDrawingBuffer:n=!1}){let s=!!n,r=null;if(s)try{r=i.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!0})||null}catch(re){r=null}let o=new Nl({canvas:i,context:r||void 0,antialias:!s,alpha:!1,preserveDrawingBuffer:!!n,powerPreference:"high-performance"});o.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),o.setSize(e,t,!1),o.shadowMap.enabled=!s,o.shadowMap.type=ka,"outputColorSpace"in o&&(o.outputColorSpace=Sn),o.toneMapping=Ya,o.toneMappingExposure=s?1.75:1.65;let a=new qr,l=new Es(0,e,0,t,.1,2e3);l.position.set(0,0,1e3),l.lookAt(0,0,0);let c=new fo(16777215,.9);a.add(c);let d=new hr(16777215,2.2);d.position.set(e*.15,t*.1,520),d.castShadow=!s,d.shadow.mapSize.set(1024,1024),d.shadow.bias=-2e-4,d.shadow.normalBias=.002,d.shadow.camera.near=1,d.shadow.camera.far=1400,d.shadow.camera.left=-e/2,d.shadow.camera.right=e/2,d.shadow.camera.top=t/2,d.shadow.camera.bottom=-t/2;let f=new rn;f.position.set(e/2,t/2,0),a.add(f),d.target=f,a.add(d);let p=new hr(8046591,.75);p.position.set(e*.92,t*.9,480),p.castShadow=!1,a.add(p);let m=new uo(9097983,725024,.5);m.position.set(0,-1,0),a.add(m);let x=s?null:Fx(),y=Ox(128),g=Bx(64,8),u=new Mi(e,t),E=new dn({map:x||null,color:x?16777215:1186355,side:In}),S=new Me(u,E);S.position.set(e/2,t/2,-20),a.add(S);let v=new co({color:0,opacity:.22});v.side=In;let A=new Me(u,v);A.position.set(e/2,t/2,-10),A.receiveShadow=!s,a.add(A);let C=(()=>{let re=new vs;re.moveTo(0,-11),re.lineTo(-10,6),re.lineTo(0,1),re.lineTo(10,6),re.closePath();let te=new lr(re,{depth:6,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:1,bevelThickness:1});return te.translate(0,0,-3),te})(),L=pn(24,24,10,4),U=pn(48,32,12,6),b=pn(40,18,10,6),M=pn(34,18,2,6),D=new gn(12,10,3),k=new gn(2.2,22,1.6),G=new wn(4,12,12),W=new Mi(1,1),J=(()=>{let re=new un,te=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),ue=new Uint16Array([0,1,1,2,2,3,3,0]);return re.setAttribute("position",new bn(te,3)),re.setIndex(new bn(ue,1)),re})(),X=new Mi(26,6);X.translate(-13,0,0);let oe=new Mi(16,12),Z=pn(14,14,14,3),Se=new gn(8,8,8),De=new fn(7,7,16,18,1,!1),Oe=new fn(7.6,7.6,3,18,1,!1),ot=new fn(4.2,4.2,11,18,1,!1),mt=new gn(1.2,9.5,1.2),ft=new wn(8,16,16),st=new gn(4,2,2),K=new fn(1.2,1.6,6,10),ae=new wn(3.2,12,12),Be=pn(3.2,10.2,2.4,1.2),Ye=pn(10.2,3.2,2.4,1.2),Fe=new rr(5,10,6,12),gt=pn(14,10,6,2),bt=pn(16,18,6,6),P=pn(6,4,1.4,1.2),le=new gn(2.2,12,1.2),ie=new rr(2.6,6.2,4,10),Q=new fn(1.6,1.6,1.2,14),ee=new $r(2.2,5.5,10),be=new Ss(6.5,1.2,10,18),fe=new fn(12,10,22,18,1,!1),Ee=new fn(13,13,4,18,1,!1),at=new gn(1.4,18,14),nt=new Ss(7,1.1,10,22),T=pn(42,28,12,6),_=new wn(2.3,10,10),z=new wn(3.3,12,12),q=new wn(1.45,10,10),he=new gn(2.2,2.2,9),Y=new oo(14,0),Ge=new wn(7,16,16),_e=new lo(5,0),Ve=new wn(10,18,18),ze=new wn(11.3,20,20),me=new Ss(12,1.2,10,26),Ue=new wn(3.2,12,12),Je=new fn(10,12,10,16),qe=pn(18,12,10,4),Re=new fn(2,2,10,10),dt=new fn(1.1,1.4,11,8),N=new fn(2.2,2.2,2,10),xe=new wn(2.4,12,12),we=new fn(.8,.8,9,8),ke=new wn(1.4,10,10),ge=pn(14,6,1.4,2),R=new fn(2.4,2.4,2.4,12),se=pn(16,12,3,2),ne=pn(20,20,4,3),Ze=pn(14,10,1.6,2),lt=pn(16,6,1.6,2),St=pn(8,6,1.2,2),rt=new gn(3.5,3.5,1.2),Yt=new gn(11,.7,.6),ln=(()=>{let ue=new ao(18,26,48);return ue.rotateX(Math.PI),ue})(),$t=new it({color:He("#f4f4f4"),roughness:.35,metalness:.15,emissive:new ut(0),emissiveIntensity:0}),Kt=new it({color:He("#3d6b86"),roughness:.55,metalness:.1}),Ei=new it({color:He("#4b7f9b"),roughness:.55,metalness:.1}),Zt=new it({color:He("#0b1020"),roughness:.9,metalness:0,transparent:!0,opacity:.85}),Rn=new it({color:He("#f2c94c"),roughness:.35,metalness:.2,emissive:He("#6a4b00"),emissiveIntensity:.18}),$n=new dn({color:725024,side:xn,transparent:!0,opacity:s?.62:.42,depthWrite:!1,toneMapped:!1});$n.userData.fixedOpacity=!0;let Fn=new dn({color:16765786,alphaMap:y||null,transparent:!0,opacity:s?.62:.42,blending:Zn,depthWrite:!1,toneMapped:!1});Fn.userData.fixedOpacity=!0;let Pn=new dn({color:6805247,alphaMap:y||null,transparent:!0,opacity:s?.62:.42,blending:Zn,depthWrite:!1,toneMapped:!1});Pn.userData.fixedOpacity=!0;let Kn=new dn({color:16751164,alphaMap:y||null,transparent:!0,opacity:s?.62:.42,blending:Zn,depthWrite:!1,toneMapped:!1});Kn.userData.fixedOpacity=!0;let Ti=new dn({color:3967999,alphaMap:y||null,transparent:!0,opacity:s?.6:.4,blending:Zn,depthWrite:!1,toneMapped:!1});Ti.userData.fixedOpacity=!0;let Ai=new dn({color:16731558,alphaMap:y||null,transparent:!0,opacity:s?.6:.4,blending:Zn,depthWrite:!1,toneMapped:!1});Ai.userData.fixedOpacity=!0;let pi=new dn({color:16726843,alphaMap:y||null,transparent:!0,opacity:s?.55:.35,blending:Zn,depthWrite:!1,toneMapped:!1});pi.userData.fixedOpacity=!0;let mi=new dn({color:16765786,alphaMap:g||null,transparent:!0,opacity:s?.9:.7,blending:Zn,depthWrite:!1,toneMapped:!1});mi.userData.fixedOpacity=!0;let Xi=new dn({color:6805247,alphaMap:g||null,transparent:!0,opacity:s?.9:.7,blending:Zn,depthWrite:!1,toneMapped:!1});Xi.userData.fixedOpacity=!0;let w=new it({color:He("#fff2a8"),roughness:.25,metalness:.05,emissive:He("#ffd35a"),emissiveIntensity:.55}),O=new it({color:He("#c7f3ff"),roughness:.18,metalness:.05,emissive:He("#47c9ff"),emissiveIntensity:.75}),H=new it({color:He("#e9eef8"),roughness:.85,metalness:0,side:In}),V=new it({color:He("#e04444"),roughness:.4,metalness:.05}),I=new it({color:He("#7a4b2c"),roughness:.75,metalness:0}),B=new it({color:He("#ffd6d6"),roughness:.12,metalness:0,emissive:He("#ffffff"),emissiveIntensity:.08,transparent:!0,opacity:.8}),$=new it({color:He("#4bbf5a"),roughness:.7,metalness:0}),j=new it({color:He("#f4f4f4"),roughness:.22,metalness:.06,emissive:He("#ffd35a"),emissiveIntensity:.18}),de=new bs({color:He("#67d6ff"),roughness:.05,metalness:0,transmission:.92,thickness:2,ior:1.25,clearcoat:.4,clearcoatRoughness:.1});de.userData.fixedOpacity=!0;let pe=new it({color:He("#0b6aa6"),roughness:.25,metalness:0,emissive:He("#2bbcff"),emissiveIntensity:.85}),ve=new it({color:He("#e6e8ed"),roughness:.55,metalness:.18}),Te=new it({color:He("#c7f3ff"),roughness:.35,metalness:0,emissive:He("#47c9ff"),emissiveIntensity:.35}),ye=new it({color:He("#ff9a3c"),roughness:.25,metalness:.1,emissive:He("#ff5a00"),emissiveIntensity:.45}),$e=new it({color:He("#3c8bff"),roughness:.25,metalness:.12,emissive:He("#2b4bff"),emissiveIntensity:.4}),et=new it({color:He("#f2c94c"),roughness:.3,metalness:.18,emissive:He("#6a4b00"),emissiveIntensity:.25}),tt=new it({color:He("#aab3c5"),roughness:.65,metalness:.05}),Qe=new it({color:He("#c2cad8"),roughness:.55,metalness:.08}),Ce=new it({color:He("#7d8698"),roughness:.75,metalness:.04}),wt=new it({color:He("#e9d9c6"),roughness:.75,metalness:0}),ct=new it({color:He("#d7c2aa"),roughness:.42,metalness:.05}),nn=new it({color:He("#6a4b00"),roughness:.85,metalness:0}),Hn=new it({color:He("#f4f4f4"),roughness:.25,metalness:0}),Ht=new it({color:He("#0f0f12"),roughness:.85,metalness:0}),Tn=new bs({color:He("#ff6b7a"),roughness:.22,metalness:.12,clearcoat:.6,clearcoatRoughness:.08,emissive:He("#b4002f"),emissiveIntensity:.6,flatShading:!0}),Nt=new it({color:He("#ff4da6"),roughness:.18,metalness:0,emissive:He("#ff1f7a"),emissiveIntensity:.85}),yn=new it({color:He("#2a0010"),roughness:.55,metalness:.1,emissive:He("#350013"),emissiveIntensity:.35,flatShading:!0}),_n=new it({color:He("#ff3b3b"),roughness:.15,metalness:.25,emissive:He("#550000"),emissiveIntensity:.25}),jt=new bs({color:He("#ffffff"),roughness:.06,metalness:0,transmission:.9,thickness:1.6,ior:1.3,clearcoat:.35,clearcoatRoughness:.1,transparent:!0,opacity:.9});jt.userData.fixedOpacity=!0;let cn=new it({color:He("#ff3b3b"),roughness:.25,metalness:.15,emissive:He("#ff1f1f"),emissiveIntensity:.65}),ls=new it({color:He("#2a0010"),roughness:.5,metalness:0}),gi=new it({color:He("#1a1a1a"),roughness:.7,metalness:0}),Ol=new it({color:He("#e6e8ed"),roughness:.55,metalness:.08}),Bl=new it({color:He("#f2c94c"),roughness:.4,metalness:.15,emissive:He("#4a3400"),emissiveIntensity:.12}),jn=new it({color:He("#2a2f3c"),roughness:.6,metalness:.2}),kl=new it({color:He("#2a2f3c"),roughness:.85,metalness:.12}),Mo=new it({color:He("#c7f3ff"),roughness:.18,metalness:.05,emissive:He("#47c9ff"),emissiveIntensity:.85}),zl=new it({color:He("#0b1020"),roughness:.75,metalness:.05,emissive:He("#67d6ff"),emissiveIntensity:.2,transparent:!0,opacity:.9}),Rh=new it({color:He("#f7f0a6"),roughness:.65,metalness:0}),Hl=new it({color:He("#2a2f3c"),roughness:.65,metalness:.18}),Gl=new it({color:He("#e6e8ed"),roughness:.85,metalness:0}),Vl=new it({color:He("#aab3c5"),roughness:.45,metalness:.35}),Wl=new it({color:He("#0b1020"),roughness:.9,metalness:0,transparent:!0,opacity:.85}),So=new dn({color:725024,transparent:!0,opacity:.72,depthWrite:!1,toneMapped:!1});So.userData.fixedOpacity=!0;let Xl=new sr({color:16777215,transparent:!0,opacity:.28,toneMapped:!1}),Ph=He("#d4a456"),ku=(re,{stunned:te=0,isHit:ue=!1})=>{if(!re||!re.material||Array.isArray(re.material))return;let Ie=re.material;if(!(Ie.userData&&Ie.userData.fixedOpacity)&&("opacity"in Ie&&(Ie.transparent=!0,Ie.opacity=te>0?.65:1),"emissive"in Ie)){let Ae=Number.isFinite(re.userData.baseEmissiveIntensity)?re.userData.baseEmissiveIntensity:Ie.emissiveIntensity||0;Ie.emissiveIntensity=Ae+(ue?.35:0)}},xt=(re,te=1.12)=>{let ue=new Me(re.geometry,$n);return ue.scale.set(te,te,te),ue.castShadow=!1,ue.receiveShadow=!1,ue.renderOrder=-1,re.add(ue),ue},Qn=(re,te,ue,Ie=-2)=>{let Ae=new Me(W,te);return Ae.position.set(0,0,Ie),Ae.scale.set(ue,ue,1),Ae.castShadow=!1,Ae.receiveShadow=!1,Ae.renderOrder=-2,re.add(Ae),Ae},qi=new Me(C,$t);qi.castShadow=!s,qi.receiveShadow=!1,a.add(qi),xt(qi,1.16);let ei=new sn,bo=new Me(b,Ei);bo.castShadow=!s,bo.position.set(0,-10,6),xt(bo,1.08);let wo=new Me(U,Kt);wo.castShadow=!s,wo.position.set(0,0,8),xt(wo,1.08);let Eo=new Me(D,Rn);Eo.castShadow=!s,Eo.position.set(0,6,14),xt(Eo,1.12);let To=new Me(M,Zt);To.castShadow=!1,To.position.set(0,5,14.2),ei.add(To),xt(To,1.06);let vr=new Me(nt,Rn);vr.castShadow=!s,vr.rotation.x=Math.PI/2,vr.position.set(0,12,15.2),ei.add(vr),xt(vr,1.06),ei.add(bo),ei.add(wo),ei.add(Eo),a.add(ei);let Gn=new Me(ln,new it({color:He("#67d6ff"),transparent:!0,opacity:0,roughness:.3,metalness:0,emissive:He("#1a7cff"),emissiveIntensity:.6,side:In}));Gn.position.set(e/2,t/2,-9.5),Gn.visible=!1,a.add(Gn);let Ci=new Set([$t,Kt,Ei,Zt,Rn,$n,Fn,Pn,Kn,Ti,Ai,pi,mi,Xi,w,O,H,V,I,B,$,j,de,pe,ve,Te,ye,$e,et,tt,Qe,Ce,wt,ct,nn,Hn,Ht,Tn,Nt,yn,_n,jt,cn,ls,gi,Ol,Bl,jn,kl,Mo,zl,Rh,Hl,Gl,Vl,Wl,So,Xl,E,v,Gn.material]),Mr=new Map,Ii=new Map,Ls=new Map,Us=new Map,Sr=new Map,br=new Map,ql=new Map;function zu(re){let te=Mr.get(re);if(te)return te;te=new sn;let ue=new it({color:Ph.clone(),roughness:.7,metalness:0}),Ie=new Me(L,ue);Ie.castShadow=!s,Ie.receiveShadow=!1,xt(Ie,1.08),te.userData.body=Ie;let Ae=new Me(b,Ei);Ae.castShadow=!s,Ae.receiveShadow=!1,Ae.scale.set(.5,.5,.5),Ae.position.set(0,-14,6.6),xt(Ae,1.05),te.userData.tab=Ae;let We=new Me(M,Zt);We.castShadow=!1,We.receiveShadow=!1,We.scale.set(.5,.5,.5),We.position.set(0,-14,9.6),te.userData.slot=We;let Xe=new Me(D,Rn);Xe.castShadow=!s,Xe.receiveShadow=!1,Xe.scale.set(.75,.75,.75),Xe.position.set(0,4,8.6),xt(Xe,1.12),te.userData.lock=Xe;let Ke=new Me(k,jn);Ke.castShadow=!s,Ke.receiveShadow=!1,Ke.position.set(0,2,7.8),Ke.rotation.z=.7,xt(Ke,1.02);let je=new Me(k,jn);return je.castShadow=!s,je.receiveShadow=!1,je.position.set(0,2,7.8),je.rotation.z=-.7,xt(je,1.02),te.add(Ie,Ae,We,Xe,Ke,je),a.add(te),Mr.set(re,te),te}function Hu(){let re=Ii.get("trash");if(re)return re;re=new sn;let te=new Me(fe,tt);te.castShadow=!s,xt(te,1.06);let ue=new Me(Ee,Qe);ue.castShadow=!s,ue.position.set(0,-11,0),xt(ue,1.06);for(let Ae=0;Ae<6;Ae+=1){let We=Ae/6*Math.PI*2,Xe=new Me(at,Ce);Xe.castShadow=!s,Xe.position.set(Math.cos(We)*10.5,0,Math.sin(We)*10.5),Xe.rotation.y=We,re.add(Xe)}let Ie=new Me(nt,Ce);return Ie.castShadow=!s,Ie.position.set(0,-13.5,7.5),re.add(Ie),re.add(te),re.add(ue),a.add(re),Ii.set("trash",re),re}function Gu(re){let te=Ii.get(re);if(te)return te;te=new sn;let ue=[],Ie=[],Ae=[[-8,-6.2],[-8,6.2],[8,-6.2],[8,6.2]];for(let Le=0;Le<Ae.length;Le+=1){let[Et,Qt]=Ae[Le],Ut=new Me(dt,kl);Ut.castShadow=!s,Ut.rotation.x=Math.PI/2,Ut.rotation.y=Et>0?-.38:.38,Ut.rotation.z=Qt>0?.22:-.22,Ut.position.set(Et,Qt,-6.8),xt(Ut,1.04),ue.push(Ut);let Gt=new Me(N,jn);Gt.castShadow=!s,Gt.rotation.x=Math.PI/2,Gt.position.set(Et,Qt,-11.4),xt(Gt,1.03),Ie.push(Gt),te.add(Ut,Gt)}let We=new Me(Je,Ol);We.castShadow=!s,xt(We,1.08);let Xe=new Me(qe,Bl);Xe.castShadow=!s,Xe.position.set(0,0,8),xt(Xe,1.08);let Ke=new Me(Re,jn);Ke.castShadow=!s,Ke.rotation.z=Math.PI/2,Ke.position.set(9,0,10),xt(Ke,1.08);let je=new Me(R,jn);je.castShadow=!s,je.rotation.z=Math.PI/2,je.position.set(15.2,0,10),xt(je,1.06);let Mt=new Me(xe,Mo);Mt.castShadow=!1,Mt.position.set(5.8,-1.2,14),xt(Mt,1.08);let kt=new Me(q,Ht);kt.castShadow=!1,kt.position.set(7.4,-1.2,15.4),kt.scale.set(.8,.8,.8);let Ft=new Me(ge,zl);Ft.castShadow=!1,Ft.position.set(-4.5,3.2,14.2),Ft.rotation.z=-.18,xt(Ft,1.03);let Jt=new Me(we,Rn);Jt.castShadow=!s,Jt.rotation.x=Math.PI/2,Jt.position.set(-8.6,-4.2,13.6);let Dt=new Me(ke,Mo);Dt.castShadow=!1,Dt.position.set(-8.6,-4.2,18.8);let ce=Pn.clone();ce.userData.fixedOpacity=!0,ce.opacity=0,ce.transparent=!0;let ht=Qn(te,ce,22,-4);return ht.position.set(18.2,0,10),ht.visible=!1,te.userData.muzzleGlow=ht,te.userData.legs=ue,te.userData.foots=Ie,te.add(We),te.add(Xe),te.add(Ke),te.add(je),te.add(Mt),te.add(kt),te.add(Ft),te.add(Jt),te.add(Dt),a.add(te),Ii.set(re,te),te}function Vu(re){let te=Ii.get(re);if(te)return te;te=new sn;let ue=new Me(ne,Hl);ue.castShadow=!s,xt(ue,1.08);let Ie=new Me(Ze,Gl);Ie.castShadow=!1,Ie.position.set(0,2.5,3.2),xt(Ie,1.04);let Ae=new Me(lt,Vl);Ae.castShadow=!s,Ae.position.set(0,-6.5,3),xt(Ae,1.04);let We=new Me(St,Wl);We.castShadow=!1,We.position.set(0,-6.5,4.2);let Xe=(Ft,Jt,Dt=1)=>{let ce=new Me(Yt,jn);return ce.castShadow=!1,ce.position.set(Ft,Jt,4.35),ce.scale.set(Dt,1,1),ce},Ke=Xe(-1,.8,.95),je=Xe(-2.4,2.6,.7),Mt=Xe(-1.8,4.3,.82),kt=new Me(rt,Rn);return kt.castShadow=!s,kt.position.set(7.2,-7.2,2.6),te.add(ue,Ie,Ae,We,kt,Ke,je,Mt),a.add(te),Ii.set(re,te),te}function Wu(re,te){let ue=Ls.get(re);if(ue&&ue.userData.type===te)return ue;if(ue&&(Wi(a,ue,Ci),Ls.delete(re)),ue=new sn,ue.userData.type=te,te==="regi-mite"){let Ae=wt.clone();Ae.roughness=.68;let We=new Me(T,Ae);We.userData.baseEmissiveIntensity=0,We.castShadow=!s,xt(We,1.1),ue.userData.body=We;let Xe=ct.clone();Xe.roughness=.38;let Ke=new Me(T,Xe);Ke.userData.baseEmissiveIntensity=0,Ke.castShadow=!s,Ke.position.set(0,-2,2),Ke.scale.set(.92,.86,.82),xt(Ke,1.1),ue.userData.shell=Ke;let je=ce=>{let ht=new sn,Le=new Me(z,Hn.clone());Le.castShadow=!s;let Et=new Me(q,Ht.clone());return Et.castShadow=!s,Et.position.set(0,0,2.2),ht.add(Le,Et),ht.position.set(ce,-4,9.5),{eye:ht,pupil:Et}},Mt=je(-7),kt=je(7),Ft=[],Jt=nn.clone(),Dt=[[-14,8],[-6,10],[6,10],[14,8]];for(let ce=0;ce<Dt.length;ce+=1){let[ht,Le]=Dt[ce],Et=new Me(he,Jt);Et.castShadow=!s,Et.position.set(ht,Le,-11),Ft.push(Et),ue.add(Et)}ue.userData.pupils=[Mt.pupil,kt.pupil],ue.userData.legs=Ft,Qn(ue,Fn,42,-14),ue.add(We,Ke,Mt.eye,kt.eye)}else if(te==="popup-gremlin"){let Ae=new Me(Y,Tn.clone());Ae.userData.baseEmissiveIntensity=.6,Ae.castShadow=!s,xt(Ae,1.14),ue.userData.body=Ae;let We=new Me(Ge,Nt.clone());We.userData.baseEmissiveIntensity=.85,We.castShadow=!1,We.position.set(0,0,1.5);let Xe=yn.clone(),Ke=[],je=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(let Mt=0;Mt<je.length;Mt+=1){let[kt,Ft,Jt]=je[Mt],Dt=new Me(_e,Xe);Dt.userData.baseEmissiveIntensity=.35,Dt.castShadow=!s,Dt.scale.set(.55,.55,.55),Dt.position.set(kt*15.5,Ft*15.5,Jt*8),Dt.rotation.set(Mt*.4,Mt*.25,Mt*.3),Ke.push(Dt),ue.add(Dt)}ue.userData.core=We,ue.userData.spikes=Ke,Qn(ue,Ai,54,-16),ue.add(Ae,We)}else if(te==="spy-dot"){let Ae=new Me(Ve,_n.clone());Ae.userData.baseEmissiveIntensity=.25,Ae.castShadow=!s,xt(Ae,1.12),ue.userData.body=Ae;let We=new Me(ze,jt.clone());We.userData.baseEmissiveIntensity=0,We.castShadow=!1,We.material&&(We.material.depthWrite=!1),ue.userData.shell=We;let Xe=new Me(me,cn.clone());Xe.userData.baseEmissiveIntensity=.65,Xe.castShadow=!1,Xe.rotation.x=.55,Xe.position.set(0,0,3);let Ke=new Me(Ue,ls.clone());Ke.castShadow=!1,Ke.position.set(0,0,11),ue.userData.pupil=Ke,ue.userData.ring=Xe,Qn(ue,pi,46,-16),ue.add(Ae,We,Xe,Ke)}let Ie=te==="regi-mite"?3:te==="popup-gremlin"?2:te==="spy-dot"?5:0;if(Ie>1){let Ae=te==="regi-mite"?new ut("#ffd35a"):te==="popup-gremlin"?new ut("#ff4da6"):new ut("#ff3b3b"),We=te==="regi-mite"?44:te==="spy-dot"?40:36,Xe=6,Ke=1.6,je=1.4,Mt=(We-Ke*2-je*(Ie-1))/Ie,kt=new sn;kt.position.set(0,te==="popup-gremlin"?-26:te==="spy-dot"?-24:-32,0);let Ft=new Me(W,So);Ft.scale.set(We,Xe,1),Ft.position.set(0,0,14),Ft.castShadow=!1,Ft.receiveShadow=!1,kt.add(Ft);let Jt=[];for(let ce=0;ce<Ie;ce+=1){let ht=new dn({color:Ae.clone(),transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1});ht.userData.fixedOpacity=!0;let Le=new Me(W,ht);Le.scale.set(Mt,Xe-2.2,1),Le.position.set(-We/2+Ke+Mt/2+ce*(Mt+je),0,14.2),Le.castShadow=!1,Le.receiveShadow=!1,Jt.push(Le),kt.add(Le)}let Dt=new Yr(J,Xl);Dt.position.set(0,0,14.4),Dt.scale.set(We,Xe,1),kt.add(Dt),ue.userData.hpBar=kt,ue.userData.hpSegs=Jt,ue.userData.hpColor=Ae,ue.userData.hpMaxSegments=Ie,ue.add(kt)}return a.add(ue),Ls.set(re,ue),ue}function Xu(re,te){let ue=Us.get(re);if(ue&&ue.userData.type===te)return ue;if(ue&&(Wi(a,ue,Ci),Us.delete(re)),ue=new sn,ue.userData.type=te,te==="apple"){let Ie=new Me(ft,V);Ie.castShadow=!s,xt(Ie,1.12);let Ae=new Me(ae,B);Ae.castShadow=!1,Ae.position.set(-3.2,-4.2,6.4);let We=new Me(K,I);We.castShadow=!s,We.rotation.x=Math.PI/2,We.position.set(-.5,-9.2,7.2);let Xe=new Me(st,$);Xe.castShadow=!s,Xe.position.set(4.2,-9.2,7),Xe.rotation.z=-.6,Xe.rotation.y=.5;let Ke=new Me(Be,j);Ke.castShadow=!s,Ke.position.set(0,.6,8.8),xt(Ke,1.08);let je=new Me(Ye,j);je.castShadow=!s,je.position.set(0,.6,8.8),xt(je,1.08),Qn(ue,pi,34,-14),ue.add(Ie,Ae,We,Xe,Ke,je)}else if(te==="coolant"){let Ie=new Me(De,de);Ie.castShadow=!s,xt(Ie,1.06);let Ae=new Me(Oe,ve);Ae.castShadow=!s,Ae.position.set(0,-9.5,0),xt(Ae,1.05);let We=new Me(ot,pe);We.castShadow=!1,We.position.set(0,1,0);let Xe=je=>{let Mt=new Me(mt,Te);return Mt.castShadow=!1,Mt.position.set(0,0,7.8),Mt.rotation.z=je,Mt},Ke=new sn;Ke.add(Xe(0),Xe(Math.PI/2),Xe(Math.PI/4),Xe(-Math.PI/4)),Qn(ue,Pn,46,-14),ue.add(Ie,Ae,We,Ke)}else if(te==="powerup-rapid"){let Ie=new Me(Fe,ye);Ie.castShadow=!s,Ie.rotation.z=Math.PI/2,xt(Ie,1.06);let Ae=new Me(P,ye);Ae.castShadow=!s,Ae.position.set(-6.4,0,-1.2),Ae.rotation.z=Math.PI/2,Ae.scale.set(.9,.9,.9),xt(Ae,1.04);let We=Ae.clone();We.position.x=6.4;let Xe=new Me(le,jn);Xe.castShadow=!1,Xe.position.set(-2.2,0,2.8),Xe.rotation.z=Math.PI/2;let Ke=Xe.clone();Ke.position.x=2.2;let je=new Me(ee,jn);je.castShadow=!s,je.rotation.z=-Math.PI/2,je.position.set(12.2,0,3.2),je.scale.set(.72,.72,.72),xt(je,1.03),Qn(ue,Kn,44,-14),ue.add(Ie,Ae,We,Xe,Ke,je)}else if(te==="powerup-triple"){let Ie=new Me(gt,$e);Ie.castShadow=!s,xt(Ie,1.06);let Ae=(Jt,Dt)=>{let ce=new Me(ie,$e);return ce.castShadow=!s,ce.rotation.z=Math.PI/2,ce.position.set(Jt,Dt,3.6),xt(ce,1.04),ce},We=Ae(-5.4,-2),Xe=Ae(5.4,-2),Ke=Ae(0,6),je=(Jt,Dt)=>{let ce=new Me(Q,jn);return ce.castShadow=!1,ce.rotation.z=Math.PI/2,ce.position.set(Jt+5.8,Dt,3.6),xt(ce,1.02),ce},Mt=je(-5.4,-2),kt=je(5.4,-2),Ft=je(0,6);Qn(ue,Ti,46,-14),ue.add(Ie,We,Xe,Ke,Mt,kt,Ft)}else if(te==="powerup-giant"){let Ie=new Me(bt,et);Ie.castShadow=!s,xt(Ie,1.06);let Ae=new Me(be,et);Ae.castShadow=!1,Ae.position.set(0,-11.5,3.5),Ae.rotation.x=Math.PI/2,Ae.scale.set(1.05,1.05,1.05);let We=new sn;for(let Xe=0;Xe<3;Xe+=1){let Ke=Xe/3*Math.PI*2+Math.PI/6,je=new Me(ee,Rn);je.castShadow=!s,je.position.set(Math.cos(Ke)*6.5,-14.2,Math.sin(Ke)*6.5),je.rotation.z=0,We.add(je)}Qn(ue,Fn,50,-14),ue.add(Ie,Ae,We)}else{let Ie=new Me(Fe,ye);Ie.castShadow=!s,xt(Ie,1.06),Qn(ue,Fn,40,-14),ue.add(Ie)}return a.add(ue),Us.set(re,ue),ue}function qu(re){let te=Sr.get(re);if(te)return te;te=new Me(G,w),te.castShadow=!1,xt(te,1.08);let ue=new Me(X,mi);ue.position.set(0,0,-2),ue.castShadow=!1,ue.receiveShadow=!1,te.add(ue),te.userData.trail=ue;let Ie=Qn(te,Fn,20,-6);return te.userData.glow=Ie,a.add(te),Sr.set(re,te),te}function Yu(re){let te=br.get(re);return te||(te=new Me(oe,H),te.castShadow=!s,te.receiveShadow=!1,a.add(te),br.set(re,te),ql.has(re)||ql.set(re,(Math.random()-.5)*.6),te)}function Ns(re,te,ue=!1){for(let[Ie,Ae]of re)te.has(Ie)||(Wi(a,Ae,Ci),re.delete(Ie))}function Zu(re,te,ue){var ht,Le,Et,Qt;let Ie=(re==null?void 0:re.cpuHeat)>=90,Ae=(re==null?void 0:re.ramPressure)>=60,We=(re==null?void 0:re.powerUp)==="giant",Xe=!!(re!=null&&re.isHit),Ke="#f4f4f4",je="#000000",Mt=0;Xe?(je="#ffffff",Mt=.85):We?(Ke="#f2c94c",je="#6a4b00",Mt=.22):Ie?(Ke="#ff4d4d",je="#5a0000",Mt=.28):Ae&&(Ke="#4aa3ff",je="#003a7a",Mt=.22),$t.color.set(Ke),$t.emissive.set(je),$t.emissiveIntensity=Mt;let Ft=(We?48:32)/28;qi.scale.set(Ft,Ft,Ft);let Jt=((ht=te==null?void 0:te.x)!=null?ht:e/2)-((Le=re==null?void 0:re.x)!=null?Le:e/2),Dt=((Et=te==null?void 0:te.y)!=null?Et:t/2)-((Qt=re==null?void 0:re.y)!=null?Qt:t/2),ce=Number.isFinite(ue)?ue:Math.atan2(Dt,Jt);qi.rotation.z=ce+Math.PI/2}function Ju(re){var Dt;if(!re)return;let te=re.player||{x:e/2,y:t/2},ue=re.mousePos||{x:e/2,y:t/2},Ie=re.aim&&Number.isFinite(re.aim.angle)?re.aim.angle:null;Zu(te,ue,Ie),qi.position.set(te.x,te.y,24),ei.position.set(e/2,t/2+40,0),ei.position.set(320,280,0);let Ae=Hu();if(re.trash){let ce=re.trash.x+16,ht=re.trash.y+18;Ae.position.set(ce,ht,0)}else Ae.position.set(596,438,0);if(re.empExplosion&&Number.isFinite(re.totalTime)&&Number.isFinite(re.empExplosion.t0)){let ce=re.totalTime-re.empExplosion.t0;if(ce>=0&&ce<=.6){let ht=Nx(ce/.6),Le=.4+ht*2.7;Gn.visible=!0,Gn.position.set(re.empExplosion.x,re.empExplosion.y,-9.6),Gn.scale.set(Le,Le,1),Gn.material.opacity=.85*(1-ht)}else Gn.visible=!1}else Gn.visible=!1;let We=new Set;for(let ce of re.folderWalls||[]){let ht=ce.id;We.add(ht);let Le=zu(ht),Et=ce.x+12,Qt=ce.y+12;Le.position.set(Et,Qt,0);let Ut=Number.isFinite(ce.hp)?ce.hp:0,Gt=Ut>3?0:Ut>2?1:Ut>1?2:3,ti=Gt===0?1:Gt===1?.85:Gt===2?.7:.55,ni=Le.userData.body||null;ni&&ni.material&&ni.material.color&&ni.material.color.copy(Ph).multiplyScalar(ti);let Fs=Ut<=1;Le.scale.set(1,1,Fs?.7:1)}Ns(Mr,We);let Xe=new Set(["trash"]);for(let ce of re.deployables||[]){let ht=ce.id;if(Xe.add(ht),ce.type==="watchdog"){let Le=Gu(ht);Le.position.set(ce.x+12,ce.y+12,0);let Et=Number.isFinite(ce.aimDir)?ce.aimDir:7,Qt=Math.PI/2-Et*(Math.PI/4);Le.rotation.z=Qt;let Ut=Le.userData.muzzleGlow||null;if(Ut){let Gt=.4+.6*Math.max(0,Math.sin((re.totalTime||0)*10+ht*3));Ut.visible=!0,Ut.material&&"opacity"in Ut.material&&(Ut.material.opacity=(s?.35:.12)+Gt*(s?.25:.38)),Ut.scale.set(1+Gt*.25,1+Gt*.25,1)}}else if(ce.type==="sticky"){let Le=Vu(ht);Le.position.set(ce.x+12,ce.y+12,2),Le.rotation.z=-.2}}Ns(Ii,Xe);let Ke=new Set;for(let ce of re.enemies||[]){let ht=ce.id;Ke.add(ht);let Le=Wu(ht,ce.type);Le.position.set(ce.x,ce.y,6);let Qt=Number.isFinite(ce.size)?ce.size:ce.type==="regi-mite"?64:ce.type==="popup-gremlin"?36:(ce.type==="spy-dot",48),Ut=ce.type==="regi-mite"?48:(ce.type==="popup-gremlin",28),Gt=Qt/Ut;if(ce.type==="popup-gremlin"){let It=Number.isFinite(ce.frame)?ce.frame:0,ii=Math.sin(It*3)*4,si=Math.sin(It*5)*8*Math.PI/180,xi=1+Math.sin(It*4)*.15;Le.position.y+=ii,Le.rotation.z=si,Le.scale.setScalar(Gt*xi);let Vn=Le.userData.body||null;Vn&&(Vn.rotation.x=Math.sin(It*4.2)*.35,Vn.rotation.y=Math.cos(It*3.1)*.28,Vn.rotation.z=Math.sin(It*2.8)*.22);let en=Le.userData.core||null;en&&(en.rotation.z=It*2.2,en.rotation.x=-Math.sin(It*3.2)*.22);let mn=Le.userData.spikes;if(Array.isArray(mn))for(let Os=0;Os<mn.length;Os+=1){let Yl=mn[Os];Yl.rotation.x=It*1.8+Os*.7,Yl.rotation.y=It*1.4+Os*.5,Yl.rotation.z=It*.9+Os*.6}}else if(ce.type==="regi-mite"){let It=Number.isFinite(ce.frame)?ce.frame:0,ii=Math.sin(It*.8)*1.5;Le.position.y+=ii,Le.rotation.z=0,Le.scale.setScalar(Gt);let si=Le.userData.shell||null;si&&(si.position.z=2+Math.sin(It*1.7)*.7);let xi=Le.userData.legs;if(Array.isArray(xi))for(let en=0;en<xi.length;en+=1){let mn=xi[en];mn.rotation.x=Math.sin(It*5+en)*.45,mn.rotation.y=Math.cos(It*4.1+en*1.3)*.35}let Vn=Le.userData.pupils;if(Array.isArray(Vn))for(let en=0;en<Vn.length;en+=1){let mn=Vn[en];mn.position.x=Math.sin(It*2.5+en)*.65,mn.position.y=Math.cos(It*2.1+en)*.5}}else if(ce.type==="spy-dot"){Le.rotation.z=0,Le.scale.setScalar(Gt);let It=re.totalTime||0,ii=Le.userData.pupil||null,si=Le.userData.ring||null,xi=Le.userData.shell||null,Vn=Math.sin(It*9)>.7?.25:1;ii&&(ii.scale.setScalar(Vn),ii.position.x=Math.sin(It*2.6+ht)*.55,ii.position.y=Math.cos(It*2.1+ht)*.45),si&&(si.rotation.z=It*1.7,si.rotation.y=Math.sin(It*3)*.35),xi&&(xi.rotation.z=It*.55)}let ti=Le.userData.hpSegs,ni=Le.userData.hpColor,Fs=Number.isFinite(Le.userData.hpMaxSegments)?Le.userData.hpMaxSegments:0;if(Array.isArray(ti)&&ti.length>0&&Fs>1&&ni&&ni.isColor){let It=Number.isFinite(ce.maxHp)?Math.max(1,ce.maxHp):Fs,ii=Number.isFinite(ce.hp)?Math.max(0,Math.min(It,ce.hp)):0,si=ii>=It,xi=si?.78:.98,Vn=si?.18:.26;for(let en=0;en<ti.length;en+=1){let mn=ti[en];!mn||!mn.material||!mn.material.color||(en<ii?(mn.material.color.copy(ni),mn.material.opacity=xi):(mn.material.color.set("#0b1020"),mn.material.opacity=Vn))}}let ju=Number.isFinite(ce.stunned)?ce.stunned:0,Qu=!!ce.isHit;Le.traverse(It=>{It.isMesh&&ku(It,{stunned:ju,isHit:Qu})}),ce.flipX?Le.scale.x=-Math.abs(Le.scale.x||1):Le.scale.x=Math.abs(Le.scale.x||1);let Dh=Le.userData.hpBar||null;Dh&&(Dh.scale.x=ce.flipX?-1:1)}Ns(Ls,Ke);let je=re.totalTime||0;ei.position.y=280+Math.sin(je*1.2)*1.6,ei.rotation.z=Math.sin(je*.9)*.035,Ae.rotation.z=Math.sin(je*1.6)*.04;let Mt=new Set;for(let ce of re.pickups||[]){let ht=ce.id;Mt.add(ht);let Le=Xu(ht,ce.type),Et=re.totalTime||0,Qt=typeof ce.type=="string"&&ce.type.startsWith("powerup"),Ut=Math.sin(Et*(Qt?8:6))*(Qt?0:2),Gt=Qt?1+Math.sin(Et*10)*.12:1;Le.position.set(ce.x,ce.y+Ut,6),Le.rotation.z=Qt?Et*.6:Et*.35,Le.scale.setScalar(Gt),Le.rotation.x=Math.sin(Et*1.7+ht)*.2,Le.rotation.y=Math.cos(Et*1.3+ht)*.18,Le.position.z=6+Math.sin(Et*2.2+ht)*.6}Ns(Us,Mt);let kt=new Set;for(let ce of re.projectiles||[]){let ht=ce.id;kt.add(ht);let Le=qu(ht);Le.position.set(ce.x,ce.y,10);let Et=Number.isFinite(ce.vx)?ce.vx:0,Qt=Number.isFinite(ce.vy)?ce.vy:0,Ut=Math.hypot(Et,Qt);Ut>.001&&(Le.rotation.z=Math.atan2(Qt,Et));let Gt=!!ce.fromWatchdog;Le.material=Gt?O:w;let ti=Le.userData.trail||null;if(ti){ti.material=Gt?Xi:mi,ti.visible=Ut>.15;let Fs=Math.max(.8,Math.min(2.2,Ut/5.8));ti.scale.set(Fs,1,1)}let ni=Le.userData.glow||null;ni&&(ni.material=Gt?Pn:Fn)}Ns(Sr,kt);let Ft=new Set,Jt=re.totalTime||0;for(let ce of re.clutter||[]){let ht=ce.id;Ft.add(ht);let Le=Yu(ht),Et=ql.get(ht)||0;Le.position.set(ce.x,ce.y,1),Le.rotation.z=Et+Math.sin(Jt*2+ht%10)*.05}if(Ns(br,Ft),o.render(a,l),s)try{let ce=o.getContext();(Dt=ce.finish)==null||Dt.call(ce)}catch(ce){}}function $u(re,te){o.setSize(re,te,!1),l.left=0,l.right=re,l.top=0,l.bottom=te,l.updateProjectionMatrix()}function Ku(){var re,te,ue;for(let Ie of Mr.values())Wi(a,Ie,Ci);for(let Ie of Ii.values())Wi(a,Ie,Ci);for(let Ie of Ls.values())Wi(a,Ie,Ci);for(let Ie of Us.values())Wi(a,Ie,Ci);for(let Ie of Sr.values())Wi(a,Ie,Ci);for(let Ie of br.values())Wi(a,Ie,Ci);Mr.clear(),Ii.clear(),Ls.clear(),Us.clear(),Sr.clear(),br.clear(),a.remove(qi),a.remove(ei),a.remove(Gn),a.remove(S),a.remove(A),C.dispose(),L.dispose(),U.dispose(),b.dispose(),M.dispose(),D.dispose(),k.dispose(),G.dispose(),W.dispose(),J.dispose(),X.dispose(),oe.dispose(),Z.dispose(),Se.dispose(),De.dispose(),Oe.dispose(),ot.dispose(),mt.dispose(),ft.dispose(),st.dispose(),K.dispose(),ae.dispose(),Be.dispose(),Ye.dispose(),Fe.dispose(),gt.dispose(),bt.dispose(),P.dispose(),le.dispose(),ie.dispose(),Q.dispose(),ee.dispose(),be.dispose(),fe.dispose(),Ee.dispose(),at.dispose(),nt.dispose(),T.dispose(),_.dispose(),z.dispose(),q.dispose(),he.dispose(),Y.dispose(),Ge.dispose(),_e.dispose(),Ve.dispose(),ze.dispose(),me.dispose(),Ue.dispose(),Je.dispose(),qe.dispose(),Re.dispose(),dt.dispose(),N.dispose(),xe.dispose(),we.dispose(),ke.dispose(),ge.dispose(),R.dispose(),se.dispose(),ne.dispose(),Ze.dispose(),lt.dispose(),St.dispose(),rt.dispose(),Yt.dispose(),ln.dispose(),u.dispose(),$t.dispose(),Kt.dispose(),Ei.dispose(),Zt.dispose(),Rn.dispose(),$n.dispose(),Fn.dispose(),Pn.dispose(),Kn.dispose(),Ti.dispose(),Ai.dispose(),pi.dispose(),mi.dispose(),Xi.dispose(),w.dispose(),O.dispose(),H.dispose(),V.dispose(),I.dispose(),B.dispose(),$.dispose(),j.dispose(),de.dispose(),pe.dispose(),ve.dispose(),Te.dispose(),ye.dispose(),$e.dispose(),et.dispose(),tt.dispose(),Qe.dispose(),Ce.dispose(),wt.dispose(),ct.dispose(),nn.dispose(),Hn.dispose(),Ht.dispose(),Tn.dispose(),Nt.dispose(),yn.dispose(),_n.dispose(),jt.dispose(),cn.dispose(),ls.dispose(),gi.dispose(),Ol.dispose(),Bl.dispose(),jn.dispose(),kl.dispose(),Mo.dispose(),zl.dispose(),Rh.dispose(),Hl.dispose(),Gl.dispose(),Vl.dispose(),Wl.dispose(),So.dispose(),Xl.dispose(),E.dispose(),v.dispose(),Gn.material.dispose(),x&&((re=x.dispose)==null||re.call(x)),y&&((te=y.dispose)==null||te.call(y)),g&&((ue=g.dispose)==null||ue.call(g)),o.dispose()}return{render:Ju,resize:$u,dispose:Ku}}function Ah({state:i,onInitFailed:e}){let t=An(null),n=An(null);return ri(()=>{let s=t.current;if(!s)return;let r=typeof navigator!="undefined"&&!!navigator.webdriver,o=null;try{o=Ou({canvas:s,width:640,height:480,preserveDrawingBuffer:r})}catch(a){console.error("WebGL init failed",a),e==null||e(a);return}return n.current=o,()=>{if(n.current){try{n.current.dispose()}catch(a){}n.current=null}}},[]),Lh(()=>{let s=n.current;s&&s.render(i)}),h.createElement("canvas",{ref:t,width:640,height:480,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})}var Ch=()=>({x:640/2,y:480/2+20,hp:5,maxHp:5,empCharge:100,dashEnergy:100,cpuHeat:0,ramPressure:0,isDashing:!1,isHit:!1,invincible:0,upgrades:[],powerUp:null,powerUpTimer:0});function zx(i){let e=i;for(;e<-Math.PI;)e+=Math.PI*2;for(;e>Math.PI;)e-=Math.PI*2;return e}function Hx(i,e){let t=Math.atan2(e,i),n=Math.PI/4,s=zx(t-Math.PI/2),r=Math.round(-s/n)%8;return r<0&&(r+=8),r}function Ih(){let[i,e]=Tt(pt.MENU),[t,n]=Tt(Ch),[s,r]=Tt([]),[o,a]=Tt([]),[l,c]=Tt([]),[d,f]=Tt([]),[p,m]=Tt([]),[x,y]=Tt([]),[g,u]=Tt([]),[E,S]=Tt({x:640/2,y:480/2}),[v,A]=Tt({}),[C,L]=Tt(0),[U,b]=Tt(90),[M,D]=Tt(0),[k,G]=Tt(25),[W,J]=Tt(100),[X,oe]=Tt(0),[Z,Se]=Tt(100),[De,Oe]=Tt(""),[ot,mt]=Tt(!1),[ft,st]=Tt(!1),[K,ae]=Tt(null),Be=An(null),Ye=An(null),Fe=An(null),gt=An(0),bt=An(0),P=An(0),le=An(1e4),ie=An(0),Q=An({x:1,y:0,angle:0}),ee=An(0),be=typeof navigator!="undefined"&&!!navigator.webdriver,[fe,Ee]=Tt(()=>{if(typeof window=="undefined")return!0;let R=new URLSearchParams(window.location.search).get("renderer");if(!R)return!0;let se=String(R).toLowerCase();return!(se==="dom"||se==="2d")}),[at,nt]=Tt(!1),[T,_]=Tt(()=>({w:typeof window!="undefined"?window.innerWidth:1024,h:typeof window!="undefined"?window.innerHeight:768})),z=An(null);z.current={gameState:i,player:t,enemies:s,projectiles:o,pickups:l,folderWalls:d,deployables:p,clutter:x,popups:g,mousePos:E,keys:v,wave:C,waveTimer:U,totalTime:M,setupTimer:k,systemFolderHP:W,score:X,privacyScore:Z,isShooting:ot,showHelp:ft,empExplosion:K},ri(()=>{Oe(Math.random().toString(36).substring(2,10).toUpperCase())},[]),ri(()=>{let R=()=>{_({w:window.innerWidth,h:window.innerHeight})};return window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[]),ri(()=>{let R=()=>{nt(!!document.fullscreenElement),_({w:window.innerWidth,h:window.innerHeight})};return document.addEventListener("fullscreenchange",R),()=>document.removeEventListener("fullscreenchange",R)},[]);let q=Yi((R,se)=>{let ne=!1;R.type==="firewall"?ne=se==="deny":R.type==="fake-update"?ne=se==="later":R.type==="security-update"&&(ne=se==="accept"),ne?(Se(Ze=>Math.min(100,Ze+8)),n(Ze=>({...Ze,ramPressure:Math.max(0,Ze.ramPressure-8)})),oe(Ze=>Ze+25)):n(Ze=>({...Ze,hp:Ze.hp-1})),u([])},[]),he=Yi(()=>{var se,ne;let R=Ye.current;R&&(document.fullscreenElement?(se=document.exitFullscreen)==null||se.call(document):(ne=R.requestFullscreen)==null||ne.call(R))},[]),Y=Yi(()=>{n(Ch()),r([]),a([]),c([]),y([]),u([]),f([]),m([]),L(0),b(90),D(0),G(25),ie.current=0,J(100),oe(0),Se(100),mt(!1),ae(null),bt.current=0,P.current=3e3,le.current=15e3,Oe(Math.random().toString(36).substring(2,10).toUpperCase()),e(pt.SETUP)},[]),Ge=Yi(R=>{n(se=>({...se,upgrades:[...se.upgrades,R]})),L(3),b(90),e(pt.PLAYING)},[]);ri(()=>{let R=ne=>{var lt;let Ze=ne.key.toLowerCase();if(A(St=>({...St,[Ze]:!0})),Ze==="f"&&(ne.preventDefault(),he()),Ze==="enter"){ne.preventDefault();let St=(lt=z.current)==null?void 0:lt.gameState;St===pt.MENU?Y():St===pt.SETUP?(e(pt.PLAYING),L(1)):(St===pt.GAMEOVER||St===pt.WIN)&&Y()}ne.code==="Space"&&(ne.preventDefault(),e(St=>St===pt.PLAYING?pt.PAUSED:St===pt.PAUSED?pt.PLAYING:St)),ne.key==="F1"&&(ne.preventDefault(),st(St=>!St)),(Ze==="q"||Ze==="e")&&u(St=>{if(St.length>0){let rt=St[0],Yt;(rt.swapped?Ze==="q"?"e":"q":Ze)==="q"?rt.type==="firewall"?Yt="deny":rt.type==="fake-update"?Yt="later":rt.type==="security-update"&&(Yt="accept"):rt.type==="firewall"?Yt="allow":rt.type==="fake-update"?Yt="install":rt.type==="security-update"&&(Yt="reject");let $t=!1;return rt.type==="firewall"?$t=Yt==="deny":rt.type==="fake-update"?$t=Yt==="later":rt.type==="security-update"&&($t=Yt==="accept"),$t?(Se(Kt=>Math.min(100,Kt+8)),n(Kt=>({...Kt,ramPressure:Math.max(0,Kt.ramPressure-8)})),oe(Kt=>Kt+25)):n(Kt=>({...Kt,hp:Kt.hp-1})),[]}return St})},se=ne=>{A(Ze=>({...Ze,[ne.key.toLowerCase()]:!1}))};return window.addEventListener("keydown",R),window.addEventListener("keyup",se),()=>{window.removeEventListener("keydown",R),window.removeEventListener("keyup",se)}},[Y,he]);let _e=Yi(R=>{if(!Be.current)return;let se=Be.current.getBoundingClientRect(),ne=640/se.width,Ze=480/se.height;S({x:(R.clientX-se.left)*ne,y:(R.clientY-se.top)*Ze})},[]),Ve=Yi(()=>{var lt,St,rt,Yt;let R=z.current,se=(St=(lt=R==null?void 0:R.player)==null?void 0:lt.x)!=null?St:640/2,ne=(Yt=(rt=R==null?void 0:R.player)==null?void 0:rt.y)!=null?Yt:480/2,Ze=Number.isFinite(R==null?void 0:R.totalTime)?R.totalTime:0;n(ln=>({...ln,empCharge:0})),r(ln=>ln.map($t=>({...$t,stunned:120}))),ae({x:se,y:ne,t0:Ze})},[]),ze=Yi(R=>{let se=z.current;if(!se)return;let ne=Math.max(0,Math.min(50,R)),Ze=se.gameState;if(se.popups.length>0&&u(B=>{if(B.length===0)return B;let $=B[0],de=(Number.isFinite($.countdown)?$.countdown:100)-ne*.016;return de<=0?(n(pe=>({...pe,hp:pe.hp-1})),[]):[{...$,countdown:de}]}),Ze===pt.SETUP){ie.current+=ne;let I=Math.floor(ie.current/1e3);I>0&&(ie.current-=I*1e3,G(B=>{let $=B-I;return $<=0?(e(pt.PLAYING),L(1),25):$}));return}if(Ze!==pt.PLAYING)return;let lt=se.keys||{},St=se.mousePos||{x:640/2,y:480/2},rt=se.player,Yt=se.enemies,ln=se.popups,$t=se.folderWalls,Kt=se.deployables,Ei=se.clutter||[],Zt=se.wave,Rn=se.waveTimer,$n=se.systemFolderHP,Fn=se.isShooting,Pn=St.x-rt.x,Kn=St.y-rt.y,Ti=Pn*Pn+Kn*Kn,Ai=10;if(Ti>Ai*Ai){let I=Math.sqrt(Ti)||1;Q.current.x=Pn/I,Q.current.y=Kn/I,Q.current.angle=Math.atan2(Kn,Pn)}let pi=Q.current.x,mi=Q.current.y,Xi=Q.current.angle;bt.current-=ne;let w=rt.cpuHeat>=90,O=rt.upgrades.includes("fan");if(n(I=>{let B=I.upgrades.includes("ram"),$=3.5,j=B?.004:.008,de=1-I.ramPressure*j,pe=$*Math.max(.2,de),ve=I.x,Te=I.y,ye=!1,$e=I.dashEnergy;(lt.w||lt.arrowup)&&(Te-=pe),(lt.s||lt.arrowdown)&&(Te+=pe),(lt.a||lt.arrowleft)&&(ve-=pe),(lt.d||lt.arrowright)&&(ve+=pe),lt.shift&&I.dashEnergy>20?(ve+=pi*10,Te+=mi*10,ye=!0,$e-=1.5):$e=Math.min(100,I.dashEnergy+.2),ve=Math.max(16,Math.min(624,ve)),Te=Math.max(36,Math.min(464,Te));let et=I.powerUp,tt=I.powerUpTimer;return I.powerUp&&I.powerUpTimer>0&&(tt-=1,tt<=0&&(et=null)),{...I,x:ve,y:Te,isDashing:ye,dashEnergy:$e,empCharge:Math.min(100,I.empCharge+.15),cpuHeat:Math.max(0,I.cpuHeat-.04),invincible:Math.max(0,I.invincible-1),isHit:I.invincible>50,powerUp:et,powerUpTimer:tt}}),Fn&&bt.current<=0&&ln.length===0&&rt.powerUp!=="giant"&&!w){let I=pi,B=mi,$=8,j=Xi,de=14,pe=rt.x+I*de,ve=rt.y+B*de,Te=rt.powerUp==="triple";a(Te?Qe=>[...Qe,{x:pe,y:ve,vx:I*$,vy:B*$,id:Math.random()},{x:pe,y:ve,vx:Math.cos(j-.2)*$,vy:Math.sin(j-.2)*$,id:Math.random()},{x:pe,y:ve,vx:Math.cos(j+.2)*$,vy:Math.sin(j+.2)*$,id:Math.random()}]:tt=>[...tt,{x:pe,y:ve,vx:I*$,vy:B*$,id:Math.random()}]);let ye=rt.powerUp==="rapid"?60:180,$e=rt.cpuHeat*1.5;bt.current=ye+$e;let et=rt.powerUp==="rapid"?4:6;O&&(et*=.5),n(tt=>({...tt,cpuHeat:Math.min(100,tt.cpuHeat+et)}))}a(I=>{let B=[];for(let $ of I){let j=$.x+$.vx,de=$.y+$.vy;j>-10&&j<650&&de>20&&de<490?B.push({...$,x:j,y:de}):$.fromWatchdog||oe(ve=>ve-1)}return B}),r(I=>I.map(B=>{if(B.stunned>0)return{...B,stunned:B.stunned-1};let $=320,j=280;if(B.type==="spy-dot"&&($=rt.x,j=rt.y),B.type==="popup-gremlin"){let Qe=(B.bounceTimer||0)+1,Ce=B.bounceAngle||0,ct=((Number.isFinite(B.frame)?B.frame:0)+ne*.012)%16;if(Qe>40+Math.random()*40)return Ce=Math.random()*Math.PI*2,{...B,x:B.x+Math.cos(Ce)*B.speed*2,y:B.y+Math.sin(Ce)*B.speed*2,bounceAngle:Ce,bounceTimer:0,frame:ct};let nn=(320-B.x)*.003,Hn=(280-B.y)*.003,Ht=B.x+Math.cos(Ce)*B.speed+nn,Tn=B.y+Math.sin(Ce)*B.speed+Hn;return(Ht<10||Ht>630)&&(Ce=Math.PI-Ce),(Tn<30||Tn>470)&&(Ce=-Ce),Ht=Math.max(10,Math.min(630,Ht)),Tn=Math.max(30,Math.min(470,Tn)),{...B,x:Ht,y:Tn,bounceAngle:Ce,bounceTimer:Qe,frame:ct,isHit:!1}}let de=Kt.filter(Qe=>Qe.type==="sticky");if(de.length>0&&B.type!=="spy-dot"){let Qe=de.reduce((Ce,wt)=>{let ct=Math.sqrt((B.x-wt.x)**2+(B.y-wt.y)**2);return ct<Ce.dist?{note:wt,dist:ct}:Ce},{note:null,dist:1/0});Qe.dist<150&&($=Qe.note.x+12,j=Qe.note.y+12)}let pe=$-B.x,ve=j-B.y,Te=Math.sqrt(pe*pe+ve*ve)||1,ye=B.x+pe/Te*B.speed,$e=B.y+ve/Te*B.speed;for(let Qe of $t){if(Qe.hp<=0)continue;if(Math.sqrt((ye-Qe.x-12)**2+($e-Qe.y-12)**2)<B.size/2+12){f(wt=>wt.map(ct=>ct.id===Qe.id?{...ct,hp:ct.hp-.01}:ct)),ye=B.x,$e=B.y;break}}let et=Number.isFinite(B.frame)?B.frame:0,tt=et;return B.type==="regi-mite"&&(tt=(et+ne*.02)%16),B.type==="spy-dot"&&(tt=(et+ne*.03)%16),{...B,x:ye,y:$e,frame:tt,isHit:!1}}));let H=Kt.find(I=>I.type==="watchdog");if(H){let I=null,B=200;for(let $ of Yt){let j=Math.sqrt(($.x-H.x-12)**2+($.y-H.y-12)**2);j<B&&(B=j,I=$)}if(I){let $=I.x-H.x-12,j=I.y-H.y-12,de=Hx($,j);if(m(pe=>{let ve=!1,Te=pe.map(ye=>ye.id!==H.id||(Number.isFinite(ye.aimDir)?ye.aimDir:7)===de?ye:(ve=!0,{...ye,aimDir:de}));return ve?Te:pe}),Math.random()<.03){let pe=Math.sqrt($*$+j*j)||1;a(ve=>[...ve,{x:H.x+12,y:H.y+12,vx:$/pe*6,vy:j/pe*6,id:Math.random(),fromWatchdog:!0}])}}else m(j=>{let de=!1,pe=j.map(ve=>ve.id!==H.id||(Number.isFinite(ve.aimDir)?ve.aimDir:7)===7?ve:(de=!0,{...ve,aimDir:7}));return de?pe:j})}if(a(I=>{let B=[],$=Ei.length,j=596,de=438;for(let pe of I){let ve=!1;r(Te=>Te.map(ye=>{if(ve)return ye;if(Math.sqrt((pe.x-ye.x)**2+(pe.y-ye.y)**2)<ye.size/2+5){ve=!0;let et=ye.hp-1;if(et<=0){let tt=Math.random(),Qe=null;return tt<.2?Qe="apple":tt<.28?Qe="coolant":tt<.36?Qe="powerup-rapid":tt<.44?Qe="powerup-triple":tt<.5&&(Qe="powerup-giant"),Qe&&c(Ce=>[...Ce,{x:ye.x,y:ye.y,type:Qe,id:Math.random()}]),Math.random()<.7&&(y(Ce=>[...Ce,{x:ye.x+(Math.random()-.5)*30,y:ye.y+(Math.random()-.5)*30,id:Math.random()}]),n(Ce=>({...Ce,ramPressure:Math.min(100,Ce.ramPressure+8)}))),oe(Ce=>Ce+10),null}return{...ye,hp:et,isHit:!0}}return ye}).filter(Boolean)),ve||Math.sqrt((pe.x-j)**2+(pe.y-de)**2)<18&&(ve=!0,$>0&&($-=1,y(ye=>ye.length>0?ye.slice(0,-1):ye),n(ye=>({...ye,ramPressure:Math.max(0,ye.ramPressure-8)})))),ve||B.push(pe)}return B}),rt.invincible<=0){let I=rt.powerUp==="giant"?24:10;for(let B of Yt){if(B.stunned>0)continue;if(Math.sqrt((B.x-rt.x)**2+(B.y-rt.y)**2)<B.size/2+I){if(rt.powerUp==="giant")r(j=>j.map(de=>de.id!==B.id?de:(oe(pe=>pe+10),null)).filter(Boolean));else if(!rt.isDashing){n(j=>({...j,hp:j.hp-1,invincible:60,isHit:!0})),oe(j=>j-5);break}}}}let V=0;for(let I of Yt){if(I.stunned>0)continue;Math.sqrt((I.x-320)**2+(I.y-280)**2)<35&&(V+=.05)}if(V>0&&(J(I=>Math.max(0,I-V)),ee.current+=V,ee.current>=1)){let I=Math.floor(ee.current);ee.current-=I,oe(B=>B-I)}if(c(I=>I.filter(B=>Math.sqrt((B.x-rt.x)**2+(B.y-rt.y)**2)<20?(B.type==="apple"?n(j=>({...j,hp:Math.min(j.maxHp,j.hp+1)})):B.type==="coolant"?n(j=>({...j,cpuHeat:Math.max(0,j.cpuHeat-60)})):B.type==="powerup-rapid"?n(j=>({...j,powerUp:"rapid",powerUpTimer:480})):B.type==="powerup-triple"?n(j=>({...j,powerUp:"triple",powerUpTimer:480})):B.type==="powerup-giant"&&n(j=>({...j,powerUp:"giant",powerUpTimer:360})),!1):!0)),P.current-=ne,P.current<=0){let I={1:3500,2:2800,3:2200},B=Math.min((90-Rn)*15,800);P.current=Math.max(1200,(I[Zt]||3e3)-B);let $=Math.floor(Math.random()*3),j,de,pe=64;$===0?(j=-pe/2,de=20+pe/2+Math.random()*(460-pe)):$===1?(j=640+pe/2,de=20+pe/2+Math.random()*(460-pe)):(j=pe/2+Math.random()*(640-pe),de=480+pe/2);let ve=.5+Zt*.15+Math.random()*.2;if(r(Te=>[...Te,{id:Math.random(),type:"regi-mite",x:j,y:de,hp:3,maxHp:3,size:64,flipX:$===0,speed:ve,frame:0,stunned:0}]),Zt>=2&&Math.random()<.25){let Te=Math.floor(Math.random()*3),ye,$e;Te===0?(ye=-15,$e=100+Math.random()*200):Te===1?(ye=655,$e=100+Math.random()*200):(ye=80+Math.random()*480,$e=495),r(et=>[...et,{id:Math.random(),type:"popup-gremlin",x:ye,y:$e,hp:2,maxHp:2,size:36,speed:2+Math.random()*.9,frame:Math.random()*16,stunned:0,bounceAngle:Math.random()*Math.PI*2,bounceTimer:0}])}if(Zt>=2&&Math.random()<.15){let ye=Math.floor(Math.random()*3),$e,et;ye===0?($e=-40/2,et=20+40/2+Math.random()*420):ye===1?($e=640+40/2,et=20+40/2+Math.random()*420):($e=40/2+Math.random()*600,et=480+40/2),r(tt=>[...tt,{id:Math.random(),type:"spy-dot",x:$e,y:et,hp:5,maxHp:5,size:40,speed:.42,frame:0,stunned:0}])}if(Zt===3&&Math.random()<.3){let Te=Math.floor(Math.random()*3),ye,$e;Te===0?(ye=-15,$e=120+Math.random()*200):Te===1?(ye=655,$e=120+Math.random()*200):(ye=100+Math.random()*440,$e=495);let et=Math.random()<.5?"regi-mite":"popup-gremlin";r(tt=>[...tt,{id:Math.random(),type:et,x:ye,y:$e,hp:et==="regi-mite"?3:2,maxHp:et==="regi-mite"?3:2,size:et==="regi-mite"?64:36,flipX:Te===0,speed:et==="popup-gremlin"?2.2+Math.random()*.9:.8+Math.random()*.4,frame:0,stunned:0,bounceAngle:Math.random()*Math.PI*2,bounceTimer:0}])}}if(le.current-=ne,le.current<=0&&ln.length===0&&Zt>=1){let I={1:18e3,2:14e3,3:1e4}[Zt]||15e3,B=(90-Rn)/90;le.current=I*(1-B*.3);let $={1:.4,2:.55,3:.7}[Zt]||.5;if(Math.random()<$){let j=Math.random(),de=j<.4?"firewall":j<.7?"fake-update":"security-update",pe={1:.15,2:.4,3:.65}[Zt]||.3;u([{id:Math.random(),type:de,x:80+Math.random()*360,y:50+Math.random()*250,swapped:Math.random()<pe,isLegit:de==="security-update",countdown:100}])}}b(I=>{let B=I-ne/1e3;if(B<=0){let $=$t.length+Kt.length,j=Math.max(0,(11-$)*10);if(j>0&&oe(de=>de+j),Zt===1)return L(2),90;if(Zt===2)return e(pt.INTERMISSION),90;if(Zt===3)return e(pt.WIN),0}return Math.max(0,B)}),D(I=>I+ne/1e3),ae(I=>!I||!Number.isFinite(I.t0)?I:se.totalTime+ne/1e3-I.t0>.6?null:I),(rt.hp<=0||$n<=0)&&e(pt.GAMEOVER)},[]);ri(()=>{if(be)return;if(i!==pt.PLAYING&&i!==pt.SETUP){Fe.current&&cancelAnimationFrame(Fe.current),Fe.current=null;return}let R=!1,se=ne=>{if(R)return;let Ze=Math.min(ne-gt.current,50);gt.current=ne,ze(Ze),Fe.current=requestAnimationFrame(se)};return gt.current=performance.now(),Fe.current=requestAnimationFrame(se),()=>{R=!0,Fe.current&&cancelAnimationFrame(Fe.current),Fe.current=null}},[i,be,ze]),ri(()=>(window.render_game_to_text=()=>{let R=z.current;if(!R)return null;let se={mode:R.gameState,coords:{origin:"top-left",x:"right",y:"down",units:"px"},wave:R.wave,wave_timer_s:Number.isFinite(R.waveTimer)?R.waveTimer:0,score:R.score,system_folder_hp:R.systemFolderHP,player:{x:R.player.x,y:R.player.y,hp:R.player.hp,cpu_heat:R.player.cpuHeat,ram_pressure:R.player.ramPressure,emp:R.player.empCharge,power_up:R.player.powerUp},enemies:R.enemies.map(ne=>({id:ne.id,type:ne.type,x:ne.x,y:ne.y,hp:ne.hp,max_hp:ne.maxHp,stunned:ne.stunned,size:ne.size})),pickups:R.pickups.map(ne=>({id:ne.id,type:ne.type,x:ne.x,y:ne.y})),projectiles:R.projectiles.map(ne=>({id:ne.id,x:ne.x,y:ne.y,from_watchdog:!!ne.fromWatchdog})),folder_walls:R.folderWalls.map(ne=>({id:ne.id,x:ne.x,y:ne.y,hp:ne.hp})),deployables:R.deployables.map(ne=>({id:ne.id,type:ne.type,x:ne.x,y:ne.y,aim_dir:ne.aimDir})),popups:R.popups.map(ne=>({id:ne.id,type:ne.type,swapped:ne.swapped,countdown:ne.countdown})),clutter_count:R.clutter.length};return JSON.stringify(se)},window.advanceTime=async R=>{let se=16.666666666666668,ne=Math.max(1,Math.round(R/se));for(let Ze=0;Ze<ne;Ze+=1)wr.flushSync(()=>ze(se))},()=>{delete window.render_game_to_text,delete window.advanceTime}),[ze]);let me=be?1:1.15,Ue=Math.min(T.w*.96/Ri.width,T.h*.96/Ri.height),Je=at?Math.max(1,Math.min(2.25,Ue)):me,qe=28,Re=Ri.width*Je,dt=Ri.height*Je,N=Ri.screen.x*Je,xe=Ri.screen.y*Je,we=640*Je,ke=480*Je,ge=qe*Je;return h.createElement("div",{style:{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",background:"#1a1a2e",fontFamily:'"Press Start 2P", monospace',gap:16,padding:16,boxSizing:"border-box"}},h.createElement("div",{style:{textAlign:"center",marginTop:8,marginBottom:10}},h.createElement("div",{style:{fontSize:22,letterSpacing:2,color:"#fff"}},"DESKTOP WARS"),h.createElement("div",{style:{fontSize:9,marginTop:6,color:"#8af",opacity:.95}},"SYSTEM INTEGRITY")),h.createElement("div",{style:{display:"flex",alignItems:"flex-start",gap:20,flexWrap:"wrap",justifyContent:"center"}},h.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10}},h.createElement("div",{ref:Ye,style:at?{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"radial-gradient(1000px 700px at 50% 30%, rgba(120,150,255,0.18), rgba(0,0,0,0))",padding:18,boxSizing:"border-box"}:void 0},h.createElement("div",{style:{width:Re,height:dt,position:"relative",filter:"drop-shadow(0 25px 80px rgba(0,0,0,0.6))"}},h.createElement("div",{style:{position:"absolute",left:N,top:xe,width:we,height:ke,overflow:"hidden",borderRadius:ge,background:"#000",zIndex:5}},h.createElement("div",{ref:Be,onMouseMove:_e,onMouseDown:R=>{R.preventDefault(),R.button===0&&mt(!0),R.button===2&&t.empCharge>=100&&Ve()},onMouseUp:R=>{R.button===0&&mt(!1)},onMouseLeave:()=>mt(!1),onContextMenu:R=>R.preventDefault(),style:{width:640,height:480,position:"relative",transform:`scale(${Je})`,transformOrigin:"top left",cursor:i===pt.PLAYING?"none":"default"}},fe?h.createElement(Ah,{state:{mode:i,totalTime:M,player:t,aim:{dirX:Q.current.x,dirY:Q.current.y,angle:Q.current.angle},enemies:s,pickups:l,folderWalls:d,deployables:p,clutter:x,projectiles:o,systemFolderHP:W,empExplosion:K,mousePos:E,trash:{x:580,y:420}},onInitFailed:()=>Ee(!1)}):h.createElement(Vt,{src:Ot.wallpaper,width:640,height:480,pixelated:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%"},fallback:h.createElement("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, #233257 0%, #121826 55%, #0b1020 100%)"}})}),!fe&&(i===pt.SETUP||i===pt.PLAYING||i===pt.PAUSED)&&h.createElement(h.Fragment,null,h.createElement(Uo,{x:320,y:280,hp:W}),d.map(R=>h.createElement(jl,{key:R.id,...R})),p.map(R=>h.createElement($l,{key:R.id,...R})),(i===pt.PLAYING||i===pt.PAUSED)&&h.createElement(h.Fragment,null,x.map(R=>h.createElement(Jl,{key:R.id,...R})),l.map(R=>h.createElement(Ql,{key:R.id,...R})),s.map(R=>h.createElement(Kl,{key:R.id,...R})),o.map(R=>h.createElement("div",{key:R.id,style:{position:"absolute",left:R.x-4,top:R.y-4,width:8,height:8,background:R.fromWatchdog?"#bff":"#fff2a8",borderRadius:"50%",boxShadow:R.fromWatchdog?"0 0 8px rgba(120,220,255,0.8)":"0 0 6px rgba(255,210,90,0.7)",pointerEvents:"none",zIndex:35}})),h.createElement(No,{x:580,y:420,clutter:x}),h.createElement(ec,{...t,mousePos:E}))),h.createElement("div",{style:{position:"absolute",top:0,left:0,right:0,height:20,background:"linear-gradient(180deg, #f0f0f0 0%, #d8d8d8 100%)",borderBottom:"1px solid #999",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",fontSize:8,zIndex:100,color:"#111"}},h.createElement("div",{style:{display:"flex",gap:12,alignItems:"center"}},h.createElement("span",{onMouseDown:R=>{R.preventDefault(),R.stopPropagation()},onClick:R=>{R.preventDefault(),R.stopPropagation(),e(se=>se===pt.PLAYING?pt.PAUSED:se===pt.PAUSED?pt.PLAYING:se)},style:{fontWeight:"bold",cursor:i===pt.PLAYING||i===pt.PAUSED?"pointer":"default",opacity:i===pt.PLAYING||i===pt.PAUSED?1:.55,padding:"2px 4px",borderRadius:3,userSelect:"none"}},"Pause"),h.createElement("span",{onMouseDown:R=>{R.preventDefault(),R.stopPropagation()},onClick:R=>{R.preventDefault(),R.stopPropagation(),st(!0)},style:{cursor:"pointer",opacity:.95,padding:"2px 4px",borderRadius:3,userSelect:"none"}},"Help"),h.createElement("span",{onMouseDown:R=>{R.preventDefault(),R.stopPropagation()},onClick:R=>{R.preventDefault(),R.stopPropagation(),Y()},style:{cursor:"pointer",opacity:.95,padding:"2px 4px",borderRadius:3,userSelect:"none"}},"Reset")),h.createElement("div",{style:{display:"flex",gap:10,alignItems:"center"}},h.createElement("div",{style:{display:"flex",gap:1,alignItems:"flex-end"}},[1,2,3,4,5].map(R=>h.createElement("div",{key:R,style:{width:3,height:2+R*2,background:t.hp>=R?"#222":"#bbb",borderRadius:1}}))),h.createElement("div",{style:{width:12,height:12,borderRadius:"50%",background:t.empCharge>=100?"#4a90d9":"#999",boxShadow:t.empCharge>=100?"0 0 6px #4af":"none"}}),h.createElement("div",{title:`CPU Heat: ${Math.floor(t.cpuHeat)}%`,style:{display:"flex",alignItems:"center",gap:4}},h.createElement(Uh,{size:16,hot:t.cpuHeat>=90}),h.createElement("div",{style:{width:42,height:10,background:"linear-gradient(180deg, #f4f4f4 0%, #d7d7d7 100%)",position:"relative",borderRadius:3,border:"1px solid #666",overflow:"hidden",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.25)"}},h.createElement("div",{style:{position:"absolute",left:3,top:1,fontSize:6,fontFamily:"monospace",color:"rgba(11,16,32,0.55)",textShadow:"0 1px 0 rgba(255,255,255,0.35)",letterSpacing:.3,pointerEvents:"none"}},"CPU"),h.createElement("div",{style:{width:`${t.cpuHeat}%`,height:"100%",background:t.cpuHeat>=90?"linear-gradient(90deg, #ff9a3c 0%, #ff4d4d 60%, #ff4d4d 100%)":t.cpuHeat>60?"linear-gradient(90deg, #ffd35a 0%, #ff9a3c 90%)":"linear-gradient(90deg, #ffd35a 0%, #f2c94c 100%)",boxShadow:t.cpuHeat>=90?"0 0 8px rgba(255,77,77,0.55)":"none",animation:t.cpuHeat>=90?"blink 0.2s infinite":"none"}}),h.createElement("div",{style:{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 7px)",opacity:.35,pointerEvents:"none"}}))),h.createElement("div",{title:`RAM Pressure: ${Math.floor(t.ramPressure)}%`,style:{display:"flex",alignItems:"center",gap:4}},h.createElement(Nh,{size:16,high:t.ramPressure>=80}),h.createElement("div",{style:{width:42,height:10,background:"linear-gradient(180deg, #f4f4f4 0%, #d7d7d7 100%)",position:"relative",borderRadius:3,border:"1px solid #666",overflow:"hidden",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.25)"}},h.createElement("div",{style:{position:"absolute",left:3,top:1,fontSize:6,fontFamily:"monospace",color:"rgba(11,16,32,0.55)",textShadow:"0 1px 0 rgba(255,255,255,0.35)",letterSpacing:.3,pointerEvents:"none"}},"RAM"),h.createElement("div",{style:{width:`${t.ramPressure}%`,height:"100%",background:t.ramPressure>70?"linear-gradient(90deg, #ffd35a 0%, #ff4d4d 80%, #ff4d4d 100%)":t.ramPressure>40?"linear-gradient(90deg, #67d6ff 0%, #ffd35a 90%)":"linear-gradient(90deg, #67d6ff 0%, #4bbf5a 100%)",boxShadow:t.ramPressure>=80?"0 0 8px rgba(255,77,77,0.45)":"none"}}),h.createElement("div",{style:{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 7px)",opacity:.35,pointerEvents:"none"}}))),t.powerUp&&h.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:t.powerUp==="rapid"?"#f80":t.powerUp==="triple"?"#08f":"#fa0",color:"#fff",fontSize:5}},t.powerUp.toUpperCase()),t.upgrades.length>0&&h.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:t.upgrades.includes("ram")?"#0a0":"#08f",color:"#fff",fontSize:5,border:"1px solid #fff"}},t.upgrades.includes("ram")?"RAM":"FAN"),t.cpuHeat>=90&&h.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:"#f00",color:"#fff",fontSize:5,animation:"blink 0.3s infinite"}},"OVERHEAT"),t.ramPressure>=60&&h.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:t.ramPressure>=80?"#a00":"#a50",color:"#fff",fontSize:5,animation:t.ramPressure>=80?"blink 0.5s infinite":"none"}},t.ramPressure>=80?"SLOW":"RAM"),h.createElement("div",{style:{fontFamily:"monospace",fontSize:8,background:"#222",color:"#0f0",padding:"1px 6px",borderRadius:3,border:"1px solid #444"}},C>0?h.createElement(h.Fragment,null,h.createElement("span",{style:{color:"#888"}},"W",C)," ",h.createElement("span",{style:{color:U<=10?"#f55":"#0f0"}},String(Math.floor(U/60)).padStart(2,"0"),":",String(Math.floor(U%60)).padStart(2,"0"))):h.createElement("span",{style:{color:"#888"}},"--:--")))),i===pt.MENU&&h.createElement("div",{style:{position:"absolute",inset:0,top:20,display:"flex",alignItems:"center",justifyContent:"center"}},h.createElement(Xn,{title:"Desktop Wars",width:380},h.createElement("div",{style:{textAlign:"center"}},h.createElement("div",{style:{marginBottom:8,display:"flex",justifyContent:"center",animation:"idleBob 2.8s ease-in-out infinite"}},h.createElement("svg",{width:"48",height:"48",viewBox:"0 0 28 28","aria-label":"Cursor"},h.createElement("polygon",{points:"14,3 4,20 14,15 24,20",fill:"#fff",stroke:"#111",strokeWidth:"1.5",strokeLinejoin:"round"}))),h.createElement("h1",{style:{fontSize:14,marginBottom:6}},"SYSTEM INTEGRITY"),h.createElement("p",{style:{fontSize:6,color:"#666",marginBottom:20}},"Defend your desktop against malware!"),h.createElement("div",{style:{marginBottom:20}},h.createElement(Wn,{variant:"primary",onClick:Y},"START GAME")),h.createElement("div",{style:{fontSize:6,color:"#888",lineHeight:1.8}},h.createElement("p",null,h.createElement("b",null,"WASD")," - Move | ",h.createElement("b",null,"Mouse")," - Aim | ",h.createElement("b",null,"Click")," - Shoot"),h.createElement("p",null,h.createElement("b",null,"Right Click")," - EMP | ",h.createElement("b",null,"Shift")," - Dash"),h.createElement("p",null,h.createElement("b",null,"Q/E")," - Popup buttons ",h.createElement("span",{style:{color:"#fa0"}},"(watch for swaps!)")))))),i===pt.SETUP&&h.createElement(nc,{setupTimer:k,folderWalls:d,setFolderWalls:f,deployables:p,setDeployables:m,onStart:()=>{e(pt.PLAYING),L(1)},mousePos:E}),(i===pt.PLAYING||i===pt.PAUSED)&&h.createElement(h.Fragment,null,fe&&h.createElement(h.Fragment,null,h.createElement(Uo,{x:320,y:280,hp:W,showIcon:!1}),h.createElement(No,{x:580,y:420,clutter:x,showIcon:!1}),h.createElement(Zl,{...t,mousePos:E})),g.map(R=>h.createElement(tc,{key:R.id,popup:R,onChoice:q})),i===pt.PAUSED&&h.createElement("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:500}},h.createElement(Xn,{title:"PAUSED",width:220},h.createElement("div",{style:{textAlign:"center",padding:12}},h.createElement("p",{style:{fontSize:7,marginBottom:16}},"Press SPACE to continue"),h.createElement(Wn,{onClick:()=>e(pt.MENU)},"Quit to Menu"))))),i===pt.INTERMISSION&&h.createElement("div",{style:{position:"absolute",inset:0,top:20,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200}},h.createElement(Xn,{title:"Wave 2 Complete!",width:340},h.createElement("div",{style:{textAlign:"center",marginBottom:16}},h.createElement("p",{style:{fontSize:8,color:"#666"}},"Choose a hardware upgrade for Wave 3:")),h.createElement("div",{style:{display:"flex",gap:16,justifyContent:"center"}},h.createElement("div",{onClick:()=>Ge("ram"),style:{width:120,padding:14,background:"#fff",border:"3px solid #0a0",borderRadius:8,cursor:"pointer",textAlign:"center",transition:"transform 0.1s"},onMouseOver:R=>R.currentTarget.style.transform="scale(1.05)",onMouseOut:R=>R.currentTarget.style.transform="scale(1)"},h.createElement("div",{style:{marginBottom:8,display:"flex",justifyContent:"center"}},h.createElement("svg",{width:"40",height:"40",viewBox:"0 0 64 64","aria-label":"RAM Upgrade"},h.createElement("rect",{x:"14",y:"18",width:"36",height:"28",rx:"6",fill:"#2a2f3c",stroke:"#0a0",strokeWidth:"4"}),h.createElement("rect",{x:"20",y:"24",width:"24",height:"6",rx:"3",fill:"#0a0",opacity:"0.7"}),h.createElement("rect",{x:"20",y:"34",width:"18",height:"6",rx:"3",fill:"#0a0",opacity:"0.55"}),h.createElement("g",{fill:"#0a0",opacity:"0.9"},h.createElement("rect",{x:"10",y:"22",width:"4",height:"6",rx:"2"}),h.createElement("rect",{x:"10",y:"32",width:"4",height:"6",rx:"2"}),h.createElement("rect",{x:"50",y:"22",width:"4",height:"6",rx:"2"}),h.createElement("rect",{x:"50",y:"32",width:"4",height:"6",rx:"2"})))),h.createElement("div",{style:{fontSize:8,fontWeight:"bold",color:"#080"}},"RAM Upgrade"),h.createElement("div",{style:{fontSize:6,color:"#888",marginTop:4}},"50% less slowdown from clutter")),h.createElement("div",{onClick:()=>Ge("fan"),style:{width:120,padding:14,background:"#fff",border:"3px solid #08f",borderRadius:8,cursor:"pointer",textAlign:"center",transition:"transform 0.1s"},onMouseOver:R=>R.currentTarget.style.transform="scale(1.05)",onMouseOut:R=>R.currentTarget.style.transform="scale(1)"},h.createElement("div",{style:{marginBottom:8,display:"flex",justifyContent:"center"}},h.createElement("svg",{width:"40",height:"40",viewBox:"0 0 64 64","aria-label":"Cooling Fan"},h.createElement("circle",{cx:"32",cy:"32",r:"22",fill:"#2a2f3c",stroke:"#08f",strokeWidth:"4"}),h.createElement("circle",{cx:"32",cy:"32",r:"5",fill:"#08f"}),h.createElement("path",{d:"M32 10 C38 12, 42 18, 40 24 C38 29, 34 28, 32 26 Z",fill:"#08f",opacity:"0.75"}),h.createElement("path",{d:"M54 32 C52 38, 46 42, 40 40 C35 38, 36 34, 38 32 Z",fill:"#08f",opacity:"0.75"}),h.createElement("path",{d:"M32 54 C26 52, 22 46, 24 40 C26 35, 30 36, 32 38 Z",fill:"#08f",opacity:"0.75"}),h.createElement("path",{d:"M10 32 C12 26, 18 22, 24 24 C29 26, 28 30, 26 32 Z",fill:"#08f",opacity:"0.75"}))),h.createElement("div",{style:{fontSize:8,fontWeight:"bold",color:"#06c"}},"Cooling Fan"),h.createElement("div",{style:{fontSize:6,color:"#888",marginTop:4}},"50% less CPU heat buildup"))))),i===pt.GAMEOVER&&h.createElement("div",{style:{position:"absolute",inset:0,top:20,background:"rgba(80,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:300}},h.createElement(Xn,{title:"GAME OVER",width:300},h.createElement("div",{style:{textAlign:"center"}},h.createElement("div",{style:{marginBottom:10,display:"flex",justifyContent:"center"}},h.createElement("svg",{width:"42",height:"42",viewBox:"0 0 64 64","aria-label":"Game Over"},h.createElement("path",{d:"M32 6 L60 56 H4 Z",fill:"#d44",stroke:"#2a2a2a",strokeWidth:"4"}),h.createElement("rect",{x:"29",y:"22",width:"6",height:"18",rx:"3",fill:"#1a1a1a"}),h.createElement("rect",{x:"29",y:"44",width:"6",height:"6",rx:"3",fill:"#1a1a1a"}))),h.createElement("h2",{style:{fontSize:12,color:"#d44",marginBottom:10}},"SYSTEM FAILURE"),h.createElement("div",{style:{background:"#222",color:"#0f0",padding:12,borderRadius:4,marginBottom:20}},h.createElement("div",null,"SCORE: ",X)),h.createElement(Wn,{variant:"primary",onClick:Y},"RESTART")))),i===pt.WIN&&h.createElement("div",{style:{position:"absolute",inset:0,top:20,background:"rgba(0,80,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:300}},h.createElement(Xn,{title:"YOU WIN!",width:300},h.createElement("div",{style:{textAlign:"center"}},h.createElement("div",{style:{marginBottom:10,display:"flex",justifyContent:"center"}},h.createElement("svg",{width:"42",height:"42",viewBox:"0 0 64 64","aria-label":"Victory"},h.createElement("path",{d:"M32 6 L39 22 L56 24 L43 36 L47 54 L32 44 L17 54 L21 36 L8 24 L25 22 Z",fill:"#f2c94c",stroke:"#2a2a2a",strokeWidth:"4",strokeLinejoin:"round"}))),h.createElement("div",{style:{background:"#f8f8f8",padding:14,borderRadius:6,marginBottom:16}},h.createElement("div",{style:{fontSize:9}},"Score: ",h.createElement("span",{style:{color:"#4a4",fontWeight:"bold"}},X))),h.createElement(Wn,{variant:"primary",onClick:Y},"Play Again")))),ft&&h.createElement("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:500}},h.createElement(Xn,{title:"Help",width:350},h.createElement("div",{style:{fontSize:7,lineHeight:1.8}},h.createElement("p",null,h.createElement("b",null,"WASD")," - Move cursor"),h.createElement("p",null,h.createElement("b",null,"Mouse")," - Aim crosshair"),h.createElement("p",null,h.createElement("b",null,"Left Click")," - Shoot"),h.createElement("p",null,h.createElement("b",null,"Right Click")," - EMP (stuns all)"),h.createElement("p",null,h.createElement("b",null,"Shift")," - Dash"),h.createElement("p",{style:{color:"#4a4"}},h.createElement("b",null,"Q")," - Safe popup choice"),h.createElement("p",{style:{color:"#a44"}},h.createElement("b",null,"E")," - Risky popup choice"),h.createElement("div",{style:{marginTop:10,borderTop:"1px solid #ccc",paddingTop:10}},h.createElement("p",null,h.createElement("b",null,"Power-ups:")),h.createElement("p",null,"Rapid Fire | Triple Shot | Giant Mode"))),h.createElement("div",{style:{marginTop:14,textAlign:"center"}},h.createElement(Wn,{onClick:()=>st(!1)},"Close (F1)")))),h.createElement("div",{style:{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",pointerEvents:"none",zIndex:80}}))),h.createElement("div",{style:{position:"absolute",left:N+we+52,top:xe+4,width:Math.max(0,Re-(N+we)-68),height:ke-8,padding:10,boxSizing:"border-box",color:"#fff",fontSize:6.6,lineHeight:1.6,background:"transparent",border:"none",zIndex:30,overflow:"hidden",pointerEvents:"none",textShadow:"0 2px 10px rgba(0,0,0,0.9)"}},h.createElement("div",{style:{fontSize:9,marginBottom:8,color:"#8af"}},"CONTROLS"),h.createElement("div",{style:{marginBottom:10,display:"grid",gridTemplateColumns:"auto auto",columnGap:12,rowGap:2,lineHeight:1.55}},h.createElement("div",null,"WASD / Arrows - Move"),h.createElement("div",null,"Click - Shoot"),h.createElement("div",null,"Mouse - Aim"),h.createElement("div",null,"Right Click - EMP"),h.createElement("div",null,"Shift - Dash"),h.createElement("div",null,"Space - Pause"),h.createElement("div",null,"Q/E - Popups"),h.createElement("div",null,"F - Fullscreen")),h.createElement("div",{style:{fontSize:9,marginBottom:6,color:"#fa0"}},"ENEMIES"),h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:4,marginBottom:10,lineHeight:1.6}},h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Fh,{size:18})),h.createElement("span",null,"Regi-Mite")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Oh,{size:18})),h.createElement("span",null,"Gremlin")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Bh,{size:18})),h.createElement("span",null,"Spy-Dot"))),h.createElement("div",{style:{fontSize:9,marginBottom:6,color:"#5f5"}},"POWER-UPS"),h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:4,marginBottom:10,lineHeight:1.6}},h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Er,{size:18})),h.createElement("span",null,"Heal")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Co,{size:18})),h.createElement("span",null,"Coolant")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Io,{size:18})),h.createElement("span",null,"Rapid")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Ro,{size:18})),h.createElement("span",null,"Triple")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Po,{size:18})),h.createElement("span",null,"Giant"))),h.createElement("div",{style:{fontSize:9,marginBottom:6,color:"#8af"}},"DEPLOYABLES"),h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:4,lineHeight:1.6}},h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Do,{size:18})),h.createElement("span",null,"Wall")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Bs,{size:18})),h.createElement("span",null,"Watchdog")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(ks,{size:18})),h.createElement("span",null,"Floppy Disk")))),h.createElement(Vt,{src:Ot.crtMonitor,alt:"CRT Monitor",width:Ri.width,height:Ri.height,pixelated:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:20}}))))),h.createElement("div",{style:{display:"flex",gap:30,background:"linear-gradient(180deg, #2a2a3c 0%, #1a1a2a 100%)",borderRadius:12,padding:"12px 24px",color:"#ccc",fontSize:8,boxShadow:"0 10px 40px rgba(0,0,0,0.4)"}},h.createElement("div",{style:{flex:1}},h.createElement("div",{style:{fontSize:9,color:"#8af",marginBottom:8}},"MISSION"),h.createElement("div",{style:{fontSize:7,lineHeight:1.8}},"Defend your desktop! Protect the ",h.createElement("span",{style:{color:"#fa0"}},"System Folder")," in the center from malware.")),h.createElement("div",{style:{flex:1}},h.createElement("div",{style:{fontSize:9,color:"#f55",marginBottom:8}},"RESOURCES"),h.createElement("div",{style:{fontSize:7,lineHeight:2}},h.createElement("div",null,h.createElement("span",{style:{color:"#faa"}},"CPU")," - Overheats when shooting; Coolant helps"),h.createElement("div",null,h.createElement("span",{style:{color:"#ffa"}},"RAM")," - Clutter slows you down; shoot Trash to clear"))),h.createElement("div",{style:{flex:1}},h.createElement("div",{style:{fontSize:9,color:"#f8f",marginBottom:8}},"DARK PATTERNS"),h.createElement("div",{style:{fontSize:7,lineHeight:2}},h.createElement("div",null,"Firewall - ",h.createElement("span",{style:{color:"#5f5"}},"Deny")," is correct"),h.createElement("div",null,"Fake Update - ",h.createElement("span",{style:{color:"#5f5"}},"Later")," is correct"),h.createElement("div",null,"Security Patch - ",h.createElement("span",{style:{color:"#5f5"}},"Install")," is correct"),h.createElement("div",{style:{color:"#fa0",marginTop:4}},"Warning: Q/E buttons can swap.")))),h.createElement("style",null,`
	        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
	        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
	        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
	        @keyframes wobble { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
	        @keyframes idleBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
	      `))}var Bu=document.getElementById("root");if(!Bu)throw new Error("Missing #root element");wr.createRoot(Bu).render(h.createElement(Ih,null));})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
