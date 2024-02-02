'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

interface props {
    children: ReactNode;
}

function SmoothScrolling({ children }: props) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
