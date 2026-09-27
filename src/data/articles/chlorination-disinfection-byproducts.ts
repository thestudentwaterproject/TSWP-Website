import type { Article } from "@/types/article";
import { parseArticleBody } from "./manuscript";

export const chlorinationDisinfectionByproducts: Article = {
    slug: "chlorination-disinfection-byproducts",

    title:
        "Chlorination and Disinfection Byproducts: Managing a Tradeoff That Cannot Be Eliminated",

    metaDescription:
        "Chlorination and Disinfection Byproducts: Managing a Tradeoff That Cannot Be Eliminated",

    category: "Featured Article",

    authors: [
        {
            name: "Peizhi Xu",
            affiliation:
                "Department of Medical Sciences, Western University, London, ON, N6A 3K7",
        },
    ],

    pdfHref:
        "/publications/peizhi-chlorination-disinfection-byproducts.pdf",

    abstract: `Chlorine disinfection of municipal drinking water is among the most consequential public health interventions of the twentieth century, and it also creates a chemical problem. Chlorine reacts with the dissolved organic matter already present in source water to form hundreds of halogenated compounds, four of which, the trihalomethanes, are regulated in Canada and the United States alongside five haloacetic acids, bromate, and chlorite. Epidemiological studies have linked long-term trihalomethane exposure to bladder and colorectal cancer, but the most recent systematic review grades that evidence as limited-suggestive, Health Canada's own assessment reaches a different conclusion, and measured concentrations in monitored systems sit well below regulatory limits. Treatment plants have two ways to respond. They can remove the organic matter that chlorine reacts with, called precursor material, using enhanced coagulation, activated carbon, or membranes. Or they can substitute a different disinfectant, which lowers one class of byproducts while creating another, as when chloramine reduces trihalomethanes and introduces nitrosamines and corrosion risk. Recent toxicological work indicates that the regulated compounds do not account for most of the toxicity measured in treated water, and that unregulated nitrogenous and iodinated byproducts do. Precursor removal is the more durable strategy, since it lowers the total quantity of halogenated material regardless of which compounds prove most harmful, though it too can shift the mixture toward more toxic species when source water bromide is high.`,

    sections: parseArticleBody(`
## Introduction

The smell of an indoor swimming pool illustrates the chemistry in a form most readers have encountered. It comes from trichloramine, which forms when free chlorine reacts with the urea, ammonia, amino acids, and creatinine that swimmers introduce through sweat and urine, and which then evaporates into the air (Jmaiff Blackstock et al., 2017). A strong smell indicates a heavy load of these nitrogen-containing starting materials, called precursors, rather than an excessive chlorine dose. Pool operators respond by requiring swimmers to shower and by improving ventilation, not by lowering the disinfectant, because chlorine is what limits transmission of enteric bacteria and viruses between bathers.

The analogy is limited and should not be pushed further than the control principle it illustrates. Pool water and drinking water differ in precursor chemistry and in which byproducts dominate. Pools are driven by nitrogenous material from bathers and produce chloramines as the main products of concern, while drinking water is driven by natural organic matter and produces trihalomethanes and haloacetic acids. What carries across is the observation that the reaction has an input, and that the input can be managed. Municipal treatment plants add chlorine to water already containing dissolved organic matter, and the resulting reaction produces halogenated compounds absent from the source water (Richardson et al., 2007). This creates a conflict between two public health objectives: preventing infectious disease now, and limiting exposure to harmful chemicals across a lifetime. Without adequate disinfection, waterborne pathogens spread through drinking water systems and cause substantial morbidity and, in some cases, mortality. Disinfection byproducts work against the second objective, since several are associated with chronic disease at low absolute risk over decades of exposure (Villanueva et al., 2004; Helte et al., 2025). Neither objective can be pursued without affecting the other.

## Why chlorinate water at all

Before treatment, typhoid fever was endemic in North American cities drawing drinking water from surface sources that received upstream sewage. The first continuous municipal chlorination in the United States began on September 26, 1908, at the Boonton Reservoir serving Jersey City, New Jersey. The process was conceived by the physician John L. Leal and the feed system was designed by the engineer George Warren Fuller, using dilute chloride of lime at doses of 0.2 to 0.35 ppm applied to an average flow of 40 million gallons per day (McGuire, 2013).

Quantifying the resulting benefit is difficult, because filtration, source protection, and sanitation improved over the same period. Cutler and Miller (2005) addressed this using a panel of thirteen major American cities between 1900 and 1936, exploiting differences in when each city adopted the technologies. They attributed nearly half of the total mortality decline in those cities to filtration and chlorination together, approximately three quarters of the decline in infant mortality, and two thirds of the decline in child mortality.

Several qualifications apply. The analysis does not separate filtration from chlorination, and filtration came first in many of the cities studied. A published erratum corrected several tables. Anderson et al. (2018) later found more moderate effects on crude and infant mortality using different methods. The size of the effect remains under debate, while its direction and general magnitude do not.

This history is the baseline against which byproduct risk is assessed. It is also why neither Health Canada nor the US Environmental Protection Agency has proposed reducing disinfection to control byproduct formation, and why both attach explicit language to their byproduct guidelines instructing utilities not to compromise disinfection while complying with them.

## How disinfection byproducts form

Rook (1974) reported that chloroform and brominated trihalomethanes were present in chlorinated water at concentrations well above those in the corresponding raw water, and proposed that they came from the reaction of chlorine with humic substances. Bellar, Lichtenberg, and Kroner (1974) reported the same class of finding independently in the United States. Chloroform is itself a trihalomethane, and it remains the most abundant of the four in most chlorinated supplies.

The precursor in drinking water is natural organic matter, primarily the humic and fulvic acids released by decaying vegetation. It is present in essentially all surface water and gives some sources a visible brown colour. Chlorine reacts with this material to produce trihalomethanes, haloacetic acids, and several hundred other halogenated compounds (Richardson et al., 2007). Because natural organic matter is a complex and variable mixture rather than a defined chemical, the resulting byproduct profile differs between source waters and shifts seasonally within a single source.

Byproducts containing bromine or iodine are generally more genotoxic and carcinogenic than the chlorinated equivalents (Richardson et al., 2007). They form where source water contains bromide or iodide, which chlorine oxidizes into reactive species that are then incorporated into the same reaction products. Source water composition therefore determines both how much byproduct forms and which kind.

Formation continues after the water leaves the plant, because residual chlorine persists in the distribution system by design and keeps reacting with organic matter as the water travels. The spatial pattern is not uniform across compound classes. Rodriguez et al. found that trihalomethane concentrations rise with distance from the plant and then level off, while haloacetic acid concentrations rise and then decline, apparently through microbial degradation (as reviewed in Bhatt et al., 2024). Compliance samples are taken at distribution system locations rather than at the plant outlet for this reason.

The National Cancer Institute reported chloroform to be carcinogenic in rodents in 1976, and the first American trihalomethane regulation followed in 1979, setting a limit of 100 µg/L for the sum of the four trihalomethanes as a running annual average. The logic adopted then still governs. Health Canada describes trihalomethanes and haloacetic acids as the two groups found at the highest concentrations in drinking water, and states that measuring them serves as an indicator of the total loading of all chlorinated byproducts, on the reasoning that controlling these two groups should reduce exposure to the rest (Health Canada, 2006). The US Environmental Protection Agency applies the same reasoning (US EPA, 2006).

## The cancer evidence is consistent in direction and contested in significance

Two syntheses dominate the literature. Their principal results appear below.

Villanueva et al. (2004) pooled primary data from six case-control studies in five countries, using exposure estimates covering at least 70 percent of a 40-year window. Risk was elevated among men and absent among women, a sex difference that has persisted across subsequent studies. Helte et al. (2025) screened 2,022 records, included 29 publications covering 14 cancer types, and found elevated risk for bladder and colorectal cancer. Both bladder estimates have confidence intervals whose lower bound sits close to 1.0, so the association is detectable without being precisely quantified.

In the dose-response analysis, risk estimates first reached statistical significance at a trihalomethane concentration near 41 µg/L, roughly half the American limit of 80 µg/L and less than half the Canadian limit of 100 µg/L. This figure marks where the available data become precise enough to exclude no effect, and it is not a biological threshold below which risk is absent. Helte et al. concluded on this basis that current limits in the United States and the European Union do not adequately protect against cancer risk.

The significance of these results is contested, and the same authors were explicit about why. Applying World Cancer Research Fund criteria, they graded the overall evidence as limited-suggestive, a category indicating evidence too limited to support a causal conclusion. A separate 2025 meta-analysis found that case-control studies were consistent with an association while the available cohort studies were not. Health Canada's guideline document states that the increase in health risk at trihalomethane concentrations up to 100 µg/L is not expected to be significant (Health Canada, 2006). That assessment predates the recent meta-analyses and was not made against the same evidence base, though Health Canada's 2025 consultation proposed retaining the 100 µg/L limit, which indicates the position has not changed.

Measured exposures are also lower than the regulated limits imply. European Union data offer the broadest available picture, since routine monitoring there has been compiled across countries in a way that has no North American equivalent. Evlampidou et al. (2020) assembled records covering roughly three quarters of the population of 26 member states and found a population-weighted mean trihalomethane concentration of 11.7 µg/L. Typical exposure therefore falls well below both the regulatory limits and the concentration at which the epidemiological signal becomes statistically detectable.

Exposure measurement is the main methodological weakness in this literature. Nearly all of these studies estimate exposure from trihalomethane concentrations in the water supplying a participant's residence, while people drink filtered or bottled water, spend time away from home, shower, bathe, and swim. Nuckols et al. (2005) measured blood and exhaled air trihalomethane concentrations across 14 household water use activities, and the work they summarize indicates that inhalation and dermal routes produce larger increases in blood concentration than ingestion does. This criticism applies to epidemiological exposure metrics rather than to the guidelines, since Health Canada's derivation already accounts for showering and bathing by converting inhalation and dermal exposure into a litre-equivalent daily intake (Health Canada, 2006).

A second weakness concerns the use of trihalomethanes as a stand-in for the whole byproduct mixture. Furst et al. (2021) found that substituting trihalomethanes for haloacetonitrile exposure introduces misclassification bias.

Treatment plant operators cannot wait for this literature to resolve. A utility choosing a treatment train is investing in infrastructure that will run for decades, and it must decide using the regulatory limits and evidence that exist now.

## Removing precursors before disinfection

Because byproducts form from a reaction between an oxidant and organic matter, removing the organic matter beforehand reduces the quantity of product. Three approaches are in common use.

Enhanced coagulation involves dosing additional coagulant, a chemical that causes suspended and dissolved material to aggregate into particles large enough to settle or be filtered, sometimes combined with lowering pH to improve removal (US EPA, 2006). It is the least expensive option for plants already operating conventional treatment, and American regulations require a specified degree of total organic carbon removal for many systems.

Granular activated carbon adsorbs dissolved organic matter, meaning the material binds to the carbon surface rather than being absorbed into it. In the survey conducted by Allen et al. (2022), the two plants using granular activated carbon recorded among the lowest average byproduct concentrations, which the authors attributed to precursor removal. The carbon must be regenerated or replaced periodically, and this dominates operating cost. Removing organic carbon also creates conditions for biofilm development on the carbon surface, which requires its own management.

Nanofiltration and reverse osmosis remove organic precursors physically and achieve high removal, at greater capital and energy cost. They also generate a concentrate stream containing the rejected material, which requires its own disposal pathway and is a recognized constraint on membrane treatment.

These approaches carry a complication of their own. Granular activated carbon removes total organic carbon but not bromide, so the ratio of bromide to organic carbon rises and a greater share of the remaining reaction products incorporate bromine (Allen et al., 2022). Krasner et al. (2016) found that granular activated carbon treatment can yield water with higher predicted genotoxicity when bromide is present, despite lower total byproduct concentrations. Reducing the mass of byproducts does not by itself guarantee reducing their toxicity.

## Alternative disinfectants shift byproducts rather than removing them

The alternative to removing the precursor is changing the oxidant. Each substitution lowers one class of byproducts and raises another.

Monochloramine is the most common substitution, used as a secondary disinfectant to maintain a residual through the distribution system. It is a weaker oxidant than free chlorine and produces substantially lower trihalomethane and haloacetic acid concentrations. It is formed deliberately at a controlled chlorine-to-ammonia ratio and dosed at low concentrations, unlike the trichloramine described earlier, which accumulates in pools when a continuous input of ammonia and organic nitrogen drives that ratio in the opposite direction.

Chloramination carries three consequences. The first is nitrification. Any ammonia left unreacted in the distribution system supports bacteria that oxidize it to nitrite and nitrate, and these bacteria consume the disinfectant residual as they grow, leaving water in the outer network less protected. Nitrification is common enough in chloraminated systems that the American Water Works Association publishes a dedicated control manual for it (AWWA, 2013), and utilities manage it through flushing, increased storage turnover, and periodic conversion to free chlorine. The second consequence is the formation of N-nitrosodimethylamine and related nitrosamines at nanogram per litre concentrations, compounds not federally regulated in the United States and currently under evaluation by the US Environmental Protection Agency. The third is corrosion. Lead pipes are normally protected by a mineral scale on the inner surface that keeps the metal out of the water, and a change in oxidation reduction potential can destabilize that scale. Edwards and Dudi (2004) demonstrated the mechanism experimentally after the disinfectant change in Washington, DC, showing that free chlorine rapidly precipitates an insoluble lead solid that does not form under chloramine.

The toxicological comparison between the two disinfectants runs in both directions. Yang et al. (2014) found water disinfected with chlorine to be less cytotoxic but more genotoxic than water disinfected with chloramine, and found that adding bromide and iodide increased both effects, with the larger response under chloramination.

Operating choices produce the same pattern at a smaller scale. Allen et al. (2022) describe a plant using a free chlorine contact time of roughly two minutes before ammonia addition. This limited regulated chlorinated and brominated byproducts and increased iodinated byproducts, because free chlorine oxidizes iodide to iodate and a short contact time leaves that reaction incomplete. The same plant recorded the study's highest iodinated byproduct concentrations and highest cytotoxicity.

## Regulation covers a small fraction of what chlorination produces

The United States regulates 11 disinfection byproducts: four trihalomethanes, five haloacetic acids, bromate, and chlorite. The Stage 1 Rule of 1998 set maximum contaminant levels of 80 µg/L for total trihalomethanes and 60 µg/L for the five haloacetic acids as a system-wide running annual average, and the Stage 2 Rule of 2006 retained both values while changing compliance to a locational running annual average, so that high concentrations at one point can no longer be offset by low concentrations elsewhere (US EPA, 2006). Health Canada sets 100 µg/L for total trihalomethanes and 80 µg/L for total haloacetic acids on the same locational basis (Health Canada, 2006, 2008). The practical consequence is that a utility demonstrates compliance by measuring nine organic compounds and two inorganic ones, and its treatment decisions are shaped accordingly.

More than 700 disinfection byproducts have been identified in drinking water (Richardson & Kimura, 2020), and even that larger set accounts for a minority of the halogenated material present in a treated sample. Total organic halogen is the relevant measure here. It quantifies the combined mass of chlorine, bromine, and iodine bound into organic molecules, whether or not those molecules have been identified, and it therefore indicates how much of the mixture conventional analysis is missing. Krasner et al. (2006) surveyed 12 American treatment plants and found that all measured halogenated byproducts together accounted for approximately 30 percent of total organic halogen on a median basis. Those plants were selected for high organic carbon or bromide to make rare byproducts easier to detect, so the sample is deliberately unrepresentative and 30 percent should not be read as a national figure, but later reviews of more typical drinking water still place the identified fraction below half.

Allen et al. (2022) addressed toxicity rather than quantity, measuring mammalian cell chronic cytotoxicity in whole water extracts alongside 72 individual byproducts and total organic chlorine, bromine, and iodine. They sampled six American utilities across a range of source water impacts, one operating two parallel treatment trains, and described the work as the most comprehensive investigation of drinking water toxicity conducted to date. Three findings follow.

The four regulated trihalomethanes showed no statistically significant correlation with measured cytotoxicity. The compounds that did correlate were unregulated nitrogenous byproducts, particularly the dihaloacetonitriles, along with iodoacetic acids in chloraminated water affected by iodide. Brominated nitrogenous byproducts average approximately 750 times the cytotoxicity of the regulated trihalomethanes (Wagner & Plewa, 2017), so despite occurring at lower concentrations they dominate the measured response, and iodoacetic acid is the most genotoxic byproduct characterized to date (Richardson et al., 2008). The five regulated haloacetic acids behaved differently from the trihalomethanes and did correlate with cytotoxicity, though that correlation disappeared when a single plant was excluded, which leaves it too unstable to support conclusions.

Total organic halogen predicted cytotoxicity better than the regulated compounds did. In chlorinated waters, combined organic chlorine and bromine correlated with cytotoxicity at 0.94, and in chloraminated waters organic iodine correlated at 0.80. These measurements include the uncharacterized majority of the mixture, while the compliance list covers eleven named compounds.

Raw water entering several plants was more cytotoxic than the finished water leaving them, and in some sampling events the difference was large. The responsible contaminants were not identified, though wastewater impact was the likely source. Treatment lowered total cytotoxicity even while adding byproducts, a result that works against the argument developed here and should be weighed against it.

These findings bear on the indicator-compound reasoning described earlier. Both Health Canada and the US Environmental Protection Agency hold that controlling trihalomethanes and haloacetic acids should reduce exposure to the wider mixture. Furst et al. (2021) tested one version of that assumption and found it introduces misclassification bias. If it fails for other classes as well, the regulatory framework and the epidemiological literature share a single weak point, since both rest on the same indicator compounds. Whether it does fail is under active debate (Richardson & Plewa, 2020; Peterson et al., 2026).

Both regulators are revisiting the framework. Health Canada consulted in 2025 on both guidelines, proposing to retain the trihalomethane limit at 100 µg/L and to expand the haloacetic acid guideline from five compounds to six by adding bromochloroacetic acid, with corrective action triggered at 10 µg/L. The US Environmental Protection Agency must propose revisions to the Microbial and Disinfection Byproducts Rules by July 2027, with a final rule due in October 2028, and has stated that it is evaluating unregulated byproducts including chlorate and nitrosamines. The advisory working group convened for that process recommended increased control of byproduct precursors.

## Conclusion

Chlorination presents a tradeoff that can be reduced but not removed. Precursor removal lowers the total quantity of halogenated material formed, which makes it more durable than the alternatives, since it does not depend on knowing which specific compounds prove most harmful. It is not a complete solution, because activated carbon can shift the remaining mixture toward more toxic brominated species when source water bromide is high. Every other approach changes the composition of the mixture rather than its quantity, trading one chemical class for another. Every plant therefore carries some residual chemical risk, and the operating decision determines which one.

The larger point concerns how the framework itself should behave. Regulation currently covers eleven compounds selected when the analytical methods of the 1970s could measure them reliably. Since then, more than 700 byproducts have been identified, detection limits have fallen, and toxicological work has begun to indicate that the eleven may not be the ones carrying most of the hazard. That pattern will repeat. As analytical chemistry improves, compounds that were invisible become measurable, and compounds already known become measurable at finer resolution, which means any fixed list of regulated parameters becomes less representative of the mixture over time. Regulations that govern byproducts therefore have to be revisited as detection capability changes, and both Health Canada and the US Environmental Protection Agency are currently doing so.

What does not change is the comparison being made. Treated water is judged against untreated water, and against the disease burden that untreated water carries. Evidence from the early twentieth century establishes that burden as very large, and nothing in the byproduct literature argues for accepting any part of it back. Measured concentrations in monitored systems sit well below regulatory limits, and the association with cancer, while consistent in direction, remains graded as too limited to establish causation. The open questions concern which byproducts matter most and what a plant should be measuring to know whether its treatment is working. Those questions are the ordinary condition of the field rather than a failure of it, since water treatment consists of optimizing health outcomes across competing risks, and no configuration removes every risk at once.
`),

    references: [
        `Allen, J. M., Plewa, M. J., Wagner, E. D., Wei, X., Bokenkamp, K., Hur, K., Jia, A., Liberatore, H. K., Lee, C.-F. T., Shirkhani, R., Krasner, S. W., & Richardson, S. D. (2022). Drivers of disinfection byproduct cytotoxicity in U.S. drinking water: Should other DBPs be considered for regulation? Environmental Science & Technology, 56(1), 392–402. https://doi.org/10.1021/acs.est.1c07998`,
        `D. Mark Anderson, Kerwin Kofi Charles, and Daniel I. Rees, "Public Health Efforts and the Decline in Urban Mortality," NBER Working Paper 25027 (2018), https://doi.org/10.3386/w25027.`,
        `Bellar, T. A., Lichtenberg, J. J., & Kroner, R. C. (1974). The occurrence of organohalides in chlorinated drinking waters. Journal of the American Water Works Association, 66(12), 703–706.`,
        `Cutler, D., & Miller, G. (2005). The role of public health improvements in health advances: The twentieth-century United States. Demography, 42(1), 1–22.`,
        `Edwards, M., & Dudi, A. (2004). Role of chlorine and chloramine in corrosion of lead-bearing plumbing materials. Journal of the American Water Works Association, 96(10), 69–81.`,
        `Evlampidou, I., Font-Ribera, L., Rojas-Rueda, D., Gracia-Lavedan, E., Costet, N., Pearce, N., Vineis, P., Jaakkola, J. J. K., Delloye, F., Makris, K. C., Stephanou, E. G., Kargaki, S., Kozisek, F., Sigsgaard, T., Hansen, B., Schullehner, J., Nahkur, R., Galey, C., Zwiener, C., … Villanueva, C. M. (2020). Trihalomethanes in drinking water and bladder cancer burden in the European Union. Environmental Health Perspectives, 128(1), 017001. https://doi.org/10.1289/EHP4495`,
        `Furst, K. E., Bolorinos, J., & Mitch, W. A. (2021). Use of trihalomethanes as a surrogate for haloacetonitrile exposure introduces misclassification bias. Water Research X, 11, 100089.`,
        `Health Canada. (2006, addendum 2009). Guidelines for Canadian Drinking Water Quality: Guideline Technical Document — Trihalomethanes. Ottawa: Health Canada.`,
        `Health Canada. (2008). Guidelines for Canadian Drinking Water Quality: Guideline Technical Document — Haloacetic Acids. Ottawa: Health Canada.`,
        `Health Canada. (2025). Draft Guidelines for Canadian Drinking Water Quality: Trihalomethanes and Haloacetic Acids (consultation documents, January to April 2025). Ottawa: Health Canada.`,
        `Helte, E., Söderlund, F., Säve-Söderbergh, M., et al. (2025). Exposure to drinking water trihalomethanes and risk of cancer: A systematic review of the epidemiologic evidence and dose–response meta-analysis. Environmental Health Perspectives, 133(1), 016001. https://doi.org/10.1289/EHP14505`,
        `Jmaiff Blackstock, L. K., Wang, W., Vemula, S., Jaeger, B. T., & Li, X.-F. (2017). Sweetened swimming pools and hot tubs. Environmental Science & Technology Letters, 4(4), 149–153. https://doi.org/10.1021/acs.estlett.7b00043`,
        `Krasner, S. W., Lee, T. C. F., Westerhoff, P., Fischer, N., Hanigan, D., Karanfil, T., Beita-Sandí, W., Taylor-Edmonds, L., & Andrews, R. C. (2016). Granular activated carbon treatment may result in higher predicted genotoxicity in the presence of bromide. Environmental Science & Technology, 50(17), 9583–9591.`,
        `Krasner, S. W., Weinberg, H. S., Richardson, S. D., Pastor, S. J., Chinn, R., Sclimenti, M. J., Onstad, G. D., & Thruston, A. D. (2006). Occurrence of a new generation of disinfection byproducts. Environmental Science & Technology, 40(23), 7175–7185. https://doi.org/10.1021/es060353j`,
        `National Cancer Institute. (1976). Report on the carcinogenesis bioassay of chloroform. Bethesda, MD: National Cancer Institute.`,
        `Nuckols, J. R., Ashley, D. L., Lyu, C., Gordon, S. M., Hinckley, A. F., & Singer, P. (2005). Influence of tap water quality and household water use activities on indoor air and internal dose levels of trihalomethanes. Environmental Health Perspectives.`,
        `Peterson, E. S., et al. (2026). Disinfection byproducts: Health risks, occurrence, control, and implications for regulatory revision. AWWA Water Science.`,
        `Richardson, S. D., Fasano, F., Ellington, J. J., et al. (2008). Occurrence and mammalian cell toxicity of iodinated disinfection byproducts in drinking water. Environmental Science & Technology, 42(22), 8330–8338.`,
        `Richardson, S. D., & Kimura, S. Y. (2020). Water analysis: Emerging contaminants and current issues. Analytical Chemistry, 92(1), 473–505.`,
        `Richardson, S. D., & Plewa, M. J. (2020). To regulate or not to regulate? What to do with more toxic disinfection by-products?`,
        `Richardson, S. D., Plewa, M. J., Wagner, E. D., Schoeny, R., & DeMarini, D. M. (2007). Occurrence, genotoxicity, and carcinogenicity of regulated and emerging disinfection by-products in drinking water: A review and roadmap for research. Mutation Research, 636(1–3), 178–242.`,
        `Rook, J. J. (1974). Formation of haloforms during chlorination of natural waters. Water Treatment and Examination, 23(2), 234–243.`,
        `Thickett, K. M., McCoach, J. S., Gerber, J. M., Sadhra, S., & Burge, P. S. (2002). Occupational asthma caused by chloramines in indoor swimming-pool air. European Respiratory Journal.`,
        `US EPA. (2006). National Primary Drinking Water Regulations: Stage 2 Disinfectants and Disinfection Byproducts Rule. Federal Register, 71(2).`,
        `Villanueva, C. M., Cantor, K. P., Cordier, S., Jaakkola, J. J. K., King, W. D., Lynch, C. F., Porru, S., & Kogevinas, M. (2004). Disinfection byproducts and bladder cancer: A pooled analysis. Epidemiology, 15(4), 357–367.`,
        `Wagner, E. D., & Plewa, M. J. (2017). CHO cell cytotoxicity and genotoxicity analyses of disinfection by-products: An updated review. Journal of Environmental Sciences, 58, 64–76.`,
        `Yang, Y., Komaki, Y., Kimura, S. Y., Hu, H.-Y., Wagner, E. D., Mariñas, B. J., & Plewa, M. J. (2014). Toxic impact of bromide and iodide on drinking water disinfected with chlorine or chloramines. Environmental Science & Technology, 48(20), 12362–12369.`,
    ],
};

