import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Design System — Primex Sistemas",
  description: "O sistema visual da Primex Sistemas: cores, tipografia, componentes e movimento.",
}

interface ColorSwatchProps {
  name: string
  hex: string
  textColor: string
}

function ColorSwatch({ name, hex, textColor }: ColorSwatchProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-primex-gray-800">
      <div className="h-24 flex items-end p-3" style={{ backgroundColor: hex }}>
        <span className="font-mono text-xs font-bold" style={{ color: textColor }}>
          {hex}
        </span>
      </div>
      <div className="bg-primex-dark px-3 py-2">
        <p className="text-primex-gray-300 text-xs">{name}</p>
      </div>
    </div>
  )
}

interface TypographySampleProps {
  label: string
  className: string
  children: React.ReactNode
}

function TypographySample({ label, className, children }: TypographySampleProps) {
  return (
    <div className="border-l-2 border-primex-green/30 pl-6">
      <p className="text-primex-gray-300 text-xs uppercase tracking-widest mb-2">{label}</p>
      <div className={className}>{children}</div>
    </div>
  )
}

interface MotionCardProps {
  title: string
  description: string
}

function MotionCard({ title, description }: MotionCardProps) {
  return (
    <div className="card-primex card-primex-bordered bg-primex-black p-6">
      <h4 className="font-display text-lg font-bold text-primex-green mb-2">{title}</h4>
      <p className="text-primex-gray-300 text-sm">{description}</p>
    </div>
  )
}

interface LogoCardProps {
  label: string
  src: string
}

