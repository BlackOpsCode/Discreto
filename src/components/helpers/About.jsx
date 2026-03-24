import NavBar from "../../navigation_templates/NavBar";
import Footer from "../helpers/Footer";
import { FaArrowRight, FaXmark, FaCircle } from "react-icons/fa6";

const responsiveCSS = `
  .about-shell {
    width: min(96%, 1300px);
    margin: 0 auto;
  }

  .about-hero {
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    gap: 1.25rem;
    align-items: stretch;
  }

  .about-kicker {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--accent-3);
    opacity: 0.8;
  }

  .about-title {
    font-size: clamp(2rem, 4vw, 3.8rem);
    line-height: 0.98;
    letter-spacing: -0.04em;
    margin: 0.4rem 0 1rem;
    max-width: 12ch;
  }

  .about-lead {
    max-width: 760px;
    color: var(--text-soft);
    line-height: 1.75;
    font-size: clamp(1rem, 1.25vw, 1.12rem);
    margin: 0;
  }

  .about-aside-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;
    height: 100%;
  }

  .about-mini-card {
    padding: 1rem 1rem 0.95rem;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.025);
    min-height: 118px;
  }

  .about-mini-card h3 {
    margin: 0.55rem 0 0.35rem;
    font-size: 0.96rem;
  }

  .about-mini-card p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.6;
    font-size: 0.88rem;
  }

  .about-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .about-section-title {
    margin: 0.2rem 0 0.8rem;
    font-size: clamp(1.35rem, 2vw, 2rem);
    line-height: 1.08;
  }

  .about-paragraph {
    margin: 0;
    color: var(--text-soft);
    line-height: 1.75;
    font-size: clamp(0.96rem, 1.15vw, 1.05rem);
  }

  .about-compact {
    color: var(--text-muted);
    line-height: 1.68;
    margin: 0;
    font-size: 0.94rem;
  }

  .about-use-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.95rem;
    margin-top: 1rem;
  }

  .about-use-card {
    padding: 1.15rem 1.1rem;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.022);
    min-height: 168px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .about-use-card h3 {
    margin: 0;
    font-size: 1rem;
  }

  .about-use-card p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.65;
    font-size: 0.9rem;
  }

  .roadmap {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    margin-top: 1rem;
  }

  .roadmap-item {
    display: grid;
    grid-template-columns: 120px 26px minmax(0, 1fr) 24px;
    gap: 0.9rem;
    align-items: start;
    position: relative;
  }

  .roadmap-year {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent-3);
    opacity: 0.92;
    white-space: nowrap;
    padding-top: 0.95rem;
  }

  .roadmap-track {
    position: relative;
    min-height: 100%;
    display: flex;
    justify-content: center;
  }

  .roadmap-track::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    border-left: 1px dashed rgba(141,255,196,0.22);
    transform: translateX(-50%);
  }

  .roadmap-node {
    position: relative;
    z-index: 1;
    margin-top: 1rem;
    color: var(--accent-3);
    font-size: 0.72rem;
    opacity: 0.95;
    background: #07100b;
    border-radius: 999px;
  }

  .roadmap-card {
    padding: 1rem 1.05rem;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.022);
    min-width: 0;
  }

  .roadmap-card h3 {
    margin: 0 0 0.35rem;
    font-size: 0.98rem;
  }

  .roadmap-card p {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.62;
    font-size: 0.9rem;
  }

  .roadmap-end {
    display: flex;
    align-items: start;
    justify-content: center;
    padding-top: 1rem;
    color: var(--accent-3);
    opacity: 0.9;
    font-size: 0.95rem;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.95rem;
    margin-top: 1rem;
  }

  .faq-card {
    padding: 1.1rem 1.05rem;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.022);
  }

  .faq-q {
    margin: 0 0 0.4rem;
    font-size: 0.98rem;
    color: var(--text-main);
  }

  .faq-a {
    margin: 0;
    color: var(--text-muted);
    line-height: 1.68;
    font-size: 0.92rem;
  }

  @media (max-width: 1024px) {
    .about-hero,
    .about-grid-2,
    .about-use-grid,
    .faq-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .about-shell {
      width: min(94%, 1300px);
    }

    .glass-box.about-shell,
    .glass-box {
      padding: 1rem !important;
    }

    .about-title {
      max-width: 100%;
      font-size: clamp(1.75rem, 9vw, 2.5rem);
    }

    .about-aside-grid {
      grid-template-columns: 1fr 1fr;
      gap: 0.7rem;
    }

    .about-mini-card {
      min-height: 104px;
      padding: 0.92rem 0.9rem;
      border-radius: 16px;
    }

    .about-mini-card h3 {
      font-size: 0.92rem;
    }

    .about-mini-card p {
      font-size: 0.84rem;
    }

    .about-use-card,
    .faq-card,
    .roadmap-card {
      border-radius: 16px;
      padding: 0.95rem 0.95rem;
    }

    .roadmap-item {
      grid-template-columns: 1fr;
      gap: 0.45rem;
      padding-left: 0.95rem;
    }

    .roadmap-year {
      padding-top: 0;
      font-size: 0.7rem;
      letter-spacing: 0.12em;
    }

    .roadmap-track,
    .roadmap-end {
      display: none;
    }

    .roadmap-card {
      position: relative;
    }

    .roadmap-item::before {
      content: "";
      position: absolute;
      left: 0.24rem;
      top: 1.9rem;
      bottom: -0.7rem;
      border-left: 1px dashed rgba(141,255,196,0.22);
    }

    .roadmap-item::after {
      content: "";
      position: absolute;
      left: 0.11rem;
      top: 1.15rem;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent-3);
      box-shadow: 0 0 0 3px rgba(141,255,196,0.08);
    }

    .roadmap-item:last-child::before {
      bottom: 1.2rem;
    }
  }

  @media (max-width: 520px) {
    .about-aside-grid {
      grid-template-columns: 1fr;
    }

    .about-mini-card {
      min-height: auto;
    }

    .roadmap-item {
      padding-left: 0.9rem;
    }

    .faq-q {
      font-size: 0.95rem;
    }

    .faq-a,
    .roadmap-card p,
    .about-use-card p,
    .about-mini-card p,
    .about-compact {
      font-size: 0.88rem;
    }
  }
`;

