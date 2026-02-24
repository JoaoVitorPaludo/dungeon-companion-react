import type { SUPPORTED_LANGUAGES, THEMES } from "./use-app-store.constants";

export type Theme = (typeof THEMES)[number];
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export interface AppStore {
  theme: Theme;
  //language: Language
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  handleError: (error: unknown, action?: string) => void;
  //setLanguage: (language: Language) => void
  //toggleLanguage: () => void
}
