import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 bg-primex-black relative overflow-hidden">
      {/* Glow verde difuso no fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primex-green/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10 py-20">
        <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
          Erro 404
        </span>

        <h1 className="font-display text-[120px] md:text-[180px] font-bold leading-none tracking-tighter mb-4 select-none">
          <span className="text-primex-green">4</span>
          <span className="text-primex-white">0</span>
          <span className="text-primex-green">4</span>
        </h1>

        <h2 className="font-display text-2xl md:text-3xl text-primex-white mb-4 font-semibold">
          Ops! A página que você procura não existe.
        </h2>

        <p className="text-primex-gray-300 max-w-md mx-auto mb-8 text-base">
          Ela pode ter sido movida, removida ou você digitou o endereço errado. Vamos te ajudar a voltar para o caminho certo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold h-12 px-6"
          >
            <Link href="/">
              <Home className="mr-2 w-4 h-4" />
              Voltar para Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primex-gray-700 text-primex-white hover:bg-primex-gray-900 h-12 px-6"
          >
            <Link href="/contato">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Fale Conosco
            </Link>
          </Button>
        </div>

        <div className="pt-8 border-t border-primex-gray-800">
          <p className="text-primex-gray-400 text-sm mb-4">Ou explore nossas páginas principais:</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/solucoes" className="text-primex-green hover:underline text-sm font-medium">
              Soluções
            </Link>
            <Link href="/sobre" className="text-primex-green hover:underline text-sm font-medium">
              Sobre
            </Link>
            <Link href="/cases" className="text-primex-green hover:underline text-sm font-medium">
              Cases
            </Link>
            <Link href="/contato" className="text-primex-green hover:underline text-sm font-medium">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
