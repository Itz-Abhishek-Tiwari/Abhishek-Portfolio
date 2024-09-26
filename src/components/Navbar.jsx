export default function Navbar() {

  return <>
    <nav>
      <div className="nav-brand">
        <i className="ri-fire-fill"></i>
        <a href="#">Abhishek Tiwari</a>
      </div>
      <div className="nav-toggle" id="nav-toggle">
        <i className="ri-menu-3-line"></i>
      </div>
      <ul className="nav-links" id="nav-links">
        <li><a href="homepage.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="articles.html">Article</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </>
}
