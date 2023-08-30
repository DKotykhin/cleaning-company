import React from 'react';

import TopBlock from './components/topBlock/TopBlock';
import Services from 'app/(home)/components/services/Services';
import Experience from './components/experience/Experience';
import WhyUs from './components/whyUs/WhyUs';
import Partners from 'app/(home)/components/partners/Partners';

const AboutPage = () => {
    return (
        <>
            <TopBlock />
            <Services />
            <Experience />
            <WhyUs />
            <Partners />
        </>
    );
};

export default AboutPage;