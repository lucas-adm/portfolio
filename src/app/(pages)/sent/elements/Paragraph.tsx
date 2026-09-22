export const Paragraph = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        {...props}
        className='font-semibold text-base text-center dark:text-light/50 text-dark/50'
    />
)