import NavBar from "../../../navigation_templates/NavBar";
import Footer from "../../helpers/Footer";

const extraCSS = `
  @media (min-width: 1025px) {
    .privacy-hero-grid { grid-template-columns: 1.3fr 0.7fr !important; }
    .privacy-cols      { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
    .privacy-cols-3    { grid-template-columns: repeat(3, minmax(0,1fr)) !important; }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .privacy-hero-grid { grid-template-columns: 1fr !important; }
    .privacy-cols      { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
    .privacy-cols-3    { grid-template-columns: repeat(2, minmax(0,1fr)) !important; }
  }
`;

const shellW   = { width: "min(96%, 1300px)" };
const gridBase = { display: "grid", gap: "clamp(0.85rem, 1.5vw, 1.1rem)" };

const sTitle = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(1.2rem, 1.8vw, 1.75rem)",
  lineHeight: 1.1, color: "var(--text-main)",
  margin: "0 0 0.7rem", letterSpacing: "0.03em",
};

const bodyText = {
  color: "var(--text-soft)", lineHeight: 1.75,
  margin: 0, fontSize: "clamp(0.88rem, 1.15vw, 1rem)",
};

const mutedText = {
  color: "var(--text-muted)", lineHeight: 1.68,
  margin: 0, fontSize: "clamp(0.84rem, 1.05vw, 0.94rem)",
};

const miniCard = {
  padding: "1rem 1.05rem",
  borderRadius: "var(--radius-lg)",
  border: "1px solid var(--border-ghost)",
  background: "var(--surface)",
};

const tag = (label, color = "var(--accent-3)") => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    padding: "0.2rem 0.55rem",
    borderRadius: "999px",
    border: `1px solid ${color}44`,
    background: `${color}11`,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.64rem",
    letterSpacing: "0.1em",
    color,
    textTransform: "uppercase",
    flexShrink: 0,
  }}>
    {label}
  </span>
);

const dataRows = [
  { type: "Usage data",         what: "Pages visited, simulations run, quiz scores",                 why: "Improve content and fix bugs",                  keep: "Session only",   share: "Never" },
  { type: "Device info",        what: "Browser type, screen size, OS",                               why: "Ensure compatibility",                           keep: "Session only",   share: "Never" },
  { type: "Local storage",      what: "Quiz progress, completed chapters",                           why: "Persist your learning progress",                 keep: "Until cleared",  share: "Never" },
  { type: "AI chat messages",   what: "Messages sent to the Discreto AI",                            why: "Generate responses via Anthropic API",           keep: "Not stored",     share: "Anthropic (inference only)" },
  { type: "Support messages",   what: "Name, email, issue description",                              why: "Respond to your support request",                keep: "90 days",        share: "Never" },
  { type: "Error logs",         what: "WebGL errors, crash reports (no personal data)",              why: "Diagnose technical issues",                     keep: "30 days",        share: "Never" },
];

const rights = [
  { icon: "👁️",  title: "Access",      desc: "Request a copy of any data we hold about you." },
  { icon: "✏️",  title: "Correction",  desc: "Ask us to correct inaccurate personal information." },
  { icon: "🗑️", title: "Deletion",    desc: "Ask us to delete your data at any time." },
  { icon: "🚫",  title: "Objection",   desc: "Object to processing of your data for any reason." },
  { icon: "📦",  title: "Portability", desc: "Receive your data in a structured, machine-readable format." },
  { icon: "⏸️", title: "Restriction", desc: "Ask us to pause processing while a dispute is resolved." },
];

