'use client';

import { D, DD, DT, P, ToContact, ToWork } from "./elements/home";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";

export const Home = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <Section
            id="home"
            aria-labelledby="home-title"
            aria-describedby="home-desc"
            className="gap-6"
            {...props}
        >
            <header className="flex flex-col gap-6">
                <Title id="home-title">
                    {t('pages.main.sections.home.title')} <Strong>{t('pages.main.sections.home.strong')}</Strong>
                </Title>
                <P id="home-desc">
                    {t('pages.main.sections.home.description')}
                </P>
            </header>
            <dl className="my-6 flex items-center gap-12 inlg:justify-center insm:gap-6 inxs:gap-1">
                <D>
                    <DT>+1</DT>
                    <DD>{t('pages.main.sections.home.numbers.years')}</DD>
                </D>
                <D>
                    <DT>+22</DT>
                    <DD>{t('pages.main.sections.home.numbers.projects')}</DD>
                </D>
                <D>
                    <DT>1</DT>
                    <DD>{t('pages.main.sections.home.numbers.products')}</DD>
                </D>
            </dl>
            <nav
                aria-labelledby="home-title"
                className="flex items-center gap-6 inlg:justify-center"
            >
                <ToContact>{t('pages.main.sections.home.buttons.contact')}</ToContact>
                <ToWork>{t('pages.main.sections.home.buttons.work')}</ToWork>
            </nav>
        </Section>
    )

}