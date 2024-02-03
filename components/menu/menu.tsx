import './menu.scss';
import { useLenis } from '@studio-freight/react-lenis';
import { useContext, useEffect } from 'react';
import { NavigationContext } from '../navigation/navigation';
import MenuNav from './menu-nav';
import MenuSocials from './menu-socials';

export default function Menu() {
    const { isMenuOpened } = useContext(NavigationContext);
    const lenis = useLenis();

    useEffect(() => {
        if (isMenuOpened) {
            lenis && (lenis.isStopped = true);
        } else {
            lenis && (lenis.isStopped = false);
        }
    }, [isMenuOpened]);

    return (
        <div className={isMenuOpened ? 'menu visible' : 'menu'}>
            <div className='container menu__container'>
                <MenuNav />
                <MenuSocials />
            </div>
        </div>
    );
}
