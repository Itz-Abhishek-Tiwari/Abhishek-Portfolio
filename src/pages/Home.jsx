import { useCallback, useEffect, useState } from "react"
import Education from "../components/Education"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Reviews from "../components/Reviews"
import Workexp from "../components/Workexp"
import '../index.css'
import Skills from "../components/Skills"

export default function Home() {
  let url = 'http://127.0.0.1:8000/'
  const [projects, setProjects] = useState([])
  const [review, setReviews] = useState([]);
  const [work, setWork] = useState([])
  const [education, setEducation] = useState([])

  // Fetch Data 
  const fetchData = useCallback((endpoint, setData) => {
    fetch(url + endpoint)
      .then((response) => response.json())
      .then((data) => setData(data))

  }, [url])

  useEffect(() => {
    fetchData(`projects/`, setProjects)
    fetchData('review/', setReviews)
    fetchData('work/', setWork)
    fetchData('education/', setEducation)
  }, [url, fetchData])


  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <Skills />
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


