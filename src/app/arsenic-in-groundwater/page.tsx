import type { Metadata } from "next";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { arsenicInGroundwater } from "@/data/articles/arsenic-in-groundwater";

export const metadata: Metadata = {
    title: arsenicInGroundwater.title,
    description: arsenicInGroundwater.metaDescription,
};

export default function Page() {
    return <ArticleLayout article={arsenicInGroundwater} />;
}