export const SITE = {
  name: 'Bright Idea Group',
  title: 'Bright Idea Group 2025',
  description: 'Scale Your Law Firms Growth with Bright Ideas. We help forge a path to bright ideas that are unique to you, work for you & drive results for you.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://brightideagroup.com',
  twitterHandle: '@brightideagroup',
  socials: {},
} as const;

export type SiteConfig = typeof SITE;
