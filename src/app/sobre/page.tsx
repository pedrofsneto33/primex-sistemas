import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ValuesSection } from "@/components/about/ValuesSection"
import { FounderSection } from "@/components/about/FounderSection"

export const metadata: Metadata = {
  title: "Sobre — Primex Sistemas",
  description: "Conheça a Primex Sistemas, seus valores e quem está por trás dos projetos.",
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
            Tecnologia que resolve, parceria que dura. Combinamos engenharia de software, dados e IA com foco total no resultado do seu negócio.
          </p>
        </div>
      </section>

      {/* Quem somos */}
      <section className="py-20 px-6 bg-primex-black">
        <div className="container mx-auto max-w-3xl space-y-5 text-primex-gray-300 text-lg leading-relaxed">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white">
            O QUE A PRIMEX FAZ
          </h2>
          <p>
            A Primex Sistemas desenvolve software sob medida, automações e soluções com inteligência
            artificial para quem precisa de tecnologia que funcione no dia a dia, sem complicação.
          </p>
          <p>
            Trabalhamos de perto com cada cliente: entendemos o processo, desenhamos a solução, entregamos
            e seguimos dando suporte. Sem promessas vazias. Só o que dá pra construir, testar e colocar no ar.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Fundador */}
      <FounderSection />

      {/* CTA Final */}
      <section className="py-20 bg-primex-dark text-center border-t border-primex-gray-800">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">
            Vamos construir juntos?
          </h2>
          <p className="text-primex-gray-300 mb-8 text-lg">
            Entre em contato e descubra como podemos ajudar a sua empresa a alcançar o próximo nível.
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
