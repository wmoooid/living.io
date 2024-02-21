import './menu.scss';
import { useContext } from 'react';
import { NavigationContext } from '../navigation/navigation';
import { useLenis } from '@studio-freight/react-lenis';

type NavItemProps = {
    index: number;
    name: string;
    href: string;
    soon: boolean;
};

const ITEMS_OLD = [
    { name: 'Home', href: '#', soon: false },
    { name: 'Alpha', href: '#', soon: true },
    { name: 'Eta', href: '#', soon: true },
    { name: 'Theta', href: '#', soon: true },
    { name: 'Order now', href: '#', soon: true },
    { name: 'Partnership', href: '#', soon: true },
];

const ITEMS = [
    { name: 'Why us', href: '#whyus', soon: false },
    { name: 'Projects', href: '#projects', soon: false },
    { name: 'Innovations', href: '#innovations', soon: false },
    { name: 'Process', href: '#process', soon: false },
    { name: 'Solutions', href: '#solutions', soon: false },
    { name: 'FAQ', href: '#faq', soon: false },
];

function MenuNavItem({ index, name, href, soon }: NavItemProps) {
    const lenis = useLenis();
    const { setIsMenuOpened } = useContext(NavigationContext);

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setIsMenuOpened(false);
        lenis.isStopped = false;
        lenis.scrollTo(href, { offset: 100 });
    };

    return (
        <li onClick={handleClick} className='menu__nav-item'>
            <small className='menu__nav-item-num'>{'0' + index}</small>
            <a href={href} tabIndex={soon ? -1 : 0} className={soon ? 'menu__nav-item-text soon' : 'menu__nav-item-text'}>
                {name}
            </a>
        </li>
    );
}

export default function MenuNav() {
    return (
        <nav className='menu__nav'>
            <menu className='menu__nav-list'>
                {ITEMS.map((el, i) => (
                    <MenuNavItem key={el.name + i} index={i + 1} name={el.name} href={el.href} soon={el.soon} />
                ))}
            </menu>
        </nav>
    );
}
