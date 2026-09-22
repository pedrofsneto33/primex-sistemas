import type { Case } from "@/types"

/**
 * Cases de portfólio da Primex Sistemas
 * Projetos realizados para clientes reais (dados fictícios para demonstração)
 */
export const cases: Case[] = [
  {
    id: "case-1",
    title: "Plataforma E-commerce de Varejo",
    client: "LojaTop Brasil",
    description:
      "Reformulação completa da plataforma de e-commerce, resultando em aumento de 40% nas conversões.",
    category: "web",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    result: "40% de aumento nas conversões e 60% de melhoria no tempo de carregamento.",
    slug: "ecommerce-lojatip-brasil",
  },
  {
    id: "case-2",
    title: "App de Delivery Premium",
    client: "SwiftDelivery",
    description:
      "Aplicativo mobile para entregas premium com rastreamento em tempo real e experiência do usuário refinada.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.IO", "Google Maps API"],
    result: "50.000 downloads nos primeiros 3 meses e avaliação de 4.8 estrelas nas lojas.",
    slug: "app-delivery-premium",
  },
  {
    id: "case-3",
    title: "ERP para Indústria Automotiva",
    client: "AutoParts Industrial",
    description:
      "Sistema integrado de gestão para controle de produção, estoque e finanças de uma indústria com 200+ funcionários.",
    category: "sistemas",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    result: "Redução de 35% no tempo de processamento de pedidos e eliminação de erros manuais.",
    slug: "erp-auto-parts",
  },
  {
    id: "case-4",
    title: "Chatbot Inteligente para Atendimento",
    client: "SaúdePlus",
    description:
      "Chatbot com IA para triagem médica e agendamento de consultas, integrando com o sistema existente.",
    category: "ia",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    technologies: ["Node.js", "NLP (Natural Language Processing)", "React", "PostgreSQL", "AWS Lambda"],
    result: "Atendimento 24/7 com 85% de resolução automática e redução de 60% no tempo de espera.",
    slug: "chatbot-saudeplus",
  },
  {
    id: "case-5",
    title: "Portal Corporativo de RH",
    client: "GrupoFinanceiro XYZ",
    description:
      "Portal completo para gestão de recursos humanos com avaliação de desempenho, folha de pagamento e treinamentos.",
    category: "sistemas",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS", "Docker"],
    result: "Centralização de dados de 1.500 colaboradores e redução de 50% no tempo de processamento de folha.",
    slug: "portal-rh-grupo-financeiro",
  },
  {
    id: "case-6",
    title: "App de Finanças Pessoais",
    client: "FinControl",
    description:
      "Aplicativo mobile para controle financeiro pessoal com categorização automática e insights inteligentes.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    technologies: ["Flutter", "Firebase", "Machine Learning", "Plaid API"],
    result: "100.000 usuários ativos e classificação de 4.7 estrelas na App Store.",
    slug: "app-financas-pessoais",
  },
]

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug)
}

export function getCasesByCategory(category: string): Case[] {
  if (category === "all") return cases
  return cases.filter((c) => c.category === category)
}