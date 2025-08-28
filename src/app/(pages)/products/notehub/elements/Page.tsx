import { clsx } from "clsx";
import Image, { ImageProps } from "next/image";

export const Page = ({ src, alt, ...rest }: ImageProps) => (
    <figure className="overflow-hidden relative aspect-video rounded-lg">
        <Image
            fill
            src={src}
            alt={alt}
            className={clsx(
                'pointer-events-none select-none',
                'object-cover',
            )}
            {...rest}
        />
    </figure>
)