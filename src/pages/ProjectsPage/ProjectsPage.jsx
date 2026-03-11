import { useState } from "react";
import { Navbar } from "../../components";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import '../../components/Projects/style.css'
import portfolioData from "../../data"

export default function Project() {
  const [project] = useState(portfolioData.projects)

  return (
    <>
      <Navbar />
      <main>
        <div className="hero-section">
          <h1>Projects.</h1>
          <p>A collection of tools, applications, and experiments I've built.</p>
        </div>

        <div className="card-grid">
          {project.map((item) => {
            const projectImage = item.image.length > 0 ? item.image[0].image : 'placeholder.jpg';
            return (
              <Link key={item.id} className="reset-link" to={`/projects/${item.id}`}>
                <div className="card">
                  <img
                    src={projectImage}
                    alt={item.project_title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '16px', border: '1px solid var(--accents-2)' }}
                  />
                  <h3 className="card-title">{item.project_title}</h3>
                  <div className="card-description">
                    <ReactMarkdown>{`${item.project_description}`.substring(0, 100) + "..."}</ReactMarkdown>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  )
}
