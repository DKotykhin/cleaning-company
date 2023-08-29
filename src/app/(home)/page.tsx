import React from 'react';

import { mainPageMetaData } from "metadata/metadata";

import TopBlock from './components/topBlock/TopBlock';
import Services from './components/services/Services';
import Values from './components/values/Values';
import Partners from './components/partners/Partners';
import Advantages from './components/advantages/Advantages';
import VideoPlayer from './components/videoPlayer/VideoPlayer';
import Feedback from './components/feedback/Feedback';
import ContactForm from './components/contactForm/ContactForm';

export const metadata = mainPageMetaData;

const HomePage = () => {
  return (
    <>
      <TopBlock />
      <Services />
      <Values />
      <Partners />
      <Advantages />
      <Feedback />
      <VideoPlayer />
      <ContactForm />
    </>
  );
};

export default HomePage;