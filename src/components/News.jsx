import NavBar from "../navigation_templates/NavBar";
import Footer from "./helpers/Footer";
import { FaBookOpenReader } from "react-icons/fa6";
 
const news = [
  {
    title: "Emergent order from mixed chaos at low temperature",
    abstract: "This paper explores a novel connection between a thermodynamic and a dynamical systems perspective on emergent dynamical order. We provide evidence for a conjecture that Hamiltonian systems with mixed chaos spontaneously find regular behavior when minimally coupled to a thermal bath at sufficiently low temperature.",
    published: "04 Nov 2025",
    journal: "Nature",
    tags: ["Hamiltonian Systems", "Emergent Order", "Thermal Bath", "Mixed Chaos"],
    link: "https://www.nature.com/articles/s41598-025-22877-4",
  },
  {
    title: "Neurophysiological correlates to the human brain complexity through q-statistical analysis of EEG",
    abstract: "The prospects of assessing neural complexity via q-statistics of the systemic organization of different types and levels of brain activity were studied in 70 adult subjects. NC was assessed via the parameter q of q-statistics, applied to the ongoing EEG across 20 scalp channels.",
    published: "20 Oct 2025",
    journal: "Nature",
    tags: ["q-Statistics", "Neural Complexity", "EEG", "Brain Activity"],
    link: "https://www.nature.com/articles/s41598-025-21156-6",
  },
];
 
/* index string for card corner */
const pad = (n) => String(n + 1).padStart(2, "0");
 
export default function News() {
  return (
    <div className="page-container">
      <NavBar />
 
      <div className="page-scroller">
 
        {/* ── PAGE HEADER ── */}
        <div style={{
          width: "min(96%, 1300px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "0.6rem",
          textAlign: "center", marginBottom: "0.4rem",
        }}>
          <span className="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="2" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M3 5h4M3 6.5h2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            latest research
          </span>
 
          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3.6rem)",
            lineHeight: 1.06, letterSpacing: "0.06em",
            color: "var(--text-main)", margin: 0,
          }}>
            News & Papers
          </h1>
 
          <p style={{
            maxWidth: "540px",
            fontSize: "clamp(0.92rem, 1.3vw, 1.06rem)",
            color: "var(--text-muted)", lineHeight: 1.68, margin: "0 auto",
          }}>
            Recent publications at the intersection of statistical mechanics,
            complexity, and emergent phenomena.
          </p>
        </div>
 
        {/* ── NEWS GRID ── */}
        <div className="scroller-grid" style={{ width: "min(96%, 1300px)" }}>
          {news.map((item, idx) => (
            <div
              key={idx}
              className="glass-box"
              style={{
                alignItems: "flex-start",
                textAlign: "left",
                gap: "0.85rem",
                padding: "clamp(1.2rem, 2.4vw, 1.8rem)",
              }}
            >
              {/* ── top row: index + journal badge ── */}
              <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "var(--accent-3)",
                  opacity: 0.7,
                }}>
                  {pad(idx)}
                </span>
 
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                }}>
                  {item.journal}
                </span>
              </div>
 
              {/* ── title ── */}
              <h3 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "clamp(0.92rem, 1.4vw, 1.2rem)",
                lineHeight: 1.25,
                letterSpacing: "0.02em",
                color: "var(--text-main)",
                margin: 0,
                fontWeight: 600,
              }}>
                {item.title}
              </h3>
 
              {/* ── abstract first sentence ── */}
              <p style={{
                fontSize: "clamp(0.82rem, 1.1vw, 0.94rem)",
                color: "var(--text-muted)",
                lineHeight: 1.68,
                margin: 0,
                flexGrow: 1,
              }}>
                {item.abstract.split(".")[0]}.
              </p>
 
              {/* ── tags ── */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {item.tags.map(tag => (
                  <span key={tag} className="stat-chip" style={{ fontSize: "0.64rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
 
              {/* ── footer row: date + read button ── */}
              <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "0.2rem",
                paddingTop: "0.7rem",
                borderTop: "1px solid var(--border-ghost)",
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.66rem",
                  letterSpacing: "0.1em",
                  color: "var(--text-dim)",
                }}>
                  {item.published}
                </span>
 
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    height: "34px",
                    padding: "0 1rem",
                    borderRadius: "999px",
                    border: "1px solid var(--border-mid)",
                    background: "rgba(141,255,196,0.05)",
                    color: "var(--accent)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "background 0.18s ease, border-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(141,255,196,0.1)";
                    e.currentTarget.style.borderColor = "var(--border-strong)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(93,232,168,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(141,255,196,0.05)";
                    e.currentTarget.style.borderColor = "var(--border-mid)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <FaBookOpenReader size={12} />
                  Read paper
                </a>
              </div>
 
            </div>
          ))}
        </div>
 
      </div>
 
      <Footer />
    </div>
  );
}
 
