import { useState } from "react";
import NavBar from "../../../navigation_templates/NavBar";
import Footer from "../../helpers/Footer";

const extraCSS = `
  @media (min-width: 1025px) {
    .support-hero-grid  { grid-template-columns: 1.2fr 0.8fr !important; }
    .support-topics-grid { grid-template-columns: repeat(3, minmax(0,1fr)) !important; }
    .support-bottom-grid { grid-template-columns: 1.1fr 0.9fr !important; }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .support-hero-grid   { grid-template-columns: 1fr !important; }
    .support-topics-grid { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
    .support-bottom-grid { grid-template-columns: 1fr !important; }
  }

  .support-pill-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.55rem 1rem;
    border-radius: 999px;
    border: 1px solid var(--border-soft);
    background: var(--surface);
    color: var(--text-soft);
    font-family: 'Syne', sans-serif;
    font-size: clamp(0.8rem, 1vw, 0.88rem);
    cursor: pointer;
    transition: background 0.16s ease, border-color 0.16s ease, color 0.16s ease, transform 0.16s ease;
    white-space: nowrap;
  }
  .support-pill-btn:hover {
    background: rgba(141,255,196,0.07);
    border-color: var(--border-mid);
    color: var(--accent);
    transform: translateY(-1px);
  }
  .support-pill-btn.active {
    background: rgba(141,255,196,0.1);
    border-color: var(--border-strong);
    color: var(--accent);
  }

  .support-topic-card {
    padding: clamp(1.1rem, 2vw, 1.5rem);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-ghost);
    background: var(--surface);
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    cursor: pointer;
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
    position: relative;
    overflow: hidden;
  }
  .support-topic-card::before {
    content: "";
    position: absolute;
    top: 0; left: 10%; width: 80%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(141,255,196,0.18) 50%, transparent);
    opacity: 0;
    transition: opacity 0.18s ease;
  }
  .support-topic-card:hover {
    border-color: var(--border-mid);
    background: var(--surface-mid);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md), var(--shadow-glow);
  }
  .support-topic-card:hover::before { opacity: 1; }
  .support-topic-card.selected {
    border-color: rgba(141,255,196,0.3);
    background: rgba(141,255,196,0.06);
  }

  .support-input {
    width: 100%;
    background: var(--surface);
    border: 1px solid var(--border-soft);
    border-radius: var(--radius-md);
    padding: 0.75rem 1rem;
    color: var(--text-main);
    font-family: 'Syne', sans-serif;
    font-size: clamp(0.86rem, 1.1vw, 0.96rem);
    outline: none;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
    resize: none;
  }
  .support-input::placeholder { color: var(--text-dim); }
  .support-input:focus {
    border-color: rgba(141,255,196,0.28);
    box-shadow: 0 0 0 3px rgba(141,255,196,0.06);
  }

  .support-send-btn {
    height: 46px;
    padding: 0 2rem;
    border-radius: 999px;
    border: 1px solid var(--border-strong);
    background: linear-gradient(135deg, var(--accent-3), var(--accent));
    color: #020704;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.76rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
    white-space: nowrap;
  }
  .support-send-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(93,232,168,0.28);
  }
  .support-send-btn:disabled {
    background: var(--surface);
    color: var(--text-dim);
    border-color: var(--border-ghost);
    cursor: not-allowed;
    opacity: 1;
    transform: none;
    box-shadow: none;
  }

  .faq-item {
    border-radius: var(--radius-md);
    border: 1px solid var(--border-ghost);
    background: var(--surface);
    overflow: hidden;
    transition: border-color 0.18s ease;
  }
  .faq-item:hover { border-color: var(--border-soft); }
  .faq-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.95rem 1.1rem;
    background: transparent;
    border: none;
    color: var(--text-main);
    font-family: 'Syne', sans-serif;
    font-size: clamp(0.88rem, 1.1vw, 0.97rem);
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    transition: color 0.16s ease;
  }
  .faq-trigger:hover { color: var(--accent); }
  .faq-chevron {
    font-size: 0.7rem;
    color: var(--accent-3);
    transition: transform 0.22s ease;
    flex-shrink: 0;
  }
  .faq-body {
    padding: 0 1.1rem 0.95rem;
    color: var(--text-muted);
    font-family: 'Syne', sans-serif;
    font-size: clamp(0.84rem, 1.05vw, 0.93rem);
    line-height: 1.7;
  }

  .status-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 8px rgba(141,255,196,0.5);
    animation: glowPulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }
`;

