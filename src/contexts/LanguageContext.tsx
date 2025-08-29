'use client';

import { createContext, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Language } from '@/utils';
import { translation } from '@/translations';
import { usePreferences } from '@/hooks';
import i18next from 'i18next';

type LanguageContextType = {
    setLanguage: (lng: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {

    const { preferences, setPreferences } = usePreferences();

    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (preferences.useLanguage) {
            i18next.init({
                interpolation: { escapeValue: false },
                lng: preferences.useLanguage,
                resources: {
                    pt: { global: translation.pt },
                    he: { global: translation.he },
                    de: { global: translation.de },
                    en: { global: translation.en },
                    es: { global: translation.es },
                    fr: { global: translation.fr },
                },
            }).then(() => {
                setReady(true);
            })
            return;
        }
        return;
    }, [preferences.useLanguage])

    const setLanguage = (lng: Language): void => {
        i18next.changeLanguage(lng);
        setPreferences({ useLanguage: lng });
    }

    if (ready) return (
        <I18nextProvider i18n={i18next}>
            <LanguageContext.Provider value={{ setLanguage }}>
                {children}
            </LanguageContext.Provider>
        </I18nextProvider>
    )

    return <></>;

}