import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import NavBar from "../../navigation_templates/NavBar";
import RubikCube from "../helpers/RubikCube";
import Footer from "../helpers/Footer";
import NextPrevNavigation from '../helpers/NextPrevNavigation';
import { TiThLarge } from 'react-icons/ti';

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

export default function EnergyDistributions() {
  return (
    <div className="page-container">
      <style>{responsiveCSS}</style>
      <NavBar />

      <div className="theory-scroller">

        {/* HEADER */}
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
                strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="5" cy="8.5" r="0.8" fill="currentColor" />
            </svg>
            chapter 05 · statistical mechanics
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06,
            letterSpacing: "0.05em",
            color: "var(--text-main)",
            margin: 0,
          }}>
            Energy Distributions
          </h1>

          <p style={{ maxWidth: "680px", ...proseSmall, color: "var(--text-muted)" }}>
            Energy distributions connect microscopic energy sharing to macroscopic observables such as temperature,
            heat capacity, and fluctuations.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["Microcanonical", "Canonical", "Density of States", "Energy Fluctuations", "Boltzmann Factor"].map(tag => (
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
            }} />
            <div style={{ width: "80px", height: "80px", position: "relative", zIndex: 1 }}>
              <RubikCube />
            </div>
          </div>
        </div>

        {/* BLOCK 1 — INTRO */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">definitions</span>
            <h3 style={sectionH3}>How Energy Is Distributed</h3>

            <p style={prose}>
              In statistical mechanics, energy distributions describe how the total energy of a system is shared among its microscopic
              degrees of freedom. Once the energy distribution is known, macroscopic quantities such as temperature, pressure,
              entropy, and heat capacity follow from statistical averages.
            </p>

            <p style={prose}>
              The form of the distribution depends on the ensemble and the constraints imposed on the system.
              Fixed energy leads to the microcanonical picture, while fixed temperature leads to the canonical one.
            </p>

            <ul className="features-list-discreto" style={{ width: "100%", marginTop: "0.2rem" }}>
              <li>
                <b>Energy distribution</b> — the statistical spread of energy across accessible states.
              </li>
              <li>
                <b>Ensemble choice</b> — determines which macroscopic variables are fixed.
              </li>
              <li>
                <b>Density of states</b> — counts how many states exist near a given energy.
              </li>
              <li>
                <b>Fluctuations</b> — quantify the spread around the mean energy.
              </li>
            </ul>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">core idea</span>
              <h3 style={sidebarH3}>Energy as a Statistical Variable</h3>
              <p style={proseSmall}>
                Energy is not always fixed from the point of view of a subsystem. It may fluctuate depending on the ensemble.
              </p>
              <p style={proseDim}>
                Different ensembles encode different physical constraints.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">thermodynamic link</span>
              <h3 style={sidebarH3}>From Microstates to Observables</h3>
              <p style={proseSmall}>
                Energy distributions are the bridge from microstate counting to measurable thermodynamic behavior.
              </p>
            </section>

          </div>
        </div>

        {/* BLOCK 2 — MICROCANONICAL */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">microcanonical ensemble</span>
            <h3 style={sectionH3}>Fixed Energy</h3>

            <p style={prose}>
              In the microcanonical ensemble, the system is isolated with fixed energy <InlineMath math="E" />,
              particle number <InlineMath math="N" />, and volume <InlineMath math="V" />.
              Since no energy can be exchanged with the environment, all accessible microstates are equally probable.
            </p>

            <div className="formula">
              <BlockMath math="P_i = \frac{1}{\Omega(E,N,V)}" />
            </div>

            <p style={prose}>
              If a single particle inside the system has energy <InlineMath math="E_i" />, then the probability of that
              energy being observed is proportional to the number of remaining microstates available to the rest of the system:
            </p>

            <div className="formula">
              <BlockMath math="P(E_i) \propto \Omega(E - E_i)" />
            </div>

            <p style={prose}>
              This is the statistical origin of equilibrium in an isolated system: the most likely energy split is the one
              that leaves the largest number of accessible states.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">constraints</span>
              <h3 style={sidebarH3}>Isolated System</h3>
              <p style={proseSmall}>
                No heat exchange and no particle exchange.
              </p>
              <div className="formula">
                <BlockMath math="(E,N,V)=\text{const}" />
              </div>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">entropy link</span>
              <h3 style={sidebarH3}>Multiplicity</h3>
              <p style={proseSmall}>
                The entropy is determined by the number of microstates compatible with the fixed macroscopic energy.
              </p>
              <div className="formula">
                <BlockMath math="S(E,N,V)=k_B\ln\Omega(E,N,V)" />
              </div>
            </section>

          </div>
        </div>

        {/* BLOCK 3 — CANONICAL */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">canonical ensemble</span>
            <h3 style={sectionH3}>Fixed Temperature</h3>

            <p style={prose}>
              In the canonical ensemble, the system is in thermal contact with a heat bath at temperature <InlineMath math="T" />.
              Energy can fluctuate, but <InlineMath math="N" /> and <InlineMath math="V" /> are fixed.
            </p>

            <p style={prose}>
              The probability of a state with energy <InlineMath math="E_i" /> is given by the Boltzmann factor:
            </p>

            <div className="formula">
              <BlockMath math="P(E_i)=\frac{e^{-E_i/k_B T}}{Z}" />
            </div>

            <div className="formula">
              <BlockMath math="Z=\sum_i e^{-E_i/k_B T}" />
            </div>

            <p style={prose}>
              The partition function <InlineMath math="Z" /> normalizes the distribution and generates the thermodynamic potentials.
            </p>

            <div className="formula">
              <BlockMath math="F=-k_B T\ln Z" />
            </div>

            <p style={prose}>
              Lower-energy states are favored, while higher-energy states are exponentially suppressed.
              This produces the familiar thermal distribution of energies.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">boltzmann factor</span>
              <h3 style={sidebarH3}>Thermal Weight</h3>
              <p style={proseSmall}>
                The factor <InlineMath math="e^{-E_i/k_B T}" /> controls the relative likelihood of each microstate.
              </p>
              <p style={proseDim}>
                Raising the temperature makes the distribution broader.
              </p>
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

        {/* BLOCK 4 — CONTINUOUS ENERGY */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">continuous spectra</span>
            <h3 style={sectionH3}>Energy Density and Distribution Functions</h3>

            <p style={prose}>
              For systems with continuous energy spectra, we introduce a distribution function <InlineMath math="f(E)" />.
              The number of particles in the interval <InlineMath math="[E, E+dE]" /> is obtained by combining the density of states
              with the thermal factor.
            </p>

            <div className="formula">
              <BlockMath math="f(E)\,dE = g(E)\frac{e^{-E/k_B T}}{Z}\,dE" />
            </div>

            <p style={prose}>
              Here <InlineMath math="g(E)" /> is the density of states.
              It tells us how many microscopic states are available near a given energy.
            </p>

            <p style={prose}>
              The average energy is computed by weighting energies with the distribution:
            </p>

            <div className="formula">
              <BlockMath math="\langle E \rangle = \int_0^\infty E f(E)\,dE" />
            </div>

            <p style={prose}>
              In the classical ideal-gas limit, the Maxwell-Boltzmann form is recovered and the density of states becomes essential
              for getting the correct energy dependence.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">density of states</span>
              <h3 style={sidebarH3}>Phase-Space Weighting</h3>
              <p style={proseSmall}>
                The density of states can enhance or suppress particular energies even when the Boltzmann factor is simple.
              </p>
              <div className="formula">
                <BlockMath math="N=\int_0^\infty g(E)\bar n(E)\,dE" />
              </div>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">continuous limit</span>
              <h3 style={sidebarH3}>Integral Form</h3>
              <p style={proseSmall}>
                Sums over states become integrals when the spectrum is dense enough.
              </p>
            </section>

          </div>
        </div>

        {/* BLOCK 5 — FLUCTUATIONS + SUMMARY */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">fluctuations</span>
            <h3 style={sectionH3}>Energy Variance in the Canonical Ensemble</h3>

            <p style={prose}>
              In the canonical ensemble, the energy is not fixed; it fluctuates around the mean.
              The variance is connected directly to the heat capacity:
            </p>

            <div className="formula">
              <BlockMath math="\sigma_E^2 = \langle E^2 \rangle - \langle E \rangle^2 = k_B T^2 C_V" />
            </div>

            <p style={prose}>
              This relation shows that systems with larger heat capacity can absorb more energy with smaller relative fluctuations.
              In large macroscopic systems, the relative size of these fluctuations becomes very small.
            </p>

            <p style={prose}>
              The same idea extends to more general observables: if a quantity depends on microstate occupancy,
              its mean and variance follow from the underlying distribution.
            </p>
          </section>

          {/* SIDEBAR — KEY TAKEAWAYS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}>
              <span className="section-eyebrow">chapter summary</span>
              <h3 style={sidebarH3}>Key Takeaways</h3>

              <ul className="features-list-discreto" style={{ width: "100%" }}>
                <li>
                  <b>Energy distributions</b> connect microstates with macroscopic observables.
                </li>
                <li>
                  The <b>microcanonical ensemble</b> applies to isolated systems with fixed <InlineMath math="E, N, V" />.
                </li>
                <li>
                  The <b>canonical ensemble</b> applies when temperature is fixed and energy can fluctuate.
                </li>
                <li>
                  <b>Boltzmann weighting</b> suppresses high-energy states exponentially.
                </li>
                <li>
                  <b>Density of states</b> is essential for continuous spectra.
                </li>
                <li>
                  <b>Average energy</b> and <b>fluctuations</b> can be computed from the distribution.
                </li>
                <li>
                  The <b>heat capacity</b> controls the size of energy fluctuations.
                </li>
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
                {["Microcanonical", "Canonical", "g(E)", "Z", "Fluctuations", "Heat Capacity"].map(tag => (
                  <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>{tag}</span>
                ))}
              </div>
            </section>

          </div>
        </div>
        <NextPrevNavigation 
            next={{path:'/learning/temperature-and-equilibrium', title:'Temperature and Equilibrium'}} 
            prev={{path:'/learning/particle-distributions', title:'Particle Distributions'}}/>
      </div>

      <Footer />
    </div>
  );
}