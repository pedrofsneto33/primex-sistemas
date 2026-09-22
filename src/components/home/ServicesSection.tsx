"use client"

import { motion } from "motion/react"
import { Globe, Smartphone, Settings, Brain, LucideIcon, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { services } from "@/data/services"

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Settings,
  Brain,
}

// Configuração do bento: quais cards são grandes
const bentoLayout = [
  { span: "lg:col-span-3", size: "large" },   // Desenvolvimento Web — grande
  { span: "lg:col-span-3", size: "small" },   // Mobile
  { span: "lg:col-span-3", size: "small" },   // Sistemas
  { span: "lg:col-span-3", size: "large" },   // IA & Automação — grande
]

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-primex-black relative overflow-hidden">
      {/* Glow verde de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primex-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium"
          >
            O que fazemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-primex-white mb-4"
          >
            NOSSOS <span className="text-primex-green">SERVIÇOS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primex-gray-300 text-lg max-w-2xl mx-auto"
          >
            Soluções completas para transformar seu negócio digitalmente
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Globe
            const layout = bentoLayout[index] ?? { span: "lg:col-span-3", size: "small" }
            const isLarge = layout.size === "large"

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`${layout.span} col-span-1`}
              >
                <Link href={`/solucoes#${service.slug}`} className="block h-full group">
                  <Card
                    className={[
                      "relative overflow-hidden h-full transition-all duration-500",
                      "bg-gradient-to-br from-primex-dark to-primex-black",
                      "border-primex-gray-800 hover:border-primex-green/60",
                      "hover:-translate-y-1 hover:shadow-2xl hover:shadow-primex-green/10",
                      isLarge ? "p-8 md:p-10" : "p-6 md:p-8",
                    ].join(" ")}
                  >
                    {/* Glow interno no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primex-green/0 via-transparent to-primex-green/0 group-hover:from-primex-green/5 transition-all duration-500 pointer-events-none" />

                    {/* Ícone de fundo grande (marca d'água) */}
                    <Icon
                      size={isLarge ? 220 : 140}
                      className="absolute -bottom-8 -right-8 text-primex-green/[0.04] group-hover:text-primex-green/[0.08] transition-all duration-700 pointer-events-none"
                      strokeWidth={1}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Ícone */}
                      <div
                        className={[
                          "rounded-2xl bg-primex-green/10 group-hover:bg-primex-green/20 transition-colors duration-300 flex items-center justify-center mb-6",
                          isLarge ? "w-16 h-16" : "w-12 h-12",
                        ].join(" ")}
                      >
                        <Icon
                          size={isLarge ? 32 : 24}
                          className="text-primex-green"
                        />
                      </div>

                      {/* Título */}
                      <h3
                        className={[
                          "font-display font-bold text-primex-white mb-3",
                          isLarge ? "text-2xl md:text-3xl" : "text-xl",
                        ].join(" ")}
                      >
                        {service.title}
                      </h3>

                      {/* Descrição */}
                      <p
                        className={[
                          "text-primex-gray-300 leading-relaxed mb-6",
                          isLarge ? "text-base md:text-lg max-w-xl" : "text-sm",
                        ].join(" ")}
                      >
                        {service.description}
                      </p>

                      {/* CTA inline */}
                      <div className="mt-auto flex items-center gap-2 text-primex-green text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                        Saber mais
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
