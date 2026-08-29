import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectOffer } from "../../../src/components/OfferPages";
import { getProject, getProjectUnits, offerProjects } from "../../../src/data/site";

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

  return {
    title: `${project.name} | Ponuda stanova`,
    description: project.shortDescription,
    alternates: { canonical: `/ponuda/${project.slug}` },
    openGraph: {
      title: `${project.name} | Novak AT Invest`,
      description: project.shortDescription,
      url: `/ponuda/${project.slug}`,
      images: [project.hero.src],
    },
  };
}

export default async function OfferProjectPage({ params }: Props) {
  const { projekat } = await params;
  const project = getProject(projekat);

  if (!project || project.status === "completed") notFound();

  return <ProjectOffer project={project} units={getProjectUnits(project.slug)} />;
}
