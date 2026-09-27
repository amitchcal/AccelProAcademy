import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CourseSearch } from "@/components/course-search";
export const metadata:Metadata={title:"Academies and Programmes",description:"Explore AccelPro Academy learning paths across digital marketing, AI, leadership, technology, and finance.",alternates:{canonical:"/programmes"}};
export default function Programmes(){return <><SiteHeader/><main id="main"><header className="page-hero"><div className="shell"><p className="eyebrow">Academies and programmes</p><h1 className="display">Build capability for the work ahead.</h1><p>Explore five focused academies under one parent learning brand. Search by domain, role, skill, or professional goal.</p></div></header><section className="section"><div className="shell"><CourseSearch/></div></section></main><SiteFooter/></>}
