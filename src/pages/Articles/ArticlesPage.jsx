import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolioData from "../../data";
import { PageHeader } from "../../components";
import useSEO from "../../hooks/useSEO";

export default function ArticlePage() {
  const [articles] = useState(portfolioData.articles || []);

  useSEO(
    "Articles",
    "Technical thoughts and deep dives into React Native, Django, and high-performance engineering by Abhishek Tiwari."
  );

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
        <PageHeader
          label="Writing"
          title="Articles"
          subtitle="Thoughts on mobile and backend engineering — React Native, Django, and high-performance systems."
        />

        {/* Articles List — border-grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col border border-primary/20 divide-y divide-primary/10 bg-card/20 backdrop-blur-md"
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="group relative flex flex-col gap-5 p-8 md:p-10 hover:bg-primary/[0.03] transition-all duration-500"
            >
              {/* Left accent on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top shadow-[0_0_15px_rgba(250,189,47,0.4)]" />

              {/* Meta */}
              <div className="flex items-center gap-5 text-[11px] font-mono font-black uppercase tracking-[0.3em] text-muted-foreground/50">
                <span className="text-primary/70">#STAT_{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px w-8 bg-primary/20" />
                <time dateTime={article.created_at} className="group-hover:text-foreground transition-colors">{article.created_at}</time>
                <span className="h-px w-8 bg-primary/20" />
                <span className="group-hover:text-vibrant-emerald transition-colors">{article.reading_time} MIN_READ</span>
              </div>

              {/* Title & Excerpt */}
              <Link to={`/articles/${article.id}`} className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-5xl font-mono font-black tracking-tight text-foreground group-hover:text-primary transition-all duration-500 leading-tight uppercase">
                  {article.title}
                </h2>
                <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400 font-mono max-w-4xl italic group-hover:text-foreground/80 transition-colors">
                  {article.body}
                </p>
              </Link>

              {/* Read more */}
              <div className="mt-4 flex items-center justify-between">
                <Link
                  to={`/articles/${article.id}`}
                  className="inline-flex items-center gap-2.5 text-[11px] font-mono font-black uppercase tracking-[0.3em] text-primary/60 transition-all duration-300 hover:text-primary group/btn bg-primary/5 px-4 py-1.5 border border-primary/10 hover:border-primary/40"
                >
                  DEPLOY_THREAD
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
                
                {/* Corner detail */}
                <div className="text-[10px] font-mono text-primary/20 group-hover:text-primary/40 transition-colors uppercase tracking-widest font-black">
                  [READING_AUTHORIZED]
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
