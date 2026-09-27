import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How AccelPro Academy handles website enquiries, conversation requests, and newsletter signups.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return <><SiteHeader/><main id="main">
    <header className="page-hero page-hero-light"><div className="shell"><p className="eyebrow">Privacy</p><h1 className="display">How we use your information.</h1><p>This notice covers information submitted through the AccelPro Academy website.</p></div></header>
    <section className="section"><article className="shell legal-copy">
      <p><strong>Data controller:</strong> AccelPro Academy, a Vividha Consultancy initiative, 390 S N Roy Road, Kolkata 700038.</p>
      <h2>Information we collect</h2>
      <p>When you book a conversation, send an enquiry, or join the update list, we collect the information you enter. Depending on the form, this may include your name, email address, phone number, academy interest, message, and WhatsApp marketing preference.</p>
      <h2>How we use it</h2>
      <p>We use your information to respond to your request, arrange a conversation, recommend a relevant learning path, and send updates only when you have chosen to receive them.</p>
      <h2>Storage and service providers</h2>
      <p>Form submissions are stored in private managed storage connected to our website hosting provider. Access is limited to people who need the information to respond to requests and operate the academy.</p>
      <h2>Retention and your choices</h2>
      <p>We retain submissions only while they are needed for the purposes described above or for legitimate operational and record-keeping requirements. You may ask us to correct or delete your information, or withdraw from marketing updates, by emailing <a href="mailto:info@accelpro.academy">info@accelpro.academy</a>.</p>
      <h2>Contact</h2>
      <p>Questions about this notice can be sent to <a href="mailto:info@accelpro.academy">info@accelpro.academy</a>. You can also return to the <Link href="/contact">contact page</Link>.</p>
      <p className="legal-updated">Last updated: 28 September 2026</p>
    </article></section>
  </main><SiteFooter/></>;
}
