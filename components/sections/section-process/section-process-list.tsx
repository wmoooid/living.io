'use client';

import './section-process.scss';
import dynamic from 'next/dynamic';
import Step1Fallback from './step-1-fallback';
import Step2Fallback from './step-2-fallback';
import Step3Fallback from './step-3-fallback';
import { useInView } from 'react-intersection-observer';
import { ComponentType } from 'react';
import { LottieLoaderProps } from '@/components/utils/lottie-loader/lottie-loader';

const LottieLoader1 = dynamic(() => import('@/components/utils/lottie-loader/lottie-loader'), { loading: Step1Fallback });
const LottieLoader2 = dynamic(() => import('@/components/utils/lottie-loader/lottie-loader'), { loading: Step2Fallback });
const LottieLoader3 = dynamic(() => import('@/components/utils/lottie-loader/lottie-loader'), { loading: Step3Fallback });

type ItemProps = {
    lottieSrc: string;
    LottieLoader: ComponentType<LottieLoaderProps>;
    heading: string;
    text: string;
};

const LIST: ItemProps[] = [
    {
        lottieSrc: './lottie/section-process__step-1.json',
        LottieLoader: LottieLoader1,
        heading: 'Fill out the form',
        text: 'At the beginning, we will ask you for some basic information. With these, we will check that our requirements for project implementation are met.',
    },
    {
        lottieSrc: './lottie/section-process__step-2.json',
        LottieLoader: LottieLoader2,
        heading: 'Lets meet together',
        text: 'Meet us at Alpha House and see what you will receive in 99 days. During the meeting we will sign the contract and finalise the transaction.',
    },
    {
        lottieSrc: './lottie/section-process__step-3.json',
        LottieLoader: LottieLoader3,
        heading: 'Move in',
        text: 'In just 99 days you will be moving into your new home and enjoying comfort and quality in the best location available.',
    },
];

function SectionProcessItem({ lottieSrc, LottieLoader, heading, text }: ItemProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '1000px 0px',
    });

    return (
        <li ref={ref} className='section-process__grid-item'>
            <div className='section-process__grid-image'>{inView && <LottieLoader lottieSrc={lottieSrc} />}</div>
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
                <SectionProcessItem key={i} lottieSrc={el.lottieSrc} LottieLoader={el.LottieLoader} heading={el.heading} text={el.text} />
            ))}
        </ul>
    );
}
