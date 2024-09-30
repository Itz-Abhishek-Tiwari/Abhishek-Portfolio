import { Link } from "react-router-dom"

export default function Projects({ projects }) {

  return (
    <>
      <section className="section-about">
        <h2>Projects</h2>
        <ul className="project-list">
          {
            projects.map((item) => {
              return (
                <div key={item.id} className="project-list-li">
                  <li>
                    <Link to={`/projects/${item.id}`} className="reset-link">
                      {item.project_title}
                    </Link>
                    <a href={item.git_link} target="_blank" rel="noopener noreferrer" className="profile-link">GitHub <i className="ri-github-fill"></i></a>
                  </li>
                </div>
              )
            })
          }
        </ul>
      </section >
    </>
  )
}
