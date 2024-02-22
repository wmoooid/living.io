import './header.scss';
import Icon_logo from '../../icons/icon-logo';
import Icon_menu from '../../icons/icon-menu';
import { useContext } from 'react';
import { NavigationContext } from '../navigation/navigation';
import dynamic from 'next/dynamic';

const HeaderLights = dynamic(() => import('./header-lights'), { ssr: false });

function HeaderLightsPlacehoder() {
    return <div style={{ width: '7.75rem', height: '1rem' }}></div>;
}

export default function Header() {
    const { isMenuOpened, setIsMenuOpened } = useContext(NavigationContext);

    const handleClickMenu = () => setIsMenuOpened((prev) => !prev);

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
                    <HeaderLights />
                </ul>
            </nav>
        </header>
    );
}
