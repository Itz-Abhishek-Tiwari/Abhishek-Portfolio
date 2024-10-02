import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactMarkdown from 'react-markdown';
import './style.css'

export default function ProjectIndividual() {
  let [project, setProject] = useState({})
  let [skills, setSkills] = useState([])
  let [images, setImages] = useState([])
  let parms = useParams()
  let url = 'http://127.0.0.1:8000/'


  useEffect(() => {
    async function fetchData() {


      const fetchProject = await fetch(url + 'projects/' + parms.projectid)
      const response = await fetchProject.json()
      setProject(response)
      setSkills(response.skills)
      setImages(response.image)
    }
    fetchData()
  }, [parms.projectid, url])

  let imageSlider = images.map((item) => {
    return url + item.image

  })




  return (
    <div>
      <header>
        <Navbar />
        <div className="hero-section">
          <h1>
            {project.project_title}
          </h1>
        </div>
      </header>




      <main>
        <section className="section-about">
          <div className="kanagawa-slide-container">
            <Fade scale={0}>
              {
                imageSlider.map((each, index) => (
                  <img
                    key={index}
                    className="kanagawa-slide-image"
                    src={each}
                    alt={`Slide ${index + 1}`}
                  />
                ))
              }
            </Fade>
          </div>


          <div className="center-page">
            <a href={project.git_link} target="_blank" rel="noopener noreferrer" className="profile-link">
              GitHub <i className="ri-github-fill"></i>
            </a>

            {project.git_link !== project.live_link && (
              <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="profile-link">
                Live Demo <i className="ri-links-line"></i>
              </a>
            )}
          </div>


          <div className="work-experience-container project-description">
            <div className="education-summary project-summary">
              <div className='project-detail'>
                <ReactMarkdown>{project.project_description}</ReactMarkdown>
              </div>
            </div>
          </div>


          <h2>Skills</h2>
          <div className="skill-grid">
            {
              skills.map((item, index) => {
                return (
                  <div className="skill-item" key={index}>
                    <i className={`devicon-${item}-plain skill-icon`}></i>
                    <div className="skill-name">{item.toUpperCase()}</div>
                  </div>
                )
              })
            }
          </div>




        </section>

      </main>
    </div >
  );
}

