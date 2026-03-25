import NavBar from "../../../navigation_templates/NavBar";
import Footer from "../../helpers/Footer";

const extraCSS = `
  * {
    box-sizing: border-box;
  }

  .terms-shell {
    width: min(96%, 1300px);
  }

  .terms-hero-grid {
    display: grid;
    gap: clamp(0.85rem, 1.5vw, 1.1rem);
    grid-template-columns: 1fr;
    width: 100%;
  }

  .terms-cols {
    display: grid;
    gap: clamp(0.85rem, 1.5vw, 1.1rem);
    grid-template-columns: 1fr;
    width: 100%;
  }

  .terms-cols-3 {
    display: grid;
    gap: clamp(0.85rem, 1.5vw, 1.1rem);
    grid-template-columns: 1fr;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .terms-hero-grid { grid-template-columns: 1fr !important; }
    .terms-cols      { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    .terms-cols-3    { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
  }

  @media (min-width: 1025px) {
    .terms-hero-grid { grid-template-columns: 1.25fr 0.75fr !important; }
    .terms-cols      { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    .terms-cols-3    { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
  }

  .terms-card {
    padding: 1rem 1.05rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-ghost);
    background: var(--surface);
    min-width: 0;
  }

  .terms-table-wrap {
    width: 100%;
    overflow-x: auto;
  }

  .terms-table {
    min-width: 760px;
  }

  .terms-muted-list {
    margin: 0;
    padding-left: 1.15rem;
    color: var(--text-muted);
    line-height: 1.7;
    font-size: clamp(0.84rem, 1.05vw, 0.94rem);
  }

  .terms-muted-list li + li {
    margin-top: 0.35rem;
  }
`;

const shellW = {
  width: "min(96%, 1300px)",
  minWidth: 0,
};

const sectionTitle = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(1.2rem, 1.8vw, 1.75rem)",
  lineHeight: 1.1,
  color: "var(--text-main)",
  margin: "0 0 0.7rem",
  letterSpacing: "0.03em",
};

const bodyText = {
  color: "var(--text-soft)",
  lineHeight: 1.75,
  margin: 0,
  fontSize: "clamp(0.88rem, 1.15vw, 1rem)",
  minWidth: 0,
};

const mutedText = {
  color: "var(--text-muted)",
  lineHeight: 1.68,
  margin: 0,
  fontSize: "clamp(0.84rem, 1.05vw, 0.94rem)",
  minWidth: 0,
};

const miniCard = {
  padding: "1rem 1.05rem",
  borderRadius: "var(--radius-lg)",
  border: "1px solid var(--border-ghost)",
  background: "var(--surface)",
  minWidth: 0,
};

const tag = (label, color = "var(--accent-3)") => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
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
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </span>
);

