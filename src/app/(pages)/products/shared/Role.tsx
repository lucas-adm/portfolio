type RoleProps = React.LiHTMLAttributes<HTMLLIElement> & {
    icon: React.ElementType;
    title: string;
    desc: string;
}

export const Role = ({ icon: Icon, title, desc, ...rest }: RoleProps) => (
    <li
        className="p-4 rounded-xl flex flex-col gap-4 dark:bg-light/5 bg-dark/5 transition-colors duration-333"
        {...rest}
    >
        <div className="flex items-center gap-4">
            <div className="w-fit p-1 rounded-full bg-primary transition-colors duration-333">
                <Icon aria-hidden="true" size={26} className="stroke-light" />
            </div>
            <h4 className="font-semibold text-lg dark:text-light/75 text-dark/75 transition-colors duration-333">
                {title}
            </h4>
        </div>
        <p className="font-medium text-sm dark:text-light/50 text-dark/50 transition-colors duration-333">
            {desc}
        </p>
    </li>
)