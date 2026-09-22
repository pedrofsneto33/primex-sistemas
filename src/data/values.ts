import type { Value } from "@/types"

export const values: Value[] = [
  {
    id: "innovacao",
    title: "Inovação",
    description:
      "Estamos sempre na vanguarda da tecnologia, buscando soluções inovadoras para os desafios dos nossos clientes.",
    icon: "Lightbulb",
  },
  {
    id: "etica",
    title: "Ética",
    description:
      "Conduzimos nosso negócio com transparência, honestidade e responsabilidade em todas as nossas ações.",
    icon: "Shield",
  },
  {
    id: "qualidade",
    title: "Qualidade",
    description:
      "Entregamos produtos e serviços de alta qualidade, com padrões rigorously testados e validados.",
    icon: "Award",
  },
  {
    id: "parceria",
    title: "Parceria",
    description:
      "Consideramos nossos clientes como parceiros. Juntos, construímos soluções que geram valor real para os negócios.",
    icon: "Users",
  },
]

export function getValueById(id: string): Value | undefined {
  return values.find((v) => v.id === id)
}