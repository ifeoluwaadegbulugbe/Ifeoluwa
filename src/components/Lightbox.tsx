"use client";

import { useEffect, useRef } from "react";

export type LightItem = { src: string; alt: string; caption?: string };

export default function Lightbox({ items, index, onClose, onIndex }: { items: LightItem[]; index: number; onClose: () => void; onIndex: (i: number) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      prevFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
      if (e.key === "Tab") {
        const f = Array.from(document.querySelectorAll<HTMLElement>(".lightbox button"));
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndex]);

  // Touch swipe
  const startX = useRef<number | null>(null);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer"
      onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (startX.current === null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > 50) onIndex((index + (dx < 0 ? 1 : -1) + items.length) % items.length);
        startX.current = null;
      }}>
      <div className="lightbox-top">
        <span className="label" style={{ color: "#b8b1a4" }} aria-live="polite">{index + 1} of {items.length}</span>
        <button ref={closeRef} onClick={onClose}>Close ✕</button>
      </div>
      <div className="lightbox-img" onClick={onClose}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={item.src} src={item.src} alt={item.alt} onClick={(e) => e.stopPropagation()} />
      </div>
      <div className="lightbox-bottom">
        <span>{item.caption ?? item.alt}</span>
        {items.length > 1 && (
          <span style={{ display: "flex", gap: 8 }}>
            <button onClick={() => onIndex((index - 1 + items.length) % items.length)} aria-label="Previous image">← Prev</button>
            <button onClick={() => onIndex((index + 1) % items.length)} aria-label="Next image">Next →</button>
          </span>
        )}
      </div>
    </div>
  );
}
