import { Link } from "react-router-dom";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";

const skillColors = {
  "React Native": "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20",
  "Redux": "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20",
  "React": "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20",
  "Django": "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  "TailwindCSS": "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20",
  "AI/ML": "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-500/10 dark:text-fuchsia-400 dark:border-fuchsia-500/20",
  "Google Maps API": "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
  "Stripe API": "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
};

export default function Projects({ projects = [] }) {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-telephone-red dark:bg-accent-red"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-telephone-red dark:text-accent-red">Selection</span>
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            Featured Projects
          </h2>
        </div>
        <Link
          to="/projects"
          className="group flex items-center gap-1.5 text-sm font-semibold text-zinc-500 transition-colors hover:text-telephone-red dark:hover:text-accent-red"
        >
          Explore All
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
        {projects.slice(0, 4).map((project, idx) => (
          <div key={project.id} className="group relative flex flex-col gap-8">
            <Link
              to={`/projects/${project.id}`}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition-all duration-500 group-hover:border-telephone-red/30 group-hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 dark:group-hover:border-accent-red/30"
            >
              <img
                src={project.image?.[0]?.image || "/placeholder.svg"}
                alt={project.project_title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {idx < 2 && (
                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-900 shadow-xl backdrop-blur-sm dark:bg-black/90 dark:text-white">
                  Featured
                </div>
              )}
            </Link>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {project.skills?.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-lg border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors ${skillColors[skill] || "border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400"
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4">
                <Link to={`/projects/${project.id}`}>
                  <h3 className="font-serif text-3xl font-medium text-zinc-950 transition-colors group-hover:text-telephone-red dark:text-zinc-50 dark:group-hover:text-accent-red">
                    {project.project_title}
                  </h3>
                </Link>
                <div className="flex items-center gap-4">
                  {project.git_link && (
                    <a href={project.git_link} target="_blank" rel="noreferrer" className="text-zinc-400 transition-all hover:scale-110 hover:text-zinc-950 dark:hover:text-zinc-50">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.live_link && (
                    <a href={project.live_link} target="_blank" rel="noreferrer" className="text-zinc-400 transition-all hover:scale-110 hover:text-zinc-950 dark:hover:text-zinc-50">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="prose prose-zinc prose-sm dark:prose-invert line-clamp-4 leading-relaxed text-zinc-500 dark:text-zinc-400">
                <ReactMarkdown>{project.project_description}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
