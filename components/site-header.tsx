"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [["/", "Home"], ["/programmes", "Programmes"], ["/about", "About"], ["/contact", "Contact"]] as const;
export function SiteHeader() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  return <><a className="skip" href="#main">Skip to content</a><header className="site-header"><div className="shell nav-wrap">
    <Link className="brand" href="/" aria-label="AccelPro Academy home"><span className="brand-mark" aria-hidden="true">A</span><span>AccelPro Academy</span></Link>
    <button className="nav-toggle" aria-expanded={open} aria-controls="primary-nav" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open ? "×" : "☰"}</button>
    <nav id="primary-nav" aria-label="Primary" className={`nav-links ${open ? "open" : ""}`}>
      {links.map(([href,label])=><Link key={href} href={href} aria-current={path===href?"page":undefined} onClick={()=>setOpen(false)}>{label}</Link>)}
      <Link className="btn btn-primary" href="/contact#booking" onClick={()=>setOpen(false)}>Book a conversation</Link>
    </nav>
  </div></header></>;
}
