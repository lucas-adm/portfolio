'use client';

import { clsx } from "clsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

export const SplashScreen = (props: React.HTMLAttributes<HTMLDivElement>) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {

        if (isLoading) document.body.style.overflow = 'hidden';

        const timeout = setTimeout(() => { setIsLoading(false) }, 3666);

        return () => {
            clearTimeout(timeout);
            document.body.style.overflow = 'auto';
        }

    }, [isLoading])

    if (isLoading) return (
        <div className="z-999 fixed top-0 left-0 w-screen h-screen dark:bg-dark bg-light" {...props}>
            <DotLottieReact
                src="/animations/Pentagram.lottie"
                autoplay
                className={clsx(
                    'fixed top-1/2 left-1/2 -translate-1/2',
                    'w-[222px] h-[222px]',
                    'drop-shadow-[0_0_33px] drop-shadow-violet-600',
                )}
            />
        </div>
    )

    return <></>;

}