import '@/styles/components/section-quote.scss';

export default function SectionQuote() {
    return (
        <section className='section-quote'>
            <div className='container section-quote__container'>
                <div className='section-quote__top-line'>
                    <div className='section-quote__quote-icon'>
                        <svg width='49' height='49' viewBox='0 0 49 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M20.67 24.79C20.67 29.79 18.67 32.79 12.67 35.79M20.67 24.79H10.67C10.1395 24.79 9.63084 24.5793 9.25577 24.2043C8.8807 23.8292 8.66998 23.3205 8.66998 22.79V15.79C8.66998 15.2596 8.8807 14.7509 9.25577 14.3758C9.63084 14.0008 10.1395 13.79 10.67 13.79H18.67C19.2004 13.79 19.7091 14.0008 20.0842 14.3758C20.4593 14.7509 20.67 15.2596 20.67 15.79V24.79ZM40.67 24.79C40.67 29.79 38.67 32.79 32.67 35.79M40.67 24.79H30.67C30.1395 24.79 29.6308 24.5793 29.2558 24.2043C28.8807 23.8292 28.67 23.3205 28.67 22.79V15.79C28.67 15.2596 28.8807 14.7509 29.2558 14.3758C29.6308 14.0008 30.1395 13.79 30.67 13.79H38.67C39.2004 13.79 39.7091 14.0008 40.0842 14.3758C40.4593 14.7509 40.67 15.2596 40.67 15.79V24.79Z'
                                stroke='#1E1E1C'
                                strokeWidth='2'
                                strokeLinecap='round'
                            />
                        </svg>
                    </div>
                    <small className='section-quote__top-caption'>fulfil your dreams</small>
                </div>
                <ul className='section-quote__list'>
                    <li className='section-quote-item'>
                        <p className='section-quote-quote-text'>
                            LVNG are modular homes with modern architecture that enable living in the environment of your dreams. The experience of
                            designers and thoughtful solutions create a revolutionary housing concept.
                        </p>
                        <div className='section-quote__person'>
                            <img src='' alt='' className='section-quote__person-image' />
                            <div className='section-quote__person-text'>
                                <strong className='section-quote__person-name'>mgr inż. Witold Borek</strong>
                                <small className='section-quote__person-position'>
                                    Chief Technology Officer, <br /> founder of LVNG
                                </small>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
