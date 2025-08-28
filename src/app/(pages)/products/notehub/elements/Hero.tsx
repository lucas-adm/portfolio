import { clsx } from "clsx";
import Image, { ImageProps } from "next/image";

export const Hero = ({ src, alt, ...rest }: ImageProps) => (
    <figure className="overflow-hidden aspect-video relative rounded-xl">
        <Image
            fill
            src={src}
            alt={alt}
            className={clsx(
                '[transform:translateZ(0)]',
                'pointer-events-none select-none',
                'object-cover',
                'bg-primary',
                'transition-colors duration-333',
            )}
            {...rest}
        />
    </figure>
)