import Link from "next/link";
import { site } from "@/content/site";
import CopyEmail from "./CopyEmail";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="label">Say hello</p>
            <CopyEmail variant="footer" />
          </div>
          <div>
            <p className="label">Pages</p>
            <ul>
              <li><Link className="draw-link" href="/work">Work</Link></li>
              <li><Link className="draw-link" href="/experiments">Experiments</Link></li>
              <li><Link className="draw-link" href="/about">About</Link></li>
              <li><Link className="draw-link" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="label">Elsewhere</p>
            <ul>
              <li><a className="draw-link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
              <li><a className="draw-link" href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
            </ul>
          </div>
          <div>
            <p className="label">Resume</p>
            <ul>
              <li><Link className="draw-link" href="/resume">Read online</Link></li>
              {site.cv && <li><a className="draw-link" href={site.cv} download>Download CV (PDF) ↓</a></li>}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="caption">© 2026 Ifeoluwa Adegbulugbe</span>
          <a className="caption draw-link" href="#main">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
