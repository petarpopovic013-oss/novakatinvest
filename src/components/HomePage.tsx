import Image from "next/image";
import Link from "next/link";

import {
  offerProjects,
  referenceProjects,
  siteSettings,
} from "../data/site";
import styles from "./HomePage.module.css";

const values = [
  {
    number: "01",
    title: "Kvalitet i dugotrajnost",
    description:
      "Materijale i sisteme biramo sa idejom da dom ostane pouzdan, prijatan i jednostavan za održavanje godinama.",
  },
  {
    number: "02",
    title: "Lokacija i funkcionalnost",
    description:
      "Svaki projekat razvijamo u odnosu na lokaciju, svakodnevne potrebe stanara i pametnu organizaciju prostora.",
  },
  {
    number: "03",
    title: "Direktan odnos",
    description:
      "Kupci razgovaraju direktno sa timom investitora, od prvog pitanja do izbora doma i primopredaje.",
  },
] as const;

const standards = [
  {
    title: "Keramika",
    image: "/images/novak/keramika.jpg",
    description:
      "Pažljivo odabrana keramika usklađena sa savremenim enterijerom i zahtevima svakodnevnog održavanja.",
  },
  {
    title: "Podovi",
    image: "/images/novak/podovi.jpg",
    description:
      "Hrastov parket u dnevnim i spavaćim sobama daje prostoru prirodnu toplinu i trajnost.",
  },
  {
    title: "Unutrašnja stolarija",
    image: "/images/novak/stolarija.jpg",
    description:
      "Svedena unutrašnja stolarija deo je funkcionalno i skladno oblikovanog doma.",
  },
  {
    title: "Fasadna stolarija",
    image: "/images/novak/prozori.jpg",
    description:
      "Termoizolaciono staklo i PVC roletne doprinose komforu i energetskoj efikasnosti prostora.",
  },
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="home-heading">
        <Image
          className={styles.heroImage}
          src="/reference-media/atrium-residence/01.webp"
          alt="Atrium Residence kompleks"
          fill
          sizes="(max-width: 767px) calc(100vw - 24px), min(1576px, calc(100vw - 48px))"
          preload
        />
        <div className={styles.heroShade} />

        <div className={styles.heroContent}>
          <div className={styles.heroMeta}>
            <span>Temerinska 143</span>
            <span aria-hidden="true">/</span>
            <span>Novi Sad</span>
          </div>
          <h1 id="home-heading">Gradimo prostore za život.</h1>
          <p>
            Stvaramo savremene i funkcionalne domove, oslonjene na više od
            15 godina iskustva u građevinarstvu i neposredan odnos sa kupcima.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/ponuda">
              Pogledajte ponudu <Arrow />
            </Link>
            <Link className={styles.secondaryButton} href="/o-nama">
              Upoznajte Novak Invest
            </Link>
          </div>
          <div className={styles.heroHighlights} aria-label="O kompaniji">
            <span><strong>15+</strong> godina iskustva</span>
            <span>Projekti u Novom Sadu i okolini</span>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="offer-heading">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>Aktuelno</span>
            <h2 id="offer-heading">Ponuda projekata</h2>
          </div>
          <p>
            Istražite projekte za život u Novom Sadu i okolini i pronađite
            lokaciju i prostor koji odgovaraju vašim potrebama.
          </p>
        </div>

        <div className={styles.projectList}>
          {offerProjects.map((project, index) => (
            <article
              className={`${styles.projectCard} ${
                index % 2 === 1 ? styles.projectCardReverse : ""
              }`}
              key={project.id}
            >
              <Link
                className={styles.projectImageWrap}
                href={`/ponuda/${project.slug}`}
                aria-label={`Pogledajte projekat ${project.name}`}
              >
                <Image
                  className={styles.projectImage}
                  src={project.hero.src}
                  alt={project.hero.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 36px), 62vw"
                />
              </Link>

              <div className={styles.projectBody}>
                <div className={styles.statusLine}>
                  <span className={styles.demoBadge}>{project.statusLabel}</span>
                </div>
                <h3>{project.name}</h3>
                <p className={styles.location}>
                  {project.location.address}, {project.location.city}
                </p>
                <p className={styles.description}>{project.shortDescription}</p>

                <dl className={styles.facts}>
                  {project.facts.slice(0, 3).map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <Link
                  className={styles.textLink}
                  href={`/ponuda/${project.slug}`}
                >
                  Pogledajte projekat <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.why}`} aria-labelledby="why-heading">
        <div className={styles.experience}>
          <span>Iskustvo vlasnika u građevinarstvu</span>
          <strong>15+</strong>
          <p>godina posvećenih razvoju i izgradnji prostora za život</p>
        </div>

        <div className={styles.whyContent}>
          <span className={styles.eyebrow}>Zašto Novak Invest</span>
          <h2 id="why-heading">Dom po meri svakodnevnog života.</h2>
          <p className={styles.whyLead}>
            Gradimo sa dugoročnom perspektivom: od izbora lokacije i
            projektovanja, do materijala i neposrednog odnosa sa kupcima.
          </p>

          <ol className={styles.values}>
            {values.map((value) => (
              <li key={value.number}>
                <span>{value.number}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="standards-heading">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>Detalji doma</span>
            <h2 id="standards-heading">Standard gradnje</h2>
          </div>
          <p>
            Materijali su deo celovitog pristupa komforu, funkcionalnosti i
            trajnosti, a specifikacije se prilagođavaju svakom projektu.
          </p>
        </div>

        <div className={styles.standardsGrid}>
          {standards.map((standard, index) => (
            <article className={styles.standardCard} key={standard.title}>
              <div className={styles.standardImageWrap}>
                <Image
                  className={styles.standardImage}
                  src={standard.image}
                  alt={`${standard.title} u projektima Novak Invest`}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 36px), 25vw"
                />
              </div>
              <div className={styles.standardCopy}>
                <span>0{index + 1}</span>
                <h3>{standard.title}</h3>
                <p>{standard.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="references-heading">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>Portfolio</span>
            <h2 id="references-heading">Iza nas ostaju prostori za život.</h2>
          </div>
          <div className={styles.referenceIntro}>
            <p>
              Odabrani projekti predstavljaju pregled dosadašnjeg rada i našeg
              pristupa savremenom, funkcionalnom stanovanju.
            </p>
            <Link className={styles.textLink} href="/reference">
              Pogledajte sve reference <Arrow />
            </Link>
          </div>
        </div>

        <div className={styles.referencesGrid}>
          {referenceProjects.map((project) => (
            <article className={styles.referenceCard} key={project.id}>
              <Link
                className={styles.referenceImageWrap}
                href={`/reference/${project.slug}`}
                aria-label={`Pogledajte referencu ${project.name}`}
              >
                <Image
                  className={styles.referenceImage}
                  src={project.hero.src}
                  alt={project.hero.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 36px), 50vw"
                />
                <span className={styles.imageBadge}>Referenca</span>
              </Link>
              <div className={styles.referenceMeta}>
                <div>
                  <h3>{project.name}</h3>
                  <p>
                    {project.location.address}, {project.location.city}
                  </p>
                </div>
                <Link
                  href={`/reference/${project.slug}`}
                  aria-label={`Otvorite referencu ${project.name}`}
                >
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.salesCta} aria-labelledby="sales-heading">
        <div>
          <span className={styles.darkEyebrow}>Centralna prodaja</span>
          <h2 id="sales-heading">Pronađimo prostor koji odgovara vama.</h2>
          <p>
            Razgovarajte direktno sa prodajnim timom o projektima, dostupnosti
            i narednim koracima kupovine.
          </p>
        </div>

        <div className={styles.contactDetails}>
          <a href={siteSettings.phoneHref}>
            <span>Telefon</span>
            <strong>{siteSettings.phone}</strong>
          </a>
          <a href={`mailto:${siteSettings.email}`}>
            <span>Email</span>
            <strong>{siteSettings.email}</strong>
          </a>
          <Link className={styles.lightButton} href="/kontakt">
            Kontaktirajte prodaju <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
