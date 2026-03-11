export default function Hero() {
  return (
    <div className="hero-section" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 112, 243, 0.15) 0%, transparent 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>
      <h1 style={{ position: 'relative' }}>Python Full Stack<br />Developer.</h1>
      <p style={{ position: 'relative' }}>
        Building high-performance applications with Python, React, and modern web technologies.
        Focused on clean code, scalability, and exceptional user experiences.
      </p>
    </div>
  )
}
