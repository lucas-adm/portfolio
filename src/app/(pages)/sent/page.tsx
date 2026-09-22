'use client';

import { Animation, Title, TitleStrong as Strong, Paragraph, ToHome } from './elements';
import { clsx } from 'clsx';
import { Section } from '@/components/sections/elements';

const Page = () => (
    <Section
        id='sent'
        aria-labelledby='sent-title'
        aria-describedby='sent-desc'
        className='inlg:w-full inlg:px-0 insm:px-0!'
    >
        <div className={clsx(
            'overflow-hidden relative',
            'w-full max-h-full h-[640px] inlg:h-full px-8 rounded-xl inlg:rounded-none',
            'flex flex-col items-center justify-center gap-8 inlg:gap-4',
            'dark:bg-light/5 bg-dark/5',
            'transition-colors duration-666',
            'after:pointer-events-none after:absolute after:top-0 after:right-0',
            'after:-translate-y-1/3 after:translate-x-1/3',
            'insm:after:-translate-y-1/2 insm:after:translate-x-1/2',
            'after:w-36 after:h-36 after:rounded-full',
            'after:border-4 after:border-dashed after:border-primary',
            'after:drop-shadow-custom',
            'after:transition-colors after:duration-600',
            'before:pointer-events-none before:absolute before:bottom-0 before:left-0',
            'before:translate-y-1/3 before:-translate-x-1/3',
            'insm:before:translate-y-1/2 insm:before:-translate-x-1/2',
            'before:w-36 before:h-36 before:rounded-full',
            'before:border-4 before:border-dashed before:border-primary',
            'before:drop-shadow-custom',
            'before:transition-colors before:duration-600',
        )}>
            <Title id='sent-title'>
                MENSAGEM <Strong >ENVIADA</Strong>
            </Title>

            <Animation
                src='/animations/PaperPlane.lottie'
                className={clsx(
                    'pointer-events-none',
                    'w-[222px] h-[222px] -my-8',
                    'dark:invert-100 invert-0',
                    'transition-all duration-500',
                )}
            />
            <Paragraph id='sent-desc'>
                Até.
            </Paragraph>
            <ToHome>Início</ToHome>
        </div>
    </Section>
)

export default Page;