const cancerEvidenceSection =
    chlorinationDisinfectionByproducts.sections.find(
        (section) =>
            section.title ===
            "The cancer evidence is consistent in direction and contested in significance",
    );

if (cancerEvidenceSection) {
    const insertionIndex = cancerEvidenceSection.blocks.findIndex(
        (block) =>
            block.type === "paragraph" &&
            block.text.startsWith(
                "Villanueva et al. (2004) pooled primary data",
            ),
    );

    if (insertionIndex !== -1) {
        cancerEvidenceSection.blocks.splice(insertionIndex, 0, {
            type: "table",
            headers: [
                "Study",
                "Design",
                "Cancer site",
                "Cases",
                "Comparison",
                "Risk estimate (95% CI)",
            ],
            rows: [
                [
                    "Villanueva et al. (2004)",
                    "Pooled analysis of 6 case-control studies",
                    "Bladder",
                    "2,806",
                    "Exposure above 50 µg/L vs lowest category",
                    "1.44 (1.20 to 1.73)",
                ],
                [
                    "Villanueva et al. (2004)",
                    "Women only",
                    "Bladder",
                    "Not reported",
                    "Same",
                    "0.95 (0.76 to 1.20)",
                ],
                [
                    "Helte et al. (2025)",
                    "Systematic review, dose-response meta-analysis",
                    "Bladder",
                    "5,860",
                    "Highest vs lowest exposure category",
                    "1.33 (1.04 to 1.71)",
                ],
                [
                    "Helte et al. (2025)",
                    "Same",
                    "Colorectal",
                    "9,262",
                    "Highest vs lowest exposure category",
                    "1.15 (1.07 to 1.24)",
                ],
            ],
        });
    }
}

