"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/shared/Logo"

const navLinks = [
  { href: "/solucoes", label: "Soluções" },
  { href: "/sobre", label: "Sobre" },
  { href: "/cases", label: "Cases" },
  { href: "/contato", label: "Contato" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300",
        scrolled
          ? "bg-primex-black/95 backdrop-blur-md border-b border-primex-gray-800 shadow-lg shadow-black/20"
          : "bg-primex-black/80 backdrop-blur-sm border-b border-transparent",
      ].join(" ")}
    >
      <div className="w-full px-4 md:px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size={36} />
          </div>

          {/* Links desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primex-gray-300 hover:text-primex-green transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Botão desktop */}
          <div className="hidden md:flex">
            <Button
              asChild
              size="sm"
              className="bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold"
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Botão menu mobile */}
          <button
            className="md:hidden p-2 text-primex-white hover:text-primex-green transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Painel mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-primex-black flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <nav className="flex flex-col items-center gap-6 text-center">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className="text-2xl font-display text-primex-white hover:text-primex-green transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
