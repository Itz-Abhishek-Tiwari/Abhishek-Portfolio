import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import '../components/Projects/style.css'

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
          <h1>Projects</h1>
        </div>
      </header>

      <main>
        <div className="card-grid">
          {project.map((item) => {
            const projectImage = item.image.length > 0 ? `${url}${item.image[0].image}` : 'placeholder.jpg';
            return (
              <Link key={item.id} className="reset-link" to={`/projects/${item.id}`}>
                <div className="card article-card">

                  <img className="card-image" src={projectImage} alt={item.project_title} />
                  <h3>{item.project_title}</h3>
                  <ReactMarkdown className="card-description">{`${item.project_description}`.substring(0, 90) + "..."}</ReactMarkdown>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  )
}
