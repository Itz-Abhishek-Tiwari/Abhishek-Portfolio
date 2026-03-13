import { Link } from "react-router-dom";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import PropTypes from 'prop-types';

export default function Projects({ projects = [] }) {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-primary">Selection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-mono font-black tracking-tight text-foreground">
            Featured Projects
          </h2>
        </div>
        <Link
          to="/projects"
          className="group flex items-center gap-1.5 text-sm font-mono font-bold text-muted-foreground transition-colors hover:text-primary border-b border-transparent hover:border-primary pb-0.5"
        >
          Explore All
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="flex flex-col gap-0 border border-border divide-y divide-border">
        {projects.slice(0, 4).map((project, index) => (
          <div key={project.id} className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Project Image */}
            <Link
              to={`/projects/${project.id}`}
              className={`relative aspect-video overflow-hidden bg-secondary/30 transition-all duration-500 border-r border-border ${index % 2 === 1 ? "lg:order-last lg:border-r-0 lg:border-l border-border" : ""
                }`}
            >
              <img
                src={project.image?.[0]?.image || "/placeholder.svg"}
                alt={project.project_title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] brightness-90 group-hover:brightness-100"
              />
              {/* Gruvbox overlay on hover */}
              <div className="absolute inset-0 bg-background/20 transition-colors group-hover:bg-transparent" />
              {/* Index number */}
              <div className="absolute top-4 left-4 font-mono text-[10px] font-black text-primary bg-background/80 px-2 py-1 border border-border">
                {String(index + 1).padStart(2, "0")}
              </div>
            </Link>

            {/* Project Info */}
            <div className="flex flex-col justify-center gap-5 p-8 bg-background group-hover:bg-secondary/20 transition-colors">
              <div className="flex flex-wrap gap-2">
                {project.skills?.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="border border-border bg-secondary px-2.5 py-1 text-[10px] font-mono font-black uppercase tracking-wider text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-2xl md:text-3xl font-mono font-black text-foreground transition-colors group-hover:text-primary leading-tight">
                    {project.project_title}
                  </h3>
                </Link>
                <div className="prose prose-sm line-clamp-3 leading-relaxed text-muted-foreground font-sans">
                  <ReactMarkdown>{project.project_description}</ReactMarkdown>
                </div>
              </div>

              <div className="flex items-center gap-5 pt-2 border-t border-border/50">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase tracking-widest text-foreground transition-colors hover:text-primary"
                >
                  View Details
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <div className="flex items-center gap-4 ml-auto">
                  {project.git_link && (
                    <a href={project.git_link} target="_blank" rel="noreferrer"
                      className="text-muted-foreground transition-all hover:text-foreground hover:scale-110">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.live_link && (
                    <a href={project.live_link} target="_blank" rel="noreferrer"
                      className="text-muted-foreground transition-all hover:text-primary hover:scale-110">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      project_title: PropTypes.string.isRequired,
      project_description: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string),
      image: PropTypes.arrayOf(PropTypes.shape({ image: PropTypes.string })),
      git_link: PropTypes.string,
      live_link: PropTypes.string
    })
  )
};
