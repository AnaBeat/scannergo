import Link from "next/link";

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-[#1769aa] hover:underline"
        >
          Voltar para a ScannerGO
        </Link>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#172b4d] sm:text-4xl">
          Política de Privacidade
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Última atualização: outubro de 2026
        </p>

        <p className="mt-8 leading-7 text-slate-600">
          A ScannerGO valoriza a privacidade dos visitantes deste site. Esta
          página apresenta informações iniciais sobre o tratamento de dados
          pessoais durante a navegação e o contato com nossa equipe.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[#172b4d]">
            1. Quais dados podemos coletar
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Quando você preenche nosso formulário, poderemos solicitar nome,
            nome da clínica, cidade, estado, telefone, e-mail, especialidade
            odontológica e informações sobre seu interesse em conhecer ou
            utilizar um scanner intraoral.
          </p>
          <p className="mt-3 leading-7 text-slate-600">
            O site também poderá utilizar cookies e tecnologias semelhantes,
            conforme as preferências registradas pelo visitante e as ferramentas
            efetivamente implementadas.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[#172b4d]">
            2. Para que utilizamos os dados
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Os dados informados poderão ser utilizados para responder a
            solicitações, apresentar informações sobre a ScannerGO, organizar
            demonstrações solicitadas e manter contato sobre o interesse
            manifestado pelo visitante.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[#172b4d]">
            3. Cookies e preferências
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Cookies necessários podem ser utilizados para o funcionamento do
            site. Cookies de análise e marketing deverão respeitar as
            preferências de consentimento aplicáveis. A qualquer momento, você
            poderá solicitar informações sobre como alterar ou retirar sua
            escolha.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[#172b4d]">
            4. Compartilhamento e armazenamento
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Dados poderão ser tratados por prestadores de serviços necessários à
            operação do site e ao atendimento das solicitações, observadas as
            finalidades aplicáveis e as medidas de segurança pertinentes. Os
            prazos de armazenamento e os destinatários específicos deverão ser
            informados de acordo com os serviços efetivamente utilizados.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[#172b4d]">
            5. Seus direitos
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Nos termos da legislação aplicável, incluindo a Lei Geral de
            Proteção de Dados Pessoais (LGPD), você poderá solicitar informações
            sobre o tratamento de seus dados e exercer os direitos aplicáveis ao
            seu caso.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[#172b4d]">6. Contato</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Para dúvidas sobre privacidade, entre em contato com a equipe
            ScannerGO pelo WhatsApp:
          </p>
          <a
            href="https://wa.me/5562981720585"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex font-semibold text-[#1769aa] hover:underline"
          >
            (62) 98172-0585
          </a>
        </section>
      </article>
    </main>
  );
}
