"use client";
import { motion } from "framer-motion";

interface HeaderProps {
  name?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  name = "Satish Gaud",
  className = "",
}) => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`absolute top-0 left-0 z-10 w-full bg-[rgba(0,0,0,0.3)] p-4 text-white shadow-md ${className}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">{name}</div>
        <ul className="flex space-x-4">
          <li
            className="cursor-pointer text-white font-semibold hover:text-blue-500"
            onClick={() => handleScroll("about")}
          >
            About
          </li>
          <li
            className="cursor-pointer text-white font-semibold hover:text-blue-500"
            onClick={() => handleScroll("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer text-white font-semibold hover:text-blue-500"
            onClick={() => handleScroll("experience")}
          >
            Experience
          </li>
          <li
            className="cursor-pointer text-white font-semibold hover:text-blue-500"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
