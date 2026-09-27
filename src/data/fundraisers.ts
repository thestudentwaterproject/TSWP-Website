import type { FundraiserInitiative } from "@/types";
import { externalLinks } from "@/data/site";

export const fundraisersPage = {
  eyebrow: "Student Projects",
  title: "Student-led fundraising and outreach initiatives",
  description:
    "From running challenges and hackathons to fashion shows, our initiatives not only raise funds for our pilot project but also empower high school and university students to channel their creativity into meaningful impact.",
};

export const fundraiserInitiatives: FundraiserInitiative[] = [
  {
    slug: "picture-book-project",
    title: "TSWP Picture Book Project",
    subtitle: "Call for Submissions",
    type: "Fundraising Initiative",
    date: "Book release around the holiday season",
    location: "Online",
    ledBy: "The Student Water Project",
    status: "Accepting Submissions",
    summary:
      "The Student Water Project is collecting imaginative responses to water-themed questions from elementary students and turning them into a student designed picture book! All profits will go towards our clean water initiatives in Kisii, Kenya.",
    details: [
      "Elementary-aged students answer water-themed questions that encourage them to use their imagination. There are no limits to how they can answer — we want to hear funny, imaginative, unique, and unexpected ideas, whether they're silly, thoughtful, or completely made up!",
      "Students write down their answers and submit their original water-themed stories or ideas through our Google Form. A parent or legal guardian must agree to the submission terms before the story can be included in the book.",
      "TSWP will review the submissions and select approximately 10–15 creative and imaginative responses to be featured in the picture book.",
      "Once the stories are selected, our student illustration team will bring each idea to life through original illustrations.",
      "The finished book will be available for purchase around the holiday season, primarily online, with opportunities to share and sell it through libraries, bookstores, community events, and holiday pop-ups.",
      "Sample prompts: Why is the ocean salty? Where does a river think it is going? Who designs every snowflake? What if you could ride a raindrop?",
    ],
    image: "/images/fundraisers/picture-book-project.jpg",
    imageAlt:
      "TSWP Picture Book call for submissions flyer with water droplet mascots and a blue storybook",
    imageOrientation: "portrait",
    primaryCta: {
      label: "View the Flyer & All Prompts",
      href: "/documents/tswp-picture-book-project.pdf",
      external: true,
    },
    secondaryCta: {
      label: "Download the Submission Worksheet",
      href: "/documents/tswp-picture-book-worksheet.pdf",
      external: true,
    },
  },
  {
    slug: "12000-km-challenge",
    title: "12,000 KM Challenge",
    subtitle: "Virtual Running Fundraiser",
    type: "Fundraising Initiative",
    date: "July–August 2026",
    location: "Remote / Global",
    ledBy: "Student Water Project Executive team",
    status: "Completed",
    summary:
      "The 12,000 KM Challenge was a student-led fundraising campaign organized by The Student Water Project to support the Rianyabayo Memorial Academy water initiative in Kenya. From August 2–9, 2026, participants worked together toward a collective goal of travelling 12,000 kilometres — symbolically representing the distance between Canada and Kenya — while raising funds and awareness for clean drinking water. The challenge has wrapped up, but our campaign page is still open for donations.",
    details: [
      "Held August 2–9, 2026, with a community kickoff event on August 3 at Springbank Park in London, Ontario.",
      "60 participants covered 3,504 km, backed by 161 donors and 5 sponsors and partners.",
      "$12,367.63 was raised — 123.6% of our $10,000 goal — with 100% of peer-to-peer donations going directly to the project.",
      "Funds raised are going toward deploying 2 UV reactors at Rianyabayo Memorial Academy in Kisii, Kenya, providing safe drinking water for 300+ students.",
      "See the full breakdown of results, sponsors, and thank-yous in our Final Report.",
    ],
    image: "/images/246CANON/IMG_4684.JPG",
    primaryCta: {
      label: "See Challenge Site",
      href: externalLinks.challengeSite,
      external: true,
    },
    secondaryCta: {
      label: "We're Still Accepting Donations!",
      href: externalLinks.zeffyCampaign,
      external: true,
    },
    tertiaryCta: {
      label: "Read the Final Report",
      href: "/documents/12000-km-challenge-final-report.pdf",
      external: true,
    },
  },
];

