import { createManuscriptArticle } from "./manuscript";

export const arsenicInGroundwater = createManuscriptArticle({
    slug: "arsenic-in-groundwater",
    title:
        "Treating Arsenic in Groundwater: Chemical Challenges and Rural Engineering Solutions",
    metaDescription:
        "Exploring arsenic speciation, groundwater contamination, and the technical and operational challenges of rural arsenic treatment systems.",
    category: "Jr Scientific Team Publication 6",
    pdfHref: "/publications/arsenic-in-groundwater.pdf",
    abstract: `Arsenic contamination in groundwater is a major global public health concern, exposing more than 200 million people worldwide to potentially harmful concentrations (Podgorski & Berg, 2020). In groundwater, arsenic primarily occurs as arsenite [As(III)] and arsenate [As(V)]. These are two chemical forms that differ in their toxicity levels, and their removal behavior, depending on water pH and composition (Chaudhary et al., 2024). These differences can make effective treatment challenging, especially in rural and decentralized communities that rely on private wells and often lack routine testing and more advanced treatment infrastructures (Yang et al., 2020). This article examines the natural and human-caused sources of groundwater arsenic, the chemical processes that cause arsenic to be released into groundwater, and its effects on human health, while evaluating the challenges associated with removing different arsenic species using current treatment technologies.`,
    body: `
## Introduction

### Background & Overview of the Issue

Despite widespread recognition of the importance of clean drinking water as a public health necessity, some contaminants can remain undetected in water supplies. Dissolved chemical contaminants are particularly concerning because they can persist in groundwater while remaining difficult to detect without routine monitoring (Podgorski & Berg, 2020). Among these contaminants, heavy metals and metalloids pose a significant concern because of their environmental persistence and the serious health effects associated with long-term exposure (Chaudhary et al., 2024).

Arsenic is a naturally occurring metalloid classified as a Group 1 human carcinogen (International Agency for Research on Cancer, 2012). Globally, more than 200 million people are estimated to be exposed to groundwater arsenic concentrations above the World Health Organization guideline value and U.S. Environmental Protection Agency Maximum Contaminant Level of 10 µg/L (Podgorski & Berg, 2020; U.S. Environmental Protection Agency, 2002). Unlike many visible forms of water pollution, dissolved arsenic is completely tasteless, odorless, and colorless. As a result, contaminated groundwater may appear safe for consumption and cannot be identified without specialized testing (National Institute of Environmental Health Sciences, 2023). This makes arsenic particularly concerning in communities that depend heavily on groundwater as a drinking water source.

### Sources of Arsenic

Arsenic enters aquatic environments through both natural geological processes and human activity. Globally, most groundwater contamination originates from geogenic sources, with arsenic naturally occurring in rocks, sediments, volcanic deposits, geothermal fluids, and minerals. Over time, weathering and interactions between these minerals and groundwater can release arsenic into surrounding underground water sources (Smedley & Kinniburgh, 2002).

Human activities can also produce more localized arsenic contamination. Historical use of arsenic-containing pesticides, mining and smelting operations, and industrial waste discharge, can introduce additional arsenic into soil and water systems (Mandal & Suzuki, 2002).

### Why Groundwater Becomes Contaminated

The presence of arsenic-containing minerals does not necessarily mean that groundwater will become contaminated. Arsenic can remain bound to mineral surfaces within underground rock and sediment for long periods of time. The main problem occurs when changes in groundwater chemistry cause this arsenic to detach or dissolve into the surrounding water (Smedley & Kinniburgh, 2002).

One important mechanism is reductive dissolution. In oxygen-poor sediments, microbial activity can cause iron and manganese minerals to dissolve. Because arsenic is often attached to these mineral surfaces, their breakdown releases previously bound arsenic into the groundwater (McArthur et al., 2001).

Arsenic can also be released through changes in pH. In arid and semi-arid environments, groundwater can become highly alkaline, altering the electrical charge of mineral surfaces and causing arsenic to detach and enter the surrounding water (Smedley & Kinniburgh, 2002).

Human activity can further alter these underground conditions. Excessive groundwater pumping may lower the water table and allow oxygen to reach sulfide-rich rock formations. This oxygen can trigger the breakdown of arsenic-containing minerals, such as pyrite, releasing additional arsenic into the groundwater (Mandal & Suzuki, 2002).

Together, these processes explain why groundwater arsenic concentrations can vary significantly between regions, even when arsenic-containing minerals are naturally present in the ground. Contamination therefore depends not only on whether arsenic exists underground, but also on the chemical and environmental conditions that determine whether it remains bound or is released into the water.

## Chemical Speciation

Arsenic contamination is also affected by chemical speciation, which refers to the different chemical forms that arsenic can take in water. In groundwater, dissolved inorganic arsenic is mainly found as arsenite [As(III)] or arsenate [As(V)]. Which form is more common depends on groundwater conditions such as pH, oxygen availability, and the chemical changes caused by processes such as reductive dissolution. This distinction is important because the form of arsenic affects how it behaves in groundwater and how easily it can be removed during treatment (Smedley & Kinniburgh, 2002).

Arsenite [As(III)] is generally more common in groundwater with little to no oxygen. At the pH found in many groundwater sources (approximately pH 6–8), As(III) mainly exists as arsenious acid (H₃AsO₃), which has little to no electrical charge. Because it is uncharged, it does not interact as strongly with many charged treatment materials, making As(III) more difficult to remove using conventional treatment methods (Chaudhary et al., 2024).

Arsenate [As(V)], on the other hand, is more common when oxygen is present. It usually exists as negatively charged forms such as H₂AsO₄⁻ and HAsO₄²⁻. Because these forms carry a negative charge, they can interact more easily with many treatment materials, making As(V) generally easier to remove than As(III) (U.S. Environmental Protection Agency, 2002).

Therefore, identifying which form of arsenic is present is an important step when choosing and designing an effective treatment system.

## Why Arsenic Is a Public Health Concern

- **Acute exposure:** Very high doses can cause vomiting, abdominal pain, neurological effects, shock, and other severe symptoms (World Health Organization, 2022).
- **Long-term exposure:** Chronic arsenic exposure, or arsenicosis, can cause skin changes such as hyperpigmentation and hyperkeratosis and has been linked to cardiovascular and neurological disease (Naujokas et al., 2013).
- **Cancer risk:** Continued exposure is associated with increased risks of cancers of the skin, bladder, kidney, and lungs (Naujokas et al., 2013).
- **Delayed effects:** Symptoms may take years or decades to appear, meaning communities can continue drinking contaminated groundwater before the damage becomes obvious.

This delayed and often invisible exposure makes reliable arsenic removal especially important. However, as the differences between As(III) and As(V) show, treatment is not a one-size-fits-all problem. In rural communities, an effective solution must also remain affordable, maintainable, and reliable over long periods of use.

## The Impact of Arsenic in Rural Communities

Rural communities face heightened risks from arsenic exposure because they often rely on untreated private groundwater wells rather than regulated public water systems that are subject to routine monitoring. Even in developed countries such as the United States, approximately 2.1 million (National Institute of Environmental Health Sciences, 2023) people rely on domestic wells with arsenic concentrations exceeding the EPA’s drinking-water standard. Since arsenic is tasteless, odourless, and dissolved in water, its presence cannot be detected without water testing. However, rural households may face financial and logistical barriers to regular testing, limiting their ability to identify contamination. Furthermore, boiling water does not remove arsenic and may actually increase its concentration as water evaporates. Consequently, specialized treatment technologies are required to effectively remove arsenic from contaminated groundwater, creating an additional challenge for communities with limited financial and technical resources (National Institute of Environmental Health Sciences, 2023).

## Current Treatment Technologies and Their Limitations

There are several technologies used to filter arsenic from groundwater, although not all of them have been applied at full scale to treat arsenic. Some have only been tested in situ and others do not address above ground treatment of arsenic in groundwater. The ones discussed below are widely implemented in various areas, including rural communities.

### Adsorption

Adsorption is one of the most widely studied technologies for removing arsenic from contaminated water. It involves the accumulation of dissolved arsenic onto the surface of a solid material, known as an adsorbent, rather than allowing it to remain dissolved in the water. Adsorbents typically possess a high surface area and reactive chemical groups or charged sites that interact with arsenic, facilitating its attachment to the material. Common sorbents include activated carbon, copper–zinc granules, and ferric hydroxide, which can effectively reduce arsenic concentrations in contaminated water under suitable treatment conditions.

However, adsorption efficiency depends on several factors, including pH, arsenic speciation, temperature, and the presence of competing solutes. For iron- and aluminum-based adsorbents, arsenic adsorption is often most effective under mildly acidic to near-neutral conditions. Consequently, pretreatment or pH adjustment may be required to optimize arsenic removal (U.S. Environmental Protection Agency, 2002).

Adsorption is generally more effective for As(V) (arsenate) than As(III) (arsenite) because As(V) forms stronger surface complexes with many metal-oxide-based adsorbents due to its negative charge (Liu et al., 2024). Additionally, competing solutes such as phosphate and silicate can occupy available adsorption sites, reducing the capacity of the adsorbent to bind arsenic.

Despite its effectiveness, a major limitation is the management of spent adsorbent, which is the saturated adsorbent. The arsenic-filled sorbent must either be regenerated or safely removed and disposed of. Regeneration can introduce additional operational costs, while disposal requires appropriate management to prevent the release of accumulated arsenic into the environment. Consequently, although adsorption offers a relatively simple and effective approach to arsenic removal, the selection of an appropriate adsorbent, optimization of treatment conditions, and safe management of spent media are essential for its long-term application (U.S. Environmental Protection Agency, 2002).

### Ion Exchange

Ion exchange is a chemical process in which dissolved ions in water are exchanged with ions attached to a solid ion-exchange resin. For arsenic removal, strong-base anion-exchange resins are commonly used because As(V) occurs primarily as negatively charged arsenate species under typical groundwater conditions. These arsenate ions are exchanged with counter-ions, such as chloride, that are initially associated with the resin, thereby removing arsenic from the water.

However, ion-exchange treatment is often preceded by pretreatment, such as filtration, to remove suspended solids, organic matter, and other contaminants that could foul or prematurely saturate the resin. As(III) is generally not effectively removed by conventional anion exchange because it predominantly exists as the neutral species H₃AsO₃ at typical groundwater pH values. Therefore, As(III) may first need to be oxidized to As(V) to improve its removal. Additionally, dissolved iron can interfere with treatment by forming iron–arsenic complexes or precipitates and contributing to resin fouling, reducing the availability of exchange sites. The effectiveness of ion exchange also depends on pH and competing ions, such as sulfate, nitrate, bicarbonate, and phosphate, which can compete with arsenate for exchange sites. For chloride-form strong-base anion-exchange resins, effective arsenate removal is generally possible across a relatively broad pH range, although the optimal conditions depend on the specific resin and water chemistry (U.S. Environmental Protection Agency, 2002).

### Membrane Filtration

Membrane filtration removes arsenic from contaminated water by forcing water through a semipermeable membrane that allows water to pass while retaining contaminants. Membrane processes are generally classified according to membrane pore size and include reverse osmosis (RO), nanofiltration (NF), ultrafiltration (UF), and microfiltration (MF). Of these, RO and NF are generally more effective for removing dissolved arsenic because their denser membranes provide greater rejection of small dissolved species, while electrostatic interactions can further enhance the removal of charged arsenic species.

The effectiveness of membrane filtration also depends on arsenic speciation. As(V) is generally removed more effectively than As(III) because As(V) predominantly exists as negatively charged arsenate species at typical water-treatment pH. Consequently, As(V) experiences greater electrostatic repulsion from negatively charged membrane surfaces. Since pH influences both arsenic speciation and membrane surface charge, maintaining an appropriate pH is important for maximizing removal efficiency. Despite their high removal efficiency, membrane systems can involve significant operational costs associated with membrane selection and replacement, energy requirements, pretreatment to control fouling, and management of the arsenic-rich concentrate or reject stream (U.S. Environmental Protection Agency, 2002).

## Why Field Performance Differs from Laboratory Performance

The technologies described above can remove arsenic when operating conditions are controlled. In rural settings the difficulty is not achieving removal but sustaining it. Many arsenic treatment systems installed across rural South Asia stopped working within a few years. The causes were mostly operational and social rather than chemical. Systems failed because they were not maintained or repaired, were not accepted by the households meant to use them, or cost more to run than communities could afford (Amrose et al., 2014). A survey of 577 arsenic removal plants across five affected districts of West Bengal found that 145 were no longer functioning at all and that 475 of the 577 were judged not useful, with poor maintenance, sand gushing, lack of user friendliness, and absence of community participation identified as the main causes (Hossain et al., 2006). Designing for rural communities therefore means designing for the years after installation rather than for removal efficiency on the day the unit is commissioned.

## What a Rural Treatment System Has to Do

These failures point to a set of design requirements that follow from the limitations described in the previous section. A system suited to rural use should minimize dependence on routine chemical dosing, pH adjustment, or specialized operator intervention. It should tolerate variable groundwater chemistry, particularly the phosphate and silicate that compete with arsenic for binding sites. Its media should last years rather than months, and replacement parts should be available locally. Arsenic captured by the system should stay contained on site instead of being discharged. The system should also give the household some signal when treatment stops working, since arsenic is tasteless and odourless and a failed filter is indistinguishable from a working one.

## Iron-Based Household Filters

Most low-cost household filters rely on iron rather than a purchased adsorbent. Metallic iron corrodes in water and produces hydrous ferric oxide surfaces that bind arsenic. Because corrosion continues during operation, the filter generates a fresh binding surface as it runs instead of consuming a fixed quantity of media. This partly addresses the spent adsorbent problem described earlier. The SONO filter, developed in Bangladesh, applies this principle using a composite iron matrix in a two bucket configuration (Neumann et al., 2013). A field survey of 198 households using the filter found that 72 percent of units were still working at the time of the survey, with the remaining 28 percent abandoned after breakage. Households reported cost, maintenance difficulty, weak guidance on sludge disposal, and slow flow rate as the main drawbacks, and were generally unwilling to repair broken filters themselves (Shafiquzzaman et al., 2009).

The same principle performed very differently in Nepal. The Kanchan Arsenic Filter uses iron nails as its corroding iron source. Monitoring of 27 filters over three years found an average arsenic removal of 57 percent, with 84 percent of filtered samples still exceeding WHO guideline values, and removal capacity falling from above 90 percent to below 30 percent within roughly one year. One identified cause was a change in the nails supplied by the manufacturer, which switched from non-galvanized to galvanized. Replacing all filter media at a cost of about USD 17 per unit restored average removal capacity to above 90 percent (Ogata, 2023). The design concept was sound. Performance collapsed because of a component substitution that users had no way to detect.

## Community-Scale Systems and Emerging Approaches

Moving treatment from the household to the village changes who is responsible for upkeep. Since 1997, well-head units have been mounted directly onto existing hand pumps in West Bengal, each containing about 100 litres of activated alumina and serving 200 to 300 households. The units operate without chemical addition, pH adjustment, or electricity, and reduce influent concentrations ranging from about 100 to over 500 µg/L to consistently below 50 µg/L. That threshold was India's national drinking water standard at the time of the study (Hossain et al., 2006), and it is five times the WHO guideline of 10 µg/L. India lowered its own acceptable limit to 10 µg/L in 2012 (Bureau of Indian Standards, 2012). The units met the standard that applied to them, but not the level now considered safe. Each charge of sorbent is often treated more than 10,000 times its own volume of water before regeneration. Every unit is run and monitored by a committee appointed by the villagers, and the removed arsenic is retained on the same premises rather than disposed of elsewhere (Sarkar et al., 2005). After a decade of operation, more than 200 units were supplying water to roughly 200,000 villagers daily (Sarkar et al., 2010).

Electrocoagulation offers another route. Passing a low current through iron plates dissolves iron into the water, which then precipitates as iron oxide and binds arsenic, so no adsorbent has to be purchased or shipped. A 600 litre electrochemical arsenic remediation reactor operated for three and a half months in West Bengal reduced arsenic from about 266 µg/L to below 5 µg/L, at an estimated operating cost of $0.83 to $1.04 per cubic metre (Amrose et al., 2014). The process still produces arsenic-bearing sludge and still requires a power supply, although the voltages involved are low enough for solar operation.

## What Remains Unsolved

The same pattern appears in high-income rural settings. In the Strong Heart Water Study, point-of-use filters installed at kitchen sinks in American Indian communities in the Northern Great Plains reduced arsenic below 10 µg/L in 93 percent of households over two years (Zacher et al., 2023). A qualitative evaluation of the same program found that implementation was limited by the remoteness of households, difficulty coordinating plumbers for installation, and trouble securing a local supplier for replacement cartridges (Anderson et al., 2023). The removal technology worked. What proved fragile was the supply of parts and the arrangement for maintenance, which is the same weakness seen in Bangladesh, Nepal, and West Bengal at a very different level of income. For groups working on rural water treatment, the limiting problem is less often the chemistry of arsenic removal than the local systems that keep a working device working.

## Conclusion

Arsenic is difficult to manage for reasons that run from the aquifer to the household. Its two dominant forms behave differently during treatment, and As(III) is generally more difficult to remove using the methods that work well on As(V). The communities most exposed are often those least able to test their water or maintain equipment. Adsorption, ion exchange, and membrane filtration all remove arsenic effectively under suitable conditions, yet the field record shows that removal efficiency is rarely what decides whether a community ends up with safe water. Maintenance arrangements and local supply of replacement parts matter at least as much, as does having some way to know when a system has stopped working.

This matters for the kind of work The Student Water Project does. TSWP's pilot treatment system showed that the treatment itself performs, and the limits on expanding it have been storage and capacity rather than removal performance. The arsenic literature points to the same conclusion from a different direction. Designing for the years after installation, and not only for the day a system is commissioned, is what turns a working technology into a working water supply.
`,
    references: `
Amrose, S. E., Bandaru, S. R. S., Delaire, C., van Genuchten, C. M., Dutta, A., DebSarkar, A., Orr, C., Roy, J., Das, A., & Gadgil, A. J. (2014). Electro-chemical arsenic remediation: Field trials in West Bengal. Science of the Total Environment, 488–489, 539–546. https://doi.org/10.1016/j.scitotenv.2013.11.074

Anderson, D. M., Black Bear, A., Zacher, T., Endres, K., Saxton, R., Richards, F., Bear Robe, L., Harvey, D., Best, L. G., Red Cloud, R., Thomas, E. D., Gittelsohn, J., O'Leary, M., Navas-Acien, A., & George, C. M. (2023). Implementing a community-led arsenic mitigation intervention for private well users in American Indian communities: A qualitative evaluation of the Strong Heart Water Study program. International Journal of Environmental Research and Public Health, 20(3), 2681. https://doi.org/10.3390/ijerph20032681

Bureau of Indian Standards. (2012). Drinking water: Specification (IS 10500:2012, 2nd rev.). https://law.resource.org/pub/in/bis/S06/is.10500.2012.pdf

Chaudhary, M. M., Hussain, S., Du, C., Conway, B. R., & Ghori, M. U. (2024). Arsenic in water: Understanding the chemistry, health implications, quantification and removal strategies. ChemEngineering, 8(4), 78. https://doi.org/10.3390/chemengineering8040078

Hossain, M. A., Mukharjee, A., Sengupta, M. K., Ahamed, S., Das, B., Nayak, B., Pal, A., Rahman, M. M., & Chakraborti, D. (2006). Million dollar arsenic removal plants in West Bengal, India: Useful or not? Water Quality Research Journal, 41(2), 216–225. https://doi.org/10.2166/wqrj.2006.025

International Agency for Research on Cancer. (2012). A review of human carcinogens: Arsenic, metals, fibres, and dusts (IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, Vol. 100C). World Health Organization. https://publications.iarc.fr/Book-And-Report-Series/Iarc-Monographs-On-The-Identification-Of-Carcinogenic-Hazards-To-Humans/A-Review-Of-Human-Carcinogens-Arsenic-Metals-Fibres-And-Dusts-2012

Jiang, J.-Q., Ashekuzzaman, S., Jiang, A., Sharifuzzaman, S., & Chowdhury, S. (2012). Arsenic contaminated groundwater and its treatment options in Bangladesh. International Journal of Environmental Research and Public Health, 10(1), 18–46. https://doi.org/10.3390/ijerph10010018

Liu, J., Duan, Y., Chen, H., Ye, B., Zhang, H., Tan, W., Kappler, A., & Hou, J. (2024). Extent of as(III) versus as(v) adsorption on iron (oxyhydr) oxides depends on the presence of vacancy cluster-like micropore sites: Insights into a seesaw effect. Science of The Total Environment, 954, 176376. https://doi.org/10.1016/j.scitotenv.2024.176376

Mandal, B. K., & Suzuki, K. T. (2002). Arsenic round the world: A review. Talanta, 58(1), 201–235. https://doi.org/10.1016/S0039-9140(02)00268-0

McArthur, J. M., Ravenscroft, P., Safiulla, S., & Thirlwall, M. F. (2001). Arsenic in groundwater: Testing pollution mechanisms for sedimentary aquifers in Bangladesh. Water Resources Research, 37(1), 109–117. https://doi.org/10.1029/2000WR900270

National Institute of Environmental Health Sciences. (2023). Arsenic. https://www.niehs.nih.gov/health/topics/agents/arsenic

National Institute of Environmental Health Sciences. (2023, April 18). Arsenic. U.S. Department of Health and Human Services. https://www.niehs.nih.gov/health/topics/agents/arsenic

Naujokas, M. F., Anderson, B., Ahsan, H., Aposhian, H. V., Graziano, J. H., Thompson, C., & Suk, W. A. (2013). The broad scope of health effects from chronic arsenic exposure: Update on a worldwide public health problem. Environmental Health Perspectives, 121(3), 295–302. https://doi.org/10.1289/ehp.1205875

Neumann, A., Kaegi, R., Voegelin, A., Hussam, A., Munir, A. K. M., & Hug, S. J. (2013). Arsenic removal with composite iron matrix filters in Bangladesh: A field and laboratory study. Environmental Science & Technology, 47(9), 4544–4554. https://doi.org/10.1021/es305176x

Ogata, R. (2023). Three-year monitoring of the efficacy and improvement of the most popular arsenic removal filter in Nepal. Groundwater for Sustainable Development, 23, 101013. https://doi.org/10.1016/j.gsd.2023.101013

Podgorski, J., & Berg, M. (2020). Global threat of arsenic in groundwater. Science, 368(6493), 845–850. https://doi.org/10.1126/science.aba1510

Sarkar, S., Gupta, A., Biswas, R. K., Deb, A. K., Greenleaf, J. E., & SenGupta, A. K. (2005). Well-head arsenic removal units in remote villages of Indian subcontinent: Field results and performance evaluation. Water Research, 39(10), 2196–2206. https://doi.org/10.1016/j.watres.2005.04.002

Sarkar, S., Greenleaf, J. E., Gupta, A., Ghosh, D., Blaney, L. M., Bandyopadhyay, P., Biswas, R. K., Dutta, A. K., & SenGupta, A. K. (2010). Evolution of community-based arsenic removal systems in remote villages in West Bengal, India: Assessment of decade-long operation. Water Research, 44(19), 5813–5822. https://doi.org/10.1016/j.watres.2010.07.072

Shafiquzzaman, M., Azam, M. S., Mishima, I., & Nakajima, J. (2009). Technical and social evaluation of arsenic mitigation in rural Bangladesh. Journal of Health, Population and Nutrition, 27(5), 674–683. https://doi.org/10.3329/jhpn.v27i5.3779

Smedley, P. L., & Kinniburgh, D. G. (2002). A review of the source, behaviour and distribution of arsenic in natural waters. Applied Geochemistry, 17(5), 517–568. https://doi.org/10.1016/S0883-2927(02)00018-5

U.S. Environmental Protection Agency. (2002). Implementation guidance for the arsenic rule: Drinking water regulations for arsenic and clarifications to compliance and new source monitoring requirements (EPA 816-K-02-018). Office of Water. https://www.epa.gov/dwreginfo/chemical-contaminant-rules

US EPA. (2002). Proven Alternatives for Aboveground Treatment of Arsenic in Groundwater. https://www.epa.gov/sites/default/files/2015-06/documents/arsenic_issue_paper.pdf

World Health Organization. (2022, December 7). Arsenic. https://www.who.int/news-room/fact-sheets/detail/arsenic

Yang, Q., Flanagan, S. V., Chillrud, S., Ross, J., Zeng, W., Culbertson, C., Spayd, S., Backer, L., Smith, A. E., & Zheng, Y. (2020). Reduction in drinking water arsenic exposure and health risk through arsenic treatment among private well households in Maine and New Jersey, USA. Science of The Total Environment, 738, 139683. https://doi.org/10.1016/j.scitotenv.2020.139683

Zacher, T., Endres, K., Richards, F., Bear Robe, L., Powers, M., Yracheta, J., Harvey, D., Best, L. G., Red Cloud, R., Black Bear, A., Ristau, S., Aurand, D., Skinner, L., Cuny, C., Gross, M., Thomas, E., Rule, A., Schwab, K. J., O'Leary, M., … George, C. M. (2023). Evaluation of a water arsenic filter in a participatory intervention to reduce arsenic exposure in American Indian communities: The Strong Heart Water Study. Science of the Total Environment, 862, 160217. https://doi.org/10.1016/j.scitotenv.2022.160217
`,
});