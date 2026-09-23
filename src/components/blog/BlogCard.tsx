"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps): React.JSX.Element {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/blog/${post.slug}`} className="block group h-full">
        <article className="relative h-full rounded-2xl border border-primex-gray-800 bg-primex-dark overflow-hidden transition-all duration-300 hover:border-primex-green/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-primex-green/5">
          <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primex-green/20 via-primex-dark to-primex-black">
            {post.cover && post.cover !== "/images/blog/default.jpg" ? (
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-4xl font-bold text-primex-green/30">
                  PRIMEX
                </span>
              </div>
            )}
            <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full bg-primex-black/80 backdrop-blur-sm border border-primex-green/30 text-primex-green text-xs font-medium">
              {post.category}
            </span>
          </div>
          <div className="p-6 flex flex-col">
            <div className="flex items-center gap-4 text-primex-gray-300 text-xs mb-3">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTime}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-primex-white mb-3 group-hover:text-primex-green transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-primex-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="mt-auto flex items-center gap-2 text-primex-green text-sm font-medium">
              Ler artigo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
