import type { Metadata } from "next";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { microplasticsInWasteStabilizationPonds } from "@/data/articles/microplastics-in-waste-stabilization-ponds";

export const metadata: Metadata = {
    title: microplasticsInWasteStabilizationPonds.title,
    description:
        microplasticsInWasteStabilizationPonds.metaDescription,
};

export default function Page() {
    return (
        <ArticleLayout article={microplasticsInWasteStabilizationPonds} />
    );
}