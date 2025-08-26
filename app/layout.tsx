import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terrarium — Living Art in Glass",
  description: "Landing page to showcase curated terrarium designs and drive leads.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="vi">
        <head>
          <title>Terrarium - Nghệ thuật sống trong lọ thuỷ tinh | 3Bros-Terra</title>
          <meta name="description" content="Terrarium nghệ thuật, quà tặng xanh, trang trí sang trọng, dễ chăm sóc. Đặt hàng và nhận tư vấn ngay tại 3Bros-Terra." />
          <meta name="keywords" content="terrarium, cây cảnh, quà tặng, trang trí, lọ thuỷ tinh, 3Bros-Terra" />
          <meta property="og:title" content="Terrarium - Nghệ thuật sống trong lọ thuỷ tinh | 3Bros-Terra" />
          <meta property="og:description" content="Terrarium nghệ thuật, quà tặng xanh, trang trí sang trọng, dễ chăm sóc. Đặt hàng và nhận tư vấn ngay tại 3Bros-Terra." />
          <meta property="og:image" content="/hero-image.jpeg" />
          <meta property="og:url" content="https://3brosterra.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Terrarium - Nghệ thuật sống trong lọ thuỷ tinh | 3Bros-Terra" />
          <meta name="twitter:description" content="Terrarium nghệ thuật, quà tặng xanh, trang trí sang trọng, dễ chăm sóc. Đặt hàng và nhận tư vấn ngay tại 3Bros-Terra." />
          <meta name="twitter:image" content="/hero-image.jpeg" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    );
}
