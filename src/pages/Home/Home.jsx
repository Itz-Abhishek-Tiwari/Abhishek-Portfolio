import { useCallback, useEffect, useState } from "react"
import { Navbar, Hero, Skills, Projects, WorkExperience, Education, Reviews } from '../../components'
import portfolioData from "../../data"

export default function Home() {
  const [projects] = useState(portfolioData.projects)
  const [review] = useState(portfolioData.review);
  const [work] = useState(portfolioData.work)
  const [education] = useState(portfolioData.education)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects projects={projects} />
        <WorkExperience work={work} />
        <Education education={education} />
      </main>

      <Reviews review={review} />
    </>
  )
}


