import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { UnitOffer } from "../../../../src/components/OfferPages";
import { getProject, getUnit, offerProjects, units } from "../../../../src/data/site";

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

  return {
    title: `${unit.label} · ${project.name}`,
    description: `${unit.roomType} stan površine ${area} m² (100% obračun) u projektu ${project.name}. Stan je dostupan.`,
    alternates: { canonical: `/ponuda/${project.slug}/${unit.slug}` },
    openGraph: {
      title: `${unit.label} · ${project.name}`,
      description: `${unit.roomType}, ${area} m², ${unit.floor}. Dostupan stan.`,
      url: `/ponuda/${project.slug}/${unit.slug}`,
      images: [unit.visual.src],
    },
  };
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

  return <UnitOffer project={project} unit={unit} />;
}
