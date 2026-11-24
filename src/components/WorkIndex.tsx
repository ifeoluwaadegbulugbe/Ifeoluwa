"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { filters, projects } from "@/content/projects";
import { ProjectChips } from "./bits";
import ProjectThumb from "./ProjectThumb";

export default function WorkIndex() {
  const [filter, setFilter] = useState<string>("All");
  const [view, setView] = useState<"index" | "grid">("grid");
  const [hover, setHover] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const f = new URLSearchParams(window.location.search).get("f");
    if (f && (filters as readonly string[]).includes(f)) {
      const t = setTimeout(() => setFilter(f), 0);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (filter === "All") url.searchParams.delete("f");
    else url.searchParams.set("f", filter);
    window.history.replaceState(null, "", url);
  }, [filter]);

  // Cursor-following preview with a little lag.
  useEffect(() => {
    let raf = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onMove = (e: MouseEvent) => { target.current = { x: e.clientX + 24, y: e.clientY - 120 }; };
    const tick = () => {
      const k = reduce ? 1 : 0.15;
      pos.current.x += (target.current.x - pos.current.x) * k;
      pos.current.y += (target.current.y - pos.current.y) * k;
      if (previewRef.current) previewRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  const list = projects.filter((p) => filter === "All" || p.filters.includes(filter));
  const count = (f: string) => (f === "All" ? projects.length : projects.filter((p) => p.filters.includes(f)).length);

  return (
    <>
      <div className="work-controls">
        <div className="chip-row" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} className="chip chip-filter" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f} <span style={{ opacity: 0.6 }}>{count(f)}</span>
            </button>
          ))}
        </div>
        <div className="view-toggle" role="group" aria-label="Layout">
          <button aria-pressed={view === "grid"} onClick={() => setView("grid")}>▦ Previews</button>
          <button aria-pressed={view === "index"} onClick={() => setView("index")}>≡ List</button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">Showing {list.length} projects</p>

      <div style={{ marginTop: 40 }}>
        {view === "index" ? (
          <ol className="index-list" onMouseLeave={() => setHover(null)}>
            {list.map((p) => (
              <li key={p.slug} className="index-row fade-item">
                <Link href={`/work/${p.slug}`} onMouseEnter={() => setHover(p.slug)} onFocus={() => setHover(null)}>
                  <span className="num">{p.number}</span>
                  <span className="title">{p.title}</span>
                  <span className="one col-wide">{p.oneLiner}</span>
                  <span className="caption col-wide">{p.role.split(" (")[0]}</span>
                  <span className="col-wide"><ProjectChips p={p} /></span>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <div className="work-grid">
            {list.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="card fade-item span2">
                <div className="card-media">
                  <ProjectThumb slug={p.slug} title={p.title} sizes="(min-width: 860px) 50vw, 100vw" />
                </div>
                <span className="num" style={{ display: "block", marginTop: 16 }}>{p.number}</span>
                <h3 style={{ marginTop: 4 }}>{p.title}</h3>
                <p className="one">{p.oneLiner}</p>
                <ProjectChips p={p} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <div ref={previewRef} className={`index-preview${hover && view === "index" ? " show" : ""}`} aria-hidden="true">
        {projects.map((p) => (
          <div key={p.slug} className="cover-slide" style={{ opacity: hover === p.slug ? 1 : 0 }}>
            <ProjectThumb slug={p.slug} title={p.title} sizes="380px" />
          </div>
        ))}
      </div>
    </>
  );
}
