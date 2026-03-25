import NavBar from "../../../navigation_templates/NavBar";
import Footer from "../../helpers/Footer";
import { FaArrowRight, FaXmark, FaCircle } from "react-icons/fa6";

/* ─── only overrides that can't live in the global sheet ─── */
const extraCSS = `
  /* hero: 2-col on desktop, 1-col on mobile */
  @media (min-width: 1025px) {
    .about-hero       { grid-template-columns: 1.25fr 0.75fr !important; }
    .about-grid-2     { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
    .about-use-grid   { grid-template-columns: repeat(3, minmax(0,1fr)) !important; }
    .faq-grid         { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
    .about-aside-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .about-hero       { grid-template-columns: 1fr !important; }
    .about-grid-2     { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
    .about-use-grid   { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
    .faq-grid         { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
    .about-aside-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
  }

  /* roadmap track line */
  .roadmap-track::before {
    content: "";
    position: absolute;
    left: 50%; top: 0; bottom: 0;
    border-left: 1px dashed rgba(141,255,196,0.22);
    transform: translateX(-50%);
  }
  .roadmap-node {
    position: relative; z-index: 1;
    margin-top: 1rem;
    color: var(--accent-3);
    font-size: 0.72rem;
    background: var(--bg-1);
    border-radius: 999px;
  }
  .roadmap-end {
    display: flex; align-items: flex-start;
    justify-content: center;
    padding-top: 1rem;
    color: var(--accent-3); opacity: 0.9; font-size: 0.95rem;
  }

  /* mobile roadmap */
  @media (max-width: 768px) {
    .roadmap-item {
      grid-template-columns: 1fr !important;
      gap: 0.45rem !important;
      padding-left: 0.95rem;
      position: relative;
    }
    .roadmap-track, .roadmap-end { display: none; }
    .roadmap-item::before {
      content: "";
      position: absolute;
      left: 0.24rem; top: 1.9rem; bottom: -0.7rem;
      border-left: 1px dashed rgba(141,255,196,0.22);
    }
    .roadmap-item::after {
      content: "";
      position: absolute;
      left: 0.11rem; top: 1.15rem;
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--accent-3);
      box-shadow: 0 0 0 3px rgba(141,255,196,0.08);
    }
    .roadmap-item:last-child::before { bottom: 1.2rem; }
    .about-aside-grid { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 520px) {
    .about-aside-grid { grid-template-columns: 1fr !important; }
  }
`;

/* ─── shared inline style objects ─── */
const shellW  = { width: "min(96%, 1300px)" };
const gridGap = { display: "grid", gap: "clamp(0.85rem, 1.5vw, 1.1rem)" };

const sectionTitle = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(1.35rem, 2vw, 2rem)",
  lineHeight: 1.08,
  color: "var(--text-main)",
  margin: "0.2rem 0 0.8rem",
  letterSpacing: "0.03em",
};

const leadText = {
  color: "var(--text-soft)",
  lineHeight: 1.75,
  fontSize: "clamp(1rem, 1.25vw, 1.12rem)",
  margin: 0,
};

const compactText = {
  color: "var(--text-muted)",
  lineHeight: 1.68,
  margin: 0,
  fontSize: "clamp(0.88rem, 1.05vw, 0.96rem)",
};

/* small inner card — reuses glass look but lighter */
const miniCard = {
  padding: "1rem",
  borderRadius: "var(--radius-lg)",
  border: "1px solid var(--border-ghost)",
  background: "var(--surface)",
};

const useCases = [
  { title: "CERN & high-energy physics",    accent: "signals",      desc: "Statistical methods are essential when extracting meaningful signals from detector noise, collision products, and rare-event distributions." },
  { title: "Nuclear and particle experiments", accent: "uncertainty", desc: "From spectra to uncertainty estimation, the language of probability is inseparable from experimental physics." },
  { title: "Medical imaging",               accent: "reconstruction", desc: "Reconstruction, denoising, inference, and classification all rely on probabilistic thinking and statistical regularization." },
  { title: "Finance and risk",              accent: "risk",          desc: "Returns, volatility, tail events, and portfolio behavior are interpreted through distributions, fluctuations, and expectation values." },
  { title: "Climate and Earth systems",     accent: "ensembles",     desc: "Large-scale systems are studied through ensembles, fluctuations, and uncertainty-aware modeling." },
  { title: "Machine learning",              accent: "learning",      desc: "Optimization, loss landscapes, regularization, sampling, and generative modeling all borrow deeply from statistical ideas." },
];