const alternativeDisinfectantsSection =
    chlorinationDisinfectionByproducts.sections.find(
        (section) =>
            section.title ===
            "Alternative disinfectants shift byproducts rather than removing them",
    );

if (alternativeDisinfectantsSection) {
    const insertionIndex =
        alternativeDisinfectantsSection.blocks.findIndex(
            (block) =>
                block.type === "paragraph" &&
                block.text.startsWith(
                    "Monochloramine is the most common substitution",
                ),
        );

    if (insertionIndex !== -1) {
        alternativeDisinfectantsSection.blocks.splice(
            insertionIndex,
            0,
            {
                type: "table",
                headers: [
                    "Strategy",
                    "What it reduces",
                    "What it introduces",
                ],
                rows: [
                    [
                        "Enhanced coagulation, GAC, nanofiltration",
                        "Total precursor load, and therefore total byproduct formation",
                        "Higher operating cost; with GAC, a rising bromide-to-carbon ratio and more brominated products",
                    ],
                    [
                        "Chloramine as secondary disinfectant",
                        "Trihalomethanes and haloacetic acids",
                        "Nitrification, nitrosamines, and lead release from older plumbing",
                    ],
                    [
                        "Ozone",
                        "Halogenated byproducts generally",
                        "Bromate where source water bromide is elevated",
                    ],
                    [
                        "Chlorine dioxide",
                        "Trihalomethanes",
                        "Chlorite and chlorate, both regulated",
                    ],
                    [
                        "Distribution system management",
                        "Volatile byproducts at the point of consumption",
                        "Limited effect on non-volatile classes",
                    ],
                ],
            },
        );
    }
}