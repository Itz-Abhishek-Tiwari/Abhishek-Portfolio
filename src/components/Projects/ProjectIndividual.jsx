import { RepoMeta } from '../';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import portfolioData from '../../data';

export default function ProjectIndividual() {
  const { projectid } = useParams();
  const project = portfolioData.projects.find(p => p.id == projectid);

  if (!project) return <div className="p-20 text-center font-mono text-muted-foreground">Project not found</div>;

  const images = project.image || [];

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">

      <main className="mx-auto max-w-6xl px-6 py-20 relative z-10">
        <Link
          to="/projects"
          className="group mb-16 inline-flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-20 border-b border-border pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-primary" />
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-primary">Case Study</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-mono font-black tracking-tight text-foreground leading-[1.05]">
              {project.project_title}
            </h1>
          </motion.div>

          {/* Project Meta — sharp grid */}
          <div className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-3 bg-border border border-border">
            <div className="flex flex-col gap-2 p-6 bg-background">
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-vibrant-blue">Role</span>
              <span className="text-base font-mono font-bold text-foreground">Lead Developer</span>
            </div>
            <div className="flex flex-col gap-3 p-6 bg-background">
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-vibrant-emerald">Stack</span>
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, i) => (
                  <span key={i} className="border border-border bg-secondary/80 px-2.5 py-1 text-[10px] font-mono font-black uppercase tracking-wider text-foreground hover:border-primary/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 p-6 bg-background">
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-vibrant-purple">Links</span>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  {project.git_link && (
                    <a href={project.git_link} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-mono font-bold text-muted-foreground transition-all hover:text-foreground">
                      <Github className="h-5 w-5" />
                      Source
                    </a>
                  )}
                  {project.live_link && (
                    <a href={project.live_link} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-mono font-bold text-muted-foreground transition-all hover:text-primary">
                      <ExternalLink className="h-5 w-5" />
                      Live
                    </a>
                  )}
                </div>
                {project.git_link && (
                  <div className="pt-2 border-t border-border/50">
                    <RepoMeta url={project.git_link} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Project Images — sharp */}
        {images.length > 0 && (
          <div className="mb-20 flex flex-col gap-4 border border-border divide-y divide-border">
            {images.map((img) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden bg-secondary/30"
              >
                <img
                  src={img.image}
                  alt={img.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg max-w-none font-sans leading-relaxed text-foreground/80">
          <ReactMarkdown>{project.project_description}</ReactMarkdown>
        </article>

        {/* Related Projects */}
        {portfolioData.projects.filter(p => p.id != projectid).length > 0 && (
          <section className="mt-32 border-t border-border pt-16">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-12 bg-primary" />
              <h2 className="text-sm font-mono font-black uppercase tracking-widest text-foreground">Related Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-px sm:grid-cols-2 bg-border border border-border">
              {portfolioData.projects
                .filter(p => p.id != projectid)
                .slice(0, 2)
                .map((related) => (
                  <Link
                    key={related.id}
                    to={`/projects/${related.id}`}
                    className="group relative aspect-video overflow-hidden bg-secondary/30"
                  >
                    <img
                      src={related.image?.[0]?.image || '/placeholder.svg'}
                      alt={related.project_title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] brightness-75 group-hover:brightness-100"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-background/40 backdrop-blur-md border-t border-white/10">
                      <h3 className="text-sm font-mono font-black text-white group-hover:text-primary transition-colors">
                        {related.project_title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        )}
      </main>
    </div >
  );
}
