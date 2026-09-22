"use client"

import { motion } from "motion/react"
import { Search, Pencil, Code2, Rocket } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const steps: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendemos seu negócio, desafios e objetivos para desenhar a solução ideal.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description: "Criamos protótipos e definimos a experiência do usuário com foco em resultado.",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Codificamos com as melhores tecnologias, testes automatizados e padrões de qualidade.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Entrega & Suporte",
    description: "Publicamos, monitoramos e evoluímos continuamente junto com o seu negócio.",
    icon: Rocket,
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-primex-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,200,83,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium"
          >
            Nosso processo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-primex-white mb-4"
          >
            COMO <span className="text-primex-green">TRABALHAMOS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primex-gray-300 text-lg max-w-2xl mx-auto"
          >
            Um método claro e comprovado em cada projeto
          </motion.p>
        </div>

        <div className="relative">
          {/* Linha conectora (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full origin-left bg-gradient-to-r from-primex-green/60 via-primex-green/30 to-primex-green/60"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative text-center"
                >
                  {/* Círculo com ícone */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="absolute inset-0 rounded-full bg-primex-green/20 blur-xl" />
                    <div className="relative w-[104px] h-[104px] rounded-full bg-gradient-to-br from-primex-green/20 to-primex-green/5 border border-primex-green/30 flex items-center justify-center backdrop-blur-sm">
                      <Icon size={38} className="text-primex-green" strokeWidth={1.5} />
                    </div>
                    {/* Número badge */}
                    <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-primex-green text-primex-black font-display font-bold text-xs flex items-center justify-center shadow-lg shadow-primex-green/40">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-primex-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primex-gray-300 text-sm leading-relaxed max-w-[260px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
