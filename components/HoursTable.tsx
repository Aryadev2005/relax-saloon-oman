"use client";
import { useEffect, useState } from "react";
import { salon } from "@/lib/salon";
import { muscatNow } from "@/lib/time";
import { fmtTime, type Dict } from "@/lib/dict";

export default function HoursTable({ t, order }: { t: Dict; order: number[] }) {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(muscatNow().day), []);
  return (
    <table className="hours">
      <tbody>
        {order.map((d) => {
          const h = salon.hours.find((x) => x.day === d);
          return (
            <tr key={d} className={d === today ? "today" : ""}>
              <th scope="row">{t.days[d]}</th>
              <td>{h ? `${fmtTime(h.open, t.locale)} – ${fmtTime(h.close, t.locale)}` : t.visit.closed}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
