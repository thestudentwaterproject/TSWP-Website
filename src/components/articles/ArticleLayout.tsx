import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Article, ArticleBlock } from "@/types/article";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface ArticleLayoutProps {
    article: Article;
}

function InlineText({ text }: { text: string }) {
    const parts: ReactNode[] = [];
    const pattern =
        /(\*\*[^*\n]+\*\*|\*[^*\n]+\*|https?:\/\/[^\s<>]+)/g;

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        const token = match[0];

        if (token.startsWith("**")) {
            parts.push(
                <strong key={match.index} className="font-semibold">
                    {token.slice(2, -2)}
                </strong>,
            );
        } else if (token.startsWith("*")) {
            parts.push(
                <em key={match.index}>{token.slice(1, -1)}</em>,
            );
        } else {
            let url = token.replace(/[.,;:]+$/, "");

            // Remove unmatched closing parentheses, but preserve valid
            // parentheses inside DOI URLs.
            while (
                url.endsWith(")") &&
                (url.match(/\)/g) ?? []).length >
                (url.match(/\(/g) ?? []).length
            ) {
                url = url.slice(0, -1);
            }

            parts.push(
                <a
                    key={match.index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-water-dark underline underline-offset-2 hover:text-navy"
                >
                    {url}
                </a>,
            );

            if (url.length < token.length) {
                parts.push(token.slice(url.length));
            }
        }

        lastIndex = pattern.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return <>{parts}</>;
}

function ArticleBlockView({ block }: { block: ArticleBlock }) {
    switch (block.type) {
        case "paragraph":
            return (
                <p className="text-base leading-relaxed text-navy/75 sm:text-[1.05rem]">
                    <InlineText text={block.text} />
                </p>
            );

        case "table":
            return (
                <div className="my-8 overflow-x-auto">
                    {block.caption && (
                        <p className="mb-2 text-sm font-medium text-navy/75">
                            {block.caption}
                        </p>
                    )}

                    <table className="w-full min-w-[700px] border-collapse text-left text-sm sm:text-base">
                        <thead>
                            <tr>
                                {block.headers.map((header, index) => (
                                    <th
                                        key={index}
                                        className="border border-navy/30 bg-navy/[0.04] px-4 py-3 align-top font-bold text-navy"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {block.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            className="border border-navy/30 px-4 py-3 align-top leading-relaxed text-navy/75"
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );

        case "subheading":
            return block.level === 4 ? (
                <h4 className="mt-2 text-base font-bold text-navy sm:text-lg">
                    <InlineText text={block.text} />
                </h4>
            ) : (
                <h3 className="mt-2 text-lg font-bold text-navy sm:text-xl">
                    <InlineText text={block.text} />
                </h3>
            );

        case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
                <ListTag
                    className={`space-y-2 pl-5 text-base leading-relaxed text-navy/75 ${block.ordered ? "list-decimal" : "list-disc"
                        }`}
                >
                    {block.items.map((item, index) => (
                        <li key={index}>
                            <InlineText text={item} />
                        </li>
                    ))}
                </ListTag>
            );
        }

        case "note":
            return (
                <p className="rounded-xl border border-navy/10 bg-water/5 px-4 py-3 text-sm italic leading-relaxed text-navy/60">
                    <InlineText text={block.text} />
                </p>
            );

        case "image":
            return (
                <figure className="my-8 space-y-3">
                    <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
                        <Image
                            src={block.src}
                            alt={block.alt}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>
                    {block.caption && (
                        <figcaption className="mx-auto max-w-3xl text-sm italic leading-relaxed text-navy/55">
                            {block.caption}
                        </figcaption>
                    )}
                </figure>
            );

        default:
            return null;
    }
}

export function ArticleLayout({ article }: ArticleLayoutProps) {
    return (
        <article>
            <header className="border-b border-navy/8 bg-gradient-to-b from-water/8 to-transparent">
                <Container className="py-14 sm:py-16 lg:py-20">
                    <p className="text-sm font-semibold uppercase tracking-widest text-water-dark">
                        <Link href="/student-publications" className="hover:underline">
                            Student Publications
                        </Link>
                        {" · "}
                        {article.category}
                    </p>

                    <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                        {article.title}
                    </h1>

                    <ul className="mt-8 space-y-3">
                        {article.authors.map((author) => (
                            <li key={author.name}>
                                <p className="font-semibold text-navy">{author.name}</p>
                                {author.affiliation && (
                                    <p className="text-sm text-navy/60">
                                        {author.affiliation}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>

                    {article.pdfHref && (
                        <div className="mt-8">
                            <Button href={article.pdfHref} variant="secondary" external>
                                Download Full PDF
                            </Button>
                        </div>
                    )}
                </Container>
            </header>

            <Container className="py-12 sm:py-16">
                <div className="mx-auto max-w-3xl space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy">Abstract</h2>
                        <p className="text-base leading-relaxed text-navy/75 sm:text-[1.05rem]">
                            <InlineText text={article.abstract} />
                        </p>
                    </section>

                    {article.sections.map((section, sectionIndex) => (
                        <section
                            key={`${section.title}-${sectionIndex}`}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-bold text-navy">
                                {section.title}
                            </h2>

                            <div className="space-y-4">
                                {section.blocks.map((block, index) => (
                                    <ArticleBlockView
                                        key={`${sectionIndex}-${block.type}-${index}`}
                                        block={block}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}

                    {article.references && article.references.length > 0 && (
                        <section className="space-y-4 border-t border-navy/8 pt-10">
                            <h2 className="text-2xl font-bold text-navy">References</h2>
                            <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-navy/70">
                                {article.references.map((reference, index) => (
                                    <li key={index} className="break-words">
                                        <InlineText text={reference} />
                                    </li>
                                ))}
                            </ol>
                        </section>
                    )}

                    <div className="flex flex-wrap gap-3 border-t border-navy/8 pt-10">
                        <Button href="/student-publications" variant="outline">
                            Back to Publications
                        </Button>

                        {article.pdfHref && (
                            <Button href={article.pdfHref} variant="secondary" external>
                                Download Full PDF
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </article>
    );
}