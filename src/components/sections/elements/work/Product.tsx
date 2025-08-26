import { clsx } from "clsx";

export const Product = (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li
        className={clsx(
            'group overflow-hidden',
            'relative w-fit rounded-xl',
            'dark:bg-light/5 bg-dark/5',
            'transition-colors duration-333',
        )}
        {...props} />
)