const useCases = [
  {
    title: "CERN & high-energy physics",
    desc: "Statistical methods are essential when extracting meaningful signals from detector noise, collision products, and rare-event distributions.",
    accent: "signals",
  },
  {
    title: "Nuclear and particle experiments",
    desc: "From spectra to uncertainty estimation, the language of probability is inseparable from experimental physics.",
    accent: "uncertainty",
  },
  {
    title: "Medical imaging",
    desc: "Reconstruction, denoising, inference, and classification all rely on probabilistic thinking and statistical regularization.",
    accent: "reconstruction",
  },
  {
    title: "Finance and risk",
    desc: "Returns, volatility, tail events, and portfolio behavior are interpreted through distributions, fluctuations, and expectation values.",
    accent: "risk",
  },
  {
    title: "Climate and Earth systems",
    desc: "Large-scale systems are studied through ensembles, fluctuations, and uncertainty-aware modeling.",
    accent: "ensembles",
  },
  {
    title: "Machine learning",
    desc: "Optimization, loss landscapes, regularization, sampling, and generative modeling all borrow deeply from statistical ideas.",
    accent: "learning",
  },
];

const milestones = [
  {
    year: "1850s–1870s",
    title: "The statistical view of nature",
    text: "Clausius, Maxwell, and Boltzmann helped formalize the idea that macroscopic laws can emerge from microscopic motion and probability.",
  },
  {
    year: "1900–1930s",
    title: "Quantum statistics takes shape",
    text: "Planck’s quantization, then Bose–Einstein and Fermi–Dirac statistics, expanded the framework from classical gases to quantum matter.",
  },
  {
    year: "1950s–1970s",
    title: "Computation enters the field",
    text: "Monte Carlo methods, numerical sampling, and early simulations made it possible to study systems that are analytically intractable.",
  },
  {
    year: "1980s–2000s",
    title: "Complex systems and phase transitions",
    text: "Researchers pushed statistical mechanics into critical phenomena, disordered systems, and emergent behavior in many-body materials.",
  },
  {
    year: "2010s–now",
    title: "Statistics everywhere",
    text: "Modern data science, AI, inference, network science, and computational physics all lean on the same core ideas: probability, entropy, and structure under uncertainty.",
  },
];

const faqs = [
  {
    q: "Do I need a strong physics background?",
    a: "No. Discreto is designed to build intuition first, then move into the mathematical structure once the ideas feel natural.",
  },
  {
    q: "Why is statistical mechanics so important?",
    a: "Because it connects microscopic rules to macroscopic reality. It explains why temperature, entropy, and equilibrium appear as they do.",
  },
  {
    q: "Is this only for students?",
    a: "Not at all. The platform is useful for students, researchers, engineers, and anyone who works with complex systems or probabilistic reasoning.",
  },
  {
    q: "What makes Discreto different?",
    a: "It combines explanation, simulation, and interactive learning instead of treating physics as static text only.",
  },
];

