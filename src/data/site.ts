import type { SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "The Student Water Project",
  shortName: "TSWP",
  eyebrow: "Students for Students",
  tagline:
    "We fundraise, partner with engineers, and bring UV water purification to communities that need it most.",
  description:
    "The Student Water Project is a student-led initiative that partners with professional engineers to deploy UV water purification systems in schools and communities that lack access to clean drinking water.",
  email: "info@tswp.org",
  location: "Toronto, Ontario, Canada",
  social: {
    instagram: "https://www.instagram.com/thestudentwaterproject",
    linkedin: "https://www.linkedin.com/company/the-student-water-project",
  },
};

export const howItWorks = {
  eyebrow: "How It Works",
  title: "Students fund it. Engineers build it. Communities benefit.",
  paragraphs: [
    "The Student Water Project™ is a student-led initiative that partners with professional engineers to bring UV water purification to schools and communities without access to clean drinking water.",
    "Students lead fundraising campaigns in their own schools and communities, and 100% of every dollar raised goes to a specific, verified project. Partner engineers and scientists guide the technical work, while A Drop of Hope, led by Dr. Paul Nyangaresi, coordinates deployment on the ground.",
    "Along the way, students receive impact reports and see exactly where their effort goes. Education through action.",
  ],
};

export const merchandiseSignup = {
  eyebrow: "Support Us",
  title: "Merchandise Shop",
  description:
    "Our Merchandise Shop is launching soon! Join our emailing list for updates.",
  prompt: "Get notified when we release new merch!",
};

export const homeFinalCta = {
  title: "Ready to make a difference?",
  primaryCta: { label: "Become a Volunteer", href: "/volunteer" },
  secondaryCta: { label: "Become a Sponsor", href: "/sponsorships" },
};

export const aboutContent = {
  eyebrow: "About",
  title: "Students building solutions, not just awareness",
  subtitle:
    "We fund and build real infrastructure, in partnership with world-class engineers.",
  paragraphs: [
    "The Student Water Project™ is a student-led initiative that partners with professional engineers to deploy UV water purification systems in schools and communities that lack access to clean drinking water.",
    "Students lead fundraising efforts at their schools and communities. Every dollar raised goes directly toward a specific, verified project. Industry-leading partner engineers and scientists guide our student team through the technical implementation process.",
    "We work alongside A Drop of Hope, led by award-winning PhD Dr. Paul Nyangaresi, to identify communities with the greatest need and coordinate on-the-ground deployment.",
    "Students receive impact reports, track project progress, and see exactly where their effort goes. Education through action.",
  ],
  uvSection: {
    title: "Why UV Water Treatment",
    paragraphs: [
      "Ultraviolet purification destroys 99.99% of harmful pathogens without chemicals, filters, or complex maintenance.",
      "Unlike chlorine, UV leaves no taste or odor. Unlike boiling, it requires minimal energy. A single UV-LED system can serve an entire school for years with very little upkeep.",
    ],
  },
  ngoSection: {
    title: "We are Registered NGO With the Government of Canada",
    ctaLabel: "View Incorporation Certificate",
    certificateHref: "/documents/tswp-certificate-of-incorporation.pdf",
  },
};

export const externalLinks = {
  donate: "https://www.zeffy.com/en-CA/donation-form/tswp-general-donations",
  challengeSite: "https://tswp12k.vercel.app/",
  zeffyCampaign:
    "https://www.zeffy.com/en-CA/peer-to-peer/25-000-km-challenge",
  mitacsArticle:
    "https://www.mitacs.ca/our-innovation-insights/how-a-bc-researcher-is-tackling-water-challenges/",
  studentLeaderApplication:
    "https://docs.google.com/forms/d/e/1FAIpQLScSrgiKw-RjoyByfmQ0AbpdPSzMJyVrgOvuIA-ruqZ0xRmbFg/viewform?usp=header",
  proposalDocument:
    "https://www.tswp.org/_files/ugd/0e285e_6b0cea5d337c4f5685de4fbad436e799.docx?dn=Student%20Fundraiser%20Proposal%20Application.docx",
};
