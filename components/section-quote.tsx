import '@/styles/components/section-quote.scss';
import Icon_quote from './icons/Icon_quote';

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
