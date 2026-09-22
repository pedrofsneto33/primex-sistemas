import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SolutionGrid } from "@/components/solutions/SolutionGrid"

export const metadata: Metadata = {
  title: "Soluções — Primex Sistemas",
  description: "Desenvolvimento web, mobile, sistemas sob medida e IA.",
}

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primex-black text-center overflow-hidden border-b border-primex-gray-800">
        <div className="container mx-auto px-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            NOSSAS SOLUÇÕES
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primex-white mb-6 tracking-tight">
            Soluções <span className="text-primex-green">Inteligentes</span>
          </h1>
          <p className="text-lg md:text-xl text-primex-gray-300 max-w-2xl mx-auto">
            Tecnologia sob medida para impulsionar e transformar o seu negócio.
          </p>
        </div>
      </section>

      {/* Solutions Grid com filtros */}
      <SolutionGrid />

      {/* CTA Final */}
      <section className="py-20 bg-primex-dark text-center border-t border-primex-gray-800">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-primex-gray-300 mb-8 text-lg">
            Vamos transformar sua ideia em realidade com eficiência e inovação.
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
