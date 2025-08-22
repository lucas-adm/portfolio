import { clsx } from "clsx";

export const Section = ({ className, ...rest }: React.HTMLAttributes<HTMLElement>) => (
    <section
        className={clsx(
            'max-w-full w-[666px] min-h-screen inmd:min-h-svh ml-36',
            'flex flex-col justify-center',
            'in2xl:mx-auto',
            'inxl:px-8',
            'insm:px-4',
            className,
        )}
        {...rest}
    />
)