"use client";

import * as React from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function detectPlatform() {
  if (typeof window === "undefined") return "none" as const;
  const ua = navigator.userAgent;
  const isDismissed = localStorage.getItem("besago-pwa-dismissed") === "true";
  if (isDismissed) return "none" as const;
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as { standalone?: boolean }).standalone === true;
  if (isStandalone) return "none" as const;
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  if (isIOS && isSafari) return "ios" as const;
  return "other" as const;
}

export function InstallPrompt() {
  const [platform, setPlatform] = React.useState(detectPlatform);
  const [deferredPrompt, setDeferredPrompt] = React.useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = React.useState(false);

  React.useEffect(() => {
    if (platform === "none" || installed) return;

    function onInstallPrompt(e: Event) {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setPlatform("other");
    }

    function onAppInstalled() {
      setInstalled(true);
      setDeferredPrompt(null);
      setPlatform("none");
    }

    window.addEventListener("beforeinstallprompt", onInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, [platform, installed]);

  function dismiss() {
    setPlatform("none");
    localStorage.setItem("besago-pwa-dismissed", "true");
  }

  async function install() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setInstalled(true);
    setDeferredPrompt(null);
    setPlatform("none");
  }

  if (installed || platform === "none") return null;

  if (platform === "ios") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6" role="alert" aria-label="Install Besago Ventures">
        <div className="mx-auto max-w-lg bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Install Besago Ventures</h3>
                  <p className="text-white/70 text-xs">Add to your Home Screen</p>
                </div>
              </div>
              <button onClick={dismiss} className="text-white/70 hover:text-white p-1 transition-colors" aria-label="Dismiss">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-5">
            <div className="space-y-3">
              {[
                { n: "1", t: "Tap the Share button", d: "It's the square icon with an arrow at the bottom of Safari" },
                { n: "2", t: '"Add to Home Screen"', d: "Scroll down and tap this option in the share menu" },
                { n: "3", t: 'Tap "Add"', d: "Besago Ventures will appear on your home screen" },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-xs">{s.n}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{s.t}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
              <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Use Safari on iOS — this feature isn&apos;t available in other browsers</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!deferredPrompt) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50" role="alert" aria-label="Install Besago Ventures">
      <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-in-up">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-foreground text-sm">Install Besago Ventures</h3>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                Install our app for faster access, offline browsing, and a better experience.
              </p>
              <div className="flex gap-2 mt-3">
                <button onClick={install} className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                  Install App
                </button>
                <button onClick={dismiss} className="px-4 py-2 text-muted-foreground text-xs font-medium rounded-lg hover:bg-muted transition-colors">
                  Not now
                </button>
              </div>
            </div>
            <button onClick={dismiss} className="text-muted-foreground hover:text-foreground p-1 transition-colors shrink-0" aria-label="Dismiss">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
