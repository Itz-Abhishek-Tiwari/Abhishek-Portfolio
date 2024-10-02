import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import '../Projects/style.css'
import { Fade } from 'react-slideshow-image';


export default function AricleIndividual() {

  let url = 'http://127.0.0.1:8000/'
  let [article, setArticle] = useState([])
  let [images, setImages] = useState([])
  let param = useParams()


  useEffect(() => {
    async function fetchArticle() {
      let article = await fetch(url + 'article/' + param.articleid)
      let response = await article.json()
      setArticle(response)
      setImages(response.image)
    }
    fetchArticle()
  }, [url, param])


  return (
    <div>
      <header>
        <Navbar />
        <div className="hero-section">
          <h1>
            {article.title}
          </h1>
        </div>
      </header>


      <main>
        <section className="section-about">
          <div className="kanagawa-slide-container">
            <Fade scale={0}>
              {
                images.map((each, index) => (
                  <img
                    key={index}
                    className="kanagawa-slide-image"
                    src={url + each.image}
                    alt={`Slide ${index + 1}`}
                  />
                ))
              }
            </Fade>
          </div>

          <div className="center-page">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="profile-link">
              Live Demo <i className="ri-links-line"></i>
            </a>
          </div>



          <div className="work-experience-container project-description">
            <div className="education-summary project-summary">
              <div className='project-detail'>
                <ReactMarkdown>{article.body}</ReactMarkdown>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
