import NavBar from "../navigation_templates/NavBar";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "./helpers/Footer";

const courseList = [
  {
    title: "Microstates vs Macrostates",
    description: "Understand the fundamental distinction between microscopic configurations and observable macroscopic properties. The foundation of all statistical mechanics.",
    tags: ["Multiplicity", "Macrostate", "Combinatorics"],
    index: "01",
  },
  {
    title: "Boltzmann Entropy",
    description: "Derive S = k·ln(Ω) from first principles. Explore how entropy connects microscopic counting to thermodynamic irreversibility.",
    tags: ["S = k·ln Ω", "Irreversibility", "Second Law"],
    index: "02",
  },
  {
    title: "Statistical Ensembles",
    description: "Master the microcanonical, canonical, and grand canonical ensembles. Learn when each applies and how partition functions encode all thermodynamic information.",
    tags: ["Partition Function", "Canonical", "Grand Canonical"],
    index: "03",
  },
  {
    title: "Particle Distributions",
    description: "Compare Maxwell–Boltzmann, Fermi–Dirac, and Bose–Einstein statistics. Discover how quantum identity fundamentally alters how particles occupy states.",
    tags: ["Fermi–Dirac", "Bose–Einstein", "Indistinguishability"],
    index: "04",
  },
  {
    title: "Energy Distributions",
    description: "Analyze how energy spreads across degrees of freedom. From the equipartition theorem to the Boltzmann factor — energy has a preferred language.",
    tags: ["Equipartition", "Boltzmann Factor", "Degrees of Freedom"],
    index: "05",
  },
  {
    title: "Temperature and Equilibrium",
    description: "Redefine temperature as a statistical concept. Explore thermal contact, heat flow, and the microscopic origin of equilibrium.",
    tags: ["Thermal Equilibrium", "Heat Reservoir", "β = 1/kT"],
    index: "06",
  },
  {
    title: "Gases and Multiparticle Systems",
    description: "Apply statistical mechanics to ideal and real gases. Derive the ideal gas law from first principles and explore corrections for interacting particles.",
    tags: ["Ideal Gas", "Van der Waals", "Virial Expansion"],
    index: "07",
  },
  {
    title: "Population Inversion",
    description: "Explore excited-state dynamics in two- and three-level systems. Understand the statistical basis of laser action and stimulated emission.",
    tags: ["Two-Level System", "Laser Physics", "Stimulated Emission"],
    index: "08",
  },
  {
    title: "Entropy and Fluctuations",
    description: "Go beyond averages — probe the variance. Learn how thermodynamic fluctuations scale with system size and why they matter near critical points.",
    tags: ["Fluctuation–Dissipation", "Variance", "Critical Phenomena"],
    index: "09",
  },
  {
    title: "Density of States and Correlations",
    description: "Compute the density of states for photons, phonons, and electrons. Explore spatial and temporal correlations in many-body systems.",
    tags: ["Phonons", "Photons", "Correlation Functions"],
    index: "10",
  },
  {
    title: "Insights and Applications",
    description: "Connect the formalism to real-world phenomena — black body radiation, Bose–Einstein condensation, white dwarf stars, and beyond.",
    tags: ["Black Body", "BEC", "Astrophysics"],
    index: "11",
  },
];

const toSlug = (title) =>
  title.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

export default function Learning() {
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
              <path d="M1 8 L5 2 L9 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="5" cy="8.5" r="0.8" fill="currentColor"/>
            </svg>
            theory modules
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3.6rem)",
            lineHeight: 1.06,
            letterSpacing: "0.06em",
            color: "var(--text-main)",
            margin: 0,
          }}>
            Learning Path
          </h1>

          <p style={{
            maxWidth: "560px",
            fontSize: "clamp(0.92rem, 1.3vw, 1.06rem)",
            color: "var(--text-muted)",
            lineHeight: 1.68,
            margin: "0 auto",
          }}>
            Eleven theory modules from first principles to advanced applications.
            Follow the path or jump to what interests you.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="scroller-grid cols-3" style={{ width: "min(96%, 1300px)" }}>
          {courseList.map((course) => {
            const slug = toSlug(course.title);
            return (
              <Link
                key={slug}
                to={`/learning/${slug}`}
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <div
                  className="glass-box sim-card"
                  style={{
                    alignItems: "flex-start",
                    textAlign: "left",
                    gap: "0.7rem",
                    cursor: "pointer",
                    padding: "clamp(1.1rem, 2.2vw, 1.6rem)",
                  }}
                >

                  {/* Index + arrow */}
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
                      {course.index}
                    </span>
                    <FaArrowCircleRight
                      className="sim-arrow"
                      style={{
                        width: "1.1rem",
                        height: "1.1rem",
                        color: "var(--accent)",
                        opacity: 0.5,
                        flexShrink: 0,
                        transition: "opacity 0.18s ease, transform 0.18s ease",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "clamp(0.9rem, 1.3vw, 1.15rem)",
                    lineHeight: 1.22,
                    letterSpacing: "0.03em",
                    color: "var(--text-main)",
                    margin: 0,
                    fontWeight: 600,
                  }}>
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: "clamp(0.8rem, 1vw, 0.92rem)",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                    margin: 0,
                    flexGrow: 1,
                  }}>
                    {course.description}
                  </p>

                  {/* Tags */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginTop: "0.2rem",
                  }}>
                    {course.tags.map(tag => (
                      <span key={tag} className="stat-chip" style={{ fontSize: "0.66rem" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}