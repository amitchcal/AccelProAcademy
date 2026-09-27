"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [["/", "/", "Home"], ["/programmes#academy-architecture", "/programmes", "Programmes"], ["/about", "/about", "About"], ["/contact", "/contact", "Contact"]] as const;
export function SiteHeader() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  return <><a className="skip" href="#main">Skip to content</a><header className="site-header"><div className="shell nav-wrap">
    <Link className="brand brand-logo-link" href="/" aria-label="AccelPro Academy home"><img className="brand-logo" src="/accelpro-logo.png" width="600" height="481" alt="AccelPro Academy" /></Link>
    <button className="nav-toggle" aria-expanded={open} aria-controls="primary-nav" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open ? "×" : "☰"}</button>
    <nav id="primary-nav" aria-label="Primary" className={`nav-links ${open ? "open" : ""}`}>
      {links.map(([href,activePath,label])=><Link key={href} href={href} aria-current={path===activePath?"page":undefined} onClick={()=>setOpen(false)}>{label}</Link>)}
      <Link className="btn btn-primary" href="/contact#booking" onClick={()=>setOpen(false)}>Book a conversation</Link>
    </nav>
  </div></header></>;
}