/* ─── data ─── */
const topics = [
  { icon: "⚛️", label: "Simulation issues",    desc: "Something not rendering, simulation freezing, or WebGL errors." },
  { icon: "📖", label: "Learning content",      desc: "Unclear explanations, formula errors, or missing theory sections." },
  { icon: "🧩", label: "Quiz problems",         desc: "Wrong answers flagged, quiz not loading, or scoring issues." },
  { icon: "🤖", label: "AI / Discreto chat",    desc: "The chat assistant is not responding or giving wrong answers." },
  { icon: "🔑", label: "Account & access",      desc: "Login issues, password reset, or access to premium features." },
  { icon: "💡", label: "Feature request",       desc: "Suggest a new simulation, topic, or improvement to the platform." },
];

const quickLinks = [
  { label: "Getting started guide",       href: "#" },
  { label: "How simulations work",        href: "#" },
  { label: "Understanding KaTeX formulas", href: "#" },
  { label: "Keyboard shortcuts",          href: "#" },
  { label: "Browser compatibility",       href: "#" },
];

const faqs = [
  { q: "Why is the simulation not loading?",           a: "Simulations require WebGL support. Make sure your browser is up to date and hardware acceleration is enabled in settings. Chrome and Firefox have the best compatibility." },
  { q: "Can I use Discreto on mobile?",                a: "Yes. The platform is fully responsive. Simulations may run slower on low-end devices, but all theory and quiz content works perfectly on any screen size." },
  { q: "The AI gave me a wrong physics answer — what should I do?", a: "Use the 'Learning content' support topic to report it. Include the question you asked and the incorrect response. We review all flagged interactions." },
  { q: "Is my progress saved between sessions?",       a: "Quiz scores and completed chapters are saved locally in your browser. Account-based cloud sync is on the roadmap for a future release." },
  { q: "How do I reset a quiz?",                       a: "Open the quiz page and click the Retry button that appears after completing it. Your previous score is cleared and you can start fresh." },
  { q: "Can I suggest a new simulation topic?",        a: "Absolutely. Select 'Feature request' from the support topics above and describe what you'd like to see. Most new simulations are community-suggested." },
];

