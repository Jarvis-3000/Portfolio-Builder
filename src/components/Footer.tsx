import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 p-4 pt-[100px] text-white text-center mt-8">
      <SocialLinks />
      <p>&copy; {new Date().getFullYear()} Satish Gaud. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
