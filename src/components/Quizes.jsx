import NavBar from "../navigation_templates/NavBar";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "./helpers/Footer";

const quizList = [
  {
    title: "Quiz 1",
    subtitle: "Microstates & Macrostates",
    description: "Test your grasp of multiplicity, macroscopic observables, and the combinatorial foundations of statistical mechanics.",
    tags: ["Multiplicity", "Macrostate", "Counting"],
    difficulty: "Intro",
    questions: 10,
    index: "01",
  },
  {
    title: "Quiz 2",
    subtitle: "Boltzmann Entropy",
    description: "Apply S = k·ln(Ω) to physical systems. Prove why entropy increases and connect microscopic counting to the second law.",
    tags: ["Entropy", "Second Law", "S = k·ln Ω"],
    difficulty: "Intro",
    questions: 10,
    index: "02",
  },
  {
    title: "Quiz 3",
    subtitle: "Statistical Ensembles",
    description: "Identify which ensemble applies to a given system. Work with partition functions and derive thermodynamic quantities.",
    tags: ["Canonical", "Partition Function", "Free Energy"],
    difficulty: "Intermediate",
    questions: 12,
    index: "03",
  },
  {
    title: "Quiz 4",
    subtitle: "Particle Distributions",
    description: "Distinguish classical from quantum statistics. Predict occupation numbers for fermions and bosons at given temperatures.",
    tags: ["Fermi–Dirac", "Bose–Einstein", "MB Statistics"],
    difficulty: "Intermediate",
    questions: 12,
    index: "04",
  },
  {
    title: "Quiz 5",
    subtitle: "Energy Distributions",
    description: "Apply the equipartition theorem and Boltzmann factors. Analyze energy spreading across coupled degrees of freedom.",
    tags: ["Equipartition", "Boltzmann Factor", "Heat Capacity"],
    difficulty: "Intermediate",
    questions: 10,
    index: "05",
  },
  {
    title: "Quiz 6",
    subtitle: "Temperature & Equilibrium",
    description: "Derive temperature from entropy. Analyze systems in thermal contact and predict the direction of spontaneous heat flow.",
    tags: ["β = 1/kT", "Thermal Contact", "Equilibrium"],
    difficulty: "Intermediate",
    questions: 10,
    index: "06",
  },
  {
    title: "Quiz 7",
    subtitle: "Gases & Multiparticle Systems",
    description: "Derive ideal gas properties from statistical mechanics. Explore corrections for interacting particles and real gas behavior.",
    tags: ["Ideal Gas", "Van der Waals", "Pressure"],
    difficulty: "Advanced",
    questions: 14,
    index: "07",
  },
  {
    title: "Quiz 8",
    subtitle: "Entropy & Fluctuations",
    description: "Calculate variance in thermodynamic quantities. Probe fluctuation–dissipation relations and behavior near critical points.",
    tags: ["Fluctuations", "Variance", "Critical Point"],
    difficulty: "Advanced",
    questions: 12,
    index: "08",
  },
  {
    title: "Quiz 9",
    subtitle: "Density of States & Applications",
    description: "Compute density of states for photons, phonons, and electrons. Apply to black body radiation, BEC, and stellar physics.",
    tags: ["Phonons", "Black Body", "BEC"],
    difficulty: "Advanced",
    questions: 14,
    index: "09",
  },
];

const difficultyColor = {
  "Intro":        "var(--accent-3)",
  "Intermediate": "var(--warm)",
  "Advanced":     "#ff7b7b",
};

const toSlug = (title) =>
  title.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

export default function Quizes() {
  return (
    <div className="page-container">
      <NavBar />

      <div className="quiz-scroller">

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
              <path d="M3.5 3C3.5 1.9 4.2 1 5 1s1.5.9 1.5 2c0 1-1.5 2-1.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              <circle cx="5" cy="8.5" r="0.8" fill="currentColor"/>
            </svg>
            knowledge check
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3.6rem)",
            lineHeight: 1.06,
            letterSpacing: "0.06em",
            color: "var(--text-main)",
            margin: 0,
          }}>
            Quiz Arena
          </h1>

          <p style={{
            maxWidth: "520px",
            fontSize: "clamp(0.92rem, 1.3vw, 1.06rem)",
            color: "var(--text-muted)",
            lineHeight: 1.68,
            margin: "0 auto",
          }}>
            Nine quizzes across the full statistical mechanics curriculum.
            Intro to advanced — track your understanding module by module.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="scroller-grid cols-3" style={{ width: "min(96%, 1300px)" }}>
          {quizList.map((quiz) => {
            const slug = toSlug(quiz.title);
            return (
              <Link
                key={slug}
                to={`/quizes/${slug}`}
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
                      {quiz.index}
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

                  {/* Title + subtitle */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.18rem" }}>
                    <h3 style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "clamp(0.88rem, 1.2vw, 1.1rem)",
                      lineHeight: 1.2,
                      letterSpacing: "0.03em",
                      color: "var(--text-main)",
                      margin: 0,
                      fontWeight: 600,
                    }}>
                      {quiz.title}
                    </h3>
                    <span style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(0.75rem, 0.95vw, 0.86rem)",
                      color: "var(--accent-2)",
                      opacity: 0.8,
                      fontWeight: 500,
                    }}>
                      {quiz.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: "clamp(0.8rem, 1vw, 0.91rem)",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                    margin: 0,
                    flexGrow: 1,
                  }}>
                    {quiz.description}
                  </p>

                  {/* Meta row: difficulty + question count */}
                  <div style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "0.1rem",
                  }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.64rem",
                      letterSpacing: "0.1em",
                      color: difficultyColor[quiz.difficulty],
                      textTransform: "uppercase",
                      opacity: 0.85,
                    }}>
                      {quiz.difficulty}
                    </span>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.64rem",
                      letterSpacing: "0.08em",
                      color: "var(--text-dim)",
                    }}>
                      {quiz.questions} questions
                    </span>
                  </div>

                  {/* Tags */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}>
                    {quiz.tags.map(tag => (
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