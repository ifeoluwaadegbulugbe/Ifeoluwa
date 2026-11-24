"use client";

import { useEffect, useState } from "react";

/** Current time in Lagos, updated every minute. Renders nothing until mounted to avoid a mismatch. */
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () => new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Lagos" }).format(new Date());
    const tick = () => setTime(fmt());
    const first = setTimeout(tick, 0);
    const t = setInterval(tick, 30000);
    return () => { clearTimeout(first); clearInterval(t); };
  }, []);
  return <span suppressHydrationWarning>{time ? `${time} in Lagos` : "Lagos"}</span>;
}
