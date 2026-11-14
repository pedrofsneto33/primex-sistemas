# Primex Sistemas — site institucional

Site da Primex Sistemas LTDA, feito com Next.js (App Router), Tailwind CSS 4 e shadcn/ui.

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| CNPJ, telefone, WhatsApp, e-mail, cidade, GitHub | `src/data/site.ts` |
| Projetos (página /cases) | `src/data/cases.ts` |
| Posts do blog | `src/data/posts.ts` |
| Serviços / soluções / FAQ | `src/data/services.ts`, `solutions.ts`, `faq.ts` |

Para o SEO apontar para o domínio correto, defina `NEXT_PUBLIC_SITE_URL` (ex.: `https://seudominio.com.br`) no ambiente de deploy.

## Formulário de contato

Não há backend de e-mail: ao enviar, o site abre o WhatsApp com a mensagem pronta. Para receber por e-mail, troque `onSubmit` em `src/components/contato/ContactForm.tsx` por uma chamada a um endpoint próprio (Resend, Formspree etc.).
