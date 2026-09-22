import type { Case } from "@/types"

export const cases: Case[] = [
  {
    id: "1",
    title: "Mesa Fiscal",
    client: "Prefeitura Municipal",
    description:
      "Sistema interno automatizado para gestão e otimização de serviços públicos, com módulos de análise documental via OCR e IA.",
    category: "sistemas",
    image: "/images/cases/mesa-fiscal.jpg",
    technologies: [
      "React",
      "TanStack Start",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "OCR + IA",
      "Vercel",
    ],
    result: "75% de otimização nos serviços e demandas",
    slug: "mesa-fiscal",
  },
  {
    id: "2",
    title: "Plataforma de Vendas Digital",
    client: "Rede de Varejo Regional",
    description:
      "E-commerce completo com painel administrativo, integração de pagamentos e gestão automatizada de estoque.",
    category: "web",
    image: "/images/cases/ecommerce.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    result: "+180% em vendas online no primeiro semestre",
    slug: "plataforma-vendas",
  },
  {
    id: "3",
    title: "App de Gestão Mobile",
    client: "Empresa de Logística",
    description:
      "Aplicativo mobile multiplataforma para rastreamento de entregas, gestão de rotas e comunicação direta com motoristas em tempo real.",
    category: "mobile",
    image: "/images/cases/app-logistica.jpg",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Maps API",
      "Push Notifications",
    ],
    result: "Redução de 40% no tempo médio de entrega",
    slug: "app-gestao-mobile",
  },
]