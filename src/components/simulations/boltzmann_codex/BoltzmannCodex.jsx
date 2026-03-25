import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import NavBar from "../../../navigation_templates/NavBar";
import Footer from "../../helpers/Footer";
import BoltzmannEntropyGauge from "./BoltzmannEntropyGauge";
 
const responsiveCSS = `
  @media (min-width: 1025px) {
    .sim-article-layout { grid-template-columns: 1.55fr 1fr !important; }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .sim-article-layout { grid-template-columns: 1fr 1fr !important; }
  }
`;
 
const articleLayout = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "clamp(1rem, 2vw, 1.5rem)",
  width: "min(96%, 1300px)",
  alignItems: "start",
};
 
const prose    = { color: "var(--text-soft)",  lineHeight: 1.78, margin: 0, fontSize: "clamp(0.88rem, 1.2vw, 1rem)" };
const proseSm  = { color: "var(--text-muted)", fontSize: "clamp(0.82rem, 1.05vw, 0.94rem)", lineHeight: 1.68, margin: 0 };
const proseDim = { color: "var(--text-dim)",   fontSize: "0.8rem", lineHeight: 1.6, margin: 0 };
const h3Main   = { fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.4rem)",    color: "var(--text-main)", margin: 0, letterSpacing: "0.03em" };
const h3Side   = { fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(0.9rem, 1.3vw, 1.15rem)", color: "var(--text-main)", margin: 0, letterSpacing: "0.03em" };
 
export default function BoltzmannCodex() {
  return (
    <div className="page-container">
      <style>{responsiveCSS}</style>
      <NavBar />
 
      <div className="simulation-scroller">
 
        {/* ══ HEADER ══ */}
        <div style={{
          width: "min(96%, 1300px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "0.7rem",
          textAlign: "center", marginBottom: "0.4rem",
        }}>
          <span className="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M3 5h4M5 3v4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            simulation · boltzmann codex
          </span>
 
          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.7rem, 4vw, 3.4rem)",
            lineHeight: 1.06, letterSpacing: "0.05em",
            color: "var(--text-main)", margin: 0,
          }}>
            The Core of Randomness
          </h1>
 
          <p style={{ maxWidth: "660px", ...proseSm, color: "var(--text-muted)" }}>
            Watch entropy emerge in real time. When all particles share the same size, speed,
            and color, disorder is minimal. Introduce randomness and watch the entropy gauge climb.
          </p>
 
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.45rem" }}>
            {["S = k·ln Ω", "Multiplicity", "Disorder", "Boltzmann Factor", "Microstate Counting"].map(tag => (
              <span key={tag} className="stat-chip" style={{ fontSize: "0.66rem" }}>{tag}</span>
            ))}
          </div>
        </div>
 
        {/* ══ SIMULATION ══ */}
        <div style={{ width: "min(96%, 1300px)" }}>
          <BoltzmannEntropyGauge totalParticles={120} />
        </div>
 
        {/* ══ EXPLANATION BLOCK 1 ══ */}
        <div className="sim-article-layout" style={articleLayout}>
 
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">what you're seeing</span>
            <h3 style={h3Main}>Particles, Microstates & Entropy</h3>
 
            <p style={prose}>
              Each sphere in the box represents a particle with three properties:
              <b style={{ color: "var(--accent)" }}> size</b> (energy level),
              <b style={{ color: "var(--accent)" }}> speed</b> (kinetic energy), and
              <b style={{ color: "var(--accent)" }}> color</b> (internal state).
              Together, the exact configuration of all particles at any instant is a
              <b style={{ color: "var(--accent)" }}> microstate</b>.
            </p>
 
            <p style={prose}>
              The entropy gauge measures how spread out these properties are.
              When every particle is identical — same size, same speed, same color —
              there is essentially <em>one</em> way to arrange the system: <InlineMath math="\Omega = 1" />,
              so <InlineMath math="S = k_B \ln 1 = 0" />. Perfect order.
            </p>
 
            <p style={prose}>
              As you introduce randomness using the sliders, particles diverge.
              More distinct configurations become possible — <InlineMath math="\Omega" /> grows —
              and the entropy climbs toward its maximum value.
            </p>
 
            <div className="formula">
              <BlockMath math="S = -k_B \sum_i p_i \ln p_i" />
            </div>
 
            <p style={{ ...prose, color: "var(--text-muted)" }}>
              This is the Gibbs form of entropy — the most general version, valid for any
              probability distribution <InlineMath math="p_i" /> over microstates.
              When all microstates are equally likely, it reduces to Boltzmann's
              <InlineMath math="\ S = k_B \ln \Omega" />.
            </p>
          </section>
 
          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
 
            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">reading the gauge</span>
              <h3 style={h3Side}>Entropy Levels</h3>
 
              {[
                { range: "0 – 20%",  label: "Ordered",     desc: "Particles nearly identical. One dominant microstate.", color: "var(--accent)" },
                { range: "20 – 50%", label: "Low chaos",   desc: "Moderate spread. Few distinct configurations.",        color: "var(--accent-2)" },
                { range: "50 – 80%", label: "Disordered",  desc: "High variety. Many configurations equally likely.",    color: "var(--warm)" },
                { range: "80 – 100%",label: "Max chaos",   desc: "All properties fully random. Maximum Ω.",              color: "#ff7b7b" },
              ].map(({ range, label, desc, color }) => (
                <div key={label} style={{
                  display: "flex", gap: "0.65rem", alignItems: "flex-start",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-ghost)",
                  background: "var(--surface)",
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color, marginTop: "0.32rem", flexShrink: 0, boxShadow: `0 0 6px ${color}88` }}/>
                  <div>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color, margin: "0 0 0.15rem", letterSpacing: "0.08em" }}>
                      {range} · {label}
                    </p>
                    <p style={proseDim}>{desc}</p>
                  </div>
                </div>
              ))}
            </section>
 
            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">the formula</span>
              <div className="formula"><BlockMath math="S = k_B \ln \Omega" /></div>
              <div className="formula"><BlockMath math="\Omega \text{ — number of microstates}" /></div>
              <p style={proseDim}>
                <InlineMath math="k_B = 1.38 \times 10^{-23}" /> J/K — Boltzmann constant.
                The logarithm makes entropy extensive: doubling the system doubles <InlineMath math="S" />.
              </p>
            </section>
 
          </div>
        </div>
 
        {/* ══ EXPLANATION BLOCK 2 ══ */}
        <div className="sim-article-layout" style={articleLayout}>
 
          <section style={{ alignItems: "flex-start", textAlign: "left", gap: "1rem" }}>
            <span className="section-eyebrow">how to use the simulation</span>
            <h3 style={h3Main}>Presets & Sliders Explained</h3>
 
            <p style={prose}>
              The <b style={{ color: "var(--accent)" }}>presets</b> snap the system into instructive configurations.
              <b style={{ color: "var(--accent)" }}> All Even</b> forces all properties to their average values —
              entropy should drop close to zero. <b style={{ color: "var(--accent)" }}>Max Chaos</b> randomizes
              everything at once, driving entropy to its maximum.
            </p>
 
            <p style={prose}>
              The <b style={{ color: "var(--accent)" }}>randomness sliders</b> let you isolate which property
              drives entropy. Try setting only Speed variance to 100% while keeping Size and Color at 0% —
              you'll see entropy rise, but not as high as when all three vary. This demonstrates that entropy
              is a <em>sum of contributions</em> from independent channels of disorder.
            </p>
 
            <p style={prose}>
              In this simulation, entropy is computed as the average of three histogram entropies —
              one each for speed, size, and color hue — normalized to [0, 1]:
            </p>
 
            <div className="formula">
              <BlockMath math="S_{norm} = \frac{1}{3}\left(S_{speed} + S_{size} + S_{color}\right)" />
            </div>
 
            <p style={{ ...prose, color: "var(--text-muted)" }}>
              Each <InlineMath math="S_{channel}" /> is computed by binning particle values into a histogram
              and applying the Shannon entropy formula. This is a discrete approximation to the continuous
              Boltzmann entropy — exact in the limit of many particles and many bins.
            </p>
          </section>
 
          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
 
            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">second law</span>
              <h3 style={h3Side}>Why Entropy Increases</h3>
              <p style={proseSm}>
                The number of disordered macrostates vastly outnumbers ordered ones.
                If you start from Max Chaos and watch — the system <em>stays</em> chaotic.
                Returning spontaneously to All Even would require:
              </p>
              <div className="formula">
                <BlockMath math="\frac{\Omega_{ordered}}{\Omega_{random}} \sim 10^{-N}" />
              </div>
              <p style={proseDim}>
                For <InlineMath math="N = 120" /> particles this ratio is ~<InlineMath math="10^{-120}" />.
                The second law is not a prohibition — it is an overwhelming statistical preference.
              </p>
            </section>
 
            <section style={{ alignItems: "flex-start", textAlign: "left", gap: "0.7rem" }}>
              <span className="section-eyebrow">shannon entropy</span>
              <p style={proseSm}>
                The histogram method used here is equivalent to Shannon entropy:
              </p>
              <div className="formula">
                <BlockMath math="H = -\sum_{i} p_i \log p_i" />
              </div>
              <p style={proseDim}>
                Shannon (1948) and Boltzmann (1877) arrived at the same formula from
                completely different directions — information theory and statistical physics.
                They are the same concept measured in different units.
              </p>
            </section>
 
          </div>
        </div>
 
        <Footer />
      </div>
    </div>
  );
}
 
