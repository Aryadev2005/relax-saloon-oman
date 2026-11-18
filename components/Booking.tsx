"use client";
import { useEffect, useMemo, useState } from "react";
import { bookingDays } from "@/lib/time";
import { salon, serviceGroups, type ServiceId } from "@/lib/salon";
import { fmtTime, type Dict } from "@/lib/dict";

const toArDigits = (s: string) => s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]);

export default function Booking({ t }: { t: Dict }) {
  const [days, setDays] = useState<ReturnType<typeof bookingDays>>([]);
  const [picked, setPicked] = useState<ServiceId[]>([]);
  const [dayKey, setDayKey] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [tried, setTried] = useState(false);

  useEffect(() => {
    const d = bookingDays(14);
    setDays(d);
    setDayKey((d.find((x) => x.slots.length) ?? d[0]).key);
  }, []);

  const day = days.find((d) => d.key === dayKey);
  const num = (n: number) => (t.locale === "ar" ? toArDigits(String(n)) : String(n));
  const dayLabel = (d: NonNullable<typeof day>, i: number) =>
    i === 0 ? t.status.today : i === 1 ? t.status.tomorrow : t.daysShort[d.day];

  const all = useMemo(() => serviceGroups.flatMap((g) => g.items), []);
  const toggle = (id: ServiceId) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const missing = !picked.length ? t.booking.needService : !day || !time ? t.booking.needTime : !name.trim() ? t.booking.needName : "";

  const fullDay = day ? `${t.days[day.day]} ${num(day.date)} ${t.months[day.month]}` : "";
  const message = [
    t.booking.msgHello,
    ...picked.map((id) => {
      const s = all.find((x) => x.id === id);
      return `• ${t.services.items[id][0]}${s?.price ? ` (${s.price})` : ""}`;
    }),
    `${t.booking.msgDay}: ${fullDay}`,
    `${t.booking.msgTime}: ${time ? fmtTime(time, t.locale) : ""}`,
    `${t.booking.msgName}: ${name.trim()}`,
    ...(note.trim() ? [`${t.booking.msgNote}: ${note.trim()}`] : []),
    "",
    t.booking.msgEnd,
  ].join("\n");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    setTried(true);
    if (missing) return;
    window.open(`https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  };

  return (
    <form className="book-card" onSubmit={send} noValidate>
      <fieldset>
        <legend><span className="step">1</span>{t.booking.step1}</legend>
        <div className="chips">
          {serviceGroups.map((g) =>
            g.items.map((s) => (
              <button type="button" key={s.id} className={`chip ${picked.includes(s.id) ? "on" : ""}`} aria-pressed={picked.includes(s.id)} onClick={() => toggle(s.id)}>
                {t.services.items[s.id][0]}
              </button>
            ))
          )}
        </div>
      </fieldset>

      <fieldset>
        <legend><span className="step">2</span>{t.booking.step2}</legend>
        <div className="days" role="listbox" aria-label={t.booking.step2}>
          {days.map((d, i) => (
            <button type="button" role="option" aria-selected={d.key === dayKey} key={d.key} disabled={!d.slots.length}
              className={`daybtn ${d.key === dayKey ? "on" : ""}`} onClick={() => { setDayKey(d.key); setTime(""); }}>
              <small>{dayLabel(d, i)}</small>
              <b>{num(d.date)}</b>
              <small>{t.months[d.month]}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend><span className="step">3</span>{t.booking.step3}</legend>
        {day && day.slots.length ? (
          <div className="slots">
            {day.slots.map((s) => (
              <button type="button" key={s} className={`slot ${time === s ? "on" : ""}`} aria-pressed={time === s} onClick={() => setTime(s)}>
                {fmtTime(s, t.locale)}
              </button>
            ))}
          </div>
        ) : (
          <p className="muted">{t.booking.noSlots}</p>
        )}
      </fieldset>

      <fieldset>
        <legend><span className="step">4</span>{t.booking.step4}</legend>
        <div className="fields">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.booking.namePh} aria-label={t.booking.step4} autoComplete="given-name" />
          <input value={note} onChange={(e) => setNote(e.target.value)} placeholder={t.booking.notePh} aria-label={t.booking.notePh} />
        </div>
      </fieldset>

      <div className="book-foot">
        <div className="book-sum" aria-live="polite">
          <small>{t.booking.summary}</small>
          <p>
            {picked.length ? picked.map((id) => t.services.items[id][0]).join(" · ") : "—"}
            {day && time ? <><br />{fullDay} · {fmtTime(time, t.locale)}</> : null}
          </p>
        </div>
        <button className="btn btn-wa" type="submit">
          <WaIcon /> {t.booking.send}
        </button>
      </div>
      {tried && missing ? <p className="err" role="alert">{missing}</p> : <p className="fine">{t.booking.fine}</p>}
    </form>
  );
}

export function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2Zm5.8 14.03c-.24.68-1.42 1.3-1.95 1.35-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.93-4.66-4.11-.13-.18-1.11-1.48-1.11-2.83 0-1.34.7-2 .95-2.28.25-.27.54-.34.72-.34h.52c.17 0 .39-.06.61.47.24.56.79 1.92.86 2.06.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.2 1.36.27.14.43.11.59-.07.16-.18.68-.79.86-1.07.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.14.45.2.52.32.07.11.07.66-.17 1.33Z" />
    </svg>
  );
}
