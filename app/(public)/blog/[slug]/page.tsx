import { fetchPostBySlug } from "../utils";
import { BlogClient } from "./components/post-client";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await fetchPostBySlug(slug);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-lg text-neutral-500">Post not found.</p>
      </div>
    );

  return <BlogClient post={post} />;
}
