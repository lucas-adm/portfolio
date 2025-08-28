'use client';

import { clsx } from "clsx";
import { IconArrowLeft } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import Link, { LinkProps } from "next/link";

export const GoHome = (props: Omit<LinkProps, 'href'>) => {

    const { t } = useTranslation("global");

    const handleClick = () => sessionStorage.setItem('scrollTo', 'work');

    return (
        <Link
            href='/'
            onClickCapture={handleClick}
            className={clsx(
                'group ',
                'outline-primary outline-offset-4',
                'w-fit',
                'flex items-center gap-3',
                'font-medium dark:text-light text-dark',
                'transition-colors duration-333',
                'hover:text-primary',
                'focus-visible:text-primary',
                'active:text-primary',
            )}
            {...props}
        >
            <IconArrowLeft
                aria-hidden="true"
                className={clsx(
                    'transition-all duration-333',
                    'group-hover:-translate-x-1.5',
                    'group-focus-visible:-translate-x-1.5',
                    'group-active:-translate-x-1.5',
                )}
                size={24}
            />
            <span>{t('pages.products.goHome')}</span>
        </Link>
    )

}