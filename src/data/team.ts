import type { TeamMember } from "@/types"

export const team: TeamMember[] = [
  {
    id: "ana-silva",
    name: "Ana Silva",
    role: "CEO & Fundadora",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "20+ anos de experiência em tecnologia. Vencedora do Prêmio Mulheres in Tech 2023.",
    social: {
      linkedin: "https://linkedin.com/in/ana-silva",
      twitter: "https://twitter.com/anasilva",
    },
  },
  {
    id: "carlos-oliveira",
    name: "Carlos Oliveira",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Engenheiro de software com foco em arquitetura e inovação tecnológica.",
    social: {
      linkedin: "https://linkedin.com/in/carlos-oliveira",
      github: "https://github.com/carlosoliveira",
    },
  },
  {
    id: "marina-santos",
    name: "Marina Santos",
    role: "Diretora de Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Designer UX/UI apaixonada por criar experiências digitais memoráveis.",
    social: {
      linkedin: "https://linkedin.com/in/marinasantos",
      dribbble: "https://dribbble.com/marinasantos",
    },
  },
  {
    id: "pedro-almeida",
    name: "Pedro Almeida",
    role: "Gerente de Projetos",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "PMP certificado com expertise em metodologias ágeis e entrega de valor.",
    social: {
      linkedin: "https://linkedin.com/in/pedroalmeida",
    },
  },
]

export function getTeamMemberById(id: string): TeamMember | undefined {
  return team.find((m) => m.id === id)
}