export default function Icon_menu({ type }: { type: 'open' | 'close' }) {
    return (
        <div style={{ width: '1rem', height: '1rem', overflow: 'hidden' }}>
            <div
                style={{
                    transform: type === 'open' ? 'none' : 'translateY(-1rem)',
                    transition: 'transform 500ms var(--ease-back)',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <svg width='1rem' height='1rem' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect y='4.5' width='16' height='1' fill='#5B5B58' />
                    <rect y='7.5' width='16' height='1' fill='#5B5B58' />
                    <rect y='10.5' width='16' height='1' fill='#5B5B58' />
                </svg>
                <svg width='1rem' height='1rem' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M2.00001 2.75001L13.25 14L14 13.25L2.75001 2.00001L2.00001 2.75001Z' fill='#5B5B58' />
                    <path d='M2.75001 14L14 2.75L13.25 2L2.00001 13.25L2.75001 14Z' fill='#5B5B58' />
                </svg>
            </div>
        </div>
    );
}
