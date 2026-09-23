import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso — Primex Sistemas",
  description: "Leia os Termos de Uso do site da Primex Sistemas.",
};

export default function TermosPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-primex-black">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
              Documento Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primex-white mb-4">
              Termos de Uso
            </h1>
            <p className="text-primex-gray-300">Última atualização: Setembro de 2026</p>
          </div>
          <div className="prose prose-invert max-w-none space-y-8 text-primex-gray-300 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">1. Aceitação dos Termos</h2>
              <p>Ao acessar e usar este site, você concorda integralmente com estes Termos de Uso. Caso não concorde, recomendamos não utilizar o site.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">2. Objeto</h2>
              <p>Este site tem finalidade informativa e comercial, apresentando os serviços de desenvolvimento de software e soluções inteligentes oferecidos pela <strong className="text-primex-white">PRIMEX SISTEMAS LTDA</strong> (CNPJ 55.536.885/0001-30).</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">3. Uso do site</h2>
              <p>Você se compromete a:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Utilizar o site apenas para fins legais e lícitos.</li>
                <li>Não tentar acessar áreas restritas ou sistemas do site sem autorização.</li>
                <li>Não copiar, reproduzir ou distribuir o conteúdo do site sem autorização expressa.</li>
                <li>Não utilizar ferramentas automatizadas (bots, scrapers) para extrair conteúdo.</li>
                <li>Não publicar conteúdo ofensivo, ilegal ou que viole direitos de terceiros por meio do formulário de contato.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">4. Propriedade intelectual</h2>
              <p>Todo o conteúdo deste site — incluindo textos, imagens, marca, logotipo, layout, código-fonte e design — é de propriedade exclusiva da <strong className="text-primex-white">PRIMEX SISTEMAS LTDA</strong>, protegido pelas leis de direitos autorais e propriedade industrial. É proibida a reprodução, total ou parcial, sem autorização prévia e por escrito.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">5. Marca e identidade visual</h2>
              <p>O nome Primex Sistemas, o logotipo e a identidade visual são marcas da empresa. Qualquer uso não autorizado poderá ser objeto de medidas legais cabíveis.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">6. Limitação de responsabilidade</h2>
              <p>A Primex Sistemas envida esforços para manter as informações do site atualizadas e precisas, mas não se responsabiliza por:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Erros, omissões ou imprecisões no conteúdo.</li>
                <li>Interrupções temporárias no acesso ao site.</li>
                <li>Danos decorrentes do uso indevido das informações aqui contidas.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">7. Links externos</h2>
              <p>O site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo, políticas ou práticas desses sites.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">8. Orçamentos e propostas</h2>
              <p>As informações do site não constituem proposta comercial vinculante. Orçamentos e propostas são enviados formalmente após contato e análise do projeto.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">9. Modificações</h2>
              <p>A Primex Sistemas reserva-se o direito de alterar estes Termos a qualquer momento, sem aviso prévio. Recomendamos revisar esta página periodicamente.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">10. Legislação aplicável</h2>
              <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Eventuais controvérsias serão resolvidas no foro da comarca de Teresina, Estado do Piauí.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">11. Contato</h2>
              <p>Em caso de dúvidas sobre estes Termos de Uso:</p>
              <ul className="list-none mt-3 space-y-1">
                <li><strong className="text-primex-white">E-mail:</strong> pedrofsneto33@gmail.com</li>
                <li><strong className="text-primex-white">Telefone:</strong> +55 (86) 98811-7925</li>
              </ul>
            </section>
          </div>
          <div className="mt-12 pt-8 border-t border-primex-gray-800">
            <Link href="/" className="text-primex-green hover:underline text-sm">
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}