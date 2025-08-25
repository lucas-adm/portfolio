'use client';

import { clsx } from "clsx";
import { Dropdown, Item, LanguageContent, ThemeContent } from "./elements"
import { IconMoonFilled } from "@tabler/icons-react";
import { useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export const SideMenu = (props: React.HTMLAttributes<HTMLElement>) => {

    const [t, i18n] = useTranslation("global");

    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState<boolean>(false);
    const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState<boolean>(false);

    const languageTriggerRef = useRef<HTMLButtonElement | null>(null);
    const themeTriggerRef = useRef<HTMLButtonElement | null>(null);

    const languageTriggerId = useId();
    const languageMenuId = useId();

    const themeTriggerId = useId();
    const themeMenuId = useId();

    return (
        <aside aria-label="Side menu" {...props}>
            <ul className={clsx(
                'z-900 fixed',
                'top-5 right-5 bottom-auto',
                'insm:top-auto insm:bottom-5',
                'flex flex-col gap-2',
            )}>
                <Item
                    ref={languageTriggerRef}
                    id={languageTriggerId}
                    aria-controls={languageMenuId}
                    aria-haspopup="menu"
                    aria-expanded={isLanguageDropdownOpen}
                    figure={<Image
                        src={`/svgs/flags/${i18n.language}.svg`}
                        alt={t('aside.buttons.language.alt')}
                        width={25} height={0}
                        className="pointer-events-none select-none" />
                    }
                    label={t('aside.buttons.language.label')}
                    isDropdownOpen={isLanguageDropdownOpen}
                    setIsDropdownOpen={setIsLanguageDropdownOpen}
                >
                    <Dropdown
                        triggerRef={languageTriggerRef}
                        isDropdownOpen={isLanguageDropdownOpen}
                        setIsDropdownOpen={setIsLanguageDropdownOpen}
                    >
                        <LanguageContent
                            id={languageMenuId}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby={languageTriggerId}
                            aria-hidden={!isLanguageDropdownOpen}
                            hidden={!isLanguageDropdownOpen}
                        />
                    </Dropdown>
                </Item>
                <Item
                    ref={themeTriggerRef}
                    id={themeTriggerId}
                    aria-controls={themeMenuId}
                    aria-haspopup="menu"
                    aria-expanded={isThemeDropdownOpen}
                    icon={IconMoonFilled}
                    label={t('aside.buttons.theme.label')}
                    isDropdownOpen={isThemeDropdownOpen}
                    setIsDropdownOpen={setIsThemeDropdownOpen}
                >
                    <Dropdown
                        triggerRef={themeTriggerRef}
                        isDropdownOpen={isThemeDropdownOpen}
                        setIsDropdownOpen={setIsThemeDropdownOpen}
                    >
                        <ThemeContent
                            id={themeMenuId}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby={themeTriggerId}
                            aria-hidden={!isThemeDropdownOpen}
                            hidden={!isThemeDropdownOpen}
                        />
                    </Dropdown>
                </Item>
            </ul>
        </aside>
    )

}