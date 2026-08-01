import styles from "./PropertyOverview.module.css";

export function PropertyOverview() {
  return (
    <section className={styles.section} aria-labelledby="property-name">
      <div className={styles.titleBlock}>
        <h1 id="property-name">Avenor Row House</h1>
      </div>
      <p className={styles.description}>
        A discreet four-bedroom Georgian townhouse arranged across three floors,
        with original cornicing, sash windows and a walled private garden a short
        walk from Royal Crescent.
      </p>

      <div className={styles.price}>
        <span>Guide Price</span>
        <strong>From £925,000</strong>
      </div>
      <div className={styles.actions}>
        <a className={styles.primary} href="#enquire">Book Private Viewing</a>
        <a className={styles.secondary} href="#details">Request Brochure</a>
      </div>
    </section>
  );
}
