import Image from 'next/image';

const SKILLS = [
  {
    title: 'React',
    icon: 'react',
  },
  {
    title: 'Next.JS',
    icon: 'next',
  },
  {
    title: 'TypeScript',
    icon: 'typescript',
  },
  {
    title: 'JavaScript',
    icon: 'javascript',
  },
  {
    title: 'TailwindCSS',
    icon: 'tailwind',
  },
  {
    title: 'Redux',
    icon: 'redux',
  },
  {
    title: 'HTML',
    icon: 'html',
  },
  {
    title: 'CSS',
    icon: 'css',
  },
  {
    title: 'Node.JS',
    icon: 'node',
  },
  {
    title: 'Express.JS',
    icon: 'express',
  },
  {
    title: 'MongoDB',
    icon: 'mongodb',
  },
  {
    title: 'Open Source',
    icon: 'open-Source',
  },
  {
    title: 'Git',
    icon: 'git',
  },
  {
    title: 'Postman',
    icon: 'postman',
  },
  {
    title: 'Vercel',
    icon: 'vercel',
  },
  {
    title: 'Vite',
    icon: 'vite',
  },
  {
    title: 'Docker',
    icon: 'docker',
  },
  {
    title: 'REST API',
    icon: 'api',
  },
];

export const Skills = () => {
  return (
    <section id='skills' className='w-full px-6 lg:px-20'>
      <h2 className='flex group items-center justify-center gap-2 text-slate-800 dark:text-gray-50 text-4xl font-bold mb-8 text-center'>
        Skills
      </h2>
      <div className='max-w-[1200px] m-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5'>
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className={`bg-gray-200 dark:bg-gray-50 p-3 rounded-lg min-w-[100px] flex flex-col gap-3 items-center`}
          >
            <Image
              src={`/skills/${skill.icon}.svg`}
              height={100}
              width={100}
              alt={skill.title}
              className='h-10 w-10 flex-1'
            />
            <span className='text-sm text-center text-gray-900 font-semibold'>
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
