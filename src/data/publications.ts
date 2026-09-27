export type Publication = {
    title: string;
    author: string;
    category: string;
    summary: string;
    href: string;
    image?: string;
    pdfHref?: string;
};

export const publications: Publication[] = [
    {
        title:
            "The Algae Bottleneck: How Organic Fouling and Biofilms Challenge Surface-Water Membrane Filtration",
        author: "Ayla Nasir",
        category: "Featured Article",
        summary:
            "Surface-water membrane systems can become fouled by algal cells, algogenic organic matter, and developing biofilms, reducing water flow and increasing energy and cleaning requirements. This article examines how algae-related fouling develops, why routine backwashing and chemical cleaning may not fully restore membrane performance, and how emerging approaches such as targeted pretreatment, photocatalytic filtration, and electrically conductive membranes may help improve long-term filtration reliability.",
        href: "/algae-bottleneck",
        image: "/images/ArticleThumbnailAyla.jpg",
        pdfHref: "/publications/ayla-algae-bottleneck.pdf",
    },
    {
        title:
            "Chlorination and Disinfection Byproducts: Managing a Tradeoff That Cannot Be Eliminated",
        author: "Peizhi Xu",
        category: "Featured Article",
        summary:
            "Chlorine disinfection is essential for preventing waterborne disease, but it also reacts with organic matter to produce disinfection byproducts. This article examines the health evidence surrounding trihalomethanes and other byproducts, compares precursor-removal strategies with alternative disinfectants, and explains why water treatment requires balancing microbial protection against long-term chemical exposure rather than eliminating one risk entirely.",
        href: "/chlorination-disinfection-byproducts",
        image: "/images/ArticleThumbnailPeizhi.jpg",
        pdfHref: "/publications/peizhi-chlorination-disinfection-byproducts.pdf",
    },
    {
        title:
            "Lead Contamination in Drinking Water: Health Risks to Children and Filtration Strategies",
        author: "Prisha Gupta",
        category: "Featured Article",
        summary:
            "Lead contamination in drinking water can cause serious and lasting neurological harm, particularly in children. This article examines the biological mechanisms of lead neurotoxicity, disparities in exposure affecting rural and underserved communities, and the strengths and limitations of point-of-use filtration, emphasizing that effective mitigation requires both immediate filtration and long-term removal of contamination sources.",
        href: "/lead-contamination-drinking-water",
        image: "/images/ArticleThumbnailPrisha.png",
        pdfHref: "/publications/prisha-lead-contamination.pdf",
    },
    {
        title:
            "Engineering Future Variants of SpudCells for Programmable Water Bioremediation",
        author: "Prisha Gupta, Ayla Nasir, and Peizhi Xu",
        category: "Jr Scientific Team Publication 1",
        summary:
            "Can an artificial cell help solve one of humanity’s oldest challenges: access to clean water? This article explores the potential of recently constructed synthetic cells, SpudCells, as a sustainable and innovative technology for water bioremediation. Unlike natural bacteria, SpudCells are highly customizable allowing for diversification of specialized tasks without the unpredictability associated with living organisms.",
        href: "/spud-cells",
        image: "/images/ArticleThumbnail1.avif",
        pdfHref:
            "/publications/spud-cells.pdf",
    },
    {
        title:
            "Human Adenoviruses in Drinking Water: Challenges in Detection, Persistence, and Treatment",
        author: "Prisha Gupta, Ayla Nasir, and Peizhi Xu",
        category: "Jr Scientific Team Publication 2",
        summary:
            "Human adenoviruses (HAdVs) have emerged as important waterborne pathogens because of their exceptional environmental stability and persistence. Unlike many other viruses, HAdVs possess a robust protein capsid and a double-stranded DNA genome that enhance their survival under adverse environmental conditions and reduce susceptibility to traditional low-pressure ultraviolet (UV) disinfection.",
        href: "/human-adenoviruses-in-drinking-water",
        image: "/images/ArticleThumbnail2.avif",
        pdfHref:
            "/publications/human-adenoviruses-in-drinking-water.pdf",
    },
    {
        title:
            "Protecting Keystone Species for Coastal Water Quality: Kelp Biofiltration in Municipal Wastewater Management",
        author: "Prisha Gupta, Ayla Nasir, and Peizhi Xu",
        category: "Jr Scientific Team Publication 3",
        summary:
            "Kelp forests can absorb excess nutrients and support healthier coastal ecosystems, but their survival depends on ecological relationships and suitable environmental conditions. This article examines how sea otters protect kelp through the sea otter–urchin–kelp trophic cascade, evaluates the potential of kelp biofiltration using a Tofino case study, and explores the engineering challenges of seasonal nutrient uptake, harvesting, and heavy-metal accumulation.",
        href: "/kelp-biofiltration",
        image: "/images/ArticleThumbnail3.avif",
        pdfHref: "/publications/kelp-biofiltration.pdf",
    },
    {
        title:
            "Phytoremediation of Hospital Wastewater: Removal Mechanisms, Microbial Biofilm Dynamics, and Implementation in Resource-Limited Settings",
        author: "Prisha Gupta, Ayla Nasir, and Peizhi Xu",
        category: "Jr Scientific Team Publication 4",
        summary:
            "Hospital wastewater contains pharmaceutical residues, harmful microorganisms, and antibiotic-resistant bacteria that can persist after conventional treatment. This article explores how subsurface-flow constructed wetlands use gravel, plant roots, and microbial biofilms to reduce pollution, compares plant performance in real-world case studies, and examines the design, climate, land, and maintenance challenges of implementing low-energy treatment in resource-limited settings.",
        href: "/hospital-wastewater-phytoremediation",
        image: "/images/ArticleThumbnail4.avif",
        pdfHref: "/publications/hospital-wastewater-phytoremediation.pdf",
    },
    {
        title:
            "Microplastics in Waste Stabilization Ponds: Limitations of Zooplankton Filtration and Engineering Solutions for Remote Effluent",
        author: "Prisha Gupta, Ayla Nasir, and Peizhi Xu",
        category: "Jr Scientific Team Publication 5",
        summary:
            "Microplastics, particularly synthetic microfibres, can escape wastewater treatment and enter aquatic food webs through filter-feeding organisms such as Daphnia. This article investigates why natural zooplankton filtration and sedimentation are insufficient for long-term microplastic removal in waste stabilization ponds, and proposes a low-energy, modular treatment approach combining particle agglomeration, depth filtration, and permanent solids retention for remote communities.",
        href: "/microplastics-in-waste-stabilization-ponds",
        image: "/images/ArticleThumbnail5.avif",
        pdfHref: "/publications/microplastics-in-waste-stabilization-ponds.pdf",
    },
    {
        title:
            "Treating Arsenic in Groundwater: Chemical Challenges and Rural Engineering Solutions",
        author: "Prisha Gupta, Ayla Nasir, and Peizhi Xu",
        category: "Jr Scientific Team Publication 6",
        summary:
            "Arsenic contamination is an invisible threat to groundwater-dependent communities, and its chemical form determines how effectively it can be removed. This article examines the sources and health risks of arsenic, compares adsorption, ion exchange, and membrane treatment, and evaluates household and community-scale systems to show why maintenance, local replacement parts, and long-term monitoring are essential to reliable rural water treatment.",
        href: "/arsenic-in-groundwater",
        image: "/images/ArticleThumbnail6.avif",
        pdfHref: "/publications/arsenic-in-groundwater.pdf",
    },
];

export const publicationsPage = {
    title: "Student Publications",
    description:
        "Explore research and articles by our Junior Scientific Team, examining innovative approaches to water treatment, environmental sustainability, and global water challenges.",
};