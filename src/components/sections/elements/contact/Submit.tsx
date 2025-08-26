import { Ripple } from "@/components/misc";
import { clsx } from "clsx";

export const Submit = ({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        type="submit"
        className={clsx(
            'cursor-pointer outline-offset-2 outline-primary',
            'w-full px-6 py-2 rounded',
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