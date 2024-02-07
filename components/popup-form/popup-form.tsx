'use client';

import './popup-form.scss';
import { useContext, useEffect, useRef } from 'react';
import { PopupContext } from './popup-context';

export default function PopupForm() {
    const { isPopupOpened, setIsPopupOpened } = useContext(PopupContext);
    const overlayRef = useRef(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (event.target === overlayRef.current) setIsPopupOpened(false);
    };

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsPopupOpened(false);
        };
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, []);

    return (
        <div onClick={handleClick} className={isPopupOpened ? 'popup-form active' : 'popup-form'} ref={overlayRef}>
            <div className='popup-form__wrapper'>
                <div className='popup-form__heading-wrapper'>
                    <h3 className='popup-form__heading'>Order now!</h3>
                    <p className='popup-form__text'>
                        We guarantee that we will manufacture, deliver and assemble your new home at the location of your choice, as long as the
                        necessary conditions for its construction are met. Please answer the following questions for verification.
                    </p>
                </div>
                <form className='popup-form__form'>
                    <label htmlFor='name' className='popup-form__label-top'>
                        Name and surname
                        <input className='popup-form__input' type='text' name='name' id='name' placeholder='John Doe' />
                    </label>
                    <label htmlFor='email' className='popup-form__label-top'>
                        Email* (THIS FIELD IS REQUIRED)
                        <input className='popup-form__input' type='email' name='email' id='email' placeholder='John@example.com' />
                    </label>
                    <label htmlFor='agree' className='popup-form__label-checkbox'>
                        <input className='popup-form__checkbox' type='checkbox' name='agree' id='agree' />
                        <div className='popup-form__checkbox-pseudo'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='0.75rem' viewBox='0 0 16 12' fill='none'>
                                <path d='M1 7L5 11L15 1' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                        </div>
                        <span className='popup-form__checkbox-text'>
                            *I consent to the processing of my personal data contained in this form and agree to the Privacy Policy in order to
                            receive an answer to my question.
                        </span>
                    </label>

                    <button className='popup-form__button'>Submit</button>
                </form>
            </div>
        </div>
    );
}
