"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type ScrollFlyoverProps = {
  /** Banner text. Omit to fly without a banner. */
  message?: string;
  /** Rendered behind the vehicle when there is no banner (e.g. a sparkle trail). */
  trail?: ReactNode;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  /** Tailwind sizing for the vehicle image, e.g. "h-24 w-auto sm:h-36" */
  imageClassName: string;
  /** "ltr" flies left → right (vehicle leads on the right); "rtl" the reverse. */
  direction?: "ltr" | "rtl";
  /** Extra class on the banner, e.g. "plane-banner--large" */
  bannerClassName?: string;
  /** Text sizing for the banner message. */
  bannerTextClassName?: string;
  /** Sizing for the tow rope. */
  ropeClassName?: string;
  /** Positioning/height of the strip inside its (relative, overflow-hidden) parent. */
  className?: string;
};

/**
 * A vehicle towing a banner across its parent section. Horizontal position is
 * tied to scroll: it enters as the strip comes into view and exits as it leaves.
 */
export function ScrollFlyover({
  message,
  trail,
  imageSrc,
  imageWidth,
  imageHeight,
  imageClassName,
  direction = "ltr",
  bannerClassName = "",
  bannerTextClassName = "text-lg sm:text-2xl",
  ropeClassName = "h-8 w-14 sm:w-20",
  className = "",
}: ScrollFlyoverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Smooth out jumpy wheel scrolling a little.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });
  // 0 → fully off-screen at the start side, 1 → fully off-screen at the far side.
  const transform = useTransform(progress, (p) =>
    direction === "ltr"
      ? `translateX(calc(${p} * (100vw + 100%) - 100%))`
      : `translateX(calc(100vw - ${p} * (100vw + 100%)))`
  );

  const banner = message ? (
    <div className={`plane-banner ${bannerClassName}`}>
      <span
        className={`whitespace-nowrap font-bold uppercase tracking-wide text-navy ${bannerTextClassName}`}
      >
        {message}
      </span>
    </div>
  ) : (
    trail
  );
  const rope = message && (
    <svg
      className={`shrink-0 ${ropeClassName}`}
      viewBox="0 0 56 24"
      preserveAspectRatio="none"
    >
      <path
        d="M0 12 Q28 18 56 12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-navy/40"
      />
    </svg>
  );
  const vehicle = (
    <Image
      src={imageSrc}
      alt=""
      width={imageWidth}
      height={imageHeight}
      className={`plane-body shrink-0 ${imageClassName}`}
    />
  );

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-10 ${className}`}
    >
      <motion.div
        className="plane-flyover"
        style={
          reduceMotion
            ? { left: "50%", transform: "translateX(-50%)" }
            : { transform }
        }
      >
        {direction === "ltr" ? (
          <>
            {banner}
            {rope}
            {vehicle}
          </>
        ) : (
          <>
            {vehicle}
            {rope}
            {banner}
          </>
        )}
      </motion.div>
    </div>
  );
}
