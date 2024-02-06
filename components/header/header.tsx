import './header.scss';
import Icon_logo from '../icons/icon-logo';
import Icon_menu from '../icons/icon-menu';
import Icon_lights from '../icons/icon-lights';
import Divider from '../divider/divider';
import { useContext } from 'react';
import { NavigationContext } from '../navigation/navigation';
import { useLenis } from '@studio-freight/react-lenis';

export default function Header() {
    const { isMenuOpened, setIsMenuOpened } = useContext(NavigationContext);
    const lenis = useLenis();

    const handleClickMenu = () => {
        if (isMenuOpened) {
            setIsMenuOpened(false);
            lenis && (lenis.isStopped = false);
        } else {
            setIsMenuOpened(true);
            lenis && (lenis.isStopped = true);
        }
    };

    const handleClickLight = () => {
        const documentClass = document.documentElement.classList;

        if (documentClass.contains('dark')) {
            documentClass.remove('dark');
            documentClass.add('light');
        } else {
            documentClass.remove('light');
            documentClass.add('dark');
        }
    };

    return (
        <header className='header'>
            <nav className='header__nav'>
                <span className='header__logo'>
                    <Icon_logo />
                </span>
                <ul className='header__nav-list'>
                    <li className='header__nav-item' onClick={handleClickMenu}>
                        <span className='header__nav-text'>Menu</span>
                        <span className='header__nav-icon'>
                            <Icon_menu />
                        </span>
                    </li>
                    <Divider />
                    <li className='header__nav-item' onClick={handleClickLight}>
                        <span className='header__nav-text'>Lights off</span>
                        <span className='header__nav-icon'>
                            <Icon_lights theme='light' />
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
