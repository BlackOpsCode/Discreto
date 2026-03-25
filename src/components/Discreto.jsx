import { useRef, useState } from "react";
import NavBar from "../navigation_templates/NavBar";
import DiscretoBanner1 from "./helpers/DiscretoBanner1";
import RubikCube from "./helpers/RubikCube";
import Footer from "./helpers/Footer";
import ChatPopup from "./helpers/ChatPopup";
import DiscretoBanner2 from "./helpers/DiscretoBanner2";

/* ─── responsive CSS injected once ─── */
const responsiveCSS = `
  @media (min-width: 1025px) {
    .mascot-card-inner {
      flex-direction: row !important;
      align-items: center !important;
      justify-content: center !important;
      text-align: left !important;
      gap: 5rem !important;
      padding-inline: 1rem !important;
    }

    .mascot-visual {
      flex-shrink: 0;
      width: 290px !important;
      height: 290px !important;
      margin: 0 auto !important;
    }

    .mascot-text {
      align-items: flex-start !important;
      text-align: left !important;
      flex: 1 !important;
      max-width: 640px !important;
      padding-left: 0.5rem !important;
    }

    .mascot-text button {
      align-self: flex-start !important;
    }
  }

  @media (max-width: 768px) {
    .mascot-visual {
      width: 130px !important;
      height: 130px !important;
    }
  }
`;

