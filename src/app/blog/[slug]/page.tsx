import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog";
import { ShareButtons } from "@/components/blog/ShareButtons";

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

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .filter((p) => p.category === post.category)
    .slice(0, 3);

  // Se tiver menos de 3 da mesma categoria, completa com outros
  if (relatedPosts.length < 3) {
    const others = allPosts
      .filter(
        (p) => p.slug !== slug && !relatedPosts.find((r) => r.slug === p.slug)
      )
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...others);
  }

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
        <ShareButtons title={post.title} slug={post.slug} />
        {/* Posts relacionados */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-primex-gray-800">
            <div className="mb-8">
              <span className="text-primex-green font-display text-xs tracking-widest uppercase">
                Leia também
              </span>
              <h2 className="font-display text-2xl font-bold text-primex-white mt-2">
                Continue lendo
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block"
                >
                  <article className="card-primex card-primex-bordered bg-primex-dark p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primex-green/10">
                    <span className="inline-block px-2.5 py-1 mb-3 rounded-full bg-primex-green/10 text-primex-green text-xs font-medium">
                      {related.category}
                    </span>
                    <h3 className="font-display text-base font-bold text-primex-white mb-2 group-hover:text-primex-green transition-colors leading-snug line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-primex-gray-300 text-xs">
                      {related.readingTime}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
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
