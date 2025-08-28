import { clsx } from "clsx";
import { Ripple } from "@/components/misc";
import { useTranslation } from "react-i18next";
import Link, { LinkProps } from "next/link";

export const ToViewLive = ({ href, ...rest }: LinkProps) => {

    const { t } = useTranslation("global");

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
                'outline-offset-2 outline-primary',
                'block w-fit px-4 py-2 rounded-md',
                'text-sm text-light',
                'bg-primary',
                'shadow-custom',
                'transition-all duration-333',
                'active:scale-90 active:bg-secondary',
                'hover:scale-95',
                'focus-visible:scale-95',
                'animate-shine motion-safe:animate-shine motion-reduce:animate-none',
            )}
            {...rest}
        >
            <Ripple />
            {t('pages.products.notehub.view')}
        </Link>
    )

}