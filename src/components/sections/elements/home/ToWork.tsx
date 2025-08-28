import { clsx } from "clsx";
import { IconArrowRight } from "@tabler/icons-react";

export const ToWork = ({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {

    const handleClick = () => {
        const element = document.getElementById('work');
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={clsx(
                'group',
                'cursor-pointer outline-primary outline-offset-4',
                'min-w-[135px]',
                'flex items-center gap-3',
                'font-medium dark:text-light text-dark',
                'transition-colors duration-333',
                'hover:text-primary',
                'focus-visible:text-primary',
                'active:text-primary',
            )}
            {...rest}
        >
            <span>{children}</span>
            <IconArrowRight
                aria-hidden="true"
                className={clsx(
                    'transition-all duration-333',
                    'group-hover:translate-x-1.5',
                    'group-focus-visible:translate-x-1.5',
                    'group-active:translate-x-1.5',
                )}
                size={20}
            />
        </button>
    )

}