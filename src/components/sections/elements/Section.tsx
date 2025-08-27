import { clsx } from "clsx";

export const Section = ({ className, ...rest }: React.HTMLAttributes<HTMLElement>) => (
    <section
        className={clsx(
            'max-w-full w-[666px] scroll-mt-16 ml-36 py-16',
            'first:min-h-screen inmd:first:min-h-svh first:scroll-mt-0 first:py-0',
            'last:min-h-screen inmd:last:min-h-svh last:scroll-mt-0 last:py-0',
            'flex flex-col justify-center',
            'in2xl:mx-auto',
            'inxl:px-8',
            'insm:px-4',
            className,
        )}
        {...rest}
    />
)