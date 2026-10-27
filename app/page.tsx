"use client";
import Image from "next/image";
import { useState } from "react";

<link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>;

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Cabeçalho */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-[#172b4d]"
            onClick={() => setMenuAberto(false)}
          >
            Scanner<span className="text-[#1769aa]">GO</span>
          </a>

          {/* Navegação para computador */}
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

          <div className="flex items-center gap-3">
            {/* Botão para computador */}
            <a
              href="https://wa.me/5562981720585"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[#1769aa] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#105487] md:inline-flex"
            >
              Fale conosco
            </a>

            {/* Botão do menu mobile */}
            <button
              type="button"
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              onClick={() => setMenuAberto(!menuAberto)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#172b4d] transition hover:bg-slate-50 md:hidden"
            >
              {menuAberto ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navegação para celular */}
        {menuAberto && (
          <nav
            id="menu-mobile"
            className="border-t border-slate-200 bg-white px-6 py-5 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              <a
                href="#beneficios"
                onClick={() => setMenuAberto(false)}
                className="rounded-xl px-4 py-3 font-medium text-[#172b4d] transition hover:bg-blue-50 hover:text-[#1769aa]"
              >
                Benefícios
              </a>
              <a
                href="#como-funciona"
                onClick={() => setMenuAberto(false)}
                className="rounded-xl px-4 py-3 font-medium text-[#172b4d] transition hover:bg-blue-50 hover:text-[#1769aa]"
              >
                Como funciona
              </a>
              <a
                href="#duvidas"
                onClick={() => setMenuAberto(false)}
                className="rounded-xl px-4 py-3 font-medium text-[#172b4d] transition hover:bg-blue-50 hover:text-[#1769aa]"
              >
                Dúvidas
              </a>
              <a
                href="https://wa.me/5562981720585"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuAberto(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#1769aa] px-5 py-3 font-semibold text-white! transition hover:bg-[#105487]"
              >
                Fale com a equipe
              </a>
            </div>
          </nav>
        )}
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
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#1769aa] px-7 py-4 font-semibold text-white! transition hover:bg-[#105487]"
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
                <div className="flex min-h-80 items-center justify-center rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 md:min-h-115">
                  <Image
                    src="/scanner.jpeg"
                    alt="Scanner intraoral Runyes 3DS Mega V5"
                    width={700}
                    height={600}
                    priority
                    className="h-auto max-h-105
                       w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A dor: comprar ou assinar */}
        <section id="comparativo" className="bg-[#f8fafc] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#1769aa]">
                Uma nova possibilidade
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#172b4d] md:text-4xl">
                Por que imobilizar capital na compra do equipamento?
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
                Entrar na odontologia digital não precisa começar com a compra
                de um equipamento de alto valor. Com a ScannerGO, você pode
                acessar essa tecnologia por assinatura.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Compra tradicional */}
              <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6 text-slate-600"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7h18M5 7l1 13h12l1-13M9 7V4h6v3"
                    />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#172b4d]">
                  Compra do equipamento
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  A aquisição exige um investimento inicial que pode comprometer
                  parte do capital disponível da clínica.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-slate-400">•</span>
                    Alto investimento inicial
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-400">•</span>
                    Capital comprometido na aquisição
                  </li>
                  <li className="flex gap-3">
                    <span className="text-slate-400">•</span>
                    Treinamento e suporte dependem das condições da compra
                  </li>
                </ul>
              </div>

              {/* ScannerGO */}
              <div className="rounded-3xl border-2 border-[#1769aa] bg-white p-7 shadow-sm md:p-9">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1769aa]">
                  Conheça a alternativa
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#172b4d]">
                  ScannerGO por assinatura
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Acesse o scanner intraoral com uma mensalidade prevista em
                  contrato e conte com apoio para incorporar a tecnologia à
                  rotina.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-[#1769aa]">✓</span>
                    Menor investimento inicial
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#1769aa]">✓</span>
                    Mensalidade previsível conforme o plano
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#1769aa]">✓</span>
                    Treinamento e suporte conforme as condições contratadas
                  </li>
                </ul>

                <a
                  href="https://wa.me/5562981720585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#1769aa] px-6 py-3 font-semibold text-white! transition hover:bg-[#105487]"
                >
                  Quero conhecer
                </a>
              </div>
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-slate-500">
              A disponibilidade dos serviços e as condições da assinatura são
              definidas no plano e no contrato. O computador compatível não está
              incluído na locação padrão.
            </p>
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
                  className="rounded-full bg-[#1769aa] px-6 py-3 font-semibold text-white transition hover:bg-[#105487]"
                >
                  Falar com a equipe
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769aa]">
                Simples e descomplicado
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Como funciona a assinatura?
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
                Um caminho mais acessível para levar a tecnologia do
                escaneamento intraoral à sua rotina clínica.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-[#1769aa]">
                  01
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Entre em contato
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Converse com nossa equipe e conheça a solução para sua
                  clínica.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-[#1769aa]">
                  02
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Conheça seu plano
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Entenda as condições da assinatura e avalie a opção adequada
                  para você.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-[#1769aa]">
                  03
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Prepare sua clínica
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Receba orientações para a configuração e a implementação do
                  scanner.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-[#1769aa]">
                  04
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Comece a utilizar
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Conte com treinamento e suporte conforme as condições
                  contratadas.
                </p>
              </article>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://wa.me/5562981720585"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#1769aa] px-8 py-4 font-semibold text-white! transition hover:bg-[#105487]"
              >
                Falar com a equipe
              </a>
            </div>
          </div>
        </section>

        {/* O que está incluído */}
        <section id="incluso" className="bg-white px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#1769aa]">
                Uma solução completa
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#172b4d] md:text-4xl">
                Mais do que um scanner. Apoio para sua clínica.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
                Tenha acesso à tecnologia e conte com orientação para
                incorporá-la à rotina da sua clínica, conforme as condições do
                plano contratado.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-[#1769aa]/50 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1769aa]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <rect x="7" y="3" width="10" height="18" rx="2" />
                    <path strokeLinecap="round" d="M10 6h4M10 18h4" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#172b4d]">
                  Scanner intraoral
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Acesso ao equipamento para levar o escaneamento intraoral à
                  rotina da clínica.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-[#1769aa]/50 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1769aa]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1"
                    />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#172b4d]">
                  Configuração inicial
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Orientação para preparar o equipamento e iniciar sua
                  utilização.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-[#1769aa]/50 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1769aa]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 21v-2a7 7 0 0 1 14 0v2M9 8l2 2 4-4"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#172b4d]">
                  Treinamento
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Orientação para você e sua equipe utilizarem o equipamento.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-[#1769aa]/50 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1769aa]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-3Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 12 2 2 4-4"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#172b4d]">
                  Suporte técnico
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Apoio durante a utilização, conforme as condições do plano
                  contratado.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-[#1769aa]/50 hover:shadow-md sm:col-span-2 lg:col-span-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1769aa]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12a9 9 0 1 0 3-6.7L3 8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v5h5m4-1v5l3 2"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#172b4d]">
                  Acompanhamento
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Conte com apoio para integrar a tecnologia ao dia a dia da
                  clínica, de acordo com os serviços previstos na contratação.
                </p>
              </div>
            </div>

            <p className="mt-8 text-center text-xs leading-5 text-slate-500">
              O computador ou notebook compatível deve ser disponibilizado pela
              clínica. Os serviços incluídos dependem das condições do plano
              contratado.
            </p>

            <div className="mt-8 text-center">
              <a
                href="https://wa.me/5562981720585"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#1769aa] px-7 py-3 font-semibold text-white! transition hover:bg-[#105487]"
              >
                Conhecer a solução
              </a>
            </div>
          </div>
        </section>

        {/* Dúvidas frequentes */}
        <section id="duvidas" className="bg-white px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#1769aa]">
                FAQ
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#172b4d] md:text-4xl">
                Ficou com alguma dúvida?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Reunimos algumas informações para ajudar você a conhecer melhor
                o ScannerGO.
              </p>
            </div>

            <div className="space-y-4">
              <details className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#1769aa]/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#172b4d]">
                  Como funciona o ScannerGO?
                  <span className="text-xl text-[#1769aa] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">
                  O ScannerGO oferece acesso ao scanner intraoral por meio de um
                  plano de assinatura, conforme as condições estabelecidas em
                  contrato.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#1769aa]/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#172b4d]">
                  Preciso comprar o equipamento?
                  <span className="text-xl text-[#1769aa] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">
                  A proposta é permitir o acesso ao scanner por assinatura, sem
                  a necessidade de realizar a compra inicial do equipamento.
                  Consulte as condições do plano para saber como funciona a
                  contratação.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#1769aa]/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#172b4d]">
                  O computador está incluído?
                  <span className="text-xl text-[#1769aa] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">
                  Não. A clínica precisa ter um computador compatível para
                  utilizar o scanner. A compatibilidade deve ser confirmada
                  antes da contratação.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#1769aa]/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#172b4d]">
                  Existe suporte durante a utilização?
                  <span className="text-xl text-[#1769aa] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">
                  O plano pode contemplar implantação, configuração, treinamento
                  e suporte, conforme as condições definidas no contrato.
                </p>
              </details>
            </div>

            <div className="mt-12 rounded-3xl bg-[#f1f6fb] px-6 py-8 text-center md:px-10">
              <h3 className="text-xl font-bold text-[#172b4d]">
                Ainda tem dúvidas?
              </h3>
              <p className="mt-2 text-slate-600">
                Converse com nossa equipe e conheça as condições do ScannerGO.
              </p>
              <a
                href="https://wa.me/5562981720585"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#1769aa] px-6 py-3 font-semibold text-white! transition hover:bg-[#105487]"
              >
                Falar com a equipe
              </a>
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="border-t border-slate-200 bg-[#172b4d] px-6 py-10 text-white! lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <a
                href="#"
                className="text-2xl font-bold tracking-tight text-white!"
              >
                Scanner<span className="text-[#70b7ed]">GO</span>
              </a>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                Mais acesso à tecnologia para transformar a rotina da sua
                clínica.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <a href="#beneficios" className="transition hover:text-white">
                Benefícios
              </a>
              <a href="#como-funciona" className="transition hover:text-white">
                Como funciona
              </a>
              <a href="#duvidas" className="transition hover:text-white">
                Dúvidas
              </a>
            </nav>

            <a
              href="https://wa.me/5562981720585"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-full bg-[#1769aa] px-6 py-3 text-sm font-semibold text-white! transition hover:bg-[#105487]"
            >
              Fale com a equipe
            </a>
          </div>

          <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-6">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} ScannerGO. Todos os direitos
              reservados.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
