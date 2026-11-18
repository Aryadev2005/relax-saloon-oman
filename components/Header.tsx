"use client";
import { useEffect, useState } from "react";
import type { Dict } from "@/lib/dict";

export default function Header({ t }: { t: Dict }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  const other = t.locale === "en" ? "/ar" : "/";
  const links: [string, string][] = [
    ["#services", t.nav.services],
    ["#book", t.nav.book],
    ["#gallery", t.nav.gallery],
    ["#reviews", t.nav.reviews],
    ["#visit", t.nav.visit],
  ];
  return (
    <header className={`hdr ${scrolled ? "is-solid" : ""} ${open ? "is-menu" : ""}`}>
      <div className="wrap hdr-in">
        <a href={t.locale === "en" ? "/" : "/ar"} className="brand" aria-label="Relax Saloon">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span className="brand-txt">
            <b>{t.locale === "ar" ? "الإسترخاء" : "Relax"}</b>
            <small>{t.locale === "ar" ? "صالون للرجال" : "Salon for men"}</small>
          </span>
        </a>
        <nav className="hdr-nav" aria-label="Main">
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>
        <div className="hdr-cta">
          <a className="lang" href={other} hrefLang={t.locale === "en" ? "ar" : "en"} lang={t.locale === "en" ? "ar" : "en"}>{t.nav.switchTo}</a>
          <a className="btn btn-sm" href="#book">{t.nav.bookNow}</a>
          <button className="burger" aria-expanded={open} aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
