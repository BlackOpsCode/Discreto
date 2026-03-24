import React from "react";
import { useNavigate } from "react-router-dom";

export default function NextPrevNavigation({ prev, next }) {
  const navigate = useNavigate();

  const cardStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1.2rem",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    cursor: "pointer",
    transition: "all 0.25s ease",
    gap: "0.25rem",
    minWidth: "140px",
  };

  const hoverStyle = {
    background: "rgba(141,255,196,0.06)",
    borderColor: "rgba(141,255,196,0.25)",
    transform: "translateY(-2px)",
  };

  const directionStyle = {
    fontSize: "0.7rem",
    color: "var(--text-dim)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  };

  const titleStyle = {
    margin: "0.3rem 0 0 0",
    fontSize: "0.95rem",
    color: "var(--text-main)",
    fontWeight: 500,
  };

  const handleClick = (path) => {
    if (path) navigate(path);
  };

  const Card = ({ path, direction, title }) => (
    <div
      style={cardStyle}
      onClick={() => handleClick(path)}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
    >
      <span style={directionStyle}>{direction}</span>
      <span style={titleStyle}>{title}</span>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        marginTop: "2rem",
        flexWrap: "wrap",
      }}
    >
      {prev && <Card path={prev.path} direction="← Previous" title={prev.title} />}
      {next && <Card path={next.path} direction="Next →" title={next.title} />}
    </div>
  );
}