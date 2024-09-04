// pages/index.tsx
import React from "react";
import SocialLink from "../components/SocialLink";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center gap-4 space-x-4 p-4 mb-10 ${className}`}>
      <SocialLink
        iconUrl="/github.svg"
        link="https://github.com/Jarvis-3000"
        altText="GitHub"
      />
      <SocialLink
        iconUrl="/linkedin.svg"
        link="https://www.linkedin.com/in/satish-gaud/"
        altText="LinkedIn"
      />
      <SocialLink
        iconUrl="/leetcode.svg"
        link="https://leetcode.com/u/jarvis3000/"
        altText="LeetCode"
      />
    </div>
  );
};

export default SocialLinks;
