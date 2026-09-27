import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MascotField } from "@/components/ui/MascotField";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fundraiserInitiatives } from "@/data/fundraisers";

const pictureBook = fundraiserInitiatives.find(
  (initiative) => initiative.slug === "picture-book-project",
);

export function PictureBookPromo() {
  if (!pictureBook) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <MascotField
        mascots={["/images/mascot/waving.png", "/images/mascot/donate.png"]}
      />
      <Container className="relative">
        <SectionHeader
          eyebrow="Student Projects"
          title="TSWP Picture Book Project"
          description="Help bring our student-created water education picture book to life — every submission and purchase supports clean water access."
          className="mb-10"
        />

        <div className="grid items-center gap-10 rounded-2xl border border-navy/8 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-water/10 shadow-sm">
            <Image
              src={pictureBook.image}
              alt={pictureBook.imageAlt ?? pictureBook.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-water-dark">
              {pictureBook.subtitle}
            </p>
            <h3 className="mt-1 text-xl font-bold text-navy">
              {pictureBook.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              {pictureBook.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {pictureBook.primaryCta && (
                <Button
                  href={pictureBook.primaryCta.href}
                  external={pictureBook.primaryCta.external}
                >
                  {pictureBook.primaryCta.label}
                </Button>
              )}
              {pictureBook.secondaryCta && (
                <Button
                  href={pictureBook.secondaryCta.href}
                  variant="outline"
                  external={pictureBook.secondaryCta.external}
                >
                  {pictureBook.secondaryCta.label}
                </Button>
              )}
              <Button href="/fundraisers" variant="outline">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
