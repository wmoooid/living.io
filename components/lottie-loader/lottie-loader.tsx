import './lottie-loader.scss';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';

type LottieLoaderProps = {
    lottieSrc: string;
};

export default function LottieLoader({ lottieSrc }: LottieLoaderProps) {
    const [lottieData, setLottieData] = useState(null);

    useEffect(() => {
        import(`${lottieSrc}`).then((data) => {
            setLottieData(data);
        });
    }, []);

    return <Lottie animationData={lottieData} />;
}
