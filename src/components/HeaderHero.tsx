"use client";

import Image from "next/image";
import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import styles from "./HeaderHero.module.css";

const slides = [
  {
    src: "/images/hero.jpg",
    alt: "Contemporary stone townhouse surrounded by mature olive trees",
  },
  {
    src: "/images/landscape.jpg",
    alt: "Landscaped grounds surrounding a modern residence",
  },
  {
    src: "/images/garden.jpg",
    alt: "Private garden at a contemporary home",
  },
] as const;

const navigation = [
  ["Home", "#top"],
  ["About", "#details"],
  ["Collection", "#collection"],
  ["Services", "#enquire"],
] as const;

export default function HeaderHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <>
      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="Novak AT Invest home">
          <Image
            className={styles.logoImage}
            src="/images/logo-cropped.jpg"
            alt="Novak AT Invest"
            width={533}
            height={533}
          />
        </a>

        <nav className={styles.navigation} aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className={styles.contactButton} href="#enquire">
          <span>Contact Us</span>
          <ArrowRightIcon />
        </a>
      </header>

      <section className={styles.hero} aria-label="Featured properties">
        <div className={styles.slides} aria-live="polite">
          {slides.map((slide, index) => (
            <Image
              key={slide.src}
              className={`${styles.image} ${
                index === activeSlide ? styles.imageActive : ""
              }`}
              src={slide.src}
              alt={index === activeSlide ? slide.alt : ""}
              fill
              sizes="(max-width: 768px) calc(100vw - 24px), calc(100vw - 44px)"
              preload={index === 0}
              aria-hidden={index !== activeSlide}
            />
          ))}
        </div>

        <div className={styles.overlay} />

        <div className={styles.progress} aria-hidden="true">
          {Array.from({ length: 6 }, (_, index) => (
            <span
              key={index}
              className={index === activeSlide ? styles.progressActive : undefined}
            />
          ))}
        </div>

        <div className={styles.controls}>
          <button type="button" onClick={showPrevious} aria-label="Previous property">
            <ArrowLeftIcon />
          </button>
          <button type="button" onClick={showNext} aria-label="Next property">
            <ArrowRightIcon />
          </button>
        </div>
      </section>
    </>
  );
}
