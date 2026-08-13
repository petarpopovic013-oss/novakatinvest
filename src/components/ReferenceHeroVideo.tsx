"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./References.module.css";

export function ReferenceHeroVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;
    if (!video || media.matches) return;

    void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().then(() => setPlaying(true));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className={styles.heroVideo}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={`Video prikaz projekta ${title}`}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button className={styles.videoControl} type="button" onClick={togglePlayback}>
        <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
        {playing ? "Pauziraj video" : "Pokreni video"}
      </button>
    </>
  );
}
