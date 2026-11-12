"use client";

import Image from "next/image";
import { Caveat } from "next/font/google";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const handwriting = Caveat({ subsets: ["latin"], weight: ["600"] });

type Snapshot = {
  caption?: string;
  image?: string;
  alt?: string;
};

// Leave image/caption empty for a blank polaroid.
const snapshots: Snapshot[] = [
  {
    caption: "12,000 KM Challenge Participants",
    image: "/images/246CANON/IMG_4608.JPG",
    alt: "Participants running together during the 12,000 KM Challenge",
  },
  {
    caption: "The 12,000 KM Challenge Committee",
    // TODO: swap for an official committee photo if there is one
    image: "/images/246CANON/IMG_4627.JPG",
    alt: "The 12,000 KM Challenge committee holding the challenge photo frame",
  },
  {
    caption: "TSWP Entrepreneurship Team",
    image: "/images/support/entrepreneurship-team.webp",
    alt: "Two TSWP Entrepreneurship Team members holding a Student Water Project photo frame at their booth",
  },
  {
    caption: "Watersprint: Event Sponsor & Donation of 2 UV Systems",
    image: "/images/support/watersprint-sponsor.png",
    alt: "Watersprint representative with a TSWP member and the crocheted droplet mascot",
  },
  {
    caption: "Blue Catalyst Advisory: Matching Sponsor of $8,000",
    image: "/images/support/bca-sponsor.png",
    alt: "Blue Catalyst Advisory representatives with the crocheted droplet mascot",
  },
  { caption: "Revealing Soon! (Stay Tuned)" },
];

// ---- String-light geometry (one swag of wire per polaroid) ----
const SEG_W = 300; // px width of one swag
const TOP = 8; // where the wire is pinned
const SAG = 46; // how far the wire droops at the middle
const BULB_COLORS = ["#ef4444", "#22c55e", "#facc15", "#38bdf8", "#f472b6"];
const BULB_T = [0.12, 0.3, 0.7, 0.88]; // positions along each swag

function pointOnSwag(t: number) {
  // quadratic bezier: (0,TOP) → control (SEG_W/2, TOP+2·SAG) → (SEG_W,TOP)
  const cy = TOP + 2 * SAG;
  const x = 2 * (1 - t) * t * (SEG_W / 2) + t * t * SEG_W;
  const y = (1 - t) * (1 - t) * TOP + 2 * (1 - t) * t * cy + t * t * TOP;
  return { x, y };
}

function Swag({ index }: { index: number }) {
  return (
    <svg
      width={SEG_W}
      height={TOP + SAG + 24}
      viewBox={`0 0 ${SEG_W} ${TOP + SAG + 24}`}
      className="absolute left-0 top-0 overflow-visible"
      aria-hidden="true"
    >
      <path
        d={`M0 ${TOP} Q${SEG_W / 2} ${TOP + 2 * SAG} ${SEG_W} ${TOP}`}
        fill="none"
        stroke="#1f3b2a"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      {BULB_T.map((t, i) => {
        const { x, y } = pointOnSwag(t);
        const n = index * BULB_T.length + i;
        const color = BULB_COLORS[n % BULB_COLORS.length];
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <rect x={-3} y={-1} width={6} height={7} rx={1.5} fill="#1f3b2a" />
            <ellipse
              cx={0}
              cy={13}
              rx={5}
              ry={8}
              fill={color}
              className="xmas-bulb"
              style={
                {
                  "--bulb": color,
                  animationDelay: `${(n * 0.37) % 2.4}s`,
                } as React.CSSProperties
              }
            />
          </g>
        );
      })}
    </svg>
  );
}

function Polaroid({ snapshot, index }: { snapshot: Snapshot; index: number }) {
  const tilt = [-3, 2.5, -1.5, 3, -2.5, 1.5][index % 6];
  return (
    <div
      className="polaroid-sway absolute left-1/2 -translate-x-1/2"
      style={{
        top: TOP + SAG - 6,
        rotate: `${tilt}deg`,
        animationDelay: `${index * -0.8}s`,
      }}
    >
      {/* clothespin */}
      <div className="absolute -top-3 left-1/2 z-10 h-7 w-3 -translate-x-1/2 rounded-sm bg-[#c8a26b] shadow-sm ring-1 ring-black/10" />
      <figure className="polaroid w-52 sm:w-56">
        <div className="relative aspect-square overflow-hidden bg-white shadow-[inset_0_1px_4px_rgb(0_0_0/0.12)]">
          {snapshot.image && (
            <Image
              src={snapshot.image}
              alt={snapshot.alt ?? snapshot.caption ?? ""}
              fill
              sizes="224px"
              className="object-cover"
            />
          )}
        </div>
        <figcaption
          className={`${handwriting.className} flex h-20 items-center justify-center px-1 text-center text-lg leading-[1.15] text-navy/80`}
        >
          {snapshot.caption}
        </figcaption>
      </figure>
    </div>
  );
}

/**
 * "Pilot Project Support": polaroids clipped to a string of twinkling holiday
 * lights that slides sideways as the visitor scrolls.
 */
export function PilotProjectSupport() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });
  // Start slightly right of the left edge, end with the last polaroid in view.
  const transform = useTransform(
    progress,
    (p) => `translateX(calc(${1 - p} * 10vw + ${p} * (90vw - 100%)))`
  );

  // One empty swag on each end so the lights run off both edges.
  const segments: (Snapshot | null)[] = [null, ...snapshots, null];

  return (
    <section ref={sectionRef} className="relative overflow-x-clip py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Thank you"
          title="Pilot Project Support"
          description="The people and moments that made our pilot project possible."
          align="center"
          className="mb-6"
        />
      </Container>

      <div className={reduceMotion ? "overflow-x-auto" : ""}>
        <motion.div
          className="flex w-max"
          style={reduceMotion ? undefined : { transform }}
        >
          {segments.map((snapshot, i) => (
            <div
              key={i}
              className="relative h-[400px] shrink-0 sm:h-[420px]"
              style={{ width: SEG_W }}
            >
              <Swag index={i} />
              {snapshot && <Polaroid snapshot={snapshot} index={i - 1} />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
