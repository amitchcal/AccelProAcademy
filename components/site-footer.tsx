import { NewsletterForm } from "./forms";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon, MetaIcon } from "./social-icons";
export function SiteFooter(){return <footer className="site-footer"><div className="shell">
  <div className="footer-grid"><div><a className="brand footer-logo-frame" href="/" aria-label="AccelPro Academy home"><img className="brand-logo footer-brand-logo" src="/accelpro-logo.png" width="600" height="481" alt="AccelPro Academy" loading="lazy" /></a><div className="footer-contact-list" aria-label="Contact details">
    <div className="footer-contact-item"><Building2 aria-hidden="true"/><div><strong>Parent Company</strong><span>Vividha Consultancy</span></div></div>
    <div className="footer-contact-item"><MapPin aria-hidden="true"/><div><strong>Address</strong><span>390 S N Roy Road, Kolkata 700038</span></div></div>
    <div className="footer-contact-item"><Phone aria-hidden="true"/><div><strong>Contact</strong><span><a href="tel:+919731500452">9731500452</a> / <a href="tel:+919330352283">93303 52283</a> / <a href="tel:+919073947919">90739 47919</a></span></div></div>
    <div className="footer-contact-item"><Mail aria-hidden="true"/><div><strong>Email</strong><a href="mailto:info@accelpro.academy">info@accelpro.academy</a></div></div>
    <div className="footer-contact-item"><LinkedInIcon/><div><strong>LinkedIn</strong><a href="https://linkedin.com/amitchcal" target="_blank" rel="noreferrer">linkedin.com/amitchcal</a></div></div>
    <div className="footer-contact-item"><MetaIcon/><div><strong>Meta</strong><a href="#" aria-label="Meta profile">Meta profile</a></div></div>
  </div></div>
  <div><strong>Explore</strong><div className="footer-links"><a href="/programmes">Programmes</a><a href="/about">About the academy</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a></div></div>
  <div><strong>Useful updates, occasionally.</strong><p>New programmes and practical learning notes.</p><NewsletterForm compact /></div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} AccelPro Academy</span><span>A Vividha Consultancy initiative</span></div>
 </div></footer>}
