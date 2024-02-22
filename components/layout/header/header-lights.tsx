import './header.scss';

import Icon_lights from '../../icons/icon-lights';
import { useContext } from 'react';
import { ThemeContext } from '@/components/utils/theme-context/theme-context';

export default function HeaderLights() {
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

    const handleClickLight = () => {
        currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light');
    };

    return (
        <li className='header__nav-item'>
            <button onClick={handleClickLight} className='header__nav-button'>
                <span className='header__nav-text'>{currentTheme === 'dark' ? 'Lights on' : 'Lights off'}</span>
                <span className='header__nav-icon'>
                    <Icon_lights type={currentTheme && currentTheme} />
                </span>
            </button>
        </li>
    );
}
