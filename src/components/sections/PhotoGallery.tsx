"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryPhotos } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const arrowClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/15 bg-white text-navy transition-colors hover:border-water hover:text-water-dark disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-navy/15 disabled:hover:text-navy";

const lightboxButtonClass =
  "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white";

export function PhotoGallery() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const total = galleryPhotos.length;
  const close = useCallback(() => setOpenIndex(null), []);
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % total)),
    [total],
  );
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + total) % total)),
    [total],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, showNext, showPrev]);

  const openPhoto = openIndex === null ? null : galleryPhotos[openIndex];

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="In the field"
          title="Photo Gallery"
          description="Moments from our projects, fundraisers, and student teams at work."
          align="center"
          className="mb-10"
        />

        <ul
          ref={trackRef}
          onScroll={updateScrollState}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {galleryPhotos.map((photo, index) => (
            <li
              key={photo.src}
              className="w-[75%] shrink-0 snap-start sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Open photo: ${photo.alt}`}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-water/10 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 33vw, 25vw"
                />
              </button>
            </li>
          ))}
        </ul>

        {(canScrollPrev || canScrollNext) && (
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollPrev}
              aria-label="Previous photos"
              className={arrowClass}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canScrollNext}
              aria-label="Next photos"
              className={arrowClass}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </Container>

      {openPhoto && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            autoFocus
            className={`${lightboxButtonClass} absolute right-4 top-4`}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className={`${lightboxButtonClass} absolute left-2 top-1/2 z-10 -translate-y-1/2 sm:left-6`}
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <figure
            className="flex h-full w-full max-w-6xl flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-full max-h-[80vh] w-full">
              <Image
                key={openPhoto.src}
                src={openPhoto.src}
                alt={openPhoto.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/80">
              {openPhoto.alt}
              <span className="ml-2 text-white/50">
                {openIndex + 1} / {total}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className={`${lightboxButtonClass} absolute right-2 top-1/2 z-10 -translate-y-1/2 sm:right-6`}
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}
