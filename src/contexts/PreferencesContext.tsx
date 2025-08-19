'use client';

import { createContext, useCallback, useEffect, useState } from "react";
import { Preferences, storePreferences } from "@/utils";

type PreferencesContextType = {
    preferences: Preferences;
    setPreferences: (data: Partial<Preferences>) => void;
}

export const PreferencesContext = createContext<PreferencesContextType>({} as PreferencesContextType);

export const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {

    const [preferences, setPreferences] = useState<Preferences>({} as Preferences);

    const setter = useCallback((data: Partial<Preferences>) => {
        const prefs: Preferences = {
            shouldUseDarkTheme: data.shouldUseDarkTheme ?? preferences.shouldUseDarkTheme ?? false,
            useLanguage: data.useLanguage ?? preferences.useLanguage ?? 'pt',
            useColors: {
                primary: data.useColors?.primary ?? preferences.useColors.primary ?? 'oklch(0.606 0.25 292.717)',
                secondary: data.useColors?.secondary ?? preferences.useColors.secondary ?? 'oklch(0.38 0.189 293.745)',
            }
        }
        localStorage.setItem('preferences', JSON.stringify(prefs));
        return setPreferences(prefs);
    }, [preferences])

    useEffect(() => {
        storePreferences();
        setPreferences(JSON.parse(localStorage.getItem('preferences') ?? '{}'));
    }, [])

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            setter({ shouldUseDarkTheme: e.matches })
        }
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [setter])

    useEffect(() => {
        if (preferences.shouldUseDarkTheme) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }, [preferences.shouldUseDarkTheme])

    useEffect(() => {
        if (preferences.useColors) {
            document.documentElement.style.setProperty("--primary", preferences.useColors.primary);
            document.documentElement.style.setProperty("--secondary", preferences.useColors.secondary);
        }
    }, [preferences.useColors])

    useEffect(() => {
        if (preferences.useLanguage) {
            document.documentElement.lang = preferences.useLanguage;
        }
    }, [preferences.useLanguage])

    return (
        <PreferencesContext.Provider value={{ preferences, setPreferences: setter }}>
            {children}
        </PreferencesContext.Provider>
    )

}