import { useEffect, useSyncExternalStore } from "react";

export type Language = "en" | "ar";

let currentLang: Language = "en";

if (typeof window !== "undefined") {
  const saved = localStorage.getItem("app_lang") as Language;
  if (saved === "en" || saved === "ar") {
    currentLang = saved;
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = saved;
    if (saved === "ar") {
      document.documentElement.classList.add("lang-ar");
    }
  }
}

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return currentLang;
}

function getServerSnapshot() {
  return "en";
}

export function setLanguage(newLang: Language) {
  currentLang = newLang;
  if (typeof window !== "undefined") {
    localStorage.setItem("app_lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    if (newLang === "ar") {
      document.documentElement.classList.add("lang-ar");
    } else {
      document.documentElement.classList.remove("lang-ar");
    }
  }
  listeners.forEach((l) => l());
}

export function toggleLanguage() {
  setLanguage(currentLang === "en" ? "ar" : "en");
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useLanguage() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isAr = lang === "ar";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = isAr ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      if (isAr) {
        document.documentElement.classList.add("lang-ar");
      } else {
        document.documentElement.classList.remove("lang-ar");
      }
    }
  }, [lang, isAr]);

  return {
    lang,
    setLang: setLanguage,
    toggleLang: toggleLanguage,
    isAr,
    t: (en: string, ar: string) => (isAr ? ar : en),
  };
}
