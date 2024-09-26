export default function Workexp({ work }) {


  return (
    <>
      <section className="section-about work">
        <h2>Work Experience</h2>
        <div className="work-experience-container">
          {work.work_experience.map((item, index) => (
            <article key={index} className="project">
              <h3>{item.company}</h3>
              <p>{item.description}</p>
              <a href={item.profile_link} target="_blank" rel="noopener noreferrer">View Profile</a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
