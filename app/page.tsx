import SectionHero from '@/components/section-hero';
import SectionInnovation from '@/components/section-innovation';
import SectionProcess from '@/components/section-process';
import SectionProjects from '@/components/section-projects';
import SectionQuote from '@/components/section-quote';
import SectionSolutions from '@/components/section-solutions';
import SectionWhyus from '@/components/section-whyus';

export default function Home() {
    return (
        <>
            <SectionHero />
            <SectionQuote />
            <SectionWhyus />
            <SectionProjects />
            <SectionInnovation />
            <SectionProcess />
            <SectionSolutions />
        </>
    );
}
