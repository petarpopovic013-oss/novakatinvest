import { ContactPage } from "../../src/components/ContactPage";
import { JsonLd } from "../../src/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "../../src/lib/seo";

export const metadata = createPageMetadata({
  title: "Kontakt i prodaja stanova",
  description:
    "Kontaktirajte Novak AT Invest za informacije o novogradnji i dostupnim stanovima u Novom Sadu. Radnička 49. Prodaja: 064 812 4494.",
  path: "/kontakt",
  imageAlt: "Kontaktirajte prodajni tim Novak AT Invest u Novom Sadu",
  keywords: ["Novak AT Invest kontakt", "prodaja stanova Novi Sad", "stanovi Novi Sad kontakt"],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Početna", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />
      <ContactPage />
    </>
  );
}
