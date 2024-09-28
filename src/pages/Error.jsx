import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"

export default function Error() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="error-page-container">
        <div className="error-container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist or has been moved.</p>
          <Link to="/">
            Go back home
          </Link>
        </div>
      </div>
    </>
  )
}
