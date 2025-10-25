"use server";
import { prisma } from "@/lib/prisma";

export async function fetchPostBySlug(slug: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    });

    if (!post) return null;

    return post; // already matches your schema shape
  } catch (error) {
    console.error("❌ Error fetching post:", error);
    return null;
  }
}

export async function fetchAllPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        image: true,
        category: true,
        tags: true,
        createdAt: true,
      },
    });

    return posts;
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    return [];
  }
}
