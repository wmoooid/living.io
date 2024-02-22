import '@/components/sections/section-contact/section-contact.scss';
import Image from 'next/image';
import Icon_arrow from '../../icons/icon-arrow';

export default function SectionContact() {
    return (
        <section className='section-contact'>
            <div className='container section-contact__container'>
                <div className='section-contact__banner-wrapper'>
                    <Image src={'/img/contact-image.jpg'} alt='contact' fill={true} sizes='100vw' />
                    <div className='section-contact__heading-wrapper'>
                        <small className='section-contact__top-caption'>Contact</small>
                        <h2 className='section-contact__heading'>Get in touch</h2>
                    </div>
                </div>
                <ul className='section-contact__links-list'>
                    <li className='section-contact__links-item'>
                        <a href='https://t.me/lvnghome' className='section-contact__link'>
                            <span className='section-contact__link-text'>TELEGRAM</span>
                            <span className='section-contact__link-icon'>
                                <Icon_arrow direction='diagonal' />
                            </span>
                        </a>
                    </li>
                    <li className='section-contact__links-item'>
                        <a href='https://discord.com/invite/65B4TFfmNB' className='section-contact__link'>
                            <span className='section-contact__link-text'>Discord</span>
                            <span className='section-contact__link-icon'>
                                <Icon_arrow direction='diagonal' />
                            </span>
                        </a>
                    </li>
                    <li className='section-contact__links-item'>
                        <a href='https://www.linkedin.com/company/lvng-io/' className='section-contact__link'>
                            <span className='section-contact__link-text'>LinkedIn</span>
                            <span className='section-contact__link-icon'>
                                <Icon_arrow direction='diagonal' />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
