import path from "path"
import { fileURLToPath } from "url"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import fs from "fs"

import mdx from "@mdx-js/rollup"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const mdxMetadataPlugin = {
  name: 'mdx-metadata-injector',
  enforce: 'pre',
  transform(code, id) {
    const filePath = id.split('?')[0];
    if (filePath.endsWith('.mdx')) {
      // Extract the body by removing the frontmatter
      const body = code.replace(/^---[\s\S]*?---/, '').trim();

      // Calculate reading time based on character count (adjust formula as needed)
      const readingTime = Math.ceil(body.length / 1000);

      // Generate excerpt
      const excerpt = body.replace(/[#*`>]/g, '').substring(0, 220).replace(/\s+/g, ' ').trim();

      // Inject into the frontmatter block safely
      // We assume every MDX file starts with ---
      if (code.startsWith('---')) {
        return code.replace(
          /^---/,
          `---\nreading_time: ${readingTime}\nexcerpt: ${JSON.stringify(excerpt)}`
        );
      }
    }
    return code;
  }
}

export default defineConfig({
  plugins: [
    mdxMetadataPlugin,
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
