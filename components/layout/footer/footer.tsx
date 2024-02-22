'use client';

import './footer.scss';
import Icon_logo from '@/components/icons/icon-logo';
import Icon_socials from '@/components/icons/Icon-socials';
import { useLenis } from '@studio-freight/react-lenis';

type FooterNavItemProps = {
    name: string;
    href: string;
};

const ITEMS = [
    { name: 'Why us', href: '#whyus' },
    { name: 'Projects', href: '#projects' },
    { name: 'Innovations', href: '#innovations' },
    { name: 'Process', href: '#process' },
    { name: 'Solutions', href: '#solutions' },
    // { name: 'FAQ', href: '#faq' },
];

function FooterNavItem({ name, href }: FooterNavItemProps) {
    const lenis = useLenis();

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        lenis.scrollTo(href, { offset: 100 });
    };

    return (
        <li onClick={handleClick} className='footer__navigation-item'>
            <a href={href}>{name}</a>
        </li>
    );
}

export default function Footer() {
    const lenis = useLenis();

    return (
        <footer className='footer'>
            <div className='container footer__container'>
                <div className='footer__contacts-wrapper'>
                    <div className='footer__logo-wrapper'>
                        <div className='footer__logo'>
                            <Icon_logo />
                        </div>
                        <p className='footer__logo-text'>
                            LVNG is a new way of thinking about living, buying, and owning real estate, as well for renting purposes.
                        </p>
                    </div>
                    <small className='footer__contacts-subheading'>Contact</small>
                    <div className='footer__address-wrapper'>
                        <address className='footer__address'>LVNG P.S.A. ul. Chmielna 2/31 00-020 </address>
                        <small className='footer__writeus'>
                            or write
                            <a href='mailto:contact@lvng.io' className='footer__email'>
                                contact@lvng.io
                            </a>
                        </small>
                    </div>
                    <ul className='footer__socials-list'>
                        <li className='footer__socials-item'>
                            <a href='https://discord.gg/65B4TFfmNB'>
                                <Icon_socials icon='discord' />
                            </a>
                        </li>
                        <li className='footer__socials-item'>
                            <a href='https://medium.com/lvnghome'>
                                <Icon_socials icon='medium' />
                            </a>
                        </li>
                        <li className='footer__socials-item'>
                            <a href='https://linkedin.com/company/lvng-io'>
                                <Icon_socials icon='linkedin' />
                            </a>
                        </li>
                        <li className='footer__socials-item'>
                            <a href='https://t.me/lvnghome'>
                                <Icon_socials icon='telegram' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer__navigation-wrapper'>
                    <small className='footer__navigation-subheading'>navigation</small>
                    <ul className='footer__navigation-list'>
                        {ITEMS.map(({ name, href }, i) => (
                            <FooterNavItem key={i} name={name} href={href} />
                        ))}
                    </ul>
                </div>
                <div className='footer__projects-wrapper'>
                    <small className='footer__projects-subheading'>Projects</small>
                    <ul className='footer__projects-list'>
                        <li onClick={() => lenis.scrollTo('#projects', { offset: 100 })} className='footer__projects-item'>
                            Alpha
                        </li>
                        <li className='footer__projects-item soon'>Eta</li>
                        <li className='footer__projects-item soon'>Theta</li>
                    </ul>
                </div>
                <div className='footer__copyright-wrapper'>
                    <small className='footer__copyright'>© 2024</small>
                    {/* <a href='#' className='footer__policy'>
                        Legal regulations
                    </a> */}
                    <small className='footer__copyright'>LVNG S.A. / Sensonar sp. z o.o.</small>
                </div>
            </div>
        </footer>
    );
}
