import type { Project } from "@/content/projects";

export function ProjectChips({ p }: { p: Project }) {
  return (
    <span className="chip-row">
      {p.status === "Live" ? <span className="chip chip-live">Live</span> : <span className="chip chip-concept">Concept</span>}
      {p.event && <span className="chip">⚡ {p.event}</span>}
    </span>
  );
}

export function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}
