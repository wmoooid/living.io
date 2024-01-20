import '@/styles/section-hero.css';

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
                        <a href='#' className='btn btn_underline'>
                            Order now
                        </a>
                    </div>
                </div>
                <div className='section-hero__slider'>
                    <div className='section-hero__slider-wrapper'>
                        <img src='section-hero__slider-image.webp' alt='LIVING' className='section-hero__slider-image' />
                    </div>
                    <a href='#' className='btn section-hero__slider-button'>
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}
