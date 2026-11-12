const SEG = 140; // width of one swag of wire
const SAG = 12;
const COLORS = ["#ef4444", "#22c55e", "#facc15", "#38bdf8", "#f472b6"];
const BULBS = [0.2, 0.5, 0.8];
const SEGMENTS = 24; // enough to span very wide screens (≈3360px)

/** A strand of twinkling bulbs that hangs just below the navbar. */
export function NavLights() {
  const height = SAG + 26;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-full h-10 overflow-hidden"
    >
      <svg width={SEG * SEGMENTS} height={height} className="block">
        {Array.from({ length: SEGMENTS }, (_, s) => {
          const x0 = s * SEG;
          return (
            <g key={s}>
              <path
                d={`M${x0} 1 Q${x0 + SEG / 2} ${1 + 2 * SAG} ${x0 + SEG} 1`}
                fill="none"
                stroke="#1f3b2a"
                strokeWidth={1.8}
              />
              {BULBS.map((t, i) => {
                // point on the quadratic curve at t
                const x = x0 + t * SEG;
                const y = 1 + 2 * (1 - t) * t * 2 * SAG;
                const n = s * BULBS.length + i;
                const color = COLORS[n % COLORS.length];
                return (
                  <g key={i} transform={`translate(${x} ${y})`}>
                    <rect x={-2.5} y={-1} width={5} height={5} rx={1} fill="#1f3b2a" />
                    <ellipse
                      cx={0}
                      cy={10}
                      rx={4}
                      ry={6.5}
                      fill={color}
                      className="xmas-bulb"
                      style={
                        {
                          "--bulb": color,
                          animationDelay: `${(n * 0.43) % 2.4}s`,
                        } as React.CSSProperties
                      }
                    />
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
