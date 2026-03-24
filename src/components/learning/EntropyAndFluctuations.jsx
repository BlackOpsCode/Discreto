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

export default function EntropyAndFluctuations() {
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
            chapter 09 · statistical mechanics
          </span>

          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06, letterSpacing: "0.05em",
            color: "var(--text-main)", margin: 0,
          }}>
            Entropy & Fluctuations
          </h1>

          <p style={{ maxWidth: "660px", ...proseSm, color: "var(--text-muted)" }}>
            Entropy is not merely a measure of disorder — it is the fundamental link between
            microscopic counting and macroscopic thermodynamics. Even at equilibrium, systems
            fluctuate. Understanding the statistics of those fluctuations reveals the deep
            structure of thermodynamic stability, response functions, and critical phenomena.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["S = k·ln Ω", "Gibbs Entropy", "Fluctuation–Dissipation", "Canonical Ensemble", "Central Limit Theorem", "Critical Phenomena"].map(tag => (
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
            BLOCK 1 — Entropy: Boltzmann & Gibbs
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">entropy — two formulations</span>
            <h3 style={h3Main}>Boltzmann and Gibbs Entropy</h3>

            <p style={prose}>
              The <b style={{ color: "var(--accent)" }}>Boltzmann entropy</b> applies to an
              isolated system where all <InlineMath math="\Omega" /> microstates are equally probable:
            </p>
            <div className="formula">
              <BlockMath math="S = k_B \ln \Omega" />
            </div>

            <p style={prose}>
              The more general formulation, valid for any probability distribution over microstates,
              is the <b style={{ color: "var(--accent)" }}>Gibbs entropy</b>:
            </p>
            <div className="formula">
              <BlockMath math="S = -k_B \sum_i p_i \ln p_i" />
            </div>

            <p style={prose}>
              When all microstates are equally probable (<InlineMath math="p_i = 1/\Omega" />),
              the Gibbs formula reduces exactly to Boltzmann's. This equivalence follows from:
            </p>
            <div className="formula">
              <BlockMath math="S = -k_B \sum_{i=1}^{\Omega} \frac{1}{\Omega} \ln \frac{1}{\Omega} = k_B \ln \Omega" />
            </div>

            <p style={prose}>
              The Gibbs entropy is maximized subject to constraints. For a canonical ensemble
              (fixed <InlineMath math="\langle E \rangle" />), maximizing <InlineMath math="S" />
              with a Lagrange multiplier <InlineMath math="\beta" /> yields the Boltzmann distribution:
            </p>
            <div className="formula">
              <BlockMath math="\frac{\partial}{\partial p_i}\!\left[-k_B\sum_j p_j \ln p_j - \lambda\sum_j p_j - \beta \sum_j p_j E_j\right] = 0" />
            </div>
            <div className="formula">
              <BlockMath math="\Rightarrow\quad p_i = \frac{e^{-\beta E_i}}{Z}" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              Entropy maximization is therefore not just a physical principle — it is a
              variational derivation of the canonical ensemble from first principles.
            </p>
          </section>

          {/* SIDEBAR */}
          <div className='article-layout'>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">entropy & probability</span>
              <h3 style={h3Side}>Exponential Weighting</h3>
              <p style={proseSm}>
                The probability of a macrostate is proportional to its multiplicity,
                which means it is exponentially weighted by its entropy:
              </p>
              <div className="formula">
                <BlockMath math="P \propto \Omega = e^{S/k_B}" />
              </div>
              <p style={proseDim}>
                A macrostate with just 1 extra nat of entropy
                (<InlineMath math="\Delta S = k_B" />) is <InlineMath math="e \approx 2.718" /> times
                more probable. For <InlineMath math="\Delta S = 100\,k_B" />, the factor
                is <InlineMath math="e^{100} \approx 10^{43}" />.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">third law</span>
              <p style={proseSm}>
                As <InlineMath math="T \to 0" />, the system settles into its unique ground state
                (<InlineMath math="\Omega = 1" />):
              </p>
              <div className="formula">
                <BlockMath math="\lim_{T \to 0} S = k_B \ln 1 = 0" />
              </div>
              <p style={proseDim}>
                The third law of thermodynamics — the absolute zero of entropy —
                follows directly from the statistical definition.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 2 — Fluctuations: General Theory
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">fluctuation theory</span>
            <h3 style={h3Main}>Gaussian Fluctuations around Equilibrium</h3>

            <p style={prose}>
              At equilibrium, the entropy <InlineMath math="S(X)" /> of a system is maximized
              with respect to any internal variable <InlineMath math="X" /> (energy, volume,
              particle number, magnetization…). Expanding around the equilibrium value
              <InlineMath math="X_0" />:
            </p>
            <div className="formula">
              <BlockMath math="S(X_0 + \Delta X) \approx S(X_0) + \underbrace{\frac{\partial S}{\partial X}\bigg|_{X_0}}_{=\,0}\!\Delta X + \frac{1}{2}\frac{\partial^2 S}{\partial X^2}\bigg|_{X_0}(\Delta X)^2" />
            </div>

            <p style={prose}>
              Since <InlineMath math="\partial S/\partial X = 0" /> at equilibrium, the leading
              correction is quadratic. The probability of observing a fluctuation
              <InlineMath math="\Delta X" /> is:
            </p>
            <div className="formula">
              <BlockMath math="P(\Delta X) \propto e^{\Delta S / k_B} = \exp\!\left(\frac{1}{2k_B}\frac{\partial^2 S}{\partial X^2}\bigg|_{X_0}(\Delta X)^2\right)" />
            </div>

            <p style={prose}>
              Since stability requires <InlineMath math="\partial^2 S/\partial X^2 < 0" />,
              this is a Gaussian with variance:
            </p>
            <div className="formula">
              <BlockMath math="\langle(\Delta X)^2\rangle = \frac{-k_B}{\partial^2 S/\partial X^2\big|_{X_0}}" />
            </div>

            <p style={prose}>
              The relative fluctuation scales as <InlineMath math="1/\sqrt{N}" />
              for an extensive variable <InlineMath math="X \sim N" /> — this is why
              macroscopic systems appear deterministic:
            </p>
            <div className="formula">
              <BlockMath math="\frac{\sqrt{\langle(\Delta X)^2\rangle}}{\langle X \rangle} \sim \frac{1}{\sqrt{N}}" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              For <InlineMath math="N \sim 10^{23}" /> molecules, relative fluctuations are
              of order <InlineMath math="10^{-12}" /> — completely undetectable. Small systems
              (nanoscale devices, biological molecules) are a different story.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">stability conditions</span>
              <h3 style={h3Side}>Entropy Curvature</h3>
              <div className="formula">
                <BlockMath math="\frac{\partial^2 S}{\partial E^2} = -\frac{1}{T^2 C_V} < 0" />
              </div>
              <div className="formula">
                <BlockMath math="\frac{\partial^2 S}{\partial V^2} = -\frac{1}{T V \kappa_T} < 0" />
              </div>
              <p style={proseDim}>
                Stability requires <InlineMath math="C_V > 0" /> (thermal stability) and
                <InlineMath math="\ \kappa_T > 0" /> (mechanical stability).
                Both conditions break down at a phase transition.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">central limit theorem</span>
              <p style={proseSm}>
                For a system of <InlineMath math="N" /> weakly interacting subsystems,
                the distribution of the total energy approaches a Gaussian by the CLT:
              </p>
              <div className="formula">
                <BlockMath math="P(E) \to \frac{1}{\sqrt{2\pi N}\,\sigma_1} e^{-(E - N\mu_1)^2/2N\sigma_1^2}" />
              </div>
              <p style={proseDim}>
                Regardless of the single-subsystem distribution. This is the microscopic
                origin of thermodynamic universality.
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 3 — Energy Fluctuations & FDT
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">canonical ensemble fluctuations</span>
            <h3 style={h3Main}>Energy Variance and the Fluctuation–Dissipation Theorem</h3>

            <p style={prose}>
              In the canonical ensemble, the mean energy and its variance are both expressible
              as derivatives of the partition function <InlineMath math="Z(\beta)" />:
            </p>
            <div className="formula">
              <BlockMath math="\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta}" />
            </div>
            <div className="formula">
              <BlockMath math="\langle E^2 \rangle = \frac{1}{Z}\frac{\partial^2 Z}{\partial \beta^2}" />
            </div>

            <p style={prose}>
              Combining these, the energy variance is:
            </p>
            <div className="formula">
              <BlockMath math="\sigma_E^2 = \langle E^2 \rangle - \langle E \rangle^2 = \frac{\partial^2 \ln Z}{\partial \beta^2} = -\frac{\partial \langle E \rangle}{\partial \beta}" />
            </div>

            <p style={prose}>
              Converting from <InlineMath math="\beta" /> to temperature using
              <InlineMath math="\ \partial/\partial\beta = -k_BT^2\,\partial/\partial T" />:
            </p>
            <div className="formula">
              <BlockMath math="\sigma_E^2 = k_B T^2 \frac{\partial \langle E \rangle}{\partial T} = k_B T^2 C_V" />
            </div>

            <p style={prose}>
              This is the <b style={{ color: "var(--accent)" }}>fluctuation–dissipation relation</b>
              for energy. It states that the variance of spontaneous energy fluctuations equals
              <InlineMath math="\ k_BT^2" /> times the heat capacity — a response function that
              measures how the system <em>dissipates</em> added heat. Larger heat capacity means
              both larger fluctuations and more thermal inertia.
            </p>

            <p style={prose}>
              The relative energy fluctuation:
            </p>
            <div className="formula">
              <BlockMath math="\frac{\sigma_E}{\langle E \rangle} = \frac{\sqrt{k_B T^2 C_V}}{\langle E \rangle} \sim \frac{1}{\sqrt{N}}" />
            </div>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              For an ideal monatomic gas: <InlineMath math="\langle E \rangle = \frac{3}{2}Nk_BT" />,
              <InlineMath math="\ C_V = \frac{3}{2}Nk_B" />, giving
              <InlineMath math="\ \sigma_E/\langle E\rangle = \sqrt{2/3N}" />.
              For <InlineMath math="N = 10^{23}" /> this is <InlineMath math="\sim 10^{-12}" />.
            </p>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">number fluctuations</span>
              <h3 style={h3Side}>Grand Canonical Ensemble</h3>
              <p style={proseSm}>
                In the grand canonical ensemble (fixed <InlineMath math="\mu, T" />),
                particle number also fluctuates:
              </p>
              <div className="formula">
                <BlockMath math="\sigma_N^2 = k_B T \left(\frac{\partial \langle N \rangle}{\partial \mu}\right)_{T,V}" />
              </div>
              <div className="formula">
                <BlockMath math="\frac{\sigma_N}{\langle N \rangle} = \sqrt{\frac{k_BT\,\kappa_T}{V}}" />
              </div>
              <p style={proseDim}>
                <InlineMath math="\kappa_T" /> is the isothermal compressibility.
                Near a critical point <InlineMath math="\kappa_T \to \infty" /> —
                particle number fluctuations diverge.
              </p>
            </section>

            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">generalized FDT</span>
              <p style={proseSm}>
                The fluctuation–dissipation theorem generalizes to any observable
                <InlineMath math="A" /> coupled to a field <InlineMath math="h" />:
              </p>
              <div className="formula">
                <BlockMath math="\langle(\Delta A)^2\rangle = k_BT\left(\frac{\partial \langle A \rangle}{\partial h}\right)_T" />
              </div>
              <p style={proseDim}>
                Spontaneous fluctuations and linear response are two sides of the same coin.
                This connects noise in electrical circuits (Johnson–Nyquist),
                diffusion (Einstein relation), and viscosity (Green–Kubo).
              </p>
            </section>

          </div>
        </div>

        {/* ══════════════════════════
            BLOCK 4 — Critical Phenomena + Summary
        ══════════════════════════ */}
        <div className="article-layout" style={articleLayout}>

          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">critical phenomena</span>
            <h3 style={h3Main}>Diverging Fluctuations at Phase Transitions</h3>

            <p style={prose}>
              Near a continuous (second-order) phase transition, the curvature of the free
              energy flattens — the system becomes "soft" with respect to the order parameter
              <InlineMath math="\phi" />. The susceptibility <InlineMath math="\chi" /> diverges:
            </p>
            <div className="formula">
              <BlockMath math="\chi = \left(\frac{\partial \langle \phi \rangle}{\partial h}\right)_T \sim |T - T_c|^{-\gamma}" />
            </div>

            <p style={prose}>
              By the fluctuation–dissipation theorem, this implies diverging fluctuations
              in the order parameter:
            </p>
            <div className="formula">
              <BlockMath math="\langle(\Delta\phi)^2\rangle = k_BT\,\chi \sim |T-T_c|^{-\gamma}" />
            </div>

            <p style={prose}>
              The spatial correlations between fluctuations are characterized by the
              <b style={{ color: "var(--accent)" }}> correlation length</b> <InlineMath math="\xi" />,
              which also diverges at the critical point:
            </p>
            <div className="formula">
              <BlockMath math="\xi \sim |T - T_c|^{-\nu}" />
            </div>

            <p style={prose}>
              When <InlineMath math="\xi" /> diverges, fluctuations become correlated on all
              length scales — the system looks the same at every scale. This is the origin of
              <b style={{ color: "var(--accent)" }}> scale invariance</b> and universality
              at critical points. The critical exponents <InlineMath math="\gamma, \nu" />
              depend only on the symmetry and dimensionality of the system —
              not on microscopic details.
            </p>

            <p style={{ ...prose, color: "var(--text-muted)" }}>
              This universality is why the liquid–gas critical point and the ferromagnetic
              Curie point belong to the same universality class — they share identical
              critical exponents despite being physically very different systems.
            </p>
          </section>

          {/* SIDEBAR — summary */}
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}>
            <span className="section-eyebrow">chapter summary</span>
            <h3 style={h3Side}>Key Takeaways</h3>

            <ul className="features-list-discreto" style={{ width: "100%" }}>
              <li>
                <b>Boltzmann entropy</b> <InlineMath math="S = k_B\ln\Omega" /> applies when
                all microstates are equally probable. <b>Gibbs entropy</b>
                <InlineMath math="\ S = -k_B\sum p_i\ln p_i" /> is the general form.
              </li>
              <li>
                The Boltzmann distribution is derived by <b>maximizing Gibbs entropy</b>
                subject to a fixed mean energy constraint.
              </li>
              <li>
                Fluctuations around equilibrium are <b>Gaussian</b> to leading order,
                with variance set by the curvature of entropy.
              </li>
              <li>
                Energy fluctuations satisfy <InlineMath math="\sigma_E^2 = k_BT^2C_V" /> —
                the <b>fluctuation–dissipation relation</b>.
              </li>
              <li>
                Relative fluctuations scale as <InlineMath math="1/\sqrt{N}" /> —
                negligible for macroscopic systems, significant at the nanoscale.
              </li>
              <li>
                At a <b>critical point</b>, susceptibility and correlation length diverge —
                fluctuations span the entire system.
              </li>
              <li>
                <b>Universal critical exponents</b> depend only on symmetry and dimension,
                not microscopic details — the basis of the renormalization group.
              </li>
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
              {["Gibbs Entropy", "σ²=kT²Cv", "FDT", "1/√N scaling", "ξ ~ |T-Tc|^-ν", "Universality", "Renormalization"].map(tag => (
                <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>{tag}</span>
              ))}
            </div>
          </section>

        </div>
        <NextPrevNavigation prev={{path:'/learning/population-inversion', title:'Population Inversion'}} 
            next={{path:'/learning/density-of-states-and-correlations', title:'Density of States and Correlations'}}/>
      </div>
      <Footer/>
    </div>
  );
}