export default function PrivacyPolicy() {
  return (
    <div className="page-container">
      <style>{extraCSS}</style>
      <NavBar />

      <div className="about-scroller">

        {/* ══ HERO ══ */}
        <div className="glass-box" style={{ ...shellW, marginTop: "2.5rem", alignItems: "flex-start", textAlign: "left" }}>
          <div className="privacy-hero-grid" style={{ ...gridBase, width: "100%", alignItems: "center" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <span className="section-eyebrow">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1L2 3v3c0 2 1.5 3 3 3s3-1 3-3V3L5 1z" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinejoin="round"/>
                </svg>
                privacy policy
              </span>

              <h1 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.6rem)",
                lineHeight: 1, letterSpacing: "0.04em",
                color: "var(--text-main)", margin: 0,
              }}>
                Your data,<br/>your control.
              </h1>

              <p style={{ ...bodyText, maxWidth: "560px" }}>
                Discreto collects the minimum data necessary to function.
                We do not sell, rent, or share your personal information with
                third parties for commercial purposes — ever.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.2rem" }}>
                {tag("No ads")}
                {tag("No selling data")}
                {tag("No tracking pixels")}
                {tag("GDPR aligned")}
              </div>
            </div>

            {/* right — summary box */}
            <div style={{
              ...miniCard,
              display: "flex", flexDirection: "column", gap: "0.7rem",
              border: "1px solid var(--border-soft)",
            }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.64rem", letterSpacing: "0.16em",
                color: "var(--accent-3)", textTransform: "uppercase",
              }}>
                At a glance
              </span>

              {[
                ["We collect",     "Usage patterns, device info, support messages"],
                ["We don't collect","Email unless you contact us"],
                ["AI messages",    "Passed to Anthropic for inference — not stored by us"],
                ["Local data",     "Stored in your browser — you control it"],
                ["Last updated",   "January 2026"],
                ["Contact",        "privacy@discreto.app"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--text-dim)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</span>
                  <span style={{ ...mutedText, fontSize: "0.86rem", color: "var(--text-soft)" }}>{v}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ══ WHAT WE COLLECT — TABLE ══ */}
        <div className="glass-box" style={{ ...shellW, alignItems: "flex-start", textAlign: "left" }}>
          <span className="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="1" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M1 4h8M4 1v8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
            </svg>
            data we collect
          </span>
          <h2 style={sTitle}>What, why, and for how long</h2>
          <p style={{ ...mutedText, marginBottom: "0.8rem" }}>
            Every piece of data we collect has a specific reason. If the reason disappears, so does the data.
          </p>

          <div style={{ width: "100%", overflowX: "auto" }}>
            <table className="pumping-table" style={{ minWidth: "600px" }}>
              <thead>
                <tr>
                  <th>Data type</th>
                  <th>What exactly</th>
                  <th>Why</th>
                  <th>Retention</th>
                  <th>Shared with</th>
                </tr>
              </thead>
              <tbody>
                {dataRows.map(({ type, what, why, keep, share }) => (
                  <tr key={type}>
                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--accent-2)", whiteSpace: "nowrap" }}>{type}</td>
                    <td style={{ ...mutedText, fontSize: "0.82rem" }}>{what}</td>
                    <td style={{ ...mutedText, fontSize: "0.82rem" }}>{why}</td>
                    <td style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", color: "var(--text-soft)", whiteSpace: "nowrap" }}>{keep}</td>
                    <td>
                      {share === "Never"
                        ? <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.08em" }}>Never</span>
                        : <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--warm)", letterSpacing: "0.06em" }}>{share}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ══ AI CHAT NOTE + COOKIES — 2 col ══ */}
        <div className="privacy-cols" style={{ ...gridBase, ...shellW }}>

          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left" }}>
            <span className="section-eyebrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="1" y="2" width="8" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M3 7.5l1.5 1.5 1.5-1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              ai assistant
            </span>
            <h2 style={sTitle}>Discreto AI & Anthropic</h2>
            <p style={bodyText}>
              When you use the Discreto chat assistant, your messages are sent to
              <b style={{ color: "var(--accent)" }}> Anthropic's API</b> to generate a response.
              This is standard inference — your messages are not stored by Anthropic beyond the
              duration of the API call, and are not used to train future models under their
              current data processing agreement.
            </p>
            <p style={{ ...mutedText, marginTop: "0.7rem" }}>
              We do not log or store the content of your AI conversations on our servers.
              Nothing from your chat session persists after you close the page.
            </p>
            <div style={{
              ...miniCard,
              marginTop: "0.5rem",
              display: "flex", gap: "0.6rem", alignItems: "flex-start",
            }}>
              <span style={{ fontSize: "1rem", flexShrink: 0 }}>⚠️</span>
              <p style={{ ...mutedText, fontSize: "0.82rem" }}>
                Do not share sensitive personal information (passwords, financial data,
                health information) with the AI assistant.
              </p>
            </div>
          </div>

          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left" }}>
            <span className="section-eyebrow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="3.5" cy="4" r="0.7" fill="currentColor"/>
                <circle cx="6.5" cy="4" r="0.7" fill="currentColor"/>
                <circle cx="5" cy="7" r="0.7" fill="currentColor"/>
              </svg>
              cookies & storage
            </span>
            <h2 style={sTitle}>Cookies & Local Storage</h2>
            <p style={bodyText}>
              Discreto uses <b style={{ color: "var(--accent)" }}>no third-party cookies</b> and
              no advertising trackers. We use the browser's <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.88em", color: "var(--accent-2)", background: "rgba(141,255,196,0.06)", padding: "0.1em 0.3em", borderRadius: "4px" }}>localStorage</code> API
              exclusively to persist your learning progress and quiz scores between sessions.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.6rem", width: "100%" }}>
              {[
                { key: "quiz_scores",       desc: "Your scores per quiz module",        type: "Local" },
                { key: "completed_chapters", desc: "Which theory chapters you've read",  type: "Local" },
                { key: "theme_preference",  desc: "UI preferences (if implemented)",     type: "Local" },
              ].map(({ key, desc, type }) => (
                <div key={key} style={{ ...miniCard, display: "flex", alignItems: "flex-start", gap: "0.7rem" }}>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "var(--accent-2)", whiteSpace: "nowrap", paddingTop: "0.05rem" }}>{key}</code>
                  <p style={{ ...mutedText, fontSize: "0.82rem", flexGrow: 1 }}>{desc}</p>
                  {tag(type)}
                </div>
              ))}
            </div>

            <p style={{ ...mutedText, marginTop: "0.7rem", fontSize: "0.82rem" }}>
              You can clear all local data at any time through your browser's developer tools
              or by clearing site data in browser settings.
            </p>
          </div>

        </div>

        {/* ══ YOUR RIGHTS ══ */}
        <div className="glass-box" style={{ ...shellW, alignItems: "flex-start", textAlign: "left" }}>
          <span className="section-eyebrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1L2 3v3c0 2 1.5 3 3 3s3-1 3-3V3L5 1z" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinejoin="round"/>
              <path d="M3.5 5.2l1 1 2-2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            your rights
          </span>
          <h2 style={sTitle}>What you can ask us to do</h2>
          <p style={{ ...mutedText, marginBottom: "0.8rem" }}>
            Under GDPR and similar data protection laws, you have the following rights.
            Exercise any of them by emailing <b style={{ color: "var(--accent-2)" }}>privacy@discreto.app</b>.
          </p>

          <div className="privacy-cols-3" style={{ ...gridBase, width: "100%" }}>
            {rights.map(({ icon, title, desc }) => (
              <div key={title} style={{ ...miniCard, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.96rem", color: "var(--text-main)", margin: 0, fontWeight: 700 }}>{title}</h3>
                <p style={{ ...mutedText, fontSize: "0.86rem" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECURITY + CONTACT — 2 col ══ */}
        <div className="privacy-cols" style={{ ...gridBase, ...shellW }}>

          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left" }}>
            <span className="section-eyebrow">security</span>
            <h2 style={sTitle}>How we protect data</h2>
            <p style={bodyText}>
              All traffic between your browser and our servers is encrypted via
              <b style={{ color: "var(--accent)" }}> HTTPS/TLS</b>.
              We do not store plaintext passwords (OAuth / email magic links only).
              Access to backend systems is restricted by role and requires two-factor authentication.
            </p>
            <p style={{ ...mutedText, marginTop: "0.7rem" }}>
              In the unlikely event of a data breach affecting your personal information,
              we will notify affected users within <b style={{ color: "var(--text-soft)" }}>72 hours</b> of
              becoming aware of the incident, in accordance with GDPR Article 33.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.8rem" }}>
              {["HTTPS/TLS", "No plaintext passwords", "72h breach notice", "Role-based access"].map(t => (
                <span key={t} className="stat-chip" style={{ fontSize: "0.64rem" }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left" }}>
            <span className="section-eyebrow">contact & updates</span>
            <h2 style={sTitle}>Questions & changes</h2>
            <p style={bodyText}>
              If you have any questions about this policy, want to exercise your rights,
              or believe your data has been mishandled, contact us directly.
              We aim to respond within <b style={{ color: "var(--accent)" }}>5 business days</b>.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", marginTop: "0.8rem", width: "100%" }}>
              {[
                { label: "Privacy email",  val: "privacy@discreto.app",    icon: "✉️" },
                { label: "General support", val: "support@discreto.app",   icon: "💬" },
                { label: "Data requests",   val: "gdpr@discreto.app",       icon: "📋" },
              ].map(({ label, val, icon }) => (
                <div key={label} style={{ ...miniCard, display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <span style={{ fontSize: "0.95rem" }}>{icon}</span>
                  <div>
                    <p style={{ ...mutedText, fontSize: "0.72rem", marginBottom: "0.06rem", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'JetBrains Mono', monospace" }}>{label}</p>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "var(--accent-2)", margin: 0 }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ ...mutedText, marginTop: "0.9rem", fontSize: "0.8rem" }}>
              We may update this policy as the platform evolves. Material changes will be
              announced on the platform with at least <b style={{ color: "var(--text-soft)" }}>14 days notice</b>.
              The "last updated" date at the top always reflects the current version.
            </p>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}