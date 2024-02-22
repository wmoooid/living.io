'use client';

import Menu from '@/components/layout/menu/menu';
import Header from '@/components/layout/header/header';
import { createContext, useState } from 'react';

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
