import * as THREE from 'three';

function clamp01(v) {
  if (!Number.isFinite(v)) return 0;
  return Math.max(0, Math.min(1, v));
}

function makeBackgroundTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;

  const g = ctx.createLinearGradient(0, 0, 0, c.height);
  g.addColorStop(0, '#2b3f6f');
  g.addColorStop(0.55, '#17244a');
  g.addColorStop(1, '#0d1326');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, c.width, c.height);

  // Subtle grid to make the desktop feel less flat (kept very low contrast).
  ctx.save();
  ctx.globalAlpha = 0.09;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  const step = 16;
  for (let y = 0; y <= c.height; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(c.width, y + 0.5);
    ctx.stroke();
  }
  for (let x = 0; x <= c.width; x += step) {
    ctx.beginPath();
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, c.height);
    ctx.stroke();
  }
  ctx.restore();

  // Soft vignette and center glow.
  const vg = ctx.createRadialGradient(c.width * 0.55, c.height * 0.45, c.width * 0.08, c.width * 0.55, c.height * 0.45, c.width * 0.85);
  vg.addColorStop(0, 'rgba(255, 255, 255, 0.06)');
  vg.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, c.width, c.height);

  // Subtle noise so the desktop doesn't look like a flat gradient.
  const img = ctx.getImageData(0, 0, c.width, c.height);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 18;
    d[i + 0] = Math.max(0, Math.min(255, d[i + 0] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);

  const t = new THREE.CanvasTexture(c);
  if ('colorSpace' in t) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  t.repeat.set(1, 1);
  t.anisotropy = 4;
  return t;
}

function makeRadialAlphaTexture(size = 128) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  if (!ctx) return null;

  const r0 = size * 0.08;
  const r1 = size * 0.5;
  const g = ctx.createRadialGradient(size / 2, size / 2, r0, size / 2, size / 2, r1);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  t.anisotropy = 1;
  return t;
}

function makeTrailAlphaTexture(w = 64, h = 8) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  if (!ctx) return null;

  const g = ctx.createLinearGradient(0, 0, w, 0);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(0.15, 'rgba(255,255,255,0.9)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  // Slight falloff towards the edges (vertical).
  ctx.globalCompositeOperation = 'destination-in';
  const v = ctx.createLinearGradient(0, 0, 0, h);
  v.addColorStop(0, 'rgba(255,255,255,0)');
  v.addColorStop(0.5, 'rgba(255,255,255,1)');
  v.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = v;
  ctx.fillRect(0, 0, w, h);

  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  t.anisotropy = 1;
  return t;
}

function makeRoundedRectShape(w, h, r) {
  const hw = w / 2;
  const hh = h / 2;
  const rr = Math.max(0, Math.min(Math.min(hw, hh), r));
  const x0 = -hw;
  const y0 = -hh;
  const x1 = hw;
  const y1 = hh;

  const s = new THREE.Shape();
  s.moveTo(x0 + rr, y0);
  s.lineTo(x1 - rr, y0);
  s.quadraticCurveTo(x1, y0, x1, y0 + rr);
  s.lineTo(x1, y1 - rr);
  s.quadraticCurveTo(x1, y1, x1 - rr, y1);
  s.lineTo(x0 + rr, y1);
  s.quadraticCurveTo(x0, y1, x0, y1 - rr);
  s.lineTo(x0, y0 + rr);
  s.quadraticCurveTo(x0, y0, x0 + rr, y0);
  return s;
}

function makeRoundedExtrudeGeometry(w, h, depth, radius) {
  const shape = makeRoundedRectShape(w, h, radius);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: Math.min(2, radius * 0.45),
    bevelThickness: Math.min(2, radius * 0.45),
  });
  // Center thickness around z=0 for simpler positioning.
  geo.translate(0, 0, -depth / 2);
  return geo;
}

function safeDispose(obj) {
  if (!obj) return;
  try {
    obj.geometry?.dispose?.();
  } catch {}
  try {
    if (Array.isArray(obj.material)) {
      for (const m of obj.material) m?.dispose?.();
    } else {
      obj.material?.dispose?.();
    }
  } catch {}
}

function removeAndDisposeMaterials(scene, obj, sharedMaterials) {
  if (!obj) return;
  scene.remove(obj);
  obj.traverse?.((child) => {
    if (!child.isMesh) return;
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    for (const m of mats) {
      if (!m || sharedMaterials.has(m)) continue;
      m.dispose?.();
    }
  });
}

function pickColorHex(hex) {
  return new THREE.Color(hex);
}

