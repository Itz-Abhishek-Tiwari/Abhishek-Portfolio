import { useEffect } from "react";

/**
 * Custom hook to update document title and meta description for SEO/AI Search.
 * @param {string} title - The page title.
 * @param {string} description - The meta description for the page.
 */
export default function useSEO(title, description) {
    useEffect(() => {
        // Update Document Title
        const fullTitle = `${title} | Abhishek Tiwari`;
        document.title = fullTitle;

        // Update Open Graph Title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", fullTitle);

        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute("content", fullTitle);

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }

        // Update Open Graph Description
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute("content", description);

        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) twitterDescription.setAttribute("content", description);

    }, [title, description]);
}
