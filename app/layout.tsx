import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "../src/components/SiteFooter";
import { SiteHeader } from "../src/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novakinvest.rs"),
  title: {
    default: "Novak Invest | Stanovi i projekti u Novom Sadu",
    template: "%s | Novak Invest",
  },
  description:
    "Novak Invest razvija stambene i stambeno-poslovne projekte u Novom Sadu. Istražite aktuelnu ponudu, projekte i završene reference.",
  keywords: [
    "Novak Invest",
    "stanovi Novi Sad",
    "novogradnja Novi Sad",
    "investitor Novi Sad",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Novak Invest",
    title: "Novak Invest | Stanovi i projekti u Novom Sadu",
    description:
      "Istražite Novak Invest projekte, aktuelnu ponudu i reference u Novom Sadu i okolini.",
    images: ["/images/novak/atrium-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn" className={inter.variable}>
      <body>
        <div className="site-frame">
          <SiteHeader />
          <div className="site-content">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
