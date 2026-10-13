import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import BlogPageClient from "./BlogPageClient"

export const metadata: Metadata = {
  title: "Blog — Primex Sistemas",
  description:
    "Artigos sobre tecnologia, gestão, inteligência artificial e transformação digital para empresas.",
}

export default function BlogPage() {
  const posts = getAllPosts()
  return <BlogPageClient posts={posts} />
}

