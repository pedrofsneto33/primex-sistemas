import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  cover: string;
  category: string;
  readingTime: string;
}

export interface BlogPostFull extends BlogPost {
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts: BlogPost[] = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);
    return {
      slug,
      title: data.title || "Sem título",
      date: data.date || new Date().toISOString(),
      author: data.author || "Primex Sistemas",
      excerpt: data.excerpt || "",
      cover: data.cover || "/images/blog/default.jpg",
      category: data.category || "Geral",
      readingTime: stats.text,
    };
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPostFull | null> {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);
  const processedContent = await remark().use(html).process(content);
  return {
    slug,
    title: data.title || "Sem título",
    date: data.date || new Date().toISOString(),
    author: data.author || "Primex Sistemas",
    excerpt: data.excerpt || "",
    cover: data.cover || "/images/blog/default.jpg",
    category: data.category || "Geral",
    readingTime: stats.text,
    content: processedContent.toString(),
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
