'use client';

import { Desc, Hero, Subtitle, Title, ToRepo, Role, Page as Image } from "../shared";
import { IconCode, IconDatabase, IconSparkles } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const Page = () => {

    const { t } = useTranslation("global");

    const roles: { icon: React.ElementType, title: string, desc: string }[] = [
        { icon: IconSparkles, title: t('pages.products.livechat.roles.branding.title'), desc: t('pages.products.livechat.roles.branding.description') },
        { icon: IconCode, title: t('pages.products.livechat.roles.development.title'), desc: t('pages.products.livechat.roles.development.description') },
        { icon: IconDatabase, title: t('pages.products.livechat.roles.storage.title'), desc: t('pages.products.livechat.roles.storage.description') },
    ]

    const images: { src: string, alt: string }[] = [
        { src: '/imgs/products/livechat/1.png', alt: t('pages.products.livechat.images.1.alt') },
        { src: '/imgs/products/livechat/2.png', alt: t('pages.products.livechat.images.2.alt') },
    ]

    return (
        <>
            <Hero
                src="/imgs/products/livechat/hero.png"
                alt={t('pages.products.livechat.images.hero.alt')}
            />
            <header className="flex flex-col gap-6">
                <Title id="product-title">{t('pages.products.livechat.title')}</Title>
                <Subtitle>{t('pages.products.livechat.subtitle')}</Subtitle>
                <Desc id="product-desc">{t('pages.products.livechat.description')}</Desc>
            </header>
            <nav aria-label={t('pages.products.livechat.navAriaLabel')}>
                <ul className="flex items-center gap-6 insm:flex-col">
                    <li><ToRepo href='https://github.com/lucas-adm/livechat'>Monorepo</ToRepo></li>
                </ul>
            </nav>
            <ul
                aria-label={t('pages.products.livechat.roles.ulAriaLabel')}
                className="grid grid-cols-2 gap-6 insm:grid-cols-1"
            >
                {roles.map((role, key) => (
                    <Role
                        key={key}
                        icon={role.icon}
                        title={role.title}
                        desc={role.desc}
                    />
                ))}
            </ul>
            <ul
                aria-label={t('pages.products.livechat.images.ulAriaLabel')}
                className="flex flex-col gap-3"
            >
                {images.map((img, key) => (
                    <li key={key}>
                        <Image src={img.src} alt={img.alt} />
                    </li>
                ))}
            </ul>
        </>
    )

}

export default Page;