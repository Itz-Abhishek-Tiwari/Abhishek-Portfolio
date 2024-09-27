import Education from "./components/Education"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Reviews from "./components/Reviews"
import Workexp from "./components/Workexp"
import { useEffect, useState } from "react"

function App() {
  let url = 'http://127.0.0.1:8000/'
  const [projects, setProjects] = useState([])
  const [review, setReviews] = useState([]);
  const [work, setWork] = useState([])
  const [education, setEducation] = useState([])

  // Projects 
  useEffect(() => {
    fetch(url + 'projects/')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, [url])

  // Reviews
  useEffect(() => {
    fetch(url + 'review/')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, [url]);

  // Work Experience 
  useEffect(() => {
    fetch(url + 'work/')
      .then((response) => response.json())
      .then((data) => setWork(data))
      .catch((error) => console.error('Error fetching reviews:', error));

  }, [url])

  // Education 
  useEffect(() => {
    fetch(url + 'education/')
      .then((response) => response.json())
      .then((data) => setEducation(data))
      .catch((error) => console.error('Error fetching reviews:', error));

  }, [url])



  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <Projects projects={projects} />
        <Workexp work={work} />
        <Education education={education} />
      </main>

      <footer>
        <Reviews review={review} />
      </footer>
    </>
  )
}

export default App
