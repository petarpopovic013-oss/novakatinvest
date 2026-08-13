import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ReferenceDetail } from "../../../src/components/References";
import { getReferenceStory, referenceStories } from "../../../src/data/references";

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

  return {
    title: `${reference.name} | Reference`,
    description: reference.summary,
    openGraph: {
      title: `${reference.name} | Novak Invest`,
      description: reference.summary,
      images: [reference.poster],
    },
  };
}

export default async function ReferenceProjectPage({ params }: Props) {
  const { projekat } = await params;
  const reference = getReferenceStory(projekat);

  if (!reference) notFound();

  return <ReferenceDetail reference={reference} />;
}
