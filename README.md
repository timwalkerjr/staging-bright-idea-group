# Bright Idea Group

Astro site for Bright Idea Group.

## Hosting

- Primary: Netlify, built from `main`
- Mirror: Static.app, deployed from the same `dist` artifact
- Netlify staging URL: `https://staging-bright-idea-group.netlify.app`
- Static.app mirror URL: `https://staged-brightideagroup.staticdomains.app`
- Canonical production URL: `https://brightideagroup.com`

The project is deliberately static, host-neutral, and self-contained. Images, video, and fonts are stored under `public/assets`; do not add a platform adapter unless the site gains server-rendered routes.

## Forms

All contact forms submit to Formspree form `myegqyal` (`https://formspree.io/f/myegqyal`). JavaScript enhances the submission experience, while the normal HTML form action remains as a no-JavaScript fallback.

## Development

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
```

Netlify configuration lives in `netlify.toml`. The Static.app mirror workflow lives in `.github/workflows/deploy-static-app.yml`; it prepares a no-index copy and deploys it to site `0oibwvg7fy` with the encrypted `STATIC_APP_API_KEY` repository secret.
