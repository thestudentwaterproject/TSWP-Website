"use client";

import { useEffect, useRef } from "react";

type Flake = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  phase: number;
  spin: number;
  angle: number;
  crystal: boolean;
  alpha: number;
};

/** Gentle site-wide snowfall drawn on a fixed, click-through canvas. */
export function Snowfall() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let flakes: Flake[] = [];
    let frame = 0;

    const makeFlake = (startAnywhere: boolean): Flake => {
      const crystal = Math.random() < 0.3;
      const r = crystal ? 4 + Math.random() * 5 : 1.2 + Math.random() * 2.6;
      return {
        x: Math.random() * w,
        y: startAnywhere ? Math.random() * h : -10 - Math.random() * 40,
        r,
        speed: 0.35 + Math.random() * 0.8 + r * 0.04,
        drift: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
        angle: Math.random() * Math.PI,
        crystal,
        alpha: 0.6 + Math.random() * 0.4,
      };
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // fewer flakes on small screens
      const count = Math.round(Math.min(90, Math.max(35, (w * h) / 16000)));
      flakes = Array.from({ length: count }, () => makeFlake(true));
    };

    const drawCrystal = (f: Flake) => {
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.angle);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        ctx.rotate(Math.PI / 3);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -f.r);
        // little side branches
        ctx.moveTo(0, -f.r * 0.55);
        ctx.lineTo(f.r * 0.25, -f.r * 0.75);
        ctx.moveTo(0, -f.r * 0.55);
        ctx.lineTo(-f.r * 0.25, -f.r * 0.75);
      }
      ctx.stroke();
      ctx.restore();
    };

    const FADE = 120; // px over which flakes fade out above the hero's bottom edge

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // Only snow over the landing-page hero (marked with data-snow-zone).
      const zone = document.querySelector("[data-snow-zone]");
      const bottom = zone ? zone.getBoundingClientRect().bottom : 0;
      if (bottom <= 0) {
        frame = requestAnimationFrame(tick);
        return;
      }
      // white with a soft blue glow so flakes show on light and dark sections
      ctx.shadowColor = "rgba(14, 116, 180, 0.55)";
      ctx.shadowBlur = 3;
      ctx.strokeStyle = "#ffffff";
      ctx.fillStyle = "#ffffff";
      ctx.lineWidth = 1.3;
      ctx.lineCap = "round";
      for (const f of flakes) {
        f.phase += 0.01;
        f.y += f.speed;
        f.x += Math.sin(f.phase) * f.drift * 0.6;
        f.angle += f.spin;
        if (f.y > h + 10) Object.assign(f, makeFlake(false));
        if (f.x > w + 10) f.x = -10;
        if (f.x < -10) f.x = w + 10;
        const fade = Math.max(0, Math.min(1, (bottom - f.y) / FADE));
        if (fade === 0) continue;
        ctx.globalAlpha = f.alpha * fade;
        if (f.crystal) drawCrystal(f);
        else {
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(tick);
    };

    resize();
    frame = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 h-full w-full"
    />
  );
}
