import { clsx } from "clsx";
import { Language } from "@/utils";
import { Ripple } from "@/components/misc";
import { useLanguage } from "@/hooks";
import { useTranslation } from "react-i18next";
import Image from "next/image";

type ItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    lng: Language;
}

export const Item = ({ lng, ...rest }: ItemProps) => {

    const [t, i18n] = useTranslation("global");
    const { setLanguage } = useLanguage();

    const isActive = i18n.language === lng;

    const handleClick = (): void => {
        setLanguage(lng);
        return;
    }

    const handleKeydown = (e: React.KeyboardEvent): void => {
        const key = e.key;
        if (key === 'Enter' || key === ' ') {
            setLanguage(lng);
            return;
        }
        return;
    }

    return (
        <button
            type="button"
            role="menuitem"
            aria-current={isActive}
            onKeyDown={handleKeydown}
            onClick={handleClick}
            className={clsx(
                'cursor-pointer outline-primary',
                'overflow-hidden',
                'relative w-full min-h-[33px] px-2 py-1 rounded',
                'flex items-center gap-2',
                'transition-colors duration-333',
                isActive
                    ? 'bg-primary/50'
                    : 'bg-transparent hover:bg-neutral/25 focus-visible:bg-neutral/25',
            )}
            {...rest}
        >
            <Ripple />
            <figure className="flex-none">
                <Image
                    src={`/svgs/flags/${lng}.svg`}
                    alt={t(`aside.dropdowns.language.${lng}.alt`)}
                    width={25}
                    height={0}
                    className="pointer-events-none select-none"
                />
            </figure>
            <span
                className={clsx(
                    'pl-2',
                    'border-l dark:border-dark/25 border-light/25',
                    'font-mono font-semibold text-sm insm:text-xs',
                    'dark:text-dark text-light',
                )}
            >
                {t(`aside.dropdowns.language.${lng}.label`)}
            </span>
        </button>
    )

}