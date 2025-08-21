import { clsx } from "clsx";
import { Color } from "@/utils";
import { Ripple } from "@/components/misc";
import { usePreferences } from "@/hooks";

type ColorItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    shade: Color;
    icon: React.ElementType;
}

export const ColorItem = ({ shade, icon: Icon, ...rest }: ColorItemProps) => {

    const { preferences, setPreferences } = usePreferences();

    const isActive = shade.primary === preferences.useColors.primary;

    const handleClick = (): void => {
        setPreferences({
            useColors: {
                primary: shade.primary,
                secondary: shade.secondary
            }
        })
        return;
    }

    const handleKeydown = (e: React.KeyboardEvent): void => {
        const key = e.key;
        if (key === 'Enter' || key === ' ') {
            setPreferences({
                useColors: {
                    primary: shade.primary,
                    secondary: shade.secondary
                }
            })
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
                'relative w-fit m-auto p-1 rounded',
                'flex items-center gap-2',
                'transition-colors duration-333',
                isActive
                    ? 'bg-primary/50'
                    : 'bg-transparent hover:bg-neutral/25 focus-visible:bg-neutral/25',
            )}
            {...rest}
        >
            <Ripple />
            <Icon aria-hidden="true" size={22} style={{ fill: shade.primary }} />
        </button>
    )

}