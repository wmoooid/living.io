'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

interface props {
    children: ReactNode;
}

function SmoothScrolling({ children }: props) {
    return (
        <ReactLenis class={'menu'} root options={{ lerp: 0.2, duration: 2, smoothTouch: true }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
