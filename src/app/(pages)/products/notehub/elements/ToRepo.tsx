'use client';

import { clsx } from "clsx";
import { IconExternalLink } from "@tabler/icons-react";
import Link, { LinkProps } from "next/link";

export const ToRepo = ({ href, children, ...rest }: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
            'group ',
            'outline-primary outline-offset-4',
            'w-fit',
            'flex items-center gap-1',
            'font-medium text-sm dark:text-light text-dark',
            'transition-colors duration-333',
            'hover:text-primary',
            'focus-visible:text-primary',
            'active:text-primary',
        )}
        {...rest}
    >
        <span>{children}</span>
        <IconExternalLink
            aria-hidden="true"
            className={clsx(
                'transition-all duration-333',
                'group-hover:translate-x-1.5',
                'group-focus-visible:translate-x-1.5',
                'group-active:translate-x-1.5',
            )}
            size={20}
        />
    </Link>
)