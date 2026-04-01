// src/lib/i18n/index.ts
import en from "../../locales/en";
import zh from "../../locales/zh";

export type Locale = "en" | "zh";

const messages = { en, zh };
type MessageCatalog = Record<string, Record<string, string>>;

let currentLocale: Locale = "en";

export function setLocale(locale: Locale) {
  currentLocale = locale;
}

export function t(path: string): string {
  // path: 'dashboard.title' or 'portfolio.tokens'
  const [ns, key] = path.split(".");
  const catalog = messages[currentLocale] as MessageCatalog;
  return catalog[ns]?.[key] || path;
}

export function getLocale() {
  return currentLocale;
}

// Usage: t('dashboard.title')
// This simple approach can be replaced with a more robust i18n lib as needed.
