"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Gently shifts the page background (--background) through a few pale water
// tones as the visitor scrolls from the top of the page to the bottom.
const STOPS: [number, number, number][] = [
  [232, 244, 252], // #e8f4fc sky (default)
  [228, 247, 246], // #e4f7f6 aqua
  [234, 240, 252], // #eaf0fc periwinkle
  [226, 242, 250], // #e2f2fa deep sky
];

function colorAt(progress: number) {
  const scaled = progress * (STOPS.length - 1);
  const index = Math.min(Math.floor(scaled), STOPS.length - 2);
  const t = scaled - index;
  const [from, to] = [STOPS[index], STOPS[index + 1]];
  const channel = (i: number) => Math.round(from[i] + (to[i] - from[i]) * t);
  return `rgb(${channel(0)}, ${channel(1)}, ${channel(2)})`;
}

export function ScrollBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      root.style.setProperty("--background", colorAt(progress));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.style.removeProperty("--background");
    };
  }, [pathname]);

  return null;
}
