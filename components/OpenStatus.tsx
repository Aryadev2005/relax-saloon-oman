"use client";
import { useEffect, useState } from "react";
import { openStatus, type Status } from "@/lib/time";
import { fmtTime, type Dict } from "@/lib/dict";

export default function OpenStatus({ t, className = "" }: { t: Dict; className?: string }) {
  const [s, setS] = useState<Status | null>(null);
  useEffect(() => {
    setS(openStatus());
    const id = setInterval(() => setS(openStatus()), 60_000);
    return () => clearInterval(id);
  }, []);
  if (!s) return <span className={`status ${className}`} aria-hidden="true">&nbsp;</span>;
  const when =
    s.opensDay === "today" ? t.status.today : s.opensDay === "tomorrow" ? t.status.tomorrow : typeof s.opensDay === "number" ? t.days[s.opensDay] : "";
  return (
    <span className={`status ${s.open ? "is-open" : "is-closed"} ${className}`}>
      <i aria-hidden="true" />
      {s.open
        ? `${t.status.openUntil} ${fmtTime(s.until!, t.locale)}`
        : `${t.status.opensAt} ${when} ${fmtTime(s.opensAt!, t.locale)}`}
    </span>
  );
}
