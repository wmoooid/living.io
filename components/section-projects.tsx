import '@/styles/components/section-projects.scss';
import Image from 'next/image';
import Icon_arrow from './icons/icon-arrow';

export default function SectionProjects() {
    return (
        <section className='section-projects'>
            <div className='container section-projects__container'>
                <h2 className='section-projects__heading'>Our projects</h2>
                <div className='section-projects__projects-wrapper'>
                    <div className='section-projects__project'>
                        <div className='section-projects__project-image'>
                            <Image src={'/img/project-image-1.jpg'} alt='Project Alpha' fill={true} />
                        </div>
                        <div className='section-projects__description-wrapper'>
                            <div className='section-projects__description'>
                                <div className='section-projects__description-topside'>
                                    <h3 className='section-projects__description-heading'>Alpha</h3>
                                    <p className='section-projects__description-text'>
                                        A house for everyone, breaking previous stereotypes. It comes in two versions, Alpha IV and Alpha VI - ideal
                                        for a family of 4 or 6.
                                    </p>
                                    <ul className='section-projects__params-list'>
                                        <li className='section-projects__params-item'>
                                            <span className='section-projects__params-name'>Construction area</span>
                                            <span className='section-projects__params-value'>70 m²</span>
                                        </li>
                                        <li className='section-projects__params-item'>
                                            <span className='section-projects__params-name'>Living area</span>
                                            <span className='section-projects__params-value'>84 m²</span>
                                        </li>
                                        <li className='section-projects__params-item'>
                                            <span className='section-projects__params-name'>Implementation time</span>
                                            <span className='section-projects__params-value'>99 days</span>
                                        </li>
                                    </ul>
                                    <div className='section-projects__features-wrapper'>
                                        <h5 className='section-projects__features-heading'>Key features:</h5>
                                        <ol className='section-projects__features-list'>
                                            <li className='section-projects__features-item'>Ideal for a family of 4 or 6</li>
                                            <li className='section-projects__features-item'>Anti-burglary facade and front door</li>
                                            <li className='section-projects__features-item'>Modern materials and technology</li>
                                            <li className='section-projects__features-item'>Guaranteed durability for years</li>
                                            <li className='section-projects__features-item'>Energy Net Zero</li>
                                            <li className='section-projects__features-item'>Ready to move into in 99 days</li>
                                        </ol>
                                        <div className='section-projects__pricing-wrapepr'>
                                            <span className='section-projects__params-name'>Pricing start at:</span>
                                            <span className='section-projects__params-value'>199 000 €</span>
                                        </div>
                                    </div>
                                </div>
                                <a href='#' className='section-projects__cta-button'>
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-projects__switcher'>
                    <div className='section-projects__switcher-button'>
                        <Icon_arrow direction='left' />
                        <span>
                            Previous<span className='mobile-hidden'> project</span>
                        </span>
                    </div>
                    <div className='section-projects__switcher-button'>
                        <span>
                            Next<span className='mobile-hidden'> project</span>
                        </span>
                        <Icon_arrow direction='right' />
                    </div>
                </div>
            </div>
        </section>
    );
}
