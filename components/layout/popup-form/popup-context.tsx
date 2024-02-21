'use client';

import { createContext, useState } from 'react';

type PopupContextProviderProps = {
    children: React.ReactNode;
};

type PopupContext = {
    isPopupOpened: boolean;
    setIsPopupOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopupContext = createContext({} as PopupContext);

export default function PopupContextProvider({ children }: PopupContextProviderProps) {
    const [isPopupOpened, setIsPopupOpened] = useState(false);

    return <PopupContext.Provider value={{ isPopupOpened, setIsPopupOpened }}>{children}</PopupContext.Provider>;
}
