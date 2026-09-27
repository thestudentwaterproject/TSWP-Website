"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import type { TeamMember } from "@/types";

interface TeamCarouselProps {
    members: TeamMember[];
    className?: string;
}

const arrowClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/15 bg-white text-navy transition-colors hover:border-water hover:text-water-dark disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-navy/15 disabled:hover:text-navy";

export function TeamCarousel({ members, className = "" }: TeamCarouselProps) {
    const trackRef = useRef<HTMLUListElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

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

    return (
        <div className={className}>
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

            {(canScrollPrev || canScrollNext) && (
                <div className="mt-6 flex justify-center gap-3">
                    <button
                        type="button"
                        onClick={() => scrollByCard(-1)}
                        disabled={!canScrollPrev}
                        aria-label="Previous team members"
                        className={arrowClass}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollByCard(1)}
                        disabled={!canScrollNext}
                        aria-label="Next team members"
                        className={arrowClass}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            )}
        </div>
    );
}
