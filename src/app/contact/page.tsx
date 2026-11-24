import type { Metadata } from "next";
import CopyEmail from "@/components/CopyEmail";
import ContactForm from "@/components/ContactForm";
import { SwatchStrip } from "@/components/Swatches";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about product design roles and projects.",
};

export default function ContactPage() {
  return (
    <div className="wrap contact-hero">
      <div className="contact-grid">
        <div>
          <p className="label">Contact</p>
          <h1 className="display-xl" style={{ margin: "12px 0 24px" }}>Say hello.</h1>
          <p className="lead measure">I&apos;m available now for product design roles, whether that&apos;s remote, hybrid or somewhere new. Got a project, a role or just a question? I&apos;d love to hear about it.</p>
          <div style={{ marginTop: 40 }}><CopyEmail variant="big" /></div>
          <div className="chip-row" style={{ marginTop: 32 }}>
            <a className="chip chip-filter" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="chip chip-filter" href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            {site.cv && <a className="chip chip-filter" href={site.cv} download>CV ↓</a>}
          </div>
          <p className="caption" style={{ marginTop: 16 }}>{site.location}</p>
        </div>
        <SwatchStrip className="contact-strip" />
      </div>

      <section className="form-panel" aria-labelledby="form-title">
        <h2 id="form-title">Or leave a message</h2>
        <div style={{ height: 24 }} />
        <ContactForm />
      </section>
    </div>
  );
}
