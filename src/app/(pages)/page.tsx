import { ScrollToOnLoad, Home, Work, Tools, Contact } from "@/components/sections";

const Page = () => (
    <ScrollToOnLoad>
        <Home />
        <Work />
        <Tools />
        <Contact />
    </ScrollToOnLoad>
)

export default Page;