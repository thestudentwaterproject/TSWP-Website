"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import type { TeamMember } from "@/types";

interface TeamCarouselProps {
    members: TeamMember[];
    className?: string;
}

// Bold, high-contrast arrows that sit on the left/right edges of the carousel.
const arrowClass =
    // vertically centred on the 4:3 photos: card width × 3/8 (2 cards on sm, 4 on lg)
    "absolute z-10 hidden h-12 w-12 -translate-y-1/2 sm:top-[calc((100cqw-1.5rem)*0.1875)] lg:top-[calc((100cqw-4.5rem)*0.09375)] items-center justify-center rounded-full bg-navy text-white shadow-lg shadow-navy/30 ring-4 ring-white transition hover:scale-110 hover:bg-water-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water sm:inline-flex lg:h-14 lg:w-14";

export function TeamCarousel({ members, className = "" }: TeamCarouselProps) {
    const trackRef = useRef<HTMLUListElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateScrollState = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        // allow for the track's 16px side padding / snap offset
        setCanScrollPrev(track.scrollLeft > 24);
        setCanScrollNext(
            track.scrollLeft + track.clientWidth < track.scrollWidth - 24,
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

    return (
        <div className={`@container relative ${className}`}>
            <ul
                ref={trackRef}
                onScroll={updateScrollState}
                className="flex flex-col gap-y-12 sm:-mx-4 sm:snap-x sm:snap-mandatory sm:flex-row sm:gap-6 sm:overflow-x-auto sm:scroll-smooth sm:px-4 sm:pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {members.map((member) => (
                    <li
                        key={member.name}
                        className="w-full sm:w-[calc((100%-1.5rem)/2)] sm:shrink-0 sm:snap-start lg:w-[calc((100%-4.5rem)/4)]"
                    >
                        <TeamMemberCard member={member} />
                    </li>
                ))}
            </ul>

            {/* Each arrow only shows when there's more to see in that direction. */}
            {canScrollPrev && (
                <button
                    type="button"
                    onClick={() => scrollByCard(-1)}
                    aria-label="Previous team members"
                    className={`${arrowClass} -left-3 lg:-left-7`}
                >
                    <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
                </button>
            )}
            {canScrollNext && (
                <button
                    type="button"
                    onClick={() => scrollByCard(1)}
                    aria-label="Next team members"
                    className={`${arrowClass} -right-3 lg:-right-7`}
                >
                    <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
                </button>
            )}
        </div>
    );
}
