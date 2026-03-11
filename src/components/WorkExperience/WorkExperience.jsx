export default function Workexp({ work }) {
  return (
    <section>
      <h2>Work Experience</h2>
      <div className="experience-container">
        {work.map((item) => (
          <div key={item.id} className="experience-item">
            <div className="experience-header">
              <span className="experience-title">{item.company}</span>
              <span className="experience-date">{item.date || 'Present'}</span>
            </div>
            <p className="experience-company">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.875rem', color: 'var(--accents-5)', textDecoration: 'underline' }}
              >
                View Profile
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
