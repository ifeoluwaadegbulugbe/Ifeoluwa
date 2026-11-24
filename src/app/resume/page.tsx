import type { Metadata } from "next";
import Link from "next/link";
import { education, experience, leadership, site, skills } from "@/content/site";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience, education, skills and tools. Download the CV as a PDF.",
};

export default function ResumePage() {
  return (
    <div className="wrap" style={{ paddingTop: 64 }}>
      <header style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24, alignItems: "end", borderBottom: "1.5px solid var(--ink)", paddingBottom: 32 }}>
        <div>
          <p className="label">Resume · Updated Nov 2026</p>
          <h1 className="display-l" style={{ marginTop: 12 }}>Ifeoluwa Adegbulugbe</h1>
          <p className="lead" style={{ marginTop: 12 }}>Product Designer · {site.location} · Available now · Open to remote, hybrid or relocation</p>
        </div>
        <div className="btn-row">
          {site.cv && <a className="btn btn-primary" href={site.cv} download>Download CV (PDF) ↓</a>}
          <a className="btn btn-secondary" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </header>

      <div className="resume-grid" style={{ marginTop: 48 }}>
        <p className="label">Summary</p>
        <p className="lead measure">
          Product designer with a Computer Science background (First Class, 4.81/5.0). I&apos;ve led research and designed accessible products with developer teams, and I design and build my own tools for shopping, learning and fashion.
        </p>

        <p className="label">Experience</p>
        <div>
          {experience.map((e) => (
            <div key={e.org} className="job">
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <h3 style={{ fontSize: "1.6rem" }}>{e.role}, {e.org}</h3>
                <span className="label">{e.dates}</span>
              </div>
              <span className="caption">{e.context}</span>
              <ul>{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
          ))}
        </div>

        <p className="label">Selected projects</p>
        <div>
          {projects.map((p) => (
            <div key={p.slug} className="job" style={{ gridTemplateColumns: "1fr auto", alignItems: "baseline" }}>
              <span><Link className="link" href={`/work/${p.slug}`}><strong>{p.title}</strong></Link> · {p.oneLiner}</span>
              <span className="label">{p.event ?? p.type}</span>
            </div>
          ))}
        </div>

        <p className="label">Education</p>
        <div className="job">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <h3 style={{ fontSize: "1.6rem" }}>{education.degree}, {education.school}</h3>
            <span className="label">{education.dates}</span>
          </div>
          <span>{education.detail}</span>
          <span className="caption">Coursework: {education.coursework}</span>
        </div>

        <p className="label">Leadership &amp; teaching</p>
        <div>
          {leadership.map((l) => (
            <div key={l.role} className="job">
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                <strong>{l.role}, {l.org}</strong><span className="label">{l.dates}</span>
              </div>
              <span className="caption">{l.note}</span>
            </div>
          ))}
        </div>

        <p className="label">Skills &amp; tools</p>
        <div>
          {skills.map((s) => (
            <div key={s.group} className="job"><strong>{s.group}</strong><span>{s.items}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}
