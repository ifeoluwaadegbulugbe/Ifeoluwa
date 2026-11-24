import type { Metadata } from "next";
import Link from "next/link";
import { FunFacts, MusicPlayer, RotatingLabel } from "@/components/AboutBits";
import { Arrow } from "@/components/bits";
import { SwatchStrip } from "@/components/Swatches";
import { currently, funFacts, hobbies, inspirations, littleWorld, music, timeline } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "The person behind the work: music, hobbies, inspirations and how I design.",
};

const hobbyColors = ["var(--butter)", "var(--sky)", "var(--pink)", "var(--mint)"];

export default function AboutPage() {
  return (
    <div className="wrap">
      {/* Intro */}
      <section className="about-hero">
        <div>
          <p className="label">About</p>
          <h1 className="display-l" style={{ marginTop: 12 }}>Hi, I&apos;m Ifeoluwa.</h1>
          <p className="lead" style={{ marginTop: 24 }}>
            I design apps and websites. I also studied Computer Science, which makes me the designer who actually reads the developers&apos; group chat.
          </p>
          <p className="measure">
            I fell for design at 18, the day I realised a button can be obvious or wildly confusing, and someone gets to decide which. I&apos;ve been happily deciding ever since.
          </p>
          <p className="measure">
            Since then I&apos;ve designed payments for a Web3 startup, sat through interviews with 30+ developers, taught UI/UX to bootcamp students, and built a few products of my own just to see if I could. (I could. Mostly.)
          </p>
          <p style={{ marginTop: 24 }}>Currently obsessed with <RotatingLabel items={currently} /></p>
        </div>
        <div className="facts-panel">
          <SwatchStrip className="facts-strip" />
          <dl>
            <dt>Based in</dt><dd>Lagos, Nigeria</dd>
            <dt>Studied</dt><dd>Computer Science</dd>
            <dt>Good at</dt><dd>Research, UI, design systems</dd>
            <dt>Also</dt><dd>Builds the prototype</dd>
            <dt>Status</dt><dd>Available now</dd>
          </dl>
        </div>
      </section>

      {/* Music */}
      <section className="section" aria-labelledby="music">
        <div className="section-title"><h2 id="music">On repeat</h2></div>
        <MusicPlayer />
        <div className="artists" style={{ marginTop: 32 }}>
          {music.artists.map((a) => <span key={a} className="chip">{a}</span>)}
        </div>
      </section>

      {/* Hobbies */}
      <section className="section" aria-labelledby="hob">
        <div className="section-title"><h2 id="hob">Off the clock</h2></div>
        <div className="hobby-tiles">
          {hobbies.map((h, i) => (
            <div key={h.name} className="hobby-tile" style={{ background: hobbyColors[i % hobbyColors.length] }} data-reveal="">
              <span className="hobby-glyph" aria-hidden="true">{h.glyph}</span>
              <h3>{h.name}</h3>
              <p style={{ margin: 0 }}>{h.line}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section" aria-labelledby="journey">
        <div className="section-title"><h2 id="journey">How I got here</h2></div>
        <ol className="timeline">
          {timeline.map((t) => (
            <li key={t.when + t.what} data-reveal=""><span className="label">{t.when}</span><span>{t.what}</span></li>
          ))}
        </ol>
      </section>

      {/* Little world + inspirations */}
      <section className="section" aria-labelledby="world">
        <div className="section-title"><h2 id="world">Things I like</h2></div>
        <div className="shelf">
          {littleWorld.map((w) => (
            <div key={w.name} className="shelf-item" data-reveal="">
              <span className="label">{w.kind}</span>
              <h4 style={{ margin: "4px 0" }}>{w.href ? <a className="draw-link" href={w.href} target="_blank" rel="noreferrer">{w.name} ↗</a> : w.name}</h4>
              <p className="caption" style={{ margin: 0 }}>{w.why}</p>
            </div>
          ))}
          {inspirations.map((w) => (
            <div key={w.name} className="shelf-item" data-reveal="">
              <span className="label">Inspiration</span>
              <h4 style={{ margin: "4px 0" }}>{w.name}</h4>
              <p className="caption" style={{ margin: 0 }}>{w.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fun facts */}
      <section className="section" aria-labelledby="ff">
        <div className="section-title"><h2 id="ff">Fun facts</h2></div>
        <FunFacts facts={funFacts} />
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <h2 className="display-l">Want to make something together?</h2>
        <div className="btn-row" style={{ marginTop: 24, justifyContent: "center" }}>
          <Link href="/contact" className="btn btn-primary">Say hello <Arrow /></Link>
          <Link href="/work" className="btn btn-secondary">See my work</Link>
        </div>
      </section>
    </div>
  );
}
