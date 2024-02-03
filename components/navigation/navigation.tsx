'use client';

import { createContext, useState } from 'react';
import Header from '../header/header';
import Menu from '../menu/menu';

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
