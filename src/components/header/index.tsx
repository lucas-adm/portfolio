'use client';

import { Button } from "./elements";
import { clsx } from "clsx";
import { IconFolder, IconHome, IconMail, IconTool } from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");
    const [activeId, setActiveId] = useState<string>('');

    const items = useMemo(() => [
        { id: 'home', icon: IconHome, label: t('header.links.home') },
        { id: 'work', icon: IconFolder, label: t('header.links.work') },
        // { id: 'experience', icon: IconBriefcase2, label: t('header.links.experience') },
        { id: 'tools', icon: IconTool, label: t('header.links.tools') },
        { id: 'contact', icon: IconMail, label: t('header.links.contact') },
    ], [t]);

    useEffect(() => {
        const sections = items
            .map(i => document.getElementById(i.id))
            .filter(Boolean) as HTMLElement[];
        if (sections.length) {
            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) setActiveId(entry.target.id)
                    })
                },
                {
                    root: null,
                    threshold: 0.666
                }
            )
            sections.forEach(s => observer.observe(s));
            return () => observer.disconnect();
        }
        return;
    }, [items])

    return (
        <header aria-label="Main navigation"
            className={clsx(
                'z-800',
                'fixed top-10 left-1/2 -translate-x-1/2',
                'w-fit px-4 py-2 rounded-full',
                'dark:bg-light/33 bg-dark/33',
                'backdrop-blur',
            )}
            {...props}
        >
            <nav>
                <ul className="flex items-center gap-6">
                    {items.map((item, key) => (
                        <li key={key}>
                            <Button
                                icon={item.icon}
                                tooltip={item.label}
                                isActive={activeId === item.id}
                                navigateToId={item.id}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )

}