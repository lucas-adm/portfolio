'use client';

import { getScrollItem, removeScrollItem, scrollToItem } from '@/utils';
import { useCallback, useEffect } from 'react';

export const ScrollToOnLoad = (props: React.HTMLAttributes<HTMLDivElement>) => {

    const tryScrollTo = useCallback((id: string) => {
        scrollToItem(id, true)();
    }, [])

    useEffect(() => {
        const id = getScrollItem();
        if (id) {
            removeScrollItem();
            return tryScrollTo(id);
        }
        return;
    }, [tryScrollTo])

    return <div {...props} />

}