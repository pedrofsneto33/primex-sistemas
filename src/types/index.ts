// Tipos globais do projeto Primex Sistemas

/**
 * Categoria de solução ou case
 * Define o tipo de serviço oferecido
 */
export type Category = "web" | "mobile" | "sistemas" | "ia"

/**
 * Serviço oferecido pela Primex
 */
export interface Service {
  id: string
  title: string
  description: string
  icon: string // nome do ícone lucide-react
  slug: string
}

/**
 * Solução detalhada (página /solucoes)
 */
export interface Solution {
  id: string
  title: string
  description: string
  category: Category
  features: string[]
  icon: string
  slug: string
}

/**
 * Case de portfólio (página /cases)
 */
export interface Case {
  id: string
  title: string
  client: string
  description: string
  category: Category
  image: string // URL da imagem ou caminho local
  technologies: string[]
  result: string
  slug: string
}

/**
 * Membro da equipe (página /sobre)
 */
export interface TeamMember {
  id: string
  name: string
  role: string
  image: string // URL da imagem ou caminho local
  bio?: string
  social?: {
    linkedin?: string
    github?: string
    twitter?: string
    dribbble?: string
    email?: string
    instagram?: string
  }
}

/**
 * Depoimento de prova social (página Home)
 */
export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number // 1-5 estrelas
}

/**
 * Valor da empresa (página /sobre)
 */
export interface Value {
  id: string
  title: string
  description: string
  icon: string
}