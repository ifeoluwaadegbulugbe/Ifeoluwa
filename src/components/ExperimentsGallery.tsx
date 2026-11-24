"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { experiments } from "@/content/site";
import Lightbox from "./Lightbox";

const mats = ["#cbb9f2", "#a8d8be", "#f2d65c", "#f4b8a8", "#b9d4f2"];

const kinds = ["All", ...Array.from(new Set(experiments.map((e) => e.kind)))];

export default function ExperimentsGallery() {
  const [kind, setKind] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const list = experiments.filter((e) => kind === "All" || e.kind === kind);
  const withImages = list.filter((e) => e.src);
  const lightItems = withImages.map((e) => ({ src: e.src!, alt: e.title, caption: `${e.title}: ${e.learned}` }));

  useEffect(() => {
    const item = new URLSearchParams(window.location.search).get("item");
    if (!item) return;
    const n = experiments.filter((e) => e.src).findIndex((e) => e.slug === item);
    if (n >= 0) {
      const t = setTimeout(() => setOpen(n), 0);
      return () => clearTimeout(t);
    }
    document.getElementById(`exp-${item}`)?.scrollIntoView();
  }, []);

  function setOpenAndUrl(n: number | null) {
    setOpen(n);
    const url = new URL(window.location.href);
    if (n === null) url.searchParams.delete("item");
    else url.searchParams.set("item", withImages[n].slug);
    window.history.replaceState(null, "", url);
  }

  const count = (k: string) => (k === "All" ? experiments.length : experiments.filter((e) => e.kind === k).length);

  return (
    <>
      <div className="chip-row" role="group" aria-label="Filter experiments" style={{ margin: "32px 0 40px" }}>
        {kinds.map((k) => (
          <button key={k} className="chip chip-filter" aria-pressed={kind === k} onClick={() => setKind(k)}>{k} <span style={{ opacity: 0.6 }}>{count(k)}</span></button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">Showing {list.length} experiments</p>
      <div className="masonry">
        {list.map((e, n) => (
          <article key={e.slug} id={`exp-${e.slug}`} className="exp fade-item">
            {e.src ? (
              <button onClick={() => setOpenAndUrl(withImages.indexOf(e))} aria-label={`Open ${e.title}`}>
                <div className="exp-mat" style={{ background: mats[n % mats.length] }}>
                  <div className="exp-media">
                    <div className="exp-frame">
                      <Image src={e.src} alt={e.title} width={e.w!} height={e.h!} sizes="(min-width: 1100px) 33vw, (min-width: 700px) 50vw, 100vw" />
                    </div>
                    <div className="exp-note">Testing: {e.testing}</div>
                  </div>
                </div>
              </button>
            ) : (
              <div className="exp-placeholder">
                <div>
                  <strong>{e.title}</strong>
                  <p className="caption" style={{ marginTop: 8 }}>Export a frame from Figma to fill this card.</p>
                </div>
              </div>
            )}
            <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", gap: 8 }}>
              <span className="label">{e.kind}</span><span className="label">{e.date}</span>
            </div>
            <h3 style={{ fontSize: "1.4rem", margin: "4px 0 6px" }}>{e.title}</h3>
            <p className="caption" style={{ margin: 0 }}><strong>What I learned:</strong> {e.learned}</p>
            {e.figma && <a className="caption link" href={e.figma} target="_blank" rel="noreferrer">Figma file ↗</a>}
          </article>
        ))}
      </div>
      {open !== null && <Lightbox items={lightItems} index={open} onIndex={setOpenAndUrl} onClose={() => setOpenAndUrl(null)} />}
    </>
  );
}
