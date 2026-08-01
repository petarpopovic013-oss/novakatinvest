import type { Metadata } from "next";

import { ComingSoonPage } from "../../src/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "O nama",
  description: "Stranica O nama biće uskoro dostupna.",
};

export default function AboutPage() {
  return <ComingSoonPage title="O nama" />;
}
