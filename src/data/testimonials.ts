import type { Testimonial } from "@/types"

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Ricardo Mendes",
    company: "LojaTop Brasil",
    role: "Diretor de Tecnologia",
    content:
      "A Primex transformou completamente nossa plataforma de e-commerce. A equipe é extremamente competente e dedicada. Resultados superiores às expectativas.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Juliana Costa",
    company: "SaúdePlus",
    role: "CEO",
    content:
      "O chatbot desenvolvido pela Primex revolucionou nosso atendimento. Reduzimos tempo de espera e aumentamos a satisfação dos pacientes em 80%.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Felipe Rocha",
    company: "AutoParts Industrial",
    role: "Diretor de Operações",
    content:
      "O ERP implementado pela Primex unificou nossas operações e reduziu erros em 90%. Recomendo sem hesitação.",
    rating: 5,
  },
]

export function getTestimonials(): Testimonial[] {
  return testimonials
}