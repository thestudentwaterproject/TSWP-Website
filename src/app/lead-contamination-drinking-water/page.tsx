import type { Metadata } from "next";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { leadContaminationDrinkingWater } from "@/data/articles/lead-contamination-drinking-water";

export const metadata: Metadata = {
    title: leadContaminationDrinkingWater.title,
    description: leadContaminationDrinkingWater.metaDescription,
};

export default function LeadContaminationDrinkingWaterPage() {
    return <ArticleLayout article={leadContaminationDrinkingWater} />;
}