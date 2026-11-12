type Ornament = {
  /** horizontal position, % of container width */
  left: string;
  /** ribbon length in px */
  drop: number;
  size: number;
  color: string;
  shine: string;
  delay: number;
  hideOnMobile?: boolean;
};

const ornaments: Ornament[] = [
  { left: "6%", drop: 70, size: 46, color: "#dc2626", shine: "#fca5a5", delay: 0 },
  { left: "13%", drop: 130, size: 34, color: "#e0b13a", shine: "#fde68a", delay: 0.6, hideOnMobile: true },
  { left: "20%", drop: 40, size: 28, color: "#0ea5e9", shine: "#bae6fd", delay: 1.2, hideOnMobile: true },
  { left: "80%", drop: 55, size: 30, color: "#16a34a", shine: "#bbf7d0", delay: 0.3, hideOnMobile: true },
  { left: "87%", drop: 110, size: 44, color: "#0ea5e9", shine: "#bae6fd", delay: 0.9 },
  { left: "94%", drop: 45, size: 32, color: "#dc2626", shine: "#fca5a5", delay: 1.5, hideOnMobile: true },
];

function Bauble({ size, color, shine }: Pick<Ornament, "size" | "color" | "shine">) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 40 46" aria-hidden="true">
      {/* cap */}
      <rect x="15" y="0" width="10" height="7" rx="1.5" fill="#d4af37" />
      <rect x="15" y="5" width="10" height="2" fill="#a8841f" />
      {/* ball */}
      <circle cx="20" cy="26" r="19" fill={color} />
      {/* band */}
      <path d="M2.5 23 Q20 30 37.5 23" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" fill="none" />
      <path d="M2 29 Q20 36 38 29" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
      {/* highlight */}
      <ellipse cx="13" cy="18" rx="4.5" ry="6.5" fill={shine} opacity="0.75" transform="rotate(-25 13 18)" />
    </svg>
  );
}

/** Baubles hanging on ribbons from the top of a (relative) section. */
export function HangingOrnaments() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 h-0">
      {ornaments.map((o, i) => (
        <div
          key={i}
          className={`ornament-swing absolute top-0 flex -translate-x-1/2 flex-col items-center ${
            o.hideOnMobile ? "hidden sm:flex" : ""
          }`}
          style={{ left: o.left, animationDelay: `${o.delay}s` }}
        >
          <div className="w-px bg-[#d4af37]/80" style={{ height: o.drop }} />
          <Bauble size={o.size} color={o.color} shine={o.shine} />
        </div>
      ))}
    </div>
  );
}
