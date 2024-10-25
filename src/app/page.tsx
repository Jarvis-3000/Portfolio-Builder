import React from 'react';
import Header from '../components/Header';
import TopImage from '../components/TopImage';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Experiences from '@/src/components/Experiences';
import { ThemeToggler } from '@/src/components/ThemeToggler';
import { Skills } from '@/src/components/Skills';
import { IntroView } from '../components/IntroView';

const Portfolio: React.FC = () => {
  return (
    <div className='w-full h-full flex bg-white dark:bg-gray-700 flex-col'>
      <Header />
      <IntroView />
      <br />
      <Skills />
      <br />
      <Projects/>
      <br />
      <Experiences />
      <Footer />
      <ThemeToggler />
    </div>
  );
};

export default Portfolio;
