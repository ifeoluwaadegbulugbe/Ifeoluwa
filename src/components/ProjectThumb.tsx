import Image from "next/image";

/**
 * Designed project thumbnails: the project's colour, a framed main screen,
 * a second screen overlapping it, and a hand-made sticker. Scales with its
 * container (container-query units), so one component works from 300px cards
 * to the full-width home features.
 */

type Shot = { src: string; w: number; h: number };
type Thumb = {
  bg: string;
  pattern: "dots" | "grid" | "lines" | "none";
  ink: string;
  main: Shot;
  second: Shot;
  sticker: string;
  stickerBg: string;
  stickerInk: string;
};

const thumbs: Record<string, Thumb> = {
  pricedrop: {
    bg: "#dfe7ff", pattern: "grid", ink: "#1d4ed8",
    main: { src: "/work/pricedrop/04-assistant-deal-check.png", w: 2160, h: 1440 },
    second: { src: "/work/pricedrop/08-price-details-ag-grid.png", w: 2160, h: 1440 },
    sticker: "$94 → $69", stickerBg: "#1d4ed8", stickerInk: "#fff",
  },
  looklab: {
    bg: "#efe6ff", pattern: "dots", ink: "#6d28d9",
    main: { src: "/work/looklab/home.png", w: 1440, h: 900 },
    second: { src: "/work/looklab/outfit.png", w: 1440, h: 900 },
    sticker: "try it on!", stickerBg: "#c6f06b", stickerInk: "#16140f",
  },
  margin: {
    bg: "#fdf1d6", pattern: "lines", ink: "#6d4bd8",
    main: { src: "/work/margin/03-ws-wrong.jpg", w: 1920, h: 1280 },
    second: { src: "/work/margin/09-rewards.jpg", w: 1920, h: 1280 },
    sticker: "2x + 6 = 14 ✓", stickerBg: "#6d4bd8", stickerInk: "#fff",
  },
  "mira-moda": {
    bg: "#650d17", pattern: "none", ink: "#fbefe9",
    main: { src: "/work/mira-moda/hero.jpg", w: 1440, h: 900 },
    second: { src: "/work/mira-moda/arrivals.jpg", w: 1440, h: 1230 },
    sticker: "brunch & beyond", stickerBg: "#fbefe9", stickerInk: "#650d17",
  },
  swiftpay: {
    bg: "#151515", pattern: "dots", ink: "#f5efe4",
    main: { src: "/work/swiftpay/hero.jpg", w: 1512, h: 945 },
    second: { src: "/work/swiftpay/personas.jpg", w: 1512, h: 1250 },
    sticker: "received ✓", stickerBg: "#16a34a", stickerInk: "#fff",
  },
  verdara: {
    bg: "#f6d9df", pattern: "none", ink: "#7a2d44",
    main: { src: "/work/verdara/hero.jpg", w: 1512, h: 945 },
    second: { src: "/work/verdara/products.jpg", w: 1512, h: 850 },
    sticker: "pure skin ✿", stickerBg: "#fffdf0", stickerInk: "#7a2d44",
  },
};

export default function ProjectThumb({ slug, title, priority = false, sizes = "(min-width: 1024px) 58vw, 100vw" }: { slug: string; title: string; priority?: boolean; sizes?: string }) {
  const t = thumbs[slug];
  if (!t) return null;
  return (
    <div className="pthumb" style={{ background: t.bg, ["--ink" as string]: t.ink }} role="img" aria-label={`${title}: screens from the project`}>
      <div className="pthumb-main">
        <div className="pthumb-bar" aria-hidden="true"><i /><i /><i /></div>
        <div className="pthumb-screen" style={{ aspectRatio: `${t.main.w} / ${t.main.h}` }}>
          <Image src={t.main.src} alt="" fill sizes={sizes} priority={priority} style={{ objectFit: "contain" }} />
        </div>
      </div>
      <div className="pthumb-second" style={{ aspectRatio: `${t.second.w} / ${t.second.h}`, width: t.second.h / t.second.w > 0.75 ? "28%" : "36%" }}>
        <Image src={t.second.src} alt="" fill sizes="30vw" style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}
