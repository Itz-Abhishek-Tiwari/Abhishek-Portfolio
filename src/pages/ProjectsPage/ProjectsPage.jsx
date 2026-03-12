import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import portfolioData from "../../data";

export default function ProjectsPage() {
  const [projects] = useState(portfolioData.projects || []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 border-b border-border pb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-primary">Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-mono font-black tracking-tight text-foreground">
            Projects<span className="text-primary">_</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground font-mono">
            A curated collection of technical projects — from full-stack apps to performance-focused experiments. Unified by clean code and intentional design.
          </p>
        </motion.div>

        {/* Projects Grid — sharp borders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-px md:grid-cols-2 bg-border border border-border"
        >
          {projects.map((project, index) => {
            const projectImage = project.image && project.image.length > 0 ? project.image[0].image : '/placeholder.svg';
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group flex flex-col bg-background hover:bg-secondary/20 transition-colors"
              >
                {/* Image */}
                <Link
                  to={`/projects/${project.id}`}
                  className="relative aspect-video overflow-hidden bg-secondary/30 border-b border-border"
                >
                  <img
                    src={projectImage}
                    alt={project.project_title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] brightness-90 group-hover:brightness-100"
                  />
                  {/* Index badge */}
                  <div className="absolute top-3 left-3 font-mono text-[10px] font-black text-primary bg-background/80 px-2 py-1 border border-border">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {/* View arrow on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary text-primary-foreground p-1.5">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>

                {/* Info */}
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <Link to={`/projects/${project.id}`}>
                      <h3 className="text-xl font-mono font-black text-foreground transition-colors group-hover:text-primary leading-tight">
                        {project.project_title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-3 shrink-0 mt-0.5">
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
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground font-mono">
                    {project.project_description.replace(/[#*`]/g, '').substring(0, 160)}...
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="border border-border bg-secondary/50 px-2.5 py-1 text-[10px] font-mono font-black uppercase tracking-wider text-foreground hover:border-primary/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
}
