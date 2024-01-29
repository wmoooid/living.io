import '@/styles/components/section-solutions.scss';
import Icon_accordion from './icons/icon-accordion';

export default function SectionSolutions() {
    return (
        <section className='section-solutions'>
            <div className='container section-solutions__container'>
                <div className='section-solutions__heading-wrapper'>
                    <small className='section-solutions__top-caption'>Technology & Partners</small>
                    <h2 className='section-solutions__heading'>Top quality solutions</h2>
                </div>
                <ul className='section-solutions__list'>
                    <li className='section-solutions__item'>
                        <small className='section-solutions__item-caption'>ML System</small>
                        <h3 className='section-solutions__item-heading'>Ventilated photovoltaic façade</h3>
                        <span className='section-solutions__item-button'>
                            <Icon_accordion />
                        </span>
                    </li>
                    <li className='section-solutions__item'>
                        <small className='section-solutions__item-caption'>Metra</small>
                        <h3 className='section-solutions__item-heading'>Aluminum and Italian design</h3>
                        <span className='section-solutions__item-button'>
                            <Icon_accordion />
                        </span>
                    </li>
                    <li className='section-solutions__item'>
                        <small className='section-solutions__item-caption'>Euroglas</small>
                        <h3 className='section-solutions__item-heading'>World glass solutions</h3>
                        <span className='section-solutions__item-button'>
                            <Icon_accordion />
                        </span>
                    </li>
                    <li className='section-solutions__item'>
                        <small className='section-solutions__item-caption'>Ruukki</small>
                        <h3 className='section-solutions__item-heading'>Lightweight wall systems</h3>
                        <span className='section-solutions__item-button'>
                            <Icon_accordion />
                        </span>
                    </li>
                    <li className='section-solutions__item'>
                        <small className='section-solutions__item-caption'>SuperWorld</small>
                        <h3 className='section-solutions__item-heading'>Real Estate Metaverse Market</h3>
                        <span className='section-solutions__item-button'>
                            <Icon_accordion />
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
