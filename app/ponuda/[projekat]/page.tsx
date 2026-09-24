import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "../../../src/components/JsonLd";
import { ProjectOffer } from "../../../src/components/OfferPages";
import { getProject, getProjectUnits, offerProjects } from "../../../src/data/site";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  createPageMetadata,
  pageUrl,
} from "../../../src/lib/seo";

type Props = {
  params: Promise<{ projekat: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return offerProjects.map((project) => ({ projekat: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projekat } = await params;
  const project = getProject(projekat);

  if (!project || project.status === "completed") notFound();

  return createPageMetadata({
    title: `Stanovi – ${project.name}`,
    description: `${project.shortDescription} Pogledajte dostupne stanove, kvadrature, tlocrte i detalje projekta.`,
    path: `/ponuda/${project.slug}`,
    image: project.hero.src,
    imageAlt: project.hero.alt,
    keywords: [
      `stanovi ${project.location.city}`,
      `novogradnja ${project.location.city}`,
      project.name,
      `stanovi ${project.location.address}`,
    ],
  });
}

export default async function OfferProjectPage({ params }: Props) {
  const { projekat } = await params;
  const project = getProject(projekat);

  if (!project || project.status === "completed") notFound();

  const projectUnits = getProjectUnits(project.slug);
  const projectPath = `/ponuda/${project.slug}`;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "@id": `${pageUrl(projectPath)}#project`,
    name: project.name,
    description: project.description.join(" "),
    url: pageUrl(projectPath),
    image: [project.hero, ...project.gallery].map((asset) => absoluteUrl(asset.src)),
    address: {
      "@type": "PostalAddress",
      streetAddress: project.location.address,
      addressLocality: project.location.city,
      addressCountry: "RS",
    },
    amenityFeature: project.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    additionalProperty: project.facts.map((fact) => ({
      "@type": "PropertyValue",
      name: fact.label,
      value: fact.value,
    })),
    numberOfAvailableAccommodationUnits: {
      "@type": "QuantitativeValue",
      value: projectUnits.length,
    },
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Početna", path: "/" },
            { name: "Ponuda", path: "/ponuda" },
            { name: project.name, path: projectPath },
          ]),
          projectJsonLd,
        ]}
      />
      <ProjectOffer project={project} units={projectUnits} />
    </>
  );
}
