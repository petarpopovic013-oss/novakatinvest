import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  DemoPage,
  FactsGrid,
  ProjectHero,
  SalesCta,
  demoStyles as styles,
} from "../../../src/components/DemoRoutes";
import { getProject, referenceProjects } from "../../../src/data/site";

type Props = {
  params: Promise<{ projekat: string }>;
};

export function generateStaticParams() {
  return referenceProjects.map((project) => ({ projekat: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projekat } = await params;
  const project = getProject(projekat);

  if (!project || project.status !== "completed") notFound();

  return {
    title: `${project.name} | Reference`,
    description: project.shortDescription,
  };
}

export default async function ReferenceProjectPage({ params }: Props) {
  const { projekat } = await params;
  const project = getProject(projekat);

  if (!project || project.status !== "completed") notFound();

  return (
    <DemoPage>
      <ProjectHero
        project={project}
        breadcrumbs={[{ label: "Reference", href: "/reference" }, { label: project.name }]}
        meta={`${project.location.address}, ${project.location.city} · Referenca`}
      >
        <div className={styles.actions}>
          <Link className={styles.buttonLight} href="/ponuda">Pogledajte aktuelnu ponudu</Link>
          <Link className={styles.textLinkLight} href="/kontakt">Kontaktirajte nas</Link>
        </div>
      </ProjectHero>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.projectSummary}>
            <h2>Projekat oblikovan za svoj gradski kontekst.</h2>
            <div>
              <div className={styles.descriptionStack}>
                {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <ul className={styles.amenities} aria-label="Kvaliteti projekta">
                {project.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}
              </ul>
            </div>
          </div>
          <FactsGrid facts={project.facts} />
        </div>
      </section>

      {project.gallery.length > 0 ? (
        <section className={styles.sectionCompact}>
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <div>
                <span className="eyebrow">Galerija</span>
                <h2>Vizuelni zapis projekta.</h2>
              </div>
              <p>Pogledajte odabrane vizuale arhitekture i karaktera projekta.</p>
            </div>
            <div className={styles.galleryGrid}>
              {project.gallery.map((image) => (
                <div className={styles.galleryItem} key={image.src}>
                  <Image className={styles.galleryImage} src={image.src} alt={image.alt} fill sizes="(max-width: 720px) calc(100vw - 40px), 50vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SalesCta
        title="Pogledajte šta trenutno gradimo."
        description="Reference pokazuju naš prethodni rad, a aktuelna ponuda vodi vas do projekata i jedinica koje se trenutno predstavljaju kupcima."
        secondaryHref="/ponuda"
        secondaryLabel="Pogledajte ponudu"
      />
    </DemoPage>
  );
}
