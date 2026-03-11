import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, FloatingContact } from "../../components";
import portfolioData from "../../data"

export default function ArticlePage() {
  const [articles] = useState(portfolioData.articles || [])

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <div className="mb-20">
          <h1 className="font-serif text-5xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
            Articles
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
            A repository of thoughts on mobile and backend engineering. Exploring the nuances of React Native, Django, and building high-performance systems.
          </p>
        </div>

        <div className="space-y-24">
          {articles.map((article) => (
            <article key={article.id} className="group relative flex flex-col items-start gap-6">
              <div className="flex items-center gap-4 text-xs font-medium tabular-nums text-zinc-400">
                <time dateTime={article.created_at} className="tracking-wide">{article.created_at}</time>
                <span className="h-px w-10 bg-zinc-200 transition-colors group-hover:bg-telephone-red dark:bg-zinc-800 dark:group-hover:bg-accent-red"></span>
                <span className="uppercase tracking-widest">{Math.ceil(article.body.length / 1000)} min read</span>
              </div>

              <Link to={`/articles/${article.id}`} className="flex flex-col gap-4">
                <h2 className="font-serif text-3xl font-medium tracking-tight text-zinc-950 transition-colors group-hover:text-telephone-red dark:text-zinc-50 dark:group-hover:text-accent-red">
                  {article.title}
                </h2>
                <p className="line-clamp-3 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {article.body.replace(/[#*`]/g, '').substring(0, 250)}...
                </p>
              </Link>

              <Link
                to={`/articles/${article.id}`}
                className="group/btn flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-telephone-red dark:text-zinc-100 dark:hover:text-accent-red"
              >
                Continue reading
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
