(()=>{var m=globalThis.React;if(!m)throw new Error("React wurde nicht gefunden. Stelle sicher, dass `react.production.min.js` vor `build/app.js` geladen wird.");var{useCallback:Wi,useEffect:jn,useLayoutEffect:xh,useMemo:So,useRef:vn,useState:bt}=m;var vr=globalThis.ReactDOM;if(!vr)throw new Error("ReactDOM wurde nicht gefunden. Stelle sicher, dass `react-dom.production.min.js` vor `build/app.js` geladen wird.");var bi={width:976,height:734,screen:{x:87,y:90,width:640,height:480}};var Dt={cursor:"assets/sprites/fighter-a.png",crtMonitor:"assets/svg/crt-monitor.svg",wallpaper:"assets/sprites/wallpaper.png",systemFolder:"assets/sprites/system-folder.png",folderWall:"assets/sprites/folder-wall.png",trash:"assets/sprites/trash.png",clutter:"assets/sprites/clutter.png",enemyRegiMite:"assets/sprites/enemy-regi-mite.png",enemyPopupGremlin:"assets/sprites/enemy-popup-gremlin.png",enemySpyDot:"assets/sprites/enemy-spy-dot.png",pickupApple:"assets/sprites/pickup-apple.png",pickupCoolant:"assets/sprites/pickup-coolant.png",powerupRapid:"assets/sprites/powerup-rapid.png",powerupTriple:"assets/sprites/powerup-triple.png",powerupGiant:"assets/sprites/powerup-giant.png",deployableWatchdog:"assets/sprites/deployable-watchdog.png",deployableSticky:"assets/sprites/deployable-sticky.png"};function Bn({onClick:i,children:e,disabled:t=!1,variant:n="default"}){return m.createElement("button",{onClick:i,disabled:t,style:{padding:"6px 16px",fontSize:8,fontFamily:'"Press Start 2P", monospace',background:n==="primary"?"linear-gradient(180deg, #5a5 0%, #494 100%)":"linear-gradient(180deg, #eee 0%, #ccc 100%)",border:"2px solid",borderColor:n==="primary"?"#373 #252 #252 #373":"#aaa #777 #777 #aaa",borderRadius:4,cursor:t?"not-allowed":"pointer",color:n==="primary"?"#fff":"#333",opacity:t?.5:1}},e)}function Tn({size:i=16,viewBox:e="0 0 64 64",children:t,style:n}){return m.createElement("svg",{width:i,height:i,viewBox:e,style:{display:"block",...n},xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},t)}function yh({size:i=16,hot:e=!1,style:t}){let n=e?"#ff4d4d":"#f2c94c",s=e?"#ff9a3c":"#ffd35a";return m.createElement(Tn,{size:i,style:t},Array.from({length:4}).map((r,o)=>m.createElement("g",{key:o},m.createElement("rect",{x:12+o*10,y:6,width:6,height:10,rx:2,fill:"#aab3c5",opacity:"0.9"}),m.createElement("rect",{x:12+o*10,y:48,width:6,height:10,rx:2,fill:"#aab3c5",opacity:"0.9"}),m.createElement("rect",{x:6,y:12+o*10,width:10,height:6,rx:2,fill:"#aab3c5",opacity:"0.9"}),m.createElement("rect",{x:48,y:12+o*10,width:10,height:6,rx:2,fill:"#aab3c5",opacity:"0.9"}))),m.createElement("rect",{x:"16",y:"16",width:"32",height:"32",rx:"6",fill:"#2a2f3c",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("rect",{x:"22",y:"22",width:"20",height:"20",rx:"5",fill:n,stroke:"#0b1020",strokeWidth:"3"}),m.createElement("path",{d:"M32 24 L28 32 L34 32 L30 40",fill:"none",stroke:s,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}))}function _h({size:i=16,high:e=!1,style:t}){let n=e?"#ff4d4d":"#67d6ff";return m.createElement(Tn,{size:i,style:t},m.createElement("rect",{x:"10",y:"20",width:"44",height:"24",rx:"5",fill:"#2a2f3c",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("rect",{x:"16",y:"26",width:"10",height:"12",rx:"2",fill:n,opacity:"0.9"}),m.createElement("rect",{x:"28",y:"26",width:"10",height:"12",rx:"2",fill:n,opacity:"0.75"}),m.createElement("rect",{x:"40",y:"26",width:"8",height:"12",rx:"2",fill:n,opacity:"0.6"}),m.createElement("rect",{x:"28",y:"42",width:"8",height:"3",rx:"1",fill:"#0b1020",opacity:"0.7"}),Array.from({length:6}).map((s,r)=>m.createElement("rect",{key:r,x:16+r*6,y:46,width:4,height:6,rx:1,fill:"#f2c94c",opacity:"0.9"})))}function vh({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("rect",{x:"12",y:"18",width:"40",height:"28",rx:"7",fill:"#e9d9c6",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("rect",{x:"16",y:"20",width:"32",height:"12",rx:"6",fill:"#d7c2aa",opacity:"0.9"}),m.createElement("circle",{cx:"26",cy:"32",r:"4",fill:"#f4f4f4",stroke:"#0b1020",strokeWidth:"2"}),m.createElement("circle",{cx:"38",cy:"32",r:"4",fill:"#f4f4f4",stroke:"#0b1020",strokeWidth:"2"}),m.createElement("circle",{cx:"26",cy:"32",r:"2",fill:"#0b1020"}),m.createElement("circle",{cx:"38",cy:"32",r:"2",fill:"#0b1020"}),m.createElement("rect",{x:"18",y:"44",width:"4",height:"10",rx:"2",fill:"#6a4b00"}),m.createElement("rect",{x:"28",y:"46",width:"4",height:"8",rx:"2",fill:"#6a4b00"}),m.createElement("rect",{x:"36",y:"46",width:"4",height:"8",rx:"2",fill:"#6a4b00"}),m.createElement("rect",{x:"46",y:"44",width:"4",height:"10",rx:"2",fill:"#6a4b00"}))}function Mh({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("path",{d:"M32 10 L44 18 L54 32 L44 46 L32 54 L20 46 L10 32 L20 18 Z",fill:"#ff6b7a",stroke:"#0b1020",strokeWidth:"4",strokeLinejoin:"round"}),m.createElement("circle",{cx:"32",cy:"32",r:"6",fill:"#ff4da6",stroke:"#0b1020",strokeWidth:"3"}),m.createElement("path",{d:"M18 20 L14 16 M46 20 L50 16 M18 44 L14 48 M46 44 L50 48",stroke:"#2a0010",strokeWidth:"4",strokeLinecap:"round"}))}function Sh({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("circle",{cx:"32",cy:"32",r:"18",fill:"#ff3b3b",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("circle",{cx:"32",cy:"32",r:"12",fill:"none",stroke:"#ff1f1f",strokeWidth:"4",opacity:"0.85"}),m.createElement("circle",{cx:"32",cy:"32",r:"5",fill:"#2a0010"}),m.createElement("circle",{cx:"30",cy:"30",r:"2",fill:"#f4f4f4",opacity:"0.7"}))}function Mr({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("circle",{cx:"32",cy:"36",r:"18",fill:"#e04444",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("rect",{x:"30",y:"12",width:"4",height:"12",rx:"2",fill:"#6a4b00"}),m.createElement("path",{d:"M34 18 C44 12, 48 22, 40 26 C36 28, 34 24, 34 18 Z",fill:"#4bbf5a",stroke:"#0b1020",strokeWidth:"2",strokeLinejoin:"round"}),m.createElement("circle",{cx:"26",cy:"30",r:"3",fill:"#ffd6d6",opacity:"0.7"}))}function bo({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("rect",{x:"22",y:"10",width:"20",height:"10",rx:"3",fill:"#e6e8ed",stroke:"#0b1020",strokeWidth:"3"}),m.createElement("rect",{x:"18",y:"18",width:"28",height:"34",rx:"8",fill:"#67d6ff",opacity:"0.8",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("path",{d:"M32 24 V46 M22 35 H42 M26 28 L38 42 M38 28 L26 42",stroke:"#c7f3ff",strokeWidth:"3.5",strokeLinecap:"round",opacity:"0.9"}))}function wo({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("rect",{x:"18",y:"22",width:"28",height:"20",rx:"10",fill:"#ff9a3c",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("rect",{x:"20",y:"26",width:"6",height:"12",rx:"3",fill:"#2a2f3c",opacity:"0.9"}),m.createElement("rect",{x:"38",y:"26",width:"6",height:"12",rx:"3",fill:"#2a2f3c",opacity:"0.9"}),m.createElement("path",{d:"M26 18 L18 22 L26 26 Z",fill:"#ff9a3c",stroke:"#0b1020",strokeWidth:"3",strokeLinejoin:"round"}),m.createElement("path",{d:"M38 18 L46 22 L38 26 Z",fill:"#ff9a3c",stroke:"#0b1020",strokeWidth:"3",strokeLinejoin:"round"}))}function Eo({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("rect",{x:"18",y:"24",width:"28",height:"18",rx:"5",fill:"#3c8bff",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("rect",{x:"18",y:"16",width:"10",height:"12",rx:"5",fill:"#3c8bff",stroke:"#0b1020",strokeWidth:"3"}),m.createElement("rect",{x:"36",y:"16",width:"10",height:"12",rx:"5",fill:"#3c8bff",stroke:"#0b1020",strokeWidth:"3"}),m.createElement("rect",{x:"27",y:"10",width:"10",height:"14",rx:"5",fill:"#3c8bff",stroke:"#0b1020",strokeWidth:"3"}))}function To({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("path",{d:"M32 10 C44 16, 52 20, 52 30 C52 46, 40 54, 32 58 C24 54, 12 46, 12 30 C12 20, 20 16, 32 10 Z",fill:"#f2c94c",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("path",{d:"M22 18 L26 12 L32 18 L38 12 L42 18",fill:"none",stroke:"#6a4b00",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}))}function Ao({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("path",{d:"M12 22h16l6 6h18v22H12z",fill:"#d4a456",stroke:"#0b1020",strokeWidth:"4",strokeLinejoin:"round"}),m.createElement("path",{d:"M12 22h18l4 4H12z",fill:"#e8bc6a",opacity:"0.9"}),m.createElement("path",{d:"M18 44 L26 36 L32 42 L40 34",stroke:"#6a4b00",strokeWidth:"3",opacity:"0.65",strokeLinecap:"round"}))}function Ls({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("circle",{cx:"32",cy:"38",r:"16",fill:"#e6e8ed",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("rect",{x:"20",y:"20",width:"24",height:"14",rx:"5",fill:"#f2c94c",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("rect",{x:"38",y:"26",width:"16",height:"6",rx:"3",fill:"#2a2f3c",stroke:"#0b1020",strokeWidth:"3"}),m.createElement("circle",{cx:"28",cy:"27",r:"3",fill:"#2a2f3c"}))}function Us({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("rect",{x:"14",y:"12",width:"36",height:"40",rx:"6",fill:"#2a2f3c",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("rect",{x:"18",y:"16",width:"28",height:"16",rx:"4",fill:"#e6e8ed",stroke:"#0b1020",strokeWidth:"3"}),m.createElement("rect",{x:"18",y:"36",width:"28",height:"10",rx:"3",fill:"#aab3c5",stroke:"#0b1020",strokeWidth:"3"}),m.createElement("rect",{x:"26",y:"40",width:"12",height:"6",rx:"2",fill:"#0b1020",opacity:"0.85"}),m.createElement("rect",{x:"42",y:"40",width:"5",height:"5",rx:"1",fill:"#f2c94c"}))}function bh({size:i=16,style:e}){return m.createElement(Tn,{size:i,style:e},m.createElement("circle",{cx:"32",cy:"34",r:"22",fill:"#f8f8f8",stroke:"#0b1020",strokeWidth:"4"}),m.createElement("rect",{x:"26",y:"6",width:"12",height:"10",rx:"3",fill:"#ff4d4d",stroke:"#0b1020",strokeWidth:"3"}),m.createElement("line",{x1:"32",y1:"34",x2:"32",y2:"20",stroke:"#ff4d4d",strokeWidth:"4",strokeLinecap:"round"}),m.createElement("line",{x1:"32",y1:"34",x2:"44",y2:"40",stroke:"#ff4d4d",strokeWidth:"4",strokeLinecap:"round"}))}function kn({title:i,width:e=300,children:t,x:n,y:s}){return m.createElement("div",{style:{position:n!==void 0?"absolute":"relative",left:n,top:s,width:e,background:"#f4f4f4",color:"#111",border:"2px solid #444",borderRadius:6,boxShadow:"6px 6px 0 rgba(0,0,0,0.25)",overflow:"hidden"}},m.createElement("div",{style:{height:18,background:"linear-gradient(180deg, #f0f0f0 0%, #d2d2d2 100%)",display:"flex",alignItems:"center",padding:"0 6px",gap:6}},m.createElement("div",{style:{width:10,height:10,background:"#e55",border:"1px solid #b33",borderRadius:2}}),m.createElement("span",{style:{fontSize:8,color:"#111",fontWeight:"bold"}},i)),m.createElement("div",{style:{padding:10}},t))}var wh=new Map;function Ht({src:i,alt:e="",width:t,height:n=t,style:s,pixelated:r=!0,fallback:o=null,...a}){let[l,c]=bt(()=>i?wh.get(i)!==!1:!1);return!i||!l?o:m.createElement("img",{src:i,alt:e,width:t,height:n,draggable:!1,onError:()=>{wh.set(i,!1),c(!1)},style:{imageRendering:r?"pixelated":void 0,...s},...a})}var ut={MENU:"menu",SETUP:"setup",PLAYING:"playing",PAUSED:"paused",INTERMISSION:"intermission",GAMEOVER:"gameover",WIN:"win"};function Ul({x:i,y:e,empCharge:t,invincible:n,mousePos:s,powerUp:r,cpuHeat:o,ramPressure:a,isHit:l}){let c=o>=90,h=a>=60,d=r==="giant",f=c?"rgba(255,100,100,0.8)":"rgba(255,255,255,0.7)",p=c?"rgba(255,100,100,0.7)":"rgba(255,255,255,0.5)",x=null;r==="rapid"?x="#f80":r==="triple"?x="#08f":r==="giant"&&(x="#fa0");let y="none";return l?y="brightness(2.0)":d?y="drop-shadow(0 0 10px rgba(255, 215, 0, 0.7))":c?y="drop-shadow(0 0 8px rgba(255, 80, 80, 0.65))":h&&(y="drop-shadow(0 0 6px rgba(70, 160, 255, 0.6))"),m.createElement(m.Fragment,null,m.createElement("div",{style:{position:"absolute",left:s.x-14,top:s.y-14,width:28,height:28,pointerEvents:"none",zIndex:60,filter:y}},m.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28"},m.createElement("circle",{cx:"14",cy:"14",r:"11",fill:"none",stroke:p,strokeWidth:"2"}),m.createElement("circle",{cx:"14",cy:"14",r:"4",fill:"none",stroke:f,strokeWidth:"2"}),m.createElement("line",{x1:"14",y1:"0",x2:"14",y2:"7",stroke:f,strokeWidth:"2"}),m.createElement("line",{x1:"14",y1:"21",x2:"14",y2:"28",stroke:f,strokeWidth:"2"}),m.createElement("line",{x1:"0",y1:"14",x2:"7",y2:"14",stroke:f,strokeWidth:"2"}),m.createElement("line",{x1:"21",y1:"14",x2:"28",y2:"14",stroke:f,strokeWidth:"2"}),m.createElement("circle",{cx:"14",cy:"14",r:"2",fill:c?"#f00":"#f44"}))),m.createElement("svg",{style:{position:"absolute",left:0,top:0,width:640,height:480,pointerEvents:"none",zIndex:45}},m.createElement("line",{x1:i,y1:e,x2:s.x,y2:s.y,stroke:"rgba(255,255,255,0.10)",strokeWidth:"1",strokeDasharray:"6,4"})),t>=100&&m.createElement("div",{style:{position:"absolute",left:Math.round(i-16-8),top:Math.round(e-16-8),width:48,height:48,border:"3px solid rgba(100, 200, 255, 0.9)",borderRadius:"50%",animation:"pulse 1s infinite",pointerEvents:"none",zIndex:49,boxSizing:"border-box",filter:"drop-shadow(0 0 10px rgba(100,200,255,0.35))"}}),r&&m.createElement("div",{style:{position:"absolute",left:i-24,top:e-16-18,fontSize:8,color:"#fff",background:x,padding:"2px 6px",borderRadius:4,fontWeight:"bold",pointerEvents:"none",zIndex:55,whiteSpace:"nowrap",boxShadow:"0 6px 18px rgba(0,0,0,0.35)"}},r==="rapid"?"RAPID":r==="triple"?"TRIPLE":"GIANT"),n>0&&m.createElement("div",{style:{position:"absolute",left:i-20,top:e-20,width:40,height:40,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.12)",pointerEvents:"none",zIndex:44}}))}function Nl({x:i,y:e}){return m.createElement("div",{style:{position:"absolute",left:i-14,top:e-14,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,opacity:.85,pointerEvents:"none",animation:"wobble 2s infinite"}},m.createElement(Ht,{src:Dt.clutter,width:18,height:18,style:{width:18,height:18},fallback:m.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18"},m.createElement("path",{d:"M4 2h7l3 3v11H4z",fill:"#f3f6ff",stroke:"#6b778c",strokeWidth:"1"}),m.createElement("path",{d:"M11 2v4h4",fill:"none",stroke:"#6b778c",strokeWidth:"1"}),m.createElement("line",{x1:"6",y1:"8",x2:"13",y2:"8",stroke:"#6b778c",strokeWidth:"1"}),m.createElement("line",{x1:"6",y1:"11",x2:"13",y2:"11",stroke:"#6b778c",strokeWidth:"1"}))}))}var Co=new Map;function Eh({extra:i,gaps:e}){if(!Number.isFinite(i)||i<=0||e<=0)return{margin:0,spacing:0};let t=Math.min(32,Math.floor(i/e));for(let n=0;n<=t;n+=1){let s=i-e*n;if(s<0)break;if(s%2===0)return{margin:s/2,spacing:n}}return{margin:0,spacing:0}}function wi({src:i,width:e,height:t=e,frameWidth:n,frameHeight:s=n,columns:r,rows:o,frameIndex:a=0,marginX:l=0,marginY:c=0,spacingX:h=0,spacingY:d=0,pixelated:f=!0,style:p,fallback:x=null,alt:y=""}){let[g,u]=bt(()=>i?Co.get(i)!==!1:!1),[E,S]=bt(null);jn(()=>{if(!i)return;if(Co.get(i)===!1){u(!1);return}let ht=!1,nt=new Image;return nt.onload=()=>{ht||(Co.set(i,!0),S({width:nt.naturalWidth,height:nt.naturalHeight}),u(!0))},nt.onerror=()=>{ht||(Co.set(i,!1),u(!1))},nt.src=i,()=>{ht=!0}},[i]);let v=Math.max(1,r!=null?r:1),A=Math.max(1,o!=null?o:1),C=Math.max(1,n!=null?n:1),L=Math.max(1,s!=null?s:1),U=v*C,b=A*L,M=So(()=>{if(l!==0||h!==0||!E)return null;let ht=v-1,nt=E.width-U,K=Eh({extra:nt,gaps:ht});return U+ht*K.spacing+K.margin*2!==E.width?null:K},[E,v,U,l,h]),D=So(()=>{if(c!==0||d!==0||!E)return null;let ht=A-1,nt=E.height-b,K=Eh({extra:nt,gaps:ht});return b+ht*K.spacing+K.margin*2!==E.height?null:K},[E,A,b,c,d]),k=M?M.margin:l,G=M?M.spacing:h,W=D?D.margin:c,J=D?D.spacing:d,X=So(()=>E||{width:U+(v-1)*G+k*2,height:b+(A-1)*J+W*2},[E,v,A,U,b,G,J,k,W]),oe=Math.max(0,Math.floor(a)),Z=oe%v,Me=Math.floor(oe/v)%A,Ie=e/C,Ue=t/L,st=k+Z*(C+G),dt=W+Me*(L+J);return!i||!g?x:m.createElement("div",{"aria-label":y,style:{position:"relative",width:e,height:t,overflow:"hidden",...p}},m.createElement("img",{src:i,alt:"",draggable:!1,style:{position:"absolute",left:-st*Ie,top:-dt*Ue,width:X.width*Ie,height:X.height*Ue,imageRendering:f?"pixelated":void 0,userSelect:"none",pointerEvents:"none"}}))}function Fl({type:i,x:e,y:t,aimDir:n=7}){let s=i==="watchdog"?Dt.deployableWatchdog:i==="sticky"?Dt.deployableSticky:null,r=i==="watchdog"?64:24,o=i==="watchdog"?64:22,a="drop-shadow(0 2px 4px rgba(0,0,0,0.4))",l=Number.isFinite(n)?Math.max(0,Math.min(7,Math.floor(n))):0;return m.createElement("div",{style:{position:"absolute",left:e+12-r/2,top:t+12-r/2,width:r,height:r,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,pointerEvents:"none"}},i==="watchdog"&&m.createElement("div",{style:{width:o,height:o,filter:a}},m.createElement(wi,{src:s,width:o,height:o,frameWidth:44,frameHeight:44,columns:4,rows:2,marginX:10,marginY:10,spacingX:20,spacingY:20,frameIndex:l,fallback:m.createElement(Ht,{src:s,width:o,height:o,style:{width:o,height:o},fallback:m.createElement(Ls,{size:o,style:{filter:a}})})})),i==="sticky"&&m.createElement(Ht,{src:s,width:o,height:o,style:{width:o,height:o,filter:a},fallback:m.createElement(Us,{size:o,style:{filter:a}})}))}function Ol({type:i,x:e,y:t,size:n,stunned:s,isHit:r,frame:o,flipX:a=!1,hp:l,maxHp:c}){let h=i==="regi-mite"?Dt.enemyRegiMite:i==="popup-gremlin"?Dt.enemyPopupGremlin:i==="spy-dot"?Dt.enemySpyDot:null,d={position:"absolute",left:e-n/2,top:t-n/2,width:n,height:n,opacity:s>0?.5:1,filter:r?"brightness(2)":"none",pointerEvents:"none"},f=Number.isFinite(c)?Math.max(1,Math.min(8,Math.round(c))):0,p=Number.isFinite(l)?Math.max(0,Math.min(f,Math.round(l))):0,x=f>1,y=i==="regi-mite"?"#ffd35a":i==="popup-gremlin"?"#ff4da6":"#ff3b3b";if(i==="regi-mite"){let g=Number.isFinite(o)?o:0,u=Math.floor(g)%16;return m.createElement("div",{style:d},x&&m.createElement("div",{style:{position:"absolute",left:"50%",top:-8,transform:"translateX(-50%)",display:"flex",gap:2,padding:2,background:"rgba(11,16,32,0.55)",borderRadius:3,border:"1px solid rgba(255,255,255,0.18)"}},Array.from({length:f}).map((E,S)=>m.createElement("div",{key:S,style:{width:6,height:4,borderRadius:2,background:S<p?y:"#0b1020",opacity:S<p?.95:.25}}))),m.createElement("div",{style:{width:n,height:n,transform:a?"scaleX(-1)":void 0,transformOrigin:"center"}},m.createElement(wi,{src:h,width:n,height:n,frameWidth:32,frameHeight:32,columns:4,rows:4,marginX:16,marginY:16,spacingX:32,spacingY:32,frameIndex:u,fallback:m.createElement(Ht,{src:h,width:n,height:n,style:{width:n,height:n},fallback:m.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 100%)",border:"2px solid #888",borderRadius:3}},m.createElement("div",{style:{height:5,background:"#889",borderRadius:"2px 2px 0 0"}}),m.createElement("div",{style:{display:"flex",justifyContent:"center",gap:3,marginTop:3}},m.createElement("div",{style:{width:4,height:4,background:"#333",borderRadius:"50%"}}),m.createElement("div",{style:{width:4,height:4,background:"#333",borderRadius:"50%"}})))})})))}if(i==="popup-gremlin"){let g=Number.isFinite(o)?o:0,u=Math.sin(g*3)*4,E=Math.sin(g*5)*8,S=Math.floor(g)%16;return m.createElement("div",{style:{...d,transform:`translateY(${u}px) rotate(${E}deg) scale(${1+Math.sin(g*4)*.15})`}},x&&m.createElement("div",{style:{position:"absolute",left:"50%",top:-8,transform:"translateX(-50%)",display:"flex",gap:2,padding:2,background:"rgba(11,16,32,0.55)",borderRadius:3,border:"1px solid rgba(255,255,255,0.18)"}},Array.from({length:f}).map((v,A)=>m.createElement("div",{key:A,style:{width:6,height:4,borderRadius:2,background:A<p?y:"#0b1020",opacity:A<p?.95:.25}}))),m.createElement(wi,{src:h,width:n,height:n,frameWidth:32,frameHeight:32,columns:4,rows:4,marginX:16,marginY:16,spacingX:32,spacingY:32,frameIndex:S,fallback:m.createElement(Ht,{src:h,width:n,height:n,style:{width:n,height:n},fallback:m.createElement("div",{style:{width:"100%",height:"100%",background:"linear-gradient(180deg, #ffe0e0 0%, #ffb0b0 100%)",border:"2px solid #d66",borderRadius:3,boxShadow:"0 0 8px rgba(255,100,100,0.5)"}},m.createElement("div",{style:{display:"flex",justifyContent:"center",gap:4,marginTop:3}},m.createElement("div",{style:{width:5,height:5,background:"#800",borderRadius:"50%",transform:`rotate(${g*20}deg)`}}),m.createElement("div",{style:{width:5,height:5,background:"#800",borderRadius:"50%",transform:`rotate(${-g*20}deg)`}})),m.createElement("div",{style:{width:10,height:5,margin:"2px auto",background:"#800",borderRadius:"0 0 6px 6px"}}))})}))}if(i==="spy-dot"){let g=Number.isFinite(o)?o:0,u=Math.floor(g)%16;return m.createElement("div",{style:{...d,animation:"blink 0.7s infinite"}},x&&m.createElement("div",{style:{position:"absolute",left:"50%",top:-8,transform:"translateX(-50%)",display:"flex",gap:2,padding:2,background:"rgba(11,16,32,0.55)",borderRadius:3,border:"1px solid rgba(255,255,255,0.18)"}},Array.from({length:f}).map((E,S)=>m.createElement("div",{key:S,style:{width:6,height:4,borderRadius:2,background:S<p?y:"#0b1020",opacity:S<p?.95:.25}}))),m.createElement(wi,{src:h,width:n,height:n,frameWidth:32,frameHeight:32,columns:4,rows:4,marginX:16,marginY:16,spacingX:32,spacingY:32,frameIndex:u,fallback:m.createElement(Ht,{src:h,width:n,height:n,style:{width:n,height:n},fallback:m.createElement("div",{style:{width:"100%",height:"100%",background:"#f00",borderRadius:"50%",boxShadow:"0 0 6px #f00"}})})}))}return null}function Bl({x:i,y:e,hp:t}){let n=t>3?0:t>2?1:t>1?2:3;return m.createElement("div",{style:{position:"absolute",left:i,top:e,width:24,height:24,pointerEvents:"none"}},m.createElement(wi,{src:Dt.folderWall,width:24,height:24,frameWidth:32,frameHeight:32,columns:4,rows:1,marginX:16,marginY:16,spacingX:32,frameIndex:n,fallback:m.createElement(Ht,{src:Dt.folderWall,width:24,height:24,style:{width:24,height:24},fallback:m.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},m.createElement("rect",{x:"2",y:"5",width:"20",height:"17",rx:"2",fill:"#d4a456",stroke:"#a07030",strokeWidth:"1"}),m.createElement("rect",{x:"2",y:"5",width:"9",height:"4",fill:"#e8bc6a",stroke:"#a07030",strokeWidth:"0.5"}),n>=1&&m.createElement("line",{x1:"8",y1:"10",x2:"18",y2:"20",stroke:"#804020",strokeWidth:"1"}),n>=2&&m.createElement("line",{x1:"4",y1:"14",x2:"12",y2:"20",stroke:"#804020",strokeWidth:"0.5"}),n>=3&&m.createElement("line",{x1:"14",y1:"8",x2:"20",y2:"16",stroke:"#804020",strokeWidth:"0.5"}))})}),m.createElement("div",{style:{position:"absolute",bottom:-4,left:2,width:20,height:3,background:"#333",borderRadius:1}},m.createElement("div",{style:{width:`${t/4*100}%`,height:"100%",background:t>2?"#4a4":"#e44",borderRadius:1}})))}function Od({type:i,size:e}){return i==="apple"?m.createElement(Mr,{size:e}):i==="coolant"?m.createElement(bo,{size:e}):i==="powerup-rapid"?m.createElement(wo,{size:e}):i==="powerup-triple"?m.createElement(Eo,{size:e}):i==="powerup-giant"?m.createElement(To,{size:e}):m.createElement(Mr,{size:e})}function kl({x:i,y:e,type:t}){let n={apple:{},coolant:{},"powerup-rapid":{glow:"#ff0"},"powerup-triple":{glow:"#4af"},"powerup-giant":{glow:"#fa0"}},s=n[t]||n.apple,r=t&&t.startsWith("powerup"),o=t==="apple"?Dt.pickupApple:t==="coolant"?Dt.pickupCoolant:t==="powerup-rapid"?Dt.powerupRapid:t==="powerup-triple"?Dt.powerupTriple:t==="powerup-giant"?Dt.powerupGiant:null,a=22;return m.createElement("div",{style:{position:"absolute",left:i-14,top:e-14,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,animation:r?"pulse 0.6s infinite":"wobble 0.8s infinite",filter:s.glow?`drop-shadow(0 0 10px ${s.glow})`:"none",pointerEvents:"none"}},m.createElement(Ht,{src:o,width:a,height:a,style:{width:a,height:a},fallback:m.createElement(Od,{type:t,size:a})}))}function zl({x:i,y:e,hp:t,isHit:n,empCharge:s,invincible:r,mousePos:o,powerUp:a,cpuHeat:l,ramPressure:c}){let d=Math.atan2(o.y-e,o.x-i)*180/Math.PI,f=a==="giant",p=f?48:32,x=l>=90,y=c>=60,g="none",u="#fff";return n?g="brightness(2.5)":f?(g="drop-shadow(0 0 8px #ff0)",u="#ffd700"):x?(g="drop-shadow(0 0 6px #f00)",u="#ff6666"):y&&(g="drop-shadow(0 0 4px #0af)",u="#aaddff"),t<=2&&(u="#fcc"),m.createElement(m.Fragment,null,m.createElement("div",{style:{position:"absolute",left:o.x-14,top:o.y-14,width:28,height:28,pointerEvents:"none",zIndex:60}},m.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28"},m.createElement("circle",{cx:"14",cy:"14",r:"11",fill:"none",stroke:x?"rgba(255,100,100,0.7)":"rgba(255,255,255,0.5)",strokeWidth:"2"}),m.createElement("circle",{cx:"14",cy:"14",r:"4",fill:"none",stroke:x?"rgba(255,100,100,0.8)":"rgba(255,255,255,0.7)",strokeWidth:"2"}),m.createElement("line",{x1:"14",y1:"0",x2:"14",y2:"7",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),m.createElement("line",{x1:"14",y1:"21",x2:"14",y2:"28",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),m.createElement("line",{x1:"0",y1:"14",x2:"7",y2:"14",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),m.createElement("line",{x1:"21",y1:"14",x2:"28",y2:"14",stroke:"rgba(255,255,255,0.7)",strokeWidth:"2"}),m.createElement("circle",{cx:"14",cy:"14",r:"2",fill:x?"#f00":"#f44"}))),m.createElement("svg",{style:{position:"absolute",left:0,top:0,width:640,height:480,pointerEvents:"none",zIndex:45}},m.createElement("line",{x1:i,y1:e,x2:o.x,y2:o.y,stroke:"rgba(255,255,255,0.12)",strokeWidth:"1",strokeDasharray:"6,4"})),m.createElement("div",{style:{position:"absolute",left:i-p/2,top:e-p/2,width:p,height:p,transform:`rotate(${d+90}deg)`,transformOrigin:"center center",filter:g,opacity:r>0&&Math.floor(r/4)%2?.4:1,zIndex:50,pointerEvents:"none"}},m.createElement(Ht,{src:Dt.cursor,width:p,height:p,style:{width:p,height:p},fallback:m.createElement("svg",{width:p,height:p,viewBox:"0 0 28 28"},m.createElement("polygon",{points:"14,3 4,20 14,15 24,20",fill:u,stroke:"#111",strokeWidth:"1.5",strokeLinejoin:"round"}))})),s>=100&&m.createElement("div",{style:{position:"absolute",left:Math.round(i-p/2-6),top:Math.round(e-p/2-6),width:p+12,height:p+12,border:"3px solid #4af",borderRadius:"50%",animation:"pulse 1s infinite",pointerEvents:"none",zIndex:49,boxSizing:"border-box"}}),a&&m.createElement("div",{style:{position:"absolute",left:i-24,top:e-p/2-18,fontSize:8,color:"#fff",background:a==="rapid"?"#f80":a==="triple"?"#08f":"#ff0",padding:"2px 6px",borderRadius:4,fontWeight:"bold",pointerEvents:"none",zIndex:55,whiteSpace:"nowrap"}},a==="rapid"?"RAPID":a==="triple"?"TRIPLE":"GIANT"))}function Hl({popup:i,onChoice:e}){let t=Number.isFinite(i==null?void 0:i.countdown)?i.countdown:100,n=i.swapped,s,r,o;i.type==="firewall"?(s="Connection Request",r="Unknown signature!",o="#d44"):i.type==="security-update"?(s="Security Patch",r="VERIFIED - INSTALL!",o="#484"):(s="Update Available",r="Checksum mismatch!",o="#d44");let l=i.type==="firewall"?n?[{l:"[Q] Deny",a:"deny",v:"default"},{l:"[E] Allow",a:"allow",v:"primary"}]:[{l:"[E] Allow",a:"allow",v:"default"},{l:"[Q] Deny",a:"deny",v:"primary"}]:i.type==="security-update"?n?[{l:"[E] Skip",a:"reject",v:"primary"},{l:"[Q] Install",a:"accept",v:"default"}]:[{l:"[Q] Install",a:"accept",v:"primary"},{l:"[E] Skip",a:"reject",v:"default"}]:n?[{l:"[Q] Later",a:"later",v:"default"},{l:"[E] Install",a:"install",v:"primary"}]:[{l:"[E] Install",a:"install",v:"default"},{l:"[Q] Later",a:"later",v:"primary"}];return m.createElement("div",{style:{position:"absolute",left:i.x,top:i.y,zIndex:400}},m.createElement(kn,{title:s,width:260},m.createElement("p",{style:{fontSize:7,marginBottom:8}},i.type==="firewall"?"Unknown process requests access.":i.type==="security-update"?"Critical security update.":"System update available."),m.createElement("p",{style:{fontSize:7,color:o,marginBottom:10,fontWeight:i.isLegit?"bold":"normal"}},r),m.createElement("div",{style:{width:"100%",height:6,background:"#ddd",borderRadius:3,marginBottom:14}},m.createElement("div",{style:{width:`${t}%`,height:"100%",background:t>30?"#5a5":"#d55",borderRadius:3}})),m.createElement("div",{style:{display:"flex",gap:10,justifyContent:"center"}},m.createElement(Bn,{variant:l[0].v,onClick:()=>e(i,l[0].a)},l[0].l),m.createElement(Bn,{variant:l[1].v,onClick:()=>e(i,l[1].a)},l[1].l))))}function Gl({setupTimer:i,folderWalls:e,setFolderWalls:t,deployables:n,setDeployables:s,onStart:r,mousePos:o}){let[a,l]=bt(null),c=18,h=[{type:"folder",name:"Folder Wall",count:8-e.length,icon:m.createElement(Ao,{size:c}),desc:"Blocks enemies"},{type:"watchdog",name:"Watchdog",count:1-n.filter(x=>x.type==="watchdog").length,icon:m.createElement(Ls,{size:c}),desc:"Auto-turret"},{type:"sticky",name:"Floppy Disk",count:2-n.filter(x=>x.type==="sticky").length,icon:m.createElement(Us,{size:c}),desc:"Decoy target"}],d=(x,y)=>{if(!a||y<50)return;let g=Math.round(x/16)*16-12,u=Math.round(y/16)*16-12;if(!(Math.abs(g+12-320)<50&&Math.abs(u+12-280)<50||[...e,...n].some(S=>Math.abs(S.x-g)<24&&Math.abs(S.y-u)<24))){if(a==="folder"&&e.length<8){t(S=>[...S,{id:Math.random(),x:g,y:u,hp:4}]);return}if(a==="watchdog"&&n.filter(S=>S.type==="watchdog").length<1){s(S=>[...S,{id:Math.random(),type:"watchdog",x:g,y:u,aimDir:7}]);return}a==="sticky"&&n.filter(S=>S.type==="sticky").length<2&&s(S=>[...S,{id:Math.random(),type:"sticky",x:g,y:u}])}},f=Math.round(o.x/16)*16-12,p=Math.round(o.y/16)*16-12;return m.createElement(m.Fragment,null,m.createElement("div",{onClick:x=>{if(!a)return;let y=x.currentTarget.getBoundingClientRect(),g=640/y.width,u=480/y.height;d((x.clientX-y.left)*g,(x.clientY-y.top)*u)},style:{position:"absolute",inset:0,top:20,cursor:a?"crosshair":"default"}},a&&o.y>50&&m.createElement("div",{style:{position:"absolute",left:f,top:p,width:24,height:24,border:"2px dashed #4a4",background:"rgba(74, 164, 74, 0.3)",pointerEvents:"none"}})),m.createElement(kn,{title:"Tower Defense Setup",width:244,x:16,y:40},m.createElement("div",{style:{fontSize:6,marginBottom:10,color:"#666"}},"Click item, then click on desktop to place"),m.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6}},h.map(x=>m.createElement("div",{key:x.type,onClick:()=>x.count>0&&l(x.type),style:{display:"flex",alignItems:"center",gap:8,padding:6,background:a===x.type?"#bef":x.count>0?"#fff":"#eee",border:`2px solid ${a===x.type?"#48a":"#aaa"}`,borderRadius:4,cursor:x.count>0?"pointer":"not-allowed",opacity:x.count>0?1:.5}},m.createElement("span",{style:{width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center"}},x.icon),m.createElement("div",{style:{flex:1}},m.createElement("div",{style:{fontSize:7,fontWeight:"bold"}},x.name),m.createElement("div",{style:{fontSize:5,color:"#888"}},x.desc," (\xD7",x.count,")"))))),m.createElement("div",{style:{marginTop:14,textAlign:"center"}},m.createElement("div",{style:{fontSize:12,marginBottom:10,color:"#e55",display:"flex",alignItems:"center",justifyContent:"center",gap:6}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center"}},m.createElement(bh,{size:16})),m.createElement("span",null,i,"s")),m.createElement(Bn,{variant:"primary",onClick:r},"Start Wave"))))}function Ro({x:i,y:e,hp:t,showIcon:n=!0}){return m.createElement("div",{style:{position:"absolute",left:i-24,top:e-24,width:48,height:48,pointerEvents:"none"}},n&&m.createElement(Ht,{src:Dt.systemFolder,width:48,height:48,style:{width:48,height:48},fallback:m.createElement("svg",{width:"48",height:"48",viewBox:"0 0 48 48"},m.createElement("rect",{x:"4",y:"8",width:"40",height:"36",rx:"3",fill:"#4a7c9c",stroke:"#2a5c7c",strokeWidth:"2"}),m.createElement("rect",{x:"4",y:"8",width:"16",height:"6",fill:"#5a9cbc"}),m.createElement("rect",{x:"18",y:"22",width:"12",height:"10",rx:"2",fill:"#ffd700",stroke:"#aa8800",strokeWidth:"1"}))}),m.createElement("div",{style:{position:"absolute",bottom:-10,left:4,width:40,height:5,background:"#333",borderRadius:2,overflow:"hidden"}},m.createElement("div",{style:{width:`${t}%`,height:"100%",background:t>50?"#4a4":"#e44"}})))}function Io({x:i,y:e,clutter:t,showIcon:n=!0}){return m.createElement("div",{style:{position:"absolute",left:i,top:e,width:32,height:36,zIndex:30}},n&&m.createElement(Ht,{src:Dt.trash,width:32,height:36,style:{width:32,height:36},fallback:m.createElement("svg",{width:"32",height:"36",viewBox:"0 0 32 36"},m.createElement("path",{d:"M6 10 L8 32 L24 32 L26 10 Z",fill:"#888",stroke:"#555",strokeWidth:"1"}),m.createElement("rect",{x:"4",y:"6",width:"24",height:"4",rx:"1",fill:"#999",stroke:"#555",strokeWidth:"1"}),m.createElement("rect",{x:"12",y:"3",width:"8",height:"4",rx:"1",fill:"#777",stroke:"#555",strokeWidth:"0.5"}),m.createElement("line",{x1:"11",y1:"14",x2:"11",y2:"28",stroke:"#666",strokeWidth:"1"}),m.createElement("line",{x1:"16",y1:"14",x2:"16",y2:"28",stroke:"#666",strokeWidth:"1"}),m.createElement("line",{x1:"21",y1:"14",x2:"21",y2:"28",stroke:"#666",strokeWidth:"1"}))}),t.length>0&&m.createElement("div",{style:{position:"absolute",top:-6,right:-6,width:18,height:18,background:"#e55",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"#fff",fontWeight:"bold",border:"2px solid #fff",animation:"pulse 1s infinite"}},t.length))}var La="180";var Qh=0,Rc=1,eu=2;var Ic=1,Ua=2,pi=3,Pi=0,un=1,bn=2,Ui=0,us=1,Gn=2,Pc=3,Dc=4,tu=5,Qi=100,nu=101,iu=102,su=103,ru=104,ou=200,au=201,lu=202,cu=203,ta=204,na=205,hu=206,uu=207,du=208,fu=209,pu=210,mu=211,gu=212,xu=213,yu=214,Na=0,Fa=1,Oa=2,ds=3,Ba=4,ka=5,za=6,Ha=7,Lc=0,_u=1,vu=2,Ni=0,Mu=1,Su=2,bu=3,Ga=4,wu=5,Eu=6,Tu=7;var Uc=300,Ss=301,bs=302,Va=303,Wa=304,co=306,ia=1e3,Mn=1001,sa=1002,Hn=1003,Au=1004;var ho=1005;var ii=1006,Xa=1007;var is=1008;var oi=1009,Nc=1010,Fc=1011,or=1012,qa=1013,ss=1014,mi=1015,ar=1016,Ya=1017,Za=1018,lr=1020,Oc=35902,Bc=35899,kc=1021,zc=1022,Vn=1023,Zs=1026,cr=1027,Hc=1028,Ja=1029,Gc=1030,$a=1031;var Ka=1033,uo=33776,fo=33777,po=33778,mo=33779,ja=35840,Qa=35841,el=35842,tl=35843,nl=36196,il=37492,sl=37496,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,hl=37813,ul=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,xl=37820,yl=37821,_l=36492,vl=36494,Ml=36495,Sl=36283,bl=36284,wl=36285,El=36286;var Pr=2300,ra=2301,ea=2302,xc=2400,yc=2401,_c=2402;var Cu=3200,Ru=3201;var Vc=0,Iu=1,Fi="",gn="srgb",fs="srgb-linear",Dr="linear",It="srgb";var cs=7680;var vc=519,Pu=512,Du=513,Lu=514,Wc=515,Uu=516,Nu=517,Fu=518,Ou=519,Mc=35044;var Xc="300 es",ni=2e3,Lr=2001;var Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vl=Math.PI/180,oa=180/Math.PI;function hr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function Bd(i,e){return(i%e+e)%e}function Wl(i,e,t){return(1-t)*i+t*e}function Sr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Li=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],p=r[o+1],x=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=y;return}if(d!==y||l!==f||c!==p||h!==x){let g=1-a,u=l*f+c*p+h*x+d*y,E=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){let A=Math.sqrt(S),C=Math.atan2(A,u*E);g=Math.sin(g*C)/A,a=Math.sin(a*C)/A}let v=a*E;if(l=l*g+f*v,c=c*g+p*v,h=h*g+x*v,d=d*g+y*v,g===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+h*d+l*p-c*f,e[t+1]=l*x+h*f+c*d-a*p,e[t+2]=c*x+h*p+a*f-l*d,e[t+3]=h*x-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*x,this._y=c*p*d-f*h*x,this._z=c*h*x+f*p*d,this._w=c*h*d-f*p*x;break;case"YXZ":this._x=f*h*d+c*p*x,this._y=c*p*d-f*h*x,this._z=c*h*x-f*p*d,this._w=c*h*d+f*p*x;break;case"ZXY":this._x=f*h*d-c*p*x,this._y=c*p*d+f*h*x,this._z=c*h*x+f*p*d,this._w=c*h*d-f*p*x;break;case"ZYX":this._x=f*h*d-c*p*x,this._y=c*p*d+f*h*x,this._z=c*h*x-f*p*d,this._w=c*h*d+f*p*x;break;case"YZX":this._x=f*h*d+c*p*x,this._y=c*p*d+f*h*x,this._z=c*h*x-f*p*d,this._w=c*h*d-f*p*x;break;case"XZY":this._x=f*h*d-c*p*x,this._y=c*p*d-f*h*x,this._z=c*h*x+f*p*d,this._w=c*h*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xl.copy(this).projectOnVector(e),this.sub(Xl)}reflect(e){return this.sub(Xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xl=new F,Th=new Li,mt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],x=n[8],y=s[0],g=s[3],u=s[6],E=s[1],S=s[4],v=s[7],A=s[2],C=s[5],L=s[8];return r[0]=o*y+a*E+l*A,r[3]=o*g+a*S+l*C,r[6]=o*u+a*v+l*L,r[1]=c*y+h*E+d*A,r[4]=c*g+h*S+d*C,r[7]=c*u+h*v+d*L,r[2]=f*y+p*E+x*A,r[5]=f*g+p*S+x*C,r[8]=f*u+p*v+x*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,x=t*d+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=d*y,e[1]=(s*c-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=f*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ql=new mt;function qc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){let i=Ur("canvas");return i.style.display="block",i}var Ah={};function Js(i){i in Ah||(Ah[i]=!0,console.warn(i))}function ku(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ch=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kd(){let i={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===It&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===It&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fs]:{primaries:e,whitePoint:n,transfer:Dr,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:It,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var wt=kd();function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ns,aa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ns===void 0&&(Ns=Ur("canvas")),Ns.width=e.width,Ns.height=e.height;let s=Ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zd=0,$s=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yl(s[o].image)):r.push(Yl(s[o]))}else r=Yl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Yl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hd=0,Zl=new F,Rn=class i extends Di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=ii,o=is,a=Vn,l=oi,c=i.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=hr(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Uc;Rn.DEFAULT_ANISOTROPY=1;var Wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],x=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(p+1)/2,A=(u+1)/2,C=(h+f)/4,L=(d+y)/4,U=(x+g)/4;return S>v&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=L/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=U/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=L/r,s=U/r),this.set(n,s,r,t),this}let E=Math.sqrt((g-x)*(g-x)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(g-x)/E,this.y=(d-y)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},la=class extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Rn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends la{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nr=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var es=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),Do.subVectors(this.max,br),Fs.subVectors(e.a,br),Os.subVectors(e.b,br),Bs.subVectors(e.c,br),qi.subVectors(Os,Fs),Yi.subVectors(Bs,Os),rs.subVectors(Fs,Bs);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-rs.z,rs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,rs.z,0,-rs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-rs.y,rs.x,0];return!Jl(t,Fs,Os,Bs,Do)||(t=[1,0,0,0,1,0,0,0,1],!Jl(t,Fs,Os,Bs,Do))?!1:(Lo.crossVectors(qi,Yi),t=[Lo.x,Lo.y,Lo.z],Jl(t,Fs,Os,Bs,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ei=[new F,new F,new F,new F,new F,new F,new F,new F],Qn=new F,Po=new es,Fs=new F,Os=new F,Bs=new F,qi=new F,Yi=new F,rs=new F,br=new F,Do=new F,Lo=new F,os=new F;function Jl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){os.fromArray(i,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Gd=new es,wr=new F,$l=new F,ps=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add($l)),this.expandByPoint(wr.copy(e.center).sub($l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ti=new F,Kl=new F,Uo=new F,Zi=new F,jl=new F,No=new F,Ql=new F,Fr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kl.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Kl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Uo),a=Zi.dot(this.direction),l=-Zi.dot(Uo),c=Zi.lengthSq(),h=Math.abs(1-o*o),d,f,p,x;if(h>0)if(d=o*l-a,f=o*a-l,x=r*h,d>=0)if(f>=-x)if(f<=x){let y=1/h;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Kl).addScaledVector(Uo,f),p}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,s,r){jl.subVectors(t,e),No.subVectors(n,e),Ql.crossVectors(jl,No);let o=this.direction.dot(Ql),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);let l=a*this.direction.dot(No.crossVectors(Zi,No));if(l<0)return null;let c=a*this.direction.dot(jl.cross(Zi));if(c<0||l+c>o)return null;let h=-a*Zi.dot(Ql);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vt=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,f,p,x,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,p,x,y,g)}set(e,t,n,s,r,o,a,l,c,h,d,f,p,x,y,g){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=x,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*d,x=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+x*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,x=c*h,y=c*d;t[0]=f+y*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-x,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,x=c*h,y=c*d;t[0]=f-y*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*d,x=a*h,y=a*d;t[0]=l*h,t[4]=x*c-p,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,x=a*l,y=a*c;t[0]=l*h,t[4]=y-f*d,t[8]=x*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+x,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*l,p=o*c,x=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+y,t[5]=o*h,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*h,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Wd)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ji.crossVectors(n,Pn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ji.crossVectors(n,Pn)),Ji.normalize(),Fo.crossVectors(Pn,Ji),s[0]=Ji.x,s[4]=Fo.x,s[8]=Pn.x,s[1]=Ji.y,s[5]=Fo.y,s[9]=Pn.y,s[2]=Ji.z,s[6]=Fo.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],x=n[2],y=n[6],g=n[10],u=n[14],E=n[3],S=n[7],v=n[11],A=n[15],C=s[0],L=s[4],U=s[8],b=s[12],M=s[1],D=s[5],k=s[9],G=s[13],W=s[2],J=s[6],X=s[10],oe=s[14],Z=s[3],Me=s[7],Ie=s[11],Ue=s[15];return r[0]=o*C+a*M+l*W+c*Z,r[4]=o*L+a*D+l*J+c*Me,r[8]=o*U+a*k+l*X+c*Ie,r[12]=o*b+a*G+l*oe+c*Ue,r[1]=h*C+d*M+f*W+p*Z,r[5]=h*L+d*D+f*J+p*Me,r[9]=h*U+d*k+f*X+p*Ie,r[13]=h*b+d*G+f*oe+p*Ue,r[2]=x*C+y*M+g*W+u*Z,r[6]=x*L+y*D+g*J+u*Me,r[10]=x*U+y*k+g*X+u*Ie,r[14]=x*b+y*G+g*oe+u*Ue,r[3]=E*C+S*M+v*W+A*Z,r[7]=E*L+S*D+v*J+A*Me,r[11]=E*U+S*k+v*X+A*Ie,r[15]=E*b+S*G+v*oe+A*Ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],x=e[3],y=e[7],g=e[11],u=e[15];return x*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*p-n*l*p)+y*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+g*(+t*c*d-t*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+u*(-s*a*h-t*l*d+t*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],x=e[12],y=e[13],g=e[14],u=e[15],E=d*g*c-y*f*c+y*l*p-a*g*p-d*l*u+a*f*u,S=x*f*c-h*g*c-x*l*p+o*g*p+h*l*u-o*f*u,v=h*y*c-x*d*c+x*a*p-o*y*p-h*a*u+o*d*u,A=x*d*l-h*y*l-x*a*f+o*y*f+h*a*g-o*d*g,C=t*E+n*S+s*v+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=E*L,e[1]=(y*f*r-d*g*r-y*s*p+n*g*p+d*s*u-n*f*u)*L,e[2]=(a*g*r-y*l*r+y*s*c-n*g*c-a*s*u+n*l*u)*L,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*p-n*l*p)*L,e[4]=S*L,e[5]=(h*g*r-x*f*r+x*s*p-t*g*p-h*s*u+t*f*u)*L,e[6]=(x*l*r-o*g*r-x*s*c+t*g*c+o*s*u-t*l*u)*L,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*L,e[8]=v*L,e[9]=(x*d*r-h*y*r-x*n*p+t*y*p+h*n*u-t*d*u)*L,e[10]=(o*y*r-x*a*r+x*n*c-t*y*c-o*n*u+t*a*u)*L,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*p-t*a*p)*L,e[12]=A*L,e[13]=(h*y*s-x*d*s+x*n*f-t*y*f-h*n*g+t*d*g)*L,e[14]=(x*a*s-o*y*s-x*n*l+t*y*l+o*n*g-t*a*g)*L,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*f+t*a*f)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,x=r*d,y=o*h,g=o*d,u=a*d,E=l*c,S=l*h,v=l*d,A=n.x,C=n.y,L=n.z;return s[0]=(1-(y+u))*A,s[1]=(p+v)*A,s[2]=(x-S)*A,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(f+u))*C,s[6]=(g+E)*C,s[7]=0,s[8]=(x+S)*L,s[9]=(g-E)*L,s[10]=(1-(f+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ks.set(s[0],s[1],s[2]).length(),o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);let c=1/r,h=1/o,d=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,t.setFromRotationMatrix(ei),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ni,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),x,y;if(l)x=r/(o-r),y=o*r/(o-r);else if(a===ni)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Lr)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ni,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),x,y;if(l)x=1/(o-r),y=o/(o-r);else if(a===ni)x=-2/(o-r),y=-(o+r)/(o-r);else if(a===Lr)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ks=new F,ei=new Vt,Vd=new F(0,0,0),Wd=new F(1,1,1),Ji=new F,Fo=new F,Pn=new F,Ih=new Vt,Ph=new Li,si=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xd=0,Dh=new F,zs=new Li,Ai=new Vt,Oo=new F,Er=new F,qd=new F,Yd=new Li,Lh=new F(1,0,0),Uh=new F(0,1,0),Nh=new F(0,0,1),Fh={type:"added"},Zd={type:"removed"},Hs={type:"childadded",child:null},ec={type:"childremoved",child:null},en=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new si,n=new Li,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new mt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Nh,e)}translateOnAxis(e,t){return Dh.copy(e).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oo.copy(e):Oo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Er,Oo,this.up):Ai.lookAt(Oo,Er,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(Ai),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zd),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};en.DEFAULT_UP=new F(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new F,Ci=new F,tc=new F,Ri=new F,Gs=new F,Vs=new F,Oh=new F,nc=new F,ic=new F,sc=new F,rc=new Wt,oc=new Wt,ac=new Wt,ji=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Ci.subVectors(n,t),tc.subVectors(e,t);let o=ti.dot(ti),a=ti.dot(Ci),l=ti.dot(tc),c=Ci.dot(Ci),h=Ci.dot(tc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,n),ac.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Ci.subVectors(e,t),ti.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ti.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Gs.subVectors(s,n),Vs.subVectors(r,n),nc.subVectors(e,n);let l=Gs.dot(nc),c=Vs.dot(nc);if(l<=0&&c<=0)return t.copy(n);ic.subVectors(e,s);let h=Gs.dot(ic),d=Vs.dot(ic);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Gs,o);sc.subVectors(e,r);let p=Gs.dot(sc),x=Vs.dot(sc);if(x>=0&&p<=x)return t.copy(r);let y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Vs,a);let g=h*x-p*d;if(g<=0&&d-h>=0&&p-x>=0)return Oh.subVectors(r,s),a=(d-h)/(d-h+(p-x)),t.copy(s).addScaledVector(Oh,a);let u=1/(g+y+f);return o=y*u,a=f*u,t.copy(n).addScaledVector(Gs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function lc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ct=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=wt.workingColorSpace){if(e=Bd(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=lc(o,r,e+1/3),this.g=lc(o,r,e),this.b=lc(o,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let n=zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return wt.workingToColorSpace(mn.copy(this),e),Math.round(yt(mn.r*255,0,255))*65536+Math.round(yt(mn.g*255,0,255))*256+Math.round(yt(mn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=gn){wt.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Bo);let n=Wl($i.h,Bo.h,t),s=Wl($i.s,Bo.s,t),r=Wl($i.l,Bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new ct;ct.NAMES=zu;var Jd=0,di=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=us,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new F,ko=new Ce,$d=0,xn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$d++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),s=An(s,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}};var Br=class extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var kr=class extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Kd=0,zn=new Vt,cc=new en,Ws=new F,Dn=new es,Tr=new es,sn=new F,an=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?kr:Br)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new mt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Dn.min,Tr.min),Dn.expandByPoint(sn),sn.addVectors(Dn.max,Tr.max),Dn.expandByPoint(sn)):(Dn.expandByPoint(Tr.min),Dn.expandByPoint(Tr.max))}Dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),sn.add(Ws)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new F,l[U]=new F;let c=new F,h=new F,d=new F,f=new Ce,p=new Ce,x=new Ce,y=new F,g=new F;function u(U,b,M){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),x.sub(f);let D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(D),a[U].add(y),a[b].add(y),a[M].add(y),l[U].add(g),l[b].add(g),l[M].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,b=E.length;U<b;++U){let M=E[U],D=M.start,k=M.count;for(let G=D,W=D+k;G<W;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let S=new F,v=new F,A=new F,C=new F;function L(U){A.fromBufferAttribute(s,U),C.copy(A);let b=a[U];S.copy(b),S.sub(A.multiplyScalar(A.dot(b))).normalize(),v.crossVectors(C,b);let D=v.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,D)}for(let U=0,b=E.length;U<b;++U){let M=E[U],D=M.start,k=M.count;for(let G=D,W=D+k;G<W;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,x=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let u=0;u<h;u++)f[x++]=c[p++]}return new xn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bh=new Vt,as=new Fr,zo=new ps,kh=new F,Ho=new F,Go=new F,Vo=new F,hc=new F,Wo=new F,zh=new F,Xo=new F,Be=class extends en{constructor(e=new an,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(hc.fromBufferAttribute(d,e),o?Wo.addScaledVector(hc,h):Wo.addScaledVector(hc.sub(t),h))}t.add(Wo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(zo.containsPoint(as.origin)===!1&&(as.intersectSphere(zo,kh)===null||as.origin.distanceToSquared(kh)>(e.far-e.near)**2))&&(Bh.copy(r).invert(),as.copy(e.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let g=f[x],u=o[g.materialIndex],E=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let v=E,A=S;v<A;v+=3){let C=a.getX(v),L=a.getX(v+1),U=a.getX(v+2);s=qo(this,u,e,n,c,h,d,C,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=x,u=y;g<u;g+=3){let E=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);s=qo(this,o,e,n,c,h,d,E,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let g=f[x],u=o[g.materialIndex],E=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=E,A=S;v<A;v+=3){let C=v,L=v+1,U=v+2;s=qo(this,u,e,n,c,h,d,C,L,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=x,u=y;g<u;g+=3){let E=g,S=g+1,v=g+2;s=qo(this,o,e,n,c,h,d,E,S,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function jd(i,e,t,n,s,r,o,a){let l;if(e.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Pi,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:i}}function qo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ho),i.getVertexPosition(l,Go),i.getVertexPosition(c,Vo);let h=jd(i,e,t,n,Ho,Go,Vo,zh);if(h){let d=new F;ji.getBarycoord(zh,Ho,Go,Vo,d),s&&(h.uv=ji.getInterpolatedAttribute(s,a,l,c,d,new Ce)),r&&(h.uv1=ji.getInterpolatedAttribute(r,a,l,c,d,new Ce)),o&&(h.normal=ji.getInterpolatedAttribute(o,a,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};ji.getNormal(Ho,Go,Vo,f.normal),h.face=f,h.barycoord=d}return h}var Sn=class i extends an{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function x(y,g,u,E,S,v,A,C,L,U,b){let M=v/L,D=A/U,k=v/2,G=A/2,W=C/2,J=L+1,X=U+1,oe=0,Z=0,Me=new F;for(let Ie=0;Ie<X;Ie++){let Ue=Ie*D-G;for(let st=0;st<J;st++){let dt=st*M-k;Me[y]=dt*E,Me[g]=Ue*S,Me[u]=W,c.push(Me.x,Me.y,Me.z),Me[y]=0,Me[g]=0,Me[u]=C>0?1:-1,h.push(Me.x,Me.y,Me.z),d.push(st/L),d.push(1-Ie/U),oe+=1}}for(let Ie=0;Ie<U;Ie++)for(let Ue=0;Ue<L;Ue++){let st=f+Ue+J*Ie,dt=f+Ue+J*(Ie+1),ht=f+(Ue+1)+J*(Ie+1),nt=f+(Ue+1)+J*Ie;l.push(st,dt,nt),l.push(dt,ht,nt),Z+=6}a.addGroup(p,Z,b),p+=Z,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=ws(i[t]);for(let s in n)e[s]=n[s]}return e}function Qd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var Hu={clone:ws,merge:yn},ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},zr=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new F,Hh=new Ce,Gh=new Ce,Cn=class extends zr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Hh,Gh),t.subVectors(Gh,Hh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xs=-90,qs=1,ha=class extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Cn(Xs,qs,e,t);s.layers=this.layers,this.add(s);let r=new Cn(Xs,qs,e,t);r.layers=this.layers,this.add(r);let o=new Cn(Xs,qs,e,t);o.layers=this.layers,this.add(o);let a=new Cn(Xs,qs,e,t);a.layers=this.layers,this.add(a);let l=new Cn(Xs,qs,e,t);l.layers=this.layers,this.add(l);let c=new Cn(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Hr=class extends Rn{constructor(e=[],t=Ss,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ua=class extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sn(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ui});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===is&&(t.minFilter=ii),new ha(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},rn=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},nf={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Gr=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var uc=new F,sf=new F,rf=new mt,hi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=uc.subVectors(n,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(uc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rf.getNormalMatrix(e),s=this.coplanarPoint(uc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new ps,of=new Ce(.5,.5),Yo=new F,js=class{constructor(e=new hi,t=new hi,n=new hi,s=new hi,r=new hi,o=new hi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],p=r[7],x=r[8],y=r[9],g=r[10],u=r[11],E=r[12],S=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-o,p-h,u-x,A-E).normalize(),s[1].setComponents(c+o,p+h,u+x,A+E).normalize(),s[2].setComponents(c+a,p+d,u+y,A+S).normalize(),s[3].setComponents(c-a,p-d,u-y,A-S).normalize(),n)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,p-f,u-g,A-v).normalize();else if(s[4].setComponents(c-l,p-f,u-g,A-v).normalize(),t===ni)s[5].setComponents(c+l,p+f,u+g,A+v).normalize();else if(t===Lr)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=of.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yo.x=s.normal.x>0?e.max.x:e.min.x,Yo.y=s.normal.y>0?e.max.y:e.min.y,Yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qs=class extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},da=new F,fa=new F,Vh=new Vt,Ar=new Fr,Zo=new ps,dc=new F,Wh=new F,pa=class extends en{constructor(e=new an,t=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)da.fromBufferAttribute(t,s-1),fa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=da.distanceTo(fa);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;Vh.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Vh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let y=p,g=x-1;y<g;y+=c){let u=h.getX(y),E=h.getX(y+1),S=Jo(this,e,Ar,l,u,E,y);S&&t.push(S)}if(this.isLineLoop){let y=h.getX(x-1),g=h.getX(p),u=Jo(this,e,Ar,l,y,g,x-1);u&&t.push(u)}}else{let p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let y=p,g=x-1;y<g;y+=c){let u=Jo(this,e,Ar,l,y,y+1,y);u&&t.push(u)}if(this.isLineLoop){let y=Jo(this,e,Ar,l,x-1,p,x-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Jo(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(da.fromBufferAttribute(a,s),fa.fromBufferAttribute(a,r),t.distanceSqToSegment(da,fa,dc,Wh)>n)return;dc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(dc);if(!(c<e.near||c>e.far))return{distance:c,point:Wh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Xh=new F,qh=new F,Vr=class extends pa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xh.fromBufferAttribute(t,s),qh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xh.distanceTo(qh);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ms=class extends Rn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wr=class extends Rn{constructor(e,t,n=ss,s,r,o,a=Hn,l=Hn,c,h=Zs,d=1){if(h!==Zs&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xr=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},er=class i extends an{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,f=t,p=2*d+f,x=n*2+r,y=s+1,g=new F,u=new F;for(let E=0;E<=x;E++){let S=0,v=0,A=0,C=0;if(E<=n){let b=E/n,M=b*Math.PI/2;v=-h-e*Math.cos(M),A=e*Math.sin(M),C=-e*Math.cos(M),S=b*d}else if(E<=n+r){let b=(E-n)/r;v=-h+b*t,A=e,C=0,S=d+b*f}else{let b=(E-n-r)/n,M=b*Math.PI/2;v=h+e*Math.sin(M),A=e*Math.cos(M),C=e*Math.sin(M),S=d+f+b*d}let L=Math.max(0,Math.min(1,S/p)),U=0;E===0?U=.5/s:E===x&&(U=-.5/s);for(let b=0;b<=s;b++){let M=b/s,D=M*Math.PI*2,k=Math.sin(D),G=Math.cos(D);u.x=-A*G,u.y=v,u.z=A*k,a.push(u.x,u.y,u.z),g.set(-A*G,C,A*k),g.normalize(),l.push(g.x,g.y,g.z),c.push(M+U,L)}if(E>0){let b=(E-1)*y;for(let M=0;M<s;M++){let D=b+M,k=b+M+1,G=E*y+M,W=E*y+M+1;o.push(D,k,G),o.push(k,W,G)}}}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Ln=class i extends an{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],x=0,y=[],g=n/2,u=0;E(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(p,2));function E(){let v=new F,A=new F,C=0,L=(t-e)/n;for(let U=0;U<=r;U++){let b=[],M=U/r,D=M*(t-e)+e;for(let k=0;k<=s;k++){let G=k/s,W=G*l+a,J=Math.sin(W),X=Math.cos(W);A.x=D*J,A.y=-M*n+g,A.z=D*X,d.push(A.x,A.y,A.z),v.set(J,L,X).normalize(),f.push(v.x,v.y,v.z),p.push(G,1-M),b.push(x++)}y.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){let M=y[b][U],D=y[b+1][U],k=y[b+1][U+1],G=y[b][U+1];(e>0||b!==0)&&(h.push(M,D,G),C+=3),(t>0||b!==r-1)&&(h.push(D,k,G),C+=3)}c.addGroup(u,C,0),u+=C}function S(v){let A=x,C=new Ce,L=new F,U=0,b=v===!0?e:t,M=v===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,g*M,0),f.push(0,M,0),p.push(.5,.5),x++;let D=x;for(let k=0;k<=s;k++){let W=k/s*l+a,J=Math.cos(W),X=Math.sin(W);L.x=b*X,L.y=g*M,L.z=b*J,d.push(L.x,L.y,L.z),f.push(0,M,0),C.x=J*.5+.5,C.y=X*.5*M+.5,p.push(C.x,C.y),x++}for(let k=0;k<s;k++){let G=A+k,W=D+k;v===!0?h.push(W,W+1,G):h.push(W+1,W,G),U+=3}c.addGroup(u,U,v===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qr=class i extends Ln{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yr=class i extends an{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let S=new F,v=new F,A=new F;for(let C=0;C<t.length;C+=3)p(t[C+0],S),p(t[C+1],v),p(t[C+2],A),l(S,v,A,E)}function l(E,S,v,A){let C=A+1,L=[];for(let U=0;U<=C;U++){L[U]=[];let b=E.clone().lerp(v,U/C),M=S.clone().lerp(v,U/C),D=C-U;for(let k=0;k<=D;k++)k===0&&U===C?L[U][k]=b:L[U][k]=b.clone().lerp(M,k/D)}for(let U=0;U<C;U++)for(let b=0;b<2*(C-U)-1;b++){let M=Math.floor(b/2);b%2===0?(f(L[U][M+1]),f(L[U+1][M]),f(L[U][M])):(f(L[U][M+1]),f(L[U+1][M+1]),f(L[U+1][M]))}}function c(E){let S=new F;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(E),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let E=new F;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];let v=g(E)/2/Math.PI+.5,A=u(E)/Math.PI+.5;o.push(v,1-A)}x(),d()}function d(){for(let E=0;E<o.length;E+=6){let S=o[E+0],v=o[E+2],A=o[E+4],C=Math.max(S,v,A),L=Math.min(S,v,A);C>.9&&L<.1&&(S<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,S){let v=E*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function x(){let E=new F,S=new F,v=new F,A=new F,C=new Ce,L=new Ce,U=new Ce;for(let b=0,M=0;b<r.length;b+=9,M+=6){E.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),C.set(o[M+0],o[M+1]),L.set(o[M+2],o[M+3]),U.set(o[M+4],o[M+5]),A.copy(E).add(S).add(v).divideScalar(3);let D=g(A);y(C,M+0,E,D),y(L,M+2,S,D),y(U,M+4,v,D)}}function y(E,S,v,A){A<0&&E.x===1&&(o[S]=E.x-1),v.x===0&&v.z===0&&(o[S]=A/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],o=[],a=new F,l=new Vt;for(let p=0;p<=e;p++){let x=p/e;s[p]=this.getTangentAt(x,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(yt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(yt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},tr=class extends Un{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ma=class extends tr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var $o=new F,fc=new Zc,pc=new Zc,mc=new Zc,ga=class extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($o.subVectors(s[0],s[1]).add(s[0]),c=$o);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($o.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$o),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),x<1e-4&&(x=y),g<1e-4&&(g=y),fc.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,x,y,g),pc.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,x,y,g),mc.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,x,y,g)}else this.curveType==="catmullrom"&&(fc.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),pc.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),mc.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(fc.calc(l),pc.calc(l),mc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yh(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function af(i,e){let t=1-i;return t*t*e}function lf(i,e){return 2*(1-i)*i*e}function cf(i,e){return i*i*e}function Rr(i,e,t,n){return af(i,e)+lf(i,t)+cf(i,n)}function hf(i,e){let t=1-i;return t*t*t*e}function uf(i,e){let t=1-i;return 3*t*t*i*e}function df(i,e){return 3*(1-i)*i*i*e}function ff(i,e){return i*i*i*e}function Ir(i,e,t,n,s){return hf(i,e)+uf(i,t)+df(i,n)+ff(i,s)}var Zr=class extends Un{constructor(e=new Ce,t=new Ce,n=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ce){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ir(e,s.x,r.x,o.x,a.x),Ir(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xa=class extends Un{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ir(e,s.x,r.x,o.x,a.x),Ir(e,s.y,r.y,o.y,a.y),Ir(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jr=class extends Un{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Un{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends Un{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends Un{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y),Rr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Yh(a,l.x,c.x,h.x,d.x),Yh(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}},Sc=Object.freeze({__proto__:null,ArcCurve:ma,CatmullRomCurve3:ga,CubicBezierCurve:Zr,CubicBezierCurve3:xa,EllipseCurve:tr,LineCurve:Jr,LineCurve3:ya,QuadraticBezierCurve:$r,QuadraticBezierCurve3:_a,SplineCurve:Kr}),va=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Sc[s.type]().fromJSON(s))}return this}},jr=class extends va{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Jr(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new $r(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Zr(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s),new Ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Kr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new tr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gs=class extends jr{constructor(e){super(e),this.uuid=hr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new jr().fromJSON(s))}return this}};function pf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Gu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=_f(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let f=t;f<s;f+=t){let p=i[f],x=i[f+1];p<a&&(a=p),x<l&&(l=x),p>h&&(h=p),x>d&&(d=x)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Qr(r,o,t,a,l,c,0),o}function Gu(i,e,t,n,s){let r;if(s===If(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Zh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Zh(o/n|0,i[o],i[o+1],r);return r&&nr(r,r.next)&&(to(r),r=r.next),r}function xs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(nr(t,t.next)||Gt(t.prev,t,t.next)===0)){if(to(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&wf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?gf(i,n,s,r):mf(i)){e.push(l.i,i.i,c.i),to(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=xf(xs(i),e),Qr(i,e,t,n,s,r,2)):o===2&&yf(i,e,t,n,s,r):Qr(xs(i),e,t,n,s,r,1);break}}}function mf(i){let e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),p=Math.max(a,l,c),x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=d&&x.y<=p&&Cr(s,a,r,l,o,c,x.x,x.y)&&Gt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function gf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Gt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,p=Math.min(a,l,c),x=Math.min(h,d,f),y=Math.max(a,l,c),g=Math.max(h,d,f),u=bc(p,x,e,t,n),E=bc(y,g,e,t,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=u&&v&&v.z<=E;){if(S.x>=p&&S.x<=y&&S.y>=x&&S.y<=g&&S!==s&&S!==o&&Cr(a,h,l,d,c,f,S.x,S.y)&&Gt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=p&&v.x<=y&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&Cr(a,h,l,d,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=u;){if(S.x>=p&&S.x<=y&&S.y>=x&&S.y<=g&&S!==s&&S!==o&&Cr(a,h,l,d,c,f,S.x,S.y)&&Gt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=E;){if(v.x>=p&&v.x<=y&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&Cr(a,h,l,d,c,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!nr(n,s)&&Wu(n,t,t.next,s)&&eo(n,s)&&eo(s,n)&&(e.push(n.i,t.i,s.i),to(t),to(t.next),t=i=s),t=t.next}while(t!==i);return xs(t)}function yf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Af(o,a)){let l=Xu(o,a);o=xs(o,o.next),l=xs(l,l.next),Qr(o,e,t,n,s,r,0),Qr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _f(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Gu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Tf(c))}s.sort(vf);for(let r=0;r<s.length;r++)t=Mf(s[r],t);return t}function vf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Mf(i,e){let t=Sf(i,e);if(!t)return e;let n=Xu(t,i);return xs(n,n.next),xs(t,t.next)}function Sf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(nr(i,t))return t;do{if(nr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Vu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);eo(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&bf(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function bf(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function wf(i,e,t,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ef(s)}function Ef(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function bc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Tf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vu(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Cr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Vu(i,e,t,n,s,r,o,a)}function Af(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cf(i,e)&&(eo(i,e)&&eo(e,i)&&Rf(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||nr(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function nr(i,e){return i.x===e.x&&i.y===e.y}function Wu(i,e,t,n){let s=jo(Gt(i,e,t)),r=jo(Gt(i,e,n)),o=jo(Gt(t,n,i)),a=jo(Gt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ko(i,t,e)||r===0&&Ko(i,n,e)||o===0&&Ko(t,i,n)||a===0&&Ko(t,e,n))}function Ko(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function jo(i){return i>0?1:i<0?-1:0}function Cf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function eo(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function Rf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Xu(i,e){let t=wc(i.i,i.x,i.y),n=wc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Zh(i,e,t,n){let s=wc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function to(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function If(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ec=class{static triangulate(e,t,n=2){return pf(e,t,n)}},hs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Jh(e),$h(n,e);let o=e.length;t.forEach(Jh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,$h(n,t[l]);let a=Ec.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Jh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $h(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ir=class i extends an{constructor(e=new gs([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Tt(s,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Pf,S,v=!1,A,C,L,U;u&&(S=u.getSpacedPoints(h),v=!0,f=!1,A=u.computeFrenetFrames(h,!1),C=new F,L=new F,U=new F),f||(g=0,p=0,x=0,y=0);let b=a.extractPoints(c),M=b.shape,D=b.holes;if(!hs.isClockWise(M)){M=M.reverse();for(let le=0,ie=D.length;le<ie;le++){let Q=D[le];hs.isClockWise(Q)&&(D[le]=Q.reverse())}}function G(le){let Q=10000000000000001e-36,te=le[0];for(let Se=1;Se<=le.length;Se++){let de=Se%le.length,Ee=le[de],rt=Ee.x-te.x,it=Ee.y-te.y,T=rt*rt+it*it,_=Math.max(Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(te.x),Math.abs(te.y)),z=Q*_*_;if(T<=z){le.splice(de,1),Se--;continue}te=Ee}}G(M),D.forEach(G);let W=D.length,J=M;for(let le=0;le<W;le++){let ie=D[le];M=M.concat(ie)}function X(le,ie,Q){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(ie,Q)}let oe=M.length;function Z(le,ie,Q){let te,Se,de,Ee=le.x-ie.x,rt=le.y-ie.y,it=Q.x-le.x,T=Q.y-le.y,_=Ee*Ee+rt*rt,z=Ee*T-rt*it;if(Math.abs(z)>Number.EPSILON){let q=Math.sqrt(_),ce=Math.sqrt(it*it+T*T),Y=ie.x-rt/q,Ge=ie.y+Ee/q,_e=Q.x-T/ce,Ve=Q.y+it/ce,ze=((_e-Y)*T-(Ve-Ge)*it)/(Ee*T-rt*it);te=Y+Ee*ze-le.x,Se=Ge+rt*ze-le.y;let me=te*te+Se*Se;if(me<=2)return new Ce(te,Se);de=Math.sqrt(me/2)}else{let q=!1;Ee>Number.EPSILON?it>Number.EPSILON&&(q=!0):Ee<-Number.EPSILON?it<-Number.EPSILON&&(q=!0):Math.sign(rt)===Math.sign(T)&&(q=!0),q?(te=-rt,Se=Ee,de=Math.sqrt(_)):(te=Ee,Se=rt,de=Math.sqrt(_/2))}return new Ce(te/de,Se/de)}let Me=[];for(let le=0,ie=J.length,Q=ie-1,te=le+1;le<ie;le++,Q++,te++)Q===ie&&(Q=0),te===ie&&(te=0),Me[le]=Z(J[le],J[Q],J[te]);let Ie=[],Ue,st=Me.concat();for(let le=0,ie=W;le<ie;le++){let Q=D[le];Ue=[];for(let te=0,Se=Q.length,de=Se-1,Ee=te+1;te<Se;te++,de++,Ee++)de===Se&&(de=0),Ee===Se&&(Ee=0),Ue[te]=Z(Q[te],Q[de],Q[Ee]);Ie.push(Ue),st=st.concat(Ue)}let dt;if(g===0)dt=hs.triangulateShape(J,D);else{let le=[],ie=[];for(let Q=0;Q<g;Q++){let te=Q/g,Se=p*Math.cos(te*Math.PI/2),de=x*Math.sin(te*Math.PI/2)+y;for(let Ee=0,rt=J.length;Ee<rt;Ee++){let it=X(J[Ee],Me[Ee],de);Xe(it.x,it.y,-Se),te===0&&le.push(it)}for(let Ee=0,rt=W;Ee<rt;Ee++){let it=D[Ee];Ue=Ie[Ee];let T=[];for(let _=0,z=it.length;_<z;_++){let q=X(it[_],Ue[_],de);Xe(q.x,q.y,-Se),te===0&&T.push(q)}te===0&&ie.push(T)}}dt=hs.triangulateShape(le,ie)}let ht=dt.length,nt=x+y;for(let le=0;le<oe;le++){let ie=f?X(M[le],st[le],nt):M[le];v?(L.copy(A.normals[0]).multiplyScalar(ie.x),C.copy(A.binormals[0]).multiplyScalar(ie.y),U.copy(S[0]).add(L).add(C),Xe(U.x,U.y,U.z)):Xe(ie.x,ie.y,0)}for(let le=1;le<=h;le++)for(let ie=0;ie<oe;ie++){let Q=f?X(M[ie],st[ie],nt):M[ie];v?(L.copy(A.normals[le]).multiplyScalar(Q.x),C.copy(A.binormals[le]).multiplyScalar(Q.y),U.copy(S[le]).add(L).add(C),Xe(U.x,U.y,U.z)):Xe(Q.x,Q.y,d/h*le)}for(let le=g-1;le>=0;le--){let ie=le/g,Q=p*Math.cos(ie*Math.PI/2),te=x*Math.sin(ie*Math.PI/2)+y;for(let Se=0,de=J.length;Se<de;Se++){let Ee=X(J[Se],Me[Se],te);Xe(Ee.x,Ee.y,d+Q)}for(let Se=0,de=D.length;Se<de;Se++){let Ee=D[Se];Ue=Ie[Se];for(let rt=0,it=Ee.length;rt<it;rt++){let T=X(Ee[rt],Ue[rt],te);v?Xe(T.x,T.y+S[h-1].y,S[h-1].x+Q):Xe(T.x,T.y,d+Q)}}}K(),ae();function K(){let le=s.length/3;if(f){let ie=0,Q=oe*ie;for(let te=0;te<ht;te++){let Se=dt[te];Ne(Se[2]+Q,Se[1]+Q,Se[0]+Q)}ie=h+g*2,Q=oe*ie;for(let te=0;te<ht;te++){let Se=dt[te];Ne(Se[0]+Q,Se[1]+Q,Se[2]+Q)}}else{for(let ie=0;ie<ht;ie++){let Q=dt[ie];Ne(Q[2],Q[1],Q[0])}for(let ie=0;ie<ht;ie++){let Q=dt[ie];Ne(Q[0]+oe*h,Q[1]+oe*h,Q[2]+oe*h)}}n.addGroup(le,s.length/3-le,0)}function ae(){let le=s.length/3,ie=0;Fe(J,ie),ie+=J.length;for(let Q=0,te=D.length;Q<te;Q++){let Se=D[Q];Fe(Se,ie),ie+=Se.length}n.addGroup(le,s.length/3-le,1)}function Fe(le,ie){let Q=le.length;for(;--Q>=0;){let te=Q,Se=Q-1;Se<0&&(Se=le.length-1);for(let de=0,Ee=h+g*2;de<Ee;de++){let rt=oe*de,it=oe*(de+1),T=ie+te+rt,_=ie+Se+rt,z=ie+Se+it,q=ie+te+it;pt(T,_,z,q)}}}function Xe(le,ie,Q){l.push(le),l.push(ie),l.push(Q)}function Ne(le,ie,Q){Mt(le),Mt(ie),Mt(Q);let te=s.length/3,Se=E.generateTopUV(n,s,te-3,te-2,te-1);P(Se[0]),P(Se[1]),P(Se[2])}function pt(le,ie,Q,te){Mt(le),Mt(ie),Mt(te),Mt(ie),Mt(Q),Mt(te);let Se=s.length/3,de=E.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);P(de[0]),P(de[1]),P(de[3]),P(de[1]),P(de[2]),P(de[3])}function Mt(le){s.push(l[le*3+0]),s.push(l[le*3+1]),s.push(l[le*3+2])}function P(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Df(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Sc[s.type]().fromJSON(s)),new i(n,e.options)}},Pf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Ce(r,o),new Ce(a,l),new Ce(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[s*3],p=e[s*3+1],x=e[s*3+2],y=e[r*3],g=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ce(o,1-l),new Ce(c,1-d),new Ce(f,1-x),new Ce(y,1-u)]:[new Ce(a,1-l),new Ce(h,1-d),new Ce(p,1-x),new Ce(g,1-u)]}};function Df(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var no=class i extends Yr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var fi=class i extends an{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,p=[],x=[],y=[],g=[];for(let u=0;u<h;u++){let E=u*f-o;for(let S=0;S<c;S++){let v=S*d-r;x.push(v,-E,0),y.push(0,0,1),g.push(S/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){let S=E+c*u,v=E+c*(u+1),A=E+1+c*(u+1),C=E+1+c*u;p.push(S,v,C),p.push(v,A,C)}this.setIndex(p),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},io=class i extends an{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,f=(t-e)/s,p=new F,x=new Ce;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let u=r+g/n*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,h.push(x.x,x.y)}d+=f}for(let y=0;y<s;y++){let g=y*(n+1);for(let u=0;u<n;u++){let E=u+g,S=E,v=E+n+1,A=E+n+2,C=E+1;a.push(S,v,C),a.push(v,A,C)}}this.setIndex(a),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var In=class i extends an{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new F,f=new F,p=[],x=[],y=[],g=[];for(let u=0;u<=n;u++){let E=[],S=u/n,v=0;u===0&&o===0?v=.5/t:u===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){let C=A/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+S*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),g.push(C+v,1-S),E.push(c++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){let S=h[u][E+1],v=h[u][E],A=h[u+1][E],C=h[u+1][E+1];(u!==0||o>0)&&p.push(S,v,C),(u!==n-1||l<Math.PI)&&p.push(v,A,C)}this.setIndex(p),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},so=class i extends Yr{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ys=class i extends an{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new F,d=new F,f=new F;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){let y=x/s*r,g=p/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){let y=(s+1)*p+x-1,g=(s+1)*(p-1)+x-1,u=(s+1)*(p-1)+x,E=(s+1)*p+x;o.push(y,g,E),o.push(g,u,E)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ro=class extends di{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ct(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var at=class extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_s=class extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ma=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sa=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Lf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ba=class extends vs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xc,endingEnd:xc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yc:r=e,a=2*t-n;break;case _c:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yc:o=e,l=2*n-t;break;case _c:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),y=x*x,g=y*x,u=-f*g+2*f*y-f*x,E=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*x+1,S=(-1-p)*g+(1.5+p)*y+.5*x,v=p*g-p*y;for(let A=0;A!==a;++A)r[A]=u*o[h+A]+E*o[c+A]+S*o[l+A]+v*o[d+A];return r}},wa=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Ea=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qo(t,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qo(e.times,Array),values:Qo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ba(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Lf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ea,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,f=d-n,p=d+n;for(let x=0;x!==n;++x){let y=t[d+x];if(y!==t[f+x]||y!==t[p+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=ra;var ts=class extends Nn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Pr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Ta.prototype.ValueTypeName="color";var Aa=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Aa.prototype.ValueTypeName="number";var Ca=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Li.slerpFlat(r,0,o,c-a,o,c,l);return r}},oo=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}};oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Nn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Pr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Ra.prototype.ValueTypeName="vector";var Ia=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},qu=new Ia,Pa=class{constructor(e){this.manager=e!==void 0?e:qu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ao=class extends sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gc=new Vt,Kh=new F,jh=new F,Tc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ms=class extends zr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ac=class extends Tc{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rr=class extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Ac}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},lo=class extends sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Da=class extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Jc="\\[\\]\\.:\\/",Uf=new RegExp("["+Jc+"]","g"),$c="[^"+Jc+"]",Nf="[^"+Jc.replace("\\.","")+"]",Ff=/((?:WC+[\/:])*)/.source.replace("WC",$c),Of=/(WCOD+)?/.source.replace("WCOD",Nf),Bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),kf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),zf=new RegExp("^"+Ff+Of+Bf+kf+"$"),Hf=["material","materials","bones","map"],Cc=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uf,"")}static parseTrackName(e){let t=zf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Cc;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Oy=new Float32Array(1);function Kc(i,e,t,n){let s=Gf(n);switch(t){case kc:return i*e;case Hc:return i*e/s.components*s.byteLength;case Ja:return i*e/s.components*s.byteLength;case Gc:return i*e*2/s.components*s.byteLength;case $a:return i*e*2/s.components*s.byteLength;case zc:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case Ka:return i*e*4/s.components*s.byteLength;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:case tl:return Math.max(i,16)*Math.max(e,8)/4;case ja:case el:return Math.max(i,8)*Math.max(e,8)/2;case nl:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _l:case vl:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sl:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(i){switch(i){case oi:case Nc:return{byteLength:1,components:1};case or:case Fc:case ar:return{byteLength:2,components:1};case Ya:case Za:return{byteLength:2,components:4};case ss:case qa:case mi:return{byteLength:4,components:1};case Oc:case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);function gd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vf(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){let x=d[f],y=d[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){let y=d[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xf=`#ifdef USE_ALPHAHASH
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
#endif`,qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,sp=`#ifdef USE_BUMPMAP
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Gp=`struct PhysicalMaterial {
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
}`,Vp=`
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qp=`#if defined( USE_POINTS_UV )
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
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cm=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,$m=`#if DEPTH_PACKING == 3200
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
}`,Km=`#define DISTANCE
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
}`,jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,ag=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
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
}`,xg=`uniform float size;
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
}`,yg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,vg=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Wf,alphahash_pars_fragment:Xf,alphamap_fragment:qf,alphamap_pars_fragment:Yf,alphatest_fragment:Zf,alphatest_pars_fragment:Jf,aomap_fragment:$f,aomap_pars_fragment:Kf,batching_pars_vertex:jf,batching_vertex:Qf,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:ap,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:xp,emissivemap_fragment:yp,emissivemap_pars_fragment:_p,colorspace_fragment:vp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:bp,envmap_pars_fragment:wp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Fp,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:Cp,fog_fragment:Rp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Up,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:Bp,lights_phong_fragment:kp,lights_phong_pars_fragment:zp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Vp,lights_fragment_maps:Wp,lights_fragment_end:Xp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Jp,map_fragment:$p,map_pars_fragment:Kp,map_particle_fragment:jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:em,metalnessmap_pars_fragment:tm,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:om,normal_fragment_begin:am,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:xm,packing:ym,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:Am,shadowmask_pars_fragment:Cm,skinbase_vertex:Rm,skinning_pars_vertex:Im,skinning_vertex:Pm,skinnormal_vertex:Dm,specularmap_fragment:Lm,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:Fm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:km,uv_pars_vertex:zm,uv_vertex:Hm,worldpos_vertex:Gm,background_vert:Vm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:qm,cube_vert:Ym,cube_frag:Zm,depth_vert:Jm,depth_frag:$m,distanceRGBA_vert:Km,distanceRGBA_frag:jm,equirect_vert:Qm,equirect_frag:eg,linedashed_vert:tg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:ag,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:xg,points_frag:yg,shadow_vert:_g,shadow_frag:vg,sprite_vert:Mg,sprite_frag:Sg},Le={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},gi={basic:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ct(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:yn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:yn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ct(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:yn([Le.points,Le.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:yn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:yn([Le.common,Le.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:yn([Le.sprite,Le.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:yn([Le.common,Le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:yn([Le.lights,Le.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};gi.physical={uniforms:yn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Tl={r:0,b:0,g:0},Es=new si,bg=new Vt;function wg(i,e,t,n,s,r,o){let a=new ct(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function x(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function y(S){let v=!1,A=x(S);A===null?u(a,l):A&&A.isColor&&(u(A,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,v){let A=x(v);A&&(A.isCubeTexture||A.mapping===co)?(h===void 0&&(h=new Be(new Sn(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:ws(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Es.copy(v.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Es)),h.material.toneMapped=wt.getTransfer(A.colorSpace)!==It,(d!==A||f!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Be(new fi(2,2),new ri({name:"BackgroundMaterial",uniforms:ws(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=wt.getTransfer(A.colorSpace)!==It,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,v){S.getRGB(Tl,Yc(i)),n.buffers.color.setClear(Tl.r,Tl.g,Tl.b,v,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(a,l)},render:y,addToRenderList:g,dispose:E}}function Eg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,D,k,G,W){let J=!1,X=d(G,k,D);r!==X&&(r=X,c(r.object)),J=p(M,G,k,W),J&&x(M,G,k,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(M,D,k,G),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,D,k){let G=k.wireframe===!0,W=n[M.id];W===void 0&&(W={},n[M.id]=W);let J=W[D.id];J===void 0&&(J={},W[D.id]=J);let X=J[G];return X===void 0&&(X=f(l()),J[G]=X),X}function f(M){let D=[],k=[],G=[];for(let W=0;W<t;W++)D[W]=0,k[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:G,object:M,attributes:{},index:null}}function p(M,D,k,G){let W=r.attributes,J=D.attributes,X=0,oe=k.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let Ie=W[Z],Ue=J[Z];if(Ue===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Ue=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Ue=M.instanceColor)),Ie===void 0||Ie.attribute!==Ue||Ue&&Ie.data!==Ue.data)return!0;X++}return r.attributesNum!==X||r.index!==G}function x(M,D,k,G){let W={},J=D.attributes,X=0,oe=k.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let Ie=J[Z];Ie===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Ie=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Ie=M.instanceColor));let Ue={};Ue.attribute=Ie,Ie&&Ie.data&&(Ue.data=Ie.data),W[Z]=Ue,X++}r.attributes=W,r.attributesNum=X,r.index=G}function y(){let M=r.newAttributes;for(let D=0,k=M.length;D<k;D++)M[D]=0}function g(M){u(M,0)}function u(M,D){let k=r.newAttributes,G=r.enabledAttributes,W=r.attributeDivisors;k[M]=1,G[M]===0&&(i.enableVertexAttribArray(M),G[M]=1),W[M]!==D&&(i.vertexAttribDivisor(M,D),W[M]=D)}function E(){let M=r.newAttributes,D=r.enabledAttributes;for(let k=0,G=D.length;k<G;k++)D[k]!==M[k]&&(i.disableVertexAttribArray(k),D[k]=0)}function S(M,D,k,G,W,J,X){X===!0?i.vertexAttribIPointer(M,D,k,W,J):i.vertexAttribPointer(M,D,k,G,W,J)}function v(M,D,k,G){y();let W=G.attributes,J=k.getAttributes(),X=D.defaultAttributeValues;for(let oe in J){let Z=J[oe];if(Z.location>=0){let Me=W[oe];if(Me===void 0&&(oe==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),oe==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),Me!==void 0){let Ie=Me.normalized,Ue=Me.itemSize,st=e.get(Me);if(st===void 0)continue;let dt=st.buffer,ht=st.type,nt=st.bytesPerElement,K=ht===i.INT||ht===i.UNSIGNED_INT||Me.gpuType===qa;if(Me.isInterleavedBufferAttribute){let ae=Me.data,Fe=ae.stride,Xe=Me.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Z.locationSize;Ne++)u(Z.location+Ne,ae.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<Z.locationSize;Ne++)g(Z.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Ne=0;Ne<Z.locationSize;Ne++)S(Z.location+Ne,Ue/Z.locationSize,ht,Ie,Fe*nt,(Xe+Ue/Z.locationSize*Ne)*nt,K)}else{if(Me.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)u(Z.location+ae,Me.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ae=0;ae<Z.locationSize;ae++)g(Z.location+ae);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let ae=0;ae<Z.locationSize;ae++)S(Z.location+ae,Ue/Z.locationSize,ht,Ie,Ue*nt,Ue/Z.locationSize*ae*nt,K)}}else if(X!==void 0){let Ie=X[oe];if(Ie!==void 0)switch(Ie.length){case 2:i.vertexAttrib2fv(Z.location,Ie);break;case 3:i.vertexAttrib3fv(Z.location,Ie);break;case 4:i.vertexAttrib4fv(Z.location,Ie);break;default:i.vertexAttrib1fv(Z.location,Ie)}}}}E()}function A(){U();for(let M in n){let D=n[M];for(let k in D){let G=D[k];for(let W in G)h(G[W].object),delete G[W];delete D[k]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let D=n[M.id];for(let k in D){let G=D[k];for(let W in G)h(G[W].object),delete G[W];delete D[k]}delete n[M.id]}function L(M){for(let D in n){let k=n[D];if(k[M.id]===void 0)continue;let G=k[M.id];for(let W in G)h(G[W].object),delete G[W];delete k[M.id]}}function U(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:g,disableUnusedAttributes:E}}function Tg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x];t.update(p,n,1)}function l(c,h,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let x=0;for(let y=0;y<d;y++)x+=h[y]*f[y];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ag(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Vn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let U=L===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==oi&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==mi&&!U)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function Cg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new hi,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let x=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,u=i.get(d);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let E=r?0:n,S=E*4,v=u.clippingState||null;l.value=v,v=h(x,f,S,p);for(let A=0;A!==S;++A)v[A]=t[A];u.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,x){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,x!==!0||g===null){let u=p+y*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<u)&&(g=new Float32Array(u));for(let S=0,v=p;S!==y;++S,v+=4)o.copy(d[S]).applyMatrix4(E,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Rg(i){let e=new WeakMap;function t(o,a){return a===Va?o.mapping=Ss:a===Wa&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Va||a===Wa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ua(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var dr=4,Yu=[.125,.215,.35,.446,.526,.582],Cs=20,jc=new Ms,Zu=new ct,Qc=null,eh=0,th=0,nh=!1,As=(1+Math.sqrt(5))/2,ur=1/As,Ju=[new F(-As,ur,0),new F(As,ur,0),new F(-ur,0,As),new F(ur,0,As),new F(0,As,-ur),new F(0,As,ur),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Ig=new F,Rl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ig}=r;Qc=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:ar,format:Vn,colorSpace:fs,depthBuffer:!1},s=$u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(r)),this._blurMaterial=Dg(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,n,s,r){let l=new Cn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Zu),d.toneMapping=Ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let y=new on({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Be(new Sn,y),u=!1,E=e.background;E?E.isColor&&(y.color.copy(E),e.background=null,u=!0):(y.color.copy(Zu),u=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let A=this._cubeSize;Al(s,v*A,S>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ss||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Al(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,jc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ju[(s-r-1)%Ju.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Be(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Cs-1),y=r/x,g=isFinite(r)?1+Math.floor(h*y):Cs;g>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);let u=[],E=0;for(let L=0;L<Cs;++L){let U=L/y,b=Math.exp(-U*U/2);u.push(b),L===0?E+=b:L<g&&(E+=2*b)}for(let L=0;L<u.length;L++)u[L]=u[L]/E;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=x,f.mipInt.value=S-n;let v=this._sizeLods[s],A=3*v*(s>S-dr?s-S+dr:0),C=4*(this._cubeSize-v);Al(t,A,C,3*v,2*v),l.setRenderTarget(t),l.render(d,jc)}};function Pg(i){let e=[],t=[],n=[],s=i,r=i-dr+1+Yu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-dr?l=Yu[o-i+dr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,y=3,g=2,u=1,E=new Float32Array(y*x*p),S=new Float32Array(g*x*p),v=new Float32Array(u*x*p);for(let C=0;C<p;C++){let L=C%3*2/3-1,U=C>2?0:-1,b=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];E.set(b,y*x*C),S.set(f,g*x*C);let M=[C,C,C,C,C,C];v.set(M,u*x*C)}let A=new an;A.setAttribute("position",new xn(E,y)),A.setAttribute("uv",new xn(S,g)),A.setAttribute("faceIndex",new xn(v,u)),e.push(A),s>dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $u(i,e,t){let n=new ui(i,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Al(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dg(i,e,t){let n=new Float32Array(Cs),s=new F(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ku(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ju(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function Lg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Va||l===Wa,h=l===Ss||l===bs;if(c||h){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Rl(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Rl(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ug(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,x=d.attributes.position,y=0;if(p!==null){let E=p.array;y=p.version;for(let S=0,v=E.length;S<v;S+=3){let A=E[S+0],C=E[S+1],L=E[S+2];f.push(A,C,C,L,L,A)}}else if(x!==void 0){let E=x.array;y=x.version;for(let S=0,v=E.length/3-1;S<v;S+=3){let A=S+0,C=S+1,L=S+2;f.push(A,C,C,L,L,A)}}else return;let g=new(qc(f)?kr:Br)(f,1);g.version=y;let u=r.get(d);u&&e.remove(u),r.set(d,g)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Fg(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*o,x),t.update(p,n,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let g=0;for(let u=0;u<x;u++)g+=p[u];t.update(g,n,1)}function d(f,p,x,y){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,x);let u=0;for(let E=0;E<x;E++)u+=p[E]*y[E];t.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Og(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bg(i,e,t){let n=new WeakMap,s=new Wt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let b=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;p===!0&&(S=1),x===!0&&(S=2),y===!0&&(S=3);let v=a.attributes.position.count*S,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*A*4*d),L=new Nr(C,v,A,d);L.type=mi,L.needsUpdate=!0;let U=S*4;for(let M=0;M<d;M++){let D=g[M],k=u[M],G=E[M],W=v*A*4*M;for(let J=0;J<D.count;J++){let X=J*U;p===!0&&(s.fromBufferAttribute(D,J),C[W+X+0]=s.x,C[W+X+1]=s.y,C[W+X+2]=s.z,C[W+X+3]=0),x===!0&&(s.fromBufferAttribute(k,J),C[W+X+4]=s.x,C[W+X+5]=s.y,C[W+X+6]=s.z,C[W+X+7]=0),y===!0&&(s.fromBufferAttribute(G,J),C[W+X+8]=s.x,C[W+X+9]=s.y,C[W+X+10]=s.z,C[W+X+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Ce(v,A)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function kg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var xd=new Rn,Qu=new Wr(1,1),yd=new Nr,_d=new ca,vd=new Hr,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ed[s];if(r===void 0&&(r=new Float32Array(s),ed[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pl(i,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),nn(t,n)}}function Xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),nn(t,n)}}function qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),nn(t,n)}}function Yg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function Kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function e0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function t0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qu.compareFunction=Wc,r=Qu):r=xd,t.setTexture2D(e||r,s)}function n0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_d,s)}function i0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vd,s)}function s0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yd,s)}function r0(i){switch(i){case 5126:return zg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function o0(i,e){i.uniform1fv(this.addr,e)}function a0(i,e){let t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function l0(i,e){let t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function c0(i,e){let t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function h0(i,e){let t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function u0(i,e){let t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d0(i,e){let t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f0(i,e){i.uniform1iv(this.addr,e)}function p0(i,e){i.uniform2iv(this.addr,e)}function m0(i,e){i.uniform3iv(this.addr,e)}function g0(i,e){i.uniform4iv(this.addr,e)}function x0(i,e){i.uniform1uiv(this.addr,e)}function y0(i,e){i.uniform2uiv(this.addr,e)}function _0(i,e){i.uniform3uiv(this.addr,e)}function v0(i,e){i.uniform4uiv(this.addr,e)}function M0(i,e,t){let n=this.cache,s=e.length,r=Pl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xd,r[o])}function S0(i,e,t){let n=this.cache,s=e.length,r=Pl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_d,r[o])}function b0(i,e,t){let n=this.cache,s=e.length,r=Pl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vd,r[o])}function w0(i,e,t){let n=this.cache,s=e.length,r=Pl(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yd,r[o])}function E0(i){switch(i){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return x0;case 36294:return y0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return w0}}var sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r0(t.type)}},rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}},oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ih=/(\w+)(\])?(\[|\.)?/g;function rd(i,e){i.seq.push(e),i.map[e.id]=e}function T0(i,e,t){let n=i.name,s=n.length;for(ih.lastIndex=0;;){let r=ih.exec(n),o=ih.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rd(t,c===void 0?new sh(a,i,e):new rh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new oh(a),rd(t,d)),t=d}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);T0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var A0=37297,C0=0;function R0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ad=new mt;function I0(i){wt._getMatrix(ad,wt.workingColorSpace,i);let e=`mat3( ${ad.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Dr:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ld(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+R0(i.getShaderSource(e),a)}else return r}function P0(i,e){let t=I0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D0(i,e){let t;switch(e){case Mu:t="Linear";break;case Su:t="Reinhard";break;case bu:t="Cineon";break;case Ga:t="ACESFilmic";break;case Eu:t="AgX";break;case Tu:t="Neutral";break;case wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cl=new F;function L0(){wt.getLuminanceCoefficients(Cl);let i=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function N0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function go(i){return i!==""}function cd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(i){return i.replace(O0,k0)}var B0=new Map;function k0(i,e){let t=gt[e];if(t===void 0){let n=B0.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ah(t)}var z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(z0,H0)}function H0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function G0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ua?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function V0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case bs:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function X0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lc:e="ENVMAP_BLENDING_MULTIPLY";break;case _u:e="ENVMAP_BLENDING_MIX";break;case vu:e="ENVMAP_BLENDING_ADD";break}return e}function q0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=G0(t),c=V0(t),h=W0(t),d=X0(t),f=q0(t),p=U0(t),x=N0(r),y=s.createProgram(),g,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(go).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(go).join(`
`),u.length>0&&(u+=`
`)):(g=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),u=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),L0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),o=ah(o),o=cd(o,t),o=hd(o,t),a=ah(a),a=cd(a,t),a=hd(a,t),o=ud(o),a=ud(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=E+g+o,v=E+u+a,A=od(s,s.VERTEX_SHADER,S),C=od(s,s.FRAGMENT_SHADER,v);s.attachShader(y,A),s.attachShader(y,C),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(D){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(C)||"",J=k.trim(),X=G.trim(),oe=W.trim(),Z=!0,Me=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,C);else{let Ie=ld(s,A,"vertex"),Ue=ld(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+J+`
`+Ie+`
`+Ue)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(X===""||oe==="")&&(Me=!1);Me&&(D.diagnostics={runnable:Z,programLog:J,vertexShader:{log:X,prefix:g},fragmentShader:{log:oe,prefix:u}})}s.deleteShader(A),s.deleteShader(C),U=new fr(s,y),b=F0(s,y)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,A0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=C,this}var Z0=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ch(e),t.set(e,n)),n}},ch=class{constructor(e){this.id=Z0++,this.code=e,this.usedTimes=0}};function J0(i,e,t,n,s,r,o){let a=new Or,l=new lh,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,D,k,G){let W=k.fog,J=G.geometry,X=b.isMeshStandardMaterial?k.environment:null,oe=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),Z=oe&&oe.mapping===co?oe.image.height:null,Me=x[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let Ie=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ue=Ie!==void 0?Ie.length:0,st=0;J.morphAttributes.position!==void 0&&(st=1),J.morphAttributes.normal!==void 0&&(st=2),J.morphAttributes.color!==void 0&&(st=3);let dt,ht,nt,K;if(Me){let je=gi[Me];dt=je.vertexShader,ht=je.fragmentShader}else dt=b.vertexShader,ht=b.fragmentShader,l.update(b),nt=l.getVertexShaderID(b),K=l.getFragmentShaderID(b);let ae=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),Xe=G.isInstancedMesh===!0,Ne=G.isBatchedMesh===!0,pt=!!b.map,Mt=!!b.matcap,P=!!oe,le=!!b.aoMap,ie=!!b.lightMap,Q=!!b.bumpMap,te=!!b.normalMap,Se=!!b.displacementMap,de=!!b.emissiveMap,Ee=!!b.metalnessMap,rt=!!b.roughnessMap,it=b.anisotropy>0,T=b.clearcoat>0,_=b.dispersion>0,z=b.iridescence>0,q=b.sheen>0,ce=b.transmission>0,Y=it&&!!b.anisotropyMap,Ge=T&&!!b.clearcoatMap,_e=T&&!!b.clearcoatNormalMap,Ve=T&&!!b.clearcoatRoughnessMap,ze=z&&!!b.iridescenceMap,me=z&&!!b.iridescenceThicknessMap,De=q&&!!b.sheenColorMap,Ye=q&&!!b.sheenRoughnessMap,We=!!b.specularMap,Te=!!b.specularColorMap,lt=!!b.specularIntensityMap,N=ce&&!!b.transmissionMap,ge=ce&&!!b.thicknessMap,ye=!!b.gradientMap,ke=!!b.alphaMap,pe=b.alphaTest>0,I=!!b.alphaHash,ne=!!b.extensions,ee=Ni;b.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ee=i.toneMapping);let He={shaderID:Me,shaderType:b.type,shaderName:b.name,vertexShader:dt,fragmentShader:ht,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&G._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&G.instanceColor!==null,instancingMorph:Xe&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:fs,alphaToCoverage:!!b.alphaToCoverage,map:pt,matcap:Mt,envMap:P,envMapMode:P&&oe.mapping,envMapCubeUVHeight:Z,aoMap:le,lightMap:ie,bumpMap:Q,normalMap:te,displacementMap:f&&Se,emissiveMap:de,normalMapObjectSpace:te&&b.normalMapType===Iu,normalMapTangentSpace:te&&b.normalMapType===Vc,metalnessMap:Ee,roughnessMap:rt,anisotropy:it,anisotropyMap:Y,clearcoat:T,clearcoatMap:Ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ve,dispersion:_,iridescence:z,iridescenceMap:ze,iridescenceThicknessMap:me,sheen:q,sheenColorMap:De,sheenRoughnessMap:Ye,specularMap:We,specularColorMap:Te,specularIntensityMap:lt,transmission:ce,transmissionMap:N,thicknessMap:ge,gradientMap:ye,opaque:b.transparent===!1&&b.blending===us&&b.alphaToCoverage===!1,alphaMap:ke,alphaTest:pe,alphaHash:I,combine:b.combine,mapUv:pt&&y(b.map.channel),aoMapUv:le&&y(b.aoMap.channel),lightMapUv:ie&&y(b.lightMap.channel),bumpMapUv:Q&&y(b.bumpMap.channel),normalMapUv:te&&y(b.normalMap.channel),displacementMapUv:Se&&y(b.displacementMap.channel),emissiveMapUv:de&&y(b.emissiveMap.channel),metalnessMapUv:Ee&&y(b.metalnessMap.channel),roughnessMapUv:rt&&y(b.roughnessMap.channel),anisotropyMapUv:Y&&y(b.anisotropyMap.channel),clearcoatMapUv:Ge&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&y(b.sheenRoughnessMap.channel),specularMapUv:We&&y(b.specularMap.channel),specularColorMapUv:Te&&y(b.specularColorMap.channel),specularIntensityMapUv:lt&&y(b.specularIntensityMap.channel),transmissionMapUv:N&&y(b.transmissionMap.channel),thicknessMapUv:ge&&y(b.thicknessMap.channel),alphaMapUv:ke&&y(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(te||it),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(pt||ke),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Fe,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:st,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:pt&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===It,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===It,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bn,flipSided:b.side===un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ne&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&b.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function u(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(E(M,b),S(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=x[b.type],D;if(M){let k=gi[M];D=Hu.clone(k.uniforms)}else D=b.uniforms;return D}function A(b,M){let D;for(let k=0,G=h.length;k<G;k++){let W=h[k];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Y0(i,M,b,r),h.push(D)),D}function C(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function L(b){l.remove(b)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:U}}function $0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function K0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,p,x,y,g){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:y,group:g},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=y,u.group=g),e++,u}function a(d,f,p,x,y,g){let u=o(d,f,p,x,y,g);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(d,f,p,x,y,g){let u=o(d,f,p,x,y,g);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||K0),n.length>1&&n.sort(f||fd),s.length>1&&s.sort(f||fd)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function j0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ct};break;case"SpotLight":t={position:new F,direction:new F,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function ex(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tx=0;function nx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ix(i){let e=new Q0,t=ex(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Vt,o=new Vt;function a(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,x=0,y=0,g=0,u=0,E=0,S=0,v=0,A=0,C=0,L=0;c.sort(nx);for(let b=0,M=c.length;b<M;b++){let D=c[b],k=D.color,G=D.intensity,W=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*G,d+=k.g*G,f+=k.b*G;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],G);L++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let oe=D.shadow,Z=t.get(D);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=D.shadow.matrix,E++}n.directional[p]=X,p++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(k).multiplyScalar(G),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[y]=X;let oe=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,oe.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[y]=oe.matrix,D.castShadow){let Z=t.get(D);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=J,v++}y++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(k).multiplyScalar(G),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=X,g++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let oe=D.shadow,Z=t.get(D);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,Z.shadowCameraNear=oe.camera.near,Z.shadowCameraFar=oe.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=J,n.pointShadowMatrix[x]=D.shadow.matrix,S++}n.point[x]=X,x++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(G),X.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[u]=X,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==p||U.pointLength!==x||U.spotLength!==y||U.rectAreaLength!==g||U.hemiLength!==u||U.numDirectionalShadows!==E||U.numPointShadows!==S||U.numSpotShadows!==v||U.numSpotMaps!==A||U.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=g,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,U.directionalLength=p,U.pointLength=x,U.spotLength=y,U.rectAreaLength=g,U.hemiLength=u,U.numDirectionalShadows=E,U.numPointShadows=S,U.numSpotShadows=v,U.numSpotMaps=A,U.numLightProbes=L,n.version=tx++)}function l(c,h){let d=0,f=0,p=0,x=0,y=0,g=h.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){let S=c[u];if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(S.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function md(i){let e=new ix(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new md(i),e.set(s,[a])):r>=o.length?(a=new md(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
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
}`;function ax(i,e,t){let n=new js,s=new Ce,r=new Ce,o=new Wt,a=new Ma({depthPacking:Ru}),l=new Sa,c={},h=t.maxTextureSize,d={[Pi]:un,[un]:Pi,[bn]:bn},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new an;x.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Be(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let u=this.type;this.render=function(C,L,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ui),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let G=u!==pi&&this.type===pi,W=u===pi&&this.type!==pi;for(let J=0,X=C.length;J<X;J++){let oe=C[J],Z=oe.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Me=Z.getFrameExtents();if(s.multiply(Me),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Me.x),s.x=r.x*Me.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Me.y),s.y=r.y*Me.y,Z.mapSize.y=r.y)),Z.map===null||G===!0||W===!0){let Ue=this.type!==pi?{minFilter:Hn,magFilter:Hn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ui(s.x,s.y,Ue),Z.map.texture.name=oe.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let Ie=Z.getViewportCount();for(let Ue=0;Ue<Ie;Ue++){let st=Z.getViewport(Ue);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),k.viewport(o),Z.updateMatrices(oe,Ue),n=Z.getFrustum(),v(L,U,Z.camera,oe,this.type)}Z.isPointLightShadow!==!0&&this.type===pi&&E(Z,U),Z.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,D)};function E(C,L){let U=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ui(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,U,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,U,p,y,null)}function S(C,L,U,b){let M=null,D=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=M.uuid,G=L.uuid,W=c[k];W===void 0&&(W={},c[k]=W);let J=W[G];J===void 0&&(J=M.clone(),W[G]=J,L.addEventListener("dispose",A)),M=J}if(M.visible=L.visible,M.wireframe=L.wireframe,b===pi?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=U}return M}function v(C,L,U,b,M){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===pi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let G=e.update(C),W=C.material;if(Array.isArray(W)){let J=G.groups;for(let X=0,oe=J.length;X<oe;X++){let Z=J[X],Me=W[Z.materialIndex];if(Me&&Me.visible){let Ie=S(C,Me,b,M);C.onBeforeShadow(i,C,L,U,G,Ie,Z),i.renderBufferDirect(U,null,G,Ie,C,Z),C.onAfterShadow(i,C,L,U,G,Ie,Z)}}}else if(W.visible){let J=S(C,W,b,M);C.onBeforeShadow(i,C,L,U,G,J,null),i.renderBufferDirect(U,null,G,J,C,null),C.onAfterShadow(i,C,L,U,G,J,null)}}let k=C.children;for(let G=0,W=k.length;G<W;G++)v(k[G],L,U,b,M)}function A(C){C.target.removeEventListener("dispose",A);for(let U in c){let b=c[U],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var lx={[Na]:Fa,[Oa]:za,[Ba]:Ha,[ds]:ka,[Fa]:Na,[za]:Oa,[Ha]:Ba,[ka]:ds};function cx(i,e){function t(){let N=!1,ge=new Wt,ye=null,ke=new Wt(0,0,0,0);return{setMask:function(pe){ye!==pe&&!N&&(i.colorMask(pe,pe,pe,pe),ye=pe)},setLocked:function(pe){N=pe},setClear:function(pe,I,ne,ee,He){He===!0&&(pe*=ee,I*=ee,ne*=ee),ge.set(pe,I,ne,ee),ke.equals(ge)===!1&&(i.clearColor(pe,I,ne,ee),ke.copy(ge))},reset:function(){N=!1,ye=null,ke.set(-1,0,0,0)}}}function n(){let N=!1,ge=!1,ye=null,ke=null,pe=null;return{setReversed:function(I){if(ge!==I){let ne=e.get("EXT_clip_control");I?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),ge=I;let ee=pe;pe=null,this.setClear(ee)}},getReversed:function(){return ge},setTest:function(I){I?ae(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(I){ye!==I&&!N&&(i.depthMask(I),ye=I)},setFunc:function(I){if(ge&&(I=lx[I]),ke!==I){switch(I){case Na:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=I}},setLocked:function(I){N=I},setClear:function(I){pe!==I&&(ge&&(I=1-I),i.clearDepth(I),pe=I)},reset:function(){N=!1,ye=null,ke=null,pe=null,ge=!1}}}function s(){let N=!1,ge=null,ye=null,ke=null,pe=null,I=null,ne=null,ee=null,He=null;return{setTest:function(je){N||(je?ae(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(je){ge!==je&&!N&&(i.stencilMask(je),ge=je)},setFunc:function(je,_t,tt){(ye!==je||ke!==_t||pe!==tt)&&(i.stencilFunc(je,_t,tt),ye=je,ke=_t,pe=tt)},setOp:function(je,_t,tt){(I!==je||ne!==_t||ee!==tt)&&(i.stencilOp(je,_t,tt),I=je,ne=_t,ee=tt)},setLocked:function(je){N=je},setClear:function(je){He!==je&&(i.clearStencil(je),He=je)},reset:function(){N=!1,ge=null,ye=null,ke=null,pe=null,I=null,ne=null,ee=null,He=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],x=null,y=!1,g=null,u=null,E=null,S=null,v=null,A=null,C=null,L=new ct(0,0,0),U=0,b=!1,M=null,D=null,k=null,G=null,W=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,oe=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=oe>=2);let Me=null,Ie={},Ue=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),dt=new Wt().fromArray(Ue),ht=new Wt().fromArray(st);function nt(N,ge,ye,ke){let pe=new Uint8Array(4),I=i.createTexture();i.bindTexture(N,I),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<ye;ne++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ge+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return I}let K={};K[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(ds),Q(!1),te(Rc),ae(i.CULL_FACE),le(Ui);function ae(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Fe(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Xe(N,ge){return d[N]!==ge?(i.bindFramebuffer(N,ge),d[N]=ge,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ge),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ne(N,ge){let ye=p,ke=!1;if(N){ye=f.get(ge),ye===void 0&&(ye=[],f.set(ge,ye));let pe=N.textures;if(ye.length!==pe.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let I=0,ne=pe.length;I<ne;I++)ye[I]=i.COLOR_ATTACHMENT0+I;ye.length=pe.length,ke=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,ke=!0);ke&&i.drawBuffers(ye)}function pt(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let Mt={[Qi]:i.FUNC_ADD,[nu]:i.FUNC_SUBTRACT,[iu]:i.FUNC_REVERSE_SUBTRACT};Mt[su]=i.MIN,Mt[ru]=i.MAX;let P={[ou]:i.ZERO,[au]:i.ONE,[lu]:i.SRC_COLOR,[ta]:i.SRC_ALPHA,[pu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[hu]:i.DST_ALPHA,[cu]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[uu]:i.ONE_MINUS_DST_ALPHA,[mu]:i.CONSTANT_COLOR,[gu]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[yu]:i.ONE_MINUS_CONSTANT_ALPHA};function le(N,ge,ye,ke,pe,I,ne,ee,He,je){if(N===Ui){y===!0&&(Fe(i.BLEND),y=!1);return}if(y===!1&&(ae(i.BLEND),y=!0),N!==tu){if(N!==g||je!==b){if((u!==Qi||v!==Qi)&&(i.blendEquation(i.FUNC_ADD),u=Qi,v=Qi),je)switch(N){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,S=null,A=null,C=null,L.set(0,0,0),U=0,g=N,b=je}return}pe=pe||ge,I=I||ye,ne=ne||ke,(ge!==u||pe!==v)&&(i.blendEquationSeparate(Mt[ge],Mt[pe]),u=ge,v=pe),(ye!==E||ke!==S||I!==A||ne!==C)&&(i.blendFuncSeparate(P[ye],P[ke],P[I],P[ne]),E=ye,S=ke,A=I,C=ne),(ee.equals(L)===!1||He!==U)&&(i.blendColor(ee.r,ee.g,ee.b,He),L.copy(ee),U=He),g=N,b=!1}function ie(N,ge){N.side===bn?Fe(i.CULL_FACE):ae(i.CULL_FACE);let ye=N.side===un;ge&&(ye=!ye),Q(ye),N.blending===us&&N.transparent===!1?le(Ui):le(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ke=N.stencilWrite;a.setTest(ke),ke&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),de(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function te(N){N!==Qh?(ae(i.CULL_FACE),N!==D&&(N===Rc?i.cullFace(i.BACK):N===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),D=N}function Se(N){N!==k&&(X&&i.lineWidth(N),k=N)}function de(N,ge,ye){N?(ae(i.POLYGON_OFFSET_FILL),(G!==ge||W!==ye)&&(i.polygonOffset(ge,ye),G=ge,W=ye)):Fe(i.POLYGON_OFFSET_FILL)}function Ee(N){N?ae(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function rt(N){N===void 0&&(N=i.TEXTURE0+J-1),Me!==N&&(i.activeTexture(N),Me=N)}function it(N,ge,ye){ye===void 0&&(Me===null?ye=i.TEXTURE0+J-1:ye=Me);let ke=Ie[ye];ke===void 0&&(ke={type:void 0,texture:void 0},Ie[ye]=ke),(ke.type!==N||ke.texture!==ge)&&(Me!==ye&&(i.activeTexture(ye),Me=ye),i.bindTexture(N,ge||K[N]),ke.type=N,ke.texture=ge)}function T(){let N=Ie[Me];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(N){dt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),dt.copy(N))}function Ye(N){ht.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ht.copy(N))}function We(N,ge){let ye=c.get(ge);ye===void 0&&(ye=new WeakMap,c.set(ge,ye));let ke=ye.get(N);ke===void 0&&(ke=i.getUniformBlockIndex(ge,N.name),ye.set(N,ke))}function Te(N,ge){let ke=c.get(ge).get(N);l.get(ge)!==ke&&(i.uniformBlockBinding(ge,ke,N.__bindingPointIndex),l.set(ge,ke))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Me=null,Ie={},d={},f=new WeakMap,p=[],x=null,y=!1,g=null,u=null,E=null,S=null,v=null,A=null,C=null,L=new ct(0,0,0),U=0,b=!1,M=null,D=null,k=null,G=null,W=null,dt.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Fe,bindFramebuffer:Xe,drawBuffers:Ne,useProgram:pt,setBlending:le,setMaterial:ie,setFlipSided:Q,setCullFace:te,setLineWidth:Se,setPolygonOffset:de,setScissorTest:Ee,activeTexture:rt,bindTexture:it,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:ze,texImage3D:me,updateUBOMapping:We,uniformBlockBinding:Te,texStorage2D:_e,texStorage3D:Ve,texSubImage2D:q,texSubImage3D:ce,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ge,scissor:De,viewport:Ye,reset:lt}}function hx(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function x(T,_){return p?new OffscreenCanvas(T,_):Ur("canvas")}function y(T,_,z){let q=1,ce=it(T);if((ce.width>z||ce.height>z)&&(q=z/Math.max(ce.width,ce.height)),q<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let Y=Math.floor(q*ce.width),Ge=Math.floor(q*ce.height);d===void 0&&(d=x(Y,Ge));let _e=_?x(Y,Ge):d;return _e.width=Y,_e.height=Ge,_e.getContext("2d").drawImage(T,0,0,Y,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Y+"x"+Ge+")."),_e}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),T;return T}function g(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,_,z,q,ce=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),_===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let Ge=ce?Dr:wt.getTransfer(q);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Ge===It?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(T,_){let z;return T?_===null||_===ss||_===lr?z=i.DEPTH24_STENCIL8:_===mi?z=i.DEPTH32F_STENCIL8:_===or&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ss||_===lr?z=i.DEPTH_COMPONENT24:_===mi?z=i.DEPTH_COMPONENT32F:_===or&&(z=i.DEPTH_COMPONENT16),z}function A(T,_){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Hn&&T.minFilter!==ii?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){let _=T.target;_.removeEventListener("dispose",C),U(_),_.isVideoTexture&&h.delete(_)}function L(T){let _=T.target;_.removeEventListener("dispose",L),M(_)}function U(T){let _=n.get(T);if(_.__webglInit===void 0)return;let z=T.source,q=f.get(z);if(q){let ce=q[_.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&b(T),Object.keys(q).length===0&&f.delete(z)}n.remove(T)}function b(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let z=T.source,q=f.get(z);delete q[_.__cacheKey],o.memory.textures--}function M(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let ce=0;ce<_.__webglFramebuffer[q].length;ce++)i.deleteFramebuffer(_.__webglFramebuffer[q][ce]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=T.textures;for(let q=0,ce=z.length;q<ce;q++){let Y=n.get(z[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(T)}let D=0;function k(){D=0}function G(){let T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function W(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function J(T,_){let z=n.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function X(T,_){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){K(z,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function oe(T,_){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){K(z,T,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function Z(T,_){let z=n.get(T);if(T.version>0&&z.__version!==T.version){ae(z,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let Me={[ia]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},Ie={[Hn]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[ho]:i.NEAREST_MIPMAP_LINEAR,[ii]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},Ue={[Pu]:i.NEVER,[Ou]:i.ALWAYS,[Du]:i.LESS,[Wc]:i.LEQUAL,[Lu]:i.EQUAL,[Fu]:i.GEQUAL,[Uu]:i.GREATER,[Nu]:i.NOTEQUAL};function st(T,_){if(_.type===mi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ii||_.magFilter===Xa||_.magFilter===ho||_.magFilter===is||_.minFilter===ii||_.minFilter===Xa||_.minFilter===ho||_.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Me[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Me[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Me[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ie[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ie[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Hn||_.minFilter!==ho&&_.minFilter!==is||_.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function dt(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));let q=_.source,ce=f.get(q);ce===void 0&&(ce={},f.set(q,ce));let Y=W(_);if(Y!==T.__cacheKey){ce[Y]===void 0&&(ce[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ce[Y].usedTimes++;let Ge=ce[T.__cacheKey];Ge!==void 0&&(ce[T.__cacheKey].usedTimes--,Ge.usedTimes===0&&b(_)),T.__cacheKey=Y,T.__webglTexture=ce[Y].texture}return z}function ht(T,_,z){return Math.floor(Math.floor(T/z)/_)}function nt(T,_,z,q){let Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,q,_.data);else{Y.sort((me,De)=>me.start-De.start);let Ge=0;for(let me=1;me<Y.length;me++){let De=Y[Ge],Ye=Y[me],We=De.start+De.count,Te=ht(Ye.start,_.width,4),lt=ht(De.start,_.width,4);Ye.start<=We+1&&Te===lt&&ht(Ye.start+Ye.count-1,_.width,4)===Te?De.count=Math.max(De.count,Ye.start+Ye.count-De.start):(++Ge,Y[Ge]=Ye)}Y.length=Ge+1;let _e=i.getParameter(i.UNPACK_ROW_LENGTH),Ve=i.getParameter(i.UNPACK_SKIP_PIXELS),ze=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let me=0,De=Y.length;me<De;me++){let Ye=Y[me],We=Math.floor(Ye.start/4),Te=Math.ceil(Ye.count/4),lt=We%_.width,N=Math.floor(We/_.width),ge=Te,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,lt,N,ge,ye,z,q,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,ze)}}function K(T,_,z){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);let ce=dt(T,_),Y=_.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+z);let Ge=n.get(Y);if(Y.version!==Ge.__version||ce===!0){t.activeTexture(i.TEXTURE0+z);let _e=wt.getPrimaries(wt.workingColorSpace),Ve=_.colorSpace===Fi?null:wt.getPrimaries(_.colorSpace),ze=_.colorSpace===Fi||_e===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let me=y(_.image,!1,s.maxTextureSize);me=rt(_,me);let De=r.convert(_.format,_.colorSpace),Ye=r.convert(_.type),We=S(_.internalFormat,De,Ye,_.colorSpace,_.isVideoTexture);st(q,_);let Te,lt=_.mipmaps,N=_.isVideoTexture!==!0,ge=Ge.__version===void 0||ce===!0,ye=Y.dataReady,ke=A(_,me);if(_.isDepthTexture)We=v(_.format===cr,_.type),ge&&(N?t.texStorage2D(i.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,We,me.width,me.height,0,De,Ye,null));else if(_.isDataTexture)if(lt.length>0){N&&ge&&t.texStorage2D(i.TEXTURE_2D,ke,We,lt[0].width,lt[0].height);for(let pe=0,I=lt.length;pe<I;pe++)Te=lt[pe],N?ye&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Te.width,Te.height,De,Ye,Te.data):t.texImage2D(i.TEXTURE_2D,pe,We,Te.width,Te.height,0,De,Ye,Te.data);_.generateMipmaps=!1}else N?(ge&&t.texStorage2D(i.TEXTURE_2D,ke,We,me.width,me.height),ye&&nt(_,me,De,Ye)):t.texImage2D(i.TEXTURE_2D,0,We,me.width,me.height,0,De,Ye,me.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,We,lt[0].width,lt[0].height,me.depth);for(let pe=0,I=lt.length;pe<I;pe++)if(Te=lt[pe],_.format!==Vn)if(De!==null)if(N){if(ye)if(_.layerUpdates.size>0){let ne=Kc(Te.width,Te.height,_.format,_.type);for(let ee of _.layerUpdates){let He=Te.data.subarray(ee*ne/Te.data.BYTES_PER_ELEMENT,(ee+1)*ne/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,ee,Te.width,Te.height,1,De,He)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Te.width,Te.height,me.depth,De,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,We,Te.width,Te.height,me.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Te.width,Te.height,me.depth,De,Ye,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,We,Te.width,Te.height,me.depth,0,De,Ye,Te.data)}else{N&&ge&&t.texStorage2D(i.TEXTURE_2D,ke,We,lt[0].width,lt[0].height);for(let pe=0,I=lt.length;pe<I;pe++)Te=lt[pe],_.format!==Vn?De!==null?N?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,Te.width,Te.height,De,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,We,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ye&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Te.width,Te.height,De,Ye,Te.data):t.texImage2D(i.TEXTURE_2D,pe,We,Te.width,Te.height,0,De,Ye,Te.data)}else if(_.isDataArrayTexture)if(N){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,We,me.width,me.height,me.depth),ye)if(_.layerUpdates.size>0){let pe=Kc(me.width,me.height,_.format,_.type);for(let I of _.layerUpdates){let ne=me.data.subarray(I*pe/me.data.BYTES_PER_ELEMENT,(I+1)*pe/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,I,me.width,me.height,1,De,Ye,ne)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,De,Ye,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,De,Ye,me.data);else if(_.isData3DTexture)N?(ge&&t.texStorage3D(i.TEXTURE_3D,ke,We,me.width,me.height,me.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,De,Ye,me.data)):t.texImage3D(i.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,De,Ye,me.data);else if(_.isFramebufferTexture){if(ge)if(N)t.texStorage2D(i.TEXTURE_2D,ke,We,me.width,me.height);else{let pe=me.width,I=me.height;for(let ne=0;ne<ke;ne++)t.texImage2D(i.TEXTURE_2D,ne,We,pe,I,0,De,Ye,null),pe>>=1,I>>=1}}else if(lt.length>0){if(N&&ge){let pe=it(lt[0]);t.texStorage2D(i.TEXTURE_2D,ke,We,pe.width,pe.height)}for(let pe=0,I=lt.length;pe<I;pe++)Te=lt[pe],N?ye&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,De,Ye,Te):t.texImage2D(i.TEXTURE_2D,pe,We,De,Ye,Te);_.generateMipmaps=!1}else if(N){if(ge){let pe=it(me);t.texStorage2D(i.TEXTURE_2D,ke,We,pe.width,pe.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Ye,me)}else t.texImage2D(i.TEXTURE_2D,0,We,De,Ye,me);g(_)&&u(q),Ge.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ae(T,_,z){if(_.image.length!==6)return;let q=dt(T,_),ce=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let Y=n.get(ce);if(ce.version!==Y.__version||q===!0){t.activeTexture(i.TEXTURE0+z);let Ge=wt.getPrimaries(wt.workingColorSpace),_e=_.colorSpace===Fi?null:wt.getPrimaries(_.colorSpace),Ve=_.colorSpace===Fi||Ge===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ze=_.isCompressedTexture||_.image[0].isCompressedTexture,me=_.image[0]&&_.image[0].isDataTexture,De=[];for(let I=0;I<6;I++)!ze&&!me?De[I]=y(_.image[I],!0,s.maxCubemapSize):De[I]=me?_.image[I].image:_.image[I],De[I]=rt(_,De[I]);let Ye=De[0],We=r.convert(_.format,_.colorSpace),Te=r.convert(_.type),lt=S(_.internalFormat,We,Te,_.colorSpace),N=_.isVideoTexture!==!0,ge=Y.__version===void 0||q===!0,ye=ce.dataReady,ke=A(_,Ye);st(i.TEXTURE_CUBE_MAP,_);let pe;if(ze){N&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,lt,Ye.width,Ye.height);for(let I=0;I<6;I++){pe=De[I].mipmaps;for(let ne=0;ne<pe.length;ne++){let ee=pe[ne];_.format!==Vn?We!==null?N?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ne,0,0,ee.width,ee.height,We,ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ne,lt,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ne,0,0,ee.width,ee.height,We,Te,ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ne,lt,ee.width,ee.height,0,We,Te,ee.data)}}}else{if(pe=_.mipmaps,N&&ge){pe.length>0&&ke++;let I=it(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,lt,I.width,I.height)}for(let I=0;I<6;I++)if(me){N?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,De[I].width,De[I].height,We,Te,De[I].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,lt,De[I].width,De[I].height,0,We,Te,De[I].data);for(let ne=0;ne<pe.length;ne++){let He=pe[ne].image[I].image;N?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ne+1,0,0,He.width,He.height,We,Te,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ne+1,lt,He.width,He.height,0,We,Te,He.data)}}else{N?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,We,Te,De[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,lt,We,Te,De[I]);for(let ne=0;ne<pe.length;ne++){let ee=pe[ne];N?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ne+1,0,0,We,Te,ee.image[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,ne+1,lt,We,Te,ee.image[I])}}}g(_)&&u(i.TEXTURE_CUBE_MAP),Y.__version=ce.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Fe(T,_,z,q,ce,Y){let Ge=r.convert(z.format,z.colorSpace),_e=r.convert(z.type),Ve=S(z.internalFormat,Ge,_e,z.colorSpace),ze=n.get(_),me=n.get(z);if(me.__renderTarget=_,!ze.__hasExternalTextures){let De=Math.max(1,_.width>>Y),Ye=Math.max(1,_.height>>Y);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,Y,Ve,De,Ye,_.depth,0,Ge,_e,null):t.texImage2D(ce,Y,Ve,De,Ye,0,Ge,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),de(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,ce,me.__webglTexture,0,Se(_)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,ce,me.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(T,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let q=_.depthTexture,ce=q&&q.isDepthTexture?q.type:null,Y=v(_.stencilBuffer,ce),Ge=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=Se(_);de(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,Y,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,T)}else{let q=_.textures;for(let ce=0;ce<q.length;ce++){let Y=q[ce],Ge=r.convert(Y.format,Y.colorSpace),_e=r.convert(Y.type),Ve=S(Y.internalFormat,Ge,_e,Y.colorSpace),ze=Se(_);z&&de(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ve,_.width,_.height):de(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,Ve,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);let ce=q.__webglTexture,Y=Se(_);if(_.depthTexture.format===Zs)de(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(_.depthTexture.format===cr)de(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function pt(T){let _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let ce=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",ce)};q.addEventListener("dispose",ce),_.__depthDisposeCallback=ce}_.__boundDepthTexture=q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let q=T.texture.mipmaps;q&&q.length>0?Ne(_.__webglFramebuffer[0],T):Ne(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),Xe(_.__webglDepthbuffer[q],T,!1);else{let ce=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Y)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Xe(_.__webglDepthbuffer,T,!1);else{let ce=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(T,_,z){let q=n.get(T);_!==void 0&&Fe(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&pt(T)}function P(T){let _=T.texture,z=n.get(T),q=n.get(_);T.addEventListener("dispose",L);let ce=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Ge=ce.length>1;if(Ge||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[_e]=[];for(let Ve=0;Ve<_.mipmaps.length;Ve++)z.__webglFramebuffer[_e][Ve]=i.createFramebuffer()}else z.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let _e=0;_e<_.mipmaps.length;_e++)z.__webglFramebuffer[_e]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let _e=0,Ve=ce.length;_e<Ve;_e++){let ze=n.get(ce[_e]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&de(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _e=0;_e<ce.length;_e++){let Ve=ce[_e];z.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[_e]);let ze=r.convert(Ve.format,Ve.colorSpace),me=r.convert(Ve.type),De=S(Ve.internalFormat,ze,me,Ve.colorSpace,T.isXRRenderTarget===!0),Ye=Se(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,De,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,z.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),st(i.TEXTURE_CUBE_MAP,_);for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ve=0;Ve<_.mipmaps.length;Ve++)Fe(z.__webglFramebuffer[_e][Ve],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ve);else Fe(z.__webglFramebuffer[_e],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let _e=0,Ve=ce.length;_e<Ve;_e++){let ze=ce[_e],me=n.get(ze),De=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(De=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(De,me.__webglTexture),st(De,ze),Fe(z.__webglFramebuffer,T,ze,i.COLOR_ATTACHMENT0+_e,De,0),g(ze)&&u(De)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_e=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,q.__webglTexture),st(_e,_),_.mipmaps&&_.mipmaps.length>0)for(let Ve=0;Ve<_.mipmaps.length;Ve++)Fe(z.__webglFramebuffer[Ve],T,_,i.COLOR_ATTACHMENT0,_e,Ve);else Fe(z.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,_e,0);g(_)&&u(_e),t.unbindTexture()}T.depthBuffer&&pt(T)}function le(T){let _=T.textures;for(let z=0,q=_.length;z<q;z++){let ce=_[z];if(g(ce)){let Y=E(T),Ge=n.get(ce).__webglTexture;t.bindTexture(Y,Ge),u(Y),t.unbindTexture()}}}let ie=[],Q=[];function te(T){if(T.samples>0){if(de(T)===!1){let _=T.textures,z=T.width,q=T.height,ce=i.COLOR_BUFFER_BIT,Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(T),_e=_.length>1;if(_e)for(let ze=0;ze<_.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);let Ve=T.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ze=0;ze<_.length;ze++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);let me=n.get(_[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,ce,i.NEAREST),l===!0&&(ie.length=0,Q.length=0,ie.push(i.COLOR_ATTACHMENT0+ze),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ie.push(Y),Q.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let ze=0;ze<_.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);let me=n.get(_[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Se(T){return Math.min(s.maxSamples,T.samples)}function de(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ee(T){let _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function rt(T,_){let z=T.colorSpace,q=T.format,ce=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==fs&&z!==Fi&&(wt.getTransfer(z)===It?(q!==Vn||ce!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function it(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=oe,this.setTextureCube=Z,this.rebindTextures=Mt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=de}function ux(i,e){function t(n,s=Fi){let r,o=wt.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nc)return i.BYTE;if(n===Fc)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===ss)return i.UNSIGNED_INT;if(n===mi)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===zc)return i.RGB;if(n===Vn)return i.RGBA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===Hc)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===Gc)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(o===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Qa||n===el||n===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return o===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===vl||n===Ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return o===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===bl||n===wl||n===El)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
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

}`,hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ri({vertexShader:dx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uh=class extends Di{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,x=null,y=typeof XRWebGLBinding!="undefined",g=new hh,u={},E=t.getContextAttributes(),S=null,v=null,A=[],C=[],L=new Ce,U=null,b=new Cn;b.viewport=new Wt;let M=new Cn;M.viewport=new Wt;let D=[b,M],k=new Da,G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=A[K];return ae===void 0&&(ae=new Ks,A[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=A[K];return ae===void 0&&(ae=new Ks,A[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=A[K];return ae===void 0&&(ae=new Ks,A[K]=ae),ae.getHandSpace()};function J(K){let ae=C.indexOf(K.inputSource);if(ae===-1)return;let Fe=A[ae];Fe!==void 0&&(Fe.update(K.inputSource,K.frame,c||o),Fe.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",oe);for(let K=0;K<A.length;K++){let ae=C[K];ae!==null&&(C[K]=null,A[K].disconnect(ae))}G=null,W=null,g.reset();for(let K in u)delete u[K];e.setRenderTarget(S),p=null,f=null,d=null,s=null,v=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",X),s.addEventListener("inputsourceschange",oe),E.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,Xe=null,Ne=null;E.depth&&(Ne=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=E.stencil?cr:Zs,Xe=E.stencil?lr:ss);let pt={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(pt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ui(f.textureWidth,f.textureHeight,{format:Vn,type:oi,depthTexture:new Wr(f.textureWidth,f.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Fe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ui(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(K){for(let ae=0;ae<K.removed.length;ae++){let Fe=K.removed[ae],Xe=C.indexOf(Fe);Xe>=0&&(C[Xe]=null,A[Xe].disconnect(Fe))}for(let ae=0;ae<K.added.length;ae++){let Fe=K.added[ae],Xe=C.indexOf(Fe);if(Xe===-1){for(let pt=0;pt<A.length;pt++)if(pt>=C.length){C.push(Fe),Xe=pt;break}else if(C[pt]===null){C[pt]=Fe,Xe=pt;break}if(Xe===-1)break}let Ne=A[Xe];Ne&&Ne.connect(Fe)}}let Z=new F,Me=new F;function Ie(K,ae,Fe){Z.setFromMatrixPosition(ae.matrixWorld),Me.setFromMatrixPosition(Fe.matrixWorld);let Xe=Z.distanceTo(Me),Ne=ae.projectionMatrix.elements,pt=Fe.projectionMatrix.elements,Mt=Ne[14]/(Ne[10]-1),P=Ne[14]/(Ne[10]+1),le=(Ne[9]+1)/Ne[5],ie=(Ne[9]-1)/Ne[5],Q=(Ne[8]-1)/Ne[0],te=(pt[8]+1)/pt[0],Se=Mt*Q,de=Mt*te,Ee=Xe/(-Q+te),rt=Ee*-Q;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(rt),K.translateZ(Ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ne[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let it=Mt+Ee,T=P+Ee,_=Se-rt,z=de+(Xe-rt),q=le*P/T*it,ce=ie*P/T*it;K.projectionMatrix.makePerspective(_,z,q,ce,it,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ue(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ae=K.near,Fe=K.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(Fe=g.depthFar)),k.near=M.near=b.near=ae,k.far=M.far=b.far=Fe,(G!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),G=k.near,W=k.far),k.layers.mask=K.layers.mask|6,b.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;let Xe=K.parent,Ne=k.cameras;Ue(k,Xe);for(let pt=0;pt<Ne.length;pt++)Ue(Ne[pt],Xe);Ne.length===2?Ie(k,b,M):k.projectionMatrix.copy(b.projectionMatrix),st(K,k,Xe)};function st(K,ae,Fe){Fe===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(Fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=oa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(K){return u[K]};let dt=null;function ht(K,ae){if(h=ae.getViewerPose(c||o),x=ae,h!==null){let Fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Xe=!1;Fe.length!==k.cameras.length&&(k.cameras.length=0,Xe=!0);for(let P=0;P<Fe.length;P++){let le=Fe[P],ie=null;if(p!==null)ie=p.getViewport(le);else{let te=d.getViewSubImage(f,le);ie=te.viewport,P===0&&(e.setRenderTargetTextures(v,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(v))}let Q=D[P];Q===void 0&&(Q=new Cn,Q.layers.enable(P),Q.viewport=new Wt,D[P]=Q),Q.matrix.fromArray(le.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(le.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ie.x,ie.y,ie.width,ie.height),P===0&&(k.matrix.copy(Q.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Xe===!0&&k.cameras.push(Q)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let P=d.getDepthInformation(Fe[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(Ne&&Ne.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let P=0;P<Fe.length;P++){let le=Fe[P].camera;if(le){let ie=u[le];ie||(ie=new Xr,u[le]=ie);let Q=d.getCameraImage(le);ie.sourceTexture=Q}}}}for(let Fe=0;Fe<A.length;Fe++){let Xe=C[Fe],Ne=A[Fe];Xe!==null&&Ne!==void 0&&Ne.update(Xe,ae,c||o)}dt&&dt(K,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),x=null}let nt=new gd;nt.setAnimationLoop(ht),this.setAnimationLoop=function(K){dt=K},this.dispose=function(){}}},Ts=new si,px=new Vt;function mx(i,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,Yc(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,E,S,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),f(g,u),u.isMeshPhysicalMaterial&&p(g,u,v)):u.isMeshMatcapMaterial?(r(g,u),x(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),y(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,E,S):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===un&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===un&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let E=e.get(u),S=E.envMap,v=E.envMapRotation;S&&(g.envMap.value=S,Ts.copy(v),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),g.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(Ts)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,E,S){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*E,g.scale.value=S*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,E){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===un&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){let E=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let v=S.program;n.uniformBlockBinding(E,v)}function c(E,S){let v=s[E.id];v===void 0&&(x(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",g));let A=S.program;n.updateUBOMapping(E,A);let C=e.render.frame;r[E.id]!==C&&(f(E),r[E.id]=C)}function h(E){let S=d();E.__bindingPointIndex=S;let v=i.createBuffer(),A=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let S=s[E.id],v=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,L=v.length;C<L;C++){let U=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,M=U.length;b<M;b++){let D=U[b];if(p(D,C,b,A)===!0){let k=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],W=0;for(let J=0;J<G.length;J++){let X=G[J],oe=y(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,k+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,v,A){let C=E.value,L=S+"_"+v;if(A[L]===void 0)return typeof C=="number"||typeof C=="boolean"?A[L]=C:A[L]=C.clone(),!0;{let U=A[L];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return A[L]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function x(E){let S=E.uniforms,v=0,A=16;for(let L=0,U=S.length;L<U;L++){let b=Array.isArray(S[L])?S[L]:[S[L]];for(let M=0,D=b.length;M<D;M++){let k=b[M],G=Array.isArray(k.value)?k.value:[k.value];for(let W=0,J=G.length;W<J;W++){let X=G[W],oe=y(X),Z=v%A,Me=Z%oe.boundary,Ie=Z+Me;v+=Me,Ie!==0&&A-Ie<oe.storage&&(v+=A-Ie),k.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=oe.storage}}}let C=v%A;return C>0&&(v+=A-C),E.__size=v,E.__cache={},this}function y(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function g(E){let S=E.target;S.removeEventListener("dispose",g);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Il=class{constructor(e={}){let{canvas:t=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),y=new Int32Array(4),g=null,u=null,E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=gn;let C=0,L=0,U=null,b=-1,M=null,D=new Wt,k=new Wt,G=null,W=new ct(0),J=0,X=t.width,oe=t.height,Z=1,Me=null,Ie=null,Ue=new Wt(0,0,X,oe),st=new Wt(0,0,X,oe),dt=!1,ht=new js,nt=!1,K=!1,ae=new Vt,Fe=new F,Xe=new Wt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function Mt(){return U===null?Z:1}let P=n;function le(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",pe,!1),P===null){let O="webgl2";if(P=le(O,w),P===null)throw le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ie,Q,te,Se,de,Ee,rt,it,T,_,z,q,ce,Y,Ge,_e,Ve,ze,me,De,Ye,We,Te,lt;function N(){ie=new Ug(P),ie.init(),We=new ux(P,ie),Q=new Ag(P,ie,e,We),te=new cx(P,ie),Q.reversedDepthBuffer&&f&&te.buffers.depth.setReversed(!0),Se=new Og(P),de=new $0,Ee=new hx(P,ie,te,de,Q,We,Se),rt=new Rg(v),it=new Lg(v),T=new Vf(P),Te=new Eg(P,T),_=new Ng(P,T,Se,Te),z=new kg(P,_,T,Se),me=new Bg(P,Q,Ee),_e=new Cg(de),q=new J0(v,rt,it,ie,Q,Te,_e),ce=new mx(v,de),Y=new j0,Ge=new sx(ie),ze=new wg(v,rt,it,te,z,p,l),Ve=new ax(v,z,Q),lt=new gx(P,Se,Q,te),De=new Tg(P,ie,Se),Ye=new Fg(P,ie,Se),Se.programs=q.programs,v.capabilities=Q,v.extensions=ie,v.properties=de,v.renderLists=Y,v.shadowMap=Ve,v.state=te,v.info=Se}N();let ge=new uh(v,P);this.xr=ge,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(X,oe,!1))},this.getSize=function(w){return w.set(X,oe)},this.setSize=function(w,O,H=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,oe=O,t.width=Math.floor(w*Z),t.height=Math.floor(O*Z),H===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*Z,oe*Z).floor()},this.setDrawingBufferSize=function(w,O,H){X=w,oe=O,Z=H,t.width=Math.floor(w*H),t.height=Math.floor(O*H),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Ue)},this.setViewport=function(w,O,H,V){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,O,H,V),te.viewport(D.copy(Ue).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(st)},this.setScissor=function(w,O,H,V){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,O,H,V),te.scissor(k.copy(st).multiplyScalar(Z).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(w){te.setScissorTest(dt=w)},this.setOpaqueSort=function(w){Me=w},this.setTransparentSort=function(w){Ie=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,H=!0){let V=0;if(w){let R=!1;if(U!==null){let B=U.texture.format;R=B===Ka||B===$a||B===Ja}if(R){let B=U.texture.type,$=B===oi||B===ss||B===or||B===lr||B===Ya||B===Za,j=ze.getClearColor(),he=ze.getClearAlpha(),fe=j.r,ve=j.g,we=j.b;$?(x[0]=fe,x[1]=ve,x[2]=we,x[3]=he,P.clearBufferuiv(P.COLOR,0,x)):(y[0]=fe,y[1]=ve,y[2]=we,y[3]=he,P.clearBufferiv(P.COLOR,0,y))}else V|=P.COLOR_BUFFER_BIT}O&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ze.dispose(),Y.dispose(),Ge.dispose(),de.dispose(),rt.dispose(),it.dispose(),z.dispose(),Te.dispose(),lt.dispose(),q.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",tt),ge.removeEventListener("sessionend",Ot),Xt.stop()};function ye(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=Se.autoReset,O=Ve.enabled,H=Ve.autoUpdate,V=Ve.needsUpdate,R=Ve.type;N(),Se.autoReset=w,Ve.enabled=O,Ve.autoUpdate=H,Ve.needsUpdate=V,Ve.type=R}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function I(w){let O=w.target;O.removeEventListener("dispose",I),ne(O)}function ne(w){ee(w),de.remove(w)}function ee(w){let O=de.get(w).programs;O!==void 0&&(O.forEach(function(H){q.releaseProgram(H)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,H,V,R,B){O===null&&(O=Ne);let $=R.isMesh&&R.matrixWorld.determinant()<0,j=li(w,O,H,V,R);te.setMaterial(V,$);let he=H.index,fe=1;if(V.wireframe===!0){if(he=_.getWireframeAttribute(H),he===void 0)return;fe=2}let ve=H.drawRange,we=H.attributes.position,be=ve.start*fe,Ze=(ve.start+ve.count)*fe;B!==null&&(be=Math.max(be,B.start*fe),Ze=Math.min(Ze,(B.start+B.count)*fe)),he!==null?(be=Math.max(be,0),Ze=Math.min(Ze,he.count)):we!=null&&(be=Math.max(be,0),Ze=Math.min(Ze,we.count));let Qe=Ze-be;if(Qe<0||Qe===1/0)return;Te.setup(R,V,j,H,he);let et,$e=De;if(he!==null&&(et=T.get(he),$e=Ye,$e.setIndex(et)),R.isMesh)V.wireframe===!0?(te.setLineWidth(V.wireframeLinewidth*Mt()),$e.setMode(P.LINES)):$e.setMode(P.TRIANGLES);else if(R.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),te.setLineWidth(Ae*Mt()),R.isLineSegments?$e.setMode(P.LINES):R.isLineLoop?$e.setMode(P.LINE_LOOP):$e.setMode(P.LINE_STRIP)}else R.isPoints?$e.setMode(P.POINTS):R.isSprite&&$e.setMode(P.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))$e.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let Ae=R._multiDrawStarts,St=R._multiDrawCounts,ot=R._multiDrawCount,Jt=he?T.get(he).bytesPerElement:1,Xn=de.get(V).currentProgram.getUniforms();for(let zt=0;zt<ot;zt++)Xn.setValue(P,"_gl_DrawID",zt),$e.render(Ae[zt]/Jt,St[zt])}else if(R.isInstancedMesh)$e.renderInstances(be,Qe,R.count);else if(H.isInstancedBufferGeometry){let Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,St=Math.min(H.instanceCount,Ae);$e.renderInstances(be,Qe,St)}else $e.render(be,Qe)};function He(w,O,H){w.transparent===!0&&w.side===bn&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,ai(w,O,H),w.side=Pi,w.needsUpdate=!0,ai(w,O,H),w.side=bn):ai(w,O,H)}this.compile=function(w,O,H=null){H===null&&(H=w),u=Ge.get(H),u.init(O),S.push(u),H.traverseVisible(function(R){R.isLight&&R.layers.test(O.layers)&&(u.pushLight(R),R.castShadow&&u.pushShadow(R))}),w!==H&&w.traverseVisible(function(R){R.isLight&&R.layers.test(O.layers)&&(u.pushLight(R),R.castShadow&&u.pushShadow(R))}),u.setupLights();let V=new Set;return w.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let B=R.material;if(B)if(Array.isArray(B))for(let $=0;$<B.length;$++){let j=B[$];He(j,H,R),V.add(j)}else He(B,H,R),V.add(B)}),u=S.pop(),V},this.compileAsync=function(w,O,H=null){let V=this.compile(w,O,H);return new Promise(R=>{function B(){if(V.forEach(function($){de.get($).currentProgram.isReady()&&V.delete($)}),V.size===0){R(w);return}setTimeout(B,10)}ie.get("KHR_parallel_shader_compile")!==null?B():setTimeout(B,10)})};let je=null;function _t(w){je&&je(w)}function tt(){Xt.stop()}function Ot(){Xt.start()}let Xt=new gd;Xt.setAnimationLoop(_t),typeof self!="undefined"&&Xt.setContext(self),this.setAnimationLoop=function(w){je=w,ge.setAnimationLoop(w),w===null?Xt.stop():Xt.start()},ge.addEventListener("sessionstart",tt),ge.addEventListener("sessionend",Ot),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(O),O=ge.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,U),u=Ge.get(w,S.length),u.init(O),S.push(u),ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ht.setFromProjectionMatrix(ae,ni,O.reversedDepth),K=this.localClippingEnabled,nt=_e.init(this.clippingPlanes,K),g=Y.get(w,E.length),g.init(),E.push(g),ge.enabled===!0&&ge.isPresenting===!0){let B=v.xr.getDepthSensingMesh();B!==null&&jt(B,O,-1/0,v.sortObjects)}jt(w,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Me,Ie),pt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,pt&&ze.addToRenderList(g,w),this.info.render.frame++,nt===!0&&_e.beginShadows();let H=u.state.shadowsArray;Ve.render(H,w,O),nt===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,R=g.transmissive;if(u.setupLights(),O.isArrayCamera){let B=O.cameras;if(R.length>0)for(let $=0,j=B.length;$<j;$++){let he=B[$];xi(V,R,w,he)}pt&&ze.render(w);for(let $=0,j=B.length;$<j;$++){let he=B[$];qt(g,w,he,he.viewport)}}else R.length>0&&xi(V,R,w,O),pt&&ze.render(w),qt(g,w,O);U!==null&&L===0&&(Ee.updateMultisampleRenderTarget(U),Ee.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(v,w,O),Te.resetDefaultState(),b=-1,M=null,S.pop(),S.length>0?(u=S[S.length-1],nt===!0&&_e.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function jt(w,O,H,V){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ht.intersectsSprite(w)){V&&Xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);let $=z.update(w),j=w.material;j.visible&&g.push(w,$,j,H,Xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ht.intersectsObject(w))){let $=z.update(w),j=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xe.copy(w.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Xe.copy($.boundingSphere.center)),Xe.applyMatrix4(w.matrixWorld).applyMatrix4(ae)),Array.isArray(j)){let he=$.groups;for(let fe=0,ve=he.length;fe<ve;fe++){let we=he[fe],be=j[we.materialIndex];be&&be.visible&&g.push(w,$,be,H,Xe.z,we)}}else j.visible&&g.push(w,$,j,H,Xe.z,null)}}let B=w.children;for(let $=0,j=B.length;$<j;$++)jt(B[$],O,H,V)}function qt(w,O,H,V){let R=w.opaque,B=w.transmissive,$=w.transparent;u.setupLightsView(H),nt===!0&&_e.setGlobalState(v.clippingPlanes,H),V&&te.viewport(D.copy(V)),R.length>0&&Yt(R,O,H),B.length>0&&Yt(B,O,H),$.length>0&&Yt($,O,H),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function xi(w,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new ui(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?ar:oi,minFilter:is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));let B=u.state.transmissionRenderTarget[V.id],$=V.viewport||D;B.setSize($.z*v.transmissionResolutionScale,$.w*v.transmissionResolutionScale);let j=v.getRenderTarget(),he=v.getActiveCubeFace(),fe=v.getActiveMipmapLevel();v.setRenderTarget(B),v.getClearColor(W),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),pt&&ze.render(H);let ve=v.toneMapping;v.toneMapping=Ni;let we=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),nt===!0&&_e.setGlobalState(v.clippingPlanes,V),Yt(w,H,V),Ee.updateMultisampleRenderTarget(B),Ee.updateRenderTargetMipmap(B),ie.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ze=0,Qe=O.length;Ze<Qe;Ze++){let et=O[Ze],$e=et.object,Ae=et.geometry,St=et.material,ot=et.group;if(St.side===bn&&$e.layers.test(V.layers)){let Jt=St.side;St.side=un,St.needsUpdate=!0,yi($e,H,V,Ae,St,ot),St.side=Jt,St.needsUpdate=!0,be=!0}}be===!0&&(Ee.updateMultisampleRenderTarget(B),Ee.updateRenderTargetMipmap(B))}v.setRenderTarget(j,he,fe),v.setClearColor(W,J),we!==void 0&&(V.viewport=we),v.toneMapping=ve}function Yt(w,O,H){let V=O.isScene===!0?O.overrideMaterial:null;for(let R=0,B=w.length;R<B;R++){let $=w[R],j=$.object,he=$.geometry,fe=$.group,ve=$.material;ve.allowOverride===!0&&V!==null&&(ve=V),j.layers.test(H.layers)&&yi(j,O,H,he,ve,fe)}}function yi(w,O,H,V,R,B){w.onBeforeRender(v,O,H,V,R,B),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),R.onBeforeRender(v,O,H,V,w,B),R.transparent===!0&&R.side===bn&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,v.renderBufferDirect(H,O,V,R,w,B),R.side=Pi,R.needsUpdate=!0,v.renderBufferDirect(H,O,V,R,w,B),R.side=bn):v.renderBufferDirect(H,O,V,R,w,B),w.onAfterRender(v,O,H,V,R,B)}function ai(w,O,H){O.isScene!==!0&&(O=Ne);let V=de.get(w),R=u.state.lights,B=u.state.shadowsArray,$=R.state.version,j=q.getParameters(w,R.state,B,O,H),he=q.getProgramCacheKey(j),fe=V.programs;V.environment=w.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(w.isMeshStandardMaterial?it:rt).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,fe===void 0&&(w.addEventListener("dispose",I),fe=new Map,V.programs=fe);let ve=fe.get(he);if(ve!==void 0){if(V.currentProgram===ve&&V.lightsStateVersion===$)return Wn(w,j),ve}else j.uniforms=q.getUniforms(w),w.onBeforeCompile(j,v),ve=q.acquireProgram(j,he),fe.set(he,ve),V.uniforms=j.uniforms;let we=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=_e.uniform),Wn(w,j),V.needsLights=ki(w),V.lightsStateVersion=$,V.needsLights&&(we.ambientLightColor.value=R.state.ambient,we.lightProbe.value=R.state.probe,we.directionalLights.value=R.state.directional,we.directionalLightShadows.value=R.state.directionalShadow,we.spotLights.value=R.state.spot,we.spotLightShadows.value=R.state.spotShadow,we.rectAreaLights.value=R.state.rectArea,we.ltc_1.value=R.state.rectAreaLTC1,we.ltc_2.value=R.state.rectAreaLTC2,we.pointLights.value=R.state.point,we.pointLightShadows.value=R.state.pointShadow,we.hemisphereLights.value=R.state.hemi,we.directionalShadowMap.value=R.state.directionalShadowMap,we.directionalShadowMatrix.value=R.state.directionalShadowMatrix,we.spotShadowMap.value=R.state.spotShadowMap,we.spotLightMatrix.value=R.state.spotLightMatrix,we.spotLightMap.value=R.state.spotLightMap,we.pointShadowMap.value=R.state.pointShadowMap,we.pointShadowMatrix.value=R.state.pointShadowMatrix),V.currentProgram=ve,V.uniformsList=null,ve}function Bi(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=fr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Wn(w,O){let H=de.get(w);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function li(w,O,H,V,R){O.isScene!==!0&&(O=Ne),Ee.resetTextureUnits();let B=O.fog,$=V.isMeshStandardMaterial?O.environment:null,j=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:fs,he=(V.isMeshStandardMaterial?it:rt).get(V.envMap||$),fe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ve=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!H.morphAttributes.position,be=!!H.morphAttributes.normal,Ze=!!H.morphAttributes.color,Qe=Ni;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Qe=v.toneMapping);let et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$e=et!==void 0?et.length:0,Ae=de.get(V),St=u.state.lights;if(nt===!0&&(K===!0||w!==M)){let Qt=w===M&&V.id===b;_e.setState(V,w,Qt)}let ot=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==St.state.version||Ae.outputColorSpace!==j||R.isBatchedMesh&&Ae.batching===!1||!R.isBatchedMesh&&Ae.batching===!0||R.isBatchedMesh&&Ae.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&Ae.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&Ae.instancing===!1||!R.isInstancedMesh&&Ae.instancing===!0||R.isSkinnedMesh&&Ae.skinning===!1||!R.isSkinnedMesh&&Ae.skinning===!0||R.isInstancedMesh&&Ae.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Ae.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Ae.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Ae.instancingMorph===!1&&R.morphTexture!==null||Ae.envMap!==he||V.fog===!0&&Ae.fog!==B||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==_e.numPlanes||Ae.numIntersection!==_e.numIntersection)||Ae.vertexAlphas!==fe||Ae.vertexTangents!==ve||Ae.morphTargets!==we||Ae.morphNormals!==be||Ae.morphColors!==Ze||Ae.toneMapping!==Qe||Ae.morphTargetsCount!==$e)&&(ot=!0):(ot=!0,Ae.__version=V.version);let Jt=Ae.currentProgram;ot===!0&&(Jt=ai(V,O,R));let Xn=!1,zt=!1,_n=!1,Pt=Jt.getUniforms(),dn=Ae.uniforms;if(te.useProgram(Jt.program)&&(Xn=!0,zt=!0,_n=!0),V.id!==b&&(b=V.id,zt=!0),Xn||M!==w){te.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pt.setValue(P,"projectionMatrix",w.projectionMatrix),Pt.setValue(P,"viewMatrix",w.matrixWorldInverse);let cn=Pt.map.cameraPosition;cn!==void 0&&cn.setValue(P,Fe.setFromMatrixPosition(w.matrixWorld)),Q.logarithmicDepthBuffer&&Pt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Pt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,zt=!0,_n=!0)}if(R.isSkinnedMesh){Pt.setOptional(P,R,"bindMatrix"),Pt.setOptional(P,R,"bindMatrixInverse");let Qt=R.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Pt.setValue(P,"boneTexture",Qt.boneTexture,Ee))}R.isBatchedMesh&&(Pt.setOptional(P,R,"batchingTexture"),Pt.setValue(P,"batchingTexture",R._matricesTexture,Ee),Pt.setOptional(P,R,"batchingIdTexture"),Pt.setValue(P,"batchingIdTexture",R._indirectTexture,Ee),Pt.setOptional(P,R,"batchingColorTexture"),R._colorsTexture!==null&&Pt.setValue(P,"batchingColorTexture",R._colorsTexture,Ee));let ln=H.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&me.update(R,H,Jt),(zt||Ae.receiveShadow!==R.receiveShadow)&&(Ae.receiveShadow=R.receiveShadow,Pt.setValue(P,"receiveShadow",R.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(dn.envMap.value=he,dn.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(dn.envMapIntensity.value=O.environmentIntensity),zt&&(Pt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&_i(dn,_n),B&&V.fog===!0&&ce.refreshFogUniforms(dn,B),ce.refreshMaterialUniforms(dn,V,Z,oe,u.state.transmissionRenderTarget[w.id]),fr.upload(P,Bi(Ae),dn,Ee)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fr.upload(P,Bi(Ae),dn,Ee),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Pt.setValue(P,"center",R.center),Pt.setValue(P,"modelViewMatrix",R.modelViewMatrix),Pt.setValue(P,"normalMatrix",R.normalMatrix),Pt.setValue(P,"modelMatrix",R.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Qt=V.uniformsGroups;for(let cn=0,mr=Qt.length;cn<mr;cn++){let vt=Qt[cn];lt.update(vt,Jt),lt.bind(vt,Jt)}}return Jt}function _i(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function ki(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,O,H){let V=de.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),de.get(w.texture).__webglTexture=O,de.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let H=de.get(w);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};let zi=P.createFramebuffer();this.setRenderTarget=function(w,O=0,H=0){U=w,C=O,L=H;let V=!0,R=null,B=!1,$=!1;if(w){let he=de.get(w);if(he.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(he.__webglFramebuffer===void 0)Ee.setupRenderTarget(w);else if(he.__hasExternalTextures)Ee.rebindTextures(w,de.get(w.texture).__webglTexture,de.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let we=w.depthTexture;if(he.__boundDepthTexture!==we){if(we!==null&&de.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(w)}}let fe=w.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&($=!0);let ve=de.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ve[O])?R=ve[O][H]:R=ve[O],B=!0):w.samples>0&&Ee.useMultisampledRTT(w)===!1?R=de.get(w).__webglMultisampledFramebuffer:Array.isArray(ve)?R=ve[H]:R=ve,D.copy(w.viewport),k.copy(w.scissor),G=w.scissorTest}else D.copy(Ue).multiplyScalar(Z).floor(),k.copy(st).multiplyScalar(Z).floor(),G=dt;if(H!==0&&(R=zi),te.bindFramebuffer(P.FRAMEBUFFER,R)&&V&&te.drawBuffers(w,R),te.viewport(D),te.scissor(k),te.setScissorTest(G),B){let he=de.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,he.__webglTexture,H)}else if($){let he=O;for(let fe=0;fe<w.textures.length;fe++){let ve=de.get(w.textures[fe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+fe,ve.__webglTexture,H,he)}}else if(w!==null&&H!==0){let he=de.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,he.__webglTexture,H)}b=-1},this.readRenderTargetPixels=function(w,O,H,V,R,B,$,j=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$!==void 0&&(he=he[$]),he){te.bindFramebuffer(P.FRAMEBUFFER,he);try{let fe=w.textures[j],ve=fe.format,we=fe.type;if(!Q.textureFormatReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-V&&H>=0&&H<=w.height-R&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+j),P.readPixels(O,H,V,R,We.convert(ve),We.convert(we),B))}finally{let fe=U!==null?de.get(U).__webglFramebuffer:null;te.bindFramebuffer(P.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(w,O,H,V,R,B,$,j=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$!==void 0&&(he=he[$]),he)if(O>=0&&O<=w.width-V&&H>=0&&H<=w.height-R){te.bindFramebuffer(P.FRAMEBUFFER,he);let fe=w.textures[j],ve=fe.format,we=fe.type;if(!Q.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.bufferData(P.PIXEL_PACK_BUFFER,B.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+j),P.readPixels(O,H,V,R,We.convert(ve),We.convert(we),0);let Ze=U!==null?de.get(U).__webglFramebuffer:null;te.bindFramebuffer(P.FRAMEBUFFER,Ze);let Qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ku(P,Qe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,B),P.deleteBuffer(be),P.deleteSync(Qe),B}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,H=0){let V=Math.pow(2,-H),R=Math.floor(w.image.width*V),B=Math.floor(w.image.height*V),$=O!==null?O.x:0,j=O!==null?O.y:0;Ee.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,$,j,R,B),te.unbindTexture()};let Hi=P.createFramebuffer(),vi=P.createFramebuffer();this.copyTextureToTexture=function(w,O,H=null,V=null,R=0,B=null){B===null&&(R!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),B=R,R=0):B=0);let $,j,he,fe,ve,we,be,Ze,Qe,et=w.isCompressedTexture?w.mipmaps[B]:w.image;if(H!==null)$=H.max.x-H.min.x,j=H.max.y-H.min.y,he=H.isBox3?H.max.z-H.min.z:1,fe=H.min.x,ve=H.min.y,we=H.isBox3?H.min.z:0;else{let ln=Math.pow(2,-R);$=Math.floor(et.width*ln),j=Math.floor(et.height*ln),w.isDataArrayTexture?he=et.depth:w.isData3DTexture?he=Math.floor(et.depth*ln):he=1,fe=0,ve=0,we=0}V!==null?(be=V.x,Ze=V.y,Qe=V.z):(be=0,Ze=0,Qe=0);let $e=We.convert(O.format),Ae=We.convert(O.type),St;O.isData3DTexture?(Ee.setTexture3D(O,0),St=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ee.setTexture2DArray(O,0),St=P.TEXTURE_2D_ARRAY):(Ee.setTexture2D(O,0),St=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let ot=P.getParameter(P.UNPACK_ROW_LENGTH),Jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xn=P.getParameter(P.UNPACK_SKIP_PIXELS),zt=P.getParameter(P.UNPACK_SKIP_ROWS),_n=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,et.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,ve),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we);let Pt=w.isDataArrayTexture||w.isData3DTexture,dn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let ln=de.get(w),Qt=de.get(O),cn=de.get(ln.__renderTarget),mr=de.get(Qt.__renderTarget);te.bindFramebuffer(P.READ_FRAMEBUFFER,cn.__webglFramebuffer),te.bindFramebuffer(P.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let vt=0;vt<he;vt++)Pt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,de.get(w).__webglTexture,R,we+vt),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,de.get(O).__webglTexture,B,Qe+vt)),P.blitFramebuffer(fe,ve,$,j,be,Ze,$,j,P.DEPTH_BUFFER_BIT,P.NEAREST);te.bindFramebuffer(P.READ_FRAMEBUFFER,null),te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(R!==0||w.isRenderTargetTexture||de.has(w)){let ln=de.get(w),Qt=de.get(O);te.bindFramebuffer(P.READ_FRAMEBUFFER,Hi),te.bindFramebuffer(P.DRAW_FRAMEBUFFER,vi);for(let cn=0;cn<he;cn++)Pt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ln.__webglTexture,R,we+cn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ln.__webglTexture,R),dn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Qt.__webglTexture,B,Qe+cn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Qt.__webglTexture,B),R!==0?P.blitFramebuffer(fe,ve,$,j,be,Ze,$,j,P.COLOR_BUFFER_BIT,P.NEAREST):dn?P.copyTexSubImage3D(St,B,be,Ze,Qe+cn,fe,ve,$,j):P.copyTexSubImage2D(St,B,be,Ze,fe,ve,$,j);te.bindFramebuffer(P.READ_FRAMEBUFFER,null),te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else dn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(St,B,be,Ze,Qe,$,j,he,$e,Ae,et.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(St,B,be,Ze,Qe,$,j,he,$e,et.data):P.texSubImage3D(St,B,be,Ze,Qe,$,j,he,$e,Ae,et):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,be,Ze,$,j,$e,Ae,et.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,be,Ze,et.width,et.height,$e,et.data):P.texSubImage2D(P.TEXTURE_2D,B,be,Ze,$,j,$e,Ae,et);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xn),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_n),B===0&&O.generateMipmaps&&P.generateMipmap(St),te.unbindTexture()},this.initRenderTarget=function(w){de.get(w).__webglFramebuffer===void 0&&Ee.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ee.setTextureCube(w,0):w.isData3DTexture?Ee.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ee.setTexture2DArray(w,0):Ee.setTexture2D(w,0),te.unbindTexture()},this.resetState=function(){C=0,L=0,U=null,te.reset(),Te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};function yx(i){return Number.isFinite(i)?Math.max(0,Math.min(1,i)):0}function _x(){let i=document.createElement("canvas");i.width=256,i.height=256;let e=i.getContext("2d",{willReadFrequently:!0});if(!e)return null;let t=e.createLinearGradient(0,0,0,i.height);t.addColorStop(0,"#2b3f6f"),t.addColorStop(.55,"#17244a"),t.addColorStop(1,"#0d1326"),e.fillStyle=t,e.fillRect(0,0,i.width,i.height),e.save(),e.globalAlpha=.09,e.strokeStyle="#ffffff",e.lineWidth=1;let n=16;for(let l=0;l<=i.height;l+=n)e.beginPath(),e.moveTo(0,l+.5),e.lineTo(i.width,l+.5),e.stroke();for(let l=0;l<=i.width;l+=n)e.beginPath(),e.moveTo(l+.5,0),e.lineTo(l+.5,i.height),e.stroke();e.restore();let s=e.createRadialGradient(i.width*.55,i.height*.45,i.width*.08,i.width*.55,i.height*.45,i.width*.85);s.addColorStop(0,"rgba(255, 255, 255, 0.06)"),s.addColorStop(1,"rgba(0, 0, 0, 0.35)"),e.fillStyle=s,e.fillRect(0,0,i.width,i.height);let r=e.getImageData(0,0,i.width,i.height),o=r.data;for(let l=0;l<o.length;l+=4){let c=(Math.random()-.5)*18;o[l+0]=Math.max(0,Math.min(255,o[l+0]+c)),o[l+1]=Math.max(0,Math.min(255,o[l+1]+c)),o[l+2]=Math.max(0,Math.min(255,o[l+2]+c))}e.putImageData(r,0,0);let a=new ms(i);return"colorSpace"in a&&(a.colorSpace=gn),a.wrapS=Mn,a.wrapT=Mn,a.repeat.set(1,1),a.anisotropy=4,a}function vx(i=128){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d");if(!t)return null;let n=i*.08,s=i*.5,r=t.createRadialGradient(i/2,i/2,n,i/2,i/2,s);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.35,"rgba(255,255,255,0.55)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=r,t.fillRect(0,0,i,i);let o=new ms(e);return o.wrapS=Mn,o.wrapT=Mn,o.anisotropy=1,o}function Mx(i=64,e=8){let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d");if(!n)return null;let s=n.createLinearGradient(0,0,i,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.15,"rgba(255,255,255,0.9)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,i,e),n.globalCompositeOperation="destination-in";let r=n.createLinearGradient(0,0,0,e);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,255,255,1)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(0,0,i,e);let o=new ms(t);return o.wrapS=Mn,o.wrapT=Mn,o.anisotropy=1,o}function Sx(i,e,t){let n=i/2,s=e/2,r=Math.max(0,Math.min(Math.min(n,s),t)),o=-n,a=-s,l=n,c=s,h=new gs;return h.moveTo(o+r,a),h.lineTo(l-r,a),h.quadraticCurveTo(l,a,l,a+r),h.lineTo(l,c-r),h.quadraticCurveTo(l,c,l-r,c),h.lineTo(o+r,c),h.quadraticCurveTo(o,c,o,c-r),h.lineTo(o,a+r),h.quadraticCurveTo(o,a,o+r,a),h}function wn(i,e,t,n){let s=Sx(i,e,n),r=new ir(s,{depth:t,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:Math.min(2,n*.45),bevelThickness:Math.min(2,n*.45)});return r.translate(0,0,-t/2),r}function Oi(i,e,t){var n;e&&(i.remove(e),(n=e.traverse)==null||n.call(e,s=>{var o;if(!s.isMesh)return;let r=Array.isArray(s.material)?s.material:[s.material];for(let a of r)!a||t.has(a)||(o=a.dispose)==null||o.call(a)}))}function qe(i){return new ct(i)}function Md({canvas:i,width:e,height:t,preserveDrawingBuffer:n=!1}){let s=!!n,r=null;if(s)try{r=i.getContext("webgl2",{alpha:!1,antialias:!1,preserveDrawingBuffer:!0})||null}catch(se){r=null}let o=new Il({canvas:i,context:r||void 0,antialias:!s,alpha:!1,preserveDrawingBuffer:!!n,powerPreference:"high-performance"});o.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),o.setSize(e,t,!1),o.shadowMap.enabled=!s,o.shadowMap.type=Ua,"outputColorSpace"in o&&(o.outputColorSpace=gn),o.toneMapping=Ga,o.toneMappingExposure=s?1.75:1.65;let a=new Gr,l=new Ms(0,e,0,t,.1,2e3);l.position.set(0,0,1e3),l.lookAt(0,0,0);let c=new lo(16777215,.9);a.add(c);let h=new rr(16777215,2.2);h.position.set(e*.15,t*.1,520),h.castShadow=!s,h.shadow.mapSize.set(1024,1024),h.shadow.bias=-2e-4,h.shadow.normalBias=.002,h.shadow.camera.near=1,h.shadow.camera.far=1400,h.shadow.camera.left=-e/2,h.shadow.camera.right=e/2,h.shadow.camera.top=t/2,h.shadow.camera.bottom=-t/2;let d=new en;d.position.set(e/2,t/2,0),a.add(d),h.target=d,a.add(h);let f=new rr(8046591,.75);f.position.set(e*.92,t*.9,480),f.castShadow=!1,a.add(f);let p=new ao(9097983,725024,.5);p.position.set(0,-1,0),a.add(p);let x=s?null:_x(),y=vx(128),g=Mx(64,8),u=new fi(e,t),E=new on({map:x||null,color:x?16777215:1186355,side:bn}),S=new Be(u,E);S.position.set(e/2,t/2,-20),a.add(S);let v=new ro({color:0,opacity:.22});v.side=bn;let A=new Be(u,v);A.position.set(e/2,t/2,-10),A.receiveShadow=!s,a.add(A);let C=(()=>{let se=new gs;se.moveTo(0,-11),se.lineTo(-10,6),se.lineTo(0,1),se.lineTo(10,6),se.closePath();let re=new ir(se,{depth:6,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:1,bevelThickness:1});return re.translate(0,0,-3),re})(),L=wn(24,24,10,4),U=wn(48,32,12,6),b=wn(40,18,10,6),M=wn(34,18,2,6),D=new Sn(12,10,3),k=new In(4,12,12),G=new fi(1,1),W=(()=>{let se=new an,re=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),ue=new Uint16Array([0,1,1,2,2,3,3,0]);return se.setAttribute("position",new xn(re,3)),se.setIndex(new xn(ue,1)),se})(),J=new fi(26,6);J.translate(-13,0,0);let X=new fi(16,12),oe=wn(14,14,14,3),Z=new Sn(8,8,8),Me=new Ln(7,7,16,18,1,!1),Ie=new Ln(7.6,7.6,3,18,1,!1),Ue=new Ln(4.2,4.2,11,18,1,!1),st=new Sn(1.2,9.5,1.2),dt=new In(8,16,16),ht=new Sn(4,2,2),nt=new Ln(1.2,1.6,6,10),K=new In(3.2,12,12),ae=new er(5,10,6,12),Fe=wn(14,10,6,2),Xe=wn(16,18,6,6),Ne=wn(6,4,1.4,1.2),pt=new Sn(2.2,12,1.2),Mt=new er(2.6,6.2,4,10),P=new qr(2.2,5.5,10),le=new ys(6.5,1.2,10,18),ie=new Ln(12,10,22,18,1,!1),Q=new Ln(13,13,4,18,1,!1),te=new Sn(1.4,18,14),Se=new ys(7,1.1,10,22),de=wn(42,28,12,6),Ee=new In(2.3,10,10),rt=new In(3.3,12,12),it=new In(1.45,10,10),T=new Sn(2.2,2.2,9),_=new no(14,0),z=new In(7,16,16),q=new so(5,0),ce=new In(10,18,18),Y=new In(11.3,20,20),Ge=new ys(12,1.2,10,26),_e=new In(3.2,12,12),Ve=new Ln(10,12,10,16),ze=wn(18,12,10,4),me=new Ln(2,2,10,10),De=wn(16,12,3,2),Ye=wn(20,20,4,3),We=wn(14,10,1.6,2),Te=wn(16,6,1.6,2),lt=wn(8,6,1.2,2),N=new Sn(3.5,3.5,1.2),ge=(()=>{let ue=new io(18,26,48);return ue.rotateX(Math.PI),ue})(),ye=new at({color:qe("#f4f4f4"),roughness:.35,metalness:.15,emissive:new ct(0),emissiveIntensity:0}),ke=new at({color:qe("#3d6b86"),roughness:.55,metalness:.1}),pe=new at({color:qe("#4b7f9b"),roughness:.55,metalness:.1}),I=new at({color:qe("#0b1020"),roughness:.9,metalness:0,transparent:!0,opacity:.85}),ne=new at({color:qe("#f2c94c"),roughness:.35,metalness:.2,emissive:qe("#6a4b00"),emissiveIntensity:.18}),ee=new on({color:725024,side:un,transparent:!0,opacity:s?.62:.42,depthWrite:!1,toneMapped:!1});ee.userData.fixedOpacity=!0;let He=new on({color:16765786,alphaMap:y||null,transparent:!0,opacity:s?.62:.42,blending:Gn,depthWrite:!1,toneMapped:!1});He.userData.fixedOpacity=!0;let je=new on({color:6805247,alphaMap:y||null,transparent:!0,opacity:s?.62:.42,blending:Gn,depthWrite:!1,toneMapped:!1});je.userData.fixedOpacity=!0;let _t=new on({color:16751164,alphaMap:y||null,transparent:!0,opacity:s?.62:.42,blending:Gn,depthWrite:!1,toneMapped:!1});_t.userData.fixedOpacity=!0;let tt=new on({color:3967999,alphaMap:y||null,transparent:!0,opacity:s?.6:.4,blending:Gn,depthWrite:!1,toneMapped:!1});tt.userData.fixedOpacity=!0;let Ot=new on({color:16731558,alphaMap:y||null,transparent:!0,opacity:s?.6:.4,blending:Gn,depthWrite:!1,toneMapped:!1});Ot.userData.fixedOpacity=!0;let Xt=new on({color:16726843,alphaMap:y||null,transparent:!0,opacity:s?.55:.35,blending:Gn,depthWrite:!1,toneMapped:!1});Xt.userData.fixedOpacity=!0;let jt=new on({color:16765786,alphaMap:g||null,transparent:!0,opacity:s?.9:.7,blending:Gn,depthWrite:!1,toneMapped:!1});jt.userData.fixedOpacity=!0;let qt=new on({color:6805247,alphaMap:g||null,transparent:!0,opacity:s?.9:.7,blending:Gn,depthWrite:!1,toneMapped:!1});qt.userData.fixedOpacity=!0;let xi=new at({color:qe("#fff2a8"),roughness:.25,metalness:.05,emissive:qe("#ffd35a"),emissiveIntensity:.55}),Yt=new at({color:qe("#c7f3ff"),roughness:.18,metalness:.05,emissive:qe("#47c9ff"),emissiveIntensity:.75}),yi=new at({color:qe("#e9eef8"),roughness:.85,metalness:0,side:bn}),ai=new at({color:qe("#e04444"),roughness:.4,metalness:.05}),Bi=new at({color:qe("#7a4b2c"),roughness:.75,metalness:0}),Wn=new at({color:qe("#ffd6d6"),roughness:.12,metalness:0,emissive:qe("#ffffff"),emissiveIntensity:.08,transparent:!0,opacity:.8}),li=new at({color:qe("#4bbf5a"),roughness:.7,metalness:0}),_i=new _s({color:qe("#67d6ff"),roughness:.05,metalness:0,transmission:.92,thickness:2,ior:1.25,clearcoat:.4,clearcoatRoughness:.1});_i.userData.fixedOpacity=!0;let ki=new at({color:qe("#0b6aa6"),roughness:.25,metalness:0,emissive:qe("#2bbcff"),emissiveIntensity:.85}),zi=new at({color:qe("#e6e8ed"),roughness:.55,metalness:.18}),Hi=new at({color:qe("#c7f3ff"),roughness:.35,metalness:0,emissive:qe("#47c9ff"),emissiveIntensity:.35}),vi=new at({color:qe("#ff9a3c"),roughness:.25,metalness:.1,emissive:qe("#ff5a00"),emissiveIntensity:.45}),w=new at({color:qe("#3c8bff"),roughness:.25,metalness:.12,emissive:qe("#2b4bff"),emissiveIntensity:.4}),O=new at({color:qe("#f2c94c"),roughness:.3,metalness:.18,emissive:qe("#6a4b00"),emissiveIntensity:.25}),H=new at({color:qe("#aab3c5"),roughness:.65,metalness:.05}),V=new at({color:qe("#c2cad8"),roughness:.55,metalness:.08}),R=new at({color:qe("#7d8698"),roughness:.75,metalness:.04}),B=new at({color:qe("#e9d9c6"),roughness:.75,metalness:0}),$=new at({color:qe("#d7c2aa"),roughness:.42,metalness:.05}),j=new at({color:qe("#6a4b00"),roughness:.85,metalness:0}),he=new at({color:qe("#f4f4f4"),roughness:.25,metalness:0}),fe=new at({color:qe("#0f0f12"),roughness:.85,metalness:0}),ve=new _s({color:qe("#ff6b7a"),roughness:.22,metalness:.12,clearcoat:.6,clearcoatRoughness:.08,emissive:qe("#b4002f"),emissiveIntensity:.6,flatShading:!0}),we=new at({color:qe("#ff4da6"),roughness:.18,metalness:0,emissive:qe("#ff1f7a"),emissiveIntensity:.85}),be=new at({color:qe("#2a0010"),roughness:.55,metalness:.1,emissive:qe("#350013"),emissiveIntensity:.35,flatShading:!0}),Ze=new at({color:qe("#ff3b3b"),roughness:.15,metalness:.25,emissive:qe("#550000"),emissiveIntensity:.25}),Qe=new _s({color:qe("#ffffff"),roughness:.06,metalness:0,transmission:.9,thickness:1.6,ior:1.3,clearcoat:.35,clearcoatRoughness:.1,transparent:!0,opacity:.9});Qe.userData.fixedOpacity=!0;let et=new at({color:qe("#ff3b3b"),roughness:.25,metalness:.15,emissive:qe("#ff1f1f"),emissiveIntensity:.65}),$e=new at({color:qe("#2a0010"),roughness:.5,metalness:0}),Ae=new at({color:qe("#1a1a1a"),roughness:.7,metalness:0}),St=new at({color:qe("#e6e8ed"),roughness:.55,metalness:.08}),ot=new at({color:qe("#f2c94c"),roughness:.4,metalness:.15,emissive:qe("#4a3400"),emissiveIntensity:.12}),Jt=new at({color:qe("#2a2f3c"),roughness:.6,metalness:.2}),Xn=new at({color:qe("#f7f0a6"),roughness:.65,metalness:0}),zt=new at({color:qe("#2a2f3c"),roughness:.65,metalness:.18}),_n=new at({color:qe("#e6e8ed"),roughness:.85,metalness:0}),Pt=new at({color:qe("#aab3c5"),roughness:.45,metalness:.35}),dn=new at({color:qe("#0b1020"),roughness:.9,metalness:0,transparent:!0,opacity:.85}),ln=new on({color:725024,transparent:!0,opacity:.72,depthWrite:!1,toneMapped:!1});ln.userData.fixedOpacity=!0;let Qt=new Qs({color:16777215,transparent:!0,opacity:.28,toneMapped:!1}),cn=qe("#d4a456"),mr=(se,{stunned:re=0,isHit:ue=!1})=>{if(!se||!se.material||Array.isArray(se.material))return;let Re=se.material;if(!(Re.userData&&Re.userData.fixedOpacity)&&("opacity"in Re&&(Re.transparent=!0,Re.opacity=re>0?.65:1),"emissive"in Re)){let Pe=Number.isFinite(se.userData.baseEmissiveIntensity)?se.userData.baseEmissiveIntensity:Re.emissiveIntensity||0;Re.emissiveIntensity=Pe+(ue?.35:0)}},vt=(se,re=1.12)=>{let ue=new Be(se.geometry,ee);return ue.scale.set(re,re,re),ue.castShadow=!1,ue.receiveShadow=!1,ue.renderOrder=-1,se.add(ue),ue},qn=(se,re,ue,Re=-2)=>{let Pe=new Be(G,re);return Pe.position.set(0,0,Re),Pe.scale.set(ue,ue,1),Pe.castShadow=!1,Pe.receiveShadow=!1,Pe.renderOrder=-2,se.add(Pe),Pe},Gi=new Be(C,ye);Gi.castShadow=!s,Gi.receiveShadow=!1,a.add(Gi),vt(Gi,1.16);let Yn=new rn,xo=new Be(b,pe);xo.castShadow=!s,xo.position.set(0,-10,6),vt(xo,1.08);let yo=new Be(U,ke);yo.castShadow=!s,yo.position.set(0,0,8),vt(yo,1.08);let _o=new Be(D,ne);_o.castShadow=!s,_o.position.set(0,6,14),vt(_o,1.12);let vo=new Be(M,I);vo.castShadow=!1,vo.position.set(0,5,14.2),Yn.add(vo),vt(vo,1.06);let gr=new Be(Se,ne);gr.castShadow=!s,gr.rotation.x=Math.PI/2,gr.position.set(0,12,15.2),Yn.add(gr),vt(gr,1.06),Yn.add(xo),Yn.add(yo),Yn.add(_o),a.add(Yn);let Fn=new Be(ge,new at({color:qe("#67d6ff"),transparent:!0,opacity:0,roughness:.3,metalness:0,emissive:qe("#1a7cff"),emissiveIntensity:.6,side:bn}));Fn.position.set(e/2,t/2,-9.5),Fn.visible=!1,a.add(Fn);let Mi=new Set([ye,ke,pe,I,ne,ee,He,je,_t,tt,Ot,Xt,jt,qt,xi,Yt,yi,ai,Bi,Wn,li,_i,ki,zi,Hi,vi,w,O,H,V,R,B,$,j,he,fe,ve,we,be,Ze,Qe,et,$e,Ae,St,ot,Jt,Xn,zt,_n,Pt,dn,ln,Qt,E,v,Fn.material]),xr=new Map,Si=new Map,Rs=new Map,Is=new Map,yr=new Map,_r=new Map,Dl=new Map;function bd(se){let re=xr.get(se);return re||(re=new Be(L,new at({color:cn.clone(),roughness:.7,metalness:0})),re.castShadow=!s,re.receiveShadow=!1,vt(re,1.08),a.add(re),xr.set(se,re),re)}function wd(){let se=Si.get("trash");if(se)return se;se=new rn;let re=new Be(ie,H);re.castShadow=!s,vt(re,1.06);let ue=new Be(Q,V);ue.castShadow=!s,ue.position.set(0,-11,0),vt(ue,1.06);for(let Pe=0;Pe<6;Pe+=1){let Je=Pe/6*Math.PI*2,Ke=new Be(te,R);Ke.castShadow=!s,Ke.position.set(Math.cos(Je)*10.5,0,Math.sin(Je)*10.5),Ke.rotation.y=Je,se.add(Ke)}let Re=new Be(Se,R);return Re.castShadow=!s,Re.position.set(0,-13.5,7.5),se.add(Re),se.add(re),se.add(ue),a.add(se),Si.set("trash",se),se}function Ed(se){let re=Si.get(se);if(re)return re;re=new rn;let ue=new Be(Ve,St);ue.castShadow=!s,vt(ue,1.08);let Re=new Be(ze,ot);Re.castShadow=!s,Re.position.set(0,0,8),vt(Re,1.08);let Pe=new Be(me,Jt);Pe.castShadow=!s,Pe.rotation.z=Math.PI/2,Pe.position.set(9,0,10),vt(Pe,1.08);let Je=qn(re,je,18,-4);return Je.position.set(16,0,10),Je.visible=!1,re.userData.muzzleGlow=Je,re.add(ue),re.add(Re),re.add(Pe),a.add(re),Si.set(se,re),re}function Td(se){let re=Si.get(se);if(re)return re;re=new rn;let ue=new Be(Ye,zt);ue.castShadow=!s,vt(ue,1.08);let Re=new Be(We,_n);Re.castShadow=!1,Re.position.set(0,2.5,3.2),vt(Re,1.04);let Pe=new Be(Te,Pt);Pe.castShadow=!s,Pe.position.set(0,-6.5,3),vt(Pe,1.04);let Je=new Be(lt,dn);Je.castShadow=!1,Je.position.set(0,-6.5,4.2);let Ke=new Be(N,ne);return Ke.castShadow=!s,Ke.position.set(7.2,-7.2,2.6),re.add(ue,Re,Pe,Je,Ke),a.add(re),Si.set(se,re),re}function Ad(se,re){let ue=Rs.get(se);if(ue&&ue.userData.type===re)return ue;if(ue&&(Oi(a,ue,Mi),Rs.delete(se)),ue=new rn,ue.userData.type=re,re==="regi-mite"){let Pe=B.clone();Pe.roughness=.68;let Je=new Be(de,Pe);Je.userData.baseEmissiveIntensity=0,Je.castShadow=!s,vt(Je,1.1),ue.userData.body=Je;let Ke=$.clone();Ke.roughness=.38;let xt=new Be(de,Ke);xt.userData.baseEmissiveIntensity=0,xt.castShadow=!s,xt.position.set(0,-2,2),xt.scale.set(.92,.86,.82),vt(xt,1.1),ue.userData.shell=xt;let Ut=ft=>{let Oe=new rn,Et=new Be(rt,he.clone());Et.castShadow=!s;let Nt=new Be(it,fe.clone());return Nt.castShadow=!s,Nt.position.set(0,0,2.2),Oe.add(Et,Nt),Oe.position.set(ft,-4,9.5),{eye:Oe,pupil:Nt}},Bt=Ut(-7),kt=Ut(7),En=[],Zn=j.clone(),xe=[[-14,8],[-6,10],[6,10],[14,8]];for(let ft=0;ft<xe.length;ft+=1){let[Oe,Et]=xe[ft],Nt=new Be(T,Zn);Nt.castShadow=!s,Nt.position.set(Oe,Et,-11),En.push(Nt),ue.add(Nt)}ue.userData.pupils=[Bt.pupil,kt.pupil],ue.userData.legs=En,qn(ue,He,42,-14),ue.add(Je,xt,Bt.eye,kt.eye)}else if(re==="popup-gremlin"){let Pe=new Be(_,ve.clone());Pe.userData.baseEmissiveIntensity=.6,Pe.castShadow=!s,vt(Pe,1.14),ue.userData.body=Pe;let Je=new Be(z,we.clone());Je.userData.baseEmissiveIntensity=.85,Je.castShadow=!1,Je.position.set(0,0,1.5);let Ke=be.clone(),xt=[],Ut=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];for(let Bt=0;Bt<Ut.length;Bt+=1){let[kt,En,Zn]=Ut[Bt],xe=new Be(q,Ke);xe.userData.baseEmissiveIntensity=.35,xe.castShadow=!s,xe.scale.set(.55,.55,.55),xe.position.set(kt*15.5,En*15.5,Zn*8),xe.rotation.set(Bt*.4,Bt*.25,Bt*.3),xt.push(xe),ue.add(xe)}ue.userData.core=Je,ue.userData.spikes=xt,qn(ue,Ot,54,-16),ue.add(Pe,Je)}else if(re==="spy-dot"){let Pe=new Be(ce,Ze.clone());Pe.userData.baseEmissiveIntensity=.25,Pe.castShadow=!s,vt(Pe,1.12),ue.userData.body=Pe;let Je=new Be(Y,Qe.clone());Je.userData.baseEmissiveIntensity=0,Je.castShadow=!1,Je.material&&(Je.material.depthWrite=!1),ue.userData.shell=Je;let Ke=new Be(Ge,et.clone());Ke.userData.baseEmissiveIntensity=.65,Ke.castShadow=!1,Ke.rotation.x=.55,Ke.position.set(0,0,3);let xt=new Be(_e,$e.clone());xt.castShadow=!1,xt.position.set(0,0,11),ue.userData.pupil=xt,ue.userData.ring=Ke,qn(ue,Xt,46,-16),ue.add(Pe,Je,Ke,xt)}let Re=re==="regi-mite"?3:re==="popup-gremlin"?2:re==="spy-dot"?5:0;if(Re>1){let Pe=re==="regi-mite"?new ct("#ffd35a"):re==="popup-gremlin"?new ct("#ff4da6"):new ct("#ff3b3b"),Je=re==="regi-mite"?44:re==="spy-dot"?40:36,Ke=6,xt=1.6,Ut=1.4,Bt=(Je-xt*2-Ut*(Re-1))/Re,kt=new rn;kt.position.set(0,re==="popup-gremlin"?-26:re==="spy-dot"?-24:-32,0);let En=new Be(G,ln);En.scale.set(Je,Ke,1),En.position.set(0,0,14),En.castShadow=!1,En.receiveShadow=!1,kt.add(En);let Zn=[];for(let ft=0;ft<Re;ft+=1){let Oe=new on({color:Pe.clone(),transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1});Oe.userData.fixedOpacity=!0;let Et=new Be(G,Oe);Et.scale.set(Bt,Ke-2.2,1),Et.position.set(-Je/2+xt+Bt/2+ft*(Bt+Ut),0,14.2),Et.castShadow=!1,Et.receiveShadow=!1,Zn.push(Et),kt.add(Et)}let xe=new Vr(W,Qt);xe.position.set(0,0,14.4),xe.scale.set(Je,Ke,1),kt.add(xe),ue.userData.hpBar=kt,ue.userData.hpSegs=Zn,ue.userData.hpColor=Pe,ue.userData.hpMaxSegments=Re,ue.add(kt)}return a.add(ue),Rs.set(se,ue),ue}function Cd(se,re){let ue=Is.get(se);if(ue&&ue.userData.type===re)return ue;if(ue&&(Oi(a,ue,Mi),Is.delete(se)),ue=new rn,ue.userData.type=re,re==="apple"){let Re=new Be(dt,ai);Re.castShadow=!s,vt(Re,1.12);let Pe=new Be(K,Wn);Pe.castShadow=!1,Pe.position.set(-3.2,-4.2,6.4);let Je=new Be(nt,Bi);Je.castShadow=!s,Je.rotation.x=Math.PI/2,Je.position.set(-.5,-9.2,7.2);let Ke=new Be(ht,li);Ke.castShadow=!s,Ke.position.set(4.2,-9.2,7),Ke.rotation.z=-.6,Ke.rotation.y=.5,qn(ue,Xt,34,-14),ue.add(Re,Pe,Je,Ke)}else if(re==="coolant"){let Re=new Be(Me,_i);Re.castShadow=!s,vt(Re,1.06);let Pe=new Be(Ie,zi);Pe.castShadow=!s,Pe.position.set(0,-9.5,0),vt(Pe,1.05);let Je=new Be(Ue,ki);Je.castShadow=!1,Je.position.set(0,1,0);let Ke=Ut=>{let Bt=new Be(st,Hi);return Bt.castShadow=!1,Bt.position.set(0,0,7.8),Bt.rotation.z=Ut,Bt},xt=new rn;xt.add(Ke(0),Ke(Math.PI/2),Ke(Math.PI/4),Ke(-Math.PI/4)),qn(ue,je,46,-14),ue.add(Re,Pe,Je,xt)}else if(re==="powerup-rapid"){let Re=new Be(ae,vi);Re.castShadow=!s,Re.rotation.z=Math.PI/2,vt(Re,1.06);let Pe=new Be(Ne,vi);Pe.castShadow=!s,Pe.position.set(-6.4,0,-1.2),Pe.rotation.z=Math.PI/2,Pe.scale.set(.9,.9,.9),vt(Pe,1.04);let Je=Pe.clone();Je.position.x=6.4;let Ke=new Be(pt,Jt);Ke.castShadow=!1,Ke.position.set(-2.2,0,2.8),Ke.rotation.z=Math.PI/2;let xt=Ke.clone();xt.position.x=2.2,qn(ue,_t,44,-14),ue.add(Re,Pe,Je,Ke,xt)}else if(re==="powerup-triple"){let Re=new Be(Fe,w);Re.castShadow=!s,vt(Re,1.06);let Pe=(Ut,Bt)=>{let kt=new Be(Mt,w);return kt.castShadow=!s,kt.rotation.z=Math.PI/2,kt.position.set(Ut,Bt,3.6),vt(kt,1.04),kt},Je=Pe(-5.4,-2),Ke=Pe(5.4,-2),xt=Pe(0,6);qn(ue,tt,46,-14),ue.add(Re,Je,Ke,xt)}else if(re==="powerup-giant"){let Re=new Be(Xe,O);Re.castShadow=!s,vt(Re,1.06);let Pe=new Be(le,O);Pe.castShadow=!1,Pe.position.set(0,-11.5,3.5),Pe.rotation.x=Math.PI/2,Pe.scale.set(1.05,1.05,1.05);let Je=new rn;for(let Ke=0;Ke<3;Ke+=1){let xt=Ke/3*Math.PI*2+Math.PI/6,Ut=new Be(P,ne);Ut.castShadow=!s,Ut.position.set(Math.cos(xt)*6.5,-14.2,Math.sin(xt)*6.5),Ut.rotation.z=0,Je.add(Ut)}qn(ue,He,50,-14),ue.add(Re,Pe,Je)}else{let Re=new Be(ae,vi);Re.castShadow=!s,vt(Re,1.06),qn(ue,He,40,-14),ue.add(Re)}return a.add(ue),Is.set(se,ue),ue}function Rd(se){let re=yr.get(se);if(re)return re;re=new Be(k,xi),re.castShadow=!1,vt(re,1.08);let ue=new Be(J,jt);ue.position.set(0,0,-2),ue.castShadow=!1,ue.receiveShadow=!1,re.add(ue),re.userData.trail=ue;let Re=qn(re,He,20,-6);return re.userData.glow=Re,a.add(re),yr.set(se,re),re}function Id(se){let re=_r.get(se);return re||(re=new Be(X,yi),re.castShadow=!s,re.receiveShadow=!1,a.add(re),_r.set(se,re),Dl.has(se)||Dl.set(se,(Math.random()-.5)*.6),re)}function Ps(se,re,ue=!1){for(let[Re,Pe]of se)re.has(Re)||(Oi(a,Pe,Mi),se.delete(Re))}function Pd(se,re){var ft,Oe,Et,Nt;let ue=(se==null?void 0:se.cpuHeat)>=90,Re=(se==null?void 0:se.ramPressure)>=60,Pe=(se==null?void 0:se.powerUp)==="giant",Je=!!(se!=null&&se.isHit),Ke="#f4f4f4",xt="#000000",Ut=0;Je?(xt="#ffffff",Ut=.85):Pe?(Ke="#f2c94c",xt="#6a4b00",Ut=.22):ue?(Ke="#ff4d4d",xt="#5a0000",Ut=.28):Re&&(Ke="#4aa3ff",xt="#003a7a",Ut=.22),ye.color.set(Ke),ye.emissive.set(xt),ye.emissiveIntensity=Ut;let kt=(Pe?48:32)/28;Gi.scale.set(kt,kt,kt);let En=((ft=re==null?void 0:re.x)!=null?ft:e/2)-((Oe=se==null?void 0:se.x)!=null?Oe:e/2),Zn=((Et=re==null?void 0:re.y)!=null?Et:t/2)-((Nt=se==null?void 0:se.y)!=null?Nt:t/2),xe=Math.atan2(Zn,En);Gi.rotation.z=xe+Math.PI/2}function Dd(se){var Zn;if(!se)return;let re=se.player||{x:e/2,y:t/2},ue=se.mousePos||{x:e/2,y:t/2};Pd(re,ue),Gi.position.set(re.x,re.y,24),Yn.position.set(e/2,t/2+40,0),Yn.position.set(320,280,0);let Re=wd();if(se.trash){let xe=se.trash.x+16,ft=se.trash.y+18;Re.position.set(xe,ft,0)}else Re.position.set(596,438,0);if(se.empExplosion&&Number.isFinite(se.totalTime)&&Number.isFinite(se.empExplosion.t0)){let xe=se.totalTime-se.empExplosion.t0;if(xe>=0&&xe<=.6){let ft=yx(xe/.6),Oe=.4+ft*2.7;Fn.visible=!0,Fn.position.set(se.empExplosion.x,se.empExplosion.y,-9.6),Fn.scale.set(Oe,Oe,1),Fn.material.opacity=.85*(1-ft)}else Fn.visible=!1}else Fn.visible=!1;let Pe=new Set;for(let xe of se.folderWalls||[]){let ft=xe.id;Pe.add(ft);let Oe=bd(ft),Et=xe.x+12,Nt=xe.y+12;Oe.position.set(Et,Nt,0);let Zt=Number.isFinite(xe.hp)?xe.hp:0,fn=Zt>3?0:Zt>2?1:Zt>1?2:3,Jn=fn===0?1:fn===1?.85:fn===2?.7:.55;Oe.material.color.copy(cn).multiplyScalar(Jn);let Vi=Zt<=1;Oe.scale.set(1,1,Vi?.7:1),Oe.castShadow=!0}Ps(xr,Pe);let Je=new Set(["trash"]);for(let xe of se.deployables||[]){let ft=xe.id;if(Je.add(ft),xe.type==="watchdog"){let Oe=Ed(ft);Oe.position.set(xe.x+12,xe.y+12,0);let Et=Number.isFinite(xe.aimDir)?xe.aimDir:7,Nt=Math.PI/2-Et*(Math.PI/4);Oe.rotation.z=Nt;let Zt=Oe.userData.muzzleGlow||null;if(Zt){let fn=.4+.6*Math.max(0,Math.sin((se.totalTime||0)*10+ft*3));Zt.visible=!0,Zt.material.opacity=(Zt.material.userData&&Zt.material.userData.fixedOpacity,Zt.material.opacity),Zt.scale.set(1+fn*.25,1+fn*.25,1)}}else if(xe.type==="sticky"){let Oe=Td(ft);Oe.position.set(xe.x+12,xe.y+12,2),Oe.rotation.z=-.2}}Ps(Si,Je);let Ke=new Set;for(let xe of se.enemies||[]){let ft=xe.id;Ke.add(ft);let Oe=Ad(ft,xe.type);Oe.position.set(xe.x,xe.y,6);let Nt=Number.isFinite(xe.size)?xe.size:xe.type==="regi-mite"?64:xe.type==="popup-gremlin"?36:(xe.type==="spy-dot",48),Zt=xe.type==="regi-mite"?48:(xe.type==="popup-gremlin",28),fn=Nt/Zt;if(xe.type==="popup-gremlin"){let At=Number.isFinite(xe.frame)?xe.frame:0,$n=Math.sin(At*3)*4,Kn=Math.sin(At*5)*8*Math.PI/180,ci=1+Math.sin(At*4)*.15;Oe.position.y+=$n,Oe.rotation.z=Kn,Oe.scale.setScalar(fn*ci);let On=Oe.userData.body||null;On&&(On.rotation.x=Math.sin(At*4.2)*.35,On.rotation.y=Math.cos(At*3.1)*.28,On.rotation.z=Math.sin(At*2.8)*.22);let $t=Oe.userData.core||null;$t&&($t.rotation.z=At*2.2,$t.rotation.x=-Math.sin(At*3.2)*.22);let hn=Oe.userData.spikes;if(Array.isArray(hn))for(let Ds=0;Ds<hn.length;Ds+=1){let Ll=hn[Ds];Ll.rotation.x=At*1.8+Ds*.7,Ll.rotation.y=At*1.4+Ds*.5,Ll.rotation.z=At*.9+Ds*.6}}else if(xe.type==="regi-mite"){let At=Number.isFinite(xe.frame)?xe.frame:0,$n=Math.sin(At*.8)*1.5;Oe.position.y+=$n,Oe.rotation.z=0,Oe.scale.setScalar(fn);let Kn=Oe.userData.shell||null;Kn&&(Kn.position.z=2+Math.sin(At*1.7)*.7);let ci=Oe.userData.legs;if(Array.isArray(ci))for(let $t=0;$t<ci.length;$t+=1){let hn=ci[$t];hn.rotation.x=Math.sin(At*5+$t)*.45,hn.rotation.y=Math.cos(At*4.1+$t*1.3)*.35}let On=Oe.userData.pupils;if(Array.isArray(On))for(let $t=0;$t<On.length;$t+=1){let hn=On[$t];hn.position.x=Math.sin(At*2.5+$t)*.65,hn.position.y=Math.cos(At*2.1+$t)*.5}}else if(xe.type==="spy-dot"){Oe.rotation.z=0,Oe.scale.setScalar(fn);let At=se.totalTime||0,$n=Oe.userData.pupil||null,Kn=Oe.userData.ring||null,ci=Oe.userData.shell||null,On=Math.sin(At*9)>.7?.25:1;$n&&($n.scale.setScalar(On),$n.position.x=Math.sin(At*2.6+ft)*.55,$n.position.y=Math.cos(At*2.1+ft)*.45),Kn&&(Kn.rotation.z=At*1.7,Kn.rotation.y=Math.sin(At*3)*.35),ci&&(ci.rotation.z=At*.55)}let Jn=Oe.userData.hpSegs,Vi=Oe.userData.hpColor,Mo=Number.isFinite(Oe.userData.hpMaxSegments)?Oe.userData.hpMaxSegments:0;if(Array.isArray(Jn)&&Jn.length>0&&Mo>1&&Vi&&Vi.isColor){let At=Number.isFinite(xe.maxHp)?Math.max(1,xe.maxHp):Mo,$n=Number.isFinite(xe.hp)?Math.max(0,Math.min(At,xe.hp)):0,Kn=$n>=At,ci=Kn?.55:.95,On=Kn?.14:.22;for(let $t=0;$t<Jn.length;$t+=1){let hn=Jn[$t];!hn||!hn.material||!hn.material.color||($t<$n?(hn.material.color.copy(Vi),hn.material.opacity=ci):(hn.material.color.set("#0b1020"),hn.material.opacity=On))}}let Nd=Number.isFinite(xe.stunned)?xe.stunned:0,Fd=!!xe.isHit;Oe.traverse(At=>{At.isMesh&&mr(At,{stunned:Nd,isHit:Fd})}),xe.flipX?Oe.scale.x=-Math.abs(Oe.scale.x||1):Oe.scale.x=Math.abs(Oe.scale.x||1);let gh=Oe.userData.hpBar||null;gh&&(gh.scale.x=xe.flipX?-1:1)}Ps(Rs,Ke);let xt=se.totalTime||0;Yn.position.y=280+Math.sin(xt*1.2)*1.6,Yn.rotation.z=Math.sin(xt*.9)*.035,Re.rotation.z=Math.sin(xt*1.6)*.04;let Ut=new Set;for(let xe of se.pickups||[]){let ft=xe.id;Ut.add(ft);let Oe=Cd(ft,xe.type),Et=se.totalTime||0,Nt=typeof xe.type=="string"&&xe.type.startsWith("powerup"),Zt=Math.sin(Et*(Nt?8:6))*(Nt?0:2),fn=Nt?1+Math.sin(Et*10)*.12:1;Oe.position.set(xe.x,xe.y+Zt,6),Oe.rotation.z=Nt?Et*.6:Et*.35,Oe.scale.setScalar(fn),Oe.rotation.x=Math.sin(Et*1.7+ft)*.2,Oe.rotation.y=Math.cos(Et*1.3+ft)*.18,Oe.position.z=6+Math.sin(Et*2.2+ft)*.6}Ps(Is,Ut);let Bt=new Set;for(let xe of se.projectiles||[]){let ft=xe.id;Bt.add(ft);let Oe=Rd(ft);Oe.position.set(xe.x,xe.y,10);let Et=Number.isFinite(xe.vx)?xe.vx:0,Nt=Number.isFinite(xe.vy)?xe.vy:0,Zt=Math.hypot(Et,Nt);Zt>.001&&(Oe.rotation.z=Math.atan2(Nt,Et));let fn=!!xe.fromWatchdog;Oe.material=fn?Yt:xi;let Jn=Oe.userData.trail||null;if(Jn){Jn.material=fn?qt:jt,Jn.visible=Zt>.15;let Mo=Math.max(.8,Math.min(2.2,Zt/5.8));Jn.scale.set(Mo,1,1)}let Vi=Oe.userData.glow||null;Vi&&(Vi.material=fn?je:He)}Ps(yr,Bt);let kt=new Set,En=se.totalTime||0;for(let xe of se.clutter||[]){let ft=xe.id;kt.add(ft);let Oe=Id(ft),Et=Dl.get(ft)||0;Oe.position.set(xe.x,xe.y,1),Oe.rotation.z=Et+Math.sin(En*2+ft%10)*.05}if(Ps(_r,kt),o.render(a,l),s)try{let xe=o.getContext();(Zn=xe.finish)==null||Zn.call(xe)}catch(xe){}}function Ld(se,re){o.setSize(se,re,!1),l.left=0,l.right=se,l.top=0,l.bottom=re,l.updateProjectionMatrix()}function Ud(){var se,re,ue;for(let Re of xr.values())Oi(a,Re,Mi);for(let Re of Si.values())Oi(a,Re,Mi);for(let Re of Rs.values())Oi(a,Re,Mi);for(let Re of Is.values())Oi(a,Re,Mi);for(let Re of yr.values())Oi(a,Re,Mi);for(let Re of _r.values())Oi(a,Re,Mi);xr.clear(),Si.clear(),Rs.clear(),Is.clear(),yr.clear(),_r.clear(),a.remove(Gi),a.remove(Yn),a.remove(Fn),a.remove(S),a.remove(A),C.dispose(),L.dispose(),U.dispose(),b.dispose(),M.dispose(),D.dispose(),k.dispose(),G.dispose(),W.dispose(),J.dispose(),X.dispose(),oe.dispose(),Z.dispose(),Me.dispose(),Ie.dispose(),Ue.dispose(),st.dispose(),dt.dispose(),ht.dispose(),nt.dispose(),K.dispose(),ae.dispose(),Fe.dispose(),Xe.dispose(),Ne.dispose(),pt.dispose(),Mt.dispose(),P.dispose(),le.dispose(),ie.dispose(),Q.dispose(),te.dispose(),Se.dispose(),de.dispose(),Ee.dispose(),rt.dispose(),it.dispose(),T.dispose(),_.dispose(),z.dispose(),q.dispose(),ce.dispose(),Y.dispose(),Ge.dispose(),_e.dispose(),Ve.dispose(),ze.dispose(),me.dispose(),De.dispose(),Ye.dispose(),We.dispose(),Te.dispose(),lt.dispose(),N.dispose(),ge.dispose(),u.dispose(),ye.dispose(),ke.dispose(),pe.dispose(),I.dispose(),ne.dispose(),ee.dispose(),He.dispose(),je.dispose(),_t.dispose(),tt.dispose(),Ot.dispose(),Xt.dispose(),jt.dispose(),qt.dispose(),xi.dispose(),Yt.dispose(),yi.dispose(),ai.dispose(),Bi.dispose(),Wn.dispose(),li.dispose(),_i.dispose(),ki.dispose(),zi.dispose(),Hi.dispose(),vi.dispose(),w.dispose(),O.dispose(),H.dispose(),V.dispose(),R.dispose(),B.dispose(),$.dispose(),j.dispose(),he.dispose(),fe.dispose(),ve.dispose(),we.dispose(),be.dispose(),Ze.dispose(),Qe.dispose(),et.dispose(),$e.dispose(),Ae.dispose(),St.dispose(),ot.dispose(),Jt.dispose(),Xn.dispose(),zt.dispose(),_n.dispose(),Pt.dispose(),dn.dispose(),ln.dispose(),Qt.dispose(),E.dispose(),v.dispose(),Fn.material.dispose(),x&&((se=x.dispose)==null||se.call(x)),y&&((re=y.dispose)==null||re.call(y)),g&&((ue=g.dispose)==null||ue.call(g)),o.dispose()}return{render:Dd,resize:Ld,dispose:Ud}}function fh({state:i,onInitFailed:e}){let t=vn(null),n=vn(null);return jn(()=>{let s=t.current;if(!s)return;let r=typeof navigator!="undefined"&&!!navigator.webdriver,o=null;try{o=Md({canvas:s,width:640,height:480,preserveDrawingBuffer:r})}catch(a){console.error("WebGL init failed",a),e==null||e(a);return}return n.current=o,()=>{if(n.current){try{n.current.dispose()}catch(a){}n.current=null}}},[]),xh(()=>{let s=n.current;s&&s.render(i)}),m.createElement("canvas",{ref:t,width:640,height:480,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})}var ph=()=>({x:640/2,y:480/2+20,hp:5,maxHp:5,empCharge:100,dashEnergy:100,cpuHeat:0,ramPressure:0,isDashing:!1,isHit:!1,invincible:0,upgrades:[],powerUp:null,powerUpTimer:0});function bx(i){let e=i;for(;e<-Math.PI;)e+=Math.PI*2;for(;e>Math.PI;)e-=Math.PI*2;return e}function wx(i,e){let t=Math.atan2(e,i),n=Math.PI/4,s=bx(t-Math.PI/2),r=Math.round(-s/n)%8;return r<0&&(r+=8),r}function mh(){let[i,e]=bt(ut.MENU),[t,n]=bt(ph),[s,r]=bt([]),[o,a]=bt([]),[l,c]=bt([]),[h,d]=bt([]),[f,p]=bt([]),[x,y]=bt([]),[g,u]=bt([]),[E,S]=bt({x:640/2,y:480/2}),[v,A]=bt({}),[C,L]=bt(0),[U,b]=bt(90),[M,D]=bt(0),[k,G]=bt(25),[W,J]=bt(100),[X,oe]=bt(0),[Z,Me]=bt(100),[Ie,Ue]=bt(""),[st,dt]=bt(!1),[ht,nt]=bt(!1),[K,ae]=bt(null),Fe=vn(null),Xe=vn(null),Ne=vn(null),pt=vn(0),Mt=vn(0),P=vn(0),le=vn(1e4),ie=vn(0),Q=vn({x:1,y:0,angle:0}),te=vn(0),Se=typeof navigator!="undefined"&&!!navigator.webdriver,[de,Ee]=bt(()=>{if(typeof window=="undefined")return!0;let I=new URLSearchParams(window.location.search).get("renderer");if(!I)return!0;let ne=String(I).toLowerCase();return!(ne==="dom"||ne==="2d")}),[rt,it]=bt(!1),[T,_]=bt(()=>({w:typeof window!="undefined"?window.innerWidth:1024,h:typeof window!="undefined"?window.innerHeight:768})),z=vn(null);z.current={gameState:i,player:t,enemies:s,projectiles:o,pickups:l,folderWalls:h,deployables:f,clutter:x,popups:g,mousePos:E,keys:v,wave:C,waveTimer:U,totalTime:M,setupTimer:k,systemFolderHP:W,score:X,privacyScore:Z,isShooting:st,showHelp:ht,empExplosion:K},jn(()=>{Ue(Math.random().toString(36).substring(2,10).toUpperCase())},[]),jn(()=>{let I=()=>{_({w:window.innerWidth,h:window.innerHeight})};return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]),jn(()=>{let I=()=>{it(!!document.fullscreenElement),_({w:window.innerWidth,h:window.innerHeight})};return document.addEventListener("fullscreenchange",I),()=>document.removeEventListener("fullscreenchange",I)},[]);let q=Wi((I,ne)=>{let ee=!1;I.type==="firewall"?ee=ne==="deny":I.type==="fake-update"?ee=ne==="later":I.type==="security-update"&&(ee=ne==="accept"),ee?(Me(He=>Math.min(100,He+8)),n(He=>({...He,ramPressure:Math.max(0,He.ramPressure-8)})),oe(He=>He+25)):n(He=>({...He,hp:He.hp-1})),u([])},[]),ce=Wi(()=>{var ne,ee;let I=Xe.current;I&&(document.fullscreenElement?(ne=document.exitFullscreen)==null||ne.call(document):(ee=I.requestFullscreen)==null||ee.call(I))},[]),Y=Wi(()=>{n(ph()),r([]),a([]),c([]),y([]),u([]),d([]),p([]),L(0),b(90),D(0),G(25),ie.current=0,J(100),oe(0),Me(100),dt(!1),ae(null),Mt.current=0,P.current=3e3,le.current=15e3,Ue(Math.random().toString(36).substring(2,10).toUpperCase()),e(ut.SETUP)},[]),Ge=Wi(I=>{n(ne=>({...ne,upgrades:[...ne.upgrades,I]})),L(3),b(90),e(ut.PLAYING)},[]);jn(()=>{let I=ee=>{var je;let He=ee.key.toLowerCase();if(A(_t=>({..._t,[He]:!0})),He==="f"&&(ee.preventDefault(),ce()),He==="enter"){ee.preventDefault();let _t=(je=z.current)==null?void 0:je.gameState;_t===ut.MENU?Y():_t===ut.SETUP?(e(ut.PLAYING),L(1)):(_t===ut.GAMEOVER||_t===ut.WIN)&&Y()}ee.code==="Space"&&(ee.preventDefault(),e(_t=>_t===ut.PLAYING?ut.PAUSED:_t===ut.PAUSED?ut.PLAYING:_t)),ee.key==="F1"&&(ee.preventDefault(),nt(_t=>!_t)),(He==="q"||He==="e")&&u(_t=>{if(_t.length>0){let tt=_t[0],Ot;(tt.swapped?He==="q"?"e":"q":He)==="q"?tt.type==="firewall"?Ot="deny":tt.type==="fake-update"?Ot="later":tt.type==="security-update"&&(Ot="accept"):tt.type==="firewall"?Ot="allow":tt.type==="fake-update"?Ot="install":tt.type==="security-update"&&(Ot="reject");let jt=!1;return tt.type==="firewall"?jt=Ot==="deny":tt.type==="fake-update"?jt=Ot==="later":tt.type==="security-update"&&(jt=Ot==="accept"),jt?(Me(qt=>Math.min(100,qt+8)),n(qt=>({...qt,ramPressure:Math.max(0,qt.ramPressure-8)})),oe(qt=>qt+25)):n(qt=>({...qt,hp:qt.hp-1})),[]}return _t})},ne=ee=>{A(He=>({...He,[ee.key.toLowerCase()]:!1}))};return window.addEventListener("keydown",I),window.addEventListener("keyup",ne),()=>{window.removeEventListener("keydown",I),window.removeEventListener("keyup",ne)}},[Y,ce]);let _e=Wi(I=>{if(!Fe.current)return;let ne=Fe.current.getBoundingClientRect(),ee=640/ne.width,He=480/ne.height;S({x:(I.clientX-ne.left)*ee,y:(I.clientY-ne.top)*He})},[]),Ve=Wi(()=>{var je,_t,tt,Ot;let I=z.current,ne=(_t=(je=I==null?void 0:I.player)==null?void 0:je.x)!=null?_t:640/2,ee=(Ot=(tt=I==null?void 0:I.player)==null?void 0:tt.y)!=null?Ot:480/2,He=Number.isFinite(I==null?void 0:I.totalTime)?I.totalTime:0;n(Xt=>({...Xt,empCharge:0})),r(Xt=>Xt.map(jt=>({...jt,stunned:120}))),ae({x:ne,y:ee,t0:He})},[]),ze=Wi(I=>{let ne=z.current;if(!ne)return;let ee=Math.max(0,Math.min(50,I)),He=ne.gameState;if(ne.popups.length>0&&u(B=>{if(B.length===0)return B;let $=B[0],he=(Number.isFinite($.countdown)?$.countdown:100)-ee*.016;return he<=0?(n(fe=>({...fe,hp:fe.hp-1})),[]):[{...$,countdown:he}]}),He===ut.SETUP){ie.current+=ee;let R=Math.floor(ie.current/1e3);R>0&&(ie.current-=R*1e3,G(B=>{let $=B-R;return $<=0?(e(ut.PLAYING),L(1),25):$}));return}if(He!==ut.PLAYING)return;let je=ne.keys||{},_t=ne.mousePos||{x:640/2,y:480/2},tt=ne.player,Ot=ne.enemies,Xt=ne.popups,jt=ne.folderWalls,qt=ne.deployables,xi=ne.clutter||[],Yt=ne.wave,yi=ne.waveTimer,ai=ne.systemFolderHP,Bi=ne.isShooting,Wn=_t.x-tt.x,li=_t.y-tt.y,_i=Wn*Wn+li*li,ki=10;if(_i>ki*ki){let R=Math.sqrt(_i)||1;Q.current.x=Wn/R,Q.current.y=li/R,Q.current.angle=Math.atan2(li,Wn)}let zi=Q.current.x,Hi=Q.current.y,vi=Q.current.angle;Mt.current-=ee;let w=tt.cpuHeat>=90,O=tt.upgrades.includes("fan");if(n(R=>{let B=R.upgrades.includes("ram"),$=3.5,j=B?.004:.008,he=1-R.ramPressure*j,fe=$*Math.max(.2,he),ve=R.x,we=R.y,be=!1,Ze=R.dashEnergy;(je.w||je.arrowup)&&(we-=fe),(je.s||je.arrowdown)&&(we+=fe),(je.a||je.arrowleft)&&(ve-=fe),(je.d||je.arrowright)&&(ve+=fe),je.shift&&R.dashEnergy>20?(ve+=zi*10,we+=Hi*10,be=!0,Ze-=1.5):Ze=Math.min(100,R.dashEnergy+.2),ve=Math.max(16,Math.min(624,ve)),we=Math.max(36,Math.min(464,we));let Qe=R.powerUp,et=R.powerUpTimer;return R.powerUp&&R.powerUpTimer>0&&(et-=1,et<=0&&(Qe=null)),{...R,x:ve,y:we,isDashing:be,dashEnergy:Ze,empCharge:Math.min(100,R.empCharge+.15),cpuHeat:Math.max(0,R.cpuHeat-.04),invincible:Math.max(0,R.invincible-1),isHit:R.invincible>50,powerUp:Qe,powerUpTimer:et}}),Bi&&Mt.current<=0&&Xt.length===0&&tt.powerUp!=="giant"&&!w){let R=zi,B=Hi,$=8,j=vi,he=14,fe=tt.x+R*he,ve=tt.y+B*he,we=tt.powerUp==="triple";a(we?$e=>[...$e,{x:fe,y:ve,vx:R*$,vy:B*$,id:Math.random()},{x:fe,y:ve,vx:Math.cos(j-.2)*$,vy:Math.sin(j-.2)*$,id:Math.random()},{x:fe,y:ve,vx:Math.cos(j+.2)*$,vy:Math.sin(j+.2)*$,id:Math.random()}]:et=>[...et,{x:fe,y:ve,vx:R*$,vy:B*$,id:Math.random()}]);let be=tt.powerUp==="rapid"?60:180,Ze=tt.cpuHeat*1.5;Mt.current=be+Ze;let Qe=tt.powerUp==="rapid"?4:6;O&&(Qe*=.5),n(et=>({...et,cpuHeat:Math.min(100,et.cpuHeat+Qe)}))}a(R=>{let B=[];for(let $ of R){let j=$.x+$.vx,he=$.y+$.vy;j>-10&&j<650&&he>20&&he<490?B.push({...$,x:j,y:he}):$.fromWatchdog||oe(ve=>ve-1)}return B}),r(R=>R.map(B=>{if(B.stunned>0)return{...B,stunned:B.stunned-1};let $=320,j=280;if(B.type==="spy-dot"&&($=tt.x,j=tt.y),B.type==="popup-gremlin"){let $e=(B.bounceTimer||0)+1,Ae=B.bounceAngle||0,ot=((Number.isFinite(B.frame)?B.frame:0)+ee*.012)%16;if($e>40+Math.random()*40)return Ae=Math.random()*Math.PI*2,{...B,x:B.x+Math.cos(Ae)*B.speed*2,y:B.y+Math.sin(Ae)*B.speed*2,bounceAngle:Ae,bounceTimer:0,frame:ot};let Jt=(320-B.x)*.003,Xn=(280-B.y)*.003,zt=B.x+Math.cos(Ae)*B.speed+Jt,_n=B.y+Math.sin(Ae)*B.speed+Xn;return(zt<10||zt>630)&&(Ae=Math.PI-Ae),(_n<30||_n>470)&&(Ae=-Ae),zt=Math.max(10,Math.min(630,zt)),_n=Math.max(30,Math.min(470,_n)),{...B,x:zt,y:_n,bounceAngle:Ae,bounceTimer:$e,frame:ot,isHit:!1}}let he=qt.filter($e=>$e.type==="sticky");if(he.length>0&&B.type!=="spy-dot"){let $e=he.reduce((Ae,St)=>{let ot=Math.sqrt((B.x-St.x)**2+(B.y-St.y)**2);return ot<Ae.dist?{note:St,dist:ot}:Ae},{note:null,dist:1/0});$e.dist<150&&($=$e.note.x+12,j=$e.note.y+12)}let fe=$-B.x,ve=j-B.y,we=Math.sqrt(fe*fe+ve*ve)||1,be=B.x+fe/we*B.speed,Ze=B.y+ve/we*B.speed;for(let $e of jt){if($e.hp<=0)continue;if(Math.sqrt((be-$e.x-12)**2+(Ze-$e.y-12)**2)<B.size/2+12){d(St=>St.map(ot=>ot.id===$e.id?{...ot,hp:ot.hp-.01}:ot)),be=B.x,Ze=B.y;break}}let Qe=Number.isFinite(B.frame)?B.frame:0,et=Qe;return B.type==="regi-mite"&&(et=(Qe+ee*.02)%16),B.type==="spy-dot"&&(et=(Qe+ee*.03)%16),{...B,x:be,y:Ze,frame:et,isHit:!1}}));let H=qt.find(R=>R.type==="watchdog");if(H){let R=null,B=200;for(let $ of Ot){let j=Math.sqrt(($.x-H.x-12)**2+($.y-H.y-12)**2);j<B&&(B=j,R=$)}if(R){let $=R.x-H.x-12,j=R.y-H.y-12,he=wx($,j);if(p(fe=>{let ve=!1,we=fe.map(be=>be.id!==H.id||(Number.isFinite(be.aimDir)?be.aimDir:7)===he?be:(ve=!0,{...be,aimDir:he}));return ve?we:fe}),Math.random()<.03){let fe=Math.sqrt($*$+j*j)||1;a(ve=>[...ve,{x:H.x+12,y:H.y+12,vx:$/fe*6,vy:j/fe*6,id:Math.random(),fromWatchdog:!0}])}}else p(j=>{let he=!1,fe=j.map(ve=>ve.id!==H.id||(Number.isFinite(ve.aimDir)?ve.aimDir:7)===7?ve:(he=!0,{...ve,aimDir:7}));return he?fe:j})}if(a(R=>{let B=[],$=xi.length,j=596,he=438;for(let fe of R){let ve=!1;r(we=>we.map(be=>{if(ve)return be;if(Math.sqrt((fe.x-be.x)**2+(fe.y-be.y)**2)<be.size/2+5){ve=!0;let Qe=be.hp-1;if(Qe<=0){let et=Math.random(),$e=null;return et<.2?$e="apple":et<.28?$e="coolant":et<.36?$e="powerup-rapid":et<.44?$e="powerup-triple":et<.5&&($e="powerup-giant"),$e&&c(Ae=>[...Ae,{x:be.x,y:be.y,type:$e,id:Math.random()}]),Math.random()<.7&&(y(Ae=>[...Ae,{x:be.x+(Math.random()-.5)*30,y:be.y+(Math.random()-.5)*30,id:Math.random()}]),n(Ae=>({...Ae,ramPressure:Math.min(100,Ae.ramPressure+8)}))),oe(Ae=>Ae+10),null}return{...be,hp:Qe,isHit:!0}}return be}).filter(Boolean)),ve||Math.sqrt((fe.x-j)**2+(fe.y-he)**2)<18&&(ve=!0,$>0&&($-=1,y(be=>be.length>0?be.slice(0,-1):be),n(be=>({...be,ramPressure:Math.max(0,be.ramPressure-8)})))),ve||B.push(fe)}return B}),tt.invincible<=0){let R=tt.powerUp==="giant"?24:10;for(let B of Ot){if(B.stunned>0)continue;if(Math.sqrt((B.x-tt.x)**2+(B.y-tt.y)**2)<B.size/2+R){if(tt.powerUp==="giant")r(j=>j.map(he=>he.id!==B.id?he:(oe(fe=>fe+10),null)).filter(Boolean));else if(!tt.isDashing){n(j=>({...j,hp:j.hp-1,invincible:60,isHit:!0})),oe(j=>j-5);break}}}}let V=0;for(let R of Ot){if(R.stunned>0)continue;Math.sqrt((R.x-320)**2+(R.y-280)**2)<35&&(V+=.05)}if(V>0&&(J(R=>Math.max(0,R-V)),te.current+=V,te.current>=1)){let R=Math.floor(te.current);te.current-=R,oe(B=>B-R)}if(c(R=>R.filter(B=>Math.sqrt((B.x-tt.x)**2+(B.y-tt.y)**2)<20?(B.type==="apple"?n(j=>({...j,hp:Math.min(j.maxHp,j.hp+1)})):B.type==="coolant"?n(j=>({...j,cpuHeat:Math.max(0,j.cpuHeat-60)})):B.type==="powerup-rapid"?n(j=>({...j,powerUp:"rapid",powerUpTimer:480})):B.type==="powerup-triple"?n(j=>({...j,powerUp:"triple",powerUpTimer:480})):B.type==="powerup-giant"&&n(j=>({...j,powerUp:"giant",powerUpTimer:360})),!1):!0)),P.current-=ee,P.current<=0){let R={1:3500,2:2800,3:2200},B=Math.min((90-yi)*15,800);P.current=Math.max(1200,(R[Yt]||3e3)-B);let $=Math.floor(Math.random()*3),j,he,fe=64;$===0?(j=-fe/2,he=20+fe/2+Math.random()*(460-fe)):$===1?(j=640+fe/2,he=20+fe/2+Math.random()*(460-fe)):(j=fe/2+Math.random()*(640-fe),he=480+fe/2);let ve=.5+Yt*.15+Math.random()*.2;if(r(we=>[...we,{id:Math.random(),type:"regi-mite",x:j,y:he,hp:3,maxHp:3,size:64,flipX:$===0,speed:ve,frame:0,stunned:0}]),Yt>=2&&Math.random()<.25){let we=Math.floor(Math.random()*3),be,Ze;we===0?(be=-15,Ze=100+Math.random()*200):we===1?(be=655,Ze=100+Math.random()*200):(be=80+Math.random()*480,Ze=495),r(Qe=>[...Qe,{id:Math.random(),type:"popup-gremlin",x:be,y:Ze,hp:2,maxHp:2,size:36,speed:2+Math.random()*.9,frame:Math.random()*16,stunned:0,bounceAngle:Math.random()*Math.PI*2,bounceTimer:0}])}if(Yt>=2&&Math.random()<.15){let be=Math.floor(Math.random()*3),Ze,Qe;be===0?(Ze=-40/2,Qe=20+40/2+Math.random()*420):be===1?(Ze=640+40/2,Qe=20+40/2+Math.random()*420):(Ze=40/2+Math.random()*600,Qe=480+40/2),r(et=>[...et,{id:Math.random(),type:"spy-dot",x:Ze,y:Qe,hp:5,maxHp:5,size:40,speed:.42,frame:0,stunned:0}])}if(Yt===3&&Math.random()<.3){let we=Math.floor(Math.random()*3),be,Ze;we===0?(be=-15,Ze=120+Math.random()*200):we===1?(be=655,Ze=120+Math.random()*200):(be=100+Math.random()*440,Ze=495);let Qe=Math.random()<.5?"regi-mite":"popup-gremlin";r(et=>[...et,{id:Math.random(),type:Qe,x:be,y:Ze,hp:Qe==="regi-mite"?3:2,maxHp:Qe==="regi-mite"?3:2,size:Qe==="regi-mite"?64:36,flipX:we===0,speed:Qe==="popup-gremlin"?2.2+Math.random()*.9:.8+Math.random()*.4,frame:0,stunned:0,bounceAngle:Math.random()*Math.PI*2,bounceTimer:0}])}}if(le.current-=ee,le.current<=0&&Xt.length===0&&Yt>=1){let R={1:18e3,2:14e3,3:1e4}[Yt]||15e3,B=(90-yi)/90;le.current=R*(1-B*.3);let $={1:.4,2:.55,3:.7}[Yt]||.5;if(Math.random()<$){let j=Math.random(),he=j<.4?"firewall":j<.7?"fake-update":"security-update",fe={1:.15,2:.4,3:.65}[Yt]||.3;u([{id:Math.random(),type:he,x:80+Math.random()*360,y:50+Math.random()*250,swapped:Math.random()<fe,isLegit:he==="security-update",countdown:100}])}}b(R=>{let B=R-ee/1e3;if(B<=0){let $=jt.length+qt.length,j=Math.max(0,(11-$)*10);if(j>0&&oe(he=>he+j),Yt===1)return L(2),90;if(Yt===2)return e(ut.INTERMISSION),90;if(Yt===3)return e(ut.WIN),0}return Math.max(0,B)}),D(R=>R+ee/1e3),ae(R=>!R||!Number.isFinite(R.t0)?R:ne.totalTime+ee/1e3-R.t0>.6?null:R),(tt.hp<=0||ai<=0)&&e(ut.GAMEOVER)},[]);jn(()=>{if(Se)return;if(i!==ut.PLAYING&&i!==ut.SETUP){Ne.current&&cancelAnimationFrame(Ne.current),Ne.current=null;return}let I=!1,ne=ee=>{if(I)return;let He=Math.min(ee-pt.current,50);pt.current=ee,ze(He),Ne.current=requestAnimationFrame(ne)};return pt.current=performance.now(),Ne.current=requestAnimationFrame(ne),()=>{I=!0,Ne.current&&cancelAnimationFrame(Ne.current),Ne.current=null}},[i,Se,ze]),jn(()=>(window.render_game_to_text=()=>{let I=z.current;if(!I)return null;let ne={mode:I.gameState,coords:{origin:"top-left",x:"right",y:"down",units:"px"},wave:I.wave,wave_timer_s:Number.isFinite(I.waveTimer)?I.waveTimer:0,score:I.score,system_folder_hp:I.systemFolderHP,player:{x:I.player.x,y:I.player.y,hp:I.player.hp,cpu_heat:I.player.cpuHeat,ram_pressure:I.player.ramPressure,emp:I.player.empCharge,power_up:I.player.powerUp},enemies:I.enemies.map(ee=>({id:ee.id,type:ee.type,x:ee.x,y:ee.y,hp:ee.hp,max_hp:ee.maxHp,stunned:ee.stunned,size:ee.size})),pickups:I.pickups.map(ee=>({id:ee.id,type:ee.type,x:ee.x,y:ee.y})),projectiles:I.projectiles.map(ee=>({id:ee.id,x:ee.x,y:ee.y,from_watchdog:!!ee.fromWatchdog})),folder_walls:I.folderWalls.map(ee=>({id:ee.id,x:ee.x,y:ee.y,hp:ee.hp})),deployables:I.deployables.map(ee=>({id:ee.id,type:ee.type,x:ee.x,y:ee.y,aim_dir:ee.aimDir})),popups:I.popups.map(ee=>({id:ee.id,type:ee.type,swapped:ee.swapped,countdown:ee.countdown})),clutter_count:I.clutter.length};return JSON.stringify(ne)},window.advanceTime=async I=>{let ne=16.666666666666668,ee=Math.max(1,Math.round(I/ne));for(let He=0;He<ee;He+=1)vr.flushSync(()=>ze(ne))},()=>{delete window.render_game_to_text,delete window.advanceTime}),[ze]);let me=Se?1:1.15,De=Math.min(T.w*.96/bi.width,T.h*.96/bi.height),Ye=rt?Math.max(1,Math.min(2.25,De)):me,We=28,Te=bi.width*Ye,lt=bi.height*Ye,N=bi.screen.x*Ye,ge=bi.screen.y*Ye,ye=640*Ye,ke=480*Ye,pe=We*Ye;return m.createElement("div",{style:{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",background:"#1a1a2e",fontFamily:'"Press Start 2P", monospace',gap:16,padding:16,boxSizing:"border-box"}},m.createElement("div",{style:{textAlign:"center",marginTop:8,marginBottom:10}},m.createElement("div",{style:{fontSize:22,letterSpacing:2,color:"#fff"}},"DESKTOP WARS"),m.createElement("div",{style:{fontSize:9,marginTop:6,color:"#8af",opacity:.95}},"SYSTEM INTEGRITY")),m.createElement("div",{style:{display:"flex",alignItems:"flex-start",gap:20,flexWrap:"wrap",justifyContent:"center"}},m.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10}},m.createElement("div",{ref:Xe,style:rt?{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"radial-gradient(1000px 700px at 50% 30%, rgba(120,150,255,0.18), rgba(0,0,0,0))",padding:18,boxSizing:"border-box"}:void 0},m.createElement("div",{style:{width:Te,height:lt,position:"relative",filter:"drop-shadow(0 25px 80px rgba(0,0,0,0.6))"}},m.createElement("div",{style:{position:"absolute",left:N,top:ge,width:ye,height:ke,overflow:"hidden",borderRadius:pe,background:"#000",zIndex:5}},m.createElement("div",{ref:Fe,onMouseMove:_e,onMouseDown:I=>{I.preventDefault(),I.button===0&&dt(!0),I.button===2&&t.empCharge>=100&&Ve()},onMouseUp:I=>{I.button===0&&dt(!1)},onMouseLeave:()=>dt(!1),onContextMenu:I=>I.preventDefault(),style:{width:640,height:480,position:"relative",transform:`scale(${Ye})`,transformOrigin:"top left",cursor:i===ut.PLAYING?"none":"default"}},de?m.createElement(fh,{state:{mode:i,totalTime:M,player:t,enemies:s,pickups:l,folderWalls:h,deployables:f,clutter:x,projectiles:o,systemFolderHP:W,empExplosion:K,mousePos:E,trash:{x:580,y:420}},onInitFailed:()=>Ee(!1)}):m.createElement(Ht,{src:Dt.wallpaper,width:640,height:480,pixelated:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%"},fallback:m.createElement("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, #233257 0%, #121826 55%, #0b1020 100%)"}})}),!de&&(i===ut.SETUP||i===ut.PLAYING||i===ut.PAUSED)&&m.createElement(m.Fragment,null,m.createElement(Ro,{x:320,y:280,hp:W}),h.map(I=>m.createElement(Bl,{key:I.id,...I})),f.map(I=>m.createElement(Fl,{key:I.id,...I})),(i===ut.PLAYING||i===ut.PAUSED)&&m.createElement(m.Fragment,null,x.map(I=>m.createElement(Nl,{key:I.id,...I})),l.map(I=>m.createElement(kl,{key:I.id,...I})),s.map(I=>m.createElement(Ol,{key:I.id,...I})),o.map(I=>m.createElement("div",{key:I.id,style:{position:"absolute",left:I.x-4,top:I.y-4,width:8,height:8,background:I.fromWatchdog?"#bff":"#fff2a8",borderRadius:"50%",boxShadow:I.fromWatchdog?"0 0 8px rgba(120,220,255,0.8)":"0 0 6px rgba(255,210,90,0.7)",pointerEvents:"none",zIndex:35}})),m.createElement(Io,{x:580,y:420,clutter:x}),m.createElement(zl,{...t,mousePos:E}))),m.createElement("div",{style:{position:"absolute",top:0,left:0,right:0,height:20,background:"linear-gradient(180deg, #f0f0f0 0%, #d8d8d8 100%)",borderBottom:"1px solid #999",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",fontSize:8,zIndex:100,color:"#111"}},m.createElement("div",{style:{display:"flex",gap:12,alignItems:"center"}},m.createElement("span",{onMouseDown:I=>{I.preventDefault(),I.stopPropagation()},onClick:I=>{I.preventDefault(),I.stopPropagation(),e(ne=>ne===ut.PLAYING?ut.PAUSED:ne===ut.PAUSED?ut.PLAYING:ne)},style:{fontWeight:"bold",cursor:i===ut.PLAYING||i===ut.PAUSED?"pointer":"default",opacity:i===ut.PLAYING||i===ut.PAUSED?1:.55,padding:"2px 4px",borderRadius:3,userSelect:"none"}},"Pause"),m.createElement("span",{onMouseDown:I=>{I.preventDefault(),I.stopPropagation()},onClick:I=>{I.preventDefault(),I.stopPropagation(),nt(!0)},style:{cursor:"pointer",opacity:.95,padding:"2px 4px",borderRadius:3,userSelect:"none"}},"Help"),m.createElement("span",{onMouseDown:I=>{I.preventDefault(),I.stopPropagation()},onClick:I=>{I.preventDefault(),I.stopPropagation(),Y()},style:{cursor:"pointer",opacity:.95,padding:"2px 4px",borderRadius:3,userSelect:"none"}},"Reset")),m.createElement("div",{style:{display:"flex",gap:10,alignItems:"center"}},m.createElement("div",{style:{display:"flex",gap:1,alignItems:"flex-end"}},[1,2,3,4,5].map(I=>m.createElement("div",{key:I,style:{width:3,height:2+I*2,background:t.hp>=I?"#222":"#bbb",borderRadius:1}}))),m.createElement("div",{style:{width:12,height:12,borderRadius:"50%",background:t.empCharge>=100?"#4a90d9":"#999",boxShadow:t.empCharge>=100?"0 0 6px #4af":"none"}}),m.createElement("div",{title:`CPU Heat: ${Math.floor(t.cpuHeat)}%`,style:{display:"flex",alignItems:"center",gap:4}},m.createElement(yh,{size:14,hot:t.cpuHeat>=90}),m.createElement("div",{style:{width:42,height:10,background:"linear-gradient(180deg, #f4f4f4 0%, #d7d7d7 100%)",position:"relative",borderRadius:3,border:"1px solid #666",overflow:"hidden",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.25)"}},m.createElement("div",{style:{width:`${t.cpuHeat}%`,height:"100%",background:t.cpuHeat>=90?"linear-gradient(90deg, #ff9a3c 0%, #ff4d4d 60%, #ff4d4d 100%)":t.cpuHeat>60?"linear-gradient(90deg, #ffd35a 0%, #ff9a3c 90%)":"linear-gradient(90deg, #ffd35a 0%, #f2c94c 100%)",boxShadow:t.cpuHeat>=90?"0 0 8px rgba(255,77,77,0.55)":"none",animation:t.cpuHeat>=90?"blink 0.2s infinite":"none"}}),m.createElement("div",{style:{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 7px)",opacity:.35,pointerEvents:"none"}}))),m.createElement("div",{title:`RAM Pressure: ${Math.floor(t.ramPressure)}%`,style:{display:"flex",alignItems:"center",gap:4}},m.createElement(_h,{size:14,high:t.ramPressure>=80}),m.createElement("div",{style:{width:42,height:10,background:"linear-gradient(180deg, #f4f4f4 0%, #d7d7d7 100%)",position:"relative",borderRadius:3,border:"1px solid #666",overflow:"hidden",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.25)"}},m.createElement("div",{style:{width:`${t.ramPressure}%`,height:"100%",background:t.ramPressure>70?"linear-gradient(90deg, #ffd35a 0%, #ff4d4d 80%, #ff4d4d 100%)":t.ramPressure>40?"linear-gradient(90deg, #67d6ff 0%, #ffd35a 90%)":"linear-gradient(90deg, #67d6ff 0%, #4bbf5a 100%)",boxShadow:t.ramPressure>=80?"0 0 8px rgba(255,77,77,0.45)":"none"}}),m.createElement("div",{style:{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 7px)",opacity:.35,pointerEvents:"none"}}))),t.powerUp&&m.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:t.powerUp==="rapid"?"#f80":t.powerUp==="triple"?"#08f":"#fa0",color:"#fff",fontSize:5}},t.powerUp.toUpperCase()),t.upgrades.length>0&&m.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:t.upgrades.includes("ram")?"#0a0":"#08f",color:"#fff",fontSize:5,border:"1px solid #fff"}},t.upgrades.includes("ram")?"RAM":"FAN"),t.cpuHeat>=90&&m.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:"#f00",color:"#fff",fontSize:5,animation:"blink 0.3s infinite"}},"OVERHEAT"),t.ramPressure>=60&&m.createElement("span",{style:{padding:"1px 4px",borderRadius:2,background:t.ramPressure>=80?"#a00":"#a50",color:"#fff",fontSize:5,animation:t.ramPressure>=80?"blink 0.5s infinite":"none"}},t.ramPressure>=80?"SLOW":"RAM"),m.createElement("div",{style:{fontFamily:"monospace",fontSize:8,background:"#222",color:"#0f0",padding:"1px 6px",borderRadius:3,border:"1px solid #444"}},C>0?m.createElement(m.Fragment,null,m.createElement("span",{style:{color:"#888"}},"W",C)," ",m.createElement("span",{style:{color:U<=10?"#f55":"#0f0"}},String(Math.floor(U/60)).padStart(2,"0"),":",String(Math.floor(U%60)).padStart(2,"0"))):m.createElement("span",{style:{color:"#888"}},"--:--")))),i===ut.MENU&&m.createElement("div",{style:{position:"absolute",inset:0,top:20,display:"flex",alignItems:"center",justifyContent:"center"}},m.createElement(kn,{title:"Desktop Wars",width:380},m.createElement("div",{style:{textAlign:"center"}},m.createElement("div",{style:{marginBottom:8,display:"flex",justifyContent:"center",animation:"idleBob 2.8s ease-in-out infinite"}},m.createElement("svg",{width:"48",height:"48",viewBox:"0 0 28 28","aria-label":"Cursor"},m.createElement("polygon",{points:"14,3 4,20 14,15 24,20",fill:"#fff",stroke:"#111",strokeWidth:"1.5",strokeLinejoin:"round"}))),m.createElement("h1",{style:{fontSize:14,marginBottom:6}},"SYSTEM INTEGRITY"),m.createElement("p",{style:{fontSize:6,color:"#666",marginBottom:20}},"Defend your desktop against malware!"),m.createElement("div",{style:{marginBottom:20}},m.createElement(Bn,{variant:"primary",onClick:Y},"START GAME")),m.createElement("div",{style:{fontSize:6,color:"#888",lineHeight:1.8}},m.createElement("p",null,m.createElement("b",null,"WASD")," - Move | ",m.createElement("b",null,"Mouse")," - Aim | ",m.createElement("b",null,"Click")," - Shoot"),m.createElement("p",null,m.createElement("b",null,"Right Click")," - EMP | ",m.createElement("b",null,"Shift")," - Dash"),m.createElement("p",null,m.createElement("b",null,"Q/E")," - Popup buttons ",m.createElement("span",{style:{color:"#fa0"}},"(watch for swaps!)")))))),i===ut.SETUP&&m.createElement(Gl,{setupTimer:k,folderWalls:h,setFolderWalls:d,deployables:f,setDeployables:p,onStart:()=>{e(ut.PLAYING),L(1)},mousePos:E}),(i===ut.PLAYING||i===ut.PAUSED)&&m.createElement(m.Fragment,null,de&&m.createElement(m.Fragment,null,m.createElement(Ro,{x:320,y:280,hp:W,showIcon:!1}),m.createElement(Io,{x:580,y:420,clutter:x,showIcon:!1}),m.createElement(Ul,{...t,mousePos:E})),g.map(I=>m.createElement(Hl,{key:I.id,popup:I,onChoice:q})),i===ut.PAUSED&&m.createElement("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:500}},m.createElement(kn,{title:"PAUSED",width:220},m.createElement("div",{style:{textAlign:"center",padding:12}},m.createElement("p",{style:{fontSize:7,marginBottom:16}},"Press SPACE to continue"),m.createElement(Bn,{onClick:()=>e(ut.MENU)},"Quit to Menu"))))),i===ut.INTERMISSION&&m.createElement("div",{style:{position:"absolute",inset:0,top:20,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200}},m.createElement(kn,{title:"Wave 2 Complete!",width:340},m.createElement("div",{style:{textAlign:"center",marginBottom:16}},m.createElement("p",{style:{fontSize:8,color:"#666"}},"Choose a hardware upgrade for Wave 3:")),m.createElement("div",{style:{display:"flex",gap:16,justifyContent:"center"}},m.createElement("div",{onClick:()=>Ge("ram"),style:{width:120,padding:14,background:"#fff",border:"3px solid #0a0",borderRadius:8,cursor:"pointer",textAlign:"center",transition:"transform 0.1s"},onMouseOver:I=>I.currentTarget.style.transform="scale(1.05)",onMouseOut:I=>I.currentTarget.style.transform="scale(1)"},m.createElement("div",{style:{marginBottom:8,display:"flex",justifyContent:"center"}},m.createElement("svg",{width:"40",height:"40",viewBox:"0 0 64 64","aria-label":"RAM Upgrade"},m.createElement("rect",{x:"14",y:"18",width:"36",height:"28",rx:"6",fill:"#2a2f3c",stroke:"#0a0",strokeWidth:"4"}),m.createElement("rect",{x:"20",y:"24",width:"24",height:"6",rx:"3",fill:"#0a0",opacity:"0.7"}),m.createElement("rect",{x:"20",y:"34",width:"18",height:"6",rx:"3",fill:"#0a0",opacity:"0.55"}),m.createElement("g",{fill:"#0a0",opacity:"0.9"},m.createElement("rect",{x:"10",y:"22",width:"4",height:"6",rx:"2"}),m.createElement("rect",{x:"10",y:"32",width:"4",height:"6",rx:"2"}),m.createElement("rect",{x:"50",y:"22",width:"4",height:"6",rx:"2"}),m.createElement("rect",{x:"50",y:"32",width:"4",height:"6",rx:"2"})))),m.createElement("div",{style:{fontSize:8,fontWeight:"bold",color:"#080"}},"RAM Upgrade"),m.createElement("div",{style:{fontSize:6,color:"#888",marginTop:4}},"50% less slowdown from clutter")),m.createElement("div",{onClick:()=>Ge("fan"),style:{width:120,padding:14,background:"#fff",border:"3px solid #08f",borderRadius:8,cursor:"pointer",textAlign:"center",transition:"transform 0.1s"},onMouseOver:I=>I.currentTarget.style.transform="scale(1.05)",onMouseOut:I=>I.currentTarget.style.transform="scale(1)"},m.createElement("div",{style:{marginBottom:8,display:"flex",justifyContent:"center"}},m.createElement("svg",{width:"40",height:"40",viewBox:"0 0 64 64","aria-label":"Cooling Fan"},m.createElement("circle",{cx:"32",cy:"32",r:"22",fill:"#2a2f3c",stroke:"#08f",strokeWidth:"4"}),m.createElement("circle",{cx:"32",cy:"32",r:"5",fill:"#08f"}),m.createElement("path",{d:"M32 10 C38 12, 42 18, 40 24 C38 29, 34 28, 32 26 Z",fill:"#08f",opacity:"0.75"}),m.createElement("path",{d:"M54 32 C52 38, 46 42, 40 40 C35 38, 36 34, 38 32 Z",fill:"#08f",opacity:"0.75"}),m.createElement("path",{d:"M32 54 C26 52, 22 46, 24 40 C26 35, 30 36, 32 38 Z",fill:"#08f",opacity:"0.75"}),m.createElement("path",{d:"M10 32 C12 26, 18 22, 24 24 C29 26, 28 30, 26 32 Z",fill:"#08f",opacity:"0.75"}))),m.createElement("div",{style:{fontSize:8,fontWeight:"bold",color:"#06c"}},"Cooling Fan"),m.createElement("div",{style:{fontSize:6,color:"#888",marginTop:4}},"50% less CPU heat buildup"))))),i===ut.GAMEOVER&&m.createElement("div",{style:{position:"absolute",inset:0,top:20,background:"rgba(80,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:300}},m.createElement(kn,{title:"GAME OVER",width:300},m.createElement("div",{style:{textAlign:"center"}},m.createElement("div",{style:{marginBottom:10,display:"flex",justifyContent:"center"}},m.createElement("svg",{width:"42",height:"42",viewBox:"0 0 64 64","aria-label":"Game Over"},m.createElement("path",{d:"M32 6 L60 56 H4 Z",fill:"#d44",stroke:"#2a2a2a",strokeWidth:"4"}),m.createElement("rect",{x:"29",y:"22",width:"6",height:"18",rx:"3",fill:"#1a1a1a"}),m.createElement("rect",{x:"29",y:"44",width:"6",height:"6",rx:"3",fill:"#1a1a1a"}))),m.createElement("h2",{style:{fontSize:12,color:"#d44",marginBottom:10}},"SYSTEM FAILURE"),m.createElement("div",{style:{background:"#222",color:"#0f0",padding:12,borderRadius:4,marginBottom:20}},m.createElement("div",null,"SCORE: ",X)),m.createElement(Bn,{variant:"primary",onClick:Y},"RESTART")))),i===ut.WIN&&m.createElement("div",{style:{position:"absolute",inset:0,top:20,background:"rgba(0,80,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:300}},m.createElement(kn,{title:"YOU WIN!",width:300},m.createElement("div",{style:{textAlign:"center"}},m.createElement("div",{style:{marginBottom:10,display:"flex",justifyContent:"center"}},m.createElement("svg",{width:"42",height:"42",viewBox:"0 0 64 64","aria-label":"Victory"},m.createElement("path",{d:"M32 6 L39 22 L56 24 L43 36 L47 54 L32 44 L17 54 L21 36 L8 24 L25 22 Z",fill:"#f2c94c",stroke:"#2a2a2a",strokeWidth:"4",strokeLinejoin:"round"}))),m.createElement("div",{style:{background:"#f8f8f8",padding:14,borderRadius:6,marginBottom:16}},m.createElement("div",{style:{fontSize:9}},"Score: ",m.createElement("span",{style:{color:"#4a4",fontWeight:"bold"}},X))),m.createElement(Bn,{variant:"primary",onClick:Y},"Play Again")))),ht&&m.createElement("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:500}},m.createElement(kn,{title:"Help",width:350},m.createElement("div",{style:{fontSize:7,lineHeight:1.8}},m.createElement("p",null,m.createElement("b",null,"WASD")," - Move cursor"),m.createElement("p",null,m.createElement("b",null,"Mouse")," - Aim crosshair"),m.createElement("p",null,m.createElement("b",null,"Left Click")," - Shoot"),m.createElement("p",null,m.createElement("b",null,"Right Click")," - EMP (stuns all)"),m.createElement("p",null,m.createElement("b",null,"Shift")," - Dash"),m.createElement("p",{style:{color:"#4a4"}},m.createElement("b",null,"Q")," - Safe popup choice"),m.createElement("p",{style:{color:"#a44"}},m.createElement("b",null,"E")," - Risky popup choice"),m.createElement("div",{style:{marginTop:10,borderTop:"1px solid #ccc",paddingTop:10}},m.createElement("p",null,m.createElement("b",null,"Power-ups:")),m.createElement("p",null,"Rapid Fire | Triple Shot | Giant Mode"))),m.createElement("div",{style:{marginTop:14,textAlign:"center"}},m.createElement(Bn,{onClick:()=>nt(!1)},"Close (F1)")))),m.createElement("div",{style:{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",pointerEvents:"none",zIndex:80}}))),m.createElement("div",{style:{position:"absolute",left:N+ye+52,top:ge+10,width:Math.max(0,Te-(N+ye)-68),height:ke-20,padding:12,boxSizing:"border-box",color:"#fff",fontSize:7,lineHeight:1.8,background:"transparent",border:"none",zIndex:30,overflow:"hidden",pointerEvents:"none",textShadow:"0 2px 10px rgba(0,0,0,0.9)"}},m.createElement("div",{style:{fontSize:9,marginBottom:10,color:"#8af"}},"CONTROLS"),m.createElement("div",{style:{marginBottom:12}},m.createElement("div",null,"WASD / Arrows - Move"),m.createElement("div",null,"Mouse - Aim"),m.createElement("div",null,"Click - Shoot"),m.createElement("div",null,"Right Click - EMP"),m.createElement("div",null,"Shift - Dash"),m.createElement("div",null,"Q/E - Popups"),m.createElement("div",null,"Space - Pause"),m.createElement("div",null,"F - Fullscreen")),m.createElement("div",{style:{fontSize:9,marginBottom:8,color:"#fa0"}},"ENEMIES"),m.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12,lineHeight:1.9}},m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(vh,{size:16})),m.createElement("span",null,"Regi-Mite")),m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(Mh,{size:16})),m.createElement("span",null,"Gremlin")),m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(Sh,{size:16})),m.createElement("span",null,"Spy-Dot"))),m.createElement("div",{style:{fontSize:9,marginBottom:8,color:"#5f5"}},"POWER-UPS"),m.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12,lineHeight:1.9}},m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(Mr,{size:16})),m.createElement("span",null,"Heal")),m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(bo,{size:16})),m.createElement("span",null,"Coolant")),m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(wo,{size:16})),m.createElement("span",null,"Rapid")),m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(Eo,{size:16})),m.createElement("span",null,"Triple")),m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(To,{size:16})),m.createElement("span",null,"Giant"))),m.createElement("div",{style:{fontSize:9,marginBottom:8,color:"#8af"}},"DEPLOYABLES"),m.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6,lineHeight:1.9}},m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(Ao,{size:16})),m.createElement("span",null,"Wall")),m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(Ls,{size:16})),m.createElement("span",null,"Watchdog")),m.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},m.createElement("span",{style:{width:16,height:16,display:"inline-flex",alignItems:"center",justifyContent:"center",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.45))"}},m.createElement(Us,{size:16})),m.createElement("span",null,"Floppy Disk")))),m.createElement(Ht,{src:Dt.crtMonitor,alt:"CRT Monitor",width:bi.width,height:bi.height,pixelated:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:20}}))))),m.createElement("div",{style:{display:"flex",gap:30,background:"linear-gradient(180deg, #2a2a3c 0%, #1a1a2a 100%)",borderRadius:12,padding:"12px 24px",color:"#ccc",fontSize:8,boxShadow:"0 10px 40px rgba(0,0,0,0.4)"}},m.createElement("div",{style:{flex:1}},m.createElement("div",{style:{fontSize:9,color:"#8af",marginBottom:8}},"MISSION"),m.createElement("div",{style:{fontSize:7,lineHeight:1.8}},"Defend your desktop! Protect the ",m.createElement("span",{style:{color:"#fa0"}},"System Folder")," in the center from malware.")),m.createElement("div",{style:{flex:1}},m.createElement("div",{style:{fontSize:9,color:"#f55",marginBottom:8}},"RESOURCES"),m.createElement("div",{style:{fontSize:7,lineHeight:2}},m.createElement("div",null,m.createElement("span",{style:{color:"#faa"}},"CPU")," - Overheats when shooting; Coolant helps"),m.createElement("div",null,m.createElement("span",{style:{color:"#ffa"}},"RAM")," - Clutter slows you down; shoot Trash to clear"))),m.createElement("div",{style:{flex:1}},m.createElement("div",{style:{fontSize:9,color:"#f8f",marginBottom:8}},"DARK PATTERNS"),m.createElement("div",{style:{fontSize:7,lineHeight:2}},m.createElement("div",null,"Firewall - ",m.createElement("span",{style:{color:"#5f5"}},"Deny")," is correct"),m.createElement("div",null,"Fake Update - ",m.createElement("span",{style:{color:"#5f5"}},"Later")," is correct"),m.createElement("div",null,"Security Patch - ",m.createElement("span",{style:{color:"#5f5"}},"Install")," is correct"),m.createElement("div",{style:{color:"#fa0",marginTop:4}},"Warning: Q/E buttons can swap.")))),m.createElement("style",null,`
	        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
	        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
	        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
	        @keyframes wobble { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
	        @keyframes idleBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
	      `))}var Sd=document.getElementById("root");if(!Sd)throw new Error("Missing #root element");vr.createRoot(Sd).render(m.createElement(mh,null));})();
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
