import axios from 'axios';

const GITHUB_USERNAME = 'Itz-Abhishek-Tiwari';

export const getGitHubStats = async () => {
    try {
        const userRes = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const reposRes = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);

        const userData = userRes.data;
        const repos = reposRes.data;

        const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const topLanguages = Array.from(new Set(repos.map(r => r.language).filter(Boolean))).slice(0, 5);

        return {
            public_repos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
            totalStars,
            topLanguages,
            bio: userData.bio,
            avatar_url: userData.avatar_url,
        };
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        return null;
    }
};

export const fetchGitHubRepos = async () => {
    try {
        const res = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        return res.data;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
};



export const getRepoStats = async (url) => {
    try {
        const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return null;
        const [, owner, repo] = match;
        const res = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
        return {
            stars: res.data.stargazers_count,
            forks: res.data.forks_count,
        };
    } catch (error) {
        console.error('Error fetching repo stats:', error);
        return null;
    }
};
