import Image from "next/image";

type FigureProps = React.HTMLAttributes<HTMLElement> & {
    figure: string;
    alt: string;
}

export const Figure = ({ figure, alt, ...rest }: FigureProps) => (
    <figure
        className="overflow-hidden relative w-[333px] h-[200px] insm:w-[266px] bg-primary transition-colors duration-300"
        {...rest}
    >
        <Image
            fill
            src={figure}
            alt={alt}
            className="pointer-events-none select-none origint-top object-cover transition-transform duration-666 group-hover:scale-175"
        />
    </figure>
)