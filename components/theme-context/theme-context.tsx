'use client';

import { createContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type ThemeContext = {
    currentTheme: Theme;
    setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext({} as ThemeContext);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)')) setCurrentTheme('dark');
    }, []);

    useEffect(() => {
        const docClassList = document.documentElement.classList;

        docClassList.remove('light', 'dark');

        if (currentTheme === 'light') docClassList.add('light');
        if (currentTheme === 'dark') docClassList.add('dark');
    }, [currentTheme]);

    return <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>{children}</ThemeContext.Provider>;
}
