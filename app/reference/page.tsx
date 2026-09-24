import { JsonLd } from "../../src/components/JsonLd";
import { ReferencesIndex } from "../../src/components/References";
import { referenceStories } from "../../src/data/references";
import { breadcrumbJsonLd, createPageMetadata, pageUrl } from "../../src/lib/seo";

export const metadata = createPageMetadata({
  title: "Završeni projekti i reference",
  description:
    "Pogledajte završene stambene i stambeno-poslovne projekte Novak AT Invest: Atrium Residence na Telepu i Gundulićeva 33 na Podbari.",
  path: "/reference",
  image: "/reference-media/atrium-residence/01.webp",
  imageAlt: "Atrium Residence — završeni projekat Novak AT Invest na Telepu",
  keywords: ["Novak AT Invest reference", "Atrium Residence", "Gundulićeva 33", "novogradnja Novi Sad"],
});

const referenceIndexJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Završeni projekti Novak AT Invest",
  url: pageUrl("/reference"),
  numberOfItems: referenceStories.length,
  itemListElement: referenceStories.map((reference, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: reference.name,
    url: pageUrl(`/reference/${reference.slug}`),
  })),
};

export default function ReferencesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Početna", path: "/" },
            { name: "Reference", path: "/reference" },
          ]),
          referenceIndexJsonLd,
        ]}
      />
      <ReferencesIndex />
    </>
  );
}
