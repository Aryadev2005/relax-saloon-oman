import type { Metadata, Viewport } from "next";
import { salon } from "./salon";
import { dicts, type Locale } from "./dict";

export function metaFor(locale: Locale): Metadata {
  const t = dicts[locale];
  const url = locale === "ar" ? `${salon.url}/ar` : salon.url;
  return {
    metadataBase: new URL(salon.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: url, languages: { en: salon.url, ar: `${salon.url}/ar`, "x-default": salon.url } },
    openGraph: {
      type: "website",
      url,
      siteName: locale === "ar" ? salon.nameAr : salon.name,
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "ar" ? "ar_OM" : "en_OM",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: salon.name }],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description, images: ["/og.jpg"] },
    icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
    formatDetection: { telephone: true },
  };
}

export const viewport: Viewport = { themeColor: "#14100d", width: "device-width", initialScale: 1 };
