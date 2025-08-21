import { Profile } from "@/components/sections";
import { SideMenu } from "@/components";

const Page = () => {

    return (
        <main className="dark:bg-dark bg-light transition-colors duration-666">
            <SideMenu />
            <div className="grid grid-cols-3 inlg:grid-cols-1">
                <Profile />
                <div className="col-span-2"></div>
            </div>
        </main>
    )

}

export default Page;