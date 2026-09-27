import Image from "next/image";
import { howItWorks } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeader
              eyebrow={howItWorks.eyebrow}
              title={howItWorks.title}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy/70 sm:text-lg">
              {howItWorks.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/about" variant="primary">
                See more
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/images/246CANON/IMG_4691.JPG"
              alt="Student Water Project volunteers posing together in a park"
              fill
              className="object-cover object-[center_60%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
