'use client';

import './section-whyus.scss';
import Image from 'next/image';
import Icon_arrow from '../../icons/icon-arrow';
import { useState } from 'react';

export default function SectionWhyus() {
    const [currentBullet, setCurrentBullet] = useState(1);

    return (
        <section id='whyus' className='section-whyus'>
            <div className='container section-whyus__container'>
                <div className='section-whyus__banner'>
                    <div className='section-whyus__banner-image'>
                        <Image src={'/img/whyus-image.jpg'} alt='background' fill={true} sizes='75vw' priority />
                    </div>
                    <div className='section-whyus__banner-text'>
                        <small className='section-whyus__top-caption'>Why lvng?</small>
                        <h2 className='section-whyus__banner-heading'>Take a big step into the future of living</h2>
                    </div>
                </div>

                <div className='section-whyus__bullets-picker'>
                    <small className='section-whyus__bullets-caption'>What we offer</small>
                    <ul className='section-whyus__bullets-list'>
                        <li
                            onMouseEnter={() => setCurrentBullet(1)}
                            className={currentBullet === 1 ? 'section-whyus__bullets-item active' : 'section-whyus__bullets-item'}>
                            <span className='section-whyus__bullets-item-text'>Modern architecture & technology</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                        <li
                            onMouseEnter={() => setCurrentBullet(2)}
                            className={currentBullet === 2 ? 'section-whyus__bullets-item active' : 'section-whyus__bullets-item'}>
                            <span className='section-whyus__bullets-item-text'>Efficient layout design</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                        <li
                            onMouseEnter={() => setCurrentBullet(3)}
                            className={currentBullet === 3 ? 'section-whyus__bullets-item active' : 'section-whyus__bullets-item'}>
                            <span className='section-whyus__bullets-item-text'>Short implementation time</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                        <li
                            onMouseEnter={() => setCurrentBullet(4)}
                            className={currentBullet === 4 ? 'section-whyus__bullets-item active' : 'section-whyus__bullets-item'}>
                            <span className='section-whyus__bullets-item-text'>Years of guarantee</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='section-whyus__bullets-description'>
                    <div className={currentBullet === 1 ? 'section-whyus__bullets-slide active' : 'section-whyus__bullets-slide'}>
                        <h3 className='section-whyus__bullets-heading'>
                            Modern <br /> architecture & technology
                        </h3>
                        <p className='section-whyus__bullets-text'>
                            Thanks to its unique architecture based on modern technologies and elegant materials, the entire building gains an
                            exceptional character. The construction of the house ensures maximum stability and durability while maintaining excellent
                            thermal conditions, guaranteeing comfort all year round.
                        </p>
                    </div>

                    <div className={currentBullet === 2 ? 'section-whyus__bullets-slide active' : 'section-whyus__bullets-slide'}>
                        <h3 className='section-whyus__bullets-heading'>
                            Efficient <br /> layout design
                        </h3>
                        <p className='section-whyus__bullets-text'>
                            The house layout provides maximum efficiency for every square meter. It is equipped with three bedrooms, a closed office,
                            two bathrooms, a toilet, and a living room with a kitchenette that can provide comfort for up to 6 residents.
                        </p>
                    </div>

                    <div className={currentBullet === 3 ? 'section-whyus__bullets-slide active' : 'section-whyus__bullets-slide'}>
                        <h3 className='section-whyus__bullets-heading'>
                            Short <br /> implementation time
                        </h3>
                        <p className='section-whyus__bullets-text'>
                            Our houses can be built and delivered to the designated location within 99 days. This is up to modern prefabricated
                            assembly elements, optimized logistics chains, and assembly teams trained in installation taking couple of days.* * time
                            from the moment of delivery of all component parts and after preparation of the foundation
                        </p>
                    </div>

                    <div className={currentBullet === 4 ? 'section-whyus__bullets-slide active' : 'section-whyus__bullets-slide'}>
                        <h3 className='section-whyus__bullets-heading'>
                            Years <br /> of guarantee
                        </h3>
                        <p className='section-whyus__bullets-text'>
                            Thanks to cooperation with renowned technological partners, the house elements are covered by a guarantee that will
                            provide you and your family with safety and durability for years to come.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
