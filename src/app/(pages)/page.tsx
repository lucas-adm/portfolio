import { About, Tools, Profile, Work } from "@/components/sections";
import { SideMenu } from "@/components";

const Page = () => {

    return (
        <main className="dark:bg-dark bg-light transition-colors duration-666">
            <SideMenu />
            <div className="grid grid-cols-[40%_60%] inlg:grid-cols-1">
                <Profile />
                <div>
                    <About />
                    <Work />
                    <Tools />
                </div>
            </div>
        </main>
    )

}

export default Page;