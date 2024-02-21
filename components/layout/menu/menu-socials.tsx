import Icon_arrow from '../../icons/icon-arrow';
import './menu.scss';

type SocialItemProps = {
    name: string;
    // href: string;
};

const ITEMS = [
    { name: 'Discord', href: '#' },
    { name: 'Medium', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Telegram', href: '#' },
];

function MenuSocialsItem({ name }: SocialItemProps) {
    return (
        <li className='menu__socials-item'>
            <span className='menu__socials-item-text'>{name}</span>
            <span className='menu__socials-item-icon'>
                <Icon_arrow direction='diagonal' />
            </span>
        </li>
    );
}

export default function MenuSocials() {
    return (
        <div className='menu__socials-wrapper'>
            <small className='menu__socials-top-caption'>Socials</small>
            <ul className='menu__socials-list'>
                {ITEMS.map((el, i) => (
                    <MenuSocialsItem key={el.name + i} name={el.name} />
                ))}
            </ul>
        </div>
    );
}
