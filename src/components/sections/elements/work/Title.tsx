import { clsx } from "clsx";

export const Title = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
        className={clsx(
            'tracking-wide font-bold text-2xl dark:text-light text-dark',
            'insm:text-lg',
            'transition-colors duration-333',
            'group-hover:text-primary',
            'group-focus-within:text-primary',
        )}
        {...props}
    />
)