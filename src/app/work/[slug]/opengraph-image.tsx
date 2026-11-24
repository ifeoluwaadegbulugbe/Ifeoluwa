import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/projects";
import { swatch } from "@/components/Swatches";
import { loadGoogleFont, publicImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Case study preview";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// The screen shown on each project's preview card.
const shots: Record<string, string> = {
  pricedrop: "/work/pricedrop/04-assistant-deal-check.png",
  looklab: "/work/looklab/home.png",
  margin: "/work/margin/03-ws-wrong.jpg",
  "mira-moda": "/work/mira-moda/hero.jpg",
  swiftpay: "/work/swiftpay/hero.jpg",
  verdara: "/work/verdara/hero.jpg",
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug)!;
  const s = swatch[slug];
  const shot = await publicImage(shots[slug]);
  const serif = await loadGoogleFont("Fraunces", 400, p.title);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: s.bg, color: s.ink, padding: 64, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 470, paddingRight: 32 }}>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 2, textTransform: "uppercase", opacity: 0.85 }}>
            Case study · No. {p.number}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 96, lineHeight: 1, fontFamily: serif ? "Fraunces" : "serif", letterSpacing: -3 }}>{p.title}</div>
            <div style={{ display: "flex", fontSize: 26, lineHeight: 1.35, marginTop: 24, opacity: 0.92 }}>{p.oneLiner}</div>
          </div>
          <div style={{ display: "flex", fontSize: 22, opacity: 0.85 }}>Ifeoluwa Adegbulugbe · Product designer</div>
        </div>
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", width: 600, background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.35)" }}>
            <div style={{ display: "flex", height: 26, background: "#f1ede4", alignItems: "center", paddingLeft: 12 }}>
              <div style={{ width: 9, height: 9, borderRadius: 9, background: "#d4ccbd", marginRight: 6 }} />
              <div style={{ width: 9, height: 9, borderRadius: 9, background: "#d4ccbd", marginRight: 6 }} />
              <div style={{ width: 9, height: 9, borderRadius: 9, background: "#d4ccbd" }} />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shot} alt="" width={600} style={{ width: 600, objectFit: "contain" }} />
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: serif ? [{ name: "Fraunces", data: serif, weight: 400, style: "normal" }] : undefined },
  );
}
