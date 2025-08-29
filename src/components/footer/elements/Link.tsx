import { clsx } from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

type LinkProps = NextLinkProps & {
    children: React.ReactNode;
}

export const Link = ({ href, children, ...rest }: LinkProps) => (
    <NextLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
            'outline-primary outline-offset-4',
            'underline-offset-4',
            'font-semibold text-primary',
            'transition-colors duration-333',
            'hover:underline',
            'focus-visible:underline',
        )}
        {...rest}
    >
        <span>{children}</span>
    </NextLink>
)