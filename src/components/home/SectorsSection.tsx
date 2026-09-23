"use client"

import { motion } from "motion/react"
import {
  HeartPulse,
  ShoppingBag,
  Building2,
  Briefcase,
  Factory,
  GraduationCap,
  LucideIcon,
} from "lucide-react"

interface Sector {
  icon: LucideIcon
  title: string
  description: string
}

const sectors: Sector[] = [
  {
    icon: HeartPulse,
    title: "Saúde",
    description: "Clínicas, consultórios e laboratórios",
  },
  {
    icon: Building2,
    title: "Setor Público",
    description: "Prefeituras e órgãos governamentais",
  },
  {
    icon: ShoppingBag,
    title: "Varejo",
    description: "Lojas físicas e comércio online",
  },
  {
    icon: Briefcase,
    title: "Serviços",
    description: "Consultorias, escritórios e prestadores",
  },
  {
    icon: Factory,
    title: "Indústria",
    description: "Fábricas e logística",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Escolas, cursos e treinamentos",
  },
]

export default function SectorsSection() {
  return (
    <section className="py-24 px-6 bg-primex-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,83,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium"
          >
            Setores atendidos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-primex-white mb-4"
          >
            SOLUÇÕES POR <span className="text-primex-green">SETOR</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primex-gray-300 text-lg max-w-2xl mx-auto"
          >
            Conhecemos os desafios específicos de cada segmento e
            desenvolvemos soluções sob medida
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl border border-primex-gray-800 bg-primex-black/60 backdrop-blur-sm p-5 text-center transition-all duration-300 hover:border-primex-green/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-primex-green/10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primex-green/10 border border-primex-green/20 mb-3 transition-colors group-hover:bg-primex-green/20">
                    <Icon size={22} className="text-primex-green" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-primex-white text-sm mb-1.5">
                    {sector.title}
                  </h3>
                  <p className="text-primex-gray-300 text-xs leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-primex-gray-300 text-sm mt-10"
        >
          Atende outro segmento?{" "}
          <a
            href="/contato"
            className="text-primex-green hover:underline font-medium"
          >
            Fale conosco
          </a>{" "}
          — provavelmente conseguimos ajudar.
        </motion.p>
      </div>
    </section>
  )
}
