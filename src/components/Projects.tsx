import ProjectCard from './ProjectCard';
import projects from '../../resources/projects.json';

import { DashboardIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

const Projects = () => {
  return (
    <section
      id='projects'
      className='w-full text-slate-800 dark:text-white bg-gray-200 dark:bg-gray-500 rounded-b-[80px] lg:rounded-b-[150px]'
    >
      {/* Dummy element for bottom-rounded shape*/}
      <div className='w-full h-[80px] lg:h-[150px] rounded-b-full lg:rounded-b-full bg-white dark:bg-gray-700' />
      {/* Actual Content */}
      <div className='py-10 pb-20 px-6 lg:px-20'>
        <h2 className='flex group items-center justify-center gap-2 text-3xl font-semibold mb-6 text-center'>
          <DashboardIcon className='w-6 h-6' />
          Projects
        </h2>

        <div className='w-full flex justify-end items-center mb-2 sm:mb-5'>
          <a
            href={'https://github.com/jarvis-3000'}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-normal sm:text-xl text-blue-700 dark:text-white font-semibold hover:underline hover:underline-offset-2'
          >
            <GitHubLogoIcon /> See more...
          </a>
        </div>

        <div className='flex justify-center'>
          <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10'>
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
