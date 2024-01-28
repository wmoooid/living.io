import SectionHero from '@/components/section-hero';
import SectionProjects from '@/components/section-projects';
import SectionQuote from '@/components/section-quote';
import SectionWhyus from '@/components/section-whyus';

export default function Home() {
    return (
        <>
            <SectionHero />
            <SectionQuote />
            <SectionWhyus />
            <SectionProjects />
        </>
    );
}
