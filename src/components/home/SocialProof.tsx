"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { testimonials } from "@/data/testimonials"

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0]
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <Card className="bg-primex-dark border-primex-gray-800 hover:border-primex-green/50 transition-all duration-300 h-full flex flex-col">
        <CardContent className="flex-1 p-6">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={
                  i < testimonial.rating
                    ? "fill-primex-green text-primex-green"
                    : "fill-primex-gray-700 text-primex-gray-700"
                }
              />
            ))}
          </div>
          <blockquote className="text-primex-gray-100 italic leading-relaxed mb-6">
            &ldquo;{testimonial.content}&rdquo;
          </blockquote>
          <div className="border-t border-primex-gray-800 pt-4">
            <p className="text-primex-white font-semibold">
              {testimonial.name}
            </p>
            <p className="text-primex-gray-300 text-sm">
              {testimonial.role} — {testimonial.company}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function SocialProof() {
  return (
    <section className="py-20 px-6 bg-primex-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primex-white mb-4">
            O QUE DIZEM NOSSOS CLIENTES
          </h2>
          <p className="text-primex-gray-300 text-lg max-w-2xl mx-auto">
            Depoimentos de quem já transformou seu negócio com a Primex
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}