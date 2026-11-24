"use client";

import { useState } from "react";
import { site } from "@/content/site";

export default function CopyEmail({ variant = "button" }: { variant?: "button" | "footer" | "big" | "band" }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  const live = (
    <span aria-live="polite" className="sr-only">{copied ? "Email address copied" : ""}</span>
  );

  if (variant === "footer") {
    return (
      <div>
        <a className="lead draw-link" href={`mailto:${site.email}`} style={{ wordBreak: "break-all" }}>{site.email}</a>
        <div style={{ marginTop: 12 }}>
          <button className="chip chip-filter" onClick={copy}>{copied ? "Copied ✓" : "Copy email"}</button>
        </div>
        {live}
      </div>
    );
  }

  if (variant === "big") {
    return (
      <div>
        <a className="email-big hl" href={`mailto:${site.email}`}>{site.email.split("@")[0]}<wbr />@{site.email.split("@")[1]}</a>
        <div className="btn-row" style={{ marginTop: 24 }}>
          <button className="btn btn-primary" onClick={copy}>{copied ? "Copied ✓" : "Copy email"}</button>
          <a className="btn btn-secondary" href={`mailto:${site.email}`}>Open mail app <span className="arrow" aria-hidden="true">→</span></a>
        </div>
        {live}
      </div>
    );
  }

  return (
    <>
      <button className={`btn ${variant === "band" ? "btn-primary" : "btn-secondary"}`} onClick={copy}>
        {copied ? "Copied ✓" : site.email}
        {!copied && <span aria-hidden="true">⧉</span>}
      </button>
      {live}
    </>
  );
}
