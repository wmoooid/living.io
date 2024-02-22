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

const getPreferredColorScheme = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    return 'light';
};

export const ThemeContext = createContext({} as ThemeContext);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(getPreferredColorScheme);

    useEffect(() => {
        const handleThemeChange = () => setCurrentTheme(getPreferredColorScheme());
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
        return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(currentTheme);
    }, [currentTheme]);

    return <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>{children}</ThemeContext.Provider>;
}
