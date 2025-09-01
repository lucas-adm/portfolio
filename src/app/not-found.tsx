'use client';

import { LanguageProvider, PreferencesProvider } from "@/contexts";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const NotFoundComponent = () => {

    const { t } = useTranslation("global");

    return (
        <main
            aria-labelledby="notfound-title"
            className="w-screen max-w-full min-h-screen inmd:min-h-svh flex items-center justify-center gap-4 dark:bg-dark bg-light"
        >
            <Link
                href={'/'}
                className="outline-offset-8 outline-primary relative w-[66px] h-[66px] rounded"
            >
                <Image
                    fill
                    src="/imgs/logo.png"
                    alt="Logo"
                    priority
                    className="select-none pointer-events-none dark:invert invert-0 drop-shadow-[0_0_33px] drop-shadow-primary"
                />
            </Link>
            <h1
                id="notfound-title"
                className="py-2 pl-4 border-l-2 border-primary dark:text-light text-dark"
            >
                {t('notFound')}
            </h1>
        </main>
    )

}

const NotFound = () => {

    return (
        <PreferencesProvider>
            <LanguageProvider>
                <NotFoundComponent />
            </LanguageProvider>
        </PreferencesProvider>
    )

}

export default NotFound;