import Link from "next/link"
import { Code2, Briefcase, Camera, Mail, Phone } from "lucide-react"
import { Logo } from "@/components/shared/Logo"

const navItems = {
  navegacao: [
    { href: "/solucoes", label: "Soluções" },
    { href: "/sobre", label: "Sobre" },
    { href: "/cases", label: "Cases" },
    { href: "/contato", label: "Contato" },
  ],
  servicos: [
    { href: "/solucoes#web", label: "Desenvolvimento Web" },
    { href: "/solucoes#mobile", label: "Mobile" },
    { href: "/solucoes#sistemas", label: "Sistemas Sob Medida" },
    { href: "/solucoes#ia", label: "IA & Automação" },
  ],
}

const socialLinks = [
  { href: "https://linkedin.com/company/primexsistemas", icon: Briefcase, label: "LinkedIn" },
  { href: "https://github.com/primexsistemas", icon: Code2, label: "GitHub" },
  { href: "https://instagram.com/primexsistemas", icon: Camera, label: "Instagram" },
]

const contactInfo = [
  { icon: Mail, label: "contato@primexsistemas.com.br" },
  { icon: Phone, label: "+55 (11) 9999-9999" },
]

export function Footer() {
  return (
    <footer className="bg-primex-dark border-t border-primex-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Coluna 1 — Marca */}
          <div className="space-y-4">
            <Logo size={40} />
            <p className="text-primex-gray-300 text-sm leading-relaxed mt-2">
              <span className="text-primex-green font-semibold">
                Soluções Inteligentes
              </span>{" "}
              para transformar seu negócio.
            </p>
          </div>

          {/* Coluna 2 — Navegação */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-primex-white uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navItems.navegacao.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primex-gray-300 hover:text-primex-green transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Serviços */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-primex-white uppercase tracking-wider mb-4">
              Serviços
            </h3>
            <ul className="space-y-2">
              {navItems.servicos.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primex-gray-300 hover:text-primex-green transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Contato & Redes */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold text-primex-white uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-sm">
                  <item.icon
                    className="text-primex-green shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-primex-gray-300">{item.label}</span>
                </li>
              ))}
            </ul>

            {/* Redes sociais */}
            <div className="pt-4 border-t border-primex-gray-800">
              <p className="text-primex-gray-300 text-xs mb-3 uppercase tracking-wider">
                Redes Sociais
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-primex-gray-900 text-primex-gray-300 hover:text-primex-green hover:bg-primex-gray-800 transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-primex-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-primex-gray-300 text-xs">
            © 2025 Primex Sistemas. Todos os direitos reservados.
          </p>
          <p className="text-primex-gray-300 text-xs">
            Desenvolvido com ❤️ por{" "}
            <Link href="/" className="text-primex-green hover:underline">
              Primex Sistemas
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}