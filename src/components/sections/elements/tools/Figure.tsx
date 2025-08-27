import Image from "next/image";

type FigureProps = React.HTMLAttributes<HTMLElement> & {
    figure: string;
}

export const Figure = ({ figure, ...rest }: FigureProps) => (
    <div className="p-2 rounded-xl bg-light">
        <figure className="relative w-[48px] insm:w-[33px] h-[48px] insm:h-[33px] flex-none" {...rest}>
            <Image
                src={figure}
                alt=""
                fill
                sizes="(max-width: 640px) 33px, 33px"
                className="pointer-events-none select-none object-cover"
            />
        </figure>
    </div>
)