import { ScrollFlyover } from "./ScrollFlyover";

/**
 * Plane (with a droplet mascot peeking from the wing) towing a banner
 * left → right across the top of its parent section.
 */
export function PlaneBanner({ message }: { message: string }) {
  return (
    <ScrollFlyover
      message={message}
      imageSrc="/images/plane.png"
      imageWidth={1024}
      imageHeight={1024}
      imageClassName="h-40 w-40 sm:h-60 sm:w-60"
      direction="ltr"
      bannerClassName="plane-banner--large"
      bannerTextClassName="text-2xl sm:text-4xl"
      ropeClassName="h-10 w-20 sm:w-28"
      className="top-4 h-40 sm:top-6 sm:h-60"
    />
  );
}
