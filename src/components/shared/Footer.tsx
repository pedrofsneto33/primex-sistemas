import Link from "next/link"
import { Code2, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/shared/Logo"
import { site } from "@/data/site"

const navItems = {
  navegacao: [
    { href: "/solucoes", label: "Soluções" },
    { href: "/sobre", label: "Sobre" },
    { href: "/cases", label: "Projetos" },
    { href: "/blog", label: "Blog" },
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
  { href: site.github, icon: Code2, label: "GitHub" },
]

const contactInfo = [
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: site.phoneDisplay, href: `tel:${site.phoneTel}` },
  { icon: MapPin, label: `${site.city}, ${site.state} — atendimento em todo o Brasil` },
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
                  {"href" in item && item.href ? (
                    <a href={item.href} className="text-primex-gray-300 hover:text-primex-green transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-primex-gray-300">{item.label}</span>
                  )}
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
            © {new Date().getFullYear()} {site.legalName} — CNPJ {site.cnpj}. Todos os direitos reservados.
          </p>
          <p className="text-primex-gray-300 text-xs">
            <Link href="/privacidade" className="hover:text-primex-green hover:underline">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}