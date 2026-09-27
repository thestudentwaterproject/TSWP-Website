export type ArticleAuthor = {
    name: string;
    affiliation?: string;
};

export type ArticleBlock =
    | {
        type: "paragraph";
        text: string;
    }
    | {
        type: "subheading";
        text: string;
        level?: 3 | 4;
    }
    | {
        type: "list";
        items: string[];
        ordered?: boolean;
    }
    | {
        type: "note";
        text: string;
    }
    | {
        type: "image";
        src: string;
        alt: string;
        caption?: string;
    }
    | {
        type: "table";
        headers: string[];
        rows: string[][];
        caption?: string;
    };

export type ArticleSection = {
    title: string;
    blocks: ArticleBlock[];
};

export type Article = {
    slug: string;
    title: string;
    metaDescription: string;
    category: string;
    authors: ArticleAuthor[];
    abstract: string;
    sections: ArticleSection[];
    references?: string[];
    pdfHref?: string;
};