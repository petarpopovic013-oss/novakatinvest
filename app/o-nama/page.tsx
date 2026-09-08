import type { Metadata } from "next";

import { AboutPage } from "../../src/components/AboutPage";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Novak AT Invest je građevinska kompanija iz Novog Sada sa više od 15 godina iskustva u razvoju i izgradnji savremenih stambenih i poslovnih objekata.",
};

export default function Page() {
  return <AboutPage />;
}

