import Experience from './Experience';
import experiences from '../../resources/experiences.json';

const Experiences: React.FC = () => {
  return (
    <section
      id='experience'
      className='w-full px-6 lg:px-20 text-slate-800 dark:text-white bg-gray-200 dark:bg-gray-500 mt-20 pt-10 pb-20 rounded-t-[80px] lg:rounded-t-[150px]'
    >
      <h2 className='text-3xl font-semibold mb-10 text-center'>Experiences</h2>
      <div className='flex flex-col gap-4 max-w-xl mx-auto lg:max-w-full'>
        {experiences.map((experience, index) => (
          <Experience
            key={experience.title}
            {...experience}
            className={`${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
