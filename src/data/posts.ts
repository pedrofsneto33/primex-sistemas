export type PostBlock = { type: "h2" | "p"; text: string }

export interface Post {
  slug: string
  title: string
  description: string
  date: string // ISO (YYYY-MM-DD)
  readingTime: string
  body: PostBlock[]
  sources: { label: string; url: string }[]
}

export const posts: Post[] = [
  {
    slug: "ia-o-que-mudou-e-por-que-importa",
    title: "IA: o que mudou nos últimos meses (e por que isso importa mesmo pra quem não é de tecnologia)",
    description:
      "Agentes que agem sozinhos, cobrança por resultado, novas regras e briga de preços: um engenheiro de software explica, sem jargão, o que está mudando na inteligência artificial.",
    date: "2026-11-14",
    readingTime: "4 min de leitura",
    body: [
      {
        type: "p",
        text: "Eu trabalho com software e inteligência artificial todos os dias, e posso garantir uma coisa: nunca foi tão difícil acompanhar tudo. Toda semana tem modelo novo, parceria bilionária, promessa nova. Então vou deixar o barulho de lado e falar só do que realmente mexe com a vida de empresas e pessoas.",
      },
      { type: "h2", text: "A IA parou de só responder e passou a agir" },
      {
        type: "p",
        text: "Até pouco tempo, usar IA era fazer uma pergunta e ler a resposta. Agora o assunto são os \"agentes\": sistemas que recebem uma tarefa e vão resolvendo sozinhos, passo a passo. É como um estagiário que não dorme, mas que precisa de supervisão. Um advogado trabalhista ouvido numa reportagem desta semana lembrou que a responsabilidade pelas decisões automatizadas continua com a empresa que usa a tecnologia. Ou seja, ninguém consegue jogar a culpa na máquina.",
      },
      { type: "h2", text: "Chegou a hora de provar resultado" },
      {
        type: "p",
        text: "O deslumbramento está dando lugar a uma pergunta bem prática: isso dá retorno? Analistas já apontam 2027 como o ano em que os agentes de IA vão ter que comprovar o que entregam dentro das empresas. Eu concordo. Muita empresa comprou ferramenta por medo de ficar pra trás e hoje não sabe dizer o que ganhou. IA boa é a que resolve um problema concreto. O resto é vitrine.",
      },
      { type: "h2", text: "O mundo está discutindo as regras" },
      {
        type: "p",
        text: "Relatos de agentes de IA que teriam escapado ao controle das empresas durante o verão do hemisfério norte colocaram a regulação de volta no centro do debate, e Europa e Estados Unidos seguem divididos sobre o quanto regular sem travar a inovação. No Brasil o efeito já chegou: o Decreto 13.135/2026 criou novas regras para o SAC, incluindo o uso de chatbots e IA no atendimento, em vigor desde 2 de novembro. Se a sua empresa atende cliente por robô, vale revisar como isso está sendo feito.",
      },
      { type: "h2", text: "A concorrência esquentou, e isso tende a ser bom pra quem usa" },
      {
        type: "p",
        text: "Empresas chinesas de IA vêm pressionando os preços dos modelos e desafiando as americanas. Pra quem está do lado de cá, isso costuma significar ferramentas melhores e mais baratas. Pra pequenas empresas, a conta de usar IA fecha cada vez mais fácil.",
      },
      { type: "h2", text: "O que eu penso disso tudo" },
      {
        type: "p",
        text: "A tecnologia anda mais rápido do que a nossa capacidade de organizar o uso dela. Quem ganha daqui pra frente não é quem usa mais IA, é quem sabe onde usar. Antes de automatizar, entenda o processo. Antes de comprar, defina o que quer medir. E sempre deixe um humano responsável pelo resultado.",
      },
      {
        type: "p",
        text: "Se você quer pensar como a IA pode ajudar o seu negócio sem cair em modinha, é só falar comigo.",
      },
    ],
    sources: [
      {
        label: "Público — Regular a IA sem travar a inovação: o que divide a Europa e os EUA (11/11/2026)",
        url: "https://www.publico.pt/2026/11/11/enter/noticia/regular-inteligencia-artificial-travar-inovacao-divide-europa-eua-2194505",
      },
      {
        label: "Macher Tecnologia — Nova regulamentação do SAC (Decreto 13.135/2026)",
        url: "https://www.machertecnologia.com.br/decreto-13135-2026-sac-lgpd/amp/",
      },
      {
        label: "Quem demite um agente de IA? (11/11/2026)",
        url: "https://cryptoid.com.br/inteligencia-artificial/quem-demite-um-agente-de-ia-empresas-enfrentam-novo-desafio-para-avaliar-funcionarios-digitais/",
      },
      {
        label: "IT Show — Agentes de IA em 2027: a hora de comprovar resultados (14/11/2026)",
        url: "https://itshow.com.br/agentes-de-ia-2027-resultados-roi-governanca/",
      },
      { label: "IT Forum — Inteligência Artificial", url: "https://itforum.com.br/inteligencia-artificial/" },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T12:00:00-03:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
