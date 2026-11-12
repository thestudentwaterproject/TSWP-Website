import Image from "next/image";
import { currentSponsors } from "@/data/sponsors";
import { Container } from "@/components/ui/Container";
import { MascotField } from "@/components/ui/MascotField";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SponsorsStrip() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <MascotField
        mascots={["/images/mascot/science.png", "/images/mascot/location.png"]}
      />
      <Container className="relative">
        <SectionHeader
          title="Currently Supported By"
          description="Project partners named across The Student Water Project site."
          align="center"
          className="mb-10"
        />
        {/* Logos sit directly on the page. Each is sized so its area is about
            equal: wide wordmarks get shorter, square marks get taller. */}
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 [--logo-h:88px] sm:gap-x-16 sm:[--logo-h:120px]">
          {currentSponsors.map((sponsor) => {
            const scale = 1 / Math.sqrt(sponsor.width / sponsor.height);
            return (
              <li key={sponsor.name} className="flex items-center">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="w-auto max-w-[80vw] transition-transform duration-300 hover:scale-105"
                  style={{ height: `calc(${scale.toFixed(3)} * var(--logo-h))` }}
                  sizes="(max-width: 640px) 80vw, 360px"
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
