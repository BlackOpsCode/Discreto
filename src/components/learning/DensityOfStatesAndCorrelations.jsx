import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import NavBar from "../../navigation_templates/NavBar";
import RubikCube from "../helpers/RubikCube";
import Footer from "../helpers/Footer";
import NextPrevNavigation from "../helpers/NextPrevNavigation";

const responsiveCSS = `
  * {
    box-sizing: border-box;
  }

  .page-container,
  .theory-scroller {
    max-width: 100%;
    overflow-x: clip;
  }

  .article-layout {
    min-width: 0;
  }

  .article-layout > *,
  .article-layout section,
  .article-layout > div {
    min-width: 0;
  }

  .formula {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0.35rem 0.5rem;
    -webkit-overflow-scrolling: touch;
  }

  .formula .katex-display {
    margin: 0;
    max-width: 100%;
  }

  .formula .katex {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    .formula {
      font-size: 0.82rem;
      padding: 0.25rem 0.35rem;
    }
  }

  @media (min-width: 1025px) {
    .article-layout {
      grid-template-columns: 1.55fr 1fr !important;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .article-layout {
      grid-template-columns: 1fr 1fr !important;
    }
  }
`;

const articleLayout = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "clamp(1rem, 2vw, 1.6rem)",
  width: "min(96%, 1300px)",
  alignItems: "start",
  minWidth: 0,
};

const prose = {
  color: "var(--text-soft)",
  lineHeight: 1.78,
  margin: 0,
  fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
  minWidth: 0,
};

const proseSm = {
  color: "var(--text-muted)",
  fontSize: "clamp(0.82rem, 1.05vw, 0.94rem)",
  lineHeight: 1.68,
  margin: 0,
  minWidth: 0,
};

const proseDim = {
  color: "var(--text-dim)",
  fontSize: "0.8rem",
  lineHeight: 1.6,
  margin: 0,
  minWidth: 0,
};

const h3Main = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
  color: "var(--text-main)",
  margin: 0,
  letterSpacing: "0.03em",
};

const h3Side = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(0.9rem, 1.3vw, 1.15rem)",
  color: "var(--text-main)",
  margin: 0,
  letterSpacing: "0.03em",
};

