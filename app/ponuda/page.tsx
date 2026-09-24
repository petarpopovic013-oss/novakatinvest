import { OfferIndex } from "../../src/components/OfferPages";
import { JsonLd } from "../../src/components/JsonLd";
import { offerProjects } from "../../src/data/site";
import { breadcrumbJsonLd, createPageMetadata, pageUrl } from "../../src/lib/seo";

export const metadata = createPageMetadata({
  title: "Novogradnja i stanovi u Novom Sadu",
  description:
    "Aktuelna ponuda novogradnje i stanova Novak AT Invest u Novom Sadu, Petrovaradinu i Sremskoj Kamenici. Pogledajte lokacije, kvadrature i tlocrte.",
  path: "/ponuda",
  imageAlt: "Aktuelna ponuda stanova Novak AT Invest u Novom Sadu i okolini",
  keywords: ["novogradnja Novi Sad", "stanovi Novi Sad", "prodaja stanova Novi Sad", "stanovi Petrovaradin"],
});

const offerIndexJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Aktuelna ponuda stanova Novak AT Invest",
  url: pageUrl("/ponuda"),
  numberOfItems: offerProjects.length,
  itemListElement: offerProjects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: project.name,
    url: pageUrl(`/ponuda/${project.slug}`),
  })),
};

export default function OfferPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Početna", path: "/" },
            { name: "Ponuda", path: "/ponuda" },
          ]),
          offerIndexJsonLd,
        ]}
      />
      <OfferIndex projects={offerProjects} />
    </>
  );
}
