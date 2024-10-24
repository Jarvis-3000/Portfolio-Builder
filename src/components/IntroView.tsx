'use client';

import { ArrowDown, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export const IntroView = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='py-[50px] w-full min-h-[85vh] sm:min-h-[95vh] flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-500 rounded-b-[80px] lg:rounded-b-[150px] border-b border-gray-300'>
      {/* Image */}
      <div className='h-fit w-fit rounded-full p-10 border-[1px] border-gray-300 mb-5'>
        <div className='rounded-full p-5 border-[1px] border-gray-400'>
          <div className='rounded-full h-[180px] w-[180px] lg:h-[200px] lg:w-[200px] relative'>
            <Image
              src='https://dqy38fnwh4fqs.cloudfront.net/UHBABAJPA7B9LBN2PMDBJRQLE9JN/hbabajpa7b9lbn2pmdbjrqle9jn-profile'
              fill
              alt='my image'
              sizes='100vw'
              className='rounded-full'
            />
          </div>
        </div>
      </div>
      {/* Info */}
      <div className='max-w-[90%] text-3xl sm:text-4xl lg:text-[56px] font-bold text-center text-slate-800 dark:text-gray-50'>
        <p className='mb-1 sm:mb-2 lg:mb-8'>
          Developer by{' '}
          <strong className='text-red-500 dark:text-red-200 ml-2'>Heart</strong>
        </p>
        <p>
          Programmer by{' '}
          <strong className='text-red-500 dark:text-red-200 ml-2'>Mind</strong>
        </p>
      </div>
      {/* Latets projects github */}

      <button
        onClick={scrollToProjects}
        className='mt-[50px] sm:mt-[80px] flex items-center gap-2 bg-gray-800 dark:bg-gray-50 font-bold text-white dark:text-gray-800 rounded-full py-5 px-8'
      >
        See Projects <ArrowDown />
      </button>
    </div>
  );
};
