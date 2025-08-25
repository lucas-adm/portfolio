'use client';

import { Button } from "./elements";
import { clsx } from "clsx";
import { IconBriefcase2, IconFolder, IconHome, IconMail, IconTool } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const Header = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <header aria-label="Main navigation"
            className={clsx(
                'z-999',
                'fixed top-10 left-1/2 -translate-x-1/2',
                'w-fit px-4 py-2 rounded-full',
                'dark:bg-light/33 bg-dark/33',
                'backdrop-blur',
            )}
            {...props}
        >
            <nav>
                <ul className="flex items-center gap-6">
                    <li><Button icon={IconHome} tooltip={t('header.links.home')} /></li>
                    <li><Button icon={IconFolder} tooltip={t('header.links.work')} /></li>
                    <li><Button icon={IconBriefcase2} tooltip={t('header.links.experience')} /></li>
                    <li><Button icon={IconTool} tooltip={t('header.links.tools')} /></li>
                    <li><Button icon={IconMail} tooltip={t('header.links.contact')} /></li>
                </ul>
            </nav>
        </header>
    )

}