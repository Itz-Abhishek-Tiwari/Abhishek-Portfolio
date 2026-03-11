import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <Link to="/" className="nav-brand" style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
          Abhishek
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/article">Articles</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile toggle - hidden on desktop via CSS */}
        <div className="nav-toggle" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'none' }}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}

