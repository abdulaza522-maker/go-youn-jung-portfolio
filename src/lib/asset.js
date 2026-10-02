/**
 * Resolves a path inside `public/` to a URL that respects Vite's configured `base`.
 *
 * Why this exists: files in `public/` are copied verbatim, so a hard-coded
 * `/images/x.jpg` breaks when the site is deployed to a sub-path such as
 * GitHub Pages (`/repo-name/`). `import.meta.env.BASE_URL` is `/` in dev and
 * the repo sub-path in production, so this works identically in both.
 */
const BASE = import.meta.env.BASE_URL

export function asset(path) {
  return `${BASE}${String(path).replace(/^\/+/, '')}`
}
