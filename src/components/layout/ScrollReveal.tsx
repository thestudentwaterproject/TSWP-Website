"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades page content up into view as it scrolls in. Targets the direct
// children of each section's Container; grids and lists reveal item by item.
const TARGET_SELECTOR = "main section .max-w-7xl > *";
const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 4;

function collectTargets() {
  const targets: { el: HTMLElement; delay: number }[] = [];

  document.querySelectorAll<HTMLElement>(TARGET_SELECTOR).forEach((el) => {
    const items =
      el.tagName === "UL" || el.tagName === "OL"
        ? Array.from(el.children).filter(
            (child): child is HTMLElement => child instanceof HTMLElement,
          )
        : [];

    if (items.length > 1) {
      items.forEach((item, index) =>
        targets.push({
          el: item,
          delay: (index % MAX_STAGGER_STEPS) * STAGGER_MS,
        }),
      );
    } else {
      targets.push({ el, delay: 0 });
    }
  });

  return targets;
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    collectTargets().forEach(({ el, delay }) => {
      // Leave anything already on screen alone so nothing flickers on load.
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
