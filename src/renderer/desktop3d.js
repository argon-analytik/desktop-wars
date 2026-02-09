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
  const lockGeo = new THREE.BoxGeometry(12, 10, 3);

  const projectileGeo = new THREE.SphereGeometry(4, 12, 12);
  const clutterGeo = new THREE.PlaneGeometry(16, 12);
  const coolantGeo = new THREE.BoxGeometry(14, 14, 14);
  const appleGeo = new THREE.SphereGeometry(8, 16, 16);
  const appleLeafGeo = new THREE.BoxGeometry(4, 2, 2);
  const powerCapsuleGeo = new THREE.CapsuleGeometry(5, 10, 6, 12);
  const powerPrismGeo = makeRoundedExtrudeGeometry(14, 10, 6, 2);
  const powerShieldGeo = makeRoundedExtrudeGeometry(16, 18, 6, 6);

  const trashBodyGeo = new THREE.CylinderGeometry(12, 10, 22, 18, 1, false);
  const trashLidGeo = new THREE.CylinderGeometry(13, 13, 4, 18, 1, false);

  const regiBodyGeo = makeRoundedExtrudeGeometry(42, 28, 12, 6);
  const eyeGeo = new THREE.SphereGeometry(2.3, 10, 10);
  const gremlinGeo = new THREE.IcosahedronGeometry(14, 0);
  const spyGeo = new THREE.SphereGeometry(10, 18, 18);
  const spyPupilGeo = new THREE.SphereGeometry(3.2, 12, 12);

  const watchdogBaseGeo = new THREE.CylinderGeometry(10, 12, 10, 16);
  const watchdogHeadGeo = makeRoundedExtrudeGeometry(18, 12, 10, 4);
  const watchdogBarrelGeo = new THREE.CylinderGeometry(2, 2, 10, 10);
  const stickyGeo = makeRoundedExtrudeGeometry(16, 12, 3, 2);

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
  const lockMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#f2c94c'),
    roughness: 0.35,
    metalness: 0.2,
    emissive: pickColorHex('#6a4b00'),
    emissiveIntensity: 0.18,
  });
  const projectileMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#fff2a8'),
    roughness: 0.25,
    metalness: 0.05,
    emissive: pickColorHex('#ffd35a'),
    emissiveIntensity: 0.55,
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

  const regiMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#e9d9c6'),
    roughness: 0.75,
    metalness: 0.0,
  });
  const gremlinMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#ff6b7a'),
    roughness: 0.35,
    metalness: 0.05,
    emissive: pickColorHex('#b4002f'),
    emissiveIntensity: 0.55,
  });
  const spyMat = new THREE.MeshStandardMaterial({
    color: pickColorHex('#ff3b3b'),
    roughness: 0.15,
    metalness: 0.25,
    emissive: pickColorHex('#550000'),
    emissiveIntensity: 0.25,
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

  const wallBaseColor = pickColorHex('#d4a456');

  // Static meshes.
  const cursor = new THREE.Mesh(cursorGeo, cursorMat);
  cursor.castShadow = !automationMode;
  cursor.receiveShadow = false;
  scene.add(cursor);

  const systemFolder = new THREE.Group();
  const folderTab = new THREE.Mesh(folderTabGeo, folderTabMat);
  folderTab.castShadow = !automationMode;
  folderTab.position.set(0, -10, 6);
  const folderBody = new THREE.Mesh(folderBodyGeo, folderMat);
  folderBody.castShadow = !automationMode;
  folderBody.position.set(0, 0, 8);
  const folderLock = new THREE.Mesh(lockGeo, lockMat);
  folderLock.castShadow = !automationMode;
  folderLock.position.set(0, 6, 14);
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
    lockMat,
    projectileMat,
    clutterMat,
    appleMat,
    leafMat,
    coolantMat,
    powerRapidMat,
    powerTripleMat,
    powerGiantMat,
    trashMat,
    trashLidMat,
    regiMat,
    gremlinMat,
    spyMat,
    spyPupilMat,
    eyeMat,
    watchdogBaseMat,
    watchdogHeadMat,
    watchdogBarrelMat,
    stickyMat,
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
    const lid = new THREE.Mesh(trashLidGeo, trashLidMat);
    lid.castShadow = !automationMode;
    lid.position.set(0, -11, 0);
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
    const head = new THREE.Mesh(watchdogHeadGeo, watchdogHeadMat);
    head.castShadow = !automationMode;
    head.position.set(0, 0, 8);
    const barrel = new THREE.Mesh(watchdogBarrelGeo, watchdogBarrelMat);
    barrel.castShadow = !automationMode;
    barrel.rotation.z = Math.PI / 2;
    barrel.position.set(9, 0, 10);
    g.add(base);
    g.add(head);
    g.add(barrel);
    scene.add(g);
    deployables.set(id, g);
    return g;
  }

  function ensureSticky(id) {
    let m = deployables.get(id);
    if (m) return m;
    m = new THREE.Mesh(stickyGeo, stickyMat);
    m.castShadow = !automationMode;
    scene.add(m);
    deployables.set(id, m);
    return m;
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
      const body = new THREE.Mesh(regiBodyGeo, regiMat.clone());
      body.userData.baseEmissiveIntensity = 0.0;
      body.castShadow = !automationMode;
      const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
      eyeL.castShadow = !automationMode;
      eyeL.position.set(-6, -2, 9);
      const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
      eyeR.castShadow = !automationMode;
      eyeR.position.set(6, -2, 9);
      g.add(body, eyeL, eyeR);
    } else if (type === 'popup-gremlin') {
      const body = new THREE.Mesh(gremlinGeo, gremlinMat.clone());
      body.userData.baseEmissiveIntensity = 0.55;
      body.castShadow = !automationMode;
      g.add(body);
    } else if (type === 'spy-dot') {
      const body = new THREE.Mesh(spyGeo, spyMat.clone());
      body.userData.baseEmissiveIntensity = 0.25;
      body.castShadow = !automationMode;
      const pupil = new THREE.Mesh(spyPupilGeo, spyPupilMat);
      pupil.castShadow = !automationMode;
      pupil.position.set(0, 0, 10);
      g.add(body, pupil);
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
      const leaf = new THREE.Mesh(appleLeafGeo, leafMat);
      leaf.castShadow = !automationMode;
      leaf.position.set(3, -8, 6);
      g.add(body, leaf);
    } else if (type === 'coolant') {
      const cube = new THREE.Mesh(coolantGeo, coolantMat);
      cube.castShadow = !automationMode;
      g.add(cube);
    } else if (type === 'powerup-rapid') {
      const cap = new THREE.Mesh(powerCapsuleGeo, powerRapidMat);
      cap.castShadow = !automationMode;
      g.add(cap);
    } else if (type === 'powerup-triple') {
      const prism = new THREE.Mesh(powerPrismGeo, powerTripleMat);
      prism.castShadow = !automationMode;
      g.add(prism);
    } else if (type === 'powerup-giant') {
      const shield = new THREE.Mesh(powerShieldGeo, powerGiantMat);
      shield.castShadow = !automationMode;
      g.add(shield);
    } else {
      const body = new THREE.Mesh(powerCapsuleGeo, powerRapidMat);
      body.castShadow = !automationMode;
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

      if (e.type === 'popup-gremlin') {
        const f = Number.isFinite(e.frame) ? e.frame : 0;
        const bounce = Math.sin(f * 3) * 4;
        const wobble = (Math.sin(f * 5) * 8 * Math.PI) / 180;
        const scale = 1 + Math.sin(f * 4) * 0.15;
        g.position.y += bounce;
        g.rotation.z = wobble;
        g.scale.setScalar(scale);
      } else if (e.type === 'regi-mite') {
        const f = Number.isFinite(e.frame) ? e.frame : 0;
        const bob = Math.sin(f * 0.8) * 1.5;
        g.position.y += bob;
        g.rotation.z = 0;
        g.scale.setScalar(1);
      } else if (e.type === 'spy-dot') {
        g.rotation.z = 0;
        g.scale.setScalar(1);
        const pupil = g.children?.find?.((c) => c.geometry === spyPupilGeo) || null;
        const blink = Math.sin((state.totalTime || 0) * 9) > 0.7 ? 0.25 : 1;
        if (pupil) pupil.scale.setScalar(blink);
      }

      // Hit / stunned feedback.
      const stunned = Number.isFinite(e.stunned) ? e.stunned : 0;
      const isHit = !!e.isHit;
      g.traverse((child) => {
        if (!child.isMesh) return;
        if (!child.material || Array.isArray(child.material)) return;
        if ('opacity' in child.material) {
          child.material.transparent = true;
          child.material.opacity = stunned > 0 ? 0.65 : 1.0;
        }
        if ('emissive' in child.material) {
          const base = Number.isFinite(child.userData.baseEmissiveIntensity) ? child.userData.baseEmissiveIntensity : child.material.emissiveIntensity || 0;
          child.material.emissiveIntensity = base + (isHit ? 0.35 : 0.0);
        }
      });

      if (e.flipX) g.scale.x = -Math.abs(g.scale.x || 1);
      else g.scale.x = Math.abs(g.scale.x || 1);
    }
    cleanupMap(enemies, enemyIds);

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
    }
    cleanupMap(pickups, pickupIds);

    // Projectiles.
    const projIds = new Set();
    for (const p of state.projectiles || []) {
      const id = p.id;
      projIds.add(id);
      const m = ensureProjectile(id);
      m.position.set(p.x, p.y, 10);
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
    lockGeo.dispose();
    projectileGeo.dispose();
    clutterGeo.dispose();
    coolantGeo.dispose();
    appleGeo.dispose();
    appleLeafGeo.dispose();
    powerCapsuleGeo.dispose();
    powerPrismGeo.dispose();
    powerShieldGeo.dispose();
    trashBodyGeo.dispose();
    trashLidGeo.dispose();
    regiBodyGeo.dispose();
    eyeGeo.dispose();
    gremlinGeo.dispose();
    spyGeo.dispose();
    spyPupilGeo.dispose();
    watchdogBaseGeo.dispose();
    watchdogHeadGeo.dispose();
    watchdogBarrelGeo.dispose();
    stickyGeo.dispose();
    empRingGeo.dispose();
    floorGeo.dispose();

    // Shared materials.
    cursorMat.dispose();
    folderMat.dispose();
    folderTabMat.dispose();
    lockMat.dispose();
    projectileMat.dispose();
    clutterMat.dispose();
    appleMat.dispose();
    leafMat.dispose();
    coolantMat.dispose();
    powerRapidMat.dispose();
    powerTripleMat.dispose();
    powerGiantMat.dispose();
    trashMat.dispose();
    trashLidMat.dispose();
    regiMat.dispose();
    gremlinMat.dispose();
    spyMat.dispose();
    spyPupilMat.dispose();
    eyeMat.dispose();
    watchdogBaseMat.dispose();
    watchdogHeadMat.dispose();
    watchdogBarrelMat.dispose();
    stickyMat.dispose();
    bgMat.dispose();
    shadowMat.dispose();
    empRing.material.dispose();

    if (bgTex) bgTex.dispose?.();

    renderer.dispose();
  }

  return { render, resize, dispose };
}
