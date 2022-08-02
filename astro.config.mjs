import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkSmartypants from 'remark-smartypants';
import remarkFootnotes from 'remark-footnotes';
// import remarkGfm from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
	site: "https://www.brycewray.com/",
	// commenting this out prevents XML sitemap from happening during dev
	server: {
		port: 3000,
		host: "192.168.254.10"
	},
	trailingSlash: "always",
	vite: {
		plugins: [],
		// ssr: {}
	},
	markdown: {
		// syntaxHighlight: 'prism', // while Shiki is FUBARed
		shikiConfig: {
			theme: 'github-dark'
		},
	},
  integrations: [
		sitemap(),
		mdx({
			remarkPlugins: [
				[remarkSmartypants, {
					dashes: "oldschool",
					ellipses: false
				}],
				remarkFootnotes
			],
			rehypePlugins: [
				rehypeExternalLinks,
				rehypeSlug,
				[
					rehypeAutolinkHeadings, {
						behavior: "wrap"
					}
				]
			],
		})
	],
});
