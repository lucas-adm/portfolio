'use client';

import { clsx } from "clsx";
import { IconArrowBadgeUp } from "@tabler/icons-react"
import { Ripple } from "../misc";
import { useScrollProgress } from "@/hooks";
import { useTranslation } from "react-i18next";

export const BackToTop = () => {

    const { t } = useTranslation("global");
    const completion = useScrollProgress();

    const isHidden = completion < 33;

    const handleBackToTop = (): void => {
        const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: isReducedMotion ? 'instant' : 'smooth' });
        document.body.focus();
    }

    return (
        <div
            aria-hidden={isHidden}
            className={clsx(
                'z-800 fixed right-5 insm:right-auto insm:left-5 bottom-5',
                'transition-all duration-333 ease-out',
                isHidden
                    ? 'translate-y-10 opacity-0 invisible pointer-events-none'
                    : 'translate-y-0 opacity-100 visible pointer-events-auto'
            )}
        >
            <button
                type="button"
                aria-label={t('backToTop')}
                tabIndex={isHidden ? -1 : 0}
                onClick={handleBackToTop}
                className={clsx(
                    'cursor-pointer outline-offset-4 outline-primary',
                    'relative overflow-hidden',
                    'flex items-center justify-center',
                    'rounded-full',
                    'dark:bg-light/33 bg-dark/33',
                    'shadow-custom',
                    'transition-all duration-333',
                    'active:scale-90',
                    'hover:scale-95',
                    'focus-visible:scale-95',
                    'animate-expand motion-safe:animate-expand motion-reduce:animate-none',
                )}
            >
                <Ripple />
                <IconArrowBadgeUp aria-hidden="true" size={33} className="stroke-0 fill-light" />
            </button>
        </div>
    )

}