"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation, offerProjects, referenceProjects } from "../data/site";
import { ArrowRightIcon } from "./icons";
import styles from "./SiteHeader.module.css";

const isRouteActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link
          className={styles.brand}
          href="/"
          aria-label="Novak Invest — početna"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            className={styles.logo}
            src="/images/logo-cropped.jpg"
            alt=""
            width={533}
            height={533}
            sizes="52px"
          />
          <span className={styles.brandName}>
            Novak <span>Invest</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Glavna navigacija">
          {navigation.map((item) => {
            const active = isRouteActive(pathname, item.href);

            if (item.href === "/ponuda" || item.href === "/reference") {
              const isOffer = item.href === "/ponuda";
              const projects = isOffer ? offerProjects : referenceProjects;
              const sectionLabel = isOffer ? "Aktuelna ponuda" : "Završeni projekti";
              const allLabel = isOffer ? "Cela ponuda" : "Sve reference";

              return (
                <div className={styles.referenceNavItem} key={item.href}>
                  <Link
                    className={active ? styles.activeLink : undefined}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    aria-haspopup="true"
                  >
                    {item.label}
                  </Link>
                  <div
                    className={`${styles.referenceMega} ${
                      isOffer ? styles.offerMega : ""
                    }`}
                  >
                    <div className={styles.referenceMegaHead}>
                      <span>{sectionLabel}</span>
                      <Link href={item.href}>{allLabel}</Link>
                    </div>
                    <div
                      className={`${styles.referenceMegaGrid} ${
                        isOffer ? styles.offerMegaGrid : ""
                      }`}
                    >
                      {projects.map((project) => (
                        <Link
                          className={styles.referencePreview}
                          href={`${item.href}/${project.slug}`}
                          key={project.slug}
                        >
                          <span className={styles.referencePreviewImage}>
                            <Image src={project.hero.src} alt="" fill sizes="290px" />
                          </span>
                          <span className={styles.referencePreviewCopy}>
                            <strong>{project.name}</strong>
                            <small>{project.location.address} · {project.location.city}</small>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                className={active ? styles.activeLink : undefined}
                href={item.href}
                key={item.href}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link
            className={styles.salesButton}
            href="/kontakt"
            aria-label="Kontaktirajte prodaju"
            onClick={() => setMenuOpen(false)}
          >
            <span className={styles.salesDesktop}>Kontaktirajte prodaju</span>
            <span className={styles.salesMobile}>Prodaja</span>
            <ArrowRightIcon />
          </Link>

          <button
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
            type="button"
            aria-controls="mobilna-navigacija"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
        id="mobilna-navigacija"
        aria-label="Mobilna navigacija"
      >
        {navigation.map((item, index) => {
          const active = isRouteActive(pathname, item.href);

          return (
            <Link
              className={active ? styles.mobileActiveLink : undefined}
              href={item.href}
              key={item.href}
              aria-current={active ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
              <ArrowRightIcon />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
