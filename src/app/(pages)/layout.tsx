import { Footer, Header, SideMenu, SplashScreen } from "@/components";
import { LanguageProvider, PreferencesProvider } from "@/contexts";
import { Profile } from "@/components/sections";

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <PreferencesProvider>
            <LanguageProvider>
                <SplashScreen />
                <Header />
                <SideMenu />
                <main className="dark:bg-dark bg-light transition-colors duration-666">
                    <div className="grid grid-cols-[40%_60%] inlg:grid-cols-1">
                        <Profile />
                        {children}
                    </div>
                </main>
                <Footer />
            </LanguageProvider>
        </PreferencesProvider>
    )

}

export default Layout;