'use client';

import { clsx } from "clsx";
import { Ripple } from "@/components/misc";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

export const Invitation = ({ children, ...rest }: Omit<LinkProps, 'href'> & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {

    const pathname = usePathname();

    const handleClick = (ev: React.MouseEvent<HTMLAnchorElement>): void => {
        if (pathname === '/') {
            ev.preventDefault();
            const element = document.getElementById('contact');
            if (element) return element.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }
        return sessionStorage.setItem('scrollTo', 'contact');
    }

    return (
        <Link
            href={'/'}
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
        </Link>
    )

}