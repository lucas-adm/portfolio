export const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => (
    <label
        className="w-full mb-1 inline-block font-medium text-sm dark:text-light/50 text-dark/50 transition-colors duration-333"
        {...props}
    />
)