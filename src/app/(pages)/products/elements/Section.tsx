import { clsx } from "clsx";

export const Section = ({ className, ...rest }: React.HTMLAttributes<HTMLElement>) => (
    <section
        className={clsx(
            'max-w-full w-[666px] scroll-mt-16 ml-36 pt-44 pb-22',
            'inlg:pt-33',
            'flex flex-col justify-center gap-12',
            'in2xl:mx-auto',
            'inxl:px-8',
            'insm:px-4',
            className,
        )}
        {...rest}
    />
)