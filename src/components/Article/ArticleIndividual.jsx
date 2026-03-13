
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ArrowLeft } from "lucide-react";
import portfolioData from "../../data";

export default function ArticleIndividual() {
    const { articleid } = useParams();
    const article = portfolioData.articles.find(a => a.id == articleid);

    if (!article) return <div className="p-20 text-center font-mono text-muted-foreground">Article not found</div>;

    return (
        <div className="min-h-screen bg-transparent relative overflow-hidden">

            <main className="mx-auto max-w-4xl px-6 py-20 relative z-10">
                <Link
                    to="/articles"
                    className="group mb-16 inline-flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Articles
                </Link>

                <header className="mb-20 border-b border-border pb-12">
                    {/* Meta */}
                    <div className="mb-8 flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                        <span className="bg-secondary border border-border px-3 py-1 text-primary">{article.created_at}</span>
                        <span className="h-px w-8 bg-border" />
                        <span className="text-muted-foreground">{article.reading_time} min read</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-3">
                            <span className="h-px w-12 bg-primary" />
                            <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-primary">Insight</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-black tracking-tight text-foreground leading-[1.05]">
                            {article.title}
                        </h1>
                    </motion.div>
                </header>

                {/* Article Body */}
                <article className="prose prose-lg max-w-none font-sans leading-relaxed text-foreground/80 prose-invert prose-yellow">
                    <article.component />
                </article>

                {/* Related Articles */}
                {portfolioData.articles.filter(a => a.id != articleid).length > 0 && (
                    <section className="mt-32 border-t border-border pt-16">
                        <div className="flex items-center gap-3 mb-10">
                            <span className="h-px w-12 bg-primary" />
                            <h2 className="text-sm font-mono font-black uppercase tracking-widest text-foreground">Discover More</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 bg-border border border-border">
                            {portfolioData.articles
                                .filter(a => a.id != articleid)
                                .slice(0, 2)
                                .map((rel) => (
                                    <Link
                                        key={rel.id}
                                        to={`/articles/${rel.id}`}
                                        className="group flex flex-col gap-3 p-6 bg-background hover:bg-secondary/30 transition-colors"
                                    >
                                        <time className="text-[10px] font-mono text-muted-foreground">{rel.created_at}</time>
                                        <h3 className="text-lg font-mono font-black text-foreground group-hover:text-primary transition-colors leading-tight">
                                            {rel.title}
                                        </h3>
                                    </Link>
                                ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
