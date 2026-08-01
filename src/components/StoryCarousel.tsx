"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from "./icons";
import type { StoryCardData } from "../types/property";
import styles from "./StoryCarousel.module.css";

const stories: StoryCardData[] = [
  {
    src: "/images/living-room.jpg",
    eyebrow: "Multipurpose Spaces",
    title: "Rooms that move with you",
    description: "Flexible living designed for quiet mornings, shared dinners and everything between.",
  },
  {
    src: "/images/garden.jpg",
    eyebrow: "Private Walled Garden",
    title: "A garden room outdoors",
    description: "A peaceful, established retreat screened by stone walls and mature planting.",
  },
  {
    src: "/images/bedroom.jpg",
    eyebrow: "Private Bedrooms",
    title: "Calm above the city",
    description: "Four generous bedrooms pair original proportions with a softened material palette.",
  },
  {
    src: "/images/office.jpg",
    eyebrow: "Period Character",
    title: "Craft in every detail",
    description: "Restored cornicing, sash windows and joinery carry the house's story forward.",
  },
];

export function StoryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.78, behavior: "smooth" });
  };

  return (
    <section className={styles.section} aria-labelledby="story-title">
      <div className={styles.header}>
        <div>
          <span className="eyebrow">Inside the House</span>
          <h2 className="section-title" id="story-title">
            Thoughtfully Designed.<br />Beautifully Considered.
          </h2>
        </div>
        <p>
          Explore Avenor Row House in detail. View room by room highlights, key
          features, and how each space is designed for modern living in a historic setting.
        </p>
      </div>

      <div className={styles.track} ref={trackRef}>
        {stories.map((story) => (
          <article className={styles.card} key={story.eyebrow}>
            <Image src={story.src} alt={story.eyebrow} fill sizes="(max-width: 760px) 78vw, 25vw" />
            <div className={styles.shade} />
            <div className={styles.content}>
              <span>{story.eyebrow}</span>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
            <ChevronDownIcon className={styles.chevron} />
          </article>
        ))}
      </div>

      <div className={styles.controls}>
        <button type="button" aria-label="Previous story" onClick={() => scroll(-1)}>
          <ArrowLeftIcon />
        </button>
        <button type="button" aria-label="Next story" onClick={() => scroll(1)}>
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
}
