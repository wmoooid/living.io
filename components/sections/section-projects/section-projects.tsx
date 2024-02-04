'use client';

import './section-projects.scss';
import Icon_arrow from '../../icons/icon-arrow';
import SectionProjectsList from './section-projects-list';
import { useEffect, useState } from 'react';

export interface objectData {
    imageSrc: string;
    name: string;
    description: string;
    params: {
        name: string;
        value: string;
    }[];
    features: string[];
    price: string;
}

const OBJECTS: objectData[] = [
    {
        imageSrc: '/img/project-image-1.jpg',
        name: 'Alpha',
        description:
            ' A house for everyone, breaking previous stereotypes. It comes in two versions, Alpha IV and Alpha VI - ideal for a family of 4 or 6.',
        params: [
            {
                name: 'Construction area',
                value: '70 m²',
            },
            {
                name: 'Living area',
                value: '84 m²',
            },
            {
                name: 'Implementation time',
                value: '99 days',
            },
        ],
        features: [
            'Ideal for a family of 4 or 6',
            'Anti-burglary facade and front door',
            'Modern materials and technology',
            'Guaranteed durability for years',
            'Energy Net Zero',
            'Ready to move into in 99 days',
        ],
        price: '199 000 €',
    },
    {
        imageSrc: '/img/project-image-1.jpg',
        name: 'Alpha',
        description:
            ' A house for everyone, breaking previous stereotypes. It comes in two versions, Alpha IV and Alpha VI - ideal for a family of 4 or 6.',
        params: [
            {
                name: 'Construction area',
                value: '70 m²',
            },
            {
                name: 'Living area',
                value: '84 m²',
            },
            {
                name: 'Implementation time',
                value: '99 days',
            },
        ],
        features: [
            'Ideal for a family of 4 or 6',
            'Anti-burglary facade and front door',
            'Modern materials and technology',
            'Guaranteed durability for years',
            'Energy Net Zero',
            'Ready to move into in 99 days',
        ],
        price: '199 000 €',
    },
];

export default function SectionProjects() {
    const [currentObject, setCurrentObject] = useState(0);
    const lastObject = OBJECTS.length - 1;

    const handleClick = (dir: number) => {
        setCurrentObject(() => currentObject + dir);
    };

    return (
        <section className='section-projects'>
            <div className='container section-projects__container'>
                <h2 className='section-projects__heading'>Our projects</h2>
                <SectionProjectsList objectList={OBJECTS} currentObject={currentObject} />
                <div className='section-projects__switcher'>
                    <button disabled={currentObject === 0} onClick={() => handleClick(-1)} className='section-projects__switcher-button'>
                        <Icon_arrow direction='left' />
                        <span>
                            Previous<span className='mobile-hidden'> project</span>
                        </span>
                    </button>
                    <button disabled={currentObject === lastObject} onClick={() => handleClick(1)} className='section-projects__switcher-button'>
                        <span>
                            Next<span className='mobile-hidden'> project</span>
                        </span>
                        <Icon_arrow direction='right' />
                    </button>
                </div>
            </div>
        </section>
    );
}
