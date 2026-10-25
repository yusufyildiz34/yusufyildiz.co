# yusufyildiz.co

Personal site of Yusuf Yildiz, built with [Astro](https://astro.build) and deployed to GitHub Pages on every push to `main`.

## Edit content

All copy (intro, work history, stack, contact links) lives in `src/data/profile.ts`. Change it there; the page picks it up on the next build.

## Run locally

Requires Node.js 22.23.4 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build
```

## Deploy

`.github/workflows/deploy.yml` builds the site with `withastro/action` and publishes it with `actions/deploy-pages`.

One-time GitHub setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**, then set the custom domain to `yusufyildiz.co` and enable **Enforce HTTPS**.

## DNS (Cloudflare)

| Type  | Name | Value                     |
|-------|------|---------------------------|
| A     | @    | 185.199.108.153           |
| A     | @    | 185.199.109.153           |
| A     | @    | 185.199.110.153           |
| A     | @    | 185.199.111.153           |
| AAAA  | @    | 2606:50c0:8000::153       |
| AAAA  | @    | 2606:50c0:8001::153       |
| AAAA  | @    | 2606:50c0:8002::153       |
| AAAA  | @    | 2606:50c0:8003::153       |
| CNAME | www  | yusufyildiz34.github.io   |

Records are DNS-only (grey cloud) so GitHub can issue the TLS certificate. `www.yusufyildiz.co` redirects to `yusufyildiz.co` automatically.
