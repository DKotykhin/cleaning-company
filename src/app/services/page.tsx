import React from 'react';

import TopBlock from './components/topBlock/TopBlock';
import Explore from './components/explore/Explore';

import { servicesPageMetaData } from 'metadata/metadata';

export const metadata = servicesPageMetaData;

const ServicesPage = () => {
    return (
        <>
            <TopBlock />
            <Explore />
        </>
    );
};

export default ServicesPage;