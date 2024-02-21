'use client';

import './section-faq.scss';
import Icon_accordion from '../../icons/icon-accordion';
import { useState } from 'react';

type ItemProps = {
    heading: string;
    text: string;
};

function SectionFaqItem({ heading, text }: ItemProps) {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <li onClick={() => setIsOpened((curr) => !curr)} className={isOpened ? 'section-faq__item active' : 'section-faq__item'}>
            <h3 className='section-faq__item-heading'>{heading}</h3>
            <span className='section-faq__item-button'>
                <Icon_accordion type={isOpened ? 'close' : 'open'} />
            </span>
            <div className='section-faq__spoiler-wrapper'>
                <p className='section-faq__item-text'>{text}</p>
            </div>
        </li>
    );
}

const LIST: ItemProps[] = [
    {
        heading: 'Can the house be modified?',
        text: 'No. Without losing the warranty, modifications are not allowed and any modifications made will void the warranty on our workmanship. The water, sewage, electrical, and insulation systems have been designed within the walls, and their physical damage during individual modifications is not covered by our warranty. Our goal is also to issue the project for each house as a proprietary digital token NFT. In case of physical modifications, the token will not be the metaverse digital twin of the actual house, which will result in further limitations.',
    },
    {
        heading: 'What is the standard equipment and what is included in the house price?',
        text: 'We focus on production, grounding, assembly, and connection to utilities, so the price always includes a technical project with the installation of the entire house in a closed developers state (without floors, white assembly, and without furniture and equipment).',
    },
    {
        heading: 'Do I need a building permit?',
        text: 'It depends on the location where you plan to build a house - this is a crucial factor to consider. It is important to note that we are not responsible for any legal or formal requirements prior to constructing a house. This means that its important to be aware of any laws and regulations that may apply to the specific area where you plan to build. Therefore, we highly recommend that you consult a legal counselor in advance to ensure that you are in compliance with all applicable laws and regulations. This will help ensure that your house is built in accordance with the applicable legal and formal requirements, and will save you time and money in the long run.',
    },
    {
        heading: 'Does the building site need to be equipped?',
        text: 'Yes, it should be equipped at the time of starting the assembly of the house on the construction plot. We do not require the presence of utilities when reserving for a given production batch, so if utilities are still not available at the time of signing the contract, we will proceed with conditional production. Regarding modern land development, we also have alternative solutions available that solve the problem of access to utilities.',
    },
    {
        heading: 'How much do I have to pay and when?',
        text: 'During the reservation process, we require a 1% down payment of the order value, which serves as a confirmation of a serious order to activate the entire production and assembly chain. To further ensure that the order is taken seriously and that the remaining 99% of the product value is paid, we require that the Sales Agreement is signed before execution of the production process. In order to make it easier for our customers to finance the purchase of real estate, our partners offer competitive loans and credits. To find out more about the companies that provide these services, we recommend joining our social media on Discord and keeping up with the latest updates.',
    },
];

export default function SectionFaqList() {
    return (
        <ul className='section-faq__list'>
            {LIST.map((el, i) => (
                <SectionFaqItem key={i} heading={el.heading} text={el.text} />
            ))}
        </ul>
    );
}
