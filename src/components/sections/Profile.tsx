'use client';

import { clsx } from "clsx";
import { SideCard } from "../sidecard";
import { usePathname } from "next/navigation";

export const Profile = (props: React.HTMLAttributes<HTMLElement>) => {

    const isOutsideMain: boolean = usePathname() !== '/';

    return (
        <section
            id="profile"
            aria-labelledby="profile-title"
            aria-describedby="profile-desc"
            className={clsx(
                'sticky top-0 left-0 h-screen px-2 py-4 inlg:p-0',
                'flex items-center justify-end',
                'inlg:static inlg:justify-center',
                'inmd:h-svh',
                isOutsideMain && 'inlg:hidden'
            )}
            {...props}
        >
            <h2 className="sr-only">Profile</h2>
            <SideCard />
        </section>
    )

}