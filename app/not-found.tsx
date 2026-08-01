import Link from "next/link";

import { DemoPage, demoStyles as styles } from "../src/components/DemoRoutes";

export default function NotFound() {
  return (
    <DemoPage>
      <section className={styles.notFound}>
        <div>
          <p className={styles.notFoundCode}>Greška 404</p>
          <h1>Ova stranica nije pronađena.</h1>
          <p>Adresa možda više nije aktivna ili je stranica premeštena. Vratite se na početnu ili pogledajte aktuelnu ponudu.</p>
          <div className={styles.actions}>
            <Link className={styles.buttonPrimary} href="/">Početna strana</Link>
            <Link className={styles.buttonSecondary} href="/ponuda">Pogledajte ponudu</Link>
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
