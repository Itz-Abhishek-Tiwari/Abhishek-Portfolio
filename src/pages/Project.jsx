import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Project() {

  const [project, setProject] = useState([])
  let url = 'http://127.0.0.1:8000/'

  useEffect(() => {
    fetch(url + 'projects/')
      .then((response) => response.json())
      .then((data) => setProject(data))
  }, [url])


  return (
    <>
      <header>
        <Navbar />
        <div className="hero-section">
          <h1>Project Page</h1>
        </div>
      </header>

      <main>
        <div className="card-grid">
          {
            project.map((item) => {
              return (
                <Link key={item.id} className="reset-link" to={`/projects/${item.id}`}>
                  <div className="card">
                    <img className='card-image' src={`${url}${item.image}`} alt="Project" />
                    <h3 className="card-title">{`${item.project_title}`.substring(0, 15) + "..."}</h3>
                    <p className="card-description">{`${item.project_description}`.substring(0, 90) + "..."}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </main>
    </>
  )
}
