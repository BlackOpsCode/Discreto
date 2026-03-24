export default function DiscretoBanner1({ onScrollToWho }) {

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
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(0,20,10,0.45), rgba(0,10,5,0.65))',
    backdropFilter: 'blur(3px)',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#eafff5',
    padding: '1rem',
    fontFamily: 'Orbitron, sans-serif',
  };

  const titleStyle = {
    fontSize: 'clamp(3rem, 7vw, 5rem)',
    fontWeight: '700',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    textShadow: '0 0 25px rgba(0,255,150,0.25)',
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
    opacity: 0.85,
    marginTop: '1.5rem',
    fontWeight: '500',
  };

  const buttonStyle = {
    marginTop: '2.5rem',
    padding: '0.9rem 2rem',
    fontSize: '0.9rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    border: '1px solid white',
    background: 'transparent',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
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
        <source src="/statistical_ensemble_live.webm" type="video/webm" />
        <source src="/statistical_ensemble_live.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Overlay */}
      <div style={overlayStyle} />

      {/* Content */}
      <div style={contentStyle}>
        <h1 style={titleStyle}>DISCRETO</h1>

        <p style={subtitleStyle}>
          Are we just an ensemble governed by predictions?
        </p>

        <button
          style={buttonStyle}
          onClick={onScrollToWho}
          onMouseEnter={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          Is That It?
        </button>
      </div>
    </div>
  );
}