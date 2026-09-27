import Link from "next/link";
import { NewsletterForm } from "./forms";
export function SiteFooter(){return <footer className="site-footer"><div className="shell">
  <div className="footer-grid"><div><Link className="brand footer-logo-frame" href="/" aria-label="AccelPro Academy home"><img className="brand-logo footer-brand-logo" src="/accelpro-logo.png" width="600" height="481" alt="AccelPro Academy" loading="lazy" /></Link><p>Practical learning in AI, technology, leadership, finance and digital marketing.</p><p>390 S N Roy Road, Kolkata 700038<br /><a href="mailto:info@accelpro.academy">info@accelpro.academy</a> · <a href="tel:+919731500452">9731500452</a></p></div>
  <div><strong>Explore</strong><div className="footer-links"><Link href="/programmes">Programmes</Link><Link href="/about">About the academy</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div></div>
  <div><strong>Useful updates, occasionally.</strong><p>New programmes and practical learning notes.</p><NewsletterForm compact /></div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} AccelPro Academy</span><span>A Vividha Consultancy initiative</span></div>
 </div></footer>}
