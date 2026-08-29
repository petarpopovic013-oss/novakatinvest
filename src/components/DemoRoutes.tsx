import Image from "next/image";
import Link from "next/link";

import { siteSettings } from "../data/site";
import type { Project, Unit, UnitStatus } from "../types/site";
import { ArrowRightIcon } from "./icons";
import styles from "./DemoRoutes.module.css";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

const unitStatusLabels: Record<UnitStatus, string> = {
  available: "Dostupan",
  reserved: "Rezervisan",
  sold: "Prodat",
};

const unitStatusClasses: Record<UnitStatus, string> = {
  available: styles.statusAvailable,
  reserved: styles.statusReserved,
  sold: styles.statusSold,
};

export function DemoPage({
  children,
  withSalesBar = false,
}: {
  children: React.ReactNode;
  withSalesBar?: boolean;
}) {
  return (
    <main className={`${styles.page} ${withSalesBar ? styles.pageWithSalesBar : ""}`}>
      {children}
    </main>
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Putanja stranice">
      <Link href="/">Početna</Link>
      {items.map((item) => (
        <span key={`${item.href ?? "current"}-${item.label}`}>
          <span className={styles.crumbSeparator} aria-hidden="true">/</span>{" "}
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function IntroHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}) {
  return (
    <section className={styles.introHero}>
      <div className={styles.heroContent}>
        <Breadcrumbs items={breadcrumbs} />
        <span className="eyebrow">{eyebrow ?? "Novak Invest"}</span>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroCopy}>{description}</p>
        {children}
      </div>
    </section>
  );
}

export function ProjectHero({
  project,
  breadcrumbs,
  title,
  description,
  meta,
  children,
}: {
  project: Project;
  breadcrumbs: BreadcrumbItem[];
  title?: string;
  description?: string;
  meta?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={styles.imageHero}>
      <Image
        className={styles.heroImage}
        src={project.hero.src}
        alt={project.hero.alt}
        fill
        preload
        sizes="(max-width: 720px) calc(100vw - 24px), min(1576px, calc(100vw - 48px))"
      />
      <div className={styles.heroShade} />
      <div className={styles.heroContent}>
        <Breadcrumbs items={breadcrumbs} />
        <span className={styles.demoBadge}>{project.statusLabel}</span>
        <h1 className={styles.heroTitle}>{title ?? project.name}</h1>
        <p className={styles.heroCopy}>{description ?? project.shortDescription}</p>
        <p className={styles.heroMeta}>{meta ?? `${project.location.address}, ${project.location.city} · ${project.statusLabel}`}</p>
        {children}
      </div>
    </section>
  );
}

export function ProjectCard({ project, kind }: { project: Project; kind: "offer" | "reference" }) {
  const href = kind === "offer" ? `/ponuda/${project.slug}` : `/reference/${project.slug}`;

  return (
    <article className={styles.projectCard}>
      <Link className={styles.projectVisual} href={href} aria-label={`Pogledajte ${project.name}`}>
        <Image
          className={styles.projectImage}
          src={project.hero.src}
          alt={project.hero.alt}
          fill
          sizes="(max-width: 720px) calc(100vw - 40px), 50vw"
        />
        <span className={styles.projectCardStatus}>
          <span className={styles.statusBadge}>{project.statusLabel}</span>
        </span>
      </Link>
      <div className={styles.projectBody}>
        <p className={styles.projectLocation}>{project.location.address} · {project.location.city}</p>
        <h2>{project.name}</h2>
        <p>{project.shortDescription}</p>
        <Link className={styles.cardLink} href={href}>
          {kind === "offer" ? "Pogledajte projekat" : "Pogledajte referencu"}
          <ArrowRightIcon />
        </Link>
      </div>
    </article>
  );
}

export function FactsGrid({ facts }: { facts: Project["facts"] }) {
  return (
    <div className={styles.factsGrid}>
      {facts.map((fact) => (
        <div className={styles.fact} key={`${fact.label}-${fact.value}`}>
          <span>{fact.label}</span>
          <strong>{fact.value}</strong>
        </div>
      ))}
    </div>
  );
}

export function UnitStatus({ status }: { status: UnitStatus }) {
  return (
    <span className={`${styles.unitStatus} ${unitStatusClasses[status]}`}>
      {unitStatusLabels[status]}
    </span>
  );
}

export function UnitsTable({ project, units }: { project: Project; units: Unit[] }) {
  if (units.length === 0) {
    return (
      <div className={styles.emptyOffer}>
        <h3>Ponuda jedinica uskoro</h3>
        <p>
          Za informacije o dostupnim jedinicama u projektu {project.name}
          pošaljite upit ili kontaktirajte prodajni tim.
        </p>
        <div className={styles.actions}>
          <Link className={styles.buttonPrimary} href={`/kontakt?projekat=${project.slug}`}>Pošaljite upit</Link>
          <a className={styles.buttonSecondary} href={siteSettings.phoneHref}>Pozovite prodaju</a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.unitsWrap}>
      <table className={styles.unitsTable}>
        <thead>
          <tr>
            <th>Jedinica</th>
            <th>Objekat</th>
            <th>Sprat</th>
            <th>Struktura</th>
            <th>Kvadratura</th>
            <th>Status</th>
            <th>Cena</th>
            <th><span className="sr-only">Detalj</span></th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => (
            <tr key={unit.id}>
              <td><strong>{unit.label}</strong></td>
              <td>{unit.building ?? "Objekat"}</td>
              <td>{unit.floor}</td>
              <td>{unit.roomType}</td>
              <td>{unit.area.toLocaleString("sr-Latn-RS")} m²</td>
              <td><UnitStatus status={unit.status} /></td>
              <td>Cena na upit</td>
              <td><Link className={styles.unitLink} href={`/ponuda/${project.slug}/${unit.slug}`}>Pogledajte stan</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SalesBar({ projectSlug, unitSlug }: { projectSlug: string; unitSlug?: string }) {
  const query = new URLSearchParams({ projekat: projectSlug });
  if (unitSlug) query.set("stan", unitSlug);

  return (
    <aside className={styles.salesBar} aria-label="Brze prodajne akcije">
      <a href={siteSettings.phoneHref}>Pozovite</a>
      <Link href={`/kontakt?${query.toString()}`}>Pošaljite upit</Link>
    </aside>
  );
}

export function SalesCta({
  title = "Razgovarajte direktno sa prodajom",
  description = "Za aktuelnu dostupnost, detalje projekta i naredne korake obratite se centralnom prodajnom timu Novak Invest.",
  context,
  secondaryHref,
  secondaryLabel,
}: {
  title?: string;
  description?: string;
  context?: { projectSlug?: string; unitSlug?: string };
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const query = new URLSearchParams();
  if (context?.projectSlug) query.set("projekat", context.projectSlug);
  if (context?.unitSlug) query.set("stan", context.unitSlug);
  const contactHref = query.size ? `/kontakt?${query.toString()}` : "/kontakt";

  return (
    <section className={styles.sectionCompact}>
      <div className={`${styles.inner} ${styles.ctaPanel}`}>
        <div>
          <span className={styles.demoBadge}>Centralna prodaja</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.ctaActions}>
          {secondaryHref && secondaryLabel ? <Link className={styles.textLinkLight} href={secondaryHref}>{secondaryLabel}</Link> : <a className={styles.textLinkLight} href={siteSettings.phoneHref}>{siteSettings.phone}</a>}
          <Link className={styles.buttonLight} href={contactHref}>Kontaktirajte prodaju</Link>
        </div>
      </div>
    </section>
  );
}

export { styles as demoStyles, unitStatusLabels };
