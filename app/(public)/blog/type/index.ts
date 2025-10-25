export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  image: string | null;
  category: string | null;
  createdAt: Date;
};

export interface PostWithDetails {
  slug: string;
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  image: string | null;
  category: string | null;
  authorName: string | null;
  authorAvatar: string | null;
  authorRole: string | null;
  createdAt: Date;
  updatedAt: Date;
}
