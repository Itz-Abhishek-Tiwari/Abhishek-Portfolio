import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import Navbar from "../components/Navbar";
import '../pages/article.css'

export default function ArticlePage() {
  let url = 'http://127.0.0.1:8000/'
  let [article, setArticle] = useState([])
  let [image, setImage] = useState([])

  useEffect(() => {
    async function fetchData() {
      const article = await fetch(url + 'articles/')
      const response = await article.json()
      setArticle(response)
      setImage(response.image)
    }
    fetchData()
  }, [url])

  return (
    <>
      <header>
        <Navbar />
        <div className="hero-section">
          <h1>Article Page</h1>
        </div>
      </header>


      <main>

        <div className="article-card-grid">
          {article.map((item) => {
            const articleImage = item.image.length > 0 ? `${url}${item.image[0].image}` : 'placeholder.jpg';
            return (
              <div key={item.id}>
                <Link to={`/articles/${item.id}`} className="article-reset-link" rel="noopener noreferrer">
                  <div className="article-card">
                    <img className="card-image" src={articleImage} alt={item.title} />
                    <h3>{item.title}</h3>
                    <ReactMarkdown className="article-card-description">
                      {`${item.body}`.substring(0, 90) + "..."}
                    </ReactMarkdown>
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
