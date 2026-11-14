import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CaseGallery } from "@/components/cases/CaseGallery"

export const metadata: Metadata = {
  title: "Projetos — Primex Sistemas",
  description: "Conheça os sistemas que a Primex Sistemas desenvolveu: IA, automação, gestão e web.",
}

export default function CasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primex-black text-center overflow-hidden border-b border-primex-gray-800">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            PORTFÓLIO
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primex-white mb-6 tracking-tight">
            Nossos <span className="text-primex-green">Projetos</span>
          </h1>
          <p className="text-lg md:text-xl text-primex-gray-300 max-w-2xl mx-auto leading-relaxed">
            Sistemas reais, construídos para resolver problemas reais. Veja o que já saiu do papel.
          </p>
        </div>
      </section>

      {/* Case Gallery com Filtros */}
      <CaseGallery />

      {/* CTA Final */}
      <section className="py-20 bg-primex-dark text-center border-t border-primex-gray-800">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">
            Quer tirar o seu projeto do papel?
          </h2>
          <p className="text-primex-gray-300 mb-8 text-lg">
            Conte sua ideia e a gente desenha a solução juntos.
          </p>
          <Button asChild size="lg" className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold">
            <Link href="/contato">
              Iniciar Projeto
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
