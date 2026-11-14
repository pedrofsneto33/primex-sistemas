import type { Metadata } from "next"
import { site } from "@/data/site"

export const metadata: Metadata = {
  title: "Política de Privacidade — Primex Sistemas",
  description: "Como a Primex Sistemas trata os dados enviados pelo site, conforme a LGPD.",
  alternates: { canonical: "/privacidade" },
}

export default function PrivacyPage() {
  return (
    <section className="py-24 px-6 bg-primex-black">
      <div className="container mx-auto max-w-3xl space-y-6 text-primex-gray-300 leading-relaxed">
        <h1 className="font-display text-4xl font-bold text-primex-white">Política de Privacidade</h1>
        <p>
          Esta política explica como a {site.legalName} (CNPJ {site.cnpj}), com sede em {site.city}/{site.state},
          trata os dados pessoais enviados por este site, em conformidade com a Lei Geral de Proteção de Dados
          (Lei nº 13.709/2018).
        </p>

        <h2 className="font-display text-2xl text-primex-white font-semibold pt-4">Quais dados coletamos</h2>
        <p>
          Apenas os que você informa no formulário de contato: nome, e-mail, telefone (opcional), empresa
          (opcional), serviço de interesse e mensagem.
        </p>

        <h2 className="font-display text-2xl text-primex-white font-semibold pt-4">Para que usamos</h2>
        <p>
          Exclusivamente para responder ao seu contato e, se houver interesse, elaborar uma proposta. Não
          vendemos nem compartilhamos seus dados com terceiros para fins de marketing.
        </p>

        <h2 className="font-display text-2xl text-primex-white font-semibold pt-4">Como o formulário funciona</h2>
        <p>
          Ao enviar o formulário, abrimos o WhatsApp com a sua mensagem preenchida. O envio acontece dentro do
          WhatsApp, sujeito aos termos e à política de privacidade da plataforma. Você também pode nos escrever
          diretamente por e-mail.
        </p>

        <h2 className="font-display text-2xl text-primex-white font-semibold pt-4">Seus direitos</h2>
        <p>
          Você pode solicitar a confirmação do tratamento, acesso, correção ou exclusão dos seus dados, entre
          outros direitos previstos no art. 18 da LGPD, pelo e-mail{" "}
          <a href={`mailto:${site.email}`} className="text-primex-green hover:underline">
            {site.email}
          </a>
          .
        </p>

        <h2 className="font-display text-2xl text-primex-white font-semibold pt-4">Atualizações</h2>
        <p>Esta política pode ser atualizada. A versão vigente é sempre a publicada nesta página.</p>
      </div>
    </section>
  )
}
