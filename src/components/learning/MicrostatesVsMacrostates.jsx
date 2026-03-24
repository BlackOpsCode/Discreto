import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import NavBar from "../../navigation_templates/NavBar";
import RubikCube from '../helpers/RubikCube';
import Footer from '../helpers/Footer';
import NextPrevNavigation from '../helpers/NextPrevNavigation';
import { NoToneMapping } from 'three';

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

export default function MicrostatesVsMacrostates() {
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
            chapter 01 · statistical mechanics
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06,
            letterSpacing: "0.05em",
            color: "var(--text-main)",
            margin: 0,
          }}>
            Microstates vs Macrostates
          </h1>

          <p style={{ maxWidth: "640px", ...proseSmall, color: "var(--text-muted)" }}>
            Every observable property of matter — temperature, pressure, entropy —
            emerges from the collective behavior of an enormous number of particles.
            Understanding the two levels of description is the foundation of statistical mechanics.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["Multiplicity", "Entropy", "S = k·ln Ω", "Second Law", "Phase Space", "Boltzmann"].map(tag => (
              <span key={tag} className="stat-chip" style={{ fontSize: "0.66rem" }}>{tag}</span>
            ))}
          </div>

          <div style={{ position: "relative", marginTop: "0.4rem", display: "inline-flex" }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(circle, rgba(141,255,196,0.1) 0%, transparent 70%)",
              filter: "blur(12px)", borderRadius: "50%", pointerEvents: "none",
            }}/>
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
            <h3 style={sectionH3}>Two Levels of Description</h3>

            <p style={prose}>
              Classical thermodynamics describes a gas using a handful of macroscopic variables —
              pressure <InlineMath math="P" />, volume <InlineMath math="V" />, temperature <InlineMath math="T" />,
              and internal energy <InlineMath math="U" />. These define the{" "}
              <b style={{ color: "var(--accent)" }}>macrostate</b>: coarse-grained, experimentally
              accessible, and blind to the behavior of any individual molecule.
            </p>

            <p style={prose}>
              Beneath the macrostate lies the <b style={{ color: "var(--accent)" }}>microstate</b>:
              the exact specification of position <InlineMath math="\mathbf{r}_i" /> and
              momentum <InlineMath math="\mathbf{p}_i" /> of every particle <InlineMath math="i = 1,\ldots,N" />.
              Together these form a single point in <b style={{ color: "var(--accent)" }}>phase space</b> —
              a <InlineMath math="6N" />-dimensional space.
            </p>

            <p style={prose}>
              The central insight: one macrostate corresponds to an <em>astronomically large</em> number
              of microstates. The <b style={{ color: "var(--accent)" }}>multiplicity</b> <InlineMath math="\Omega" /> counts them.
              All accessible microstates are equally probable — this single postulate
              generates all of thermodynamics.
            </p>

            <ul className="features-list-discreto" style={{ width: "100%", marginTop: "0.2rem" }}>
              <li>
                <b>Macrostate</b> — defined by <InlineMath math="(N, V, U)" />.
                Thousands of microscopic configurations are compatible with it.
              </li>
              <li>
                <b>Microstate</b> — a single point in <InlineMath math="6N" />-dimensional phase space.
                Fully specifies the system at an instant.
              </li>
              <li>
                <b>Multiplicity</b> <InlineMath math="\Omega" /> — number of microstates
                compatible with a macrostate. The core object of statistical mechanics.
              </li>
              <li>
                <b>Equal a priori postulate</b> — all accessible microstates are equally likely
                for an isolated system in equilibrium.
              </li>
            </ul>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">phase space</span>
              <h3 style={sidebarH3}>State Space Dimension</h3>
              <p style={proseSmall}>
                Each particle needs 3 position + 3 momentum coordinates.
                For <InlineMath math="N" /> particles the phase space dimension is:
              </p>
              <div className="formula"><BlockMath math="\dim(\Gamma) = 6N" /></div>
              <p style={proseDim}>
                For one mole: <InlineMath math="6 \times 6.022 \times 10^{23}" /> dimensions.
                Impossible to track directly — statistical methods are the only option.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">equal a priori probability</span>
              <p style={proseSmall}>
                For an isolated system with fixed <InlineMath math="(N, V, U)" />,
                each accessible microstate has identical probability:
              </p>
              <div className="formula">
                <BlockMath math="P_i = \frac{1}{\Omega(U,V,N)}" />
              </div>
              <p style={proseDim}>
                This assumption — plus combinatorics — is sufficient to derive
                all of equilibrium thermodynamics from scratch.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 2 — Entropy
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">entropy</span>
            <h3 style={sectionH3}>Boltzmann's Insight</h3>

            <p style={prose}>
              Boltzmann's key contribution was connecting <InlineMath math="\Omega" /> to the
              macroscopic entropy <InlineMath math="S" /> through a logarithm.
              The logarithm is not arbitrary: it guarantees entropy is <em>extensive</em>
              — doubling a system doubles its entropy.
            </p>

            <div className="formula"><BlockMath math="S = k_B \ln \Omega" /></div>

            <p style={prose}>
              For two independent subsystems with multiplicities <InlineMath math="\Omega_A" /> and{" "}
              <InlineMath math="\Omega_B" />, the combined system has
              <InlineMath math="\ \Omega = \Omega_A \cdot \Omega_B" />.
              Since <InlineMath math="\ln(AB) = \ln A + \ln B" />, entropy adds:
            </p>

            <div className="formula"><BlockMath math="S_{total} = S_A + S_B" /></div>

            <p style={prose}>
              Temperature <InlineMath math="T" /> emerges from the rate at which entropy grows
              with energy — a purely statistical definition that matches the thermodynamic one:
            </p>

            <div className="formula">
              <BlockMath math="\frac{1}{T} = \left(\frac{\partial S}{\partial U}\right)_{N,V}" />
            </div>

            <p style={prose}>
              When two systems are brought into thermal contact, energy flows until their temperatures
              equalize — which is precisely when the combined <InlineMath math="\Omega_{total}" /> is maximized.
              Equilibrium is the macrostate of maximum multiplicity.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">boltzmann constant</span>
              <h3 style={sidebarH3}>Fundamental Constants</h3>
              <div className="formula">
                <BlockMath math="k_B = 1.380649 \times 10^{-23}\, \text{J K}^{-1}" />
              </div>
              <p style={proseDim}>
                Sets the scale between microscopic energy and macroscopic temperature.
                Defined exactly since the 2019 SI redefinition.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">extensivity proof</span>
              <p style={proseSmall}>
                Entropy is additive because multiplicity is multiplicative:
              </p>
              <div className="formula">
                <BlockMath math="\Omega_{A+B} = \Omega_A \cdot \Omega_B" />
              </div>
              <div className="formula">
                <BlockMath math="S_{A+B} = k_B \ln(\Omega_A \Omega_B) = S_A + S_B" />
              </div>
              <p style={proseDim}>
                The logarithm is the unique function that converts multiplication into addition.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">second law — statistical view</span>
              <p style={proseSmall}>
                The entropy of an isolated system never decreases — not because of a law of nature,
                but because high-<InlineMath math="\Omega" /> macrostates outnumber
                low-<InlineMath math="\Omega" /> ones by factors of <InlineMath math="10^{10^{23}}" />.
                The reverse process is not impossible — just absurdly improbable.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 3 — Einstein Solid + Summary
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">worked example</span>
            <h3 style={sectionH3}>Einstein Solid — Counting Microstates</h3>

            <p style={prose}>
              An Einstein solid consists of <InlineMath math="N" /> quantum harmonic oscillators
              sharing <InlineMath math="q" /> indistinguishable energy quanta. The multiplicity —
              the number of ways to distribute <InlineMath math="q" /> quanta among <InlineMath math="N" /> oscillators — is:
            </p>

            <div className="formula">
              <BlockMath math="\Omega(N, q) = \binom{q + N - 1}{q} = \frac{(q+N-1)!}{q!\,(N-1)!}" />
            </div>

            <p style={prose}>
              Split the solid into two halves A and B with <InlineMath math="N_A = N_B = 3" /> and
              total quanta <InlineMath math="q_{total} = 6" />. For each energy split <InlineMath math="q_A" />,
              compute <InlineMath math="\Omega_A \cdot \Omega_B" />:
            </p>

            <div className="formula">
              <BlockMath math="\Omega_{total}(q_A) = \Omega(3,q_A)\cdot\Omega(3,6-q_A)" />
            </div>

            <p style={prose}>
              The most probable macrostate is the even split <InlineMath math="q_A = 3" />,
              which has the largest <InlineMath math="\Omega_{total}" />.
              In the large-<InlineMath math="N" /> limit, applying Stirling's approximation
              <InlineMath math="\ \ln N! \approx N\ln N - N" />:
            </p>

            <div className="formula">
              <BlockMath math="S \approx Nk_B\!\left[\!\left(1+\frac{q}{N}\right)\ln\!\left(1+\frac{q}{N}\right) - \frac{q}{N}\ln\frac{q}{N}\right]" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              This is the full thermodynamic entropy of the Einstein solid —
              derived purely by counting microstates. From this, one can extract temperature,
              heat capacity, and the equipartition theorem at high temperatures.
            </p>
          </section>

          {/* SIDEBAR — summary */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}>
            <span className="section-eyebrow">chapter summary</span>
            <h3 style={sidebarH3}>Key Takeaways</h3>

            <ul className="features-list-discreto" style={{ width: "100%" }}>
              <li>
                A <b>macrostate</b> is fully described by <InlineMath math="(N, V, U)" />.
                Thousands of microscopic configurations are compatible with it.
              </li>
              <li>
                A <b>microstate</b> is a point in <InlineMath math="6N" />-dimensional
                phase space — a complete snapshot.
              </li>
              <li>
                <b>Multiplicity</b> <InlineMath math="\Omega" /> counts compatible microstates.
                The larger <InlineMath math="\Omega" />, the more probable the macrostate.
              </li>
              <li>
                <b>Entropy</b> <InlineMath math="S = k_B \ln \Omega" /> is extensive
                by construction and grows with multiplicity.
              </li>
              <li>
                <b>Temperature</b> is defined statistically as{" "}
                <InlineMath math="1/T = \partial S/\partial U" />.
              </li>
              <li>
                The <b>second law</b> is a statement of probability, not a fundamental law —
                high-<InlineMath math="\Omega" /> states vastly outnumber low-<InlineMath math="\Omega" /> ones.
              </li>
              <li>
                <b>Stirling's approximation</b> allows entropy to be computed analytically
                in the thermodynamic limit.
              </li>
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
              {["S = k·ln Ω", "Phase Space", "Multiplicity", "Stirling", "Einstein Solid", "Extensivity", "1/T = ∂S/∂U"].map(tag => (
                <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>{tag}</span>
              ))}
            </div>
          </section>

        </div>
        <NextPrevNavigation
  prev={null}  // sau ceva curs anterior
  next={{
    path: "/learning/boltzmann-entropy",
    title: "Boltzmann Entropy"
  }}
/>
      </div>
      <Footer/>
    </div>
  );
}