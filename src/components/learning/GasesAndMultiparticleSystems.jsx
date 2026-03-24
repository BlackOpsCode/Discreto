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

const prose    = { color: "var(--text-soft)",  lineHeight: 1.78, margin: 0, fontSize: "clamp(0.88rem, 1.2vw, 1rem)" };
const proseSm  = { color: "var(--text-muted)", fontSize: "clamp(0.82rem, 1.05vw, 0.94rem)", lineHeight: 1.68, margin: 0 };
const proseDim = { color: "var(--text-dim)",   fontSize: "0.8rem", lineHeight: 1.6, margin: 0 };
const h3Main   = { fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.4rem)",   color: "var(--text-main)", margin: 0, letterSpacing: "0.03em" };
const h3Side   = { fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(0.9rem, 1.3vw, 1.15rem)", color: "var(--text-main)", margin: 0, letterSpacing: "0.03em" };

export default function GasesAndMultiparticleSystems() {
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
            chapter 07 · statistical mechanics
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06, letterSpacing: "0.05em",
            color: "var(--text-main)", margin: 0,
          }}>
            Gases & Multiparticle Systems
          </h1>

          <p style={{ maxWidth: "660px", ...proseSm, color: "var(--text-muted)" }}>
            Gases are the ideal laboratory for statistical mechanics. Each molecule
            behaves individually, yet the collective behavior obeys precise macroscopic
            laws — pressure, temperature, entropy — that emerge purely from statistical averages
            over an astronomical number of microstates.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["Maxwell–Boltzmann", "Ideal Gas Law", "Phase Space", "Density of States", "Equipartition", "Gibbs Correction"].map(tag => (
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
            BLOCK 1 — Microstate of a Gas
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">microstates of a gas</span>
            <h3 style={h3Main}>From Particles to Phase Space</h3>

            <p style={prose}>
              A gas of <InlineMath math="N" /> particles is a many-body system whose
              microstate is fully specified by the positions and momenta of all particles:
            </p>
            <div className="formula">
              <BlockMath math="\{\,\vec{r}_1,\ldots,\vec{r}_N;\;\vec{p}_1,\ldots,\vec{p}_N\,\}" />
            </div>

            <p style={prose}>
              This is a single point in <InlineMath math="6N" />-dimensional phase space.
              The macrostate, by contrast, is described by just a handful of variables:
              total particle number <InlineMath math="N" />, volume <InlineMath math="V" />,
              total energy <InlineMath math="E" />, pressure <InlineMath math="P" />,
              and temperature <InlineMath math="T" />.
            </p>

            <p style={prose}>
              The multiplicity <InlineMath math="\Omega(E,V,N)" /> counts how many microstates
              are compatible with the macrostate. From it, all thermodynamic properties follow:
            </p>
            <div className="formula">
              <BlockMath math="S(E,V,N) = k_B \ln \Omega(E,V,N)" />
            </div>

            <p style={prose}>
              Pressure and chemical potential emerge as partial derivatives of entropy,
              alongside temperature — placing the ideal gas law on a purely statistical foundation:
            </p>
            <div className="formula">
              <BlockMath math="P = T\!\left(\frac{\partial S}{\partial V}\right)_{E,N}, \qquad \mu = -T\!\left(\frac{\partial S}{\partial N}\right)_{E,V}" />
            </div>

            <ul className="features-list-discreto" style={{ width: "100%", marginTop: "0.2rem" }}>
              <li>
                <b>Microstate</b> — <InlineMath math="(\vec{r}_i, \vec{p}_i)" /> for all <InlineMath math="i = 1,\ldots,N" />.
                A point in <InlineMath math="6N" />-dimensional phase space.
              </li>
              <li>
                <b>Macrostate</b> — <InlineMath math="(N, V, E)" /> or equivalently <InlineMath math="(N, V, T)" />.
                Accessible by measurement.
              </li>
              <li>
                <b>Multiplicity</b> <InlineMath math="\Omega(E,V,N)" /> — the bridge between
                microscopic counting and macroscopic thermodynamics.
              </li>
            </ul>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">phase space volume</span>
              <h3 style={h3Side}>Γ-Space</h3>
              <p style={proseSm}>
                The volume of phase space accessible to all states with energy
                below <InlineMath math="E" /> is:
              </p>
              <div className="formula">
                <BlockMath math="\Gamma(E) = \frac{1}{h^{3N} N!}\int_{H \leq E} d^{3N}r\; d^{3N}p" />
              </div>
              <p style={proseDim}>
                <InlineMath math="h^{3N}" /> sets the quantum cell size in phase space.
                <InlineMath math="N!" /> corrects for the indistinguishability of identical particles
                (Gibbs correction).
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">density of states</span>
              <p style={proseSm}>
                The density of states is the derivative of the accessible phase space volume
                with respect to energy:
              </p>
              <div className="formula">
                <BlockMath math="\Omega(E) = \frac{\partial \Gamma(E)}{\partial E}" />
              </div>
              <p style={proseDim}>
                For a monatomic ideal gas: <InlineMath math="\Omega(E) \propto E^{3N/2 - 1} V^N" />.
                Entropy grows logarithmically with this quantity.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 2 — Ideal Gas
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">ideal gas model</span>
            <h3 style={h3Main}>Non-Interacting Particles</h3>

            <p style={prose}>
              In the ideal gas model, particles are non-interacting — their only energy is kinetic.
              The total Hamiltonian separates into independent single-particle terms:
            </p>
            <div className="formula">
              <BlockMath math="H = \sum_{i=1}^N \frac{p_i^2}{2m}" />
            </div>

            <p style={prose}>
              Because particles are independent, the joint probability factorizes.
              The probability of finding a single particle with momentum <InlineMath math="\vec{p}" />
              follows the Maxwell–Boltzmann distribution:
            </p>
            <div className="formula">
              <BlockMath math="f(\vec{p}) = \left(\frac{1}{2\pi m k_B T}\right)^{3/2} e^{-\frac{p^2}{2mk_BT}}" />
            </div>

            <p style={prose}>
              Transforming to speed <InlineMath math="v = |\vec{p}|/m" /> and integrating
              over directions of momentum gives the Maxwell speed distribution —
              one of the most important results in kinetic theory:
            </p>
            <div className="formula">
              <BlockMath math="f(v) = 4\pi\!\left(\frac{m}{2\pi k_B T}\right)^{\!3/2} v^2\, e^{-\frac{mv^2}{2k_BT}}" />
            </div>

            <p style={prose}>
              This distribution peaks at the most probable speed
              <InlineMath math="\ v_p = \sqrt{2k_BT/m}" />,
              has mean <InlineMath math="\ \langle v\rangle = \sqrt{8k_BT/\pi m}" />,
              and root-mean-square speed <InlineMath math="\ v_{rms} = \sqrt{3k_BT/m}" />.
              As temperature increases, the distribution broadens and shifts to higher speeds.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">characteristic speeds</span>
              <h3 style={h3Side}>Speed Distribution Moments</h3>
              <div className="formula">
                <BlockMath math="v_p = \sqrt{\frac{2k_BT}{m}}" />
              </div>
              <div className="formula">
                <BlockMath math="\langle v \rangle = \sqrt{\frac{8k_BT}{\pi m}}" />
              </div>
              <div className="formula">
                <BlockMath math="v_{rms} = \sqrt{\frac{3k_BT}{m}}" />
              </div>
              <p style={proseDim}>
                All three scale as <InlineMath math="\sqrt{T/m}" /> —
                faster at high temperature, slower for heavier particles.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">partition function</span>
              <p style={proseSm}>
                The single-particle partition function for a particle in volume <InlineMath math="V" />:
              </p>
              <div className="formula">
                <BlockMath math="Z_1 = \frac{V}{\lambda_{th}^3}, \quad \lambda_{th} = \sqrt{\frac{2\pi\hbar^2}{mk_BT}}" />
              </div>
              <p style={proseDim}>
                <InlineMath math="\lambda_{th}" /> is the thermal de Broglie wavelength —
                the length scale below which quantum effects matter.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 3 — Equipartition & Ideal Gas Law
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">equipartition & ideal gas law</span>
            <h3 style={h3Main}>Energy, Pressure, and the Gas Law</h3>

            <p style={prose}>
              The <b style={{ color: "var(--accent)" }}>equipartition theorem</b> states that
              in thermal equilibrium at temperature <InlineMath math="T" />, each quadratic
              degree of freedom contributes <InlineMath math="\frac{1}{2}k_BT" /> to the average energy.
              A monatomic ideal gas has 3 translational degrees of freedom per particle:
            </p>
            <div className="formula">
              <BlockMath math="\langle E_k \rangle = \frac{3}{2}k_BT \quad \text{(per particle)}" />
            </div>
            <div className="formula">
              <BlockMath math="U = \frac{3}{2}Nk_BT \quad \text{(total internal energy)}" />
            </div>

            <p style={prose}>
              Pressure arises from the average momentum transfer of particles colliding with
              the container walls. Computing this microscopically yields the ideal gas law —
              one of the great triumphs of the kinetic theory:
            </p>
            <div className="formula">
              <BlockMath math="PV = Nk_BT = nRT" />
            </div>

            <p style={prose}>
              The heat capacity at constant volume follows directly from the equipartition result.
              For a monatomic ideal gas:
            </p>
            <div className="formula">
              <BlockMath math="C_V = \left(\frac{\partial U}{\partial T}\right)_V = \frac{3}{2}Nk_B" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              For diatomic gases, rotational and vibrational modes add extra degrees of freedom —
              increasing <InlineMath math="C_V" /> at higher temperatures as modes become
              thermally activated. This is one place where classical theory fails and
              quantum mechanics is needed.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">equipartition theorem</span>
              <h3 style={h3Side}>General Statement</h3>
              <p style={proseSm}>
                For any quadratic term <InlineMath math="\frac{1}{2}\alpha q^2" /> in the Hamiltonian:
              </p>
              <div className="formula">
                <BlockMath math="\left\langle \frac{1}{2}\alpha q^2 \right\rangle = \frac{1}{2}k_BT" />
              </div>
              <p style={proseDim}>
                Applies to translational KE, rotational KE, and harmonic potential energy.
                Fails at low <InlineMath math="T" /> when quantum effects freeze modes.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">degrees of freedom</span>
              <div style={{ width: "100%", overflowX: "auto" }}>
                <table className="pumping-table">
                  <thead>
                    <tr>
                      <th>Gas type</th>
                      <th><InlineMath math="f" /></th>
                      <th><InlineMath math="C_V" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Monatomic</td><td>3</td><td><InlineMath math="\frac{3}{2}Nk_B" /></td></tr>
                    <tr><td>Diatomic (rigid)</td><td>5</td><td><InlineMath math="\frac{5}{2}Nk_B" /></td></tr>
                    <tr><td>Diatomic (full)</td><td>7</td><td><InlineMath math="\frac{7}{2}Nk_B" /></td></tr>
                    <tr><td>Polyatomic</td><td>6</td><td><InlineMath math="3Nk_B" /></td></tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 4 — Quantum corrections + Summary
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          {/* MAIN */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">quantum corrections</span>
            <h3 style={h3Main}>Identical Particles and Quantum Statistics</h3>

            <p style={prose}>
              Classical statistical mechanics treats particles as distinguishable — labeling them
              1, 2, ..., N. But identical quantum particles have no such labels: swapping two
              particles does not produce a new microstate. Classical counting therefore
              overcounts by a factor of <InlineMath math="N!" />.
            </p>

            <p style={prose}>
              The <b style={{ color: "var(--accent)" }}>Gibbs correction</b> divides the
              classical multiplicity by <InlineMath math="N!" /> to fix this:
            </p>
            <div className="formula">
              <BlockMath math="\Omega(E,V,N) = \frac{1}{N!\,h^{3N}} \int_{H=E} d^{3N}r\; d^{3N}p" />
            </div>

            <p style={prose}>
              Without this correction, entropy is not extensive — it fails to satisfy
              <InlineMath math="\ S(2E, 2V, 2N) = 2S(E, V, N)" />.
              The Gibbs correction resolves this <b style={{ color: "var(--accent)" }}>Gibbs paradox</b>.
            </p>

            <p style={prose}>
              When quantum effects cannot be ignored — at low temperatures or high densities,
              when the thermal de Broglie wavelength <InlineMath math="\lambda_{th}" /> becomes
              comparable to inter-particle spacing — the classical picture breaks down entirely.
              Particles must be treated as indistinguishable quantum objects:
            </p>

            <ul className="features-list-discreto" style={{ width: "100%" }}>
              <li>
                <b>Fermions</b> (half-integer spin) obey the <b>Fermi–Dirac</b> distribution.
                The Pauli exclusion principle limits each state to at most one particle.
                Result: degenerate electron gases in metals and white dwarf stars.
              </li>
              <li>
                <b>Bosons</b> (integer spin) obey the <b>Bose–Einstein</b> distribution.
                No restriction on occupation — many particles can pile into the ground state.
                Result: Bose–Einstein condensation, superfluidity, laser coherence.
              </li>
              <li>
                The classical limit <InlineMath math="f \ll 1" /> (sparse occupation) recovers
                Maxwell–Boltzmann statistics regardless of particle type.
              </li>
            </ul>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              The crossover from classical to quantum behavior is set by the
              fugacity <InlineMath math="z = e^{\mu/k_BT}" /> and the phase space
              density <InlineMath math="n\lambda_{th}^3" />. When
              <InlineMath math="\ n\lambda_{th}^3 \ll 1" />, classical statistics apply.
              When <InlineMath math="\ n\lambda_{th}^3 \gtrsim 1" />, quantum statistics dominate.
            </p>
          </section>

          {/* SIDEBAR — summary */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}>
            <span className="section-eyebrow">chapter summary</span>
            <h3 style={h3Side}>Key Takeaways</h3>

            <ul className="features-list-discreto" style={{ width: "100%" }}>
              <li>
                A gas microstate is a point in <InlineMath math="6N" />-dimensional phase space.
                The macrostate is <InlineMath math="(N, V, E)" />.
              </li>
              <li>
                The <b>Maxwell–Boltzmann</b> speed distribution follows from the ideal gas assumption
                of non-interacting, independent particles.
              </li>
              <li>
                <b>Equipartition</b>: each quadratic DOF contributes <InlineMath math="\frac{1}{2}k_BT" />.
                Monatomic ideal gas: <InlineMath math="U = \frac{3}{2}Nk_BT" />.
              </li>
              <li>
                The <b>ideal gas law</b> <InlineMath math="PV = Nk_BT" /> is derived
                statistically from momentum transfer to container walls.
              </li>
              <li>
                The <b>Gibbs correction</b> <InlineMath math="1/N!" /> fixes overcounting
                for identical particles and restores extensivity of entropy.
              </li>
              <li>
                <b>Quantum statistics</b> dominate when <InlineMath math="n\lambda_{th}^3 \gtrsim 1" /> —
                fermions obey FD, bosons obey BE.
              </li>
              <li>
                BEC, degenerate electron gases, and superfluidity are direct consequences
                of quantum many-body statistics.
              </li>
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
              {["Maxwell–Boltzmann", "PV = NkT", "Equipartition", "Gibbs Correction", "λ_th", "Fermi–Dirac", "Bose–Einstein", "BEC"].map(tag => (
                <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>{tag}</span>
              ))}
            </div>
          </section>

        </div>
        <NextPrevNavigation next={{path:'/learning/population-inversion',title:'Population Inversion'}} 
            prev={{path:'/learning/temperature-and-equilibrium', title:'Temperature and Equilibrium'}}/>
      </div>
        <Footer/>
    </div>
  );
}