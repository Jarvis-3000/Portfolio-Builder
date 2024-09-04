"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface BigNameInterface {
  name: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const BigName: React.FC<BigNameInterface> = ({
  name,
  size = "large",
  className = "",
}) => {
  const textSize = useMemo(() => {
    if (size === "large") {
      return "text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl";
    } else if (size === "medium") {
      return "text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl";
    } else {
      return "text-xl sm:text-3xl lg:text-4xl xl:text-6xl";
    }
  }, [size]);

  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className={`text-white ${textSize} font-extrabold ${className}`}
    >
      {name}
    </motion.h1>
  );
};

export default BigName;
