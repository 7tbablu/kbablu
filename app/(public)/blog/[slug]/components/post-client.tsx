"use client";

import { useEffect, useState, ReactNode } from "react";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { format } from "date-fns";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { PostWithDetails } from "../../type";
import type {
  Root,
  Content,
  Heading as MdHeading,
  Paragraph,
  Text,
  Code,
  InlineCode,
  List,
  ListItem,
  Strong,
  Link,
} from "mdast";

interface Heading {
  id: string;
  text: string;
}

/* -------------------------------------------------------------------------- */
/*                              CopyButton Child                              */
/* -------------------------------------------------------------------------- */

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={handleCopy}
      className="absolute top-2 right-2 text-xs text-primary"
      title="Copy code"
    >
      <Copy className={`h-4 w-4 ${copied ? "text-green-500" : ""}`} />
    </Button>
  );
};

/* -------------------------------------------------------------------------- */
/*                              BlogClient Main                               */
/* -------------------------------------------------------------------------- */

interface BlogClientProps {
  post: PostWithDetails;
}

export const BlogClient: React.FC<BlogClientProps> = ({ post }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [contentNodes, setContentNodes] = useState<ReactNode[]>([]);

  useEffect(() => {
    if (!post?.content) return;

    const tree: Root = remark()
      .use(remarkParse)
      .use(remarkGfm)
      .parse(post.content);

    const extractedHeadings: Heading[] = [];
    const nodes: ReactNode[] = [];

    const renderNode = (node: Content, index: number): ReactNode => {
      switch (node.type) {
        case "heading": {
          const heading = node as MdHeading;
          const text = heading.children
            .map((child) =>
              child.type === "text" ? (child as Text).value : ""
            )
            .join("");
          const id = text.toLowerCase().replace(/\s+/g, "-");

          // Only track h2 for table of contents
          if (heading.depth === 2) extractedHeadings.push({ id, text });

          if (heading.depth === 2) {
            return (
              <h2
                key={index}
                id={id}
                className="scroll-mt-24 text-2xl md:text-3xl font-semibold mt-10 mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2"
              >
                {text}
              </h2>
            );
          } else if (heading.depth === 3) {
            return (
              <h3
                key={index}
                id={id}
                className="scroll-mt-24 text-xl md:text-2xl font-semibold mt-8 mb-3"
              >
                {text}
              </h3>
            );
          } else {
            return (
              <h4
                key={index}
                id={id}
                className="scroll-mt-24 text-lg font-semibold mt-6 mb-2"
              >
                {text}
              </h4>
            );
          }
        }

        case "paragraph": {
          const paragraph = node as Paragraph;
          return (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph.children.map((child, i) => renderNode(child, i))}
            </p>
          );
        }

        case "text":
          return (node as Text).value;

        case "inlineCode":
          return (
            <code
              key={index}
              className="bg-neutral-200 dark:bg-neutral-800 rounded px-1 py-0.5 text-sm font-mono"
            >
              {(node as InlineCode).value}
            </code>
          );

        case "code": {
          const codeNode = node as Code;
          return (
            <div key={index} className="relative group my-4">
              <CopyButton code={codeNode.value} />
              <pre className="rounded-xl bg-neutral-900/90 text-neutral-100 overflow-x-auto text-sm leading-relaxed p-4 border border-neutral-800">
                <code>{codeNode.value}</code>
              </pre>
            </div>
          );
        }

        case "list": {
          const list = node as List;
          return (
            <ul key={index} className="list-disc ml-6 mb-4 space-y-1">
              {list.children.map((child, i) => renderNode(child, i))}
            </ul>
          );
        }

        case "listItem": {
          const listItem = node as ListItem;
          return (
            <li key={index}>
              {listItem.children.map((child, i) => renderNode(child, i))}
            </li>
          );
        }

        case "strong": {
          const strong = node as Strong;
          return (
            <strong key={index} className="font-semibold">
              {strong.children.map((child, i) => renderNode(child, i))}
            </strong>
          );
        }

        case "link": {
          const link = node as Link;
          return (
            <a
              key={index}
              href={link.url}
              className="text-blue-600 dark:text-blue-400 underline"
            >
              {link.children.map((child, i) => renderNode(child, i))}
            </a>
          );
        }

        default:
          return null;
      }
    };

    tree.children.forEach((node, i) => {
      nodes.push(renderNode(node, i));
    });

    setHeadings(extractedHeadings);
    setContentNodes(nodes);
  }, [post.content]);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-lg text-neutral-500">Post not found.</p>
      </div>
    );

  return (
    <main className="container mx-auto px-6 py-16 md:py-20 flex flex-col lg:flex-row gap-12">
      {/* ---------------------------- Article Content ---------------------------- */}
      <article className="flex-1 prose prose-neutral dark:prose-invert max-w-none">
        <header>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            {post.title}
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            {post.category} · {format(new Date(post.createdAt), "MMMM d, yyyy")}
          </p>
        </header>

        <section className="flex gap-3.5 items-center mt-4 mb-8">
          <div className="relative size-12 rounded-full">
            {post.authorAvatar && (
              <Image
                src={post.authorAvatar}
                alt={post.authorName || ""}
                sizes="100%"
                fill
                className="rounded-full object-cover"
              />
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-medium">{post.authorName}</span>
            <span className="text-xs text-neutral-500">{post.authorRole}</span>
          </div>
        </section>

        {post.image && (
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="100%"
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div>{contentNodes}</div>
      </article>

      {/* ---------------------------- Sidebar Outline --------------------------- */}
      {headings.length > 0 && (
        <aside className="w-full lg:w-64 lg:sticky top-24 h-fit border-l border-neutral-200 dark:border-neutral-800 pl-6">
          <h3 className="font-semibold text-lg mb-4">What We’ll Learn</h3>
          <ul className="space-y-2 text-sm">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className="block text-foreground/80 hover:text-violet-950 dark:hover:text-violet-100 transition-colors"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </main>
  );
};
