import type { Metadata } from "next";

import { ReferencesIndex } from "../../src/components/References";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Istražite završene projekte Novak Invest — Gundulićeva 33 i Atrium Residence u Novom Sadu.",
};

export default function ReferencesPage() {
  return <ReferencesIndex />;
}
