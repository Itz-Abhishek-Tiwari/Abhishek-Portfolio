import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, Users, Code, Github } from 'lucide-react';
import { getGitHubStats } from '../../lib/github';
import { cn } from '../../lib/utils';

const StatCard = ({ icon: Icon, label, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="relative group bg-[#282828] border border-[#3c3836] p-4 flex flex-col items-center justify-center gap-2 hover:border-[#fabd2f] transition-colors duration-300"
    >
        <div className="text-[#fabd2f] group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} />
        </div>
        <span className="text-2xl font-bold text-[#ebdbb2]">{value}</span>
        <span className="text-xs uppercase tracking-widest text-[#928374]">{label}</span>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#3c3836] group-hover:border-[#fabd2f] transition-colors" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#3c3836] group-hover:border-[#fabd2f] transition-colors" />
    </motion.div>
);

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
            <div className="w-full h-32 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#fabd2f] border-t-transparent animate-spin" />
            </div>
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
        <section className="px-6 py-20 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Github size={20} className="text-[#fabd2f]" />
                <h2 className="text-xl font-bold uppercase tracking-tighter text-[#ebdbb2]">
                    GitHub Engine <span className="text-[#fabd2f]">01</span>
                </h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#3c3836] to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {statItems.map((item, index) => (
                    <StatCard
                        key={item.label}
                        {...item}
                        delay={index * 0.1}
                    />
                ))}
            </div>

            <div className="mt-6 p-4 border border-dashed border-[#3c3836] flex flex-wrap gap-2 items-center">
                <span className="text-xs text-[#928374] uppercase tracking-wide">Tech Stack Focus:</span>
                {stats.topLanguages.map((lang) => (
                    <span
                        key={lang}
                        className="px-2 py-0.5 bg-[#3c3836] text-[#ebdbb2] text-[10px] uppercase font-medium"
                    >
                        {lang}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default GitHubStats;
