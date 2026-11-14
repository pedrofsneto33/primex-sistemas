import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getPostBySlug, posts, formatPostDate } from "@/data/posts"
import { site } from "@/data/site"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Primex Sistemas`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ["Pedro — Primex Sistemas"],
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: "pt-BR",
    author: { "@type": "Person", name: "Pedro", worksFor: { "@type": "Organization", name: site.name } },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  }

  return (
    <article className="py-24 px-6 bg-primex-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-primex-gray-300 hover:text-primex-green transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao blog
        </Link>

        <p className="text-primex-green text-xs font-semibold tracking-wide uppercase mb-4">
          {formatPostDate(post.date)} · {post.readingTime}
        </p>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-primex-white mb-10 leading-tight">
          {post.title}
        </h1>

        <div className="space-y-6 text-primex-gray-100 text-lg leading-relaxed">
          {post.body.map((block, i) =>
            block.type === "h2" ? (
              <h2 key={i} className="font-display text-2xl md:text-3xl font-semibold text-primex-white pt-4">
                {block.text}
              </h2>
            ) : (
              <p key={i}>{block.text}</p>
            )
          )}
        </div>

        <p className="mt-10 text-primex-gray-300 italic">— Pedro, Primex Sistemas</p>

        <aside className="mt-12 pt-8 border-t border-primex-gray-800">
          <h2 className="font-display text-sm font-semibold text-primex-white uppercase tracking-wider mb-4">
            Fontes
          </h2>
          <ul className="space-y-2 text-sm">
            {post.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primex-gray-300 hover:text-primex-green underline-offset-2 hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="mt-16 rounded-2xl border border-primex-green/20 bg-primex-dark p-8 text-center">
          <h2 className="font-display text-2xl text-primex-white font-bold mb-3">
            Quer aplicar IA no seu negócio sem cair em modinha?
          </h2>
          <p className="text-primex-gray-300 mb-6">Vamos conversar sobre o seu caso.</p>
          <Button asChild size="lg" className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold">
            <Link href="/contato">
              Falar com a Primex <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
