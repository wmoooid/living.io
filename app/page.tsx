import SectionContact from '@/components/sections/section-contact';
import SectionFaq from '@/components/sections/section-faq';
import SectionHero from '@/components/sections/section-hero';
import SectionInnovation from '@/components/sections/section-innovation';
import SectionJoin from '@/components/sections/section-join';
import SectionOwnership from '@/components/sections/section-ownership';
import SectionProcess from '@/components/sections/section-process';
import SectionProjects from '@/components/sections/section-projects';
import SectionQuote from '@/components/sections/section-quote';
import SectionSolutions from '@/components/sections/section-solutions';
import SectionWhyus from '@/components/sections/section-whyus';

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
