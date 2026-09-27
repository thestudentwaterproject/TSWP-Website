import type { Article } from "@/types/article";
import { parseArticleBody } from "./manuscript";

export const algaeBottleneck: Article = {
    slug: "algae-bottleneck",

    title:
        "The Algae Bottleneck: How Organic Fouling and Biofilms Challenge Surface-Water Membrane Filtration",

    metaDescription:
        "The Algae Bottleneck: How Organic Fouling and Biofilms Challenge Surface-Water Membrane Filtration",

    category: "Featured Article",

    authors: [
        {
            name: "Ayla Nasir",
            affiliation:
                "Department of Chemical Engineering, McMaster University, Hamilton, ON, L8S 4L8",
        },
    ],

    pdfHref: "/publications/ayla-algae-bottleneck.pdf",

    abstract: `Membrane filtration is an important part of water treatment, creating a physical barrier that separates contaminants from drinking water. For treatment systems that rely on surface-water sources, periods of high algal growth can create a particular filtration challenge. Low-pressure membranes, such as ultrafiltration and microfiltration, can become fouled (clogged) by algae and the organic matter they release. This algae-related fouling can reduce membrane performance directly, while accumulated organic material can also create conditions that promote microbial attachment and subsequent biofilm formation. These forms of fouling can reduce water flow, increase energy use and cleaning demands, and may contribute to shorter membrane service life. This article examines algae-related membrane fouling in surface-water drinking-water treatment, including how algal cells and algogenic organic matter accumulate on membranes, how this accumulation can contribute to subsequent biofilm development, and why conventional backwashing and chemical cleaning cannot always restore membrane performance. It also examines how targeted pretreatment, photocatalytic filtration, and electrically conductive membranes are being investigated as potential ways to reduce fouling.`,

    sections: parseArticleBody(`
## Introduction

Many drinking-water systems rely on nearby natural water bodies as their source. Before this water reaches household taps, it passes through several treatment steps designed to remove suspended solids, biological pathogens, and organic matter. Membrane filtration is one method used during this process. It relies on a thin, semi-permeable barrier to separate contaminants from water. In microfiltration and ultrafiltration, microscopic pores primarily act as a physical sieve, allowing water and sufficiently small substances to pass while retaining larger particles and microorganisms. Several types of membrane filtration can be used in drinking-water treatment, including microfiltration (MF), ultrafiltration (UF), nanofiltration (NF), and reverse osmosis (RO) (Crittenden et al., 2012).

Each filtration method provides a different level of separation. MF and UF have comparatively larger pores and are commonly used to remove suspended particles, algae, bacteria, and other microorganisms, while NF and RO can remove much smaller dissolved substances (Centers for Disease Control and Prevention, 2024). Because MF and UF are low-pressure membranes commonly used for particle and microorganism removal, surface-water applications can expose them to large amounts of biological and organic material, particularly during periods of poor source-water quality (Novoa et al., 2021).

## Algae Growth and Biofilm Formation

Surface-water quality can deteriorate when rising temperatures and elevated nutrient concentrations promote algal blooms. Nutrients entering lakes and rivers from sources such as agricultural runoff, livestock operations, and untreated wastewater can support rapid algal growth. During a bloom, large concentrations of algal cells and associated organic material may accumulate near raw-water intake structures and enter drinking-water treatment plants (U.S. EPA, 2025).

However, the challenge is not limited to removing the algal cells themselves. As algae grow, they release a complex mixture of substances known as algogenic organic matter (AOM). Much of the material responsible for membrane fouling is rich in proteins and polysaccharides, including sticky extracellular polymeric substances (EPS) (Her et al., 2004). EPS can attach to membrane surfaces and create a sticky layer that traps bacteria, organic molecules, and other particles.

When algal material reaches the membrane, EPS and other components of AOM can accumulate on its surface, while some smaller organic compounds can adsorb onto the membrane or enter its microscopic pores. This accumulated material can create conditions that promote the attachment of bacteria and other microorganisms present in the incoming water. Once attached, these microorganisms can produce additional EPS, forming a matrix that helps bind the developing microbial community to the membrane surface. As microorganisms, EPS, organic material, and other particles continue to accumulate, a biofilm develops (Xu et al., 2020; Novoa et al., 2021).

The resulting surface layer and pore blockage increase resistance to water flow through the membrane. In systems operated to maintain a relatively constant production rate, pumps must provide greater transmembrane pressure as fouling increases, which raises energy use. Eventually, the membrane may require cleaning or a temporary reduction in water production.

Established biofilms can also increase maintenance demands because more frequent cleaning requires additional chemicals, labour, water, and equipment downtime. Repeated chemical cleaning can also gradually alter membrane materials and shorten their useful life (Nguyen et al., 2012).

Although these effects can increase operating costs for treatment facilities of all sizes, they may be especially difficult to manage in smaller systems, including those serving rural communities. Small systems often operate with limited budgets, fewer staff, and little or no backup treatment capacity. As a result, increased energy use, maintenance requirements, membrane replacement, or temporary losses in treatment capacity can place greater strain on systems with fewer resources available to manage these disruptions (U.S. EPA, 2026).

## Engineering Constraints

The challenge is not only that fouling restricts water flow, but that some of the material causing fouling can become increasingly difficult to remove. Once organic material becomes strongly attached to the membrane or enters its pores, routine cleaning may no longer fully restore membrane performance.

### Backwashing

During normal filtration, water travels through the membrane in one direction. To clean the membrane, operators can use backwashing, which temporarily reverses the direction of flow to remove material collected on its surface. This method works well for loose suspended solids that have not strongly attached to the membrane (Cui et al., 2018). However, backwashing becomes less effective once organic material becomes strongly attached to the membrane or accumulates within its pores.

In algae-affected water, algal organic matter can contribute to both surface fouling and pore blockage. Smaller organic and colloidal material may adsorb within or narrow membrane pores, while larger algal cells and organic material tend to accumulate on the membrane surface (Novoa et al., 2021). Reversing the flow can remove loosely attached cells and surface deposits, but some adsorbed or pore-blocking organic material may remain. Over repeated filtration cycles, this persistent material can contribute to physically irreversible fouling, in which physical cleaning alone does not fully restore the membrane's original permeability (Yamamura et al., 2007). Backwashing therefore remains useful for routine cleaning but cannot remove all forms of strongly attached or pore-blocking fouling.

### Chemical Cleaning

When backwashing does not restore water flow, operators may use chemical cleaning agents or oxidants such as chlorine to control biological growth on the membrane surface. However, killing the microorganisms inside a biofilm does not necessarily remove the EPS matrix surrounding them (Nguyen et al., 2012). Chemical cleaning may therefore reduce biological activity without completely removing the material responsible for fouling. Chemical exposure can also alter membrane materials over time, so cleaning-agent concentration, exposure time, and cleaning frequency must be carefully controlled. Increasing the concentration or duration of chemical treatment, or cleaning more frequently, may contribute to membrane degradation without necessarily removing all of the remaining EPS and associated foulants.

### Pretreatment

Biofouling cannot be treated as an isolated membrane problem because upstream treatment decisions influence the type and amount of material that eventually reaches the membrane (Liu et al., 2024). Pretreatment can therefore be used to remove or modify algal cells and organic matter before filtration.

Coagulation, for example, causes small particles and organic matter to join together into larger flocs that can be removed more easily. Pre-oxidation may also be used to control living microorganisms before filtration (Jalili et al., 2022). However, these upstream steps involve their own trade-offs. Aggressive oxidation or excessive mechanical mixing can rupture fragile algal cells before they are removed. This releases dissolved organic matter and potentially algal toxins into the feedwater, where they may be more difficult to capture than intact cells (Qi et al., 2021). Pretreatment must therefore remove enough algal material to protect the membrane while limiting cell damage and the release of additional dissolved foulants.

Recent research has examined whether more carefully controlled combinations of oxidation and coagulation can achieve this balance. In a 2026 study, researchers used moderate oxidation and coagulation before ultrafiltration of algae-containing water. Under the study's experimental conditions, the treatment reduced reversible fouling resistance by 96.95% and irreversible fouling resistance by 90% compared with untreated water. Reversible fouling resistance is associated with deposits that can largely be removed through physical cleaning, whereas irreversible fouling resistance results from material that remains strongly attached to or trapped within the membrane after cleaning (Han et al., 2026).

The treatment also produced a sparser and more hydrophilic fouling layer, meaning that the material on the membrane was more loosely packed and interacted more readily with water rather than forming a dense barrier to flow (Han et al., 2026). These results suggest that carefully controlled pretreatment can influence both the amount of fouling and the characteristics of the fouling layer that develops on the membrane.

## Emerging Engineering Solutions

Beyond optimizing conventional pretreatment and cleaning, researchers are investigating technologies that can actively break down foulants or modify conditions at the membrane surface to reduce their accumulation.

### Photocatalytic Filtration

Researchers are also investigating photocatalysis, a process in which light activates a material that can promote reactions that break down organic compounds before or during membrane filtration. This approach is particularly relevant to algal blooms because it can target some of the dissolved organic matter released by algae rather than relying only on the removal of intact algal cells.

In a 2025 study, researchers combined photocatalysis with ultrafiltration to treat water containing algal and natural organic matter. Photocatalytic treatment changed the organic material and reduced its attraction to the membrane, helping to limit fouling (Ding et al., 2025). Another study developed an integrated photocatalysis-ultrafiltration reactor that operated continuously for 63 days under controlled experimental conditions and regular maintenance while removing algal organic matter and limiting membrane fouling (Wang et al., 2025).

In these systems, photocatalysis can break down some organic foulants before they accumulate on the membrane, while ultrafiltration provides the physical barrier needed to remove remaining particles and contaminants. Although further development is needed before these systems can be widely applied in drinking-water treatment, the studies demonstrate the potential for filtration systems that actively reduce foulants rather than only trapping them on the membrane surface.

### Electrically Conductive Membranes

Another emerging strategy is to develop membranes that can combine filtration with electrical functions that may eventually be used to help control fouling. Research suggests that applying an electrical potential to these membranes can directly reduce biological fouling. In a 2021 study, electrically conductive membranes operated under a cathodic potential experienced a 21% reduction in water flux over four hours while filtering a bacterial suspension, compared with a 69% reduction in the control experiments (Halali et al., 2021). One challenge in designing electrically conductive membranes is that adding conductive material can reduce the membrane's permeability if the coating blocks the pathways used by water.

Larocque et al. (2021) addressed this engineering trade-off by using crossflow deposition to coat hollow-fibre membranes with carbon nanotubes. The researchers were able to produce membranes that maintained high water permeability while also achieving high electrical conductivity. Their study primarily demonstrated a method for producing practical conductive hollow-fibre membranes rather than directly testing algae-related biofouling control. However, overcoming this conductivity-permeability trade-off is an important step toward membranes that could eventually combine filtration with electrically assisted fouling prevention. Together, these studies show both the potential for electrical conditions to reduce biological fouling and the engineering work being done to make conductive membrane designs more practical. Further research is needed to determine how effectively these systems can control algal organic matter and biofilm development under drinking-water treatment conditions.

## Cross-Industry Applications

The engineering challenges associated with membrane fouling are not unique to municipal drinking-water treatment. However, the materials responsible for fouling and the mechanisms through which it develops can differ substantially between applications. In biopharmaceutical manufacturing, ultrafiltration and virus filters are used to concentrate therapeutic proteins and remove viral contaminants. However, these membranes can experience severe fouling caused by protein aggregates and misfolded product molecules, which can block membrane pores and reduce filtration performance (Isu et al., 2025). Similarly, in dairy processing, proteins can accumulate within membrane pores and form a gel layer on the membrane surface, contributing to fouling and reduced water flow (James et al., 2003). Although the operating conditions and products differ across these industries, water treatment plants, biopharmaceutical manufacturers, and food processors face a similar engineering challenge: preventing the buildup of organic and biological materials while maintaining membrane permeability and extending filter service life.

## Conclusion

Algal blooms create a filtration challenge that goes beyond just removing visible algae from the water. The organic matter released by algae can stick to membrane surfaces, promote the attachment of bacteria and the accumulation of other particles, and contribute to the formation of biofilms. This organic fouling, together with subsequent biofilm development, can increase resistance to water flow and make the treatment process less efficient. As fouling increases, treatment facilities may need to use more pumping pressure, clean the membranes more frequently, or temporarily reduce water production. Although these problems can occur in treatment systems of any size, they may be more difficult to manage in smaller systems, such as those serving rural communities, because they often have fewer financial and operational resources.

There is no single treatment method that can completely prevent algae-related biofouling. Different methods, such as backwashing, chemical cleaning, and pretreatment, target different parts of the problem. Newer technologies, including targeted pretreatment, photocatalytic filtration, and electrically conductive membranes, may provide additional ways to reduce fouling. Recent research therefore suggests that managing biofouling may be most effective through a combination of strategies that limit foulant buildup before it reaches the membrane, remove accumulated material, and reduce further attachment at the membrane surface.

Improving fouling control could have effects beyond membrane performance alone. Reducing the rate at which fouling develops could lower energy use, decrease cleaning and membrane-replacement demands, and reduce treatment disruptions. These improvements could benefit treatment facilities broadly, while being particularly valuable for smaller communities with limited financial resources and backup capacity. In this way, advances in membrane-fouling control also support The Student Water Project’s broader goal of improving access to reliable, safe water in communities that need it most.

Because membrane filtration is used across industries such as water treatment, biopharmaceutical manufacturing, and food processing, even moderate improvements in fouling prevention could have impacts well beyond a single treatment plant. For drinking-water systems in particular, improving membrane reliability means more than extending filter life, making safe water treatment more dependable, affordable, and accessible over time.
`),

    references: [
        `Centers for Disease Control and Prevention. (2024, April 10). About home water treatment systems. U.S. Department of Health and Human Services. https://www.cdc.gov/drinking-water/about/about-home-water-treatment-systems.html`,

        `Crittenden, J. C., Trussell, R. R., Hand, D. W., Howe, K. J., & Tchobanoglous, G. (2012). MWH's water treatment: Principles and design (3rd ed.). John Wiley & Sons.`,

        `Cui, Z., Wang, J., Zhang, H., Ngo, H. H., Jia, H., Guo, W., Gao, F., Yang, G., & Kang, D. (2018). Investigation of backwashing effectiveness in membrane bioreactor (MBR) based on different membrane fouling stages. Bioresource Technology, 269, 355–362. https://doi.org/10.1016/j.biortech.2018.08.111`,

        `Ding, L., Zhou, Z., Liu, C., Yang, Y., Li, X., Ren, J., & Chang, H. (2025). Ultrafiltration membrane fouling mitigation mechanism induced by algal and natural organic matters: Dependence of photocatalysis pre-oxidation degree and membrane properties. Water Research, 286, Article 124199. https://doi.org/10.1016/j.watres.2025.124199`,

        `Han, J., Wang, Q., Sun, L., & Li, Y.-Y. (2026). Moderate oxidation–coagulation pretreatment for mitigating ultrafiltration membrane fouling by algae-laden water: Performance and mechanisms. Desalination, 619, Article 119522. https://doi.org/10.1016/j.desal.2025.119522`,

        `Her, N., Amy, G., Park, H.-R., & Song, M. (2004). Characterizing algogenic organic matter (AOM) and evaluating associated NF membrane fouling. Water Research, 38(6), 1427–1438. https://doi.org/10.1016/j.watres.2003.12.008`,

        `Isu, S., Chen, S.-T., Daneshpour, R., Shirataki, H., Strauss, D., Zydney, A. L., Qian, X., & Wickramasinghe, S. R. (2025). Enhancing virus filter performance through pretreatment by membrane adsorbers. Membranes, 15(1), Article 34. https://doi.org/10.3390/membranes15010034`,

        `Jalili, F., Moradinejad, S., Zamyadi, A., Dorner, S., Sauvé, S., & Prévost, M. (2022). Evidence-based framework to manage cyanobacteria and cyanotoxins in water and sludge from drinking water treatment plants. Toxins, 14(6), Article 410. https://doi.org/10.3390/toxins1406410`,

        `James, B. J., Jing, Y., & Dong, X. D. (2003). Membrane fouling during filtration of milk—A microstructural study. Journal of Food Engineering, 60(4), 431–437. https://doi.org/10.1016/S0260-8774(03)00066-9`,

        `Larocque, G., Latulippe, D. R., & de Lannoy, C.-F. (2021). Formation of electrically conductive hollow fiber membranes via crossflow deposition of carbon nanotubes – Addressing the conductivity/permeability trade-off. Journal of Membrane Science, 620, Article 118859. https://doi.org/10.1016/j.memsci.2020.118859`,

        `Liu, C., Liu, H., Hu, C., Chow, A. T., & Karanfil, T. (2024). Molecular alterations of algal organic matter in oxidation processes: Implications to the formation of disinfection products. ACS ES&T Water, 4(12), 5890–5901. https://doi.org/10.1021/acsestwater.4c00855`,

        `Meng, F., Chae, S.-R., Drews, A., Kraume, M., Shin, H.-S., & Yang, F. (2009). Recent advances in membrane bioreactors (MBRs): Membrane fouling and membrane material. Water Research, 43(6), 1489–1512. https://doi.org/10.1016/j.watres.2008.12.044`,

        `Nguyen, T., Roddick, F., & Fan, L. (2012). Biofouling of water treatment membranes: A review of the underlying causes, monitoring techniques and control measures. Membranes, 2(4), 804–840. https://doi.org/10.3390/membranes2040804`,

        `Novoa, A. F., Vrouwenvelder, J. S., & Fortunato, L. (2021). Membrane fouling in algal separation processes: A review of influencing factors and mechanisms. Frontiers in Chemical Engineering, 3, Article 687422. https://doi.org/10.3389/fceng.2021.687422`,

        `Qi, J., Ma, B., Miao, S., Liu, R., Hu, C., & Qu, J. (2021). Pre-oxidation enhanced cyanobacteria removal in drinking water treatment: A review. Journal of Environmental Sciences, 110, 160–168. https://doi.org/10.1016/j.jes.2021.03.040`,

        `U.S. Environmental Protection Agency. (2025). Harmful algal blooms mitigation and treatment research. Office of Research and Development. https://www.epa.gov/water-research/harmful-algal-blooms-mitigation-and-treatment-research`,

        `U.S. Environmental Protection Agency. (2026, July 7). Technical, managerial and financial (TMF) capacity resources for small drinking water systems. https://www.epa.gov/dwcapacity/technical-managerial-and-financial-tmf-capacity-resources-small-drinking-water-systems`,

        `Wang, T., Zhou, Z., Liu, C., Li, X., & Zhao, Y. (2025). Stability of a novel integrated photocatalysis-ultrafiltration reactor: Algal organic matter removal and membrane fouling alleviation mechanism. Journal of Membrane Science, 717, Article 123602. https://doi.org/10.1016/j.memsci.2024.123602`,

        `Xu, H., Xiao, K., Wang, X., Liang, S., Wei, C., Wen, X., & Huang, X. (2020). Outlining the roles of membrane-foulant and foulant-foulant interactions in organic fouling during microfiltration and ultrafiltration: A mini-review. Frontiers in Chemistry, 8, Article 417. https://doi.org/10.3389/fchem.2020.00417`,

        `Yamamura, H., Kimura, K., & Watanabe, Y. (2007). Mechanism involved in the evolution of physically irreversible fouling in microfiltration and ultrafiltration membranes used for drinking water treatment. Environmental Science & Technology, 41(19), 6789–6794. https://doi.org/10.1021/es0629054`,
    ],
};