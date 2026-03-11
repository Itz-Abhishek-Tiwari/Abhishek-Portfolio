import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { Navbar } from "../../components";
import './article.css'
import portfolioData from "../../data"

export default function ArticlePage() {
  let [article] = useState(portfolioData.articles)

  return (
    <>
      <Navbar />
      <main>
        <div className="hero-section">
          <h1>Articles.</h1>
          <p>Thoughts on software development, Python, and modern web technologies.</p>
        </div>

        <div className="article-card-grid">
          {article.map((item) => {
            const articleImage = item.image.length > 0 ? item.image[0].image : 'placeholder.jpg';
            return (
              <div key={item.id}>
                <Link to={`/articles/${item.id}`} className="article-reset-link">
                  <div className="article-card">
                    <img className="article-card-image" src={articleImage} alt={item.title} />
                    <h3>{item.title}</h3>
                    <div className="article-card-description">
                      <ReactMarkdown>
                        {`${item.body}`.substring(0, 120) + "..."}
                      </ReactMarkdown>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  )
}