const milestones = [
  { year: "1850s–1870s", title: "The statistical view of nature",       text: "Clausius, Maxwell, and Boltzmann helped formalize the idea that macroscopic laws can emerge from microscopic motion and probability." },
  { year: "1900–1930s",  title: "Quantum statistics takes shape",        text: "Planck's quantization, then Bose–Einstein and Fermi–Dirac statistics, expanded the framework from classical gases to quantum matter." },
  { year: "1950s–1970s", title: "Computation enters the field",          text: "Monte Carlo methods, numerical sampling, and early simulations made it possible to study systems that are analytically intractable." },
  { year: "1980s–2000s", title: "Complex systems and phase transitions",  text: "Researchers pushed statistical mechanics into critical phenomena, disordered systems, and emergent behavior in many-body materials." },
  { year: "2010s–now",   title: "Statistics everywhere",                  text: "Modern data science, AI, inference, network science, and computational physics all lean on the same core ideas: probability, entropy, and structure under uncertainty." },
];

const faqs = [
  { q: "Do I need a strong physics background?",   a: "No. Discreto is designed to build intuition first, then move into the mathematical structure once the ideas feel natural." },
  { q: "Why is statistical mechanics so important?", a: "Because it connects microscopic rules to macroscopic reality. It explains why temperature, entropy, and equilibrium appear as they do." },
  { q: "Is this only for students?",               a: "Not at all. The platform is useful for students, researchers, engineers, and anyone who works with complex systems or probabilistic reasoning." },
  { q: "What makes Discreto different?",           a: "It combines explanation, simulation, and interactive learning instead of treating physics as static text only." },
];

const coreIdeas = [
  ["Microstates and macrostates", "How many hidden configurations can produce the same observable result."],
  ["Entropy",                     "Why disorder, multiplicity, and information are tightly linked."],
  ["Ensembles",                   "How different statistical descriptions are used depending on constraints."],
  ["Fluctuations",                "Why random variation is not a flaw, but part of the model."],
];

