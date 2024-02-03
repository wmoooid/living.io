import '@/styles/components/sections/section-whyus.scss';
import Image from 'next/image';
import Icon_arrow from '../icons/icon-arrow';

export default function SectionWhyus() {
    return (
        <section className='section-whyus'>
            <div className='container section-whyus__container'>
                <div className='section-whyus__banner'>
                    <div className='section-whyus__banner-image'>
                        <Image src={'/img/whyus-image.jpg'} alt='background' fill={true} />
                    </div>
                    <div className='section-whyus__banner-text'>
                        <small className='section-whyus__top-caption'>Why lvng?</small>
                        <h2 className='section-whyus__banner-heading'>Take a big step into the future of living</h2>
                    </div>
                </div>

                <div className='section-whyus__bullets-picker'>
                    <small className='section-whyus__bullets-caption'>What we offer</small>
                    <ul className='section-whyus__bullets-list'>
                        <li className='section-whyus__bullets-item'>
                            <span className='section-whyus__bullets-item-text'>Modern architecture & technology</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                        <li className='section-whyus__bullets-item'>
                            <span className='section-whyus__bullets-item-text'>Efficient layout design</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                        <li className='section-whyus__bullets-item'>
                            <span className='section-whyus__bullets-item-text'>Short implementation time</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                        <li className='section-whyus__bullets-item'>
                            <span className='section-whyus__bullets-item-text'>Years of guarantee</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='section-whyus__bullets-description'>
                    <h3 className='section-whyus__bullets-heading'>Modern architecture & technology</h3>
                    <p className='section-whyus__bullets-text'>
                        Thanks to its unique architecture based on modern technologies and elegant materials, the entire building gains an exceptional
                        character. The construction of the house ensures maximum stability and durability while maintaining excellent thermal
                        conditions, guaranteeing comfort all year round.
                    </p>
                </div>
            </div>
        </section>
    );
}