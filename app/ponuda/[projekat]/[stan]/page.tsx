import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "../../../../src/components/JsonLd";
import { UnitOffer } from "../../../../src/components/OfferPages";
import { getProject, getUnit, offerProjects, units } from "../../../../src/data/site";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  createPageMetadata,
  pageUrl,
} from "../../../../src/lib/seo";

type Props = {
  params: Promise<{ projekat: string; stan: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return units.map((unit) => ({ projekat: unit.projectSlug, stan: unit.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projekat, stan } = await params;
  const project = getProject(projekat);
  const unit = getUnit(projekat, stan);

  if (!project || project.status === "completed" || !unit) notFound();

  const area = unit.area.toLocaleString("sr-Latn-RS", { minimumFractionDigits: 2 });

  return createPageMetadata({
    title: `${unit.label}, ${area} m² – ${project.name}`,
    description: `${unit.roomType} stan površine ${area} m² (100% obračun) u projektu ${project.name}. Stan je dostupan.`,
    path: `/ponuda/${project.slug}/${unit.slug}`,
    image: unit.visual.src,
    imageAlt: unit.visual.alt,
    keywords: [
      `${unit.roomType.toLocaleLowerCase("sr-Latn-RS")} stan ${project.location.city}`,
      `${area} m² stan`,
      project.name,
      "novogradnja Novi Sad",
    ],
  });
}

export default async function UnitPage({ params }: Props) {
  const { projekat, stan } = await params;
  const project = getProject(projekat);
  const unit = getUnit(projekat, stan);

  if (
    !project ||
    project.status === "completed" ||
    !unit ||
    !offerProjects.some((item) => item.slug === projekat)
  ) {
    notFound();
  }

  const area = unit.area.toLocaleString("sr-Latn-RS", { minimumFractionDigits: 2 });
  const projectPath = `/ponuda/${project.slug}`;
  const unitPath = `${projectPath}/${unit.slug}`;
  const unitJsonLd = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    "@id": `${pageUrl(unitPath)}#apartment`,
    name: `${unit.label} – ${project.name}`,
    description: `${unit.roomType} stan površine ${area} m² u projektu ${project.name}.`,
    url: pageUrl(unitPath),
    image: absoluteUrl(unit.visual.src),
    floorSize: {
      "@type": "QuantitativeValue",
      value: unit.area,
      unitCode: "MTK",
      unitText: "m²",
    },
    floorLevel: unit.floor,
    accommodationCategory: unit.roomType,
    ...(unit.bathrooms ? { numberOfBathroomsTotal: unit.bathrooms } : {}),
    ...(unit.floorPlan
      ? {
          accommodationFloorPlan: {
            "@type": "FloorPlan",
            image: absoluteUrl(unit.floorPlan.src),
          },
        }
      : {}),
    ...(unit.features?.length
      ? {
          amenityFeature: unit.features.map((feature) => ({
            "@type": "LocationFeatureSpecification",
            name: feature,
            value: true,
          })),
        }
      : {}),
    containedInPlace: { "@id": `${pageUrl(projectPath)}#project` },
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Početna", path: "/" },
            { name: "Ponuda", path: "/ponuda" },
            { name: project.name, path: projectPath },
            { name: unit.label, path: unitPath },
          ]),
          unitJsonLd,
        ]}
      />
      <UnitOffer project={project} unit={unit} />
    </>
  );
}
