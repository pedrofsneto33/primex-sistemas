"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/shared/Logo"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/solucoes", label: "Soluções" },
  { href: "/sobre", label: "Sobre" },
  { href: "/cases", label: "Cases" },
  { href: "/contato", label: "Contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Bloqueia scroll do body quando menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "backdrop-blur-xl bg-primex-black/60 border-b border-primex-white/10 shadow-lg shadow-primex-green/5"
          : "backdrop-blur-md bg-primex-black/30 border-b border-transparent",
      ].join(" ")}
    >
      {/* Linha de brilho verde no topo (detalhe glassmorphism premium) */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primex-green/40 to-transparent" />

      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Logo size={32} />

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-primex-gray-100 hover:text-primex-green transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-primex-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão desktop */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold backdrop-blur-sm"
          >
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primex-white p-2 rounded-lg hover:bg-primex-white/5 transition-colors"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile — overlay glassmorphism */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 backdrop-blur-2xl bg-primex-black/80 border-t border-primex-white/10">
          <ul className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display text-primex-white hover:text-primex-green transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Button
                asChild
                size="lg"
                className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold"
              >
                <Link href="/contato" onClick={() => setIsOpen(false)}>
                  Fale Conosco
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
