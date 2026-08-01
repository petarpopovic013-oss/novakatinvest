import type { PropertyFact } from "../types/property";
import styles from "./PropertyFeatures.module.css";

const facts: PropertyFact[] = [
  { label: "Price", value: "From £925,000" },
  { label: "Location", value: "Bath, Somerset" },
  { label: "Bedrooms", value: "4 Bedrooms" },
  { label: "Bathrooms", value: "2 Bathrooms" },
  { label: "Internal Area", value: "2,300 sq ft" },
  { label: "Property Type", value: "Georgian Townhouse" },
  { label: "Outdoor Space", value: "Walled Private Garden" },
  { label: "Tenure", value: "Freehold" },
];

export function PropertyFeatures() {
  return (
    <section className={styles.section} id="details" aria-labelledby="features-title">
      <div className={styles.heading}>
        <span className="eyebrow">Property Features</span>
        <h2 className="section-title" id="features-title">
          A characterful Georgian townhouse<br />in the heart of Bath.
        </h2>
      </div>
      <dl className={styles.grid}>
        {facts.map((fact) => (
          <div className={styles.card} key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
