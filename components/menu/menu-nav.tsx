import './menu.scss';

type NavItemProps = {
    index: number;
    name: string;
    href: string;
    soon: boolean;
};

const ITEMS = [
    { name: 'Home', href: '#', soon: false },
    { name: 'Alpha', href: '#', soon: true },
    { name: 'Eta', href: '#', soon: true },
    { name: 'Theta', href: '#', soon: true },
    { name: 'Order now', href: '#', soon: true },
    { name: 'Partnership', href: '#', soon: true },
];

function MenuNavItem({ index, name, href, soon }: NavItemProps) {
    return (
        <li className='menu__nav-item'>
            <small className='menu__nav-item-num'>{'0' + index}</small>
            <a href={href} className={soon ? 'menu__nav-item-text soon' : 'menu__nav-item-text'}>
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
