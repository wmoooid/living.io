import './section-projects.scss';
import Image from 'next/image';
import { objectData } from './section-projects';
import CTAButton from '@/components/cta-button/cta-button';

type ItemProps = {
    data: objectData;
};

type ListProps = {
    objectList: objectData[];
    currentObject: number;
};

function SectionProjectsItem({ data }: ItemProps) {
    return (
        <li className='section-projects__project'>
            <div className='section-projects__project-image'>
                <Image src={data.imageSrc} alt='Project' fill={true} sizes='(max-width: 768px) 100vw, (min-width: 768px) 70vw' />
            </div>
            <div className='section-projects__description-wrapper'>
                <div className='section-projects__description'>
                    <div className='section-projects__description-topside'>
                        <h3 className='section-projects__description-heading'>{data.name}</h3>
                        <p className='section-projects__description-text'>{data.description}</p>
                        <ul className='section-projects__params-list'>
                            {data.params.map((el, i) => (
                                <li key={i} className='section-projects__params-item'>
                                    <span className='section-projects__params-name'>{el.name}</span>
                                    <span className='section-projects__params-value'>{el.value}</span>
                                </li>
                            ))}
                        </ul>
                        <div className='section-projects__features-wrapper'>
                            <h5 className='section-projects__features-heading'>Key features:</h5>
                            <ol className='section-projects__features-list'>
                                {data.features.map((el, i) => (
                                    <li key={i} className='section-projects__features-item'>
                                        {el}
                                    </li>
                                ))}
                            </ol>
                            <div className='section-projects__pricing-wrapepr'>
                                <span className='section-projects__params-name'>Pricing start at:</span>
                                <span className='section-projects__params-value'>{data.price}</span>
                            </div>
                        </div>
                    </div>

                    <CTAButton className='section-projects__cta-button' text='Learn more' />
                </div>
            </div>
        </li>
    );
}

export default function SectionProjectsList({ objectList, currentObject }: ListProps) {
    return (
        <div className='section-projects__projects-wrapper'>
            <ul style={{ transform: `translateX(calc((-100% - 2rem) * ${currentObject}))` }} className='section-projects__projects-slider'>
                {objectList.map((el, i) => (
                    <SectionProjectsItem key={i} data={el} />
                ))}
            </ul>
        </div>
    );
}