export default function DensityOfStatesAndCorrelations() {
  return (
    <div className="page-container">
      <style>{responsiveCSS}</style>
      <NavBar />

      <div className="theory-scroller">
        {/* HEADER */}
        <div
          style={{
            width: "min(96%, 1300px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.7rem",
            textAlign: "center",
            marginBottom: "0.5rem",
            minWidth: 0,
          }}
        >
          <span className="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M1 8 L5 2 L9 8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="5" cy="8.5" r="0.8" fill="currentColor" />
            </svg>
            chapter 10 · statistical mechanics
          </span>

          <h1
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
              lineHeight: 1.06,
              letterSpacing: "0.05em",
              color: "var(--text-main)",
              margin: 0,
              minWidth: 0,
            }}
          >
            Density of States & Correlations
          </h1>

          <p
            style={{
              maxWidth: "700px",
              ...proseSm,
              color: "var(--text-muted)",
            }}
          >
            The density of states tells us how many microscopic configurations are available at
            each energy, while correlations reveal how particles influence one another in real
            many-body systems. Together, they connect microscopic structure to thermodynamics,
            quantum statistics, and collective behavior.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.45rem",
              minWidth: 0,
            }}
          >
            {[
              "Density of States",
              "Microstates",
              "Occupation Probability",
              "Correlation Functions",
              "Many-Body Physics",
              "Phase Transitions",
            ].map((tag) => (
              <span key={tag} className="stat-chip" style={{ fontSize: "0.66rem" }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{ position: "relative", marginTop: "0.4rem", display: "inline-flex" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle, rgba(141,255,196,0.1) 0%, transparent 70%)",
                filter: "blur(12px)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />
            <div style={{ width: "80px", height: "80px", position: "relative", zIndex: 1 }}>
              <RubikCube />
            </div>
          </div>
        </div>

        {/* BLOCK 1 — DOS */}
        <div className="article-layout" style={articleLayout}>
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem", minWidth: 0 }}>
            <span className="section-eyebrow">density of states</span>
            <h3 style={h3Main}>Counting Available States</h3>

            <p style={prose}>
              In statistical mechanics, the density of states describes how many microscopic
              states are available within a given energy interval. If <InlineMath math="g(E)" /> is
              the density of states, then the number of states between <InlineMath math="E" /> and{" "}
              <InlineMath math="E + dE" /> is:
            </p>

            <div className="formula">
              <BlockMath math="d\Omega = g(E)\, dE" />
            </div>

            <p style={prose}>
              In other words, <InlineMath math="g(E)" /> tells us how densely packed the energy
              levels are. For a continuous spectrum, it is defined as:
            </p>

            <div className="formula">
              <BlockMath math="g(E) = \frac{d\Omega(E)}{dE}" />
            </div>

            <p style={prose}>
              Here <InlineMath math="\Omega(E)" /> is the total number of microstates with energy
              less than or equal to <InlineMath math="E" />. For discrete systems, the same idea is
              approximated by counting levels in a small energy window.
            </p>

            <p style={prose}>
              The density of states becomes especially important because macroscopic quantities are
              obtained by integrating over all energies, weighted by both <InlineMath math="g(E)" />{" "}
              and the occupation probability.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 0 }}>
            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem", minWidth: 0 }}>
              <span className="section-eyebrow">integral meaning</span>
              <h3 style={h3Side}>States Per Energy Interval</h3>
              <p style={proseSm}>
                The total number of particles and the total energy follow from integrating the
                distribution over all accessible energies.
              </p>
              <div className="formula">
                <BlockMath math="N = \int_0^\infty f(E)\, g(E)\, dE" />
              </div>
              <div className="formula">
                <BlockMath math="U = \int_0^\infty E\, f(E)\, g(E)\, dE" />
              </div>
              <p style={proseDim}>
                This is the bridge between microscopic energy statistics and measurable macroscopic
                observables.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem", minWidth: 0 }}>
              <span className="section-eyebrow">ideal gas example</span>
              <p style={proseSm}>
                For a 3D ideal gas, the number of available momentum states grows with the volume of
                a sphere in momentum space, giving a characteristic energy dependence:
              </p>
              <div className="formula">
                <BlockMath math="g(E) \propto E^{1/2}" />
              </div>
              <p style={proseDim}>
                Higher energy means more accessible states, so the system has more room to explore
                microcanonically.
              </p>
            </section>
          </div>
        </div>

        {/* BLOCK 2 — CORRELATIONS */}
        <div className="article-layout" style={articleLayout}>
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem", minWidth: 0 }}>
            <span className="section-eyebrow">correlations</span>
            <h3 style={h3Main}>When Particles Are Not Independent</h3>

            <p style={prose}>
              In idealized models, particles are independent and the joint probability factorizes.
              For two energies <InlineMath math="E_1" /> and <InlineMath math="E_2" />:
            </p>

            <div className="formula">
              <BlockMath math="P(E_1, E_2) = P(E_1)\,P(E_2)" />
            </div>

            <p style={prose}>
              Real systems often include interactions, and then this factorization breaks down. The
              probability acquires a correlation term:
            </p>

            <div className="formula">
              <BlockMath math="P(E_1, E_2) = P(E_1)\,P(E_2)\,[1 + C(E_1, E_2)]" />
            </div>

            <p style={prose}>
              Here <InlineMath math="C(E_1, E_2)" /> measures how strongly the particles influence
              one another. If the system is independent, <InlineMath math="C = 0" />. If interactions
              are present, the correction can be positive or negative depending on the physics.
            </p>

            <p style={prose}>
              A more general way to quantify correlations is through the two-point correlation
              function:
            </p>

            <div className="formula">
              <BlockMath
                math={String.raw`
\begin{aligned}
G(r_1, r_2) &= \langle n(r_1)n(r_2)\rangle \\
&\quad - \langle n(r_1)\rangle\langle n(r_2)\rangle
\end{aligned}
`}
              />
            </div>

            <p style={prose}>
              This quantity tells us how density fluctuations at one point are connected to those at
              another point. For independent particles, <InlineMath math="G(r_1, r_2)=0" />. For
              liquids, plasmas, solids, and other interacting systems, it is generally nonzero.
            </p>
          </section>

          <div style={{articleLayout }} className="article-layout">
            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem", minWidth: 0 }}>
              <span className="section-eyebrow">two-point function</span>
              <h3 style={h3Side}>Spatial Structure</h3>
              <p style={proseSm}>
                Correlation functions reveal structure: short-range order, collective modes, and the
                onset of phase transitions.
              </p>
              <div className="formula">
                <BlockMath math="G(r_1, r_2) \neq 0 \quad \Rightarrow \quad \text{correlated system}" />
              </div>
              <p style={proseDim}>
                This is central in condensed matter, plasma physics, and quantum many-body theory.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem", minWidth: 0 }}>
              <span className="section-eyebrow">physical interpretation</span>
              <h3 style={h3Side}>What Correlations Mean</h3>
              <ul className="features-list-discreto" style={{ width: "100%" }}>
                <li>They measure deviations from independent-particle behavior.</li>
                <li>They encode interaction effects and collective motion.</li>
                <li>They become essential near phase transitions and in quantum systems.</li>
              </ul>
            </section>
          </div>
        </div>

        {/* BLOCK 3 — APPLICATIONS */}
        <div className="article-layout" style={articleLayout}>
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem", minWidth: 0 }}>
            <span className="section-eyebrow">applications</span>
            <h3 style={h3Main}>Why DOS and Correlations Matter</h3>

            <p style={prose}>
              The density of states is what connects microscopic counting to macroscopic response.
              It appears in entropy, heat capacity, conductivity, radiation spectra, and transport.
              Correlations tell us when a simple ideal-gas picture is no longer enough.
            </p>

            <ul className="features-list-discreto" style={{ width: "100%" }}>
              <li>
                <b>Thermodynamics</b> — DOS determines how entropy and heat capacity scale with
                energy.
              </li>
              <li>
                <b>Quantum physics</b> — occupation of energy levels depends on DOS and on the
                statistics obeyed by the particles.
              </li>
              <li>
                <b>Collective phenomena</b> — correlations explain phase transitions, ordering, and
                long-range structure.
              </li>
            </ul>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              Together, <InlineMath math="g(E)" /> and correlation functions form the foundation of
              statistical, thermodynamic, and quantum descriptions of matter.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 0 }}>
            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem", minWidth: 0 }}>
              <span className="section-eyebrow">summary formula</span>
              <h3 style={h3Side}>Core Relations</h3>
              <div className="formula">
                <BlockMath math="d\Omega = g(E)\, dE" />
              </div>
              <div className="formula">
                <BlockMath math="N = \int_0^\infty f(E)\, g(E)\, dE" />
              </div>
              <div className="formula">
                <BlockMath math="U = \int_0^\infty E\, f(E)\, g(E)\, dE" />
              </div>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem", minWidth: 0 }}>
              <span className="section-eyebrow">chapter summary</span>
              <h3 style={h3Side}>Key Takeaways</h3>
              <ul className="features-list-discreto" style={{ width: "100%" }}>
                <li>
                  The density of states <InlineMath math="g(E)" /> measures how many microstates are
                  available per unit energy.
                </li>
                <li>
                  Macroscopic observables come from integrating <InlineMath math="f(E)g(E)" /> over
                  energy.
                </li>
                <li>
                  Correlations describe interactions and break the independent-particle picture.
                </li>
                <li>
                  The two-point correlation function captures spatial dependence in many-body
                  systems.
                </li>
              </ul>
            </section>
          </div>
        </div>

        <NextPrevNavigation
          next={{ path: "/learning/insights-and-applications", title: "Insights and Applications" }}
          prev={{ path: "/learning/entropy-and-fluctuations", title: "Entropy And Fluctuations" }}
        />
      </div>

      <Footer />
    </div>
  );
}