// Vercel does not provide Cloudflare Worker bindings. This shim lets the
// shared application render there while database-backed routes fail safely
// through the existing "binding unavailable" error path.
export const env: Record<string, never> = {};
