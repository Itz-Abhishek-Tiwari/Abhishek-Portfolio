import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubRepos } from '../../lib/github';
import { ExternalLink, Star, GitFork, Book } from 'lucide-react';

const RepoCard = ({ repo, index }) => (
    <motion.a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group block bg-[#1d2021] border border-[#3c3836] p-4 hover:border-[#fabd2f] transition-all duration-300 relative overflow-hidden"
    >
        <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 text-[#fabd2f]">
                <Book size={16} />
                <h3 className="font-bold text-[#ebdbb2] group-hover:text-[#fabd2f] transition-colors truncate max-w-[200px]">
                    {repo.name}
                </h3>
            </div>
            <ExternalLink size={14} className="text-[#928374] group-hover:text-[#fabd2f]" />
        </div>

        <p className="text-xs text-[#a89984] line-clamp-2 mb-4 h-8">
            {repo.description || 'No description provided.'}
        </p>

        <div className="flex items-center gap-4 text-[10px] text-[#928374] font-mono uppercase">
            {repo.language && (
                <span className="flex items-center gap-1">
                    <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    {repo.language}
                </span>
            )}
            <span className="flex items-center gap-1.5 hover:text-[#fabd2f] transition-colors">
                <Star size={12} className="text-[#fabd2f]" /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#fabd2f] transition-colors">
                <GitFork size={12} /> {repo.forks_count}
            </span>
        </div>

        {/* Subtle scanline effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fabd2f]/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none" />
    </motion.a>
);

const getLanguageColor = (lang) => {
    const colors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Vue': '#41b883',
        'React': '#61dafb',
        'Dart': '#00B4AB',
        'C++': '#f34b7d',
    };
    return colors[lang] || '#fabd2f';
};

const GitHubProjects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            const data = await fetchGitHubRepos();
            setRepos(data);
            setLoading(false);
        };
        fetchRepos();
    }, []);

    if (loading) return null;

    return (
        <section className="px-6 py-20 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold uppercase tracking-tighter text-[#ebdbb2]">
                    Recent Repositories <span className="text-[#fabd2f]">02</span>
                </h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#3c3836] to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos.map((repo, index) => (
                    <RepoCard key={repo.id} repo={repo} index={index} />
                ))}
            </div>
        </section>
    );
};

export default GitHubProjects;
