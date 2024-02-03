import './menu.scss';

interface props {
    index: number;
    name: string;
    href: string;
}

const ITEMS = [
    { name: 'Home', href: '#' },
    { name: 'Alpha', href: '#' },
    { name: 'Eta', href: '#' },
    { name: 'Theta', href: '#' },
    { name: 'Order now', href: '#' },
    { name: 'Partnership', href: '#' },
];

function MenuNavItem({ index, name, href }: props) {
    return (
        <li className='menu__nav-item'>
            <small className='menu__nav-item-num'>{'0' + index}</small>
            <a href={href} className='menu__nav-item-text'>
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
                    <MenuNavItem index={i + 1} name={el.name} href={el.href} />
                ))}
            </menu>
        </nav>
    );
}
