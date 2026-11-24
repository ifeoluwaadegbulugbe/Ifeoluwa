"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds `.in` to every [data-reveal] element once its top edge enters the viewport.
 * Uses a rect check on scroll rather than IntersectionObserver, so it also works in
 * throttled or background tabs. The query only covers not-yet-revealed elements. Each element reveals once.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const check = () => {
      const limit = window.innerHeight * 0.92;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)").forEach((el) => {
        if (el.getBoundingClientRect().top < limit) el.classList.add("in");
      });
    };
    check();
    const t = setTimeout(check, 300);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  return null;
}
