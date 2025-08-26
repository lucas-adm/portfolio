import Image from "next/image";

type FigureProps = React.HTMLAttributes<HTMLElement> & {
    figure: string;
}

export const Figure = ({ figure, ...rest }: FigureProps) => (
    <figure className="p-2 rounded-xl bg-light" {...rest}>
        <Image
            src={figure}
            alt=""
            width={48}
            height={48}
            className="pointer-events-none select-none"
        />
    </figure>
)