import type { Case } from "@/types"

/**
 * Projetos desenvolvidos pela Primex Sistemas.
 * Só entram aqui projetos reais. Sem métricas inventadas.
 */
export const cases: Case[] = [
  {
    id: "agente-sniper",
    title: "Agente Sniper",
    tag: "Projeto próprio",
    description:
      "Sistema de inteligência competitiva multi-nicho que coleta dados de mercado e gera relatórios automatizados.",
    category: "ia",
    technologies: ["Python"],
    slug: "agente-sniper",
  },
  {
    id: "saad-fune",
    title: "SAAD FUNE",
    tag: "Projeto próprio",
    description:
      "Sistema de gestão para funerárias e planos funerários, pensado para organizar a operação do dia a dia.",
    category: "sistemas",
    slug: "saad-fune",
  },
  {
    id: "recuperajogo",
    title: "RecuperaJogo",
    tag: "Projeto próprio",
    description:
      "Plataforma que automatiza a geração de documentos jurídicos para consumidores prejudicados por plataformas de apostas.",
    category: "web",
    url: "https://recuperajogo.vercel.app",
    slug: "recuperajogo",
  },
]

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug)
}

export function getCasesByCategory(category: string): Case[] {
  if (category === "all") return cases
  return cases.filter((c) => c.category === category)
}
