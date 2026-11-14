/**
 * Dados institucionais da Primex Sistemas — fonte única de verdade.
 * Altere aqui e o site inteiro (rodapé, contato, WhatsApp, SEO) acompanha.
 */
export const site = {
  name: "Primex Sistemas",
  legalName: "Primex Sistemas LTDA",
  cnpj: "55.536.885/0001-30",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://primexsistemas.com.br",
  email: "pedrofsneto33@gmail.com",
  phoneDisplay: "(86) 98811-7925",
  phoneTel: "+5586988117925",
  whatsappNumber: "5586988117925",
  city: "Teresina",
  state: "PI",
  github: "https://github.com/pedrofsneto33",
} as const

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
