import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog — Primex Sistemas",
  description: "Artigos sobre tecnologia, gestão, inteligência artificial e transformação digital para empresas.",
};

export default function BlogPage(): React.JSX.Element {
  const posts = getAllPosts();
  return (
    <div className="min-h-screen bg-primex-black">
      {/* HERO */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primex-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
            Blog
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primex-white mb-6">
            Conteúdo que <span className="text-primex-green">informa</span>
          </h1>
          <p className="text-primex-gray-300 text-lg max-w-2xl mx-auto">
            Artigos sobre tecnologia, gestão, inteligência artificial e transformação digital.
          </p>
        </div>
      </section>
      {/* POSTS */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-primex-gray-300 text-lg mb-6">
                Nenhum artigo publicado ainda. Em breve traremos conteúdo novo!
              </p>
              <Button asChild className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold">
                <Link href="/">Voltar para a Home</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 px-6 bg-primex-dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primex-white mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-primex-gray-300 text-lg mb-8">
            Fale com a Primex Sistemas e descubra como podemos ajudar.
          </p>
          <Button asChild size="lg" className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold">
            <Link href="/contato">
              Fale Conosco
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
