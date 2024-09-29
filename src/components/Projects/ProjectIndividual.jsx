import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'

export default function ProjectIndividual() {
  const param = useParams()
  let [projectId, setProjectId] = useState([])
  let [skills, setSkills] = useState([])
  let url = 'http://127.0.0.1:8000/'

  useEffect(() => {
    fetch(url + 'projects/' + param.projectid)
      .then((response) => response.json())
      .then((data) => setProjectId(data))

    fetch(url + 'projects/' + param.projectid)
      .then((response) => response.json())
      .then((data) => setSkills(data.skills.map((item) => {
        return (
          <div className="skill-item" key={item.id}>
            <i className={`devicon-${item.technologies}-plain skill-icon`}></i>
            <div className="skill-name" >{item.technologies}</div>
          </div>
        )
      })))
  }, [url, param])


  let imageURL = `${url}${projectId.image}`

  return (
    <div>
      <header>
        <Navbar />
        <div className="hero-section">
          <h1>
          {projectId.project_title}
          </h1>
        </div>
      </header>
      <main>
        <div className="project-section">
          <div className="project-description">
            <p>{projectId.project_description}</p>
          </div>

          <img className='project-image' src={imageURL} />
          <div className="technologies-used">
            <h3>Technologies Used:</h3>
            <div className="skill-grid">
              {skills}
            </div>
          </div>

          <div className="project-links">
            <a href="https://github.com/username/project" className="profile-link">View on GitHub</a>
            <a href="https://live-demo-link.com" className="profile-link">Live Demo</a>
          </div>
        </div>
      </main>
    </div>
  )
}
