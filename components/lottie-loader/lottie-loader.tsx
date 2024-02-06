import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';

type LottieLoaderProps = {
    lottieSrc: string;
    children: React.ReactElement;
};

export default function LottieLoader({ lottieSrc, children }: LottieLoaderProps) {
    const [lottieData, setLottieData] = useState(null);

    useEffect(() => {
        import(`${lottieSrc}`).then((data) => {
            setTimeout(() => setLottieData(data), 5000);
        });
    }, []);

    if (!lottieData) return <div>{children}</div>;

    return <Lottie animationData={lottieData} />;
}
