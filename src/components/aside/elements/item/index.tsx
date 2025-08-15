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
    <li className="group relative min-w-[135px] min-h-[33px] rounded-full">
        <button
            ref={ref}
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={clsx(
                'outline-violet-600',
                'z-10 cursor-pointer overflow-hidden',
                'relative w-full h-full px-3 py-1 rounded-full',
                'flex items-center gap-2',
                'transition-transform',
                'active:scale-95',
                'before:pointer-events-none',
                'before:[transform:translateZ(0)]',
                'before:-z-10 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2',
                'before:w-[333px] before:h-[333px] before:rounded-full',
                'before:bg-[#fefeff]',
                'before:transition-shadow before:duration-[666ms]',
                'hover:before:shadow-[inset_0_0_0_175px_rgb(124,58,237)]',
                'active:before:shadow-[inset_0_0_0_175px_rgb(77,23,154)]',
                isDropdownOpen && 'before:shadow-[inset_0_0_0_175px_rgb(124,58,237)]',
            )}
            {...rest}
        >
            <Ripple />
            {figure ? <figure>{figure}</figure> : <></>}
            {Icon
                ?
                <Icon
                    size={25}
                    className={clsx(
                        'fill-[#141313]',
                        'transition-colors duration-1000',
                        'group-hover:fill-[#fefeff]',
                        'group-active:fill-[#fefeff] ',
                        isDropdownOpen && 'fill-[#fefeff]',
                    )}
                />
                :
                <></>
            }
            <span
                className={clsx(
                    'pl-2 border-l border-neutral-950/10',
                    'font-mono font-semibold text-sm text-[#141313]',
                    'transition-colors duration-1000',
                    'group-hover:text-[#fefeff]',
                    'group-active:text-[#fefeff]',
                    isDropdownOpen && 'text-[#fefeff]',
                )}
            >
                {label}
            </span>
        </button>
        {children}
    </li >
))

Item.displayName = "SidebarDropdownTriggerButton";