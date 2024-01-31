import SectionContact from '@/components/section-contact';
import SectionFaq from '@/components/section-faq';
import SectionHero from '@/components/section-hero';
import SectionInnovation from '@/components/section-innovation';
import SectionJoin from '@/components/section-join';
import SectionOwnership from '@/components/section-ownership';
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
            <SectionJoin />
            <SectionOwnership />
            <SectionFaq />
            <SectionContact />
        </>
    );
}
