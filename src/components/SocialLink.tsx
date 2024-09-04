"use-client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SocialLinkProps {
  iconUrl: string;
  link: string;
  altText?: string; // Optional alt text for accessibility
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  iconUrl,
  link,
  altText = "Social Icon",
  className = "",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`border-2 rounded-full w-[50px] h-[50px] flex items-center justify-center transition ease-in-out hover:border-blue-700 hover:bg-blue-700 ${className}`}
    >
      <motion.img
        src={iconUrl}
        alt={altText}
        width={25}
        height={25}
        whileHover={{ scale: 0.8 }}
        transition={{ delay: 0.02, ease: "easeInOut" }}
      />
    </a>
  );
};

export default SocialLink;
