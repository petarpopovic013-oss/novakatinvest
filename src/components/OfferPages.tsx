import Image from "next/image";
import Link from "next/link";

import { siteSettings } from "../data/site";
import type { Project, Unit } from "../types/site";
import { ArrowRightIcon, DownloadIcon } from "./icons";
import styles from "./OfferPages.module.css";

const structures = [
  {
    singular: "Dvosoban",
    plural: "Dvosobni",
    heading: "Dvosobni stanovi",
    anchor: "dvosoban",
  },
  {
    singular: "Trosoban",
    plural: "Trosobni",
    heading: "Trosobni stanovi",
    anchor: "trosoban",
  },
  {
    singular: "Četvorosoban",
    plural: "Četvorosobni",
    heading: "Četvorosobni stanovi",
    anchor: "cetvorosoban",
  },
] as const;

function formatArea(area: number) {
  return area.toLocaleString("sr-Latn-RS", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function inquiryHref(project: Project, unit?: Unit) {
  const subject = unit
    ? `Upit za ${unit.label} - ${project.name}`
    : `Upit za projekat ${project.name}`;

  return `mailto:${siteSettings.email}?subject=${encodeURIComponent(subject)}`;
}

function Breadcrumbs({
  items,
  light = false,
}: {
  items: Array<{ label: string; href?: string }>;
  light?: boolean;
}) {
  return (
    <nav
      className={`${styles.breadcrumbs} ${light ? styles.breadcrumbsLight : ""}`}
      aria-label="Putanja stranice"
    >
      <Link href="/">Početna</Link>
      {items.map((item) => (
        <span key={`${item.href ?? "current"}-${item.label}`}>
          <span aria-hidden="true">/</span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

function AvailabilityBadge() {
  return (
    <span className={styles.availability}>
      <span aria-hidden="true" />
      Dostupan
    </span>
  );
}

function ContactActions({ project, unit }: { project: Project; unit?: Unit }) {
  return (
    <div className={styles.contactActions}>
      <a className={styles.primaryButton} href={siteSettings.phoneHref}>
        Pozovite prodaju <ArrowRightIcon />
      </a>
      <a className={styles.secondaryButton} href={inquiryHref(project, unit)}>
        Pošaljite upit
      </a>
    </div>
  );
}

export function OfferIndex({ projects }: { projects: Project[] }) {
  return (
    <main className={styles.page}>
      <section className={styles.indexIntro}>
        <Breadcrumbs items={[{ label: "Ponuda" }]} />
        <div className={styles.indexIntroGrid}>
          <div>
            <span className="eyebrow">Aktuelna ponuda</span>
            <h1>Prostor za život, na pravoj adresi.</h1>
          </div>
          <p>
            Istražite aktuelne Novak Invest projekte, dostupne strukture i
            detaljne prikaze stanova na jednom mestu.
          </p>
        </div>
      </section>

      <section className={styles.projectList} aria-label="Projekti u ponudi">
        {projects.map((project, index) => (
          <article className={styles.projectCard} key={project.slug}>
            <Link
              className={styles.projectMedia}
              href={`/ponuda/${project.slug}`}
              aria-label={`Pogledajte projekat ${project.name}`}
            >
              <Image
                className={styles.coverImage}
                src={project.hero.src}
                alt={project.hero.alt}
                fill
                preload={index === 0}
                sizes="(max-width: 760px) calc(100vw - 28px), 68vw"
              />
              <span className={styles.projectNumber}>0{index + 1}</span>
            </Link>

            <div className={styles.projectCardBody}>
              <div className={styles.cardTopline}>
                <span>{project.statusLabel}</span>
                <span>{project.location.city}</span>
              </div>
              <div className={styles.projectCardCopy}>
                <p>{project.location.address}</p>
                <h2>
                  <Link href={`/ponuda/${project.slug}`}>{project.name}</Link>
                </h2>
                <p>{project.shortDescription}</p>
              </div>
              <dl className={styles.projectFacts}>
                {project.facts.slice(0, 3).map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <Link className={styles.textLink} href={`/ponuda/${project.slug}`}>
                Pogledajte stanove <ArrowRightIcon />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.indexStatement}>
        <span>Novak Invest · Novi Sad</span>
        <p>Jasan pregled ponude, od lokacije do konkretnog stana.</p>
      </section>
    </main>
  );
}

function UnitCard({ project, unit }: { project: Project; unit: Unit }) {
  const href = `/ponuda/${project.slug}/${unit.slug}`;

  return (
    <article className={styles.unitCard}>
      <Link
        className={styles.unitVisual}
        href={href}
        aria-label={`Pogledajte detalje za ${unit.label}`}
      >
        <Image
          className={styles.containImage}
          src={unit.visual.src}
          alt={unit.visual.alt}
          fill
          sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1000px) 50vw, 33vw"
        />
        <AvailabilityBadge />
        <span className={styles.unitArrow} aria-hidden="true">
          <ArrowRightIcon />
        </span>
      </Link>

      <div className={styles.unitBody}>
        <div>
          <span>{[unit.building, unit.floor].filter(Boolean).join(" · ")}</span>
          <h3>
            <Link href={href}>{unit.label}</Link>
          </h3>
        </div>
        <dl className={styles.unitFacts}>
          <div>
            <dt>Struktura</dt>
            <dd>{unit.roomType}</dd>
          </div>
          <div>
            <dt>Kvadratura (100%)</dt>
            <dd>{formatArea(unit.area)} m²</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function ProjectOffer({ project, units }: { project: Project; units: Unit[] }) {
  const groupedUnits = structures
    .map((structure) => ({
      ...structure,
      units: units.filter((unit) => unit.roomType === structure.singular),
    }))
    .filter((group) => group.units.length > 0);

  return (
    <main className={`${styles.page} ${styles.pageWithSalesBar}`}>
      <section className={styles.projectHero}>
        <Image
          className={styles.coverImage}
          src={project.hero.src}
          alt={project.hero.alt}
          fill
          preload
          sizes="(max-width: 760px) calc(100vw - 20px), min(1576px, calc(100vw - 48px))"
        />
        <div className={styles.heroShade} />
        <div className={styles.projectHeroContent}>
          <Breadcrumbs
            light
            items={[
              { label: "Ponuda", href: "/ponuda" },
              { label: project.name },
            ]}
          />
          <span className={styles.heroEyebrow}>{project.statusLabel}</span>
          <h1 className={project.name.length > 24 ? styles.compactProjectTitle : undefined}>
            {project.name}
          </h1>
          <p>{project.shortDescription}</p>
          <div className={styles.heroFooter}>
            <span>
              {project.location.address}, {project.location.city}
            </span>
            <a href="#stanovi">
              Izaberite stan <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <div>
          <span className={styles.sectionEyebrow}>O projektu</span>
          <h2>Savremena adresa u ritmu Novog Sada.</h2>
        </div>
        <div className={styles.overviewCopy}>
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className={styles.overviewFacts}>
          {project.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.unitsSection} id="stanovi">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>Ponuda stanova</span>
            <h2>Izaberite strukturu koja vam odgovara.</h2>
          </div>
          <p>
            Svaki stan ima jasan pregled kvadrature po obračunu od 100%, sprata,
            dostupnosti, 3D organizacije prostora i tehničkih planova.
          </p>
        </div>

        <nav className={styles.structureNav} aria-label="Strukture stanova">
          {groupedUnits.map((group) => (
            <a href={`#${group.anchor}`} key={group.singular}>
              <span>{group.plural}</span>
              <strong>{String(group.units.length).padStart(2, "0")}</strong>
            </a>
          ))}
        </nav>

        {groupedUnits.map((group, index) => (
          <div
            className={styles.unitGroup}
            id={group.anchor}
            key={group.singular}
          >
            <div className={styles.groupHeading}>
              <span>0{index + 1}</span>
              <h3>{group.heading}</h3>
              <p>{group.units.length} {group.units.length === 1 ? "stan" : "stana"}</p>
            </div>
            <div className={styles.unitGrid}>
              {group.units.map((unit) => (
                <UnitCard project={project} unit={unit} key={unit.id} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section
        className={`${styles.projectGallery} ${
          project.gallery.length === 2 ? styles.projectGalleryTwo : ""
        }`}
        aria-label="Galerija projekta"
      >
        {project.gallery.map((image, index) => (
          <figure key={image.src}>
            <Image
              className={styles.coverImage}
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 760px) calc(100vw - 28px), 33vw"
            />
            <span>0{index + 1}</span>
          </figure>
        ))}
      </section>

      <section className={styles.salesCta}>
        <div>
          <span className={styles.sectionEyebrow}>Centralna prodaja</span>
          <h2>Pronađimo stan koji odgovara vama.</h2>
          <p>
            Za dodatne informacije o projektu, dostupnosti i narednim koracima
            razgovarajte direktno sa prodajnim timom.
          </p>
        </div>
        <ContactActions project={project} />
      </section>

      <MobileSalesBar project={project} />
    </main>
  );
}

export function UnitOffer({ project, unit }: { project: Project; unit: Unit }) {
  const details: Array<[string, string]> = [
    ["Projekat", project.name],
    ...(unit.building ? [["Lamela", unit.building] as [string, string]] : []),
    ["Jedinica", unit.label],
    ["Sprat", unit.floor],
    ["Struktura", unit.roomType],
    ["Kvadratura (100%)", `${formatArea(unit.area)} m²`],
    ["Terasa", unit.terrace ?? "-"],
    ["Status", "Dostupan"],
  ];
  const unitLocation = [project.name, unit.building, unit.floor]
    .filter(Boolean)
    .join(" · ");

  return (
    <main className={`${styles.page} ${styles.pageWithSalesBar}`}>
      <section className={styles.unitHero}>
        <div className={styles.unitHeroCopy}>
          <Breadcrumbs
            items={[
              { label: "Ponuda", href: "/ponuda" },
              { label: project.name, href: `/ponuda/${project.slug}` },
              { label: unit.label },
            ]}
          />
          <AvailabilityBadge />
          <p className={styles.unitKicker}>{unitLocation}</p>
          <h1>{unit.label}</h1>
          <div className={styles.areaDisplay}>
            <strong>{formatArea(unit.area)}</strong>
            <span>m² · obračun 100%</span>
          </div>
          <p className={styles.unitLead}>
            {unit.roomType} stan sa jasnom organizacijom prostora, detaljnim
            tlocrtom i prikazom pozicije unutar objekta.
          </p>
          <ContactActions project={project} unit={unit} />
        </div>

        <div className={styles.unitHeroVisual}>
          <Image
            className={styles.containImage}
            src={unit.visual.src}
            alt={unit.visual.alt}
            fill
            preload
            sizes="(max-width: 820px) calc(100vw - 28px), 58vw"
          />
          <span>3D prikaz prostora</span>
        </div>
      </section>

      <section className={styles.unitOverview}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>Pregled stana</span>
            <h2>Sve važno na jednom mestu.</h2>
          </div>
          <p>
            Prikazana kvadratura obračunata je sa koeficijentom od 100%, prema
            komercijalnoj skici projekta.
          </p>
        </div>
        <dl className={styles.detailFacts}>
          {details.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{label === "Status" ? <AvailabilityBadge /> : value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {unit.floorPlan && (unit.positionPlan || unit.tablePlan) ? (
        <section className={styles.plansSection}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>Tehnički prikazi</span>
              <h2>
                {unit.positionPlan
                  ? "Tlocrt i pozicija na etaži."
                  : "Tlocrt i specifikacija površina."}
              </h2>
            </div>
            <p>Otvorite bilo koji prikaz za pregled u punoj veličini.</p>
          </div>
          <div className={styles.planGrid}>
            <a href={unit.floorPlan.src} target="_blank" rel="noreferrer">
              <div className={styles.planVisual}>
                <Image
                  className={styles.containImage}
                  src={unit.floorPlan.src}
                  alt={unit.floorPlan.alt}
                  fill
                  sizes="(max-width: 760px) calc(100vw - 28px), 58vw"
                />
              </div>
              <span>Tlocrt stana</span>
              <strong>Otvorite prikaz <ArrowRightIcon /></strong>
            </a>
            {unit.positionPlan ? (
              <a href={unit.positionPlan.src} target="_blank" rel="noreferrer">
                <div className={styles.planVisual}>
                  <Image
                    className={styles.containImage}
                    src={unit.positionPlan.src}
                    alt={unit.positionPlan.alt}
                    fill
                    sizes="(max-width: 760px) calc(100vw - 28px), 42vw"
                  />
                </div>
                <span>Pozicija na etaži</span>
                <strong>Otvorite prikaz <ArrowRightIcon /></strong>
              </a>
            ) : unit.tablePlan ? (
              <a href={unit.tablePlan.src} target="_blank" rel="noreferrer">
                <div className={styles.planVisual}>
                  <Image
                    className={styles.containImage}
                    src={unit.tablePlan.src}
                    alt={unit.tablePlan.alt}
                    fill
                    sizes="(max-width: 760px) calc(100vw - 28px), 42vw"
                  />
                </div>
                <span>Specifikacija površina</span>
                <strong>Otvorite prikaz <ArrowRightIcon /></strong>
              </a>
            ) : null}
          </div>
        </section>
      ) : null}

      {unit.gallery && unit.gallery.length > 0 ? (
        <section className={styles.unitGallerySection} aria-label="Galerija enterijera stana">
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>3D vizuelizacija enterijera</span>
              <h2>Inspiracija i organizacija prostora.</h2>
            </div>
            <p>
              Istražite predloge uređenja, raspored prostorija i ambijente
              predviđene za {unit.label}.
            </p>
          </div>
          <div className={styles.unitGalleryGrid}>
            {unit.gallery.map((image, index) => (
              <figure key={image.src}>
                <Image
                  className={styles.coverImage}
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1024px) 50vw, 50vw"
                />
                <span>0{index + 1}</span>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {unit.commercialSketchPdf ? (
        <section className={styles.sketchDownloadSection}>
          <div className={styles.sketchDownloadCard}>
            <div className={styles.sketchDownloadCopy}>
              <span className={styles.sectionEyebrow}>Dokumentacija</span>
              <h2>Komercijalna skica stana</h2>
              <p>
                Zvanični PDF dokument sa kompletnim tlocrtom, specifikacijom i
                tabelom površina prostorija za {unit.label}.
              </p>
            </div>
            <div className={styles.sketchDownloadAction}>
              <a
                className={styles.downloadSketchButton}
                href={unit.commercialSketchPdf}
                download
                target="_blank"
                rel="noreferrer"
              >
                <span>PREUZMI KOMERCIJALNU SKICU STANA</span>
                <DownloadIcon />
              </a>
            </div>
          </div>
        </section>
      ) : null}

      <section className={styles.salesCta}>
        <div>
          <span className={styles.sectionEyebrow}>Dostupan stan</span>
          <h2>Proverite detalje sa prodajnim timom.</h2>
          <p>
            Pozovite ili pošaljite upit za {unit.label} u projektu {project.name}.
          </p>
        </div>
        <ContactActions project={project} unit={unit} />
      </section>

      <MobileSalesBar project={project} unit={unit} />
    </main>
  );
}

function MobileSalesBar({ project, unit }: { project: Project; unit?: Unit }) {
  return (
    <aside className={styles.mobileSalesBar} aria-label="Brze prodajne akcije">
      <a href={siteSettings.phoneHref}>Pozovite</a>
      <a href={inquiryHref(project, unit)}>Pošaljite upit</a>
    </aside>
  );
}
