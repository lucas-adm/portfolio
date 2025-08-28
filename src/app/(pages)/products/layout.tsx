import { GoHome, Section } from "./elements";

const Layout = ({ children }: { children: React.ReactNode }) => (
    <Section aria-labelledby="product-title" aria-describedby="product-desc">
        <GoHome />
        {children}
    </Section>
)

export default Layout;