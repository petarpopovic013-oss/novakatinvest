import Image from "next/image";
import Link from "next/link";

import { contactChannels } from "../data/site";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./icons";
import styles from "./ContactPage.module.css";

export function ContactPage() {
  return (
    <div className={styles.page}>
      {/* ------------------------------------------------------------------
          Hero Section with Architectural Watermark matching "O nama"
          ------------------------------------------------------------------ */}
      <section className={styles.hero} aria-labelledby="contact-heading">
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
            <span aria-current="page">Kontakt</span>
          </nav>

          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrow}>Kontakt</span>
            <span className={styles.eyebrowNote}>Novak AT Invest · Novi Sad</span>
          </div>

          <h1 id="contact-heading" className={styles.heroTitle}>
            Razgovarajte direktno sa našim timom
          </h1>

          <p className={styles.heroLead}>
            Bez posrednika i čekanja. Naš tim vam stoji na raspolaganju za sve
            informacije o aktuelnim projektima, tlocrtima, slobodnim stanovima i
            detaljima kupovine.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Direct Contact Channels (Prodaja & Administracija)
          ------------------------------------------------------------------ */}
      <section className={styles.channelsSection} aria-labelledby="channels-heading">
        <h2 id="channels-heading" className="sr-only">
          Kanali komunikacije
        </h2>

        <div className={styles.channelsGrid}>
          {/* Card 1: Prodaja */}
          <article className={`${styles.channelCard} ${styles.channelCardFeatured}`}>
            <div className={styles.channelTop}>
              <div className={styles.channelHeader}>
                <span className={styles.channelBadge}>
                  {contactChannels.sales.badge}
                </span>
                <span className={styles.eyebrowNote}>Agent prodaje</span>
              </div>
              <h3 className={styles.channelTitle}>
                {contactChannels.sales.title}
              </h3>
              <p className={styles.channelDescription}>
                {contactChannels.sales.description}
              </p>
            </div>

            <div>
              <div className={styles.channelDetails}>
                <div className={styles.detailRow}>
                  <div className={styles.detailIcon} aria-hidden="true">
                    <PhoneIcon />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Telefon prodaje</span>
                    <a
                      className={styles.detailValue}
                      href={contactChannels.sales.phoneHref}
                    >
                      {contactChannels.sales.phone}
                    </a>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <div className={styles.detailIcon} aria-hidden="true">
                    <MailIcon />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>E-mail prodaje</span>
                    <a
                      className={styles.detailValue}
                      href={contactChannels.sales.emailHref}
                    >
                      {contactChannels.sales.email}
                    </a>
                  </div>
                </div>
              </div>

              <ul className={styles.channelHighlights} aria-label="Prednosti direktne komunikacije">
                {contactChannels.sales.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className={styles.channelActions}>
                <a
                  className={styles.actionButtonPrimary}
                  href={contactChannels.sales.phoneHref}
                >
                  <PhoneIcon />
                  <span>Pozovite prodaju</span>
                </a>
                <a
                  className={styles.actionButtonSecondary}
                  href={contactChannels.sales.emailHref}
                >
                  <MailIcon />
                  <span>Pošaljite e-mail</span>
                </a>
              </div>
            </div>
          </article>

          {/* Card 2: Administracija */}
          <article className={styles.channelCard}>
            <div className={styles.channelTop}>
              <div className={styles.channelHeader}>
                <span className={`${styles.channelBadge} ${styles.channelBadgeAlt}`}>
                  {contactChannels.administration.badge}
                </span>
                <span className={styles.eyebrowNote}>Uprava & pravni poslovi</span>
              </div>
              <h3 className={styles.channelTitle}>
                {contactChannels.administration.title}
              </h3>
              <p className={styles.channelDescription}>
                {contactChannels.administration.description}
              </p>
            </div>

            <div>
              <div className={styles.channelDetails}>
                <div className={styles.detailRow}>
                  <div className={styles.detailIcon} aria-hidden="true">
                    <MailIcon />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>E-mail administracije</span>
                    <a
                      className={styles.detailValue}
                      href={contactChannels.administration.emailHref}
                    >
                      {contactChannels.administration.email}
                    </a>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <div className={styles.detailIcon} aria-hidden="true">
                    <MapPinIcon />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Sedište kompanije</span>
                    <a
                      className={styles.detailValue}
                      href={contactChannels.office.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contactChannels.office.fullAddress}
                    </a>
                  </div>
                </div>
              </div>

              <ul className={styles.channelHighlights} aria-label="Opšti detalji">
                {contactChannels.administration.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className={styles.channelActions}>
                <a
                  className={styles.actionButtonPrimary}
                  href={contactChannels.administration.emailHref}
                >
                  <MailIcon />
                  <span>Kontaktirajte upravu</span>
                </a>
                <a
                  className={styles.actionButtonSecondary}
                  href={contactChannels.office.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPinIcon />
                  <span>Pogledajte na mapi</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Office & Interactive Map Section (Radnička 49, Novi Sad)
          ------------------------------------------------------------------ */}
      <section className={styles.officeSection} aria-labelledby="office-heading">
        <div className={styles.officeCard}>
          <div>
            <div className={styles.officeHeader}>
              <span className={styles.eyebrow}>Lokacija</span>
              <h2 id="office-heading">Sedište u Novom Sadu</h2>
              <p>
                Kancelarija kompanije Novak AT Invest nalazi se na pristupačnoj
                lokaciji u Novom Sadu, u neposrednoj blizini centra grada i Dunava.
              </p>
            </div>

            <div className={styles.officeInfoGrid}>
              <div className={styles.officeInfoItem}>
                <div className={styles.detailIcon} aria-hidden="true">
                  <MapPinIcon />
                </div>
                <div className={styles.officeInfoText}>
                  <strong>{contactChannels.office.address}</strong>
                  <span>{contactChannels.office.city}, {contactChannels.office.country}</span>
                </div>
              </div>

              <div className={styles.officeInfoItem}>
                <div className={styles.detailIcon} aria-hidden="true">
                  <ClockIcon />
                </div>
                <div className={styles.officeInfoText}>
                  <strong>{contactChannels.office.workingHours}</strong>
                  <span>{contactChannels.office.weekend}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className={styles.officeNote}>
              {contactChannels.office.note}
            </p>
            <div className={styles.officeActions}>
              <a
                className={styles.actionButtonPrimary}
                href={contactChannels.office.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>Uputstva za navigaciju</span>
                <ArrowUpRightIcon />
              </a>
              <Link className={styles.actionButtonSecondary} href="/ponuda">
                <span>Pogledajte ponudu stanova</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Embedded Google Map container */}
        <div className={styles.mapWrapper}>
          <div className={styles.mapBadge}>
            <MapPinIcon />
            <span>Radnička 49, Novi Sad</span>
          </div>

          <iframe
            className={styles.mapIframe}
            title="Lokacija Novak Invest: Radnička 49, Novi Sad"
            src={contactChannels.office.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            className={styles.mapFloatingAction}
            href={contactChannels.office.mapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Otvori lokaciju Radnička 49 u Google Maps aplikaciji"
          >
            <span>Otvori u Google Maps</span>
            <ArrowUpRightIcon />
          </a>
        </div>
      </section>
    </div>
  );
}
