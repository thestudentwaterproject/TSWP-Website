import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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
                            we&apos;d still love to hear from you. Check back soon for new
                            opportunities.
                        </p>
                    </div>

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