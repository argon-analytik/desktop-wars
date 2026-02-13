(()=>{var h=globalThis.React;if(!h)throw new Error("React wurde nicht gefunden. Stelle sicher, dass `react.production.min.js` vor `build/app.js` geladen wird.");var{useCallback:Vi,useEffect:ti,useLayoutEffect:ed,useMemo:Bo,useRef:An,useState:Tt}=h;var Ir=globalThis.ReactDOM;if(!Ir)throw new Error("ReactDOM wurde nicht gefunden. Stelle sicher, dass `react-dom.production.min.js` vor `build/app.js` geladen wird.");var bi={width:976,height:734,screen:{x:87,y:90,width:640,height:480}};var Ft={cursor:"assets/sprites/fighter-a.png",crtMonitor:"assets/svg/crt-monitor.svg",wallpaper:"assets/sprites/wallpaper.png",systemFolder:"assets/sprites/system-folder.png",folderWall:"assets/sprites/folder-wall.png",trash:"assets/sprites/trash.png",clutter:"assets/sprites/clutter.png",enemyRegiMite:"assets/sprites/enemy-regi-mite.png",enemyPopupGremlin:"assets/sprites/enemy-popup-gremlin.png",enemySpyDot:"assets/sprites/enemy-spy-dot.png",pickupApple:"assets/sprites/pickup-apple.png",pickupCoolant:"assets/sprites/pickup-coolant.png",powerupRapid:"assets/sprites/powerup-rapid.png",powerupTriple:"assets/sprites/powerup-triple.png",powerupGiant:"assets/sprites/powerup-giant.png",deployableWatchdog:"assets/sprites/deployable-watchdog.png",deployableSticky:"assets/sprites/deployable-sticky.png"};function Yn({onClick:i,children:e,disabled:t=!1,variant:n="default"}){return h.createElement("button",{onClick:i,disabled:t,style:{padding:"6px 16px",fontSize:8,fontFamily:'"Press Start 2P", monospace',background:n==="primary"?"linear-gradient(180deg, #5a5 0%, #494 100%)":"linear-gradient(180deg, #eee 0%, #ccc 100%)",border:"2px solid",borderColor:n==="primary"?"#373 #252 #252 #373":"#aaa #777 #777 #aaa",borderRadius:4,cursor:t?"not-allowed":"pointer",color:n==="primary"?"#fff":"#333",opacity:t?.5:1}},e)}function Pn({size:i=16,viewBox:e="0 0 64 64",children:t,style:n}){return h.createElement("svg",{width:i,height:i,viewBox:e,style:{display:"block",...n},xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},t)}function td({size:i=16,hot:e=!1,style:t}){let n=e?"#ffb45a":"#ffe27a",s=e?"#ff4d4d":"#f2c94c",r=e?"#ff9a3c":"#ffd35a",o=e?"cpuBodyHot":"cpuBodyCool",a=e?"cpuCoreHot":"cpuCoreCool";return h.createElement(Pn,{size:i,style:t},h.createElement("defs",null,h.createElement("linearGradient",{id:"cpuPinGrad",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#f5f7fb"}),h.createElement("stop",{offset:"1",stopColor:"#aab3c5"})),h.createElement("linearGradient",{id:o,x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#3b4256"}),h.createElement("stop",{offset:"1",stopColor:"#1a2133"})),h.createElement("linearGradient",{id:a,x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:n}),h.createElement("stop",{offset:"1",stopColor:s})),h.createElement("filter",{id:"cpuGlow",x:"-30%",y:"-30%",width:"160%",height:"160%"},h.createElement("feGaussianBlur",{stdDeviation:"2.1",result:"blur"}),h.createElement("feMerge",null,h.createElement("feMergeNode",{in:"blur"}),h.createElement("feMergeNode",{in:"SourceGraphic"})))),Array.from({length:5}).map((l,c)=>h.createElement("g",{key:c},h.createElement("rect",{x:11+c*9,y:6,width:6,height:10,rx:2,fill:"url(#cpuPinGrad)",stroke:"#0b1020",strokeWidth:"1.5",opacity:"0.95"}),h.createElement("rect",{x:11+c*9,y:48,width:6,height:10,rx:2,fill:"url(#cpuPinGrad)",stroke:"#0b1020",strokeWidth:"1.5",opacity:"0.95"}),h.createElement("rect",{x:6,y:11+c*9,width:10,height:6,rx:2,fill:"url(#cpuPinGrad)",stroke:"#0b1020",strokeWidth:"1.5",opacity:"0.95"}),h.createElement("rect",{x:48,y:11+c*9,width:10,height:6,rx:2,fill:"url(#cpuPinGrad)",stroke:"#0b1020",strokeWidth:"1.5",opacity:"0.95"}))),h.createElement("rect",{x:"16",y:"16",width:"32",height:"32",rx:"7",fill:`url(#${o})`,stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"22",y:"22",width:"20",height:"20",rx:"5",fill:`url(#${a})`,stroke:"#0b1020",strokeWidth:"3",filter:e?"url(#cpuGlow)":void 0}),h.createElement("path",{d:"M26 28 H38 M26 32 H38 M26 36 H38",stroke:"rgba(11,16,32,0.35)",strokeWidth:"2",strokeLinecap:"round"}),h.createElement("path",{d:"M32 24 L28 32 L34 32 L30 40",fill:"none",stroke:r,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),e&&h.createElement(h.Fragment,null,h.createElement("path",{d:"M20 18 C22 14, 26 14, 28 18",fill:"none",stroke:r,strokeWidth:"3",strokeLinecap:"round",opacity:"0.9"}),h.createElement("path",{d:"M36 18 C38 14, 42 14, 44 18",fill:"none",stroke:r,strokeWidth:"3",strokeLinecap:"round",opacity:"0.9"})))}function nd({size:i=16,high:e=!1,style:t}){let n=e?"#ff4d4d":"#67d6ff",s=e?"ramBoardHot":"ramBoardCool";return h.createElement(Pn,{size:i,style:t},h.createElement("defs",null,h.createElement("linearGradient",{id:s,x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#3b4256"}),h.createElement("stop",{offset:"1",stopColor:"#1a2133"})),h.createElement("linearGradient",{id:"ramChipGrad",x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:n,stopOpacity:"0.95"}),h.createElement("stop",{offset:"1",stopColor:"#0b1020",stopOpacity:"0.25"}))),h.createElement("rect",{x:"10",y:"20",width:"44",height:"24",rx:"5",fill:`url(#${s})`,stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"15",y:"26",width:"10",height:"12",rx:"2",fill:"url(#ramChipGrad)",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("rect",{x:"27",y:"26",width:"10",height:"12",rx:"2",fill:"url(#ramChipGrad)",stroke:"#0b1020",strokeWidth:"2",opacity:"0.9"}),h.createElement("rect",{x:"39",y:"26",width:"10",height:"12",rx:"2",fill:"url(#ramChipGrad)",stroke:"#0b1020",strokeWidth:"2",opacity:"0.8"}),h.createElement("rect",{x:"28",y:"41.5",width:"8",height:"3.5",rx:"1.2",fill:"#0b1020",opacity:"0.65"}),h.createElement("rect",{x:"15",y:"22.8",width:"34",height:"2.2",rx:"1.1",fill:"rgba(255,255,255,0.14)"}),Array.from({length:7}).map((r,o)=>h.createElement("rect",{key:o,x:15+o*5.2,y:46,width:3.8,height:6,rx:1,fill:"#f2c94c",opacity:"0.95"})))}function id({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"regiBody",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#f2e5d6"}),h.createElement("stop",{offset:"1",stopColor:"#d9c7b2"})),h.createElement("linearGradient",{id:"regiShell",x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#cdb89f"}),h.createElement("stop",{offset:"1",stopColor:"#a98f72"}))),h.createElement("rect",{x:"12",y:"18",width:"40",height:"28",rx:"8",fill:"url(#regiBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"16",y:"20",width:"32",height:"12",rx:"6",fill:"url(#regiShell)",stroke:"rgba(11,16,32,0.35)",strokeWidth:"2",opacity:"0.95"}),h.createElement("circle",{cx:"26",cy:"33",r:"4.2",fill:"#f4f4f4",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("circle",{cx:"38",cy:"33",r:"4.2",fill:"#f4f4f4",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("circle",{cx:"26.5",cy:"33.2",r:"1.9",fill:"#0b1020"}),h.createElement("circle",{cx:"38.5",cy:"33.2",r:"1.9",fill:"#0b1020"}),h.createElement("circle",{cx:"25.2",cy:"31.8",r:"1",fill:"rgba(255,255,255,0.7)"}),h.createElement("circle",{cx:"37.2",cy:"31.8",r:"1",fill:"rgba(255,255,255,0.7)"}),h.createElement("path",{d:"M28 40 Q32 43 36 40",fill:"none",stroke:"rgba(11,16,32,0.55)",strokeWidth:"2.4",strokeLinecap:"round"}),h.createElement("rect",{x:"18",y:"44",width:"4",height:"10",rx:"2",fill:"#6a4b00"}),h.createElement("rect",{x:"28",y:"46",width:"4",height:"8",rx:"2",fill:"#6a4b00"}),h.createElement("rect",{x:"36",y:"46",width:"4",height:"8",rx:"2",fill:"#6a4b00"}),h.createElement("rect",{x:"46",y:"44",width:"4",height:"10",rx:"2",fill:"#6a4b00"}))}function sd({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"gremlinBody",x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#ff94a0"}),h.createElement("stop",{offset:"1",stopColor:"#ff3b5f"})),h.createElement("radialGradient",{id:"gremlinCore",cx:"50%",cy:"40%",r:"60%"},h.createElement("stop",{offset:"0",stopColor:"#ffd1f0",stopOpacity:"0.95"}),h.createElement("stop",{offset:"1",stopColor:"#ff1f8b",stopOpacity:"0.95"}))),h.createElement("path",{d:"M32 10 L44 18 L54 32 L44 46 L32 54 L20 46 L10 32 L20 18 Z",fill:"url(#gremlinBody)",stroke:"#0b1020",strokeWidth:"4",strokeLinejoin:"round"}),h.createElement("circle",{cx:"32",cy:"32",r:"6.5",fill:"url(#gremlinCore)",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"20",y:"26",width:"24",height:"16",rx:"3",fill:"rgba(255,255,255,0.85)",stroke:"#0b1020",strokeWidth:"2.5"}),h.createElement("rect",{x:"20",y:"26",width:"24",height:"4.5",rx:"2.2",fill:"rgba(11,16,32,0.18)"}),h.createElement("circle",{cx:"23",cy:"28.3",r:"1.3",fill:"#ff4d4d",stroke:"#0b1020",strokeWidth:"1"}),h.createElement("path",{d:"M24.5 34 H39.5 M24.5 38 H35.5",stroke:"rgba(11,16,32,0.5)",strokeWidth:"2",strokeLinecap:"round"}),h.createElement("path",{d:"M18 20 L14 16 M46 20 L50 16 M18 44 L14 48 M46 44 L50 48",stroke:"#2a0010",strokeWidth:"4",strokeLinecap:"round"}))}function rd({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("radialGradient",{id:"spyBody",cx:"45%",cy:"35%",r:"70%"},h.createElement("stop",{offset:"0",stopColor:"#ff9a9a"}),h.createElement("stop",{offset:"0.5",stopColor:"#ff3b3b"}),h.createElement("stop",{offset:"1",stopColor:"#b30000"}))),h.createElement("circle",{cx:"32",cy:"32",r:"18",fill:"url(#spyBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("circle",{cx:"32",cy:"32",r:"12",fill:"none",stroke:"#ff1f1f",strokeWidth:"4",opacity:"0.85"}),h.createElement("circle",{cx:"32",cy:"32",r:"5.5",fill:"#2a0010"}),h.createElement("circle",{cx:"30",cy:"30",r:"2",fill:"#f4f4f4",opacity:"0.75"}),h.createElement("path",{d:"M20 22 C24 18, 40 18, 44 22",fill:"none",stroke:"rgba(255,255,255,0.18)",strokeWidth:"3",strokeLinecap:"round"}))}function Rr({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("radialGradient",{id:"appleBody",cx:"40%",cy:"35%",r:"70%"},h.createElement("stop",{offset:"0",stopColor:"#ffb3b3"}),h.createElement("stop",{offset:"0.5",stopColor:"#e04444"}),h.createElement("stop",{offset:"1",stopColor:"#8a0f0f"}))),h.createElement("circle",{cx:"32",cy:"36",r:"18",fill:"url(#appleBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"30",y:"12",width:"4",height:"12",rx:"2",fill:"#6a4b00"}),h.createElement("path",{d:"M34 18 C44 12, 48 22, 40 26 C36 28, 34 24, 34 18 Z",fill:"#4bbf5a",stroke:"#0b1020",strokeWidth:"2",strokeLinejoin:"round"}),h.createElement("rect",{x:"29",y:"32",width:"6",height:"16",rx:"2",fill:"#f4f4f4",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("rect",{x:"24",y:"37",width:"16",height:"6",rx:"2",fill:"#f4f4f4",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("circle",{cx:"26",cy:"30",r:"3",fill:"#ffd6d6",opacity:"0.65"}))}function ko({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"coolantBody",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#bff0ff",stopOpacity:"0.95"}),h.createElement("stop",{offset:"1",stopColor:"#2aa7ff",stopOpacity:"0.8"}))),h.createElement("rect",{x:"22",y:"10",width:"20",height:"10",rx:"3",fill:"#e6e8ed",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"18",y:"18",width:"28",height:"34",rx:"8",fill:"url(#coolantBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("path",{d:"M32 24 V46 M22 35 H42 M26 28 L38 42 M38 28 L26 42",stroke:"#c7f3ff",strokeWidth:"3.5",strokeLinecap:"round",opacity:"0.95"}),h.createElement("rect",{x:"20",y:"22",width:"24",height:"2.4",rx:"1.2",fill:"rgba(255,255,255,0.22)"}))}function zo({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"rapidBody",x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#ffd35a"}),h.createElement("stop",{offset:"1",stopColor:"#ff6b00"}))),h.createElement("rect",{x:"18",y:"22",width:"28",height:"20",rx:"10",fill:"url(#rapidBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"20",y:"26",width:"6",height:"12",rx:"3",fill:"#2a2f3c",opacity:"0.9"}),h.createElement("rect",{x:"38",y:"26",width:"6",height:"12",rx:"3",fill:"#2a2f3c",opacity:"0.9"}),h.createElement("path",{d:"M26 18 L18 22 L26 26 Z",fill:"#ff9a3c",stroke:"#0b1020",strokeWidth:"3",strokeLinejoin:"round"}),h.createElement("path",{d:"M38 18 L46 22 L38 26 Z",fill:"#ff9a3c",stroke:"#0b1020",strokeWidth:"3",strokeLinejoin:"round"}),h.createElement("path",{d:"M14 30 H18 M12 36 H18",stroke:"rgba(255,255,255,0.65)",strokeWidth:"3",strokeLinecap:"round"}))}function Ho({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"tripleBody",x1:"0",y1:"0",x2:"1",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#9cc8ff"}),h.createElement("stop",{offset:"1",stopColor:"#1a62ff"}))),h.createElement("rect",{x:"18",y:"24",width:"28",height:"18",rx:"5",fill:"url(#tripleBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"18",y:"16",width:"10",height:"12",rx:"5",fill:"url(#tripleBody)",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"36",y:"16",width:"10",height:"12",rx:"5",fill:"url(#tripleBody)",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"27",y:"10",width:"10",height:"14",rx:"5",fill:"url(#tripleBody)",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("circle",{cx:"23",cy:"20",r:"1.6",fill:"#0b1020",opacity:"0.8"}),h.createElement("circle",{cx:"32",cy:"16",r:"1.6",fill:"#0b1020",opacity:"0.8"}),h.createElement("circle",{cx:"41",cy:"20",r:"1.6",fill:"#0b1020",opacity:"0.8"}))}function Go({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"giantShield",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#fff0a8"}),h.createElement("stop",{offset:"1",stopColor:"#f2c94c"}))),h.createElement("path",{d:"M32 10 C44 16, 52 20, 52 30 C52 46, 40 54, 32 58 C24 54, 12 46, 12 30 C12 20, 20 16, 32 10 Z",fill:"url(#giantShield)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("path",{d:"M22 18 L26 12 L32 18 L38 12 L42 18",fill:"none",stroke:"#6a4b00",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("path",{d:"M32 22 L34 28 L40 28 L35 32 L37 38 L32 34 L27 38 L29 32 L24 28 L30 28 Z",fill:"rgba(255,255,255,0.25)"}))}function Vo({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"wallBody",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#f0c67a"}),h.createElement("stop",{offset:"1",stopColor:"#c48a2a"}))),h.createElement("rect",{x:"12",y:"22",width:"40",height:"28",rx:"6",fill:"url(#wallBody)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"16",y:"18",width:"22",height:"10",rx:"5",fill:"#e8bc6a",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"38",y:"34",width:"10",height:"10",rx:"2.5",fill:"#f2c94c",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"41",y:"30",width:"4",height:"6",rx:"2",fill:"#6a4b00",opacity:"0.9"}),h.createElement("path",{d:"M18 44 L26 36 L32 42 L40 34",stroke:"rgba(11,16,32,0.45)",strokeWidth:"3",strokeLinecap:"round"}))}function Hs({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"dogBase",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#f6f7fb"}),h.createElement("stop",{offset:"1",stopColor:"#aab3c5"}))),h.createElement("ellipse",{cx:"30",cy:"40",rx:"16",ry:"12",fill:"url(#dogBase)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("path",{d:"M18 44 L14 52 M28 46 L24 54 M36 46 L40 54 M46 44 L50 52",stroke:"#0b1020",strokeWidth:"4",strokeLinecap:"round",opacity:"0.85"}),h.createElement("rect",{x:"18",y:"22",width:"24",height:"14",rx:"6",fill:"#f2c94c",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"38",y:"26",width:"16",height:"6",rx:"3",fill:"#2a2f3c",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("circle",{cx:"28",cy:"29",r:"3.2",fill:"#c7f3ff",stroke:"#0b1020",strokeWidth:"2"}),h.createElement("circle",{cx:"27.2",cy:"28.2",r:"1.1",fill:"#ffffff",opacity:"0.7"}))}function Gs({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"floppyBody",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#525b73"}),h.createElement("stop",{offset:"1",stopColor:"#2a2f3c"})),h.createElement("linearGradient",{id:"floppyLabel",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#ffffff"}),h.createElement("stop",{offset:"1",stopColor:"#d3d7e1"}))),h.createElement("path",{d:"M20 12 H46 L50 16 V52 H14 V16 Z",fill:"url(#floppyBody)",stroke:"#0b1020",strokeWidth:"4",strokeLinejoin:"round"}),h.createElement("rect",{x:"18",y:"16",width:"28",height:"16",rx:"4",fill:"url(#floppyLabel)",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("path",{d:"M22 22 H40 M22 26 H34",stroke:"rgba(11,16,32,0.45)",strokeWidth:"2",strokeLinecap:"round"}),h.createElement("rect",{x:"18",y:"36",width:"28",height:"10",rx:"3",fill:"#aab3c5",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("rect",{x:"26",y:"39.5",width:"12",height:"6.5",rx:"2",fill:"#0b1020",opacity:"0.85"}),h.createElement("rect",{x:"42",y:"40",width:"5",height:"5",rx:"1",fill:"#f2c94c",stroke:"#0b1020",strokeWidth:"1.5"}),h.createElement("rect",{x:"44",y:"12",width:"6",height:"6",fill:"rgba(255,255,255,0.14)"}))}function od({size:i=16,style:e}){return h.createElement(Pn,{size:i,style:e},h.createElement("defs",null,h.createElement("linearGradient",{id:"timerFace",x1:"0",y1:"0",x2:"0",y2:"1"},h.createElement("stop",{offset:"0",stopColor:"#ffffff"}),h.createElement("stop",{offset:"1",stopColor:"#d9dee8"}))),h.createElement("circle",{cx:"32",cy:"34",r:"22",fill:"url(#timerFace)",stroke:"#0b1020",strokeWidth:"4"}),h.createElement("rect",{x:"26",y:"6",width:"12",height:"10",rx:"3",fill:"#ff4d4d",stroke:"#0b1020",strokeWidth:"3"}),h.createElement("line",{x1:"32",y1:"34",x2:"32",y2:"20",stroke:"#ff4d4d",strokeWidth:"4",strokeLinecap:"round"}),h.createElement("line",{x1:"32",y1:"34",x2:"44",y2:"40",stroke:"#ff4d4d",strokeWidth:"4",strokeLinecap:"round"}),h.createElement("circle",{cx:"32",cy:"34",r:"2.5",fill:"#0b1020",opacity:"0.65"}))}function Zn({title:i,width:e=300,children:t,x:n,y:s}){return h.createElement("div",{style:{position:n!==void 0?"absolute":"relative",left:n,top:s,width:e,background:"#f4f4f4",color:"#111",border:"2px solid #444",borderRadius:6,boxShadow:"6px 6px 0 rgba(0,0,0,0.25)",overflow:"hidden"}},h.createElement("div",{style:{height:18,background:"linear-gradient(180deg, #f0f0f0 0%, #d2d2d2 100%)",display:"flex",alignItems:"center",padding:"0 6px",gap:6}},h.createElement("div",{style:{width:10,height:10,background:"#e55",border:"1px solid #b33",borderRadius:2}}),h.createElement("span",{style:{fontSize:8,color:"#111",fontWeight:"bold"}},i)),h.createElement("div",{style:{padding:10}},t))}var ad=new Map;function Xt({src:i,alt:e="",width:t,height:n=t,style:s,pixelated:r=!0,fallback:o=null,...a}){let[l,c]=Tt(()=>i?ad.get(i)!==!1:!1);return!i||!l?o:h.createElement("img",{src:i,alt:e,width:t,height:n,draggable:!1,onError:()=>{ad.set(i,!1),c(!1)},style:{imageRendering:r?"pixelated":void 0,...s},...a})}var mt={MENU:"menu",SETUP:"setup",PLAYING:"playing",PAUSED:"paused",INTERMISSION:"intermission",GAMEOVER:"gameover",WIN:"win"};function pc({x:i,y:e,empCharge:t,invincible:n,mousePos:s,powerUp:r,cpuHeat:o,ramPressure:a,isHit:l}){let c=o>=90,d=a>=60,u=r==="giant",p=c?"rgba(255,100,100,0.8)":"rgba(255,255,255,0.7)",m=c?"rgba(255,100,100,0.7)":"rgba(255,255,255,0.5)",x=null;r==="rapid"?x="#f80":r==="triple"?x="#08f":r==="giant"&&(x="#fa0");let _="none";return l?_="brightness(2.0)":u?_="drop-shadow(0 0 10px rgba(255, 215, 0, 0.7))":c?_="drop-shadow(0 0 8px rgba(255, 80, 80, 0.65))":d&&(_="drop-shadow(0 0 6px rgba(70, 160, 255, 0.6))"),h.createElement(h.Fragment,null,h.createElement("div",{style:{position:"absolute",left:s.x-14,top:s.y-14,width:28,height:28,pointerEvents:"none",zIndex:60,filter:_}},h.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28"},h.createElement("circle",{cx:"14",cy:"14",r:"11",fill:"none",stroke:m,strokeWidth:"2"}),h.createElement("circle",{cx:"14",cy:"14",r:"4",fill:"none",stroke:p,strokeWidth:"2"}),h.createElement("line",{x1:"14",y1:"0",x2:"14",y2:"7",stroke:p,strokeWidth:"2"}),h.createElement("line",{x1:"14",y1:"21",x2:"14",y2:"28",stroke:p,strokeWidth:"2"}),h.createElement("line",{x1:"0",y1:"14",x2:"7",y2:"14",stroke:p,strokeWidth:"2"}),h.createElement("line",{x1:"21",y1:"14",x2:"28",y2:"14",stroke:p,strokeWidth:"2"}),h.createElement("circle",{cx:"14",cy:"14",r:"2",fill:c?"#f00":"#f44"}))),h.createElement("svg",{style:{position:"absolute",left:0,top:0,width:640,height:480,pointerEvents:"none",zIndex:45}},h.createElement("line",{x1:i,y1:e,x2:s.x,y2:s.y,stroke:"rgba(255,255,255,0.10)",strokeWidth:"1",strokeDasharray:"6,4"})),t>=100&&h.createElement("div",{style:{position:"absolute",left:Math.round(i-16-8),top:Math.round(e-16-8),width:48,height:48,border:"3px solid rgba(100, 200, 255, 0.9)",borderRadius:"50%",animation:"pulse 1s infinite",pointerEvents:"none",zIndex:49,boxSizing:"border-box",filter:"drop-shadow(0 0 10px rgba(100,200,255,0.35))"}}),r&&h.createElement("div",{style:{position:"absolute",left:i-24,top:e-16-18,fontSize:8,color:"#fff",background:x,padding:"2px 6px",borderRadius:4,fontWeight:"bold",pointerEvents:"none",zIndex:55,whiteSpace:"nowrap",boxShadow:"0 6px 18px rgba(0,0,0,0.35)"}},r==="rapid"?"RAPID":r==="triple"?"TRIPLE":"GIANT"),n>0&&h.createElement("div",{style:{position:"absolute",left:i-20,top:e-20,width:40,height:40,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.12)",pointerEvents:"none",zIndex:44}}))}function mc({x:i,y:e}){return h.createElement("div",{style:{position:"absolute",left:i-14,top:e-14,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,opacity:.85,pointerEvents:"none",animation:"wobble 2s infinite"}},h.createElement(Xt,{src:Ft.clutter,width:18,height:18,style:{width:18,height:18},fallback:h.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18"},h.createElement("path",{d:"M4 2h7l3 3v11H4z",fill:"#f3f6ff",stroke:"#6b778c",strokeWidth:"1"}),h.createElement("path",{d:"M11 2v4h4",fill:"none",stroke:"#6b778c",strokeWidth:"1"}),h.createElement("line",{x1:"6",y1:"8",x2:"13",y2:"8",stroke:"#6b778c",strokeWidth:"1"}),h.createElement("line",{x1:"6",y1:"11",x2:"13",y2:"11",stroke:"#6b778c",strokeWidth:"1"}))}))}var Wo=new Map;function ld({extra:i,gaps:e}){if(!Number.isFinite(i)||i<=0||e<=0)return{margin:0,spacing:0};let t=Math.min(32,Math.floor(i/e));for(let n=0;n<=t;n+=1){let s=i-e*n;if(s<0)break;if(s%2===0)return{margin:s/2,spacing:n}}return{margin:0,spacing:0}}function wi({src:i,width:e,height:t=e,frameWidth:n,frameHeight:s=n,columns:r,rows:o,frameIndex:a=0,marginX:l=0,marginY:c=0,spacingX:d=0,spacingY:u=0,pixelated:p=!0,style:m,fallback:x=null,alt:_=""}){let[g,f]=Tt(()=>i?Wo.get(i)!==!1:!1),[E,b]=Tt(null);ti(()=>{if(!i)return;if(Wo.get(i)===!1){f(!1);return}let ft=!1,it=new Image;return it.onload=()=>{ft||(Wo.set(i,!0),b({width:it.naturalWidth,height:it.naturalHeight}),f(!0))},it.onerror=()=>{ft||(Wo.set(i,!1),f(!1))},it.src=i,()=>{ft=!0}},[i]);let v=Math.max(1,r!=null?r:1),A=Math.max(1,o!=null?o:1),C=Math.max(1,n!=null?n:1),L=Math.max(1,s!=null?s:1),U=v*C,S=A*L,M=Bo(()=>{if(l!==0||d!==0||!E)return null;let ft=v-1,it=E.width-U,K=ld({extra:it,gaps:ft});return U+ft*K.spacing+K.margin*2!==E.width?null:K},[E,v,U,l,d]),D=Bo(()=>{if(c!==0||u!==0||!E)return null;let ft=A-1,it=E.height-S,K=ld({extra:it,gaps:ft});return S+ft*K.spacing+K.margin*2!==E.height?null:K},[E,A,S,c,u]),k=M?M.margin:l,G=M?M.spacing:d,W=D?D.margin:c,J=D?D.spacing:u,q=Bo(()=>E||{width:U+(v-1)*G+k*2,height:S+(A-1)*J+W*2},[E,v,A,U,S,G,J,k,W]),ae=Math.max(0,Math.floor(a)),Z=ae%v,Se=Math.floor(ae/v)%A,De=e/C,Fe=t/L,at=k+Z*(C+G),ut=W+Se*(L+J);return!i||!g?x:h.createElement("div",{"aria-label":_,style:{position:"relative",width:e,height:t,overflow:"hidden",...m}},h.createElement("img",{src:i,alt:"",draggable:!1,style:{position:"absolute",left:-at*De,top:-ut*Fe,width:q.width*De,height:q.height*Fe,imageRendering:p?"pixelated":void 0,userSelect:"none",pointerEvents:"none"}}))}function gc({type:i,x:e,y:t,aimDir:n=7}){let s=i==="watchdog"?Ft.deployableWatchdog:i==="sticky"?Ft.deployableSticky:null,r=i==="watchdog"?64:24,o=i==="watchdog"?64:22,a="drop-shadow(0 2px 4px rgba(0,0,0,0.4))",l=Number.isFinite(n)?Math.max(0,Math.min(7,Math.floor(n))):0;return h.createElement("div",{style:{position:"absolute",left:e+12-r/2,top:t+12-r/2,width:r,height:r,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,pointerEvents:"none"}},i==="watchdog"&&h.createElement("div",{style:{width:o,height:o,filter:a}},h.createElement(wi,{src:s,width:o,height:o,frameWidth:44,frameHeight:44,columns:4,rows:2,marginX:10,marginY:10,spacingX:20,spacingY:20,frameIndex:l,fallback:h.createElement(Xt,{src:s,width:o,height:o,style:{width:o,height:o},fallback:h.createElement(Hs,{size:o,style:{filter:a}})})})),i==="sticky"&&h.createElement(Xt,{src:s,width:o,height:o,style:{width:o,height:o,filter:a},fallback:h.createElement(Gs,{size:o,style:{filter:a}})}))}function xc({type:i,x:e,y:t,size:n,stunned:s,isHit:r,frame:o,flipX:a=!1,hp:l,maxHp:c}){let d=i==="regi-mite"?Ft.enemyRegiMite:i==="popup-gremlin"?Ft.enemyPopupGremlin:i==="spy-dot"?Ft.enemySpyDot:null,u={position:"absolute",left:e-n/2,top:t-n/2,width:n,height:n,opacity:s>0?.5:1,filter:r?"brightness(2)":"none",pointerEvents:"none"},p=Number.isFinite(c)?Math.max(1,Math.min(8,Math.round(c))):0,m=Number.isFinite(l)?Math.max(0,Math.min(p,Math.round(l))):0,x=!1,_=i==="regi-mite"?"#ffd35a":i==="popup-gremlin"?"#ff4da6":"#ff3b3b";if(i==="regi-mite"){let g=Number.isFinite(o)?o:0,f=Math.floor(g)%16;return h.createElement("div",{style:u},x&&h.createElement("div",{style:{position:"absolute",left:"50%",top:-8,transform:"translateX(-50%)",display:"flex",gap:2,padding:2,background:"rgba(11,16,32,0.55)",borderRadius:3,border:"1px solid rgba(255,255,255,0.18)"}},Array.from({length:p}).map((E,b)=>h.createElement("div",{key:b,style:{width:6,height:4,borderRadius:2,background:b<m?_:"#0b1020",opacity:b<m?.95:.25}}))),h.createElement("div",{style:{width:n,height:n,transform:a?"scaleX(-1)":void 0,transformOrigin:"center"}},h.createElement(wi,{src:d,width:n,height:n,frameWidth:32,frameHeight:32,columns:4,rows:4,marginX:16,marginY:16,spacingX:32,spacingY:32,frameIndex:f,fallback:h.createElement(Xt,{src:d,width:n,height:n,style:{width:n,height:n},fallback:h.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 100%)",border:"2px solid #888",borderRadius:3}},h.createElement("div",{style:{height:5,background:"#889",borderRadius:"2px 2px 0 0"}}),h.createElement("div",{style:{display:"flex",justifyContent:"center",gap:3,marginTop:3}},h.createElement("div",{style:{width:4,height:4,background:"#333",borderRadius:"50%"}}),h.createElement("div",{style:{width:4,height:4,background:"#333",borderRadius:"50%"}})))})})))}if(i==="popup-gremlin"){let g=Number.isFinite(o)?o:0,f=Math.sin(g*3)*4,E=Math.sin(g*5)*8,b=Math.floor(g)%16;return h.createElement("div",{style:{...u,transform:`translateY(${f}px) rotate(${E}deg) scale(${1+Math.sin(g*4)*.15})`}},x&&h.createElement("div",{style:{position:"absolute",left:"50%",top:-8,transform:"translateX(-50%)",display:"flex",gap:2,padding:2,background:"rgba(11,16,32,0.55)",borderRadius:3,border:"1px solid rgba(255,255,255,0.18)"}},Array.from({length:p}).map((v,A)=>h.createElement("div",{key:A,style:{width:6,height:4,borderRadius:2,background:A<m?_:"#0b1020",opacity:A<m?.95:.25}}))),h.createElement(wi,{src:d,width:n,height:n,frameWidth:32,frameHeight:32,columns:4,rows:4,marginX:16,marginY:16,spacingX:32,spacingY:32,frameIndex:b,fallback:h.createElement(Xt,{src:d,width:n,height:n,style:{width:n,height:n},fallback:h.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(180deg, #ffe0e0 0%, #ffb0b0 100%)",border:"2px solid #d66",borderRadius:3,boxShadow:"0 0 8px rgba(255,100,100,0.5)"}},h.createElement("div",{style:{display:"flex",justifyContent:"center",gap:4,marginTop:3}},h.createElement("div",{style:{width:5,height:5,background:"#800",borderRadius:"50%",transform:`rotate(${g*20}deg)`}}),h.createElement("div",{style:{width:5,height:5,background:"#800",borderRadius:"50%",transform:`rotate(${-g*20}deg)`}})),h.createElement("div",{style:{width:10,height:5,margin:"2px auto",background:"#800",borderRadius:"0 0 6px 6px"}}))})}))}if(i==="spy-dot"){let g=Number.isFinite(o)?o:0,f=Math.floor(g)%16;return h.createElement("div",{style:{...u,animation:"blink 0.7s infinite"}},x&&h.createElement("div",{style:{position:"absolute",left:"50%",top:-8,transform:"translateX(-50%)",display:"flex",gap:2,padding:2,background:"rgba(11,16,32,0.55)",borderRadius:3,border:"1px solid rgba(255,255,255,0.18)"}},Array.from({length:p}).map((E,b)=>h.createElement("div",{key:b,style:{width:6,height:4,borderRadius:2,background:b<m?_:"#0b1020",opacity:b<m?.95:.25}}))),h.createElement(wi,{src:d,width:n,height:n,frameWidth:32,frameHeight:32,columns:4,rows:4,marginX:16,marginY:16,spacingX:32,spacingY:32,frameIndex:f,fallback:h.createElement(Xt,{src:d,width:n,height:n,style:{width:n,height:n},fallback:h.createElement("div",{style:{width:"100%",height:"100%",background:"#f00",borderRadius:"50%",boxShadow:"0 0 6px #f00"}})})}))}return null}function yc({x:i,y:e,hp:t}){let n=t>3?0:t>2?1:t>1?2:3;return h.createElement("div",{style:{position:"absolute",left:i,top:e,width:24,height:24,pointerEvents:"none"}},h.createElement(wi,{src:Ft.folderWall,width:24,height:24,frameWidth:32,frameHeight:32,columns:4,rows:1,marginX:16,marginY:16,spacingX:32,frameIndex:n,fallback:h.createElement(Xt,{src:Ft.folderWall,width:24,height:24,style:{width:24,height:24},fallback:h.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},h.createElement("rect",{x:"2",y:"5",width:"20",height:"17",rx:"2",fill:"#d4a456",stroke:"#a07030",strokeWidth:"1"}),h.createElement("rect",{x:"2",y:"5",width:"9",height:"4",fill:"#e8bc6a",stroke:"#a07030",strokeWidth:"0.5"}),n>=1&&h.createElement("line",{x1:"8",y1:"10",x2:"18",y2:"20",stroke:"#804020",strokeWidth:"1"}),n>=2&&h.createElement("line",{x1:"4",y1:"14",x2:"12",y2:"20",stroke:"#804020",strokeWidth:"0.5"}),n>=3&&h.createElement("line",{x1:"14",y1:"8",x2:"20",y2:"16",stroke:"#804020",strokeWidth:"0.5"}))})}),h.createElement("div",{style:{position:"absolute",bottom:-4,left:2,width:20,height:3,background:"#333",borderRadius:1}},h.createElement("div",{style:{width:`${t/4*100}%`,height:"100%",background:t>2?"#4a4":"#e44",borderRadius:1}})))}function vf({type:i,size:e}){return i==="apple"?h.createElement(Rr,{size:e}):i==="coolant"?h.createElement(ko,{size:e}):i==="powerup-rapid"?h.createElement(zo,{size:e}):i==="powerup-triple"?h.createElement(Ho,{size:e}):i==="powerup-giant"?h.createElement(Go,{size:e}):h.createElement(Rr,{size:e})}function _c({x:i,y:e,type:t}){let n={apple:{},coolant:{},"powerup-rapid":{glow:"#ff0"},"powerup-triple":{glow:"#4af"},"powerup-giant":{glow:"#fa0"}},s=n[t]||n.apple,r=t&&t.startsWith("powerup"),o=t==="apple"?Ft.pickupApple:t==="coolant"?Ft.pickupCoolant:t==="powerup-rapid"?Ft.powerupRapid:t==="powerup-triple"?Ft.powerupTriple:t==="powerup-giant"?Ft.powerupGiant:null,a=22;return h.createElement("div",{style:{position:"absolute",left:i-14,top:e-14,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,animation:r?"pulse 0.6s infinite":"wobble 0.8s infinite",filter:s.glow?`drop-shadow(0 0 10px ${s.glow})`:"none",pointerEvents:"none"}},h.createElement(Xt,{src:o,width:a,height:a,style:{width:a,height:a},fallback:h.createElement(vf,{type:t,size:a})}))}function vc({x:i,y:e,hp:t,isHit:n,empCharge:s,invincible:r,mousePos:o,powerUp:a,cpuHeat:l,ramPressure:c}){let u=Math.atan2(o.y-e,o.x-i)*180/Math.PI,p=a==="giant",m=p?48:32,x=l>=90,_=c>=60,g="none",f="#fff";return n?g="brightness(2.5)":p?(g="drop-shadow(0 0 8px #ff0)",f="#ffd700"):x?(g="drop-shadow(0 0 6px #f00)",f="#ff6666"):_&&(g="drop-shadow(0 0 4px #0af)",f="#aaddff"),t<=2&&(f="#fcc"),h.createElement(h.Fragment,null,h.createElement("div",{style:{position:"absolute",left:o.x-14,top:o.y-14,width:28,height:28,pointerEvents:"none",zIndex:60}},h.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28"},h.createElement("circle",{cx:"14",cy:"14",r:"11",fill:"none",stroke:x?"rgba(255,100,100,0.7)":"rgba(255,255,255,0.5)",strokeWidth:"2"}),h.createElement("circle",{cx:"14",cy:"14",r:"4",fill:"none",stroke:x?"rgba(255,100,100,0.8)":"rgba(255,255,255,0.7)",strokeWidth:"2"}),h.createElement("line",{x1:"14",y1:"0",x2:"14",y2:"7",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),h.createElement("line",{x1:"14",y1:"21",x2:"14",y2:"28",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),h.createElement("line",{x1:"0",y1:"14",x2:"7",y2:"14",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),h.createElement("line",{x1:"21",y1:"14",x2:"28",y2:"14",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),h.createElement("circle",{cx:"14",cy:"14",r:"2",fill:x?"#f00":"#f44"}))),h.createElement("svg",{style:{position:"absolute",left:0,top:0,width:640,height:480,pointerEvents:"none",zIndex:45}},h.createElement("line",{x1:i,y1:e,x2:o.x,y2:o.y,stroke:"rgba(255,255,255,0.12)",strokeWidth:"1",strokeDasharray:"6,4"})),h.createElement("div",{style:{position:"absolute",left:i-m/2,top:e-m/2,width:m,height:m,transform:`rotate(${u+90}deg)`,transformOrigin:"center center",filter:g,opacity:r>0&&Math.floor(r/4)%2?.4:1,zIndex:50,pointerEvents:"none"}},h.createElement(Xt,{src:Ft.cursor,width:m,height:m,style:{width:m,height:m},fallback:h.createElement("svg",{width:m,height:m,viewBox:"0 0 28 28"},h.createElement("polygon",{points:"14,3 4,20 14,15 24,20",fill:f,stroke:"#111",strokeWidth:"1.5",strokeLinejoin:"round"}))})),s>=100&&h.createElement("div",{style:{position:"absolute",left:Math.round(i-m/2-6),top:Math.round(e-m/2-6),width:m+12,height:m+12,border:"3px solid #4af",borderRadius:"50%",animation:"pulse 1s infinite",pointerEvents:"none",zIndex:49,boxSizing:"border-box"}}),a&&h.createElement("div",{style:{position:"absolute",left:i-24,top:e-m/2-18,fontSize:8,color:"#fff",background:a==="rapid"?"#f80":a==="triple"?"#08f":"#ff0",padding:"2px 6px",borderRadius:4,fontWeight:"bold",pointerEvents:"none",zIndex:55,whiteSpace:"nowrap"}},a==="rapid"?"RAPID":a==="triple"?"TRIPLE":"GIANT"))}function Mc({popup:i,onChoice:e}){let t=Number.isFinite(i==null?void 0:i.countdown)?i.countdown:100,n=i.swapped,s,r,o;i.type==="firewall"?(s="Connection Request",r="Unknown signature!",o="#d44"):i.type==="security-update"?(s="Security Patch",r="VERIFIED - INSTALL!",o="#484"):(s="Update Available",r="Checksum mismatch!",o="#d44");let l=i.type==="firewall"?n?[{l:"[Q] Deny",a:"deny",v:"default"},{l:"[E] Allow",a:"allow",v:"primary"}]:[{l:"[E] Allow",a:"allow",v:"default"},{l:"[Q] Deny",a:"deny",v:"primary"}]:i.type==="security-update"?n?[{l:"[E] Skip",a:"reject",v:"primary"},{l:"[Q] Install",a:"accept",v:"default"}]:[{l:"[Q] Install",a:"accept",v:"primary"},{l:"[E] Skip",a:"reject",v:"default"}]:n?[{l:"[Q] Later",a:"later",v:"default"},{l:"[E] Install",a:"install",v:"primary"}]:[{l:"[E] Install",a:"install",v:"default"},{l:"[Q] Later",a:"later",v:"primary"}];return h.createElement("div",{style:{position:"absolute",left:i.x,top:i.y,zIndex:400}},h.createElement(Zn,{title:s,width:260},h.createElement("p",{style:{fontSize:7,marginBottom:8}},i.type==="firewall"?"Unknown process requests access.":i.type==="security-update"?"Critical security update.":"System update available."),h.createElement("p",{style:{fontSize:7,color:o,marginBottom:10,fontWeight:i.isLegit?"bold":"normal"}},r),h.createElement("div",{style:{width:"100%",height:6,background:"#ddd",borderRadius:3,marginBottom:14}},h.createElement("div",{style:{width:`${t}%`,height:"100%",background:t>30?"#5a5":"#d55",borderRadius:3}})),h.createElement("div",{style:{display:"flex",gap:10,justifyContent:"center"}},h.createElement(Yn,{variant:l[0].v,onClick:()=>e(i,l[0].a)},l[0].l),h.createElement(Yn,{variant:l[1].v,onClick:()=>e(i,l[1].a)},l[1].l))))}function Sc({setupTimer:i,folderWalls:e,setFolderWalls:t,deployables:n,setDeployables:s,onStart:r,mousePos:o}){let[a,l]=Tt(null),c=18,d=[{type:"folder",name:"Folder Wall",count:8-e.length,icon:h.createElement(Vo,{size:c}),desc:"Blocks enemies"},{type:"watchdog",name:"Watchdog",count:1-n.filter(x=>x.type==="watchdog").length,icon:h.createElement(Hs,{size:c}),desc:"Auto-turret"},{type:"sticky",name:"Floppy Disk",count:2-n.filter(x=>x.type==="sticky").length,icon:h.createElement(Gs,{size:c}),desc:"Decoy target"}],u=(x,_)=>{if(!a||_<50)return;let g=Math.round(x/16)*16-12,f=Math.round(_/16)*16-12;if(!(Math.abs(g+12-320)<50&&Math.abs(f+12-280)<50||[...e,...n].some(b=>Math.abs(b.x-g)<24&&Math.abs(b.y-f)<24))){if(a==="folder"&&e.length<8){t(b=>[...b,{id:Math.random(),x:g,y:f,hp:4}]);return}if(a==="watchdog"&&n.filter(b=>b.type==="watchdog").length<1){s(b=>[...b,{id:Math.random(),type:"watchdog",x:g,y:f,aimDir:7}]);return}a==="sticky"&&n.filter(b=>b.type==="sticky").length<2&&s(b=>[...b,{id:Math.random(),type:"sticky",x:g,y:f}])}},p=Math.round(o.x/16)*16-12,m=Math.round(o.y/16)*16-12;return h.createElement(h.Fragment,null,h.createElement("div",{onClick:x=>{if(!a)return;let _=x.currentTarget.getBoundingClientRect(),g=640/_.width,f=480/_.height;u((x.clientX-_.left)*g,(x.clientY-_.top)*f)},style:{position:"absolute",inset:0,top:20,cursor:a?"crosshair":"default"}},a&&o.y>50&&h.createElement("div",{style:{position:"absolute",left:p,top:m,width:24,height:24,border:"2px dashed #4a4",background:"rgba(74, 164, 74, 0.3)",pointerEvents:"none"}})),h.createElement(Zn,{title:"Tower Defense Setup",width:244,x:16,y:40},h.createElement("div",{style:{fontSize:6,marginBottom:10,color:"#666"}},"Click item, then click on desktop to place"),h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6}},d.map(x=>h.createElement("div",{key:x.type,onClick:()=>x.count>0&&l(x.type),style:{display:"flex",alignItems:"center",gap:8,padding:6,background:a===x.type?"#bef":x.count>0?"#fff":"#eee",border:`2px solid ${a===x.type?"#48a":"#aaa"}`,borderRadius:4,cursor:x.count>0?"pointer":"not-allowed",opacity:x.count>0?1:.5}},h.createElement("span",{style:{width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center"}},x.icon),h.createElement("div",{style:{flex:1}},h.createElement("div",{style:{fontSize:7,fontWeight:"bold"}},x.name),h.createElement("div",{style:{fontSize:5,color:"#888"}},x.desc," (\xD7",x.count,")"))))),h.createElement("div",{style:{marginTop:14,textAlign:"center"}},h.createElement("div",{style:{fontSize:12,marginBottom:10,color:"#e55",display:"flex",alignItems:"center",justifyContent:"center",gap:6}},h.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center"}},h.createElement(od,{size:16})),h.createElement("span",null,i,"s")),h.createElement(Yn,{variant:"primary",onClick:r},"Start Wave"))))}function Xo({x:i,y:e,hp:t,showIcon:n=!0}){return h.createElement("div",{style:{position:"absolute",left:i-24,top:e-24,width:48,height:48,pointerEvents:"none"}},n&&h.createElement(Xt,{src:Ft.systemFolder,width:48,height:48,style:{width:48,height:48},fallback:h.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},h.createElement("rect",{x:"4",y:"8",width:"40",height:"36",rx:"3",fill:"#4a7c9c",stroke:"#2a5c7c",strokeWidth:"2"}),h.createElement("rect",{x:"4",y:"8",width:"16",height:"6",fill:"#5a9cbc"}),h.createElement("rect",{x:"18",y:"22",width:"12",height:"10",rx:"2",fill:"#ffd700",stroke:"#aa8800",strokeWidth:"1"}))}),h.createElement("div",{style:{position:"absolute",bottom:-10,left:4,width:40,height:5,background:"#333",borderRadius:2,overflow:"hidden"}},h.createElement("div",{style:{width:`${t}%`,height:"100%",background:t>50?"#4a4":"#e44"}})))}function qo({x:i,y:e,clutter:t,showIcon:n=!0}){return h.createElement("div",{style:{position:"absolute",left:i,top:e,width:32,height:36,zIndex:30}},n&&h.createElement(Xt,{src:Ft.trash,width:32,height:36,style:{width:32,height:36},fallback:h.createElement("svg",{width:"32",height:"36",viewBox:"0 0 32 36"},h.createElement("path",{d:"M6 10 L8 32 L24 32 L26 10 Z",fill:"#888",stroke:"#555",strokeWidth:"1"}),h.createElement("rect",{x:"4",y:"6",width:"24",height:"4",rx:"1",fill:"#999",stroke:"#555",strokeWidth:"1"}),h.createElement("rect",{x:"12",y:"3",width:"8",height:"4",rx:"1",fill:"#777",stroke:"#555",strokeWidth:"0.5"}),h.createElement("line",{x1:"11",y1:"14",x2:"11",y2:"28",stroke:"#666",strokeWidth:"1"}),h.createElement("line",{x1:"16",y1:"14",x2:"16",y2:"28",stroke:"#666",strokeWidth:"1"}),h.createElement("line",{x1:"21",y1:"14",x2:"21",y2:"28",stroke:"#666",strokeWidth:"1"}))}),t.length>0&&h.createElement("div",{style:{position:"absolute",top:-6,right:-6,width:18,height:18,background:"#e55",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"#fff",fontWeight:"bold",border:"2px solid #fff",animation:"pulse 1s infinite"}},t.length))}var Xa="180";var Dd=0,lh=1,Ld=2;var ch=1,qa=2,fi=3,Pi=0,pn=1,Nn=2,Fi=0,ys=1,Kn=2,hh=3,dh=4,Ud=5,ji=100,Nd=101,Fd=102,Od=103,Bd=104,kd=200,zd=201,Hd=202,Gd=203,ma=204,ga=205,Vd=206,Wd=207,Xd=208,qd=209,Yd=210,Zd=211,Jd=212,$d=213,Kd=214,Ya=0,Za=1,Ja=2,_s=3,$a=4,Ka=5,ja=6,Qa=7,uh=0,jd=1,Qd=2,Oi=0,eu=1,tu=2,nu=3,el=4,iu=5,su=6,ru=7;var fh=300,As=301,Cs=302,tl=303,nl=304,go=306,xa=1e3,Cn=1001,ya=1002,$n=1003,ou=1004;var xo=1005;var oi=1006,il=1007;var is=1008;var ci=1009,ph=1010,mh=1011,pr=1012,sl=1013,ss=1014,pi=1015,mr=1016,rl=1017,ol=1018,gr=1020,gh=35902,xh=35899,yh=1021,_h=1022,jn=1023,nr=1026,xr=1027,vh=1028,al=1029,Mh=1030,ll=1031;var cl=1033,yo=33776,_o=33777,vo=33778,Mo=33779,hl=35840,dl=35841,ul=35842,fl=35843,pl=36196,ml=37492,gl=37496,xl=37808,yl=37809,_l=37810,vl=37811,Ml=37812,Sl=37813,bl=37814,wl=37815,El=37816,Tl=37817,Al=37818,Cl=37819,Il=37820,Rl=37821,Pl=36492,Dl=36494,Ll=36495,Ul=36283,Nl=36284,Fl=36285,Ol=36286;var kr=2300,_a=2301,pa=2302,$c=2400,Kc=2401,jc=2402;var au=3200,lu=3201;var Sh=0,cu=1,Bi="",Sn="srgb",vs="srgb-linear",zr="linear",Lt="srgb";var gs=7680;var Qc=519,hu=512,du=513,uu=514,bh=515,fu=516,pu=517,mu=518,gu=519,eh=35044;var wh="300 es",ri=2e3,Hr=2001;var Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bc=Math.PI/180,va=180/Math.PI;function yr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Mf(i,e){return(i%e+e)%e}function wc(i,e,t){return(1-t)*i+t*e}function Pr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Li=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],p=r[o+0],m=r[o+1],x=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(u!==_||l!==p||c!==m||d!==x){let g=1-a,f=l*p+c*m+d*x+u*_,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let A=Math.sqrt(b),C=Math.atan2(A,f*E);g=Math.sin(g*C)/A,a=Math.sin(a*C)/A}let v=a*E;if(l=l*g+p*v,c=c*g+m*v,d=d*g+x*v,u=u*g+_*v,g===1-a){let A=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=A,c*=A,d*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[o],p=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+d*u+l*m-c*p,e[t+1]=l*x+d*p+c*u-a*m,e[t+2]=c*x+d*m+a*p-l*u,e[t+3]=d*x-a*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),u=a(r/2),p=l(n/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*d*u+c*m*x,this._y=c*m*u-p*d*x,this._z=c*d*x+p*m*u,this._w=c*d*u-p*m*x;break;case"YXZ":this._x=p*d*u+c*m*x,this._y=c*m*u-p*d*x,this._z=c*d*x-p*m*u,this._w=c*d*u+p*m*x;break;case"ZXY":this._x=p*d*u-c*m*x,this._y=c*m*u+p*d*x,this._z=c*d*x+p*m*u,this._w=c*d*u-p*m*x;break;case"ZYX":this._x=p*d*u-c*m*x,this._y=c*m*u+p*d*x,this._z=c*d*x-p*m*u,this._w=c*d*u+p*m*x;break;case"YZX":this._x=p*d*u+c*m*x,this._y=c*m*u+p*d*x,this._z=c*d*x-p*m*u,this._w=c*d*u-p*m*x;break;case"XZY":this._x=p*d*u-c*m*x,this._y=c*m*u-p*d*x,this._z=c*d*x+p*m*u,this._w=c*d*u+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],p=n+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,p=Math.sin(t*d)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ec=new F,cd=new Li,yt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],p=n[2],m=n[5],x=n[8],_=s[0],g=s[3],f=s[6],E=s[1],b=s[4],v=s[7],A=s[2],C=s[5],L=s[8];return r[0]=o*_+a*E+l*A,r[3]=o*g+a*b+l*C,r[6]=o*f+a*v+l*L,r[1]=c*_+d*E+u*A,r[4]=c*g+d*b+u*C,r[7]=c*f+d*v+u*L,r[2]=p*_+m*E+x*A,r[5]=p*g+m*b+x*C,r[8]=p*f+m*v+x*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,p=a*l-d*r,m=c*r-o*l,x=t*u+n*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=u*_,e[1]=(s*c-d*n)*_,e[2]=(a*n-s*o)*_,e[3]=p*_,e[4]=(d*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tc=new yt;function Eh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xu(){let i=Gr("canvas");return i.style.display="block",i}var hd={};function ir(i){i in hd||(hd[i]=!0,console.warn(i))}function yu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var dd=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sf(){let i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:e,whitePoint:n,transfer:zr,toXYZ:dd,fromXYZ:ud,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:dd,fromXYZ:ud,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}var At=Sf();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,Ma=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=Gr("canvas")),Vs.width=e.width,Vs.height=e.height;let s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bf=0,sr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ac(s[o].image)):r.push(Ac(s[o]))}else r=Ac(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ac(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wf=0,Cc=new F,Un=class i extends Di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=oi,o=is,a=jn,l=ci,c=i.DEFAULT_ANISOTROPY,d=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=yr(),this.name="",this.source=new sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=fh;Un.DEFAULT_ANISOTROPY=1;var Yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],p=l[1],m=l[5],x=l[9],_=l[2],g=l[6],f=l[10];if(Math.abs(d-p)<.01&&Math.abs(u-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(m+1)/2,A=(f+1)/2,C=(d+p)/4,L=(u+_)/4,U=(x+g)/4;return b>v&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=C/n,r=L/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=U/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=L/r,s=U/r),this.set(n,s,r,t),this}let E=Math.sqrt((g-x)*(g-x)+(u-_)*(u-_)+(p-d)*(p-d));return Math.abs(E)<.001&&(E=1),this.x=(g-x)/E,this.y=(u-_)/E,this.z=(p-d)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sa=class extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Un(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new sr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Sa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vr=class extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends Un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Zo.subVectors(this.max,Dr),Ws.subVectors(e.a,Dr),Xs.subVectors(e.b,Dr),qs.subVectors(e.c,Dr),Xi.subVectors(Xs,Ws),qi.subVectors(qs,Xs),us.subVectors(Ws,qs);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-us.z,us.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,us.z,0,-us.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-us.y,us.x,0];return!Ic(t,Ws,Xs,qs,Zo)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,Ws,Xs,qs,Zo))?!1:(Jo.crossVectors(Xi,qi),t=[Jo.x,Jo.y,Jo.z],Ic(t,Ws,Xs,qs,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ei=[new F,new F,new F,new F,new F,new F,new F,new F],ni=new F,Yo=new Qi,Ws=new F,Xs=new F,qs=new F,Xi=new F,qi=new F,us=new F,Dr=new F,Zo=new F,Jo=new F,fs=new F;function Ic(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fs.fromArray(i,r);let a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),d=n.dot(fs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Ef=new Qi,Lr=new F,Rc=new F,rr=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ef.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Rc)),this.expandByPoint(Lr.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ti=new F,Pc=new F,$o=new F,Yi=new F,Dc=new F,Ko=new F,Lc=new F,wa=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pc.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Pc);let r=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=Yi.dot(this.direction),l=-Yi.dot($o),c=Yi.lengthSq(),d=Math.abs(1-o*o),u,p,m,x;if(d>0)if(u=o*l-a,p=o*a-l,x=r*d,u>=0)if(p>=-x)if(p<=x){let _=1/d;u*=_,p*=_,m=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p<=-x?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=x?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pc).addScaledVector($o,p),m}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),d>=0?(r=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,s,r){Dc.subVectors(t,e),Ko.subVectors(n,e),Lc.crossVectors(Dc,Ko);let o=this.direction.dot(Lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);let l=a*this.direction.dot(Ko.crossVectors(Yi,Ko));if(l<0)return null;let c=a*this.direction.dot(Dc.cross(Yi));if(c<0||l+c>o)return null;let d=-a*Yi.dot(Lc);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class i{constructor(e,t,n,s,r,o,a,l,c,d,u,p,m,x,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,u,p,m,x,_,g)}set(e,t,n,s,r,o,a,l,c,d,u,p,m,x,_,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=p,f[3]=m,f[7]=x,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*d,m=o*u,x=a*d,_=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+x*c,t[5]=p-_*c,t[9]=-a*l,t[2]=_-p*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*d,m=l*u,x=c*d,_=c*u;t[0]=p+_*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=m*a-x,t[6]=_+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*d,m=l*u,x=c*d,_=c*u;t[0]=p-_*a,t[4]=-o*u,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*d,t[9]=_-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*d,m=o*u,x=a*d,_=a*u;t[0]=l*d,t[4]=x*c-m,t[8]=p*c+_,t[1]=l*u,t[5]=_*c+p,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*d,t[4]=_-p*u,t[8]=x*u+m,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*u+x,t[10]=p-_*u}else if(e.order==="XZY"){let p=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=p*u+_,t[5]=o*d,t[9]=m*u-x,t[2]=x*u-m,t[6]=a*d,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tf,e,Af)}lookAt(e,t,n){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Zi.crossVectors(n,Bn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Zi.crossVectors(n,Bn)),Zi.normalize(),jo.crossVectors(Bn,Zi),s[0]=Zi.x,s[4]=jo.x,s[8]=Bn.x,s[1]=Zi.y,s[5]=jo.y,s[9]=Bn.y,s[2]=Zi.z,s[6]=jo.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],p=n[9],m=n[13],x=n[2],_=n[6],g=n[10],f=n[14],E=n[3],b=n[7],v=n[11],A=n[15],C=s[0],L=s[4],U=s[8],S=s[12],M=s[1],D=s[5],k=s[9],G=s[13],W=s[2],J=s[6],q=s[10],ae=s[14],Z=s[3],Se=s[7],De=s[11],Fe=s[15];return r[0]=o*C+a*M+l*W+c*Z,r[4]=o*L+a*D+l*J+c*Se,r[8]=o*U+a*k+l*q+c*De,r[12]=o*S+a*G+l*ae+c*Fe,r[1]=d*C+u*M+p*W+m*Z,r[5]=d*L+u*D+p*J+m*Se,r[9]=d*U+u*k+p*q+m*De,r[13]=d*S+u*G+p*ae+m*Fe,r[2]=x*C+_*M+g*W+f*Z,r[6]=x*L+_*D+g*J+f*Se,r[10]=x*U+_*k+g*q+f*De,r[14]=x*S+_*G+g*ae+f*Fe,r[3]=E*C+b*M+v*W+A*Z,r[7]=E*L+b*D+v*J+A*Se,r[11]=E*U+b*k+v*q+A*De,r[15]=E*S+b*G+v*ae+A*Fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],p=e[10],m=e[14],x=e[3],_=e[7],g=e[11],f=e[15];return x*(+r*l*u-s*c*u-r*a*p+n*c*p+s*a*m-n*l*m)+_*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*d-r*l*d)+g*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*d-n*c*d)+f*(-s*a*d-t*l*u+t*a*p+s*o*u-n*o*p+n*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],p=e[10],m=e[11],x=e[12],_=e[13],g=e[14],f=e[15],E=u*g*c-_*p*c+_*l*m-a*g*m-u*l*f+a*p*f,b=x*p*c-d*g*c-x*l*m+o*g*m+d*l*f-o*p*f,v=d*_*c-x*u*c+x*a*m-o*_*m-d*a*f+o*u*f,A=x*u*l-d*_*l-x*a*p+o*_*p+d*a*g-o*u*g,C=t*E+n*b+s*v+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=E*L,e[1]=(_*p*r-u*g*r-_*s*m+n*g*m+u*s*f-n*p*f)*L,e[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*f+n*l*f)*L,e[3]=(u*l*r-a*p*r-u*s*c+n*p*c+a*s*m-n*l*m)*L,e[4]=b*L,e[5]=(d*g*r-x*p*r+x*s*m-t*g*m-d*s*f+t*p*f)*L,e[6]=(x*l*r-o*g*r-x*s*c+t*g*c+o*s*f-t*l*f)*L,e[7]=(o*p*r-d*l*r+d*s*c-t*p*c-o*s*m+t*l*m)*L,e[8]=v*L,e[9]=(x*u*r-d*_*r-x*n*m+t*_*m+d*n*f-t*u*f)*L,e[10]=(o*_*r-x*a*r+x*n*c-t*_*c-o*n*f+t*a*f)*L,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*m-t*a*m)*L,e[12]=A*L,e[13]=(d*_*s-x*u*s+x*n*p-t*_*p-d*n*g+t*u*g)*L,e[14]=(x*a*s-o*_*s-x*n*l+t*_*l+o*n*g-t*a*g)*L,e[15]=(o*u*s-d*a*s+d*n*l-t*u*l-o*n*p+t*a*p)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,p=r*c,m=r*d,x=r*u,_=o*d,g=o*u,f=a*u,E=l*c,b=l*d,v=l*u,A=n.x,C=n.y,L=n.z;return s[0]=(1-(_+f))*A,s[1]=(m+v)*A,s[2]=(x-b)*A,s[3]=0,s[4]=(m-v)*C,s[5]=(1-(p+f))*C,s[6]=(g+E)*C,s[7]=0,s[8]=(x+b)*L,s[9]=(g-E)*L,s[10]=(1-(p+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ys.set(s[0],s[1],s[2]).length(),o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ii.copy(this);let c=1/r,d=1/o,u=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=d,ii.elements[5]*=d,ii.elements[6]*=d,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,t.setFromRotationMatrix(ii),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ri,l=!1){let c=this.elements,d=2*r/(t-e),u=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s),x,_;if(l)x=r/(o-r),_=o*r/(o-r);else if(a===ri)x=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Hr)x=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ri,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s),x,_;if(l)x=1/(o-r),_=o/(o-r);else if(a===ri)x=-2/(o-r),_=-(o+r)/(o-r);else if(a===Hr)x=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ys=new F,ii=new $t,Tf=new F(0,0,0),Af=new F(1,1,1),Zi=new F,jo=new F,Bn=new F,fd=new $t,pd=new Li,ai=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cf=0,md=new F,Zs=new Li,Ai=new $t,Qo=new F,Ur=new F,If=new F,Rf=new Li,gd=new F(1,0,0),xd=new F(0,1,0),yd=new F(0,0,1),_d={type:"added"},Pf={type:"removed"},Js={type:"childadded",child:null},Uc={type:"childremoved",child:null},dn=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new ai,n=new Li,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new yt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(yd,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qo.copy(e):Qo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Ur,Qo,this.up):Ai.lookAt(Qo,Ur,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_d),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pf),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_d),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};dn.DEFAULT_UP=new F(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new F,Ci=new F,Nc=new F,Ii=new F,$s=new F,Ks=new F,vd=new F,Fc=new F,Oc=new F,Bc=new F,kc=new Yt,zc=new Yt,Hc=new Yt,Ki=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){si.subVectors(s,t),Ci.subVectors(n,t),Nc.subVectors(e,t);let o=si.dot(si),a=si.dot(Ci),l=si.dot(Nc),c=Ci.dot(Ci),d=Ci.dot(Nc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(c*l-a*d)*p,x=(o*d-a*l)*p;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return kc.setScalar(0),zc.setScalar(0),Hc.setScalar(0),kc.fromBufferAttribute(e,t),zc.fromBufferAttribute(e,n),Hc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(kc,r.x),o.addScaledVector(zc,r.y),o.addScaledVector(Hc,r.z),o}static isFrontFacing(e,t,n,s){return si.subVectors(n,t),Ci.subVectors(e,t),si.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),si.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,n),Ks.subVectors(r,n),Fc.subVectors(e,n);let l=$s.dot(Fc),c=Ks.dot(Fc);if(l<=0&&c<=0)return t.copy(n);Oc.subVectors(e,s);let d=$s.dot(Oc),u=Ks.dot(Oc);if(d>=0&&u<=d)return t.copy(s);let p=l*u-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector($s,o);Bc.subVectors(e,r);let m=$s.dot(Bc),x=Ks.dot(Bc);if(x>=0&&m<=x)return t.copy(r);let _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Ks,a);let g=d*x-m*u;if(g<=0&&u-d>=0&&m-x>=0)return vd.subVectors(r,s),a=(u-d)/(u-d+(m-x)),t.copy(s).addScaledVector(vd,a);let f=1/(g+_+p);return o=_*f,a=p*f,t.copy(n).addScaledVector($s,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=At.workingColorSpace){if(e=Mf(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gc(o,r,e+1/3),this.g=Gc(o,r,e),this.b=Gc(o,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){let n=_u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return At.workingToColorSpace(Mn.copy(this),e),Math.round(Mt(Mn.r*255,0,255))*65536+Math.round(Mt(Mn.g*255,0,255))*256+Math.round(Mt(Mn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Sn){At.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(ea);let n=wc(Ji.h,ea.h,t),s=wc(Ji.s,ea.s,t),r=wc(Ji.l,ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new xt;xt.NAMES=_u;var Df=0,Ui=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=ys,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},bn=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var en=new F,ta=new Pe,Lf=0,zn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),s=Dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Dn(t,this.array),n=Dn(n,this.array),s=Dn(s,this.array),r=Dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}};var Xr=class extends zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qr=class extends zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pt=class extends zn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Uf=0,Jn=new $t,Vc=new dn,js=new F,kn=new Qi,Nr=new Qi,hn=new F,In=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eh(e)?qr:Xr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(kn.min,Nr.min),kn.expandByPoint(hn),hn.addVectors(kn.max,Nr.max),kn.expandByPoint(hn)):(kn.expandByPoint(Nr.min),kn.expandByPoint(Nr.max))}kn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)hn.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(e,c),hn.add(js)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new F,l[U]=new F;let c=new F,d=new F,u=new F,p=new Pe,m=new Pe,x=new Pe,_=new F,g=new F;function f(U,S,M){c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,S),x.fromBufferAttribute(r,M),d.sub(c),u.sub(c),m.sub(p),x.sub(p);let D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(_.copy(d).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(D),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(D),a[U].add(_),a[S].add(_),a[M].add(_),l[U].add(g),l[S].add(g),l[M].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,S=E.length;U<S;++U){let M=E[U],D=M.start,k=M.count;for(let G=D,W=D+k;G<W;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new F,v=new F,A=new F,C=new F;function L(U){A.fromBufferAttribute(s,U),C.copy(A);let S=a[U];b.copy(S),b.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(C,S);let D=v.dot(l[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,D)}for(let U=0,S=E.length;U<S;++U){let M=E[U],D=M.start,k=M.count;for(let G=D,W=D+k;G<W;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,d=new F,u=new F;if(e)for(let p=0,m=e.count;p<m;p+=3){let x=e.getX(p+0),_=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,u=a.normalized,p=new c.constructor(l.length*d),m=0,x=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let f=0;f<d;f++)p[x++]=c[m++]}return new zn(p,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){let p=c[d],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,p=c.length;u<p;u++){let m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let p=0,m=u.length;p<m;p++)d.push(u[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Md=new $t,ps=new wa,na=new rr,Sd=new F,ia=new F,sa=new F,ra=new F,Wc=new F,oa=new F,bd=new F,aa=new F,pe=class extends dn{constructor(e=new In,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],u=r[l];d!==0&&(Wc.fromBufferAttribute(u,e),o?oa.addScaledVector(Wc,d):oa.addScaledVector(Wc.sub(t),d))}t.add(oa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(na.containsPoint(ps.origin)===!1&&(ps.intersectSphere(na,Sd)===null||ps.origin.distanceToSquared(Sd)>(e.far-e.near)**2))&&(Md.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Md),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=p.length;x<_;x++){let g=p[x],f=o[g.materialIndex],E=Math.max(g.start,m.start),b=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let v=E,A=b;v<A;v+=3){let C=a.getX(v),L=a.getX(v+1),U=a.getX(v+2);s=la(this,f,e,n,c,d,u,C,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=x,f=_;g<f;g+=3){let E=a.getX(g),b=a.getX(g+1),v=a.getX(g+2);s=la(this,o,e,n,c,d,u,E,b,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=p.length;x<_;x++){let g=p[x],f=o[g.materialIndex],E=Math.max(g.start,m.start),b=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let v=E,A=b;v<A;v+=3){let C=v,L=v+1,U=v+2;s=la(this,f,e,n,c,d,u,C,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=x,f=_;g<f;g+=3){let E=g,b=g+1,v=g+2;s=la(this,o,e,n,c,d,u,E,b,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Nf(i,e,t,n,s,r,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Pi,a),l===null)return null;aa.copy(a),aa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:i}}function la(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ia),i.getVertexPosition(l,sa),i.getVertexPosition(c,ra);let d=Nf(i,e,t,n,ia,sa,ra,bd);if(d){let u=new F;Ki.getBarycoord(bd,ia,sa,ra,u),s&&(d.uv=Ki.getInterpolatedAttribute(s,a,l,c,u,new Pe)),r&&(d.uv1=Ki.getInterpolatedAttribute(r,a,l,c,u,new Pe)),o&&(d.normal=Ki.getInterpolatedAttribute(o,a,l,c,u,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new F,materialIndex:0};Ki.getNormal(ia,sa,ra,p.normal),d.face=p,d.barycoord=u}return d}var Vt=class i extends In{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],u=[],p=0,m=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(u,2));function x(_,g,f,E,b,v,A,C,L,U,S){let M=v/L,D=A/U,k=v/2,G=A/2,W=C/2,J=L+1,q=U+1,ae=0,Z=0,Se=new F;for(let De=0;De<q;De++){let Fe=De*D-G;for(let at=0;at<J;at++){let ut=at*M-k;Se[_]=ut*E,Se[g]=Fe*b,Se[f]=W,c.push(Se.x,Se.y,Se.z),Se[_]=0,Se[g]=0,Se[f]=C>0?1:-1,d.push(Se.x,Se.y,Se.z),u.push(at/L),u.push(1-De/U),ae+=1}}for(let De=0;De<U;De++)for(let Fe=0;Fe<L;Fe++){let at=p+Fe+J*De,ut=p+Fe+J*(De+1),ft=p+(Fe+1)+J*(De+1),it=p+(Fe+1)+J*De;l.push(at,ut,it),l.push(ut,ft,it),Z+=6}a.addGroup(m,Z,S),m+=Z,p+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function En(i){let e={};for(let t=0;t<i.length;t++){let n=Is(i[t]);for(let s in n)e[s]=n[s]}return e}function Ff(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Th(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var vu={clone:Is,merge:En},Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Yr=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$i=new F,wd=new Pe,Ed=new Pe,Ln=class extends Yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,wd,Ed),t.subVectors(Ed,wd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qs=-90,er=1,Ea=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ln(Qs,er,e,t);s.layers=this.layers,this.add(s);let r=new Ln(Qs,er,e,t);r.layers=this.layers,this.add(r);let o=new Ln(Qs,er,e,t);o.layers=this.layers,this.add(o);let a=new Ln(Qs,er,e,t);a.layers=this.layers,this.add(a);let l=new Ln(Qs,er,e,t);l.layers=this.layers,this.add(l);let c=new Ln(Qs,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,p,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Zr=class extends Un{constructor(e=[],t=As,n,s,r,o,a,l,c,d){super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ta=class extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Fi});r.uniforms.tEquirect.value=t;let o=new pe(s,r),a=t.minFilter;return t.minFilter===is&&(t.minFilter=oi),new Ea(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},tn=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},kf={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),f=this._getHandJoint(c,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=d.position.distanceTo(u.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Jr=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Xc=new F,zf=new F,Hf=new yt,di=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Xc.subVectors(n,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Xc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hf.getNormalMatrix(e),s=this.coplanarPoint(Xc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ms=new rr,Gf=new Pe(.5,.5),ca=new F,ar=class{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],p=r[6],m=r[7],x=r[8],_=r[9],g=r[10],f=r[11],E=r[12],b=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,m-d,f-x,A-E).normalize(),s[1].setComponents(c+o,m+d,f+x,A+E).normalize(),s[2].setComponents(c+a,m+u,f+_,A+b).normalize(),s[3].setComponents(c-a,m-u,f-_,A-b).normalize(),n)s[4].setComponents(l,p,g,v).normalize(),s[5].setComponents(c-l,m-p,f-g,A-v).normalize();else if(s[4].setComponents(c-l,m-p,f-g,A-v).normalize(),t===ri)s[5].setComponents(c+l,m+p,f+g,A+v).normalize();else if(t===Hr)s[5].setComponents(l,p,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);let t=Gf.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ca.x=s.normal.x>0?e.max.x:e.min.x,ca.y=s.normal.y>0?e.max.y:e.min.y,ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ms=class extends Un{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},$r=class extends Un{constructor(e,t,n=ss,s,r,o,a=$n,l=$n,c,d=nr,u=1){if(d!==nr&&d!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:u};super(p,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Kr=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},lr=class i extends In{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],d=t/2,u=Math.PI/2*e,p=t,m=2*u+p,x=n*2+r,_=s+1,g=new F,f=new F;for(let E=0;E<=x;E++){let b=0,v=0,A=0,C=0;if(E<=n){let S=E/n,M=S*Math.PI/2;v=-d-e*Math.cos(M),A=e*Math.sin(M),C=-e*Math.cos(M),b=S*u}else if(E<=n+r){let S=(E-n)/r;v=-d+S*t,A=e,C=0,b=u+S*p}else{let S=(E-n-r)/n,M=S*Math.PI/2;v=d+e*Math.sin(M),A=e*Math.cos(M),C=e*Math.sin(M),b=u+p+S*u}let L=Math.max(0,Math.min(1,b/m)),U=0;E===0?U=.5/s:E===x&&(U=-.5/s);for(let S=0;S<=s;S++){let M=S/s,D=M*Math.PI*2,k=Math.sin(D),G=Math.cos(D);f.x=-A*G,f.y=v,f.z=A*k,a.push(f.x,f.y,f.z),g.set(-A*G,C,A*k),g.normalize(),l.push(g.x,g.y,g.z),c.push(M+U,L)}if(E>0){let S=(E-1)*_;for(let M=0;M<s;M++){let D=S+M,k=S+M+1,G=E*_+M,W=E*_+M+1;o.push(D,k,G),o.push(k,W,G)}}}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Kt=class i extends In{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],p=[],m=[],x=0,_=[],g=n/2,f=0;E(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(p,3)),this.setAttribute("uv",new Pt(m,2));function E(){let v=new F,A=new F,C=0,L=(t-e)/n;for(let U=0;U<=r;U++){let S=[],M=U/r,D=M*(t-e)+e;for(let k=0;k<=s;k++){let G=k/s,W=G*l+a,J=Math.sin(W),q=Math.cos(W);A.x=D*J,A.y=-M*n+g,A.z=D*q,u.push(A.x,A.y,A.z),v.set(J,L,q).normalize(),p.push(v.x,v.y,v.z),m.push(G,1-M),S.push(x++)}_.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let M=_[S][U],D=_[S+1][U],k=_[S+1][U+1],G=_[S][U+1];(e>0||S!==0)&&(d.push(M,D,G),C+=3),(t>0||S!==r-1)&&(d.push(D,k,G),C+=3)}c.addGroup(f,C,0),f+=C}function b(v){let A=x,C=new Pe,L=new F,U=0,S=v===!0?e:t,M=v===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,g*M,0),p.push(0,M,0),m.push(.5,.5),x++;let D=x;for(let k=0;k<=s;k++){let W=k/s*l+a,J=Math.cos(W),q=Math.sin(W);L.x=S*q,L.y=g*M,L.z=S*J,u.push(L.x,L.y,L.z),p.push(0,M,0),C.x=J*.5+.5,C.y=q*.5*M+.5,m.push(C.x,C.y),x++}for(let k=0;k<s;k++){let G=A+k,W=D+k;v===!0?d.push(W,W+1,G):d.push(W+1,W,G),U+=3}c.addGroup(f,U,v===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jr=class i extends Kt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qr=class i extends In{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),d(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let b=new F,v=new F,A=new F;for(let C=0;C<t.length;C+=3)m(t[C+0],b),m(t[C+1],v),m(t[C+2],A),l(b,v,A,E)}function l(E,b,v,A){let C=A+1,L=[];for(let U=0;U<=C;U++){L[U]=[];let S=E.clone().lerp(v,U/C),M=b.clone().lerp(v,U/C),D=C-U;for(let k=0;k<=D;k++)k===0&&U===C?L[U][k]=S:L[U][k]=S.clone().lerp(M,k/D)}for(let U=0;U<C;U++)for(let S=0;S<2*(C-U)-1;S++){let M=Math.floor(S/2);S%2===0?(p(L[U][M+1]),p(L[U+1][M]),p(L[U][M])):(p(L[U][M+1]),p(L[U+1][M+1]),p(L[U+1][M]))}}function c(E){let b=new F;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(E),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function d(){let E=new F;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];let v=g(E)/2/Math.PI+.5,A=f(E)/Math.PI+.5;o.push(v,1-A)}x(),u()}function u(){for(let E=0;E<o.length;E+=6){let b=o[E+0],v=o[E+2],A=o[E+4],C=Math.max(b,v,A),L=Math.min(b,v,A);C>.9&&L<.1&&(b<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function p(E){r.push(E.x,E.y,E.z)}function m(E,b){let v=E*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function x(){let E=new F,b=new F,v=new F,A=new F,C=new Pe,L=new Pe,U=new Pe;for(let S=0,M=0;S<r.length;S+=9,M+=6){E.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),C.set(o[M+0],o[M+1]),L.set(o[M+2],o[M+3]),U.set(o[M+4],o[M+5]),A.copy(E).add(b).add(v).divideScalar(3);let D=g(A);_(C,M+0,E,D),_(L,M+2,b,D),_(U,M+4,v,D)}}function _(E,b,v,A){A<0&&E.x===1&&(o[b]=E.x-1),v.x===0&&v.z===0&&(o[b]=A/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let d=n[s],p=n[s+1]-d,m=(o-d)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Pe:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],o=[],a=new F,l=new $t;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Mt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Mt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},cr=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*d-m*u+this.aX,c=p*u+m*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Aa=class extends cr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,u){let p=(o-r)/c-(a-r)/(c+d)+(a-o)/d,m=(a-o)/d-(l-o)/(d+u)+(l-a)/u;p*=d,m*=d,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ha=new F,qc=new Ah,Yc=new Ah,Zc=new Ah,Ca=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(ha.subVectors(s[0],s[1]).add(s[0]),c=ha);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(ha.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=ha),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(d),m);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),qc.initNonuniformCatmullRom(c.x,u.x,p.x,d.x,x,_,g),Yc.initNonuniformCatmullRom(c.y,u.y,p.y,d.y,x,_,g),Zc.initNonuniformCatmullRom(c.z,u.z,p.z,d.z,x,_,g)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(c.x,u.x,p.x,d.x,this.tension),Yc.initCatmullRom(c.y,u.y,p.y,d.y,this.tension),Zc.initCatmullRom(c.z,u.z,p.z,d.z,this.tension));return n.set(qc.calc(l),Yc.calc(l),Zc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Td(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Vf(i,e){let t=1-i;return t*t*e}function Wf(i,e){return 2*(1-i)*i*e}function Xf(i,e){return i*i*e}function Or(i,e,t,n){return Vf(i,e)+Wf(i,t)+Xf(i,n)}function qf(i,e){let t=1-i;return t*t*t*e}function Yf(i,e){let t=1-i;return 3*t*t*i*e}function Zf(i,e){return 3*(1-i)*i*i*e}function Jf(i,e){return i*i*i*e}function Br(i,e,t,n,s){return qf(i,e)+Yf(i,t)+Zf(i,n)+Jf(i,s)}var eo=class extends Hn{constructor(e=new Pe,t=new Pe,n=new Pe,s=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Pe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(e,s.x,r.x,o.x,a.x),Br(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ia=class extends Hn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(e,s.x,r.x,o.x,a.x),Br(e,s.y,r.y,o.y,a.y),Br(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},to=class extends Hn{constructor(e=new Pe,t=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Hn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends Hn{constructor(e=new Pe,t=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Pe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Or(e,s.x,r.x,o.x),Or(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends Hn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Or(e,s.x,r.x,o.x),Or(e,s.y,r.y,o.y),Or(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Pe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Td(a,l.x,c.x,d.x,u.x),Td(a,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Pe().fromArray(s))}return this}},th=Object.freeze({__proto__:null,ArcCurve:Aa,CatmullRomCurve3:Ca,CubicBezierCurve:eo,CubicBezierCurve3:Ia,EllipseCurve:cr,LineCurve:to,LineCurve3:Ra,QuadraticBezierCurve:no,QuadraticBezierCurve3:Pa,SplineCurve:io}),Da=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new th[s.type]().fromJSON(s))}return this}},so=class extends Da{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new to(this.currentPoint.clone(),new Pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new no(this.currentPoint.clone(),new Pe(e,t),new Pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new eo(this.currentPoint.clone(),new Pe(e,t),new Pe(n,s),new Pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new io(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new cr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ss=class extends so{constructor(e){super(e),this.uuid=yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new so().fromJSON(s))}return this}};function $f(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Mu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=tp(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let d=-1/0,u=-1/0;for(let p=t;p<s;p+=t){let m=i[p],x=i[p+1];m<a&&(a=m),x<l&&(l=x),m>d&&(d=m),x>u&&(u=x)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return ro(r,o,t,a,l,c,0),o}function Mu(i,e,t,n,s){let r;if(s===up(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ad(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ad(o/n|0,i[o],i[o+1],r);return r&&hr(r,r.next)&&(ao(r),r=r.next),r}function bs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(hr(t,t.next)||qt(t.prev,t,t.next)===0)){if(ao(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ro(i,e,t,n,s,r,o){if(!i)return;!o&&r&&op(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?jf(i,n,s,r):Kf(i)){e.push(l.i,i.i,c.i),ao(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Qf(bs(i),e),ro(i,e,t,n,s,r,2)):o===2&&ep(i,e,t,n,s,r):ro(bs(i),e,t,n,s,r,1);break}}}function Kf(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(s,r,o),u=Math.min(a,l,c),p=Math.max(s,r,o),m=Math.max(a,l,c),x=n.next;for(;x!==e;){if(x.x>=d&&x.x<=p&&x.y>=u&&x.y<=m&&Fr(s,a,r,l,o,c,x.x,x.y)&&qt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function jf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(qt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,d=s.y,u=r.y,p=o.y,m=Math.min(a,l,c),x=Math.min(d,u,p),_=Math.max(a,l,c),g=Math.max(d,u,p),f=nh(m,x,e,t,n),E=nh(_,g,e,t,n),b=i.prevZ,v=i.nextZ;for(;b&&b.z>=f&&v&&v.z<=E;){if(b.x>=m&&b.x<=_&&b.y>=x&&b.y<=g&&b!==s&&b!==o&&Fr(a,d,l,u,c,p,b.x,b.y)&&qt(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=m&&v.x<=_&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&Fr(a,d,l,u,c,p,v.x,v.y)&&qt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=f;){if(b.x>=m&&b.x<=_&&b.y>=x&&b.y<=g&&b!==s&&b!==o&&Fr(a,d,l,u,c,p,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=E;){if(v.x>=m&&v.x<=_&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&Fr(a,d,l,u,c,p,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!hr(n,s)&&bu(n,t,t.next,s)&&oo(n,s)&&oo(s,n)&&(e.push(n.i,t.i,s.i),ao(t),ao(t.next),t=i=s),t=t.next}while(t!==i);return bs(t)}function ep(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cp(o,a)){let l=wu(o,a);o=bs(o,o.next),l=bs(l,l.next),ro(o,e,t,n,s,r,0),ro(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Mu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(lp(c))}s.sort(np);for(let r=0;r<s.length;r++)t=ip(s[r],t);return t}function np(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ip(i,e){let t=sp(i,e);if(!t)return e;let n=wu(t,i);return bs(n,n.next),bs(t,t.next)}function sp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(hr(i,t))return t;do{if(hr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Su(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);oo(t,i)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&rp(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function rp(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function op(i,e,t,n){let s=i;do s.z===0&&(s.z=nh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ap(s)}function ap(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function nh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Su(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Fr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Su(i,e,t,n,s,r,o,a)}function cp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hp(i,e)&&(oo(i,e)&&oo(e,i)&&dp(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||hr(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function hr(i,e){return i.x===e.x&&i.y===e.y}function bu(i,e,t,n){let s=ua(qt(i,e,t)),r=ua(qt(i,e,n)),o=ua(qt(t,n,i)),a=ua(qt(t,n,e));return!!(s!==r&&o!==a||s===0&&da(i,t,e)||r===0&&da(i,n,e)||o===0&&da(t,i,n)||a===0&&da(t,e,n))}function da(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ua(i){return i>0?1:i<0?-1:0}function hp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function oo(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function dp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function wu(i,e){let t=ih(i.i,i.x,i.y),n=ih(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ad(i,e,t,n){let s=ih(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ih(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function up(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var sh=class{static triangulate(e,t,n=2){return $f(e,t,n)}},xs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Cd(e),Id(n,e);let o=e.length;t.forEach(Cd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Id(n,t[l]);let a=sh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Cd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Id(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var dr=class i extends In{constructor(e=new Ss([new Pe(.5,.5),new Pe(-.5,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Pt(s,3)),this.setAttribute("uv",new Pt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:fp,b,v=!1,A,C,L,U;f&&(b=f.getSpacedPoints(d),v=!0,p=!1,A=f.computeFrenetFrames(d,!1),C=new F,L=new F,U=new F),p||(g=0,m=0,x=0,_=0);let S=a.extractPoints(c),M=S.shape,D=S.holes;if(!xs.isClockWise(M)){M=M.reverse();for(let ce=0,ie=D.length;ce<ie;ce++){let j=D[ce];xs.isClockWise(j)&&(D[ce]=j.reverse())}}function G(ce){let j=10000000000000001e-36,ee=ce[0];for(let we=1;we<=ce.length;we++){let fe=we%ce.length,Ae=ce[fe],st=Ae.x-ee.x,rt=Ae.y-ee.y,T=st*st+rt*rt,y=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(ee.x),Math.abs(ee.y)),z=j*y*y;if(T<=z){ce.splice(fe,1),we--;continue}ee=Ae}}G(M),D.forEach(G);let W=D.length,J=M;for(let ce=0;ce<W;ce++){let ie=D[ce];M=M.concat(ie)}function q(ce,ie,j){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(ie,j)}let ae=M.length;function Z(ce,ie,j){let ee,we,fe,Ae=ce.x-ie.x,st=ce.y-ie.y,rt=j.x-ce.x,T=j.y-ce.y,y=Ae*Ae+st*st,z=Ae*T-st*rt;if(Math.abs(z)>Number.EPSILON){let Y=Math.sqrt(y),he=Math.sqrt(rt*rt+T*T),X=ie.x-st/Y,Ve=ie.y+Ae/Y,be=j.x-T/he,We=j.y+rt/he,He=((be-X)*T-(We-Ve)*rt)/(Ae*T-st*rt);ee=X+Ae*He-ce.x,we=Ve+st*He-ce.y;let me=ee*ee+we*we;if(me<=2)return new Pe(ee,we);fe=Math.sqrt(me/2)}else{let Y=!1;Ae>Number.EPSILON?rt>Number.EPSILON&&(Y=!0):Ae<-Number.EPSILON?rt<-Number.EPSILON&&(Y=!0):Math.sign(st)===Math.sign(T)&&(Y=!0),Y?(ee=-st,we=Ae,fe=Math.sqrt(y)):(ee=Ae,we=st,fe=Math.sqrt(y/2))}return new Pe(ee/fe,we/fe)}let Se=[];for(let ce=0,ie=J.length,j=ie-1,ee=ce+1;ce<ie;ce++,j++,ee++)j===ie&&(j=0),ee===ie&&(ee=0),Se[ce]=Z(J[ce],J[j],J[ee]);let De=[],Fe,at=Se.concat();for(let ce=0,ie=W;ce<ie;ce++){let j=D[ce];Fe=[];for(let ee=0,we=j.length,fe=we-1,Ae=ee+1;ee<we;ee++,fe++,Ae++)fe===we&&(fe=0),Ae===we&&(Ae=0),Fe[ee]=Z(j[ee],j[fe],j[Ae]);De.push(Fe),at=at.concat(Fe)}let ut;if(g===0)ut=xs.triangulateShape(J,D);else{let ce=[],ie=[];for(let j=0;j<g;j++){let ee=j/g,we=m*Math.cos(ee*Math.PI/2),fe=x*Math.sin(ee*Math.PI/2)+_;for(let Ae=0,st=J.length;Ae<st;Ae++){let rt=q(J[Ae],Se[Ae],fe);Je(rt.x,rt.y,-we),ee===0&&ce.push(rt)}for(let Ae=0,st=W;Ae<st;Ae++){let rt=D[Ae];Fe=De[Ae];let T=[];for(let y=0,z=rt.length;y<z;y++){let Y=q(rt[y],Fe[y],fe);Je(Y.x,Y.y,-we),ee===0&&T.push(Y)}ee===0&&ie.push(T)}}ut=xs.triangulateShape(ce,ie)}let ft=ut.length,it=x+_;for(let ce=0;ce<ae;ce++){let ie=p?q(M[ce],at[ce],it):M[ce];v?(L.copy(A.normals[0]).multiplyScalar(ie.x),C.copy(A.binormals[0]).multiplyScalar(ie.y),U.copy(b[0]).add(L).add(C),Je(U.x,U.y,U.z)):Je(ie.x,ie.y,0)}for(let ce=1;ce<=d;ce++)for(let ie=0;ie<ae;ie++){let j=p?q(M[ie],at[ie],it):M[ie];v?(L.copy(A.normals[ce]).multiplyScalar(j.x),C.copy(A.binormals[ce]).multiplyScalar(j.y),U.copy(b[ce]).add(L).add(C),Je(U.x,U.y,U.z)):Je(j.x,j.y,u/d*ce)}for(let ce=g-1;ce>=0;ce--){let ie=ce/g,j=m*Math.cos(ie*Math.PI/2),ee=x*Math.sin(ie*Math.PI/2)+_;for(let we=0,fe=J.length;we<fe;we++){let Ae=q(J[we],Se[we],ee);Je(Ae.x,Ae.y,u+j)}for(let we=0,fe=D.length;we<fe;we++){let Ae=D[we];Fe=De[we];for(let st=0,rt=Ae.length;st<rt;st++){let T=q(Ae[st],Fe[st],ee);v?Je(T.x,T.y+b[d-1].y,b[d-1].x+j):Je(T.x,T.y,u+j)}}}K(),le();function K(){let ce=s.length/3;if(p){let ie=0,j=ae*ie;for(let ee=0;ee<ft;ee++){let we=ut[ee];Be(we[2]+j,we[1]+j,we[0]+j)}ie=d+g*2,j=ae*ie;for(let ee=0;ee<ft;ee++){let we=ut[ee];Be(we[0]+j,we[1]+j,we[2]+j)}}else{for(let ie=0;ie<ft;ie++){let j=ut[ie];Be(j[2],j[1],j[0])}for(let ie=0;ie<ft;ie++){let j=ut[ie];Be(j[0]+ae*d,j[1]+ae*d,j[2]+ae*d)}}n.addGroup(ce,s.length/3-ce,0)}function le(){let ce=s.length/3,ie=0;Oe(J,ie),ie+=J.length;for(let j=0,ee=D.length;j<ee;j++){let we=D[j];Oe(we,ie),ie+=we.length}n.addGroup(ce,s.length/3-ce,1)}function Oe(ce,ie){let j=ce.length;for(;--j>=0;){let ee=j,we=j-1;we<0&&(we=ce.length-1);for(let fe=0,Ae=d+g*2;fe<Ae;fe++){let st=ae*fe,rt=ae*(fe+1),T=ie+ee+st,y=ie+we+st,z=ie+we+rt,Y=ie+ee+rt;gt(T,y,z,Y)}}}function Je(ce,ie,j){l.push(ce),l.push(ie),l.push(j)}function Be(ce,ie,j){Et(ce),Et(ie),Et(j);let ee=s.length/3,we=E.generateTopUV(n,s,ee-3,ee-2,ee-1);P(we[0]),P(we[1]),P(we[2])}function gt(ce,ie,j,ee){Et(ce),Et(ie),Et(ee),Et(ie),Et(j),Et(ee);let we=s.length/3,fe=E.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);P(fe[0]),P(fe[1]),P(fe[3]),P(fe[1]),P(fe[2]),P(fe[3])}function Et(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function P(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return pp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new th[s.type]().fromJSON(s)),new i(n,e.options)}},fp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new Pe(r,o),new Pe(a,l),new Pe(c,d)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],p=e[s*3],m=e[s*3+1],x=e[s*3+2],_=e[r*3],g=e[r*3+1],f=e[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new Pe(o,1-l),new Pe(c,1-u),new Pe(p,1-x),new Pe(_,1-f)]:[new Pe(a,1-l),new Pe(d,1-u),new Pe(m,1-x),new Pe(g,1-f)]}};function pp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var lo=class i extends Qr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ni=class i extends In{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,u=e/a,p=t/l,m=[],x=[],_=[],g=[];for(let f=0;f<d;f++){let E=f*p-o;for(let b=0;b<c;b++){let v=b*u-r;x.push(v,-E,0),_.push(0,0,1),g.push(b/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let b=E+c*f,v=E+c*(f+1),A=E+1+c*(f+1),C=E+1+c*f;m.push(b,v,C),m.push(v,A,C)}this.setIndex(m),this.setAttribute("position",new Pt(x,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},co=class i extends In{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],d=[],u=e,p=(t-e)/s,m=new F,x=new Pe;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let f=r+g/n*o;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,d.push(x.x,x.y)}u+=p}for(let _=0;_<s;_++){let g=_*(n+1);for(let f=0;f<n;f++){let E=f+g,b=E,v=E+n+1,A=E+n+2,C=E+1;a.push(b,v,C),a.push(v,A,C)}}this.setIndex(a),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var wn=class i extends In{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],u=new F,p=new F,m=[],x=[],_=[],g=[];for(let f=0;f<=n;f++){let E=[],b=f/n,v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){let C=A/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+b*a),x.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),g.push(C+v,1-b),E.push(c++)}d.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){let b=d[f][E+1],v=d[f][E],A=d[f+1][E],C=d[f+1][E+1];(f!==0||o>0)&&m.push(b,v,C),(f!==n-1||l<Math.PI)&&m.push(v,A,C)}this.setIndex(m),this.setAttribute("position",new Pt(x,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ho=class i extends Qr{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},es=class i extends In{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],d=new F,u=new F,p=new F;for(let m=0;m<=n;m++)for(let x=0;x<=s;x++){let _=x/s*r,g=m/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(u,d).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=s;x++){let _=(s+1)*m+x-1,g=(s+1)*(m-1)+x-1,f=(s+1)*(m-1)+x,E=(s+1)*m+x;o.push(_,g,E),o.push(g,f,E)}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var uo=class extends Ui{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Ke=class extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ws=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var La=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ua=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Es=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Na=class extends Es{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kc:r=e,a=2*t-n;break;case jc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:o=e,l=2*n-t;break;case jc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),_=x*x,g=_*x,f=-p*g+2*p*_-p*x,E=(1+p)*g+(-1.5-2*p)*_+(-.5+p)*x+1,b=(-1-m)*g+(1.5+m)*_+.5*x,v=m*g-m*_;for(let A=0;A!==a;++A)r[A]=f*o[d+A]+E*o[c+A]+b*o[l+A]+v*o[u+A];return r}},Fa=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(s-t),u=1-d;for(let p=0;p!==a;++p)r[p]=o[c+p]*u+o[l+p]*d;return r}},Oa=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Na(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case _a:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&mp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,p=u-n,m=u+n;for(let x=0;x!==n;++x){let _=t[u+x];if(_!==t[p+x]||_!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,p=o*n;for(let m=0;m!==n;++m)t[p+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=_a;var ts=class extends Gn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=kr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Ba.prototype.ValueTypeName="color";var ka=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};ka.prototype.ValueTypeName="number";var za=class extends Es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)Li.slerpFlat(r,0,o,c-a,o,c,l);return r}},fo=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Gn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=kr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Ha.prototype.ValueTypeName="vector";var Ga=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,p=c.length;u<p;u+=2){let m=c[u],x=c[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Eu=new Ga,Va=class{constructor(e){this.manager=e!==void 0?e:Eu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Va.DEFAULT_MATERIAL_NAME="__DEFAULT";var ur=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},po=class extends ur{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Jc=new $t,Rd=new F,Pd=new F,rh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rd),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),Jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ts=class extends Yr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oh=class extends rh{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new oh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},mo=class extends ur{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wa=class extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ch="\\[\\]\\.:\\/",gp=new RegExp("["+Ch+"]","g"),Ih="[^"+Ch+"]",xp="[^"+Ch.replace("\\.","")+"]",yp=/((?:WC+[\/:])*)/.source.replace("WC",Ih),_p=/(WCOD+)?/.source.replace("WCOD",xp),vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ih),Mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ih),Sp=new RegExp("^"+yp+_p+vp+Mp+"$"),bp=["material","materials","bones","map"],ah=class{constructor(e,t,n){let s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gp,"")}static parseTrackName(e){let t=Sp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=ah;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var __=new Float32Array(1);function Rh(i,e,t,n){let s=wp(n);switch(t){case yh:return i*e;case vh:return i*e/s.components*s.byteLength;case al:return i*e/s.components*s.byteLength;case Mh:return i*e*2/s.components*s.byteLength;case ll:return i*e*2/s.components*s.byteLength;case _h:return i*e*3/s.components*s.byteLength;case jn:return i*e*4/s.components*s.byteLength;case cl:return i*e*4/s.components*s.byteLength;case yo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:case fl:return Math.max(i,16)*Math.max(e,8)/4;case hl:case ul:return Math.max(i,8)*Math.max(e,8)/2;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Dl:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ul:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fl:case Ol:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wp(i){switch(i){case ci:case ph:return{byteLength:1,components:1};case pr:case mh:case mr:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case ss:case sl:case pi:return{byteLength:4,components:1};case gh:case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);function Ju(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ep(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<u.length;m++){let x=u[p],_=u[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++p,u[p]=_)}u.length=p+1;for(let m=0,x=u.length;m<x;m++){let _=u[m];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,wm=`struct PhysicalMaterial {
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
}`,Em=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Lg=`#define DISTANCE
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
}`,Ug=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define PHONG
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
}`,Zg=`#define PHONG
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
}`,Jg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,jg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,t0=`#include <common>
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
}`,n0=`uniform vec3 color;
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
}`,i0=`uniform float rotation;
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
}`,s0=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Cp,alphamap_pars_fragment:Ip,alphatest_fragment:Rp,alphatest_pars_fragment:Pp,aomap_fragment:Dp,aomap_pars_fragment:Lp,batching_pars_vertex:Up,batching_vertex:Np,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:kp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Kp,displacementmap_pars_vertex:jp,displacementmap_vertex:Qp,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:ym,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:dm,fog_pars_fragment:um,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:xm,lights_toon_fragment:_m,lights_toon_pars_fragment:vm,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:bm,lights_physical_pars_fragment:wm,lights_fragment_begin:Em,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Rm,logdepthbuf_vertex:Pm,map_fragment:Dm,map_pars_fragment:Lm,map_particle_fragment:Um,map_particle_pars_fragment:Nm,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:km,morphnormal_vertex:zm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Km,iridescence_pars_fragment:jm,opaque_fragment:Qm,packing:eg,premultiplied_alpha_fragment:tg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:hg,skinbase_vertex:dg,skinning_pars_vertex:ug,skinning_vertex:fg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:xg,tonemapping_pars_fragment:yg,transmission_fragment:_g,transmission_pars_fragment:vg,uv_pars_fragment:Mg,uv_pars_vertex:Sg,uv_vertex:bg,worldpos_vertex:wg,background_vert:Eg,background_frag:Tg,backgroundCube_vert:Ag,backgroundCube_frag:Cg,cube_vert:Ig,cube_frag:Rg,depth_vert:Pg,depth_frag:Dg,distanceRGBA_vert:Lg,distanceRGBA_frag:Ug,equirect_vert:Ng,equirect_frag:Fg,linedashed_vert:Og,linedashed_frag:Bg,meshbasic_vert:kg,meshbasic_frag:zg,meshlambert_vert:Hg,meshlambert_frag:Gg,meshmatcap_vert:Vg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:qg,meshphong_vert:Yg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:$g,meshtoon_vert:Kg,meshtoon_frag:jg,points_vert:Qg,points_frag:e0,shadow_vert:t0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},Ne={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},mi={basic:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new xt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:En([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:En([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new xt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:En([Ne.points,Ne.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:En([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:En([Ne.common,Ne.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:En([Ne.sprite,Ne.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:En([Ne.common,Ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:En([Ne.lights,Ne.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};mi.physical={uniforms:En([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var Bl={r:0,b:0,g:0},Rs=new ai,r0=new $t;function o0(i,e,t,n,s,r,o){let a=new xt(0),l=r===!0?0:1,c,d,u=null,p=0,m=null;function x(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1,A=x(b);A===null?f(a,l):A&&A.isColor&&(f(A,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,v){let A=x(v);A&&(A.isCubeTexture||A.mapping===go)?(d===void 0&&(d=new pe(new Vt(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Is(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Rs.copy(v.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(Rs)),d.material.toneMapped=At.getTransfer(A.colorSpace)!==Lt,(u!==A||p!==A.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=A,p=A.version,m=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new pe(new Ni(2,2),new li({name:"BackgroundMaterial",uniforms:Is(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=At.getTransfer(A.colorSpace)!==Lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||p!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,p=A.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,v){b.getRGB(Bl,Th(i)),n.buffers.color.setClear(Bl.r,Bl.g,Bl.b,v,o)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:_,addToRenderList:g,dispose:E}}function a0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(M,D,k,G,W){let J=!1,q=u(G,k,D);r!==q&&(r=q,c(r.object)),J=m(M,G,k,W),J&&x(M,G,k,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(M,D,k,G),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function u(M,D,k){let G=k.wireframe===!0,W=n[M.id];W===void 0&&(W={},n[M.id]=W);let J=W[D.id];J===void 0&&(J={},W[D.id]=J);let q=J[G];return q===void 0&&(q=p(l()),J[G]=q),q}function p(M){let D=[],k=[],G=[];for(let W=0;W<t;W++)D[W]=0,k[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:G,object:M,attributes:{},index:null}}function m(M,D,k,G){let W=r.attributes,J=D.attributes,q=0,ae=k.getAttributes();for(let Z in ae)if(ae[Z].location>=0){let De=W[Z],Fe=J[Z];if(Fe===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Fe=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Fe=M.instanceColor)),De===void 0||De.attribute!==Fe||Fe&&De.data!==Fe.data)return!0;q++}return r.attributesNum!==q||r.index!==G}function x(M,D,k,G){let W={},J=D.attributes,q=0,ae=k.getAttributes();for(let Z in ae)if(ae[Z].location>=0){let De=J[Z];De===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(De=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(De=M.instanceColor));let Fe={};Fe.attribute=De,De&&De.data&&(Fe.data=De.data),W[Z]=Fe,q++}r.attributes=W,r.attributesNum=q,r.index=G}function _(){let M=r.newAttributes;for(let D=0,k=M.length;D<k;D++)M[D]=0}function g(M){f(M,0)}function f(M,D){let k=r.newAttributes,G=r.enabledAttributes,W=r.attributeDivisors;k[M]=1,G[M]===0&&(i.enableVertexAttribArray(M),G[M]=1),W[M]!==D&&(i.vertexAttribDivisor(M,D),W[M]=D)}function E(){let M=r.newAttributes,D=r.enabledAttributes;for(let k=0,G=D.length;k<G;k++)D[k]!==M[k]&&(i.disableVertexAttribArray(k),D[k]=0)}function b(M,D,k,G,W,J,q){q===!0?i.vertexAttribIPointer(M,D,k,W,J):i.vertexAttribPointer(M,D,k,G,W,J)}function v(M,D,k,G){_();let W=G.attributes,J=k.getAttributes(),q=D.defaultAttributeValues;for(let ae in J){let Z=J[ae];if(Z.location>=0){let Se=W[ae];if(Se===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),Se!==void 0){let De=Se.normalized,Fe=Se.itemSize,at=e.get(Se);if(at===void 0)continue;let ut=at.buffer,ft=at.type,it=at.bytesPerElement,K=ft===i.INT||ft===i.UNSIGNED_INT||Se.gpuType===sl;if(Se.isInterleavedBufferAttribute){let le=Se.data,Oe=le.stride,Je=Se.offset;if(le.isInstancedInterleavedBuffer){for(let Be=0;Be<Z.locationSize;Be++)f(Z.location+Be,le.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<Z.locationSize;Be++)g(Z.location+Be);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let Be=0;Be<Z.locationSize;Be++)b(Z.location+Be,Fe/Z.locationSize,ft,De,Oe*it,(Je+Fe/Z.locationSize*Be)*it,K)}else{if(Se.isInstancedBufferAttribute){for(let le=0;le<Z.locationSize;le++)f(Z.location+le,Se.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let le=0;le<Z.locationSize;le++)g(Z.location+le);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let le=0;le<Z.locationSize;le++)b(Z.location+le,Fe/Z.locationSize,ft,De,Fe*it,Fe/Z.locationSize*le*it,K)}}else if(q!==void 0){let De=q[ae];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv(Z.location,De);break;case 3:i.vertexAttrib3fv(Z.location,De);break;case 4:i.vertexAttrib4fv(Z.location,De);break;default:i.vertexAttrib1fv(Z.location,De)}}}}E()}function A(){U();for(let M in n){let D=n[M];for(let k in D){let G=D[k];for(let W in G)d(G[W].object),delete G[W];delete D[k]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let D=n[M.id];for(let k in D){let G=D[k];for(let W in G)d(G[W].object),delete G[W];delete D[k]}delete n[M.id]}function L(M){for(let D in n){let k=n[D];if(k[M.id]===void 0)continue;let G=k[M.id];for(let W in G)d(G[W].object),delete G[W];delete k[M.id]}}function U(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function l0(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=d[x];t.update(m,n,1)}function l(c,d,u,p){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],d[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,u);let x=0;for(let _=0;_<u;_++)x+=d[_]*p[_];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function c0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==jn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let U=L===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ci&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==pi&&!U)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function h0(i){let e=this,t=null,n=0,s=!1,r=!1,o=new di,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=d(u,p,0)},this.setState=function(u,p,m){let x=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?d(null):c();else{let E=r?0:n,b=E*4,v=f.clippingState||null;l.value=v,v=d(x,p,b,m);for(let A=0;A!==b;++A)v[A]=t[A];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,p,m,x){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,x!==!0||g===null){let f=m+_*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,v=m;b!==_;++b,v+=4)o.copy(u[b]).applyMatrix4(E,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function d0(i){let e=new WeakMap;function t(o,a){return a===tl?o.mapping=As:a===nl&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===tl||a===nl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ta(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var vr=4,Tu=[.125,.215,.35,.446,.526,.582],Ls=20,Ph=new Ts,Au=new xt,Dh=null,Lh=0,Uh=0,Nh=!1,Ds=(1+Math.sqrt(5))/2,_r=1/Ds,Cu=[new F(-Ds,_r,0),new F(Ds,_r,0),new F(-_r,0,Ds),new F(_r,0,Ds),new F(0,Ds,-_r),new F(0,Ds,_r),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],u0=new F,Hl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=u0}=r;Dh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dh,Lh,Uh),this._renderer.xr.enabled=Nh,e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:mr,format:jn,colorSpace:vs,depthBuffer:!1},s=Iu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(r)),this._blurMaterial=p0(r,e,t)}return s}_compileMaterial(e){let t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,Ph)}_sceneToCubeUV(e,t,n,s,r){let l=new Ln(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(Au),u.toneMapping=Oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new bn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new pe(new Vt,_),f=!1,E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,f=!0):(_.color.copy(Au),f=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));let A=this._cubeSize;kl(s,v*A,b>2?A:0,A,A),u.setRenderTarget(s),f&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=p,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===As||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;kl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ph)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cu[(s-r-1)%Cu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new pe(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ls-1),_=r/x,g=isFinite(r)?1+Math.floor(d*_):Ls;g>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ls}`);let f=[],E=0;for(let L=0;L<Ls;++L){let U=L/_,S=Math.exp(-U*U/2);f.push(S),L===0?E+=S:L<g&&(E+=2*S)}for(let L=0;L<f.length;L++)f[L]=f[L]/E;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:b}=this;p.dTheta.value=x,p.mipInt.value=b-n;let v=this._sizeLods[s],A=3*v*(s>b-vr?s-b+vr:0),C=4*(this._cubeSize-v);kl(t,A,C,3*v,2*v),l.setRenderTarget(t),l.render(u,Ph)}};function f0(i){let e=[],t=[],n=[],s=i,r=i-vr+1+Tu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-vr?l=Tu[o-i+vr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),d=-c,u=1+c,p=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,x=6,_=3,g=2,f=1,E=new Float32Array(_*x*m),b=new Float32Array(g*x*m),v=new Float32Array(f*x*m);for(let C=0;C<m;C++){let L=C%3*2/3-1,U=C>2?0:-1,S=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];E.set(S,_*x*C),b.set(p,g*x*C);let M=[C,C,C,C,C,C];v.set(M,f*x*C)}let A=new In;A.setAttribute("position",new zn(E,_)),A.setAttribute("uv",new zn(b,g)),A.setAttribute("faceIndex",new zn(v,f)),e.push(A),s>vr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Iu(i,e,t){let n=new ui(i,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function p0(i,e,t){let n=new Float32Array(Ls),s=new F(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ru(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Pu(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Xh(){return`

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
	`}function m0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===tl||l===nl,d=l===As||l===Cs;if(c||d){let u=e.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Hl(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return c&&m&&m.height>0||d&&m&&s(m)?(t===null&&(t=new Hl(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function g0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function x0(i,e,t,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let m in p)e.update(p[m],i.ARRAY_BUFFER)}function c(u){let p=[],m=u.index,x=u.attributes.position,_=0;if(m!==null){let E=m.array;_=m.version;for(let b=0,v=E.length;b<v;b+=3){let A=E[b+0],C=E[b+1],L=E[b+2];p.push(A,C,C,L,L,A)}}else if(x!==void 0){let E=x.array;_=x.version;for(let b=0,v=E.length/3-1;b<v;b+=3){let A=b+0,C=b+1,L=b+2;p.push(A,C,C,L,L,A)}}else return;let g=new(Eh(p)?qr:Xr)(p,1);g.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,g)}function d(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function y0(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function c(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*o,x),t.update(m,n,x))}function d(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let g=0;for(let f=0;f<x;f++)g+=m[f];t.update(g,n,1)}function u(p,m,x,_){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<p.length;f++)c(p[f]/o,m[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,_,0,x);let f=0;for(let E=0;E<x;E++)f+=m[E]*_[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function _0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function v0(i,e,t){let n=new WeakMap,s=new Yt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,p=n.get(a);if(p===void 0||p.count!==u){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;m===!0&&(b=1),x===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*A*4*u),L=new Vr(C,v,A,u);L.type=pi,L.needsUpdate=!0;let U=b*4;for(let M=0;M<u;M++){let D=g[M],k=f[M],G=E[M],W=v*A*4*M;for(let J=0;J<D.count;J++){let q=J*U;m===!0&&(s.fromBufferAttribute(D,J),C[W+q+0]=s.x,C[W+q+1]=s.y,C[W+q+2]=s.z,C[W+q+3]=0),x===!0&&(s.fromBufferAttribute(k,J),C[W+q+4]=s.x,C[W+q+5]=s.y,C[W+q+6]=s.z,C[W+q+7]=0),_===!0&&(s.fromBufferAttribute(G,J),C[W+q+8]=s.x,C[W+q+9]=s.y,C[W+q+10]=s.z,C[W+q+11]=G.itemSize===4?s.w:1)}}p={count:u,texture:L,size:new Pe(v,A)},n.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function M0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var $u=new Un,Du=new $r(1,1),Ku=new Vr,ju=new ba,Qu=new Zr,Lu=[],Uu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),Ou=new Float32Array(4);function Sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Lu[s];if(r===void 0&&(r=new Float32Array(s),Lu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vl(i,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function S0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function w0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function T0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Ou.set(n),i.uniformMatrix2fv(this.addr,!1,Ou),an(t,n)}}function A0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),an(t,n)}}function C0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),an(t,n)}}function I0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function L0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function U0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function N0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function F0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function O0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Du.compareFunction=bh,r=Du):r=$u,t.setTexture2D(e||r,s)}function B0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ju,s)}function k0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qu,s)}function z0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ku,s)}function H0(i){switch(i){case 5126:return S0;case 35664:return b0;case 35665:return w0;case 35666:return E0;case 35674:return T0;case 35675:return A0;case 35676:return C0;case 5124:case 35670:return I0;case 35667:case 35671:return R0;case 35668:case 35672:return P0;case 35669:case 35673:return D0;case 5125:return L0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return z0}}function G0(i,e){i.uniform1fv(this.addr,e)}function V0(i,e){let t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function W0(i,e){let t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function X0(i,e){let t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function q0(i,e){let t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Y0(i,e){let t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Z0(i,e){let t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function J0(i,e){i.uniform1iv(this.addr,e)}function $0(i,e){i.uniform2iv(this.addr,e)}function K0(i,e){i.uniform3iv(this.addr,e)}function j0(i,e){i.uniform4iv(this.addr,e)}function Q0(i,e){i.uniform1uiv(this.addr,e)}function ex(i,e){i.uniform2uiv(this.addr,e)}function tx(i,e){i.uniform3uiv(this.addr,e)}function nx(i,e){i.uniform4uiv(this.addr,e)}function ix(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$u,r[o])}function sx(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ju,r[o])}function rx(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qu,r[o])}function ox(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ku,r[o])}function ax(i){switch(i){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return $0;case 35668:case 35672:return K0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}var Oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H0(t.type)}},Bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ax(t.type)}},kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function Bu(i,e){i.seq.push(e),i.map[e.id]=e}function lx(i,e,t){let n=i.name,s=n.length;for(Fh.lastIndex=0;;){let r=Fh.exec(n),o=Fh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bu(t,c===void 0?new Oh(a,i,e):new Bh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new kh(a),Bu(t,u)),t=u}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);lx(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ku(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var cx=37297,hx=0;function dx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var zu=new yt;function ux(i){At._getMatrix(zu,At.workingColorSpace,i);let e=`mat3( ${zu.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case zr:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+dx(i.getShaderSource(e),a)}else return r}function fx(i,e){let t=ux(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function px(i,e){let t;switch(e){case eu:t="Linear";break;case tu:t="Reinhard";break;case nu:t="Cineon";break;case el:t="ACESFilmic";break;case su:t="AgX";break;case ru:t="Neutral";break;case iu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zl=new F;function mx(){At.getLuminanceCoefficients(zl);let i=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function xx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function So(i){return i!==""}function Gu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(i){return i.replace(_x,Mx)}var vx=new Map;function Mx(i,e){let t=_t[e];if(t===void 0){let n=vx.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zh(t)}var Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(i){return i.replace(Sx,bx)}function bx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function wx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ex(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Cs:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ax(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uh:e="ENVMAP_BLENDING_MULTIPLY";break;case jd:e="ENVMAP_BLENDING_MIX";break;case Qd:e="ENVMAP_BLENDING_ADD";break}return e}function Cx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ix(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=wx(t),c=Ex(t),d=Tx(t),u=Ax(t),p=Cx(t),m=gx(t),x=xx(r),_=s.createProgram(),g,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(So).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(So).join(`
`),f.length>0&&(f+=`
`)):(g=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),f=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Oi?px("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,fx("linearToOutputTexel",t.outputColorSpace),mx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),o=zh(o),o=Gu(o,t),o=Vu(o,t),a=zh(a),a=Gu(a,t),a=Vu(a,t),o=Wu(o),a=Wu(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=E+g+o,v=E+f+a,A=ku(s,s.VERTEX_SHADER,b),C=ku(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(D){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(C)||"",J=k.trim(),q=G.trim(),ae=W.trim(),Z=!0,Se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,C);else{let De=Hu(s,A,"vertex"),Fe=Hu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+J+`
`+De+`
`+Fe)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(q===""||ae==="")&&(Se=!1);Se&&(D.diagnostics={runnable:Z,programLog:J,vertexShader:{log:q,prefix:g},fragmentShader:{log:ae,prefix:f}})}s.deleteShader(A),s.deleteShader(C),U=new Mr(s,_),S=yx(s,_)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,cx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}var Rx=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gh(e),t.set(e,n)),n}},Gh=class{constructor(e){this.id=Rx++,this.code=e,this.usedTimes=0}};function Px(i,e,t,n,s,r,o){let a=new Wr,l=new Hh,c=new Set,d=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,D,k,G){let W=k.fog,J=G.geometry,q=S.isMeshStandardMaterial?k.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),Z=ae&&ae.mapping===go?ae.image.height:null,Se=x[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let De=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Fe=De!==void 0?De.length:0,at=0;J.morphAttributes.position!==void 0&&(at=1),J.morphAttributes.normal!==void 0&&(at=2),J.morphAttributes.color!==void 0&&(at=3);let ut,ft,it,K;if(Se){let lt=mi[Se];ut=lt.vertexShader,ft=lt.fragmentShader}else ut=S.vertexShader,ft=S.fragmentShader,l.update(S),it=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);let le=i.getRenderTarget(),Oe=i.state.buffers.depth.getReversed(),Je=G.isInstancedMesh===!0,Be=G.isBatchedMesh===!0,gt=!!S.map,Et=!!S.matcap,P=!!ae,ce=!!S.aoMap,ie=!!S.lightMap,j=!!S.bumpMap,ee=!!S.normalMap,we=!!S.displacementMap,fe=!!S.emissiveMap,Ae=!!S.metalnessMap,st=!!S.roughnessMap,rt=S.anisotropy>0,T=S.clearcoat>0,y=S.dispersion>0,z=S.iridescence>0,Y=S.sheen>0,he=S.transmission>0,X=rt&&!!S.anisotropyMap,Ve=T&&!!S.clearcoatMap,be=T&&!!S.clearcoatNormalMap,We=T&&!!S.clearcoatRoughnessMap,He=z&&!!S.iridescenceMap,me=z&&!!S.iridescenceThicknessMap,Le=Y&&!!S.sheenColorMap,$e=Y&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Re=!!S.specularColorMap,ht=!!S.specularIntensityMap,N=he&&!!S.transmissionMap,ye=he&&!!S.thicknessMap,Ee=!!S.gradientMap,ke=!!S.alphaMap,ge=S.alphaTest>0,R=!!S.alphaHash,ne=!!S.extensions,te=Oi;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(te=i.toneMapping);let Ze={shaderID:Se,shaderType:S.type,shaderName:S.name,vertexShader:ut,fragmentShader:ft,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Be,batchingColor:Be&&G._colorsTexture!==null,instancing:Je,instancingColor:Je&&G.instanceColor!==null,instancingMorph:Je&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:vs,alphaToCoverage:!!S.alphaToCoverage,map:gt,matcap:Et,envMap:P,envMapMode:P&&ae.mapping,envMapCubeUVHeight:Z,aoMap:ce,lightMap:ie,bumpMap:j,normalMap:ee,displacementMap:p&&we,emissiveMap:fe,normalMapObjectSpace:ee&&S.normalMapType===cu,normalMapTangentSpace:ee&&S.normalMapType===Sh,metalnessMap:Ae,roughnessMap:st,anisotropy:rt,anisotropyMap:X,clearcoat:T,clearcoatMap:Ve,clearcoatNormalMap:be,clearcoatRoughnessMap:We,dispersion:y,iridescence:z,iridescenceMap:He,iridescenceThicknessMap:me,sheen:Y,sheenColorMap:Le,sheenRoughnessMap:$e,specularMap:Ye,specularColorMap:Re,specularIntensityMap:ht,transmission:he,transmissionMap:N,thicknessMap:ye,gradientMap:Ee,opaque:S.transparent===!1&&S.blending===ys&&S.alphaToCoverage===!1,alphaMap:ke,alphaTest:ge,alphaHash:R,combine:S.combine,mapUv:gt&&_(S.map.channel),aoMapUv:ce&&_(S.aoMap.channel),lightMapUv:ie&&_(S.lightMap.channel),bumpMapUv:j&&_(S.bumpMap.channel),normalMapUv:ee&&_(S.normalMap.channel),displacementMapUv:we&&_(S.displacementMap.channel),emissiveMapUv:fe&&_(S.emissiveMap.channel),metalnessMapUv:Ae&&_(S.metalnessMap.channel),roughnessMapUv:st&&_(S.roughnessMap.channel),anisotropyMapUv:X&&_(S.anisotropyMap.channel),clearcoatMapUv:Ve&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:$e&&_(S.sheenRoughnessMap.channel),specularMapUv:Ye&&_(S.specularMap.channel),specularColorMapUv:Re&&_(S.specularColorMap.channel),specularIntensityMapUv:ht&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:ye&&_(S.thicknessMap.channel),alphaMapUv:ke&&_(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ee||rt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(gt||ke),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Oe,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:at,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:gt&&S.map.isVideoTexture===!0&&At.getTransfer(S.map.colorSpace)===Lt,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&At.getTransfer(S.emissiveMap.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nn,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&S.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function f(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let M=x[S.type],D;if(M){let k=mi[M];D=vu.clone(k.uniforms)}else D=S.uniforms;return D}function A(S,M){let D;for(let k=0,G=d.length;k<G;k++){let W=d[k];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Ix(i,M,S,r),d.push(D)),D}function C(S){if(--S.usedTimes===0){let M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function L(S){l.remove(S)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:L,programs:d,dispose:U}}function Dx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Lx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,m,x,_,g){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:x,renderOrder:u.renderOrder,z:_,group:g},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=_,f.group=g),e++,f}function a(u,p,m,x,_,g){let f=o(u,p,m,x,_,g);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,p,m,x,_,g){let f=o(u,p,m,x,_,g);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||Lx),n.length>1&&n.sort(p||qu),s.length>1&&s.sort(p||qu)}function d(){for(let u=e,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function Ux(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Yu,i.set(n,[o])):s>=r.length?(o=new Yu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Nx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new xt};break;case"SpotLight":t={position:new F,direction:new F,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Fx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ox=0;function Bx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kx(i){let e=new Nx,t=Fx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new $t,o=new $t;function a(c){let d=0,u=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,x=0,_=0,g=0,f=0,E=0,b=0,v=0,A=0,C=0,L=0;c.sort(Bx);for(let S=0,M=c.length;S<M;S++){let D=c[S],k=D.color,G=D.intensity,W=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=k.r*G,u+=k.g*G,p+=k.b*G;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],G);L++}else if(D.isDirectionalLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ae=D.shadow,Z=t.get(D);Z.shadowIntensity=ae.intensity,Z.shadowBias=ae.bias,Z.shadowNormalBias=ae.normalBias,Z.shadowRadius=ae.radius,Z.shadowMapSize=ae.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=D.shadow.matrix,E++}n.directional[m]=q,m++}else if(D.isSpotLight){let q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(k).multiplyScalar(G),q.distance=W,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[_]=q;let ae=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,ae.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[_]=ae.matrix,D.castShadow){let Z=t.get(D);Z.shadowIntensity=ae.intensity,Z.shadowBias=ae.bias,Z.shadowNormalBias=ae.normalBias,Z.shadowRadius=ae.radius,Z.shadowMapSize=ae.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=J,v++}_++}else if(D.isRectAreaLight){let q=e.get(D);q.color.copy(k).multiplyScalar(G),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=q,g++}else if(D.isPointLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let ae=D.shadow,Z=t.get(D);Z.shadowIntensity=ae.intensity,Z.shadowBias=ae.bias,Z.shadowNormalBias=ae.normalBias,Z.shadowRadius=ae.radius,Z.shadowMapSize=ae.mapSize,Z.shadowCameraNear=ae.camera.near,Z.shadowCameraFar=ae.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=J,n.pointShadowMatrix[x]=D.shadow.matrix,b++}n.point[x]=q,x++}else if(D.isHemisphereLight){let q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(G),q.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[f]=q,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=p;let U=n.hash;(U.directionalLength!==m||U.pointLength!==x||U.spotLength!==_||U.rectAreaLength!==g||U.hemiLength!==f||U.numDirectionalShadows!==E||U.numPointShadows!==b||U.numSpotShadows!==v||U.numSpotMaps!==A||U.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=g,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,U.directionalLength=m,U.pointLength=x,U.spotLength=_,U.rectAreaLength=g,U.hemiLength=f,U.numDirectionalShadows=E,U.numPointShadows=b,U.numSpotShadows=v,U.numSpotMaps=A,U.numLightProbes=L,n.version=Ox++)}function l(c,d){let u=0,p=0,m=0,x=0,_=0,g=d.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let b=c[f];if(b.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),p++}else if(b.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Zu(i){let e=new kx(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Zu(i),e.set(s,[a])):r>=o.length?(a=new Zu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
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
}`;function Vx(i,e,t){let n=new ar,s=new Pe,r=new Pe,o=new Yt,a=new La({depthPacking:lu}),l=new Ua,c={},d=t.maxTextureSize,u={[Pi]:pn,[pn]:Pi,[Nn]:Nn},p=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Hx,fragmentShader:Gx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let x=new In;x.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pe(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let f=this.type;this.render=function(C,L,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Fi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let G=f!==fi&&this.type===fi,W=f===fi&&this.type!==fi;for(let J=0,q=C.length;J<q;J++){let ae=C[J],Z=ae.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Se=Z.getFrameExtents();if(s.multiply(Se),r.copy(Z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Se.x),s.x=r.x*Se.x,Z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Se.y),s.y=r.y*Se.y,Z.mapSize.y=r.y)),Z.map===null||G===!0||W===!0){let Fe=this.type!==fi?{minFilter:$n,magFilter:$n}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ui(s.x,s.y,Fe),Z.map.texture.name=ae.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let De=Z.getViewportCount();for(let Fe=0;Fe<De;Fe++){let at=Z.getViewport(Fe);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),k.viewport(o),Z.updateMatrices(ae,Fe),n=Z.getFrustum(),v(L,U,Z.camera,ae,this.type)}Z.isPointLightShadow!==!0&&this.type===fi&&E(Z,U),Z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(S,M,D)};function E(C,L){let U=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ui(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,U,p,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,U,m,_,null)}function b(C,L,U,S){let M=null,D=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=M.uuid,G=L.uuid,W=c[k];W===void 0&&(W={},c[k]=W);let J=W[G];J===void 0&&(J=M.clone(),W[G]=J,L.addEventListener("dispose",A)),M=J}if(M.visible=L.visible,M.wireframe=L.wireframe,S===fi?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:u[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=U}return M}function v(C,L,U,S,M){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===fi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let G=e.update(C),W=C.material;if(Array.isArray(W)){let J=G.groups;for(let q=0,ae=J.length;q<ae;q++){let Z=J[q],Se=W[Z.materialIndex];if(Se&&Se.visible){let De=b(C,Se,S,M);C.onBeforeShadow(i,C,L,U,G,De,Z),i.renderBufferDirect(U,null,G,De,C,Z),C.onAfterShadow(i,C,L,U,G,De,Z)}}}else if(W.visible){let J=b(C,W,S,M);C.onBeforeShadow(i,C,L,U,G,J,null),i.renderBufferDirect(U,null,G,J,C,null),C.onAfterShadow(i,C,L,U,G,J,null)}}let k=C.children;for(let G=0,W=k.length;G<W;G++)v(k[G],L,U,S,M)}function A(C){C.target.removeEventListener("dispose",A);for(let U in c){let S=c[U],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Wx={[Ya]:Za,[Ja]:ja,[$a]:Qa,[_s]:Ka,[Za]:Ya,[ja]:Ja,[Qa]:$a,[Ka]:_s};function Xx(i,e){function t(){let N=!1,ye=new Yt,Ee=null,ke=new Yt(0,0,0,0);return{setMask:function(ge){Ee!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),Ee=ge)},setLocked:function(ge){N=ge},setClear:function(ge,R,ne,te,Ze){Ze===!0&&(ge*=te,R*=te,ne*=te),ye.set(ge,R,ne,te),ke.equals(ye)===!1&&(i.clearColor(ge,R,ne,te),ke.copy(ye))},reset:function(){N=!1,Ee=null,ke.set(-1,0,0,0)}}}function n(){let N=!1,ye=!1,Ee=null,ke=null,ge=null;return{setReversed:function(R){if(ye!==R){let ne=e.get("EXT_clip_control");R?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),ye=R;let te=ge;ge=null,this.setClear(te)}},getReversed:function(){return ye},setTest:function(R){R?le(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(R){Ee!==R&&!N&&(i.depthMask(R),Ee=R)},setFunc:function(R){if(ye&&(R=Wx[R]),ke!==R){switch(R){case Ya:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=R}},setLocked:function(R){N=R},setClear:function(R){ge!==R&&(ye&&(R=1-R),i.clearDepth(R),ge=R)},reset:function(){N=!1,Ee=null,ke=null,ge=null,ye=!1}}}function s(){let N=!1,ye=null,Ee=null,ke=null,ge=null,R=null,ne=null,te=null,Ze=null;return{setTest:function(lt){N||(lt?le(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(lt){ye!==lt&&!N&&(i.stencilMask(lt),ye=lt)},setFunc:function(lt,bt,ot){(Ee!==lt||ke!==bt||ge!==ot)&&(i.stencilFunc(lt,bt,ot),Ee=lt,ke=bt,ge=ot)},setOp:function(lt,bt,ot){(R!==lt||ne!==bt||te!==ot)&&(i.stencilOp(lt,bt,ot),R=lt,ne=bt,te=ot)},setLocked:function(lt){N=lt},setClear:function(lt){Ze!==lt&&(i.clearStencil(lt),Ze=lt)},reset:function(){N=!1,ye=null,Ee=null,ke=null,ge=null,R=null,ne=null,te=null,Ze=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,d={},u={},p=new WeakMap,m=[],x=null,_=!1,g=null,f=null,E=null,b=null,v=null,A=null,C=null,L=new xt(0,0,0),U=0,S=!1,M=null,D=null,k=null,G=null,W=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ae=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=ae>=1):Z.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=ae>=2);let Se=null,De={},Fe=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),ut=new Yt().fromArray(Fe),ft=new Yt().fromArray(at);function it(N,ye,Ee,ke){let ge=new Uint8Array(4),R=i.createTexture();i.bindTexture(N,R),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<Ee;ne++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ye+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return R}let K={};K[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(_s),j(!1),ee(lh),le(i.CULL_FACE),ce(Fi);function le(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function Oe(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Je(N,ye){return u[N]!==ye?(i.bindFramebuffer(N,ye),u[N]=ye,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ye),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Be(N,ye){let Ee=m,ke=!1;if(N){Ee=p.get(ye),Ee===void 0&&(Ee=[],p.set(ye,Ee));let ge=N.textures;if(Ee.length!==ge.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let R=0,ne=ge.length;R<ne;R++)Ee[R]=i.COLOR_ATTACHMENT0+R;Ee.length=ge.length,ke=!0}}else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,ke=!0);ke&&i.drawBuffers(Ee)}function gt(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let Et={[ji]:i.FUNC_ADD,[Nd]:i.FUNC_SUBTRACT,[Fd]:i.FUNC_REVERSE_SUBTRACT};Et[Od]=i.MIN,Et[Bd]=i.MAX;let P={[kd]:i.ZERO,[zd]:i.ONE,[Hd]:i.SRC_COLOR,[ma]:i.SRC_ALPHA,[Yd]:i.SRC_ALPHA_SATURATE,[Xd]:i.DST_COLOR,[Vd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[qd]:i.ONE_MINUS_DST_COLOR,[Wd]:i.ONE_MINUS_DST_ALPHA,[Zd]:i.CONSTANT_COLOR,[Jd]:i.ONE_MINUS_CONSTANT_COLOR,[$d]:i.CONSTANT_ALPHA,[Kd]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(N,ye,Ee,ke,ge,R,ne,te,Ze,lt){if(N===Fi){_===!0&&(Oe(i.BLEND),_=!1);return}if(_===!1&&(le(i.BLEND),_=!0),N!==Ud){if(N!==g||lt!==S){if((f!==ji||v!==ji)&&(i.blendEquation(i.FUNC_ADD),f=ji,v=ji),lt)switch(N){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.ONE,i.ONE);break;case hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,b=null,A=null,C=null,L.set(0,0,0),U=0,g=N,S=lt}return}ge=ge||ye,R=R||Ee,ne=ne||ke,(ye!==f||ge!==v)&&(i.blendEquationSeparate(Et[ye],Et[ge]),f=ye,v=ge),(Ee!==E||ke!==b||R!==A||ne!==C)&&(i.blendFuncSeparate(P[Ee],P[ke],P[R],P[ne]),E=Ee,b=ke,A=R,C=ne),(te.equals(L)===!1||Ze!==U)&&(i.blendColor(te.r,te.g,te.b,Ze),L.copy(te),U=Ze),g=N,S=!1}function ie(N,ye){N.side===Nn?Oe(i.CULL_FACE):le(i.CULL_FACE);let Ee=N.side===pn;ye&&(Ee=!Ee),j(Ee),N.blending===ys&&N.transparent===!1?ce(Fi):ce(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ke=N.stencilWrite;a.setTest(ke),ke&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function ee(N){N!==Dd?(le(i.CULL_FACE),N!==D&&(N===lh?i.cullFace(i.BACK):N===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),D=N}function we(N){N!==k&&(q&&i.lineWidth(N),k=N)}function fe(N,ye,Ee){N?(le(i.POLYGON_OFFSET_FILL),(G!==ye||W!==Ee)&&(i.polygonOffset(ye,Ee),G=ye,W=Ee)):Oe(i.POLYGON_OFFSET_FILL)}function Ae(N){N?le(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function st(N){N===void 0&&(N=i.TEXTURE0+J-1),Se!==N&&(i.activeTexture(N),Se=N)}function rt(N,ye,Ee){Ee===void 0&&(Se===null?Ee=i.TEXTURE0+J-1:Ee=Se);let ke=De[Ee];ke===void 0&&(ke={type:void 0,texture:void 0},De[Ee]=ke),(ke.type!==N||ke.texture!==ye)&&(Se!==Ee&&(i.activeTexture(Ee),Se=Ee),i.bindTexture(N,ye||K[N]),ke.type=N,ke.texture=ye)}function T(){let N=De[Se];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(N){ut.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ut.copy(N))}function $e(N){ft.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ft.copy(N))}function Ye(N,ye){let Ee=c.get(ye);Ee===void 0&&(Ee=new WeakMap,c.set(ye,Ee));let ke=Ee.get(N);ke===void 0&&(ke=i.getUniformBlockIndex(ye,N.name),Ee.set(N,ke))}function Re(N,ye){let ke=c.get(ye).get(N);l.get(ye)!==ke&&(i.uniformBlockBinding(ye,ke,N.__bindingPointIndex),l.set(ye,ke))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Se=null,De={},u={},p=new WeakMap,m=[],x=null,_=!1,g=null,f=null,E=null,b=null,v=null,A=null,C=null,L=new xt(0,0,0),U=0,S=!1,M=null,D=null,k=null,G=null,W=null,ut.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Oe,bindFramebuffer:Je,drawBuffers:Be,useProgram:gt,setBlending:ce,setMaterial:ie,setFlipSided:j,setCullFace:ee,setLineWidth:we,setPolygonOffset:fe,setScissorTest:Ae,activeTexture:st,bindTexture:rt,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:He,texImage3D:me,updateUBOMapping:Ye,uniformBlockBinding:Re,texStorage2D:be,texStorage3D:We,texSubImage2D:Y,texSubImage3D:he,compressedTexSubImage2D:X,compressedTexSubImage3D:Ve,scissor:Le,viewport:$e,reset:ht}}function qx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,d=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function x(T,y){return m?new OffscreenCanvas(T,y):Gr("canvas")}function _(T,y,z){let Y=1,he=rt(T);if((he.width>z||he.height>z)&&(Y=z/Math.max(he.width,he.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let X=Math.floor(Y*he.width),Ve=Math.floor(Y*he.height);u===void 0&&(u=x(X,Ve));let be=y?x(X,Ve):u;return be.width=X,be.height=Ve,be.getContext("2d").drawImage(T,0,0,X,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+X+"x"+Ve+")."),be}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),T;return T}function g(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,y,z,Y,he=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=y;if(y===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),y===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),y===i.RGBA){let Ve=he?zr:At.getTransfer(Y);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=Ve===Lt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(T,y){let z;return T?y===null||y===ss||y===gr?z=i.DEPTH24_STENCIL8:y===pi?z=i.DEPTH32F_STENCIL8:y===pr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ss||y===gr?z=i.DEPTH_COMPONENT24:y===pi?z=i.DEPTH_COMPONENT32F:y===pr&&(z=i.DEPTH_COMPONENT16),z}function A(T,y){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==$n&&T.minFilter!==oi?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function C(T){let y=T.target;y.removeEventListener("dispose",C),U(y),y.isVideoTexture&&d.delete(y)}function L(T){let y=T.target;y.removeEventListener("dispose",L),M(y)}function U(T){let y=n.get(T);if(y.__webglInit===void 0)return;let z=T.source,Y=p.get(z);if(Y){let he=Y[y.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(T),Object.keys(Y).length===0&&p.delete(z)}n.remove(T)}function S(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let z=T.source,Y=p.get(z);delete Y[y.__cacheKey],o.memory.textures--}function M(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let he=0;he<y.__webglFramebuffer[Y].length;he++)i.deleteFramebuffer(y.__webglFramebuffer[Y][he]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=T.textures;for(let Y=0,he=z.length;Y<he;Y++){let X=n.get(z[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(T)}let D=0;function k(){D=0}function G(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function W(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function J(T,y){let z=n.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,T,y);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function q(T,y){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){K(z,T,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function ae(T,y){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){K(z,T,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function Z(T,y){let z=n.get(T);if(T.version>0&&z.__version!==T.version){le(z,T,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let Se={[xa]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},De={[$n]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[oi]:i.LINEAR,[il]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},Fe={[hu]:i.NEVER,[gu]:i.ALWAYS,[du]:i.LESS,[bh]:i.LEQUAL,[uu]:i.EQUAL,[mu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function at(T,y){if(y.type===pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===oi||y.magFilter===il||y.magFilter===xo||y.magFilter===is||y.minFilter===oi||y.minFilter===il||y.minFilter===xo||y.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Se[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Se[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Se[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,De[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,De[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$n||y.minFilter!==xo&&y.minFilter!==is||y.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ut(T,y){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));let Y=y.source,he=p.get(Y);he===void 0&&(he={},p.set(Y,he));let X=W(y);if(X!==T.__cacheKey){he[X]===void 0&&(he[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),he[X].usedTimes++;let Ve=he[T.__cacheKey];Ve!==void 0&&(he[T.__cacheKey].usedTimes--,Ve.usedTimes===0&&S(y)),T.__cacheKey=X,T.__webglTexture=he[X].texture}return z}function ft(T,y,z){return Math.floor(Math.floor(T/z)/y)}function it(T,y,z,Y){let X=T.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,Y,y.data);else{X.sort((me,Le)=>me.start-Le.start);let Ve=0;for(let me=1;me<X.length;me++){let Le=X[Ve],$e=X[me],Ye=Le.start+Le.count,Re=ft($e.start,y.width,4),ht=ft(Le.start,y.width,4);$e.start<=Ye+1&&Re===ht&&ft($e.start+$e.count-1,y.width,4)===Re?Le.count=Math.max(Le.count,$e.start+$e.count-Le.start):(++Ve,X[Ve]=$e)}X.length=Ve+1;let be=i.getParameter(i.UNPACK_ROW_LENGTH),We=i.getParameter(i.UNPACK_SKIP_PIXELS),He=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let me=0,Le=X.length;me<Le;me++){let $e=X[me],Ye=Math.floor($e.start/4),Re=Math.ceil($e.count/4),ht=Ye%y.width,N=Math.floor(Ye/y.width),ye=Re,Ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,ht,N,ye,Ee,z,Y,y.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,be),i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,He)}}function K(T,y,z){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);let he=ut(T,y),X=y.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+z);let Ve=n.get(X);if(X.version!==Ve.__version||he===!0){t.activeTexture(i.TEXTURE0+z);let be=At.getPrimaries(At.workingColorSpace),We=y.colorSpace===Bi?null:At.getPrimaries(y.colorSpace),He=y.colorSpace===Bi||be===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let me=_(y.image,!1,s.maxTextureSize);me=st(y,me);let Le=r.convert(y.format,y.colorSpace),$e=r.convert(y.type),Ye=b(y.internalFormat,Le,$e,y.colorSpace,y.isVideoTexture);at(Y,y);let Re,ht=y.mipmaps,N=y.isVideoTexture!==!0,ye=Ve.__version===void 0||he===!0,Ee=X.dataReady,ke=A(y,me);if(y.isDepthTexture)Ye=v(y.format===xr,y.type),ye&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ye,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ye,me.width,me.height,0,Le,$e,null));else if(y.isDataTexture)if(ht.length>0){N&&ye&&t.texStorage2D(i.TEXTURE_2D,ke,Ye,ht[0].width,ht[0].height);for(let ge=0,R=ht.length;ge<R;ge++)Re=ht[ge],N?Ee&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,Le,$e,Re.data):t.texImage2D(i.TEXTURE_2D,ge,Ye,Re.width,Re.height,0,Le,$e,Re.data);y.generateMipmaps=!1}else N?(ye&&t.texStorage2D(i.TEXTURE_2D,ke,Ye,me.width,me.height),Ee&&it(y,me,Le,$e)):t.texImage2D(i.TEXTURE_2D,0,Ye,me.width,me.height,0,Le,$e,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){N&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Ye,ht[0].width,ht[0].height,me.depth);for(let ge=0,R=ht.length;ge<R;ge++)if(Re=ht[ge],y.format!==jn)if(Le!==null)if(N){if(Ee)if(y.layerUpdates.size>0){let ne=Rh(Re.width,Re.height,y.format,y.type);for(let te of y.layerUpdates){let Ze=Re.data.subarray(te*ne/Re.data.BYTES_PER_ELEMENT,(te+1)*ne/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,te,Re.width,Re.height,1,Le,Ze)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,me.depth,Le,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ye,Re.width,Re.height,me.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,me.depth,Le,$e,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ye,Re.width,Re.height,me.depth,0,Le,$e,Re.data)}else{N&&ye&&t.texStorage2D(i.TEXTURE_2D,ke,Ye,ht[0].width,ht[0].height);for(let ge=0,R=ht.length;ge<R;ge++)Re=ht[ge],y.format!==jn?Le!==null?N?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ye,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Ee&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,Le,$e,Re.data):t.texImage2D(i.TEXTURE_2D,ge,Ye,Re.width,Re.height,0,Le,$e,Re.data)}else if(y.isDataArrayTexture)if(N){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Ye,me.width,me.height,me.depth),Ee)if(y.layerUpdates.size>0){let ge=Rh(me.width,me.height,y.format,y.type);for(let R of y.layerUpdates){let ne=me.data.subarray(R*ge/me.data.BYTES_PER_ELEMENT,(R+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,R,me.width,me.height,1,Le,$e,ne)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Le,$e,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,me.width,me.height,me.depth,0,Le,$e,me.data);else if(y.isData3DTexture)N?(ye&&t.texStorage3D(i.TEXTURE_3D,ke,Ye,me.width,me.height,me.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Le,$e,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,me.width,me.height,me.depth,0,Le,$e,me.data);else if(y.isFramebufferTexture){if(ye)if(N)t.texStorage2D(i.TEXTURE_2D,ke,Ye,me.width,me.height);else{let ge=me.width,R=me.height;for(let ne=0;ne<ke;ne++)t.texImage2D(i.TEXTURE_2D,ne,Ye,ge,R,0,Le,$e,null),ge>>=1,R>>=1}}else if(ht.length>0){if(N&&ye){let ge=rt(ht[0]);t.texStorage2D(i.TEXTURE_2D,ke,Ye,ge.width,ge.height)}for(let ge=0,R=ht.length;ge<R;ge++)Re=ht[ge],N?Ee&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Le,$e,Re):t.texImage2D(i.TEXTURE_2D,ge,Ye,Le,$e,Re);y.generateMipmaps=!1}else if(N){if(ye){let ge=rt(me);t.texStorage2D(i.TEXTURE_2D,ke,Ye,ge.width,ge.height)}Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,$e,me)}else t.texImage2D(i.TEXTURE_2D,0,Ye,Le,$e,me);g(y)&&f(Y),Ve.__version=X.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function le(T,y,z){if(y.image.length!==6)return;let Y=ut(T,y),he=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let X=n.get(he);if(he.version!==X.__version||Y===!0){t.activeTexture(i.TEXTURE0+z);let Ve=At.getPrimaries(At.workingColorSpace),be=y.colorSpace===Bi?null:At.getPrimaries(y.colorSpace),We=y.colorSpace===Bi||Ve===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let He=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,Le=[];for(let R=0;R<6;R++)!He&&!me?Le[R]=_(y.image[R],!0,s.maxCubemapSize):Le[R]=me?y.image[R].image:y.image[R],Le[R]=st(y,Le[R]);let $e=Le[0],Ye=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),ht=b(y.internalFormat,Ye,Re,y.colorSpace),N=y.isVideoTexture!==!0,ye=X.__version===void 0||Y===!0,Ee=he.dataReady,ke=A(y,$e);at(i.TEXTURE_CUBE_MAP,y);let ge;if(He){N&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ht,$e.width,$e.height);for(let R=0;R<6;R++){ge=Le[R].mipmaps;for(let ne=0;ne<ge.length;ne++){let te=ge[ne];y.format!==jn?Ye!==null?N?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,ne,0,0,te.width,te.height,Ye,te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,ne,ht,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,ne,0,0,te.width,te.height,Ye,Re,te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,ne,ht,te.width,te.height,0,Ye,Re,te.data)}}}else{if(ge=y.mipmaps,N&&ye){ge.length>0&&ke++;let R=rt(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ht,R.width,R.height)}for(let R=0;R<6;R++)if(me){N?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Le[R].width,Le[R].height,Ye,Re,Le[R].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,ht,Le[R].width,Le[R].height,0,Ye,Re,Le[R].data);for(let ne=0;ne<ge.length;ne++){let Ze=ge[ne].image[R].image;N?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,ne+1,0,0,Ze.width,Ze.height,Ye,Re,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,ne+1,ht,Ze.width,Ze.height,0,Ye,Re,Ze.data)}}else{N?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Ye,Re,Le[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,ht,Ye,Re,Le[R]);for(let ne=0;ne<ge.length;ne++){let te=ge[ne];N?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,ne+1,0,0,Ye,Re,te.image[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,ne+1,ht,Ye,Re,te.image[R])}}}g(y)&&f(i.TEXTURE_CUBE_MAP),X.__version=he.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Oe(T,y,z,Y,he,X){let Ve=r.convert(z.format,z.colorSpace),be=r.convert(z.type),We=b(z.internalFormat,Ve,be,z.colorSpace),He=n.get(y),me=n.get(z);if(me.__renderTarget=y,!He.__hasExternalTextures){let Le=Math.max(1,y.width>>X),$e=Math.max(1,y.height>>X);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,X,We,Le,$e,y.depth,0,Ve,be,null):t.texImage2D(he,X,We,Le,$e,0,Ve,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),fe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,he,me.__webglTexture,0,we(y)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,he,me.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(T,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let Y=y.depthTexture,he=Y&&Y.isDepthTexture?Y.type:null,X=v(y.stencilBuffer,he),Ve=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=we(y);fe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,X,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,X,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,X,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ve,i.RENDERBUFFER,T)}else{let Y=y.textures;for(let he=0;he<Y.length;he++){let X=Y[he],Ve=r.convert(X.format,X.colorSpace),be=r.convert(X.type),We=b(X.internalFormat,Ve,be,X.colorSpace),He=we(y);z&&fe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,We,y.width,y.height):fe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,We,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,We,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);let he=Y.__webglTexture,X=we(y);if(y.depthTexture.format===nr)fe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(y.depthTexture.format===xr)fe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function gt(T){let y=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let he=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",he)};Y.addEventListener("dispose",he),y.__depthDisposeCallback=he}y.__boundDepthTexture=Y}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Y=T.texture.mipmaps;Y&&Y.length>0?Be(y.__webglFramebuffer[0],T):Be(y.__webglFramebuffer,T)}else if(z){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),Je(y.__webglDepthbuffer[Y],T,!1);else{let he=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,X)}}else{let Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Je(y.__webglDepthbuffer,T,!1);else{let he=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(T,y,z){let Y=n.get(T);y!==void 0&&Oe(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&gt(T)}function P(T){let y=T.texture,z=n.get(T),Y=n.get(y);T.addEventListener("dispose",L);let he=T.textures,X=T.isWebGLCubeRenderTarget===!0,Ve=he.length>1;if(Ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[be]=[];for(let We=0;We<y.mipmaps.length;We++)z.__webglFramebuffer[be][We]=i.createFramebuffer()}else z.__webglFramebuffer[be]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let be=0;be<y.mipmaps.length;be++)z.__webglFramebuffer[be]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let be=0,We=he.length;be<We;be++){let He=n.get(he[be]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&fe(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){let We=he[be];z.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[be]);let He=r.convert(We.format,We.colorSpace),me=r.convert(We.type),Le=b(We.internalFormat,He,me,We.colorSpace,T.isXRRenderTarget===!0),$e=we(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Le,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,z.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),at(i.TEXTURE_CUBE_MAP,y);for(let be=0;be<6;be++)if(y.mipmaps&&y.mipmaps.length>0)for(let We=0;We<y.mipmaps.length;We++)Oe(z.__webglFramebuffer[be][We],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,We);else Oe(z.__webglFramebuffer[be],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let be=0,We=he.length;be<We;be++){let He=he[be],me=n.get(He),Le=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,me.__webglTexture),at(Le,He),Oe(z.__webglFramebuffer,T,He,i.COLOR_ATTACHMENT0+be,Le,0),g(He)&&f(Le)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(be=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Y.__webglTexture),at(be,y),y.mipmaps&&y.mipmaps.length>0)for(let We=0;We<y.mipmaps.length;We++)Oe(z.__webglFramebuffer[We],T,y,i.COLOR_ATTACHMENT0,be,We);else Oe(z.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,be,0);g(y)&&f(be),t.unbindTexture()}T.depthBuffer&&gt(T)}function ce(T){let y=T.textures;for(let z=0,Y=y.length;z<Y;z++){let he=y[z];if(g(he)){let X=E(T),Ve=n.get(he).__webglTexture;t.bindTexture(X,Ve),f(X),t.unbindTexture()}}}let ie=[],j=[];function ee(T){if(T.samples>0){if(fe(T)===!1){let y=T.textures,z=T.width,Y=T.height,he=i.COLOR_BUFFER_BIT,X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=n.get(T),be=y.length>1;if(be)for(let He=0;He<y.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);let We=T.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let He=0;He<y.length;He++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[He]);let me=n.get(y[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,he,i.NEAREST),l===!0&&(ie.length=0,j.length=0,ie.push(i.COLOR_ATTACHMENT0+He),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ie.push(X),j.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let He=0;He<y.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[He]);let me=n.get(y[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function we(T){return Math.min(s.maxSamples,T.samples)}function fe(T){let y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(T){let y=o.render.frame;d.get(T)!==y&&(d.set(T,y),T.update())}function st(T,y){let z=T.colorSpace,Y=T.format,he=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==vs&&z!==Bi&&(At.getTransfer(z)===Lt?(Y!==jn||he!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function rt(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=ae,this.setTextureCube=Z,this.rebindTextures=Et,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=fe}function Yx(i,e){function t(n,s=Bi){let r,o=At.getTransfer(s);if(n===ci)return i.UNSIGNED_BYTE;if(n===rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===sl)return i.INT;if(n===ss)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===mr)return i.HALF_FLOAT;if(n===yh)return i.ALPHA;if(n===_h)return i.RGB;if(n===jn)return i.RGBA;if(n===nr)return i.DEPTH_COMPONENT;if(n===xr)return i.DEPTH_STENCIL;if(n===vh)return i.RED;if(n===al)return i.RED_INTEGER;if(n===Mh)return i.RG;if(n===ll)return i.RG_INTEGER;if(n===cl)return i.RGBA_INTEGER;if(n===yo||n===_o||n===vo||n===Mo)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hl||n===dl||n===ul||n===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pl||n===ml)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xl||n===yl||n===_l||n===vl||n===Ml||n===Sl||n===bl||n===wl||n===El||n===Tl||n===Al||n===Cl||n===Il||n===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===Dl||n===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pl)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===Nl||n===Fl||n===Ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Kr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new li({vertexShader:Zx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new Ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends Di{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,p=null,m=null,x=null,_=typeof XRWebGLBinding!="undefined",g=new Vh,f={},E=t.getContextAttributes(),b=null,v=null,A=[],C=[],L=new Pe,U=null,S=new Ln;S.viewport=new Yt;let M=new Ln;M.viewport=new Yt;let D=[S,M],k=new Wa,G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=A[K];return le===void 0&&(le=new or,A[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=A[K];return le===void 0&&(le=new or,A[K]=le),le.getGripSpace()},this.getHand=function(K){let le=A[K];return le===void 0&&(le=new or,A[K]=le),le.getHandSpace()};function J(K){let le=C.indexOf(K.inputSource);if(le===-1)return;let Oe=A[le];Oe!==void 0&&(Oe.update(K.inputSource,K.frame,c||o),Oe.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ae);for(let K=0;K<A.length;K++){let le=C[K];le!==null&&(C[K]=null,A[K].disconnect(le))}G=null,W=null,g.reset();for(let K in f)delete f[K];e.setRenderTarget(b),m=null,p=null,u=null,s=null,v=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ae),E.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,Je=null,Be=null;E.depth&&(Be=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Oe=E.stencil?xr:nr,Je=E.stencil?gr:ss);let gt={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(gt),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new ui(p.textureWidth,p.textureHeight,{format:jn,type:ci,depthTexture:new $r(p.textureWidth,p.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let Oe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Oe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new ui(m.framebufferWidth,m.framebufferHeight,{format:jn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(K){for(let le=0;le<K.removed.length;le++){let Oe=K.removed[le],Je=C.indexOf(Oe);Je>=0&&(C[Je]=null,A[Je].disconnect(Oe))}for(let le=0;le<K.added.length;le++){let Oe=K.added[le],Je=C.indexOf(Oe);if(Je===-1){for(let gt=0;gt<A.length;gt++)if(gt>=C.length){C.push(Oe),Je=gt;break}else if(C[gt]===null){C[gt]=Oe,Je=gt;break}if(Je===-1)break}let Be=A[Je];Be&&Be.connect(Oe)}}let Z=new F,Se=new F;function De(K,le,Oe){Z.setFromMatrixPosition(le.matrixWorld),Se.setFromMatrixPosition(Oe.matrixWorld);let Je=Z.distanceTo(Se),Be=le.projectionMatrix.elements,gt=Oe.projectionMatrix.elements,Et=Be[14]/(Be[10]-1),P=Be[14]/(Be[10]+1),ce=(Be[9]+1)/Be[5],ie=(Be[9]-1)/Be[5],j=(Be[8]-1)/Be[0],ee=(gt[8]+1)/gt[0],we=Et*j,fe=Et*ee,Ae=Je/(-j+ee),st=Ae*-j;if(le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(st),K.translateZ(Ae),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Be[10]===-1)K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let rt=Et+Ae,T=P+Ae,y=we-st,z=fe+(Je-st),Y=ce*P/T*rt,he=ie*P/T*rt;K.projectionMatrix.makePerspective(y,z,Y,he,rt,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Fe(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let le=K.near,Oe=K.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(Oe=g.depthFar)),k.near=M.near=S.near=le,k.far=M.far=S.far=Oe,(G!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),G=k.near,W=k.far),k.layers.mask=K.layers.mask|6,S.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;let Je=K.parent,Be=k.cameras;Fe(k,Je);for(let gt=0;gt<Be.length;gt++)Fe(Be[gt],Je);Be.length===2?De(k,S,M):k.projectionMatrix.copy(S.projectionMatrix),at(K,k,Je)};function at(K,le,Oe){Oe===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(Oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=va*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(K){return f[K]};let ut=null;function ft(K,le){if(d=le.getViewerPose(c||o),x=le,d!==null){let Oe=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Je=!1;Oe.length!==k.cameras.length&&(k.cameras.length=0,Je=!0);for(let P=0;P<Oe.length;P++){let ce=Oe[P],ie=null;if(m!==null)ie=m.getViewport(ce);else{let ee=u.getViewSubImage(p,ce);ie=ee.viewport,P===0&&(e.setRenderTargetTextures(v,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(v))}let j=D[P];j===void 0&&(j=new Ln,j.layers.enable(P),j.viewport=new Yt,D[P]=j),j.matrix.fromArray(ce.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ce.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ie.x,ie.y,ie.width,ie.height),P===0&&(k.matrix.copy(j.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Je===!0&&k.cameras.push(j)}let Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let P=u.getDepthInformation(Oe[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(Be&&Be.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let P=0;P<Oe.length;P++){let ce=Oe[P].camera;if(ce){let ie=f[ce];ie||(ie=new Kr,f[ce]=ie);let j=u.getCameraImage(ce);ie.sourceTexture=j}}}}for(let Oe=0;Oe<A.length;Oe++){let Je=C[Oe],Be=A[Oe];Je!==null&&Be!==void 0&&Be.update(Je,le,c||o)}ut&&ut(K,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),x=null}let it=new Ju;it.setAnimationLoop(ft),this.setAnimationLoop=function(K){ut=K},this.dispose=function(){}}},Ps=new ai,$x=new $t;function Kx(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Th(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,E,b,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),d(g,f)):f.isMeshStandardMaterial?(r(g,f),p(g,f),f.isMeshPhysicalMaterial&&m(g,f,v)):f.isMeshMatcapMaterial?(r(g,f),x(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,E,b):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===pn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===pn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let E=e.get(f),b=E.envMap,v=E.envMapRotation;b&&(g.envMap.value=b,Ps.copy(v),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),g.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(Ps)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,E,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*E,g.scale.value=b*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,E){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){let E=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let v=b.program;n.uniformBlockBinding(E,v)}function c(E,b){let v=s[E.id];v===void 0&&(x(E),v=d(E),s[E.id]=v,E.addEventListener("dispose",g));let A=b.program;n.updateUBOMapping(E,A);let C=e.render.frame;r[E.id]!==C&&(p(E),r[E.id]=C)}function d(E){let b=u();E.__bindingPointIndex=b;let v=i.createBuffer(),A=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){let b=s[E.id],v=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,L=v.length;C<L;C++){let U=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,M=U.length;S<M;S++){let D=U[S];if(m(D,C,S,A)===!0){let k=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],W=0;for(let J=0;J<G.length;J++){let q=G[J],ae=_(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,k+W,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,W),W+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,b,v,A){let C=E.value,L=b+"_"+v;if(A[L]===void 0)return typeof C=="number"||typeof C=="boolean"?A[L]=C:A[L]=C.clone(),!0;{let U=A[L];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return A[L]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function x(E){let b=E.uniforms,v=0,A=16;for(let L=0,U=b.length;L<U;L++){let S=Array.isArray(b[L])?b[L]:[b[L]];for(let M=0,D=S.length;M<D;M++){let k=S[M],G=Array.isArray(k.value)?k.value:[k.value];for(let W=0,J=G.length;W<J;W++){let q=G[W],ae=_(q),Z=v%A,Se=Z%ae.boundary,De=Z+Se;v+=Se,De!==0&&A-De<ae.storage&&(v+=A-De),k.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=ae.storage}}}let C=v%A;return C>0&&(v+=A-C),E.__size=v,E.__cache={},this}function _(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function g(E){let b=E.target;b.removeEventListener("dispose",g);let v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Gl=class{constructor(e={}){let{canvas:t=xu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=new Uint32Array(4),_=new Int32Array(4),g=null,f=null,E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=Sn;let C=0,L=0,U=null,S=-1,M=null,D=new Yt,k=new Yt,G=null,W=new xt(0),J=0,q=t.width,ae=t.height,Z=1,Se=null,De=null,Fe=new Yt(0,0,q,ae),at=new Yt(0,0,q,ae),ut=!1,ft=new ar,it=!1,K=!1,le=new $t,Oe=new F,Je=new Yt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Et(){return U===null?Z:1}let P=n;function ce(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xa}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ge,!1),P===null){let O="webgl2";if(P=ce(O,w),P===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ie,j,ee,we,fe,Ae,st,rt,T,y,z,Y,he,X,Ve,be,We,He,me,Le,$e,Ye,Re,ht;function N(){ie=new g0(P),ie.init(),Ye=new Yx(P,ie),j=new c0(P,ie,e,Ye),ee=new Xx(P,ie),j.reversedDepthBuffer&&p&&ee.buffers.depth.setReversed(!0),we=new _0(P),fe=new Dx,Ae=new qx(P,ie,ee,fe,j,Ye,we),st=new d0(v),rt=new m0(v),T=new Ep(P),Re=new a0(P,T),y=new x0(P,T,we,Re),z=new M0(P,y,T,we),me=new v0(P,j,Ae),be=new h0(fe),Y=new Px(v,st,rt,ie,j,Re,be),he=new Kx(v,fe),X=new Ux,Ve=new zx(ie),He=new o0(v,st,rt,ee,z,m,l),We=new Vx(v,z,j),ht=new jx(P,we,j,ee),Le=new l0(P,ie,we),$e=new y0(P,ie,we),we.programs=Y.programs,v.capabilities=j,v.extensions=ie,v.properties=fe,v.renderLists=X,v.shadowMap=We,v.state=ee,v.info=we}N();let ye=new Wh(v,P);this.xr=ye,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(q,ae,!1))},this.getSize=function(w){return w.set(q,ae)},this.setSize=function(w,O,H=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ae=O,t.width=Math.floor(w*Z),t.height=Math.floor(O*Z),H===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(q*Z,ae*Z).floor()},this.setDrawingBufferSize=function(w,O,H){q=w,ae=O,Z=H,t.width=Math.floor(w*H),t.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Fe)},this.setViewport=function(w,O,H,V){w.isVector4?Fe.set(w.x,w.y,w.z,w.w):Fe.set(w,O,H,V),ee.viewport(D.copy(Fe).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,O,H,V){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,O,H,V),ee.scissor(k.copy(at).multiplyScalar(Z).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){ee.setScissorTest(ut=w)},this.setOpaqueSort=function(w){Se=w},this.setTransparentSort=function(w){De=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,H=!0){let V=0;if(w){let I=!1;if(U!==null){let B=U.texture.format;I=B===cl||B===ll||B===al}if(I){let B=U.texture.type,$=B===ci||B===ss||B===pr||B===gr||B===rl||B===ol,Q=He.getClearColor(),de=He.getClearAlpha(),ue=Q.r,_e=Q.g,Te=Q.b;$?(x[0]=ue,x[1]=_e,x[2]=Te,x[3]=de,P.clearBufferuiv(P.COLOR,0,x)):(_[0]=ue,_[1]=_e,_[2]=Te,_[3]=de,P.clearBufferiv(P.COLOR,0,_))}else V|=P.COLOR_BUFFER_BIT}O&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),He.dispose(),X.dispose(),Ve.dispose(),fe.dispose(),st.dispose(),rt.dispose(),z.dispose(),Re.dispose(),ht.dispose(),Y.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ot),ye.removeEventListener("sessionend",Jt),ln.stop()};function Ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=we.autoReset,O=We.enabled,H=We.autoUpdate,V=We.needsUpdate,I=We.type;N(),we.autoReset=w,We.enabled=O,We.autoUpdate=H,We.needsUpdate=V,We.type=I}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function R(w){let O=w.target;O.removeEventListener("dispose",R),ne(O)}function ne(w){te(w),fe.remove(w)}function te(w){let O=fe.get(w).programs;O!==void 0&&(O.forEach(function(H){Y.releaseProgram(H)}),w.isShaderMaterial&&Y.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,V,I,B){O===null&&(O=Be);let $=I.isMesh&&I.matrixWorld.determinant()<0,Q=yi(w,O,H,V,I);ee.setMaterial(V,$);let de=H.index,ue=1;if(V.wireframe===!0){if(de=y.getWireframeAttribute(H),de===void 0)return;ue=2}let _e=H.drawRange,Te=H.attributes.position,ve=_e.start*ue,Xe=(_e.start+_e.count)*ue;B!==null&&(ve=Math.max(ve,B.start*ue),Xe=Math.min(Xe,(B.start+B.count)*ue)),de!==null?(ve=Math.max(ve,0),Xe=Math.min(Xe,de.count)):Te!=null&&(ve=Math.max(ve,0),Xe=Math.min(Xe,Te.count));let nt=Xe-ve;if(nt<0||nt===1/0)return;Re.setup(I,V,Q,H,de);let et,Qe=Le;if(de!==null&&(et=T.get(de),Qe=$e,Qe.setIndex(et)),I.isMesh)V.wireframe===!0?(ee.setLineWidth(V.wireframeLinewidth*Et()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(I.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),ee.setLineWidth(Ce*Et()),I.isLineSegments?Qe.setMode(P.LINES):I.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else I.isPoints?Qe.setMode(P.POINTS):I.isSprite&&Qe.setMode(P.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))Qe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Ce=I._multiDrawStarts,St=I._multiDrawCounts,ct=I._multiDrawCount,Qt=de?T.get(de).bytesPerElement:1,Vn=fe.get(V).currentProgram.getUniforms();for(let Wt=0;Wt<ct;Wt++)Vn.setValue(P,"_gl_DrawID",Wt),Qe.render(Ce[Wt]/Qt,St[Wt])}else if(I.isInstancedMesh)Qe.renderInstances(ve,nt,I.count);else if(H.isInstancedBufferGeometry){let Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,St=Math.min(H.instanceCount,Ce);Qe.renderInstances(ve,nt,St)}else Qe.render(ve,nt)};function Ze(w,O,H){w.transparent===!0&&w.side===Nn&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,gi(w,O,H),w.side=Pi,w.needsUpdate=!0,gi(w,O,H),w.side=Nn):gi(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),f=Ve.get(H),f.init(O),b.push(f),H.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),w!==H&&w.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();let V=new Set;return w.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let B=I.material;if(B)if(Array.isArray(B))for(let $=0;$<B.length;$++){let Q=B[$];Ze(Q,H,I),V.add(Q)}else Ze(B,H,I),V.add(B)}),f=b.pop(),V},this.compileAsync=function(w,O,H=null){let V=this.compile(w,O,H);return new Promise(I=>{function B(){if(V.forEach(function($){fe.get($).currentProgram.isReady()&&V.delete($)}),V.size===0){I(w);return}setTimeout(B,10)}ie.get("KHR_parallel_shader_compile")!==null?B():setTimeout(B,10)})};let lt=null;function bt(w){lt&&lt(w)}function ot(){ln.stop()}function Jt(){ln.start()}let ln=new Ju;ln.setAnimationLoop(bt),typeof self!="undefined"&&ln.setContext(self),this.setAnimationLoop=function(w){lt=w,ye.setAnimationLoop(w),w===null?ln.stop():ln.start()},ye.addEventListener("sessionstart",ot),ye.addEventListener("sessionend",Jt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(O),O=ye.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,U),f=Ve.get(w,b.length),f.init(O),b.push(f),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ft.setFromProjectionMatrix(le,ri,O.reversedDepth),K=this.localClippingEnabled,it=be.init(this.clippingPlanes,K),g=X.get(w,E.length),g.init(),E.push(g),ye.enabled===!0&&ye.isPresenting===!0){let B=v.xr.getDepthSensingMesh();B!==null&&mn(B,O,-1/0,v.sortObjects)}mn(w,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Se,De),gt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,gt&&He.addToRenderList(g,w),this.info.render.frame++,it===!0&&be.beginShadows();let H=f.state.shadowsArray;We.render(H,w,O),it===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,I=g.transmissive;if(f.setupLights(),O.isArrayCamera){let B=O.cameras;if(I.length>0)for(let $=0,Q=B.length;$<Q;$++){let de=B[$];rs(V,I,w,de)}gt&&He.render(w);for(let $=0,Q=B.length;$<Q;$++){let de=B[$];nn(g,w,de,de.viewport)}}else I.length>0&&rs(V,I,w,O),gt&&He.render(w),nn(g,w,O);U!==null&&L===0&&(Ae.updateMultisampleRenderTarget(U),Ae.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(v,w,O),Re.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],it===!0&&be.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function mn(w,O,H,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ft.intersectsSprite(w)){V&&Je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);let $=z.update(w),Q=w.material;Q.visible&&g.push(w,$,Q,H,Je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ft.intersectsObject(w))){let $=z.update(w),Q=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Je.copy(w.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Je.copy($.boundingSphere.center)),Je.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(Q)){let de=$.groups;for(let ue=0,_e=de.length;ue<_e;ue++){let Te=de[ue],ve=Q[Te.materialIndex];ve&&ve.visible&&g.push(w,$,ve,H,Je.z,Te)}}else Q.visible&&g.push(w,$,Q,H,Je.z,null)}}let B=w.children;for(let $=0,Q=B.length;$<Q;$++)mn(B[$],O,H,V)}function nn(w,O,H,V){let I=w.opaque,B=w.transmissive,$=w.transparent;f.setupLightsView(H),it===!0&&be.setGlobalState(v.clippingPlanes,H),V&&ee.viewport(D.copy(V)),I.length>0&&jt(I,O,H),B.length>0&&jt(B,O,H),$.length>0&&jt($,O,H),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function rs(w,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new ui(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?mr:ci,minFilter:is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));let B=f.state.transmissionRenderTarget[V.id],$=V.viewport||D;B.setSize($.z*v.transmissionResolutionScale,$.w*v.transmissionResolutionScale);let Q=v.getRenderTarget(),de=v.getActiveCubeFace(),ue=v.getActiveMipmapLevel();v.setRenderTarget(B),v.getClearColor(W),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),gt&&He.render(H);let _e=v.toneMapping;v.toneMapping=Oi;let Te=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),it===!0&&be.setGlobalState(v.clippingPlanes,V),jt(w,H,V),Ae.updateMultisampleRenderTarget(B),Ae.updateRenderTargetMipmap(B),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Xe=0,nt=O.length;Xe<nt;Xe++){let et=O[Xe],Qe=et.object,Ce=et.geometry,St=et.material,ct=et.group;if(St.side===Nn&&Qe.layers.test(V.layers)){let Qt=St.side;St.side=pn,St.needsUpdate=!0,zi(Qe,H,V,Ce,St,ct),St.side=Qt,St.needsUpdate=!0,ve=!0}}ve===!0&&(Ae.updateMultisampleRenderTarget(B),Ae.updateRenderTargetMipmap(B))}v.setRenderTarget(Q,de,ue),v.setClearColor(W,J),Te!==void 0&&(V.viewport=Te),v.toneMapping=_e}function jt(w,O,H){let V=O.isScene===!0?O.overrideMaterial:null;for(let I=0,B=w.length;I<B;I++){let $=w[I],Q=$.object,de=$.geometry,ue=$.group,_e=$.material;_e.allowOverride===!0&&V!==null&&(_e=V),Q.layers.test(H.layers)&&zi(Q,O,H,de,_e,ue)}}function zi(w,O,H,V,I,B){w.onBeforeRender(v,O,H,V,I,B),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),I.onBeforeRender(v,O,H,V,w,B),I.transparent===!0&&I.side===Nn&&I.forceSinglePass===!1?(I.side=pn,I.needsUpdate=!0,v.renderBufferDirect(H,O,V,I,w,B),I.side=Pi,I.needsUpdate=!0,v.renderBufferDirect(H,O,V,I,w,B),I.side=Nn):v.renderBufferDirect(H,O,V,I,w,B),w.onAfterRender(v,O,H,V,I,B)}function gi(w,O,H){O.isScene!==!0&&(O=Be);let V=fe.get(w),I=f.state.lights,B=f.state.shadowsArray,$=I.state.version,Q=Y.getParameters(w,I.state,B,O,H),de=Y.getProgramCacheKey(Q),ue=V.programs;V.environment=w.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(w.isMeshStandardMaterial?rt:st).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,ue===void 0&&(w.addEventListener("dispose",R),ue=new Map,V.programs=ue);let _e=ue.get(de);if(_e!==void 0){if(V.currentProgram===_e&&V.lightsStateVersion===$)return xi(w,Q),_e}else Q.uniforms=Y.getUniforms(w),w.onBeforeCompile(Q,v),_e=Y.acquireProgram(Q,de),ue.set(de,_e),V.uniforms=Q.uniforms;let Te=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Te.clippingPlanes=be.uniform),xi(w,Q),V.needsLights=ls(w),V.lightsStateVersion=$,V.needsLights&&(Te.ambientLightColor.value=I.state.ambient,Te.lightProbe.value=I.state.probe,Te.directionalLights.value=I.state.directional,Te.directionalLightShadows.value=I.state.directionalShadow,Te.spotLights.value=I.state.spot,Te.spotLightShadows.value=I.state.spotShadow,Te.rectAreaLights.value=I.state.rectArea,Te.ltc_1.value=I.state.rectAreaLTC1,Te.ltc_2.value=I.state.rectAreaLTC2,Te.pointLights.value=I.state.point,Te.pointLightShadows.value=I.state.pointShadow,Te.hemisphereLights.value=I.state.hemi,Te.directionalShadowMap.value=I.state.directionalShadowMap,Te.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Te.spotShadowMap.value=I.state.spotShadowMap,Te.spotLightMatrix.value=I.state.spotLightMatrix,Te.spotLightMap.value=I.state.spotLightMap,Te.pointShadowMap.value=I.state.pointShadowMap,Te.pointShadowMatrix.value=I.state.pointShadowMatrix),V.currentProgram=_e,V.uniformsList=null,_e}function os(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Mr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function xi(w,O){let H=fe.get(w);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function yi(w,O,H,V,I){O.isScene!==!0&&(O=Be),Ae.resetTextureUnits();let B=O.fog,$=V.isMeshStandardMaterial?O.environment:null,Q=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:vs,de=(V.isMeshStandardMaterial?rt:st).get(V.envMap||$),ue=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,_e=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!H.morphAttributes.position,ve=!!H.morphAttributes.normal,Xe=!!H.morphAttributes.color,nt=Oi;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(nt=v.toneMapping);let et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=et!==void 0?et.length:0,Ce=fe.get(V),St=f.state.lights;if(it===!0&&(K===!0||w!==M)){let sn=w===M&&V.id===S;be.setState(V,w,sn)}let ct=!1;V.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==St.state.version||Ce.outputColorSpace!==Q||I.isBatchedMesh&&Ce.batching===!1||!I.isBatchedMesh&&Ce.batching===!0||I.isBatchedMesh&&Ce.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ce.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ce.instancing===!1||!I.isInstancedMesh&&Ce.instancing===!0||I.isSkinnedMesh&&Ce.skinning===!1||!I.isSkinnedMesh&&Ce.skinning===!0||I.isInstancedMesh&&Ce.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ce.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ce.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ce.instancingMorph===!1&&I.morphTexture!==null||Ce.envMap!==de||V.fog===!0&&Ce.fog!==B||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==be.numPlanes||Ce.numIntersection!==be.numIntersection)||Ce.vertexAlphas!==ue||Ce.vertexTangents!==_e||Ce.morphTargets!==Te||Ce.morphNormals!==ve||Ce.morphColors!==Xe||Ce.toneMapping!==nt||Ce.morphTargetsCount!==Qe)&&(ct=!0):(ct=!0,Ce.__version=V.version);let Qt=Ce.currentProgram;ct===!0&&(Qt=gi(V,O,I));let Vn=!1,Wt=!1,gn=!1,Nt=Qt.getUniforms(),xn=Ce.uniforms;if(ee.useProgram(Qt.program)&&(Vn=!0,Wt=!0,gn=!0),V.id!==S&&(S=V.id,Wt=!0),Vn||M!==w){ee.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Nt.setValue(P,"projectionMatrix",w.projectionMatrix),Nt.setValue(P,"viewMatrix",w.matrixWorldInverse);let cn=Nt.map.cameraPosition;cn!==void 0&&cn.setValue(P,Oe.setFromMatrixPosition(w.matrixWorld)),j.logarithmicDepthBuffer&&Nt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Nt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Wt=!0,gn=!0)}if(I.isSkinnedMesh){Nt.setOptional(P,I,"bindMatrix"),Nt.setOptional(P,I,"bindMatrixInverse");let sn=I.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Nt.setValue(P,"boneTexture",sn.boneTexture,Ae))}I.isBatchedMesh&&(Nt.setOptional(P,I,"batchingTexture"),Nt.setValue(P,"batchingTexture",I._matricesTexture,Ae),Nt.setOptional(P,I,"batchingIdTexture"),Nt.setValue(P,"batchingIdTexture",I._indirectTexture,Ae),Nt.setOptional(P,I,"batchingColorTexture"),I._colorsTexture!==null&&Nt.setValue(P,"batchingColorTexture",I._colorsTexture,Ae));let yn=H.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&me.update(I,H,Qt),(Wt||Ce.receiveShadow!==I.receiveShadow)&&(Ce.receiveShadow=I.receiveShadow,Nt.setValue(P,"receiveShadow",I.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(xn.envMap.value=de,xn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(xn.envMapIntensity.value=O.environmentIntensity),Wt&&(Nt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&as(xn,gn),B&&V.fog===!0&&he.refreshFogUniforms(xn,B),he.refreshMaterialUniforms(xn,V,Z,ae,f.state.transmissionRenderTarget[w.id]),Mr.upload(P,os(Ce),xn,Ae)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Mr.upload(P,os(Ce),xn,Ae),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Nt.setValue(P,"center",I.center),Nt.setValue(P,"modelViewMatrix",I.modelViewMatrix),Nt.setValue(P,"normalMatrix",I.normalMatrix),Nt.setValue(P,"modelMatrix",I.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let sn=V.uniformsGroups;for(let cn=0,ds=sn.length;cn<ds;cn++){let Wn=sn[cn];ht.update(Wn,Qt),ht.bind(Wn,Qt)}}return Qt}function as(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function ls(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,O,H){let V=fe.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),fe.get(w.texture).__webglTexture=O,fe.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let H=fe.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};let cs=P.createFramebuffer();this.setRenderTarget=function(w,O=0,H=0){U=w,C=O,L=H;let V=!0,I=null,B=!1,$=!1;if(w){let de=fe.get(w);if(de.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(de.__webglFramebuffer===void 0)Ae.setupRenderTarget(w);else if(de.__hasExternalTextures)Ae.rebindTextures(w,fe.get(w.texture).__webglTexture,fe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Te=w.depthTexture;if(de.__boundDepthTexture!==Te){if(Te!==null&&fe.has(Te)&&(w.width!==Te.image.width||w.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(w)}}let ue=w.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&($=!0);let _e=fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(_e[O])?I=_e[O][H]:I=_e[O],B=!0):w.samples>0&&Ae.useMultisampledRTT(w)===!1?I=fe.get(w).__webglMultisampledFramebuffer:Array.isArray(_e)?I=_e[H]:I=_e,D.copy(w.viewport),k.copy(w.scissor),G=w.scissorTest}else D.copy(Fe).multiplyScalar(Z).floor(),k.copy(at).multiplyScalar(Z).floor(),G=ut;if(H!==0&&(I=cs),ee.bindFramebuffer(P.FRAMEBUFFER,I)&&V&&ee.drawBuffers(w,I),ee.viewport(D),ee.scissor(k),ee.setScissorTest(G),B){let de=fe.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,H)}else if($){let de=O;for(let ue=0;ue<w.textures.length;ue++){let _e=fe.get(w.textures[ue]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ue,_e.__webglTexture,H,de)}}else if(w!==null&&H!==0){let de=fe.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(w,O,H,V,I,B,$,Q=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$!==void 0&&(de=de[$]),de){ee.bindFramebuffer(P.FRAMEBUFFER,de);try{let ue=w.textures[Q],_e=ue.format,Te=ue.type;if(!j.textureFormatReadable(_e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&H>=0&&H<=w.height-I&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Q),P.readPixels(O,H,V,I,Ye.convert(_e),Ye.convert(Te),B))}finally{let ue=U!==null?fe.get(U).__webglFramebuffer:null;ee.bindFramebuffer(P.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(w,O,H,V,I,B,$,Q=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$!==void 0&&(de=de[$]),de)if(O>=0&&O<=w.width-V&&H>=0&&H<=w.height-I){ee.bindFramebuffer(P.FRAMEBUFFER,de);let ue=w.textures[Q],_e=ue.format,Te=ue.type;if(!j.textureFormatReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.bufferData(P.PIXEL_PACK_BUFFER,B.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Q),P.readPixels(O,H,V,I,Ye.convert(_e),Ye.convert(Te),0);let Xe=U!==null?fe.get(U).__webglFramebuffer:null;ee.bindFramebuffer(P.FRAMEBUFFER,Xe);let nt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await yu(P,nt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,B),P.deleteBuffer(ve),P.deleteSync(nt),B}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,H=0){let V=Math.pow(2,-H),I=Math.floor(w.image.width*V),B=Math.floor(w.image.height*V),$=O!==null?O.x:0,Q=O!==null?O.y:0;Ae.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,$,Q,I,B),ee.unbindTexture()};let hs=P.createFramebuffer(),Us=P.createFramebuffer();this.copyTextureToTexture=function(w,O,H=null,V=null,I=0,B=null){B===null&&(I!==0?(ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),B=I,I=0):B=0);let $,Q,de,ue,_e,Te,ve,Xe,nt,et=w.isCompressedTexture?w.mipmaps[B]:w.image;if(H!==null)$=H.max.x-H.min.x,Q=H.max.y-H.min.y,de=H.isBox3?H.max.z-H.min.z:1,ue=H.min.x,_e=H.min.y,Te=H.isBox3?H.min.z:0;else{let yn=Math.pow(2,-I);$=Math.floor(et.width*yn),Q=Math.floor(et.height*yn),w.isDataArrayTexture?de=et.depth:w.isData3DTexture?de=Math.floor(et.depth*yn):de=1,ue=0,_e=0,Te=0}V!==null?(ve=V.x,Xe=V.y,nt=V.z):(ve=0,Xe=0,nt=0);let Qe=Ye.convert(O.format),Ce=Ye.convert(O.type),St;O.isData3DTexture?(Ae.setTexture3D(O,0),St=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ae.setTexture2DArray(O,0),St=P.TEXTURE_2D_ARRAY):(Ae.setTexture2D(O,0),St=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let ct=P.getParameter(P.UNPACK_ROW_LENGTH),Qt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Vn=P.getParameter(P.UNPACK_SKIP_PIXELS),Wt=P.getParameter(P.UNPACK_SKIP_ROWS),gn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,et.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ue),P.pixelStorei(P.UNPACK_SKIP_ROWS,_e),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);let Nt=w.isDataArrayTexture||w.isData3DTexture,xn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let yn=fe.get(w),sn=fe.get(O),cn=fe.get(yn.__renderTarget),ds=fe.get(sn.__renderTarget);ee.bindFramebuffer(P.READ_FRAMEBUFFER,cn.__webglFramebuffer),ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,ds.__webglFramebuffer);for(let Wn=0;Wn<de;Wn++)Nt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(w).__webglTexture,I,Te+Wn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fe.get(O).__webglTexture,B,nt+Wn)),P.blitFramebuffer(ue,_e,$,Q,ve,Xe,$,Q,P.DEPTH_BUFFER_BIT,P.NEAREST);ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(I!==0||w.isRenderTargetTexture||fe.has(w)){let yn=fe.get(w),sn=fe.get(O);ee.bindFramebuffer(P.READ_FRAMEBUFFER,hs),ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,Us);for(let cn=0;cn<de;cn++)Nt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yn.__webglTexture,I,Te+cn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yn.__webglTexture,I),xn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,sn.__webglTexture,B,nt+cn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,sn.__webglTexture,B),I!==0?P.blitFramebuffer(ue,_e,$,Q,ve,Xe,$,Q,P.COLOR_BUFFER_BIT,P.NEAREST):xn?P.copyTexSubImage3D(St,B,ve,Xe,nt+cn,ue,_e,$,Q):P.copyTexSubImage2D(St,B,ve,Xe,ue,_e,$,Q);ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else xn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(St,B,ve,Xe,nt,$,Q,de,Qe,Ce,et.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(St,B,ve,Xe,nt,$,Q,de,Qe,et.data):P.texSubImage3D(St,B,ve,Xe,nt,$,Q,de,Qe,Ce,et):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,ve,Xe,$,Q,Qe,Ce,et.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,ve,Xe,et.width,et.height,Qe,et.data):P.texSubImage2D(P.TEXTURE_2D,B,ve,Xe,$,Q,Qe,Ce,et);P.pixelStorei(P.UNPACK_ROW_LENGTH,ct),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Vn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,gn),B===0&&O.generateMipmaps&&P.generateMipmap(St),ee.unbindTexture()},this.initRenderTarget=function(w){fe.get(w).__webglFramebuffer===void 0&&Ae.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ae.setTextureCube(w,0):w.isData3DTexture?Ae.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ae.setTexture2DArray(w,0):Ae.setTexture2D(w,0),ee.unbindTexture()},this.resetState=function(){C=0,L=0,U=null,ee.reset(),Re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};function ey(i){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):0}function ty(){let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d",{willReadFrequently:!0});if(!e)return null;let t=e.createLinearGradient(0,0,0,i.height);t.addColorStop(0,"#2b3f6f"),t.addColorStop(.55,"#17244a"),t.addColorStop(1,"#0d1326"),e.fillStyle=t,e.fillRect(0,0,i.width,i.height),e.save(),e.globalAlpha=.09,e.strokeStyle="#ffffff",e.lineWidth=1;let n=16;for(let l=0;l<=i.height;l+=n)e.beginPath(),e.moveTo(0,l+.5),e.lineTo(i.width,l+.5),e.stroke();for(let l=0;l<=i.width;l+=n)e.beginPath(),e.moveTo(l+.5,0),e.lineTo(l+.5,i.height),e.stroke();e.restore();let s=e.createRadialGradient(i.width*.55,i.height*.45,i.width*.08,i.width*.55,i.height*.45,i.width*.85);s.addColorStop(0,"rgba(255, 255, 255, 0.06)"),s.addColorStop(1,"rgba(0, 0, 0, 0.35)"),e.fillStyle=s,e.fillRect(0,0,i.width,i.height);let r=e.getImageData(0,0,i.width,i.height),o=r.data;for(let l=0;l<o.length;l+=4){let c=(Math.random()-.5)*18;o[l+0]=Math.max(0,Math.min(255,o[l+0]+c)),o[l+1]=Math.max(0,Math.min(255,o[l+1]+c)),o[l+2]=Math.max(0,Math.min(255,o[l+2]+c))}e.putImageData(r,0,0);let a=new Ms(i);return"colorSpace"in a&&(a.colorSpace=Sn),a.wrapS=Cn,a.wrapT=Cn,a.repeat.set(1,1),a.anisotropy=4,a}function ny(i=128){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d");if(!t)return null;let n=i*.08,s=i*.5,r=t.createRadialGradient(i/2,i/2,n,i/2,i/2,s);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.35,"rgba(255,255,255,0.55)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,i,i);let o=new Ms(e);return o.wrapS=Cn,o.wrapT=Cn,o.anisotropy=1,o}function iy(i=64,e=8){let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d");if(!n)return null;let s=n.createLinearGradient(0,0,i,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.15,"rgba(255,255,255,0.9)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,i,e),n.globalCompositeOperation="destination-in";let r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(0,0,i,e);let o=new Ms(t);return o.wrapS=Cn,o.wrapT=Cn,o.anisotropy=1,o}function sy(i,e,t){let n=i/2,s=e/2,r=Math.max(0,Math.min(Math.min(n,s),t)),o=-n,a=-s,l=n,c=s,d=new Ss;return d.moveTo(o+r,a),d.lineTo(l-r,a),d.quadraticCurveTo(l,a,l,a+r),d.lineTo(l,c-r),d.quadraticCurveTo(l,c,l-r,c),d.lineTo(o+r,c),d.quadraticCurveTo(o,c,o,c-r),d.lineTo(o,a+r),d.quadraticCurveTo(o,a,o+r,a),d}function Zt(i,e,t,n){let s=sy(i,e,n),r=new dr(s,{depth:t,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:Math.min(2,n*.45),bevelThickness:Math.min(2,n*.45)});return r.translate(0,0,-t/2),r}function ki(i,e,t){var n;e&&(i.remove(e),(n=e.traverse)==null||n.call(e,s=>{var o;if(!s.isMesh)return;let r=Array.isArray(s.material)?s.material:[s.material];for(let a of r)!a||t.has(a)||(o=a.dispose)==null||o.call(a)}))}function Ie(i){return new xt(i)}function ef({canvas:i,width:e,height:t,preserveDrawingBuffer:n=!1}){let s=!!n,r=null;if(s)try{r=i.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!0})||null}catch(se){r=null}let o=new Gl({canvas:i,context:r||void 0,antialias:!s,alpha:!1,preserveDrawingBuffer:!!n,powerPreference:"high-performance"});o.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),o.setSize(e,t,!1),o.shadowMap.enabled=!s,o.shadowMap.type=qa,"outputColorSpace"in o&&(o.outputColorSpace=Sn),o.toneMapping=el,o.toneMappingExposure=s?1.75:1.65;let a=new Jr,l=new Ts(0,e,0,t,.1,2e3);l.position.set(0,0,1e3),l.lookAt(0,0,0);let c=new mo(16777215,.9);a.add(c);let d=new fr(16777215,2.2);d.position.set(e*.15,t*.1,520),d.castShadow=!s,d.shadow.mapSize.set(1024,1024),d.shadow.bias=-2e-4,d.shadow.normalBias=.002,d.shadow.camera.near=1,d.shadow.camera.far=1400,d.shadow.camera.left=-e/2,d.shadow.camera.right=e/2,d.shadow.camera.top=t/2,d.shadow.camera.bottom=-t/2;let u=new dn;u.position.set(e/2,t/2,0),a.add(u),d.target=u,a.add(d);let p=new fr(8046591,.75);p.position.set(e*.92,t*.9,480),p.castShadow=!1,a.add(p);let m=new po(9097983,725024,.5);m.position.set(0,-1,0),a.add(m);let x=s?null:ty(),_=ny(128),g=iy(64,8),f=new Ni(e,t),E=new bn({map:x||null,color:x?16777215:1186355,side:Nn}),b=new pe(f,E);b.position.set(e/2,t/2,-20),a.add(b);let v=new uo({color:0,opacity:.22});v.side=Nn;let A=new pe(f,v);A.position.set(e/2,t/2,-10),A.receiveShadow=!s,a.add(A);let C=(()=>{let se=new Ss;se.moveTo(0,-11),se.lineTo(-10,6),se.lineTo(0,1),se.lineTo(10,6),se.closePath();let re=new dr(se,{depth:6,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:1,bevelThickness:1});return re.translate(0,0,-3),re})(),L=Zt(24,24,10,4),U=Zt(48,32,12,6),S=Zt(40,18,10,6),M=Zt(34,18,2,6),D=new Vt(12,10,3),k=new Vt(2.2,22,1.6),G=Zt(62,46,10,5.5),W=Zt(56,40,2.8,4.5),J=new Kt(13.2,13.2,1.8,30),q=new Kt(3.2,3.2,2.4,18),ae=new Vt(18,3,1.5),Z=new Vt(4.8,2.5,1.8),Se=new Kt(1,1,.9,10),De=new Vt(7,1.1,.6),Fe=new wn(4,12,12),at=new Ni(1,1),ut=new Ni(26,6);ut.translate(-13,0,0);let ft=Zt(16,12,.95,1.2),it=Zt(15,11,.8,1),K=new Vt(8,.72,.26),le=Zt(5.4,2.6,.36,.65),Oe=new Vt(3.2,3.2,.35),Je=Zt(14,14,14,3),Be=new Vt(8,8,8),gt=new Kt(7,7,16,18,1,!1),Et=new Kt(7.6,7.6,3,18,1,!1),P=new Kt(4.2,4.2,11,18,1,!1),ce=new Vt(1.2,9.5,1.2),ie=new wn(8,16,16),j=new Vt(4,2,2),ee=new Kt(1.2,1.6,6,10),we=new wn(3.2,12,12),fe=Zt(3.2,10.2,2.4,1.2),Ae=Zt(10.2,3.2,2.4,1.2),st=new lr(5,10,6,12),rt=Zt(14,10,6,2),T=Zt(16,18,6,6),y=Zt(6,4,1.4,1.2),z=new Vt(2.2,12,1.2),Y=new lr(2.6,6.2,4,10),he=new Kt(1.6,1.6,1.2,14),X=new jr(2.2,5.5,10),Ve=new es(6.5,1.2,10,18),be=new Kt(12,10,22,18,1,!1),We=new Kt(13,13,4,18,1,!1),He=new Kt(9.3,8,17,18,1,!0),me=new es(10.8,.9,10,24),Le=new Vt(7,1.8,3.2),$e=new Vt(1.4,18,14),Ye=new Vt(1.1,10,1),Re=new es(7,1.1,10,22),ht=Zt(42,28,12,6),N=new wn(2.3,10,10),ye=new wn(3.3,12,12),Ee=new wn(1.45,10,10),ke=new Vt(2.2,2.2,9),ge=new lo(14,0),R=new wn(7,16,16),ne=new ho(5,0),te=new wn(10,18,18),Ze=new wn(11.3,20,20),lt=new es(12,1.2,10,26),bt=new wn(3.2,12,12),ot=new Kt(10,12,10,16),Jt=Zt(18,12,10,4),ln=new Kt(2,2,10,10),mn=new Kt(1.1,1.4,11,8),nn=new Kt(2.2,2.2,2,10),rs=new wn(2.4,12,12),jt=new Kt(.8,.8,9,8),zi=new wn(1.4,10,10),gi=Zt(14,6,1.4,2),os=new Kt(2.4,2.4,2.4,12),xi=Zt(16,12,3,2),yi=Zt(20,20,4,3),as=Zt(14,10,1.6,2),ls=Zt(16,6,1.6,2),cs=Zt(8,6,1.2,2),hs=new Vt(3.5,3.5,1.2),Us=new Vt(11,.7,.6),w=(()=>{let oe=new co(18,26,48);return oe.rotateX(Math.PI),oe})(),O=new Ke({color:Ie("#f4f4f4"),roughness:.35,metalness:.15,emissive:new xt(0),emissiveIntensity:0}),H=new Ke({color:Ie("#3d6b86"),roughness:.55,metalness:.1}),V=new Ke({color:Ie("#4b7f9b"),roughness:.55,metalness:.1}),I=new Ke({color:Ie("#0b1020"),roughness:.9,metalness:0,transparent:!0,opacity:.85}),B=new Ke({color:Ie("#8b939f"),roughness:.5,metalness:.25}),$=new Ke({color:Ie("#d6dbe3"),roughness:.3,metalness:.48}),Q=new Ke({color:Ie("#dfe7ef"),roughness:.12,metalness:.72,emissive:Ie("#84b8ff"),emissiveIntensity:.15}),de=new Ke({color:Ie("#a4acb8"),roughness:.34,metalness:.46}),ue=new Ke({color:Ie("#1a2f55"),roughness:.45,metalness:.2,emissive:Ie("#57a2ff"),emissiveIntensity:.25}),_e=new Ke({color:Ie("#f2c94c"),roughness:.35,metalness:.2,emissive:Ie("#6a4b00"),emissiveIntensity:.18}),Te=new bn({color:725024,side:pn,transparent:!0,opacity:s?.62:.42,depthWrite:!1,toneMapped:!1});Te.userData.fixedOpacity=!0;let ve=new bn({color:16765786,alphaMap:_||null,transparent:!0,opacity:s?.62:.42,blending:Kn,depthWrite:!1,toneMapped:!1});ve.userData.fixedOpacity=!0;let Xe=new bn({color:6805247,alphaMap:_||null,transparent:!0,opacity:s?.62:.42,blending:Kn,depthWrite:!1,toneMapped:!1});Xe.userData.fixedOpacity=!0;let nt=new bn({color:16751164,alphaMap:_||null,transparent:!0,opacity:s?.62:.42,blending:Kn,depthWrite:!1,toneMapped:!1});nt.userData.fixedOpacity=!0;let et=new bn({color:3967999,alphaMap:_||null,transparent:!0,opacity:s?.6:.4,blending:Kn,depthWrite:!1,toneMapped:!1});et.userData.fixedOpacity=!0;let Qe=new bn({color:16731558,alphaMap:_||null,transparent:!0,opacity:s?.6:.4,blending:Kn,depthWrite:!1,toneMapped:!1});Qe.userData.fixedOpacity=!0;let Ce=new bn({color:16726843,alphaMap:_||null,transparent:!0,opacity:s?.55:.35,blending:Kn,depthWrite:!1,toneMapped:!1});Ce.userData.fixedOpacity=!0;let St=new bn({color:16765786,alphaMap:g||null,transparent:!0,opacity:s?.9:.7,blending:Kn,depthWrite:!1,toneMapped:!1});St.userData.fixedOpacity=!0;let ct=new bn({color:6805247,alphaMap:g||null,transparent:!0,opacity:s?.9:.7,blending:Kn,depthWrite:!1,toneMapped:!1});ct.userData.fixedOpacity=!0;let Qt=new Ke({color:Ie("#fff2a8"),roughness:.25,metalness:.05,emissive:Ie("#ffd35a"),emissiveIntensity:.55}),Vn=new Ke({color:Ie("#c7f3ff"),roughness:.18,metalness:.05,emissive:Ie("#47c9ff"),emissiveIntensity:.75}),Wt=new Ke({color:Ie("#f1f4fb"),roughness:.82,metalness:0}),gn=new Ke({color:Ie("#dbe2ef"),roughness:.9,metalness:0}),Nt=new Ke({color:Ie("#5d667a"),roughness:.7,metalness:0}),xn=new Ke({color:Ie("#f2c94c"),roughness:.58,metalness:.08,emissive:Ie("#6a4b00"),emissiveIntensity:.08,transparent:!0,opacity:.9}),yn=new Ke({color:Ie("#e04444"),roughness:.4,metalness:.05}),sn=new Ke({color:Ie("#7a4b2c"),roughness:.75,metalness:0}),cn=new Ke({color:Ie("#ffd6d6"),roughness:.12,metalness:0,emissive:Ie("#ffffff"),emissiveIntensity:.08,transparent:!0,opacity:.8}),ds=new Ke({color:Ie("#4bbf5a"),roughness:.7,metalness:0}),Wn=new Ke({color:Ie("#f4f4f4"),roughness:.22,metalness:.06,emissive:Ie("#ffd35a"),emissiveIntensity:.18}),bo=new ws({color:Ie("#67d6ff"),roughness:.05,metalness:0,transmission:.92,thickness:2,ior:1.25,clearcoat:.4,clearcoatRoughness:.1});bo.userData.fixedOpacity=!0;let Wl=new Ke({color:Ie("#0b6aa6"),roughness:.25,metalness:0,emissive:Ie("#2bbcff"),emissiveIntensity:.85}),Xl=new Ke({color:Ie("#e6e8ed"),roughness:.55,metalness:.18}),ql=new Ke({color:Ie("#c7f3ff"),roughness:.35,metalness:0,emissive:Ie("#47c9ff"),emissiveIntensity:.35}),br=new Ke({color:Ie("#ff9a3c"),roughness:.25,metalness:.1,emissive:Ie("#ff5a00"),emissiveIntensity:.74}),wo=new Ke({color:Ie("#3c8bff"),roughness:.25,metalness:.12,emissive:Ie("#2b4bff"),emissiveIntensity:.72}),Eo=new Ke({color:Ie("#f2c94c"),roughness:.3,metalness:.18,emissive:Ie("#6a4b00"),emissiveIntensity:.58}),Yl=new Ke({color:Ie("#c5c9d0"),roughness:.52,metalness:.18,emissive:Ie("#535861"),emissiveIntensity:.12}),To=new Ke({color:Ie("#dde1e8"),roughness:.38,metalness:.25,emissive:Ie("#5c6270"),emissiveIntensity:.1}),wr=new Ke({color:Ie("#6d727b"),roughness:.72,metalness:.12}),Ao=new Ke({color:Ie("#4d525a"),roughness:.9,metalness:.05}),Zl=new Ke({color:Ie("#e9d9c6"),roughness:.75,metalness:0}),Jl=new Ke({color:Ie("#d7c2aa"),roughness:.42,metalness:.05}),$l=new Ke({color:Ie("#6a4b00"),roughness:.85,metalness:0}),Kl=new Ke({color:Ie("#f4f4f4"),roughness:.25,metalness:0}),Co=new Ke({color:Ie("#0f0f12"),roughness:.85,metalness:0}),jl=new ws({color:Ie("#ff6b7a"),roughness:.22,metalness:.12,clearcoat:.6,clearcoatRoughness:.08,emissive:Ie("#b4002f"),emissiveIntensity:.6,flatShading:!0}),Ql=new Ke({color:Ie("#ff4da6"),roughness:.18,metalness:0,emissive:Ie("#ff1f7a"),emissiveIntensity:.85}),ec=new Ke({color:Ie("#2a0010"),roughness:.55,metalness:.1,emissive:Ie("#350013"),emissiveIntensity:.35,flatShading:!0}),tc=new Ke({color:Ie("#ff3b3b"),roughness:.15,metalness:.25,emissive:Ie("#550000"),emissiveIntensity:.25}),Io=new ws({color:Ie("#ffffff"),roughness:.06,metalness:0,transmission:.9,thickness:1.6,ior:1.3,clearcoat:.35,clearcoatRoughness:.1,transparent:!0,opacity:.9});Io.userData.fixedOpacity=!0;let nc=new Ke({color:Ie("#ff3b3b"),roughness:.25,metalness:.15,emissive:Ie("#ff1f1f"),emissiveIntensity:.65}),ic=new Ke({color:Ie("#2a0010"),roughness:.5,metalness:0}),Jh=new Ke({color:Ie("#1a1a1a"),roughness:.7,metalness:0}),sc=new Ke({color:Ie("#e6e8ed"),roughness:.55,metalness:.08}),rc=new Ke({color:Ie("#f2c94c"),roughness:.4,metalness:.15,emissive:Ie("#4a3400"),emissiveIntensity:.12}),Fn=new Ke({color:Ie("#2a2f3c"),roughness:.6,metalness:.2}),oc=new Ke({color:Ie("#2a2f3c"),roughness:.85,metalness:.12}),Ro=new Ke({color:Ie("#c7f3ff"),roughness:.18,metalness:.05,emissive:Ie("#47c9ff"),emissiveIntensity:.85}),ac=new Ke({color:Ie("#0b1020"),roughness:.75,metalness:.05,emissive:Ie("#67d6ff"),emissiveIntensity:.2,transparent:!0,opacity:.9}),$h=new Ke({color:Ie("#f7f0a6"),roughness:.65,metalness:0}),lc=new Ke({color:Ie("#2a2f3c"),roughness:.65,metalness:.18}),cc=new Ke({color:Ie("#e6e8ed"),roughness:.85,metalness:0}),hc=new Ke({color:Ie("#aab3c5"),roughness:.45,metalness:.35}),dc=new Ke({color:Ie("#0b1020"),roughness:.9,metalness:0,transparent:!0,opacity:.85}),Kh=Ie("#d4a456"),nf=(se,{stunned:re=0,isHit:oe=!1})=>{if(!se||!se.material||Array.isArray(se.material))return;let xe=se.material;if(!(xe.userData&&xe.userData.fixedOpacity)&&("opacity"in xe&&(xe.transparent=!0,xe.opacity=re>0?.65:1),"emissive"in xe)){let Me=Number.isFinite(se.userData.baseEmissiveIntensity)?se.userData.baseEmissiveIntensity:xe.emissiveIntensity||0;xe.emissiveIntensity=Me+(oe?.35:0)}},pt=(se,re=1.12)=>{let oe=new pe(se.geometry,Te);return oe.scale.set(re,re,re),oe.castShadow=!1,oe.receiveShadow=!1,oe.renderOrder=-1,se.add(oe),oe},Xn=(se,re,oe,xe=-2)=>{let Me=new pe(at,re);return Me.position.set(0,0,xe),Me.scale.set(oe,oe,1),Me.castShadow=!1,Me.receiveShadow=!1,Me.renderOrder=-2,se.add(Me),Me},Hi=new pe(C,O);Hi.castShadow=!s,Hi.receiveShadow=!1,a.add(Hi),pt(Hi,1.16);let Rn=new tn,Po=new pe(G,B);Po.castShadow=!s,Po.position.set(0,0,6.4),pt(Po,1.08);let Do=new pe(W,$);Do.castShadow=!s,Do.position.set(0,0,11),pt(Do,1.06);let Ns=new pe(J,Q);Ns.castShadow=!1,Ns.rotation.x=Math.PI/2,Ns.position.set(-8.2,.4,12.4),pt(Ns,1.04);let Lo=new pe(q,_e);Lo.castShadow=!1,Lo.rotation.x=Math.PI/2,Lo.position.set(-8.2,.4,13.3);let Uo=new tn;Uo.position.set(-1.8,-.6,13.1);let No=new pe(ae,de);No.castShadow=!s,No.position.set(7,.3,0);let Fo=new pe(Z,ue);Fo.castShadow=!s,Fo.position.set(15.4,.3,.4),Uo.add(No,Fo),pt(No,1.06),pt(Fo,1.08);let Oo=(se,re)=>{let oe=new pe(Se,Fn);return oe.castShadow=!1,oe.rotation.x=Math.PI/2,oe.position.set(se,re,12.2),oe},sf=Oo(-25,-17),rf=Oo(25,-17),of=Oo(-25,17),af=Oo(25,17),Fs=new pe(Se,ue);Fs.castShadow=!1,Fs.rotation.x=Math.PI/2,Fs.scale.set(1.2,1.2,1.2),Fs.position.set(23.2,-14.1,12.4);let Er=new pe(De,Fn);Er.castShadow=!1,Er.position.set(19,9.2,12.1);let jh=Er.clone();jh.position.y=10.8;let Qh=Er.clone();Qh.position.y=13.4,Xn(Rn,Xe,74,-14),Rn.userData.platter=Ns,Rn.userData.armPivot=Uo,Rn.userData.led=Fs,Rn.add(Po,Do,Ns,Lo,Uo,sf,rf,of,af,Fs,Er,jh,Qh),a.add(Rn);let qn=new pe(w,new Ke({color:Ie("#67d6ff"),transparent:!0,opacity:0,roughness:.3,metalness:0,emissive:Ie("#1a7cff"),emissiveIntensity:.6,side:Nn}));qn.position.set(e/2,t/2,-9.5),qn.visible=!1,a.add(qn);let _i=new Set([O,H,V,I,B,$,Q,de,ue,_e,Te,ve,Xe,nt,et,Qe,Ce,St,ct,Qt,Vn,Wt,gn,Nt,xn,yn,sn,cn,ds,Wn,bo,Wl,Xl,ql,br,wo,Eo,Yl,To,wr,Ao,Zl,Jl,$l,Kl,Co,jl,Ql,ec,tc,Io,nc,ic,Jh,sc,rc,Fn,oc,Ro,ac,$h,lc,cc,hc,dc,E,v,qn.material]),Tr=new Map,vi=new Map,Os=new Map,Bs=new Map,Ar=new Map,Cr=new Map,uc=new Map;function lf(se){let re=Tr.get(se);if(re)return re;re=new tn;let oe=new Ke({color:Kh.clone(),roughness:.7,metalness:0}),xe=new pe(L,oe);xe.castShadow=!s,xe.receiveShadow=!1,pt(xe,1.08),re.userData.body=xe;let Me=new pe(S,V);Me.castShadow=!s,Me.receiveShadow=!1,Me.scale.set(.5,.5,.5),Me.position.set(0,-14,6.6),pt(Me,1.05),re.userData.tab=Me;let je=new pe(M,I);je.castShadow=!1,je.receiveShadow=!1,je.scale.set(.5,.5,.5),je.position.set(0,-14,9.6),re.userData.slot=je;let Ge=new pe(D,_e);Ge.castShadow=!s,Ge.receiveShadow=!1,Ge.scale.set(.75,.75,.75),Ge.position.set(0,4,8.6),pt(Ge,1.12),re.userData.lock=Ge;let tt=new pe(k,Fn);tt.castShadow=!s,tt.receiveShadow=!1,tt.position.set(0,2,7.8),tt.rotation.z=.7,pt(tt,1.02);let ze=new pe(k,Fn);return ze.castShadow=!s,ze.receiveShadow=!1,ze.position.set(0,2,7.8),ze.rotation.z=-.7,pt(ze,1.02),re.add(xe,Me,je,Ge,tt,ze),a.add(re),Tr.set(se,re),re}function cf(){let se=vi.get("trash");if(se)return se;se=new tn;let re=new pe(be,Yl);re.castShadow=!s,pt(re,1.06);let oe=new pe(We,To);oe.castShadow=!s,oe.position.set(0,-11,0),pt(oe,1.06);let xe=new pe(He,Ao);xe.castShadow=!1,xe.position.set(0,0,0);let Me=new pe(me,To);Me.castShadow=!1,Me.position.set(0,-9.7,0),Me.rotation.x=Math.PI/2;let je=new pe(Le,wr);je.castShadow=!s,je.position.set(0,11.6,8.5),pt(je,1.08);for(let tt=0;tt<6;tt+=1){let ze=tt/6*Math.PI*2,dt=new pe($e,wr);dt.castShadow=!s,dt.position.set(Math.cos(ze)*10.5,0,Math.sin(ze)*10.5),dt.rotation.y=ze,se.add(dt)}for(let tt=0;tt<5;tt+=1){let ze=tt/5*Math.PI*2+.2,dt=new pe(Ye,Ao);dt.castShadow=!1,dt.position.set(Math.cos(ze)*9.5,-1.2,Math.sin(ze)*9.5),dt.rotation.y=ze,se.add(dt)}let Ge=new pe(Re,wr);return Ge.castShadow=!s,Ge.position.set(0,-13.5,7.5),se.add(xe,Me,Ge,je),se.add(re,oe),a.add(se),vi.set("trash",se),se}function hf(se){let re=vi.get(se);if(re)return re;re=new tn;let oe=[],xe=[],Me=[[-8,-6.2],[-8,6.2],[8,-6.2],[8,6.2]];for(let Ct=0;Ct<Me.length;Ct+=1){let[Ue,vt]=Me[Ct],qe=new pe(mn,oc);qe.castShadow=!s,qe.rotation.x=Math.PI/2,qe.rotation.y=Ue>0?-.38:.38,qe.rotation.z=vt>0?.22:-.22,qe.position.set(Ue,vt,-6.8),pt(qe,1.04),oe.push(qe);let Bt=new pe(nn,Fn);Bt.castShadow=!s,Bt.rotation.x=Math.PI/2,Bt.position.set(Ue,vt,-11.4),pt(Bt,1.03),xe.push(Bt),re.add(qe,Bt)}let je=new pe(ot,sc);je.castShadow=!s,pt(je,1.08);let Ge=new pe(Jt,rc);Ge.castShadow=!s,Ge.position.set(0,0,8),pt(Ge,1.08);let tt=new pe(ln,Fn);tt.castShadow=!s,tt.rotation.z=Math.PI/2,tt.position.set(9,0,10),pt(tt,1.08);let ze=new pe(os,Fn);ze.castShadow=!s,ze.rotation.z=Math.PI/2,ze.position.set(15.2,0,10),pt(ze,1.06);let dt=new pe(rs,Ro);dt.castShadow=!1,dt.position.set(5.8,-1.2,14),pt(dt,1.08);let Dt=new pe(Ee,Co);Dt.castShadow=!1,Dt.position.set(7.4,-1.2,15.4),Dt.scale.set(.8,.8,.8);let zt=new pe(gi,ac);zt.castShadow=!1,zt.position.set(-4.5,3.2,14.2),zt.rotation.z=-.18,pt(zt,1.03);let Ut=new pe(jt,_e);Ut.castShadow=!s,Ut.rotation.x=Math.PI/2,Ut.position.set(-8.6,-4.2,13.6);let Ht=new pe(zi,Ro);Ht.castShadow=!1,Ht.position.set(-8.6,-4.2,18.8);let Gt=Xe.clone();Gt.userData.fixedOpacity=!0,Gt.opacity=0,Gt.transparent=!0;let un=Xn(re,Gt,22,-4);return un.position.set(18.2,0,10),un.visible=!1,re.userData.muzzleGlow=un,re.userData.legs=oe,re.userData.foots=xe,re.add(je),re.add(Ge),re.add(tt),re.add(ze),re.add(dt),re.add(Dt),re.add(zt),re.add(Ut),re.add(Ht),a.add(re),vi.set(se,re),re}function df(se){let re=vi.get(se);if(re)return re;re=new tn;let oe=new pe(yi,lc);oe.castShadow=!s,pt(oe,1.08);let xe=new pe(as,cc);xe.castShadow=!1,xe.position.set(0,2.5,3.2),pt(xe,1.04);let Me=new pe(ls,hc);Me.castShadow=!s,Me.position.set(0,-6.5,3),pt(Me,1.04);let je=new pe(cs,dc);je.castShadow=!1,je.position.set(0,-6.5,4.2);let Ge=(zt,Ut,Ht=1)=>{let Gt=new pe(Us,Fn);return Gt.castShadow=!1,Gt.position.set(zt,Ut,4.35),Gt.scale.set(Ht,1,1),Gt},tt=Ge(-1,.8,.95),ze=Ge(-2.4,2.6,.7),dt=Ge(-1.8,4.3,.82),Dt=new pe(hs,_e);return Dt.castShadow=!s,Dt.position.set(7.2,-7.2,2.6),re.add(oe,xe,Me,je,Dt,tt,ze,dt),a.add(re),vi.set(se,re),re}function uf(se,re){let oe=Os.get(se);if(oe&&oe.userData.type===re)return oe;if(oe&&(ki(a,oe,_i),Os.delete(se)),oe=new tn,oe.userData.type=re,re==="regi-mite"){let xe=Zl.clone();xe.roughness=.68;let Me=new pe(ht,xe);Me.userData.baseEmissiveIntensity=0,Me.castShadow=!s,pt(Me,1.1),oe.userData.body=Me;let je=Jl.clone();je.roughness=.38;let Ge=new pe(ht,je);Ge.userData.baseEmissiveIntensity=0,Ge.castShadow=!s,Ge.position.set(0,-2,2),Ge.scale.set(.92,.86,.82),pt(Ge,1.1),oe.userData.shell=Ge;let tt=Ht=>{let Gt=new tn,un=new pe(ye,Kl.clone());un.castShadow=!s;let Ct=new pe(Ee,Co.clone());return Ct.castShadow=!s,Ct.position.set(0,0,2.2),Gt.add(un,Ct),Gt.position.set(Ht,-4,9.5),{eye:Gt,pupil:Ct}},ze=tt(-7),dt=tt(7),Dt=[],zt=$l.clone(),Ut=[[-14,8],[-6,10],[6,10],[14,8]];for(let Ht=0;Ht<Ut.length;Ht+=1){let[Gt,un]=Ut[Ht],Ct=new pe(ke,zt);Ct.castShadow=!s,Ct.position.set(Gt,un,-11),Dt.push(Ct),oe.add(Ct)}oe.userData.pupils=[ze.pupil,dt.pupil],oe.userData.legs=Dt,Xn(oe,ve,42,-14),oe.add(Me,Ge,ze.eye,dt.eye)}else if(re==="popup-gremlin"){let xe=new pe(ge,jl.clone());xe.userData.baseEmissiveIntensity=.6,xe.castShadow=!s,pt(xe,1.14),oe.userData.body=xe;let Me=new pe(R,Ql.clone());Me.userData.baseEmissiveIntensity=.85,Me.castShadow=!1,Me.position.set(0,0,1.5);let je=ec.clone(),Ge=[],tt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(let ze=0;ze<tt.length;ze+=1){let[dt,Dt,zt]=tt[ze],Ut=new pe(ne,je);Ut.userData.baseEmissiveIntensity=.35,Ut.castShadow=!s,Ut.scale.set(.55,.55,.55),Ut.position.set(dt*15.5,Dt*15.5,zt*8),Ut.rotation.set(ze*.4,ze*.25,ze*.3),Ge.push(Ut),oe.add(Ut)}oe.userData.core=Me,oe.userData.spikes=Ge,Xn(oe,Qe,54,-16),oe.add(xe,Me)}else if(re==="spy-dot"){let xe=new pe(te,tc.clone());xe.userData.baseEmissiveIntensity=.25,xe.castShadow=!s,pt(xe,1.12),oe.userData.body=xe;let Me=new pe(Ze,Io.clone());Me.userData.baseEmissiveIntensity=0,Me.castShadow=!1,Me.material&&(Me.material.depthWrite=!1),oe.userData.shell=Me;let je=new pe(lt,nc.clone());je.userData.baseEmissiveIntensity=.65,je.castShadow=!1,je.rotation.x=.55,je.position.set(0,0,3);let Ge=new pe(bt,ic.clone());Ge.castShadow=!1,Ge.position.set(0,0,11),oe.userData.pupil=Ge,oe.userData.ring=je,Xn(oe,Ce,46,-16),oe.add(xe,Me,je,Ge)}return a.add(oe),Os.set(se,oe),oe}function ff(se,re){let oe=Bs.get(se);if(oe&&oe.userData.type===re)return oe;if(oe&&(ki(a,oe,_i),Bs.delete(se)),oe=new tn,oe.userData.type=re,re==="apple"){let xe=new pe(ie,yn);xe.castShadow=!s,pt(xe,1.12);let Me=new pe(we,cn);Me.castShadow=!1,Me.position.set(-3.2,-4.2,6.4);let je=new pe(ee,sn);je.castShadow=!s,je.rotation.x=Math.PI/2,je.position.set(-.5,-9.2,7.2);let Ge=new pe(j,ds);Ge.castShadow=!s,Ge.position.set(4.2,-9.2,7),Ge.rotation.z=-.6,Ge.rotation.y=.5;let tt=new pe(fe,Wn);tt.castShadow=!s,tt.position.set(0,.6,8.8),pt(tt,1.08);let ze=new pe(Ae,Wn);ze.castShadow=!s,ze.position.set(0,.6,8.8),pt(ze,1.08),Xn(oe,Ce,34,-14),oe.add(xe,Me,je,Ge,tt,ze)}else if(re==="coolant"){let xe=new pe(gt,bo);xe.castShadow=!s,pt(xe,1.06);let Me=new pe(Et,Xl);Me.castShadow=!s,Me.position.set(0,-9.5,0),pt(Me,1.05);let je=new pe(P,Wl);je.castShadow=!1,je.position.set(0,1,0);let Ge=ze=>{let dt=new pe(ce,ql);return dt.castShadow=!1,dt.position.set(0,0,7.8),dt.rotation.z=ze,dt},tt=new tn;tt.add(Ge(0),Ge(Math.PI/2),Ge(Math.PI/4),Ge(-Math.PI/4)),Xn(oe,Xe,46,-14),oe.add(xe,Me,je,tt)}else if(re==="powerup-rapid"){let xe=new pe(st,br);xe.castShadow=!s,xe.rotation.z=Math.PI/2,pt(xe,1.06);let Me=new pe(y,br);Me.castShadow=!s,Me.position.set(-6.4,0,-1.2),Me.rotation.z=Math.PI/2,Me.scale.set(.9,.9,.9),pt(Me,1.04);let je=Me.clone();je.position.x=6.4;let Ge=new pe(z,Fn);Ge.castShadow=!1,Ge.position.set(-2.2,0,2.8),Ge.rotation.z=Math.PI/2;let tt=Ge.clone();tt.position.x=2.2;let ze=new pe(X,Fn);ze.castShadow=!s,ze.rotation.z=-Math.PI/2,ze.position.set(12.2,0,3.2),ze.scale.set(.72,.72,.72),pt(ze,1.03);let dt=nt.clone();dt.userData.fixedOpacity=!0,dt.opacity=s?.74:.56;let Dt=Xn(oe,dt,62,-14);Dt.userData.baseScale=62,oe.userData.pickupGlow=Dt,oe.add(xe,Me,je,Ge,tt,ze)}else if(re==="powerup-triple"){let xe=new pe(rt,wo);xe.castShadow=!s,pt(xe,1.06);let Me=(Gt,un)=>{let Ct=new pe(Y,wo);return Ct.castShadow=!s,Ct.rotation.z=Math.PI/2,Ct.position.set(Gt,un,3.6),pt(Ct,1.04),Ct},je=Me(-5.4,-2),Ge=Me(5.4,-2),tt=Me(0,6),ze=(Gt,un)=>{let Ct=new pe(he,Fn);return Ct.castShadow=!1,Ct.rotation.z=Math.PI/2,Ct.position.set(Gt+5.8,un,3.6),pt(Ct,1.02),Ct},dt=ze(-5.4,-2),Dt=ze(5.4,-2),zt=ze(0,6),Ut=et.clone();Ut.userData.fixedOpacity=!0,Ut.opacity=s?.74:.56;let Ht=Xn(oe,Ut,62,-14);Ht.userData.baseScale=62,oe.userData.pickupGlow=Ht,oe.add(xe,je,Ge,tt,dt,Dt,zt)}else if(re==="powerup-giant"){let xe=new pe(T,Eo);xe.castShadow=!s,pt(xe,1.06);let Me=new pe(Ve,Eo);Me.castShadow=!1,Me.position.set(0,-11.5,3.5),Me.rotation.x=Math.PI/2,Me.scale.set(1.05,1.05,1.05);let je=new tn;for(let ze=0;ze<3;ze+=1){let dt=ze/3*Math.PI*2+Math.PI/6,Dt=new pe(X,_e);Dt.castShadow=!s,Dt.position.set(Math.cos(dt)*6.5,-14.2,Math.sin(dt)*6.5),Dt.rotation.z=0,je.add(Dt)}let Ge=ve.clone();Ge.userData.fixedOpacity=!0,Ge.opacity=s?.76:.6;let tt=Xn(oe,Ge,68,-14);tt.userData.baseScale=68,oe.userData.pickupGlow=tt,oe.add(xe,Me,je)}else{let xe=new pe(st,br);xe.castShadow=!s,pt(xe,1.06),Xn(oe,ve,40,-14),oe.add(xe)}return a.add(oe),Bs.set(se,oe),oe}function pf(se){let re=Ar.get(se);if(re)return re;re=new pe(Fe,Qt),re.castShadow=!1,pt(re,1.08);let oe=new pe(ut,St);oe.position.set(0,0,-2),oe.castShadow=!1,oe.receiveShadow=!1,re.add(oe),re.userData.trail=oe;let xe=Xn(re,ve,20,-6);return re.userData.glow=xe,a.add(re),Ar.set(se,re),re}function mf(se){let re=Cr.get(se);if(re)return re;re=new tn;let oe=new pe(it,gn);oe.castShadow=!s,oe.receiveShadow=!1,oe.position.set(.9,-.8,.2),oe.rotation.z=-.16,pt(oe,1.05);let xe=new pe(ft,Wt);xe.castShadow=!s,xe.receiveShadow=!1,xe.position.set(0,0,.6),pt(xe,1.06);let Me=new pe(Oe,gn);Me.castShadow=!1,Me.position.set(5.4,-3.9,1.2),Me.rotation.z=.72;let je=new pe(le,xn);je.castShadow=!1,je.position.set(-3.7,-4,1.1),je.rotation.z=-.22;let Ge=(Dt,zt,Ut=1)=>{let Ht=new pe(K,Nt);return Ht.castShadow=!1,Ht.position.set(Dt,zt,1.15),Ht.scale.set(Ut,1,1),Ht},tt=Ge(-1.8,-.9,1),ze=Ge(-2.6,1.2,.84),dt=Ge(-1.4,3.2,.7);return re.add(oe,xe,Me,je,tt,ze,dt),a.add(re),Cr.set(se,re),uc.has(se)||uc.set(se,(Math.random()-.5)*.6),re}function ks(se,re,oe=!1){for(let[xe,Me]of se)re.has(xe)||(ki(a,Me,_i),se.delete(xe))}function gf(se,re,oe){var un,Ct,Ue,vt;let xe=(se==null?void 0:se.cpuHeat)>=90,Me=(se==null?void 0:se.ramPressure)>=60,je=(se==null?void 0:se.powerUp)==="giant",Ge=!!(se!=null&&se.isHit),tt="#f4f4f4",ze="#000000",dt=0;Ge?(ze="#ffffff",dt=.85):je?(tt="#f2c94c",ze="#6a4b00",dt=.22):xe?(tt="#ff4d4d",ze="#5a0000",dt=.28):Me&&(tt="#4aa3ff",ze="#003a7a",dt=.22),O.color.set(tt),O.emissive.set(ze),O.emissiveIntensity=dt;let zt=(je?48:32)/28;Hi.scale.set(zt,zt,zt);let Ut=((un=re==null?void 0:re.x)!=null?un:e/2)-((Ct=se==null?void 0:se.x)!=null?Ct:e/2),Ht=((Ue=re==null?void 0:re.y)!=null?Ue:t/2)-((vt=se==null?void 0:se.y)!=null?vt:t/2),Gt=Number.isFinite(oe)?oe:Math.atan2(Ht,Ut);Hi.rotation.z=Gt+Math.PI/2}function xf(se){var Ct;if(!se)return;let re=se.player||{x:e/2,y:t/2},oe=se.mousePos||{x:e/2,y:t/2},xe=se.aim&&Number.isFinite(se.aim.angle)?se.aim.angle:null;gf(re,oe,xe),Hi.position.set(re.x,re.y,24),Rn.position.set(e/2,t/2+40,0),Rn.position.set(320,280,0);let Me=cf();if(se.trash){let Ue=se.trash.x+16,vt=se.trash.y+18;Me.position.set(Ue,vt,0)}else Me.position.set(596,438,0);if(Me.scale.set(1.12,1.12,1.12),se.empExplosion&&Number.isFinite(se.totalTime)&&Number.isFinite(se.empExplosion.t0)){let Ue=se.totalTime-se.empExplosion.t0;if(Ue>=0&&Ue<=.6){let vt=ey(Ue/.6),qe=.4+vt*2.7;qn.visible=!0,qn.position.set(se.empExplosion.x,se.empExplosion.y,-9.6),qn.scale.set(qe,qe,1),qn.material.opacity=.85*(1-vt)}else qn.visible=!1}else qn.visible=!1;let je=new Set;for(let Ue of se.folderWalls||[]){let vt=Ue.id;je.add(vt);let qe=lf(vt),Bt=Ue.x+12,On=Ue.y+12;qe.position.set(Bt,On,0);let rn=Number.isFinite(Ue.hp)?Ue.hp:0,fn=rn>3?0:rn>2?1:rn>1?2:3,_n=fn===0?1:fn===1?.85:fn===2?.7:.55,Qn=qe.userData.body||null;Qn&&Qn.material&&Qn.material.color&&Qn.material.color.copy(Kh).multiplyScalar(_n);let wt=rn<=1;qe.scale.set(1,1,wt?.7:1)}ks(Tr,je);let Ge=new Set(["trash"]);for(let Ue of se.deployables||[]){let vt=Ue.id;if(Ge.add(vt),Ue.type==="watchdog"){let qe=hf(vt);qe.position.set(Ue.x+12,Ue.y+12,0);let Bt=Number.isFinite(Ue.aimDir)?Ue.aimDir:7,On=Math.PI/2-Bt*(Math.PI/4);qe.rotation.z=On;let rn=qe.userData.muzzleGlow||null;if(rn){let fn=.4+.6*Math.max(0,Math.sin((se.totalTime||0)*10+vt*3));rn.visible=!0,rn.material&&"opacity"in rn.material&&(rn.material.opacity=(s?.35:.12)+fn*(s?.25:.38)),rn.scale.set(1+fn*.25,1+fn*.25,1)}}else if(Ue.type==="sticky"){let qe=df(vt);qe.position.set(Ue.x+12,Ue.y+12,2),qe.rotation.z=-.2}}ks(vi,Ge);let tt=new Set;for(let Ue of se.enemies||[]){let vt=Ue.id;tt.add(vt);let qe=uf(vt,Ue.type);qe.position.set(Ue.x,Ue.y,6);let On=Number.isFinite(Ue.size)?Ue.size:Ue.type==="regi-mite"?64:Ue.type==="popup-gremlin"?36:(Ue.type==="spy-dot",48),rn=Ue.type==="regi-mite"?48:(Ue.type==="popup-gremlin",28),fn=On/rn;if(Ue.type==="popup-gremlin"){let wt=Number.isFinite(Ue.frame)?Ue.frame:0,Mi=Math.sin(wt*3)*4,ei=Math.sin(wt*5)*8*Math.PI/180,Gi=1+Math.sin(wt*4)*.15;qe.position.y+=Mi,qe.rotation.z=ei,qe.scale.setScalar(fn*Gi);let hi=qe.userData.body||null;hi&&(hi.rotation.x=Math.sin(wt*4.2)*.35,hi.rotation.y=Math.cos(wt*3.1)*.28,hi.rotation.z=Math.sin(wt*2.8)*.22);let Tn=qe.userData.core||null;Tn&&(Tn.rotation.z=wt*2.2,Tn.rotation.x=-Math.sin(wt*3.2)*.22);let Si=qe.userData.spikes;if(Array.isArray(Si))for(let zs=0;zs<Si.length;zs+=1){let fc=Si[zs];fc.rotation.x=wt*1.8+zs*.7,fc.rotation.y=wt*1.4+zs*.5,fc.rotation.z=wt*.9+zs*.6}}else if(Ue.type==="regi-mite"){let wt=Number.isFinite(Ue.frame)?Ue.frame:0,Mi=Math.sin(wt*.8)*1.5;qe.position.y+=Mi,qe.rotation.z=0,qe.scale.setScalar(fn);let ei=qe.userData.shell||null;ei&&(ei.position.z=2+Math.sin(wt*1.7)*.7);let Gi=qe.userData.legs;if(Array.isArray(Gi))for(let Tn=0;Tn<Gi.length;Tn+=1){let Si=Gi[Tn];Si.rotation.x=Math.sin(wt*5+Tn)*.45,Si.rotation.y=Math.cos(wt*4.1+Tn*1.3)*.35}let hi=qe.userData.pupils;if(Array.isArray(hi))for(let Tn=0;Tn<hi.length;Tn+=1){let Si=hi[Tn];Si.position.x=Math.sin(wt*2.5+Tn)*.65,Si.position.y=Math.cos(wt*2.1+Tn)*.5}}else if(Ue.type==="spy-dot"){qe.rotation.z=0,qe.scale.setScalar(fn);let wt=se.totalTime||0,Mi=qe.userData.pupil||null,ei=qe.userData.ring||null,Gi=qe.userData.shell||null,hi=Math.sin(wt*9)>.7?.25:1;Mi&&(Mi.scale.setScalar(hi),Mi.position.x=Math.sin(wt*2.6+vt)*.55,Mi.position.y=Math.cos(wt*2.1+vt)*.45),ei&&(ei.rotation.z=wt*1.7,ei.rotation.y=Math.sin(wt*3)*.35),Gi&&(Gi.rotation.z=wt*.55)}let _n=Number.isFinite(Ue.stunned)?Ue.stunned:0,Qn=!!Ue.isHit;qe.traverse(wt=>{wt.isMesh&&nf(wt,{stunned:_n,isHit:Qn})}),Ue.flipX?qe.scale.x=-Math.abs(qe.scale.x||1):qe.scale.x=Math.abs(qe.scale.x||1)}ks(Os,tt);let ze=se.totalTime||0;Rn.position.y=280+Math.sin(ze*1.2)*.9,Rn.rotation.z=Math.sin(ze*.9)*.012;let dt=Rn.userData.platter||null;dt&&(dt.rotation.z=ze*3.8);let Dt=Rn.userData.armPivot||null;Dt&&(Dt.rotation.z=-.34+Math.sin(ze*1.7)*.14);let zt=Rn.userData.led||null;zt&&zt.material&&"emissiveIntensity"in zt.material&&(zt.material.emissiveIntensity=.24+.36*Math.abs(Math.sin(ze*5.4))),Me.rotation.z=Math.sin(ze*1.6)*.03;let Ut=new Set;for(let Ue of se.pickups||[]){let vt=Ue.id;Ut.add(vt);let qe=ff(vt,Ue.type),Bt=se.totalTime||0,On=typeof Ue.type=="string"&&Ue.type.startsWith("powerup"),rn=Math.sin(Bt*(On?8:6))*(On?0:2),fn=On?1+Math.sin(Bt*10)*.12:1;qe.position.set(Ue.x,Ue.y+rn,6),qe.rotation.z=On?Bt*.6:Bt*.35,qe.scale.setScalar(fn);let _n=qe.userData.pickupGlow||null;if(_n&&_n.material&&"opacity"in _n.material){let Qn=s?.48:.38,wt=Math.abs(Math.sin(Bt*8+vt*.37));_n.material.opacity=Qn+wt*(s?.36:.52);let ei=(Number.isFinite(_n.userData.baseScale)?_n.userData.baseScale:58)*(1+wt*.08);_n.scale.set(ei,ei,1)}qe.rotation.x=Math.sin(Bt*1.7+vt)*.2,qe.rotation.y=Math.cos(Bt*1.3+vt)*.18,qe.position.z=6+Math.sin(Bt*2.2+vt)*.6}ks(Bs,Ut);let Ht=new Set;for(let Ue of se.projectiles||[]){let vt=Ue.id;Ht.add(vt);let qe=pf(vt);qe.position.set(Ue.x,Ue.y,10);let Bt=Number.isFinite(Ue.vx)?Ue.vx:0,On=Number.isFinite(Ue.vy)?Ue.vy:0,rn=Math.hypot(Bt,On);rn>.001&&(qe.rotation.z=Math.atan2(On,Bt));let fn=!!Ue.fromWatchdog;qe.material=fn?Vn:Qt;let _n=qe.userData.trail||null;if(_n){_n.material=fn?ct:St,_n.visible=rn>.15;let wt=Math.max(.8,Math.min(2.2,rn/5.8));_n.scale.set(wt,1,1)}let Qn=qe.userData.glow||null;Qn&&(Qn.material=fn?Xe:ve)}ks(Ar,Ht);let Gt=new Set,un=se.totalTime||0;for(let Ue of se.clutter||[]){let vt=Ue.id;Gt.add(vt);let qe=mf(vt),Bt=uc.get(vt)||0;qe.position.set(Ue.x,Ue.y,1),qe.rotation.z=Bt+Math.sin(un*2+vt%10)*.05}if(ks(Cr,Gt),o.render(a,l),s)try{let Ue=o.getContext();(Ct=Ue.finish)==null||Ct.call(Ue)}catch(Ue){}}function yf(se,re){o.setSize(se,re,!1),l.left=0,l.right=se,l.top=0,l.bottom=re,l.updateProjectionMatrix()}function _f(){var se,re,oe;for(let xe of Tr.values())ki(a,xe,_i);for(let xe of vi.values())ki(a,xe,_i);for(let xe of Os.values())ki(a,xe,_i);for(let xe of Bs.values())ki(a,xe,_i);for(let xe of Ar.values())ki(a,xe,_i);for(let xe of Cr.values())ki(a,xe,_i);Tr.clear(),vi.clear(),Os.clear(),Bs.clear(),Ar.clear(),Cr.clear(),a.remove(Hi),a.remove(Rn),a.remove(qn),a.remove(b),a.remove(A),C.dispose(),L.dispose(),U.dispose(),S.dispose(),M.dispose(),D.dispose(),k.dispose(),Fe.dispose(),at.dispose(),ut.dispose(),ft.dispose(),it.dispose(),K.dispose(),le.dispose(),Oe.dispose(),Je.dispose(),Be.dispose(),gt.dispose(),Et.dispose(),P.dispose(),ce.dispose(),ie.dispose(),j.dispose(),ee.dispose(),we.dispose(),fe.dispose(),Ae.dispose(),st.dispose(),rt.dispose(),T.dispose(),y.dispose(),z.dispose(),Y.dispose(),he.dispose(),X.dispose(),Ve.dispose(),be.dispose(),We.dispose(),He.dispose(),me.dispose(),Le.dispose(),$e.dispose(),Ye.dispose(),Re.dispose(),G.dispose(),W.dispose(),J.dispose(),q.dispose(),ae.dispose(),Z.dispose(),Se.dispose(),De.dispose(),ht.dispose(),N.dispose(),ye.dispose(),Ee.dispose(),ke.dispose(),ge.dispose(),R.dispose(),ne.dispose(),te.dispose(),Ze.dispose(),lt.dispose(),bt.dispose(),ot.dispose(),Jt.dispose(),ln.dispose(),mn.dispose(),nn.dispose(),rs.dispose(),jt.dispose(),zi.dispose(),gi.dispose(),os.dispose(),xi.dispose(),yi.dispose(),as.dispose(),ls.dispose(),cs.dispose(),hs.dispose(),Us.dispose(),w.dispose(),f.dispose(),O.dispose(),H.dispose(),V.dispose(),I.dispose(),B.dispose(),$.dispose(),Q.dispose(),de.dispose(),ue.dispose(),_e.dispose(),Te.dispose(),ve.dispose(),Xe.dispose(),nt.dispose(),et.dispose(),Qe.dispose(),Ce.dispose(),St.dispose(),ct.dispose(),Qt.dispose(),Vn.dispose(),Wt.dispose(),gn.dispose(),Nt.dispose(),xn.dispose(),yn.dispose(),sn.dispose(),cn.dispose(),ds.dispose(),Wn.dispose(),bo.dispose(),Wl.dispose(),Xl.dispose(),ql.dispose(),br.dispose(),wo.dispose(),Eo.dispose(),Yl.dispose(),To.dispose(),wr.dispose(),Ao.dispose(),Zl.dispose(),Jl.dispose(),$l.dispose(),Kl.dispose(),Co.dispose(),jl.dispose(),Ql.dispose(),ec.dispose(),tc.dispose(),Io.dispose(),nc.dispose(),ic.dispose(),Jh.dispose(),sc.dispose(),rc.dispose(),Fn.dispose(),oc.dispose(),Ro.dispose(),ac.dispose(),$h.dispose(),lc.dispose(),cc.dispose(),hc.dispose(),dc.dispose(),E.dispose(),v.dispose(),qn.material.dispose(),x&&((se=x.dispose)==null||se.call(x)),_&&((re=_.dispose)==null||re.call(_)),g&&((oe=g.dispose)==null||oe.call(g)),o.dispose()}return{render:xf,resize:yf,dispose:_f}}function qh({state:i,onInitFailed:e}){let t=An(null),n=An(null);return ti(()=>{let s=t.current;if(!s)return;let r=typeof navigator!="undefined"&&!!navigator.webdriver,o=null;try{o=ef({canvas:s,width:640,height:480,preserveDrawingBuffer:r})}catch(a){console.error("WebGL init failed",a),e==null||e(a);return}return n.current=o,()=>{if(n.current){try{n.current.dispose()}catch(a){}n.current=null}}},[]),ed(()=>{let s=n.current;s&&s.render(i)}),h.createElement("canvas",{ref:t,width:640,height:480,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})}var Yh=()=>({x:640/2,y:480/2+20,hp:5,maxHp:5,empCharge:100,dashEnergy:100,cpuHeat:0,ramPressure:0,isDashing:!1,isHit:!1,invincible:0,upgrades:[],powerUp:null,powerUpTimer:0});function ry(i){let e=i;for(;e<-Math.PI;)e+=Math.PI*2;for(;e>Math.PI;)e-=Math.PI*2;return e}function oy(i,e){let t=Math.atan2(e,i),n=Math.PI/4,s=ry(t-Math.PI/2),r=Math.round(-s/n)%8;return r<0&&(r+=8),r}function Zh(){let[i,e]=Tt(mt.MENU),[t,n]=Tt(Yh),[s,r]=Tt([]),[o,a]=Tt([]),[l,c]=Tt([]),[d,u]=Tt([]),[p,m]=Tt([]),[x,_]=Tt([]),[g,f]=Tt([]),[E,b]=Tt({x:640/2,y:480/2}),[v,A]=Tt({}),[C,L]=Tt(0),[U,S]=Tt(90),[M,D]=Tt(0),[k,G]=Tt(25),[W,J]=Tt(100),[q,ae]=Tt(0),[Z,Se]=Tt(100),[De,Fe]=Tt(""),[at,ut]=Tt(!1),[ft,it]=Tt(!1),[K,le]=Tt(null),Oe=An(null),Je=An(null),Be=An(null),gt=An(0),Et=An(0),P=An(0),ce=An(1e4),ie=An(0),j=An({x:1,y:0,angle:0}),ee=An(0),we=typeof navigator!="undefined"&&!!navigator.webdriver,[fe,Ae]=Tt(()=>{if(typeof window=="undefined")return!0;let R=new URLSearchParams(window.location.search).get("renderer");if(!R)return!0;let ne=String(R).toLowerCase();return!(ne==="dom"||ne==="2d")}),[st,rt]=Tt(!1),[T,y]=Tt(()=>({w:typeof window!="undefined"?window.innerWidth:1024,h:typeof window!="undefined"?window.innerHeight:768})),z=An(null);z.current={gameState:i,player:t,enemies:s,projectiles:o,pickups:l,folderWalls:d,deployables:p,clutter:x,popups:g,mousePos:E,keys:v,wave:C,waveTimer:U,totalTime:M,setupTimer:k,systemFolderHP:W,score:q,privacyScore:Z,isShooting:at,showHelp:ft,empExplosion:K},ti(()=>{Fe(Math.random().toString(36).substring(2,10).toUpperCase())},[]),ti(()=>{let R=()=>{y({w:window.innerWidth,h:window.innerHeight})};return window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[]),ti(()=>{let R=()=>{rt(!!document.fullscreenElement),y({w:window.innerWidth,h:window.innerHeight})};return document.addEventListener("fullscreenchange",R),()=>document.removeEventListener("fullscreenchange",R)},[]);let Y=Vi((R,ne)=>{let te=!1;R.type==="firewall"?te=ne==="deny":R.type==="fake-update"?te=ne==="later":R.type==="security-update"&&(te=ne==="accept"),te?(Se(Ze=>Math.min(100,Ze+8)),n(Ze=>({...Ze,ramPressure:Math.max(0,Ze.ramPressure-8)})),ae(Ze=>Ze+25)):n(Ze=>({...Ze,hp:Ze.hp-1})),f([])},[]),he=Vi(()=>{var ne,te;let R=Je.current;R&&(document.fullscreenElement?(ne=document.exitFullscreen)==null||ne.call(document):(te=R.requestFullscreen)==null||te.call(R))},[]),X=Vi(()=>{n(Yh()),r([]),a([]),c([]),_([]),f([]),u([]),m([]),L(0),S(90),D(0),G(25),ie.current=0,J(100),ae(0),Se(100),ut(!1),le(null),Et.current=0,P.current=3e3,ce.current=15e3,Fe(Math.random().toString(36).substring(2,10).toUpperCase()),e(mt.SETUP)},[]),Ve=Vi(R=>{n(ne=>({...ne,upgrades:[...ne.upgrades,R]})),L(3),S(90),e(mt.PLAYING)},[]);ti(()=>{let R=te=>{var lt;let Ze=te.key.toLowerCase();if(A(bt=>({...bt,[Ze]:!0})),Ze==="f"&&(te.preventDefault(),he()),Ze==="enter"){te.preventDefault();let bt=(lt=z.current)==null?void 0:lt.gameState;bt===mt.MENU?X():bt===mt.SETUP?(e(mt.PLAYING),L(1)):(bt===mt.GAMEOVER||bt===mt.WIN)&&X()}te.code==="Space"&&(te.preventDefault(),e(bt=>bt===mt.PLAYING?mt.PAUSED:bt===mt.PAUSED?mt.PLAYING:bt)),te.key==="F1"&&(te.preventDefault(),it(bt=>!bt)),(Ze==="q"||Ze==="e")&&f(bt=>{if(bt.length>0){let ot=bt[0],Jt;(ot.swapped?Ze==="q"?"e":"q":Ze)==="q"?ot.type==="firewall"?Jt="deny":ot.type==="fake-update"?Jt="later":ot.type==="security-update"&&(Jt="accept"):ot.type==="firewall"?Jt="allow":ot.type==="fake-update"?Jt="install":ot.type==="security-update"&&(Jt="reject");let mn=!1;return ot.type==="firewall"?mn=Jt==="deny":ot.type==="fake-update"?mn=Jt==="later":ot.type==="security-update"&&(mn=Jt==="accept"),mn?(Se(nn=>Math.min(100,nn+8)),n(nn=>({...nn,ramPressure:Math.max(0,nn.ramPressure-8)})),ae(nn=>nn+25)):n(nn=>({...nn,hp:nn.hp-1})),[]}return bt})},ne=te=>{A(Ze=>({...Ze,[te.key.toLowerCase()]:!1}))};return window.addEventListener("keydown",R),window.addEventListener("keyup",ne),()=>{window.removeEventListener("keydown",R),window.removeEventListener("keyup",ne)}},[X,he]);let be=Vi(R=>{if(!Oe.current)return;let ne=Oe.current.getBoundingClientRect(),te=640/ne.width,Ze=480/ne.height;b({x:(R.clientX-ne.left)*te,y:(R.clientY-ne.top)*Ze})},[]),We=Vi(()=>{var lt,bt,ot,Jt;let R=z.current,ne=(bt=(lt=R==null?void 0:R.player)==null?void 0:lt.x)!=null?bt:640/2,te=(Jt=(ot=R==null?void 0:R.player)==null?void 0:ot.y)!=null?Jt:480/2,Ze=Number.isFinite(R==null?void 0:R.totalTime)?R.totalTime:0;n(ln=>({...ln,empCharge:0})),r(ln=>ln.map(mn=>({...mn,stunned:120}))),le({x:ne,y:te,t0:Ze})},[]),He=Vi(R=>{let ne=z.current;if(!ne)return;let te=Math.max(0,Math.min(50,R)),Ze=ne.gameState;if(ne.popups.length>0&&f(B=>{if(B.length===0)return B;let $=B[0],de=(Number.isFinite($.countdown)?$.countdown:100)-te*.016;return de<=0?(n(ue=>({...ue,hp:ue.hp-1})),[]):[{...$,countdown:de}]}),Ze===mt.SETUP){ie.current+=te;let I=Math.floor(ie.current/1e3);I>0&&(ie.current-=I*1e3,G(B=>{let $=B-I;return $<=0?(e(mt.PLAYING),L(1),25):$}));return}if(Ze!==mt.PLAYING)return;let lt=ne.keys||{},bt=ne.mousePos||{x:640/2,y:480/2},ot=ne.player,Jt=ne.enemies,ln=ne.popups,mn=ne.folderWalls,nn=ne.deployables,rs=ne.clutter||[],jt=ne.wave,zi=ne.waveTimer,gi=ne.systemFolderHP,os=ne.isShooting,xi=bt.x-ot.x,yi=bt.y-ot.y,as=xi*xi+yi*yi,ls=10;if(as>ls*ls){let I=Math.sqrt(as)||1;j.current.x=xi/I,j.current.y=yi/I,j.current.angle=Math.atan2(yi,xi)}let cs=j.current.x,hs=j.current.y,Us=j.current.angle;Et.current-=te;let w=ot.cpuHeat>=90,O=ot.upgrades.includes("fan");if(n(I=>{let B=I.upgrades.includes("ram"),$=3.5,Q=B?.004:.008,de=1-I.ramPressure*Q,ue=$*Math.max(.2,de),_e=I.x,Te=I.y,ve=!1,Xe=I.dashEnergy;(lt.w||lt.arrowup)&&(Te-=ue),(lt.s||lt.arrowdown)&&(Te+=ue),(lt.a||lt.arrowleft)&&(_e-=ue),(lt.d||lt.arrowright)&&(_e+=ue),lt.shift&&I.dashEnergy>20?(_e+=cs*10,Te+=hs*10,ve=!0,Xe-=1.5):Xe=Math.min(100,I.dashEnergy+.2),_e=Math.max(16,Math.min(624,_e)),Te=Math.max(36,Math.min(464,Te));let nt=I.powerUp,et=I.powerUpTimer;return I.powerUp&&I.powerUpTimer>0&&(et-=1,et<=0&&(nt=null)),{...I,x:_e,y:Te,isDashing:ve,dashEnergy:Xe,empCharge:Math.min(100,I.empCharge+.15),cpuHeat:Math.max(0,I.cpuHeat-.04),invincible:Math.max(0,I.invincible-1),isHit:I.invincible>50,powerUp:nt,powerUpTimer:et}}),os&&Et.current<=0&&ln.length===0&&ot.powerUp!=="giant"&&!w){let I=cs,B=hs,$=8,Q=Us,de=14,ue=ot.x+I*de,_e=ot.y+B*de,Te=ot.powerUp==="triple";a(Te?Qe=>[...Qe,{x:ue,y:_e,vx:I*$,vy:B*$,id:Math.random()},{x:ue,y:_e,vx:Math.cos(Q-.2)*$,vy:Math.sin(Q-.2)*$,id:Math.random()},{x:ue,y:_e,vx:Math.cos(Q+.2)*$,vy:Math.sin(Q+.2)*$,id:Math.random()}]:et=>[...et,{x:ue,y:_e,vx:I*$,vy:B*$,id:Math.random()}]);let ve=ot.powerUp==="rapid"?60:180,Xe=ot.cpuHeat*1.5;Et.current=ve+Xe;let nt=ot.powerUp==="rapid"?4:6;O&&(nt*=.5),n(et=>({...et,cpuHeat:Math.min(100,et.cpuHeat+nt)}))}a(I=>{let B=[];for(let $ of I){let Q=$.x+$.vx,de=$.y+$.vy;Q>-10&&Q<650&&de>20&&de<490?B.push({...$,x:Q,y:de}):$.fromWatchdog||ae(_e=>_e-1)}return B}),r(I=>I.map(B=>{if(B.stunned>0)return{...B,stunned:B.stunned-1};let $=320,Q=280;if(B.type==="spy-dot"&&($=ot.x,Q=ot.y),B.type==="popup-gremlin"){let Qe=(B.bounceTimer||0)+1,Ce=B.bounceAngle||0,ct=((Number.isFinite(B.frame)?B.frame:0)+te*.012)%16;if(Qe>40+Math.random()*40)return Ce=Math.random()*Math.PI*2,{...B,x:B.x+Math.cos(Ce)*B.speed*2,y:B.y+Math.sin(Ce)*B.speed*2,bounceAngle:Ce,bounceTimer:0,frame:ct};let Qt=(320-B.x)*.003,Vn=(280-B.y)*.003,Wt=B.x+Math.cos(Ce)*B.speed+Qt,gn=B.y+Math.sin(Ce)*B.speed+Vn;return(Wt<10||Wt>630)&&(Ce=Math.PI-Ce),(gn<30||gn>470)&&(Ce=-Ce),Wt=Math.max(10,Math.min(630,Wt)),gn=Math.max(30,Math.min(470,gn)),{...B,x:Wt,y:gn,bounceAngle:Ce,bounceTimer:Qe,frame:ct,isHit:!1}}let de=nn.filter(Qe=>Qe.type==="sticky");if(de.length>0&&B.type!=="spy-dot"){let Qe=de.reduce((Ce,St)=>{let ct=Math.sqrt((B.x-St.x)**2+(B.y-St.y)**2);return ct<Ce.dist?{note:St,dist:ct}:Ce},{note:null,dist:1/0});Qe.dist<150&&($=Qe.note.x+12,Q=Qe.note.y+12)}let ue=$-B.x,_e=Q-B.y,Te=Math.sqrt(ue*ue+_e*_e)||1,ve=B.x+ue/Te*B.speed,Xe=B.y+_e/Te*B.speed;for(let Qe of mn){if(Qe.hp<=0)continue;if(Math.sqrt((ve-Qe.x-12)**2+(Xe-Qe.y-12)**2)<B.size/2+12){u(St=>St.map(ct=>ct.id===Qe.id?{...ct,hp:ct.hp-.01}:ct)),ve=B.x,Xe=B.y;break}}let nt=Number.isFinite(B.frame)?B.frame:0,et=nt;return B.type==="regi-mite"&&(et=(nt+te*.02)%16),B.type==="spy-dot"&&(et=(nt+te*.03)%16),{...B,x:ve,y:Xe,frame:et,isHit:!1}}));let H=nn.find(I=>I.type==="watchdog");if(H){let I=null,B=200;for(let $ of Jt){let Q=Math.sqrt(($.x-H.x-12)**2+($.y-H.y-12)**2);Q<B&&(B=Q,I=$)}if(I){let $=I.x-H.x-12,Q=I.y-H.y-12,de=oy($,Q);if(m(ue=>{let _e=!1,Te=ue.map(ve=>ve.id!==H.id||(Number.isFinite(ve.aimDir)?ve.aimDir:7)===de?ve:(_e=!0,{...ve,aimDir:de}));return _e?Te:ue}),Math.random()<.03){let ue=Math.sqrt($*$+Q*Q)||1;a(_e=>[..._e,{x:H.x+12,y:H.y+12,vx:$/ue*6,vy:Q/ue*6,id:Math.random(),fromWatchdog:!0}])}}else m(Q=>{let de=!1,ue=Q.map(_e=>_e.id!==H.id||(Number.isFinite(_e.aimDir)?_e.aimDir:7)===7?_e:(de=!0,{..._e,aimDir:7}));return de?ue:Q})}if(a(I=>{let B=[],$=rs.length,Q=596,de=438;for(let ue of I){let _e=!1;r(Te=>Te.map(ve=>{if(_e)return ve;if(Math.sqrt((ue.x-ve.x)**2+(ue.y-ve.y)**2)<ve.size/2+5){_e=!0;let nt=ve.hp-1;if(nt<=0){let et=Math.random(),Qe=null;return et<.2?Qe="apple":et<.28?Qe="coolant":et<.36?Qe="powerup-rapid":et<.44?Qe="powerup-triple":et<.5&&(Qe="powerup-giant"),Qe&&c(Ce=>[...Ce,{x:ve.x,y:ve.y,type:Qe,id:Math.random()}]),Math.random()<.7&&(_(Ce=>[...Ce,{x:ve.x+(Math.random()-.5)*30,y:ve.y+(Math.random()-.5)*30,id:Math.random()}]),n(Ce=>({...Ce,ramPressure:Math.min(100,Ce.ramPressure+8)}))),ae(Ce=>Ce+10),null}return{...ve,hp:nt,isHit:!0}}return ve}).filter(Boolean)),_e||Math.sqrt((ue.x-Q)**2+(ue.y-de)**2)<18&&(_e=!0,$>0&&($-=1,_(ve=>ve.length>0?ve.slice(0,-1):ve),n(ve=>({...ve,ramPressure:Math.max(0,ve.ramPressure-8)})))),_e||B.push(ue)}return B}),ot.invincible<=0){let I=ot.powerUp==="giant"?24:10;for(let B of Jt){if(B.stunned>0)continue;if(Math.sqrt((B.x-ot.x)**2+(B.y-ot.y)**2)<B.size/2+I){if(ot.powerUp==="giant")r(Q=>Q.map(de=>de.id!==B.id?de:(ae(ue=>ue+10),null)).filter(Boolean));else if(!ot.isDashing){n(Q=>({...Q,hp:Q.hp-1,invincible:60,isHit:!0})),ae(Q=>Q-5);break}}}}let V=0;for(let I of Jt){if(I.stunned>0)continue;Math.sqrt((I.x-320)**2+(I.y-280)**2)<35&&(V+=.05)}if(V>0&&(J(I=>Math.max(0,I-V)),ee.current+=V,ee.current>=1)){let I=Math.floor(ee.current);ee.current-=I,ae(B=>B-I)}if(c(I=>I.filter(B=>Math.sqrt((B.x-ot.x)**2+(B.y-ot.y)**2)<20?(B.type==="apple"?n(Q=>({...Q,hp:Math.min(Q.maxHp,Q.hp+1)})):B.type==="coolant"?n(Q=>({...Q,cpuHeat:Math.max(0,Q.cpuHeat-60)})):B.type==="powerup-rapid"?n(Q=>({...Q,powerUp:"rapid",powerUpTimer:480})):B.type==="powerup-triple"?n(Q=>({...Q,powerUp:"triple",powerUpTimer:480})):B.type==="powerup-giant"&&n(Q=>({...Q,powerUp:"giant",powerUpTimer:360})),!1):!0)),P.current-=te,P.current<=0){let I={1:3500,2:2800,3:2200},B=Math.min((90-zi)*15,800);P.current=Math.max(1200,(I[jt]||3e3)-B);let $=Math.floor(Math.random()*3),Q,de,ue=64;$===0?(Q=-ue/2,de=20+ue/2+Math.random()*(460-ue)):$===1?(Q=640+ue/2,de=20+ue/2+Math.random()*(460-ue)):(Q=ue/2+Math.random()*(640-ue),de=480+ue/2);let _e=.5+jt*.15+Math.random()*.2;if(r(Te=>[...Te,{id:Math.random(),type:"regi-mite",x:Q,y:de,hp:2,maxHp:2,size:64,flipX:$===0,speed:_e,frame:0,stunned:0}]),jt>=2&&Math.random()<.25){let Te=Math.floor(Math.random()*3),ve,Xe;Te===0?(ve=-15,Xe=100+Math.random()*200):Te===1?(ve=655,Xe=100+Math.random()*200):(ve=80+Math.random()*480,Xe=495),r(nt=>[...nt,{id:Math.random(),type:"popup-gremlin",x:ve,y:Xe,hp:2,maxHp:2,size:36,speed:2+Math.random()*.9,frame:Math.random()*16,stunned:0,bounceAngle:Math.random()*Math.PI*2,bounceTimer:0}])}if(jt>=2&&Math.random()<.15){let ve=Math.floor(Math.random()*3),Xe,nt;ve===0?(Xe=-28/2,nt=20+28/2+Math.random()*432):ve===1?(Xe=640+28/2,nt=20+28/2+Math.random()*432):(Xe=28/2+Math.random()*612,nt=480+28/2),r(et=>[...et,{id:Math.random(),type:"spy-dot",x:Xe,y:nt,hp:3,maxHp:3,size:28,speed:.42,frame:0,stunned:0}])}if(jt===3&&Math.random()<.3){let Te=Math.floor(Math.random()*3),ve,Xe;Te===0?(ve=-15,Xe=120+Math.random()*200):Te===1?(ve=655,Xe=120+Math.random()*200):(ve=100+Math.random()*440,Xe=495);let nt=Math.random()<.5?"regi-mite":"popup-gremlin";r(et=>[...et,{id:Math.random(),type:nt,x:ve,y:Xe,hp:2,maxHp:2,size:nt==="regi-mite"?64:36,flipX:Te===0,speed:nt==="popup-gremlin"?2.2+Math.random()*.9:.8+Math.random()*.4,frame:0,stunned:0,bounceAngle:Math.random()*Math.PI*2,bounceTimer:0}])}}if(ce.current-=te,ce.current<=0&&ln.length===0&&jt>=1){let I={1:18e3,2:14e3,3:1e4}[jt]||15e3,B=(90-zi)/90;ce.current=I*(1-B*.3);let $={1:.4,2:.55,3:.7}[jt]||.5;if(Math.random()<$){let Q=Math.random(),de=Q<.4?"firewall":Q<.7?"fake-update":"security-update",ue={1:.15,2:.4,3:.65}[jt]||.3;f([{id:Math.random(),type:de,x:80+Math.random()*360,y:50+Math.random()*250,swapped:Math.random()<ue,isLegit:de==="security-update",countdown:100}])}}S(I=>{let B=I-te/1e3;if(B<=0){let $=mn.length+nn.length,Q=Math.max(0,(11-$)*10);if(Q>0&&ae(de=>de+Q),jt===1)return L(2),90;if(jt===2)return e(mt.INTERMISSION),90;if(jt===3)return e(mt.WIN),0}return Math.max(0,B)}),D(I=>I+te/1e3),le(I=>!I||!Number.isFinite(I.t0)?I:ne.totalTime+te/1e3-I.t0>.6?null:I),(ot.hp<=0||gi<=0)&&e(mt.GAMEOVER)},[]);ti(()=>{if(we)return;if(i!==mt.PLAYING&&i!==mt.SETUP){Be.current&&cancelAnimationFrame(Be.current),Be.current=null;return}let R=!1,ne=te=>{if(R)return;let Ze=Math.min(te-gt.current,50);gt.current=te,He(Ze),Be.current=requestAnimationFrame(ne)};return gt.current=performance.now(),Be.current=requestAnimationFrame(ne),()=>{R=!0,Be.current&&cancelAnimationFrame(Be.current),Be.current=null}},[i,we,He]),ti(()=>(window.render_game_to_text=()=>{let R=z.current;if(!R)return null;let ne={mode:R.gameState,coords:{origin:"top-left",x:"right",y:"down",units:"px"},wave:R.wave,wave_timer_s:Number.isFinite(R.waveTimer)?R.waveTimer:0,score:R.score,system_folder_hp:R.systemFolderHP,player:{x:R.player.x,y:R.player.y,hp:R.player.hp,cpu_heat:R.player.cpuHeat,ram_pressure:R.player.ramPressure,emp:R.player.empCharge,power_up:R.player.powerUp},enemies:R.enemies.map(te=>({id:te.id,type:te.type,x:te.x,y:te.y,hp:te.hp,max_hp:te.maxHp,stunned:te.stunned,size:te.size})),pickups:R.pickups.map(te=>({id:te.id,type:te.type,x:te.x,y:te.y})),projectiles:R.projectiles.map(te=>({id:te.id,x:te.x,y:te.y,from_watchdog:!!te.fromWatchdog})),folder_walls:R.folderWalls.map(te=>({id:te.id,x:te.x,y:te.y,hp:te.hp})),deployables:R.deployables.map(te=>({id:te.id,type:te.type,x:te.x,y:te.y,aim_dir:te.aimDir})),popups:R.popups.map(te=>({id:te.id,type:te.type,swapped:te.swapped,countdown:te.countdown})),clutter_count:R.clutter.length};return JSON.stringify(ne)},window.advanceTime=async R=>{let ne=16.666666666666668,te=Math.max(1,Math.round(R/ne));for(let Ze=0;Ze<te;Ze+=1)Ir.flushSync(()=>He(ne))},()=>{delete window.render_game_to_text,delete window.advanceTime}),[He]);let me=we?1:1.15,Le=Math.min(T.w*.96/bi.width,T.h*.96/bi.height),$e=st?Math.max(1,Math.min(2.25,Le)):me,Ye=28,Re=bi.width*$e,ht=bi.height*$e,N=bi.screen.x*$e,ye=bi.screen.y*$e,Ee=640*$e,ke=480*$e,ge=Ye*$e;return h.createElement("div",{style:{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",background:"#1a1a2e",fontFamily:'"Press Start 2P", monospace',gap:16,padding:16,boxSizing:"border-box"}},h.createElement("div",{style:{textAlign:"center",marginTop:8,marginBottom:10}},h.createElement("div",{style:{fontSize:22,letterSpacing:2,color:"#fff"}},"DESKTOP WARS"),h.createElement("div",{style:{fontSize:9,marginTop:6,color:"#8af",opacity:.95}},"SYSTEM INTEGRITY")),h.createElement("div",{style:{display:"flex",alignItems:"flex-start",gap:20,flexWrap:"wrap",justifyContent:"center"}},h.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10}},h.createElement("div",{ref:Je,style:st?{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"radial-gradient(1000px 700px at 50% 30%, rgba(120,150,255,0.18), rgba(0,0,0,0))",padding:18,boxSizing:"border-box"}:void 0},h.createElement("div",{style:{width:Re,height:ht,position:"relative",filter:"drop-shadow(0 25px 80px rgba(0,0,0,0.6))"}},h.createElement("div",{style:{position:"absolute",left:N,top:ye,width:Ee,height:ke,overflow:"hidden",borderRadius:ge,background:"#000",zIndex:5}},h.createElement("div",{ref:Oe,onMouseMove:be,onMouseDown:R=>{R.preventDefault(),R.button===0&&ut(!0),R.button===2&&t.empCharge>=100&&We()},onMouseUp:R=>{R.button===0&&ut(!1)},onMouseLeave:()=>ut(!1),onContextMenu:R=>R.preventDefault(),style:{width:640,height:480,position:"relative",transform:`scale(${$e})`,transformOrigin:"top left",cursor:i===mt.PLAYING?"none":"default"}},fe?h.createElement(qh,{state:{mode:i,totalTime:M,player:t,aim:{dirX:j.current.x,dirY:j.current.y,angle:j.current.angle},enemies:s,pickups:l,folderWalls:d,deployables:p,clutter:x,projectiles:o,systemFolderHP:W,empExplosion:K,mousePos:E,trash:{x:580,y:420}},onInitFailed:()=>Ae(!1)}):h.createElement(Xt,{src:Ft.wallpaper,width:640,height:480,pixelated:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%"},fallback:h.createElement("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, #233257 0%, #121826 55%, #0b1020 100%)"}})}),!fe&&(i===mt.SETUP||i===mt.PLAYING||i===mt.PAUSED)&&h.createElement(h.Fragment,null,h.createElement(Xo,{x:320,y:280,hp:W}),d.map(R=>h.createElement(yc,{key:R.id,...R})),p.map(R=>h.createElement(gc,{key:R.id,...R})),(i===mt.PLAYING||i===mt.PAUSED)&&h.createElement(h.Fragment,null,x.map(R=>h.createElement(mc,{key:R.id,...R})),l.map(R=>h.createElement(_c,{key:R.id,...R})),s.map(R=>h.createElement(xc,{key:R.id,...R})),o.map(R=>h.createElement("div",{key:R.id,style:{position:"absolute",left:R.x-4,top:R.y-4,width:8,height:8,background:R.fromWatchdog?"#bff":"#fff2a8",borderRadius:"50%",boxShadow:R.fromWatchdog?"0 0 8px rgba(120,220,255,0.8)":"0 0 6px rgba(255,210,90,0.7)",pointerEvents:"none",zIndex:35}})),h.createElement(qo,{x:580,y:420,clutter:x}),h.createElement(vc,{...t,mousePos:E}))),h.createElement("div",{style:{position:"absolute",top:0,left:0,right:0,height:20,background:"linear-gradient(180deg, #f0f0f0 0%, #d8d8d8 100%)",borderBottom:"1px solid #999",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",fontSize:8,zIndex:100,color:"#111"}},h.createElement("div",{style:{display:"flex",gap:12,alignItems:"center"}},h.createElement("span",{onMouseDown:R=>{R.preventDefault(),R.stopPropagation()},onClick:R=>{R.preventDefault(),R.stopPropagation(),e(ne=>ne===mt.PLAYING?mt.PAUSED:ne===mt.PAUSED?mt.PLAYING:ne)},style:{fontWeight:"bold",cursor:i===mt.PLAYING||i===mt.PAUSED?"pointer":"default",opacity:i===mt.PLAYING||i===mt.PAUSED?1:.55,padding:"2px 4px",borderRadius:3,userSelect:"none"}},"Pause"),h.createElement("span",{onMouseDown:R=>{R.preventDefault(),R.stopPropagation()},onClick:R=>{R.preventDefault(),R.stopPropagation(),it(!0)},style:{cursor:"pointer",opacity:.95,padding:"2px 4px",borderRadius:3,userSelect:"none"}},"Help"),h.createElement("span",{onMouseDown:R=>{R.preventDefault(),R.stopPropagation()},onClick:R=>{R.preventDefault(),R.stopPropagation(),X()},style:{cursor:"pointer",opacity:.95,padding:"2px 4px",borderRadius:3,userSelect:"none"}},"Reset")),h.createElement("div",{style:{display:"flex",gap:10,alignItems:"center"}},h.createElement("div",{style:{display:"flex",gap:1,alignItems:"flex-end"}},[1,2,3,4,5].map(R=>h.createElement("div",{key:R,style:{width:3,height:2+R*2,background:t.hp>=R?"#222":"#bbb",borderRadius:1}}))),h.createElement("div",{style:{width:12,height:12,borderRadius:"50%",background:t.empCharge>=100?"#4a90d9":"#999",boxShadow:t.empCharge>=100?"0 0 6px #4af":"none"}}),h.createElement("div",{title:`CPU Heat: ${Math.floor(t.cpuHeat)}%`,style:{display:"flex",alignItems:"center",gap:4}},h.createElement(td,{size:16,hot:t.cpuHeat>=90}),h.createElement("div",{style:{width:42,height:10,background:"linear-gradient(180deg, #f4f4f4 0%, #d7d7d7 100%)",position:"relative",borderRadius:3,border:"1px solid #666",overflow:"hidden",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.25)"}},h.createElement("div",{style:{position:"absolute",left:3,top:1,fontSize:6,fontFamily:"monospace",color:"rgba(11,16,32,0.55)",textShadow:"0 1px 0 rgba(255,255,255,0.35)",letterSpacing:.3,pointerEvents:"none"}},"CPU"),h.createElement("div",{style:{width:`${t.cpuHeat}%`,height:"100%",background:t.cpuHeat>=90?"linear-gradient(90deg, #ff9a3c 0%, #ff4d4d 60%, #ff4d4d 100%)":t.cpuHeat>60?"linear-gradient(90deg, #ffd35a 0%, #ff9a3c 90%)":"linear-gradient(90deg, #ffd35a 0%, #f2c94c 100%)",boxShadow:t.cpuHeat>=90?"0 0 8px rgba(255,77,77,0.55)":"none",animation:t.cpuHeat>=90?"blink 0.2s infinite":"none"}}),h.createElement("div",{style:{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 7px)",opacity:.35,pointerEvents:"none"}}))),h.createElement("div",{title:`RAM Pressure: ${Math.floor(t.ramPressure)}%`,style:{display:"flex",alignItems:"center",gap:4}},h.createElement(nd,{size:16,high:t.ramPressure>=80}),h.createElement("div",{style:{width:42,height:10,background:"linear-gradient(180deg, #f4f4f4 0%, #d7d7d7 100%)",position:"relative",borderRadius:3,border:"1px solid #666",overflow:"hidden",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.25)"}},h.createElement("div",{style:{position:"absolute",left:3,top:1,fontSize:6,fontFamily:"monospace",color:"rgba(11,16,32,0.55)",textShadow:"0 1px 0 rgba(255,255,255,0.35)",letterSpacing:.3,pointerEvents:"none"}},"RAM"),h.createElement("div",{style:{width:`${t.ramPressure}%`,height:"100%",background:t.ramPressure>70?"linear-gradient(90deg, #ffd35a 0%, #ff4d4d 80%, #ff4d4d 100%)":t.ramPressure>40?"linear-gradient(90deg, #67d6ff 0%, #ffd35a 90%)":"linear-gradient(90deg, #67d6ff 0%, #4bbf5a 100%)",boxShadow:t.ramPressure>=80?"0 0 8px rgba(255,77,77,0.45)":"none"}}),h.createElement("div",{style:{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 7px)",opacity:.35,pointerEvents:"none"}}))),t.powerUp&&h.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:t.powerUp==="rapid"?"#f80":t.powerUp==="triple"?"#08f":"#fa0",color:"#fff",fontSize:5}},t.powerUp.toUpperCase()),t.upgrades.length>0&&h.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:t.upgrades.includes("ram")?"#0a0":"#08f",color:"#fff",fontSize:5,border:"1px solid #fff"}},t.upgrades.includes("ram")?"RAM":"FAN"),t.cpuHeat>=90&&h.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:"#f00",color:"#fff",fontSize:5,animation:"blink 0.3s infinite"}},"OVERHEAT"),t.ramPressure>=60&&h.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:t.ramPressure>=80?"#a00":"#a50",color:"#fff",fontSize:5,animation:t.ramPressure>=80?"blink 0.5s infinite":"none"}},t.ramPressure>=80?"SLOW":"RAM"),h.createElement("div",{style:{fontFamily:"monospace",fontSize:8,background:"#222",color:"#0f0",padding:"1px 6px",borderRadius:3,border:"1px solid #444"}},C>0?h.createElement(h.Fragment,null,h.createElement("span",{style:{color:"#888"}},"W",C)," ",h.createElement("span",{style:{color:U<=10?"#f55":"#0f0"}},String(Math.floor(U/60)).padStart(2,"0"),":",String(Math.floor(U%60)).padStart(2,"0"))):h.createElement("span",{style:{color:"#888"}},"--:--")))),i===mt.MENU&&h.createElement("div",{style:{position:"absolute",inset:0,top:20,display:"flex",alignItems:"center",justifyContent:"center"}},h.createElement(Zn,{title:"Desktop Wars",width:380},h.createElement("div",{style:{textAlign:"center"}},h.createElement("div",{style:{marginBottom:8,display:"flex",justifyContent:"center",animation:"idleBob 2.8s ease-in-out infinite"}},h.createElement("svg",{width:"48",height:"48",viewBox:"0 0 28 28","aria-label":"Cursor"},h.createElement("polygon",{points:"14,3 4,20 14,15 24,20",fill:"#fff",stroke:"#111",strokeWidth:"1.5",strokeLinejoin:"round"}))),h.createElement("h1",{style:{fontSize:14,marginBottom:6}},"SYSTEM INTEGRITY"),h.createElement("p",{style:{fontSize:6,color:"#666",marginBottom:20}},"Defend your desktop against malware!"),h.createElement("div",{style:{marginBottom:20}},h.createElement(Yn,{variant:"primary",onClick:X},"START GAME")),h.createElement("div",{style:{fontSize:6,color:"#888",lineHeight:1.8}},h.createElement("p",null,h.createElement("b",null,"WASD")," - Move | ",h.createElement("b",null,"Mouse")," - Aim | ",h.createElement("b",null,"Click")," - Shoot"),h.createElement("p",null,h.createElement("b",null,"Right Click")," - EMP | ",h.createElement("b",null,"Shift")," - Dash"),h.createElement("p",null,h.createElement("b",null,"Q/E")," - Popup buttons ",h.createElement("span",{style:{color:"#fa0"}},"(watch for swaps!)")))))),i===mt.SETUP&&h.createElement(Sc,{setupTimer:k,folderWalls:d,setFolderWalls:u,deployables:p,setDeployables:m,onStart:()=>{e(mt.PLAYING),L(1)},mousePos:E}),(i===mt.PLAYING||i===mt.PAUSED)&&h.createElement(h.Fragment,null,fe&&h.createElement(h.Fragment,null,h.createElement(Xo,{x:320,y:280,hp:W,showIcon:!1}),h.createElement(qo,{x:580,y:420,clutter:x,showIcon:!1}),h.createElement(pc,{...t,mousePos:E})),g.map(R=>h.createElement(Mc,{key:R.id,popup:R,onChoice:Y})),i===mt.PAUSED&&h.createElement("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:500}},h.createElement(Zn,{title:"PAUSED",width:220},h.createElement("div",{style:{textAlign:"center",padding:12}},h.createElement("p",{style:{fontSize:7,marginBottom:16}},"Press SPACE to continue"),h.createElement(Yn,{onClick:()=>e(mt.MENU)},"Quit to Menu"))))),i===mt.INTERMISSION&&h.createElement("div",{style:{position:"absolute",inset:0,top:20,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200}},h.createElement(Zn,{title:"Wave 2 Complete!",width:340},h.createElement("div",{style:{textAlign:"center",marginBottom:16}},h.createElement("p",{style:{fontSize:8,color:"#666"}},"Choose a hardware upgrade for Wave 3:")),h.createElement("div",{style:{display:"flex",gap:16,justifyContent:"center"}},h.createElement("div",{onClick:()=>Ve("ram"),style:{width:120,padding:14,background:"#fff",border:"3px solid #0a0",borderRadius:8,cursor:"pointer",textAlign:"center",transition:"transform 0.1s"},onMouseOver:R=>R.currentTarget.style.transform="scale(1.05)",onMouseOut:R=>R.currentTarget.style.transform="scale(1)"},h.createElement("div",{style:{marginBottom:8,display:"flex",justifyContent:"center"}},h.createElement("svg",{width:"40",height:"40",viewBox:"0 0 64 64","aria-label":"RAM Upgrade"},h.createElement("rect",{x:"14",y:"18",width:"36",height:"28",rx:"6",fill:"#2a2f3c",stroke:"#0a0",strokeWidth:"4"}),h.createElement("rect",{x:"20",y:"24",width:"24",height:"6",rx:"3",fill:"#0a0",opacity:"0.7"}),h.createElement("rect",{x:"20",y:"34",width:"18",height:"6",rx:"3",fill:"#0a0",opacity:"0.55"}),h.createElement("g",{fill:"#0a0",opacity:"0.9"},h.createElement("rect",{x:"10",y:"22",width:"4",height:"6",rx:"2"}),h.createElement("rect",{x:"10",y:"32",width:"4",height:"6",rx:"2"}),h.createElement("rect",{x:"50",y:"22",width:"4",height:"6",rx:"2"}),h.createElement("rect",{x:"50",y:"32",width:"4",height:"6",rx:"2"})))),h.createElement("div",{style:{fontSize:8,fontWeight:"bold",color:"#080"}},"RAM Upgrade"),h.createElement("div",{style:{fontSize:6,color:"#888",marginTop:4}},"50% less slowdown from clutter")),h.createElement("div",{onClick:()=>Ve("fan"),style:{width:120,padding:14,background:"#fff",border:"3px solid #08f",borderRadius:8,cursor:"pointer",textAlign:"center",transition:"transform 0.1s"},onMouseOver:R=>R.currentTarget.style.transform="scale(1.05)",onMouseOut:R=>R.currentTarget.style.transform="scale(1)"},h.createElement("div",{style:{marginBottom:8,display:"flex",justifyContent:"center"}},h.createElement("svg",{width:"40",height:"40",viewBox:"0 0 64 64","aria-label":"Cooling Fan"},h.createElement("circle",{cx:"32",cy:"32",r:"22",fill:"#2a2f3c",stroke:"#08f",strokeWidth:"4"}),h.createElement("circle",{cx:"32",cy:"32",r:"5",fill:"#08f"}),h.createElement("path",{d:"M32 10 C38 12, 42 18, 40 24 C38 29, 34 28, 32 26 Z",fill:"#08f",opacity:"0.75"}),h.createElement("path",{d:"M54 32 C52 38, 46 42, 40 40 C35 38, 36 34, 38 32 Z",fill:"#08f",opacity:"0.75"}),h.createElement("path",{d:"M32 54 C26 52, 22 46, 24 40 C26 35, 30 36, 32 38 Z",fill:"#08f",opacity:"0.75"}),h.createElement("path",{d:"M10 32 C12 26, 18 22, 24 24 C29 26, 28 30, 26 32 Z",fill:"#08f",opacity:"0.75"}))),h.createElement("div",{style:{fontSize:8,fontWeight:"bold",color:"#06c"}},"Cooling Fan"),h.createElement("div",{style:{fontSize:6,color:"#888",marginTop:4}},"50% less CPU heat buildup"))))),i===mt.GAMEOVER&&h.createElement("div",{style:{position:"absolute",inset:0,top:20,background:"rgba(80,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:300}},h.createElement(Zn,{title:"GAME OVER",width:300},h.createElement("div",{style:{textAlign:"center"}},h.createElement("div",{style:{marginBottom:10,display:"flex",justifyContent:"center"}},h.createElement("svg",{width:"42",height:"42",viewBox:"0 0 64 64","aria-label":"Game Over"},h.createElement("path",{d:"M32 6 L60 56 H4 Z",fill:"#d44",stroke:"#2a2a2a",strokeWidth:"4"}),h.createElement("rect",{x:"29",y:"22",width:"6",height:"18",rx:"3",fill:"#1a1a1a"}),h.createElement("rect",{x:"29",y:"44",width:"6",height:"6",rx:"3",fill:"#1a1a1a"}))),h.createElement("h2",{style:{fontSize:12,color:"#d44",marginBottom:10}},"SYSTEM FAILURE"),h.createElement("div",{style:{background:"#222",color:"#0f0",padding:12,borderRadius:4,marginBottom:20}},h.createElement("div",null,"SCORE: ",q)),h.createElement(Yn,{variant:"primary",onClick:X},"RESTART")))),i===mt.WIN&&h.createElement("div",{style:{position:"absolute",inset:0,top:20,background:"rgba(0,80,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:300}},h.createElement(Zn,{title:"YOU WIN!",width:300},h.createElement("div",{style:{textAlign:"center"}},h.createElement("div",{style:{marginBottom:10,display:"flex",justifyContent:"center"}},h.createElement("svg",{width:"42",height:"42",viewBox:"0 0 64 64","aria-label":"Victory"},h.createElement("path",{d:"M32 6 L39 22 L56 24 L43 36 L47 54 L32 44 L17 54 L21 36 L8 24 L25 22 Z",fill:"#f2c94c",stroke:"#2a2a2a",strokeWidth:"4",strokeLinejoin:"round"}))),h.createElement("div",{style:{background:"#f8f8f8",padding:14,borderRadius:6,marginBottom:16}},h.createElement("div",{style:{fontSize:9}},"Score: ",h.createElement("span",{style:{color:"#4a4",fontWeight:"bold"}},q))),h.createElement(Yn,{variant:"primary",onClick:X},"Play Again")))),ft&&h.createElement("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:500}},h.createElement(Zn,{title:"Help",width:350},h.createElement("div",{style:{fontSize:7,lineHeight:1.8}},h.createElement("p",null,h.createElement("b",null,"WASD")," - Move cursor"),h.createElement("p",null,h.createElement("b",null,"Mouse")," - Aim crosshair"),h.createElement("p",null,h.createElement("b",null,"Left Click")," - Shoot"),h.createElement("p",null,h.createElement("b",null,"Right Click")," - EMP (stuns all)"),h.createElement("p",null,h.createElement("b",null,"Shift")," - Dash"),h.createElement("p",{style:{color:"#4a4"}},h.createElement("b",null,"Q")," - Safe popup choice"),h.createElement("p",{style:{color:"#a44"}},h.createElement("b",null,"E")," - Risky popup choice"),h.createElement("div",{style:{marginTop:10,borderTop:"1px solid #ccc",paddingTop:10}},h.createElement("p",null,h.createElement("b",null,"Power-ups:")),h.createElement("p",null,"Rapid Fire | Triple Shot | Giant Mode"))),h.createElement("div",{style:{marginTop:14,textAlign:"center"}},h.createElement(Yn,{onClick:()=>it(!1)},"Close (F1)")))),h.createElement("div",{style:{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",pointerEvents:"none",zIndex:80}}))),h.createElement("div",{style:{position:"absolute",left:N+Ee+52,top:ye+4,width:Math.max(0,Re-(N+Ee)-68),height:ke-8,padding:10,boxSizing:"border-box",color:"#fff",fontSize:6.6,lineHeight:1.6,background:"transparent",border:"none",zIndex:30,overflow:"hidden",pointerEvents:"none",textShadow:"0 2px 10px rgba(0,0,0,0.9)"}},h.createElement("div",{style:{fontSize:9,marginBottom:8,color:"#8af"}},"CONTROLS"),h.createElement("div",{style:{marginBottom:10,display:"grid",gridTemplateColumns:"auto auto",columnGap:12,rowGap:2,lineHeight:1.55}},h.createElement("div",null,"WASD / Arrows - Move"),h.createElement("div",null,"Click - Shoot"),h.createElement("div",null,"Mouse - Aim"),h.createElement("div",null,"Right Click - EMP"),h.createElement("div",null,"Shift - Dash"),h.createElement("div",null,"Space - Pause"),h.createElement("div",null,"Q/E - Popups"),h.createElement("div",null,"F - Fullscreen")),h.createElement("div",{style:{fontSize:9,marginBottom:6,color:"#fa0"}},"ENEMIES"),h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:4,marginBottom:10,lineHeight:1.6}},h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(id,{size:18})),h.createElement("span",null,"Regi-Mite")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(sd,{size:18})),h.createElement("span",null,"Gremlin")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(rd,{size:18})),h.createElement("span",null,"Spy-Dot"))),h.createElement("div",{style:{fontSize:9,marginBottom:6,color:"#5f5"}},"POWER-UPS"),h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:4,marginBottom:10,lineHeight:1.6}},h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Rr,{size:18})),h.createElement("span",null,"Heal")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(ko,{size:18})),h.createElement("span",null,"Coolant")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(zo,{size:18})),h.createElement("span",null,"Rapid")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Ho,{size:18})),h.createElement("span",null,"Triple")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Go,{size:18})),h.createElement("span",null,"Giant"))),h.createElement("div",{style:{fontSize:9,marginBottom:6,color:"#8af"}},"DEPLOYABLES"),h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:4,lineHeight:1.6}},h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Vo,{size:18})),h.createElement("span",null,"Wall")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Hs,{size:18})),h.createElement("span",null,"Watchdog")),h.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement("span",{style:{width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.22)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},h.createElement(Gs,{size:18})),h.createElement("span",null,"Floppy Disk")))),h.createElement(Xt,{src:Ft.crtMonitor,alt:"CRT Monitor",width:bi.width,height:bi.height,pixelated:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:20}}))))),h.createElement("div",{style:{display:"flex",gap:30,background:"linear-gradient(180deg, #2a2a3c 0%, #1a1a2a 100%)",borderRadius:12,padding:"12px 24px",color:"#ccc",fontSize:8,boxShadow:"0 10px 40px rgba(0,0,0,0.4)"}},h.createElement("div",{style:{flex:1}},h.createElement("div",{style:{fontSize:9,color:"#8af",marginBottom:8}},"MISSION"),h.createElement("div",{style:{fontSize:7,lineHeight:1.8}},"Defend your desktop! Protect the ",h.createElement("span",{style:{color:"#fa0"}},"System Folder")," in the center from malware.")),h.createElement("div",{style:{flex:1}},h.createElement("div",{style:{fontSize:9,color:"#f55",marginBottom:8}},"RESOURCES"),h.createElement("div",{style:{fontSize:7,lineHeight:2}},h.createElement("div",null,h.createElement("span",{style:{color:"#faa"}},"CPU")," - Overheats when shooting; Coolant helps"),h.createElement("div",null,h.createElement("span",{style:{color:"#ffa"}},"RAM")," - Clutter slows you down; shoot Trash to clear"))),h.createElement("div",{style:{flex:1}},h.createElement("div",{style:{fontSize:9,color:"#f8f",marginBottom:8}},"DARK PATTERNS"),h.createElement("div",{style:{fontSize:7,lineHeight:2}},h.createElement("div",null,"Firewall - ",h.createElement("span",{style:{color:"#5f5"}},"Deny")," is correct"),h.createElement("div",null,"Fake Update - ",h.createElement("span",{style:{color:"#5f5"}},"Later")," is correct"),h.createElement("div",null,"Security Patch - ",h.createElement("span",{style:{color:"#5f5"}},"Install")," is correct"),h.createElement("div",{style:{color:"#fa0",marginTop:4}},"Warning: Q/E buttons can swap.")))),h.createElement("style",null,`
	        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
	        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
	        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
	        @keyframes wobble { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
	        @keyframes idleBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
	      `))}var tf=document.getElementById("root");if(!tf)throw new Error("Missing #root element");Ir.createRoot(tf).render(h.createElement(Zh,null));})();
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
