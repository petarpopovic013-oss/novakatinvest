import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "../../../src/components/JsonLd";
import { ReferenceDetail } from "../../../src/components/References";
import { getReferenceStory, referenceStories } from "../../../src/data/references";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  createPageMetadata,
  pageUrl,
} from "../../../src/lib/seo";

type Props = {
  params: Promise<{ projekat: string }>;
};

export function generateStaticParams() {
  return referenceStories.map((reference) => ({ projekat: reference.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projekat } = await params;
  const reference = getReferenceStory(projekat);

  if (!reference) notFound();

  return createPageMetadata({
    title: `${reference.name} – završeni projekat`,
    description: `${reference.summary} Saznajte više o završenom projektu na lokaciji ${reference.location}.`,
    path: `/reference/${reference.slug}`,
    image: reference.poster,
    imageAlt: `${reference.name} — završeni projekat Novak AT Invest`,
    keywords: [reference.name, `${reference.name} Novi Sad`, "Novak AT Invest reference"],
  });
}

export default async function ReferenceProjectPage({ params }: Props) {
  const { projekat } = await params;
  const reference = getReferenceStory(projekat);

  if (!reference) notFound();

  const referencePath = `/reference/${reference.slug}`;
  const referenceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "@id": `${pageUrl(referencePath)}#project`,
    name: reference.name,
    description: reference.summary,
    url: pageUrl(referencePath),
    image: [reference.poster, ...reference.gallery.map((image) => image.src)].map(
      absoluteUrl,
    ),
    address: {
      "@type": "PostalAddress",
      streetAddress: reference.location.split(",")[0],
      addressLocality: "Novi Sad",
      addressCountry: "RS",
    },
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Početna", path: "/" },
            { name: "Reference", path: "/reference" },
            { name: reference.name, path: referencePath },
          ]),
          referenceJsonLd,
        ]}
      />
      <ReferenceDetail reference={reference} />
    </>
  );
}
