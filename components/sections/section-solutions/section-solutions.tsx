import './section-solutions.scss';
import SectionSolutionsList from './section-solutions-list';

export default function SectionSolutions() {
    return (
        <section id='solutions' className='section-solutions'>
            <div className='container section-solutions__container'>
                <div className='section-solutions__heading-wrapper'>
                    <small className='section-solutions__top-caption'>Technology & Partners</small>
                    <h2 className='section-solutions__heading'>Top quality solutions</h2>
                </div>
                <SectionSolutionsList />
            </div>
        </section>
    );
}
