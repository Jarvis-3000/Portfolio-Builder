import Experience from "./Experience";
import experiences from "../../resources/experiences.json";

const Experiences: React.FC = () => {
  return (
    <section id="experience" className="w-full px-6 lg:px-20 text-slate-800 dark:text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">Experiences</h2>

      <div className="flex flex-col gap-4 max-w-xl mx-auto lg:max-w-full">
        {experiences.map((experience, index) => (
          <Experience
            key={experience.title}
            {...experience}
            classname={`${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
