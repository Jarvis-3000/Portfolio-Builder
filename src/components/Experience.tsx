'use-client';
import Image from 'next/image';
interface ExperienceProps {
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
  techStacks?: string[];
  className?: string;
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const {
    imageUrl,
    title,
    description,
    link,
    techStacks = [],
    className = '',
  } = props;

  return (
    <div
      className={`w-full max-w-[1000px] mx-auto  flex flex-col lg:flex-row p-2 gap-4 rounded-lg bg-white dark:bg-gray-600 ${className}`}
    >
      <div className='flex-1 min-h-[150px] sm:min-h-[200px] lg:min-h-[300px] relative'>
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes='100vw'
          className='rounded-lg object-contain'
        />
      </div>

      <div className='lg:w-1/2  flex-1 flex flex-col justify-between px-5 py-3'>
        <div>
          <h3 className='text-2xl font-semibold mb-3 text-gray-800 dark:text-white'>
            {title}
          </h3>
          <p className=' text-gray-600 dark:text-gray-300 mb-3'>
            {description}
          </p>
          {/* Technologies used in the project */}
          {techStacks.length > 0 && (
            <div className='mb-2'>
              <ul className='flex flex-wrap gap-2 text-gray-600 dark:text-gray-300'>
                {techStacks.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className='text-sm font-semibold bg-gray-200 dark:text-black py-1 px-3 rounded-lg'
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className='flex gap-4 items-center mt-5'>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition'
          >
            View Company
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
