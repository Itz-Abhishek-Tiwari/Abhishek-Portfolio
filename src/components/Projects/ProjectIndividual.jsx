import { useState } from 'react';
import { Navbar } from '../';
import { useParams } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactMarkdown from 'react-markdown';
import './style.css'
import portfolioData from '../../data'

export default function ProjectIndividual() {
  const { projectid } = useParams()
  const project = portfolioData.projects.find(p => p.id == projectid) || {}
  const skills = project.skills || []
  const images = project.image || []

  const imageSlider = images.map((item) => item.image)

  return (
    <div>
      <Navbar />
      <main>
        <div className="hero-section">
          <h1>{project.project_title}.</h1>
          <p>
            Explore the architecture, implementation, and features of this project.
          </p>
        </div>

        <section style={{ border: 'none', padding: 0 }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>Technologies Used</h1>
          <div className="skill-grid" style={{ marginBottom: '40px' }}>
            {skills.map((item, index) => (
              <div className="skill-item" key={index}>
                <i className={`devicon-${item}-plain skill-icon`}></i>
                <span>{item.toUpperCase()}</span>
              </div>
            ))}
          </div>

          <div className="center-page">
            <a href={project.git_link} target="_blank" rel="noopener noreferrer" className="skill-item" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
              GitHub <i className="ri-github-fill"></i>
            </a>

            {project.git_link !== project.live_link && (
              <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="skill-item" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                Live Demo <i className="ri-links-line"></i>
              </a>
            )}
          </div>

          <div className="slide-container">
            <Fade scale={0}>
              {imageSlider.map((each, index) => (
                <img
                  key={index}
                  className="slide-image"
                  src={each}
                  alt={`Slide ${index + 1}`}
                />
              ))}
            </Fade>
          </div>

          <div className="project-summary">
            <div className='project-detail'>
              <ReactMarkdown>{project.project_description}</ReactMarkdown>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

