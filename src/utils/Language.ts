export const Languages = ['pt', 'he', 'de', 'en', 'es', 'fr'] as const;

export type Language = typeof Languages[number];

export const detectBrowserLanguage = (): Language => {
    const getLanguageCode = (lang: string): string => lang.split('-')[0].toLowerCase();
    const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    const systemLangCode = getLanguageCode(systemLocale) as Language;
    if (Languages.includes(systemLangCode)) return systemLangCode;
    const browserLanguages = navigator.languages || [navigator.language];
    for (const lang of browserLanguages) {
        const langCode = getLanguageCode(lang) as Language;
        if (Languages.includes(langCode)) return langCode;
    }
    return 'en';
}