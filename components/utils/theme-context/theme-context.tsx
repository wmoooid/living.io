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

const getPrefferedColorScheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const ThemeContext = createContext({} as ThemeContext);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(getPrefferedColorScheme());

    useEffect(() => {
        const docClassList = document.documentElement.classList;

        docClassList.remove('light', 'dark');
        if (currentTheme === 'light') docClassList.add('light');
        if (currentTheme === 'dark') docClassList.add('dark');
    }, [currentTheme]);

    return <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>{children}</ThemeContext.Provider>;
}
