"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts quickly up to a stat like "$25,838.63", "70" or "363+" when it scrolls
 * into view, keeping any prefix/suffix, thousands separators and decimals.
 * Server-renders the final value so it's correct without JavaScript.
 */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numText = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = Number(numText.replace(/,/g, ""));
  const decimals = numText.includes(".") ? numText.split(".")[1].length : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || !Number.isFinite(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const format = (n: number) =>
      prefix +
      n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) +
      suffix;

    let frame = 0;
    // Start from zero; the count begins once the number is on screen.
    frame = requestAnimationFrame(() => setDisplay(format(0)));

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        cancelAnimationFrame(frame);
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4); // fast start, gentle landing
          setDisplay(format(target * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
          else setDisplay(value);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // value fully determines the parsed parts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
