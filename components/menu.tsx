import '@/styles/components/menu.scss';
import Icon_arrow from './icons/icon-arrow';

export default function Menu() {
    return (
        <div className='menu'>
            <div className='container menu__container'>
                <nav className='menu__nav'>
                    <menu className='menu__nav-list'>
                        <li className='menu__nav-item'>
                            <small className='menu__nav-item-num'>01</small>
                            <a href='#' className='menu__nav-item-text'>
                                Home
                            </a>
                        </li>
                        <li className='menu__nav-item'>
                            <small className='menu__nav-item-num'>02</small>
                            <a href='#' className='menu__nav-item-text'>
                                Alpha
                            </a>
                        </li>
                        <li className='menu__nav-item'>
                            <small className='menu__nav-item-num'>03</small>
                            <a href='#' className='menu__nav-item-text'>
                                Eta
                            </a>
                        </li>
                        <li className='menu__nav-item'>
                            <small className='menu__nav-item-num'>04</small>
                            <a href='#' className='menu__nav-item-text'>
                                Theta
                            </a>
                        </li>
                        <li className='menu__nav-item'>
                            <small className='menu__nav-item-num'>05</small>
                            <a href='#' className='menu__nav-item-text'>
                                Order now
                            </a>
                        </li>
                        <li className='menu__nav-item'>
                            <small className='menu__nav-item-num'>06</small>
                            <a href='#' className='menu__nav-item-text'>
                                Partnership
                            </a>
                        </li>
                    </menu>
                </nav>
                <div className='menu__socials-wrapper'>
                    <small className='menu__socials-top-caption'>Socials</small>
                    <ul className='menu__socials-list'>
                        <li className='menu__socials-item'>
                            <span className='menu__socials-item-text'>Discord</span>
                            <span className='menu__socials-item-icon'>
                                <Icon_arrow direction='diagonal' />
                            </span>
                        </li>
                        <li className='menu__socials-item'>
                            <span className='menu__socials-item-text'>Medium</span>
                            <span className='menu__socials-item-icon'>
                                <Icon_arrow direction='diagonal' />
                            </span>
                        </li>
                        <li className='menu__socials-item'>
                            <span className='menu__socials-item-text'>LinkedIn</span>
                            <span className='menu__socials-item-icon'>
                                <Icon_arrow direction='diagonal' />
                            </span>
                        </li>
                        <li className='menu__socials-item'>
                            <span className='menu__socials-item-text'>Telegram</span>
                            <span className='menu__socials-item-icon'>
                                <Icon_arrow direction='diagonal' />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
