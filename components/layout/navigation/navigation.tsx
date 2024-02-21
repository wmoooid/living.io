'use client';

import Menu from '@/components/layout/menu/menu';
import dynamic from 'next/dynamic';
import { createContext, useState } from 'react';

const Header = dynamic(() => import('@/components/layout/header/header'));

interface NavigationContextProps {
    isMenuOpened: boolean;
    setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationContext = createContext({} as NavigationContextProps);

export default function Navigation() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <NavigationContext.Provider value={{ isMenuOpened, setIsMenuOpened }}>
            <Header />
            <Menu />
        </NavigationContext.Provider>
    );
}
