/** Diagrams built as HTML so they reflow: side by side on desktop, stacked on phones. */

type Col = { who: string; title: string; items: string[]; strong?: boolean };

function Flow({ cols, accent, label }: { cols: Col[]; accent: string; label: string }) {
  return (
    <div className="flow-diagram" role="group" aria-label={label}>
      {cols.map((c, i) => (
        <div key={c.title} className="flow-step">
          <div className="flow-box" style={c.strong ? { background: accent, color: "#fff", borderColor: accent } : undefined}>
            <span className="label" style={c.strong ? { color: "rgba(255,255,255,.8)" } : undefined}>{c.who}</span>
            <h4 style={{ fontSize: "1.4rem", margin: "6px 0 12px" }}>{c.title}</h4>
            <ul>{c.items.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          {i < cols.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  );
}

export function WhoDecides({ accent }: { accent: string }) {
  return (
    <div className="diagram">
      <Flow
        accent={accent}
        label="Who decides what"
        cols={[
          { who: "The assistant", title: "Understands", items: ["Reads your request", "Writes the explanation", "Turns questions into filters"] },
          { who: "The rules", title: "Decides", items: ["Checks budget and target", "Checks retailer and stock", "Works out every figure"] },
          { who: "You", title: "Approves", items: ["Review the verdict", "Press pay in PayPal", "Or keep waiting"], strong: true },
        ]}
      />
    </div>
  );
}

export function TwoBrains({ accent }: { accent: string }) {
  return (
    <div className="diagram">
      <Flow
        accent={accent}
        label="How Margin splits the work"
        cols={[
          { who: "On your device", title: "Scribble", items: ["One question per turn", "Private and quick", "Hints, never the answer"] },
          { who: "In the cloud", title: "Learning Guide", items: ["Looks across sessions", "Sees counts and IDs only", "Spots habits, plans challenges"], strong: true },
        ]}
      />
      <p className="caption" style={{ marginTop: 16 }}>The Learning Guide sends a short reminder back to Scribble, like &quot;watch the sign&quot;.</p>
      <p style={{ marginTop: 12, display: "inline-block", background: "var(--highlighter)", padding: "6px 12px" }}>A maths engine judges every line. Never the tutor.</p>
    </div>
  );
}

export function Trust({ accent }: { accent: string }) {
  const rows = [
    ["Hero", "Is this for me?", "Pure Skin, Pure Planet"],
    ["Our story", "Who's behind it?", "Founder and farm story"],
    ["Products", "What does it cost?", "Prices visible on every card"],
    ["Testimonials", "Does it work?", "Customer results"],
    ["Impact", "Is it really sustainable?", "Regeneration story"],
    ["FAQ", "Is it safe for me?", "Sensitive skin, pregnancy, returns"],
  ];
  return (
    <ol className="trust-list">
      {rows.map(([s, d, h]) => (
        <li key={s}>
          <strong>{s}</strong>
          <span style={{ color: accent, fontWeight: 600 }}>{d}</span>
          <span className="caption">{h}</span>
        </li>
      ))}
    </ol>
  );
}
