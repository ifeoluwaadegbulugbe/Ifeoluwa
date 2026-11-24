"use client";

import { useEffect, useState } from "react";
import { music } from "@/content/site";

export function RotatingLabel({ items }: { items: string[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % items.length), 3000);
    return () => clearInterval(t);
  }, [paused, items.length]);
  return (
    <span onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <span className="rotating hl" aria-hidden="true"><span key={i}>{items[i]}</span></span>
      <span className="sr-only">{items.join(", ")}</span>
    </span>
  );
}

export function MusicPlayer() {
  const [i, setI] = useState(0);
  const [embed, setEmbed] = useState(false);
  const t = music.tracks[i];

  return (
    <div className="player">
      <div className="record-wrap" aria-hidden="true">
        <div className={`record${embed ? " spin" : ""}`} />
        <div className="sleeve" style={{ padding: 0, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={t.id} src={t.art} alt="" width={260} height={260} style={{ width: "100%", height: "100%", objectFit: "cover", animation: "fadein 400ms" }} />
        </div>
      </div>
      <div>
        <p className="label">Now spinning</p>
        <h3 style={{ margin: "6px 0 16px" }}>{t.title}</h3>
        <ul className="track-list">
          {music.tracks.map((tr, n) => (
            <li key={tr.id}>
              <button aria-pressed={n === i} onClick={() => { setI(n); setEmbed(false); }}>
                <span>{String(n + 1).padStart(2, "0")} · {tr.title}</span>
                <span aria-hidden="true">{n === i ? "●" : ""}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="btn-row" style={{ marginTop: 16 }}>
          {!embed && <button className="btn btn-primary" onClick={() => setEmbed(true)}>▶ Load player</button>}
          <a className="btn btn-secondary" href={`https://open.spotify.com/track/${t.id}`} target="_blank" rel="noreferrer">Open in Spotify ↗</a>
        </div>
        {embed && (
          <iframe key={t.id} title={`Spotify player: ${t.title}`} src={`https://open.spotify.com/embed/track/${t.id}`} width="100%" height="152" style={{ border: 0, borderRadius: 12, marginTop: 16 }} allow="encrypted-media" loading="lazy" />
        )}
      </div>
    </div>
  );
}

export function FunFacts({ facts }: { facts: string[] }) {
  const [i, setI] = useState(0);
  return (
    <div className="hobby" style={{ maxWidth: 520, transform: "rotate(-1deg)" }}>
      <p className="label">Fun fact {i + 1} of {facts.length}</p>
      <p className="lead" aria-live="polite" style={{ margin: "8px 0 16px" }}>{facts[i]}</p>
      <button className="chip chip-filter" onClick={() => setI((n) => (n + 1) % facts.length)}>Shuffle ↻</button>
    </div>
  );
}
