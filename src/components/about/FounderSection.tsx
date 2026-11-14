"use client"

import { motion } from "motion/react"
import { Code2, User } from "lucide-react"
import { site } from "@/data/site"

export function FounderSection() {
  return (
    <section className="py-20 px-6 bg-primex-black border-t border-primex-gray-800">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">
            QUEM ESTÁ POR TRÁS
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-2xl border border-primex-gray-800 bg-primex-dark p-8"
        >
          <div className="w-24 h-24 shrink-0 rounded-full bg-primex-green/10 flex items-center justify-center text-primex-green border border-primex-green/20">
            <User className="w-10 h-10" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-display text-xl text-primex-white font-semibold">Pedro</h3>
            <p className="text-primex-green text-sm font-medium mb-3">
              Fundador · Engenharia de Software e IA
            </p>
            <p className="text-primex-gray-300 text-sm leading-relaxed mb-4">
              Desenvolve sistemas sob medida e soluções com inteligência artificial, da ideia ao deploy.
              Cada projeto da Primex passa pelas mãos dele.
            </p>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primex-gray-300 hover:text-primex-green transition-colors"
            >
              <Code2 className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
