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
    const { changeLanguage } = useLanguage();

    const isActive = i18n.language === lng;

    const handleClick = (): void => {
        changeLanguage(lng);
        return;
    }

    const handleKeydown = (e: React.KeyboardEvent): void => {
        const key = e.key;
        if (key === 'Enter' || key === ' ') {
            changeLanguage(lng);
            return;
        }
        return;
    }

    return (
        <li role="none">
            <button
                type="button"
                role="menuitem"
                aria-current={isActive}
                onKeyDown={handleKeydown}
                onClick={handleClick}
                className={clsx(
                    'outline-violet-600 cursor-pointer',
                    'overflow-hidden',
                    'relative w-full min-h-[33px] px-2 py-1 rounded',
                    'flex items-center gap-2',
                    'transition-colors duration-300',
                    isActive
                        ? 'bg-violet-600/50'
                        : 'bg-transparent hover:bg-neutral-500/25 focus-visible:bg-neutral-500/25',
                )}
                {...rest}
            >
                <Ripple />
                <figure>
                    <Image
                        src={`/svgs/flags/${lng}.svg`}
                        alt={t(`aside.dropdowns.language.${lng}.alt`)}
                        width={25}
                        height={0}
                    />
                </figure>
                <span className="pl-2 border-l border-neutral-950/10 font-mono font-semibold text-sm text-[#141313]">
                    {t(`aside.dropdowns.language.${lng}.label`)}
                </span>
            </button>
        </li>
    )

}