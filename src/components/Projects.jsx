export default function Projects({ projects }) {

  return (
    <>
      <section className="section-about">
        <h2>Projects</h2>
        <ul className="project-list">
          {
            projects.map((item) => {
              return (
                <div key={item.id}>
                  <li>{item.project_title}</li>
                </div>
              )
            })
          }
        </ul>
      </section>
    </>
  )
}
