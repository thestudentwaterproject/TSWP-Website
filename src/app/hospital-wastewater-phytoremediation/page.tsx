import type { Metadata } from "next";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { hospitalWastewaterPhytoremediation } from "@/data/articles/hospital-wastewater-phytoremediation";

export const metadata: Metadata = {
    title: hospitalWastewaterPhytoremediation.title,
    description: hospitalWastewaterPhytoremediation.metaDescription,
};

export default function Page() {
    return <ArticleLayout article={hospitalWastewaterPhytoremediation} />;
}