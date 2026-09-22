export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "Quanto custa desenvolver um projeto?",
    answer:
      "O investimento varia conforme a complexidade, prazo e escopo do projeto. Fazemos um diagnóstico gratuito e apresentamos uma proposta personalizada com valores transparentes. Entre em contato para conversarmos sobre sua necessidade.",
  },
  {
    id: "2",
    question: "Qual é o prazo médio de entrega?",
    answer:
      "Projetos menores (sites institucionais, landing pages) ficam prontos entre 2 e 4 semanas. Sistemas mais complexos (ERPs, apps mobile, IA) podem levar de 2 a 6 meses. Definimos o cronograma junto com você na fase de descoberta.",
  },
  {
    id: "3",
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim! Todos os nossos projetos incluem período de garantia e suporte. Também oferecemos planos de manutenção contínua com monitoramento, atualizações e melhorias evolutivas.",
  },
  {
    id: "4",
    question: "Como funciona o processo de trabalho?",
    answer:
      "Trabalhamos em 4 etapas: Descoberta (entendemos seu negócio), Design (prototipamos a solução), Desenvolvimento (codificamos com qualidade) e Entrega & Suporte (publicamos e evoluímos continuamente). Você acompanha tudo em tempo real.",
  },
  {
    id: "5",
    question: "Vocês trabalham com quais tecnologias?",
    answer:
      "Usamos o que há de mais moderno: React, Next.js, Node.js, TypeScript, React Native, Python, PostgreSQL, AWS, além de soluções de IA como OpenAI e LangChain. Escolhemos a stack ideal para cada projeto.",
  },
  {
    id: "6",
    question: "Vocês atendem empresas de todo o Brasil?",
    answer:
      "Sim! Atendemos clientes em todo o território nacional de forma 100% remota, com reuniões online e comunicação transparente por canais como WhatsApp, e-mail e videoconferência.",
  },
]