/* ─── sub-components ─── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={() => setOpen(o => !o)}>
        {q}
        <span className="faq-chevron" style={{ transform: open ? "rotate(180deg)" : "none" }}>▼</span>
      </button>
      {open && <div className="faq-body">{a}</div>}
    </div>
  );
}

const shellW   = { width: "min(96%, 1300px)" };
const gridBase = { display: "grid", gap: "clamp(0.9rem, 1.5vw, 1.2rem)" };
const sTitle   = { fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(1.3rem, 2vw, 1.9rem)", color: "var(--text-main)", margin: "0 0 0.6rem", letterSpacing: "0.03em", lineHeight: 1.1 };
const bodyText = { color: "var(--text-soft)", lineHeight: 1.72, margin: 0, fontSize: "clamp(0.88rem, 1.15vw, 1rem)" };
const mutedText= { color: "var(--text-muted)", lineHeight: 1.68, margin: 0, fontSize: "clamp(0.84rem, 1.05vw, 0.94rem)" };

export default function Support() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [sent,    setSent]    = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    setSent(true);
  };

  const canSend = message.trim().length > 0;

  return (
    <div className="page-container">
      <style>{extraCSS}</style>
      <NavBar />

      <div className="about-scroller">

        {/* ══ HERO ══ */}
        <div
          className="glass-box"
          style={{ ...shellW, marginTop: "2.5rem", alignItems: "flex-start", textAlign: "left" }}
        >
          <div
            className="support-hero-grid"
            style={{ ...gridBase, width: "100%", alignItems: "center" }}
          >
            {/* left */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <span className="section-eyebrow">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 3v2.2M5 6.8v.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                support
              </span>

              <h1 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.6rem)",
                lineHeight: 1, letterSpacing: "0.04em",
                color: "var(--text-main)", margin: 0,
              }}>
                How can we help?
              </h1>

              <p style={{ ...bodyText, maxWidth: "540px" }}>
                Pick a topic below, describe your issue, and we'll get back to you.
                Most requests are resolved within 24 hours.
              </p>

              {/* status badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: "0.2rem" }}>
                <div className="status-dot"/>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  color: "var(--accent-2)",
                  textTransform: "uppercase",
                }}>
                  All systems operational
                </span>
              </div>
            </div>

            {/* right — quick links */}
            <div style={{
              padding: "1.2rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-ghost)",
              background: "var(--surface)",
              display: "flex",
              flexDirection: "column",
              gap: "0.55rem",
            }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.64rem",
                letterSpacing: "0.16em",
                color: "var(--accent-3)",
                textTransform: "uppercase",
                marginBottom: "0.2rem",
              }}>
                Quick links
              </span>
              {quickLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.6rem 0.75rem",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid transparent",
                    color: "var(--text-soft)",
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(0.82rem, 1vw, 0.9rem)",
                    textDecoration: "none",
                    transition: "background 0.15s ease, border-color 0.15s ease, color 0.15s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(141,255,196,0.05)";
                    e.currentTarget.style.borderColor = "var(--border-soft)";
                    e.currentTarget.style.color = "var(--text-main)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.color = "var(--text-soft)";
                  }}
                >
                  {label}
                  <span style={{ color: "var(--accent-3)", fontSize: "0.7rem", opacity: 0.6 }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ══ CONTACT FORM + FAQ ══ */}
        <div
          className="support-bottom-grid"
          style={{ ...gridBase, ...shellW, alignItems: "start" }}
        >

          {/* ── CONTACT FORM ── */}
          <div
            className="glass-box"
            style={{ alignItems: "flex-start", textAlign: "left", gap: "1.2rem" }}
          >
            <span className="section-eyebrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="1" y="2" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 3.5l4 2.5 4-2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
              send a message
            </span>

            <h2 style={sTitle}>Tell us what's going on</h2>

            {/* TOPIC PICKER */}
            <div style={{ width: "100%" }}>
              <p style={{ ...mutedText, marginBottom: "0.65rem", fontSize: "0.82rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)" }}>
                1 — Pick a topic
              </p>
              <div
                className="support-topics-grid"
                style={{ ...gridBase }}
              >
                {topics.map(({ icon, label, desc }) => (
                  <div
                    key={label}
                    className={`support-topic-card${selectedTopic === label ? " selected" : ""}`}
                    onClick={() => setSelectedTopic(selectedTopic === label ? null : label)}
                  >
                    <span style={{ fontSize: "1.3rem", lineHeight: 1 }}>{icon}</span>
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(0.84rem, 1.05vw, 0.94rem)",
                      color: "var(--text-main)",
                      margin: 0, fontWeight: 700,
                    }}>
                      {label}
                    </h3>
                    <p style={{ ...mutedText, fontSize: "0.8rem" }}>{desc}</p>
                    {selectedTopic === label && (
                      <span style={{
                        position: "absolute", top: "0.7rem", right: "0.7rem",
                        width: "18px", height: "18px",
                        borderRadius: "50%",
                        background: "rgba(141,255,196,0.15)",
                        border: "1px solid var(--accent-3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.6rem", color: "var(--accent)",
                      }}>✓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FIELDS */}
            {!sent ? (
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <p style={{ ...mutedText, fontSize: "0.82rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", margin: 0 }}>
                  2 — Describe your issue
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem" }}>
                  <input
                    className="support-input"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <input
                    className="support-input"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <textarea
                  className="support-input"
                  rows={5}
                  placeholder={
                    selectedTopic
                      ? `Describe your issue with "${selectedTopic}"…`
                      : "Describe what happened, what you expected, and any error messages…"
                  }
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  style={{ lineHeight: 1.65 }}
                />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.7rem" }}>
                  <p style={{ ...mutedText, fontSize: "0.78rem" }}>
                    {selectedTopic
                      ? <span>Topic: <b style={{ color: "var(--accent-2)" }}>{selectedTopic}</b></span>
                      : "No topic selected — feel free to still send."}
                  </p>
                  <button
                    className="support-send-btn"
                    disabled={!canSend}
                    onClick={handleSend}
                  >
                    Send message →
                  </button>
                </div>
              </div>
            ) : (
              /* ── SUCCESS STATE ── */
              <div style={{
                width: "100%",
                padding: "1.8rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid rgba(141,255,196,0.25)",
                background: "rgba(141,255,196,0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.8rem",
                textAlign: "center",
              }}>
                <div style={{
                  width: "48px", height: "48px",
                  borderRadius: "50%",
                  background: "rgba(141,255,196,0.1)",
                  border: "1px solid var(--border-mid)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem",
                }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "1.1rem", color: "var(--accent)", margin: 0, letterSpacing: "0.04em" }}>
                  Message received
                </h3>
                <p style={mutedText}>
                  We'll get back to you within 24 hours. Check your inbox at <b style={{ color: "var(--text-soft)" }}>{email || "the email you provided"}</b>.
                </p>
                <button
                  onClick={() => { setSent(false); setMessage(""); setSelectedTopic(null); }}
                  style={{
                    height: "36px", padding: "0 1.2rem",
                    borderRadius: "999px",
                    border: "1px solid var(--border-mid)",
                    background: "transparent",
                    color: "var(--accent)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(141,255,196,0.07)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  Send another →
                </button>
              </div>
            )}
          </div>

          {/* ── FAQ ── */}
          <div
            className="glass-box"
            style={{ alignItems: "flex-start", textAlign: "left", gap: "0.85rem" }}
          >
            <span className="section-eyebrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1C2.8 1 1 2.8 1 5s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" stroke="currentColor" strokeWidth="1.1"/>
                <path d="M5 3.5v2M5 7v.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              common questions
            </span>

            <h2 style={sTitle}>Before you write</h2>

            <p style={{ ...mutedText, marginTop: "-0.2rem", marginBottom: "0.4rem" }}>
              These cover most issues people run into.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "100%" }}>
              {faqs.map(({ q, a }) => (
                <FaqItem key={q} q={q} a={a} />
              ))}
            </div>

            {/* contact alternatives */}
            <div style={{
              marginTop: "0.8rem",
              padding: "1rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-ghost)",
              background: "var(--surface)",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.64rem",
                letterSpacing: "0.14em",
                color: "var(--accent-3)",
                textTransform: "uppercase",
              }}>
                Other ways to reach us
              </span>
              {[
                { label: "Discord community", val: "discord.gg/discreto", icon: "💬" },
                { label: "Email",             val: "support@discreto.app", icon: "✉️" },
                { label: "GitHub issues",     val: "github.com/discreto",  icon: "🐛" },
              ].map(({ label, val, icon }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                  <span style={{ fontSize: "0.9rem" }}>{icon}</span>
                  <div>
                    <p style={{ ...mutedText, fontSize: "0.76rem", marginBottom: "0.08rem" }}>{label}</p>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--accent-2)", margin: 0 }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}