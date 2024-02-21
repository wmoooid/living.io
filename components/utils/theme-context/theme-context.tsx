'use client';

import { createContext, useLayoutEffect, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | null;

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type ThemeContext = {
    currentTheme: Theme;
    setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext({} as ThemeContext);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(null);

    useLayoutEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setCurrentTheme('dark');
        } else {
            setCurrentTheme('light');
        }
    }, []);

    useLayoutEffect(() => {
        const docClassList = document.documentElement.classList;

        docClassList.remove('light', 'dark');
        if (currentTheme === 'light') docClassList.add('light');
        if (currentTheme === 'dark') docClassList.add('dark');
    }, [currentTheme]);

    return <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>{children}</ThemeContext.Provider>;
}
