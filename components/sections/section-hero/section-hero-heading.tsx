'use client';

import { useEffect, useState } from 'react';
import './section-hero.scss';

const ITEMS = ['living', 'owning', 'renting'];

type HeadingSapnProps = {
    word: string;
    isActive: boolean;
    shouldHide: boolean;
};

function SectionHeroHeadingSpan({ word, isActive, shouldHide }: HeadingSapnProps) {
    if (isActive) return <span className='section-hero__heading-roll-span active'>{word}</span>;
    if (shouldHide) return <span className='section-hero__heading-roll-span hide'>{word}</span>;
    return <span className='section-hero__heading-roll-span'>{word}</span>;
}

export default function SectionHeroHeading() {
    const [currentWord, setCurrentWord] = useState(0);
    const prevWord = currentWord === 0 ? ITEMS.length - 1 : currentWord - 1;

    const changeWord = () => {
        if (currentWord < ITEMS.length - 1) {
            setCurrentWord((curr) => curr + 1);
        } else {
            setCurrentWord(0);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(changeWord, 3000);
        return () => clearTimeout(timeout);
    });

    return (
        <div className='section-hero__heading'>
            <h1 className='section-hero__heading-main'>The future of home </h1>
            <span className='section-hero__heading-roll'>
                {ITEMS.map((el, i) => (
                    <SectionHeroHeadingSpan key={i} word={el} isActive={currentWord === i} shouldHide={prevWord === i} />
                ))}
            </span>
        </div>
    );
}
