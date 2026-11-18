"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/lib/salon";
import type { Dict } from "@/lib/dict";

export default function Gallery({ t }: { t: Dict }) {
  const [i, setI] = useState<number | null>(null);
  const [x0, setX0] = useState<number | null>(null);
  const n = gallery.length;
  const go = useCallback((d: number) => setI((x) => (x === null ? x : (x + d + n) % n)), [n]);
  const rtl = t.dir === ("rtl" as string);

  useEffect(() => {
    if (i === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") go(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") go(rtl ? 1 : -1);
    };
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    document.body.classList.add("lb-open");
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
      document.body.classList.remove("lb-open");
    };
  }, [i, go, rtl]);

  return (
    <>
      <div className="gal">
        {gallery.map((g, k) => (
          <button key={g.src} className={`gal-item g${k}`} onClick={() => setI(k)} aria-label={`${t.gallery.title} ${k + 1}/${n}`}>
            <Image src={g.src} alt="" fill sizes="(max-width: 760px) 50vw, 33vw" />
          </button>
        ))}
      </div>
      {i !== null && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={t.gallery.title} onClick={() => setI(null)}
          onTouchStart={(e) => setX0(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (x0 === null) return;
            const dx = e.changedTouches[0].clientX - x0;
            if (Math.abs(dx) > 45) go((dx < 0 ? 1 : -1) * (rtl ? -1 : 1));
            setX0(null);
          }}>
          <div className="lb-img" onClick={(e) => e.stopPropagation()}>
            <Image src={gallery[i].src} alt="" width={gallery[i].w} height={gallery[i].h} sizes="92vw" priority />
            <p className="lb-cap">{t.gallery.credit} {gallery[i].credit} · {i + 1}/{n}</p>
          </div>
          <button className="lb-btn lb-x" onClick={() => setI(null)} aria-label={t.gallery.close}>×</button>
          <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label={t.gallery.prev}>‹</button>
          <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label={t.gallery.next}>›</button>
        </div>
      )}
    </>
  );
}
