import { useCallback, useEffect, useState } from "react"
import Education from "../components/Education"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Reviews from "../components/Reviews"
import Workexp from "../components/Workexp"
import '../index.css'
import Skills from "../components/Skills"
import portfolioData from "../data.js"

export default function Home() {
  const [projects, setProjects] = useState(portfolioData.projects)
  const [review, setReviews] = useState(portfolioData.review);
  const [work, setWork] = useState(portfolioData.work)
  const [education, setEducation] = useState(portfolioData.education)


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


