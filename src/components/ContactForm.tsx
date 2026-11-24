"use client";

import { useState } from "react";
import { site } from "@/content/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("company")) return; // honeypot
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    if (!name || !email || !message) { setError("Please fill in your name, email and message."); return; }
    setError(null);
    const subject = encodeURIComponent(`[${f.get("topic")}] from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name} · ${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) return <p className="form-msg" role="status">Your mail app should have opened with the message ready. If not, email me at {site.email}.</p>;

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field">
        <label htmlFor="topic">What&apos;s it about?</label>
        <select id="topic" name="topic" defaultValue="Role"><option>Role</option><option>Project</option><option>Just saying hi</option></select>
      </div>
      <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} required /></div>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />
      {error && <p role="alert" style={{ color: "var(--error)", margin: 0 }}>⚠ {error}</p>}
      <div><button className="btn btn-primary" type="submit">Send <span className="arrow" aria-hidden="true">→</span></button></div>
    </form>
  );
}
