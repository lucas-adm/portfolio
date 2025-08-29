'use client';

import { Link, P } from "./elements";
import { useTranslation } from "react-i18next";

export const Footer = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <footer
            className="p-4 dark:bg-dark bg-light transition-colors duration-666"
            {...props}
        >
            <P>
                {t('footer.author.text')}{' '}
                <Link href='https://github.com/lucas-adm'>
                    {t('footer.author.name')}
                </Link>
                {' '}|{' '}
                {t('footer.tech.text')}{' '}
                <Link href='https://nextjs.org'>
                    {t('footer.tech.name')}
                </Link>
            </P>
        </footer>
    )

}