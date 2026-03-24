import NavBar from "../navigation_templates/NavBar";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "./helpers/Footer";

const simList = [
  {
    title: "Inspector Particle",
    slug: "inspector-particle",
    description: "Trace individual particle trajectories through phase space. Visualize velocity distributions and collision dynamics in real time.",
    tags: ["Phase Space", "Collisions", "Trajectories"],
    index: "01",
  },
  {
    title: "Boltzmann Codex",
    slug: "boltzmann-codex",
    description: "Explore the Maxwell–Boltzmann speed distribution. Watch how temperature reshapes the energy landscape of a gas ensemble.",
    tags: ["Maxwell–Boltzmann", "Temperature", "Speed Distribution"],
    index: "02",
  },
  {
    title: "Ensemble Nexus",
    slug: "ensemble-nexus",
    description: "Compare microcanonical, canonical, and grand canonical ensembles. Observe how constraints shape macroscopic observables.",
    tags: ["Microcanonical", "Canonical", "Grand Canonical"],
    index: "03",
  },
  {
    title: "Quantum Crowd",
    slug: "quantum-crowd",
    description: "Fermi–Dirac vs Bose–Einstein statistics visualized live. See how quantum identity reshapes occupation numbers at low temperatures.",
    tags: ["Fermi–Dirac", "Bose–Einstein", "Quantum Statistics"],
    index: "04",
  },
  {
    title: "ThermoSync",
    slug: "thermosync",
    description: "Watch a system approach thermal equilibrium. Entropy production and heat flow mapped across interacting subsystems.",
    tags: ["Entropy", "Equilibrium", "Heat Flow"],
    index: "05",
  },
  {
    title: "Fluctuation Verse",
    slug: "fluctuation-verse",
    description: "Probe thermodynamic fluctuations near critical points. Visualize variance in energy and particle number as a system approaches phase transition.",
    tags: ["Fluctuations", "Critical Point", "Phase Transition"],
    index: "06",
  },
  {
    title: "Density Matrix",
    slug: "density-matrix",
    description: "Quantum state tomography made visual. Explore mixed vs pure states, decoherence, and entropy of entanglement.",
    tags: ["Density Matrix", "Decoherence", "Entanglement"],
    index: "07",
  },
  {
    title: "Population Surge",
    slug: "population-surge",
    description: "Many-body population dynamics across energy levels. Watch Boltzmann factors drive occupation probabilities in real time.",
    tags: ["Occupation Numbers", "Energy Levels", "Many-Body"],
    index: "08",
  },
];

export default function Simulation() {
  return (
    <div className="page-container">
      <NavBar />

      <div className="simulation-scroller">

        {/* ── PAGE HEADER ── */}
        <div style={{
          width: "min(96%, 1300px)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.6rem",
          marginBottom: "0.5rem",
        }}>
          <span className="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M5 2.5 L6.2 4.8 L5 4.2 L3.8 4.8 Z" fill="currentColor"/>
            </svg>
            live simulations
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3.6rem)",
            lineHeight: 1.06,
            letterSpacing: "0.06em",
            color: "var(--text-main)",
            margin: 0,
          }}>
            Simulation Lab
          </h1>

          <p style={{
            maxWidth: "580px",
            fontSize: "clamp(0.92rem, 1.3vw, 1.06rem)",
            color: "var(--text-muted)",
            lineHeight: 1.68,
            margin: "0 auto",
          }}>
            Eight interactive modules spanning classical and quantum statistical mechanics.
            Pick a simulation and dive in.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="scroller-grid cols-3" style={{ width: "min(96%, 1300px)" }}>
          {simList.map((sim) => (
            <Link
              key={sim.slug}
              to={`/simulation/${sim.slug}`}
              style={{ textDecoration: "none", color: "inherit", display: "contents" }}
            >
              <div className="glass-box sim-card" style={{
                alignItems: "flex-start",
                textAlign: "left",
                gap: "0.7rem",
                cursor: "pointer",
                padding: "clamp(1.1rem, 2.2vw, 1.6rem)",
              }}>

                {/* Index + arrow row */}
                <div style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    color: "var(--accent-3)",
                    opacity: 0.7,
                  }}>
                    {sim.index}
                  </span>
                  <FaArrowCircleRight style={{
                    width: "1.15rem",
                    height: "1.15rem",
                    color: "var(--accent)",
                    opacity: 0.55,
                    flexShrink: 0,
                    transition: "opacity 0.18s ease, transform 0.18s ease",
                  }} className="sim-arrow" />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.22rem)",
                  lineHeight: 1.2,
                  letterSpacing: "0.03em",
                  color: "var(--text-main)",
                  margin: 0,
                  fontWeight: 600,
                }}>
                  {sim.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: "clamp(0.82rem, 1.1vw, 0.94rem)",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                  margin: 0,
                  flexGrow: 1,
                }}>
                  {sim.description}
                </p>

                {/* Tags */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginTop: "0.2rem",
                }}>
                  {sim.tags.map(tag => (
                    <span key={tag} className="stat-chip" style={{ fontSize: "0.66rem" }}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}