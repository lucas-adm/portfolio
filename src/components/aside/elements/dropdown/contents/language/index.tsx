import { Item } from "./elements";

export const LanguageContent = (props: React.HTMLAttributes<HTMLUListElement>) => {

    return (
        <ul
            className="p-1 rounded flex flex-col gap-1 bg-[#fefeff]"
            {...props}
        >
            <Item lng="pt" />
            <Item lng="en" />
            <Item lng="es" />
        </ul>
    )

}