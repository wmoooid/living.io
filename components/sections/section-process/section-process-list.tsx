'use client';

import dynamic from 'next/dynamic';
import './section-process.scss';
import Step1Fallback from './step-1-fallback';
import Step2Fallback from './step-2-fallback';
import Step3Fallback from './step-3-fallback';
import { useInView } from 'react-intersection-observer';

const LottieLoader = dynamic(() => import('@/components/lottie-loader/lottie-loader'), { loading: Step1Fallback });

type ItemProps = {
    lottieSrc: string;
    LottieFallback: React.ReactElement;
    heading: string;
    text: string;
};

const LIST: ItemProps[] = [
    {
        lottieSrc: './lottie/section-process__step-1.json',
        LottieFallback: Step1Fallback(),
        heading: 'Fill out the form',
        text: 'At the beginning, we will ask you for some basic information. With these, we will check that our requirements for project implementation are met.',
    },
    {
        lottieSrc: './lottie/section-process__step-2.json',
        LottieFallback: Step2Fallback(),
        heading: 'Lets meet together',
        text: 'Meet us at Alpha House and see what you will receive in 99 days. During the meeting we will sign the contract and finalise the transaction.',
    },
    {
        lottieSrc: './lottie/section-process__step-3.json',
        LottieFallback: Step3Fallback(),
        heading: 'Move in',
        text: 'In just 99 days you will be moving into your new home and enjoying comfort and quality in the best location available.',
    },
];

function SectionProcessItem({ lottieSrc, LottieFallback, heading, text }: ItemProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '1000px 0px',
    });

    return (
        <li ref={ref} className='section-process__grid-item'>
            <div className='section-process__grid-image'>{inView && <LottieLoader lottieSrc={lottieSrc}>{LottieFallback}</LottieLoader>}</div>
            <div className='section-process__description-wrapper'>
                <h3 className='section-process__description-heading'>{heading}</h3>
                <p className='section-process__description-text'>{text}</p>
            </div>
        </li>
    );
}

export default function SectionProcessList() {
    return (
        <ul className='section-process__grid-list'>
            {LIST.map((el, i) => (
                <SectionProcessItem key={i} lottieSrc={el.lottieSrc} LottieFallback={el.LottieFallback} heading={el.heading} text={el.text} />
            ))}
        </ul>
    );
}
