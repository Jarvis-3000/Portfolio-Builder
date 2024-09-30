"use client";
import Image from "next/image";

const Introduction: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-10 px-4"
    >
      <div className="h-fit w-fit rounded-full p-10 border-[1px] border-gray-400">
        <div className="rounded-full p-5 border-[1px] border-gray-400">
          <div className="rounded-full h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] lg:h-[300px] lg:w-[300px] relative">
            <Image
              src="https://dqy38fnwh4fqs.cloudfront.net/UHBABAJPA7B9LBN2PMDBJRQLE9JN/hbabajpa7b9lbn2pmdbjrqle9jn-profile"
              fill
              alt="my image"
              sizes="100vw"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center max-w-[600px] text-center md:text-start text-black dark:text-white">
        <h2 className="text-3xl font-semibold mb-6 lg:mb-10">About Me</h2>
        <p className="lg:text-lg ">
          I am a passionate software developer with experience in React,
          Next.js, and TypeScript. I love building modern, responsive web
          applications with clean, efficient code.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
