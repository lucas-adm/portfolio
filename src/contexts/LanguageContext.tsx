'use client';

import { createContext, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Language } from '@/utils';
import { translation } from '@/translations';
import i18next from 'i18next';

type LanguageContextType = {
    currentLanguage: Language;
    changeLanguage: (lng: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {

    const [ready, setReady] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<Language>('pt');

    useEffect(() => {
        i18next.init({
            interpolation: { escapeValue: false },
            lng: 'pt',
            resources: {
                pt: { global: translation.pt },
                en: { global: translation.en },
                es: { global: translation.es },
            },
        }).then(() => {
            setCurrentLanguage('pt');
            setReady(true);
        })
    }, [])

    const changeLanguage = (lng: Language): void => {
        i18next.changeLanguage(lng);
        setCurrentLanguage(lng);
    }

    if (ready) return (
        <I18nextProvider i18n={i18next}>
            <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
                {children}
            </LanguageContext.Provider>
        </I18nextProvider>
    )

    return <></>;

}