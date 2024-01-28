export default function Icon_arrow({ direction = 'right' }) {
    let rotate;

    switch (direction) {
        case 'top':
            rotate = 'rotate(-90deg)';
            break;
        case 'right':
            rotate = 'rotate(0)';
            break;
        case 'left':
            rotate = 'rotate(180deg)';
            break;
        case 'bottom':
            rotate = 'rotate(90deg)';
            break;
    }

    return (
        <svg style={{ transform: rotate }} width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14.5848 8.43311H2.58472' stroke='#1E1E1C' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M11.7579 5.60303L14.5879 8.43303L11.7579 11.263' stroke='#1E1E1C' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
