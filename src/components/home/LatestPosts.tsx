import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

export default function LatestPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null

  return (
    <section className="py-20 md:py-28 bg-primex-black" aria-labelledby="blog-home-title">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-primex-green text-sm uppercase tracking-widest mb-3">Blog</p>
            <h2 id="blog-home-title" className="font-display text-3xl md:text-4xl font-bold text-white">
              Para ler com calma
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primex-green underline underline-offset-4 hover:text-primex-green-light"
          >
            Ver todos os artigos <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-primex-gray-800 bg-primex-dark p-6 transition-colors hover:border-primex-green/60"
            >
              <span className="text-xs uppercase tracking-wider text-primex-green">{post.category}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-white group-hover:text-primex-green-light">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-primex-gray-300 line-clamp-3">{post.excerpt}</p>
              <span className="mt-auto pt-6 text-xs text-primex-gray-300">
                {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                {" · "}
                {post.readingTime}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
