import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "../src/components/SiteFooter";
import { SiteHeader } from "../src/components/SiteHeader";
import { JsonLd } from "../src/components/JsonLd";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../src/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Novak AT Invest | Stanovi i projekti u Novom Sadu",
    template: "%s | Novak AT Invest",
  },
  description:
    "Novak AT Invest razvija stambene i stambeno-poslovne projekte u Novom Sadu. Istražite aktuelnu ponudu, projekte i završene reference.",
  keywords: [
    "Novak AT Invest",
    "stanovi Novi Sad",
    "novogradnja Novi Sad",
    "investitor Novi Sad",
    "stanovi u izgradnji Novi Sad",
    "prodaja stanova Novi Sad",
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Novak AT Invest",
    title: "Novak AT Invest | Stanovi i projekti u Novom Sadu",
    description:
      "Istražite Novak AT Invest projekte, aktuelnu ponudu i reference u Novom Sadu i okolini.",
    url: "/",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 4000,
        height: 2250,
        alt: "Novak AT Invest novogradnja u Novom Sadu i okolini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novak AT Invest | Stanovi i projekti u Novom Sadu",
    description:
      "Istražite Novak AT Invest projekte, aktuelnu ponudu i reference u Novom Sadu i okolini.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: "Novak AT Invest novogradnja u Novom Sadu i okolini",
      },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "Novak AT Invest DOO",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-cropped.jpg`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      email: "office@novakinvest.rs",
      telephone: "+381648124494",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Radnička 49",
        postalCode: "21000",
        addressLocality: "Novi Sad",
        addressCountry: "RS",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+381648124494",
        email: "prodaja@novakinvest.rs",
        areaServed: "RS",
        availableLanguage: ["sr"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "sr-Latn",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn" className={inter.variable}>
      <body>
        <JsonLd data={organizationJsonLd} />
        <div className="site-frame">
          <SiteHeader />
          <div className="site-content">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
