'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

type props = {
    children: ReactNode;
};

function SmoothScrolling({ children }: props) {
    return (
        <ReactLenis class={'menu'} root options={{ lerp: 0.1, duration: 2, smoothTouch: false }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
