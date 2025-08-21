import { clsx } from "clsx";
import { Ripple } from "@/components/misc";
import { usePreferences } from "@/hooks";

type ThemeItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    forTheme: 'dark' | 'light';
    icon: React.ElementType;
}

export const ThemeItem = ({ forTheme, icon: Icon, children, ...rest }: ThemeItemProps) => {

    const { preferences: { shouldUseDarkTheme }, setPreferences } = usePreferences();

    const isActive = forTheme === 'dark' ? shouldUseDarkTheme === true : shouldUseDarkTheme === false;

    const handleClick = (): void => {
        setPreferences({ shouldUseDarkTheme: !shouldUseDarkTheme });
        return;
    }

    const handleKeydown = (e: React.KeyboardEvent): void => {
        const key = e.key;
        if (key === 'Enter' || key === ' ') {
            setPreferences({ shouldUseDarkTheme: !shouldUseDarkTheme });
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
            <Icon aria-hidden="true" size={20} className="dark:fill-dark fill-light" />
            <span
                className={clsx(
                    'pl-2',
                    'border-l dark:border-dark/25 border-light/25',
                    'font-mono font-semibold text-sm insm:text-xs',
                    'dark:text-dark text-light',
                )}
            >
                {children}
            </span>
        </button>
    )

}