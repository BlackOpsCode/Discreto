import { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";

/* ─── constants ─── */
const BASE_COLORS  = ["#1ee6a8", "#66ff88", "#39c48a"];
const BASE_SIZES   = [0.9, 1.1, 1.4];
const BASE_SPEEDS  = [0.008, 0.014, 0.02];

const PRESETS = [
  { id: "even",       label: "All Even",    desc: "Equal sizes, speeds & colors → minimum entropy" },
  { id: "sameSize",   label: "Same Size",   desc: "Uniform sizes only" },
  { id: "sameSpeed",  label: "Same Speed",  desc: "Uniform speeds only" },
  { id: "sameColor",  label: "Same Color",  desc: "Uniform colors only" },
  { id: "random",     label: "Max Chaos",   desc: "All properties randomized → maximum entropy" },
];

/* ─── helpers ─── */
function histEntropy(values = [], nbins = 10) {
  if (!values.length) return 0;
  let mn = Infinity, mx = -Infinity;
  for (const v of values) { if (v < mn) mn = v; if (v > mx) mx = v; }
  if (mn === mx) return 0;
  const bins = new Array(nbins).fill(0);
  const range = mx - mn;
  for (const v of values) {
    let idx = Math.floor(((v - mn) / range) * nbins);
    if (idx >= nbins) idx = nbins - 1;
    bins[idx]++;
  }
  const probs = bins.map(c => c / values.length).filter(p => p > 0);
  const S = -probs.reduce((a, p) => a + p * Math.log(p), 0);
  const Smax = Math.log(nbins);
  return Smax === 0 ? 0 : S / Smax;
}

function computeEntropy(particles) {
  const speeds = particles.map(p => p.userData.velocity.length());
  const sizes  = particles.map(p => p.scale.x);
  const hues   = particles.map(p => { const h = {}; p.material.color.getHSL(h); return h.h || 0; });
  return Math.min(1, Math.max(0, (histEntropy(speeds, 12) + histEntropy(sizes, 8) + histEntropy(hues, 12)) / 3));
}

/* ─── Entropy Ring ─── */
function EntropyRing({ value = 0 }) {
  const pct  = Math.round(value * 100);
  const size = 96, stroke = 9;
  const r    = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = circ * value;
  const label = pct < 20 ? "Ordered" : pct < 50 ? "Low chaos" : pct < 80 ? "Disordered" : "Max chaos";
  const color = pct < 20 ? "var(--accent)" : pct < 50 ? "var(--accent-2)" : pct < 80 ? "var(--warm)" : "#ff7b7b";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="eg" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#b8ffd4"/>
            <stop offset="100%" stopColor="#0bb96f"/>
          </linearGradient>
        </defs>
        <g transform={`translate(${size/2},${size/2})`}>
          <circle r={r} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={stroke}
            strokeLinecap="round" transform="rotate(-90)"/>
          <circle r={r} fill="none" stroke="url(#eg)" strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ - dash}`}
            transform="rotate(-90)"
            style={{ transition: "stroke-dasharray 350ms ease" }}
          />
          <text textAnchor="middle" dominantBaseline="central"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "16px", fontWeight: 700, fill: color, transition: "fill 0.3s ease" }}>
            {pct}%
          </text>
        </g>
      </svg>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.62rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color,
        transition: "color 0.3s ease",
      }}>{label}</span>
    </div>
  );
}

/* ─── Slider ─── */
function Slider({ label, value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.82rem", color: "var(--text-soft)" }}>{label}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "var(--accent-2)" }}>
          {Math.round(value * 100)}%
        </span>
      </div>
      <input
        type="range" min="0" max="1" step="0.01" value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: "100%", accentColor: "var(--accent)", cursor: "pointer", height: "4px" }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function BoltzmannEntropyGauge({ totalParticles = 120 }) {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const animRef    = useRef(null);
  const particlesRef = useRef([]);
  const cameraRef  = useRef(null);
  const controlsRef = useRef(null);

  const [sizeRand,  setSizeRand]  = useState(0.05);
  const [speedRand, setSpeedRand] = useState(0.05);
  const [colorRand, setColorRand] = useState(0.05);
  const [entropy,   setEntropy]   = useState(0);
  const [activePreset, setActivePreset] = useState(null);

  /* ── init scene ── */
  useEffect(() => {
    if (!mountRef.current) return;
    mountRef.current.innerHTML = "";

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030e07);

    const camera = new THREE.PerspectiveCamera(60,
      mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.4, 3.8);
    cameraRef.current = camera;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      rendererRef.current = renderer;
      mountRef.current.appendChild(renderer.domElement);
    } catch {
      mountRef.current.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);">WebGL unavailable</div>`;
      return;
    }

    scene.add(new THREE.AmbientLight(0x66ffb8, 0.28));
    const pt = new THREE.PointLight(0x66ffb8, 0.9);
    pt.position.set(0, 2.2, 2);
    scene.add(pt);

    const box = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshBasicMaterial({ color: 0x0b6b49, wireframe: true, transparent: true, opacity: 0.07 })
    );
    scene.add(box);

    const geo = new THREE.SphereGeometry(0.03, 12, 12);
    const particles = [];
    for (let i = 0; i < totalParticles; i++) {
      const t = i % 3;
      const mat = new THREE.MeshStandardMaterial({
        color: BASE_COLORS[t], emissive: 0x002210, metalness: 0.12, roughness: 0.6,
      });
      const m = new THREE.Mesh(geo, mat);
      m.position.set((Math.random()-0.5)*1.8, (Math.random()-0.5)*1.8, (Math.random()-0.5)*1.8);
      m.userData = {
        velocity: new THREE.Vector3((Math.random()-0.5)*0.01, (Math.random()-0.5)*0.01, (Math.random()-0.5)*0.01),
        type: t,
      };
      const s = BASE_SIZES[t];
      m.scale.set(s, s, s);
      scene.add(m);
      particles.push(m);
    }
    particlesRef.current = particles;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    let lastEnt = 0;
    const animate = (t) => {
      animRef.current = requestAnimationFrame(animate);
      for (const p of particles) {
        p.position.add(p.userData.velocity);
        for (const ax of ["x","y","z"]) {
          if (Math.abs(p.position[ax]) > 0.95) {
            p.userData.velocity[ax] *= -1;
            p.position[ax] = Math.sign(p.position[ax]) * 0.95;
          }
        }
      }
      if (t - lastEnt > 150) { lastEnt = t; setEntropy(computeEntropy(particles)); }
      controls.update();
      renderer.render(scene, camera);
    };
    animRef.current = requestAnimationFrame(animate);

    const onResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animRef.current);
      controls.dispose();
      particles.forEach(p => { try { p.geometry.dispose(); p.material.dispose(); } catch {} });
      try { box.geometry.dispose(); box.material.dispose(); } catch {}
      try { renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); } catch {}
      particlesRef.current = [];
      rendererRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── apply type distribution ── */
  const applyDistribution = useCallback((srz = sizeRand, spd = speedRand, clr = colorRand, counts = null) => {
    const arr = particlesRef.current;
    if (!arr.length) return;
    const eq = Math.floor(totalParticles / 3);
    const c  = counts || [eq, eq, totalParticles - 2*eq];
    let ptr = 0;
    for (let t = 0; t < 3; t++) {
      for (let k = 0; k < c[t] && ptr < arr.length; k++, ptr++) {
        const p = arr[ptr];
        const base = new THREE.Color(BASE_COLORS[t]);
        const hsl = {}; base.getHSL(hsl);
        const newH = ((hsl.h + (Math.random()-0.5)*clr*0.2) + 1) % 1;
        const col = new THREE.Color().setHSL(newH, Math.min(1, hsl.s + (Math.random()-0.5)*0.1), hsl.l);
        gsap.to(p.material.color, { r: col.r, g: col.g, b: col.b, duration: 0.65 });
        const ns = BASE_SIZES[t] * (1 + (Math.random()-0.5)*srz);
        gsap.to(p.scale, { x: ns, y: ns, z: ns, duration: 0.65 });
        const dir = p.userData.velocity.length() > 1e-6
          ? p.userData.velocity.clone().normalize()
          : new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).normalize();
        const nv = dir.multiplyScalar(BASE_SPEEDS[t] * (1 + (Math.random()-0.5)*spd));
        gsap.to(p.userData.velocity, { x: nv.x, y: nv.y, z: nv.z, duration: 0.65 });
        p.userData.type = t;
      }
    }
  }, [sizeRand, speedRand, colorRand, totalParticles]);

  /* ── preset handlers ── */
  const handlePreset = useCallback((id) => {
    setActivePreset(id);
    const arr = particlesRef.current;
    const eq = Math.floor(totalParticles / 3);

    if (id === "even") {
      const avg = new THREE.Color(BASE_COLORS[0]).clone()
        .lerp(new THREE.Color(BASE_COLORS[1]), 0.5)
        .lerp(new THREE.Color(BASE_COLORS[2]), 0.5);
      const ms = (BASE_SIZES[0]+BASE_SIZES[1]+BASE_SIZES[2])/3;
      const mv = (BASE_SPEEDS[0]+BASE_SPEEDS[1]+BASE_SPEEDS[2])/3;
      arr.forEach(p => {
        gsap.to(p.material.color, { r: avg.r, g: avg.g, b: avg.b, duration: 0.75 });
        gsap.to(p.scale, { x: ms, y: ms, z: ms, duration: 0.75 });
        const dir = p.userData.velocity.length() > 1e-6
          ? p.userData.velocity.clone().normalize()
          : new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).normalize();
        const nv = dir.multiplyScalar(mv);
        gsap.to(p.userData.velocity, { x: nv.x, y: nv.y, z: nv.z, duration: 0.75 });
      });
    }

    if (id === "sameSize") {
      const ms = (BASE_SIZES[0]+BASE_SIZES[1]+BASE_SIZES[2])/3;
      arr.forEach(p => gsap.to(p.scale, { x: ms, y: ms, z: ms, duration: 0.75 }));
    }

    if (id === "sameSpeed") {
      const mv = (BASE_SPEEDS[0]+BASE_SPEEDS[1]+BASE_SPEEDS[2])/3;
      arr.forEach(p => {
        const dir = p.userData.velocity.length() > 1e-6
          ? p.userData.velocity.clone().normalize()
          : new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).normalize();
        const nv = dir.multiplyScalar(mv);
        gsap.to(p.userData.velocity, { x: nv.x, y: nv.y, z: nv.z, duration: 0.75 });
      });
    }

    if (id === "sameColor") {
      const avg = new THREE.Color(BASE_COLORS[0]).clone()
        .lerp(new THREE.Color(BASE_COLORS[1]), 0.5)
        .lerp(new THREE.Color(BASE_COLORS[2]), 0.5);
      arr.forEach(p => gsap.to(p.material.color, { r: avg.r, g: avg.g, b: avg.b, duration: 0.75 }));
    }

    if (id === "random") {
      setSizeRand(1); setSpeedRand(1); setColorRand(1);
      setTimeout(() => {
        arr.forEach(p => {
          const t = Math.floor(Math.random()*3);
          const base = new THREE.Color(BASE_COLORS[t]);
          const hsl = {}; base.getHSL(hsl);
          const nh = ((hsl.h + (Math.random()-0.5)) + 1) % 1;
          const col = new THREE.Color().setHSL(nh, Math.random()*0.6+0.4, hsl.l);
          gsap.to(p.material.color, { r: col.r, g: col.g, b: col.b, duration: 0.75 });
          const ns = BASE_SIZES[t] * (0.3 + Math.random()*2.4);
          gsap.to(p.scale, { x: ns, y: ns, z: ns, duration: 0.75 });
          const dir = new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, Math.random()-0.5).normalize();
          const nv = dir.multiplyScalar(BASE_SPEEDS[t] * (0.2 + Math.random()*4));
          gsap.to(p.userData.velocity, { x: nv.x, y: nv.y, z: nv.z, duration: 0.75 });
          p.userData.type = t;
        });
      }, 60);
    }
  }, [totalParticles]);

  /* ── re-apply when sliders change ── */
  useEffect(() => {
    if (activePreset && activePreset !== "random") applyDistribution();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeRand, speedRand, colorRand]);

  const miniCard = {
    padding: "0.9rem 1rem",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--border-ghost)",
    background: "var(--surface)",
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>

      {/* ── CANVAS ── */}
      <div style={{ position: "relative", width: "100%", borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1px solid var(--border-soft)", boxShadow: "var(--shadow-lg), var(--shadow-glow)" }}>
        <div
          ref={mountRef}
          style={{ width: "100%", aspectRatio: "16/7", minHeight: "260px", maxHeight: "520px" }}
        />

        {/* entropy ring overlay */}
        <div style={{
          position: "absolute", top: "1rem", right: "1rem",
          padding: "0.85rem 1rem",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border-soft)",
          background: "rgba(3,7,5,0.72)",
          backdropFilter: "blur(12px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.3rem",
        }}>
          <EntropyRing value={entropy} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
          }}>
            S = k·ln Ω
          </span>
        </div>

        {/* drag hint */}
        <div style={{
          position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.12em",
          color: "var(--text-dim)",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}>
          drag to orbit · scroll to zoom
        </div>
      </div>

      {/* ── CONTROLS GRID ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "0.9rem",
      }}>

        {/* presets */}
        <div style={{ ...miniCard, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          <span className="section-eyebrow" style={{ marginBottom: "0.1rem" }}>presets</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
            {PRESETS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handlePreset(id)}
                style={{
                  padding: "0.45rem 0.9rem",
                  borderRadius: "999px",
                  border: `1px solid ${activePreset === id ? "var(--border-strong)" : "var(--border-soft)"}`,
                  background: activePreset === id ? "rgba(141,255,196,0.1)" : "var(--surface)",
                  color: activePreset === id ? "var(--accent)" : "var(--text-soft)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  transition: "all 0.16s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  if (activePreset !== id) {
                    e.currentTarget.style.borderColor = "var(--border-mid)";
                    e.currentTarget.style.color = "var(--text-main)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={e => {
                  if (activePreset !== id) {
                    e.currentTarget.style.borderColor = "var(--border-soft)";
                    e.currentTarget.style.color = "var(--text-soft)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {label}
              </button>
            ))}
          </div>
          {activePreset && (
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              margin: 0,
              lineHeight: 1.55,
              borderTop: "1px solid var(--border-ghost)",
              paddingTop: "0.5rem",
            }}>
              {PRESETS.find(p => p.id === activePreset)?.desc}
            </p>
          )}
        </div>

        {/* sliders */}
        <div style={{ ...miniCard, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
          <span className="section-eyebrow" style={{ marginBottom: "0.1rem" }}>randomness</span>
          <Slider label="Size variance"  value={sizeRand}  onChange={v => { setSizeRand(v);  setActivePreset(null); }} />
          <Slider label="Speed variance" value={speedRand} onChange={v => { setSpeedRand(v); setActivePreset(null); }} />
          <Slider label="Color variance" value={colorRand} onChange={v => { setColorRand(v); setActivePreset(null); }} />
        </div>

      </div>
    </div>
  );
}