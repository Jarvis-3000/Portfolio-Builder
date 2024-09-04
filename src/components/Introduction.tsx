"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Introduction: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="flex gap-10 max-w-[90%] mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="rounded-full p-10 border-[1px] border-gray-400">
        <div className="rounded-full p-5 border-[1px] border-gray-400">
          <div className="rounded-full h-[300px] w-[300px] relative">
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
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-6 lg:mb-10">About Me</h2>
        <p className="lg:text-lg ">
          Im a passionate software developer with experience in React, Next.js,
          and TypeScript. I love building modern, responsive web applications
          with clean, efficient code.
        </p>
      </div>
    </motion.section>
  );
};

export default Introduction;
