import { Item } from "./elements";

export const LanguageContent = (props: React.HTMLAttributes<HTMLDivElement>) => {

    return (
        <div
            className="p-1 flex flex-col gap-1"
            {...props}
        >
            <Item lng="pt" />
            <Item lng="he" />
            <Item lng="de" />
            <Item lng="en" />
            <Item lng="es" />
            <Item lng="fr" />
        </div>
    )

}