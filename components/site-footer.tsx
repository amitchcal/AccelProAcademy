import Link from "next/link";
import { NewsletterForm } from "./forms";
export function SiteFooter(){return <footer className="site-footer"><div className="shell">
  <div className="footer-grid"><div><Link className="brand footer-logo-frame" href="/" aria-label="AccelPro Academy home"><img className="brand-logo footer-brand-logo" src="/accelpro-logo.png" width="600" height="481" alt="AccelPro Academy" loading="lazy" /></Link><p>Practical professional learning for people ready to take on greater responsibility.</p><p>[City / service area to be confirmed]</p></div>
  <div><strong>Explore</strong><div className="footer-links"><Link href="/programmes">Programmes</Link><Link href="/about">About the academy</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div></div>
  <div><strong>Useful updates, occasionally.</strong><p>New programmes and practical learning notes.</p><NewsletterForm compact /></div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} AccelPro Academy</span><span>Business details pending confirmation</span></div>
 </div></footer>}
