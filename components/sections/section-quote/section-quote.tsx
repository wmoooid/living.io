import '@/components/sections/section-quote/section-quote.scss';
import Icon_quote from '../../icons/icon-quote';
import Image from 'next/image';

export default function SectionQuote() {
    return (
        <section className='section-quote'>
            <div className='container section-quote__container'>
                <div className='section-quote__top-line'>
                    <div className='section-quote__quote-icon'>
                        <Icon_quote />
                    </div>
                    <small className='section-quote__top-caption'>fulfil your dreams</small>
                </div>
                <ul className='section-quote__list'>
                    <li className='section-quote-item'>
                        <q className='section-quote-quote-text'>
                            LVNG are modular homes with modern architecture that enable living in the environment of your dreams. The experience of
                            designers and thoughtful solutions create a revolutionary housing concept.
                        </q>
                        <div className='section-quote__person'>
                            <div className='section-quote__person-image'>
                                <Image
                                    src={'/img/quote-avatar-1.jpg'}
                                    alt={'Witold Borek'}
                                    fill={true}
                                    sizes='(max-width: 768px) 200px, (max-width: 1200px) 400px'
                                />
                            </div>
                            <div className='section-quote__person-text'>
                                <strong className='section-quote__person-name'>Witold Borek</strong>
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
