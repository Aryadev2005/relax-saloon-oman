import type { MetadataRoute } from "next";
import { salon } from "@/lib/salon";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: salon.url, ar: `${salon.url}/ar` };
  return [
    { url: salon.url, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${salon.url}/ar`, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
