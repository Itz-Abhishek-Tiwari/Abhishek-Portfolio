import { Navbar } from "../../components";
import { Link } from "react-router-dom"

export default function Error() {

  return (
    <>
      <Navbar />
      <main>
        <div className="hero-section" style={{ textAlign: 'center', paddingTop: '100px' }}>
          <h1 style={{ fontSize: '8rem', marginBottom: '0' }}>404</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>Page not found.</p>
          <Link to="/" className="skill-item" style={{ display: 'inline-flex' }}>
            Back to home
          </Link>
        </div>
      </main>
    </>
  )
}
