import { Navbar, Footer, FloatingContact } from "../";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import portfolioData from '../../data';

export default function ArticleIndividual() {
    const { articleid } = useParams();
    const article = portfolioData.articles.find(a => a.id == articleid);

    if (!article) return <div className="p-20 text-center">Article not found</div>;

    return (
        <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
            <Navbar />
            <main className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
                <Link
                    to="/articles"
                    className="group mb-12 flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-telephone-red dark:hover:text-accent-red"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Articles
                </Link>

                <header className="mb-20 text-center sm:text-left">
                    <div className="mb-8 flex items-center justify-center sm:justify-start gap-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                        <time dateTime={article.created_at}>{article.created_at}</time>
                        <span className="h-px w-10 bg-telephone-red dark:bg-accent-red"></span>
                        <span>{Math.ceil(article.body.length / 1000)} min read</span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-5xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-7xl"
                    >
                        {article.title}
                    </motion.h1>
                </header>

                <article className="prose prose-zinc prose-sm sm:prose-base lg:prose-lg max-w-none dark:prose-invert">
                    <ReactMarkdown>{article.body}</ReactMarkdown>
                </article>

                {/* Related Articles */}
                <section className="mt-32 border-t border-zinc-100 pt-24 dark:border-zinc-900">
                    <h2 className="font-serif text-3xl font-medium text-zinc-950 dark:text-zinc-50">Related Articles</h2>
                    <div className="mt-12 space-y-12">
                        {portfolioData.articles
                            .filter(a => a.id != articleid)
                            .slice(0, 2)
                            .map((article) => (
                                <Link
                                    key={article.id}
                                    to={`/articles/${article.id}`}
                                    className="group flex flex-col gap-2"
                                >
                                    <div className="flex items-center gap-4 text-xs tabular-nums text-zinc-400">
                                        <time dateTime={article.created_at}>{article.created_at}</time>
                                        <span className="h-px w-8 bg-zinc-200 group-hover:bg-telephone-red dark:bg-zinc-800 dark:group-hover:bg-accent-red transition-colors"></span>
                                    </div>
                                    <h3 className="font-serif text-xl font-medium text-zinc-950 transition-colors group-hover:text-telephone-red dark:text-zinc-50 dark:group-hover:text-accent-red">
                                        {article.title}
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
