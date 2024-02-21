'use client';

import './popup-form.scss';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { PopupContext } from './popup-context';
import { useLenis } from '@studio-freight/react-lenis';

export default function PopupWrapper() {
    const { isPopupOpened, setIsPopupOpened } = useContext(PopupContext);
    const lenis = useLenis();

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsPopupOpened(false);
        };
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [setIsPopupOpened]);

    useEffect(() => {
        lenis && (lenis.isStopped = isPopupOpened);
    }, [isPopupOpened, lenis]);

    return (
        <div className={isPopupOpened ? 'popup-form active' : 'popup-form'}>
            <div onClick={() => setIsPopupOpened(false)} className='popup-form__overlay'></div>
            <div className='popup-form__wrapper'>
                <button onClick={() => setIsPopupOpened(false)} className='popup-form__close-button'>
                    ×
                </button>
                <div className='popup-form__heading-wrapper'>
                    <h3 className='popup-form__heading'>Order now!</h3>
                    <p className='popup-form__text'>
                        We guarantee that we will manufacture, deliver and assemble your new home at the location of your choice, as long as the
                        necessary conditions for its construction are met. Please answer the following questions for verification.
                    </p>
                </div>
                <PopupForm />
            </div>
        </div>
    );
}

function PopupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const { setIsPopupOpened } = useContext(PopupContext);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.stopPropagation();
        setIsSending(true);

        setTimeout(() => {
            setName('');
            setEmail('');
            setConsent(false);
            setIsSending(false);

            setIsPopupOpened(false);
        }, 1000);
    }

    return (
        <form onSubmit={handleSubmit} className='popup-form__form'>
            <label htmlFor='name' className='popup-form__label-top'>
                Name
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='popup-form__input'
                    type='text'
                    name='name'
                    id='name'
                    placeholder='John Doe'
                />
            </label>
            <label htmlFor='email' className='popup-form__label-top'>
                Email* (REQUIRED)
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='popup-form__input'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='John@example.com'
                    required
                />
            </label>
            <label htmlFor='agree' className='popup-form__label-checkbox'>
                <input
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className='popup-form__checkbox'
                    type='checkbox'
                    name='agree'
                    id='agree'
                    required
                />
                <div className='popup-form__checkbox-pseudo'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='0.75rem' viewBox='0 0 16 12' fill='none'>
                        <path d='M1 7L5 11L15 1' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                </div>
                <span className='popup-form__checkbox-text'>
                    *I consent to the processing of my personal data contained in this form and agree to the Privacy Policy in order to receive an
                    answer to my question.
                </span>
            </label>

            <button disabled={!consent || isSending} className='popup-form__button'>
                Submit
            </button>
        </form>
    );
}
