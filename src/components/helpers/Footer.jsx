import { FaGithub, FaTwitter, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
  { icon: FaGithub,    href: "https://github.com",    label: "GitHub"    },
  { icon: FaDiscord,   href: "https://discord.com",   label: "Discord"   },
  { icon: FaTwitter,   href: "https://twitter.com",   label: "Twitter"   },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaYoutube,   href: "https://youtube.com",   label: "YouTube"   },
];

const legalLinks = [
  { label: "About",          to: "/about"   },
  { label: "Terms of Use",   to: "/terms"   },
  { label: "Privacy Policy", to: "/privacy" },
];

export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.2rem",
      padding: "2rem 1.2rem 2.4rem",
      position: "relative",
    }}>

      {/* ── SEPARATOR — reutilizeaza .section-divider logic ca inline ── */}
      <hr className="section-divider" style={{ margin: "0 auto 0.4rem" }} />

      {/* ── SOCIAL ICONS ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}>
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-soft)",
              background: "var(--surface)",
              color: "var(--text-muted)",
              transition: "color var(--t-fast), border-color var(--t-fast), background var(--t-fast), transform var(--t-fast)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--border-mid)";
              e.currentTarget.style.background = "var(--surface-mid)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.borderColor = "var(--border-soft)";
              e.currentTarget.style.background = "var(--surface)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Icon size={15} />
          </a>
        ))}
      </div>

      {/* ── COPYRIGHT ── */}
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.68rem",
        letterSpacing: "0.12em",
        color: "var(--text-dim)",
        margin: 0,
        textTransform: "uppercase",
      }}>
        © 2026 Discreto. All rights reserved.
      </p>

      {/* ── LEGAL LINKS ── */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.3rem 0.15rem",
      }}>
        {legalLinks.map(({ label, to }, idx) => (
          <span key={to} style={{ display: "inline-flex", alignItems: "center", gap: "0.15rem" }}>
            <Link
              to={to}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.74rem",
                color: "var(--text-muted)",
                letterSpacing: "0.02em",
                transition: "color var(--t-fast)",
                padding: "0.1rem 0.3rem",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
            >
              {label}
            </Link>
            {idx < legalLinks.length - 1 && (
              <span style={{
                color: "var(--border-soft)",
                fontSize: "0.62rem",
                userSelect: "none",
              }}>·</span>
            )}
          </span>
        ))}
      </div>

    </footer>
  );
}