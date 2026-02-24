import { create } from "zustand";
import {
  KEY_LANGUAGE,
  KEY_THEME,
  SUPPORTED_LANGUAGES,
  THEMES,
} from "./use-app-store.constants";
import type { AppStore, Language, Theme } from "./use-app-store.types";
import { getI18n } from "react-i18next";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove(...THEMES);
  root.classList.add(theme);
};

export const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem(KEY_THEME);
  const isValidTheme = THEMES.includes(savedTheme as Theme);
  if (isValidTheme) {
    applyTheme(savedTheme as Theme);
    return savedTheme as Theme;
  }

  applyTheme("light");
  return "light";
};

export const getInitialLanguage = (): Language => {
  const i18n = getI18n();
  const savedLanguage = localStorage.getItem(KEY_LANGUAGE);
  const isValidLanguage = SUPPORTED_LANGUAGES.includes(
    savedLanguage as Language,
  );

  if (isValidLanguage && savedLanguage !== null) {
    i18n?.changeLanguage(savedLanguage);
    return savedLanguage as Language;
  }

  const defaultLanguage = i18n?.language?.startsWith("pt") ? "PT-BR" : "EN-US";
  i18n?.changeLanguage(defaultLanguage);
  localStorage.setItem(KEY_LANGUAGE, defaultLanguage);
  return defaultLanguage;
};

export const useAppStore = create<AppStore>((set, get) => ({
  theme: getInitialTheme(),
  language: getInitialLanguage(),

  setTheme: (theme) => {
    applyTheme(theme);
    localStorage.setItem(KEY_THEME, theme);
    set({ theme });
  },

  toggleTheme: () => {
    const newTheme = get().theme === "light" ? "dark" : "light";
    get().setTheme(newTheme);
  },

  setLanguage: (language) => {
    localStorage.setItem(KEY_LANGUAGE, language);
    getI18n().changeLanguage(language);
    set({ language });
  },

  toggleLanguage: () => {
    const current = get().language;
    const currentIndex = SUPPORTED_LANGUAGES.indexOf(current);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
    const nextLanguage = SUPPORTED_LANGUAGES[nextIndex];
    get().setLanguage(nextLanguage);
  },

  handleError: (error: unknown, action = "unknown_action") => {
    // TODO: implement error handling
    console.log(`Error during ${action}:`, error);
  },
}));
