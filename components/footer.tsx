import '@/styles/components/footer.scss';
import Icon_logo from './icons/icon-logo';
import Icon_socials from './icons/Icon-socials';

export default function Footer() {
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
                        <address className='footer__address'>LVNG P.S.A. ul. Chmielna 2/31 00-020 Warsaw POLAND </address>
                        <small className='footer__writeus'>
                            or write
                            <span className='footer__email'>contact@lvng.io</span>
                        </small>
                    </div>
                    <ul className='footer__socials-list'>
                        <li className='footer__socials-item'>
                            <Icon_socials icon='discord' />
                        </li>
                        <li className='footer__socials-item'>
                            <Icon_socials icon='medium' />
                        </li>
                        <li className='footer__socials-item'>
                            <Icon_socials icon='linkedin' />
                        </li>
                        <li className='footer__socials-item'>
                            <Icon_socials icon='telegram' />
                        </li>
                    </ul>
                </div>
                <div className='footer__navigation-wrapper'>
                    <small className='footer__navigation-subheading'>navigation</small>
                    <ul className='footer__navigation-list'>
                        <li className='footer__navigation-item'>Home</li>
                        <li className='footer__navigation-item'>Order</li>
                        <li className='footer__navigation-item'>Partnership</li>
                    </ul>
                </div>
                <div className='footer__projects-wrapper'>
                    <small className='footer__projects-subheading'>Projects</small>
                    <ul className='footer__projects-list'>
                        <li className='footer__projects-item'>Alpha</li>
                        <li className='footer__projects-item'>Eta</li>
                        <li className='footer__projects-item'>Theta</li>
                    </ul>
                </div>
                <div className='footer__copyright-wrapper'>
                    <small className='footer__copyright'>© 2023 LVNG S.A. / Sensonar sp. z o.o.</small>
                    <a href='#' className='footer__policy'>
                        Legal regulations
                    </a>
                </div>
            </div>
        </footer>
    );
}
