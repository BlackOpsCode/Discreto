export default function DiscretoBanner2({ onScroll }) {

  const bannerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(circle at center, rgba(141,255,196,0.08), transparent 60%),
      linear-gradient(180deg, rgba(0,10,5,0.55), rgba(0,5,2,0.75))
    `,
    backdropFilter: 'blur(4px)',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#eafff5',
    padding: '1rem',
    maxWidth: '900px',
  };

  const titleStyle = {
    fontFamily: 'Orbitron, sans-serif',
    fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
    fontWeight: '700',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    textShadow: `
      0 0 25px rgba(0,255,150,0.25),
      0 0 60px rgba(0,255,150,0.08)
    `,
    marginBottom: '1.2rem'
  };

  const paragraphStyle = {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
    lineHeight: 1.75,
    color: 'rgba(230,255,245,0.85)',
    margin: '0 auto',
  };

  const buttonStyle = {
    marginTop: '2.5rem',
    padding: '0.9rem 2.2rem',
    fontSize: '0.78rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    border: '1px solid white',
    borderRadius: '0px',
    background: 'transparent',
    color: 'white',
    cursor: 'pointer',
    fontFamily: "'JetBrains Mono', monospace",
    transition: 'all 0.25s ease',
  };

  return (
    <div style={bannerStyle}>
      {/* video background */}
      <video
        style={videoStyle}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/torus.webm" type="video/webm" />
        <source src="/torus.mp4" type="video/mp4" />
        {/* fallback text */}
        Your browser does not support HTML5 video.
      </video>

      {/* overlay */}
      <div style={overlayStyle} />

      {/* content */}
      <div style={contentStyle}>
        <h1 style={titleStyle}>DISCRETO</h1>

        <p style={paragraphStyle}>
          We are collections of particles that learned to assemble structures out of particles —
          to build accelerators made of matter, designed to study matter itself.
          <br /><br />
          We observe, measure, and simulate — yet we remain part of the same statistical fabric we try to understand.
          <br /><br />
          Perhaps we are nothing more than averages emerging from countless microstates,
          governed by laws that do not command — but predict.
          <br /><br />
          Somewhere, there exists a model for everything.
          If not exact, then probabilistic.
          If not certain, then inevitable within a distribution.
        </p>

        <button
          style={buttonStyle}
          onClick={onScroll}
          onMouseEnter={(e) => {
            e.target.style.background = '#fff';
            e.target.style.color = 'transparent';
            e.target.style.backgroundClip = 'text';
            e.target.style.webkitTextFillColor = 'transparent';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#fff';
            e.target.style.webkitTextFillColor = 'inherit';
          }}
        >
          enter the system
        </button>
      </div>
    </div>
  );
}