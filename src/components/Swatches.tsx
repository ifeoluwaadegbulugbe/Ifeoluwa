import Link from "next/link";
import ProjectThumb from "./ProjectThumb";
import type { Project } from "@/content/projects";

/** Each project's signature colour, used for the swatch card and inline chips. */
export const swatch: Record<string, { bg: string; ink: string; name: string }> = {
  pricedrop: { bg: "#1949C5", ink: "#ffffff", name: "Price blue" },
  looklab: { bg: "#6C2BFF", ink: "#ffffff", name: "Try-on violet" },
  margin: { bg: "#FFBD59", ink: "#28243B", name: "Notebook yellow" },
  "mira-moda": { bg: "#650D17", ink: "#FBEFE9", name: "Mira burgundy" },
  swiftpay: { bg: "#151515", ink: "#F5EFE4", name: "Transfer black" },
  verdara: { bg: "#F2A7B8", ink: "#3B1520", name: "Verdara pink" },
};

/**
 * The home page's signature: the six projects as a paint swatch card.
 * Hover or tab to a swatch and it opens to show the project. Pure CSS,
 * so it works without JavaScript. On phones the swatches stack as cards.
 */
export function SwatchCard({ projects }: { projects: Project[] }) {
  return (
    <div className="swatch-card" role="list">
      {projects.map((p) => {
        const s = swatch[p.slug];
        return (
          <Link key={p.slug} href={`/work/${p.slug}`} className="sw" role="listitem" style={{ background: s.bg, color: s.ink }}>
            <span className="sw-spine" aria-hidden="true">
              <span className="sw-num">{p.number}</span>
              <span className="sw-name">{p.title}</span>
            </span>
            <span className="sw-open">
              <span className="sw-head">
                <span className="sw-num">{p.number} · {s.name}</span>
                <span className="sw-title">{p.title}</span>
                <span className="sw-one">{p.oneLiner}</span>
                <span className="sw-cta">View case study →</span>
              </span>
              <span className="sw-shot">
                <ProjectThumb slug={p.slug} title={p.title} sizes="(min-width: 1024px) 40vw, 100vw" />
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

/** A project name with its colour chip, for use inside sentences. */
export function ProjectChip({ slug, label }: { slug: string; label: string }) {
  const s = swatch[slug];
  return (
    <Link href={`/work/${slug}`} className="inline-chip" style={{ ["--chip" as string]: s.bg }}>
      <span className="inline-dot" style={{ background: s.bg }} aria-hidden="true" />
      {label}
    </Link>
  );
}

/** Small stack of all six colours: the site's recurring motif. */
export function SwatchStrip({ className }: { className?: string }) {
  return (
    <div className={`swatch-strip ${className ?? ""}`} aria-hidden="true">
      {Object.entries(swatch).map(([k, s]) => (
        <span key={k} style={{ background: s.bg }} />
      ))}
    </div>
  );
}
