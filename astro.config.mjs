import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://www.brycewray.com/",
	// commenting this out prevents XML sitemap from happening during dev
	server: {
		port: 3000,
		host: "192.168.254.10"
	},
	trailingSlash: "always",
	markdown: {
		remarkPlugins: [["remark-smartypants", {
			dashes: "oldschool",
			ellipses: false
		}], "remark-footnotes", "remark-gfm"],
		rehypePlugins: ["rehype-external-links", "rehype-slug", ["rehype-autolink-headings", {
			behavior: "wrap"
		}]],
		shikiConfig: {
			theme: 'github-dark'
		}
	},
	vite: {
		plugins: [],
		// ssr: {}
	},
  integrations: [
		sitemap(),
		mdx()
	]
});
