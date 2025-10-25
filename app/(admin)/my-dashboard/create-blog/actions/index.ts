"use server";
import { prisma } from "@/lib/prisma";
import { CreatePostFormValues } from "../schemas";
import slugify from "slugify";

// Constants
const DEFAULT_CATEGORY = "Backend Development";
const DEFAULT_TAGS = ["Next.js", "Prisma", "React"];
const DEFAULT_AUTHOR = {
  name: "KBablu",
  role: "Full Stack Developer",
  avatar: "https://avatars.githubusercontent.com/u/000000?v=4",
};

export const createPostAction = async (
  data: CreatePostFormValues,
) => {
  const slug = slugify(data.title, { lower: true, strict: true });

  return await prisma.post.create({
    data: {
      title: data.title,
      slug,
      excerpt: data.excerpt,
      content: data.content,
      image: data.image,
      category: DEFAULT_CATEGORY,
      tags: DEFAULT_TAGS,
      authorName: DEFAULT_AUTHOR.name,
      authorRole: DEFAULT_AUTHOR.role,
      authorAvatar: DEFAULT_AUTHOR.avatar,
    },
  });
};
