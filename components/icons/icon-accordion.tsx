type IconProps = {
    type: 'open' | 'close';
};

export default function Icon_accordion({ type }: IconProps) {
    return (
        <div style={{ width: '1.5rem', height: '1.5rem', overflow: 'hidden' }}>
            <div
                style={{
                    transform: type === 'close' ? 'rotate(45deg)' : 'none',
                    transition: 'transform 500ms var(--ease-back)',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <svg width='1.5rem' height='1.5rem' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='9' width='1' height='19' fill='#1E1E1C' />
                    <rect y='9' width='19' height='1' fill='#1E1E1C' />
                </svg>
            </div>
        </div>
    );
}