export default function TermsOfUse() {
  return (
    <div className="page-container">
      <style>{extraCSS}</style>
      <NavBar />

      <div className="about-scroller">
        {/* HERO */}
        <div
          className="glass-box"
          style={{
            ...shellW,
            marginTop: "2.5rem",
            alignItems: "flex-start",
            textAlign: "left",
            minWidth: 0,
          }}
        >
          <div className="terms-hero-grid" style={{ width: "100%", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 0 }}>
              <span className="section-eyebrow">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M5 1L2 3v3c0 2 1.5 3 3 3s3-1 3-3V3L5 1z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    fill="none"
                    strokeLinejoin="round"
                  />
                </svg>
                terms of use
              </span>

              <h1
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.6rem)",
                  lineHeight: 1,
                  letterSpacing: "0.04em",
                  color: "var(--text-main)",
                  margin: 0,
                  minWidth: 0,
                }}
              >
                Use the platform
                <br />
                responsibly.
              </h1>

              <p style={{ ...bodyText, maxWidth: "580px" }}>
                By accessing or using Discreto, you agree to these Terms of Use. They explain how
                you may use the platform, what is not allowed, and how we handle access, content,
                and service changes.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.2rem" }}>
                {tag("Acceptable use")}
                {tag("Account safety")}
                {tag("IP rights")}
                {tag("Service limits")}
              </div>
            </div>

            <div
              style={{
                ...miniCard,
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
                border: "1px solid var(--border-soft)",
                minWidth: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.64rem",
                  letterSpacing: "0.16em",
                  color: "var(--accent-3)",
                  textTransform: "uppercase",
                }}
              >
                At a glance
              </span>

              {[
                ["Acceptance", "Using the site means you accept these terms."],
                ["Eligibility", "You must comply with applicable laws and platform rules."],
                ["Account use", "You are responsible for activity under your account."],
                ["Service changes", "We may update, suspend, or discontinue features."],
                ["Content", "You keep ownership of your content, but grant us a limited license."],
                ["Contact", "support@discreto.app"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", flexDirection: "column", gap: "0.1rem", minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: "var(--text-dim)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {k}
                  </span>
                  <span style={{ ...mutedText, fontSize: "0.86rem", color: "var(--text-soft)" }}>
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ACCEPTANCE */}
        <div className="glass-box" style={{ ...shellW, alignItems: "flex-start", textAlign: "left", minWidth: 0 }}>
          <span className="section-eyebrow">acceptance of terms</span>
          <h2 style={sectionTitle}>Agreement to these Terms</h2>
          <p style={mutedText}>
            These Terms of Use govern your access to and use of Discreto, including the website,
            learning content, simulations, tools, and any related features. By accessing the
            platform, creating an account, or continuing to browse or interact with the service,
            you confirm that you have read, understood, and agree to be bound by these Terms and by
            any additional policies referenced here, including our Privacy Policy.
          </p>
          <p style={{ ...mutedText, marginTop: "0.7rem" }}>
            If you do not agree with these Terms, do not use the platform.
          </p>
        </div>

        {/* MAIN 2-COL SECTION */}
        <div className="terms-cols" style={{ width: "min(96%, 1300px)", minWidth: 0 }}>
          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left", minWidth: 0 }}>
            <span className="section-eyebrow">eligibility & accounts</span>
            <h2 style={sectionTitle}>Who may use Discreto</h2>
            <p style={bodyText}>
              You may use Discreto only if you can form a legally binding agreement under the laws
              that apply to you and you agree to comply with these Terms. If you create an account,
              you must provide accurate information and keep your login credentials secure.
            </p>
            <div style={{ marginTop: "0.9rem", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              <div style={{ ...miniCard, minWidth: 0 }}>
                <p style={{ ...mutedText, fontSize: "0.84rem" }}>
                  You are responsible for activity that happens under your account.
                </p>
              </div>
              <div style={{ ...miniCard, minWidth: 0 }}>
                <p style={{ ...mutedText, fontSize: "0.84rem" }}>
                  Notify us promptly if you suspect unauthorized access, misuse, or a security issue.
                </p>
              </div>
              <div style={{ ...miniCard, minWidth: 0 }}>
                <p style={{ ...mutedText, fontSize: "0.84rem" }}>
                  We may suspend or terminate accounts that violate these Terms or create risk for
                  the platform or other users.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left", minWidth: 0 }}>
            <span className="section-eyebrow">acceptable use</span>
            <h2 style={sectionTitle}>What you may not do</h2>
            <p style={bodyText}>
              Use the platform lawfully and respectfully. You may not misuse the service, attempt to
              break security, or interfere with normal operation.
            </p>
            <ul className="terms-muted-list" style={{ marginTop: "0.8rem" }}>
              <li>Do not reverse engineer, scrape, crawl aggressively, or probe the service without permission.</li>
              <li>Do not upload malware, exploit code, or content intended to disrupt the platform.</li>
              <li>Do not impersonate others, post unlawful content, or violate third-party rights.</li>
              <li>Do not use the service to harass, deceive, or harm another person.</li>
              <li>Do not access non-public areas of the system or bypass security controls.</li>
            </ul>
          </div>
        </div>

        {/* IP + USER CONTENT */}
        <div className="terms-cols" style={{ width: "min(96%, 1300px)", minWidth: 0 }}>
          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left", minWidth: 0 }}>
            <span className="section-eyebrow">intellectual property</span>
            <h2 style={sectionTitle}>Ownership of the platform</h2>
            <p style={bodyText}>
              The Discreto name, logo, design system, visual layout, software, text, graphics,
              educational material, and other content provided by us are owned by us or our
              licensors and are protected by intellectual property laws.
            </p>
            <p style={{ ...mutedText, marginTop: "0.7rem" }}>
              We grant you a limited, non-exclusive, non-transferable, revocable license to access
              and use the platform for personal, non-commercial use unless we explicitly agree
              otherwise in writing.
            </p>
          </div>

          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left", minWidth: 0 }}>
            <span className="section-eyebrow">your content</span>
            <h2 style={sectionTitle}>Content you submit</h2>
            <p style={bodyText}>
              If you submit text, feedback, files, or other materials, you remain responsible for
              that content. You confirm that you have the rights needed to submit it and that it does
              not violate any law or third-party right.
            </p>
            <p style={{ ...mutedText, marginTop: "0.7rem" }}>
              You grant us a limited license to host, store, display, and process your submitted
              content only as needed to operate the service, provide support, and improve the
              platform.
            </p>
          </div>
        </div>

        {/* AI + THIRD PARTY */}
        <div className="terms-cols" style={{ width: "min(96%, 1300px)", minWidth: 0 }}>
          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left", minWidth: 0 }}>
            <span className="section-eyebrow">ai assistant</span>
            <h2 style={sectionTitle}>Discreto AI</h2>
            <p style={bodyText}>
              Some parts of Discreto may include an AI assistant or automated features. These tools
              are provided for convenience and learning support only. They may produce incomplete,
              outdated, or incorrect information.
            </p>
            <div
              style={{
                ...miniCard,
                marginTop: "0.7rem",
                display: "flex",
                gap: "0.6rem",
                alignItems: "flex-start",
                minWidth: 0,
              }}
            >
              <span style={{ fontSize: "1rem", flexShrink: 0 }}>⚠️</span>
              <p style={{ ...mutedText, fontSize: "0.82rem" }}>
                Do not rely on the AI assistant for legal, medical, financial, or safety-critical
                decisions.
              </p>
            </div>
            <p style={{ ...mutedText, marginTop: "0.7rem" }}>
              We may use third-party providers to process AI requests. Their services are governed
              by their own terms and privacy policies.
            </p>
          </div>

          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left", minWidth: 0 }}>
            <span className="section-eyebrow">third-party services</span>
            <h2 style={sectionTitle}>External providers and links</h2>
            <p style={bodyText}>
              The platform may integrate third-party services, libraries, or links. We are not
              responsible for third-party content, availability, or policies. Your use of those
              services is subject to their own terms.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.8rem" }}>
              {["AI providers", "Payment services", "Analytics", "CDNs"].map((t) => (
                <span key={t} className="stat-chip" style={{ fontSize: "0.64rem" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FEES / AVAILABILITY / DISCLAIMERS */}
        <div className="glass-box" style={{ ...shellW, alignItems: "flex-start", textAlign: "left", minWidth: 0 }}>
          <span className="section-eyebrow">service availability</span>
          <h2 style={sectionTitle}>Availability, changes, and suspension</h2>
          <p style={bodyText}>
            We may modify, suspend, or discontinue any part of the platform at any time, with or
            without notice, including features, educational content, or AI functionality. We may do
            this for maintenance, security, product updates, or operational reasons.
          </p>
          <p style={{ ...mutedText, marginTop: "0.7rem" }}>
            We do not guarantee that the service will always be available, uninterrupted, error-free,
            or compatible with every device or browser.
          </p>
        </div>

        <div className="terms-cols-3" style={{ width: "min(96%, 1300px)", minWidth: 0 }}>
          <div className="terms-card" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span className="section-eyebrow">disclaimer</span>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.96rem", color: "var(--text-main)", margin: 0, fontWeight: 700 }}>
              No warranties
            </h3>
            <p style={mutedText}>
              The platform is provided “as is” and “as available” to the maximum extent allowed by
              law.
            </p>
          </div>

          <div className="terms-card" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span className="section-eyebrow">liability</span>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.96rem", color: "var(--text-main)", margin: 0, fontWeight: 700 }}>
              Limitation of liability
            </h3>
            <p style={mutedText}>
              To the maximum extent permitted by law, we are not liable for indirect, incidental,
              special, or consequential damages.
            </p>
          </div>

          <div className="terms-card" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span className="section-eyebrow">termination</span>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.96rem", color: "var(--text-main)", margin: 0, fontWeight: 700 }}>
              Ending access
            </h3>
            <p style={mutedText}>
              We may suspend or terminate access if we believe these Terms have been violated or if
              required to protect the service or its users.
            </p>
          </div>
        </div>

        {/* GOVERNING / CHANGES / CONTACT */}
        <div className="terms-cols" style={{ width: "min(96%, 1300px)", minWidth: 0 }}>
          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left", minWidth: 0 }}>
            <span className="section-eyebrow">governing terms</span>
            <h2 style={sectionTitle}>Updates to these Terms</h2>
            <p style={bodyText}>
              We may update these Terms from time to time to reflect product changes, legal
              requirements, or operational needs. When changes are material, we will make a
              reasonable effort to notify users through the platform or by another appropriate
              method.
            </p>
            <p style={{ ...mutedText, marginTop: "0.7rem" }}>
              Continued use of Discreto after updated Terms become effective means you accept the
              revised version.
            </p>
          </div>

          <div className="glass-box" style={{ alignItems: "flex-start", textAlign: "left", minWidth: 0 }}>
            <span className="section-eyebrow">contact</span>
            <h2 style={sectionTitle}>Questions about these Terms?</h2>
            <p style={bodyText}>
              If you have questions, want to report a concern, or need clarification about these
              Terms, contact us directly.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.55rem",
                marginTop: "0.8rem",
                width: "100%",
              }}
            >
              {[
                { label: "General support", val: "support@discreto.app", icon: "💬" },
                { label: "Legal / terms", val: "legal@discreto.app", icon: "📄" },
                { label: "Privacy", val: "privacy@discreto.app", icon: "🔒" },
              ].map(({ label, val, icon }) => (
                <div
                  key={label}
                  style={{
                    ...miniCard,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    minWidth: 0,
                  }}
                >
                  <span style={{ fontSize: "0.95rem", flexShrink: 0 }}>{icon}</span>
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        ...mutedText,
                        fontSize: "0.72rem",
                        marginBottom: "0.06rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.8rem",
                        color: "var(--accent-2)",
                        margin: 0,
                        wordBreak: "break-word",
                      }}
                    >
                      {val}
                    </p>
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