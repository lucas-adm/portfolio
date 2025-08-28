'use client';

import { Article, Desc, Figure, Item, Title as Titl } from "./elements/tools";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const Tools = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <Section
            id="tools"
            aria-labelledby="tools-title"
            className="gap-12"
            {...props}
        >
            <header>
                <Title id="tools-title">
                    {t('pages.main.sections.tools.title')} <Strong>{t('pages.main.sections.tools.strong')}</Strong>
                </Title>
            </header>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-6 insm:gap-x-1">
                <Item>
                    <Link
                        href="https://java.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="java-title"
                        aria-describedby="java-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/java-original.svg" />
                            <div>
                                <Titl id="java-title">{t('pages.main.sections.tools.items.java.name')}</Titl>
                                <Desc id="java-desc">{t('pages.main.sections.tools.items.java.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://spring.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="spring-title"
                        aria-describedby="spring-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/spring-original.svg" />
                            <div>
                                <Titl id="spring-title">{t('pages.main.sections.tools.items.spring.name')}</Titl>
                                <Desc id="spring-desc">{t('pages.main.sections.tools.items.spring.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://www.docker.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="docker-title"
                        aria-describedby="docker-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/docker-original.svg" />
                            <div>
                                <Titl id="docker-title">{t('pages.main.sections.tools.items.docker.name')}</Titl>
                                <Desc id="docker-desc">{t('pages.main.sections.tools.items.docker.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://www.typescriptlang.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="typescript-title"
                        aria-describedby="typescript-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/typescript-original.svg" />
                            <div>
                                <Titl id="typescript-title">{t('pages.main.sections.tools.items.typescript.name')}</Titl>
                                <Desc id="typescript-desc">{t('pages.main.sections.tools.items.typescript.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://react.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="react-title"
                        aria-describedby="react-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/react-original.svg" />
                            <div>
                                <Titl id="react-title">{t('pages.main.sections.tools.items.reactjs.name')}</Titl>
                                <Desc id="react-desc">{t('pages.main.sections.tools.items.reactjs.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="next-title"
                        aria-describedby="next-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/nextjs-original.svg" />
                            <div>
                                <Titl id="next-title">{t('pages.main.sections.tools.items.nextjs.name')}</Titl>
                                <Desc id="next-desc">{t('pages.main.sections.tools.items.nextjs.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://www.postgresql.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="postgres-title"
                        aria-describedby="postgres-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/postgresql-original.svg" />
                            <div>
                                <Titl id="postgres-title">{t('pages.main.sections.tools.items.postgres.name')}</Titl>
                                <Desc id="postgres-desc">{t('pages.main.sections.tools.items.postgres.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://www.supabase.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="supabase-title"
                        aria-describedby="supabase-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/supabase-original.svg" />
                            <div>
                                <Titl id="supabase-title">{t('pages.main.sections.tools.items.supabase.name')}</Titl>
                                <Desc id="supabase-desc">{t('pages.main.sections.tools.items.supabase.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://www.fly.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="flyio-title"
                        aria-describedby="flyio-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/flyio-original.svg" />
                            <div>
                                <Titl id="flyio-title">{t('pages.main.sections.tools.items.flyio.name')}</Titl>
                                <Desc id="flyio-desc">{t('pages.main.sections.tools.items.flyio.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://vercel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="vercel-title"
                        aria-describedby="vercel-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/vercel-original.svg" />
                            <div>
                                <Titl id="vercel-title">{t('pages.main.sections.tools.items.vercel.name')}</Titl>
                                <Desc id="vercel-desc">{t('pages.main.sections.tools.items.vercel.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
            </ul>
        </Section>
    )

}