'use client';

import { clsx } from "clsx";
import { Description, Invitation, Location, MediaItem, Name, Photo } from "./elements";
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const SideCard = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <aside
            className={clsx(
                'overflow-hidden relative',
                'max-w-full w-[344px] max-h-full h-[640px] rounded-xl',
                'inlg:w-full inlg:h-full inlg:rounded-none',
                'flex flex-col items-center justify-center',
                'dark:bg-light/5 bg-dark/5',
                'transition-colors duration-666',
                'after:pointer-events-none after:absolute after:top-0 after:left-0',
                'after:-translate-1/3 insm:after:-translate-1/2',
                'after:w-36 after:h-36 after:rounded-full',
                'after:border-4 after:border-dashed after:border-primary',
                'after:drop-shadow-custom',
                'after:transition-colors after:duration-600',
                'before:pointer-events-none before:absolute before:bottom-0 before:right-0',
                'before:translate-1/3 insm:before:translate-1/2',
                'before:w-36 before:h-36 before:rounded-full',
                'before:border-4 before:border-dashed before:border-primary',
                'before:drop-shadow-custom',
                'before:transition-colors before:duration-600',
            )}
            {...props}
        >
            <Photo />
            <Name id="profile-title">{t('pages.main.sections.profile.name')}</Name>
            <Description id="profile-desc">{t('pages.main.sections.profile.description')}</Description>
            <Location>{t('pages.main.sections.profile.location')}</Location>
            <nav className="my-8">
                <ul className="flex items-center gap-6">
                    <MediaItem
                        aria-label={t('pages.main.sections.profile.socials.github')}
                        href='https://github.com/lucas-adm'
                        icon={IconBrandGithub}
                    />
                    <MediaItem
                        aria-label={t('pages.main.sections.profile.socials.whatsapp')}
                        href='https://wa.me/5535998963318'
                        icon={IconBrandWhatsapp}
                    />
                    <MediaItem
                        aria-label={t('pages.main.sections.profile.socials.linkedin')}
                        href='https://linkedin.com/in/lucas-admoraes'
                        icon={IconBrandLinkedin}
                    />
                </ul>
            </nav>
            <Invitation>{t('pages.main.sections.profile.button')}</Invitation>
        </aside>
    )

}