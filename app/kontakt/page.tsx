import type { Metadata } from "next";

import { ContactPage } from "../../src/components/ContactPage";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Razgovarajte direktno sa timom investitora. Informacije o aktuelnim projektima i slobodnim stanovima u Novom Sadu. Radnička 49, Novi Sad. Telefon: 064 812 4494.",
  openGraph: {
    title: "Kontakt | Novak Invest",
    description:
      "Kontaktirajte prodajni tim Novak Invest-a za informacije o stanovima i projektima u Novom Sadu. Radnička 49, Novi Sad. Telefon: 064 812 4494.",
    images: ["/images/novak/temerinska-143/building-hero.webp"],
  },
};

export default function Page() {
  return <ContactPage />;
}
