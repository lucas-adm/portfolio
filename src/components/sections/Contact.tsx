'use client';

import { Error, Input, Label, Submit, Textarea } from './elements/contact';
import { Section, Strong, Title } from './elements';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const Contact = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation('global');
    const router = useRouter();

    const schema = z.object({
        name: z
            .string().trim()
            .min(2, { message: t('pages.main.sections.contact.form.name.errors.min') })
            .max(72, { message: t('pages.main.sections.contact.form.name.errors.max') }),
        email: z
            .email({ message: t('pages.main.sections.contact.form.email.errors.email') }),
        message: z
            .string().trim()
            .min(24, { message: t('pages.main.sections.contact.form.message.errors.min') })
            .max(248, { message: t('pages.main.sections.contact.form.message.errors.max') }),
    })

    type FormData = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: FormData) => {
        const response = await fetch("https://api.staticforms.xyz/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                apiKey: "sf_45k00k9n7dbda282lh1aj4ke",
                ...data
            })
        })
        if (response.ok) router.push('/sent');
    }

    return (
        <Section
            id='contact'
            aria-labelledby='contact-title'
            className='gap-12'
            {...props}
        >
            <header>
                <Title id='contact-title'>
                    {t('pages.main.sections.contact.title')} <Strong>{t('pages.main.sections.contact.strong')}</Strong>
                </Title>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className='flex flex-col gap-6 inlg:gap-3'>
                    <legend className='sr-only'>
                        {t('pages.main.sections.contact.form.legend')}
                    </legend>
                    <div className=''>
                        <Label htmlFor='name'>{t('pages.main.sections.contact.form.name.label')}</Label>
                        <Input {...register('name')} id='name' name='name' placeholder={t('pages.main.sections.contact.form.name.placeholder')} />
                        {errors.name
                            ? <Error id='name-error' aria-invalid={!errors.name} aria-describedby='name-error'>
                                {errors.name.message}
                            </Error>
                            : null
                        }
                    </div>
                    <div>
                        <Label htmlFor='email'>{t('pages.main.sections.contact.form.email.label')}</Label>
                        <Input {...register('email')} id='email' name='email' placeholder={t('pages.main.sections.contact.form.email.placeholder')} />
                        {errors.email
                            ? <Error id='email-error' aria-invalid={!errors.email} aria-describedby='email-error'>
                                {errors.email.message}
                            </Error>
                            : null
                        }
                    </div>
                    <div>
                        <Label htmlFor='message'>{t('pages.main.sections.contact.form.message.label')}</Label>
                        <Textarea {...register('message')} id='message' name='message' rows={4} placeholder={t('pages.main.sections.contact.form.message.placeholder')} />
                        {errors.message
                            ? <Error id='message-error' aria-invalid={!errors.message} aria-describedby='message-error' className='mb-0! py-0! pt-1! inlg:py-2! inlg:pt-0!'>
                                {errors.message.message}
                            </Error>
                            : null
                        }
                    </div>
                    <Submit>{t('pages.main.sections.contact.form.button.text')}</Submit>
                </fieldset>
            </form>
        </Section>
    )

}