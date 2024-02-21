import './section-innovation.scss';
import Icon_comfort from '../../icons/icon-comfort';
import Icon_quality from '../../icons/icon-quality';
import Icon_web3 from '../../icons/icon-web3';
import Icon_energy from '../../icons/icon-energy';
import Icon_marketplace from '../../icons/icon-marketplace';
import Icon_price from '../../icons/icon-price';

export default function SectionInnovation() {
    return (
        <section id='innovations' className='section-innovation'>
            <div className='container section-innovation__container'>
                <div className='section-innovation__header'>
                    <div className='section-innovation__heading-wrapper'>
                        <small className='section-innovation__top-caption'>WHAT ARE OUR DIFFERENTIATORS?</small>
                        <h2 className='section-innovation__heading'>Innovation on multiple levels</h2>
                    </div>
                    <p className='section-innovation__description-text'>
                        Our house has been designed with attention to every detail, both technically and visually.
                    </p>
                </div>
                <ul className='section-innovation__grid-list'>
                    <li className='section-innovation__grid-item'>
                        <div className='section-innovation__grid-icon'>
                            <Icon_comfort />
                        </div>
                        <div className='section-innovation__grid-description'>
                            <h3 className='section-innovation__description-heading'>Comfort & Space</h3>
                            <p className='section-innovation__description-text'>
                                Alpha house is an 84 m2 residential space with an optimal layout of rooms and modern design. The living room is
                                illuminated by a window with a height of 6.8 meters and 2.9x3.0 meters glass terrace doors.
                            </p>
                        </div>
                    </li>
                    <li className='section-innovation__grid-item'>
                        <div className='section-innovation__grid-icon'>
                            <Icon_quality />
                        </div>
                        <div className='section-innovation__grid-description'>
                            <h3 className='section-innovation__description-heading'>Quality & Craftsmanship</h3>
                            <p className='section-innovation__description-text'>
                                We only use high-quality and durable materials. Choose modern technology and proven solutions. The safety of
                                residents, children and adults, is our priority.
                            </p>
                        </div>
                    </li>
                    <li className='section-innovation__grid-item'>
                        <div className='section-innovation__grid-icon'>
                            <Icon_web3 />
                        </div>
                        <div className='section-innovation__grid-description'>
                            <h3 className='section-innovation__description-heading'>Web3 Ownership</h3>
                            <p className='section-innovation__description-text'>
                                Our products have a unique formula of ownership in digital form. By buying our home, you become the owner of a digital
                                ownership token that unequivocally identifies its owner.
                            </p>
                        </div>
                    </li>
                    <li className='section-innovation__grid-item'>
                        <div className='section-innovation__grid-icon'>
                            <Icon_energy />
                        </div>
                        <div className='section-innovation__grid-description'>
                            <h3 className='section-innovation__description-heading'>Energy Net Zero</h3>
                            <p className='section-innovation__description-text'>
                                Insulation, triple-pane windows, and photovoltaic panels ensure the balance of the buildings thermal balance. Green
                                energy produces up to 3.8 MWh of energy per year.
                            </p>
                        </div>
                    </li>
                    <li className='section-innovation__grid-item'>
                        <div className='section-innovation__grid-icon'>
                            <Icon_marketplace />
                        </div>
                        <div className='section-innovation__grid-description'>
                            <h3 className='section-innovation__description-heading'>Marketplace</h3>
                            <p className='section-innovation__description-text'>
                                Homes for turnkey living are a time and convenience saver. Together with our partners, you can design the interior,
                                garden irrigation, outsource the finishing work, or other outsourcing services.
                            </p>
                        </div>
                    </li>
                    <li className='section-innovation__grid-item'>
                        <div className='section-innovation__grid-icon'>
                            <Icon_price />
                        </div>
                        <div className='section-innovation__grid-description'>
                            <h3 className='section-innovation__description-heading'>Price</h3>
                            <p className='section-innovation__description-text'>
                                An all-year-round, modern, quickly available home upon request at a competitive price. Choose a home that is
                                characterized by speed of construction, as well as durability and quality even after many years.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
