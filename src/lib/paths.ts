const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a `public/` asset with the deployment basePath (needed on GitHub Pages project sites). */
export function asset(path: string) {
    return `${basePath}${path}`;
}
