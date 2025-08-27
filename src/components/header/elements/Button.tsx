import { clsx } from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: React.ElementType;
    tooltip: string;
    isActive: boolean;
    navigateToId: string;
}

export const Button = ({ icon: Icon, tooltip, isActive, navigateToId, ...rest }: ButtonProps) => {

    const handleClick = () => {
        const element = document.getElementById(navigateToId);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
    }

    return (
        <button
            type="button"
            aria-label={tooltip}
            aria-current={isActive}
            onClick={handleClick}
            className={clsx(
                'group cursor-pointer outline-primary',
                'relative',
                'p-1 rounded-full',
                'after:-z-10 after:origin-center',
                'after:absolute after:inset-0 after:rounded-full',
                isActive
                    ? 'after:scale-100 after:bg-primary'
                    : 'after:scale-0 after:bg-transparent',
                'after:transition-all after:duration-333',
            )}
            {...rest}
        >
            <Icon aria-hidden="true" size={24} className="stroke-light" />
            <span
                aria-hidden="true"
                role="tooltip"
                className={clsx(
                    'pointer-events-none opacity-0',
                    'absolute top-0 left-1/2 -translate-x-1/2 translate-y-0',
                    'rounded-full px-2 py-1',
                    'font-medium text-xs text-light',
                    'dark:bg-light/33 bg-dark/33',
                    'transition-all duration-400 ease-in-out',
                    'group-hover:opacity-100 group-hover:translate-y-12',
                    'group-focus-visible:opacity-100 group-focus-visible:translate-y-12',
                )}
            >
                {tooltip}
            </span>
        </button>
    )

}