type Props = React.HTMLAttributes<HTMLElement> & {
    isLive?: boolean;
}

export const Status = ({ isLive, ...rest }: Props) => {
    if (isLive) return (
        <span
            aria-hidden="true"
            className="absolute bottom-3 right-3 font-extrabold text-xs text-primary transition-colors duration-333"
            {...rest}
        />
    )
    return null;
}