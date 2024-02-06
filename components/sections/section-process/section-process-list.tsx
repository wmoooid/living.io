'use client';

import './section-process.scss';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

type ItemProps = {
    lottieSrc: string;
    heading: string;
    text: string;
};

const LIST: ItemProps[] = [
    {
        lottieSrc: './lottie/step-1.json',
        heading: 'Fill out the form',
        text: 'At the beginning, we will ask you for some basic information. With these, we will check that our requirements for project implementation are met.',
    },
    {
        lottieSrc: './lottie/step-2.json',
        heading: 'Lets meet together',
        text: 'Meet us at Alpha House and see what you will receive in 99 days. During the meeting we will sign the contract and finalise the transaction.',
    },
    {
        lottieSrc: './lottie/step-3.json',
        heading: 'Move in',
        text: 'In just 99 days you will be moving into your new home and enjoying comfort and quality in the best location available.',
    },
];

function SectionProcessItem({ lottieSrc, heading, text }: ItemProps) {
    const [lottieData, setLottieData] = useState(null);

    useEffect(() => {
        import(`${lottieSrc}`).then((data) => {
            setLottieData(data);
        });
    }, []);

    return (
        <li className='section-process__grid-item'>
            <div className='section-process__grid-image'>
                <Lottie animationData={lottieData} />
            </div>
            <div className='section-process__description-wrapper'>
                <h4 className='section-process__description-heading'>{heading}</h4>
                <p className='section-process__description-text'>{text}</p>
            </div>
        </li>
    );
}

export default function SectionProcessList() {
    return (
        <ul className='section-process__grid-list'>
            {LIST.map((el, i) => (
                <SectionProcessItem key={i} lottieSrc={el.lottieSrc} heading={el.heading} text={el.text} />
            ))}
        </ul>
    );
}
