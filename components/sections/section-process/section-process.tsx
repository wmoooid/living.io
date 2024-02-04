import SectionProcessList from './section-process-list';
import './section-process.scss';

export default function SectionProcess() {
    return (
        <section className='section-process'>
            <div className='container section-process__container'>
                <div className='section-process__heading-wrapper'>
                    <small className='section-process__top-caption'>Process</small>
                    <h2 className='section-process__heading'>Move in three steps</h2>
                </div>
                <SectionProcessList />
                <a href='#' className='section-process__cta-button'>
                    Order now
                </a>
            </div>
        </section>
    );
}