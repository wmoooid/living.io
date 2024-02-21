import CTAButton from '@/components/layout/cta-button/cta-button';
import SectionProcessList from './section-process-list';
import './section-process.scss';

export default function SectionProcess() {
    return (
        <section id='process' className='section-process'>
            <div className='container section-process__container'>
                <div className='section-process__heading-wrapper'>
                    <small className='section-process__top-caption'>Process</small>
                    <h2 className='section-process__heading'>Move in three steps</h2>
                </div>
                <SectionProcessList />
                <CTAButton className='section-process__cta-button' text='Order now' />
            </div>
        </section>
    );
}
