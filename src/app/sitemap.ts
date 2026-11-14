import type { MetadataRoute } from "next"
import { posts } from "@/data/posts"
import { site } from "@/data/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/solucoes", "/sobre", "/cases", "/blog", "/contato", "/privacidade"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }))
  const blog = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }))
  return [...pages, ...blog]
}
