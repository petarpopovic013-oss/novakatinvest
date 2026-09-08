import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, ArrowUpRightIcon } from "./icons";
import styles from "./AboutPage.module.css";

export function AboutPage() {
  return (
    <main className={styles.page}>
      {/* ------------------------------------------------------------------
          Hero Section with Texture, Background Logo Watermark & Verbatim Intro
          ------------------------------------------------------------------ */}
      <section className={styles.hero} aria-labelledby="about-heading">
        {/* Subtle Architectural Logo Watermark in Background */}
        <div className={styles.heroWatermark} aria-hidden="true">
          <Image
            src="/images/novak-mark.png"
            alt=""
            width={533}
            height={533}
            priority
          />
        </div>

        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Putanja stranice">
            <Link href="/">Početna</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">O nama</span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrow}>O nama</span>
              <span className={styles.eyebrowNote}>Novak AT Invest · Novi Sad</span>
            </div>

            <h1 id="about-heading" className={styles.heroTitle}>
              Gradimo prostore za kvalitetan život
            </h1>

            <p className={styles.heroLead}>
              Novak AT Invest je građevinska kompanija iz Novog Sada specijalizovana za razvoj i
              izgradnju savremenih stambenih i poslovnih objekata. Kompanija se oslanja na više od
              15 godina iskustva svojih osnivača u građevinarstvu i realizaciji više desetina
              projekata.
            </p>

            <p className={styles.heroDescription}>
              Naš cilj nije samo izgradnja objekata, već stvaranje kvalitetnih, funkcionalnih i
              dugoročno vrednih prostora u kojima ljudi mogu udobno da žive i rade. Svakom projektu
              pristupamo odgovorno, vodeći računa o lokaciji, arhitektonskom rešenju, organizaciji
              prostora, kvalitetu materijala i potrebama budućih korisnika.
            </p>
          </div>

          {/* Key Metric Indicators derived directly from text */}
          <div className={styles.metricsGrid} aria-label="Ključni podaci">
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>15+</span>
              <span className={styles.metricLabel}>godina iskustva osnivača u građevinarstvu</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>Više desetina</span>
              <span className={styles.metricLabel}>uspešno realizovanih projekata</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>Novi Sad</span>
              <span className={styles.metricLabel}>i okolina kao fokus razvoja novogradnje</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>Od ideje</span>
              <span className={styles.metricLabel}>do useljenja i podrške kupcima</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Core Pillars: Kvalitet koji traje & Pažljivo birane lokacije
          ------------------------------------------------------------------ */}
      <section className={styles.pillarsSection} aria-label="Principi gradnje">
        {/* Pillar 1: Kvalitet koji traje */}
        <article className={styles.pillarCard}>
          <div className={styles.pillarText}>
            <div className={styles.pillarHeader}>
              <span className={styles.pillarNumber}>01</span>
              <h2 className={styles.pillarTitle}>Kvalitet koji traje</h2>
            </div>
            <p className={styles.pillarParagraph}>
              Verujemo da se vrednost nekretnine prepoznaje u svakom detalju. Zato biramo savremene
              i proverene materijale, primenjujemo pouzdana inženjerska rešenja i poštujemo visoke
              standarde gradnje. Posebnu pažnju posvećujemo funkcionalnim rasporedima, prirodnom
              osvetljenju, energetskoj efikasnosti i završnoj obradi.
            </p>
            <p className={styles.pillarParagraph}>
              Naši objekti projektovani su tako da odgovore zahtevima savremenog načina života,
              ali i da zadrže kvalitet, udobnost i tržišnu vrednost tokom godina. Svaki prostor
              razvijamo sa jasnom namerom – da bude prijatan za svakodnevni život, jednostavan za
              korišćenje i usklađen sa svojim okruženjem.
            </p>
          </div>

          <div className={styles.pillarMedia}>
            <Image
              className={styles.pillarImage}
              src="/images/novak/temerinska-143/building-hero.webp"
              alt="Temerinska 143 projekat Novak Invest u Novom Sadu"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <span className={styles.mediaCaption}>Standard i materijali</span>
          </div>
        </article>

        {/* Pillar 2: Pažljivo birane lokacije */}
        <article className={`${styles.pillarCard} ${styles.pillarCardReverse}`}>
          <div className={styles.pillarText}>
            <div className={styles.pillarHeader}>
              <span className={styles.pillarNumber}>02</span>
              <h2 className={styles.pillarTitle}>Pažljivo birane lokacije</h2>
            </div>
            <p className={styles.pillarParagraph}>
              Dobra nekretnina počinje dobrom lokacijom. Prilikom razvoja novih stambenih i
              poslovnih objekata pažljivo analiziramo povezanost sa važnim delovima grada,
              dostupnost svakodnevnih sadržaja i potencijal budućeg razvoja okruženja.
            </p>
            <p className={styles.pillarParagraph}>
              Na taj način stvaramo nekretnine koje pružaju ravnotežu između udobnosti,
              funkcionalnosti i sigurnosti ulaganja. Bez obzira na veličinu objekta, svaki projekat
              posmatramo kao celinu koja treba da doprinese kvalitetu života svojih stanara i
              vrednosti prostora u kojem nastaje.
            </p>
          </div>

          <div className={styles.pillarMedia}>
            <Image
              className={styles.pillarImage}
              src="/reference-media/atrium-residence/01.webp"
              alt="Atrium Residence kompleks u Novom Sadu"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <span className={styles.mediaCaption}>Povezanost i okruženje</span>
          </div>
        </article>
      </section>

      {/* ------------------------------------------------------------------
          Process Section: Od ideje do useljenja
          ------------------------------------------------------------------ */}
      <section className={styles.processSection} aria-labelledby="process-heading">
        <div className={styles.processInner}>
          <div className={styles.processHeader}>
            <span className={styles.processEyebrow}>Sveobuhvatan pristup</span>
            <h2 id="process-heading" className={styles.processTitle}>
              Od ideje do useljenja
            </h2>
            <p className={styles.processLead}>
              Novak AT Invest upravlja svim ključnim fazama razvoja nekretnina – od izbora i
              analize lokacije, planiranja i pripreme projekta, preko organizacije i praćenja
              izgradnje, do prodaje i podrške kupcima.
            </p>
            <p className={styles.processDescription}>
              Takav pristup omogućava nam da kontrolišemo kvalitet, uskladimo sve učesnike u
              procesu i kupcima pružimo jasne i pouzdane informacije. Otvorena komunikacija i
              profesionalan odnos predstavljaju važan deo našeg poslovanja, jer znamo da je
              kupovina stana jedna od najznačajnijih životnih odluka.
            </p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.processStepCard}>
              <span className={styles.stepNumber}>Faza 01</span>
              <h3 className={styles.stepTitle}>Izbor i analiza lokacije</h3>
              <p className={styles.stepDetail}>
                Procena infrastrukturne povezanosti, potencijala lokacije i budućeg urbanog razvoja.
              </p>
            </div>
            <div className={styles.processStepCard}>
              <span className={styles.stepNumber}>Faza 02</span>
              <h3 className={styles.stepTitle}>Planiranje i priprema</h3>
              <p className={styles.stepDetail}>
                Arhitektonsko rešenje, funkcionalni rasporedi stanova i inženjerska projektna dokumentacija.
              </p>
            </div>
            <div className={styles.processStepCard}>
              <span className={styles.stepNumber}>Faza 03</span>
              <h3 className={styles.stepTitle}>Organizacija i izgradnja</h3>
              <p className={styles.stepDetail}>
                Kontrola izvođenja radova, provereni materijali i poštovanje visokih standarda gradnje.
              </p>
            </div>
            <div className={styles.processStepCard}>
              <span className={styles.stepNumber}>Faza 04</span>
              <h3 className={styles.stepTitle}>Prodaja i podrška</h3>
              <p className={styles.stepDetail}>
                Direktna i otvorena komunikacija sa kupcima, od prvog upita do uspešnog useljenja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Vision & Statement Section: Prostori sa dugoročnom vrednošću
          ------------------------------------------------------------------ */}
      <section className={styles.visionSection} aria-labelledby="vision-heading">
        {/* Subtle Architectural White Logo Watermark in Background */}
        <div className={styles.visionWatermark} aria-hidden="true">
          <Image
            src="/images/novak-mark-white.png"
            alt=""
            width={533}
            height={533}
          />
        </div>

        <div className={styles.visionInner}>
          <span className={styles.visionEyebrow}>Vizija kompanije</span>
          <h2 id="vision-heading" className={styles.visionTitle}>
            Prostori sa dugoročnom vrednošću
          </h2>

          <p className={styles.visionLead}>
            Naša vizija je da Novak AT Invest bude prepoznat kao pouzdan investitor u novogradnji u
            Novom Sadu i okolini – kompanija koja spaja kvalitetnu gradnju, savremenu arhitekturu
            i razumevanje potreba kupaca.
          </p>

          <blockquote className={styles.visionQuote}>
            Gradimo promišljeno, odgovorno i sa pogledom u budućnost. Stvaramo prostore koji nisu
            samo kvadrati, već mesta za život, posao, sigurnost i nove početke.
          </blockquote>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Call to Action (Ponuda & Kontakt)
          ------------------------------------------------------------------ */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div>
          <h2 id="cta-heading" className={styles.ctaHeading}>
            Pronađite svoj budući dom
          </h2>
          <p className={styles.ctaText}>
            Pogledajte našu aktuelnu ponudu stanova u Novom Sadu i okolini ili stupite u
            direktan kontakt sa našim timom.
          </p>
        </div>

        <div className={styles.ctaActions}>
          <Link className={styles.primaryButton} href="/ponuda">
            Aktuelna ponuda <ArrowUpRightIcon />
          </Link>
          <Link className={styles.secondaryButton} href="/kontakt">
            Kontaktirajte nas <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
