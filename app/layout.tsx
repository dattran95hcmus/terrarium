import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terrarium — Living Art in Glass",
  description: "Landing page to showcase curated terrarium designs and drive leads.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
