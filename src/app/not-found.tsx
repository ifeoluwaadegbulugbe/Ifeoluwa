import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: "128px var(--margin)" }}>
      <p className="label">404</p>
      <h1 className="display-xl" style={{ marginTop: 12 }}>This page went off-brief.</h1>
      <p className="lead" style={{ marginTop: 24 }}>It was here a minute ago, I promise.</p>
      <div className="btn-row" style={{ marginTop: 40 }}>
        <Link href="/" className="btn btn-primary">Home</Link>
        <Link href="/work" className="btn btn-secondary">See the work</Link>
      </div>
    </div>
  );
}
