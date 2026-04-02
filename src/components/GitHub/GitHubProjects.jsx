import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubRepos } from '../../lib/github';
import { ExternalLink, Star, GitFork, Book } from 'lucide-react';
import PropTypes from 'prop-types';
import Section from '../ui/Section';

const LANGUAGE_COLORS = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'Python': '#3572A5',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#41b883',
    'Dart': '#00B4AB',
    'C++': '#f34b7d',
};

const getLanguageColor = (lang) => LANGUAGE_COLORS[lang] || 'var(--vibrant-yellow)';

const RepoCard = ({ repo, index }) => (
    <motion.a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        viewport={{ once: true }}
        className="group block bg-background border border-border p-4 hover:border-primary transition-all duration-300 relative overflow-hidden"
    >
        <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 text-primary">
                <Book size={14} />
                <h3 className="text-sm font-mono font-black text-foreground group-hover:text-primary transition-colors truncate max-w-[200px]">
                    {repo.name}
                </h3>
            </div>
            <ExternalLink size={12} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        </div>

        <p className="text-[11px] font-mono text-muted-foreground line-clamp-2 mb-4 min-h-[2.5rem] leading-relaxed">
            {repo.description || 'No description provided.'}
        </p>

        <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-wide text-muted-foreground">
            {repo.language && (
                <span className="flex items-center gap-1.5">
                    {/* Sharp square instead of rounded dot */}
                    <span
                        className="w-2 h-2 shrink-0"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    {repo.language}
                </span>
            )}
            <span className="flex items-center gap-1">
                <Star size={10} className="text-primary" /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
                <GitFork size={10} /> {repo.forks_count}
            </span>
        </div>

        {/* Hover beam sweep */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 pointer-events-none" />
    </motion.a>
);

RepoCard.propTypes = {
    repo: PropTypes.shape({
        html_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        language: PropTypes.string,
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
    }).isRequired,
    index: PropTypes.number.isRequired,
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
    if (!repos.length) return null;

    return (
        <Section title="Recent Repositories" id="repos" accentColor="bg-vibrant-purple">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                {repos.map((repo, index) => (
                    <RepoCard key={repo.id} repo={repo} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default GitHubProjects;
