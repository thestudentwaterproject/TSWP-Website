"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#0ea5e9", "#7dd3fc", "#0c2340", "#e0b13a", "#f472b6", "#34d399"];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  w: number;
  h: number;
  color: string;
  circle: boolean;
  wobble: number;
};

/**
 * Canvas confetti that fills its (relative) parent. Fires one celebratory
 * burst from both sides when the parent scrolls into view.
 */
export function Confetti({ particles = 160 }: { particles?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let parts: Particle[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = host.clientWidth * dpr;
      canvas.height = host.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const burst = () => {
      const w = host.clientWidth;
      // Fire from ~40% down the viewport, i.e. where the viewer is looking.
      const originY = Math.max(
        0,
        Math.min(host.clientHeight, window.innerHeight * 0.4 - host.getBoundingClientRect().top)
      );
      parts = Array.from({ length: particles }, (_, i) => {
        const fromLeft = i % 2 === 0;
        const angle = (fromLeft ? -60 : -120) + (Math.random() - 0.5) * 50;
        const speed = 9 + Math.random() * 9;
        const rad = (angle * Math.PI) / 180;
        return {
          x: fromLeft ? 0 : w,
          y: originY,
          vx: Math.cos(rad) * speed,
          vy: Math.sin(rad) * speed,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.3,
          w: 6 + Math.random() * 6,
          h: 8 + Math.random() * 8,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          circle: Math.random() < 0.25,
          wobble: Math.random() * Math.PI * 2,
        };
      });

      const start = performance.now();
      const DURATION = 5000;
      const tick = (now: number) => {
        const t = now - start;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = t > DURATION - 1200 ? Math.max(0, (DURATION - t) / 1200) : 1;
        for (const p of parts) {
          p.vy += 0.25; // gravity
          p.vx *= 0.985; // air drag
          p.vy *= 0.985;
          p.wobble += 0.12;
          p.x += p.vx + Math.sin(p.wobble) * 0.6;
          p.y += p.vy;
          p.rot += p.vr;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          if (p.circle) {
            ctx.beginPath();
            ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // squash horizontally to fake a 3D flip
            ctx.scale(Math.cos(p.wobble), 1);
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          }
          ctx.restore();
        }
        if (t < DURATION) frame = requestAnimationFrame(tick);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          burst();
          io.disconnect();
        }
      },
      // fire once the section's top reaches roughly the middle of the screen
      { rootMargin: "0px 0px -50% 0px", threshold: 0 }
    );
    io.observe(host);

    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
    />
  );
}
