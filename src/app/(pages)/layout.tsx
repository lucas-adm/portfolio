import { LanguageProvider } from "@/contexts";

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    )

}

export default Layout;