export default function About() {
  return (
    <div className="page-container">
      <style>{extraCSS}</style>
      <NavBar />

      <div className="about-scroller">

        {/* ══ HERO CARD ══ */}
        <div className="glass-box" style={{ ...shellW, marginTop: "2.5rem", alignItems: "flex-start", textAlign: "left" }}>
          <span className="section-eyebrow">
            <FaCircle style={{ fontSize: "0.45rem" }} />
            about
          </span>

          <div className="about-hero" style={{ ...gridGap, width: "100%", alignItems: "stretch" }}>

            {/* left — intro text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <h2 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.8rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                margin: 0,
                color: "var(--text-main)",
                maxWidth: "12ch",
              }}>
                A guide to statistical reality.
              </h2>
              <p style={leadText}>
                Discreto is an interactive platform for exploring statistical mechanics,
                thermodynamics, and probabilistic reasoning through visual intuition,
                simulation, and guided learning.
              </p>
              <p style={{ ...compactText, maxWidth: "700px" }}>
                The goal is simple: make hidden structure visible. Instead of starting from
                memorized formulas, the platform starts from physical behavior, patterns,
                and emergent order — then moves toward the underlying mathematics.
              </p>
            </div>

            {/* right — mini cards */}
            <div className="about-aside-grid" style={{ ...gridGap }}>
              {[
                { kicker: "scope",    h: "From particles to populations",  p: "Discreto bridges microscopic states, macroscopic observables, and computational intuition." },
                { kicker: "style",    h: "Research-lab aesthetic",          p: "Dark glass UI, clean hierarchy, and motion that supports understanding." },
                { kicker: "learning", h: "See, then reason",                p: "Concepts are introduced visually, then reinforced with guided explanations and quizzes." },
                { kicker: "core",     h: "Entropy and information",         p: "At the center is the idea that probability is not noise; it is structure in disguise." },
              ].map(({ kicker, h, p }) => (
                <div key={kicker} style={miniCard}>
                  <span className="section-eyebrow" style={{ marginBottom: "0.45rem", display: "inline-flex" }}>{kicker}</span>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.96rem", color: "var(--text-main)", margin: "0 0 0.35rem", fontWeight: 700 }}>{h}</h3>
                  <p style={{ ...compactText, fontSize: "0.88rem" }}>{p}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ══ PURPOSE + CORE IDEAS ══ */}
        <div className="about-grid-2" style={{ ...gridGap, ...shellW }}>

          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left" }}>
            <span className="section-eyebrow">purpose</span>
            <h2 style={sectionTitle}>Why this platform exists</h2>
            <p style={leadText}>
              Statistical mechanics is one of the deepest theories in physics because it explains
              how large-scale laws emerge from many small interacting parts. The problem is that
              the subject often feels invisible: too abstract, too compressed, too algebraic.
            </p>
            <p style={{ ...compactText, marginTop: "0.85rem" }}>
              Discreto exists to reduce that distance. It turns ideas such as entropy,
              distributions, fluctuations, ensembles, and equilibrium into something you can
              inspect and feel working in real time.
            </p>
          </div>

          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left" }}>
            <span className="section-eyebrow">what it teaches</span>
            <h2 style={sectionTitle}>Core ideas</h2>
            <div style={{ ...gridGap, marginTop: "0.5rem", width: "100%" }}>
              {coreIdeas.map(([title, desc]) => (
                <div key={title} style={miniCard}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.98rem", color: "var(--text-main)", margin: "0 0 0.3rem", fontWeight: 700 }}>{title}</h3>
                  <p style={compactText}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ══ APPLICATIONS ══ */}
        <div className="glass-box" style={{ ...shellW, alignItems: "flex-start", textAlign: "left" }}>
          <span className="section-eyebrow">applications</span>
          <h2 style={sectionTitle}>Where statistics actually lives</h2>
          <p style={{ ...leadText, maxWidth: "760px" }}>
            Statistical thinking is not only for physics. It appears anywhere uncertainty,
            measurement, inference, sampling, or large system behavior matter.
          </p>

          <div className="about-use-grid" style={{ ...gridGap, marginTop: "0.8rem", width: "100%" }}>
            {useCases.map((item) => (
              <div key={item.title} style={{ ...miniCard, display: "flex", flexDirection: "column", gap: "0.55rem", minHeight: "140px" }}>
                <span className="section-eyebrow">{item.accent}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", color: "var(--text-main)", margin: 0, fontWeight: 700 }}>{item.title}</h3>
                <p style={{ ...compactText, fontSize: "0.9rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ ROADMAP ══ */}
        <div className="glass-box" style={{ ...shellW, alignItems: "flex-start", textAlign: "left" }}>
          <span className="section-eyebrow">milestones</span>
          <h2 style={sectionTitle}>A short history of statistical mechanics</h2>
          <p style={{ ...leadText, maxWidth: "770px" }}>
            The field evolved slowly and then suddenly became central to physics, chemistry,
            materials science, and computation.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginTop: "1rem", width: "100%" }}>
            {milestones.map((m, idx) => (
              <div
                key={m.year}
                className="roadmap-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 26px minmax(0,1fr) 24px",
                  gap: "0.9rem",
                  alignItems: "start",
                  position: "relative",
                }}
              >
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent-3)",
                  opacity: 0.92,
                  whiteSpace: "nowrap",
                  paddingTop: "0.95rem",
                }}>
                  {m.year}
                </div>

                <div className="roadmap-track" style={{ position: "relative", minHeight: "100%", display: "flex", justifyContent: "center" }}>
                  <FaCircle className="roadmap-node" />
                </div>

                <div style={{ ...miniCard }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.98rem", color: "var(--text-main)", margin: "0 0 0.35rem", fontWeight: 700 }}>{m.title}</h3>
                  <p style={compactText}>{m.text}</p>
                </div>

                <div className="roadmap-end">
                  {idx < milestones.length - 1 ? <FaArrowRight /> : <FaXmark />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ FAQ ══ */}
        <div className="glass-box" style={{ ...shellW, alignItems: "flex-start", textAlign: "left", marginBottom: "2rem" }}>
          <span className="section-eyebrow">faq</span>
          <h2 style={sectionTitle}>Questions people often ask</h2>

          <div className="faq-grid" style={{ ...gridGap, marginTop: "0.5rem", width: "100%" }}>
            {faqs.map((item) => (
              <div key={item.q} style={miniCard}>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.98rem", color: "var(--text-main)", margin: "0 0 0.4rem", fontWeight: 700 }}>{item.q}</p>
                <p style={{ ...compactText, fontSize: "0.92rem" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}