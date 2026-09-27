import type { NavItem } from "@/types";
import { externalLinks } from "@/data/site";

export const mainNav: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Student Publications", href: "/student-publications" },
    { label: "Pilot Project", href: "/pilot-project" },
    { label: "Fundraisers", href: "/fundraisers" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Sponsorships", href: "/sponsorships" },
    { label: "Contact", href: "/contact" },
];

export const ctaNav: NavItem[] = [
    { label: "Donate", href: externalLinks.donate },
    { label: "Volunteer", href: "/volunteer" },
];