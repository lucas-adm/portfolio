import { Language } from "./Language";

export const colors = {
    red: {
        primary: 'oklch(0.637 0.237 25.331)',
        secondary: 'oklch(0.396 0.141 25.723)'
    },
    orange: {
        primary: 'oklch(0.705 0.213 47.604)',
        secondary: 'oklch(0.408 0.123 38.172)'
    },
    amber: {
        primary: 'oklch(0.769 0.188 70.08)',
        secondary: 'oklch(0.414 0.112 45.904)'
    },
    yellow: {
        primary: 'oklch(0.795 0.184 86.047)',
        secondary: 'oklch(0.421 0.095 57.708)'
    },
    lime: {
        primary: 'oklch(0.768 0.233 130.85)',
        secondary: 'oklch(0.405 0.101 131.063)'
    },
    green: {
        primary: 'oklch(0.723 0.219 149.579)',
        secondary: 'oklch(0.393 0.095 152.535)'
    },
    emerald: {
        primary: 'oklch(0.696 0.17 162.48)',
        secondary: 'oklch(0.378 0.077 168.94)'
    },
    teal: {
        primary: 'oklch(0.704 0.14 182.503)',
        secondary: 'oklch(0.386 0.063 188.416)'
    },
    cyan: {
        primary: 'oklch(0.715 0.143 215.221)',
        secondary: 'oklch(0.398 0.07 227.392)'
    },
    sky: {
        primary: 'oklch(0.685 0.169 237.323)',
        secondary: 'oklch(0.391 0.09 240.876)'
    },
    blue: {
        primary: 'oklch(0.623 0.214 259.815)',
        secondary: 'oklch(0.379 0.146 265.522)'
    },
    indigo: {
        primary: 'oklch(0.585 0.233 277.117)',
        secondary: 'oklch(0.359 0.144 278.697)'
    },
    violet: {
        primary: 'oklch(0.606 0.25 292.717)',
        secondary: 'oklch(0.38 0.189 293.745)'
    },
    purple: {
        primary: 'oklch(0.627 0.265 303.9)',
        secondary: 'oklch(0.381 0.176 304.987)'
    },
    fuchsia: {
        primary: 'oklch(0.667 0.295 322.15)',
        secondary: 'oklch(0.401 0.17 325.612)'
    },
    pink: {
        primary: 'oklch(0.656 0.241 354.308)',
        secondary: 'oklch(0.408 0.153 2.432)'
    },
    rose: {
        primary: 'oklch(0.645 0.246 16.439)',
        secondary: 'oklch(0.41 0.159 10.272)'
    },
}

export type Color = typeof colors.violet;

export type Preferences = {
    shouldUseDarkTheme: boolean;
    useLanguage: Language;
    useColors: Color;
}

export const storePreferences = (): void => {
    if (localStorage.getItem('preferences')) return;
    const pref: Preferences = {
        shouldUseDarkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
        useLanguage: 'pt',
        useColors: {
            primary: 'oklch(0.606 0.25 292.717)',
            secondary: 'oklch(0.38 0.189 293.745)',
        },
    }
    localStorage.setItem('preferences', JSON.stringify(pref));
}