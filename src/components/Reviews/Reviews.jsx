export default function Reviews({ review }) {
  return (
    <section style={{ borderTop: '1px solid var(--accents-2)', padding: '80px 24px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Reviews From My Teachers</h2>

      <div className="card-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {review.map((item) => (
          <div className="card" key={item.id} style={{ textAlign: 'center' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '24px', fontSize: '1.125rem' }}>"{item.feedback}"</p>
            <div>
              <p style={{ fontWeight: 600 }}>{item.professor}</p>
              <p style={{ color: 'var(--accents-5)', fontSize: '0.875rem' }}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '80px', borderTop: 'none' }}>
        <p>© {new Date().getFullYear()} All rights reserved</p>
      </footer>
    </section>
  )
}
