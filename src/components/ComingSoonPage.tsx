import Link from "next/link";

import { ArrowUpRightIcon } from "./icons";
import styles from "./ComingSoonPage.module.css";

export function ComingSoonPage({ title }: { title: string }) {
  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="page-title">
        <div className={styles.topline}>
          <span>Novak Invest</span>
          <span>{title}</span>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>U pripremi</span>
          <h1 id="page-title">{title}</h1>
          <p>Stranica će tek biti dodata.</p>
          <Link href="/">
            Nazad na početnu <ArrowUpRightIcon />
          </Link>
        </div>

        <div className={styles.bottomline}>
          <span>Novak AT Invest DOO</span>
          <span>Novi Sad</span>
        </div>
      </section>
    </main>
  );
}
