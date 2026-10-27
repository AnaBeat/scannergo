"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type ConsentChoice = "accepted" | "rejected" | "customized";

type SavedConsent = {
  choice: ConsentChoice;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "scannergo-cookie-consent";
const CONSENT_CHANGE_EVENT = "scannergo-cookie-consent-change";
const REOPEN_CONSENT_EVENT = "scannergo-reopen-cookie-consent";

let consentDialogOpen = false;

function subscribeToConsent(callback: () => void) {
  function handleReopen() {
    consentDialogOpen = true;
    callback();
  }

  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  window.addEventListener(REOPEN_CONSENT_EVENT, handleReopen);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
    window.removeEventListener(REOPEN_CONSENT_EVENT, handleReopen);
  };
}

function shouldShowConsent() {
  if (typeof window === "undefined") return false;

  return consentDialogOpen || localStorage.getItem(STORAGE_KEY) === null;
}

function getSavedConsent(): SavedConsent | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as SavedConsent) : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const visible = useSyncExternalStore(
    subscribeToConsent,
    shouldShowConsent,
    () => false,
  );

  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    function loadSavedPreferences() {
      const saved = getSavedConsent();

      setAnalytics(saved?.analytics ?? false);
      setMarketing(saved?.marketing ?? false);
      setShowSettings(true);
    }

    window.addEventListener(REOPEN_CONSENT_EVENT, loadSavedPreferences);

    return () => {
      window.removeEventListener(REOPEN_CONSENT_EVENT, loadSavedPreferences);
    };
  }, []);

  function saveConsent(choice: ConsentChoice) {
    const consent: SavedConsent = {
      choice,
      necessary: true,
      analytics:
        choice === "accepted" || (choice === "customized" && analytics),
      marketing:
        choice === "accepted" || (choice === "customized" && marketing),
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));

    consentDialogOpen = false;
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));

    setShowSettings(false);
  }

  return (
    <>
      {visible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
          className="fixed inset-x-0 bottom-0 z-60 border-t border-slate-200 bg-white p-5 shadow-2xl sm:inset-x-5 sm:bottom-5 sm:mx-auto sm:max-w-3xl sm:rounded-2xl sm:border"
        >
          <h2 id="cookie-title" className="text-lg font-bold text-[#172b4d]">
            Sua privacidade importa
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Utilizamos cookies necessários para o funcionamento do site. Com sua
            autorização, também poderemos usar cookies de análise e marketing
            para entender o uso da página e melhorar nossas campanhas. Você pode
            aceitar, rejeitar os não essenciais ou personalizar sua escolha.
          </p>

          <p className="mt-2 text-sm">
            <a
              href="/privacidade"
              className="font-medium text-[#1769aa] underline underline-offset-4"
            >
              Leia nossa Política de Privacidade
            </a>
          </p>

          {showSettings && (
            <div className="mt-4 space-y-3 rounded-xl bg-slate-50 p-4">
              <label className="flex items-start gap-3 text-sm text-slate-700">
                <input type="checkbox" checked disabled className="mt-1" />
                <span>
                  <strong>Cookies necessários</strong>
                  <span className="block text-slate-500">
                    Essenciais para o funcionamento do site.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-1 accent-[#1769aa]"
                />
                <span>
                  <strong>Cookies de análise</strong>
                  <span className="block text-slate-500">
                    Ajudam a entender como as pessoas usam o site.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(event) => setMarketing(event.target.checked)}
                  className="mt-1 accent-[#1769aa]"
                />
                <span>
                  <strong>Cookies de marketing</strong>
                  <span className="block text-slate-500">
                    Podem ser usados para medir campanhas e personalizar
                    anúncios.
                  </span>
                </span>
              </label>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Rejeitar não essenciais
            </button>

            {showSettings ? (
              <button
                type="button"
                onClick={() => saveConsent("customized")}
                className="rounded-lg bg-[#1769aa] px-4 py-2.5 text-sm font-semibold text-white! transition hover:bg-[#12558b]"
              >
                Salvar preferências
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Personalizar
              </button>
            )}

            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="rounded-lg bg-[#1769aa] px-4 py-2.5 text-sm font-semibold text-white! transition hover:bg-[#12558b]"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      )}
    </>
  );
}
