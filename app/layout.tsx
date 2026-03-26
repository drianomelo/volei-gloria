import type { Metadata } from "next";
import { Urbanist, Oswald } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${urbanist.variable} ${oswald.variable}`}>
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
