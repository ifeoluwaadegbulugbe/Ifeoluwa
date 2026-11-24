import Link from "next/link";
import CopyEmail from "@/components/CopyEmail";
import ExperimentsPreview from "@/components/ExperimentsPreview";
import { Arrow } from "@/components/bits";
import LocalTime from "@/components/LocalTime";
import { ProjectChip, SwatchCard } from "@/components/Swatches";
import { projects } from "@/content/projects";
import { experience, experiments, site } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero: a plain sentence, then the swatch card */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-meta">
            <span className="status-dot" aria-hidden="true" /> Available for product design roles · <LocalTime />
          </div>
          <h1 className="hero-sentence">
            I&apos;m Ifeoluwa, a product designer who studied Computer Science. I design things like <ProjectChip slug="pricedrop" label="a shopping assistant" />, <ProjectChip slug="looklab" label="a try-on app" /> and <ProjectChip slug="margin" label="a maths notebook" /> that just make sense.
          </h1>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link href="/work" className="btn btn-primary">See all work <Arrow /></Link>
            {site.cv && <a href={site.cv} download className="btn btn-secondary">Download CV ↓</a>}
          </div>
        </div>
      </section>

      <section aria-label="Selected work">
        <div className="wrap">
          <SwatchCard projects={projects} />
          <p className="caption swatch-hint">Six projects, six colours. Hover or tab through them.</p>
        </div>
      </section>

      {/* Experience preview */}
      <section className="section" aria-labelledby="exp">
        <div className="wrap">
          <div className="section-title">
            <h2 id="exp">Experience</h2>
            <Link href="/resume" className="draw-link">Full resume →</Link>
          </div>
          <ul className="timeline">
            {experience.map((e) => (
              <li key={e.org} data-reveal="">
                <span className="label">{e.dates}</span>
                <span><strong>{e.role}</strong>, {e.org} <span className="caption">· {e.context}</span></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experiments strip */}
      <section className="section" aria-labelledby="xp">
        <div className="wrap">
          <div className="section-title">
            <h2 id="xp">Experiments</h2>
            <Link href="/experiments" className="draw-link">See them all →</Link>
          </div>
          <ExperimentsPreview items={experiments} />
        </div>
      </section>

      {/* Contact band */}
      <section className="band" aria-labelledby="band">
        <div className="wrap band-inner">
          <h2 id="band" className="display-l">Have a project or a role in mind?</h2>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <CopyEmail variant="band" />
            <a className="btn btn-secondary" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}

