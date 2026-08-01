import type { Metadata } from "next";

import { ComingSoonPage } from "../../src/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Reference",
  description: "Stranica Reference biće uskoro dostupna.",
};

export default function ReferencesPage() {
  return <ComingSoonPage title="Reference" />;
}
