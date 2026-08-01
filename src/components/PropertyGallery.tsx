import Image from "next/image";

import type { GalleryItem } from "../types/property";

import styles from "./PropertyGallery.module.css";

const galleryItems = [
  {
    src: "/images/living-room.jpg",
    alt: "Warm, modern living room with floor-to-ceiling windows",
    label: "Living Room",
    number: "01",
  },
  {
    src: "/images/kitchen.jpg",
    alt: "Wood-lined dining room and kitchen",
    label: "Dining & Kitchen Room",
    number: "02",
  },
  {
    src: "/images/garden.jpg",
    alt: "Landscaped private garden surrounding a contemporary home",
    label: "Private Garden",
    number: "03",
  },
  {
    src: "/images/bathroom.jpg",
    alt: "Stone bathroom opening onto a wooded view",
    label: "Bathroom",
    number: "04",
  },
  {
    src: "/images/bedroom.jpg",
    alt: "Calm bedroom with warm timber details",
    label: "Bedroom",
    number: "05",
  },
  {
    src: "/images/office.jpg",
    alt: "Minimal home office overlooking the garden",
    label: "Office Room",
    number: "06",
  },
] satisfies readonly GalleryItem[];

export default function PropertyGallery() {
  return (
    <section className={styles.section} id="collection" aria-labelledby="property-gallery-title">
      <div className={styles.sectionInner}>
        <header className={styles.heading}>
          <span className={styles.badge}>Property Gallery</span>
          <h2 className={styles.title} id="property-gallery-title">
            <span>A House with Period Character</span>
            <span>and Modern Comfort</span>
          </h2>
        </header>

        <div className={styles.gallery}>
          {galleryItems.map((item) => (
            <figure className={styles.card} key={item.number}>
              <Image
                className={styles.image}
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 639px) calc(100vw - 48px), 422px"
              />
              <figcaption className={styles.caption}>
                <span>{item.number}</span>
                <span>{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
