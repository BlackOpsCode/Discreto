import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import NavBar from "../../navigation_templates/NavBar";
import RubikCube from "../helpers/RubikCube";
import Footer from "../helpers/Footer";
import NextPrevNavigation from '../helpers/NextPrevNavigation';

const responsiveCSS = `
  @media (min-width: 1025px) {
    .article-layout { grid-template-columns: 1.55fr 1fr !important; }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .article-layout { grid-template-columns: 1fr 1fr !important; }
  }
`;

const articleLayout = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "clamp(1rem, 2vw, 1.6rem)",
  width: "min(96%, 1300px)",
  alignItems: "start",
};

const prose = {
  color: "var(--text-soft)",
  lineHeight: 1.78,
  margin: 0,
  fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
};

const proseSmall = {
  color: "var(--text-muted)",
  fontSize: "clamp(0.82rem, 1.05vw, 0.94rem)",
  lineHeight: 1.68,
  margin: 0,
};

const proseDim = {
  color: "var(--text-dim)",
  fontSize: "0.8rem",
  lineHeight: 1.6,
  margin: 0,
};

const sectionH3 = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
  color: "var(--text-main)",
  margin: 0,
  letterSpacing: "0.03em",
};

const sidebarH3 = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(0.9rem, 1.3vw, 1.15rem)",
  color: "var(--text-main)",
  margin: 0,
  letterSpacing: "0.03em",
};

