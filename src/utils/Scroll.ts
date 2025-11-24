export const getScrollItem = (): string | null => sessionStorage.getItem('scrollTo');

export const setScrollItem = (id: string): void => sessionStorage.setItem('scrollTo', id);

export const removeScrollItem = (): void => sessionStorage.removeItem('scrollTo');

export const scrollToItem = (id: string, skipSmoothness?: boolean) => (): void => {
    const isReducedMotion: boolean = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ block: 'start', behavior: skipSmoothness || isReducedMotion ? 'instant' : 'smooth' });
        return document.body.focus();
    }
    return;
}

export const navigateToItem = (pathname: string, id: string) => (ev: React.MouseEvent<HTMLAnchorElement>): void => {
    if (pathname === '/') {
        ev.preventDefault();
        scrollToItem(id)();
        return document.body.focus();
    }
    return setScrollItem(id);
}