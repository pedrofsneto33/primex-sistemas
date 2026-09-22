import type { Solution } from "@/types"

/**
 * Soluções detalhadas da Primex Sistemas
 * Usada na página /solucoes com descrições completas
 */
export const solutions: Solution[] = [
  {
    id: "solutions-web",
    title: "Desenvolvimento Web",
    description:
      "Criamos aplicações web modernas, rápidas e escaláveis. Do site institucional ao dashboard complexo, entregamos experiências digitais completas.",
    category: "web",
    features: [
      "Aplicações React/Next.js",
      "E-commerce e plataformas digitais",
      "Dashboards e painéis administrativos",
      "APIs RESTful e GraphQL",
      "Website institucionais e landing pages",
      "PWA (Progressive Web Apps)",
    ],
    icon: "Globe",
    slug: "desenvolvimento-web",
  },
  {
    id: "solutions-mobile",
    title: "Apps Mobile",
    description:
      "Desenvolvimento nativo e multiplataforma para iOS e Android. Aplicativos intuitivos que engajam usuários e geram resultados.",
    category: "mobile",
    features: [
      "Apps nativos (Swift/Kotlin)",
      "React Native e Flutter",
      "Design de UX/UI mobile",
      "Integração com API backend",
      "Publicação nas lojas (App Store/Play Store)",
      "Apps com geolocalização e push notifications",
    ],
    icon: "Smartphone",
    slug: "apps-mobile",
  },
  {
    id: "solutions-sistemas",
    title: "Sistemas Sob Medida",
    description:
      "Sistemas corporativos integrados que automatizam processos e gerenciam operações. ERP, CRM e soluções customizadas para cada necessidade.",
    category: "sistemas",
    features: [
      "ERP (Enterprise Resource Planning)",
      "CRM (Customer Relationship Management)",
      "Controle de estoque e inventário",
      "Gestão financeira e contábil",
      "Automação de fluxos de trabalho",
      "Relatórios e business intelligence",
    ],
    icon: "Settings",
    slug: "sistemas-sob-medida",
  },
  {
    id: "solutions-ia",
    title: "IA e Automação",
    description:
      "Soluções inteligentes que utilizam machine learning, processamento de linguagem natural e automação para transformar operações em resultados.",
    category: "ia",
    features: [
      "Chatbots e assistentes virtuais",
      "Processamento de linguagem natural (NLP)",
      "Automação de processos robótica (RPA)",
      "Análise preditiva e machine learning",
      "Reconhecimento de imagem e OCR",
      "Integração com IA generativa (LLMs)",
    ],
    icon: "Brain",
    slug: "ia-automacoes",
  },
]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}