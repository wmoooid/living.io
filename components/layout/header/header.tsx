import './header.scss';
import Icon_logo from '../../icons/icon-logo';
import Icon_menu from '../../icons/icon-menu';
import Icon_lights from '../../icons/icon-lights';
import { useContext } from 'react';
import { NavigationContext } from '../navigation/navigation';
import { ThemeContext } from '@/components/utils/theme-context/theme-context';

export default function Header() {
    const { isMenuOpened, setIsMenuOpened } = useContext(NavigationContext);
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

    const handleClickMenu = () => setIsMenuOpened((prev) => !prev);

    const handleClickLight = () => {
        currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light');
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
                                <Icon_menu type={isMenuOpened ? 'close' : 'open'} />
                            </span>
                        </button>
                    </li>
                    <li className='divider'></li>
                    <li className='header__nav-item'>
                        <button onClick={handleClickLight} className='header__nav-button'>
                            <span className='header__nav-text'>{currentTheme === 'dark' ? 'Lights on' : 'Lights off'}</span>
                            <span className='header__nav-icon'>
                                <Icon_lights type={currentTheme && currentTheme} />
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
