import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Github, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import PropTypes from 'prop-types';
import { RepoMeta } from '../';
import { useStyle } from "../../context/StyleContext";
import Section from "../ui/Section";

export default function Projects({ projects = [] }) {
  const { designStyle } = useStyle();
  const isCyberpunk = designStyle === 'cyberpunk';
  const isGlass = designStyle === 'glass';

  if (isCyberpunk) {
    return (
      <Section title="Featured Projects" id="projects" accentColor="bg-primary">
        <div className="flex flex-col gap-8">
          {projects.slice(0, 4).map((project, index) => (
            <div key={project.id} className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 border border-primary/20 bg-card/40 backdrop-blur overflow-hidden transition-all hover:border-primary/60 hover:shadow-[0_0_30px_rgba(232,121,249,0.12)]">
              {/* Animated left bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary via-accent to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-20" />

              {/* Project Image */}
              <Link
                to={`/projects/${project.id}`}
                className={`relative aspect-video overflow-hidden transition-all duration-500 ${index % 2 === 1 ? "lg:order-last" : ""}`}
              >
                <img
                  src={project.image?.[0]?.image || "/placeholder.svg"}
                  alt={project.project_title}
                  loading="lazy"
                  className="h-full w-full object-cover filter saturate-150 contrast-125 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 cyberpunk-scanlines opacity-20 pointer-events-none" />
                <div className="absolute top-4 left-4 font-mono text-[10px] font-black text-primary bg-background/90 px-3 py-1 border border-primary/40 group-hover:shadow-[0_0_10px_rgba(232,121,249,0.5)] transition-all">
                   MISSION_{String(index + 1).padStart(3, "0")}
                </div>
              </Link>

              {/* Project Info */}
              <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
                <div className="flex flex-wrap gap-2">
                  {project.skills?.slice(0, 4).map((skill) => (
                    <span key={skill} className="px-2 py-0.5 text-[9px] font-mono font-black uppercase tracking-[0.2em] text-accent border border-accent/20 bg-accent/5">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <Link to={`/projects/${project.id}`}>
                    <h3 className="text-3xl md:text-5xl font-mono font-black text-foreground transition-colors group-hover:text-primary uppercase tracking-tighter leading-none">
                      {project.project_title}
                    </h3>
                  </Link>
                  <p className="text-sm font-mono leading-relaxed text-muted-foreground opacity-80 border-l border-primary/20 pl-4">
                    {project.project_description.substring(0, 160)}...
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-primary/10">
                  <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-1.5 text-[10px] font-mono font-black uppercase tracking-[0.3em] text-foreground transition-colors hover:text-primary">
                    DATA_LINK <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  {project.git_link && <RepoMeta url={project.git_link} />}
                  <div className="flex items-center gap-4 ml-auto">
                    {project.git_link && (
                      <a href={project.git_link} target="_blank" rel="noreferrer" className="text-muted-foreground transition-all hover:text-primary hover:scale-110">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live_link && (
                      <a href={project.live_link} target="_blank" rel="noreferrer" className="text-muted-foreground transition-all hover:text-accent hover:scale-110">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  if (isGlass) {
    return (
      <Section title="Featured Projects" id="projects" accentColor="bg-primary">
        <div className="flex flex-col gap-10">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Project Image */}
              <Link
                to={`/projects/${project.id}`}
                className={`relative aspect-[16/10] overflow-hidden transition-all duration-700 ${index % 2 === 1 ? "lg:order-last" : ""}`}
                style={{ borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <img
                  src={project.image?.[0]?.image || "/placeholder.svg"}
                  alt={project.project_title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 glass-shimmer opacity-30 pointer-events-none" />
              </Link>

              {/* Project Info */}
              <div className="flex flex-col gap-6 p-4">
                 <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">0{index + 1}</span>
                    <div className="h-px w-8 bg-primary/20" />
                 </div>

                 <div className="flex flex-wrap gap-2">
                    {project.skills?.slice(0, 3).map((skill) => (
                       <span key={skill} className="px-3 py-1 text-[10px] font-bold rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-muted-foreground group-hover:text-primary transition-colors">
                          {skill}
                       </span>
                    ))}
                 </div>

                 <div className="space-y-4">
                    <Link to={`/projects/${project.id}`}>
                       <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-foreground transition-all group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent">
                          {project.project_title}
                       </h3>
                    </Link>
                    <p className="text-lg font-sans leading-relaxed text-muted-foreground">
                       {project.project_description.substring(0, 140)}...
                    </p>
                 </div>

                 <div className="flex items-center gap-6 pt-4">
                    <Link to={`/projects/${project.id}`} className="px-6 py-2 rounded-full bg-primary text-white text-xs font-bold shadow-lg shadow-primary/25 hover:scale-105 transition-transform flex items-center gap-2">
                       Full Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="flex items-center gap-4 ml-auto">
                       {project.git_link && <a href={project.git_link} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="h-5 w-5" /></a>}
                       {project.live_link && <a href={project.live_link} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink className="h-5 w-5" /></a>}
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    );
  }

  // Terminal / Gruvbox
  return (
    <Section title="Featured Projects" id="projects" accentColor="bg-vibrant-yellow">
      <div className="flex flex-col gap-0 border border-border divide-y divide-border">
        {projects.slice(0, 4).map((project, index) => (
          <div key={project.id} className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            <Link
              to={`/projects/${project.id}`}
              className={`relative aspect-video overflow-hidden bg-secondary/30 transition-all duration-500 border-r border-border ${index % 2 === 1 ? "lg:order-last lg:border-r-0 lg:border-l border-border" : ""}`}
            >
              <img
                src={project.image?.[0]?.image || "/placeholder.svg"}
                alt={project.project_title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-background/20 transition-colors group-hover:bg-transparent" />
              <div className="absolute top-4 left-4 font-mono text-[10px] font-black text-primary bg-background/80 px-2 py-1 border border-border">
                {String(index + 1).padStart(2, "0")}
              </div>
            </Link>

            <div className="flex flex-col justify-center gap-5 p-8 bg-background group-hover:bg-secondary/20 transition-colors">
              <div className="flex flex-wrap gap-2">
                {project.skills?.slice(0, 4).map((skill) => (
                  <span key={skill} className="border border-border bg-secondary px-2.5 py-1 text-[10px] font-mono font-black uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-2xl md:text-4xl font-mono font-black text-foreground transition-colors group-hover:text-primary leading-tight uppercase">
                    {project.project_title}
                  </h3>
                </Link>
                <div className="prose prose-sm line-clamp-3 leading-relaxed text-muted-foreground font-mono">
                  <ReactMarkdown>{project.project_description}</ReactMarkdown>
                </div>
              </div>

              <div className="flex items-center gap-5 pt-4 border-t border-border/50">
                <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase tracking-widest text-foreground transition-colors hover:text-primary">
                  View Source <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                {project.git_link && <RepoMeta url={project.git_link} />}
                <div className="flex items-center gap-4 ml-auto">
                  {project.git_link && <a href={project.git_link} target="_blank" rel="noreferrer" className="text-muted-foreground transition-all hover:text-foreground hover:scale-110"><Github className="h-4 w-4" /></a>}
                  {project.live_link && <a href={project.live_link} target="_blank" rel="noreferrer" className="text-muted-foreground transition-all hover:text-primary hover:scale-110"><ExternalLink className="h-4 w-4" /></a>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
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
