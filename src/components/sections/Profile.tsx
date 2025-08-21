import { clsx } from "clsx";
import { SideCard } from "../sidecard";

export const Profile = (props: React.HTMLAttributes<HTMLElement>) => (
    <section
        aria-label="profile"
        id="profile"
        className={clsx(
            'sticky top-0 left-0 h-screen px-2 py-4',
            'inlg:static',
            'inmd:h-svh',
            'flex items-center justify-center',
        )}
        {...props}
    >
        <h2 className="sr-only">Profile</h2>
        <SideCard />
    </section>
)