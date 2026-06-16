"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MotionEffects() {
  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(".reveal, .scale-media, .word-reveal span", {
        clearProps: "all",
        opacity: 1,
        y: 0,
        scale: 1
      });
      return;
    }

    gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 42 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%"
          }
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".scale-media").forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.88, opacity: 0.68 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            end: "bottom 35%",
            scrub: true
          }
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".word-reveal").forEach((paragraph) => {
      const words = paragraph.querySelectorAll("span");
      gsap.fromTo(
        words,
        { opacity: 0.42, y: 8 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.045,
          ease: "none",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 78%",
            end: "bottom 42%",
            scrub: true
          }
        }
      );
    });
  }, []);

  return null;
}
