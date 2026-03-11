import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom";
import { Navbar } from "../";
import '../Projects/style.css'
import { Fade } from 'react-slideshow-image';
import portfolioData from '../../data'

export default function ArticleIndividual() {
    const { articleid } = useParams()
    const article = portfolioData.articles.find(a => a.id == articleid) || {}
    const images = article.image || []

    return (
        <div>
            <Navbar />
            <main>
                <div className="hero-section">
                    <h1>{article.title}.</h1>
                    <p>
                        Dive deep into the concepts and implementation details of this article.
                    </p>
                </div>

                <section style={{ border: 'none', padding: 0 }}>
                    <div className="center-page">
                        {article.link && (
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className="skill-item">
                                Read More <i className="ri-links-line"></i>
                            </a>
                        )}
                    </div>

                    {images.length > 0 && (
                        <div className="slide-container">
                            <Fade scale={0}>
                                {images.map((each, index) => (
                                    <img
                                        key={index}
                                        className="slide-image"
                                        src={each.image}
                                        alt={`Slide ${index + 1}`}
                                    />
                                ))}
                            </Fade>
                        </div>
                    )}

                    <div className="project-summary">
                        <div className='project-detail'>
                            <ReactMarkdown>{article.body}</ReactMarkdown>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
