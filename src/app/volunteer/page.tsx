import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fundraiserInitiatives } from "@/data/fundraisers";

const pictureBook = fundraiserInitiatives.find(
    (initiative) => initiative.slug === "picture-book-project",
);

export const metadata: Metadata = {
    title: "Volunteer",
    description:
        "Join The Student Water Project as a volunteer. Browse current openings and find out how to get involved.",
};

export default function VolunteerPage() {
    return (
        <>
            <PageHero
                eyebrow="Volunteer"
                title="Make an impact with us"
                description="The Student Water Project is powered by students and volunteers who care about water, education, and creating meaningful change."
                mascotSrc="/images/mascot/waving.png"
                mascotAlt="Student Water Project droplet mascot waving beside a signpost"
            >
                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/5csXRHYqDMc6sr2Fx8eNqw?utm_source=generator&si=580a0a7782f3406c"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </PageHero>

            <section className="py-16 sm:py-20">
                <Container>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold text-navy">
                            No Open Postings Right Now
                        </h2>

                        <p className="mt-4 leading-7 text-navy/70">
                            We don&apos;t have any volunteer roles open at the moment, but
                            there&apos;s still a great way to get involved — help us bring
                            our student-created water education picture book to life.
                        </p>
                    </div>

                    {pictureBook && (
                        <div className="mx-auto mt-8 grid max-w-4xl gap-8 overflow-hidden rounded-3xl border border-navy/10 bg-white p-7 shadow-sm sm:p-9 lg:grid-cols-[2fr_3fr] lg:items-center">
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

                                <p className="mt-4 leading-7 text-navy/70">
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
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-12 rounded-3xl bg-sky/10 p-8 text-center sm:p-12">
                        <h2 className="text-3xl font-bold text-navy">
                            Interested in getting involved?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-navy/70">
                            Reach out to the team and tell us a little about yourself and how
                            you would like to contribute.
                        </p>

                        <div className="mt-7 flex justify-center">
                            <Button href="/contact">
                                Contact our team
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}