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
      "Projetos menores (sites institucionais, landing pages) ficam prontos entre 2 e 4 semanas. Sistemas complexos (ERPs, apps mobile, IA) são entregues entre 20 e 50 dias, dependendo do escopo. Definimos o cronograma detalhado junto com você na fase de descoberta.",
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
  {
    id: "7",
    question: "Vocês trabalham com conformidade à LGPD?",
    answer:
      "Sim! Todos os nossos projetos são desenvolvidos seguindo as diretrizes da Lei Geral de Proteção de Dados (LGPD). Contamos com uma advogada especialista em proteção de dados que atua em conjunto com nossa equipe técnica, garantindo que sistemas e dados dos usuários estejam sempre em conformidade com a legislação brasileira.",
  },
  {
    id: "8",
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos pagamentos via PIX diretamente para a empresa e também por outras formas através da plataforma Asaas (boleto, cartão de crédito, transferência). Definimos o formato ideal junto com você no início do projeto, com opções de parcelamento conforme o escopo.",
  },
  {
    id: "9",
    question: "Vocês fazem integração com sistemas de outras empresas?",
    answer:
      "Sim! Desenvolvemos integrações com ERPs, CRMs, sistemas de pagamento, plataformas de e-commerce, APIs de terceiros e qualquer sistema que possua interface de integração. Se a sua empresa já usa algum sistema específico, podemos conectar tudo em uma única solução.",
  },
]
