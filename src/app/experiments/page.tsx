import type { Metadata } from "next";
import ExperimentsGallery from "@/components/ExperimentsGallery";

export const metadata: Metadata = {
  title: "Experiments",
  description: "UI studies, interaction experiments and templates.",
};

export default function ExperimentsPage() {
  return (
    <div className="wrap" style={{ paddingTop: 64 }}>
      <p className="label">The sketchbook drawer</p>
      <h1 className="display-xl" style={{ marginTop: 12 }}>Experiments.</h1>
      <p className="lead" style={{ marginTop: 16, maxWidth: "44ch" }}>
        Unfinished on purpose. Studies, explorations and things I made to learn something. Each one says what I was testing.
      </p>
      <ExperimentsGallery />
    </div>
  );
}
