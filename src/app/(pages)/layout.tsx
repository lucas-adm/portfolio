import { LanguageProvider, PreferencesProvider } from "@/contexts";

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <PreferencesProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </PreferencesProvider>
    )

}

export default Layout;