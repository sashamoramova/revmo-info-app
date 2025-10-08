"use client";

import { useState, useEffect } from "react";
import styles from "./VideoBlockScroller.module.css";
// import { IMainContentData } from "@/entities/main-content/types";

interface VideoBlockScrollerProps {
  videoUrl: string;
}

export const VideoBlockScroller = ({ videoUrl }: VideoBlockScrollerProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.videoBlock} ${isScrolled ? styles.videoBlockScrolled : ""}`}>
      <div className={styles.phoneFrame}>
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          preload="auto"
          poster="/icons/video-poster.jpg"
          className={styles.video}
        />
      </div>
    </div>
  );
};