"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "motion/react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServicesSection from "@/components/home/ServicesSection"
import ProcessSection from "@/components/home/ProcessSection"
import StatsSection from "@/components/home/StatsSection"
import TechMarquee from "@/components/home/TechMarquee"
import SectorsSection from "@/components/home/SectorsSection"
import SocialProof from "@/components/home/SocialProof"
import FaqSection from "@/components/home/FaqSection"
import CtaSection from "@/components/home/CtaSection"

// Hero 3D carregado apenas no cliente (SSR off por causa do WebGL)
const Hero3D = dynamic(() => import("@/components/home/Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primex-black via-primex-dark to-primex-black" />
  ),
})

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Soluções Inteligentes
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primex-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PRIMEX{" "}
            <span className="text-primex-green">SISTEMAS</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primex-gray-300 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Desenvolvimento de softwares e soluções inteligentes para
            transformar o seu negócio.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild size="lg" className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold">
              <Link href="/solucoes">
                Ver Soluções
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primex-gray-700 text-primex-white hover:bg-primex-gray-900">
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <ServicesSection />

      {/* PROCESSO */}
      <ProcessSection />

      {/* ESTATÍSTICAS */}
      <StatsSection />

      {/* MARQUEE DE TECNOLOGIAS */}
      <TechMarquee />

      {/* SETORES ATENDIDOS */}
      <SectorsSection />

      {/* PROVA SOCIAL */}
      <SocialProof />

      {/* FAQ */}
      <FaqSection />

      {/* CTA FINAL */}
      <CtaSection />
    </>
  )
}