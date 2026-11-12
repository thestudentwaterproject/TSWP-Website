import { CTA } from "@/components/sections/CTA";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Hero } from "@/components/sections/Hero";
import { HolidaySleigh } from "@/components/sections/HolidaySleigh";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { MerchandiseSignup } from "@/components/sections/MerchandiseSignup";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { PilotProjectSupport } from "@/components/sections/PilotProjectSupport";
import { PublicationsSpotlight } from "@/components/sections/PublicationsSpotlight";
import { SocialFollow } from "@/components/sections/SocialFollow";
import { SponsorsStrip } from "@/components/sections/SponsorsStrip";
import { VideoFeature } from "@/components/sections/VideoFeature";
import { homeFinalCta } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <HowItWorks />
      <HolidaySleigh />
      <VideoFeature />
      <FeaturedProject />
      <PilotProjectSupport />
      <PublicationsSpotlight />
      <MerchandiseSignup />
      <SocialFollow />
      <SponsorsStrip />
      <PhotoGallery />

      <CTA
        title={homeFinalCta.title}
        primaryCta={homeFinalCta.primaryCta}
        secondaryCta={homeFinalCta.secondaryCta}
        variant="gradient"
      />
    </>
  );
}
