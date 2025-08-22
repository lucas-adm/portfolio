import { clsx } from "clsx";
import { SideCard } from "../sidecard";

export const Profile = (props: React.HTMLAttributes<HTMLElement>) => (
    <section
        id="profile"
        aria-labelledby="profile-title"
        aria-describedby="profile-desc"
        className={clsx(
            'sticky top-0 left-0 h-screen px-2 py-4',
            'flex items-center justify-end',
            'inlg:static inlg:justify-center',
            'inmd:h-svh',
        )}
        {...props}
    >
        <h2 className="sr-only">Profile</h2>
        <SideCard />
    </section>
)