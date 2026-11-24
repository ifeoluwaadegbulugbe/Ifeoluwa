import Image from "next/image";
import type { Block, Project } from "@/content/projects";
import { Gallery, PersonaSwitcher, StickyStory } from "./Interactive";
import { Trust, TwoBrains, WhoDecides } from "./Diagrams";
import { specimenFamily } from "./specimenFonts";

function Head({ kicker, heading }: { kicker: string; heading: string }) {
  return (
    <div className="block-head" data-reveal="">
      <span className="num">{kicker}</span>
      <h2>{heading}</h2>
    </div>
  );
}

export default function CaseBlock({ b, p }: { b: Block; p: Project }) {
  switch (b.type) {
    case "text":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          <div className="block-text">
            <div data-reveal="">{b.body.map((t) => <p key={t} className="measure">{t}</p>)}</div>
            {b.note && <p className="margin-note" data-reveal="">{b.note}</p>}
          </div>
        </section>
      );

    case "competitors":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          {b.intro && <p className="measure" data-reveal="">{b.intro}</p>}
          <div className="table-wrap" data-reveal="" style={{ marginTop: 24 }}>
            <table className="compare">
              <caption className="sr-only">Competitor comparison</caption>
              <thead><tr><th scope="col">Product</th>{b.cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
              <tbody>
                {b.rows.map((r) => (
                  <tr key={r.name} className={r.us ? "us" : undefined}>
                    <th scope="row" style={{ fontFamily: "var(--font-body)", fontSize: 15, textTransform: "none", letterSpacing: 0, color: "var(--ink)", fontWeight: 600 }}>{r.name}</th>
                    {r.cells.map((c, i) => <td key={i} data-label={b.cols[i]}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="lead measure" style={{ marginTop: 24 }} data-reveal=""><span className="hl">What I took from this:</span> {b.takeaway}</p>
          <p className="caption">Sources: {b.sources.map((s, i) => <span key={s.href}>{i > 0 && " · "}<a className="link" href={s.href} target="_blank" rel="noreferrer">{s.label}</a></span>)}</p>
        </section>
      );

    case "insights":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 24 }}>
            <span className="label">Method: {b.method}</span>
          </div>
          <div className="insights">
            {b.items.map((it) => (
              <div key={it.insight} className="insight" data-reveal="">
                <h4>{it.insight}</h4>
                <p className="caption" style={{ margin: 0 }}>{it.evidence}</p>
                <p className="so" style={{ margin: 0 }}>{it.so}</p>
              </div>
            ))}
          </div>
          {b.quote && <blockquote className="quote quote-card" style={{ margin: "40px 0 0" }} data-reveal="">&ldquo;{b.quote.text}&rdquo;<footer className="caption" style={{ fontStyle: "normal", marginTop: 8 }}>{b.quote.by}</footer></blockquote>}
        </section>
      );

    case "sticky":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          <StickyStory steps={b.steps} />
        </section>
      );

    case "decisions":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          <div className="steps">
            {b.items.map((d, n) => (
              <article key={d.title} className="decision" data-reveal="">
                <span className="label">Decision {n + 1}</span>
                <h3>{d.title}</h3>
                <div className="decision-grid">
                  <div>
                    <span className="label">The problem</span>
                    <p>{d.problem}</p>
                    <span className="label">Options</span>
                    <ol>{d.options.map((o, i) => <li key={o} className={i === d.chose ? "chosen" : undefined}>{o}{i === d.chose && <span className="chosen-tag">Chosen</span>}</li>)}</ol>
                  </div>
                  <div>
                    <span className="label">Why</span>
                    <p>{d.why}</p>
                    <span className="label">Result</span>
                    <p style={{ margin: 0 }}>{d.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      );

    case "gallery":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          {b.intro && <p className="measure">{b.intro}</p>}
          <Gallery images={b.images} cols={b.cols} />
        </section>
      );

    case "figure":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          {b.body?.map((t) => <p key={t} className="measure">{t}</p>)}
          <figure className="figure" style={{ position: "relative", marginTop: 24 }} data-reveal="clip">
            <div className="frame">
              {b.frame && <div className="browser-bar" aria-hidden="true"><i /><i /><i /></div>}
              <Image src={b.img.src} alt={b.img.alt} width={b.img.w} height={b.img.h} sizes="(min-width: 1200px) 1100px, 100vw" />
            </div>
          </figure>
        </section>
      );

    case "constraints":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          {b.intro && <p className="measure" data-reveal="">{b.intro}</p>}
          <div className="constraints" style={{ marginTop: 24 }}>
            {b.items.map((c) => (
              <div key={c.wall} className="constraint" data-reveal="">
                <span className="label">What went wrong</span>
                <p className="wall">{c.wall}</p>
                <span className="label" style={{ color: p.accent }}>What I changed</span>
                <p style={{ margin: "6px 0 0" }}>{c.response}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case "diagram":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          {b.body?.map((t) => <p key={t} className="measure" data-reveal="">{t}</p>)}
          <div style={{ marginTop: 24 }} data-reveal="">
            {b.variant === "who-decides" && <WhoDecides accent={p.accent} />}
            {b.variant === "two-brains" && <TwoBrains accent={p.accent} />}
            {b.variant === "trust" && <Trust accent={p.accent} />}
          </div>
        </section>
      );

    case "scrollframe":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          {b.body?.map((t) => <p key={t} className="measure">{t}</p>)}
          <div className="scroll-frame" tabIndex={0} role="region" aria-label={`${b.img.alt} (scrollable)`} style={{ marginTop: 24 }}>
            <Image src={b.img.src} alt={b.img.alt} width={b.img.w} height={b.img.h} sizes="(min-width: 1200px) 1100px, 100vw" />
          </div>
          <div className="scroll-hint"><span className="caption">Scroll inside the frame to see the whole page</span><a className="caption link" href={b.img.src} target="_blank" rel="noreferrer">Open full size ↗</a></div>
        </section>
      );

    case "personas":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          {b.body?.map((t) => <p key={t} className="measure">{t}</p>)}
          <div style={{ marginTop: 24 }}><PersonaSwitcher /></div>
        </section>
      );

    case "proof":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          <div className="proof" data-reveal="">
            <div><span className="label">Works</span><ul>{b.proven.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div><span className="label">Not tested yet</span><ul>{b.notProven.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div><span className="label" style={{ color: "var(--pencil)" }}>Next</span><ul>{b.next.map((x) => <li key={x}>{x}</li>)}</ul></div>
          </div>
        </section>
      );

    case "goals":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          <div className="goals" data-reveal="">
            <div><span className="label">What people need</span><ul>{b.user.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div><span className="label">What the product needs</span><ul>{b.product.map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="goals-success"><span className="label">How I&apos;d know it works</span><ul>{b.success.map((x) => <li key={x}>{x}</li>)}</ul></div>
          </div>
        </section>
      );

    case "flow":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          {b.body?.map((t) => <p key={t} className="measure" data-reveal="">{t}</p>)}
          <ol className="user-flow" data-reveal="">
            {b.steps.map((st, i) => (
              <li key={st.label} className={st.branch ? "branch" : undefined}>
                <span className="uf-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="uf-label">{st.label}</span>
                {st.note && <span className="caption uf-note">{st.note}</span>}
              </li>
            ))}
          </ol>
        </section>
      );

    case "explorations":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          {b.intro && <p className="measure" data-reveal="">{b.intro}</p>}
          <div className="explorations">
            {b.items.map((x) => (
              <div key={x.idea} className={`exploration v-${x.verdict.toLowerCase()}`} data-reveal="">
                <span className="verdict">{x.verdict}</span>
                <h4>{x.idea}</h4>
                <p className="caption" style={{ margin: 0 }}>{x.why}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case "system":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          {b.body?.map((t) => <p key={t} className="measure" data-reveal="">{t}</p>)}
          <div className="system" data-reveal="">
            <div>
              <span className="label">Colour</span>
              <div className="swatches">
                {b.colors.map((c) => (
                  <div key={c.hex} className="swatch"><span style={{ background: c.hex }} /><strong>{c.name}</strong><code>{c.hex}</code></div>
                ))}
              </div>
            </div>
            <div>
              <span className="label">Type</span>
              <div className="type-specimens">
                {b.fonts.map((f) => (
                  <div key={f.name} className="specimen">
                    <span className="specimen-aa" style={{ fontFamily: specimenFamily[f.name] ?? f.family }}>Aa</span>
                    <span><strong>{f.name}</strong><br /><span className="caption">{f.role}</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ul className="system-notes">{b.notes.map((n) => <li key={n} data-reveal="">{n}</li>)}</ul>
        </section>
      );

    case "features":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          <div className="features">
            {b.items.map((f, i) => (
              <article key={f.title} className={`feature-row${i % 2 ? " flip" : ""}`} data-reveal="">
                <div className="figure"><div className="frame">
                  <div className="browser-bar" aria-hidden="true"><i /><i /><i /></div>
                  <Image src={f.img.src} alt={f.img.alt} width={f.img.w} height={f.img.h} sizes="(min-width: 1024px) 55vw, 100vw" />
                </div></div>
                <div>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ margin: "6px 0 12px" }}>{f.title}</h3>
                  <p>{f.what}</p>
                  <dl className="feature-dl">
                    <dt>The problem</dt><dd>{f.problem}</dd>
                    <dt>How it works</dt><dd>{f.how}</dd>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>
      );

    case "oio":
      return (
        <section id={b.id} className="block">
          <Head kicker={b.kicker} heading={b.heading} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 24 }}>
            <span className="label">Method: {b.method}</span>
          </div>
          <div className="oio">
            {b.items.map((x) => (
              <div key={x.observation} className="oio-row" data-reveal="">
                <div><span className="label">I noticed</span><p>{x.observation}</p></div>
                <div><span className="label">Which means</span><p>{x.insight}</p></div>
                <div><span className="label" style={{ color: p.accent }}>So I could</span><p className="so">{x.opportunity}</p></div>
              </div>
            ))}
          </div>
        </section>
      );

    case "reflection":
      return (
        <section id={b.id} className="block reflection">
          <Head kicker={b.kicker} heading={b.heading} />
          <ol>{b.items.map((x) => <li key={x} data-reveal=""><span>{x}</span></li>)}</ol>
        </section>
      );
  }
}
