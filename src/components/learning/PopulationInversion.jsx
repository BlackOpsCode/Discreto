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
const h3Main   = { fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.4rem)",    color: "var(--text-main)", margin: 0, letterSpacing: "0.03em" };
const h3Side   = { fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(0.9rem, 1.3vw, 1.15rem)", color: "var(--text-main)", margin: 0, letterSpacing: "0.03em" };
const h4style  = { fontFamily: "'Syne', sans-serif", fontSize: "clamp(0.9rem, 1.2vw, 1.02rem)", color: "var(--accent-2)", margin: 0, fontWeight: 700, letterSpacing: "0.02em" };

export default function PopulationInversion() {
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
            chapter 08 · statistical mechanics
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06, letterSpacing: "0.05em",
            color: "var(--text-main)", margin: 0,
          }}>
            Population Inversion
          </h1>

          <p style={{ maxWidth: "660px", ...proseSm, color: "var(--text-muted)" }}>
            In thermal equilibrium, higher energy levels are exponentially less populated.
            Population inversion is the deliberate violation of this rule — a non-equilibrium
            condition where excited states outnumber the ground state, enabling stimulated
            emission and coherent light amplification.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["Boltzmann Distribution", "Stimulated Emission", "Einstein Coefficients", "Rate Equations", "3-Level Laser", "4-Level Laser", "Negative Temperature"].map(tag => (
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
            BLOCK 1 — Boltzmann & Equilibrium
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">thermal equilibrium baseline</span>
            <h3 style={h3Main}>Boltzmann Distribution of Level Populations</h3>

            <p style={prose}>
              In a system of atoms at thermal equilibrium with temperature <InlineMath math="T" />,
              the fraction of atoms occupying energy level <InlineMath math="E_i" /> is given
              by the Boltzmann distribution. For a non-degenerate two-level system with
              ground state <InlineMath math="E_1" /> and excited state <InlineMath math="E_2" />:
            </p>
            <div className="formula">
              <BlockMath math="\frac{N_2}{N_1} = e^{-(E_2 - E_1)/k_BT} = e^{-\Delta E / k_BT}" />
            </div>

            <p style={prose}>
              Since <InlineMath math="\Delta E > 0" />, we always have <InlineMath math="N_2 < N_1" />
              at any finite positive temperature. For degenerate levels with degeneracies
              <InlineMath math="g_1" /> and <InlineMath math="g_2" />:
            </p>
            <div className="formula">
              <BlockMath math="\frac{N_2}{N_1} = \frac{g_2}{g_1}\, e^{-\Delta E / k_BT}" />
            </div>

            <p style={prose}>
              For a visible photon <InlineMath math="\Delta E \approx 2\,\text{eV}" /> at room
              temperature <InlineMath math="k_BT \approx 0.025\,\text{eV}" />, the ratio is:
            </p>
            <div className="formula">
              <BlockMath math="\frac{N_2}{N_1} \approx e^{-80} \approx 10^{-35}" />
            </div>

            <p style={prose}>
              Essentially zero atoms are in the excited state at equilibrium.
              This is why laser action is impossible in thermal equilibrium —
              population inversion <InlineMath math="N_2 > N_1" /> requires an
              external non-equilibrium pumping mechanism.
            </p>

            <ul className="features-list-discreto" style={{ width: "100%", marginTop: "0.2rem" }}>
              <li>
                At <InlineMath math="T \to 0" />: all atoms in ground state,
                <InlineMath math="\ N_2/N_1 \to 0" />.
              </li>
              <li>
                At <InlineMath math="T \to \infty" />: equal populations,
                <InlineMath math="\ N_2/N_1 \to g_2/g_1" />.
              </li>
              <li>
                <InlineMath math="N_2 > N_1" /> corresponds formally to a
                <b> negative temperature</b> — hotter than any equilibrium system.
              </li>
            </ul>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">negative temperature</span>
              <h3 style={h3Side}>Formal Definition</h3>
              <p style={proseSm}>
                From the statistical definition <InlineMath math="1/T = \partial S / \partial E" />,
                population inversion occurs when <InlineMath math="\Omega(E)" /> <em>decreases</em>
                with energy — giving:
              </p>
              <div className="formula">
                <BlockMath math="T = \frac{-\Delta E}{k_B \ln(N_2/N_1)}" />
              </div>
              <p style={proseDim}>
                When <InlineMath math="N_2 > N_1" />, the logarithm is positive and
                <InlineMath math="\ T < 0" />. Negative-temperature systems release energy
                when placed in contact with any positive-temperature reservoir.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">population ratio</span>
              <div className="formula">
                <BlockMath math="\frac{N_2}{N_1} = \frac{g_2}{g_1} e^{-\hbar\omega/k_BT}" />
              </div>
              <p style={proseDim}>
                For optical frequencies <InlineMath math="\hbar\omega \gg k_BT" /> at room
                temperature. Inversion requires pumping to overcome this exponential suppression.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 2 — Einstein Coefficients
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">light–matter interaction</span>
            <h3 style={h3Main}>Einstein Coefficients</h3>

            <p style={prose}>
              Einstein (1917) identified three fundamental processes by which atoms interact
              with radiation. Each is characterized by a coefficient that can be derived
              from quantum mechanics or determined experimentally.
            </p>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Spontaneous emission</b> — an excited atom
              decays to the ground state by emitting a photon with no external trigger.
              The rate is proportional to the excited-state population:
            </p>
            <div className="formula">
              <BlockMath math="\left(\frac{dN_2}{dt}\right)_{sp} = -A_{21}\, N_2" />
            </div>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Stimulated absorption</b> — a photon of
              energy <InlineMath math="\hbar\omega_{21}" /> is absorbed, driving the atom
              from <InlineMath math="E_1" /> to <InlineMath math="E_2" />:
            </p>
            <div className="formula">
              <BlockMath math="\left(\frac{dN_2}{dt}\right)_{abs} = +B_{12}\, \rho(\omega)\, N_1" />
            </div>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Stimulated emission</b> — an incoming photon
              triggers an excited atom to emit a second photon with identical frequency,
              phase, polarization, and direction. This is the process that powers lasers:
            </p>
            <div className="formula">
              <BlockMath math="\left(\frac{dN_2}{dt}\right)_{st} = -B_{21}\, \rho(\omega)\, N_2" />
            </div>

            <p style={prose}>
              At thermal equilibrium the rates balance. Imposing this constraint alongside
              the Planck distribution for radiation density <InlineMath math="\rho(\omega)" />
              yields the Einstein relations:
            </p>
            <div className="formula">
              <BlockMath math="g_1 B_{12} = g_2 B_{21}" />
            </div>
            <div className="formula">
              <BlockMath math="A_{21} = \frac{\hbar \omega^3}{\pi^2 c^3}\, B_{21}" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              The ratio <InlineMath math="A_{21}/B_{21} \propto \omega^3" /> explains why
              spontaneous emission dominates at high frequencies (X-ray lasers are hard)
              while stimulated emission dominates at microwave frequencies (masers are easy).
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">gain condition</span>
              <h3 style={h3Side}>When Amplification Occurs</h3>
              <p style={proseSm}>
                The net rate of stimulated emission exceeds absorption when:
              </p>
              <div className="formula">
                <BlockMath math="g_2 N_2 > g_1 N_1" />
              </div>
              <p style={proseSm}>The optical gain coefficient:</p>
              <div className="formula">
                <BlockMath math="\gamma(\omega) = \frac{\omega}{c}\,\chi''(\omega) \propto \left(\frac{N_2}{g_2} - \frac{N_1}{g_1}\right)" />
              </div>
              <p style={proseDim}>
                When <InlineMath math="\gamma > 0" /> the medium amplifies light —
                this is <b>optical gain</b>. Population inversion is the necessary condition.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">spontaneous lifetime</span>
              <p style={proseSm}>
                The natural lifetime of the excited state is set by <InlineMath math="A_{21}" />:
              </p>
              <div className="formula">
                <BlockMath math="\tau_{sp} = \frac{1}{A_{21}}" />
              </div>
              <p style={proseDim}>
                For electric dipole transitions in the visible:
                <InlineMath math="\ \tau_{sp} \sim 10^{-9}\,\text{s}" />.
                Metastable states have <InlineMath math="\tau_{sp} \sim 10^{-3}\,\text{s}" /> —
                long enough to accumulate inversion.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 3 — Rate Equations
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">rate equations</span>
            <h3 style={h3Main}>Steady-State Population Dynamics</h3>

            <p style={prose}>
              For a two-level system driven by a pump rate <InlineMath math="W_p" /> and
              subject to stimulated emission with cross-section <InlineMath math="\sigma" />
              and photon flux <InlineMath math="\phi" />, the rate equations are:
            </p>
            <div className="formula">
              <BlockMath math="\frac{dN_2}{dt} = W_p N_1 - (A_{21} + \sigma\phi)\,N_2" />
            </div>
            <div className="formula">
              <BlockMath math="\frac{dN_1}{dt} = -W_p N_1 + (A_{21} + \sigma\phi)\,N_2" />
            </div>

            <p style={prose}>
              With the conservation constraint <InlineMath math="N_1 + N_2 = N" />,
              the steady-state inversion <InlineMath math="\Delta N = N_2 - N_1" /> is:
            </p>
            <div className="formula">
              <BlockMath math="\Delta N = N \cdot \frac{W_p - A_{21}}{W_p + A_{21} + 2\sigma\phi}" />
            </div>

            <p style={prose}>
              Inversion (<InlineMath math="\Delta N > 0" />) requires
              <InlineMath math="\ W_p > A_{21}" /> — the pump rate must exceed the
              spontaneous decay rate. In practice this is impossible for a pure two-level
              system: pumping also drives stimulated emission back down.
              This is why practical lasers use 3- or 4-level schemes.
            </p>

            <p style={prose}>
              The <b style={{ color: "var(--accent)" }}>saturation photon flux</b> is defined
              as the flux at which the inversion is halved:
            </p>
            <div className="formula">
              <BlockMath math="\phi_{sat} = \frac{A_{21}}{2\sigma}" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              Above saturation the gain compresses — a phenomenon known as
              <b> gain saturation</b>, which stabilizes laser output power.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">threshold condition</span>
              <h3 style={h3Side}>Laser Threshold</h3>
              <p style={proseSm}>
                In a laser cavity with round-trip gain <InlineMath math="G" /> and
                total loss <InlineMath math="\mathcal{L}" />, oscillation begins when:
              </p>
              <div className="formula">
                <BlockMath math="G \geq \mathcal{L}" />
              </div>
              <div className="formula">
                <BlockMath math="e^{2\sigma \Delta N L} \geq \frac{1}{R_1 R_2}(1-\alpha)^2" />
              </div>
              <p style={proseDim}>
                <InlineMath math="R_1, R_2" /> = mirror reflectivities, <InlineMath math="\alpha" /> = internal loss,
                <InlineMath math="L" /> = gain medium length.
                At threshold <InlineMath math="\Delta N_{th} = \mathcal{L}/2\sigma L" />.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">inversion requirement</span>
              <div className="formula">
                <BlockMath math="\Delta N_{th} = \frac{1}{2\sigma L}\ln\!\frac{1}{R_1 R_2} + \frac{\alpha}{sigma}" />
              </div>
              <p style={proseDim}>
                Higher mirror losses or internal absorption require a larger inversion
                to reach threshold — making efficient pumping critical.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 4 — 3-Level and 4-Level Systems
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">laser schemes</span>
            <h3 style={h3Main}>3-Level and 4-Level Systems</h3>

            <p style={prose}>
              A pure two-level system cannot sustain a steady-state inversion — pumping drives
              both absorption and stimulated emission simultaneously. The solution is to add
              extra levels that decouple the pumping and lasing transitions.
            </p>

            <h4 style={h4style}>3-Level System (e.g. Ruby laser)</h4>
            <p style={{ ...prose, marginTop: "0.4rem" }}>
              Atoms are pumped from ground state <InlineMath math="E_1" /> to broad
              pump band <InlineMath math="E_3" />. Fast non-radiative decay populates the
              metastable level <InlineMath math="E_2" /> (lifetime <InlineMath math="\tau_2 \sim 3\,\text{ms}" />).
              Laser transition occurs as <InlineMath math="E_2 \to E_1" />:
            </p>
            <div className="formula">
              <BlockMath math="E_1 \xrightarrow{h\nu_{pump}} E_3 \xrightarrow{\text{fast}} E_2 \xrightarrow{h\nu_{laser}} E_1" />
            </div>
            <p style={prose}>
              The critical weakness: the lower laser level <em>is</em> the ground state,
              so more than half of all atoms must be excited before inversion is achieved.
              The threshold pump power is high, and continuous-wave operation is difficult.
            </p>

            <h4 style={{ ...h4style, marginTop: "0.6rem" }}>4-Level System (e.g. Nd:YAG, He–Ne)</h4>
            <p style={{ ...prose, marginTop: "0.4rem" }}>
              A fourth level <InlineMath math="E_0" /> below the lower laser level is added.
              The lasing transition is <InlineMath math="E_3 \to E_2" />, and
              <InlineMath math="\ E_2 \to E_0" /> decays rapidly so the lower laser level
              stays nearly empty:
            </p>
            <div className="formula">
              <BlockMath math="E_0 \xrightarrow{h\nu_{pump}} E_4 \xrightarrow{\text{fast}} E_3 \xrightarrow{h\nu_{laser}} E_2 \xrightarrow{\text{fast}} E_0" />
            </div>
            <p style={prose}>
              Since <InlineMath math="N_2 \approx 0" /> at all times, inversion is achieved
              as soon as <em>any</em> atom reaches <InlineMath math="E_3" />. The threshold
              pump power is orders of magnitude lower than a 3-level system.
            </p>

            <p style={{ ...prose, color: "var(--text-muted)", marginTop: "0.2rem" }}>
              Comparing the two: the 4-level system reduces threshold inversion density from
              <InlineMath math="\ \Delta N_{th}^{(3)} \approx N/2" /> to
              <InlineMath math="\ \Delta N_{th}^{(4)} \approx 0" /> in the ideal limit,
              making it the preferred architecture for most practical lasers.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">pumping mechanisms</span>
              <h3 style={h3Side}>Energy Input Methods</h3>
              <div style={{ width: "100%", overflowX: "auto" }}>
                <table className="pumping-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Mechanism</th>
                      <th>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Optical</td>
                      <td>Flash lamp / diode excites atoms</td>
                      <td>Ruby, Nd:YAG</td>
                    </tr>
                    <tr>
                      <td>Electrical</td>
                      <td>Electron collisions in discharge</td>
                      <td>He–Ne, CO₂</td>
                    </tr>
                    <tr>
                      <td>Chemical</td>
                      <td>Exothermic reaction</td>
                      <td>HF laser</td>
                    </tr>
                    <tr>
                      <td>Injection</td>
                      <td>Current in p–n junction</td>
                      <td>Diode laser</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">metastable states</span>
              <p style={proseSm}>
                Population accumulates in a level only if it lives long enough.
                Metastable states are forbidden by selection rules from fast electric
                dipole decay:
              </p>
              <div className="formula">
                <BlockMath math="\tau_{meta} \sim 10^{-3}\,\text{s} \gg \tau_{sp} \sim 10^{-9}\,\text{s}" />
              </div>
              <p style={proseDim}>
                This six-order-of-magnitude difference is what makes population accumulation
                — and therefore laser action — possible.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 5 — Summary
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">coherent amplification</span>
            <h3 style={h3Main}>From Inversion to Laser Action</h3>

            <p style={prose}>
              Population inversion alone is not sufficient for laser operation.
              The inverted medium must be placed inside an optical cavity that provides
              feedback — typically two mirrors forming a Fabry–Pérot resonator.
              The round-trip condition selects only specific longitudinal modes:
            </p>
            <div className="formula">
              <BlockMath math="L = m\frac{\lambda}{2}, \quad m \in \mathbb{Z}" />
            </div>

            <p style={prose}>
              Each round trip the light is amplified by the gain medium and attenuated by
              mirror transmission and internal losses. Above threshold the signal grows
              exponentially until gain saturation stabilizes the output at:
            </p>
            <div className="formula">
              <BlockMath math="P_{out} = \eta_{slope}(P_{pump} - P_{threshold})" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              The slope efficiency <InlineMath math="\eta_{slope}" /> depends on
              quantum defect, cavity losses, and mode overlap. State-of-the-art
              diode-pumped solid-state lasers achieve <InlineMath math="\eta_{slope} > 80\%" />.
            </p>
          </section>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}>
            <span className="section-eyebrow">chapter summary</span>
            <h3 style={h3Side}>Key Takeaways</h3>

            <ul className="features-list-discreto" style={{ width: "100%" }}>
              <li>
                Thermal equilibrium always gives <InlineMath math="N_2 < N_1" /> —
                inversion requires an external pump.
              </li>
              <li>
                <b>Einstein coefficients</b> <InlineMath math="A_{21}, B_{12}, B_{21}" /> govern
                all light–matter interactions.
                They satisfy <InlineMath math="A_{21} \propto \omega^3 B_{21}" />.
              </li>
              <li>
                <b>Gain</b> occurs when stimulated emission exceeds absorption:
                <InlineMath math="\ N_2/g_2 > N_1/g_1" />.
              </li>
              <li>
                Steady-state inversion in a two-level system is impossible —
                <b> 3- and 4-level schemes</b> are required.
              </li>
              <li>
                <b>Metastable states</b> (<InlineMath math="\tau \sim \text{ms}" />) allow
                population to accumulate against spontaneous decay.
              </li>
              <li>
                <b>Gain saturation</b> at flux <InlineMath math="\phi_{sat} = A_{21}/2\sigma" />
                stabilizes laser output above threshold.
              </li>
              <li>
                Formally, inversion corresponds to a <b>negative temperature</b> —
                hotter than any positive-<InlineMath math="T" /> equilibrium state.
              </li>
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
              {["A₂₁ = 1/τ", "B₁₂ = B₂₁ (g₁=g₂)", "ΔN > 0", "φ_sat", "4-level", "T < 0", "Cavity Modes"].map(tag => (
                <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>{tag}</span>
              ))}
            </div>
          </section>
        </div>
        <NextPrevNavigation 
            prev={{path:'/learning/gases-and-mutiparticles', title:'Gases And Multiparticle Systems'}} 
            next={{path:'/learning/entropy-and-fluctuations', title:'Entropy and Fluctuations'}}/>
      </div>
      <Footer/>
    </div>
  );
}