'use client';

import { Input, Label, Submit, Textarea } from "./elements/contact";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";

export const Contact = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <Section
            id="contact"
            aria-labelledby="contact-title"
            className="gap-12"
            {...props}
        >
            <header>
                <Title id="contact-title">
                    {t('pages.main.sections.contact.title')} <Strong>{t('pages.main.sections.contact.strong')}</Strong>
                </Title>
            </header>
            <form action="https://api.staticforms.xyz/submit" method="POST">
                <input type="hidden" name="apiKey" value="sf_45k00k9n7dbda282lh1aj4ke" />
                <input type="hidden" name="redirectTo" value="https://devlucas.website/sent" />
                <fieldset className="flex flex-col gap-6 inlg:gap-3">
                    <legend className="sr-only">
                        {t('pages.main.sections.contact.form.legend')}
                    </legend>
                    <div>
                        <Label htmlFor="name">{t('pages.main.sections.contact.form.name.label')}</Label>
                        <Input id="name" name="name" placeholder={t('pages.main.sections.contact.form.name.placeholder')} required />
                    </div>
                    <div>
                        <Label htmlFor="email">{t('pages.main.sections.contact.form.email.label')}</Label>
                        <Input id="email" name="email" type="email" placeholder={t('pages.main.sections.contact.form.email.placeholder')} required />
                    </div>
                    <div>
                        <Label htmlFor="message">{t('pages.main.sections.contact.form.message.label')}</Label>
                        <Textarea id="message" name="message" rows={4} placeholder={t('pages.main.sections.contact.form.message.placeholder')} required />
                    </div>
                    <Submit>{t('pages.main.sections.contact.form.button.text')}</Submit>
                </fieldset>
            </form>
        </Section>
    )

}