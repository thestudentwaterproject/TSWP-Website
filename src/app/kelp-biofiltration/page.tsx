import type { Metadata } from "next";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { kelpBiofiltration } from "@/data/articles/kelp-biofiltration";

export const metadata: Metadata = {
    title: kelpBiofiltration.title,
    description: kelpBiofiltration.metaDescription,
};

export default function Page() {
    return <ArticleLayout article={kelpBiofiltration} />;
}