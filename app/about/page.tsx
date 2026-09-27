import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GuideSection } from "@/components/guide-section";
export const metadata:Metadata={title:"About",description:"Meet Amit Chakraborty and learn about AccelPro Academy's practical approach to professional learning.",alternates:{canonical:"/about"}};
export default function About(){return <><SiteHeader/><main id="main"><header className="page-hero page-hero-light"><div className="shell"><p className="eyebrow">About AccelPro Academy</p><h1 className="display">Practical guidance for modern work.</h1><p>Experience matters most when it helps people make better decisions, build useful systems, and apply what they learn.</p></div></header><GuideSection/><section className="section section-dark"><div className="shell quote-band"><div><p className="eyebrow">Your next step</p><h2 className="display">Bring the goal. We’ll discuss the fit.</h2></div><a className="btn btn-gold" href="/contact#booking">Book a conversation</a></div></section></main><SiteFooter/></>}
