import { clsx } from "clsx";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export const Photo = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <figure
            className={clsx(
                'overflow-hidden',
                'relative',
                'w-[240px] h-[280px] rounded-xl',
            )}
            {...props}
        >
            <Image
                fill
                src="/imgs/profile.png"
                alt={t('pages.main.sections.profile.photo.alt')}
                className="pointer-events-none select-none object-cover"
            />
        </figure>
    )

}