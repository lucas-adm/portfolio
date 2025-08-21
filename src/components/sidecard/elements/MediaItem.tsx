import { clsx } from "clsx";
import Link, { LinkProps } from "next/link";

type MediaItemProps = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    icon: React.ElementType;
}

export const MediaItem = ({ icon: Icon, href, ...rest }: MediaItemProps) => (
    <li>
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
                'group outline-primary outline-offset-0',
                'p-1 rounded-full',
                'block',
                'shadow-custom',
                'transition-all duration-666',
                'animate-expand motion-safe:animate-expand motion-reduce:animate-none',
            )}
            {...rest}
        >
            <Icon
                size={24}
                className={clsx(
                    'dark:stroke-primary stroke-primary',
                    'transition-all duration-666',
                    'group-hover:dark:stroke-light group-hover:stroke-light',
                    'group-focus-visible:dark:stroke-light group-focus-visible:stroke-light',
                )}
            />
        </Link>
    </li>
)