const base = process.env.SITE_URL || "http://localhost:5173";
const routes = ["/", "/programmes", "/about", "/contact", "/privacy", "/sitemap.xml", "/robots.txt"];
for (const route of routes) {
  const response = await fetch(`${base}${route}`);
  if (!response.ok) throw new Error(`${route} returned ${response.status}`);
  console.log(`PASS ${route} ${response.status}`);
}
const missing = await fetch(`${base}/definitely-missing`);
if (missing.status !== 404) throw new Error(`404 route returned ${missing.status}`);
console.log("PASS custom 404");
const invalid = await fetch(`${base}/api/newsletter`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "invalid" }) });
if (invalid.status !== 400) throw new Error(`invalid newsletter returned ${invalid.status}`);
console.log("PASS server-side form validation");
