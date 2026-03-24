import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import NavBar from "../../navigation_templates/NavBar";
import Footer from "../helpers/Footer";
import NextPrevNavigation from "../helpers/NextPrevNavigation";
import RubikCube from "../helpers/RubikCube";

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

export default function InsightsAndApplications() {
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
            chapter 11 · statistical mechanics
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06, letterSpacing: "0.05em",
            color: "var(--text-main)", margin: 0,
          }}>
            Insights & Applications
          </h1>

          <p style={{ maxWidth: "660px", ...proseSm, color: "var(--text-muted)" }}>
            Statistical mechanics is not an abstract formalism — it explains lasers,
            semiconductors, stellar spectra, and the limits of computation. This chapter
            connects the theory to the physical world and shows why the microscopic framework
            built across previous chapters has genuine predictive power.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["Blackbody Radiation", "Fermi–Dirac", "Carnot Efficiency", "Information Entropy", "BEC", "Phonons", "Semiconductors"].map(tag => (
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
            BLOCK 1 — Micro ↔ Macro bridge
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">the bridge</span>
            <h3 style={h3Main}>Linking Microscopic and Macroscopic Worlds</h3>

            <p style={prose}>
              Statistical mechanics acts as the bridge between the microscopic world of
              particles and the macroscopic world of measurements. Given a set of quantum
              energy levels <InlineMath math="E_1, E_2, \ldots, E_n" /> and a temperature
              <InlineMath math="\ T" />, the partition function encodes everything:
            </p>
            <div className="formula">
              <BlockMath math="Z = \sum_i g_i\, e^{-E_i/k_BT}" />
            </div>

            <p style={prose}>
              All measurable thermodynamic quantities follow as derivatives of
              <InlineMath math="\ \ln Z" />. Internal energy, entropy, pressure, and heat
              capacity are not independent — they are all faces of the same microscopic object:
            </p>
            <div className="formula">
              <BlockMath math="U = -\frac{\partial \ln Z}{\partial \beta}, \quad S = k_B\!\left(\ln Z + \beta U\right), \quad P = k_BT\frac{\partial \ln Z}{\partial V}" />
            </div>

            <p style={prose}>
              The entropy <InlineMath math="S = k_B \ln \Omega" /> is the coarsest version of
              this: for an isolated system with <InlineMath math="\Omega" /> equally probable
              microstates, it is the logarithm of the number of ways the macrostate can be
              realized microscopically. More probable macrostates have more microstates —
              and therefore more entropy.
            </p>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              This framework is exact. It does not rely on phenomenological assumptions —
              only on the equal a priori probability postulate and the laws of quantum mechanics.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">thermodynamic potentials</span>
              <h3 style={h3Side}>From Z to Everything</h3>
              <div className="formula">
                <BlockMath math="F = -k_BT\ln Z \quad \text{(Helmholtz)}" />
              </div>
              <div className="formula">
                <BlockMath math="G = F + PV \quad \text{(Gibbs)}" />
              </div>
              <div className="formula">
                <BlockMath math="\Omega_{gc} = F - \mu N \quad \text{(Grand potential)}" />
              </div>
              <p style={proseDim}>
                Each potential is minimized at equilibrium under different constraints —
                <InlineMath math="F" /> at constant <InlineMath math="T,V" />;
                <InlineMath math="\ G" /> at constant <InlineMath math="T,P" />.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">fluctuation recap</span>
              <p style={proseSm}>Energy fluctuations link microscopic variance to a macroscopic response function:</p>
              <div className="formula">
                <BlockMath math="\langle(\Delta E)^2\rangle = k_BT^2 C_V" />
              </div>
              <p style={proseDim}>
                Large <InlineMath math="C_V" /> means both more thermal inertia and larger
                microscopic fluctuations — two sides of the fluctuation–dissipation theorem.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 2 — Distributions & Real Systems
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">distribution functions</span>
            <h3 style={h3Main}>From Energy Distributions to Real Systems</h3>

            <p style={prose}>
              The three fundamental distribution functions each govern a different class of
              physical systems, and their differences are not academic — they produce
              qualitatively distinct phenomena.
            </p>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Maxwell–Boltzmann</b> — classical,
              distinguishable particles. Valid when
              <InlineMath math="\ n\lambda_{th}^3 \ll 1" /> (dilute, hot):
            </p>
            <div className="formula">
              <BlockMath math="f_{MB}(E) \propto e^{-E/k_BT}" />
            </div>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Fermi–Dirac</b> — half-integer spin
              particles (electrons, protons). Pauli exclusion limits occupation to 0 or 1.
              Electrons in a metal at room temperature are deeply degenerate
              (<InlineMath math="E_F \gg k_BT" />):
            </p>
            <div className="formula">
              <BlockMath math="f_{FD}(E) = \frac{1}{e^{(E-\mu)/k_BT}+1}" />
            </div>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Bose–Einstein</b> — integer spin particles
              (photons, phonons, <InlineMath math="^4\text{He}" />). Unbounded occupation —
              many particles can condense into the ground state:
            </p>
            <div className="formula">
              <BlockMath math="f_{BE}(E) = \frac{1}{e^{(E-\mu)/k_BT}-1}" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              All three converge to MB when states are sparsely occupied. The crossover is set
              by the phase-space density <InlineMath math="n\lambda_{th}^3" /> — quantum effects
              dominate when it approaches 1.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">semiconductors</span>
              <h3 style={h3Side}>Carrier Concentration</h3>
              <p style={proseSm}>
                In a semiconductor, the electron density in the conduction band is:
              </p>
              <div className="formula">
                <BlockMath math="n = \int_{E_c}^{\infty} g(E)\, f_{FD}(E)\, dE" />
              </div>
              <p style={proseDim}>
                The Fermi level <InlineMath math="\mu" /> sits in the band gap.
                Doping shifts <InlineMath math="\mu" /> — controlling conductivity by orders
                of magnitude. The entire semiconductor industry rests on this.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">bose–einstein condensation</span>
              <p style={proseSm}>
                Below the critical temperature, a macroscopic fraction of bosons
                occupies the ground state:
              </p>
              <div className="formula">
                <BlockMath math="T_c = \frac{2\pi\hbar^2}{mk_B}\!\left(\frac{n}{\zeta(3/2)}\right)^{2/3}" />
              </div>
              <p style={proseDim}>
                First observed in <InlineMath math="^{87}\text{Rb}" /> in 1995 (Nobel 2001).
                BEC underlies superfluidity, atom lasers, and quantum simulation.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 3 — Blackbody & Density of States
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">density of states & radiation</span>
            <h3 style={h3Main}>Blackbody Radiation and Phonons</h3>

            <p style={prose}>
              The density of states <InlineMath math="g(E)" /> — the number of quantum states
              per unit energy — is the key input to every integral over energy levels.
              For photons in a 3D cavity:
            </p>
            <div className="formula">
              <BlockMath math="g(\nu) = \frac{8\pi \nu^2}{c^3}" />
            </div>

            <p style={prose}>
              Multiplying by the Bose–Einstein occupation (with <InlineMath math="\mu = 0" />
              for photons) gives the Planck spectral energy density — the blackbody spectrum:
            </p>
            <div className="formula">
              <BlockMath math="u(\nu, T) = \frac{8\pi h\nu^3}{c^3}\cdot\frac{1}{e^{h\nu/k_BT}-1}" />
            </div>

            <p style={prose}>
              Integrating over all frequencies yields the Stefan–Boltzmann law:
            </p>
            <div className="formula">
              <BlockMath math="u(T) = \frac{8\pi^5 k_B^4}{15 h^3 c^3}\,T^4 \equiv a\,T^4" />
            </div>

            <p style={prose}>
              For lattice vibrations (phonons), the Debye model uses a similar approach
              but with a cutoff frequency <InlineMath math="\omega_D" /> set by the number
              of atoms. The low-temperature heat capacity follows:
            </p>
            <div className="formula">
              <BlockMath math="C_V \xrightarrow{T\ll\Theta_D} \frac{12\pi^4}{5}Nk_B\!\left(\frac{T}{\Theta_D}\right)^3" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              The <InlineMath math="T^3" /> law is a direct experimental signature of the
              phonon density of states — and a triumph of quantum statistical mechanics
              over classical equipartition, which predicts a constant <InlineMath math="C_V" />.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">wien's law</span>
              <h3 style={h3Side}>Peak Wavelength</h3>
              <p style={proseSm}>
                Differentiating the Planck spectrum gives Wien's displacement law:
              </p>
              <div className="formula">
                <BlockMath math="\lambda_{max} T = 2.898\times10^{-3}\,\text{m·K}" />
              </div>
              <p style={proseDim}>
                The Sun peaks at ~500 nm (green). A 3K CMB photon peaks at ~1 mm (microwave).
                Both are perfect blackbodies predicted by the same formula.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">debye temperature</span>
              <div className="formula">
                <BlockMath math="\Theta_D = \frac{\hbar\omega_D}{k_B}" />
              </div>
              <p style={proseDim}>
                For copper: <InlineMath math="\Theta_D \approx 343\,\text{K}" />.
                Above <InlineMath math="\Theta_D" />, classical equipartition
                recovers <InlineMath math="C_V = 3Nk_B" /> (Dulong–Petit).
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 4 — Applications + Summary
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">real-world applications</span>
            <h3 style={h3Main}>Statistical Mechanics in the Wild</h3>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Lasers</b> — population inversion creates
              a medium with gain. Stimulated emission rate exceeds absorption when
              <InlineMath math="\ N_2/g_2 > N_1/g_1" />. The lasing threshold is a direct
              consequence of Einstein coefficients and cavity loss balance.
            </p>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Thermodynamic engines</b> — the Carnot
              efficiency is not an engineering limitation but a thermodynamic one.
              For any engine operating between <InlineMath math="T_H" /> and <InlineMath math="T_C" />:
            </p>
            <div className="formula">
              <BlockMath math="\eta \leq \eta_{Carnot} = 1 - \frac{T_C}{T_H}" />
            </div>

            <p style={prose}>
              This bound follows directly from the second law —
              the total entropy of the universe cannot decrease.
              No statistical fluctuation can violate it at macroscopic scales.
            </p>

            <p style={prose}>
              <b style={{ color: "var(--accent)" }}>Information theory</b> — Shannon's entropy
              for a discrete distribution is formally identical to Gibbs entropy:
            </p>
            <div className="formula">
              <BlockMath math="H = -\sum_i p_i \log_2 p_i \quad \longleftrightarrow \quad S = -k_B\sum_i p_i \ln p_i" />
            </div>

            <p style={prose}>
              The connection is not a coincidence. Information entropy and thermodynamic entropy
              are the same concept measured in different units. Landauer's principle quantifies this:
              erasing one bit of information dissipates at least <InlineMath math="k_BT\ln 2" /> of energy.
            </p>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              <b style={{ color: "var(--text-muted)" }}>Astrophysics</b> — white dwarf stars are
              supported by electron degeneracy pressure from the Fermi–Dirac distribution.
              Neutron stars by neutron degeneracy. The Chandrasekhar mass limit
              (<InlineMath math="\approx 1.4\,M_\odot" />) is a direct prediction of
              relativistic Fermi statistics.
            </p>
          </section>

          {/* SIDEBAR — summary */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}>
            <span className="section-eyebrow">chapter summary</span>
            <h3 style={h3Side}>Key Takeaways</h3>

            <ul className="features-list-discreto" style={{ width: "100%" }}>
              <li>
                All thermodynamic quantities derive from <InlineMath math="\ln Z" /> —
                the partition function is the central object of statistical mechanics.
              </li>
              <li>
                <b>MB, FD, BE</b> distributions govern classical gases, electrons, and bosons
                respectively. The crossover is set by <InlineMath math="n\lambda_{th}^3" />.
              </li>
              <li>
                The <b>Planck spectrum</b> follows from the Bose–Einstein distribution applied
                to photons with <InlineMath math="\mu = 0" />.
              </li>
              <li>
                The <b>Debye <InlineMath math="T^3" /> law</b> for phonon heat capacity is
                a quantum correction to classical equipartition.
              </li>
              <li>
                <b>Carnot efficiency</b> <InlineMath math="\eta \leq 1 - T_C/T_H" /> is a
                thermodynamic bound, not an engineering one.
              </li>
              <li>
                <b>Shannon entropy</b> and Gibbs entropy are identical in structure —
                information and thermodynamics are unified.
              </li>
              <li>
                <b>Fermi degeneracy pressure</b> supports white dwarfs and sets the
                Chandrasekhar mass limit.
              </li>
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
              {["Planck Law", "T³ Law", "Carnot", "Landauer", "Chandrasekhar", "BEC", "Shannon"].map(tag => (
                <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>{tag}</span>
              ))}
            </div>
          </section>

        </div>

        <NextPrevNavigation
          prev={{ path: "/learning/density-of-states-and-correlations", title: "Density of States & Correlations" }}
        />

        <Footer />
      </div>
    </div>
  );
}