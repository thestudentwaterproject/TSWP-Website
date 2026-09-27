import type {
    Article,
    ArticleAuthor,
    ArticleBlock,
    ArticleSection,
} from "@/types/article";

export const researchAuthors: ArticleAuthor[] = [
    {
        name: "Prisha Gupta",
        affiliation:
            "Department of Biology and Psychology, McMaster University, Hamilton, ON, L8S 4L8",
    },
    {
        name: "Ayla Nasir",
        affiliation:
            "Department of Chemical Engineering, McMaster University, Hamilton, ON, L8S 4L8",
    },
    {
        name: "Peizhi Xu",
        affiliation:
            "Department of Medical Sciences, Western University, London, ON, N6A 3K7",
    },
];

type ManuscriptOptions = {
    slug: string;
    title: string;
    metaDescription: string;
    category: string;
    abstract: string;
    body: string;
    references: string;
    pdfHref?: string;
};

export function parseArticleBody(source: string): ArticleSection[] {
    const sections: ArticleSection[] = [];
    let current: ArticleSection | undefined;
    let paragraph: string[] = [];
    let list: string[] = [];
    let ordered = false;

    function ensureSection(): ArticleSection {
        if (!current) {
            current = { title: "Introduction", blocks: [] };
            sections.push(current);
        }
        return current;
    }

    function flushParagraph() {
        if (paragraph.length > 0) {
            ensureSection().blocks.push({
                type: "paragraph",
                text: paragraph.join(" ").trim(),
            });
            paragraph = [];
        }
    }

    function flushList() {
        if (list.length > 0) {
            ensureSection().blocks.push({
                type: "list",
                items: list,
                ordered,
            });
            list = [];
        }
    }

    for (const rawLine of source.trim().split(/\r?\n/)) {
        const line = rawLine.trim();

        if (!line) {
            flushParagraph();
            flushList();
            continue;
        }

        const heading = /^(#{2,4})\s+(.+)$/.exec(line);

        if (heading) {
            flushParagraph();
            flushList();

            if (heading[1].length === 2) {
                current = { title: heading[2], blocks: [] };
                sections.push(current);
            } else {
                ensureSection().blocks.push({
                    type: "subheading",
                    text: heading[2],
                    level: heading[1].length === 4 ? 4 : 3,
                });
            }
            continue;
        }

        const bullet = /^[-*]\s+(.+)$/.exec(line);
        const numbered = /^\d+[.)]\s+(.+)$/.exec(line);

        if (bullet || numbered) {
            flushParagraph();
            const nextOrdered = Boolean(numbered);

            if (list.length > 0 && ordered !== nextOrdered) {
                flushList();
            }

            ordered = nextOrdered;
            list.push((bullet ?? numbered)![1]);
            continue;
        }

        flushList();
        paragraph.push(line);
    }

    flushParagraph();
    flushList();

    return sections;
}

export function createManuscriptArticle({
    body,
    references,
    ...options
}: ManuscriptOptions): Article {
    return {
        ...options,
        authors: researchAuthors,
        sections: parseArticleBody(body),
        references: references
            .trim()
            .split(/\n\s*\n/)
            .map((reference) => reference.replace(/\s+/g, " ").trim())
            .filter(Boolean),
    };
}