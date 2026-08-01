import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  DemoPage,
  ProjectHero,
  SalesBar,
  SalesCta,
  UnitStatus,
  demoStyles as styles,
  unitStatusLabels,
} from "../../../../src/components/DemoRoutes";
import { getProject, getUnit, offerProjects, units } from "../../../../src/data/site";

type Props = {
  params: Promise<{ projekat: string; stan: string }>;
};

export function generateStaticParams() {
  return units.map((unit) => ({ projekat: unit.projectSlug, stan: unit.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projekat, stan } = await params;
  const project = getProject(projekat);
  const unit = getUnit(projekat, stan);

  if (!project || project.status === "completed" || !unit) notFound();

  return {
    title: `${unit.label} · ${project.name}`,
    description: `${unit.roomType} stan površine ${unit.area.toLocaleString("sr-Latn-RS")} m² u projektu ${project.name}. Cena na upit.`,
  };
}

export default async function UnitPage({ params }: Props) {
  const { projekat, stan } = await params;
  const project = getProject(projekat);
  const unit = getUnit(projekat, stan);

  if (!project || project.status === "completed" || !unit || !offerProjects.some((item) => item.slug === projekat)) notFound();

  const unitFacts = [
    ["Projekat", project.name],
    ["Jedinica", unit.label],
    ["Objekat", unit.building ?? "Glavni objekat"],
    ["Sprat", unit.floor],
    ["Struktura", unit.roomType],
    ["Kvadratura", `${unit.area.toLocaleString("sr-Latn-RS")} m²`],
    ["Status", unitStatusLabels[unit.status]],
    ["Cena", "Cena na upit"],
    ...(unit.orientation ? [["Orijentacija", unit.orientation]] : []),
    ...(unit.terrace ? [["Terasa", unit.terrace]] : []),
    ...(unit.bathrooms ? [["Kupatila", String(unit.bathrooms)]] : []),
  ];

  return (
    <DemoPage withSalesBar>
      <ProjectHero
        project={project}
        title={unit.label}
        description={`${unit.roomType} stan površine ${unit.area.toLocaleString("sr-Latn-RS")} m². Cena se dobija direktno od prodajnog tima.`}
        meta={`${project.name} · ${unit.building ?? "Objekat"} · ${unit.floor}`}
        breadcrumbs={[
          { label: "Ponuda", href: "/ponuda" },
          { label: project.name, href: `/ponuda/${project.slug}` },
          { label: unit.label },
        ]}
      >
        <div className={styles.actions}>
          {unit.status === "sold" ? (
            <Link className={styles.buttonLight} href={`/ponuda/${project.slug}#stanovi`}>Pogledajte slične stanove</Link>
          ) : (
            <Link className={styles.buttonLight} href={`/kontakt?projekat=${project.slug}&stan=${unit.slug}`}>Pošaljite upit</Link>
          )}
          <span className={styles.textLinkLight}><UnitStatus status={unit.status} /></span>
        </div>
      </ProjectHero>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Pregled jedinice</span>
              <h2>Sve važno na jednom mestu.</h2>
            </div>
            <p>{unit.status === "reserved" ? "Jedinica je označena kao rezervisana. Prodaja može proveriti status ili predložiti odgovarajuću alternativu." : unit.status === "sold" ? "Jedinica je označena kao prodata. Pogledajte slične stanove u projektu ili se obratite prodaji." : "Jedinica je dostupna. Za detalje i naredne korake obratite se prodajnom timu."}</p>
          </div>
          <dl className={styles.unitOverview}>
            {unitFacts.map(([label, value]) => (
              <div className={styles.unitFact} key={label}>
                <dt>{label}</dt>
                <dd>{label === "Status" ? <UnitStatus status={unit.status} /> : value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {unit.floorPlan || unit.positionPlan ? (
        <section className={styles.sectionCompact}>
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <div>
                <span className="eyebrow">Planovi</span>
                <h2>Tlocrt i pozicija.</h2>
              </div>
              <p>Otvorite sliku u novom tabu za prikaz u punoj veličini. Fajl za preuzimanje biće dodat samo ako postoji odobren dokument.</p>
            </div>
            <div className={styles.planGrid}>
              {unit.floorPlan ? (
                <a className={styles.planCard} href={unit.floorPlan.src} target="_blank" rel="noreferrer">
                  <h3>Tlocrt stana · otvorite u punoj veličini</h3>
                  <Image className={styles.planImage} src={unit.floorPlan.src} alt={unit.floorPlan.alt} width={1200} height={900} />
                </a>
              ) : null}
              {unit.positionPlan ? (
                <a className={styles.planCard} href={unit.positionPlan.src} target="_blank" rel="noreferrer">
                  <h3>Pozicija u objektu · otvorite u punoj veličini</h3>
                  <Image className={styles.planImage} src={unit.positionPlan.src} alt={unit.positionPlan.alt} width={1200} height={900} />
                </a>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {unit.features && unit.features.length > 0 ? (
        <section className={styles.sectionCompact}>
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <div>
                <span className="eyebrow">Karakteristike</span>
                <h2>Detalji prostora.</h2>
              </div>
            </div>
            <div className={styles.standardsGrid}>
              {unit.features.map((feature) => (
                <article className={styles.standardCard} key={feature}><h3>{feature}</h3></article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SalesCta
        context={{ projectSlug: project.slug, unitSlug: unit.slug }}
        title={unit.status === "sold" ? "Pronađimo sličan stan." : "Proverite aktuelnu dostupnost."}
        description={unit.status === "sold" ? "Ova jedinica je označena kao prodata, ali prodajni tim može predložiti sličnu strukturu ili buduću ponudu." : "Pošaljite upit za ovu jedinicu ili pozovite centralnu prodaju za potvrdu statusa i sve naredne korake."}
        secondaryHref={`/ponuda/${project.slug}#stanovi`}
        secondaryLabel="Pogledajte sve stanove"
      />
      <SalesBar projectSlug={project.slug} unitSlug={unit.slug} />
    </DemoPage>
  );
}