export function createDesktop3DRenderer({ canvas, width, height, preserveDrawingBuffer = false }) {
  const automationMode = !!preserveDrawingBuffer;
  // Playwright runs Chromium with SwiftShader. WebGL2 + MSAA has shown quadrant readback artifacts
  // in this environment. Prefer disabling MSAA for automation runs.
  let preferredContext = null;
  if (automationMode) {
    try {
      preferredContext =
        canvas.getContext('webgl2', { alpha: false, antialias: false, preserveDrawingBuffer: true }) ||
        null;
    } catch {
      preferredContext = null;
    }
  }

  const renderer = new THREE.WebGLRenderer({
    canvas,
    context: preferredContext || undefined,
    antialias: !automationMode,
    alpha: false,
    preserveDrawingBuffer: !!preserveDrawingBuffer,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(width, height, false);
  // SwiftShader/headless can be picky with shadow passes; keep them off for automation.
  renderer.shadowMap.enabled = !automationMode;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  if ('outputColorSpace' in renderer) {
    // Keep screenshots readable in SwiftShader/webdriver runs; sRGB output is the most predictable.
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  }
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = automationMode ? 1.75 : 1.65;

  const scene = new THREE.Scene();

  // y-down pixel space: (0,0) is top-left, x goes right, y goes down.
  // Keep the camera at the origin in x/y so the 0..width/0..height frustum maps 1:1 to pixels.
  const camera = new THREE.OrthographicCamera(0, width, 0, height, 0.1, 2000);
  camera.position.set(0, 0, 1000);
  camera.lookAt(0, 0, 0);

  const ambient = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambient);

  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(width * 0.15, height * 0.1, 520);
  key.castShadow = !automationMode;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.bias = -0.0002;
  key.shadow.normalBias = 0.002;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 1400;
  key.shadow.camera.left = -width / 2;
  key.shadow.camera.right = width / 2;
  key.shadow.camera.top = height / 2;
  key.shadow.camera.bottom = -height / 2;
  const keyTarget = new THREE.Object3D();
  keyTarget.position.set(width / 2, height / 2, 0);
  scene.add(keyTarget);
  key.target = keyTarget;
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x7ac7ff, 0.75);
  rim.position.set(width * 0.92, height * 0.9, 480);
  rim.castShadow = false;
  scene.add(rim);

  const fill = new THREE.HemisphereLight(0x8ad2ff, 0x0b1020, 0.5);
  // Our 2D world uses y-down; flip the hemisphere direction so "sky" comes from screen-up.
  fill.position.set(0, -1, 0);
  scene.add(fill);

  // Keep automation rendering as simple as possible for SwiftShader reliability.
  const bgTex = automationMode ? null : makeBackgroundTexture();
  const glowAlphaTex = makeRadialAlphaTexture(128);
  const trailAlphaTex = makeTrailAlphaTexture(64, 8);
  const floorGeo = new THREE.PlaneGeometry(width, height);

  // Background plane (unlit) + shadow plane on top for crisp, readable silhouettes.
  const bgMat = new THREE.MeshBasicMaterial({
    map: bgTex || null,
    color: bgTex ? 0xffffff : 0x121a33,
    side: THREE.DoubleSide,
  });
  const bgPlane = new THREE.Mesh(floorGeo, bgMat);
  bgPlane.position.set(width / 2, height / 2, -20);
  scene.add(bgPlane);

  const shadowMat = new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.22 });
  shadowMat.side = THREE.DoubleSide;
  const floor = new THREE.Mesh(floorGeo, shadowMat);
  floor.position.set(width / 2, height / 2, -10);
  floor.receiveShadow = !automationMode;
  scene.add(floor);

  // Shared geometries.
  const cursorGeo = (() => {
    const s = new THREE.Shape();
    s.moveTo(0, -11);
    s.lineTo(-10, 6);
    s.lineTo(0, 1);
    s.lineTo(10, 6);
    s.closePath();
    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 6,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 1,
      bevelThickness: 1,
    });
    geo.translate(0, 0, -3);
    return geo;
  })();

  const wallGeo = makeRoundedExtrudeGeometry(24, 24, 10, 4);
  const folderBodyGeo = makeRoundedExtrudeGeometry(48, 32, 12, 6);
  const folderTabGeo = makeRoundedExtrudeGeometry(40, 18, 10, 6);
  const folderSlotGeo = makeRoundedExtrudeGeometry(34, 18, 2, 6);
  const lockGeo = new THREE.BoxGeometry(12, 10, 3);

  const projectileGeo = new THREE.SphereGeometry(4, 12, 12);
  const glowGeo = new THREE.PlaneGeometry(1, 1);
  const hpBorderGeo = (() => {
    const geo = new THREE.BufferGeometry();
    const verts = new Float32Array([
      -0.5, -0.5, 0,
       0.5, -0.5, 0,
       0.5,  0.5, 0,
      -0.5,  0.5, 0,
    ]);
    // Line segments: 0-1, 1-2, 2-3, 3-0
    const idx = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0]);
    geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    return geo;
  })();
  const trailGeo = new THREE.PlaneGeometry(26, 6);
  // Trail extends behind the projectile in +x direction (after rotation).
  trailGeo.translate(-13, 0, 0);
  const clutterGeo = new THREE.PlaneGeometry(16, 12);
  const coolantGeo = makeRoundedExtrudeGeometry(14, 14, 14, 3);
  const coolantCoreGeo = new THREE.BoxGeometry(8, 8, 8);
  const coolantCanGeo = new THREE.CylinderGeometry(7, 7, 16, 18, 1, false);
  const coolantCapGeo = new THREE.CylinderGeometry(7.6, 7.6, 3, 18, 1, false);
  const coolantCoreCylGeo = new THREE.CylinderGeometry(4.2, 4.2, 11, 18, 1, false);
  const coolantSnowArmGeo = new THREE.BoxGeometry(1.2, 9.5, 1.2);
  const appleGeo = new THREE.SphereGeometry(8, 16, 16);
  const appleLeafGeo = new THREE.BoxGeometry(4, 2, 2);
  const appleStemGeo = new THREE.CylinderGeometry(1.2, 1.6, 6, 10);
  const appleHighlightGeo = new THREE.SphereGeometry(3.2, 12, 12);
  const powerCapsuleGeo = new THREE.CapsuleGeometry(5, 10, 6, 12);
  const powerPrismGeo = makeRoundedExtrudeGeometry(14, 10, 6, 2);
  const powerShieldGeo = makeRoundedExtrudeGeometry(16, 18, 6, 6);
  const powerFinGeo = makeRoundedExtrudeGeometry(6, 4, 1.4, 1.2);
  const powerStripeGeo = new THREE.BoxGeometry(2.2, 12, 1.2);
  const powerTripleBarrelGeo = new THREE.CapsuleGeometry(2.6, 6.2, 4, 10);
  const powerCrownSpikeGeo = new THREE.ConeGeometry(2.2, 5.5, 10);
  const powerCrownBandGeo = new THREE.TorusGeometry(6.5, 1.2, 10, 18);

  const trashBodyGeo = new THREE.CylinderGeometry(12, 10, 22, 18, 1, false);
  const trashLidGeo = new THREE.CylinderGeometry(13, 13, 4, 18, 1, false);
  const trashRidgeGeo = new THREE.BoxGeometry(1.4, 18, 14);
  const trashHandleGeo = new THREE.TorusGeometry(7, 1.1, 10, 22);

  const regiBodyGeo = makeRoundedExtrudeGeometry(42, 28, 12, 6);
  const eyeGeo = new THREE.SphereGeometry(2.3, 10, 10);
  const eyeWhiteGeo = new THREE.SphereGeometry(3.3, 12, 12);
  const eyePupilGeo = new THREE.SphereGeometry(1.45, 10, 10);
  const regiLegGeo = new THREE.BoxGeometry(2.2, 2.2, 9);
  const gremlinGeo = new THREE.IcosahedronGeometry(14, 0);
  const gremlinCoreGeo = new THREE.SphereGeometry(7, 16, 16);
  const gremlinSpikeGeo = new THREE.TetrahedronGeometry(5, 0);
  const spyGeo = new THREE.SphereGeometry(10, 18, 18);
  const spyShellGeo = new THREE.SphereGeometry(11.3, 20, 20);
  const spyRingGeo = new THREE.TorusGeometry(12, 1.2, 10, 26);
  const spyPupilGeo = new THREE.SphereGeometry(3.2, 12, 12);

  const watchdogBaseGeo = new THREE.CylinderGeometry(10, 12, 10, 16);
  const watchdogHeadGeo = makeRoundedExtrudeGeometry(18, 12, 10, 4);
  const watchdogBarrelGeo = new THREE.CylinderGeometry(2, 2, 10, 10);
  const stickyGeo = makeRoundedExtrudeGeometry(16, 12, 3, 2);
  const floppyBodyGeo = makeRoundedExtrudeGeometry(20, 20, 4, 3);
  const floppyLabelGeo = makeRoundedExtrudeGeometry(14, 10, 1.6, 2);
  const floppyShutterGeo = makeRoundedExtrudeGeometry(16, 6, 1.6, 2);
  const floppyHoleGeo = makeRoundedExtrudeGeometry(8, 6, 1.2, 2);
  const floppyNotchGeo = new THREE.BoxGeometry(3.5, 3.5, 1.2);

  const empRingGeo = (() => {
    const inner = 18;
    const outer = 26;
    const geo = new THREE.RingGeometry(inner, outer, 48);
    geo.rotateX(Math.PI); // face the camera correctly in our flipped projection
    return geo;
  })();

  // Materials (instance materials are cloned when per-entity tinting is needed).
  const cursorMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#f4f4f4'),
    roughness: 0.35,
    metalness: 0.15,
    emissive: new THREE.Color(0x000000),
    emissiveIntensity: 0.0,
  });
  const folderMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#3d6b86'),
    roughness: 0.55,
    metalness: 0.1,
  });
  const folderTabMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#4b7f9b'),
    roughness: 0.55,
    metalness: 0.1,
  });
  const folderSlotMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#0b1020'),
    roughness: 0.9,
    metalness: 0.0,
    transparent: true,
    opacity: 0.85,
  });
  const lockMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#f2c94c'),
    roughness: 0.35,
    metalness: 0.2,
    emissive: pickColorHex('#6a4b00'),
    emissiveIntensity: 0.18,
  });

  const outlineMat = new THREE.MeshBasicMaterial({
    color: 0x0b1020,
    side: THREE.BackSide,
    transparent: true,
    opacity: automationMode ? 0.62 : 0.42,
    depthWrite: false,
    toneMapped: false,
  });
  outlineMat.userData.fixedOpacity = true;

  const glowYellowMat = new THREE.MeshBasicMaterial({
    color: 0xffd35a,
    alphaMap: glowAlphaTex || null,
    transparent: true,
    opacity: automationMode ? 0.62 : 0.42,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  glowYellowMat.userData.fixedOpacity = true;
  const glowCyanMat = new THREE.MeshBasicMaterial({
    color: 0x67d6ff,
    alphaMap: glowAlphaTex || null,
    transparent: true,
    opacity: automationMode ? 0.62 : 0.42,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  glowCyanMat.userData.fixedOpacity = true;
  const glowOrangeMat = new THREE.MeshBasicMaterial({
    color: 0xff9a3c,
    alphaMap: glowAlphaTex || null,
    transparent: true,
    opacity: automationMode ? 0.62 : 0.42,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  glowOrangeMat.userData.fixedOpacity = true;
  const glowBlueMat = new THREE.MeshBasicMaterial({
    color: 0x3c8bff,
    alphaMap: glowAlphaTex || null,
    transparent: true,
    opacity: automationMode ? 0.6 : 0.4,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  glowBlueMat.userData.fixedOpacity = true;
  const glowPinkMat = new THREE.MeshBasicMaterial({
    color: 0xff4da6,
    alphaMap: glowAlphaTex || null,
    transparent: true,
    opacity: automationMode ? 0.6 : 0.4,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  glowPinkMat.userData.fixedOpacity = true;
  const glowRedMat = new THREE.MeshBasicMaterial({
    color: 0xff3b3b,
    alphaMap: glowAlphaTex || null,
    transparent: true,
    opacity: automationMode ? 0.55 : 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  glowRedMat.userData.fixedOpacity = true;

  const trailYellowMat = new THREE.MeshBasicMaterial({
    color: 0xffd35a,
    alphaMap: trailAlphaTex || null,
    transparent: true,
    opacity: automationMode ? 0.9 : 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  trailYellowMat.userData.fixedOpacity = true;
  const trailCyanMat = new THREE.MeshBasicMaterial({
    color: 0x67d6ff,
    alphaMap: trailAlphaTex || null,
    transparent: true,
    opacity: automationMode ? 0.9 : 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  trailCyanMat.userData.fixedOpacity = true;

  const projectileMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#fff2a8'),
    roughness: 0.25,
    metalness: 0.05,
    emissive: pickColorHex('#ffd35a'),
    emissiveIntensity: 0.55,
  });
  const projectileWatchdogMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#c7f3ff'),
    roughness: 0.18,
    metalness: 0.05,
    emissive: pickColorHex('#47c9ff'),
    emissiveIntensity: 0.75,
  });
  const clutterMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#e9eef8'),
    roughness: 0.85,
    metalness: 0.0,
    side: THREE.DoubleSide,
  });
  const appleMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#e04444'),
    roughness: 0.4,
    metalness: 0.05,
  });
  const appleStemMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#7a4b2c'),
    roughness: 0.75,
    metalness: 0.0,
  });
  const appleHighlightMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#ffd6d6'),
    roughness: 0.12,
    metalness: 0.0,
    emissive: pickColorHex('#ffffff'),
    emissiveIntensity: 0.08,
    transparent: true,
    opacity: 0.8,
  });
  const leafMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#4bbf5a'),
    roughness: 0.7,
    metalness: 0.0,
  });
  const coolantMat = new THREE.MeshPhysicalMaterial({
    color: pickColorHex('#67d6ff'),
    roughness: 0.05,
    metalness: 0.0,
    transmission: 0.92,
    thickness: 2,
    ior: 1.25,
    clearcoat: 0.4,
    clearcoatRoughness: 0.1,
  });
  coolantMat.userData.fixedOpacity = true;
  const coolantCoreMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#0b6aa6'),
    roughness: 0.25,
    metalness: 0.0,
    emissive: pickColorHex('#2bbcff'),
    emissiveIntensity: 0.85,
  });
  const coolantCapMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#e6e8ed'),
    roughness: 0.55,
    metalness: 0.18,
  });
  const coolantSnowMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#c7f3ff'),
    roughness: 0.35,
    metalness: 0.0,
    emissive: pickColorHex('#47c9ff'),
    emissiveIntensity: 0.35,
  });
  const powerRapidMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#ff9a3c'),
    roughness: 0.25,
    metalness: 0.1,
    emissive: pickColorHex('#ff5a00'),
    emissiveIntensity: 0.45,
  });
  const powerTripleMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#3c8bff'),
    roughness: 0.25,
    metalness: 0.12,
    emissive: pickColorHex('#2b4bff'),
    emissiveIntensity: 0.4,
  });
  const powerGiantMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#f2c94c'),
    roughness: 0.3,
    metalness: 0.18,
    emissive: pickColorHex('#6a4b00'),
    emissiveIntensity: 0.25,
  });

  const trashMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#aab3c5'),
    roughness: 0.65,
    metalness: 0.05,
  });
  const trashLidMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#c2cad8'),
    roughness: 0.55,
    metalness: 0.08,
  });
  const trashDarkMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#7d8698'),
    roughness: 0.75,
    metalness: 0.04,
  });

  const regiMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#e9d9c6'),
    roughness: 0.75,
    metalness: 0.0,
  });
  const regiShellMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#d7c2aa'),
    roughness: 0.42,
    metalness: 0.05,
  });
  const regiLegMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#6a4b00'),
    roughness: 0.85,
    metalness: 0.0,
  });
  const eyeWhiteMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#f4f4f4'),
    roughness: 0.25,
    metalness: 0.0,
  });
  const pupilMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#0f0f12'),
    roughness: 0.85,
    metalness: 0.0,
  });

  const gremlinMat = new THREE.MeshPhysicalMaterial({
    color: pickColorHex('#ff6b7a'),
    roughness: 0.22,
    metalness: 0.12,
    clearcoat: 0.6,
    clearcoatRoughness: 0.08,
    emissive: pickColorHex('#b4002f'),
    emissiveIntensity: 0.6,
    flatShading: true,
  });
  const gremlinCoreMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#ff4da6'),
    roughness: 0.18,
    metalness: 0.0,
    emissive: pickColorHex('#ff1f7a'),
    emissiveIntensity: 0.85,
  });
  const gremlinSpikeMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#2a0010'),
    roughness: 0.55,
    metalness: 0.1,
    emissive: pickColorHex('#350013'),
    emissiveIntensity: 0.35,
    flatShading: true,
  });
  const spyMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#ff3b3b'),
    roughness: 0.15,
    metalness: 0.25,
    emissive: pickColorHex('#550000'),
    emissiveIntensity: 0.25,
  });
  const spyShellMat = new THREE.MeshPhysicalMaterial({
    color: pickColorHex('#ffffff'),
    roughness: 0.06,
    metalness: 0.0,
    transmission: 0.9,
    thickness: 1.6,
    ior: 1.3,
    clearcoat: 0.35,
    clearcoatRoughness: 0.1,
    transparent: true,
    opacity: 0.9,
  });
  spyShellMat.userData.fixedOpacity = true;
  const spyRingMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#ff3b3b'),
    roughness: 0.25,
    metalness: 0.15,
    emissive: pickColorHex('#ff1f1f'),
    emissiveIntensity: 0.65,
  });
  const spyPupilMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#2a0010'),
    roughness: 0.5,
    metalness: 0.0,
  });
  const eyeMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#1a1a1a'),
    roughness: 0.7,
    metalness: 0.0,
  });

  const watchdogBaseMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#e6e8ed'),
    roughness: 0.55,
    metalness: 0.08,
  });
  const watchdogHeadMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#f2c94c'),
    roughness: 0.4,
    metalness: 0.15,
    emissive: pickColorHex('#4a3400'),
    emissiveIntensity: 0.12,
  });
  const watchdogBarrelMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#2a2f3c'),
    roughness: 0.6,
    metalness: 0.2,
  });
  const stickyMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#f7f0a6'),
    roughness: 0.65,
    metalness: 0.0,
  });
  const floppyBodyMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#2a2f3c'),
    roughness: 0.65,
    metalness: 0.18,
  });
  const floppyLabelMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#e6e8ed'),
    roughness: 0.85,
    metalness: 0.0,
  });
  const floppyShutterMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#aab3c5'),
    roughness: 0.45,
    metalness: 0.35,
  });
  const floppyHoleMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#0b1020'),
    roughness: 0.9,
    metalness: 0.0,
    transparent: true,
    opacity: 0.85,
  });

  const hpBackMat = new THREE.MeshBasicMaterial({
    color: 0x0b1020,
    transparent: true,
    opacity: 0.72,
    depthWrite: false,
    toneMapped: false,
  });
  hpBackMat.userData.fixedOpacity = true;
  const hpEdgeMat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.28,
    toneMapped: false,
  });

  const wallBaseColor = pickColorHex('#d4a456');

  const applyStatusToMaterial = (mesh, { stunned = 0, isHit = false }) => {
    if (!mesh || !mesh.material || Array.isArray(mesh.material)) return;
    const mat = mesh.material;
    if (mat.userData && mat.userData.fixedOpacity) return;
    if ('opacity' in mat) {
      mat.transparent = true;
      mat.opacity = stunned > 0 ? 0.65 : 1.0;
    }
    if ('emissive' in mat) {
      const base = Number.isFinite(mesh.userData.baseEmissiveIntensity) ? mesh.userData.baseEmissiveIntensity : mat.emissiveIntensity || 0;
      mat.emissiveIntensity = base + (isHit ? 0.35 : 0.0);
    }
  };

  const addBackfaceOutline = (mesh, scale = 1.12) => {
    const o = new THREE.Mesh(mesh.geometry, outlineMat);
    o.scale.set(scale, scale, scale);
    o.castShadow = false;
    o.receiveShadow = false;
    o.renderOrder = -1;
    mesh.add(o);
    return o;
  };

  const addGlowPlane = (parent, mat, size, z = -2) => {
    const g = new THREE.Mesh(glowGeo, mat);
    g.position.set(0, 0, z);
    g.scale.set(size, size, 1);
    g.castShadow = false;
    g.receiveShadow = false;
    g.renderOrder = -2;
    parent.add(g);
    return g;
  };

  // Static meshes.
  const cursor = new THREE.Mesh(cursorGeo, cursorMat);
  cursor.castShadow = !automationMode;
  cursor.receiveShadow = false;
  scene.add(cursor);
  addBackfaceOutline(cursor, 1.16);

  const systemFolder = new THREE.Group();
  const folderTab = new THREE.Mesh(folderTabGeo, folderTabMat);
  folderTab.castShadow = !automationMode;
  folderTab.position.set(0, -10, 6);
  addBackfaceOutline(folderTab, 1.08);
  const folderBody = new THREE.Mesh(folderBodyGeo, folderMat);
  folderBody.castShadow = !automationMode;
  folderBody.position.set(0, 0, 8);
  addBackfaceOutline(folderBody, 1.08);
  const folderLock = new THREE.Mesh(lockGeo, lockMat);
  folderLock.castShadow = !automationMode;
  folderLock.position.set(0, 6, 14);
  addBackfaceOutline(folderLock, 1.12);
  const folderSlot = new THREE.Mesh(folderSlotGeo, folderSlotMat);
  folderSlot.castShadow = false;
  folderSlot.position.set(0, 5, 14.2);
  systemFolder.add(folderSlot);
  addBackfaceOutline(folderSlot, 1.06);
  const folderHandle = new THREE.Mesh(trashHandleGeo, lockMat);
  folderHandle.castShadow = !automationMode;
  folderHandle.rotation.x = Math.PI / 2;
  folderHandle.position.set(0, 12, 15.2);
  systemFolder.add(folderHandle);
  addBackfaceOutline(folderHandle, 1.06);
  systemFolder.add(folderTab);
  systemFolder.add(folderBody);
  systemFolder.add(folderLock);
  scene.add(systemFolder);

  const empRing = new THREE.Mesh(
    empRingGeo,
    new THREE.MeshStandardMaterial({
      color: pickColorHex('#67d6ff'),
      transparent: true,
      opacity: 0,
      roughness: 0.3,
      metalness: 0.0,
      emissive: pickColorHex('#1a7cff'),
      emissiveIntensity: 0.6,
      side: THREE.DoubleSide,
    })
  );
  empRing.position.set(width / 2, height / 2, -9.5);
  empRing.visible = false;
  scene.add(empRing);

  const sharedMaterials = new Set([
    cursorMat,
    folderMat,
    folderTabMat,
    folderSlotMat,
    lockMat,
    outlineMat,
    glowYellowMat,
    glowCyanMat,
    glowOrangeMat,
    glowBlueMat,
    glowPinkMat,
    glowRedMat,
    trailYellowMat,
    trailCyanMat,
    projectileMat,
    projectileWatchdogMat,
    clutterMat,
    appleMat,
    appleStemMat,
    appleHighlightMat,
    leafMat,
    coolantMat,
    coolantCoreMat,
    coolantCapMat,
    coolantSnowMat,
    powerRapidMat,
    powerTripleMat,
    powerGiantMat,
    trashMat,
    trashLidMat,
    trashDarkMat,
    regiMat,
    regiShellMat,
    regiLegMat,
    eyeWhiteMat,
    pupilMat,
    gremlinMat,
    gremlinCoreMat,
    gremlinSpikeMat,
    spyMat,
    spyShellMat,
    spyRingMat,
    spyPupilMat,
    eyeMat,
    watchdogBaseMat,
    watchdogHeadMat,
    watchdogBarrelMat,
    stickyMat,
    floppyBodyMat,
    floppyLabelMat,
    floppyShutterMat,
    floppyHoleMat,
    hpBackMat,
    hpEdgeMat,
    bgMat,
    shadowMat,
    empRing.material,
  ]);

  // Pooled entities.
  const walls = new Map();
  const deployables = new Map();
  const enemies = new Map();
  const pickups = new Map();
  const projectiles = new Map();
  const clutter = new Map();
  const clutterAngle = new Map();

  function ensureWall(id) {
    let m = walls.get(id);
    if (m) return m;
    m = new THREE.Mesh(wallGeo, new THREE.MeshStandardMaterial({ color: wallBaseColor.clone(), roughness: 0.7, metalness: 0.0 }));
    m.castShadow = !automationMode;
    m.receiveShadow = false;
    addBackfaceOutline(m, 1.08);
    scene.add(m);
    walls.set(id, m);
    return m;
  }

  function ensureTrash() {
    // Single trash mesh keyed by fixed id.
    let g = deployables.get('trash');
    if (g) return g;
    g = new THREE.Group();
    const body = new THREE.Mesh(trashBodyGeo, trashMat);
    body.castShadow = !automationMode;
    addBackfaceOutline(body, 1.06);
    const lid = new THREE.Mesh(trashLidGeo, trashLidMat);
    lid.castShadow = !automationMode;
    lid.position.set(0, -11, 0);
    addBackfaceOutline(lid, 1.06);

    for (let i = 0; i < 6; i += 1) {
      const a = (i / 6) * Math.PI * 2;
      const ridge = new THREE.Mesh(trashRidgeGeo, trashDarkMat);
      ridge.castShadow = !automationMode;
      ridge.position.set(Math.cos(a) * 10.5, 0, Math.sin(a) * 10.5);
      ridge.rotation.y = a;
      g.add(ridge);
    }
    const handle = new THREE.Mesh(trashHandleGeo, trashDarkMat);
    handle.castShadow = !automationMode;
    handle.position.set(0, -13.5, 7.5);
    g.add(handle);

    g.add(body);
    g.add(lid);
    scene.add(g);
    deployables.set('trash', g);
    return g;
  }

  function ensureWatchdog(id) {
    let g = deployables.get(id);
    if (g) return g;
    g = new THREE.Group();
    const base = new THREE.Mesh(watchdogBaseGeo, watchdogBaseMat);
    base.castShadow = !automationMode;
    addBackfaceOutline(base, 1.08);
    const head = new THREE.Mesh(watchdogHeadGeo, watchdogHeadMat);
    head.castShadow = !automationMode;
    head.position.set(0, 0, 8);
    addBackfaceOutline(head, 1.08);
    const barrel = new THREE.Mesh(watchdogBarrelGeo, watchdogBarrelMat);
    barrel.castShadow = !automationMode;
    barrel.rotation.z = Math.PI / 2;
    barrel.position.set(9, 0, 10);
    addBackfaceOutline(barrel, 1.08);
    const muzzleGlow = addGlowPlane(g, glowCyanMat, 18, -4);
    muzzleGlow.position.set(16, 0, 10);
    muzzleGlow.visible = false;
    g.userData.muzzleGlow = muzzleGlow;
    g.add(base);
    g.add(head);
    g.add(barrel);
    scene.add(g);
    deployables.set(id, g);
    return g;
  }

  function ensureSticky(id) {
    let g = deployables.get(id);
    if (g) return g;
    g = new THREE.Group();

    // "Floppy Disk" deployable: make it read as an actual disk, not a flat sticky note.
    const body = new THREE.Mesh(floppyBodyGeo, floppyBodyMat);
    body.castShadow = !automationMode;
    addBackfaceOutline(body, 1.08);

    const label = new THREE.Mesh(floppyLabelGeo, floppyLabelMat);
    label.castShadow = false;
    label.position.set(0, 2.5, 3.2);
    addBackfaceOutline(label, 1.04);

    const shutter = new THREE.Mesh(floppyShutterGeo, floppyShutterMat);
    shutter.castShadow = !automationMode;
    shutter.position.set(0, -6.5, 3.0);
    addBackfaceOutline(shutter, 1.04);

    const hole = new THREE.Mesh(floppyHoleGeo, floppyHoleMat);
    hole.castShadow = false;
    hole.position.set(0, -6.5, 4.2);

    // Small accent notch for silhouette.
    const notch = new THREE.Mesh(floppyNotchGeo, lockMat);
    notch.castShadow = !automationMode;
    notch.position.set(7.2, -7.2, 2.6);

    g.add(body, label, shutter, hole, notch);
    scene.add(g);
    deployables.set(id, g);
    return g;
  }

  function ensureEnemy(id, type) {
    let g = enemies.get(id);
    if (g && g.userData.type === type) return g;
    if (g) {
      removeAndDisposeMaterials(scene, g, sharedMaterials);
      enemies.delete(id);
    }
    g = new THREE.Group();
    g.userData.type = type;

    if (type === 'regi-mite') {
      const bodyMat = regiMat.clone();
      bodyMat.roughness = 0.68;
      const body = new THREE.Mesh(regiBodyGeo, bodyMat);
      body.userData.baseEmissiveIntensity = 0.0;
      body.castShadow = !automationMode;
      addBackfaceOutline(body, 1.1);
      g.userData.body = body;

      const shellMat = regiShellMat.clone();
      shellMat.roughness = 0.38;
      const shell = new THREE.Mesh(regiBodyGeo, shellMat);
      shell.userData.baseEmissiveIntensity = 0.0;
      shell.castShadow = !automationMode;
      shell.position.set(0, -2, 2);
      shell.scale.set(0.92, 0.86, 0.82);
      addBackfaceOutline(shell, 1.1);
      g.userData.shell = shell;

      const mkEye = (x) => {
        const eye = new THREE.Group();
        const white = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat.clone());
        white.castShadow = !automationMode;
        const pupil = new THREE.Mesh(eyePupilGeo, pupilMat.clone());
        pupil.castShadow = !automationMode;
        pupil.position.set(0, 0, 2.2);
        eye.add(white, pupil);
        eye.position.set(x, -4, 9.5);
        return { eye, pupil };
      };
      const left = mkEye(-7);
      const right = mkEye(7);

      const legs = [];
      const legMat = regiLegMat.clone();
      const legOffsets = [
        [-14, 8],
        [-6, 10],
        [6, 10],
        [14, 8],
      ];
      for (let i = 0; i < legOffsets.length; i += 1) {
        const [lx, ly] = legOffsets[i];
        const leg = new THREE.Mesh(regiLegGeo, legMat);
        leg.castShadow = !automationMode;
        leg.position.set(lx, ly, -11);
        legs.push(leg);
        g.add(leg);
      }

      g.userData.pupils = [left.pupil, right.pupil];
      g.userData.legs = legs;

      // Soft underglow helps silhouettes read on dark backgrounds.
      addGlowPlane(g, glowYellowMat, 42, -14);

      g.add(body, shell, left.eye, right.eye);
    } else if (type === 'popup-gremlin') {
      const body = new THREE.Mesh(gremlinGeo, gremlinMat.clone());
      body.userData.baseEmissiveIntensity = 0.6;
      body.castShadow = !automationMode;
      addBackfaceOutline(body, 1.14);
      g.userData.body = body;

      const core = new THREE.Mesh(gremlinCoreGeo, gremlinCoreMat.clone());
      core.userData.baseEmissiveIntensity = 0.85;
      core.castShadow = false;
      core.position.set(0, 0, 1.5);

      const spikeMat = gremlinSpikeMat.clone();
      const spikes = [];
      const dirs = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1],
      ];
      for (let i = 0; i < dirs.length; i += 1) {
        const [dx, dy, dz] = dirs[i];
        const sp = new THREE.Mesh(gremlinSpikeGeo, spikeMat);
        sp.userData.baseEmissiveIntensity = 0.35;
        sp.castShadow = !automationMode;
        sp.scale.set(0.55, 0.55, 0.55);
        sp.position.set(dx * 15.5, dy * 15.5, dz * 8);
        sp.rotation.set(i * 0.4, i * 0.25, i * 0.3);
        spikes.push(sp);
        g.add(sp);
      }

      g.userData.core = core;
      g.userData.spikes = spikes;

      addGlowPlane(g, glowPinkMat, 54, -16);

      g.add(body, core);
    } else if (type === 'spy-dot') {
      const body = new THREE.Mesh(spyGeo, spyMat.clone());
      body.userData.baseEmissiveIntensity = 0.25;
      body.castShadow = !automationMode;
      addBackfaceOutline(body, 1.12);
      g.userData.body = body;

      const shell = new THREE.Mesh(spyShellGeo, spyShellMat.clone());
      shell.userData.baseEmissiveIntensity = 0.0;
      shell.castShadow = false;
      if (shell.material) shell.material.depthWrite = false;
      g.userData.shell = shell;

      const ring = new THREE.Mesh(spyRingGeo, spyRingMat.clone());
      ring.userData.baseEmissiveIntensity = 0.65;
      ring.castShadow = false;
      ring.rotation.x = 0.55;
      ring.position.set(0, 0, 3);

      const pupil = new THREE.Mesh(spyPupilGeo, spyPupilMat.clone());
      pupil.castShadow = false;
      pupil.position.set(0, 0, 11);

      g.userData.pupil = pupil;
      g.userData.ring = ring;

      addGlowPlane(g, glowRedMat, 46, -16);

      g.add(body, shell, ring, pupil);
    }

    // Enemy HP bar (segments) for readability. Kept small and mostly translucent when full.
    const maxSegments = type === 'regi-mite' ? 3 : type === 'popup-gremlin' ? 2 : type === 'spy-dot' ? 5 : 0;
    if (maxSegments > 1) {
      const hpColor = type === 'regi-mite' ? new THREE.Color('#ffd35a') : type === 'popup-gremlin' ? new THREE.Color('#ff4da6') : new THREE.Color('#ff3b3b');
      const barW = type === 'regi-mite' ? 44 : type === 'spy-dot' ? 40 : 36;
      const barH = 6;
      const pad = 1.6;
      const gap = 1.4;
      const segW = (barW - pad * 2 - gap * (maxSegments - 1)) / maxSegments;

      const hpBar = new THREE.Group();
      hpBar.position.set(0, type === 'popup-gremlin' ? -26 : type === 'spy-dot' ? -24 : -32, 0);

      const back = new THREE.Mesh(glowGeo, hpBackMat);
      back.scale.set(barW, barH, 1);
      back.position.set(0, 0, 14);
      back.castShadow = false;
      back.receiveShadow = false;
      hpBar.add(back);

      const segs = [];
      for (let i = 0; i < maxSegments; i += 1) {
        const mat = new THREE.MeshBasicMaterial({
          color: hpColor.clone(),
          transparent: true,
          opacity: 0.55,
          depthWrite: false,
          toneMapped: false,
        });
        mat.userData.fixedOpacity = true;
        const seg = new THREE.Mesh(glowGeo, mat);
        seg.scale.set(segW, barH - 2.2, 1);
        seg.position.set(-barW / 2 + pad + segW / 2 + i * (segW + gap), 0, 14.2);
        seg.castShadow = false;
        seg.receiveShadow = false;
        segs.push(seg);
        hpBar.add(seg);
      }

      // Optional border for contrast.
      const border = new THREE.LineSegments(hpBorderGeo, hpEdgeMat);
      border.position.set(0, 0, 14.4);
      border.scale.set(barW, barH, 1);
      hpBar.add(border);

      g.userData.hpBar = hpBar;
      g.userData.hpSegs = segs;
      g.userData.hpColor = hpColor;
      g.userData.hpMaxSegments = maxSegments;
      g.add(hpBar);
    }

    scene.add(g);
    enemies.set(id, g);
    return g;
  }

  function ensurePickup(id, type) {
    let g = pickups.get(id);
    if (g && g.userData.type === type) return g;
    if (g) {
      removeAndDisposeMaterials(scene, g, sharedMaterials);
      pickups.delete(id);
    }
    g = new THREE.Group();
    g.userData.type = type;

    if (type === 'apple') {
      const body = new THREE.Mesh(appleGeo, appleMat);
      body.castShadow = !automationMode;
      addBackfaceOutline(body, 1.12);

      const highlight = new THREE.Mesh(appleHighlightGeo, appleHighlightMat);
      highlight.castShadow = false;
      highlight.position.set(-3.2, -4.2, 6.4);

      const stem = new THREE.Mesh(appleStemGeo, appleStemMat);
      stem.castShadow = !automationMode;
      stem.rotation.x = Math.PI / 2;
      stem.position.set(-0.5, -9.2, 7.2);

      const leaf = new THREE.Mesh(appleLeafGeo, leafMat);
      leaf.castShadow = !automationMode;
      leaf.position.set(4.2, -9.2, 7.0);
      leaf.rotation.z = -0.6;
      leaf.rotation.y = 0.5;

      addGlowPlane(g, glowRedMat, 34, -14);

      g.add(body, highlight, stem, leaf);
    } else if (type === 'coolant') {
      // Coolant: read as a small cryo canister (more recognizable than a plain cube).
      const can = new THREE.Mesh(coolantCanGeo, coolantMat);
      can.castShadow = !automationMode;
      addBackfaceOutline(can, 1.06);

      const cap = new THREE.Mesh(coolantCapGeo, coolantCapMat);
      cap.castShadow = !automationMode;
      cap.position.set(0, -9.5, 0);
      addBackfaceOutline(cap, 1.05);

      const core = new THREE.Mesh(coolantCoreCylGeo, coolantCoreMat);
      core.castShadow = false;
      core.position.set(0, 1.0, 0);

      const mkArm = (rot) => {
        const arm = new THREE.Mesh(coolantSnowArmGeo, coolantSnowMat);
        arm.castShadow = false;
        arm.position.set(0, 0, 7.8);
        arm.rotation.z = rot;
        return arm;
      };
      const snow = new THREE.Group();
      snow.add(mkArm(0), mkArm(Math.PI / 2), mkArm(Math.PI / 4), mkArm(-Math.PI / 4));

      addGlowPlane(g, glowCyanMat, 46, -14);

      g.add(can, cap, core, snow);
    } else if (type === 'powerup-rapid') {
      // Rapid: capsule + fins + stripes to communicate "speed".
      const cap = new THREE.Mesh(powerCapsuleGeo, powerRapidMat);
      cap.castShadow = !automationMode;
      cap.rotation.z = Math.PI / 2;
      addBackfaceOutline(cap, 1.06);

      const finL = new THREE.Mesh(powerFinGeo, powerRapidMat);
      finL.castShadow = !automationMode;
      finL.position.set(-6.4, 0, -1.2);
      finL.rotation.z = Math.PI / 2;
      finL.scale.set(0.9, 0.9, 0.9);
      addBackfaceOutline(finL, 1.04);

      const finR = finL.clone();
      finR.position.x = 6.4;

      const stripe1 = new THREE.Mesh(powerStripeGeo, watchdogBarrelMat);
      stripe1.castShadow = false;
      stripe1.position.set(-2.2, 0, 2.8);
      stripe1.rotation.z = Math.PI / 2;
      const stripe2 = stripe1.clone();
      stripe2.position.x = 2.2;

      addGlowPlane(g, glowOrangeMat, 44, -14);
      g.add(cap, finL, finR, stripe1, stripe2);
    } else if (type === 'powerup-triple') {
      // Triple: cluster of three mini-barrels.
      const base = new THREE.Mesh(powerPrismGeo, powerTripleMat);
      base.castShadow = !automationMode;
      addBackfaceOutline(base, 1.06);

      const mkBarrel = (x, y) => {
        const b = new THREE.Mesh(powerTripleBarrelGeo, powerTripleMat);
        b.castShadow = !automationMode;
        b.rotation.z = Math.PI / 2;
        b.position.set(x, y, 3.6);
        addBackfaceOutline(b, 1.04);
        return b;
      };
      const b1 = mkBarrel(-5.4, -2.0);
      const b2 = mkBarrel(5.4, -2.0);
      const b3 = mkBarrel(0.0, 6.0);

      addGlowPlane(g, glowBlueMat, 46, -14);
      g.add(base, b1, b2, b3);
    } else if (type === 'powerup-giant') {
      // Giant: shield + crown to read as "power".
      const shield = new THREE.Mesh(powerShieldGeo, powerGiantMat);
      shield.castShadow = !automationMode;
      addBackfaceOutline(shield, 1.06);

      const halo = new THREE.Mesh(powerCrownBandGeo, powerGiantMat);
      halo.castShadow = false;
      halo.position.set(0, -11.5, 3.5);
      halo.rotation.x = Math.PI / 2;
      halo.scale.set(1.05, 1.05, 1.05);

      const spikes = new THREE.Group();
      for (let i = 0; i < 3; i += 1) {
        const a = (i / 3) * Math.PI * 2 + Math.PI / 6;
        const sp = new THREE.Mesh(powerCrownSpikeGeo, lockMat);
        sp.castShadow = !automationMode;
        sp.position.set(Math.cos(a) * 6.5, -14.2, Math.sin(a) * 6.5);
        sp.rotation.z = 0;
        spikes.add(sp);
      }

      addGlowPlane(g, glowYellowMat, 50, -14);
      g.add(shield, halo, spikes);
    } else {
      const body = new THREE.Mesh(powerCapsuleGeo, powerRapidMat);
      body.castShadow = !automationMode;
      addBackfaceOutline(body, 1.06);
      addGlowPlane(g, glowYellowMat, 40, -14);
      g.add(body);
    }

    scene.add(g);
    pickups.set(id, g);
    return g;
  }

  function ensureProjectile(id) {
    let m = projectiles.get(id);
    if (m) return m;
    m = new THREE.Mesh(projectileGeo, projectileMat);
    m.castShadow = false;
    addBackfaceOutline(m, 1.08);

    const trail = new THREE.Mesh(trailGeo, trailYellowMat);
    trail.position.set(0, 0, -2);
    trail.castShadow = false;
    trail.receiveShadow = false;
    m.add(trail);
    m.userData.trail = trail;

    const glow = addGlowPlane(m, glowYellowMat, 20, -6);
    m.userData.glow = glow;

    scene.add(m);
    projectiles.set(id, m);
    return m;
  }

  function ensureClutter(id) {
    let m = clutter.get(id);
    if (m) return m;
    m = new THREE.Mesh(clutterGeo, clutterMat);
    m.castShadow = !automationMode;
    m.receiveShadow = false;
    scene.add(m);
    clutter.set(id, m);
    if (!clutterAngle.has(id)) clutterAngle.set(id, (Math.random() - 0.5) * 0.6);
    return m;
  }

  function cleanupMap(map, keepIds, keyIsString = false) {
    for (const [id, obj] of map) {
      if (keepIds.has(id)) continue;
      removeAndDisposeMaterials(scene, obj, sharedMaterials);
      map.delete(id);
    }
  }

  function setCursorStyleFromState(player, mousePos) {
    const isOverheated = player?.cpuHeat >= 90;
    const isSlowed = player?.ramPressure >= 60;
    const isGiant = player?.powerUp === 'giant';
    const isHit = !!player?.isHit;

    let color = '#f4f4f4';
    let emissive = '#000000';
    let emissiveIntensity = 0.0;
    if (isHit) {
      emissive = '#ffffff';
      emissiveIntensity = 0.85;
    } else if (isGiant) {
      color = '#f2c94c';
      emissive = '#6a4b00';
      emissiveIntensity = 0.22;
    } else if (isOverheated) {
      color = '#ff4d4d';
      emissive = '#5a0000';
      emissiveIntensity = 0.28;
    } else if (isSlowed) {
      color = '#4aa3ff';
      emissive = '#003a7a';
      emissiveIntensity = 0.22;
    }

    cursorMat.color.set(color);
    cursorMat.emissive.set(emissive);
    cursorMat.emissiveIntensity = emissiveIntensity;

    const size = isGiant ? 48 : 32;
    const scale = size / 28;
    cursor.scale.set(scale, scale, scale);

    const dx = (mousePos?.x ?? width / 2) - (player?.x ?? width / 2);
    const dy = (mousePos?.y ?? height / 2) - (player?.y ?? height / 2);
    const angle = Math.atan2(dy, dx);
    cursor.rotation.z = angle + Math.PI / 2;
  }

  function render(state) {
    if (!state) return;

    // Static positions.
    const player = state.player || { x: width / 2, y: height / 2 };
    const mousePos = state.mousePos || { x: width / 2, y: height / 2 };

    setCursorStyleFromState(player, mousePos);
    cursor.position.set(player.x, player.y, 24);

    systemFolder.position.set(width / 2, height / 2 + 40, 0);
    // The game uses the system folder at (320, 280) in 640x480 space.
    systemFolder.position.set(320, 280, 0);

    // Trash.
    const trash = ensureTrash();
    if (state.trash) {
      const cx = state.trash.x + 16;
      const cy = state.trash.y + 18;
      trash.position.set(cx, cy, 0);
    } else {
      // Default position used by the existing UI.
      trash.position.set(580 + 16, 420 + 18, 0);
    }

    // EMP ring.
    if (state.empExplosion && Number.isFinite(state.totalTime) && Number.isFinite(state.empExplosion.t0)) {
      const age = state.totalTime - state.empExplosion.t0;
      if (age >= 0 && age <= 0.6) {
        const t = clamp01(age / 0.6);
        const s = 0.4 + t * 2.7;
        empRing.visible = true;
        empRing.position.set(state.empExplosion.x, state.empExplosion.y, -9.6);
        empRing.scale.set(s, s, 1);
        empRing.material.opacity = 0.85 * (1 - t);
      } else {
        empRing.visible = false;
      }
    } else {
      empRing.visible = false;
    }

    // Walls.
    const wallIds = new Set();
    for (const w of state.folderWalls || []) {
      const id = w.id;
      wallIds.add(id);
      const m = ensureWall(id);
      const centerX = w.x + 12;
      const centerY = w.y + 12;
      m.position.set(centerX, centerY, 0);

      const hp = Number.isFinite(w.hp) ? w.hp : 0;
      const dmg = hp > 3 ? 0 : hp > 2 ? 1 : hp > 1 ? 2 : 3;
      const brightness = dmg === 0 ? 1.0 : dmg === 1 ? 0.85 : dmg === 2 ? 0.7 : 0.55;
      m.material.color.copy(wallBaseColor).multiplyScalar(brightness);

      const thin = hp <= 1;
      m.scale.set(1, 1, thin ? 0.7 : 1);
      m.castShadow = true;
    }
    cleanupMap(walls, wallIds);

    // Deployables (watchdog, sticky). Note: trash is stored under a string key.
    const depIds = new Set(['trash']);
    for (const d of state.deployables || []) {
      const id = d.id;
      depIds.add(id);
      if (d.type === 'watchdog') {
        const g = ensureWatchdog(id);
        g.position.set(d.x + 12, d.y + 12, 0);
        const dir = Number.isFinite(d.aimDir) ? d.aimDir : 7;
        const angle = Math.PI / 2 - dir * (Math.PI / 4);
        g.rotation.z = angle;

        // Pulse a small muzzle glow to sell the turret.
        const mg = g.userData.muzzleGlow || null;
        if (mg) {
          const pulse = 0.4 + 0.6 * Math.max(0, Math.sin((state.totalTime || 0) * 10 + id * 3));
          mg.visible = true;
          mg.material.opacity = (mg.material.userData && mg.material.userData.fixedOpacity) ? mg.material.opacity : mg.material.opacity;
          mg.scale.set(1 + pulse * 0.25, 1 + pulse * 0.25, 1);
        }
      } else if (d.type === 'sticky') {
        const m = ensureSticky(id);
        m.position.set(d.x + 12, d.y + 12, 2);
        m.rotation.z = -0.2;
      }
    }
    cleanupMap(deployables, depIds);

    // Enemies.
    const enemyIds = new Set();
    for (const e of state.enemies || []) {
      const id = e.id;
      enemyIds.add(id);
      const g = ensureEnemy(id, e.type);
      const z = 6;
      g.position.set(e.x, e.y, z);

      const intendedSize =
        Number.isFinite(e.size)
          ? e.size
          : e.type === 'regi-mite'
            ? 64
            : e.type === 'popup-gremlin'
              ? 36
              : e.type === 'spy-dot'
                ? 48
                : 48;
      // Scale visuals so they match the game's collision size more closely (better readability).
      const visualBaseSize = e.type === 'regi-mite' ? 48 : e.type === 'popup-gremlin' ? 28 : 28;
      const baseScale = intendedSize / visualBaseSize;

      if (e.type === 'popup-gremlin') {
        const f = Number.isFinite(e.frame) ? e.frame : 0;
        const bounce = Math.sin(f * 3) * 4;
        const wobble = (Math.sin(f * 5) * 8 * Math.PI) / 180;
        const scale = 1 + Math.sin(f * 4) * 0.15;
        g.position.y += bounce;
        g.rotation.z = wobble;
        g.scale.setScalar(baseScale * scale);

        const body = g.userData.body || null;
        if (body) {
          body.rotation.x = Math.sin(f * 4.2) * 0.35;
          body.rotation.y = Math.cos(f * 3.1) * 0.28;
          body.rotation.z = Math.sin(f * 2.8) * 0.22;
        }
        const core = g.userData.core || null;
        if (core) {
          core.rotation.z = f * 2.2;
          core.rotation.x = -Math.sin(f * 3.2) * 0.22;
        }
        const spikes = g.userData.spikes;
        if (Array.isArray(spikes)) {
          for (let i = 0; i < spikes.length; i += 1) {
            const sp = spikes[i];
            sp.rotation.x = f * 1.8 + i * 0.7;
            sp.rotation.y = f * 1.4 + i * 0.5;
            sp.rotation.z = f * 0.9 + i * 0.6;
          }
        }
      } else if (e.type === 'regi-mite') {
        const f = Number.isFinite(e.frame) ? e.frame : 0;
        const bob = Math.sin(f * 0.8) * 1.5;
        g.position.y += bob;
        g.rotation.z = 0;
        g.scale.setScalar(baseScale);

        const shell = g.userData.shell || null;
        if (shell) shell.position.z = 2 + Math.sin(f * 1.7) * 0.7;

        const legs = g.userData.legs;
        if (Array.isArray(legs)) {
          for (let i = 0; i < legs.length; i += 1) {
            const leg = legs[i];
            leg.rotation.x = Math.sin(f * 5.0 + i) * 0.45;
            leg.rotation.y = Math.cos(f * 4.1 + i * 1.3) * 0.35;
          }
        }

        const pupils = g.userData.pupils;
        if (Array.isArray(pupils)) {
          for (let i = 0; i < pupils.length; i += 1) {
            const p = pupils[i];
            p.position.x = Math.sin(f * 2.5 + i) * 0.65;
            p.position.y = Math.cos(f * 2.1 + i) * 0.5;
          }
        }
      } else if (e.type === 'spy-dot') {
        g.rotation.z = 0;
        g.scale.setScalar(baseScale);
        const tt = state.totalTime || 0;
        const pupil = g.userData.pupil || null;
        const ring = g.userData.ring || null;
        const shell = g.userData.shell || null;
        const blink = Math.sin(tt * 9) > 0.7 ? 0.25 : 1;
        if (pupil) {
          pupil.scale.setScalar(blink);
          pupil.position.x = Math.sin(tt * 2.6 + id) * 0.55;
          pupil.position.y = Math.cos(tt * 2.1 + id) * 0.45;
        }
        if (ring) {
          ring.rotation.z = tt * 1.7;
          ring.rotation.y = Math.sin(tt * 3.0) * 0.35;
        }
        if (shell) shell.rotation.z = tt * 0.55;
      }

      // HP segments.
      const segs = g.userData.hpSegs;
      const hpColor = g.userData.hpColor;
      const maxSegs = Number.isFinite(g.userData.hpMaxSegments) ? g.userData.hpMaxSegments : 0;
      if (Array.isArray(segs) && segs.length > 0 && maxSegs > 1 && hpColor && hpColor.isColor) {
        const maxHp = Number.isFinite(e.maxHp) ? Math.max(1, e.maxHp) : maxSegs;
        const hp = Number.isFinite(e.hp) ? Math.max(0, Math.min(maxHp, e.hp)) : 0;
        const full = hp >= maxHp;
        const onOpacity = full ? 0.55 : 0.95;
        const offOpacity = full ? 0.14 : 0.22;
        for (let i = 0; i < segs.length; i += 1) {
          const seg = segs[i];
          if (!seg || !seg.material || !seg.material.color) continue;
          if (i < hp) {
            seg.material.color.copy(hpColor);
            seg.material.opacity = onOpacity;
          } else {
            seg.material.color.set('#0b1020');
            seg.material.opacity = offOpacity;
          }
        }
      }

      // Hit / stunned feedback.
      const stunned = Number.isFinite(e.stunned) ? e.stunned : 0;
      const isHit = !!e.isHit;
      g.traverse((child) => {
        if (!child.isMesh) return;
        applyStatusToMaterial(child, { stunned, isHit });
      });

      if (e.flipX) g.scale.x = -Math.abs(g.scale.x || 1);
      else g.scale.x = Math.abs(g.scale.x || 1);

      // Keep HP bars unflipped so segment order reads left-to-right.
      const hpBar = g.userData.hpBar || null;
      if (hpBar) hpBar.scale.x = e.flipX ? -1 : 1;
    }
    cleanupMap(enemies, enemyIds);

    // Optional polish: subtle idle motion for the objective and trash.
    const tt = state.totalTime || 0;
    systemFolder.position.y = 280 + Math.sin(tt * 1.2) * 1.6;
    systemFolder.rotation.z = Math.sin(tt * 0.9) * 0.035;
    trash.rotation.z = Math.sin(tt * 1.6) * 0.04;

    // Pickups.
    const pickupIds = new Set();
    for (const p of state.pickups || []) {
      const id = p.id;
      pickupIds.add(id);
      const g = ensurePickup(id, p.type);
      const t = state.totalTime || 0;
      const isPower = typeof p.type === 'string' && p.type.startsWith('powerup');
      const wobble = Math.sin(t * (isPower ? 8 : 6)) * (isPower ? 0 : 2);
      const pulse = isPower ? 1 + Math.sin(t * 10) * 0.12 : 1;
      g.position.set(p.x, p.y + wobble, 6);
      g.rotation.z = isPower ? t * 0.6 : t * 0.35;
      g.scale.setScalar(pulse);

      // Extra polish: subtle float/tilt and highlight wobble without affecting gameplay.
      g.rotation.x = Math.sin(t * 1.7 + id) * 0.2;
      g.rotation.y = Math.cos(t * 1.3 + id) * 0.18;
      g.position.z = 6 + Math.sin(t * 2.2 + id) * 0.6;
    }
    cleanupMap(pickups, pickupIds);

    // Projectiles.
    const projIds = new Set();
    for (const p of state.projectiles || []) {
      const id = p.id;
      projIds.add(id);
      const m = ensureProjectile(id);
      m.position.set(p.x, p.y, 10);

      const vx = Number.isFinite(p.vx) ? p.vx : 0;
      const vy = Number.isFinite(p.vy) ? p.vy : 0;
      const speed = Math.hypot(vx, vy);
      if (speed > 0.001) m.rotation.z = Math.atan2(vy, vx);

      const isWatchdog = !!p.fromWatchdog;
      m.material = isWatchdog ? projectileWatchdogMat : projectileMat;

      const trail = m.userData.trail || null;
      if (trail) {
        trail.material = isWatchdog ? trailCyanMat : trailYellowMat;
        trail.visible = speed > 0.15;
        const len = Math.max(0.8, Math.min(2.2, speed / 5.8));
        trail.scale.set(len, 1, 1);
      }
      const glow = m.userData.glow || null;
      if (glow) glow.material = isWatchdog ? glowCyanMat : glowYellowMat;
    }
    cleanupMap(projectiles, projIds);

    // Clutter.
    const clutterIds = new Set();
    const t = state.totalTime || 0;
    for (const c of state.clutter || []) {
      const id = c.id;
      clutterIds.add(id);
      const m = ensureClutter(id);
      const a = clutterAngle.get(id) || 0;
      m.position.set(c.x, c.y, 1);
      m.rotation.z = a + Math.sin(t * 2.0 + (id % 10)) * 0.05;
    }
    cleanupMap(clutter, clutterIds);

    renderer.render(scene, camera);
    if (automationMode) {
      // In SwiftShader/headless runs, ensure the frame fully resolves before any readback (toDataURL / screenshots).
      try {
        const gl = renderer.getContext();
        gl.finish?.();
      } catch {}
    }
  }

  function resize(nextW, nextH) {
    renderer.setSize(nextW, nextH, false);
    camera.left = 0;
    camera.right = nextW;
    camera.top = 0;
    camera.bottom = nextH;
    camera.updateProjectionMatrix();
  }

  function dispose() {
    // Pooled.
    for (const m of walls.values()) removeAndDisposeMaterials(scene, m, sharedMaterials);
    for (const m of deployables.values()) removeAndDisposeMaterials(scene, m, sharedMaterials);
    for (const m of enemies.values()) removeAndDisposeMaterials(scene, m, sharedMaterials);
    for (const m of pickups.values()) removeAndDisposeMaterials(scene, m, sharedMaterials);
    for (const m of projectiles.values()) removeAndDisposeMaterials(scene, m, sharedMaterials);
    for (const m of clutter.values()) removeAndDisposeMaterials(scene, m, sharedMaterials);
    walls.clear();
    deployables.clear();
    enemies.clear();
    pickups.clear();
    projectiles.clear();
    clutter.clear();

    scene.remove(cursor);
    scene.remove(systemFolder);
    scene.remove(empRing);
    scene.remove(bgPlane);
    scene.remove(floor);

    // Shared geometries.
    cursorGeo.dispose();
    wallGeo.dispose();
    folderBodyGeo.dispose();
    folderTabGeo.dispose();
    folderSlotGeo.dispose();
    lockGeo.dispose();
    projectileGeo.dispose();
    glowGeo.dispose();
    hpBorderGeo.dispose();
    trailGeo.dispose();
    clutterGeo.dispose();
    coolantGeo.dispose();
    coolantCoreGeo.dispose();
    coolantCanGeo.dispose();
    coolantCapGeo.dispose();
    coolantCoreCylGeo.dispose();
    coolantSnowArmGeo.dispose();
    appleGeo.dispose();
    appleLeafGeo.dispose();
    appleStemGeo.dispose();
    appleHighlightGeo.dispose();
    powerCapsuleGeo.dispose();
    powerPrismGeo.dispose();
    powerShieldGeo.dispose();
    powerFinGeo.dispose();
    powerStripeGeo.dispose();
    powerTripleBarrelGeo.dispose();
    powerCrownSpikeGeo.dispose();
    powerCrownBandGeo.dispose();
    trashBodyGeo.dispose();
    trashLidGeo.dispose();
    trashRidgeGeo.dispose();
    trashHandleGeo.dispose();
    regiBodyGeo.dispose();
    eyeGeo.dispose();
    eyeWhiteGeo.dispose();
    eyePupilGeo.dispose();
    regiLegGeo.dispose();
    gremlinGeo.dispose();
    gremlinCoreGeo.dispose();
    gremlinSpikeGeo.dispose();
    spyGeo.dispose();
    spyShellGeo.dispose();
    spyRingGeo.dispose();
    spyPupilGeo.dispose();
    watchdogBaseGeo.dispose();
    watchdogHeadGeo.dispose();
    watchdogBarrelGeo.dispose();
    stickyGeo.dispose();
    floppyBodyGeo.dispose();
    floppyLabelGeo.dispose();
    floppyShutterGeo.dispose();
    floppyHoleGeo.dispose();
    floppyNotchGeo.dispose();
    empRingGeo.dispose();
    floorGeo.dispose();

    // Shared materials.
    cursorMat.dispose();
    folderMat.dispose();
    folderTabMat.dispose();
    folderSlotMat.dispose();
    lockMat.dispose();
    outlineMat.dispose();
    glowYellowMat.dispose();
    glowCyanMat.dispose();
    glowOrangeMat.dispose();
    glowBlueMat.dispose();
    glowPinkMat.dispose();
    glowRedMat.dispose();
    trailYellowMat.dispose();
    trailCyanMat.dispose();
    projectileMat.dispose();
    projectileWatchdogMat.dispose();
    clutterMat.dispose();
    appleMat.dispose();
    appleStemMat.dispose();
    appleHighlightMat.dispose();
    leafMat.dispose();
    coolantMat.dispose();
    coolantCoreMat.dispose();
    coolantCapMat.dispose();
    coolantSnowMat.dispose();
    powerRapidMat.dispose();
    powerTripleMat.dispose();
    powerGiantMat.dispose();
    trashMat.dispose();
    trashLidMat.dispose();
    trashDarkMat.dispose();
    regiMat.dispose();
    regiShellMat.dispose();
    regiLegMat.dispose();
    eyeWhiteMat.dispose();
    pupilMat.dispose();
    gremlinMat.dispose();
    gremlinCoreMat.dispose();
    gremlinSpikeMat.dispose();
    spyMat.dispose();
    spyShellMat.dispose();
    spyRingMat.dispose();
    spyPupilMat.dispose();
    eyeMat.dispose();
    watchdogBaseMat.dispose();
    watchdogHeadMat.dispose();
    watchdogBarrelMat.dispose();
    stickyMat.dispose();
    floppyBodyMat.dispose();
    floppyLabelMat.dispose();
    floppyShutterMat.dispose();
    floppyHoleMat.dispose();
    hpBackMat.dispose();
    hpEdgeMat.dispose();
    bgMat.dispose();
    shadowMat.dispose();
    empRing.material.dispose();

    if (bgTex) bgTex.dispose?.();
    if (glowAlphaTex) glowAlphaTex.dispose?.();
    if (trailAlphaTex) trailAlphaTex.dispose?.();

    renderer.dispose();
  }

  return { render, resize, dispose };
}
