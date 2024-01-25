import '@/styles/components/section-hero.scss';
import Image from 'next/image';

export default function SectionHero() {
    return (
        <section className='section-hero'>
            <div className='container section-hero__container'>
                <div className='section-hero__text-container'>
                    <h1 className='section-hero__heading'>The future of home living</h1>
                    <div className='section-hero__subheading-layout'>
                        <p className='section-hero__caption'>
                            LVNG is a new way of thinking about living, buying, and owning real estate, as well for renting purposes.
                        </p>
                        <a href='#' className='section-hero__order-button'>
                            Order now
                        </a>
                    </div>
                </div>
                <div className='section-hero__slider'>
                    <div className='section-hero__slider-wrapper'>
                        <Image src={'/img/hero-image.jpg'} alt={'LIVING'} fill={true} />
                    </div>
                    <a href='#' className='section-hero__slider-button'>
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}
