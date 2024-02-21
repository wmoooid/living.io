import './header.scss';
import Icon_logo from '../../icons/icon-logo';
import Icon_menu from '../../icons/icon-menu';
import Icon_lights from '../../icons/icon-lights';
import { useContext, useEffect } from 'react';
import { NavigationContext } from '../navigation/navigation';

export default function Header() {
    const { setIsMenuOpened } = useContext(NavigationContext);

    const handleClickMenu = () => setIsMenuOpened((prev) => !prev);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    }, []);

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
                    <li className='header__nav-item'>
                        <button onClick={handleClickMenu} className='header__nav-button'>
                            <span className='header__nav-text'>Menu</span>
                            <span className='header__nav-icon'>
                                <Icon_menu />
                            </span>
                        </button>
                    </li>
                    <li className='divider'></li>
                    <li className='header__nav-item'>
                        <button onClick={handleClickLight} className='header__nav-button'>
                            <span className='header__nav-text'>Lights off</span>
                            <span className='header__nav-icon'>
                                <Icon_lights theme='light' />
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
