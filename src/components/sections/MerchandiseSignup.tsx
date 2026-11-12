import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MascotField } from "@/components/ui/MascotField";

export function MerchandiseSignup() {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20">
            <MascotField
                mascots={["/images/mascot/donate.png", "/images/mascot/mail.png"]}
            />
            <Container className="relative">
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky">
                        Merchandise
                    </p>

                    <Image
                        src="/images/mascot/shopping.png"
                        alt="Student Water Project droplet mascot carrying shopping bags"
                        width={360}
                        height={360}
                        className="mt-6 h-auto max-h-[260px] w-auto max-w-full object-contain sm:max-h-[320px]"
                    />

                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                        Coming Soon
                    </h2>
                </div>
            </Container>
        </section>
    );
}
