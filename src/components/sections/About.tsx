'use client';

import { D, DD, DT, P, ToContact, ToWork } from "./elements/about";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";

export const About = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <Section
            id="about"
            aria-labelledby="about-title"
            aria-describedby="about-desc"
            className="gap-6"
            {...props}
        >
            <header className="flex flex-col gap-6">
                <Title id="about-title">
                    {t('sections.about.title')} <Strong>{t('sections.about.strong')}</Strong>
                </Title>
                <P id="about-desc">
                    {t('sections.about.description')}
                </P>
            </header>
            <dl className="my-6 flex items-center gap-12 inlg:justify-center insm:gap-6">
                <D>
                    <DT>+1</DT>
                    <DD>{t('sections.about.numbers.years')}</DD>
                </D>
                <D>
                    <DT>+22</DT>
                    <DD>{t('sections.about.numbers.projects')}</DD>
                </D>
                <D>
                    <DT>1</DT>
                    <DD>{t('sections.about.numbers.products')}</DD>
                </D>
            </dl>
            <nav
                aria-labelledby="about-title"
                className="flex items-center gap-6 inlg:justify-center"
            >
                <ToContact>{t('sections.about.buttons.contact')}</ToContact>
                <ToWork>{t('sections.about.buttons.work')}</ToWork>
            </nav>
        </Section>
    )

}