'use client';

import { Article, Figure, Paragraph, Product, Status, Title as Titl } from "./elements/work";
import { Section, Strong, Title } from "./elements"
import { useTranslation } from "react-i18next"
import Link from "next/link";

export const Work = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <Section
            id="work"
            aria-labelledby="work-title"
            className="gap-12"
            {...props}
        >
            <header>
                <Title id="work-title">
                    {t('pages.main.sections.work.title')} <Strong>{t('pages.main.sections.work.strong')}</Strong>
                </Title>
            </header>
            <nav>
                <ul className="flex flex-col inlg:items-center">
                    <Product>
                        <Link
                            href="/products/notehub"
                            aria-labelledby="notehub-title"
                            aria-describedby="notehub-desc"
                            className="outline-none"
                        >
                            <Article>
                                <Figure figure="/imgs/products/notehub/hero.png" alt={t('pages.main.sections.work.products.notehub.alt')} />
                                <div className="p-4 flex flex-col gap-4">
                                    <Titl id="notehub-title">{t('pages.main.sections.work.products.notehub.name')}</Titl>
                                    <Paragraph id="notehub-desc">{t('pages.main.sections.work.products.notehub.description')}</Paragraph>
                                </div>
                                <Status>{t('pages.main.sections.work.products.notehub.status')}</Status>
                            </Article>
                        </Link>
                    </Product>
                </ul>
            </nav>
        </Section>
    )

}