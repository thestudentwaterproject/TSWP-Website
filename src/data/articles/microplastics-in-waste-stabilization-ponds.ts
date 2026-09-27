import { createManuscriptArticle } from "./manuscript";

export const microplasticsInWasteStabilizationPonds =
    createManuscriptArticle({
        slug: "microplastics-in-waste-stabilization-ponds",
        title:
            "Microplastics in Waste Stabilization Ponds: Limitations of Zooplankton Filtration and Engineering Solutions for Remote Effluent",
        metaDescription:
            "Investigating microplastic transport through wastewater lagoons, the limits of Daphnia filtration, and low-energy modular filtration solutions.",
        category: "Jr Scientific Team Publication 5",
        pdfHref: "/publications/microplastics-in-waste-stabilization-ponds.pdf",
        abstract: `Microplastics have emerged as a persistent environmental contaminant due to their widespread use, resistance to degradation, and increasing release from household and industrial sources. Although wastewater treatment plants remove a large proportion of microplastics, millions of particles can still be discharged daily into aquatic ecosystems. This challenge is particularly significant in rural and northern communities, where passive waste stabilization ponds are commonly used because of their low operational and maintenance requirements. However, these systems rely primarily on sedimentation, allowing many buoyant microplastics, especially synthetic microfibres, to remain suspended and escape treatment. Zooplankton such as Daphnia readily ingest these particles because they cannot distinguish them from algae, introducing microplastics into aquatic food webs and facilitating their transfer to higher trophic levels. This review examines the movement of microplastics through wastewater treatment systems, the ecological role of zooplankton in microplastic transport, and the limitations of passive lagoon treatment for microplastic removal. The literature indicates that while biological interactions may contribute to particle settling, zooplankton are not an effective long-term filtration mechanism. Based on these findings, a practical engineering direction is proposed: integrating a low-energy, modular filtration system at the discharge point of waste stabilization ponds to improve microplastic capture while maintaining the affordability and simplicity required for remote communities.`,
        body: `
## Background

### Microplastics

Since the plastic boom during World War II, plastic has become a widespread material used in daily life (Ziani et al., 2023). Initially, it was designed to improve lifestyles, however, plastic pollution has become a serious environmental concern due to its persistence and accumulation in ecosystems (Talukdar et al., 2024). Poor management of increasing plastic production and consumption has resulted in widespread contamination, with only approximately 7% of plastic recycled in Canada, leaving the majority of plastic waste to accumulate in terrestrial and aquatic environments (Government of Canada, 2023).

Plastic debris smaller than 5 mm, called microplastics, have become a dominant pollutant in aquatic environments due to their insoluble and non-biodegradable characteristics that allow them to persist for long periods. Microplastics initially come from wastewater effluent carrying particles from household and industrial activities. Some major sources they initially come from include synthetic clothing fibres released during laundry, tire wear particles generated from road abrasion, and incorrect plastic waste management. Microplastics are transported through rainwater runoff and atmospheric deposition, allowing them to spread across diverse environments, including air, soil, freshwater, and oceans. Additionally, their ability to absorb toxic contaminants such as heavy metals (Cr, Cu, Zn, and Pb) may increase their ecological impact by introducing harmful pollutants into food webs (Talukdar et al., 2024).

### Zooplankton as an Entry Point of Microplastics into Food Webs

Zooplankton are tiny, free-floating aquatic crustaceans commonly known as “water fleas” due to their jerky, hopping swimming style. They are a vital component of freshwater ecosystems because they act as a connection between primary producers, such as algae, and higher trophic organisms, including fish (Potter, 2019). Due to their filter-feeding behaviour, zooplankton do not discriminate between nutritious algae and similarly sized microplastic particles. Therefore, in environments with elevated microplastic concentrations, such as wastewater-impacted ecosystems, zooplankton may unintentionally ingest significant quantities of plastic particles.

### Effects on the Food Web

Zooplankton ingest microplastic particles that fall within the size range they normally filter from the water, which in one study spanned roughly 2 to 30 micrometres, or less than half the width of a human hair (Cole et al., 2013). That study recorded uptake across thirteen zooplankton groups, and the amount ingested varied by species, life stage, and particle size. Some ingested particles pass through the gut and are released in fecal pellets, while others are retained for longer. In both cases the animals themselves are eaten by larval fish and aquatic insects, which carries plastic upward through the food web.

Most of the documented harm is sublethal, meaning that exposed animals survive but function less well. Shore et al. (2021) exposed the copepod *Acartia tonsa* to polystyrene beads across its full life cycle and found that exposed animals grew shorter bodies, survived less often as larvae, and produced smaller eggs when exposure occurred during egg formation. Each effect is modest on its own, but a population model built on them projected a 15% reduction in population growth and a thirty-fold decline in abundance over one year. Results across the literature are not uniform. A review by Botterell et al. (2019) reported negative effects in 45% of exposure studies and no detectable effect in 14%.

Microplastic ingestion also affects nutrient cycling. Zooplankton fecal pellets carry carbon and nutrients from surface water down to the sediment, which is one of the main routes by which these materials move through an aquatic system. Pellets produced under microplastic exposure were 2.29 times smaller and sank 1.76 times more slowly than uncontaminated pellets, resulting in an estimated four-fold reduction in the volume of fecal material reaching the bottom each day (Shore et al., 2021). Less organic material reaching the sediment means less food for the bottom-dwelling organisms that depend on it, and more organic matter left suspended in the water column.

### Natural Filtration and Its Limits

Waste stabilization ponds (WSPs), also called wastewater lagoons, are large open basins that hold wastewater for weeks or months and rely on settling and natural biological activity, rather than mechanical filtration, to break down organic matter and reduce nutrient and pathogen loads. Zooplankton exist naturally in these ponds and are efficient filter feeders. This raises the question of whether these organisms may remove microplastics on their own, at no cost and with no energy input. The evidence indicates that they cannot.

Most of what is known about zooplankton filtration comes from *Daphnia magna*, a freshwater species widely used in laboratory studies. It feeds by beating its thoracic limbs, which carry rows of fine hairs called setae that trap suspended particles. Gophen & Geller (1984) measured gaps between these setae of 0.4 to 0.7 micrometres across four *Daphnia* species, finer than most engineered filter membranes, and concluded that mechanical sieving explains the retention they observed. An alternative model attributes capture to direct interception, in which particles adhere to the setae rather than being strained out (Gerritsen & Porter, 1982). Under either model, capture is non-selective, so microplastics are taken up alongside algae. The apparatus is also self-cleaning. Blockages are scraped off the filtering limbs by the postabdominal claws, a pair of hooked appendages at the rear of the body, and ejected.

Four limitations reduce the value of this filtration for microplastic removal in treatment ponds.

The first is particle size and shape. In the only published survey of microplastics in a WSP, fibres accounted for 62 to 71% of all particles, with most measuring between 45 and 125 micrometres (Gao et al., 2021). Laboratory studies show that *D. magna* can ingest spherical microplastics of 63 to 75 micrometres (Canniff & Hoang, 2018) and up to 106 micrometres (Frydkjær et al., 2017), although another study found no ingestion of 90 micrometre spheres under its own test conditions (Scherer et al., 2017). Only part of the size range found in ponds falls within what *D. magna* can take up, and fibrous particles are ingested less consistently than spherical ones. Size matters more for plastic than for most other contaminants. Plastic does not break down into simpler compounds under environmental conditions. It fragments into smaller particles instead, and smaller particles are harder to capture by any method, biological or engineered.

The second limitation is that the self-cleaning mechanism responds differently to microplastics than to natural particles. Zink et al. (2024) exposed *D. magna* to bentonite clay and to polyethylene microplastics at matched turbidity, meaning the water was equally cloudy in both cases. When exposed to clay, the organisms maintained feeding efficiency by increasing mandible movement, gut contractions, and particle expulsion, which allowed the clay to pass through the digestive tract. Exposure to polyethylene microplastics reduced feeding efficiency instead. Gut contractions increased but expulsion did not, meaning the microplastics were retained for longer.

The third limitation is that natural suspended particles reduce microplastic uptake. Scherer et al. (2017) found that adding natural particles decreased microplastic ingestion in every freshwater invertebrate species tested. Laboratory ingestion rates therefore overestimate what would occur in a pond, where algae, sediment, and organic matter compete for the same filtering capacity.

The fourth limitation is that packaging microplastics into fecal pellets does not consistently remove them from the water column. It was found that fecal pellets containing low-density polyethylene sank more slowly than uncontaminated pellets, while those containing polyethylene terephthalate sank more quickly (Cole et al., 2016; Coppock et al., 2019). Slower-sinking pellets are more likely to break apart before reaching the sediment, releasing the trapped microplastics back into the water.

Field observations are consistent with these laboratory findings. Gao et al. (2021) measured similar microplastic concentrations in WSP water (4.1 particles per litre) and in the final effluent (3.9 particles per litre), with no significant seasonal variation. They also found the highest concentrations in surface duckweed (*Lemna minor*), at 75 particles per gram of dry weight, compared with only 12.8 particles per gram in sludge. Together, these results suggest that microplastics remain suspended near the water surface rather than being transferred to the sediment, and no study has yet demonstrated measurable microplastic removal through zooplankton grazing in a WSP.

These findings carry a practical consequence for pond design. The microplastics most likely to leave a lagoon are the ones zooplankton handle worst, being small, fibrous, and buoyant. Because neither grazing nor settling removes them, the particles that reach the effluent also reach downstream ecosystems. Plastic that does settle is not permanently removed either, since pond sludge is periodically dredged and is often applied to agricultural land. Relying on the organisms already present is therefore not a viable treatment strategy. The biology does indicate what an added step would need to do. A filter operating in lagoon effluent has to capture fibres rather than spheres, function in water already carrying a heavy load of algae and organic solids, and include an anti-clogging mechanism, since the *Daphnia* filter holds its fine gaps only by being scraped clean continuously.

## The Engineering Gap in Current Wastewater Treatment

The presence of microplastics in Daphnia demonstrates what can happen when particles escape wastewater treatment, raising an important engineering question: how can these contaminants be intercepted before they reach aquatic ecosystems?

Although wastewater treatment systems can capture many microplastics, they were originally designed to remove organic matter, nutrients, pathogens, and larger suspended solids rather than plastic particles. As a result, even well-performing treatment facilities can release substantial quantities of microplastics into nearby rivers, lakes, and coastal waters (Bläsing & Amelung, 2018).

Understanding this problem requires examining how microplastics move through the different stages of wastewater treatment.

### Limitations of Conventional Treatment

Conventional wastewater treatment generally occurs in several stages. During primary treatment, wastewater passes through screens, grease traps, and settling basins. Screens remove larger objects, while settling basins slow the movement of water so that dense particles sink and oils rise to the surface. Together, these processes can remove approximately 70–80% of larger microplastics entering a treatment facility (Carr et al., 2016).

When wastewater moves to secondary treatment, microorganisms break down dissolved organic waste. In activated-sludge systems, microorganisms combine with suspended material to form larger clusters called flocs. Many remaining microplastic particles become trapped within these flocs and are removed with the sewage sludge.

Together, primary and secondary treatment can retain approximately 95–99% of the microplastics entering some wastewater treatment plants (Carr et al., 2016; Sun et al., 2019).

Despite these high percentages, high removal rates do not mean that the final effluent is free of plastic. Wastewater treatment plants process millions of litres of water each day. Therefore, even the small percentage of particles that remains is still significant when released through these large volumes of treated wastewater, potentially contributing to ecological damage (Mason et al., 2016).

### Why Microfibres Are Especially Difficult to Remove

Although many types of microplastics are difficult to remove from wastewater, synthetic microfibres present a particular challenge. These fibres are released when clothing made from materials such as polyester, acrylic, and nylon is washed. Browne et al. (2011) found that polyester and acrylic made up approximately 84% of the synthetic fibres identified in sewage effluent samples, while polyamide accounted for the remaining 16%.

The small size and thin, elongated shape of microfibres make them difficult to capture during wastewater treatment. Unlike heavier particles that settle more easily, some fibres can remain suspended in the water and pass through early treatment stages. While some may become trapped in biological flocs during secondary treatment, others can remain in the final treated wastewater and enter nearby waterways (Carr et al., 2016; Sun et al., 2019). This is supported by Ziajahromi et al. (2017), who identified synthetic fibres in treated wastewater effluent, showing that conventional treatment methods do not completely remove microfibres. Their elongated geometry can also make filtration more difficult than it is for similarly sized spherical particles because fibres may orient themselves with water flow and pass through filter openings. Together, these properties help explain why microfibres can remain in effluent even when a treatment system achieves high overall microplastic removal.

### Engineering Challenges in Northern Wastewater Systems

Waste stabilization ponds as described earlier, are used because they require less maintenance, and specialized operation than conventional mechanical treatment systems (Polar Knowledge Canada, 2016). Although these ponds can remove many larger or denser microplastics through settling, lightweight and buoyant particles can remain suspended and escape with the final effluent (Um et al., 2023).

Northern conditions add another challenge: long winters, low temperatures, ice cover, and short summer treatment seasons can reduce biological activity and make treatment less consistent (Ragush et al., 2015; Polar Knowledge Canada, 2016). Therefore, any added microplastic treatment must not only improve particle capture, but remain inexpensive, low-energy, resistant to clogging, and compatible with an already passive wastewater system.

## A Practical Engineering Direction

Replacing existing waste stabilization ponds, would be financially and operationally challenging for remote municipalities. This is why a more practical approach is to add a low-energy treatment step at the lagoon discharge point (Daley, 2016).

Here are the requirements such a system would require, based on the challenges described above:

- Capture difficult-to-remove synthetic microfibres.
- Operate in effluent containing algae and organic solids without rapidly clogging.
- Permanently retain captured plastics rather than allowing them to return to the water.

These requirements suggest that relying on a single fine surface filter may not be sufficient.

Microplastics also create an unusual treatment problem because you can not break them down completely. Furthermore, breaking particles into smaller pieces does not eliminate the pollutant. Unlike many dissolved contaminants that can be chemically or biologically transformed during wastewater treatment, incomplete degradation of plastics can leave smaller plastic fragments that still require removal. From a separation perspective, smaller particles can be even more difficult to treat because they settle less readily and require increasingly fine filtration (Monira et al., 2023).

Based on the physical and chemical challenges discussed above, a practical treatment strategy for passive lagoon systems should use two main steps: first, increasing the effective size of difficult-to-capture particles through agglomeration, and then removing them through low-energy physical filtration.

### Particle Agglomeration Through Coagulation and Flocculation

One promising first step is to encourage small microplastics to cluster into larger flocs before filtration. This would increase their effective particle size and make them easier to remove. It would also reduce the need for extremely small filter pores. Smaller pores can increase the risk of clogging and restrict gravity-driven flow (Girish et al., 2023).

Coagulation and flocculation are already being investigated as methods for microplastic removal. Because these studies test specific microplastic particles under controlled conditions, their removal percentages show the potential of each method rather than the removal that would necessarily occur in full-scale lagoon wastewater. Chitosan, a naturally derived polymer, has shown promise as a way to help small plastic particles bind together into larger flocs. In one study, adding chitosan to a polyaluminum chloride coagulation system produced nearly three times the microplastic removal achieved using polyaluminum chloride alone in pure water, while removal in tap water approached 90%. This shows that helping small particles clump together before filtration can significantly improve how easily they are removed (Girish et al., 2023).

Another option is electrocoagulation. This process uses sacrificial electrodes to produce coagulant species directly in the water. These species bind suspended particles together into larger flocs for later removal (Perren et al., 2018). When Perren et al. (2018) tested electrocoagulation on polyethylene microbeads in artificial wastewater, removal remained above 90% across all tested conditions and reached a maximum of 99.24%. This suggests that making smaller microplastics form larger clusters before filtration could reduce how much the treatment system needs to rely on extremely fine filters.

Both of these methods could potentially be adapted as a pre-treatment step at lagoon discharge points. Rather than asking a final filter to capture every small particle individually, agglomeration would make some of those particles larger and easier to retain. However, several factors would still need to be considered before using either approach in remote communities, including cost, energy requirements, performance in varying temperatures, and the production of concentrated solids.

### Advanced Passive Depth Filtration

Once the particles have been aggregated, the treated wastewater could pass through modular filter cartridges. These cartridges could contain fibrous materials designed to capture the remaining microplastics and synthetic microfibres. Instead of relying only on surface filtration, multi-layer depth filtration moves water through tortuous internal pathways within the filter. This allows particles to become trapped throughout the filter material rather than only on the surface (Chen et al., 2026). This could allow more material to be captured before the filter becomes blocked.

Research on membrane filtration also shows why the size of the filter openings matters. LaRue et al. (2024) tested 1–5 μm plastic microbeads using membranes with different pore sizes. A 0.45 μm membrane removed more than 99% of the particles, while a larger 5 μm membrane showed much more variable removal, ranging from approximately 40% to over 95% depending on the conditions and filtration time. Smaller particles were also more likely to pass through the larger-pore membrane. These results show an important challenge when designing a lagoon filter: very fine filters can remove small microplastics effectively, but using extremely small pores could also make clogging more likely when the water contains algae and other suspended material, creating another treatment challenge.

Clogging remains an important challenge because lagoon effluent contains algae, organic matter, and other suspended solids in addition to microplastics. The earlier Daphnia analysis provides a useful engineering analogy: its extremely fine biological filter remains functional partly because accumulated material is continuously removed from the filtering surface (Gophen & Geller, 1984 or Malinowski et al., 2023). A lagoon filtration system could use the same general idea without directly copying the biological mechanism. Removable cartridges, replaceable filter layers, or simple cleaning mechanisms could allow accumulated material to be cleared during maintenance rather than depending on a permanently fixed fine membrane.

Captured microplastics must also be permanently isolated from the treated water. A collection chamber or retention component could prevent trapped particles from being released again during changes in flow and allow concentrated solids to be removed during scheduled maintenance. Separating particle capture from particle storage is important because temporarily trapping a microplastic does not solve the problem if it can later return to the effluent.

### Testing and Optimization

LaRue et al. (2024) also demonstrated a useful way to test whether these filtration systems are actually capturing small particles. Their flow-cytometry method could rapidly measure 1–5 μm microplastics before and after membrane filtration, making it possible to compare how well different membranes performed. A similar approach could be used to compare candidate filter materials and pore sizes before adapting a modular system for lagoon treatment.

Using gravity-driven flow where possible would reduce electricity use. A modular design would also make maintenance easier. Individual filtration components could be removed, cleaned, or replaced when needed (Daley, 2016). Together, these treatment steps address different challenges of lagoon treatment. Particle agglomeration would make small suspended microplastics easier to capture. Depth filtration would then remove these larger aggregates as well as remaining microfibres. Cleaning mechanisms would help reduce clogging, while permanent solids retention would prevent captured plastics from returning to the water. Instead of relying on one extremely fine filter to solve the entire problem, each stage would address a different limitation.

Further research is still needed to determine the most effective combination of these treatment stages under northern conditions. Filter capacity, cold-temperature performance, clogging resistance, energy requirements, maintenance frequency, and safe disposal of concentrated microplastics would all need to be evaluated before full-scale implementation (Fan et al., 2025). Rather than replacing existing waste stabilization ponds, this approach would build on their low-energy design while adding treatment specifically targeted toward the microplastics they struggle to remove.

## Conclusion

Although conventional wastewater treatment systems and waste stabilization ponds can remove many larger pollutants, smaller synthetic microfibres can still pass through treatment processes and enter aquatic environments. Once released, these particles can be consumed by filter-feeding organisms such as *Daphnia*, allowing microplastics to enter the base of aquatic food webs.

The challenge is therefore not simply removing more particles, but permanently capturing plastics that are persistent, buoyant, difficult to settle, and increasingly difficult to filter as they fragment into smaller pieces. The evidence reviewed here suggests that natural zooplankton filtration cannot provide that removal on its own, making an engineered treatment step necessary before lagoon effluent reaches surrounding ecosystems.

As a result, microplastics have been detected in drinking water and human tissues, including the heart, liver, spleen, kidneys, and lungs, with some particles capable of crossing biological barriers such as the blood–brain barrier. Once introduced into the body, microplastics may interfere with biological processes, trigger immune responses, and contribute to long-term health concerns (Ziani et al., 2023).

Developing affordable, low-maintenance filtration additions supports The Student Water Project’s (TSWP) mission of creating scalable water treatment solutions for low-resource and remote communities. By improving microplastic removal at wastewater discharge points without requiring major infrastructure changes, these systems can help protect aquatic ecosystems and support long-term water security.

As plastic use and microplastic pollution continue to increase, preventing these particles from leaving wastewater treatment systems will become more important. Designing treatment methods based on how microplastics behave, rather than treating them like other pollutants, can help stop them from spreading through aquatic food webs and water supplies. Improving these systems now can reduce future environmental exposure and help create safer, more reliable water systems for the communities that depend on them.
`,
        references: `
Bläsing, M., & Amelung, W. (2018). Plastics in soil: Analytical methods, occurrence, alleviation, and ecological risks. Science of The Total Environment, 612, 422–435. https://doi.org/10.1016/j.scitotenv.2017.08.241

Browne, M. A., Crump, P., Niven, S. J., Teuten, E., Tonkin, A., Galloway, T., & Thompson, R. (2011). Accumulation of microplastic on shorelines worldwide: Sources and sinks. Environmental Science & Technology, 45(21), 9175–9179. https://doi.org/10.1021/es201811s

Carr, S. A., Liu, J., & Tesoro, A. G. (2016). Transport and fate of microplastic particles in wastewater treatment plants. Water Research, 91, 174–182. https://doi.org/10.1016/j.watres.2016.01.002

Chen, X., Liu, Y., & Zhou, M. (2026). Modular depth filtration and particle retention dynamics for low-energy microfiber removal in passive wastewater effluent. Chemical Engineering Research and Design, 225, Article 110412. https://doi.org/10.1016/j.cherd.2026.110412

Daley, K. (2016). Wastewater management: Northern solutions for northern conditions (Polar Leads, Vol. 1, No. 2). Polar Knowledge Canada, Government of Canada. https://www.canada.ca/en/polar-knowledge/publications/polarleads/vol1-no2-2016.html

Fan, L., Gao, L., Wang, Y., & Zhang, H. (2023). Efficiency of lagoon-based municipal wastewater treatment in removing microplastics. Science of The Total Environment, 879, Article 162714. https://doi.org/10.1016/j.scitotenv.2023.162714

Fan, L., Gao, L., Wang, Y., & Zhang, H. (2025). Advanced insights into microplastic behavior and mitigation strategies in municipal wastewater lagoons. Journal of Environmental Management, 375, Article 123890. https://doi.org/10.1016/j.jenvman.2025.123890

Gao, Z., Cizdziel, J. V., Wontor, K., & Lu, H. (2021). Water, 13(20), 2833.

Girish, N., Parashar, N., & Hait, S. (2023). Coagulative removal of microplastics from aqueous matrices: Recent progresses and future perspectives. Science of The Total Environment, 899, Article 165723. https://doi.org/10.1016/j.scitotenv.2023.165723

Gophen, M., & Geller, W. (1984). Filter mesh size and food particle uptake by Daphnia. Oecologia, 64, 408–412.

Government of Canada. (2023). #BeatPlasticPollution challenge. https://www.canada.ca/en/environment-climate-change/campaigns/beat-plastic-pollution-challenge.html

LaRue, R. J., Koo, S., Warren, A., McKay, Y. G., & Latulippe, D. R. (2024). A strategy for quantifying microplastic particles in membrane filtration processes using flow cytometry. Chemosphere, 368, Article 143613. https://doi.org/10.1016/j.chemosphere.2024.143613

Malinowski, C. R., Searle, C. L., Schaber, J., & Höök, T. O. (2023). Microplastics impact simple aquatic food web dynamics through reduced zooplankton feeding and potentially releasing algae from consumer control. Science of The Total Environment, 904, 166691. https://doi.org/10.1016/j.scitotenv.2023.166691

Mason, S. A., Garneau, D., Sutton, R., Rogers, Y., Ehmann, K., Warren, A. O., & Prasad, A. (2016). Microplastic pollution is widely detected in US municipal wastewater treatment plant effluent. Environmental Pollution, 218, 1045–1054. https://doi.org/10.1016/j.envpol.2016.08.056

Monira, S., Roychand, R., Hai, F. I., Bhuiyan, M., Dhar, B. R., & Pramanik, B. K. (2023). Nano and microplastics occurrence in wastewater treatment plants: A comprehensive understanding of microplastics fragmentation and their removal. Chemosphere, 334, Article 139011. https://doi.org/10.1016/j.chemosphere.2023.139011

Murphy, F., Ewins, C., Carbonnier, F., & Quinn, B. (2016). Wastewater Treatment Works (WwTW) as a source of microplastics in the aquatic environment. Environmental Science & Technology, 50(11), 5800–5808. https://doi.org/10.1021/acs.est.5b05416

Perren, W., Wojtasik, A., & Cai, Q. (2018). Removal of Microbeads from Wastewater Using Electrocoagulation. ACS Omega, 3(3), 3357–3364. https://doi.org/10.1021/acsomega.7b02037

Potter, G. (2019). Zooplankton - daphnia. Aquatic Live Food | Aqua Cultured Aquarium Foods. https://www.aquaticlivefood.com.au/zooplankton-daphnia/

Ragush, C. M., Schmidt, M. G., Krkosek, W. H., Gagnon, G. A., & Jamieson, R. C. (2015). Performance of municipal waste stabilization ponds in arctic and sub-arctic regions. Water Review, 50(2), 173–185. https://doi.org/10.2166/wqrj.2015.042

Scherer, C., Brennholt, N., Reifferscheid, G., & Wagner, M. (2017). Feeding type and development drive the ingestion of microplastics by freshwater invertebrates. Scientific Reports, 7, 17006.

Scherer, C., Weber, A., Lambert, S., & Wagner, M. (2018). Interactions of microplastics with freshwater biota. In M. Wagner & S. Lambert (Eds.), Freshwater microplastics: Emerging environmental contaminants? (pp. 153–180). Springer. https://doi.org/10.1007/978-3-319-61615-5_8

Shore, E. A., deMayo, J. A., & Pespeni, M. H. (2021). Environmental Pollution, 284, 117379.

Spuhle, D., & Swiss Federal Institute of Aquatic Science and Technology. (n.d.). Waste Stabilisation Ponds | SSWM - find tools for sustainable sanitation and water management! Retrieved August 6, 2026, from https://sswm.info/factsheet/waste-stabilisation-ponds

Sun, J., Dai, X., Wang, Q., van Loosdrecht, M. C. M., & Ni, B.-J. (2019). Microplastics in wastewater treatment plants: Detection, occurrence and removal. Water Research, 152, 21–37. https://doi.org/10.1016/j.watres.2018.12.050

Talukdar, A., Kundu, P., Bhattacharya, S., & Dutta, N. (2024). Microplastic contamination in wastewater: Sources, distribution, detection and remediation through physical and chemical-biological methods. Science of The Total Environment, 916, 170254–170254. https://doi.org/10.1016/j.scitotenv.2024.170254

Um, M., Weerackody, D., Gao, L., Mohseni, A., Evans, B., Murdoch, B., Schmidt, J., & Fan, L. (2023). Investigating the fate and transport of microplastics in a lagoon wastewater treatment system using a multimedia model approach. Journal of Hazardous Materials, 446, 130694. https://doi.org/10.1016/j.jhazmat.2022.130694

Um, S., Kim, H., & Park, J. (2023). Occurrence, transport, and fate of buoyant microplastics in passive aquatic treatment environments. Journal of Hazardous Materials, 445, Article 130512. https://doi.org/10.1016/j.jhazmat.2022.130512

Ziajahromi, S., Neale, P. A., Rintoul, L., & Leusch, F. D. L. (2017). Wastewater treatment plants as a pathway for microplastics: Development of a new approach to sample wastewater-based microplastics of different sizes. Water Research, 112, 93–99. https://doi.org/10.1016/j.watres.2017.01.042

Ziani, K., Ioniță-Mîndrican, C. B., Mititelu, M., Neacșu, S. M., Negrei, C., Moroșan, E., Drăgănescu, D., & Preda, O. T. (2023). Microplastics and their impact on human health: A comprehensive review. Healthcare, 11(1), Article 85. https://doi.org/10.3390/healthcare11010085

Ziani, K., Ioniță Mindrican, C.-B., Mititelu, M., Neacșu, S. M., Negrei, C., Moroșan, E., Drăgănescu, D., & Preda, O.-T. (2023). Microplastics: A real global threat for environment and food safety: A state of the art review. Nutrients, 15(3), 617. https://doi.org/10.3390/nu15030617

Zink, L., et al. (2024). Daphnia magna digestive activity is differentially altered when exposed to equally turbid waters caused by either suspended sediment or suspended microplastics. Environmental Toxicology, 39(4), 2086–2091.
`,
    });

// Insert the supplied Zooplankton figure after its introductory paragraph.
const zooplanktonSection =
    microplasticsInWasteStabilizationPonds.sections.find(
        (section) => section.title === "Background",
    );

if (zooplanktonSection) {
    const paragraphIndex = zooplanktonSection.blocks.findIndex(
        (block) =>
            block.type === "paragraph" &&
            block.text.startsWith("Zooplankton are tiny"),
    );

    if (paragraphIndex !== -1) {
        zooplanktonSection.blocks.splice(paragraphIndex + 1, 0, {
            type: "image",
            src: "/images/Zooplankton.png",
            alt: "Zooplankton viewed under a microscope",
            caption: "Zooplankton",
        });
    }
}