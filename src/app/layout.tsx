import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono, Kalam } from "next/font/google";
import "./globals.css";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/content/site";

const fraunces = Fraunces({ subsets: ["latin"], axes: ["SOFT", "WONK", "opsz"], variable: "--font-fraunces", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const kalam = Kalam({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-kalam", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · Product Designer`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title: `${site.name} · Product Designer`, description: site.description, type: "website" },
  // Preview build: keep it out of search engines until launch.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#f3efe6" };

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Product Designer",
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} ${kalam.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Masthead />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
