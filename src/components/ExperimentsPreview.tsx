"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Experiment } from "@/content/site";

const tints = ["#e9e6ff", "#dff1ff", "#fff3c4", "#ffe2da", "#e2f5ea", "#f3e3ff"];

/**
 * Home-page experiments: a list of titles beside one large preview.
 * Hover or focus a title to swap the preview. On phones it's a plain grid.
 */
export default function ExperimentsPreview({ items }: { items: Experiment[] }) {
  const list = items.filter((x) => x.src);
  const [active, setActive] = useState(0);
  const cur = list[active];

  return (
    <div className="xp-preview">
      <ol className="xp-list">
        {list.map((x, i) => (
          <li key={x.slug}>
            <Link
              href={`/experiments?item=${x.slug}`}
              className={i === active ? "active" : undefined}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="xp-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="xp-title">{x.title}</span>
              <span className="xp-kind">{x.kind}</span>
            </Link>
          </li>
        ))}
      </ol>

      <div className="xp-stage" style={{ background: tints[active % tints.length] }} aria-hidden="true">
        <div className="xp-frame" key={cur.slug}>
          <Image src={cur.src!} alt="" width={cur.w!} height={cur.h!} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <p className="xp-note"><strong>{cur.title}.</strong> {cur.testing}</p>
      </div>

      {/* Phones: simple grid of cards */}
      <div className="xp-grid">
        {list.slice(0, 6).map((x, i) => (
          <Link key={x.slug} href={`/experiments?item=${x.slug}`} className="xp-card">
            <span className="xp-card-media" style={{ background: tints[i % tints.length] }}>
              <Image src={x.src!} alt={x.title} width={x.w!} height={x.h!} sizes="50vw" />
            </span>
            <span className="xp-title">{x.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
