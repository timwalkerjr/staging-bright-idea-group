export const SITE = {
  name: 'Bright Idea Group',
  title: 'Law Firm Marketing Agency | Bright Idea Group',
  description: 'Bright Idea Group helps law firms grow with AI search optimization, SEO, web design, review management, media advertising, and rapid-response content.',
  ogImage: '/assets/images/service-ai-search.webp',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://brightideagroup.com',
  twitterHandle: '@brightideagroup',
  socials: {},
} as const;

export type SiteConfig = typeof SITE;
