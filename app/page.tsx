import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Cabeçalho */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-[#172b4d]"
          >
            Scanner<span className="text-[#1769aa]">GO</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#beneficios" className="transition hover:text-[#1769aa]">
              Benefícios
            </a>
            <a
              href="#como-funciona"
              className="transition hover:text-[#1769aa]"
            >
              Como funciona
            </a>
            <a href="#duvidas" className="transition hover:text-[#1769aa]">
              Dúvidas
            </a>
          </nav>

          <a
            href="https://wa.me/5562981720585"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1769aa] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#105487]"
          >
            Fale conosco
          </a>
        </div>
      </header>

      {/* Seção principal */}
      <main>
        <section className="overflow-hidden bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:px-10">
            <div>
              <span className="mb-6 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#1769aa]">
                Odontologia digital ao seu alcance
              </span>

              <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#172b4d] sm:text-5xl lg:text-6xl">
                Seu scanner intraoral por{" "}
                <span className="text-[#1769aa]">assinatura.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Entre para a odontologia digital sem precisar fazer um grande
                investimento na compra do equipamento.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
                Tenha scanner, treinamento e suporte para dar os próximos passos
                na digitalização da sua clínica.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/5562981720585?text=Ol%C3%A1%21%20Quero%20conhecer%20a%20ScannerGO."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#1769aa] px-7 py-4 font-semibold text-white transition hover:bg-[#105487]"
                >
                  Quero conhecer
                </a>

                <a
                  href="#como-funciona"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-slate-300 px-7 py-4 font-semibold text-[#172b4d] transition hover:border-[#1769aa] hover:text-[#1769aa]"
                >
                  Como funciona?
                </a>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Uma forma mais simples de começar na odontologia digital.
              </p>
            </div>

            {/* Espaço reservado para a imagem do scanner */}
            <div className="flex min-h-80 items-center justify-center rounded-3xl border border-slate-200 bg-[#f8fafc] p-8 md:min-h-115">
              <div className="max-w-sm text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-[#1769aa]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-10 w-10"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8h6M9 12h6M9 16h3"
                    />
                  </svg>
                </div>

                <p className="text-lg font-semibold text-[#172b4d]">
                  Tecnologia para sua clínica
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  <div className="flex min-h-80 items-center justify-center rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 md:min-h-115">
                    <Image
                      src="/scanner-intraoral.jpeg"
                      alt="Scanner intraoral Runyes 3DS Mega V5"
                      width={700}
                      height={600}
                      priority
                      className="h-auto max-h-105
                       w-full object-contain"
                    />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de benefícios */}
        <section id="beneficios" className="bg-[#f8fafc] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#1769aa]">
                Uma nova forma de começar
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#172b4d] sm:text-4xl">
                Odontologia digital sem um grande investimento inicial
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Tenha acesso à tecnologia de escaneamento intraoral por
                assinatura, com treinamento e suporte para sua clínica.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1769aa]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 10h18M7 15h4" />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#172b4d]">
                  Preserve seu capital
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Comece na odontologia digital sem precisar comprar o scanner
                  de uma só vez.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1769aa]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#172b4d]">
                  Mais previsibilidade
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Organize o planejamento financeiro da clínica com uma
                  mensalidade definida em contrato.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1769aa]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5L12 3Z" />
                    <path d="M19 16v5M16.5 18.5h5" />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#172b4d]">
                  Treinamento e suporte
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Conte com orientação para começar a utilizar o equipamento e
                  suporte conforme as condições da assinatura.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1769aa]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M4 19V5M4 19h16" />
                    <path d="m7 15 4-4 3 2 5-6" />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#172b4d]">
                  Evolua sua clínica
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Dê um passo em direção aos fluxos digitais de trabalho na
                  odontologia.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1769aa]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M12 3 4 7v5c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V7l-8-4Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#172b4d]">
                  Mais tranquilidade
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Tenha um modelo de contratação com serviços e condições
                  definidos previamente.
                </p>
              </article>

              <article className="flex flex-col items-start rounded-2xl bg-[#172b4d] p-7 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M4 12h16M13 5l7 7-7 7" />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  Pronto para dar o próximo passo?
                </h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">
                  Conheça a proposta da ScannerGO e descubra se a assinatura faz
                  sentido para sua clínica.
                </p>

                <a
                  href="https://wa.me/5562981720585?text=Ol%C3%A1%21%20Quero%20conhecer%20a%20assinatura%20ScannerGO."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-[#172b4d] transition hover:bg-blue-50"
                >
                  Falar com a equipe
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
