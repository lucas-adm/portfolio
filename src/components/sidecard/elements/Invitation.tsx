'use client';

import { clsx } from "clsx";
import { navigateToItem } from "@/utils";
import { Ripple } from "@/components/misc";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

export const Invitation = ({ children, ...rest }: Omit<LinkProps, 'href'> & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {

    const pathname = usePathname();

    return (
        <Link
            href={'/'}
            onClick={navigateToItem(pathname, 'contact')}
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
        </Link>
    )

}