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
      <body>{children}</body>
    </html>
  );
}
