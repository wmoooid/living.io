import PopupForm from '@/components/layout/popup-form/popup-form';
import SectionContact from '@/components/sections/section-contact/section-contact';
import SectionFaq from '@/components/sections/section-faq/section-faq';
import SectionHero from '@/components/sections/section-hero/section-hero';
import SectionInnovation from '@/components/sections/section-innovation/section-innovation';
import SectionJoin from '@/components/sections/section-join/section-join';
import SectionOwnership from '@/components/sections/section-ownership/section-ownership';
import SectionProcess from '@/components/sections/section-process/section-process';
import SectionProjects from '@/components/sections/section-projects/section-projects';
import SectionQuote from '@/components/sections/section-quote/section-quote';
import SectionSolutions from '@/components/sections/section-solutions/section-solutions';
import SectionWhyus from '@/components/sections/section-whyus/section-whyus';

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
