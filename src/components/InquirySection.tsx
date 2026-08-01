"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { ArrowRightIcon } from "./icons";
import styles from "./InquirySection.module.css";

export function InquirySection() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className={styles.section} id="enquire" aria-labelledby="enquiry-title">
      <Image src="/images/landscape.jpg" alt="Avenor countryside property" fill sizes="100vw" />
      <div className={styles.overlay} />
      <form className={styles.form} onSubmit={submit}>
        <h2 id="enquiry-title">
          Tell us what you&apos;re looking for, and an Avenor advisor will help you
          discover suitable homes, arrange private viewings, and guide your next
          step with confidence.
        </h2>
        <label>
          <span className="sr-only">Full name</span>
          <input required placeholder="Enter your full name" autoComplete="name" />
        </label>
        <label>
          <span className="sr-only">Email address</span>
          <input required type="email" placeholder="Enter your email here" autoComplete="email" />
        </label>
        <label>
          <span className="sr-only">Message</span>
          <input placeholder="Anything else you'd like to know?" />
        </label>
        <button type="submit">
          {sent ? "Thank You" : "Submit Enquiry"}
          <ArrowRightIcon />
        </button>
        <span className={styles.success} aria-live="polite">
          {sent ? "Your enquiry is ready for our property team." : ""}
        </span>
      </form>
    </section>
  );
}
