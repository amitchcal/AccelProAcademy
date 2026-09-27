import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://accel-pro-academy.vercel.app"),
  title: { default: "AccelPro Academy | Professional Learning", template: "%s | AccelPro Academy" },
  description: "Practical learning in AI, technology, leadership, finance and digital marketing for ambitious professionals.",
  alternates: { canonical: "/" },
  openGraph: { title: "AccelPro Academy", description: "Practical learning for real professional progress.", type: "website", locale: "en_IN" },
  twitter: { card: "summary", title: "AccelPro Academy", description: "Practical learning for real professional progress." },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
          "@context":"https://schema.org",
          "@type":"EducationalOrganization",
          name:"AccelPro Academy",
          url:"https://accel-pro-academy.vercel.app",
          logo:"https://accel-pro-academy.vercel.app/accelpro-logo.png",
          parentOrganization:{"@type":"Organization",name:"Vividha Consultancy"},
          address:{"@type":"PostalAddress",streetAddress:"390 S N Roy Road",addressLocality:"Kolkata",postalCode:"700038",addressCountry:"IN"},
          email:"info@accelpro.academy",
          telephone:"+91 97315 00452",
          sameAs:["https://linkedin.com/amitchcal"]
        })}} />
        {children}
      </body>
    </html>
  );
}
