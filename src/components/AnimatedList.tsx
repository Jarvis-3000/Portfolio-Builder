"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedListProps {
  items: string[];
  delay?: number; // Optional delay between items
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  items,
  delay = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [items.length, delay]);

  return (
    <div className="flex flex-col text-white text-semibold h-[50px]">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: delay / 1000,
            repeat: Infinity,
          }}
          className="text-lg md:text-2xl lg:text-3xl font-semibold"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedList;
