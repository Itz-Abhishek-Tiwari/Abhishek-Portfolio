import { useState } from "react";
import { Navbar, Footer, FloatingContact } from "../../components";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import portfolioData from "../../data"

export default function ProjectsPage() {
  const [projects] = useState(portfolioData.projects || [])

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <div className="mb-20">
          <h1 className="font-serif text-5xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
            Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
            A curated collection of my technical projects, ranging from deep-learning experiments to full-stack applications. Unified by a passion for clean code and intuitive design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2">
          {projects.map((project) => {
            const projectImage = project.image && project.image.length > 0 ? project.image[0].image : '/placeholder.svg';
            return (
              <div key={project.id} className="group flex flex-col gap-6">
                <Link
                  to={`/projects/${project.id}`}
                  className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-all duration-300 group-hover:border-telephone-red/30 group-hover:shadow-[0_0_30px_rgba(230,57,70,0.08)] dark:border-zinc-800 dark:bg-zinc-900 dark:group-hover:border-accent-red/30"
                >
                  <img
                    src={projectImage}
                    alt={project.project_title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-2xl font-medium text-zinc-950 transition-colors group-hover:text-telephone-red dark:text-zinc-50 dark:group-hover:text-accent-red">
                      {project.project_title}
                    </h3>
                    <div className="flex items-center gap-4">
                      {project.git_link && (
                        <a href={project.git_link} target="_blank" rel="noreferrer" className="text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.live_link && (
                        <a href={project.live_link} target="_blank" rel="noreferrer" className="text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="line-clamp-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.project_description.replace(/[#*`]/g, '').substring(0, 180)}...
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
