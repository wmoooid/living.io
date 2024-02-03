import '@/components/sections/section-join/section-join.scss';
import Image from 'next/image';

export default function SectionJoin() {
    return (
        <section className='section-join'>
            <div className='container section-join__container'>
                <div className='section-join__image-wrapper'>
                    <Image src={'/img/join-image.jpg'} alt='Join us' fill={true} />
                </div>
                <div className='section-join__content-wrapper'>
                    <div className='section-join__heading-wrapper'>
                        <small className='section-join__top-caption'>PARTNERSHIP</small>
                        <h2 className='section-join__heading'>Join the housing revolution</h2>
                    </div>
                    <a href='#' className='section-join__cta-button'>
                        Become a partner
                    </a>
                </div>
            </div>
        </section>
    );
}
