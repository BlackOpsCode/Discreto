import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import logo from "/Discreto.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Simulation", to: "/simulation" },
  { label: "Learning", to: "/learning" },
  { label: "Quizes", to: "/quizes" },
  { label: "News", to: "/news" },
];

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoWrapRef = useRef(null);
  const logoRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(logoWrapRef.current, {
      scale: 1.14,
      duration: 1.25,
      ease: "power2.inOut",
      transformOrigin: "center center",
    }).to(
      logoWrapRef.current,
      {
        duration: 1.25,
        ease: "power2.inOut",
      },
    );

    tl.to(
      logoRef.current,
      {
        scale: 1.06,
        duration: 1.25,
        ease: "power2.inOut",
        transformOrigin: "center center",
      },
      0
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className="mobile-nav">
        <div
          onClick={() => {
            navigate("/");
            close();
          }}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <div
            ref={logoWrapRef}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.25rem",
              transform: "scale(1.85)",
              borderRadius: "14px",
            }}
          >
            <img
              ref={logoRef}
              src={logo}
              alt="Discreto"
              className="logo"
              style={{
                display: "block",
                transformOrigin: "center center",
              }}
            />
          </div>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              color: "var(--accent-3)",
              opacity: 0.5,
              marginBottom: "0.6rem",
              textTransform: "uppercase",
            }}
          >
            navigate
          </span>

          {navLinks.map(({ label, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={close}
                className={isActive ? "active" : ""}
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {label}
              </Link>
            );
          })}

          <span
            style={{
              position: "absolute",
              bottom: "2rem",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.14em",
              color: "var(--text-dim)",
              opacity: 0.5,
            }}
          >
            discreto · statistical mechanics
          </span>
        </div>
      )}
    </>
  );
}