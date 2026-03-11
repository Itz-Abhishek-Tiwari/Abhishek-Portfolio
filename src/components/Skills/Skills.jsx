export default function Skills() {
  const skills = [
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'SQLite', icon: 'devicon-sqlite-plain' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'Django', icon: 'devicon-django-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'TailwindCSS', icon: 'devicon-tailwindcss-plain' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Linux', icon: 'devicon-linux-plain' },
  ];

  return (
    <section>
      <h2>Skills & Technologies</h2>
      <div className="skill-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <i className={`${skill.icon} skill-icon`}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
