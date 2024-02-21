'use client';

import './section-solutions.scss';
import Icon_accordion from '../../icons/icon-accordion';
import { useState } from 'react';

type ItemProps = {
    caption: string;
    heading: string;
    text: string;
};

const LIST: ItemProps[] = [
    {
        caption: 'ML System',
        heading: 'Ventilated photovoltaic façade',
        text: 'Functional and flexible solution for photovoltaic constructions, which meets the trends and provides an attractive addition to the buildings architecture.',
    },
    { caption: 'Metra', heading: 'Aluminum and Italian design', text: 'Systematic aluminum solutions for façades, windows, and doors.' },
    {
        caption: 'Euroglas',
        heading: 'World glass solutions',
        text: 'Glass for use in construction with the latest technology solutions and a reduced carbon footprint. The glass combines the highest thermal parameters, protection against the sun and noise, as well as safety.',
    },
    {
        caption: 'Ruukki',
        heading: 'Lightweight wall systems',
        text: 'Ruukki lightweight enclosure systems for insulated solid walls meet all the requirements of modern, economical, and sustainable construction.',
    },
    {
        caption: 'SuperWorld',
        heading: 'Real Estate Metaverse Market',
        text: 'The SuperWorld metaverse is a decentralized application that lets users buy and sell NFTs mapped to the real world.',
    },
];

function SectionSolutionsItem({ caption, heading, text }: ItemProps) {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <li onClick={() => setIsOpened((curr) => !curr)} className={isOpened ? 'section-solutions__item active' : 'section-solutions__item'}>
            <small className='section-solutions__item-caption'>{caption}</small>
            <h3 className='section-solutions__item-heading'>{heading}</h3>
            <span className='section-solutions__item-button'>
                <Icon_accordion type={isOpened ? 'close' : 'open'} />
            </span>
            <div className='section-solutions__item-spoiler'>
                <p className='section-solutions__item-text'>{text}</p>
            </div>
        </li>
    );
}

export default function SectionSolutionsList() {
    return (
        <ul className='section-solutions__list'>
            {LIST.map((el, i) => (
                <SectionSolutionsItem key={i} caption={el.caption} heading={el.heading} text={el.text} />
            ))}
        </ul>
    );
}
