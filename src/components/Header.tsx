'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeaderProps {
  name?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  name = 'Satish Gaud',
  className = '',
}) => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`absolute top-0 left-0 z-10 w-full p-5 sm:p-10 text-gray-800 dark:text-white ${className}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <nav className='flex justify-between items-center'>
        <div className='text-lg font-bold flex items-center gap-3'>
          <Image
            src='/logo.png'
            height={64}
            width={64}
            alt='logo'
            className='w-10 h-10'
          />
          <h1 title='Satish Gaud Portfolio Title' className='text-xl sm:text-3xl'>{name}</h1>
        </div>
        <ul className='hidden sm:flex space-x-4 sm:text-lg '>
          <li
            className='cursor-pointer font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4 transition-all duration-100'
            onClick={() => handleScroll('projects')}
          >
            Projects
          </li>
          <li
            className='cursor-pointer font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4 transition-all duration-100'
            onClick={() => handleScroll('experience')}
          >
            Experience
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
