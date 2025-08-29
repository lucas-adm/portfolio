import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

type LinkProps = Omit<NextLinkProps, 'href'> & {
    icon: React.ElementType;
    tooltip: string;
    isActive: boolean;
    navigateToId: string;
}

export const Link = ({ icon: Icon, tooltip, isActive, navigateToId, ...rest }: LinkProps) => {

    const pathname = usePathname();

    const handleClick = (ev: React.MouseEvent<HTMLAnchorElement>): void => {
        if (pathname === '/') {
            ev.preventDefault();
            const element = document.getElementById(navigateToId);
            if (element) return element.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }
        return sessionStorage.setItem('scrollTo', navigateToId);
    }

    return (
        <NextLink
            href={'/'}
            aria-label={tooltip}
            aria-current={isActive}
            onClick={handleClick}
            className={clsx(
                'group outline-primary whitespace-nowrap',
                'relative',
                'p-1 rounded-full',
                'block',
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
        </NextLink>
    )

}