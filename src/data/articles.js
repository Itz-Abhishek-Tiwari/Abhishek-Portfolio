const articleFiles = import.meta.glob('../content/articles/*.mdx', { eager: true });

const articles = Object.keys(articleFiles).map((path) => {
    try {
        const module = articleFiles[path];
        const { id, title, created_at, link, images, reading_time, excerpt } = module.frontmatter || {};

        return {
            id: id || path,
            title: title || 'Untitled',
            created_at: created_at || new Date().toISOString(),
            link: link || null,
            image: images || [],
            component: module.default,
            body: excerpt || '',
            reading_time: reading_time || 0,
            path: path
        };
    } catch (err) {
        console.error(`Error processing ${path}:`, err);
        return null;
    }
}).filter(Boolean).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

export default articles;
