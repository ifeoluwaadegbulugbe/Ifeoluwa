import type { Metadata } from "next";
import Link from "next/link";
import WorkIndex from "@/components/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product design case studies: PriceDrop, LookLab, Margin, Mira Moda, SwiftPay and Verdara.",
};

export default function WorkPage() {
  return (
    <div className="wrap">
      <header className="work-head">
        <p className="label">The index · 6 projects</p>
        <h1 className="display-xl" style={{ marginTop: 12 }}>Work.</h1>
        <p className="lead" style={{ marginTop: 16, maxWidth: "40ch" }}>Things I&apos;ve designed, a few I&apos;ve built, and two I made in hackathons (they&apos;re the ones with the ⚡).</p>
        <WorkIndex />
      </header>
      <p className="caption" style={{ marginTop: 48 }}>Smaller studies (Fluxo, Lumae and others) live in <Link className="link" href="/experiments">Experiments</Link>.</p>
    </div>
  );
}
