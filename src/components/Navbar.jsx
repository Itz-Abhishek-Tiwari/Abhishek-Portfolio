import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <i className="ri-fire-fill"></i>
          <Link to="/">
            Abhishek Tiwari
          </Link>
        </div>

        {/* Burger Icon for toggling mobile menu */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <i className={`ri-menu-3-line ${isOpen ? 'open' : ''}`}></i>
        </div>

        {/* Nav links, will be toggled on mobile */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/article">Article</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

