import type { Metadata } from "next";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { chlorinationDisinfectionByproducts } from "@/data/articles/chlorination-disinfection-byproducts";

export const metadata: Metadata = {
    title: chlorinationDisinfectionByproducts.title,
    description: chlorinationDisinfectionByproducts.metaDescription,
};

export default function ChlorinationDisinfectionByproductsPage() {
    return (
        <ArticleLayout article={chlorinationDisinfectionByproducts} />
    );
}