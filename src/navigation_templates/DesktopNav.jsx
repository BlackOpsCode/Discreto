import { Link } from "react-router-dom";
import logo from '/Discreto.png';

export default function DesktopNav() {
  const components = ["Home", "Simulation", "Learning", "Quizes", "News",];

  return (
    <nav className="desktop-nav">
      <img src={logo} alt="App Logo" className="logo" />
      <div className="menu-links">
        {components.map(c => (
          <Link key={c} to={c === "Home" ? "/" : `/${c.toLowerCase()}`}>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
}
