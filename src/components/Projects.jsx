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
                    {item.project_title}
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="profile-link">Git <i className="ri-github-fill"></i></a>
                  </li>
                </div>
              )
            })
          }
        </ul>
      </section>
    </>
  )
}