export const challengeHomePreview = {
  title: "12,000 KM Challenge",
  subtitle: "Virtual Running Fundraiser",
  summary:
    "The 12,000 KM Challenge was a global running initiative held August 2–9, 2026. Participants ran, walked, and cycled around the world, contributing their distance toward a collective goal of 12,000 km, representing the distance from Toronto to Kisii, Kenya. The challenge has concluded — thank you to everyone who took part!",
  highlights: [
    "3,504 km travelled by 60 participants",
    "$12,367.63 raised — 123.6% of our $10,000 goal",
    "161 donors and 5 sponsors and partners",
  ],
  primaryCta: {
    label: "Learn More",
    href: "/fundraisers",
  },
  externalCtas: [
    {
      label: "See Challenge Site",
      href: externalLinks.challengeSite,
      external: true,
    },
    {
      label: "We're Still Accepting Donations!",
      href: externalLinks.zeffyCampaign,
      external: true,
    },
  ],
};

export const studentLeaderProgram = {
  title: "Become a Student Project Leader",
  description:
    "Do you have a creative idea to raise funds and/or awareness for The Student Water Project? With the help of our executive team and senior advisors, we can bring your vision to life!",
  steps: [
    {
      step: 1,
      title: "Preliminary Proposal",
      description:
        "Write a preliminary proposal for your fundraiser. Please follow the guiding document.",
    },
    {
      step: 2,
      title: "Application Form",
      description:
        "Fill out your student information and upload your preliminary proposal.",
    },
    {
      step: 3,
      title: "Executive Review",
      description:
        "Our team will review your application and assess fit based on motivation, experience, and availability.",
    },
    {
      step: 4,
      title: "Kickoff Meeting",
      description:
        "Once your application is reviewed and approved, we will finalize the proposal and event details in a kickoff meeting.",
    },
    {
      step: 5,
      title: "Resource Preparation",
      description: "Prepare funding platforms, event space, and related logistics.",
    },
    {
      step: 6,
      title: "Marketing and Sponsorships",
      description:
        "Find event participants and sponsors through personal and TSWP media platforms.",
    },
    {
      step: 7,
      title: "Execution",
      description:
        "Carry out the project while managing timelines, tracking progress, and adapting to challenges.",
    },
    {
      step: 8,
      title: "Final Report",
      description:
        "Write a final report to be published on the website, including funds raised, participation levels, and overall reach.",
    },
  ],
  benefits: [
    "Eligibility: Open to motivated high school, college, and university students",
    "Volunteer Hours: Leading a Student Water Project initiative from start to finish can contribute 40+ verified volunteer hours for Canadian high school students",
    "IB CAS Opportunity: This role can count as a CAS project or CAS experience for students in the International Baccalaureate program",
    "Mentorship & Support: You will receive ongoing guidance from experienced student leaders and senior advisors throughout the entire process",
    "Portfolio Building: Gain valuable leadership experience for university, co-op, and job applications",
  ],
  proposalCta: {
    label: "Proposal Guiding Document",
    href: externalLinks.proposalDocument,
    external: true,
  },
  applicationCta: {
    label: "Student Leader Application",
    href: externalLinks.studentLeaderApplication,
    external: true,
  },
};

export const challengeCommittee = [
  { name: "Kate Klassen", detail: "Western University — BSc" },
  { name: "Valeria Jaimes Castillo", detail: "Western University — BSc" },
  { name: "Jamie Barclay", detail: "University of Guelph — BA" },
  { name: "Dan Csinos", detail: "Queen's University — BSc" },
  { name: "Samantha Guzzo", detail: "Western University — BSc" },
  { name: "Grace Docherty", detail: "Western University — BMus" },
];
