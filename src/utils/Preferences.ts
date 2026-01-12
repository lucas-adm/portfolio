import { Color } from "./Colors";
import { detectBrowserLanguage, Language } from "./Language";

export type Preferences = {
    shouldUseDarkTheme: boolean;
    useLanguage: Language;
    useColors: Color;
}

export const storePreferences = (): void => {
    if (localStorage.getItem('preferences')) return;
    const pref: Preferences = {
        shouldUseDarkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
        useLanguage: detectBrowserLanguage(),
        useColors: {
            primary: 'oklch(0.606 0.25 292.717)',
            secondary: 'oklch(0.38 0.189 293.745)',
        }
    }
    localStorage.setItem('preferences', JSON.stringify(pref));
}