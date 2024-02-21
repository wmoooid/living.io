import './menu.scss';
import { useContext, useEffect } from 'react';
import { NavigationContext } from '../navigation/navigation';
import MenuNav from './menu-nav';
import MenuSocials from './menu-socials';

export default function Menu() {
    const { isMenuOpened } = useContext(NavigationContext);

    return (
        <div className={isMenuOpened ? 'menu visible' : 'menu'}>
            <div className='container menu__container'>
                <MenuNav />
                <MenuSocials />
            </div>
        </div>
    );
}