export default function About() {
  return (
    <div className="page-container">
      <style>{responsiveCSS}</style>
      <NavBar />

      <div className="page-scroller">
        <div className="glass-box about-shell" style={{ marginTop: "2.5rem" }}>
          <span className="section-eyebrow">
            <FaCircle style={{ fontSize: "0.45rem" }} />
            about
          </span>

          <div className="about-hero">
            <div>
              <h2 className="about-title">A guide to statistical reality.</h2>
              <p className="about-lead">
                Discreto is an interactive platform for exploring statistical mechanics,
                thermodynamics, and probabilistic reasoning through visual intuition,
                simulation, and guided learning.
              </p>
              <p className="about-compact" style={{ marginTop: "0.9rem", maxWidth: "700px" }}>
                The goal is simple: make hidden structure visible. Instead of starting from
                memorized formulas, the platform starts from physical behavior, patterns,
                and emergent order — then moves toward the underlying mathematics.
              </p>
            </div>

            <div className="about-aside-grid">
              <div className="about-mini-card">
                <span className="about-kicker">scope</span>
                <h3>From particles to populations</h3>
                <p>Discreto bridges microscopic states, macroscopic observables, and computational intuition.</p>
              </div>
              <div className="about-mini-card">
                <span className="about-kicker">style</span>
                <h3>Research-lab aesthetic</h3>
                <p>Dark glass UI, clean hierarchy, and motion that supports understanding instead of distracting from it.</p>
              </div>
              <div className="about-mini-card">
                <span className="about-kicker">learning</span>
                <h3>See, then reason</h3>
                <p>Concepts are introduced visually, then reinforced with guided explanations and quizzes.</p>
              </div>
              <div className="about-mini-card">
                <span className="about-kicker">core</span>
                <h3>Entropy and information</h3>
                <p>At the center is the idea that probability is not noise; it is structure in disguise.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-shell about-grid-2" style={{ marginTop: "1rem" }}>
          <div className="glass-box">
            <span className="section-eyebrow">purpose</span>
            <h2 className="about-section-title">Why this platform exists</h2>
            <p className="about-paragraph">
              Statistical mechanics is one of the deepest theories in physics because it explains
              how large-scale laws emerge from many small interacting parts. The problem is that
              the subject often feels invisible: too abstract, too compressed, too algebraic.
            </p>
            <p className="about-compact" style={{ marginTop: "0.85rem" }}>
              Discreto exists to reduce that distance. It turns ideas such as entropy,
              distributions, fluctuations, ensembles, and equilibrium into something you can inspect
              and feel working in real time.
            </p>
          </div>

          <div className="glass-box">
            <span className="section-eyebrow">what it teaches</span>
            <h2 className="about-section-title">Core ideas</h2>
            <div style={{ display: "grid", gap: "0.85rem", marginTop: "1rem" }}>
              {[
                ["Microstates and macrostates", "How many hidden configurations can produce the same observable result."],
                ["Entropy", "Why disorder, multiplicity, and information are tightly linked."],
                ["Ensembles", "How different statistical descriptions are used depending on constraints."],
                ["Fluctuations", "Why random variation is not a flaw, but part of the model."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  style={{
                    padding: "1rem 1.05rem",
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.022)",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.35rem", fontSize: "0.98rem" }}>{title}</h3>
                  <p className="about-compact">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-box about-shell" style={{ marginTop: "1rem" }}>
          <span className="section-eyebrow">applications</span>
          <h2 className="about-section-title">Where statistics actually lives</h2>
          <p className="about-paragraph" style={{ maxWidth: "760px" }}>
            Statistical thinking is not only for physics. It appears anywhere uncertainty,
            measurement, inference, sampling, or large system behavior matter.
          </p>

          <div className="about-use-grid">
            {useCases.map((item) => (
              <div className="about-use-card" key={item.title}>
                <span className="about-kicker">{item.accent}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-box about-shell" style={{ marginTop: "1rem" }}>
          <span className="section-eyebrow">milestones</span>
          <h2 className="about-section-title">A short history of statistical mechanics</h2>
          <p className="about-paragraph" style={{ maxWidth: "770px" }}>
            The field evolved slowly and then suddenly became central to physics, chemistry,
            materials science, and computation. These milestones show the arc from theory
            to simulation to modern data-driven science.
          </p>

          <div className="roadmap">
            {milestones.map((m, idx) => (
              <div key={m.year} className="roadmap-item">
                <div className="roadmap-year">{m.year}</div>

                <div className="roadmap-track">
                  <FaCircle className="roadmap-node" />
                </div>

                <div className="roadmap-card">
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>

                <div className="roadmap-end">
                  {idx < milestones.length - 1 ? <FaArrowRight /> : <FaXmark />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-box about-shell" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
          <span className="section-eyebrow">faq</span>
          <h2 className="about-section-title">Questions people often ask</h2>

          <div className="faq-grid">
            {faqs.map((item) => (
              <div className="faq-card" key={item.q}>
                <p className="faq-q">{item.q}</p>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}