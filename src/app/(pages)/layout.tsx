import { Header } from "@/components";
import { LanguageProvider, PreferencesProvider } from "@/contexts";

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <PreferencesProvider>
            <LanguageProvider>
                <Header />
                {children}
            </LanguageProvider>
        </PreferencesProvider>
    )

}

export default Layout;