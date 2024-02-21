'use client';

import { useContext } from 'react';
import { PopupContext } from '../popup-form/popup-context';

type CTAButtonProps = {
    className: string;
    text: string;
};

export default function CTAButton({ className, text }: CTAButtonProps) {
    const { setIsPopupOpened } = useContext(PopupContext);

    return (
        <button onClick={() => setIsPopupOpened(true)} className={className}>
            {text}
        </button>
    );
}
