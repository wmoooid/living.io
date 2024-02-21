import './menu.scss';
import { useContext, useEffect } from 'react';
import { NavigationContext } from '../navigation/navigation';
import MenuNav from './menu-nav';
import MenuSocials from './menu-socials';
import { useLenis } from '@studio-freight/react-lenis';

export default function Menu() {
    const lenis = useLenis();
    const { isMenuOpened } = useContext(NavigationContext);

    useEffect(() => {
        if (isMenuOpened) {
            lenis && (lenis.isStopped = true);
        } else {
            lenis && (lenis.isStopped = false);
        }
    }, [isMenuOpened, lenis]);

    return (
        <div className={isMenuOpened ? 'menu visible' : 'menu'}>
            <div className='container menu__container'>
                <MenuNav />
                {/* <MenuSocials /> */}
            </div>
        </div>
    );
}
