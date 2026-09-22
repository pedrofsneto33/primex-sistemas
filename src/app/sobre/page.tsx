import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HistoryTimeline } from "@/components/about/HistoryTimeline"
import { ValuesSection } from "@/components/about/ValuesSection"
import { TeamSection } from "@/components/about/TeamSection"

export const metadata: Metadata = {
  title: "Sobre — Primex Sistemas",
  description: "Conheça a história, valores e equipe da Primex Sistemas.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primex-black text-center overflow-hidden border-b border-primex-gray-800">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            SOBRE NÓS
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primex-white mb-6 tracking-tight">
            Quem <span className="text-primex-green">Somos</span>
          </h1>
          <p className="text-lg md:text-xl text-primex-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tecnologia que resolve, parceria que dura. Combinamos inovação, engenharia de software de ponta e foco total nos resultados do seu negócio.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <HistoryTimeline />

      {/* Values Section */}
      <ValuesSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Final */}
      <section className="py-20 bg-primex-dark text-center border-t border-primex-gray-800">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">
            Vamos construir juntos?
          </h2>
          <p className="text-primex-gray-300 mb-8 text-lg">
            Entre em contato com nossa equipe e descubra como podemos ajudar a sua empresa a alcançar o próximo nível.
          </p>
          <Button asChild size="lg" className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold">
            <Link href="/contato">
              Fale Conosco
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
