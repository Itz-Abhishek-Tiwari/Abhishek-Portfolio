import { useState } from 'react';
import { Navbar, Footer, FloatingContact } from '../';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Github, ExternalLink, Code2, Calendar, Share2 } from 'lucide-react';
import portfolioData from '../../data';

export default function ProjectIndividual() {
  const { projectid } = useParams();
  const project = portfolioData.projects.find(p => p.id == projectid);

  if (!project) return <div>Project not found</div>;

  const images = project.image || [];

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Link
          to="/projects"
          className="group mb-12 flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-telephone-red dark:hover:text-accent-red"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-7xl"
          >
            {project.project_title}
          </motion.h1>

          <div className="mt-16 grid grid-cols-1 gap-12 border-t border-zinc-100 pt-12 dark:border-zinc-900 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">The Role</span>
              <span className="text-base text-zinc-900 dark:text-zinc-100 font-medium">Lead Developer</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span key={i} className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-tight">{skill}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Links</span>
              <div className="flex gap-4">
                {project.git_link && (
                  <a href={project.git_link} target="_blank" rel="noreferrer" className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {project.live_link && (
                  <a href={project.live_link} target="_blank" rel="noreferrer" className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Image Showcase */}
        <div className="mb-20 grid grid-cols-1 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <img
                src={img.image}
                alt={img.name}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <article className="prose prose-zinc prose-sm sm:prose-base lg:prose-lg max-w-none dark:prose-invert">
          <ReactMarkdown>{project.project_description}</ReactMarkdown>
        </article>

        {/* Related Projects */}
        <section className="mt-32 border-t border-zinc-100 pt-24 dark:border-zinc-900">
          <h2 className="font-serif text-3xl font-medium text-zinc-950 dark:text-zinc-50">Related Projects</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {portfolioData.projects
              .filter(p => p.id != projectid)
              .slice(0, 2)
              .map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group flex flex-col gap-4"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition-all group-hover:border-telephone-red/20 dark:border-zinc-800 dark:bg-zinc-900">
                    <img
                      src={project.image?.[0]?.image || '/placeholder.svg'}
                      alt={project.project_title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-zinc-950 transition-colors group-hover:text-telephone-red dark:text-zinc-50 dark:group-hover:text-accent-red">
                    {project.project_title}
                  </h3>
                </Link>
              ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

