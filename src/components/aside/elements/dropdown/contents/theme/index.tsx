import { ColorItem, ThemeItem } from "./elements";
import { colors } from "@/utils";
import { IconMoonFilled, IconSquareFilled, IconSunFilled } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const ThemeContent = (props: React.HTMLAttributes<HTMLDivElement>) => {

    const { t } = useTranslation("global");

    return (
        <div
            className="p-1 flex flex-col gap-3"
            {...props}
        >
            <div role="group" aria-label="Themes" className="flex flex-col gap-1">
                <ThemeItem
                    forTheme="dark"
                    icon={IconMoonFilled}
                >
                    {t('aside.dropdowns.theme.dark')}
                </ThemeItem>
                <ThemeItem
                    forTheme="light"
                    icon={IconSunFilled}
                >
                    {t('aside.dropdowns.theme.light')}
                </ThemeItem>
            </div>
            <hr aria-hidden="true" className="pointer-events-none w-4/5 m-auto dark:text-dark/25 text-light/25" />
            <div role="group" aria-label="Colors" className="grid grid-cols-3">
                {Object.entries(colors).map(([name, c]) => (
                    <ColorItem
                        key={name}
                        shade={c}
                        icon={IconSquareFilled}
                    />
                ))}
            </div>
        </div>
    )

}