import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import NetlifyCMS from 'astro-netlify-cms';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(),
		NetlifyCMS({
			config: {
			  backend: {
				name: 'git-gateway',
				branch: 'main',
			  },
			  collections: [
				// Define a blog post collection
				{
					name: 'Blog',
					label: 'Entrada',
					folder: 'src/content/blog',
					create: true,
					delete: true,
					fields: [
					  { name: 'title', widget: 'string', label: 'Post Title' },
					  { name: 'description', widget: 'string', label: 'Resumen' },
					  { name: 'body', widget: 'markdown', label: 'Post Body' },
					  { name: 'pubDate', widget: 'datetime', label: 'Fecha de publicacion' },
					  { name: 'heroImage', widget: 'image', label: 'Imagen destacada' },
					],
				  },
			  ],
			},
		  }),
	],

});
