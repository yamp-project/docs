// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';
import starlightHeadingBadges from 'starlight-heading-badges';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/en',
	},
	devToolbar: {
		enabled: false,
	},	
	integrations: [
		starlight({
			title: 'YAMP :: V',
			social: {
				github: 'https://github.com/yamp-project',
			},
			// Set English as the default language for this site.
			defaultLocale: 'en',
			locales: {
				// English docs in `src/content/docs/en`
				en: {
					label: 'English',
				},
				// German docs in `src/content/docs/de/`
				de: {
					label: 'Deutsch',
					lang: 'de',
				}
			},
			sidebar: [
				{
					label: 'Appendix',
					collapsed: false,
					autogenerate: {
						directory: "appendix",
					}
				},
				{
					label: 'Getting Started',
					collapsed: false,
					autogenerate: {
						directory: "getting-started",
					}
				},
				{
					label: 'Developer Guides',
					collapsed: true,
					autogenerate: {
						directory: "developer-guides",
					}
				},
				{
					label: 'GTA:V Reference Data',
					collapsed: true,
					autogenerate: {
						directory: "gta-v-reference-data",
					}
				},
				{
					label: 'Platform Internals',
					collapsed: true,
					autogenerate: {
						directory: "platform-internals",
					}
				},
				{
					label: 'SDK Development',
					collapsed: true,
					autogenerate: {
						directory: "sdk-development",
					}
				},
			],
			plugins: [
				starlightHeadingBadges(),
				starlightVersions({
					versions: [
						{
							slug: 'dev',
							label: 'dev',
						},
						{
							slug: 'rc',
							label: 'rc',
						},
					],
				}),
			],
		}),
	],
});
