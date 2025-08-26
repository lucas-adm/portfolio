export const Status = (props: React.HTMLAttributes<HTMLElement>) => (
    <span
        aria-hidden="true"
        className="absolute bottom-3 right-3 font-extrabold text-xs text-primary transition-colors duration-333"
        {...props}
    />
)