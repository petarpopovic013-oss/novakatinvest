import Image from "next/image";
import Link from "next/link";

import { navigation, offerProjects, siteSettings } from "../data/site";
import { ArrowRightIcon } from "./icons";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.cta}>
        <div>
          <span className={styles.eyebrow}>Pronađite svoj novi dom</span>
          <h2>Prostor po meri vašeg života.</h2>
        </div>
        <div className={styles.ctaAside}>
          <p>
            Upoznajte naše projekte i razgovarajte direktno sa prodajnim timom
            o dostupnoj ponudi.
          </p>
          <Link className={styles.ctaButton} href="/ponuda">
            Pogledajte ponudu <ArrowRightIcon />
          </Link>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.brandBlock}>
          <Link
            className={styles.brand}
            href="/"
            aria-label="Novak Invest — početna"
          >
            <Image
              src="/images/logo-cropped.jpg"
              alt=""
              width={533}
              height={533}
              sizes="72px"
            />
            <span>Novak <strong>Invest</strong></span>
          </Link>
          <p>
            Savremeni stambeni i stambeno-poslovni projekti u Novom Sadu i
            okolini, zasnovani na kvalitetu, funkcionalnosti i iskustvu.
          </p>
        </div>

        <div className={styles.linkGroups}>
          <nav aria-label="Navigacija u podnožju">
            <h3>Sajt</h3>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                <span>{item.label}</span>
                <ArrowRightIcon />
              </Link>
            ))}
          </nav>

          <nav aria-label="Ponuda projekata u podnožju">
            <h3>Projekti</h3>
            {offerProjects.map((project) => (
              <Link href={`/ponuda/${project.slug}`} key={project.slug}>
                <span>{project.name}</span>
                <ArrowRightIcon />
              </Link>
            ))}
          </nav>

          <div className={styles.contact}>
            <h3>Kontakt</h3>
            <div>
              <span>Telefon</span>
              <a href={siteSettings.phoneHref}>{siteSettings.phone}</a>
            </div>
            <div>
              <span>E-mail</span>
              <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
            </div>
            <div>
              <span>Adresa</span>
              <a href={siteSettings.mapUrl} target="_blank" rel="noreferrer">
                {siteSettings.address}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <span>
          © {currentYear} {siteSettings.legalName}
        </span>
        <span>Više od 15 godina iskustva u građevinarstvu</span>
      </div>
    </footer>
  );
}
