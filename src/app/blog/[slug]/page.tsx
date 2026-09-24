import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Artigo não encontrado — Primex Sistemas" };
  return {
    title: `${post.title} — Blog Primex Sistemas`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="min-h-screen bg-primex-black">
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primex-gray-300 hover:text-primex-green transition-colors text-sm">
          <ArrowLeft size={16} />
          Voltar para o blog
        </Link>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-10">
          <span className="inline-block px-3 py-1 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-xs font-medium">
            {post.category}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primex-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-primex-gray-300 text-sm">
            <span className="flex items-center gap-2">
              <User size={16} className="text-primex-green" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-primex-green" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-primex-green" />
              {post.readingTime}
            </span>
          </div>
        </header>
        <div
          className="prose prose-lg prose-invert max-w-none text-primex-gray-100 prose-headings:font-display prose-headings:text-primex-white prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-primex-gray-300 prose-p:leading-relaxed prose-p:my-4 prose-a:text-primex-green prose-a:no-underline hover:prose-a:underline prose-strong:text-primex-white prose-ul:text-primex-gray-300 prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-16 p-8 rounded-2xl border border-primex-green/20 bg-gradient-to-br from-primex-dark to-primex-black">
          <h3 className="font-display text-2xl font-bold text-primex-white mb-3">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-primex-gray-300 mb-6">
            Fale com a Primex Sistemas e descubra como podemos ajudar.
          </p>
          <Button asChild className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold">
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
