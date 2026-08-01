import type { Metadata } from "next";

import { ComingSoonPage } from "../../src/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Ponuda",
  description: "Stranica Ponuda biće uskoro dostupna.",
};

export default function OfferPage() {
  return <ComingSoonPage title="Ponuda" />;
}