export default function Discreto() {
  const whoRef = useRef(null);
  const [chatOpen, setChatOpen] = useState(false);

  const scrollToWho = () =>
    whoRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="page-container">
      <style>{responsiveCSS}</style>
      <NavBar />
      <DiscretoBanner1 onScrollToWho={scrollToWho} />
      <div className="page-scroller">
        {/* ── WHO WE ARE ── */}
        <div
          ref={whoRef}
          className="glass-box"
          style={{ width: "min(96%, 1300px)", marginTop: "2.5rem", scrollMarginTop: "5rem" }}
        >
          <span className="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="5" cy="5" r="1.5" fill="currentColor" />
            </svg>
            identity
          </span>

          <h2>Who is Discreto?</h2>

          <p
            style={{
              maxWidth: "680px",
              fontSize: "clamp(1rem, 1.5vw, 1.18rem)",
              color: "var(--text-soft)",
              lineHeight: 1.7,
              margin: "0 auto",
            }}
          >
            Your interactive guide into the statistical fabric of reality —
            randomness, entropy, and the hidden energy behind every possible
            state of the universe.
          </p>

          <p
            style={{
              maxWidth: "600px",
              fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
              color: "var(--text-muted)",
              lineHeight: 1.68,
              margin: "0 auto",
            }}
          >
            Not through memorization — through intuition, simulation, and discovery.
          </p>
        </div>

        {/* ── GRID: Mission + Features ── */}
        <div className="scroller-grid" style={{ width: "min(96%, 1300px)" }}>
          <div className="glass-box">
            <span className="section-eyebrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M5 1 L9 9 L5 7 L1 9 Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinejoin="round"
                />
              </svg>
              mission
            </span>
            <h2>Mission</h2>
            <p
              style={{
                color: "var(--text-soft)",
                lineHeight: 1.7,
                maxWidth: "480px",
                margin: "0 auto",
                fontSize: "clamp(0.94rem, 1.3vw, 1.08rem)",
              }}
            >
              Transform complex physical systems into intuitive, visual experiences.
              From molecular chaos to emergent order — everything becomes understandable.
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.65,
                maxWidth: "440px",
                margin: "0 auto",
                fontSize: "clamp(0.88rem, 1.1vw, 1rem)",
              }}
            >
              Learn by seeing. Learn by playing. Learn by thinking.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                justifyContent: "center",
                marginTop: "0.4rem",
              }}
            >
              {["Entropy", "Boltzmann", "Ensembles", "Ergodicity"].map((tag) => (
                <span key={tag} className="stat-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-box">
            <span className="section-eyebrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect
                  x="1"
                  y="1"
                  width="8"
                  height="8"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M3.5 5 L4.8 6.3 L6.5 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              capabilities
            </span>
            <h2>What you get</h2>
            <ul className="features-list-discreto" style={{ width: "100%", maxWidth: "480px" }}>
              <li><b>Real-time simulations</b> of statistical distributions and many-body systems</li>
              <li><b>Entropy & temperature visualizations</b> rendered live in WebGL</li>
              <li><b>Interactive learning modules</b> with KaTeX-powered theory</li>
              <li><b>Adaptive quizzes</b> that reinforce physical intuition</li>
              <li><b>Many-body system exploration</b> made visceral and intuitive</li>
            </ul>
          </div>
        </div>

        {/* ── MEET DISCRETO — mascot card ── */}
        <div
          className="glass-box accent-card"
          style={{
            width: "min(96%, 1300px)",
            marginTop: "1rem",
            marginBottom: "2rem",
            padding: "clamp(1.6rem, 3vw, 2.6rem)",
            animation: "glowPulse 3s ease-in-out infinite",
          }}
        >
          <div
            className="mascot-card-inner"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "1.6rem",
              width: "100%",
            }}
          >
            {/* ── LEFT: 3D mascot ── */}
            <div
              className="mascot-visual"
              style={{
                position: "relative",
                width: "200px",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(141,255,196,0.14) 0%, transparent 70%)",
                  filter: "blur(16px)",
                  pointerEvents: "none",
                  animation: "glowPulse 3s ease-in-out infinite",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "50%",
                  border: "1px solid rgba(141,255,196,0.15)",
                  animation: "spin 12s linear infinite",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "-22px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(141,255,196,0.07)",
                  animation: "spin 20s linear infinite reverse",
                  pointerEvents: "none",
                }}
              />

              <style>{`
                @keyframes spin { to { transform: rotate(360deg); } }
              `}</style>

              <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
                <RubikCube />
              </div>
            </div>

            {/* ── RIGHT: text + button ── */}
            <div
              className="mascot-text"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                flex: 1,
                minWidth: 0,
              }}
            >
              <span className="section-eyebrow">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M5 1C2.8 1 1 2.8 1 5s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  />
                  <path
                    d="M5 3.5v2M5 7v.2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                your guide
              </span>

              <h2 style={{ margin: 0 }}>Meet Discreto</h2>

              <p
                style={{
                  maxWidth: "520px",
                  fontSize: "clamp(0.96rem, 1.4vw, 1.1rem)",
                  color: "var(--text-soft)",
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                A living interface powered by intelligent systems.
                Ask anything about statistical mechanics — microstates, entropy,
                phase transitions, quantum gases. Explore ideas. Understand deeply.
              </p>

              <p
                style={{
                  maxWidth: "480px",
                  fontSize: "clamp(0.84rem, 1.1vw, 0.96rem)",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Not a chatbot. A physics engine that thinks alongside you —
                grounded in the theory of statistical ensembles and thermodynamic first principles.
              </p>

              <button
                onClick={() => setChatOpen(true)}
                style={{
                  marginTop: "0.6rem",
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.7rem",
                  height: "52px",
                  padding: "0 2.2rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.92)",
                  background: "transparent",
                  color: "#fff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.82rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  overflow: "hidden",
                  boxShadow: "none",
                  outline: "none",
                  transition: "background 0.22s ease, color 0.22s ease, transform 0.22s ease, border-color 0.22s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "transparent";
                  e.currentTarget.style.borderColor = "#fff";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  const label = e.currentTarget.querySelector(".chat-label");
                  if (label) {
                    label.style.opacity = "0";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.92)";
                  e.currentTarget.style.transform = "translateY(0)";
                  const label = e.currentTarget.querySelector(".chat-label");
                  if (label) {
                    label.style.opacity = "1";
                  }
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <rect x="1" y="2" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5 14h6M8 12v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="chat-label" style={{ transition: "opacity 0.22s ease" }}>
                  Let's chat
                </span>
              </button>

              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  opacity: 0.5,
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--accent-2)",
                  marginTop: "-0.3rem",
                }}
              >
                powered by advanced AI systems
              </span>
            </div>
          </div>
        </div>
      </div>
      <DiscretoBanner2 onScroll={scrollToWho}/>

      <Footer />

      <ChatPopup isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}