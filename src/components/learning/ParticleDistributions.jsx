import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import NavBar from "../../navigation_templates/NavBar";
import RubikCube from "../helpers/RubikCube";
import Footer from "../helpers/Footer";
import NextPrevNavigation from '../helpers/NextPrevNavigation';
import { tiledLights } from 'three/examples/jsm/tsl/lighting/TiledLightsNode.js';

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

export default function ParticleDistributions() {
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
                strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="5" cy="8.5" r="0.8" fill="currentColor"/>
            </svg>
            chapter 04 · statistical mechanics
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06,
            letterSpacing: "0.05em",
            color: "var(--text-main)",
            margin: 0,
          }}>
            Particle Distributions
          </h1>

          <p style={{ maxWidth: "680px", ...proseSmall, color: "var(--text-muted)" }}>
            Particle distributions describe how particles populate energy states under classical or quantum statistics,
            and they determine macroscopic observables through weighted averages.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["Maxwell-Boltzmann", "Fermi-Dirac", "Bose-Einstein", "Occupation Number", "Classical Limit"].map(tag => (
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

        {/* BLOCK 1 — INTRO */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">definitions</span>
            <h3 style={sectionH3}>What a Distribution Describes</h3>

            <p style={prose}>
              In statistical mechanics, a particle distribution tells us how particles occupy the available energy states of a system.
              The exact form depends on particle type, whether the particles are distinguishable or identical, and the thermodynamic
              constraints imposed on the system.
            </p>

            <p style={prose}>
              Once the occupancy of states is known, one can compute average energy, pressure, entropy, and other macroscopic quantities
              from microscopic data.
            </p>

            <ul className="features-list-discreto" style={{ width: "100%", marginTop: "0.2rem" }}>
              <li>
                <b>Occupation probability</b> tells how likely a state is to be populated.
              </li>
              <li>
                <b>Occupation number</b> gives the mean number of particles in a state.
              </li>
              <li>
                <b>Density of states</b> counts how many states exist near a given energy.
              </li>
              <li>
                <b>Thermal equilibrium</b> fixes the final shape of the distribution.
              </li>
            </ul>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">core idea</span>
              <h3 style={sidebarH3}>Microscopic Occupancy</h3>
              <p style={proseSmall}>
                Different statistics arise because particles obey different exchange and occupancy rules.
              </p>
              <p style={proseDim}>
                Classical particles, fermions, and bosons do not populate states in the same way.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">thermodynamic link</span>
              <h3 style={sidebarH3}>From States to Observables</h3>
              <p style={proseSmall}>
                A distribution is not just a list of probabilities; it is a tool for deriving macroscopic behavior from microscopic rules.
              </p>
            </section>

          </div>
        </div>

        {/* BLOCK 2 — MAXWELL-BOLTZMANN */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">classical statistics</span>
            <h3 style={sectionH3}>Maxwell-Boltzmann Distribution</h3>

            <p style={prose}>
              The Maxwell-Boltzmann distribution applies to classical, distinguishable particles in thermal equilibrium at temperature
              <InlineMath math="T" />. For a microstate with energy <InlineMath math="E_i" />, the thermal weight is:
            </p>

            <div className="formula">
              <BlockMath math="P(E_i) = \frac{e^{-E_i/k_B T}}{Z}" />
            </div>

            <div className="formula">
              <BlockMath math="Z = \sum_i e^{-E_i/k_B T}" />
            </div>

            <p style={prose}>
              For a 3D ideal gas, the energy distribution includes the density-of-states factor and becomes:
            </p>

            <div className="formula">
              <BlockMath math="f(E)\,dE \propto \sqrt{E}\,e^{-E/k_B T}\,dE" />
            </div>

            <p style={prose}>
              This is the classical limit of thermal population: higher-energy states are exponentially suppressed, but the available
              phase space also grows with energy.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">partition function</span>
              <h3 style={sidebarH3}>Normalization</h3>
              <p style={proseSmall}>
                The partition function ensures all probabilities add up to 1.
              </p>
              <p style={proseDim}>
                Once <InlineMath math="Z" /> is known, average thermodynamic quantities can be derived.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">classical regime</span>
              <p style={proseSmall}>
                Maxwell-Boltzmann statistics is valid when quantum exchange effects are negligible.
              </p>
            </section>

          </div>
        </div>

        {/* BLOCK 3 — FERMI-DIRAC */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">fermions</span>
            <h3 style={sectionH3}>Fermi-Dirac Distribution</h3>

            <p style={prose}>
              Fermions obey the Pauli exclusion principle, meaning each state can be occupied by at most one particle.
              The mean occupation number is:
            </p>

            <div className="formula">
              <BlockMath math="f_{FD}(E_i) = \frac{1}{e^{(E_i-\mu)/k_B T}+1}" />
            </div>

            <p style={prose}>
              Here <InlineMath math="\mu" /> is the chemical potential. At zero temperature, all states below the chemical potential
              are occupied and all states above it are empty.
            </p>

            <div className="formula">
              <BlockMath math="T=0:\quad f_{FD}(E)=\begin{cases}1,& E<\mu\\0,& E>\mu\end{cases}" />
            </div>

            <p style={prose}>
              This distribution is fundamental for electrons in metals, white dwarfs, neutron matter, and any system of identical fermions.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">pauli exclusion</span>
              <h3 style={sidebarH3}>One Particle per State</h3>
              <p style={proseSmall}>
                Fermions cannot pile into the same quantum state.
              </p>
              <p style={proseDim}>
                This creates the Fermi surface and strongly shapes low-temperature physics.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">degenerate matter</span>
              <p style={proseSmall}>
                When many fermions fill states up to a sharp energy cutoff, quantum pressure appears even at low temperature.
              </p>
            </section>

          </div>
        </div>

        {/* BLOCK 4 — BOSE-EINSTEIN */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">bosons</span>
            <h3 style={sectionH3}>Bose-Einstein Distribution</h3>

            <p style={prose}>
              Bosons are not restricted by the Pauli principle, so many particles can occupy the same state.
              Their mean occupation number is:
            </p>

            <div className="formula">
              <BlockMath math="f_{BE}(E_i) = \frac{1}{e^{(E_i-\mu)/k_B T}-1}" />
            </div>

            <p style={prose}>
              This large-occupancy behavior allows macroscopic occupation of the ground state and leads to Bose-Einstein condensation
              at sufficiently low temperature.
            </p>

            <p style={prose}>
              Bosons are the statistical backbone of phonons, photons, superfluid helium, and condensates.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">multiple occupancy</span>
              <h3 style={sidebarH3}>State Clustering</h3>
              <p style={proseSmall}>
                Bosons tend to gather in the same state rather than repel each other statistically.
              </p>
              <p style={proseDim}>
                That is why condensation can occur in the lowest-energy mode.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">low temperature</span>
              <p style={proseSmall}>
                At low temperature, a large fraction of bosons can occupy the same ground state.
              </p>
            </section>

          </div>
        </div>

        {/* BLOCK 5 — CLASSICAL LIMIT + AVERAGES + KEY TAKEAWAYS */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">limits and averages</span>
            <h3 style={sectionH3}>Classical Limit and Ensemble Averages</h3>

            <p style={prose}>
              In the high-temperature or low-density limit, quantum statistics reduce to the classical Maxwell-Boltzmann form:
            </p>

            <div className="formula">
              <BlockMath math="f(E_i)\approx e^{-(E_i-\mu)/k_B T}" />
            </div>

            <p style={prose}>
              This happens because the occupation of each state becomes small, so the differences between fermions, bosons, and classical particles
              become negligible.
            </p>

            <p style={prose}>
              Macroscopic observables are computed as weighted averages over the distribution:
            </p>

            <div className="formula">
              <BlockMath math="\langle E \rangle = \sum_i E_i P(E_i)" />
            </div>

            <div className="formula">
              <BlockMath math="\langle E \rangle = \int_0^\infty E\, f(E)\, dE" />
            </div>

            <p style={prose}>
              More generally, the particle number in a continuum description is obtained by integrating the occupancy against the density of states:
            </p>

            <div className="formula">
              <BlockMath math="N = \int_0^\infty g(E)\, \bar n(E)\, dE" />
            </div>
          </section>

          {/* SIDEBAR — KEY TAKEAWAYS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}>
              <span className="section-eyebrow">chapter summary</span>
              <h3 style={sidebarH3}>Key Takeaways</h3>

              <ul className="features-list-discreto" style={{ width: "100%" }}>
                <li>
                  <b>Particle distributions</b> describe how particles populate energy states at equilibrium.
                </li>
                <li>
                  <b>Maxwell-Boltzmann</b> applies to classical, distinguishable particles.
                </li>
                <li>
                  <b>Fermi-Dirac</b> governs fermions and enforces the Pauli exclusion principle.
                </li>
                <li>
                  <b>Bose-Einstein</b> governs bosons and allows multiple occupancy of the same state.
                </li>
                <li>
                  The <b>classical limit</b> is recovered when quantum occupancy effects are small.
                </li>
                <li>
                  <b>Average observables</b> come from weighted sums or integrals over the distribution.
                </li>
                <li>
                  The <b>density of states</b> matters as much as the thermal factor.
                </li>
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
                {["MB", "FD", "BE", "Density of States", "Occupation Number", "Classical Limit"].map(tag => (
                  <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>{tag}</span>
                ))}
              </div>
            </section>

          </div>
        </div>
        <NextPrevNavigation 
            next={{path:'/learning/energy-distributions',title:'Energy Distributions'}}
            prev={{path:'/learning/statistical-ensembles', title:'Statistical Ensembles'}}
        />
      </div>

      <Footer />
    </div>
  );
}