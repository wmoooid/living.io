import '@/styles/components/sections/section-faq.scss';
import Icon_accordion from '../icons/icon-accordion';
import Image from 'next/image';

export default function SectionFaq() {
    return (
        <section className='section-faq'>
            <div className='container section-faq__container'>
                <div className='section-faq__heading-wrapper'>
                    <small className='section-faq__top-caption'>Faq</small>
                    <h2 className='section-faq__heading'>Frequently Asked Questions</h2>
                </div>
                <ul className='section-faq__list'>
                    <li className='section-faq__item'>
                        <h4 className='section-faq__item-heading'>Can the house be modified?</h4>
                        <span className='section-faq__item-button'>
                            <Icon_accordion />
                        </span>
                        <div className='section-faq__spoiler-wrapper'>
                            <p className='section-faq__item-text'></p>
                        </div>
                    </li>
                    <li className='section-faq__item'>
                        <h4 className='section-faq__item-heading'>What is the standard equipment and what is included in the house price?</h4>
                        <span className='section-faq__item-button'>
                            <Icon_accordion />
                        </span>
                        <div className='section-faq__spoiler-wrapper'>
                            <p className='section-faq__item-text'></p>
                        </div>
                    </li>
                    <li className='section-faq__item'>
                        <h4 className='section-faq__item-heading'>How does the complete construction process work?</h4>
                        <span className='section-faq__item-button'>
                            <Icon_accordion />
                        </span>
                        <div className='section-faq__spoiler-wrapper'>
                            <p className='section-faq__item-text'></p>
                        </div>
                    </li>
                    <li className='section-faq__item'>
                        <h4 className='section-faq__item-heading'>Do I need a building permit?</h4>
                        <span className='section-faq__item-button'>
                            <Icon_accordion />
                        </span>
                        <div className='section-faq__spoiler-wrapper'>
                            <p className='section-faq__item-text'></p>
                        </div>
                    </li>
                    <li className='section-faq__item'>
                        <h4 className='section-faq__item-heading'>Does the building site need to be equipped?</h4>
                        <span className='section-faq__item-button'>
                            <Icon_accordion />
                        </span>
                        <div className='section-faq__spoiler-wrapper'>
                            <p className='section-faq__item-text'></p>
                        </div>
                    </li>
                    <li className='section-faq__item'>
                        <h4 className='section-faq__item-heading'>How much do I have to pay and when?</h4>
                        <span className='section-faq__item-button'>
                            <Icon_accordion />
                        </span>
                        <div className='section-faq__spoiler-wrapper'>
                            <p className='section-faq__item-text'></p>
                        </div>
                    </li>
                </ul>
                <div className='section-faq__image-wrapper'>
                    <Image src={'/img/faq-image.jpg'} alt='faq' fill={true} />
                </div>
            </div>
        </section>
    );
}