export default function StatisticalEnsembles() {
  return (
    <div className="page-container">
      <style>{responsiveCSS}</style>
      <NavBar />

      <div className="theory-scroller">

        {/* ══════════════════════════
            HEADER
        ══════════════════════════ */}
        <div style={{
          width: "min(96%, 1300px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.7rem",
          textAlign: "center",
          marginBottom: "0.5rem",
        }}>
          <span className="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 8 L5 2 L9 8" stroke="currentColor" strokeWidth="1.2"
                strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="5" cy="8.5" r="0.8" fill="currentColor"/>
            </svg>
            chapter 03 · statistical mechanics
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06,
            letterSpacing: "0.05em",
            color: "var(--text-main)",
            margin: 0,
          }}>
            Statistical Ensembles
          </h1>

          <p style={{ maxWidth: "680px", ...proseSmall, color: "var(--text-muted)" }}>
            Ensembles provide the statistical language for thermodynamics: instead of following one exact microscopic trajectory,
            we average over all microstates compatible with the macroscopic constraints.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["Microcanonical", "Canonical", "Grand Canonical", "Partition Function", "Thermodynamics"].map(tag => (
              <span key={tag} className="stat-chip" style={{ fontSize: "0.66rem" }}>{tag}</span>
            ))}
          </div>

          <div style={{ position: "relative", marginTop: "0.4rem", display: "inline-flex" }}>
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle, rgba(141,255,196,0.1) 0%, transparent 70%)",
              filter: "blur(12px)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}/>
            <div style={{ width: "80px", height: "80px", position: "relative", zIndex: 1 }}>
              <RubikCube />
            </div>
          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 1 — INTRO
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">definitions</span>
            <h3 style={sectionH3}>What Is an Ensemble?</h3>

            <p style={prose}>
              In statistical mechanics, an ensemble is a large collection of virtual copies of the same system,
              each copy representing a possible microstate. The ensemble is not a physical crowd of systems;
              it is a probabilistic tool for extracting macroscopic observables.
            </p>

            <p style={prose}>
              By averaging over the ensemble, we connect microscopic uncertainty to macroscopic certainty.
              This is the foundation of equilibrium statistical mechanics.
            </p>

            <ul className="features-list-discreto" style={{ width: "100%", marginTop: "0.2rem" }}>
              <li>
                <b>Microstate</b> — an exact microscopic configuration.
              </li>
              <li>
                <b>Macrostate</b> — a coarse description in terms of thermodynamic variables.
              </li>
              <li>
                <b>Ensemble</b> — the set of all possible microstates compatible with chosen constraints.
              </li>
              <li>
                <b>Ensemble average</b> — the weighted expectation value of an observable.
              </li>
            </ul>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">ensemble idea</span>
              <h3 style={sidebarH3}>Why It Works</h3>
              <p style={proseSmall}>
                Macroscopic measurements are stable because they depend on averages over enormous numbers of microstates.
              </p>
              <p style={proseDim}>
                Statistical fluctuations become negligible in the thermodynamic limit.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">thermodynamic bridge</span>
              <h3 style={sidebarH3}>From Counting to Physics</h3>
              <p style={proseSmall}>
                Different ensembles correspond to different physical constraints, such as fixed energy, fixed temperature, or fixed chemical potential.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 2 — MICROCANONICAL
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">microcanonical ensemble</span>
            <h3 style={sectionH3}>Fixed N, V, E</h3>

            <p style={prose}>
              The microcanonical ensemble describes an isolated system with fixed particle number <InlineMath math="N" />,
              volume <InlineMath math="V" />, and energy <InlineMath math="E" />.
              Since the system cannot exchange energy or particles with an environment, only states satisfying these
              constraints are allowed.
            </p>

            <p style={prose}>
              All accessible microstates are equally probable:
            </p>

            <div className="formula">
              <BlockMath math="P_i = \frac{1}{\Omega(E,N,V)}" />
            </div>

            <p style={prose}>
              The multiplicity <InlineMath math="\Omega(E,N,V)" /> is the number of microscopic realizations consistent with the macroscopic state.
              Entropy is then defined as:
            </p>

            <div className="formula">
              <BlockMath math="S(E,N,V)=k_B\ln \Omega(E,N,V)" />
            </div>

            <p style={prose}>
              This ensemble is the most direct statistical version of the second law, since equilibrium corresponds to
              the macrostate with the largest multiplicity.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">constraints</span>
              <h3 style={sidebarH3}>Isolated System</h3>
              <p style={proseSmall}>
                No heat exchange, no particle exchange, no work exchange through the chosen boundary conditions.
              </p>
              <div className="formula">
                <BlockMath math="(N,V,E)=\text{const}" />
              </div>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">entropy relation</span>
              <h3 style={sidebarH3}>Statistical Definition</h3>
              <p style={proseSmall}>
                In this ensemble, entropy is literally the logarithm of the number of accessible states.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 3 — CANONICAL
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">canonical ensemble</span>
            <h3 style={sectionH3}>Fixed N, V, T</h3>

            <p style={prose}>
              The canonical ensemble describes a system in thermal contact with a heat bath.
              Particle number <InlineMath math="N" /> and volume <InlineMath math="V" /> remain fixed, but energy can fluctuate.
              The temperature <InlineMath math="T" /> is fixed by the reservoir.
            </p>

            <p style={prose}>
              The probability of occupying microstate <InlineMath math="i" /> with energy <InlineMath math="E_i" /> is:
            </p>

            <div className="formula">
              <BlockMath math="P_i = \frac{e^{-E_i/k_B T}}{Z}" />
            </div>

            <div className="formula">
              <BlockMath math="Z = \sum_i e^{-E_i/k_B T}" />
            </div>

            <p style={prose}>
              The partition function <InlineMath math="Z" /> normalizes the probabilities and acts as the generating function
              for thermodynamic quantities.
            </p>

            <div className="formula">
              <BlockMath math="F = -k_B T \ln Z" />
            </div>

            <p style={prose}>
              From <InlineMath math="Z" />, one can derive the average energy, entropy, heat capacity, and fluctuations.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">boltzmann factor</span>
              <h3 style={sidebarH3}>Thermal Weight</h3>
              <p style={proseSmall}>
                High-energy states are exponentially suppressed relative to low-energy ones.
              </p>
              <div className="formula">
                <BlockMath math="e^{-E_i/k_B T}" />
              </div>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">free energy</span>
              <h3 style={sidebarH3}>Thermodynamic Potential</h3>
              <p style={proseSmall}>
                The canonical ensemble is naturally tied to the Helmholtz free energy.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 4 — GRAND CANONICAL
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">grand canonical ensemble</span>
            <h3 style={sectionH3}>Fixed T, V, μ</h3>

            <p style={prose}>
              The grand canonical ensemble describes a system that can exchange both energy and particles with a reservoir.
              Temperature <InlineMath math="T" />, volume <InlineMath math="V" />, and chemical potential <InlineMath math="\mu" /> are fixed.
            </p>

            <p style={prose}>
              The probability of microstate <InlineMath math="i" /> with energy <InlineMath math="E_i" /> and particle number <InlineMath math="N_i" /> is:
            </p>

            <div className="formula">
              <BlockMath math="P_i = \frac{e^{-(E_i - \mu N_i)/k_B T}}{\Xi}" />
            </div>

            <div className="formula">
              <BlockMath math="\Xi = \sum_i e^{-(E_i - \mu N_i)/k_B T}" />
            </div>

            <p style={prose}>
              Here <InlineMath math="\Xi" /> is the grand canonical partition function.
              It is the natural ensemble for open systems, especially when particle exchange matters.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">chemical potential</span>
              <h3 style={sidebarH3}>Particle Exchange</h3>
              <p style={proseSmall}>
                The chemical potential controls how favorable it is for particles to enter or leave the system.
              </p>
              <div className="formula">
                <BlockMath math="\mu = \left(\frac{\partial F}{\partial N}\right)_{T,V}" />
              </div>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">open systems</span>
              <h3 style={sidebarH3}>Best Use Case</h3>
              <p style={proseSmall}>
                Adsorption, electron gases, photon systems, and other open systems are often best treated grand canonically.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 5 — AVERAGES + THERMO
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">ensemble averages</span>
            <h3 style={sectionH3}>Observables as Weighted Averages</h3>

            <p style={prose}>
              In any ensemble, the average value of an observable <InlineMath math="A" /> is computed by weighting each microstate
              by its probability. For discrete states:
            </p>

            <div className="formula">
              <BlockMath math="\langle A \rangle = \sum_i P_i A_i" />
            </div>

            <p style={prose}>
              For continuous variables, the sum becomes an integral:
            </p>

            <div className="formula">
              <BlockMath math="\langle A \rangle = \int A(x) P(x)\,dx" />
            </div>

            <p style={prose}>
              This averaging procedure is what makes statistical mechanics predictive: it translates microscopic randomness
              into macroscopic observables.
            </p>

            <p style={prose}>
              The three ensembles are connected to thermodynamics through their natural potentials:
            </p>

            <ul className="features-list-discreto" style={{ width: "100%", marginTop: "0.2rem" }}>
              <li>
                <b>Microcanonical:</b> <InlineMath math="S(E,V,N)=k_B\ln\Omega" />
              </li>
              <li>
                <b>Canonical:</b> <InlineMath math="F=-k_B T\ln Z" />
              </li>
              <li>
                <b>Grand canonical:</b> <InlineMath math="\Omega = -k_B T\ln \Xi" />
              </li>
            </ul>
          </section>

          {/* SIDEBAR — KEY TAKEAWAYS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}>
              <span className="section-eyebrow">chapter summary</span>
              <h3 style={sidebarH3}>Key Takeaways</h3>

              <ul className="features-list-discreto" style={{ width: "100%" }}>
                <li>
                  <b>Ensembles</b> are statistical collections of microstates used to compute thermodynamic averages.
                </li>
                <li>
                  The <b>microcanonical ensemble</b> applies to isolated systems with fixed <InlineMath math="E, N, V" />.
                </li>
                <li>
                  The <b>canonical ensemble</b> applies when temperature is fixed and energy can fluctuate.
                </li>
                <li>
                  The <b>grand canonical ensemble</b> includes particle exchange through the chemical potential <InlineMath math="\mu" />.
                </li>
                <li>
                  <b>Partition functions</b> encode the full thermodynamic information of each ensemble.
                </li>
                <li>
                  <b>Ensemble averages</b> are weighted sums or integrals over microstates.
                </li>
                <li>
                  The choice of ensemble depends on which macroscopic quantities are held fixed.
                </li>
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
                {["Microcanonical", "Canonical", "Grand Canonical", "Partition Function", "Averages", "Thermodynamic Potentials"].map(tag => (
                  <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>{tag}</span>
                ))}
              </div>
            </section>

          </div>
        </div>
        
        <NextPrevNavigation
                        prev={{
                            path: '/learning/boltzmann-entropy', title:'Boltzmann Entropy'
                        }}  // sau ceva curs anterior
                        next={{
                            path: "/learning/particle-distributions",
                            title: "Particle Distributions"
                        }}
        />
      </div>

      <Footer />
    </div>
  );
}