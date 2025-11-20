'use client';

import { clsx } from "clsx";
import { useScrollProgress } from "@/hooks";

export const ProgressBar = () => {

    const completion = useScrollProgress();

    return (
        <div aria-hidden="true" className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
            <div
                className={clsx(
                    'origin-left',
                    'w-full h-full',
                    'bg-primary',
                    ' drop-shadow-[0_0_1px_rgba(0,0,0,0.333)]',
                    'transition-transform duration-111 ease-linear'
                )}
                style={{ transform: `scaleX(${completion / 100})` }}
            />
        </div>
    )

}