import { clsx } from 'clsx';

export const Error = ({ className, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        role='alert'
        className={clsx(
            '-mb-6 inlg:-mb-3 p-3',
            'font-semibold text-sm dark:text-primary text-secondary',
            className
        )}
        {...rest}
    />
)