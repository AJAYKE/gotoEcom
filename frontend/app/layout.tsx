import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GotoEcom - The Future of Fashion Commerce & Collaboration",
  description:
    "A social commerce platform bridging the gap between Brands, Creators & Fashion Enthusiasts.",
  keywords:
    "fashion, ecommerce, social commerce, fashion influencers, brand collaboration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
