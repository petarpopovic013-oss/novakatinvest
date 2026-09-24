import { AboutPage } from "../../src/components/AboutPage";
import { JsonLd } from "../../src/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "../../src/lib/seo";

export const metadata = createPageMetadata({
  title: "O nama",
  description:
    "Upoznajte Novak AT Invest, građevinsku kompaniju iz Novog Sada sa više od 15 godina iskustva u razvoju i izgradnji stambenih i poslovnih objekata.",
  path: "/o-nama",
  imageAlt: "Novak AT Invest — investitor i građevinska kompanija iz Novog Sada",
  keywords: ["Novak AT Invest", "investitor Novi Sad", "građevinska kompanija Novi Sad"],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Početna", path: "/" },
          { name: "O nama", path: "/o-nama" },
        ])}
      />
      <AboutPage />
    </>
  );
}
