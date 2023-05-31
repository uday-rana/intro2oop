// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Introduction to Object Oriented Programming (C++)",
	tagline: "Introduction to Object Oriented Programming (C++)",

	// Set the production url of your site here
	url: "https://intro2oop.netlify.app",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				theme: {
					customCss: [require.resolve("./src/css/custom.css")],
				},
				docs: {
					routeBasePath: "/",
					breadcrumbs: false,
					sidebarPath: require.resolve("./sidebars.js"),
				},
				blog: false,
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({	
			docs: {
				sidebar: {
					autoCollapseCategories: true,
					hideable: true
				}
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			navbar: {
				title: "Introduction to Object Oriented Programming (C++)",
				items: [],
			},
			footer: {
				style: "dark",
				copyright: ` Copyright © ${new Date().getUTCFullYear()} Chris Szalwinski and Seneca College.`,
				links: [{ title: "Introduction to Object Oriented Programming (C++)", items: [{label: "Copyright License", href: "/copyright"}] }],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
