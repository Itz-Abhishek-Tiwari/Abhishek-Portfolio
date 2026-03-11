import { Link } from "react-router-dom"

export default function Projects({ projects }) {
  return (
    <section>
      <h2>Featured Projects</h2>
      <div className="card-grid">
        {projects.map((item) => (
          <div key={item.id} className="card">
            <Link to={`/projects/${item.id}`}>
              <h3 className="card-title">{item.project_title}</h3>
              <p className="card-description">
                Explore the technical details and implementation of this project.
              </p>
            </Link>
            <div style={{ marginTop: '16px' }}>
              <a
                href={item.git_link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.875rem', color: 'var(--accents-6)', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                View on GitHub <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
