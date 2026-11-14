import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { posts, formatPostDate } from "@/data/posts"

export const metadata: Metadata = {
  title: "Blog — Primex Sistemas",
  description: "Artigos sobre inteligência artificial, software e tecnologia para negócios, em linguagem simples.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  return (
    <>
      <section className="relative py-32 bg-primex-black text-center overflow-hidden border-b border-primex-gray-800">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            BLOG
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primex-white mb-6 tracking-tight">
            Tecnologia em <span className="text-primex-green">português claro</span>
          </h1>
          <p className="text-lg md:text-xl text-primex-gray-300 max-w-2xl mx-auto leading-relaxed">
            IA, software e o que isso muda nos negócios, sem jargão.
          </p>
        </div>
      </section>

      <section className="py-20 bg-primex-black">
        <div className="container mx-auto px-6 max-w-3xl space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <Card className="bg-primex-dark border-primex-gray-800 group-hover:border-primex-green transition-colors">
                <CardContent className="p-8">
                  <p className="text-primex-green text-xs font-semibold tracking-wide uppercase mb-3">
                    {formatPostDate(post.date)} · {post.readingTime}
                  </p>
                  <h2 className="font-display text-2xl text-primex-white font-semibold mb-3 group-hover:text-primex-green transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-primex-gray-300 leading-relaxed mb-4">{post.description}</p>
                  <span className="inline-flex items-center gap-2 text-primex-green text-sm font-medium">
                    Ler artigo <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
