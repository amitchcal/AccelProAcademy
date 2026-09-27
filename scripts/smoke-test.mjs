const base = process.env.SITE_URL || "http://localhost:5173";
const routes = ["/", "/programmes", "/about", "/contact", "/privacy", "/sitemap.xml", "/robots.txt"];
const pages = new Map();
for (const route of routes) {
  const response = await fetch(`${base}${route}`);
  if (!response.ok) throw new Error(`${route} returned ${response.status}`);
  pages.set(route, await response.text());
  console.log(`PASS ${route} ${response.status}`);
}
const requiredCopy = [
  ["/", "Practical guidance from Amit Chakraborty."],
  ["/programmes", "1.4.2 Data Science, ML and AI"],
  ["/contact", "Send me updates from AccelPro Digital Marketing Academy on WhatsApp. I can stop them any time."],
];
for (const [route, copy] of requiredCopy) {
  if (!pages.get(route)?.includes(copy)) throw new Error(`${route} is missing required copy: ${copy}`);
}
if (!pages.get("/sitemap.xml")?.includes("https://accel-pro-academy.vercel.app") || pages.get("/sitemap.xml")?.includes("chatgpt.site")) throw new Error("sitemap uses the wrong production domain");
if (!pages.get("/robots.txt")?.includes("https://accel-pro-academy.vercel.app/sitemap.xml")) throw new Error("robots.txt uses the wrong sitemap URL");
console.log("PASS feedback copy and production-domain checks");
const missing = await fetch(`${base}/definitely-missing`);
if (missing.status !== 404) throw new Error(`404 route returned ${missing.status}`);
console.log("PASS custom 404");
const invalid = await fetch(`${base}/api/newsletter`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "invalid" }) });
if (invalid.status !== 400) throw new Error(`invalid newsletter returned ${invalid.status}`);
console.log("PASS server-side form validation");
