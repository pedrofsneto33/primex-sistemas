import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — Primex Sistemas",
  description: "Saiba como a Primex Sistemas coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
};

export default function PrivacidadePage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-primex-black">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
              Documento Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primex-white mb-4">
              Política de Privacidade
            </h1>
            <p className="text-primex-gray-300">Última atualização: Setembro de 2026</p>
          </div>
          <div className="prose prose-invert max-w-none space-y-8 text-primex-gray-300 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">1. Introdução</h2>
              <p>
                A <strong className="text-primex-white">PRIMEX SISTEMAS LTDA</strong>, inscrita no CNPJ 55.536.885/0001-30, com sede em Teresina (PI), está comprometida com a proteção dos seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">2. Dados que coletamos</h2>
              <p>Coletamos apenas os dados necessários para fornecer nossos serviços:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-primex-white">Dados de contato:</strong> nome, e-mail, telefone e empresa, fornecidos voluntariamente por meio do formulário de contato do site.</li>
                <li><strong className="text-primex-white">Mensagens:</strong> conteúdo enviado no formulário de contato para responder sua solicitação.</li>
                <li><strong className="text-primex-white">Dados de navegação:</strong> informações anônimas de uso do site (páginas visitadas, tempo de permanência), coletadas por meio do Vercel Analytics para fins estatísticos.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">3. Finalidade do tratamento</h2>
              <p>Utilizamos seus dados exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Responder solicitações de orçamento, contato ou informação.</li>
                <li>Enviar propostas comerciais e materiais relacionados aos nossos serviços.</li>
                <li>Melhorar a experiência de navegação e o desempenho do site.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">4. Compartilhamento de dados</h2>
              <p>
                A Primex Sistemas <strong className="text-primex-white">não vende, aluga ou compartilha</strong> seus dados pessoais com terceiros para fins comerciais. Utilizamos apenas prestadores de serviços essenciais para operar o site:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-primex-white">Vercel:</strong> hospedagem do site.</li>
                <li><strong className="text-primex-white">Web3Forms:</strong> processamento dos formulários de contato.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">5. Seus direitos (LGPD)</h2>
              <p>Você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Confirmar a existência de tratamento de seus dados.</li>
                <li>Acessar seus dados pessoais.</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                <li>Revogar o consentimento a qualquer momento.</li>
                <li>Solicitar a portabilidade dos dados.</li>
              </ul>
              <p className="mt-3">
                Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
                <a href="mailto:pedrofsneto33@gmail.com" className="text-primex-green hover:underline">
                  pedrofsneto33@gmail.com
                </a>.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">6. Segurança dos dados</h2>
              <p>
                Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda ou alteração. Utilizamos conexões criptografadas (HTTPS), controles de acesso e monitoramento contínuo.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">7. Retenção dos dados</h2>
              <p>
                Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta Política, salvo quando a lei exigir período maior.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">8. Cookies</h2>
              <p>
                Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para medir desempenho e uso. Você pode gerenciar cookies nas configurações do seu navegador.
              </p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">9. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato:
              </p>
              <ul className="list-none mt-3 space-y-1">
                <li><strong className="text-primex-white">E-mail:</strong> pedrofsneto33@gmail.com</li>
                <li><strong className="text-primex-white">Telefone:</strong> +55 (86) 98811-7925</li>
                <li><strong className="text-primex-white">Endereço:</strong> Teresina, PI - Brasil</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold text-primex-white mb-4">10. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política periodicamente. Recomendamos revisá-la regularmente. A data da última atualização é sempre indicada no topo desta página.
              </p>
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
