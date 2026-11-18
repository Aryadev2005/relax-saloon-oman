import { salon } from "./salon";

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const toHHMM = (min: number) => `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;

/** Current wall-clock time in Muscat, whatever the visitor's own time zone. */
export function muscatNow(now = new Date()) {
  const d = new Date(now.getTime() + salon.utcOffsetHours * 3600_000);
  return {
    y: d.getUTCFullYear(), mo: d.getUTCMonth(), date: d.getUTCDate(),
    day: d.getUTCDay(), minutes: d.getUTCHours() * 60 + d.getUTCMinutes(),
  };
}

export function hoursFor(day: number) {
  return salon.hours.find((h) => h.day === day) ?? null;
}

export type Status = { open: boolean; until?: string; opensAt?: string; opensDay?: "today" | "tomorrow" | number };

export function openStatus(now = new Date()): Status {
  const n = muscatNow(now);
  const h = hoursFor(n.day);
  if (h && n.minutes >= toMin(h.open) && n.minutes < toMin(h.close)) return { open: true, until: h.close };
  if (h && n.minutes < toMin(h.open)) return { open: false, opensAt: h.open, opensDay: "today" };
  for (let i = 1; i <= 7; i++) {
    const nh = hoursFor((n.day + i) % 7);
    if (nh) return { open: false, opensAt: nh.open, opensDay: i === 1 ? "tomorrow" : (n.day + i) % 7 };
  }
  return { open: false };
}

/** Bookable days from today, with their 30-minute slots (last slot 30 min before closing). */
export function bookingDays(count = 14, now = new Date()) {
  const n = muscatNow(now);
  const out: { key: string; day: number; date: number; month: number; slots: string[] }[] = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(Date.UTC(n.y, n.mo, n.date + i));
    const h = hoursFor(d.getUTCDay());
    const slots: string[] = [];
    if (h) {
      const earliest = i === 0 ? Math.ceil((n.minutes + 30) / 30) * 30 : 0;
      for (let m = toMin(h.open); m <= toMin(h.close) - 30; m += 30) if (m >= earliest) slots.push(toHHMM(m));
    }
    out.push({ key: d.toISOString().slice(0, 10), day: d.getUTCDay(), date: d.getUTCDate(), month: d.getUTCMonth(), slots });
  }
  return out;
}
