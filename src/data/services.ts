import type { Service } from "@/types"

export const services: Service[] = [
  {
    id: "web",
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas, responsivas e performáticas.",
    icon: "Globe",
    slug: "desenvolvimento-web",
  },
  {
    id: "mobile",
    title: "Apps Mobile",
    description: "Aplicativos nativos e multiplataforma para iOS e Android.",
    icon: "Smartphone",
    slug: "apps-mobile",
  },
  {
    id: "sistemas",
    title: "Sistemas Sob Medida",
    description: "ERP, CRM e sistemas corporativos integrados.",
    icon: "Settings",
    slug: "sistemas-sob-medida",
  },
  {
    id: "ia",
    title: "IA e Automação",
    description: "Soluções com inteligência artificial e automação de processos.",
    icon: "Brain",
    slug: "ia-automacoes",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}