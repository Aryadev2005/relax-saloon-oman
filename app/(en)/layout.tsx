import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "../globals.css";
import { metaFor } from "@/lib/meta";
export { viewport } from "@/lib/meta";

export const metadata = metaFor("en");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
