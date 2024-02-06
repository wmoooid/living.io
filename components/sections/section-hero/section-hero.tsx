'use client';

import './section-hero.scss';
import Image from 'next/image';
import Icon_arrow from '../../icons/icon-arrow';
import SectionHeroHeading from './section-hero-heading';
import { useLenis } from '@studio-freight/react-lenis';
import CTAButton from '@/components/cta-button/cta-button';

export default function SectionHero() {
    const lenis = useLenis();

    return (
        <section className='section-hero'>
            <div className='container section-hero__container'>
                <div className='section-hero__text-container'>
                    <SectionHeroHeading />
                    <div className='section-hero__subheading-layout'>
                        <p className='section-hero__caption'>
                            LVNG is a new way of thinking about living, buying, and owning real estate, as well for renting purposes.
                        </p>
                        <CTAButton className='section-hero__order-button' text='Order now' />
                    </div>
                </div>
                <div className='section-hero__slider'>
                    <div className='section-hero__slider-wrapper'>
                        <Image src={'/img/hero-image.jpg'} alt={'LIVING'} fill={true} sizes='100vw' priority />
                    </div>
                    <span onClick={() => lenis.scrollTo('.section-whyus__container', { offset: -100 })} className='section-hero__slider-button'>
                        <Icon_arrow direction='bottom' />
                        <span>Learn more</span>
                    </span>
                </div>
            </div>
        </section>
    );
}
