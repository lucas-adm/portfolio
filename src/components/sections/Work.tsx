'use client';

import { Article, Figure, Paragraph, Product, Status, Title as Titl } from "./elements/work";
import { Section, Strong, Title } from "./elements"
import { useTranslation } from "react-i18next"
import Link from "next/link";

export const Work = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    const products: { slug: string, live: boolean }[] = [
        { slug: 'notehub', live: true },
        { slug: 'livechat', live: false },
    ]

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
                <ul className="flex flex-wrap inlg:items-center justify-between gap-8">
                    {products.map((p) => (
                        <Product key={p.slug}>
                            <Link
                                href={`/products/${p.slug}`}
                                aria-labelledby={`${p.slug}-title`}
                                aria-describedby={`${p.slug}-desc`}
                                className="outline-none"
                            >
                                <Article>
                                    <Figure figure={`/imgs/products/${p.slug}/hero.png`} alt={t(`pages.main.sections.work.products.${p.slug}.alt`)} />
                                    <div className="p-4 flex flex-col gap-4">
                                        <Titl id={`${p.slug}-title`}>{t(`pages.main.sections.work.products.${p.slug}.name`)}</Titl>
                                        <Paragraph id={`${p.slug}-desc`}>{t(`pages.main.sections.work.products.${p.slug}.description`)}</Paragraph>
                                    </div>
                                    <Status isLive={p.live}>
                                        {t(`pages.main.sections.work.products.${p.slug}.status`)}
                                    </Status>
                                </Article>
                            </Link>
                        </Product>
                    ))}
                </ul>
            </nav>
        </Section>
    )

}