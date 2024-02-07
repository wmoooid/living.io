import './lottie-loader.scss';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type LottieLoaderProps = {
    lottieSrc: string;
    children: React.ReactElement;
};

export default function LottieLoader({ lottieSrc, children }: LottieLoaderProps) {
    const [lottieData, setLottieData] = useState(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '1000px 0px',
    });

    useEffect(() => {
        if (inView) {
            import(`${lottieSrc}`).then((data) => {
                // setLottieData(data);
            });
        }
    }, [inView]);

    if (!lottieData)
        return (
            <div className='lottie-loader' ref={ref}>
                {children}
            </div>
        );

    return <Lottie animationData={lottieData} />;
}
