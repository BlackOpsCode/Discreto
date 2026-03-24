import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import NavBar from "../../navigation_templates/NavBar";
import RubikCube from '../helpers/RubikCube';
import Footer from '../helpers/Footer';
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

const prose     = { color: "var(--text-soft)",  lineHeight: 1.78, margin: 0, fontSize: "clamp(0.88rem, 1.2vw, 1rem)" };
const proseSm   = { color: "var(--text-muted)", fontSize: "clamp(0.82rem, 1.05vw, 0.94rem)", lineHeight: 1.68, margin: 0 };
const proseDim  = { color: "var(--text-dim)",   fontSize: "0.8rem", lineHeight: 1.6, margin: 0 };
const h3Main    = { fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.4rem)",  color: "var(--text-main)", margin: 0, letterSpacing: "0.03em" };
const h3Side    = { fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(0.9rem, 1.3vw, 1.15rem)", color: "var(--text-main)", margin: 0, letterSpacing: "0.03em" };

export default function TemperatureAndEquilibrium() {
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
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "0.7rem",
          textAlign: "center", marginBottom: "0.5rem",
        }}>
          <span className="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 8 L5 2 L9 8" stroke="currentColor" strokeWidth="1.2"
                strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="5" cy="8.5" r="0.8" fill="currentColor"/>
            </svg>
            chapter 06 · statistical mechanics
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06, letterSpacing: "0.05em",
            color: "var(--text-main)", margin: 0,
          }}>
            Temperature & Equilibrium
          </h1>

          <p style={{ maxWidth: "640px", ...proseSm, color: "var(--text-muted)" }}>
            Temperature is not a primitive concept — it emerges from the statistical
            behavior of microstates. Equilibrium is not stillness — it is the state of
            maximum entropy, where microscopic fluctuations balance macroscopic stability.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["1/T = ∂S/∂E", "Canonical Ensemble", "Partition Function", "Boltzmann Factor", "Fermi–Dirac", "Bose–Einstein"].map(tag => (
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
            BLOCK 1 — Temperature from microstates
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">statistical definition</span>
            <h3 style={h3Main}>Temperature from Microstates</h3>

            <p style={prose}>
              In classical thermodynamics, temperature is introduced as a primitive concept — something
              a thermometer measures. Statistical mechanics does better: it <em>derives</em> temperature
              from the underlying microstate structure of the system.
            </p>

            <p style={prose}>
              Consider a system with <InlineMath math="\Omega(E)" /> accessible microstates at energy <InlineMath math="E" />.
              Boltzmann's entropy is:
            </p>
            <div className="formula"><BlockMath math="S(E) = k_B \ln \Omega(E)" /></div>

            <p style={prose}>
              Temperature is defined as the reciprocal of the rate at which entropy grows with energy —
              holding volume and particle number fixed:
            </p>
            <div className="formula">
              <BlockMath math="\frac{1}{T} = \left(\frac{\partial S}{\partial E}\right)_{N,V}" />
            </div>

            <p style={prose}>
              This definition is remarkably powerful. A system with rapidly increasing <InlineMath math="\Omega(E)" />
              has a <em>low</em> temperature — adding energy creates many new microstates, so it eagerly
              absorbs heat. A system where <InlineMath math="\Omega(E)" /> grows slowly has a
              <em> high</em> temperature — it is already close to its maximum entropy state.
            </p>

            <p style={prose}>
              In the rare case of a population-inverted system (lasers, spin systems),
              <InlineMath math="\Omega(E)" /> actually <em>decreases</em> with energy —
              giving a formally <b style={{ color: "var(--accent)" }}>negative temperature</b>.
              Such systems are hotter than any positive-temperature system.
            </p>

            <ul className="features-list-discreto" style={{ width: "100%", marginTop: "0.2rem" }}>
              <li>
                <b>Low T</b> — <InlineMath math="\Omega(E)" /> grows rapidly with energy.
                System absorbs heat easily.
              </li>
              <li>
                <b>High T</b> — <InlineMath math="\Omega(E)" /> grows slowly.
                System near its entropy maximum.
              </li>
              <li>
                <b>Negative T</b> — <InlineMath math="\Omega(E)" /> decreases with energy.
                Population inversion; hotter than <InlineMath math="T = +\infty" />.
              </li>
            </ul>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">thermodynamic identity</span>
              <h3 style={h3Side}>Full Differential of S</h3>
              <p style={proseSm}>
                Combining the statistical definition of temperature with pressure
                <InlineMath math="\ P = T(\partial S/\partial V)_{E,N}" /> and
                chemical potential <InlineMath math="\mu = -T(\partial S/\partial N)_{E,V}" />:
              </p>
              <div className="formula">
                <BlockMath math="dU = T\,dS - P\,dV + \mu\,dN" />
              </div>
              <p style={proseDim}>
                This is the fundamental thermodynamic identity — all of classical
                thermodynamics in one line, derived from statistics.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">beta parameter</span>
              <p style={proseSm}>
                It is often convenient to work with the inverse temperature:
              </p>
              <div className="formula">
                <BlockMath math="\beta \equiv \frac{1}{k_B T}" />
              </div>
              <p style={proseDim}>
                <InlineMath math="\beta" /> appears naturally in Boltzmann factors,
                partition functions, and quantum field theory. It has units of inverse energy.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 2 — Thermal Equilibrium
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">thermal equilibrium</span>
            <h3 style={h3Main}>Maximizing Entropy at Contact</h3>

            <p style={prose}>
              When two systems A and B are brought into thermal contact — free to exchange
              energy but with fixed total energy <InlineMath math="E_{total} = E_A + E_B" /> —
              energy redistributes until the combined multiplicity is maximized:
            </p>
            <div className="formula">
              <BlockMath math="\Omega_{total}(E_A) = \Omega_A(E_A)\cdot\Omega_B(E_{total} - E_A)" />
            </div>

            <p style={prose}>
              Maximizing <InlineMath math="\Omega_{total}" /> is equivalent to maximizing
              <InlineMath math="\ S_{total} = S_A + S_B" />. Taking the derivative and
              setting it to zero:
            </p>
            <div className="formula">
              <BlockMath math="\frac{\partial S_A}{\partial E_A} = \frac{\partial S_B}{\partial E_B} \quad \Longrightarrow \quad T_A = T_B" />
            </div>

            <p style={prose}>
              Equilibrium is not a static state — particles continue to exchange energy
              microscopically. But the <em>macrostate</em> is stable: fluctuations away from
              the equilibrium energy split are exponentially suppressed in system size.
            </p>

            <p style={prose}>
              If initially <InlineMath math="T_A > T_B" />, then
              <InlineMath math="\ \partial S_A/\partial E_A < \partial S_B/\partial E_B" />,
              meaning entropy increases when energy flows from A to B. Heat flows from hot to cold
              — not as a law, but as the direction of increasing total multiplicity.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">equilibrium condition</span>
              <h3 style={h3Side}>Maximum Entropy Principle</h3>
              <div className="formula">
                <BlockMath math="\delta S_{total} = 0 \quad \text{at equilibrium}" />
              </div>
              <div className="formula">
                <BlockMath math="\frac{\partial^2 S}{\partial E^2} < 0 \quad \text{(stability)}" />
              </div>
              <p style={proseDim}>
                The negative second derivative ensures the extremum is a maximum —
                equilibrium is stable against small energy fluctuations.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">heat flow direction</span>
              <p style={proseSm}>
                Energy flows from high <InlineMath math="T" /> to low <InlineMath math="T" /> because:
              </p>
              <div className="formula">
                <BlockMath math="\frac{dS_{total}}{dt} = \left(\frac{1}{T_B} - \frac{1}{T_A}\right)\frac{dE_B}{dt} \geq 0" />
              </div>
              <p style={proseDim}>
                If <InlineMath math="T_A > T_B" />, then <InlineMath math="1/T_B > 1/T_A" />,
                so <InlineMath math="dE_B/dt > 0" /> — B gains energy. Heat flows from A to B.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 3 — Canonical Ensemble
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">canonical ensemble</span>
            <h3 style={h3Main}>System in Contact with a Heat Bath</h3>

            <p style={prose}>
              The microcanonical ensemble describes an isolated system. More experimentally
              relevant is a system coupled to a large heat reservoir at fixed temperature <InlineMath math="T" />.
              This is the <b style={{ color: "var(--accent)" }}>canonical ensemble</b>.
            </p>

            <p style={prose}>
              The probability of finding the system in microstate <InlineMath math="i" /> with
              energy <InlineMath math="E_i" /> is given by the Boltzmann distribution:
            </p>
            <div className="formula">
              <BlockMath math="P(E_i) = \frac{e^{-\beta E_i}}{Z}, \qquad \beta = \frac{1}{k_B T}" />
            </div>

            <p style={prose}>
              The <b style={{ color: "var(--accent)" }}>partition function</b> <InlineMath math="Z" /> normalizes
              the probabilities and encodes all thermodynamic information about the system:
            </p>
            <div className="formula">
              <BlockMath math="Z = \sum_i e^{-\beta E_i}" />
            </div>

            <p style={prose}>
              All thermodynamic quantities follow from derivatives of <InlineMath math="\ln Z" />.
              The average energy and its fluctuations:
            </p>
            <div className="formula">
              <BlockMath math="\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta}" />
            </div>
            <div className="formula">
              <BlockMath math="\sigma_E^2 = \langle E^2\rangle - \langle E\rangle^2 = \frac{\partial^2 \ln Z}{\partial \beta^2} = k_B T^2 C_V" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              The last relation is remarkable: energy fluctuations are directly proportional to
              the heat capacity <InlineMath math="C_V" />. A system with large heat capacity
              can absorb energy with minimal temperature change — and has large microscopic fluctuations.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">free energy</span>
              <h3 style={h3Side}>Helmholtz Free Energy</h3>
              <p style={proseSm}>
                The partition function connects directly to the Helmholtz free energy <InlineMath math="F" />:
              </p>
              <div className="formula">
                <BlockMath math="F = -k_B T \ln Z" />
              </div>
              <div className="formula">
                <BlockMath math="F = U - TS" />
              </div>
              <p style={proseDim}>
                <InlineMath math="F" /> is minimized at equilibrium for a system at constant <InlineMath math="T" /> and <InlineMath math="V" />.
                It is the thermodynamic potential for the canonical ensemble.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">derived quantities</span>
              <p style={proseSm}>All thermodynamics from <InlineMath math="\ln Z" />:</p>
              <div className="formula">
                <BlockMath math="S = k_B\!\left(\ln Z + \beta\langle E\rangle\right)" />
              </div>
              <div className="formula">
                <BlockMath math="P = k_B T \left(\frac{\partial \ln Z}{\partial V}\right)_T" />
              </div>
              <div className="formula">
                <BlockMath math="C_V = \frac{\partial \langle E\rangle}{\partial T}\bigg|_V" />
              </div>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 4 — Distributions + Summary
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">equilibrium distributions</span>
            <h3 style={h3Main}>How Particles Occupy Energy States</h3>

            <p style={prose}>
              At equilibrium, the distribution function <InlineMath math="f(E_i)" /> describes the average
              occupation of state <InlineMath math="i" /> with energy <InlineMath math="E_i" />.
              The form depends critically on whether particles are distinguishable or not,
              and whether they obey Fermi or Bose statistics.
            </p>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Maxwell–Boltzmann</b> (classical, distinguishable particles):
            </p>
            <div className="formula">
              <BlockMath math="f_{MB}(E_i) \propto e^{-E_i / k_B T}" />
            </div>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Fermi–Dirac</b> (fermions — electrons, protons, quarks).
              The Pauli exclusion principle limits occupation to 0 or 1:
            </p>
            <div className="formula">
              <BlockMath math="f_{FD}(E_i) = \frac{1}{e^{(E_i - \mu)/k_B T} + 1}" />
            </div>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Bose–Einstein</b> (bosons — photons, phonons, <InlineMath math="^4" />He).
              No restriction on occupation — many particles can share a state:
            </p>
            <div className="formula">
              <BlockMath math="f_{BE}(E_i) = \frac{1}{e^{(E_i - \mu)/k_B T} - 1}" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              At high temperature or low density, both quantum distributions converge
              to the classical Maxwell–Boltzmann form — quantum identity becomes irrelevant
              when states are sparsely occupied.
            </p>
          </section>

          {/* SIDEBAR — summary */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}>
            <span className="section-eyebrow">chapter summary</span>
            <h3 style={h3Side}>Key Takeaways</h3>

            <ul className="features-list-discreto" style={{ width: "100%" }}>
              <li>
                <b>Temperature</b> is defined statistically as{" "}
                <InlineMath math="1/T = \partial S/\partial E" /> —
                a measure of how fast entropy grows with energy.
              </li>
              <li>
                <b>Thermal equilibrium</b> is the macrostate of maximum total entropy.
                It requires <InlineMath math="T_A = T_B" />.
              </li>
              <li>
                <b>Heat flows</b> from high to low temperature because that direction
                increases <InlineMath math="\Omega_{total}" />.
              </li>
              <li>
                The <b>canonical ensemble</b> describes a system at fixed <InlineMath math="T" />.
                Microstate probabilities follow the Boltzmann distribution.
              </li>
              <li>
                The <b>partition function</b> <InlineMath math="Z = \sum_i e^{-\beta E_i}" /> encodes
                all thermodynamic properties via derivatives of <InlineMath math="\ln Z" />.
              </li>
              <li>
                <b>Energy fluctuations</b> <InlineMath math="\sigma_E^2 = k_B T^2 C_V" /> link
                microscopic variance to macroscopic heat capacity.
              </li>
              <li>
                <b>Distribution functions</b> depend on particle statistics —
                MB for classical, FD for fermions, BE for bosons.
              </li>
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
              {["1/T = ∂S/∂E", "β = 1/kT", "Z = Σe^{-βE}", "F = -kT ln Z", "Fermi–Dirac", "Bose–Einstein", "σ² = kT²Cv"].map(tag => (
                <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>{tag}</span>
              ))}
            </div>
          </section>

        </div>
        <NextPrevNavigation
            next={{path:'/learning/gases-and-multiparticle-systems', title:'Gases and multiparticle-systems'}}
            prev={{path:'/learning/energy-distributions', title:'Energy Distributions'}}/>
      </div>
        <Footer/>
    </div>
  );
}