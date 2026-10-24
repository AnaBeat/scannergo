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
                  Em breve, a imagem do scanner intraoral ficará em destaque
                  nesta área.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