function LogoCard({ label, src }: LogoCardProps) {
  return (
    <div className="card-primex card-primex-bordered bg-primex-dark p-8 flex flex-col items-center gap-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`Logo Primex — ${label}`} className="h-16 w-auto" loading="lazy" />
      <p className="text-primex-gray-300 text-xs uppercase tracking-widest">{label}</p>
    </div>
  )
}

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-primex-black">
      {/* HERO */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primex-green/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
            Design System
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primex-white mb-6">
            A linguagem <span className="text-primex-green">Primex</span>
          </h1>
          <p className="text-primex-gray-300 text-lg max-w-2xl mx-auto">
            Os fundamentos visuais e de interação que dão identidade a todos os projetos que desenvolvemos.
          </p>
        </div>
      </section>
      {/* 01 — CORES */}
      <section className="py-20 px-6 bg-primex-black section-top-line">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-primex-green font-display text-sm tracking-widest uppercase">01 — Cores</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mt-3 mb-3">Paleta Primex</h2>
            <p className="text-primex-gray-300 max-w-2xl">Verde como cor de destaque, preto como base. O contraste cria a identidade.</p>
          </div>
          <div className="mb-10">
            <h3 className="font-display text-lg font-bold text-primex-white mb-4">Cor Primária</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="Primex Green" hex="#00C853" textColor="#0A0A0A" />
              <ColorSwatch name="Green Hover" hex="#00E676" textColor="#0A0A0A" />
              <ColorSwatch name="Green Light" hex="#69F0AE" textColor="#0A0A0A" />
            </div>
          </div>
          <div className="mb-10">
            <h3 className="font-display text-lg font-bold text-primex-white mb-4">Base</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="Primex Black" hex="#0A0A0A" textColor="#FFFFFF" />
              <ColorSwatch name="Primex Dark" hex="#121212" textColor="#FFFFFF" />
              <ColorSwatch name="Gray 900" hex="#1A1A1A" textColor="#FFFFFF" />
              <ColorSwatch name="Gray 800" hex="#2D2D2D" textColor="#FFFFFF" />
              <ColorSwatch name="Gray 700" hex="#3D3D3D" textColor="#FFFFFF" />
              <ColorSwatch name="Gray 500" hex="#6B7280" textColor="#FFFFFF" />
              <ColorSwatch name="Gray 300" hex="#9CA3AF" textColor="#0A0A0A" />
              <ColorSwatch name="White" hex="#FFFFFF" textColor="#0A0A0A" />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — TIPOGRAFIA */}
      <section className="py-20 px-6 bg-primex-dark section-top-line">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-primex-green font-display text-sm tracking-widest uppercase">02 — Tipografia</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mt-3 mb-3">Sora + Inter Tight</h2>
            <p className="text-primex-gray-300 max-w-2xl">Sora para display, Inter Tight para textos corridos.</p>
          </div>
          <div className="space-y-8">
            <TypographySample label="Display / 72px" className="font-display text-6xl md:text-7xl font-bold text-primex-white leading-none">PRIMEX</TypographySample>
            <TypographySample label="Heading 1 / 48px" className="font-display text-5xl font-bold text-primex-white">Soluções Inteligentes</TypographySample>
            <TypographySample label="Heading 2 / 36px" className="font-display text-4xl font-bold text-primex-white">Desenvolvimento Sob Medida</TypographySample>
            <TypographySample label="Heading 3 / 24px" className="font-display text-2xl font-bold text-primex-white">Sistemas com Inteligência Artificial</TypographySample>
            <TypographySample label="Body Large / 18px" className="font-sans text-lg text-primex-gray-300">Desenvolvemos softwares e soluções inteligentes para transformar o seu negócio.</TypographySample>
            <TypographySample label="Body / 16px" className="font-sans text-base text-primex-gray-300">Atendemos empresas de todos os portes.</TypographySample>
            <TypographySample label="Body Small / 14px" className="font-sans text-sm text-primex-gray-300">Conformidade com a LGPD e integração com os sistemas que você já usa.</TypographySample>
          </div>
        </div>
      </section>
      {/* 03 — COMPONENTES */}
      <section className="py-20 px-6 bg-primex-black section-top-line">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-primex-green font-display text-sm tracking-widest uppercase">03 — Componentes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mt-3 mb-3">Blocos de construção</h2>
            <p className="text-primex-gray-300 max-w-2xl">Componentes reutilizáveis com identidade Primex aplicada.</p>
          </div>
          <div className="mb-12">
            <h3 className="font-display text-lg font-bold text-primex-white mb-4">Botões</h3>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold">Primário</Button>
              <Button variant="outline" className="border-primex-gray-700 text-primex-white hover:bg-primex-gray-900">Secundário</Button>
              <Button className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold">
                Com ícone
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="font-display text-lg font-bold text-primex-white mb-4">Card Primex (cantos cortados)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-primex card-primex-bordered card-primex-interactive bg-gradient-to-br from-primex-dark to-primex-black p-6">
                <h4 className="font-display text-xl font-bold text-primex-white mb-2">Card padrão</h4>
                <p className="text-primex-gray-300 text-sm">Cantos cortados em ângulo, borda verde em gradiente e glow no hover.</p>
              </div>
              <div className="card-primex card-primex-bordered card-primex-interactive bg-primex-dark p-6">
                <h4 className="font-display text-xl font-bold text-primex-white mb-2">Card sólido</h4>
                <p className="text-primex-gray-300 text-sm">Mesma estrutura sem gradiente de fundo.</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-primex-white mb-4">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">Destaque</span>
              <span className="inline-block px-3 py-1 rounded-full bg-primex-green/10 text-primex-green text-xs font-medium">Categoria</span>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primex-gray-700 text-primex-gray-300 text-sm">Neutro</span>
            </div>
          </div>
        </div>
      </section>
      {/* 04 — MOVIMENTO */}
      <section className="py-20 px-6 bg-primex-dark section-top-line">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-primex-green font-display text-sm tracking-widest uppercase">04 — Movimento</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mt-3 mb-3">Motion Primex</h2>
            <p className="text-primex-gray-300 max-w-2xl">Animações sutis, sempre com propósito.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MotionCard title="Botões magnéticos" description="Botões que atraem o cursor suavemente quando aproximados." />
            <MotionCard title="Reveal no scroll" description="Conteúdo aparece conforme você rola, com fade + slide." />
            <MotionCard title="Micro-hovers" description="Letras sobem, cards respiram, bordas brilham. Sutil." />
          </div>
        </div>
      </section>

      {/* 05 — LOGO */}
      <section className="py-20 px-6 bg-primex-black section-top-line">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-primex-green font-display text-sm tracking-widest uppercase">05 — Marca</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mt-3 mb-3">A marca Primex</h2>
          <p className="text-primex-gray-300 max-w-2xl mx-auto mb-10">Variações oficiais do logo Primex Sistemas.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <LogoCard label="Horizontal" src="/brand/logo-horizontal-verde-branco.svg" />
            <LogoCard label="Símbolo" src="/brand/simbolo-verde.svg" />
            <LogoCard label="Vertical" src="/brand/logo-vertical-verde-branco.svg" />
          </div>
          <p className="text-primex-gray-300 text-sm mt-8">
            Kit completo com 13 variações disponível em <code className="text-primex-green bg-primex-dark px-2 py-0.5 rounded">/public/brand/</code>
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6 bg-primex-dark section-top-line">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">Quer um projeto com essa identidade?</h2>
          <p className="text-primex-gray-300 text-lg mb-8">Fale com a Primex Sistemas e veja como aplicamos esse sistema no seu negócio.</p>
          <Button asChild size="lg" className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold">
            <Link href="/contato">
              Fale Conosco
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
