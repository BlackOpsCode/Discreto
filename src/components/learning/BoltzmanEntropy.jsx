import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import NavBar from "../../navigation_templates/NavBar";
import RubikCube from '../helpers/RubikCube';
import Footer from '../helpers/Footer';
import { title } from '../quizes/Quiz3';
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

export default function BoltzmannEntropy() {
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
                strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="5" cy="8.5" r="0.8" fill="currentColor" />
            </svg>
            chapter 02 · statistical mechanics
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06,
            letterSpacing: "0.05em",
            color: "var(--text-main)",
            margin: 0,
          }}>
            Boltzmann Entropy & Distribution Functions
          </h1>

          <p style={{ maxWidth: "640px", ...proseSmall, color: "var(--text-muted)" }}>
            Entropy is the bridge between microscopic counting and macroscopic thermodynamics.
            Once the accessible microstates are known, equilibrium probabilities, thermal distributions,
            and the structure of the canonical ensemble follow naturally.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["Multiplicity", "Entropy", "Boltzmann Factor", "Partition Function", "Canonical Ensemble", "Gibbs Entropy"].map(tag => (
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

        {/* ══════════════════════════
            BLOCK 1 — Definitions
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">definitions</span>
            <h3 style={sectionH3}>Entropy as Counting</h3>

            <p style={prose}>
              In statistical mechanics, entropy measures how many microscopic configurations are compatible with a given
              macroscopic state. A macrostate is described by variables such as energy <InlineMath math="E" />,
              particle number <InlineMath math="N" />, and volume <InlineMath math="V" />.
              A microstate specifies the exact positions and momenta of all particles.
            </p>

            <p style={prose}>
              The central Boltzmann relation is:
            </p>

            <div className="formula">
              <BlockMath math="S = k_B \ln \Omega" />
            </div>

            <p style={prose}>
              Here <InlineMath math="\Omega" /> is the multiplicity: the number of accessible microstates corresponding
              to the same macrostate. The logarithm is essential because multiplicities multiply for independent subsystems,
              while entropy must add.
            </p>

            <ul className="features-list-discreto" style={{ width: "100%", marginTop: "0.2rem" }}>
              <li>
                <b>Macrostate</b> — specified by coarse variables like <InlineMath math="(E, N, V)" />.
              </li>
              <li>
                <b>Microstate</b> — the exact microscopic configuration of the system.
              </li>
              <li>
                <b>Multiplicity</b> <InlineMath math="\Omega" /> — number of microstates compatible with a macrostate.
              </li>
              <li>
                <b>Entropy</b> <InlineMath math="S" /> — logarithmic measure of multiplicity.
              </li>
            </ul>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">boltzmann constant</span>
              <h3 style={sidebarH3}>Energy Scale</h3>
              <div className="formula">
                <BlockMath math="k_B = 1.380649 \times 10^{-23}\,\text{J K}^{-1}" />
              </div>
              <p style={proseDim}>
                It converts microscopic energy into macroscopic thermal units.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">phase space</span>
              <h3 style={sidebarH3}>State Space</h3>
              <p style={proseSmall}>
                For <InlineMath math="N" /> particles, each with 3 position and 3 momentum coordinates, the phase space dimension is:
              </p>
              <div className="formula">
                <BlockMath math="\dim(\Gamma)=6N" />
              </div>
              <p style={proseDim}>
                This huge dimensionality is why statistical methods are necessary.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 2 — Equal a priori postulate
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">probability</span>
            <h3 style={sectionH3}>Equal A Priori Probability</h3>

            <p style={prose}>
              For an isolated system in equilibrium, every accessible microstate is taken to be equally probable.
              This is the equal a priori postulate, and it is the bridge from counting to thermodynamics.
            </p>

            <div className="formula">
              <BlockMath math="P_i=\frac{1}{\Omega(E,N,V)}" />
            </div>

            <p style={prose}>
              If multiple macrostates are possible, then the probability of a macrostate is proportional to how many
              microstates it contains:
            </p>

            <div className="formula">
              <BlockMath math="P_j=\frac{\Omega_j}{\sum_k \Omega_k}" />
            </div>

            <p style={prose}>
              The most probable macrostate is the one with the largest multiplicity, which is why equilibrium corresponds
              to maximum entropy.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">statistical meaning</span>
              <h3 style={sidebarH3}>Why Equilibrium Emerges</h3>
              <p style={proseSmall}>
                Macrostate probabilities are not assigned arbitrarily; they emerge from the number of microscopic realizations.
              </p>
              <p style={proseDim}>
                States with larger <InlineMath math="\Omega" /> dominate because they occupy far more of phase space.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">thermodynamic limit</span>
              <h3 style={sidebarH3}>Large Systems</h3>
              <p style={proseSmall}>
                In macroscopic systems, multiplicities become astronomically large, so the peak of the distribution is overwhelmingly dominant.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 3 — Entropy properties
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">entropy</span>
            <h3 style={sectionH3}>Why the Logarithm Appears</h3>

            <p style={prose}>
              The logarithm turns multiplicative counting into additive entropy. For two independent systems A and B,
              the total multiplicity is the product of the individual multiplicities:
            </p>

            <div className="formula">
              <BlockMath math="\Omega_{A+B}=\Omega_A\Omega_B" />
            </div>

            <p style={prose}>
              Therefore,
            </p>

            <div className="formula">
              <BlockMath math="S_{A+B}=k_B\ln(\Omega_A\Omega_B)=S_A+S_B" />
            </div>

            <p style={prose}>
              This additivity is the reason entropy is extensive in the thermodynamic limit.
            </p>

            <p style={prose}>
              Another key definition links entropy to temperature:
            </p>

            <div className="formula">
              <BlockMath math="\frac{1}{T}=\left(\frac{\partial S}{\partial U}\right)_{N,V}" />
            </div>

            <p style={prose}>
              This means temperature is not merely a measure of average kinetic energy; in statistical mechanics it is the
              slope of entropy with respect to energy.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">second law</span>
              <h3 style={sidebarH3}>Statistical Interpretation</h3>
              <p style={proseSmall}>
                The entropy of an isolated system tends to increase because high-entropy macrostates correspond to vastly more microstates.
              </p>
              <p style={proseDim}>
                The reverse is not forbidden; it is simply extremely improbable.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">extensivity</span>
              <h3 style={sidebarH3}>Additivity Check</h3>
              <div className="formula">
                <BlockMath math="S \propto \ln \Omega" />
              </div>
              <p style={proseDim}>
                The logarithm is the unique natural choice that preserves additivity for independent subsystems.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 4 — Boltzmann distribution
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">canonical ensemble</span>
            <h3 style={sectionH3}>Boltzmann Distribution</h3>

            <p style={prose}>
              When a system is in thermal contact with a heat bath at temperature <InlineMath math="T" />, states with higher
              energy are suppressed by an exponential factor. This leads to the Boltzmann distribution:
            </p>

            <div className="formula">
              <BlockMath math="P(E_i)=\frac{e^{-E_i/k_B T}}{Z}" />
            </div>

            <p style={prose}>
              The partition function normalizes the probabilities:
            </p>

            <div className="formula">
              <BlockMath math="Z=\sum_i e^{-E_i/k_B T}" />
            </div>

            <p style={prose}>
              Once <InlineMath math="Z" /> is known, the thermodynamic quantities follow:
              <InlineMath math="F=-k_B T\ln Z" /> for the Helmholtz free energy, and derivatives of <InlineMath math="Z" />
              give the mean energy, entropy, and fluctuations.
            </p>

            <p style={prose}>
              The canonical ensemble is the natural description of a system that can exchange energy but not particles with its environment.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">boltzmann factor</span>
              <h3 style={sidebarH3}>Relative Weight</h3>
              <p style={proseSmall}>
                The factor <InlineMath math="e^{-E_i/k_BT}" /> gives the relative likelihood of a state with energy <InlineMath math="E_i" />.
              </p>
              <p style={proseDim}>
                Lower-energy states are favored, especially at low temperature.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">partition function</span>
              <h3 style={sidebarH3}>Thermodynamic Generator</h3>
              <p style={proseSmall}>
                The partition function is a compact encoding of all equilibrium thermodynamics.
              </p>
              <div className="formula">
                <BlockMath math="F=-k_B T\ln Z" />
              </div>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 5 — Two-level system
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">worked example</span>
            <h3 style={sectionH3}>Two-Level System</h3>

            <p style={prose}>
              A simple and instructive example is a system of <InlineMath math="N" /> particles, each with two possible
              energy levels: <InlineMath math="E_0=0" /> and <InlineMath math="E_1=\epsilon" />.
              If <InlineMath math="n" /> particles are excited, the multiplicity is:
            </p>

            <div className="formula">
              <BlockMath math="\Omega(n)=\binom{N}{n}=\frac{N!}{n!(N-n)!}" />
            </div>

            <p style={prose}>
              The entropy of that macrostate is therefore:
            </p>

            <div className="formula">
              <BlockMath math="S(n)=k_B\ln \binom{N}{n}" />
            </div>

            <p style={prose}>
              This model appears in spin systems, paramagnets, and any situation where a binary occupation number
              is a useful coarse-grained description.
            </p>

            <p style={prose}>
              The probability that a particle occupies the excited state is:
            </p>

            <div className="formula">
              <BlockMath math="P(E_1)=\frac{e^{-\epsilon/k_B T}}{1+e^{-\epsilon/k_B T}}" />
            </div>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">microstate count</span>
              <h3 style={sidebarH3}>Combinatorics</h3>
              <p style={proseSmall}>
                The binomial coefficient counts the number of ways to choose which particles are excited.
              </p>
              <p style={proseDim}>
                This is the discrete version of entropy maximization.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">temperature dependence</span>
              <h3 style={sidebarH3}>Occupancy Shift</h3>
              <p style={proseSmall}>
                As temperature rises, the excited state becomes more populated.
                As temperature falls, the ground state dominates.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
    BLOCK 6 — Continuous + Summary
══════════════════════════ */}
<div className="article-layout" style={articleLayout}>

  {/* MAIN */}
  <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
    <span className="section-eyebrow">continuous systems</span>
    <h3 style={sectionH3}>Distribution Functions and Gibbs Entropy</h3>

    <p style={prose}>
      For continuous energy variables, one replaces discrete probabilities with a distribution function
      <InlineMath math="f(E)" /> such that:
    </p>

    <div className="formula">
      <BlockMath math="\int_0^\infty f(E)\,dE=N" />
    </div>

    <div className="formula">
      <BlockMath math="S=-k_B\int f(E)\ln f(E)\,dE" />
    </div>

    <p style={prose}>
      This is the continuous analogue of Boltzmann entropy and is widely used in kinetic theory and statistical field theory.
    </p>

    <p style={prose}>
      In the thermodynamic limit, Stirling’s approximation simplifies factorial expressions:
    </p>

    <div className="formula">
      <BlockMath math="\ln N! \approx N\ln N - N" />
    </div>
  </section>

  {/* SIDEBAR — KEY TAKEAWAYS */}
  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

    <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}>
      <span className="section-eyebrow">chapter summary</span>
      <h3 style={sidebarH3}>Key Takeaways</h3>

      <ul className="features-list-discreto" style={{ width: "100%" }}>
        <li>
          <b>Entropy</b> is defined by <InlineMath math="S = k_B \ln \Omega" />.
        </li>
        <li>
          <b>Microstates</b> vs <b>macrostates</b> define the statistical description of matter.
        </li>
        <li>
          <b>Equal a priori probability</b> leads to equilibrium as maximum multiplicity.
        </li>
        <li>
          <b>Boltzmann distribution</b> governs systems in contact with a heat bath.
        </li>
        <li>
          <b>Partition function</b> <InlineMath math="Z" /> encodes full thermodynamics.
        </li>
        <li>
          <b>Two-level systems</b> illustrate entropy through combinatorics.
        </li>
        <li>
          <b>Continuous systems</b> use distribution functions and Gibbs entropy.
        </li>
      </ul>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
        {["S = k·ln Ω", "Boltzmann Factor", "Partition Function", "Gibbs Entropy", "Stirling"].map(tag => (
          <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>{tag}</span>
        ))}
      </div>
    </section>

        </div>
        </div>
        <NextPrevNavigation
                prev={{
                    path: '/learning/microstates-vs-macrostates', title:'Microstates vs Macrostates'
                }}  // sau ceva curs anterior
                next={{
                    path: "/learning/statistical-ensembles",
                    title: "Statistical Ensembles"
                }}
        />

      </div>

      <Footer />
    </div>
  );
}