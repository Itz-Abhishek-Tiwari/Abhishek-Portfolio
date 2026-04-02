import { useEffect, useState } from 'react';
import { Star, GitFork } from 'lucide-react';
import PropTypes from 'prop-types';
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
        <div className="flex items-center gap-3 text-[10px] font-mono text-muted-foreground">
            <span className="flex items-center gap-1 hover:text-vibrant-yellow transition-colors cursor-default">
                <Star size={12} className="text-vibrant-yellow" /> {stats.stars}
            </span>
            <span className="flex items-center gap-1 hover:text-vibrant-yellow transition-colors cursor-default">
                <GitFork size={12} /> {stats.forks}
            </span>
        </div>
    );
};

RepoMeta.propTypes = {
    url: PropTypes.string
};

export default RepoMeta;
