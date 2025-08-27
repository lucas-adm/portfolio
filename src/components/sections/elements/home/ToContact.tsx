import { clsx } from "clsx";
import { Ripple } from "@/components/misc";

export const ToContact = ({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {

    const handleClick = () => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={clsx(
                'cursor-pointer outline-offset-2 outline-primary',
                'px-6 py-2 rounded',
                'font-semibold text-light text-sm',
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
            {children}
        </button>
    )

}