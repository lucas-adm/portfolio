import { clsx } from "clsx";
import { forwardRef } from "react";
import { Ripple } from "@/components/misc";

type ItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    figure?: React.ReactNode;
    icon?: React.ElementType;
    label: string;
    isDropdownOpen: boolean;
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Item = forwardRef<HTMLButtonElement, ItemProps>(({ figure, icon: Icon, label, isDropdownOpen, setIsDropdownOpen, children, ...rest }, ref) => (
    <li className="group relative min-w-[135px] insm:min-w-[127px] min-h-[33px] rounded-full">
        <button
            ref={ref}
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={clsx(
                'z-10 cursor-pointer overflow-hidden',
                'custom-outline',
                'relative w-full h-full px-3 py-1 rounded-full',
                'flex items-center gap-2',
                'transition-transform',
                'active:scale-95',
                'before:pointer-events-none',
                'before:[transform:translateZ(0)]',
                'before:-z-10 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2',
                'before:w-[333px] before:h-[333px] before:rounded-full',
                'dark:before:bg-light before:bg-dark',
                'before:transition-all before:duration-[666ms]',
                'hover:before:shadow-[inset_0_0_0_175px_var(--color-primary)]',
                'active:before:shadow-[inset_0_0_0_175px_var(--color-secondary)]',
                isDropdownOpen && 'before:shadow-[inset_0_0_0_175px_var(--color-primary)]',
            )}
            {...rest}
        >
            <Ripple />
            {figure ? <figure>{figure}</figure> : <></>}
            {Icon
                ?
                <Icon
                    aria-hidden="true"
                    size={25}
                    className={clsx(
                        'dark:fill-dark fill-light',
                        'transition-colors duration-1000',
                        'group-hover:fill-light!',
                        'group-active:fill-light!',
                        isDropdownOpen && 'fill-light!',
                    )}
                />
                :
                <></>
            }
            <span
                className={clsx(
                    'pl-2 border-l dark:border-dark/25 border-light/25',
                    'font-mono font-semibold text-sm insm:text-xs',
                    'dark:text-dark text-light',
                    'transition-colors duration-1000',
                    'group-hover:text-light!',
                    'group-active:text-light!',
                    isDropdownOpen && 'text-light!',
                )}
            >
                {label}
            </span>
        </button>
        {children}
    </li >
))

Item.displayName = "SidebarDropdownTriggerButton";