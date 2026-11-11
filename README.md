# Portfolio

Personal portfolio built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev
```

Node is pinned in `mise.toml`.

## Deploy

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`. In the repository
settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Design

- Type: Instrument Sans and Fragment Mono, self-hosted through Fontsource.
- Colour: Sanzo Wada, _A Dictionary of Color Combinations_, No. 179 (Red Orange, Golden Yellow,
  Deep Lyons Blue) over warm neutrals.
- Tokens live in `src/styles/tokens.css`.
