
interface ProjectViewProps {
  imageUrl: string;
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
  techStacks: string[];
  classname?: string;
}

const ProjectView: React.FC<ProjectViewProps> = (props) => {
  const {
    imageUrl,
    title,
    description,
    liveLink,
    codeLink,
    techStacks,
    classname = "",
  } = props;

  return (
    <div
      className={`w-full max-w-[1000px] mx-auto flex flex-col lg:flex-row p-2 gap-4 rounded-lg bg-white dark:bg-gray-600 ${classname}`}
    >
      <div className="lg:w-1/2 p-3">
        <div
          className="w-full h-[200px] sm:h-[250px] lg:min-h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
      </div>
      <div className="lg:w-1/2 flex-1 flex flex-col justify-between px-5 py-3">
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className=" text-gray-600 dark:text-gray-300 mb-5">
            {description}
          </p>
          {/* Technologies used in the project */}
          {techStacks.length > 0 && (
            <div className="mb-2">
              <ul className="flex flex-wrap gap-2 text-gray-600 dark:text-gray-300">
                {techStacks.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-sm font-semibold bg-gray-200 dark:text-black py-1 px-3 rounded-lg"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex gap-4 items-center mt-5">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            View Live
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
