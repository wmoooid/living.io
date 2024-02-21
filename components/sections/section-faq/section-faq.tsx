import './section-faq.scss';
import Image from 'next/image';
import SectionFaqList from './section-faq-list';

export default function SectionFaq() {
    return (
        <section id='faq' className='section-faq'>
            <div className='container section-faq__container'>
                <div className='section-faq__heading-wrapper'>
                    <small className='section-faq__top-caption'>Faq</small>
                    <h2 className='section-faq__heading'>Frequently Asked Questions</h2>
                </div>
                <SectionFaqList />
                <div className='section-faq__image-wrapper'>
                    <Image src={'/img/faq-image.jpg'} alt='faq' fill={true} sizes='30vw' />
                </div>
            </div>
        </section>
    );
}
