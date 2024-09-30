"use-client";
import React from "react";
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
      className={`border-2 dark:border-white rounded-full group w-[50px] h-[50px] flex items-center justify-center transition ease-in-out hover:border-blue-700 dark:hover:border-blue-700 hover:bg-blue-700 ${className}`}
    >
      <Image
        src={iconUrl}
        alt={altText}
        width={25}
        height={25}
        className="group-hover:scale-90 transition duration-500"
      />
    </a>
  );
};

export default SocialLink;
