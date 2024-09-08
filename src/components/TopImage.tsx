"use client";
import { motion } from "framer-motion";
import AnimatedList from "./AnimatedList";
import BigName from "./BigName";
import Image from "next/image";

const TopImage: React.FC = () => {
  const strings = [
    "FullStack Developer",
    "I love building amazing products.",
    "Let's build something amazing together!",
  ];

  return (
    <motion.div
      className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      <div className="absolute bottom-[100px] md:bottom-[200px] lg:bottom-[300px] left-6">
        <BigName name="Satish Gaud" className="mb-4" />
        <AnimatedList items={strings} delay={2000} />
      </div>
    </motion.div>
  );
};

export default TopImage;
