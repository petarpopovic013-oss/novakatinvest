import type { Metadata } from "next";

import { OfferIndex } from "../../src/components/OfferPages";
import { offerProjects } from "../../src/data/site";

export const metadata: Metadata = {
  title: "Ponuda stanova",
  description:
    "Aktuelna ponuda stanova Novak AT Invest u projektima Temerinska 143 i Petrovaradin - Vladimira Gortana 8c.",
  alternates: { canonical: "/ponuda" },
  openGraph: {
    title: "Ponuda stanova | Novak AT Invest",
    description:
      "Istražite dostupne stanove u projektima Temerinska 143 i Petrovaradin - Vladimira Gortana 8c.",
    url: "/ponuda",
    images: ["/images/novak/temerinska-143/building-hero.webp"],
  },
};

export default function OfferPage() {
  return <OfferIndex projects={offerProjects} />;
}
