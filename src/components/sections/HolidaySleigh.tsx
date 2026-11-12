import { Great_Vibes, Playfair_Display } from "next/font/google";
import { ScrollFlyover } from "./ScrollFlyover";

const script = Great_Vibes({ subsets: ["latin"], weight: "400" });
// Two single-style loaders (variable weight): Turbopack's production build
// fails when one next/font call requests several weights + styles together.
const serif = Playfair_Display({ subsets: ["latin"] });
const serifItalic = Playfair_Display({ subsets: ["latin"], style: "italic" });

const GOLD = "#e0b13a";
const ICE = "#7fd3f7";

/** Four-point twinkle star. */
function Sparkle({
  size,
  color,
  delay,
  className = "",
  style,
}: {
  size: number;
  color: string;
  delay: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`sparkle ${className}`}
      style={{ ...style, animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <path
        d="M12 0C12.9 7.6 16.4 11.1 24 12 16.4 12.9 12.9 16.4 12 24 11.1 16.4 7.6 12.9 0 12 7.6 11.1 11.1 7.6 12 0Z"
        fill={color}
      />
    </svg>
  );
}

// Sparkles scattered around the text block (percent positions within it).
const sparkles = [
  { top: "-6%", left: "6%", size: 22, color: GOLD, delay: 0 },
  { top: "12%", left: "-3%", size: 14, color: ICE, delay: 0.9 },
  { top: "62%", left: "2%", size: 18, color: GOLD, delay: 1.6 },
  { top: "96%", left: "12%", size: 12, color: ICE, delay: 0.4 },
  { top: "-10%", left: "38%", size: 12, color: ICE, delay: 1.2 },
  { top: "-4%", left: "70%", size: 16, color: GOLD, delay: 2.1 },
  { top: "8%", left: "97%", size: 24, color: GOLD, delay: 0.6 },
  { top: "48%", left: "101%", size: 13, color: ICE, delay: 1.9 },
  { top: "88%", left: "90%", size: 20, color: GOLD, delay: 1.1 },
  { top: "104%", left: "58%", size: 14, color: GOLD, delay: 2.4 },
  { top: "40%", left: "-7%", size: 10, color: GOLD, delay: 2.8 },
  { top: "30%", left: "84%", size: 9, color: ICE, delay: 0.2 },
];

/** Sparkling announcement that trails behind the sleigh. */
const announcement = (
  <div className="relative shrink-0 whitespace-nowrap px-6 text-center">
    {sparkles.map((s, i) => (
      <Sparkle
        key={i}
        size={s.size}
        color={s.color}
        delay={s.delay}
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ top: s.top, left: s.left }}
      />
    ))}

    <p className={`${script.className} text-3xl leading-tight text-navy sm:text-5xl`}>
      Everyone!
    </p>
    <p
      className={`${serifItalic.className} mt-1 text-base italic tracking-wide text-navy/70 sm:text-xl`}
    >
      we have
    </p>
    <p
      className={`${serif.className} holiday-shimmer mt-1 text-4xl font-extrabold uppercase tracking-[0.12em] sm:text-6xl`}
    >
      Big News!
    </p>
  </div>
);

/** Small sparkle dust between the sleigh and the announcement. */
const sparkleDust = (
  <div className="relative -ml-2 h-20 w-24 shrink-0 sm:h-28 sm:w-32">
    {[
      { top: "30%", left: "4%", size: 14, color: GOLD, delay: 0 },
      { top: "58%", left: "22%", size: 10, color: ICE, delay: 0.5 },
      { top: "18%", left: "40%", size: 9, color: GOLD, delay: 1 },
      { top: "50%", left: "58%", size: 12, color: GOLD, delay: 1.5 },
      { top: "28%", left: "78%", size: 8, color: ICE, delay: 0.8 },
    ].map((s, i) => (
      <Sparkle
        key={i}
        size={s.size}
        color={s.color}
        delay={s.delay}
        className="absolute"
        style={{ top: s.top, left: s.left }}
      />
    ))}
  </div>
);

/**
 * Holiday teaser: the droplet mascots ride a sleigh right → left across the
 * page as you scroll, trailing an elegant sparkling announcement.
 */
export function HolidaySleigh() {
  return (
    // Short strip; the sleigh may overlap neighbouring sections a little.
    // overflow-x-clip hides it off-screen sideways without clipping vertically,
    // and z-10 keeps it above the sections around it.
    <section className="relative z-10 h-32 overflow-x-clip sm:h-40">
      <ScrollFlyover
        imageSrc="/images/sleigh.png"
        imageWidth={1029}
        imageHeight={737}
        imageClassName="h-24 w-auto sm:h-32"
        direction="rtl"
        trail={
          <>
            {sparkleDust}
            {announcement}
          </>
        }
        className="top-1/2 h-40 -translate-y-1/2 sm:h-52"
      />
    </section>
  );
}
