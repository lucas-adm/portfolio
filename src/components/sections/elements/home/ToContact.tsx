import { clsx } from "clsx";
import { Ripple } from "@/components/misc";
import { scrollToItem } from "@/utils";

export const ToContact = ({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        type="button"
        onClick={scrollToItem('contact')}
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