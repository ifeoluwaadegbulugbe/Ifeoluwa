import Image from "next/image";
import type { Project } from "@/content/projects";
import { PriceTicker } from "./Interactive";

/** Each project gets its own cover treatment, in its own palette. */
export function CoverVisual({ p }: { p: Project }) {
  switch (p.cover) {
    case "price":
      return <PriceTicker />;

    case "fan":
    case "lookbook":
      return (
        <div className="fan">
          {p.coverImages.slice(0, 3).map((img) => (
            <div key={img.src} className="fcard" style={{ aspectRatio: `${img.w} / ${img.h}` }}><Image src={img.src} alt={img.alt} fill sizes="30vw" priority style={{ objectFit: "contain" }} /></div>
          ))}
          {p.cover === "fan" && <span className="badge" aria-hidden="true">Try it on</span>}
        </div>
      );

    case "notebook":
      return (
        <div className="notebook" role="img" aria-label="A notebook page: 2(x + 3) = 14, then 2x + 6 = 14 marked correct, and Scribble asks: what's the opposite of adding 6?">
          <div className="bubble"><b>Scribble</b>What&apos;s the opposite of adding 6?</div>
          <div className="eq" style={{ animationDelay: "0.3s" }}><span>2(x + 3) = 14</span></div>
          <div className="eq" style={{ animationDelay: "1.1s" }}><span>2x + 6 = 14</span><span className="ok">✓</span></div>
          <div className="eq" style={{ animationDelay: "1.9s", color: "#9a92b5" }}><span>2x = …</span></div>
          <div className="eq" style={{ animationDelay: "2s" }}><span>&nbsp;</span></div>
        </div>
      );

    case "transfer":
      return (
        <div className="transfer" role="img" aria-label="A payment travels from Lagos to London and lands as a Received notification">
          <svg viewBox="0 0 600 320" aria-hidden="true">
            <circle cx="80" cy="230" r="6" className="dot" />
            <circle cx="520" cy="80" r="6" className="dot" />
            <text x="64" y="262" fill="#f5efe4" fontSize="14">Lagos</text>
            <text x="490" y="64" fill="#f5efe4" fontSize="14">London</text>
            <path className="path" d="M80 230 C 200 40, 380 40, 520 80" />
            <circle r="9" fill="#f5e6c8">
              <animateMotion dur="2s" fill="freeze" path="M80 230 C 200 40, 380 40, 520 80" />
            </circle>
          </svg>
          <div className="toast"><span className="tick">✓</span><span><strong>Received</strong><br />£250.00 · 2.8 s</span></div>
        </div>
      );

    case "botanical":
      return (
        <div style={{ position: "relative" }}>
          <div style={{ position: "relative", aspectRatio: `${p.coverImages[0].w} / ${p.coverImages[0].h}`, overflow: "hidden", borderRadius: 18 }}>
            <Image src={p.coverImages[0].src} alt={p.coverImages[0].alt} fill sizes="55vw" priority style={{ objectFit: "contain" }} />
          </div>
        </div>
      );
  }
}
