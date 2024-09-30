import { Link } from "react-router-dom"

export default function Navbar() {

  return (
    <>
      <nav>
        <div className="nav-brand">
          <i className="ri-fire-fill"></i>
          <Link to="/">
            Abhishek Tiwari
          </Link>
        </div>
        <div className="nav-toggle" id="nav-toggle">
          <i className="ri-menu-3-line"></i>
        </div>
        <ul className="nav-links" id="nav-links">

          <li><Link to='/'>Home</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/article'>Article</Link></li>
          <li><Link to='/contect'>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}
