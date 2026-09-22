import { DotLottie, DotLottieReact, DotLottieReactProps } from '@lottiefiles/dotlottie-react';
import { useCallback, useRef } from 'react';

export const Animation = ({ src, className, ...rest }: DotLottieReactProps) => {

    const dotLottieRef = useRef<DotLottie | null>(null);

    const dotLottieRefCallback = useCallback((dotLottie: DotLottie | null) => {
        if (!dotLottie) return;
        dotLottieRef.current = dotLottie;

        const handleComplete = () => {
            dotLottie.removeEventListener('complete', handleComplete);

            const totalFrames = dotLottie.totalFrames;
            const durationSeconds = dotLottie.duration;
            const loopStart = 6;

            let loopStartFrame = Math.round((loopStart / durationSeconds) * totalFrames);
            const loopEndFrame = totalFrames - 1;

            if (loopStartFrame >= loopEndFrame || loopStartFrame < 0) {
                loopStartFrame = Math.max(0, loopEndFrame - 30);
            }

            requestAnimationFrame(() => {
                dotLottie.setSegment(loopStartFrame, loopEndFrame);
                dotLottie.setFrame(loopStartFrame);
                dotLottie.setLoop(true);
                dotLottie.play();
            })
        }

        dotLottie.addEventListener('complete', handleComplete);
    }, [])

    return (
        <DotLottieReact
            autoplay
            loop={false}
            dotLottieRefCallback={dotLottieRefCallback}
            src={src}
            className={className}
            {...rest}
        />
    )

}