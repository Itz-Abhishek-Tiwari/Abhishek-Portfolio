import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolioData from "../../data";
import Typewriter from "../../components/Typewriter/Typewriter";

export default function ArticlePage() {
  const [articles] = useState(portfolioData.articles || []);

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-primary">Writing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-mono font-black tracking-tight text-foreground">
            <Typewriter text="Articles" />
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground font-mono">
            Thoughts on mobile and backend engineering — React Native, Django, and high-performance systems.
          </p>
        </motion.div>

        {/* Articles List — border-grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col border border-border divide-y divide-border"
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="group relative flex flex-col gap-4 p-6 md:p-8 hover:bg-secondary/20 transition-colors"
            >
              {/* Left accent on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              {/* Meta */}
              <div className="flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-primary/60">#{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px w-6 bg-border" />
                <time dateTime={article.created_at}>{article.created_at}</time>
                <span className="h-px w-6 bg-border" />
                <span>{article.reading_time} min read</span>
              </div>

              {/* Title & Excerpt */}
              <Link to={`/articles/${article.id}`} className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-4xl font-mono font-black tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h2>
                <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground font-mono max-w-3xl">
                  {article.body}
                </p>
              </Link>

              {/* Read more */}
              <Link
                to={`/articles/${article.id}`}
                className="inline-flex items-center gap-1.5 text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary group/btn w-fit"
              >
                Continue reading
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
