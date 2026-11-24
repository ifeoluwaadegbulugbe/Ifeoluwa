import { ImageResponse } from "next/og";
import { swatch } from "@/components/Swatches";
import { loadGoogleFont } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ifeoluwa Adegbulugbe, product designer";

const headline = "I design apps and websites that just make sense.";

export default async function Image() {
  const serif = await loadGoogleFont("Fraunces", 400, "Ifeoluwa Adegbulugbe" + headline);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "#141414", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 22, letterSpacing: 2, textTransform: "uppercase", color: "#5e5c57" }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#22a35a", marginRight: 12 }} />
          Product designer · Lagos
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, lineHeight: 1, fontFamily: serif ? "Fraunces" : "serif", letterSpacing: -2 }}>
            Ifeoluwa Adegbulugbe<span style={{ color: "#F25CA2" }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 40, lineHeight: 1.2, marginTop: 20, fontFamily: serif ? "Fraunces" : "serif", color: "#3a3936" }}>{headline}</div>
        </div>
        <div style={{ display: "flex", height: 72 }}>
          {Object.entries(swatch).map(([k, s]) => (
            <div key={k} style={{ flex: 1, background: s.bg, borderRadius: 14, marginRight: 10 }} />
          ))}
        </div>
      </div>
    ),
    { ...size, fonts: serif ? [{ name: "Fraunces", data: serif, weight: 400, style: "normal" }] : undefined },
  );
}
