'use client';

import { Desc, Hero, ToViewLive, Subtitle, Title, ToRepo, Role, Page as Image } from "./elements";
import { IconCode, IconDatabase, IconMail, IconRocket, IconShield, IconSparkles } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const Page = () => {

    const { t } = useTranslation("global");

    const roles: { icon: React.ElementType, title: string, desc: string }[] = [
        { icon: IconSparkles, title: t('pages.products.notehub.roles.branding.title'), desc: t('pages.products.notehub.roles.branding.description') },
        { icon: IconCode, title: t('pages.products.notehub.roles.development.title'), desc: t('pages.products.notehub.roles.development.description') },
        { icon: IconDatabase, title: t('pages.products.notehub.roles.storage.title'), desc: t('pages.products.notehub.roles.storage.description') },
        { icon: IconShield, title: t('pages.products.notehub.roles.security.title'), desc: t('pages.products.notehub.roles.security.description') },
        { icon: IconMail, title: t('pages.products.notehub.roles.messaging.title'), desc: t('pages.products.notehub.roles.messaging.description') },
        { icon: IconRocket, title: t('pages.products.notehub.roles.deploy.title'), desc: t('pages.products.notehub.roles.deploy.description') },
    ]

    const images: { src: string, alt: string }[] = [
        { src: '/imgs/products/notehub/1.png', alt: t('pages.products.notehub.images.1.alt') },
        { src: '/imgs/products/notehub/2.png', alt: t('pages.products.notehub.images.2.alt') },
        { src: '/imgs/products/notehub/3.png', alt: t('pages.products.notehub.images.3.alt') },
        { src: '/imgs/products/notehub/4.png', alt: t('pages.products.notehub.images.4.alt') },
        { src: '/imgs/products/notehub/5.png', alt: t('pages.products.notehub.images.5.alt') },
    ]

    return (
        <>
            <Hero
                src="/imgs/products/notehub/hero.png"
                alt={t('pages.products.notehub.images.hero.alt')}
            />
            <header className="flex flex-col gap-6">
                <Title id="product-title">{t('pages.products.notehub.title')}</Title>
                <Subtitle>{t('pages.products.notehub.subtitle')}</Subtitle>
                <Desc id="product-desc">{t('pages.products.notehub.description')}</Desc>
            </header>
            <nav aria-label={t('pages.products.notehub.navAriaLabel')}>
                <ul className="flex items-center gap-6 insm:flex-col">
                    <li><ToViewLive href='https://notehub.com.br' /></li>
                    <li><ToRepo href='https://github.com/lucas-adm/springboot-notehub'>Backend</ToRepo></li>
                    <li><ToRepo href='https://github.com/lucas-adm/next-react-notehub'>Frontend</ToRepo></li>
                </ul>
            </nav>
            <ul
                aria-label={t('pages.products.notehub.roles.ulAriaLabel')}
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
                aria-label={t('pages.products.notehub.images.ulAriaLabel')}
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