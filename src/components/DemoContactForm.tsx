"use client";

import { useState } from "react";

import styles from "./DemoContactForm.module.css";

export function DemoContactForm({ context }: { context?: string }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    if (website) return;
    if (!name || !message) {
      setError("Unesite ime i prezime i poruku.");
      return;
    }
    if (!phone && !email) {
      setError("Unesite najmanje telefon ili email adresu.");
      return;
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Unesite ispravnu email adresu.");
      return;
    }
    if (message.length > 2000) {
      setError("Poruka može imati najviše 2.000 karaktera.");
      return;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <span>Kontakt forma</span>
        <h2>Hvala na interesovanju za Novak Invest.</h2>
        <p>Onlajn slanje upita je u pripremi. Za direktan odgovor kontaktirajte nas telefonom ili e-mailom.</p>
        <button type="button" onClick={() => setSent(false)}>Pošaljite novi upit</button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {context ? <p className={styles.context}>Upit se odnosi na: <strong>{context}</strong></p> : null}
      <div className={styles.fields}>
        <div className={styles.fieldWide}>
          <label htmlFor="name">Ime i prezime *</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Telefon</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className={styles.fieldWide}>
          <label htmlFor="message">Poruka *</label>
          <textarea
            id="message"
            name="message"
            maxLength={2000}
            required
            defaultValue={context ? `Zanima me više informacija za ${context}.` : ""}
          />
        </div>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        {error ? <p className={styles.error} role="alert">{error}</p> : null}
      </div>
      <div className={styles.submitRow}>
        <button type="submit">Pošaljite upit</button>
        <span>Onlajn slanje je u pripremi</span>
      </div>
    </form>
  );
}
