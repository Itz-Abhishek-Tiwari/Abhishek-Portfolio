import { useState } from "react"
import { Hero, SocialLinks, Skills, Projects, WorkExperience, Education, About, Connect, GitHubStats, GitHubProjects, GitHubCalendar } from '../../components'
import portfolioData from "../../data"
import useSEO from "../../hooks/useSEO"

export default function Home() {
  const [projects] = useState(portfolioData.projects)
  // const [review] = useState(portfolioData.review);
  const [work] = useState(portfolioData.work)
  const [education] = useState(portfolioData.education)

  useSEO(
    "Developer & Designer",
    "Portfolio of Abhishek Tiwari - Full-stack engineer specializing in high-performance web and mobile applications with React and Django."
  );

  return (
    <main className="mx-auto pb-24">
      <Hero />
      <SocialLinks />
      <About />
      <Skills />
      <WorkExperience work={work} />
      <GitHubStats />
      <Projects projects={projects} />
      {/* <GitHubCalendar /> */}
      <GitHubProjects />
      <Education education={education} />
      {/* <Reviews review={review} /> */}
      <Connect />
    </main>
  );
}

