import '@/styles/components/header.scss';
import Icon_logo from './icons/icon-logo';
import Icon_menu from './icons/icon-menu';
import Icon_lights from './icons/icon-lights';
import Divider from './divider';

export default function Header() {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <span className='header__logo'>
                    <Icon_logo />
                </span>
                <ul className='header__nav-list'>
                    {/* <li className='header__nav-item'>
                        <span className='header__nav-text'>Community</span>
                    </li>
                    <Divider /> */}
                    <li className='header__nav-item'>
                        <span className='header__nav-text'>Menu</span>
                        <span className='header__nav-icon'>
                            <Icon_menu />
                        </span>
                    </li>
                    <Divider />
                    <li className='header__nav-item'>
                        <span className='header__nav-text'>Lights off</span>
                        <span className='header__nav-icon'>
                            <Icon_lights />
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
