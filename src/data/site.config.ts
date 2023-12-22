interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Livspect, Inc.', // Site author
	title: 'Astroを体感したかっただけのブログ', // Site title.
	description: 'プレスから所感までが方針の雑記ブログ', // Description to display in the meta tags
	lang: 'ja_JP',
	ogLocale: 'ja_JP',
	shareMessage: 'この投稿を共有する', // Message to share a post on social media
	paginationSize: 5 // Number of posts per page
}
