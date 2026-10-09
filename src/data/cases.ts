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
    video: "/videos/mesa-fiscal-demo.webm",
    gallery: [
      "/images/cases/mesa-fiscal-painel.png",
      "/images/cases/mesa-fiscal-processos.png",
      "/images/cases/mesa-fiscal-relatorio.png",
    ],
  },
  {
    id: "2",
    title: "EternityOS",
    client: "Rede de Funerárias",
    description:
      "Sistema completo de gestão funerária com controle de atendimentos, planos, cobrança integrada via Asaas e módulo de documentos. Desenvolvido para operação em tempo real com múltiplos usuários.",
    category: "sistemas",
    image: "/images/cases/eternitysos.jpg",
    video: "/videos/eternitysos-demo.webm",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Asaas",
      "Tailwind CSS",
    ],
    result: "Gestão centralizada com cobrança automatizada",
    slug: "eternityos",
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