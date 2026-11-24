import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseBlock from "@/components/case/Blocks";
import { CoverVisual } from "@/components/case/Covers";
import { CaseChrome } from "@/components/case/Interactive";
import { ProjectChips } from "@/components/bits";
import { getProject, projects } from "@/content/projects";
import { swatch } from "@/components/Swatches";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.title}: case study`,
    description: p.oneLiner,
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.indexOf(p);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const sw = swatch[p.slug];
  const sections = p.blocks.map((b) => ({ id: b.id, label: b.kicker.replace(/^\d+\s·\s/, "") }));

  return (
    <article style={{ ["--accent" as string]: p.accent }}>
      {/* Title on white, then the cover visual on the project's swatch colour */}
      <header className="wrap case-head">
        <div className="case-head-top">
          <span className="hero-meta"><span className="swatch-dot" style={{ background: sw.bg }} aria-hidden="true" /> No. {p.number} · {p.type}</span>
          <ProjectChips p={p} />
        </div>
        <h1 className="case-title">{p.title}</h1>
        <p className="case-one">{p.oneLiner}</p>
        <div className="case-swatch" style={{ background: sw.bg, color: sw.ink }}>
          <div className="case-swatch-visual"><CoverVisual p={p} /></div>
          <span className="case-swatch-name">{sw.name}</span>
        </div>
      </header>

      <div className="wrap">
        {/* At a glance */}
        <section className="glance" aria-label="At a glance">
          <dl><dt>Problem</dt><dd>{p.glance.problem}</dd></dl>
          <dl><dt>What I did</dt><dd>{p.glance.did}</dd></dl>
          <dl><dt>Outcome</dt><dd>{p.glance.outcome}</dd></dl>
          <dl className="meta-col">
            <dt>Role</dt><dd>{p.role}</dd>
            <dt>Timeline</dt><dd>{p.timeline}</dd>
            {p.event && (<><dt>Event</dt><dd>{p.event}</dd></>)}
            <dt>Tools</dt><dd>{p.tools}</dd>
            <dt>Platform</dt><dd>{p.platform}</dd>
            <dt>Links</dt>
            <dd>{p.links.map((l) => <a key={l.href} className="link" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>)}</dd>
          </dl>
        </section>

        <div className="case-layout">
          <CaseChrome sections={sections} />
          <div>
            {p.blocks.map((b) => <CaseBlock key={b.id} b={b} p={p} />)}

            <Link href={`/work/${next.slug}`} className="next-swatch" style={{ background: swatch[next.slug].bg, color: swatch[next.slug].ink }}>
              <span className="sw-num">Next project · No. {next.number}</span>
              <span className="np-title">{next.title} →</span>
              <span className="next-one">{next.oneLiner}</span>
            </Link>
            <div className="prev-next">
              <Link className="draw-link" href={`/work/${prev.slug}`}>← Previous: {prev.title}</Link>
              <Link className="draw-link" href="/work">Back to the index</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
