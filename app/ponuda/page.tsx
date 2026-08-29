import type { Metadata } from "next";

import { OfferIndex } from "../../src/components/OfferPages";
import { offerProjects } from "../../src/data/site";

export const metadata: Metadata = {
  title: "Ponuda stanova",
  description:
    "Aktuelna ponuda stanova Novak AT Invest na lokaciji Temerinska 143 u Novom Sadu.",
  alternates: { canonical: "/ponuda" },
  openGraph: {
    title: "Ponuda stanova | Novak AT Invest",
    description: "Istražite projekat i dostupne stanove na Temerinskoj 143.",
    url: "/ponuda",
    images: ["/images/novak/temerinska-143/building-hero.webp"],
  },
};

export default function OfferPage() {
  return <OfferIndex projects={offerProjects} />;
}
