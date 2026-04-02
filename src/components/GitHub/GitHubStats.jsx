import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, Users, Code, Github } from 'lucide-react';
import PropTypes from 'prop-types';
import { getGitHubStats } from '../../lib/github';
import Section from '../ui/Section';

const StatCard = ({ icon: Icon, label, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="relative group bg-card border border-border p-4 flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors duration-300"
    >
        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} />
        </div>
        <span className="text-2xl font-mono font-bold text-foreground">{value}</span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{label}</span>

        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-border group-hover:border-primary transition-colors" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-border group-hover:border-primary transition-colors" />
    </motion.div>
);

StatCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    delay: PropTypes.number,
};

const GitHubStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            const data = await getGitHubStats();
            setStats(data);
            setLoading(false);
        };
        fetchStats();
    }, []);

    if (loading) {
        return (
            <section className="px-6 py-20 max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-28 shimmer border border-border" />
                    ))}
                </div>
            </section>
        );
    }

    if (!stats) return null;

    const statItems = [
        { icon: GitBranch, label: 'Repos', value: stats.public_repos },
        { icon: Star, label: 'Stars', value: stats.totalStars },
        { icon: Users, label: 'Followers', value: stats.followers },
        { icon: Code, label: 'Top Lang', value: stats.topLanguages[0] || 'N/A' },
    ];

    return (
        <Section title="GitHub Engine" id="github" accentColor="bg-vibrant-emerald">
            <div className="flex items-center gap-3 mb-6 text-muted-foreground">
                <Github size={16} className="text-primary" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Itz-Abhishek-Tiwari</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mb-4">
                {statItems.map((item, index) => (
                    <StatCard
                        key={item.label}
                        {...item}
                        delay={index * 0.1}
                    />
                ))}
            </div>

            <div className="p-4 border border-dashed border-border flex flex-wrap gap-2 items-center">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">Tech Stack Focus:</span>
                {stats.topLanguages.map((lang) => (
                    <span
                        key={lang}
                        className="px-2.5 py-1 bg-secondary border border-border text-foreground text-[10px] font-mono font-black uppercase tracking-wider hover:border-primary/50 transition-colors"
                    >
                        {lang}
                    </span>
                ))}
            </div>
        </Section>
    );
};

export default GitHubStats;
