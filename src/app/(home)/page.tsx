import React from 'react';

import { mainPageMetaData } from "metadata/metadata";
import TopBlock from './components/topBlock/TopBlock';
import Services from './components/services/Services';
import Values from './components/values/Values';

export const metadata = mainPageMetaData;

const HomePage = () => {
  return (
    <>
      <TopBlock />
      <Services />
      <Values />
    </>
  );
};

export default HomePage;