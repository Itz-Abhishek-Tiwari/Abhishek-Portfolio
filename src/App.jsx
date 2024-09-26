import Education from "./components/Education"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Reviews from "./components/Reviews"
import Workexp from "./components/Workexp"
import projects from './data/project.json'
import work from './data/work.json'
import reviews from './data/reviews.json'
import education from "./data/education.json"

function App() {

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
        <Reviews reviews={reviews} />
      </footer>
    </>
  )
}

export default App
