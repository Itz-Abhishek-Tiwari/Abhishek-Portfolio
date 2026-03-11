export default function Education({ education }) {
  return (
    <section>
      <h2>Education</h2>
      {education.map((item, index) => (
        <div className="education-item" key={index}>
          <div className="experience-header">
            <span className="experience-title">{item.institution}</span>
            <span className="experience-date">{item.start_date} — {item.end_date}</span>
          </div>
          <div className="experience-company">
            {item.degree}. CGPA: {item.cgpa || 6.5}
          </div>
        </div>
      ))}
    </section>
  );
}
