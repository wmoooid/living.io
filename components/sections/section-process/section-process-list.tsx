'use client';

import Lottie from 'lottie-react';
import step1 from '@/public/lottie/section-process__step-1.json';
import step2 from '@/public/lottie/section-process__step-2.json';
import step3 from '@/public/lottie/section-process__step-3.json';
import './section-process.scss';

export default function SectionProcessList() {
    return (
        <ul className='section-process__grid-list'>
            <li className='section-process__grid-item'>
                <div className='section-process__grid-image'>
                    <Lottie animationData={step1} />
                </div>
                <div className='section-process__description-wrapper'>
                    <h4 className='section-process__description-heading'>Fill out the form</h4>
                    <p className='section-process__description-text'>
                        At the beginning, we will ask you for some basic information. With these, we will check that our requirements for project
                        implementation are met.
                    </p>
                </div>
            </li>
            <li className='section-process__grid-item'>
                <div className='section-process__grid-image'>
                    <Lottie animationData={step2} />
                </div>
                <div className='section-process__description-wrapper'>
                    <h4 className='section-process__description-heading'>Lets meet together</h4>
                    <p className='section-process__description-text'>
                        Meet us at Alpha House and see what you will receive in 99 days. During the meeting we will sign the contract and finalise the
                        transaction.
                    </p>
                </div>
            </li>
            <li className='section-process__grid-item'>
                <div className='section-process__grid-image'>
                    <Lottie animationData={step3} />
                </div>
                <div className='section-process__description-wrapper'>
                    <h4 className='section-process__description-heading'>Move in</h4>
                    <p className='section-process__description-text'>
                        In just 99 days you will be moving into your new home and enjoying comfort and quality in the best location available.
                    </p>
                </div>
            </li>
        </ul>
    );
}
