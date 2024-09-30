import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import SimpleImageSlider from "react-simple-image-slider";

export default function ProjectIndividual() {
  const { projectid } = useParams();
  const [projectData, setProjectData] = useState({});
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const url = 'http://127.0.0.1:8000/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}projects/${projectid}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjectData(data);
        setSkills(data.skills);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false); // Set loading to false after data fetch
      }
    };

    fetchData();
  }, [url, projectid]);

  const images = projectData.image?.map(img => ({ url: url + img.image }));

  return (
    <div>
      <header>
        <Navbar />
        <div className="hero-section">
          <h1>{projectData.project_title}</h1>
        </div>
      </header>
      <main>
        {loading ? ( // Conditional rendering based on loading state
          <div>Loading...</div>
        ) : (
          <div className="project-section">
            <div className="project-description">
              <p>{projectData.project_description}</p>
            </div>
            {images && images.length > 0 ? ( // Check if images exist
              <div className="slider-container">
                <SimpleImageSlider
                  width={896}
                  height={504}
                  images={images}
                  showBullets={true}
                  showNavs={true}
                />
              </div>
            ) : (
              <div>No images available</div>
            )}
            <div className="technologies-used">
              <h3>Technologies Used:</h3>
              <div className="skill-grid">
                {skills.map((item, index) => (
                  <div className="skill-item" key={index}>
                    <i className={`devicon-${item}-plain skill-icon`}></i>
                    <div className="skill-name">{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="project-links">
              {projectData.git_link &&
                <a href={projectData.git_link} target='_blank' rel="noopener noreferrer" className="profile-link">View on GitHub</a>
              }
              {projectData.live_link &&
                <a href={projectData.live_link} target='_blank' rel="noopener noreferrer" className="profile-link">Live Demo</a>
              }
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

