type IconProps = {
    direction: 'top' | 'right' | 'left' | 'bottom' | 'diagonal';
};

export default function Icon_arrow({ direction }: IconProps) {
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
        case 'diagonal':
            return (
                <svg width='1rem' height='1rem' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12.055 4H4.71V4.445H11.746L4.5 11.685L4.815 12L12.055 4.766V11.784H12.5V4H12.055Z' fill='#1E1E1C' />
                </svg>
            );
    }

    return (
        <svg style={{ transform: rotate }} width='1rem' height='1rem' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14.5848 8.43311H2.58472' stroke='#1E1E1C' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M11.7579 5.60303L14.5879 8.43303L11.7579 11.263' stroke='#1E1E1C' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
