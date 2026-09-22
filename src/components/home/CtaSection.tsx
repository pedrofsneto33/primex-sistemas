"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-24 px-6 bg-primex-black relative overflow-hidden">
      {/* Glow verde central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primex-green/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-primex-green/20 bg-gradient-to-br from-primex-dark via-primex-black to-primex-dark p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Detalhe decorativo */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primex-green/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primex-green/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/10 text-primex-green text-sm font-medium"
            >
              Vamos começar?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primex-white mb-6 leading-tight"
            >
              Pronto para transformar
              <br />
              <span className="text-primex-green">o seu negócio?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-primex-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Fale com nossa equipe e descubra como a Primex Sistemas
              pode acelerar os resultados da sua empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold h-14 px-8 text-base"
              >
                <Link href="/contato">
                  Iniciar Projeto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primex-gray-700 text-primex-white hover:bg-primex-gray-900 h-14 px-8 text-base"
              >
                <a
                  href="https://wa.me/5586988117925?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Primex%20Sistemas."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
