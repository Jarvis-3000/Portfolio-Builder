
const SKILLS = [
  "React",
  "Next.JS",
  "TypeScript",
  "React Native",
  "JavaScript",
  "TailwindCSS",
  "HTML",
  "CSS",
  "Git",
  "Postman",
  "Java",
  "Python",
];

const COLORS: string[] = [
  "#D57373",
  "#71C784",
  "#1115F6",
  "#FFD54F",
  "#BA68C8",
  "#FF8A65",
  "#4DB6AC",
  "#A1887F",
  "#7986CB",
  "#F06292",
  "#206292",
  "#F11112",
  "#111292",
  "#222222",
];

export const Skills = () => {
  const getRandomColor = () => {
    const random = Math.floor(Math.random() * COLORS.length);
    const randomColor = COLORS[random];

    return randomColor;
  };

  return (
    <section id="skills" className="w-full px-6 lg:px-20">
      <h2 className="flex group items-center justify-center gap-2 text-slate-800 dark:text-white text-3xl font-semibold mb-6 text-center">
        Skills
      </h2>
      <div className="max-w-[1000px] m-auto flex justify-center flex-wrap gap-4">
        {SKILLS.map((skill, index) => (
          <span
            key={index}
            className={`px-4 py-1 rounded-lg text-white`}
            style={{backgroundColor:getRandomColor()}}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
