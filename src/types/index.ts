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
  /** Rótulo curto acima do título (ex.: "Projeto próprio") */
  tag: string
  description: string
  category: Category
  technologies?: string[]
  /** Link público do projeto, se existir */
  url?: string
  slug: string
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