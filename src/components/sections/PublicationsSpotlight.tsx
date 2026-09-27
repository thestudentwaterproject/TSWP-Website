"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { publications } from "@/data/publications";

export function PublicationsSpotlight() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollPrev(track.scrollLeft > 4);
    setCanScrollNext(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 4,
    );
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card ? card.clientWidth + gap : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  if (publications.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Student Publications"
            title="Research by our Jr Scientific Team"
            description="Student-written articles on water treatment, sustainability, and global water access."
          />
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollPrev}
              aria-label="Previous publications"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/15 bg-white text-navy transition-colors hover:border-water hover:text-water-dark disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-navy/15 disabled:hover:text-navy"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canScrollNext}
              aria-label="Next publications"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/15 bg-white text-navy transition-colors hover:border-water hover:text-water-dark disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-navy/15 disabled:hover:text-navy"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          onScroll={updateScrollState}
          className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {publications.map((publication) => (
            <li
              key={publication.href}
              className="w-[80%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <Link
                href={publication.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water"
              >
                {publication.image && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={publication.image}
                      alt={`${publication.title} cover image`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-water-dark">
                    {publication.category}
                  </p>
                  <h3 className="mt-2 line-clamp-3 text-lg font-bold leading-snug text-navy group-hover:text-water-dark">
                    {publication.title}
                  </h3>
                  <p className="mt-3 text-sm text-navy/60">
                    {publication.author}
                  </p>
                  <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-navy/70">
                    {publication.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-water-dark">
                    Read article
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Button href="/student-publications" variant="primary">
            See all publications
          </Button>
        </div>
      </Container>
    </section>
  );
}
