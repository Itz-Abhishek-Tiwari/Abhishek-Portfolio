import React, { useEffect, useState } from 'react';
import { Star, GitFork } from 'lucide-react';
import { getRepoStats } from '../../lib/github';

const RepoMeta = ({ url }) => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        if (!url || !url.includes('github.com')) return;

        const fetchStats = async () => {
            const data = await getRepoStats(url);
            if (data) setStats(data);
        };
        fetchStats();
    }, [url]);

    if (!stats) return null;

    return (
        <div className="flex items-center gap-3 text-[10px] font-mono text-[#928374]">
            <span className="flex items-center gap-1 hover:text-[#fabd2f] transition-colors cursor-default">
                <Star size={12} className="text-[#fabd2f]" /> {stats.stars}
            </span>
            <span className="flex items-center gap-1 hover:text-[#fabd2f] transition-colors cursor-default">
                <GitFork size={12} /> {stats.forks}
            </span>
        </div>
    );
};

export default RepoMeta;
