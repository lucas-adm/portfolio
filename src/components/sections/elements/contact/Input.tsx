import { clsx } from "clsx";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        className={clsx(
            'outline-none',
            'w-full p-3 rounded-md',
            'font-medium text-sm dark:text-light text-dark',
            'dark:placeholder:text-light/25 placeholder:text-dark/25',
            'dark:bg-light/5 bg-dark/5',
            'transition-colors duration-333',
            'focus:bg-primary/25',
            'focus-visible:bg-primary/25',
        )}
        {...props}
    />
)