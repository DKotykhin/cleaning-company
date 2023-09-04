import React from 'react';

import TopBlock from './components/topBlock/TopBlock';
import Place from './components/place/Place';
import Industries from './components/industries/Industries';

import { industriesPageMetaData } from 'metadata/metadata';

export const metadata = industriesPageMetaData;

const IndustriesPage = () => {
    return (
        <>
            <TopBlock />
            <Place />
            <Industries />
        </>
    );
};

export default IndustriesPage;