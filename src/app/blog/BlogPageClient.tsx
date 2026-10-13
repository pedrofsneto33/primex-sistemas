"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"
import { BlogCard } from "@/components/blog/BlogCard"

interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  cover: string
  category: string
  readingTime: string
}

interface BlogPageClientProps {
  posts: BlogPost[]
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((p) => p.category)))
    return ["all", ...cats]
  }, [posts])

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return posts
    return posts.filter((p) => p.category === activeCategory)
  }, [posts, activeCategory])

  const getCategoryLabel = (cat: string) => {
    if (cat === "all") return "Todos"
    return cat
  }

  return (
    <div className="min-h-screen bg-primex-black">
      {/* HERO */}
      <section className="py-20 px-6 relative overflow-hidden section-top-line">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primex-green/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
            Blog
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primex-white mb-6">
            Conteúdo que <span className="text-primex-green">informa</span>
          </h1>
          <p className="text-primex-gray-300 text-lg max-w-2xl mx-auto">
            Artigos sobre tecnologia, gestão, inteligência artificial e
            transformação digital.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="hidden md:flex items-center gap-2 text-primex-gray-300 text-sm mr-2">
              <Filter size={16} className="text-primex-green" />
              Filtrar:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primex-green text-primex-black"
                    : "border border-primex-gray-700 text-primex-gray-300 hover:border-primex-green hover:text-primex-green"
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-primex-gray-300 text-lg mb-6">
                Nenhum artigo nessa categoria ainda.
              </p>
              <Button
                onClick={() => setActiveCategory("all")}
                className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold"
              >
                Ver todos os artigos
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <BlogCard post={post} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primex-dark section-top-line">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primex-white mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-primex-gray-300 text-lg mb-8">
            Fale com a Primex Sistemas e descubra como podemos ajudar.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold"
          >
            <Link href="/contato">
              Fale Conosco
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
