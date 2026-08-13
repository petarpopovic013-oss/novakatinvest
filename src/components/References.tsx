import Image from "next/image";
import Link from "next/link";

import type { ReferenceStory } from "../data/references";
import { referenceStories } from "../data/references";
import { ArrowRightIcon } from "./icons";
import { ReferenceHeroVideo } from "./ReferenceHeroVideo";
import styles from "./References.module.css";

export function ReferencesIndex() {
  return (
    <main className={styles.page}>
      <section className={styles.indexIntro}>
        <div className={styles.breadcrumbs}>
          <Link href="/">Početna</Link><span>/</span><span aria-current="page">Reference</span>
        </div>
        <div className={styles.indexIntroGrid}>
          <div>
            <span className="eyebrow">Izvedeni projekti</span>
            <h1>Prostor potvrđen kroz iskustvo.</h1>
          </div>
          <p>
            Završeni objekti najbolje govore o načinu na koji pristupamo arhitekturi,
            tehničkim rešenjima i svakodnevnom kvalitetu stanovanja.
          </p>
        </div>
      </section>

      <section className={styles.cards} aria-label="Završeni projekti">
        {referenceStories.map((reference, index) => (
          <article className={styles.card} key={reference.slug}>
            <Link className={styles.cardMedia} href={`/reference/${reference.slug}`}>
              <Image
                className={styles.cardImage}
                src={reference.poster}
                alt=""
                fill
                preload={index === 0}
                sizes="(max-width: 760px) calc(100vw - 28px), 50vw"
              />
              <span className={styles.cardNumber}>0{index + 1}</span>
              <span className={styles.cardAction} aria-hidden="true"><ArrowRightIcon /></span>
            </Link>
            <div className={styles.cardBody}>
              <p>{reference.eyebrow}</p>
              <h2><Link href={`/reference/${reference.slug}`}>{reference.name}</Link></h2>
              <p>{reference.summary}</p>
              <Link className={styles.textLink} href={`/reference/${reference.slug}`}>
                Pogledajte projekat <ArrowRightIcon />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.indexStatement}>
        <span>Novak Invest · Novi Sad</span>
        <p>Gradimo objekte koji ostaju relevantni i kada gradilište utihne.</p>
      </section>
    </main>
  );
}

export function ReferenceDetail({ reference }: { reference: ReferenceStory }) {
  return (
    <main className={styles.page}>
      <section className={styles.detailHero}>
        <ReferenceHeroVideo
          src={reference.video}
          poster={reference.poster}
          title={reference.name}
        />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <div className={`${styles.breadcrumbs} ${styles.breadcrumbsLight}`}>
            <Link href="/">Početna</Link><span>/</span>
            <Link href="/reference">Reference</Link><span>/</span>
            <span aria-current="page">{reference.name}</span>
          </div>
          <span className={styles.heroEyebrow}>{reference.eyebrow}</span>
          <h1>{reference.name}</h1>
          <p>{reference.headline}</p>
          <span className={styles.heroLocation}>{reference.location}</span>
        </div>
      </section>

      <section className={styles.introduction}>
        <div className={styles.overviewHeading}>
          <span className={styles.sectionEyebrow}>O projektu</span>
          <h2>{reference.headline}</h2>
        </div>
        <div className={styles.leadCopy}>
          {reference.introduction.map((paragraph, index) => (
            <p className={index === 0 ? styles.lead : undefined} key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className={styles.facts} aria-label="Ključni podaci o projektu">
          {reference.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.story}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>Detalji projekta</span>
            <h2>Od ideje do izvedenog prostora.</h2>
          </div>
          <p>
            Istražite arhitekturu, tehnička rešenja i detalje koji određuju
            svakodnevni karakter projekta.
          </p>
        </div>
        {reference.sections.map((section, index) => {
          const hasImage = index % 2 === 0;
          const imageIndex = Math.floor(index / 2) % reference.gallery.length;

          return (
            <article
              className={`${styles.featureRow} ${
                hasImage && imageIndex % 2 === 1 ? styles.featureRowReverse : ""
              } ${!hasImage ? styles.featureTextOnly : ""}`}
              key={section.title}
            >
              {hasImage ? (
                <figure className={styles.featureMedia}>
                  <Image
                    src={reference.gallery[imageIndex].src}
                    alt={reference.gallery[imageIndex].alt}
                    fill
                    sizes="(max-width: 760px) calc(100vw - 28px), 60vw"
                  />
                  <span>0{index + 1}</span>
                </figure>
              ) : (
                <span className={styles.textOnlyNumber}>0{index + 1}</span>
              )}
              <div className={styles.featureBody}>
                <span className={styles.featureLabel}>{reference.name}</span>
                <h3>{section.title}</h3>
                <div className={styles.featureCopy}>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </article>
          );
        })}
      </section>

    </main>
  );
}
