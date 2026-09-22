import type { Solution } from "@/types"

export const solutions: Solution[] = [
  {
    id: "1",
    title: "Web Apps",
    description:
      "Aplicações web sob medida com React, Next.js e arquitetura moderna, focadas em performance e conversão.",
    category: "web",
    features: [
      "SEO otimizado",
      "Performance",
      "Responsivo",
      "PWA ready",
      "Dashboards",
      "E-commerce",
    ],
    icon: "Globe",
    slug: "web-apps",
  },
  {
    id: "2",
    title: "Apps Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android, com experiência de usuário fluida e integração nativa.",
    category: "mobile",
    features: [
      "React Native",
      "Push notifications",
      "Offline-first",
      "App Store ready",
      "Geolocalização",
      "Integração com APIs",
    ],
    icon: "Smartphone",
    slug: "apps-mobile",
  },
  {
    id: "3",
    title: "ERPs e CRMs",
    description:
      "Sistemas de gestão empresarial personalizados, incluindo integração com sistemas públicos e privados.",
    category: "sistemas",
    features: [
      "Multi-tenant",
      "Relatórios",
      "Integrações",
      "Permissões",
      "Automação de fluxos",
      "APIs REST",
    ],
    icon: "Settings",
    slug: "erps-crms",
  },
  {
    id: "4",
    title: "IA & Automação",
    description:
      "Chatbots, OCR, análise preditiva, análise de dados e automação de processos com Inteligência Artificial.",
    category: "ia",
    features: [
      "LLMs",
      "OCR e visão computacional",
      "Análise de dados",
      "RAG",
      "Automação de processos",
      "Análise preditiva",
    ],
    icon: "Brain",
    slug: "ia-automacao",
  },
  {
    id: "5",
    title: "Manutenção e Suporte",
    description:
      "Suporte contínuo, correções, atualizações e evolução dos softwares criados pela Primex.",
    category: "sistemas",
    features: [
      "Suporte dedicado",
      "Monitoramento",
      "Correções e updates",
      "Evolução contínua",
      "SLA personalizado",
      "Backup e segurança",
    ],
    icon: "Shield",
    slug: "suporte",
  },
]