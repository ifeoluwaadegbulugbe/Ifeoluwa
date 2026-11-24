"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import LogoMark from "./LogoMark";

const links = [
  { href: "/work", label: "Work" },
  { href: "/experiments", label: "Experiments" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Masthead() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 80 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className={`masthead${hidden && !open ? " hidden" : ""}`} onFocusCapture={() => setHidden(false)}>
      <div className="wrap masthead-inner">
        <Link href="/" className="wordmark" aria-label="Ifeoluwa Adegbulugbe, home">
          <LogoMark className="logo-mark" />
          <span>Ifeoluwa<span style={{ color: "var(--pink-primary)" }}>.</span></span>
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="draw-link" aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="contact-pill" aria-current={isActive("/contact") ? "page" : undefined}>
            Contact <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </nav>
        <button ref={btnRef} className="menu-btn" aria-expanded={open} aria-controls="menu-sheet" onClick={() => setOpen(true)}>
          Contents
        </button>
      </div>
      {open && createPortal(
        <div id="menu-sheet" className="menu-sheet" role="dialog" aria-modal="true" aria-label="Site contents">
          <div className="menu-top">
            <span className="label">Contents</span>
            <button className="menu-btn" style={{ display: "inline-flex" }} onClick={() => { setOpen(false); btnRef.current?.focus(); }} autoFocus>
              Close
            </button>
          </div>
          <nav aria-label="Mobile">
            {[{ href: "/", label: "Home" }, ...links, { href: "/contact", label: "Contact" }].map((l, i) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ animationDelay: `${i * 40}ms` }} aria-current={pathname === l.href ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>,
        document.body,
      )}
    </header>
  );
}
