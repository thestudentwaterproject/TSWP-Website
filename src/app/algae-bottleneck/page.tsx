import type { Metadata } from "next";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { algaeBottleneck } from "@/data/articles/algae-bottleneck";

export const metadata: Metadata = {
    title: algaeBottleneck.title,
    description: algaeBottleneck.metaDescription,
};

export default function AlgaeBottleneckPage() {
    return <ArticleLayout article={algaeBottleneck} />;
}