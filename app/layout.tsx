import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://accelpro-academy.blithe-clove-7962.chatgpt.site"),
  title: { default: "AccelPro Academy | Professional Learning", template: "%s | AccelPro Academy" },
  description: "Practical professional learning programmes designed to help ambitious people lead, communicate, and grow with clarity.",
  alternates: { canonical: "/" },
  openGraph: { title: "AccelPro Academy", description: "Professional learning with practical depth.", type: "website", locale: "en_IN" },
  twitter: { card: "summary", title: "AccelPro Academy", description: "Professional learning with practical depth." },
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
      <body>{children}</body>
    </html>
  );
}
