import type { Metadata } from "next";

import { ComingSoonPage } from "../../src/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Stranica Kontakt biće uskoro dostupna.",
};

export default function ContactPage() {
  return <ComingSoonPage title="Kontakt" />;
}
