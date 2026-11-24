"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Img } from "@/content/projects";
import Lightbox from "../Lightbox";

/* ---------- Scroll progress + outline ---------- */
export function CaseChrome({ sections }: { sections: { id: string; label: string }[] }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string>(sections[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, [sections]);

  return (
    <>
      <div ref={barRef} className="progress" aria-hidden="true" />
      <nav className="outline" aria-label="Case study sections">
        <span className="label">Contents</span>
        <ol>
          {sections.map((s) => (
            <li key={s.id}><a href={`#${s.id}`} className={active === s.id ? "active" : ""} aria-current={active === s.id ? "true" : undefined}>{s.label}</a></li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/* ---------- Sticky story ---------- */
export function StickyStory({ steps }: { steps: { title: string; body: string; img: Img }[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i)); }),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <div className="sticky-story">
      <div className="sticky-media" aria-hidden="true">
        <div className="figure"><div className="frame">
          {steps.map((s, i) => (
            <Image key={s.img.src} src={s.img.src} alt="" fill sizes="55vw" className={i === active ? "active" : ""} style={{ objectFit: "contain" }} />
          ))}
        </div></div>
        <p className="label" style={{ marginTop: 12 }}>Step {active + 1} of {steps.length}</p>
      </div>
      <div className="sticky-steps">
        {steps.map((s, i) => (
          <div key={s.title} className={`step${i === active ? " active" : ""}`} data-i={i} ref={(el) => { refs.current[i] = el; }}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <h3 style={{ margin: "8px 0 12px" }}>{s.title}</h3>
            <p>{s.body}</p>
            <div className="step-img figure"><div className="frame"><Image src={s.img.src} alt={s.img.alt} width={s.img.w} height={s.img.h} sizes="100vw" /></div></div>
            <span className="sr-only">{s.img.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Gallery with lightbox ---------- */
export function Gallery({ images, cols }: { images: Img[]; cols: 2 | 3 }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className={`gallery c${cols}`}>
        {images.map((img, i) => (
          <figure key={img.src} className="figure" data-reveal="">
            <button onClick={() => setOpen(i)} aria-label={`Open larger: ${img.alt}`}>
              <div className="frame gallery-frame">
                <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes={cols === 3 ? "33vw" : "50vw"} />
              </div>
            </button>
            {img.caption && <figcaption className="caption">{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {open !== null && <Lightbox items={images} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </>
  );
}

/* ---------- Price ticker cover (PriceDrop) ---------- */
export function PriceTicker() {
  const [price, setPrice] = useState(94.99);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t0 = setTimeout(() => { setPrice(69.99); setDone(true); }, 0);
      return () => clearTimeout(t0);
    }
    let p = 94.99;
    const t = setInterval(() => {
      p = Math.max(69.99, +(p - 1.37).toFixed(2));
      setPrice(p);
      if (p <= 69.99) { clearInterval(t); setTimeout(() => setDone(true), 300); }
    }, 45);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="ticker" aria-label="Animation: a price falls from $94.99 to $69.99 and a verdict appears saying it's below your $75 target">
      <div className="label" style={{ color: "#64748b" }}>Sony MDR-7506 · tracking 5 retailers</div>
      <div className="price" aria-hidden="true">${price.toFixed(2)}</div>
      <div className="target"><span>your target $75</span></div>
      <div className={`verdict${done ? " show" : ""}`} aria-hidden={!done}>
        <strong>Good deal.</strong> It&apos;s under your $75 target, from a shop you&apos;re happy with, and in stock.
        <div><span className="ask">Review and pay →</span></div>
      </div>
    </div>
  );
}

/* ---------- Persona switcher (SwiftPay) ---------- */
const personas = [
  { id: "freelancers", label: "Freelancers", head: "Get paid by clients abroad, without the 3-day wait.", points: ["Invoice in USD, GBP or EUR", "Hold balances in multiple currencies", "Transfer to your local account when the rate suits you"] },
  { id: "individuals", label: "Individuals", head: "Send money home in seconds.", points: ["Instant transfers to friends and family", "Zero hidden fees, shown like a receipt", "Spend in 150+ currencies"] },
  { id: "businesses", label: "Businesses", head: "Pay suppliers and teams across borders.", points: ["Bulk payouts", "Approval workflows", "Integrations with the tools you already use"] },
];

export function PersonaSwitcher() {
  const [i, setI] = useState(1);
  const p = personas[i];
  return (
    <div>
      <div className="persona-tabs" role="tablist" aria-label="Audience">
        {personas.map((x, n) => (
          <button key={x.id} role="tab" id={`tab-${x.id}`} aria-selected={n === i} aria-controls={`panel-${x.id}`} tabIndex={n === i ? 0 : -1}
            onClick={() => setI(n)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") setI((i + 1) % personas.length);
              if (e.key === "ArrowLeft") setI((i - 1 + personas.length) % personas.length);
            }}>
            {x.label}
          </button>
        ))}
      </div>
      <div key={p.id} className="persona-panel" role="tabpanel" id={`panel-${p.id}`} aria-labelledby={`tab-${p.id}`}>
        <h3>{p.head}</h3>
        <ul style={{ margin: 0, paddingLeft: "1.1em" }}>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
      </div>
    </div>
  );
}
