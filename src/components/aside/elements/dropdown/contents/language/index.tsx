import { Item } from "./elements";

export const LanguageContent = (props: React.HTMLAttributes<HTMLDivElement>) => {

    return (
        <div
            className="p-1 flex flex-col gap-1"
            {...props}
        >
            <Item lng="pt" />
            <Item lng="en" />
            <Item lng="es" />
        </div>
    )

}