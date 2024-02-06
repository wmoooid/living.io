'use client';

import Lottie from 'lottie-react';
import lottieImage from '@/public/lottie/section-ownership__lottie.json';
import CTAButton from '@/components/cta-button/cta-button';
import './section-ownership.scss';

export default function SectionOwnership() {
    return (
        <section className='section-ownership'>
            <div className='container section-ownership__container'>
                <div className='section-ownership__wrapper'>
                    <div className='section-ownership__content-wrapper'>
                        <div className='section-ownership__topside'>
                            <div className='section-ownership__heading-wrapper'>
                                <small className='section-ownership__top-caption'>Real estate 3.0</small>
                                <h2 className='section-ownership__heading'>New formula for digital ownership</h2>
                            </div>
                            <div className='section-ownership__text-wrapper'>
                                <strong className='section-ownership__text-heading'>Virtual Real Estate by LVNG x Superworld Metaverse</strong>
                                <p className='section-ownership__text'>
                                    The LVNG project is a place where Web3 meets the real estate market. Start owning your future home in the
                                    metaverse in simple 3 steps:
                                </p>
                                <ol className='section-ownership__text-list'>
                                    <li className='section-ownership__text-item'>Buy your piece of land in Superworld metavers</li>
                                    <li className='section-ownership__text-item'>Place your home there - NFT LVNG collections are on Opensea</li>
                                    <li className='section-ownership__text-item'>Build it anytime you want - go to order now</li>
                                </ol>
                            </div>
                        </div>
                        <p className='section-ownership__text'>Join our community and stay up-to-date with the projects development.</p>
                        <CTAButton className='section-ownership__cta-button' text='Join' />
                    </div>
                    <div className='section-ownership__image-wrapper'>
                        <Lottie animationData={lottieImage} />
                    </div>
                </div>
            </div>
        </section>
    );
}
