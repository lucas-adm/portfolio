'use client';

import { useEffect } from 'react';

export const ScrollToOnLoad = (props: React.HTMLAttributes<HTMLDivElement>) => {

    useEffect(() => {

        const id = sessionStorage.getItem('scrollTo');

        if (id) {
            sessionStorage.removeItem('scrollTo');
            const tryScroll = () => {
                const el = document.getElementById(id);
                if (el) return el.scrollIntoView({ behavior: 'instant', block: 'start' });
                requestAnimationFrame(tryScroll);
            }
            return tryScroll();
        }

        return;

    }, [])

    return <div {...props} />

}