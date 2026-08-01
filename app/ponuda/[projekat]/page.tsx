import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  DemoPage,
  FactsGrid,
  ProjectHero,
  SalesBar,
  SalesCta,
  UnitsTable,
  demoStyles as styles,
} from "../../../src/components/DemoRoutes";
import { getProject, getProjectUnits, offerProjects } from "../../../src/data/site";

type Props = {
  params: Promise<{ projekat: string }>;
};

export function generateStaticParams() {
  return offerProjects.map((project) => ({ projekat: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projekat } = await params;
  const project = getProject(projekat);

  if (!project || project.status === "completed") notFound();

  return {
    title: `${project.name} | Ponuda`,
    description: project.shortDescription,
  };
}

export default async function OfferProjectPage({ params }: Props) {
  const { projekat } = await params;
  const project = getProject(projekat);

  if (!project || project.status === "completed") notFound();

  const projectUnits = getProjectUnits(project.slug);

  return (
    <DemoPage withSalesBar>
      <ProjectHero
        project={project}
        breadcrumbs={[{ label: "Ponuda", href: "/ponuda" }, { label: project.name }]}
      >
        <div className={styles.actions}>
          <a className={styles.buttonLight} href="#stanovi">Pogledajte stanove</a>
          <Link className={styles.textLinkLight} href={`/kontakt?projekat=${project.slug}`}>Kontaktirajte prodaju</Link>
        </div>
      </ProjectHero>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.projectSummary}>
            <h2>Dom oblikovan oko lokacije i svakodnevnog ritma.</h2>
            <div>
              <div className={styles.descriptionStack}>
                {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <ul className={styles.amenities} aria-label="Pogodnosti projekta">
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
                <h2>Arhitektura projekta.</h2>
              </div>
              <p>Istražite arhitekturu, okruženje i karakter projekta.</p>
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

      {project.constructionStandards.length > 0 ? (
        <section className={styles.sectionCompact}>
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <div>
                <span className="eyebrow">Standard gradnje</span>
                <h2>Materijali i sistemi.</h2>
              </div>
              <p>Pažljivo odabrani materijali doprinose komforu, trajnosti i kvalitetu svakodnevnog života.</p>
            </div>
            <div className={styles.standardsGrid}>
              {project.constructionStandards.map((standard) => (
                <article className={styles.standardCard} key={standard.title}>
                  <h3>{standard.title}</h3>
                  <p>{standard.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={styles.section} id="stanovi">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Ponuda stanova</span>
              <h2>Izaberite jedinicu.</h2>
            </div>
            <p>Za svaku objavljenu jedinicu prikazani su struktura, kvadratura i tekstualni status. Numeričke cene se ne objavljuju.</p>
          </div>
          <UnitsTable project={project} units={projectUnits} />
        </div>
      </section>

      <SalesCta context={{ projectSlug: project.slug }} />
      <SalesBar projectSlug={project.slug} />
    </DemoPage>
  );
}
